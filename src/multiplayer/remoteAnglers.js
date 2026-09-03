// Draws the other anglers in your room.
//
// They reuse createAnglerBody, so a remote angler is the same rig as yours and
// picks up whatever character they chose. Placement is per-location because the
// spots are not alike: an open bank spreads sideways, the pier is 2.8 units wide
// so people queue up it single file, and the ocean is one small boat — out there
// everyone gets their own skiff.
//
// Cheap by construction: bodies are pooled, capped, and disposed on travel (VRM
// avatars are texture-heavy, so leaking them would be expensive fast).

import * as THREE from "three";
import { createAnglerBody } from "../gameplay/anglerBody.js";
import { makeDock } from "../world/environment.js";
import { CONFIG } from "../data/config.js";
import { S } from "../state/gameState.js";
import { disposeObject3D } from "../core/disposal.js";
import { mpPeers } from "./mpClient.js";
import { PLACEMENT, PLACEMENT_FALLBACK, MAX_RENDERED_LOW } from "./mpConfig.js";
import { rodLook, reelLook } from "../data/gearLooks.js";
import { lerp } from "../utils/utils.js";

const WATER_Y = CONFIG?.water?.level ?? 0;

function plate(text, sub) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 72;
  const g = c.getContext("2d");
  g.clearRect(0, 0, 256, 72);
  g.font = "600 30px system-ui,sans-serif";
  g.textAlign = "center";
  g.lineWidth = 6; g.strokeStyle = "rgba(0,0,0,.75)";
  g.strokeText(text, 128, 32); g.fillStyle = "#eaf6f4"; g.fillText(text, 128, 32);
  if (sub) {
    g.font = "500 20px system-ui,sans-serif";
    g.lineWidth = 5;
    g.strokeText(sub, 128, 58); g.fillStyle = "#8fd0c4"; g.fillText(sub, 128, 58);
  }
  const tex = new THREE.CanvasTexture(c);
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true }));
  // anglers sit only a few units apart, so a large plate dominates the frame
  spr.scale.set(1.05, 0.30, 1);
  return { spr, tex };
}

/**
 * The peer's actual equipped rod + reel, built from the same rodLook()/
 * reelLook() pure functions casting.js uses for the local player — the MP
 * layer broadcasts only the two small tier indices (see mpClient.js's `rt`/
 * `rl`), and this reconstructs the exact cosmetic from them deterministically.
 * No bend physics or line here (remote anglers never show a fight), just the
 * static rest-pose geometry, which is a straight port of casting.js's
 * buildRod()/buildReel() parameterised on a look object instead of `this`.
 *
 * Positioned exactly like the local rod's resting pose in casting.js
 * (rodRoot at (0.42, 1.1, 0.15), joint0 tilted -0.95 rad) — attached to
 * `stand` rather than `group` so it inherits the skiff height offset
 * automatically, the same way the body does.
 */
