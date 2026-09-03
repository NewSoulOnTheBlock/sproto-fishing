import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Forward slashes matter: fileURLToPath yields C:\... on Windows and Vite's
// alias matching does not reliably handle backslashes.
const r = (p) => fileURLToPath(new URL(p, import.meta.url)).replace(/\\/g, '/');

export default defineConfig({
  server: {
    port: 8642,
    open: false,
  },
  resolve: {
    alias: {
      // src/vendor/privy/privy-entry.js (pre-bundled by scripts/bundle-privy.mjs)
      // contains one genuine `await import("@farcaster/mini-app-solana")` for a
      // Farcaster login method this game never enables. Privy's own code already
      // wraps it in a try/catch expecting it to fail outside a real Farcaster
      // mini-app, and never reads the import's result. A top-level `resolve.alias`
      // (not build.rollupOptions.external, which is production-only and left the
      // dev server unable to resolve the bare specifier at all, breaking `vite dev`
      // with a hard transform error) satisfies BOTH the dev server and the
      // production bundler the same way.
      '@farcaster/mini-app-solana': r('./src/vendor/stubs/farcaster-mini-app-solana.js'),
    },
  },
  build: {
    target: 'es2022',
    // Source maps for the React/Privy stack add several MB per build; that was
    // enough to fill the disk during development. Also, public source maps
    // publish readable source to anyone who opens devtools. Opt in locally
    // with SOURCEMAP=1 if you need to debug a production build.
    sourcemap: process.env.SOURCEMAP === '1',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'three',
      'three/examples/jsm/objects/Water.js',
      'three/examples/jsm/objects/Sky.js',
    ],
  },
});
