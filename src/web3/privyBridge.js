// Privy bridge — the only place React exists in this codebase.
//
// Why React at all: Privy's embedded wallet holds key material in a secure
// cross-origin iframe. The headless @privy-io/js-sdk-core makes YOU host that
// iframe and relay its whole privy:* message protocol by hand. That is a lot of
// bespoke plumbing on the component that guards people's money, so we use the
// officially supported React client and keep it to a single headless island:
// it renders no game UI, it just publishes the embedded wallet's EIP-1193
// provider to wallet.js, which the rest of the game already talks to.
//
// No JSX anywhere, so Vite needs no React plugin and no config change.

// Pre-bundled by scripts/bundle-privy.mjs (run: node scripts/bundle-privy.mjs).
// Vite's production build (rollup) cannot trace named exports across
// @privy-io/js-sdk-core's chunked ESM output — it throws on formatWalletAddress
// specifically. esbuild resolves the same graph fine, so this single flat
// entry point is pre-built once and committed; see src/vendor/README.md.
import {
  createElement as h, useEffect, createRoot,
  PrivyProvider, usePrivy, useWallets, getEmbeddedConnectedWallet,
} from "../vendor/privy/privy-entry.js";
import { CHAIN_ID, RPC_URL, EXPLORER_BASE, NETWORK } from "./chain.js";

export const PRIVY_APP_ID = (import.meta.env || {}).VITE_PRIVY_APP_ID || "";

// viem's Chain shape, written out rather than imported: viem is only present as
// a transitive dependency of Privy, and depending on a transitive is fragile.
const CHAIN = {
  id: CHAIN_ID,
  name: NETWORK,
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] }, public: { http: [RPC_URL] } },
  blockExplorers: { default: { name: "Etherscan", url: EXPLORER_BASE } },
};

const state = {
  ready: false,        // Privy has finished booting
  authenticated: false,
  address: null,       // embedded wallet address
  provider: null,      // EIP-1193 provider for that wallet
  email: null,
  mounted: false,
};
const listeners = new Set();
let api = { login: null, logout: null };

export function privyState() { return { ...state }; }
export function privyConfigured() { return !!PRIVY_APP_ID; }
export function onPrivyChange(cb) {
  listeners.add(cb);
  try { cb(privyState()); } catch {}
  return () => listeners.delete(cb);
}

function publish(patch) {
  Object.assign(state, patch);
  for (const cb of listeners) {
    try { cb(privyState()); } catch (e) { console.error("[privy] listener error", e); }
  }
}

/** Open Privy's login modal. Resolves once a usable wallet exists. */
export async function privyLogin() {
  if (!state.mounted) throw new Error("Sign-in is still loading — try again in a moment.");
  if (state.authenticated && state.provider) return privyState();
  api.login?.();
  return waitForWallet(180000);   // the user may take a while over the email code
}

export async function privyLogout() {
  try { await api.logout?.(); } catch {}
  publish({ authenticated: false, address: null, provider: null, email: null });
}

/** Wait for Privy to report an authenticated wallet with a live provider. */
function waitForWallet(timeoutMs) {
  if (state.authenticated && state.provider) return Promise.resolve(privyState());
  return new Promise((resolve, reject) => {
    const stop = onPrivyChange((s) => {
      if (s.authenticated && s.provider) { clearTimeout(t); stop(); resolve(s); }
    });
    const t = setTimeout(() => { stop(); reject(new Error("Sign-in timed out")); }, timeoutMs);
  });
}

/* ------------------------------------------------------------------ island */
function Bridge() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { wallets } = useWallets();

  useEffect(() => { api = { login, logout }; }, [login, logout]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const email = user?.email?.address || user?.google?.email || null;
      if (!ready || !authenticated) {
        publish({ ready, authenticated: false, address: null, provider: null, email });
        return;
      }
      const w = getEmbeddedConnectedWallet(wallets);
      if (!w) {
        // authenticated, but Privy is still provisioning the embedded wallet
        publish({ ready, authenticated: true, address: null, provider: null, email });
        return;
      }
      let provider = null;
      try {
        provider = await w.getEthereumProvider();
      } catch (e) {
        console.error("[privy] could not open the embedded wallet provider:", e);
      }
      if (cancelled) return;
      publish({ ready, authenticated: true, address: w.address || null, provider, email });
    })();
    return () => { cancelled = true; };
  }, [ready, authenticated, wallets, user]);

  return null;   // Privy renders its own modal into the body
}

/** Boot the island. Safe to call more than once. */
export function mountPrivy() {
  if (state.mounted) return true;
  if (!PRIVY_APP_ID) {
    console.warn("[privy] VITE_PRIVY_APP_ID is not set — sign-in is disabled.");
    return false;
  }
  const host = document.createElement("div");
  host.id = "privy-root";
  document.body.appendChild(host);

  createRoot(host).render(
    h(PrivyProvider, {
      appId: PRIVY_APP_ID,
      config: {
        // No 'wallet' here on purpose: external wallets are intentionally gone,
        // so nobody is ever asked to connect a wallet holding their real assets.
        loginMethods: ["email", "google"],
        embeddedWallets: {
          ethereum: { createOnLogin: "users-without-wallets" },
          showWalletUIs: true,
        },
        defaultChain: CHAIN,
        supportedChains: [CHAIN],
        appearance: {
          theme: "dark",
          accentColor: "#3b82f6",
          logo: "/favicon.svg",
          landingHeader: "Sign in to Sproto Fishing",
          loginMessage: "Your game wallet holds only what you put in it.",
          walletList: [],
        },
      },
    }, h(Bridge))
  );

  state.mounted = true;
  return true;
}

if (typeof window !== "undefined") {
  window.__privy = { state: privyState, login: privyLogin, logout: privyLogout };
}