function buildAnglerRod(rodL, reelL) {
  const g = new THREE.Group();
  g.position.set(0.42, 1.1, 0.15);
  const joint0 = new THREE.Group();
  joint0.rotation.x = -0.95;
  g.add(joint0);

  const rodMat = new THREE.MeshStandardMaterial({
    color: rodL.color, roughness: 0.5, metalness: 0.25,
    emissive: rodL.glow ? rodL.color : 0x000000,
    emissiveIntensity: rodL.glow ? rodL.glowI : 0,
  });
  const handleMat = new THREE.MeshStandardMaterial({ color: rodL.handle, roughness: 0.75 });
  const accentMat = new THREE.MeshStandardMaterial({
    color: rodL.accent, roughness: 0.4, metalness: 0.55,
    emissive: rodL.glow ? rodL.accent : 0x000000,
    emissiveIntensity: rodL.glow ? rodL.glowI * 0.8 : 0,
  });

  const hr = rodL.thickScale;
  const handleLen = 0.34;
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.024 * hr, 0.03 * hr, handleLen, 8), handleMat);
  handle.position.y = -0.1;
  joint0.add(handle);
  const handleTopY = -0.1 + handleLen / 2;

  const baseLens = [0.62, 0.56, 0.5];
  const baseRadii = [[0.014, 0.019], [0.009, 0.014], [0.005, 0.009]];
  const lens = baseLens.map((l) => l * rodL.lenScale);
  let parent = joint0;
  for (let i = 0; i < 3; i++) {
    const joint = new THREE.Group();
    if (i > 0) joint.position.y = lens[i - 1];
    const r0 = baseRadii[i][0] * hr;
    const r1 = baseRadii[i][1] * hr;
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, lens[i], 7), rodMat);
    seg.position.y = lens[i] / 2;
    joint.add(seg);

    // accent wraps along the blank — more on higher tiers, same as local
    if (rodL.family >= 1) {
      const guides = Math.max(1, Math.round(rodL.wraps / 3));
      for (let gI = 1; gI <= guides; gI++) {
        const yt = (gI / (guides + 1)) * lens[i];
        const rr = lerp(r0, r1, yt / lens[i]) * 1.5 + 0.004;
        const wrap = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, 0.012, 8), accentMat);
        wrap.position.y = yt;
        joint.add(wrap);
      }
    }

    parent.add(joint);
    parent = joint;
  }

  const tip = new THREE.Object3D();
  tip.position.y = lens[2];
  parent.add(tip);
  if (rodL.tipBead) {
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.005 * hr + 0.016, 10, 8), accentMat);
    tip.add(bead);
  }

  // reel, mounted under the grip — identical layout to casting.js's buildReel()
  const reel = new THREE.Group();
  reel.position.set(0, handleTopY - 0.04, -0.05);
  joint0.add(reel);

  const bodyMat = new THREE.MeshStandardMaterial({
    color: reelL.color, roughness: 0.42, metalness: 0.6,
    emissive: reelL.glow ? reelL.color : 0x000000,
    emissiveIntensity: reelL.glow ? reelL.glowI : 0,
  });
  const rimMat = new THREE.MeshStandardMaterial({ color: reelL.rim, roughness: 0.35, metalness: 0.65 });
  const crankMat = new THREE.MeshStandardMaterial({ color: reelL.handle, roughness: 0.6 });

  const tilt = new THREE.Group();
  tilt.rotation.z = Math.PI / 2;
  reel.add(tilt);
  const spin = new THREE.Group();
  tilt.add(spin);

  const spool = new THREE.Mesh(new THREE.CylinderGeometry(reelL.spoolR, reelL.spoolR, reelL.spoolW, 16), bodyMat);
  spin.add(spool);

  const discGeo = new THREE.CylinderGeometry(reelL.discR, reelL.discR, reelL.spoolW * 0.2, 18);
  const dEast = new THREE.Mesh(discGeo, rimMat);
  dEast.position.y = reelL.spoolW / 2;
  const dWest = new THREE.Mesh(discGeo, rimMat);
  dWest.position.y = -reelL.spoolW / 2;
  spin.add(dEast, dWest);

  const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.03, 6), crankMat);
  axle.position.y = reelL.spoolW / 2 + 0.015;
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.007, reelL.discR * 0.9), crankMat);
  bar.position.set(0, reelL.spoolW / 2 + 0.03, reelL.discR * 0.45);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.013, 8, 8), crankMat);
  knob.position.set(0, reelL.spoolW / 2 + 0.03, reelL.discR * 0.9);
  spin.add(axle, bar, knob);

  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.04, 0.018), crankMat);
  foot.position.set(0, reelL.spoolR + 0.02, 0);
  reel.add(foot);

  g.userData = { tip, spin };
  return g;
}

/** A minimal skiff so ocean peers are not standing on open water. */
function makeSkiff() {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x6b4a34, roughness: 0.85 });
  const deckMat = new THREE.MeshStandardMaterial({ color: 0xb99a72, roughness: 0.9 });
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.62, 3.4, 8, 1), hullMat);
  hull.rotation.x = Math.PI / 2; hull.scale.set(1, 1, 0.6); hull.position.y = 0.2;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.09, 2.8), deckMat);
  deck.position.y = 0.62;
  g.add(hull, deck);
  return g;
}

export class RemoteAnglers {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.name = "remoteAnglers";
    scene.add(this.root);

