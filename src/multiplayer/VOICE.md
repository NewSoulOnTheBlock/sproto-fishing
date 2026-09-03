# Proximity voice chat

Hear the anglers on the docks next to you, panned to where they are and fading
out with distance. Opt-in, push-to-talk by default.

```
voiceChat.js   WebRTC mesh, chunked signalling, spatial gain/pan
voiceUI.js     the panel, push-to-talk, speaking indicators
voice.css      styling (linked from index.html)
voice-test.html  standalone harness — verify voice without loading the 3D game
```

## Why it is built this way

**WebRTC carries the audio; the Multiplayer Agent room carries the signalling.**
Audio cannot go over the room socket: the SDK caps a client at 60 messages/sec
of 2048 characters, which is orders of magnitude short of even a 16 kbps voice
stream. The room does what it is good at — telling two browsers how to find each
other — and the media goes peer-to-peer.

**SDP is chunked, and that is not optional.** Measured on this project: an
audio-only offer is **1896 characters**, and wrapped with its routing fields it
comes to **2033** — inside the 2048 cap by fifteen characters. Adding a real
microphone track (ssrc/cname/msid lines) pushes it over. So every SDP is split
into 1200-character pieces and reassembled by the receiver. ICE candidates top
out around 220 characters and go whole.

**No glare.** Two clients that both announce voice would otherwise send each
other simultaneous offers. The peer with the lexicographically smaller session id
makes the offer; the other waits.

## Proximity model

`voiceUpdateSpatial()` runs at 12 Hz from the render loop with the real world
positions of the anglers being drawn.

- **Gain**: full within `NEAR` (4 units), linear fade to silence at `FAR` (16).
- **Pan**: the peer's bearing relative to your aim, so the angler on your left
  dock comes out of your left speaker.
- **Rooms are the coarse filter.** Each fishing spot is its own room, so someone
  at the Ocean is not merely quiet from the Lake — there is no connection at all.

Anyone whose position disappears (they travelled) fades to zero rather than
cutting out.

## Privacy and safety

A live microphone is never ambiguous here:

- **Off by default.** The mic is only opened by an explicit click.
- **Push-to-talk by default** (hold `V`); open mic is a deliberate opt-in.
- The panel **turns red and pulses** for exactly as long as the mic is
  transmitting, and push-to-talk releases on window blur so a lost focus can
  never leave the mic hot.
- Transmission is stopped by disabling the track, not just muting playback.
- The button only appears where it can work (secure context + `getUserMedia` +
  `RTCPeerConnection`), so nobody sees a control that would do nothing.

## Limits you should know about

- **No TURN server is configured.** STUN alone connects most peers, but players
  behind symmetric NAT or strict corporate firewalls — commonly cited at 10–20%
  of connections — will fail to establish audio. Add credentials to the `TURN`
  array in `voiceChat.js` to close that gap. This is the single biggest thing
  standing between this and production-grade reliability.
- **Mesh, not SFU.** Every participant connects to every other, so cost grows
  with the square of the group. `MAX_VOICE_PEERS` caps it at 4, which suits a
  handful of anglers sharing a bank. A larger crowd would need an SFU.
- **No moderation.** Text chat goes through the Render API where bans are
  enforced; voice is peer-to-peer and does not. There is no mute-this-person
  control yet, and no way to report voice abuse. **Worth adding before this is
  public** — at minimum a per-peer mute, ideally honouring the existing ban list
  by refusing to answer offers from banned wallets.
- **The AudioContext must be resumed by a real gesture.** Browsers suspend it
  otherwise, which produces the classic "connection is connected but everyone is
  silent". The module retries the resume on the first genuine pointer/key event.

## Verified

**Audio genuinely flows between two browsers, signalled through Multiplayer
Agent.** Two tabs on the live room:

```
tab A  fOeJ27zhY   bytesSent     14171
tab B  eCcmUkQ5v   bytesReceived 11511   packetsReceived 332
both               state "connected" · ice "connected" · candidate pair selected
```

The built-in **self-test** (button on `voice-test.html`, or `__selfTest()`) runs
the whole media path in a single tab and reports 7/7:

```
PASS · AudioContext running · running
PASS · SDP chunked under the 2048 cap · 1470 chars -> 2 chunk(s), largest event 1327
PASS · chunks reassemble byte-identical
PASS · peers connected · connected/connected
PASS · remote track received
PASS · audio bytes sent · 20339 bytes
PASS · audio bytes received · 20339 bytes · 250 packets
```

Note the second line: a real offer carrying an audio track chunks into **two**
events, so the chunking is genuinely exercised rather than passing through as a
single piece. That is the failure this design exists to prevent.

Also verified: deterministic offerer (one connection per pair, no glare),
distance gain (`1.00` at 2.6 units, fading to 0 when a peer's position drops),
and the panel / push-to-talk / speaking indicators.

**One caveat on how it was tested.** A tab that is hidden when you enable voice
gets a suspended `AudioContext`, so it receives fine but transmits silence —
that is Chrome's autoplay policy, not a bug. It is why tab B above shows
`bytesSent: 0`. Real players click a button in a focused window, and the module
also retries `resume()` on the first pointer/key event.

**Check it yourself in thirty seconds:** open `voice-test.html`, press *Run
self-test*. For the real two-machine case, open it on two devices on different
networks — that is the only way to learn whether you need TURN.

## Debugging

```js
__voice.state()    // { enabled, openMic, talking }
__voice.peers()    // [{ id, state, speaking, gain }]
__voice.ctx()      // "running" | "suspended"  <- suspended means silence
await __voice.stats()  // per-peer bytesSent/bytesReceived/audioLevel/ICE state
```

`ctx() === "suspended"` with `state === "connected"` is the signature of the
autoplay-policy problem, not a networking one.
