// Pepe Pants: a rare NPC who swims in from open water, surfaces at the dock to
// throw a sweep kick at you, then swims back out. Purely ambient — he is never
// interactive, never blocks a cast, and never touches game state.
//
// Three phases on a timer:
//   approach -> swims from ~22u out to just off the dock edge (swim clip)
//   kick     -> holds station facing the player, one-shot sweep kick
//   depart   -> turns around and swims back out, then hides until next time
//
// The body and clips come from the same Meshy pipeline the playable anglers
// use (scripts/build-meshy-angler.mjs): one body GLB plus mesh-less keyframe
// GLBs that bind by bone name onto the shared 24-joint rig.

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CONFIG } from "../data/config.js";
import { disposeObject3D } from "../core/disposal.js";
import { randRange } from "../utils/utils.js";

const BODY_URL = "/models/characters/pepe-pants.glb";
const SWIM_URL = "/models/characters/pepe-pants-swim.glb";
// The sweep kick lives in -cast.glb because build-meshy-angler maps every
// Backflip* clip onto the angler's "cast" role. Right keyframes, wrong noun.
const KICK_URL = "/models/characters/pepe-pants-cast.glb";

const WATER_Y = CONFIG.water.level;

// Raw model is 1.17 x 1.70 x 0.42 — upright and humanoid, unlike the near-square
// anglers that need 1.35. 1.7u reads person-sized next to the player.
const DEFAULTS = {
  height: 1.7,
  // How deep he sits while swimming. He is chest-deep, not floating on top.
  submerge: 0.62,
  // How far he lifts to throw the kick. The sweep kick is a legs move, so he
  // has to clear his own submerge depth or it happens underwater where nobody
  // can see it — 0.8 puts his feet just above the surface at the peak, which
  // reads as launching out of the water rather than bobbing in it.
  kickRise: 0.8,
  speed: 2.4,
  // Where he stops, measured from the player: further out in z, so he ends up
  // off the dock edge rather than standing in the planks.
  standoff: 3.4,
  // Distance out from the stop point where he spawns and retreats to.
  runIn: 22,
  // Model forward is +z, which is what atan2(dx, dz) already returns, so the
  // heading needs no correction. (The anglers' yawDeg: 180 is not the same
  // number — that turns a *statically* placed body to face the camera, where
  // this one is derived from the travel vector every time he changes course.)
  baseYawDeg: 0,
};

export class DockVisitor {
  constructor(scene) {
    this.scene = scene;
    this.cfg = { ...DEFAULTS };

    this.root = new THREE.Group();
    this.root.name = "dock-visitor";
    this.root.visible = false;
    this.scene.add(this.root);

    // pivot carries the height scale so root.position stays in world units
    this.pivot = new THREE.Group();
    this.root.add(this.pivot);

    this.model = null;
    this.mixer = null;
    this.swimAction = null;
    this.kickAction = null;

    this.enabled = false;
    this.loaded = false;
    this.loading = false;

    this.phase = "away"; // away | approach | kick | depart
    this.timer = randRange(20, 40); // first visit comes sooner than the rest
    this.t = 0;
    this.travel = 1;

    this.from = new THREE.Vector3();
    this.to = new THREE.Vector3();
    this.anchor = new THREE.Vector3(0, 0.66, -2.6); // player spot, until told
    this._lastRipple = 0;
  }

  /** Where the player is standing. main.js hands us env.playerSpot. */
  setAnchor(spot) {
    if (spot) this.anchor.copy(spot);
  }

  setLocation(loc) {
    // Every location is waterfront, so he is welcome at all of them; only the
    // timer resets so a location hop does not insta-trigger a visit.
    this.enabled = Boolean(loc);
    this._reset();
    this.timer = randRange(25, 55);
    if (this.enabled) this.load();
  }

  load() {
    if (this.loaded || this.loading) return;
    this.loading = true;
    const loader = new GLTFLoader();

    const loadClip = (url) =>
      loader.loadAsync(url).then((asset) => {
        const clip = asset.animations?.[0] || null;
        // Clip GLBs carry no geometry, but dispose anyway so nothing leaks.
        disposeObject3D(asset.scene);
        return clip;
      });

    Promise.all([loader.loadAsync(BODY_URL), loadClip(SWIM_URL), loadClip(KICK_URL)])
      .then(([bodyAsset, swimClip, kickClip]) => {
        const model = bodyAsset.scene;
        this._normalize(model);
        model.traverse((o) => {
          if (!o.isMesh) return;
          o.castShadow = false;
          o.receiveShadow = false;
          o.frustumCulled = false;
        });

        // Mixer root must be an ancestor of the bones — the clips drive the
        // armature nodes, which are siblings of the SkinnedMesh, not children.
        this.mixer = new THREE.AnimationMixer(model);
        if (swimClip) {
          this.swimAction = this.mixer.clipAction(swimClip);
          this.swimAction.setLoop(THREE.LoopRepeat, Infinity);
        }
        if (kickClip) {
          this.kickAction = this.mixer.clipAction(kickClip);
          this.kickAction.setLoop(THREE.LoopOnce, 1);
          this.kickAction.clampWhenFinished = true;
        }

        this.model = model;
        this.loaded = true;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        console.warn("[dock-visitor] failed to load:", err?.message || err);
      });
  }

