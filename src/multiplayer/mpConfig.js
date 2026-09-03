// Multiplayer Agent — configuration for the real-time shared world.
//
// SCOPE, deliberately narrow: this layer carries PRESENCE ONLY — who is on your
// bank, where their bobber is, and what they just pulled out. Catches, rewards,
// bans, NFTs and the leaderboard stay on the Render api-server, which remains
// the single source of truth for anything worth money. Nothing in here can pay
// anybody, and the game must run exactly as before if it fails to connect.

export const MP_KEY = "pk_live_053666f79413dd2350294acd413ed860e42616589c57167d";
export const MP_ENDPOINT = "wss://live.multiplayeragent.com";
export const MP_API = "https://api.multiplayeragent.com";
export const MP_SDK_URL = "https://cdn.multiplayeragent.com/sdk/mp.global.js";

// One room per fishing spot. A room is just a name, so extra locations are free:
// add the id here and it works. Ids must match LOCATIONS[].id in locationData.js.
export const MP_ROOMS = ["lake", "river", "pier", "ocean"];

// How often we publish our own state. Yaw changes every frame; the SDK caps a
// client at 60 messages/sec, so we stay well under and only send real changes.
export const PUBLISH_HZ = 8;
export const YAW_EPSILON = 0.03;   // radians — below this, not worth a message

// Where other anglers stand. The player always stands at x=0 facing -Z, so the
// right answer differs per location: an open bank spreads sideways, but the
// pier is 2.8 units wide (railings at x=±1.32) and the ocean is a 2.5-wide
// boat — peers offset sideways there would float in mid-air.
export const PLACEMENT = {
  // open shoreline: spread left and right along the bank
  lake:  { mode: "bank",  step: 2.6, max: 4 },
  river: { mode: "bank",  step: 2.4, max: 4 },
  // a narrow dock: queue up single file behind you, the way a real pier looks
  pier:  { mode: "line",  step: 3.0, max: 4 },
  // open water: everyone gets their own skiff, arranged in a loose flotilla
  ocean: { mode: "boats", radius: 8.5, spread: 2.1, max: 3 },
};
export const PLACEMENT_FALLBACK = { mode: "bank", step: 2.6, max: 4 };

// Remote anglers reuse createAnglerBody, and VRM avatars are texture-heavy, so
// the render cap drops on the low-quality preset. Presence (the count and the
// catch feed) is unaffected — only how many bodies get built.
export const MAX_RENDERED_LOW = 2;

// Ignore a peer we have not heard from in this long (they are mid-reconnect or
// their tab froze). They stay counted, they just stop being drawn.
export const PEER_STALE_MS = 45000;
