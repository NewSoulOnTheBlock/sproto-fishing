import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { CHARACTERS, DEFAULT_CHARACTER, getCharacter } from '../src/data/characters.js';

test('Sproto Guardian is the default and the first angler offered', () => {
  assert.equal(DEFAULT_CHARACTER, 'sproto-guardian');
  assert.equal(CHARACTERS[0].id, 'sproto-guardian', 'should head the chooser list');
  assert.equal(CHARACTERS[0].premium, undefined, 'the starting angler must not be locked');
});

test('the roster is exactly the three shipped anglers', () => {
  assert.deepEqual(CHARACTERS.map((c) => c.id), ['sproto-guardian', 'blue-critter', 'sun-smiler']);
});

test('every model and clip a character names is actually on disk', () => {
  // 25 retired model files were deleted with the old roster; a dangling url
  // here is a silent 404 that leaves the player with no visible body.
  for (const c of CHARACTERS) {
    for (const url of [c.url, ...Object.values(c.anims || {})]) {
      assert.ok(existsSync(`public${url}`), `${c.id}: missing ${url}`);
    }
  }
});

test('nothing hardcodes a character id instead of DEFAULT_CHARACTER', () => {
  // gameState.js and profileUI.js both used to pin "r2d2" directly, which
  // silently overrode DEFAULT_CHARACTER for every new profile.
  for (const file of ['src/state/gameState.js', 'src/ui/profileUI.js']) {
    const src = readFileSync(file, 'utf8');
    assert.ok(/DEFAULT_CHARACTER/.test(src), `${file} should reference DEFAULT_CHARACTER`);
    assert.equal(/character:\s*["']r2d2["']|\|\|\s*["']r2d2["']/.test(src), false,
      `${file} should not hardcode a character id`);
  }
});

test('pre-rebrand saves migrate onto the current default exactly once', () => {
  const src = readFileSync('src/state/saveLoad.js', 'utf8');
  assert.match(src, /migrateDefaultCharacter/);
  // The migration must run on the merged state inside loadGame, not be dead
  // code — it may be wrapped by other migrations, but it must be in the chain.
  assert.match(src, /assignState\((?:\w+\()*\s*migrateDefaultCharacter\(/);
  // And it must be one-shot, so a deliberate later pick is never clobbered.
  assert.match(src, /profile\.characterMigrated/);
});

test('saves naming a retired angler fall back to the default', () => {
  // A player mid-run as Naruto/Bonk/etc. must not end up with an empty
  // selection once those characters leave the roster.
  assert.equal(getCharacter('naruto').id, DEFAULT_CHARACTER);
  const src = readFileSync('src/state/saveLoad.js', 'utf8');
  assert.match(src, /assignState\((?:\w+\()*\s*migrateRetiredCharacter\(/,
    'loadGame must run migrateRetiredCharacter on the merged state');
  assert.match(src, /migrateRetiredCharacter\(deepMerge/,
    'the wallet-slot load must run it too');
});
