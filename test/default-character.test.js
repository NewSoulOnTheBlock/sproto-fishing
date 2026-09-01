import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CHARACTERS, DEFAULT_CHARACTER } from '../src/data/characters.js';

test('Sproto Guardian is the default and the first angler offered', () => {
  assert.equal(DEFAULT_CHARACTER, 'sproto-guardian');
  assert.equal(CHARACTERS[0].id, 'sproto-guardian', 'should head the chooser list');
  assert.equal(CHARACTERS[0].premium, undefined, 'the starting angler must not be locked');
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
  // The migration must run on the merged state inside loadGame, not be dead code.
  assert.match(src, /assignState\(\s*migrateDefaultCharacter\(/);
  // And it must be one-shot, so a deliberate later pick is never clobbered.
  assert.match(src, /profile\.characterMigrated/);
});