    this.entries = new Map();   // sessionId -> entry
    this.slots = new Map();     // sessionId -> slot index (sticky, so nobody teleports)
    this.usedSlots = new Set();
    this.spot = new THREE.Vector3();
    this.place = PLACEMENT_FALLBACK;
    this.enabled = true;
    this._t = 0;
  }

  /** Called from travelTo. Wipes everyone: the old bodies belong to the old scene. */
  setLocation(locId, playerSpot) {
    this.clear();
    this.place = PLACEMENT[locId] || PLACEMENT_FALLBACK;
    if (playerSpot) this.spot.copy(playerSpot);
  }

  setEnabled(on) {
    this.enabled = !!on;
    if (!on) this.clear();
  }

  maxRendered() {
    // S.settings.quality is the same "high" / "low" the renderer and water use.
    const low = S?.settings?.quality === "low";
    return Math.min(this.place.max ?? 4, low ? MAX_RENDERED_LOW : 99);
  }

  // Sticky slot assignment: a peer keeps its spot for as long as it is present,
  // so someone leaving does not shuffle everybody else along the bank.
  slotFor(id) {
    if (this.slots.has(id)) return this.slots.get(id);
    let i = 0;
    while (this.usedSlots.has(i)) i++;
    this.usedSlots.add(i);
    this.slots.set(id, i);
    return i;
  }

  freeSlot(id) {
    const s = this.slots.get(id);
    if (s !== undefined) { this.usedSlots.delete(s); this.slots.delete(id); }
  }

  /** Where slot `i` stands, given this location's placement mode. */
  positionFor(i, out) {
    const p = this.place;
    if (p.mode === "line") {
      // up the dock, behind the player (the water is at -Z)
      out.set(this.spot.x, this.spot.y, this.spot.z + p.step * (i + 1));
    } else if (p.mode === "boats") {
      // a loose arc out on the water, skipping dead ahead so nobody blocks your cast
      const a = (i % 2 ? 1 : -1) * (p.spread * (Math.floor(i / 2) + 1));
      out.set(this.spot.x + Math.sin(a) * p.radius, WATER_Y, this.spot.z - Math.cos(a) * p.radius);
    } else {
      // open bank: alternate left and right of the player
      const side = i % 2 ? 1 : -1;
      const rank = Math.floor(i / 2) + 1;
      out.set(this.spot.x + side * p.step * rank, this.spot.y, this.spot.z);
    }
    return out;
  }

  spawn(id, peer) {
    const slot = this.slotFor(id);

    // anchor: positioned but NEVER rotated — it carries the structure the angler
    // stands on. If the dock turned with their aim the whole jetty would spin.
    const anchor = new THREE.Group();
    this.positionFor(slot, anchor.position);
    this.root.add(anchor);

    // group: rotates with their aim, carries the body only.
    const group = new THREE.Group();
    anchor.add(group);

    let skiff = null;
    let deck = null;
    if (this.place.mode === "boats") {
      // open water: their own skiff, so nobody stands on the sea
      skiff = makeSkiff();
      anchor.add(skiff);
    } else if (this.place.mode === "bank") {
      // Give every angler their own jetty. The main dock is only 2.4 wide and
      // centred on x=0, so peers offset along the bank would otherwise be
      // standing on open water. deckY is derived from the player spot, which
      // every builder sets to deckY + 0.04 — so this matches each location.
      const deckY = Math.max(0.05, this.spot.y - 0.04);
      deck = makeDock({ length: 9, width: 2.4, deckY, startZ: this.spot.z + 6 });
      // makeDock lays planks at absolute z, so cancel the anchor's own offset
      // and keep only the sideways shift.
      deck.position.set(0, -this.spot.y, -this.spot.z);
      anchor.add(deck);
    }
    // "line" (the pier) needs nothing: those peers are already stood on the
    // main pier deck, and a second dock there would clip straight through it.

    // the body sits on top of whatever we just built
    const stand = new THREE.Group();
    stand.position.y = skiff ? 0.66 : 0;
    group.add(stand);

    let body = null;
    try {
      body = createAnglerBody(stand, peer.char || undefined);
    } catch (e) {
      console.warn("[mp] could not build a remote angler body:", e?.message || e);
    }

    const rodTier = peer.rt || 0;
    const reelTier = peer.rl || 0;
    let rod = null;
    try {
      rod = buildAnglerRod(rodLook(rodTier), reelLook(reelTier));
      stand.add(rod);
    } catch (e) {
      console.warn("[mp] could not build a remote angler's rod:", e?.message || e);
    }

    const { spr, tex } = plate(peer.name, peer.lvl ? `Lv ${peer.lvl}` : "");
    spr.position.y = (skiff ? 0.66 : 0) + 2.05;
    anchor.add(spr);   // sprites always face the camera; keep them off the spin

    const bob = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xff5a45, emissive: 0x551a10, roughness: 0.5 })
    );
    bob.visible = false;
    this.root.add(bob);

    const entry = { anchor, group, stand, body, rod, rodTier, reelTier, spr, tex, bob, skiff, deck,
                    yaw: peer.yaw || 0, lastSt: peer.st, label: "" };
    this.entries.set(id, entry);
    return entry;
  }

  despawn(id) {
    const e = this.entries.get(id);
    if (!e) return;
    try { e.body?.dispose(); } catch {}
    this.root.remove(e.anchor);
    this.root.remove(e.bob);
    disposeObject3D(e.anchor);   // takes the dock/skiff, body group and plate with it
    disposeObject3D(e.bob);
    try { e.tex?.dispose(); e.spr?.material?.dispose(); } catch {}
    this.entries.delete(id);
    this.freeSlot(id);
  }

  clear() {
    for (const id of [...this.entries.keys()]) this.despawn(id);
    this.usedSlots.clear();
    this.slots.clear();
  }

  update(dt) {
    if (!this.enabled) return;
    this._t += dt;

    const list = mpPeers().slice(0, this.maxRendered());
    const live = new Set(list.map((p) => p.id));

    for (const id of [...this.entries.keys()]) if (!live.has(id)) this.despawn(id);

    for (const peer of list) {
      let e = this.entries.get(id_of(peer));
      if (!e) e = this.spawn(id_of(peer), peer);
      if (!e) continue;

      // face where they are aiming — matches casting.js: rig.rotation.y = -aimYaw
      const target = -(peer.yaw || 0);
      e.yaw += (target - e.yaw) * Math.min(1, dt * 8);
      e.group.rotation.y = e.yaw;

      // fire the cast animation on the idle -> cast edge only
      if (peer.st === "cast" && e.lastSt !== "cast") { try { e.body?.playCast(); } catch {} }
      e.lastSt = peer.st;

      // their bobber, bobbing
      const out = peer.st === "cast" || peer.st === "fight";
      e.bob.visible = out;
      if (out) {
        e.bob.position.set(peer.bx, WATER_Y + 0.06 + Math.sin(this._t * 2.2 + peer.bx) * 0.03, peer.bz);
      }

      // skiffs ride the swell
      if (e.skiff) {
        e.skiff.position.y = Math.sin(this._t * 0.9 + e.anchor.position.x) * 0.06;
        e.skiff.rotation.z = Math.sin(this._t * 0.7 + e.anchor.position.z) * 0.03;
      }

      // rebuild the rod/reel only when the equipped tier actually changed
      // (gear swaps are rare; this must not run every frame)
      const rt = peer.rt || 0, rl = peer.rl || 0;
      if (rt !== e.rodTier || rl !== e.reelTier) {
        e.rodTier = rt; e.reelTier = rl;
        if (e.rod) { e.stand.remove(e.rod); disposeObject3D(e.rod); }
        try {
          e.rod = buildAnglerRod(rodLook(rt), reelLook(rl));
          e.stand.add(e.rod);
        } catch (err) {
          console.warn("[mp] could not rebuild a remote angler's rod:", err?.message || err);
          e.rod = null;
        }
      }

      // repaint the nameplate only when it actually changed
      const label = `${peer.name}|${peer.lvl}`;
      if (label !== e.label) {
        e.label = label;
        const { spr, tex } = plate(peer.name, peer.lvl ? `Lv ${peer.lvl}` : "");
        spr.position.copy(e.spr.position);
        e.anchor.remove(e.spr);
        try { e.tex?.dispose(); e.spr.material.dispose(); } catch {}
        e.anchor.add(spr);
        e.spr = spr; e.tex = tex;
      }

      try { e.body?.update(dt); } catch {}
    }
  }

  /** World positions of the peers we are drawing — used to spatialise voice. */
  peerPositions() {
    const out = [];
    for (const [id, e] of this.entries) {
      out.push({ id, x: e.anchor.position.x, y: e.anchor.position.y, z: e.anchor.position.z });
    }
    return out;
  }

  dispose() {
    this.clear();
    this.scene.remove(this.root);
  }
}

const id_of = (p) => p.id;
