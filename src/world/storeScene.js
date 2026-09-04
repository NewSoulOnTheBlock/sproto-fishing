// Squirrelly's General Store — a fully walkable 3D scene that the Shop button
// now opens instead of the old 2D tabbed panel. The shelves/register model is
// a converted OBJ asset (scripts/build-store-scene.mjs); the player walks
// around it with WASD/on-screen joystick and, when close enough to Squirrelly
// (the biker squirrel behind the register), interacting opens the same
// ShopUI panel — rods/reels/lines/bait/anglers/raffle/sell all unchanged —
// as an overlay on top of the store.
//
// There is no collision against the store geometry (the source asset ships
// no navmesh/collider data), so the player is kept inside a simple
// rectangular bound instead. Every placement/scale number here is a first
// pass eyeballed against the model's own bounding box; window.__store.setConfig
// lets it be tuned live and baked back in, the same pattern as the anglers.

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { events } from "../state/gameState.js";

const STORE_URL = "/models/world/store.glb";
const SQUIRRELLY_BODY_URL = "/models/characters/squirrelly-fishmonger.glb";
const SQUIRRELLY_IDLE_URL = "/models/characters/squirrelly-fishmonger-idle.glb";
const SQUIRRELLY_GREET_URL = "/models/characters/squirrelly-fishmonger-greet.glb";

// The source OBJ was authored in centimetre-ish 3ds Max units (raw bounding
// box ~830 x 141 x 1422). This scales the ceiling down to ~4.2 game units —
// comfortably over the ~1.8 a character occupies, matching how every other
// location in the game is sized.
const STORE_SCALE = 0.03;

const DEFAULT_CONFIG = {
  // Squirrelly stands near the register (711_Stacks_cashier node bbox center,
  // scaled — see scripts/build-store-scene.mjs console output for how this
  // was derived). Eyeball-adjust with window.__store.setConfig({...}).
  squirrellyX: 1.5,
  squirrellyZ: -4.5,
  squirrellyYawDeg: 200,
  spawnX: 0,
  spawnZ: 10,
  boundsHalfX: 11,
  boundsHalfZ: 19,
  moveSpeed: 3.4,
  interactRadius: 2.2,
  camBack: 3.4,
  camHeight: 2.1,
};

const loader = new GLTFLoader();
function loadGLTF(url) {
  return new Promise((resolve, reject) => loader.load(url, resolve, undefined, reject));
}

export class StoreScene {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.root = new THREE.Group();
    this.root.name = "storeScene";
    this.root.visible = false;
    scene.add(this.root);

    this.cfg = { ...DEFAULT_CONFIG };
    this.loaded = false;
    this.loading = null;

    this.player = new THREE.Vector3(0, 0, 0);
    this.heading = 0; // facing -Z, i.e. toward the store interior (Squirrelly sits at negative Z)
    this.near = false;
    this.panelOpen = false;
    this._openPanelFn = null; // set via setPanelHandlers()
    this._closePanelFn = null;

