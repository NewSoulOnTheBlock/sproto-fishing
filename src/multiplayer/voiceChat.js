// Proximity voice chat.
//
// WebRTC carries the audio; the Multiplayer Agent room carries the signalling.
// Audio can NOT go over the room socket itself — the SDK caps a client at 60
// messages/sec of 2048 chars, which is orders of magnitude short of even a
// 16 kbps voice stream. So the room does what it is good at: telling two
// browsers how to find each other.
//
// One measured constraint drives the design: an audio-only SDP offer is ~1.9 KB,
// and once wrapped with routing fields it lands within 15 characters of the
// 2048-char event cap — and a real mic track pushes it over. Every SDP is
// therefore CHUNKED across several events and reassembled. ICE candidates are
// ~220 chars and go whole.
//
// Privacy: this is opt-in, off by default, and never opens the microphone
// without an explicit click. Push-to-talk is the default speaking mode.

import { events, S } from "../state/gameState.js";

const STUN = [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:global.stun.twilio.com:3478" }];
// A TURN server is needed for players behind symmetric NAT / strict corporate
// firewalls — roughly 10-20% of the internet. STUN alone covers the rest. Drop
// credentials in here (or wire them from an env var) to close that gap.
const TURN = [];

const SDP_CHUNK = 1200;      // safely inside the 2048-char event cap with wrapper
const ANNOUNCE_MS = 5000;    // re-announce so late joiners discover us
const MAX_VOICE_PEERS = 4;   // a P2P mesh is O(n^2); keep it to the nearest few
const NEAR = 4.0;            // full volume within this many world units
const FAR = 16.0;            // silent beyond this

let mp = null;               // the live room handle (injected)
let enabled = false;
let localStream = null;
let ctx = null;              // AudioContext
let localAnalyser = null;
let talking = false;         // push-to-talk gate
let openMic = false;
let announceTimer = null;

const peers = new Map();     // sessionId -> peer record
const inbox = new Map();     // "from|kind" -> { n, parts[] }

export function voiceEnabled() { return enabled; }
export function voiceOpenMic() { return openMic; }
export function voicePeers() {
  return [...peers.entries()].map(([id, p]) => ({
    id, state: p.pc?.connectionState || "new", speaking: p.speaking, gain: p.lastGain,
  }));
}

/** main.js hands us the room handle whenever it changes. */
export function voiceAttach(room) {
  if (mp === room) return;
  mp = room;
  teardownPeers();
  if (mp && enabled) { wire(); announce(); }
  else if (mp) wire();
}

// ------------------------------------------------------------------ signalling
let wired = null;
function wire() {
  if (!mp || wired === mp) return;
  wired = mp;
  mp.on("v-on", (_d, from) => {
    if (!enabled || !from || from === mp.sessionId) return;
    ensurePeer(from);
    // deterministic initiator: the lexicographically smaller id makes the offer,
    // so two clients never send each other simultaneous offers (glare)
    if (mp.sessionId < from) makeOffer(from);
  });
  mp.on("v-off", (_d, from) => { if (from) dropPeer(from); });
  mp.on("v-sdp", (d, from) => onSdp(d, from));
  mp.on("v-ice", (d, from) => onIce(d, from));
}

function send(type, data) { try { mp?.send(type, data); } catch {} }

function announce() { if (enabled) send("v-on", {}); }

/**
 * Split an SDP into event-sized pieces. Exported because this is the one piece
 * of the design that MUST be right — a measured offer is 1896 chars and lands
 * within 15 characters of the 2048-char event cap once wrapped, so a real mic
 * track overflows it. voice-test.html round-trips this against a live offer.
 */
export function chunkSdp(sdp) {
  const n = Math.ceil(sdp.length / SDP_CHUNK);
  const out = [];
  for (let i = 0; i < n; i++) out.push({ i, n, d: sdp.slice(i * SDP_CHUNK, (i + 1) * SDP_CHUNK) });
  return out;
}
/** Inverse of chunkSdp. Returns null until every piece has arrived. */
export function joinSdpChunks(parts) {
  if (!parts.length || parts.some((p) => p == null)) return null;
  return parts.join("");
}

function sendSdp(to, kind, sdp) {
  for (const c of chunkSdp(sdp)) send("v-sdp", { to, k: kind, i: c.i, n: c.n, d: c.d });
}

async function onSdp(d, from) {
  if (!enabled || !d || d.to !== mp?.sessionId || !from) return;
  const key = from + "|" + d.k;
  let box = inbox.get(key);
  if (!box || box.n !== d.n) { box = { n: d.n, parts: new Array(d.n).fill(null) }; inbox.set(key, box); }
  box.parts[d.i] = d.d;
  if (box.parts.some((p) => p === null)) return;      // still assembling
  inbox.delete(key);
  const sdp = box.parts.join("");

  const p = ensurePeer(from);
  try {
    await p.pc.setRemoteDescription({ type: d.k, sdp });
    // flush candidates that arrived before the description
    for (const c of p.pendingIce.splice(0)) { try { await p.pc.addIceCandidate(c); } catch {} }
    if (d.k === "offer") {
      await attachLocalTrack(p);
      const answer = await p.pc.createAnswer();
      await p.pc.setLocalDescription(answer);
      sendSdp(from, "answer", p.pc.localDescription.sdp);
    }
  } catch (e) {
    console.warn("[voice] sdp failed:", e?.message || e);
  }
}

async function onIce(d, from) {
  if (!enabled || !d || d.to !== mp?.sessionId || !from) return;
  const p = peers.get(from);
  if (!p) return;
  let cand;
  try { cand = JSON.parse(d.c); } catch { return; }
  if (!p.pc.remoteDescription) { p.pendingIce.push(cand); return; }
  try { await p.pc.addIceCandidate(cand); } catch {}
}

// ---------------------------------------------------------------- peer plumbing
function ensurePeer(id) {
  let p = peers.get(id);
  if (p) return p;
  if (peers.size >= MAX_VOICE_PEERS) return makeDeadPeer(id);

  const pc = new RTCPeerConnection({ iceServers: [...STUN, ...TURN] });
  p = {
    pc, id, pendingIce: [], speaking: false, lastGain: 0,
    gain: null, pan: null, analyser: null, el: null, data: new Uint8Array(32),
  };
  peers.set(id, p);

  pc.onicecandidate = (e) => {
    if (e.candidate) send("v-ice", { to: id, c: JSON.stringify(e.candidate.toJSON()) });
  };
  pc.onconnectionstatechange = () => {
    if (["failed", "closed"].includes(pc.connectionState)) dropPeer(id);
    events.emit("voice:peers", voicePeers());
  };
  pc.ontrack = (e) => attachRemote(p, e.streams[0]);
  return p;
}

function makeDeadPeer(id) {
  // over the mesh cap: remember them so we do not retry every announce
  const p = { pc: null, id, pendingIce: [], speaking: false, lastGain: 0, capped: true };
  peers.set(id, p);
  return p;
}

async function makeOffer(id) {
  const p = peers.get(id) || ensurePeer(id);
  if (!p.pc) return;
  try {
    await attachLocalTrack(p);
    const offer = await p.pc.createOffer();
    await p.pc.setLocalDescription(offer);
    sendSdp(id, "offer", p.pc.localDescription.sdp);
  } catch (e) {
    console.warn("[voice] offer failed:", e?.message || e);
  }
}

async function attachLocalTrack(p) {
  if (!p.pc || !localStream) return;
  const track = localStream.getAudioTracks()[0];
  if (!track) return;
  const already = p.pc.getSenders().some((s) => s.track === track);
  if (!already) p.pc.addTrack(track, localStream);
}

/** Remote audio -> gain (distance) -> stereo pan (bearing) -> speakers. */
function attachRemote(p, stream) {
  if (!stream || p.gain) return;
  ensureCtx();
  // Chrome will not pump a WebRTC stream into WebAudio unless it is also bound
  // to a media element. Keep it muted; WebAudio does the actual output.
  const el = document.createElement("audio");
  el.srcObject = stream;
  el.muted = true;
  el.autoplay = true;
  el.play?.().catch(() => {});
  p.el = el;

  const src = ctx.createMediaStreamSource(stream);
  const gain = ctx.createGain();
  const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 64;
  gain.gain.value = 0;
  src.connect(analyser);
  if (pan) src.connect(gain).connect(pan).connect(ctx.destination);
  else src.connect(gain).connect(ctx.destination);

  p.gain = gain; p.pan = pan; p.analyser = analyser;
  events.emit("voice:peers", voicePeers());
}

function dropPeer(id) {
  const p = peers.get(id);
  if (!p) return;
  try { p.pc?.close(); } catch {}
  try { if (p.el) { p.el.srcObject = null; p.el.remove(); } } catch {}
  peers.delete(id);
  events.emit("voice:peers", voicePeers());
}

function teardownPeers() {
  for (const id of [...peers.keys()]) dropPeer(id);
  inbox.clear();
  wired = null;
}

// -------------------------------------------------------------------- mic + ctx
function ensureCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

// Chrome keeps an AudioContext suspended until a genuine user gesture, and a
// context created during an awaited call (getUserMedia) can miss the activation
// it was started from. A suspended context means everyone is silent with a
// perfectly healthy WebRTC connection — the classic "connected but no audio".
// Retry the resume on the next real interaction, whatever it is.
if (typeof window !== "undefined") {
  const kick = () => {
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {});
    for (const p of peers.values()) { try { p.el?.play?.().catch(() => {}); } catch {} }
  };
  for (const ev of ["pointerdown", "keydown", "touchstart"]) {
    window.addEventListener(ev, kick, { capture: true, passive: true });
  }
}

