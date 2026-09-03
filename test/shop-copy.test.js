import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const SHOP_VISIBLE_COPY = readFileSync(new URL('../src/ui/shop.js', import.meta.url), 'utf8');
const TUTORIAL_COPY = readFileSync(new URL('../src/ui/tutorialUI.js', import.meta.url), 'utf8');
const BAIT_COPY = readFileSync(new URL('../src/data/baitData.js', import.meta.url), 'utf8');

test('shop only offers $BITCOIN as a payment method, not ETH or Solana/SBF labels', () => {
  const copy = [SHOP_VISIBLE_COPY, TUTORIAL_COPY, BAIT_COPY].join('\n');
  assert.match(copy, /Pay with \$BITCOIN/);
  assert.doesNotMatch(copy, /Pay with ETH|Buy ×\$\{qty\} bait · ETH/);
  assert.doesNotMatch(copy, /Pay with SOL|Buy ×\$\{qty\} bait · SOL|<b>SOL<\/b>|\$SBF|Pay with SBF/);
});
