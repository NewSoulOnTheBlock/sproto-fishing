// Entry point for the pre-bundled Privy vendor file.
//
// Everything privyBridge.js needs from React and Privy is re-exported through
// this single module, which scripts/bundle-privy.mjs flattens with esbuild into
// src/vendor/privy.bundle.js.
//
// Why: rollup (Vite's production bundler) cannot trace named exports across
// Privy's pre-built ESM chunks — it fails on `formatWalletAddress` imported
// from @privy-io/js-sdk-core. esbuild resolves the same graph correctly, which
// is why `vite dev` works and `vite build` does not. Pre-bundling with esbuild
// leaves rollup a single flat file with no cross-package imports to resolve.

export { createElement, useEffect } from "react";
export { createRoot } from "react-dom/client";
export {
  PrivyProvider,
  usePrivy,
  useWallets,
  getEmbeddedConnectedWallet,
} from "@privy-io/react-auth";