/** Opt in. Must be called from a user gesture — browsers require it for mic. */
export async function voiceEnable() {
  if (enabled) return true;
  try {
    ensureCtx();
    localStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      video: false,
    });
  } catch (e) {
    events.emit("toast", { msg: "Microphone blocked — voice chat is off", kind: "warn" });
    console.warn("[voice] mic denied:", e?.message || e);
    return false;
  }
  enabled = true;
  setTalking(openMic);           // push-to-talk starts muted

  const src = ctx.createMediaStreamSource(localStream);
  localAnalyser = ctx.createAnalyser();
  localAnalyser.fftSize = 64;
  src.connect(localAnalyser);    // analysis only — never route your own mic to your speakers

  wire();
  announce();
  announceTimer = setInterval(announce, ANNOUNCE_MS);
  events.emit("voice:state", { enabled, openMic });
  return true;
}

export function voiceDisable() {
  if (!enabled) return;
  enabled = false;
  send("v-off", {});
  clearInterval(announceTimer); announceTimer = null;
  teardownPeers();
  try { localStream?.getTracks().forEach((t) => t.stop()); } catch {}
  localStream = null; localAnalyser = null;
  events.emit("voice:state", { enabled, openMic });
}

export async function voiceToggle() {
  if (enabled) { voiceDisable(); return false; }
  return await voiceEnable();
}

