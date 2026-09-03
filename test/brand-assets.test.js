import { existsSync, statSync, readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { CHARACTERS, DEFAULT_CHARACTER } from '../src/data/characters.js';

const requiredAssets = [
  'public/brand/sproto-fishing-logo.png',
  'public/music/brick-in-yo-face.mp3',
];

test('Ethereum sign-in/logo/music assets are shipped from public', () => {
  for (const path of requiredAssets) {
    assert.equal(existsSync(path), true, `${path} should exist`);
    assert.ok(statSync(path).size > 1000, `${path} should not be empty`);
  }
});

test('Sproto and Little John are removed from the playable roster', () => {
  assert.equal(CHARACTERS.some((c) => c.id === 'sproto'), false);
  assert.equal(CHARACTERS.some((c) => c.id === 'little-john'), false);
  assert.notEqual(DEFAULT_CHARACTER, 'sproto');
  assert.notEqual(DEFAULT_CHARACTER, 'little-john');
  assert.equal(DEFAULT_CHARACTER, 'sproto-guardian');
});

test('Sproto Guardian is the default angler and ships its body + clips', () => {
  const guardian = CHARACTERS.find((c) => c.id === DEFAULT_CHARACTER);
  assert.ok(guardian, 'default character should be in the roster');
  assert.equal(guardian.glbClips, true);

  const files = [guardian.url, guardian.anims.idle, guardian.anims.cast];
  for (const url of files) {
    const path = `public${url}`;
    assert.equal(existsSync(path), true, `${path} should exist`);
    assert.ok(statSync(path).size > 1000, `${path} should not be empty`);
  }

  // The clip GLBs are keyframes only — if a mesh ever creeps back in, the
  // per-file cost jumps from ~100 KB to ~14 MB.
  for (const url of [guardian.anims.idle, guardian.anims.cast]) {
    assert.ok(statSync(`public${url}`).size < 1_000_000, `${url} should stay mesh-less`);
  }
});

test('background music playlist points at shipped files', () => {
  const audioManager = readFileSync('src/audio/audioManager.js', 'utf8');
  const listMatch = audioManager.match(/this\.musicPlaylist = \[([\s\S]*?)\];/);
  assert.ok(listMatch, 'musicPlaylist array should be present');
  const tracks = [...listMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.ok(tracks.length > 0, 'musicPlaylist should not be empty');
  for (const url of tracks) {
    const path = `public${url}`;
    assert.equal(existsSync(path), true, `${path} should exist`);
    assert.ok(statSync(path).size > 1000, `${path} should not be empty`);
  }
});

test('main menu and onboarding use the supplied Sproto Ethereum logo', () => {
  const index = readFileSync('index.html', 'utf8');
  const onboarding = readFileSync('src/ui/onboardingUI.js', 'utf8');
  assert.match(index, /title-sproto-logo/);
  assert.match(index, /\/brand\/sproto-fishing-logo\.png/);
  assert.match(onboarding, /onboarding-brand-logo/);
  assert.match(onboarding, /\/brand\/sproto-fishing-logo\.png/);
});
