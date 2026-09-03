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
  {
    // Raw 2.21 x 1.77 x 0.91 — the first angler that is decidedly wider than it
    // is tall (1.25:1, where the other three sit near 1:1). Since anglerBody
    // normalises on HEIGHT, the usual 1.35 would render it ~1.69u across, well
    // past the ~1.33-1.39u the rest of the roster occupies. 1.10 puts it at
    // ~1.37u wide, in line with the others. Height, not width, is the knob —
    // eyeball it with __angler.setConfig({ height }) and bake back in.
    //
    // Like Sun Smiler, its export shipped no action clip (base pose plus
    // walk/run), so it borrows the Guardian's cast — same 24-joint skeleton.
    id: "sonic-beakster",
    name: "Sonic Beakster",
    emoji: "🐦",
    blurb: "All beak, no brakes. Casts first and reads the tide chart later.",
    url: "/models/characters/sonic-beakster.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sonic-beakster-idle.glb",
      cast: "/models/characters/sproto-guardian-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.10,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.80, in line with the near-1:1 roster, so it takes the
    // standard 1.35. Its export shipped a jump clip instead of a dedicated
    // cast, but the hop reads perfectly as an enthusiastic cast.
    id: "sneaker-heron",
    name: "Sneaker Heron",
    emoji: "🦩",
    blurb: "Real herons fish for a living. This one just does it in better shoes.",
    url: "/models/characters/sneaker-heron.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/sneaker-heron-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.73. Export's signature move was a sliding roll rather than a
    // jump — still reads fine as a cast.
    id: "blueberry-grin",
    name: "Blueberry Grin",
    emoji: "🫐",
    blurb: "Permanently pleased with itself. Slides into every cast.",
    url: "/models/characters/blueberry-grin.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/blueberry-grin-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.93, the roster's squarest silhouette after the Guardian.
    // Export shipped no action clip at all (only run/walk), so like Sun
    // Smiler it borrows the Guardian's cast.
    id: "rainbow-buddy",
    name: "Rainbow Buddy",
    emoji: "🌈",
    blurb: "Colorful, cheerful, and always up for one more cast.",
    url: "/models/characters/rainbow-buddy.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/sproto-guardian-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.70. Export's signature move was a parkour vault, repurposed
    // as an acrobatic cast.
    id: "bowling-buddy",
    name: "Bowling Buddy",
    emoji: "🎳",
    blurb: "Strikes on the lanes, now going for one on the water.",
    url: "/models/characters/bowling-buddy.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/bowling-buddy-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.80. Export's signature move was a two-handed reaping sword
    // swing — casts the rod like a blade.
    id: "samurai-pepe",
    name: "Samurai Pepe",
    emoji: "🗡️",
    blurb: "Cuts through the water like it insulted his honor.",
    url: "/models/characters/samurai-pepe.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/samurai-pepe-cast.glb",
    },
    rodHand: "RightHand",
    height: 1.35,
    yawDeg: 180,
    x: 0,
    y: 0,
    z: -0.15,
  },
  {
    // Raw W/H ~0.57, the tallest/narrowest silhouette in the roster — still
    // comfortably under the >1 ratio that forced Sonic Beakster's 1.10, so it
    // keeps the standard 1.35. Export's signature move was a flying fist kick.
    id: "blue-blaze",
    name: "Blue Blaze",
    emoji: "🥋",
    blurb: "Trained for combat. Settled for casting a mean line instead.",
    url: "/models/characters/blue-blaze.glb",
    glbClips: true,
    anims: {
      idle: "/models/characters/sproto-guardian-idle.glb",
      cast: "/models/characters/blue-blaze-cast.glb",
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