export function voiceSetOpenMic(on) {
  openMic = !!on;
  if (enabled) setTalking(openMic);
  events.emit("voice:state", { enabled, openMic });
}

/** Push-to-talk gate. Disabling the track is what actually stops transmission. */
export function setTalking(on) {
  talking = !!on;
  const t = localStream?.getAudioTracks?.()[0];
  if (t) t.enabled = talking;
  events.emit("voice:talking", talking);
}
export function voiceTalking() { return talking; }

// ------------------------------------------------------------------- spatialise
const _v = { x: 0, z: 0 };

/**
 * Called from the render loop. `listener` is the local player spot, `yaw` their
 * aim, `positions` the remote anglers as [{ id, x, y, z }].
 */
export function voiceUpdateSpatial(listener, yaw, positions) {
  if (!enabled || !ctx) return;
  const rx = Math.cos(yaw), rz = Math.sin(yaw);   // listener's right vector

  for (const q of positions || []) {
    const p = peers.get(q.id);
    if (!p || !p.gain) continue;
    const dx = q.x - listener.x, dz = q.z - listener.z;
    const dist = Math.hypot(dx, dz);
    // linear falloff between NEAR and FAR — predictable and easy to reason about
    let g = dist <= NEAR ? 1 : dist >= FAR ? 0 : 1 - (dist - NEAR) / (FAR - NEAR);
    p.lastGain = g;
    p.gain.gain.setTargetAtTime(g, ctx.currentTime, 0.08);
    if (p.pan && dist > 0.001) {
      const side = (dx * rx + dz * rz) / dist;      // -1 left .. +1 right
      p.pan.pan.setTargetAtTime(Math.max(-1, Math.min(1, side)), ctx.currentTime, 0.08);
    }
  }

  // anyone we have no position for (travelled away) fades out
  const seen = new Set((positions || []).map((q) => q.id));
  for (const [id, p] of peers) {
    if (seen.has(id) || !p.gain) continue;
    p.lastGain = 0;
    p.gain.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
  }
}

