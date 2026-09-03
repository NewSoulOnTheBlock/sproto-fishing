// Multiplayer Agent client — the real-time half of the shared world.
//
// world.js already polls the Render API for a global online count and the daily
// hot spot. That is fine for a number in a badge but far too slow to show a
// person: presence heartbeats every 30s, world snapshot every 60s. This module
// opens a WebSocket room per fishing spot so you can actually SEE the anglers
// beside you, live.
//
// Design rules, in priority order:
//   1. It must never break the game. Every entry point is guarded; if the SDK
//      fails to load, the socket drops, or the room is full, the game carries on
//      exactly as it did before and simply shows nobody.
//   2. It is presence only. Nothing here writes money, XP, catches or bans.
//   3. It is quiet. We publish at PUBLISH_HZ and only when something changed.

import { S, events } from "../state/gameState.js";
import {
  MP_KEY, MP_ENDPOINT, MP_API, MP_SDK_URL, MP_ROOMS,
  PUBLISH_HZ, YAW_EPSILON, PEER_STALE_MS,
} from "./mpConfig.js";

let sdk = null;          // the global MP namespace, once loaded
let mp = null;           // live room handle
let identity = null;     // anonymous durable player (for a stable name later)
let joinToken = 0;       // invalidates in-flight joins when the player travels
let currentRoom = null;
let connecting = false;
let disabled = false;    // set true after a hard failure; we stop retrying

const peers = new Map(); // sessionId -> { name, char, yaw, st, bx, bz, lvl, rt, rl, seen }
let lastPublish = 0;
let sent = {};           // last values we actually transmitted

export function mpAvailable() { return !!mp && !disabled; }
export function mpRoom() { return currentRoom; }
export function mpSessionId() { return mp?.sessionId || null; }

/** Everyone else in this room, freshest first. Never includes you. */
export function mpPeers() {
  const now = Date.now();
  const out = [];
  for (const [id, p] of peers) {
    if (now - p.seen > PEER_STALE_MS) continue;
    out.push({ id, ...p });
  }
  return out;
}

/** How many anglers are at THIS spot right now, including you. */
export function mpHereCount() {
  return mp ? mpPeers().length + 1 : 0;
}

// ---------------------------------------------------------------- sdk loading
function loadSdk() {
  if (sdk) return Promise.resolve(sdk);
  if (typeof window !== "undefined" && window.MP) { sdk = window.MP; return Promise.resolve(sdk); }
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = MP_SDK_URL;
    el.async = true;
    el.onload = () => { sdk = window.MP || null; sdk ? resolve(sdk) : reject(new Error("MP global missing")); };
    el.onerror = () => reject(new Error("multiplayer sdk failed to load"));
    document.head.appendChild(el);
  });
}

// ------------------------------------------------------------------ join/leave
/**
 * Move to the room for `locId`. Safe to call on every travel, including with the
 * room we are already in (no-op). Connects lazily on the first real call, so the
 * title screen never opens a socket.
 */
export async function mpSetLocation(locId) {
  if (disabled) return;
  if (!locId || !MP_ROOMS.includes(locId)) return;   // unknown spot: stay offline
  if (currentRoom === locId && mp) return;

  const token = ++joinToken;
  connecting = true;
  try {
    if (!sdk) await loadSdk();
    if (token !== joinToken) return;                 // travelled again mid-load

    if (!identity) {
      try {
        identity = sdk.auth({ key: MP_KEY, apiUrl: MP_API });
        await identity.getPlayer();
      } catch { identity = null; }                   // anonymous is optional
      if (token !== joinToken) return;
    }

    if (mp) { const old = mp; mp = null; try { await old.leave(); } catch {} }
    peers.clear();
    emitPeers();
    if (token !== joinToken) return;

    const room = await sdk.join({
      key: MP_KEY, room: locId,
      endpoint: MP_ENDPOINT, apiUrl: MP_API,
      player: identity || undefined,
    });
    if (token !== joinToken) { try { await room.leave(); } catch {} return; }

    mp = room;
    currentRoom = locId;
    wire(room);
    sent = {};
    publishNow(true);
    events.emit("mp:here", mpHereCount());
    // Voice chat signals over this same room, so hand it the new handle.
    events.emit("mp:room", room);
  } catch (e) {
    // A full room, a blocked socket or a missing CDN all land here. The game is
    // unaffected; we just never show anyone.
    console.warn("[mp] shared world unavailable:", e?.message || e);
    if (String(e?.message || "").includes("sdk failed")) disabled = true;
    mp = null;
    currentRoom = null;
  } finally {
    connecting = false;
  }
}

