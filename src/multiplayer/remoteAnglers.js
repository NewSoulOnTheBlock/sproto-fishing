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

    const { spr, tex } = plate(peer.name, peer.lvl ? `Lv ${peer.lvl}` : "");
    spr.position.y = (skiff ? 0.66 : 0) + 2.05;
    anchor.add(spr);   // sprites always face the camera; keep them off the spin

    const bob = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xff5a45, emissive: 0x551a10, roughness: 0.5 })
    );
    bob.visible = false;
    this.root.add(bob);

    const entry = { anchor, group, stand, body, spr, tex, bob, skiff, deck,
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
