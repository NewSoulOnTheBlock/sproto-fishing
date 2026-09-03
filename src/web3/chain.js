// Ethereum Mainnet EVM config and explorer helpers.
const ENV = import.meta.env || {};

export const NETWORK = 'Ethereum Mainnet';
export const CHAIN_ID = 1;
export const CHAIN_ID_HEX = '0x1';
export const RPC_URL = ENV.VITE_ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com';
export const EXPLORER_BASE = 'https://etherscan.io';

// Canonical WETH9 on Ethereum mainnet.
export const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

// $BITCOIN — HarryPotterObamaSonic10Inu. Verified on-chain: 8 decimals,
// native to Ethereum mainnet, which is the chain the game now transacts on.
export const BITCOIN_TOKEN_ADDRESS = '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9';

export const GAME_TOKEN_ADDRESS = ENV.VITE_GAME_TOKEN_ADDRESS || BITCOIN_TOKEN_ADDRESS;
export const GAME_TREASURY = ENV.VITE_GAME_TREASURY || '0x793a5e8b8Ff431cC2D8eE41e8ec2D9ad70247E60';
export const GAME_TOKEN_SYMBOL = ENV.VITE_GAME_TOKEN_SYMBOL || '$BITCOIN';
export const GAME_TOKEN_DECIMALS = Number(ENV.VITE_GAME_TOKEN_DECIMALS || 8);
export const NATIVE_SYMBOL = 'ETH';

// Redeployed on Ethereum mainnet 2026-09-03 (see contracts/deployments/ethereum-mainnet.json).
export const HELPER_CONTRACTS_DEPLOYED = true;
export const BAIT_STORE_ADDRESS = ENV.VITE_BAIT_STORE_ADDRESS || '0x5F9edB5AFD89c5cb33400ed7e4EB2D06a511424d';
export const REWARD_ESCROW_ADDRESS = ENV.VITE_REWARD_ESCROW_ADDRESS || '0x4C117E9A512BD91926D2cf439F965dA21874b2E6';
export const HOUSE_RESERVE_VAULT_ADDRESS = ENV.VITE_HOUSE_RESERVE_VAULT_ADDRESS || '0x5C8972dcd3533ea71333f1067f213bd4dB541D6a';
export const TOURNAMENT_VAULT_ADDRESS = ENV.VITE_TOURNAMENT_VAULT_ADDRESS || '0xBbeA202632E9bA50A4B2Ae8364cB2743a0C794F2';
export const SPONSORED_HOTSPOTS_ADDRESS = ENV.VITE_SPONSORED_HOTSPOTS_ADDRESS || '0xA5d80b916051E357524914Dfdb67e5E26a4bB9B6';

export const SPROTO_MINT = GAME_TOKEN_ADDRESS;
export const TIDE_TREASURY = GAME_TREASURY;
export const TIDE_SYMBOL = GAME_TOKEN_SYMBOL;

export function explorerAddressUrl(address) { return `${EXPLORER_BASE}/address/${address}`; }
export function explorerTxUrl(hash) { return `${EXPLORER_BASE}/tx/${hash}`; }
export function explorerTokenUrl(address) { return `${EXPLORER_BASE}/token/${address}`; }
export function shortAddress(addr, head = 4, tail = 4) {
  const s = typeof addr === 'string' ? addr : addr?.address || addr?.toString?.();
  if (!s) return '—';
  if (s.length <= head + tail + 1) return s;
  return `${s.slice(0, head)}…${s.slice(-tail)}`;
}
export function toChecksumish(address) { return typeof address === 'string' ? address : address?.toString?.() || ''; }