function wire(room) {
  room.onState((st) => {
    const list = st?.entities?.players || {};
    const now = Date.now();
    const live = new Set();
    for (const id in list) {
      if (id === room.sessionId) continue;
      live.add(id);
      const src = list[id];
      const prev = peers.get(id);
      const next = {
        name: src.name || "Angler",
        char: src.char || "",
        yaw: +src.yaw || 0,
        st: src.st || "idle",
        bx: +src.bx || 0,
        bz: +src.bz || 0,
        lvl: +src.lvl || 1,
        // equipped rod/reel tier (0-18, indexes GEAR.rods/reels — see
        // gearLooks.js). Cheap: two small ints reconstruct the whole cosmetic
        // look deterministically on the receiving end via rodLook()/reelLook(),
        // so we never need to ship colour/shape data itself.
        rt: +src.rt || 0,
        rl: +src.rl || 0,
        seen: now,
        // remember the previous activity so the renderer can fire a cast
        // animation on the idle -> cast edge rather than every frame
        wasSt: prev ? prev.st : null,
      };
      peers.set(id, next);
    }
    for (const id of [...peers.keys()]) if (!live.has(id)) peers.delete(id);
    emitPeers();
  });

  room.on("catch", (data, from) => {
    if (from === room.sessionId) return;
    events.emit("mp:catch", data || {});
  });

  room.onJoin(() => events.emit("mp:here", mpHereCount()));
  room.onLeave((id) => { peers.delete(id); emitPeers(); });
  room.onDisconnect(() => events.emit("mp:offline", true));
  room.onReconnect(() => { sent = {}; publishNow(true); events.emit("mp:offline", false); });
}

function emitPeers() {
  events.emit("mp:peers", mpPeers());
  events.emit("mp:here", mpHereCount());
}

// -------------------------------------------------------------- publishing us
let pending = { name: "", char: "", yaw: 0, st: "idle", bx: 0, bz: 0, lvl: 1, rt: 0, rl: 0 };

/** Feed the local player's state in. Cheap to call every frame — it is throttled. */
export function mpPublish(patch) {
  if (!mp) return;
  Object.assign(pending, patch);
  const now = performance.now();
  if (now - lastPublish < 1000 / PUBLISH_HZ) return;
  publishNow(false);
}

function publishNow(force) {
  if (!mp) return;
  lastPublish = performance.now();

  pending.name = (S.profile?.username || "Angler").slice(0, 18);
  pending.char = S.profile?.character || "";
  pending.lvl = S.profile?.level || 1;
  pending.rt = S.gear?.equipped?.rods ?? 0;
  pending.rl = S.gear?.equipped?.reels ?? 0;

  const out = {};
  for (const k of ["name", "char", "st", "lvl", "rt", "rl"]) {
    if (force || sent[k] !== pending[k]) out[k] = pending[k];
  }
  // numbers get an epsilon so a twitching rod does not spam the socket
  if (force || Math.abs((sent.yaw ?? 999) - pending.yaw) > YAW_EPSILON) out.yaw = round2(pending.yaw);
  if (force || Math.abs((sent.bx ?? 999) - pending.bx) > 0.15) out.bx = round2(pending.bx);
  if (force || Math.abs((sent.bz ?? 999) - pending.bz) > 0.15) out.bz = round2(pending.bz);

  const keys = Object.keys(out);
  if (!keys.length) return;
  try {
    mp.me.set(out);
    for (const k of keys) sent[k] = out[k];
  } catch { /* socket mid-reconnect; the next tick retries */ }
}

const round2 = (n) => Math.round(n * 100) / 100;

// mpPublish is driven by the render loop, and browsers pause requestAnimationFrame
// in a background tab — so without this a player who switches tabs would freeze
// in place for everyone else, mid-cast, until they came back. This low-rate timer
// keeps their presence honest. Timers are throttled to ~1Hz when hidden, which is
// exactly the cadence we want for someone who is not even looking.
if (typeof window !== "undefined") {
  setInterval(() => { if (mp) publishNow(false); }, 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && mp) { sent = {}; publishNow(true); }
  });
}

/**
 * Tell the spot you just landed something. Flavour only — the authoritative
 * record of this catch is whatever the Render api-server wrote.
 */
export function mpBroadcastCatch(fish, weight) {
  if (!mp || !fish) return;
  try {
    mp.send("catch", {
      who: (S.profile?.username || "Angler").slice(0, 18),
      fish: String(fish.name || fish.id || "a fish").slice(0, 40),
      rarity: String(fish.rarity || "").slice(0, 16),
      weight: Math.round((weight || fish.weight || 0) * 100) / 100,
    });
  } catch {}
}

export async function mpLeave() {
  joinToken++;
  const old = mp;
  mp = null; currentRoom = null; peers.clear();
  if (old) { try { await old.leave(); } catch {} }
}

if (typeof window !== "undefined") {
  window.addEventListener("pagehide", () => { try { mp?.leave(); } catch {} });
  // Expose a small handle for debugging without digging through the bundle.
  window.__mp = {
    peers: mpPeers, here: mpHereCount, room: mpRoom, leave: mpLeave,
    session: mpSessionId, available: mpAvailable,
    // handy for testing the feed without landing a real fish
    broadcast: mpBroadcastCatch,
  };
}
