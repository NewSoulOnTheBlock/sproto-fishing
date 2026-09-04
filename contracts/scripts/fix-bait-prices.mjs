// BaitStore's constructor hardcoded packs 1-3 using Solidity's `ether` unit
// (10^18 scale) — wrong for $BITCOIN, which has 8 decimals. That made every
// purchase require a balance ~10 billion times larger than intended. Packs
// 4-6 were never initialized at all. setPack() is owner-only and lets us fix
// this without redeploying (which would mean re-updating every address in
// chain.js/api-server all over again).
//
// Prices match src/data/baitData.js's tokenPrice field exactly (1/5/10/25/50/100
// $BITCOIN for tiers 1-6), scaled to the token's real 8 decimals.
//
// Usage: node scripts/fix-bait-prices.mjs
import 'dotenv/config';
import { JsonRpcProvider, Wallet, Contract, formatEther } from 'ethers';

const RPC_URL = process.env.ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com';
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || '';
const BAIT_STORE_ADDRESS = '0x5F9edB5AFD89c5cb33400ed7e4EB2D06a511424d';
const DECIMALS = 8n;
const SCALE = 10n ** DECIMALS;

// [packId, tokenPrice] — from baitData.js
const PACKS = [
  [1, 1n],
  [2, 5n],
  [3, 10n],
  [4, 25n],
  [5, 50n],
  [6, 100n],
];

const ABI = [
  'function setPack(uint256 packId, uint256 price, bool active)',
  'function packs(uint256 packId) view returns (uint256 price, bool active)',
  'function owner() view returns (address)',
];

async function main() {
  if (!/^0x[a-fA-F0-9]{64}$/.test(DEPLOYER_PRIVATE_KEY)) throw new Error('DEPLOYER_PRIVATE_KEY missing/malformed in contracts/.env');
  const provider = new JsonRpcProvider(RPC_URL, 1);
  const wallet = new Wallet(DEPLOYER_PRIVATE_KEY, provider);
  const store = new Contract(BAIT_STORE_ADDRESS, ABI, wallet);

  const owner = await store.owner();
  if (owner.toLowerCase() !== wallet.address.toLowerCase()) {
    throw new Error(`Deployer ${wallet.address} is not the BaitStore owner (${owner}) — can't call setPack.`);
  }

  const balance = await provider.getBalance(wallet.address);
  console.log(`Owner ${wallet.address} balance: ${formatEther(balance)} ETH`);

  for (const [packId, tokenPrice] of PACKS) {
    const raw = tokenPrice * SCALE;
    const before = await store.packs(packId);
    console.log(`Pack ${packId}: currently ${before.price.toString()} raw (active=${before.active}) -> setting ${raw.toString()} raw (${tokenPrice} $BITCOIN)`);
    const tx = await store.setPack(packId, raw, true);
    console.log(`  tx: ${tx.hash}`);
    await tx.wait();
    const after = await store.packs(packId);
    console.log(`  confirmed: ${after.price.toString()} raw, active=${after.active}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
