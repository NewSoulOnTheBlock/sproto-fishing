// Submits Etherscan verification for the deployed P2E contract suite using
// the exact solidity-standard-json-input that produced the live bytecode, so
// there is no flattening/matching risk.
//
// Usage: node scripts/verify-live.mjs
import 'dotenv/config';
import { readFileSync } from 'node:fs';
import solc from 'solc';
import { AbiCoder } from 'ethers';

const API_KEY = process.env.ETHERSCAN_API_KEY || '';
if (!API_KEY) throw new Error('ETHERSCAN_API_KEY not set in contracts/.env');

const deployment = JSON.parse(readFileSync(new URL('../deployments/ethereum-mainnet.json', import.meta.url), 'utf8'));
const { asset, operatorTreasury, rewardSigner } = deployment;

const files = ['Common.sol', 'BaitStore.sol', 'RewardEscrow.sol', 'TournamentVault.sol', 'SponsoredHotspots.sol', 'HouseReserveVault.sol'];
const sources = Object.fromEntries(files.map((f) => [`contracts/${f}`, { content: readFileSync(new URL(`../contracts/${f}`, import.meta.url), 'utf8') }]));
const standardInput = { language: 'Solidity', sources, settings: { optimizer: { enabled: true, runs: 200 }, outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } } } };

// solc.version() -> "0.8.36+commit.8a079791.Emscripten.clang"; Etherscan wants "v<version>+commit.<hash>".
const rawVersion = solc.version();
const COMPILER_VERSION = `v${rawVersion.split('.Emscripten')[0]}`;

const abiCoder = AbiCoder.defaultAbiCoder();
function encodeCtor(types, values) {
  return abiCoder.encode(types, values).slice(2); // strip 0x; Etherscan wants raw hex
}

const plan = [
  { key: 'baitStore', file: 'BaitStore.sol', name: 'BaitStore', types: ['address', 'address', 'address', 'address', 'address'], args: [asset, operatorTreasury, operatorTreasury, operatorTreasury, operatorTreasury] },
  { key: 'rewardEscrow', file: 'RewardEscrow.sol', name: 'RewardEscrow', types: ['address', 'address'], args: [asset, rewardSigner] },
  { key: 'houseReserveVault', file: 'HouseReserveVault.sol', name: 'HouseReserveVault', types: ['address'], args: [asset] },
  { key: 'tournamentVault', file: 'TournamentVault.sol', name: 'TournamentVault', types: ['address', 'address', 'address', 'address'], args: [asset, operatorTreasury, operatorTreasury, operatorTreasury] },
  { key: 'sponsoredHotspots', file: 'SponsoredHotspots.sol', name: 'SponsoredHotspots', types: ['address', 'address'], args: [asset, operatorTreasury] },
];

const API = 'https://api.etherscan.io/v2/api?chainid=1';

async function submit(step) {
  const address = deployment[step.key];
  const body = new URLSearchParams({
    apikey: API_KEY,
    module: 'contract',
    action: 'verifysourcecode',
    contractaddress: address,
    sourceCode: JSON.stringify(standardInput),
    codeformat: 'solidity-standard-json-input',
    contractname: `contracts/${step.file}:${step.name}`,
    compilerversion: COMPILER_VERSION,
    constructorArguements: encodeCtor(step.types, step.args),
  });
  const res = await fetch(API, { method: 'POST', body });
  const json = await res.json();
  return { address, ...json };
}

async function pollStatus(guid) {
  for (let i = 0; i < 15; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    const res = await fetch(`${API}&module=contract&action=checkverifystatus&guid=${guid}&apikey=${API_KEY}`);
    const json = await res.json();
    if (json.result && json.result.startsWith('Pending')) continue;
    return json;
  }
  return { status: '0', result: 'Timed out waiting for verification result' };
}

for (const step of plan) {
  console.log(`\nSubmitting ${step.name} (${deployment[step.key]})...`);
  const submitRes = await submit(step);
  console.log('  submit response:', JSON.stringify(submitRes));
  if (submitRes.status !== '1') {
    console.error(`  FAILED to submit: ${submitRes.result || submitRes.message}`);
    continue;
  }
  const guid = submitRes.result;
  console.log(`  guid: ${guid} — polling...`);
  const final = await pollStatus(guid);
  console.log('  final:', JSON.stringify(final));
}
