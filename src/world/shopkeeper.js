// Squirrelly the Fishmonger — stands in for the player's own body on the dock
// while the Shop panel is open. Reuses createAnglerBody() with an ad-hoc
// config object (it never registers Squirrelly in characters.js, so he can
// never show up in the player's own character picker).
//
// Unlike the player's body he does not mount on casting.rig (which turns
// with aim) — he sits in his own non-rotating anchor at the player's spot,
// facing the camera instead of away from it.

import * as THREE from "three";
import { createAnglerBody } from "../gameplay/anglerBody.js";

const SQUIRRELLY_CONFIG = {
  id: "squirrelly-fishmonger",
  url: "/models/characters/squirrelly-fishmonger.glb",
  glbClips: true,
  anims: {
    idle: "/models/characters/squirrelly-fishmonger-idle.glb",
    // The "cast" slot doubles as his one-shot greeting nod when the shop opens.
    cast: "/models/characters/squirrelly-fishmonger-greet.glb",
  },
  rodHand: "RightHand",
  height: 1.35,
  // The stated convention (180 = faces -Z, away from camera) didn't hold for
  // this model — 0 showed his back. 180 shows his face; eyeball-confirmed.
  yawDeg: 180,
  x: 0,
  y: 0,
  z: 0,
};

export class Shopkeeper {
  constructor(scene) {
    this.anchor = new THREE.Group();
    this.anchor.name = "shopkeeper";
    this.anchor.visible = false;
    scene.add(this.anchor);
    this.body = null;
    if (typeof window !== "undefined") {
      window.__shopkeeper = { setConfig: (patch) => Object.assign(SQUIRRELLY_CONFIG, patch), config: SQUIRRELLY_CONFIG };
    }
  }

  show(spot) {
    this.anchor.position.copy(spot);
    this.anchor.visible = true;
    if (!this.body) {
      try {
        this.body = createAnglerBody(this.anchor, SQUIRRELLY_CONFIG);
      } catch (e) {
        console.warn("[shopkeeper] could not build Squirrelly:", e?.message || e);
      }
    }
    try { this.body?.playCast?.(); } catch { /* ignore */ }
  }

  hide() {
    this.anchor.visible = false;
  }

  update(dt) {
    if (this.anchor.visible) {
      try { this.body?.update(dt); } catch { /* ignore */ }
    }
  }
}
