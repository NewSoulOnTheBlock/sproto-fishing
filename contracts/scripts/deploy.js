import 'dotenv/config';
import { mkdirSync, writeFileSync } from 'node:fs';
const network = process.argv[2] || 'ethereumMainnet';
const chainId = network === 'sepolia' ? 11155111 : 1;
const deployment = { chainId, network, deployedAt: new Date().toISOString(), asset: process.env.BITCOIN_TOKEN_ADDRESS || '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9', baitStore: process.env.BAIT_STORE_ADDRESS || '', rewardEscrow: process.env.REWARD_ESCROW_ADDRESS || '', operatorTreasury: process.env.OPERATOR_TREASURY || '', rewardSigner: process.env.REWARD_SIGNER || '', txHashes: {} };
mkdirSync(new URL('../deployments/', import.meta.url), { recursive: true });
const name = chainId === 11155111 ? 'ethereum-testnet.json' : 'ethereum-mainnet.json';
writeFileSync(new URL(`../deployments/${name}`, import.meta.url), JSON.stringify(deployment, null, 2));
console.log(JSON.stringify(deployment, null, 2));
