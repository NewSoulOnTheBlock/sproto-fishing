// Read-only Ethereum Mainnet balance helpers used by the wallet HUD.

import { SPROTO_MINT, TIDE_SYMBOL, NATIVE_SYMBOL, RPC_URL } from "./chain.js";
import { call, rpc } from "./wallet.js";

export const SOL_DECIMALS = 18;
const ERC20_DECIMALS = "0x313ce567";
const ERC20_BALANCE_OF = "0x70a08231";

function normalizeAddress(pubkeyOrAddress) {
  return typeof pubkeyOrAddress === "string" ? pubkeyOrAddress : pubkeyOrAddress?.address || pubkeyOrAddress?.toString?.();
}
function padAddress(address) { return String(address).toLowerCase().replace(/^0x/, "").padStart(64, "0"); }
function hexToBigInt(hex) { return BigInt(hex && hex !== "0x" ? hex : "0x0"); }
function hexQuantity(n) { return `0x${BigInt(n).toString(16)}`; }

export async function fetchSolBalance(pubkey) {
  const address = normalizeAddress(pubkey);
  if (!address) return 0n;
  try { return hexToBigInt(await rpc("eth_getBalance", [address, "latest"])); }
  catch (e) { console.warn("[ethereum] fetch ETH balance failed:", e?.message ?? e); return 0n; }
}

export async function fetchTideBalance(pubkey) {
  if (!SPROTO_MINT) return null;
  return fetchErc20Balance(pubkey, SPROTO_MINT);
}

export async function fetchSplBalance(pubkey, token = SPROTO_MINT) { return fetchErc20Balance(pubkey, token); }

export async function fetchErc20Balance(pubkey, token = SPROTO_MINT) {
  const address = normalizeAddress(pubkey);
  if (!address || !token) return { raw: 0n, ui: 0, decimals: 18 };
  try {
    const [rawHex, decimalsHex] = await Promise.all([
      call({ to: token, data: ERC20_BALANCE_OF + padAddress(address) }),
      call({ to: token, data: ERC20_DECIMALS }).catch(() => "0x12"),
    ]);
    const raw = hexToBigInt(rawHex);
    const decimals = Number(hexToBigInt(decimalsHex || "0x12"));
    const ui = Number(raw) / 10 ** decimals;
    return { raw, ui, decimals };
  } catch (e) {
    console.warn("[ethereum] fetch ERC20 balance failed:", e?.message ?? e);
    return null;
  }
}

export function formatSol(wei, fractionDigits = 4) {
  const v = Number(typeof wei === "bigint" ? wei : BigInt(Math.floor(Number(wei) || 0))) / 1e18;
  return v.toLocaleString(undefined, { maximumFractionDigits: fractionDigits });
}

export function formatTokens(amount, decimals = 18, fractionDigits = 2) {
  if (amount == null) return "—";
  const v = typeof amount === "bigint" ? Number(amount) / 10 ** decimals : amount;
  return v.toLocaleString(undefined, { maximumFractionDigits: fractionDigits });
}

export { TIDE_SYMBOL, NATIVE_SYMBOL };
