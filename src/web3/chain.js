// Robinhood Chain EVM config and explorer helpers.
const ENV = import.meta.env || {};

export const NETWORK = 'Robinhood Chain';
export const CHAIN_ID = 4663;
export const CHAIN_ID_HEX = '0x1237';
export const RPC_URL = ENV.VITE_ROBINHOOD_RPC_URL || 'https://rpc.mainnet.chain.robinhood.com';
export const EXPLORER_BASE = 'https://robinhoodchain.blockscout.com';

export const WETH_ADDRESS = '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73';
// The original Tidal Fishing ERC-20 on Robinhood Chain (symbol=TIDAL,
// 18 decimals). Superseded by $BITCOIN; kept for reference and migration.
export const LEGACY_TIDAL_TOKEN_ADDRESS = '0x6E6e926AAEC6dCD0EDBD49CfC5BC49062Ae80923';

// $BITCOIN — HarryPotterObamaSonic10Inu. Verified on-chain: 8 decimals.
//
// NOTE: this contract lives on ETHEREUM MAINNET (chainId 1), not Robinhood
// Chain. `eth_getCode` at this address on chain 4663 returns 0 bytes. Every
// on-chain feature below (balance reads, burn-to-unlock, the bait store,
// the reward escrow and withdrawals) issues its calls against CHAIN_ID, so
// those calls will fail until either the token is deployed/bridged to 4663
// or the game is repointed at Ethereum. TOKEN_CHAIN_ID makes the mismatch
// checkable at runtime instead of failing silently.
export const BITCOIN_TOKEN_ADDRESS = '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9';
export const TOKEN_CHAIN_ID = Number(ENV.VITE_GAME_TOKEN_CHAIN_ID || 1);

export const GAME_TOKEN_ADDRESS = ENV.VITE_GAME_TOKEN_ADDRESS || BITCOIN_TOKEN_ADDRESS;
export const GAME_TREASURY = ENV.VITE_GAME_TREASURY || '0x793a5e8b8Ff431cC2D8eE41e8ec2D9ad70247E60';
export const GAME_TOKEN_SYMBOL = ENV.VITE_GAME_TOKEN_SYMBOL || '$BITCOIN';
export const GAME_TOKEN_DECIMALS = Number(ENV.VITE_GAME_TOKEN_DECIMALS || 8);

/** True when the configured token is not on the chain the game transacts on. */
export const TOKEN_CHAIN_MISMATCH = TOKEN_CHAIN_ID !== CHAIN_ID;
export const NATIVE_SYMBOL = 'ETH';
export const BAIT_STORE_ADDRESS = ENV.VITE_BAIT_STORE_ADDRESS || '0x9b899e09429750a75BF0a492593b11E42a77Cb0E';
export const REWARD_ESCROW_ADDRESS = ENV.VITE_REWARD_ESCROW_ADDRESS || '0xe5Fa543D9DfF6c3c8deE59A9406896d5470781dA';
export const HOUSE_RESERVE_VAULT_ADDRESS = ENV.VITE_HOUSE_RESERVE_VAULT_ADDRESS || '0xab291894E18f083F45E0fD951b939F5bbaEB5e5a';
export const TOURNAMENT_VAULT_ADDRESS = ENV.VITE_TOURNAMENT_VAULT_ADDRESS || '0xb056A7938E97614Ef30a9C3A850e9c0F0Df643EB';
export const SPONSORED_HOTSPOTS_ADDRESS = ENV.VITE_SPONSORED_HOTSPOTS_ADDRESS || '0xD84bF6567d1D720c5af49b173fa9B6a0f2204dee';

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
