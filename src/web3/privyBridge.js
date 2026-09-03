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

import { CHAIN_ID, RPC_URL, EXPLORER_BASE, NETWORK } from "./chain.js";

// The Privy/React stack is loaded from TWO different places depending on how
// the app is served, because the bug that forced the pre-bundled vendor file
// to exist is specific to ROLLUP (Vite's production bundler): rollup cannot
// trace the named export `formatWalletAddress` across @privy-io/js-sdk-core's
// chunked ESM output. Vite's dev server uses esbuild instead, and esbuild
// never had this problem — `vite dev` worked against the raw packages the
// whole time. So dev mode imports the real packages directly (letting Vite's
// well-tested dep-optimizer handle them, one dependency graph, one hash), and
// only the production build reaches for the pre-bundled, code-split
// src/vendor/privy/privy-entry.js (scripts/bundle-privy.mjs; see
// src/vendor/README.md). Shipping 269 raw pre-split vendor files as dev-mode
// PROJECT SOURCE was the actual mistake: Vite's optimizer discovered the many
// `viem` submodules they import incrementally, one file at a time, and kept
// re-triggering full re-optimization passes — that is what a wall of 503s and
// a second dependency hash appearing mid-load meant, not a hang.
//
// h/useEffect/createRoot/PrivyProvider/usePrivy/useWallets/
// getEmbeddedConnectedWallet are resolved once, lazily, by ensureDeps() below.
// Bridge() only ever executes after that resolution completes, because
// mountPrivy() awaits it before calling render().
let h, useEffect, createRoot, PrivyProvider, usePrivy, useWallets, getEmbeddedConnectedWallet;
let depsPromise = null;
function ensureDeps() {
  if (depsPromise) return depsPromise;
  depsPromise = (import.meta.env.DEV
    ? Promise.all([import("react"), import("react-dom/client"), import("@privy-io/react-auth")])
    : import("../vendor/privy/privy-entry.js").then((m) => [m, m, m])
  ).then(([react, reactDom, privy]) => {
    h = react.createElement; useEffect = react.useEffect;
    createRoot = reactDom.createRoot;
    ({ PrivyProvider, usePrivy, useWallets, getEmbeddedConnectedWallet } = privy);
  });
  return depsPromise;
}

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

/** Boot the island. Safe to call more than once (and before ensureDeps resolves). */
export async function mountPrivy() {
  if (state.mounted) return true;
  if (!PRIVY_APP_ID) {
    console.warn("[privy] VITE_PRIVY_APP_ID is not set — sign-in is disabled.");
    return false;
  }
  state.mounted = true;   // claim it now so a second concurrent call doesn't double-mount
  await ensureDeps();

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

  return true;
}

if (typeof window !== "undefined") {
  window.__privy = { state: privyState, login: privyLogin, logout: privyLogout };
}
