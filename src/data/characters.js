// Playable characters — the body the player fishes as. Chosen during
// onboarding (right after naming) and changeable later from the Profile.
//
// Every angler is a Meshy biped export processed by
// scripts/build-meshy-angler.mjs into one body GLB (mesh + skin, no animation)
// plus mesh-less keyframe-only clip GLBs. All three share a byte-identical
// 24-joint skeleton (Hips ... headfront), so `glbClips` binds the clips
// straight onto the body's bones with no Mixamo-style retargeting — and a clip
// built for one character can be reused by another (see Sun Smiler's cast).
//
// The angler-body loader (anglerBody.js) normalises every model to a unit
// height, centres it on X/Z and drops its feet to y = 0, so the only per-model
// placement we store here is the rendered `height` (world units) and `yawDeg`
// (which way it faces). `x`/`y`/`z` nudge it relative to the rod.
//
// All values are runtime-tunable via window.__angler.setConfig({...}) so they
// can be eyeballed on a real device and then baked back in here.

export const CHARACTERS = [
  {
    // The game's own mascot angler, and the default body every new player
    // starts in.
    id: "sproto-guardian",
    name: "Sproto Guardian",
    emoji: "🐟",
    blurb: "The cheerful snack guardian of the pier. SPROTO FISHING's own angler.",
    url: "/models/characters/sproto-guardian.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/sproto-guardian-cast.glb",
    },
    rodHand: "RightHand",
    // This model is nearly as wide as it is tall (raw 2.23 x 2.17 x 1.42), and
    // anglerBody normalises on HEIGHT — so the 1.8 used by humanoid rigs makes
    // the Guardian read as ~1.9u wide and crowds the camera. 1.35 sits it on
    // the dock a little taller than the pilings. Eyeballed on the live build
    // via __angler.setConfig({ height, y, z }).
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw 1.70 x 1.66 x 1.08 — the same near-square silhouette as the Guardian,
    // so it takes the same 1.35 height rather than the humanoid 1.8.
    id: "blue-critter",
    name: "Blue Critter",
    emoji: "👍",
    blurb: "Permanently stoked little guy. Thumbs up for every catch, big or small.",
    url: "/models/characters/blue-critter.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/blue-critter-idle.glb",
      cast: "/models/characters/blue-critter-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw 1.68 x 1.70 x 0.87. Its Meshy export shipped no action clip (only the
    // base pose plus walk/run), so it borrows the Guardian's cast — legal
    // because the two rigs share identical bone names, see the header note.
    id: "sun-smiler",
    name: "Sun Smiler",
    emoji: "🌗",
    blurb: "Half sunrise, half sunset — grinning through every tide.",
    url: "/models/characters/sun-smiler.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sun-smiler-idle.glb",
      cast: "/models/characters/sproto-guardian-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
];

export const DEFAULT_CHARACTER = "sproto-guardian";

/** Premium anglers only (what the Shop → Anglers tab lists). Currently empty:
 *  the whole roster is free, so the tab renders its "nothing to unlock" state. */
export const PREMIUM_ANGLERS = CHARACTERS.filter((c) => c.premium);

const BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));

/** Resolve a character config by id, falling back to the default. Saves that
 *  still name a retired angler land here and quietly become the Guardian. */
export function getCharacter(id) {
  return BY_ID[id] || BY_ID[DEFAULT_CHARACTER] || CHARACTERS[0];
}