    if (typeof window !== "undefined") {
      window.__store = { setConfig: (patch) => Object.assign(this.cfg, patch), cfg: this.cfg, scene: this };
    }
  }

  /** Wired from main.js so this module never imports ShopUI directly. */
  setPanelHandlers(openPanel, closePanel) {
    this._openPanelFn = openPanel;
    this._closePanelFn = closePanel;
  }

  ensureLoaded() {
    if (this.loaded) return Promise.resolve();
    if (!this.loading) this.loading = this._load().then(() => { this.loaded = true; });
    return this.loading;
  }

  async _load() {
    const [storeGltf, bodyGltf, idleGltf, greetGltf] = await Promise.all([
      loadGLTF(STORE_URL), loadGLTF(SQUIRRELLY_BODY_URL), loadGLTF(SQUIRRELLY_IDLE_URL), loadGLTF(SQUIRRELLY_GREET_URL),
    ]);

    storeGltf.scene.scale.setScalar(STORE_SCALE);
    storeGltf.scene.traverse((o) => {
      if (o.isMesh) {
        o.receiveShadow = true;
        // The bake maps already carry lighting; a second real-time shadow pass
        // over ~230 shelf meshes is pure cost for no visible gain here.
        o.castShadow = false;
      }
    });
    this.root.add(storeGltf.scene);

    // The store's own bake-map textures assume real fluorescent lighting;
    // the game's outdoor sun/hemi/ambient trio leaves an interior essentially
    // black. These are scoped to the store root, so they never affect the
    // fishing locations.
    const storeAmbient = new THREE.HemisphereLight(0xffffff, 0x3a3a3a, 1.4);
    this.root.add(storeAmbient);
    for (const [x, z] of [[0, 8], [1.5, -4.5], [-4, -14]]) {
      const light = new THREE.PointLight(0xfff2d6, 28, 26, 2);
      light.position.set(x, 3.4, z);
      this.root.add(light);
    }

    this.squirrelly = bodyGltf.scene;
    this.root.add(this.squirrelly);
    this.squirrellyMixer = new THREE.AnimationMixer(this.squirrelly);
    if (idleGltf.animations[0]) this.squirrellyIdle = this.squirrellyMixer.clipAction(idleGltf.animations[0]);
    if (greetGltf.animations[0]) {
      this.squirrellyGreet = this.squirrellyMixer.clipAction(greetGltf.animations[0]);
      this.squirrellyGreet.setLoop(THREE.LoopOnce, 1);
      this.squirrellyGreet.clampWhenFinished = true;
    }
    this.squirrellyIdle?.play();
    this._layoutSquirrelly();
  }

  _layoutSquirrelly() {
    if (!this.squirrelly) return;
    this.squirrelly.position.set(this.cfg.squirrellyX, 0, this.cfg.squirrellyZ);
    this.squirrelly.rotation.y = (this.cfg.squirrellyYawDeg * Math.PI) / 180;
  }

  async enter(tab) {
    this.root.visible = true;
    this.player.set(this.cfg.spawnX, 0, this.cfg.spawnZ);
    this.heading = 0;
    events.emit("store:loading", true);
    try {
      await this.ensureLoaded();
    } finally {
      events.emit("store:loading", false);
    }
    if (tab) this.openPanel(tab);
  }

  exit() {
    this.root.visible = false;
    this.closePanel();
    this.near = false;
    events.emit("store:near", false);
  }

  openPanel(tab) {
    if (!this._openPanelFn) return;
    this.panelOpen = true;
    this._openPanelFn(tab);
  }

  /** Player-initiated close (walking away / Escape / interact toggle). */
  closePanel() {
    if (!this.panelOpen) return;
    this.panelOpen = false;
    this._closePanelFn?.();
  }

  /** ShopUI closed itself (its own X button/backdrop) — just sync our flag,
   *  do not call back into ShopUI or this recurses. */
  notifyPanelClosed() {
    this.panelOpen = false;
  }

  isPanelOpen() {
    return this.panelOpen;
  }

  /** input: { forward, strafe } each in -1..1. No-ops while the shop panel is open. */
  update(dt, input) {
    if (!this.loaded) return;
    this._layoutSquirrelly();
    this.squirrellyMixer?.update(dt);

    if (!this.panelOpen) {
      const c = this.cfg;
      const fwd = input?.forward || 0;
      const strafe = input?.strafe || 0;
      if (fwd || strafe) {
        const len = Math.hypot(fwd, strafe) || 1;
        const nf = fwd / len;
        const ns = strafe / len;
        this.heading = Math.atan2(ns, -nf);
        this.player.x += Math.sin(this.heading) * c.moveSpeed * dt;
        this.player.z += -Math.cos(this.heading) * c.moveSpeed * dt;
        this.player.x = Math.max(-c.boundsHalfX, Math.min(c.boundsHalfX, this.player.x));
        this.player.z = Math.max(-c.boundsHalfZ, Math.min(c.boundsHalfZ, this.player.z));
      }

      const dx = this.player.x - c.squirrellyX;
      const dz = this.player.z - c.squirrellyZ;
      const wasNear = this.near;
      this.near = Math.hypot(dx, dz) <= c.interactRadius;
      if (this.near !== wasNear) events.emit("store:near", this.near);
    }

    const c = this.cfg;
    const dirX = Math.sin(this.heading);
    const dirZ = -Math.cos(this.heading);
    this.camera.position.set(
      this.player.x - dirX * c.camBack,
      this.player.y + c.camHeight,
      this.player.z - dirZ * c.camBack,
    );
    const lookAt = new THREE.Vector3(this.player.x + dirX * 4, this.player.y + 1.1, this.player.z + dirZ * 4);
    this.camera.lookAt(lookAt);
  }

  /** Returns true if an interaction actually happened (i.e. player was near Squirrelly). */
  interact() {
    if (this.panelOpen) {
      this.closePanel();
      return true;
    }
    if (!this.near) return false;
    if (this.squirrellyGreet) { this.squirrellyGreet.reset(); this.squirrellyGreet.play(); }
    this.openPanel("sell");
    return true;
  }
}
