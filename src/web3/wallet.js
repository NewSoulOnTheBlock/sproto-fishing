// Wallet access for Ethereum Mainnet, backed by a Privy embedded wallet.
//
// External/injected wallets (MetaMask, Rabby, Coinbase) are deliberately GONE.
// Players sign in with email or Google and Privy provisions a wallet that exists
// only for this game, so nobody is ever asked to connect a wallet holding the
// rest of their assets. There is nothing here to drain but what a player chose
// to put in.
//
// The public API below is unchanged, because baitStore, payment, fishNft,
// rewardEscrow, session and solPayment all import from this module and none of
// them should know or care where the provider came from.

import { CHAIN_ID_HEX, RPC_URL, EXPLORER_BASE, NETWORK } from "./chain.js";
import {
  mountPrivy, privyLogin, privyLogout, privyState, onPrivyChange, privyConfigured,
} from "./privyBridge.js";

const WALLET_LABEL = "Sproto Wallet";

const listeners = new Set();
let _provider = null;
let _account = null;
let _walletName = null;

function addressObject(address) {
  if (!address) return null;
  return {
    address,
    walletAddress: address,
    toString: () => address,
    toBase58: () => address, // legacy call sites from the Solana-era build
  };
}

function snapshot() {
  return {
    wallet: _provider ? { name: _walletName || WALLET_LABEL, provider: _provider } : null,
    account: addressObject(_account),
  };
}

function emit() {
  const s = snapshot();
  for (const cb of listeners) {
    try { cb(s); } catch (e) { console.error("[wallet] listener error", e); }
  }
}

export function onChange(cb) { listeners.add(cb); cb(snapshot()); return () => listeners.delete(cb); }
export function currentWallet() { return snapshot().wallet; }
export function currentAccount() { return addressObject(_account); }
export function currentWalletAddress() { return addressObject(_account); }
export const currentAccountAddress = currentWalletAddress;
export function currentAddress() { return _account; }

/* Boot Privy as soon as this module is imported, and mirror its state into the
   shape the DOM HUD already listens to. Sessions persist, so a returning player
   is signed in again without touching anything. */
if (typeof window !== "undefined" && privyConfigured()) {
  mountPrivy();
  onPrivyChange((s) => {
    const nextAccount = s.address || null;
    const nextProvider = s.provider || null;
    if (nextAccount === _account && nextProvider === _provider) return;
    _account = nextAccount;
    _provider = nextProvider;
    _walletName = nextAccount ? WALLET_LABEL : null;
    emit();
  });
}

/**
 * There is exactly one wallet now, and the player does not install it. Kept so
 * the existing HUD code that enumerates wallets still has something to render.
 */
export function listWallets() {
  return [{ name: WALLET_LABEL, icon: null, ref: "privy", installed: true, embedded: true }];
}

async function request(provider, method, params = []) {
  if (!provider?.request) throw new Error("Not signed in");
  return provider.request({ method, params });
}

/**
 * Privy provisions the embedded wallet on the chain configured in privyBridge,
 * so it is already on mainnet. We still try a switch for safety, but a provider
 * that does not implement the RPC is not an error worth surfacing.
 */
export async function ensureEthereum(provider = _provider) {
  if (!provider) throw new Error("Not signed in");
  const current = await request(provider, "eth_chainId").catch(() => null);
  if (String(current).toLowerCase() === CHAIN_ID_HEX.toLowerCase()) return true;
  try {
    await request(provider, "wallet_switchEthereumChain", [{ chainId: CHAIN_ID_HEX }]);
    return true;
  } catch (err) {
    if (err?.code === 4902 || err?.data?.originalError?.code === 4902) {
      await request(provider, "wallet_addEthereumChain", [{
        chainId: CHAIN_ID_HEX,
        chainName: NETWORK,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: [RPC_URL],
        blockExplorerUrls: [EXPLORER_BASE],
      }]);
      return true;
    }
    console.warn("[wallet] chain switch unsupported by the embedded provider:", err?.message || err);
    return true;
  }
}

/** Opens Privy sign-in. The argument is ignored; there is only one wallet now. */
export async function connect() {
  if (!privyConfigured()) {
    throw new Error("Sign-in is not configured yet (VITE_PRIVY_APP_ID is missing).");
  }
  mountPrivy();
  const s = await privyLogin();
  _account = s.address || null;
  _provider = s.provider || null;
  _walletName = WALLET_LABEL;
  if (!_account || !_provider) throw new Error("Signed in, but the game wallet is not ready yet.");
  await ensureEthereum(_provider);
  emit();
  return snapshot();
}

export async function disconnect() {
  await privyLogout();
  _provider = null; _account = null; _walletName = null;
  emit();
}

export async function signMessage(messageBytes) {
  if (!_provider || !_account) throw new Error("Not signed in");
  const text = typeof messageBytes === "string" ? messageBytes : new TextDecoder().decode(messageBytes);
  const sig = await request(_provider, "personal_sign", [text, _account]);
  return hexToBytes(sig);
}

export async function sendTransaction(tx) {
  if (!_provider || !_account) throw new Error("Not signed in");
  await ensureEthereum(_provider);
  return request(_provider, "eth_sendTransaction", [{ from: _account, ...tx }]);
}

/* Reads go straight to the public RPC when nobody is signed in, so the shop and
   leaderboards still work for a player who has not signed in yet. */
export async function call(tx, block = "latest") {
  const provider = _provider;
  if (provider?.request) {
    try { return await request(provider, "eth_call", [tx, block]); } catch { /* fall through */ }
  }
  const res = await fetch(RPC_URL, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_call", params: [tx, block] }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message || "eth_call failed");
  return json.result;
}

export async function rpc(method, params = []) {
  const res = await fetch(RPC_URL, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message || `${method} failed`);
  return json.result;
}

function hexToBytes(hex) {
  const clean = String(hex || "").replace(/^0x/, "");
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  return out;
}

/** True once Privy has booted, so the HUD can show a loading state. */
export function walletReady() { return privyState().ready; }
/** The email/Google address behind the wallet, for display. */
export function walletEmail() { return privyState().email; }

// Legacy Solana-era methods, intentionally unsupported.
export async function signTransaction() { throw new Error("Solana transactions are disabled; this game is on Ethereum mainnet."); }
export async function signAndSendTransaction() { throw new Error("Solana transactions are disabled; this game is on Ethereum mainnet."); }
export const WalletSignIn = "eip191:personal_sign";
