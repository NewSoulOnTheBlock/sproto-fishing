# Shared world (Multiplayer Agent)

Real-time presence for SPROTO FISHING: the anglers standing on your bank, live.

```
mpConfig.js       key, endpoints, per-location placement, tuning
mpClient.js       socket, room-per-spot, publish/subscribe
remoteAnglers.js  draws the other anglers (and their docks) in the Three.js scene
```

## Scope — read this before extending it

**This layer carries presence only.** Catches, rewards, XP, bans, NFTs and the
leaderboard stay on the Render api-server, which remains the single source of
truth for anything worth money. Nothing in `src/multiplayer/` can pay anybody.

The catch feed is deliberately untrusted: it is a flavour broadcast, and
`economy.registerCatch()` is what actually counts the fish. A client that lies
into the feed gets a fake toast on someone's screen and nothing else. Keep it
that way — giving rewards a second write path would be a security regression,
not a feature.

## Why this exists alongside world.js

`src/web3/world.js` already polls the Render API for a global online count and
the daily hot spot. That is fine for a number in a badge, but far too slow to
show a *person*: presence heartbeats every 30s, world snapshot every 60s. This
module opens a WebSocket room instead, so peers update ~8×/sec.

The two coexist: world.js still owns the global "🌊 N fishing now" badge and the
catch of the day; this owns who is at *your* spot.

## Backend

| | |
|---|---|
| Game | Sproto Fishing |
| Publishable key | `pk_live_053666f79413dd2350294acd413ed860e42616589c57167d` |
| Rooms | `lake`, `river`, `pier`, `ocean` — one per fishing spot |
| Mode | relay (no server logic deployed; none is needed for presence) |

Adding a location: add its id to `MP_ROOMS`, give it a `PLACEMENT` entry, and
define the room with the `define_room_type` MCP tool. Rooms auto-create on first
join, so a missing definition degrades to defaults rather than breaking.

## Placement — why it differs per spot

Every builder puts the player at **x = 0 facing −Z**, but the spots are not
alike, so one offset scheme would put people in mid-air:

| Spot | Mode | Why |
|---|---|---|
| lake, river | `bank` | Open shore. Peers spread left/right — **and each gets their own jetty**, because the main dock is only 2.4 wide (x ∈ [−1.2, 1.2]) and anyone offset along the bank would otherwise stand on open water. |
| pier | `line` | The pier is 2.8 wide with railings at x = ±1.32. Peers queue up it single file, the way a real pier looks. No extra dock — they are already on the main deck, and a second one would clip through it. |
| ocean | `boats` | The player is on a 2.5-wide boat, not a dock. Peers get their own skiffs in a loose flotilla. |

Peer dock height is derived as `playerSpot.y − 0.04`, because every builder sets
`playerSpot` to `deckY + 0.04`. That makes it correct for all four spots without
hard-coding heights.

## Things worth knowing

- **Fails soft, always.** No SDK, no socket, a full room, a blocked CDN — the
  game runs exactly as before and simply shows nobody. Every entry point is
  guarded; nothing here can throw into the render loop.
- **Publishing does not depend on `requestAnimationFrame`.** `mpPublish` is
  called from the render loop, but browsers pause rAF in a background tab, which
  would freeze a player in place for everyone else mid-cast. A 1 Hz timer keeps
  presence honest, and returning to the tab forces a full resend.
- **Sticky slots.** A peer keeps its position for as long as it is present, so
  someone leaving does not shuffle everybody along the bank.
- **Render caps.** Bodies reuse `createAnglerBody`, and VRM avatars are
  texture-heavy — so rendering is capped per location (`PLACEMENT[].max`) and
  drops to `MAX_RENDERED_LOW` on the low-quality preset. The *count* and the
  catch feed are never capped; only how many bodies get built.
- **Everything is disposed on travel.** `RemoteAnglers.setLocation()` tears down
  every peer body, dock and nameplate texture. Leaking VRMs would get expensive
  fast.

## Debugging

`window.__mp` in the console:

```js
__mp.room()      // "lake"
__mp.here()      // anglers at this spot, including you
__mp.peers()     // [{ id, name, char, yaw, st, bx, bz, lvl }]
__mp.broadcast({ name: "Emperor Ray", rarity: "legendary" }, 12.4)  // test the feed
```

`window.__remoteAnglers.entries` is the live map of rendered peers.

> In Vite dev, `import("/src/multiplayer/mpClient.js")` from the console returns
> a **different module instance** than the running app (HMR appends a `?t=`
> query), so its `mp` will be null. Use `window.__mp`, not a fresh import.

## Verified

Two live clients on the lake room: mutual presence (`here: 2`), remote body built
at the correct bank slot with a 24-mesh jetty under it, name propagating from a
*backgrounded* tab (proving the rAF-independent publish), and a catch relaying as
`{who:"RiverRat", fish:"Emperor Ray", rarity:"legendary", weight:12.4}`.
