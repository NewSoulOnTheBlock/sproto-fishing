// Real Ethereum broadcast deployer for the SPROTO FISHING P2E contract suite.
// Compiles with solc, deploys with ethers against a live RPC, and writes the
// resulting addresses/tx hashes to deployments/<network>.json.
//
// Usage: node scripts/deploy-live.mjs [ethereumMainnet|sepolia]
//
// Required env (contracts/.env, gitignored):
//   DEPLOYER_PRIVATE_KEY   funds gas and becomes owner of every contract
//   GAME_TOKEN_ADDRESS     the ERC-20 asset (defaults to $BITCOIN)
//   OPERATOR_TREASURY      reused for every fee-split role in this deploy
//   REWARD_SIGNER_ADDRESS  address RewardEscrow will accept claim signatures from
import 'dotenv/config';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import solc from 'solc';
import { JsonRpcProvider, Wallet, ContractFactory, formatEther } from 'ethers';

const network = process.argv[2] || 'ethereumMainnet';
const isSepolia = network === 'sepolia';
const chainId = isSepolia ? 11155111 : 1;
const rpcUrl = isSepolia
  ? (process.env.SEPOLIA_RPC_URL || 'https://ethereum-sepolia-rpc.publicnode.com')
  : (process.env.ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com');

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || '';
const GAME_TOKEN_ADDRESS = process.env.GAME_TOKEN_ADDRESS || '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9';
const OPERATOR_TREASURY = process.env.OPERATOR_TREASURY || '';
const REWARD_SIGNER_ADDRESS = process.env.REWARD_SIGNER_ADDRESS || '';

function requireAddr(name, value) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(value)) throw new Error(`${name} is missing or not a valid address (got: ${value || '<empty>'})`);
}
requireAddr('GAME_TOKEN_ADDRESS', GAME_TOKEN_ADDRESS);
requireAddr('OPERATOR_TREASURY', OPERATOR_TREASURY);
requireAddr('REWARD_SIGNER_ADDRESS', REWARD_SIGNER_ADDRESS);
if (!/^0x[a-fA-F0-9]{64}$/.test(DEPLOYER_PRIVATE_KEY)) throw new Error('DEPLOYER_PRIVATE_KEY is missing or malformed in contracts/.env');

function compileAll() {
  const files = ['Common.sol', 'BaitStore.sol', 'RewardEscrow.sol', 'TournamentVault.sol', 'SponsoredHotspots.sol', 'HouseReserveVault.sol'];
  const sources = Object.fromEntries(files.map((f) => [`contracts/${f}`, { content: readFileSync(new URL(`../contracts/${f}`, import.meta.url), 'utf8') }]));
  const input = { language: 'Solidity', sources, settings: { optimizer: { enabled: true, runs: 200 }, outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } } } };
  const out = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = (out.errors || []).filter((e) => e.severity === 'error');
  if (errors.length) { console.error(errors); throw new Error('Compilation failed'); }
  return out.contracts;
}

async function main() {
  console.log(`Network: ${network} (chainId ${chainId})`);
  console.log(`RPC: ${rpcUrl}`);
  const contracts = compileAll();
  const provider = new JsonRpcProvider(rpcUrl, chainId);
  const wallet = new Wallet(DEPLOYER_PRIVATE_KEY, provider);
  console.log(`Deployer: ${wallet.address}`);

  const balance = await provider.getBalance(wallet.address);
  console.log(`Deployer balance: ${formatEther(balance)} ETH`);
  const feeData = await provider.getFeeData();
  const gasPrice = feeData.gasPrice || feeData.maxFeePerGas || 0n;
  console.log(`Current gas price: ${gasPrice ? (Number(gasPrice) / 1e9).toFixed(2) : 'unknown'} gwei`);

  const plan = [
    { key: 'baitStore', file: 'BaitStore.sol', name: 'BaitStore', args: [GAME_TOKEN_ADDRESS, OPERATOR_TREASURY, OPERATOR_TREASURY, OPERATOR_TREASURY, OPERATOR_TREASURY] },
    { key: 'rewardEscrow', file: 'RewardEscrow.sol', name: 'RewardEscrow', args: [GAME_TOKEN_ADDRESS, REWARD_SIGNER_ADDRESS] },
    { key: 'houseReserveVault', file: 'HouseReserveVault.sol', name: 'HouseReserveVault', args: [GAME_TOKEN_ADDRESS] },
    { key: 'tournamentVault', file: 'TournamentVault.sol', name: 'TournamentVault', args: [GAME_TOKEN_ADDRESS, OPERATOR_TREASURY, OPERATOR_TREASURY, OPERATOR_TREASURY] },
    { key: 'sponsoredHotspots', file: 'SponsoredHotspots.sol', name: 'SponsoredHotspots', args: [GAME_TOKEN_ADDRESS, OPERATOR_TREASURY] },
  ];

  // Estimate total gas cost up front so a bad RPC/balance mismatch is caught
  // before any transaction is broadcast.
  let totalGas = 0n;
  const factories = {};
  for (const step of plan) {
    const artifact = contracts[`contracts/${step.file}`][step.name];
    const bytecode = artifact.evm.bytecode.object.startsWith('0x') ? artifact.evm.bytecode.object : `0x${artifact.evm.bytecode.object}`;
    const factory = new ContractFactory(artifact.abi, bytecode, wallet);
    factories[step.key] = factory;
    const deployTx = await factory.getDeployTransaction(...step.args);
    const est = await provider.estimateGas({ ...deployTx, from: wallet.address });
    totalGas += est;
    console.log(`  ${step.name}: ~${est.toString()} gas`);
  }
  const estCost = totalGas * (gasPrice || 0n);
  console.log(`Estimated total cost: ~${formatEther(estCost)} ETH (before adding a safety margin)`);
  if (balance < estCost) {
    throw new Error(`Deployer balance (${formatEther(balance)} ETH) is below the estimated cost (${formatEther(estCost)} ETH). Fund ${wallet.address} and retry.`);
  }

  const deployment = { chainId, network, deployedAt: new Date().toISOString(), asset: GAME_TOKEN_ADDRESS, operatorTreasury: OPERATOR_TREASURY, rewardSigner: REWARD_SIGNER_ADDRESS, txHashes: {} };
  for (const step of plan) {
    console.log(`Deploying ${step.name}...`);
    const contract = await factories[step.key].deploy(...step.args);
    const tx = contract.deploymentTransaction();
    console.log(`  tx: ${tx.hash}`);
    await contract.waitForDeployment();
    const address = await contract.getAddress();
    console.log(`  deployed at: ${address}`);
    deployment[step.key] = address;
    deployment.txHashes[step.key] = tx.hash;
  }

  mkdirSync(new URL('../deployments/', import.meta.url), { recursive: true });
  const outName = isSepolia ? 'ethereum-testnet.json' : 'ethereum-mainnet.json';
  writeFileSync(new URL(`../deployments/${outName}`, import.meta.url), JSON.stringify(deployment, null, 2));
  console.log(`\nWrote deployments/${outName}`);
  console.log(JSON.stringify(deployment, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
