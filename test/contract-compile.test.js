import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import solc from 'solc';

test('SprotoFishingFishNFT compiles and exposes mintWithClaim', () => {
  const source = readFileSync(new URL('../contracts/SprotoFishingFishNFT.sol', import.meta.url), 'utf8');
  const input = {
    language: 'Solidity',
    sources: { 'SprotoFishingFishNFT.sol': { content: source } },
    settings: { outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } } },
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = (output.errors || []).filter((e) => e.severity === 'error');
  assert.deepEqual(errors, []);
  const contract = output.contracts['SprotoFishingFishNFT.sol'].SprotoFishingFishNFT;
  assert.ok(contract.evm.bytecode.object.length > 1000);
  assert.ok(contract.abi.some((item) => item.type === 'function' && item.name === 'mintWithClaim'));
  assert.ok(contract.abi.some((item) => item.type === 'function' && item.name === 'claimHash'));
});