/** Cheap speaking detection for the UI. Call a few times a second. */
export function voicePollLevels() {
  if (!enabled) return;
  let changed = false;
  for (const p of peers.values()) {
    if (!p.analyser) continue;
    p.data = p.data || new Uint8Array(p.analyser.frequencyBinCount);
    p.analyser.getByteFrequencyData(p.data);
    let sum = 0;
    for (let i = 0; i < p.data.length; i++) sum += p.data[i];
    const speaking = sum / p.data.length > 12 && p.lastGain > 0.02;
    if (speaking !== p.speaking) { p.speaking = speaking; changed = true; }
  }
  if (changed) events.emit("voice:peers", voicePeers());
}

/**
 * Per-peer WebRTC stats. This is the authoritative answer to "is audio actually
 * flowing" — the speaking indicator can read silent purely because the
 * AudioContext is suspended, which is a different problem.
 */
export async function voiceStats() {
  const out = [];
  for (const [id, p] of peers) {
    if (!p.pc) { out.push({ id, capped: true }); continue; }
    const row = { id, state: p.pc.connectionState, ice: p.pc.iceConnectionState,
                  bytesSent: 0, bytesReceived: 0, packetsReceived: 0, audioLevel: 0, candidate: null };
    try {
      const stats = await p.pc.getStats();
      stats.forEach((s) => {
        if (s.type === "outbound-rtp" && s.kind === "audio") row.bytesSent = s.bytesSent || 0;
        if (s.type === "inbound-rtp" && s.kind === "audio") {
          row.bytesReceived = s.bytesReceived || 0;
          row.packetsReceived = s.packetsReceived || 0;
          if (s.audioLevel != null) row.audioLevel = s.audioLevel;
        }
        if (s.type === "media-source" && s.kind === "audio" && s.audioLevel != null) row.sourceLevel = s.audioLevel;
        if (s.type === "candidate-pair" && s.state === "succeeded") row.candidate = s.localCandidateId;
      });
    } catch {}
    out.push(row);
  }
  return out;
}

export function voiceCtxState() { return ctx ? ctx.state : "none"; }

if (typeof window !== "undefined") {
  window.addEventListener("pagehide", () => { try { voiceDisable(); } catch {} });
  window.__voice = {
    enable: voiceEnable, disable: voiceDisable, toggle: voiceToggle,
    peers: voicePeers, stats: voiceStats, ctx: voiceCtxState,
    state: () => ({ enabled, openMic, talking }),
  };
}