  /** Centre on X/Z, drop feet to y = 0, normalise to 1u tall, then scale up. */
  _normalize(model) {
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const holder = new THREE.Group();
    holder.add(model);
    holder.position.set(-center.x, -box.min.y, -center.z);

    const norm = new THREE.Group();
    norm.scale.setScalar(1 / (size.y || 1));
    norm.add(holder);

    this.pivot.add(norm);
    this.pivot.scale.setScalar(this.cfg.height);
  }

  _reset() {
    this.phase = "away";
    this.root.visible = false;
    if (this.swimAction) this.swimAction.stop();
    if (this.kickAction) this.kickAction.stop();
  }

  _beginVisit() {
    if (!this.loaded || !this.enabled) return;
    const c = this.cfg;

    // Stop just off the dock edge, slightly to one side so he is not always
    // dead-centre in the shot.
    this.to.set(
      this.anchor.x + randRange(-1.3, 1.3),
      WATER_Y - c.submerge,
      this.anchor.z - c.standoff,
    );
    // Come in from open water, fanned out a bit so the approach angle varies.
    this.from.set(
      this.to.x + randRange(-7, 7),
      WATER_Y - c.submerge,
      this.to.z - c.runIn,
    );

    this.travel = Math.max(this.from.distanceTo(this.to) / c.speed, 0.5);
    this.t = 0;
    this.phase = "approach";
    this.root.visible = true;
    this._lastRipple = 0;

    this.root.position.copy(this.from);
    this._faceAlong(this.to.x - this.from.x, this.to.z - this.from.z);

    if (this.swimAction) this.swimAction.reset().fadeIn(0.3).play();
  }

  /** Point him along a travel vector, plus the model's own 180 flip. */
  _faceAlong(dx, dz) {
    if (!dx && !dz) return;
    this.root.rotation.y =
      Math.atan2(dx, dz) + THREE.MathUtils.degToRad(this.cfg.baseYawDeg);
  }

  update(dt, effects = null) {
    if (!this.enabled) return;
    if (!this.loaded) {
      this.load();
      return;
    }
    if (this.mixer) this.mixer.update(dt);

    if (this.phase === "away") {
      this.timer -= dt;
      if (this.timer <= 0) this._beginVisit();
      return;
    }

    this.t += dt;

    if (this.phase === "approach") {
      const k = Math.min(this.t / this.travel, 1);
      // Ease out so he coasts into the dock rather than slamming to a stop.
      const e = 1 - Math.pow(1 - k, 3);
      this.root.position.lerpVectors(this.from, this.to, e);
      this._wake(effects, 1.5);
      if (k >= 1) {
        this.t = 0;
        this.phase = "kick";
        // Square up to the player for the kick.
        this._faceAlong(this.anchor.x - this.root.position.x, this.anchor.z - this.root.position.z);
        if (this.swimAction) this.swimAction.fadeOut(0.25);
        if (this.kickAction) this.kickAction.reset().fadeIn(0.25).play();
        if (effects) effects.ripple(this.root.position, 2.2, 0.7);
      }
      return;
    }

    if (this.phase === "kick") {
      const dur = this.kickAction?.getClip()?.duration || 4.9;
      // Lift out of the water for the kick, then settle back in.
      const rise = Math.sin(Math.min(this.t / dur, 1) * Math.PI) * this.cfg.kickRise;
      this.root.position.y = WATER_Y - this.cfg.submerge + rise;
      this._wake(effects, 1.1);
      if (this.t >= dur) {
        this.t = 0;
        this.phase = "depart";
        // Retreat back the way he came, fanned to a fresh exit point.
        this.from.copy(this.root.position);
        this.from.y = WATER_Y - this.cfg.submerge;
        this.to.set(
          this.from.x + randRange(-8, 8),
          this.from.y,
          this.from.z - this.cfg.runIn,
        );
        this.travel = Math.max(this.from.distanceTo(this.to) / this.cfg.speed, 0.5);
        this._faceAlong(this.to.x - this.from.x, this.to.z - this.from.z);
        if (this.kickAction) this.kickAction.fadeOut(0.3);
        if (this.swimAction) this.swimAction.reset().fadeIn(0.3).play();
      }
      return;
    }

    // depart
    const k = Math.min(this.t / this.travel, 1);
    this.root.position.lerpVectors(this.from, this.to, k * k); // ease in, picks up speed
    this._wake(effects, 1.5);
    if (k >= 1) {
      this._reset();
      this.timer = randRange(45, 95);
    }
  }

  /** Occasional surface ripple while he is moving — not one per frame. */
  _wake(effects, scale) {
    if (!effects) return;
    if (this.t - this._lastRipple < 0.9) return;
    this._lastRipple = this.t;
    effects.ripple(this.root.position, scale, 0.5);
  }

  dispose() {
    if (this.mixer) this.mixer.stopAllAction();
    this.scene.remove(this.root);
    disposeObject3D(this.root);
    this.model = null;
    this.mixer = null;
  }
}
