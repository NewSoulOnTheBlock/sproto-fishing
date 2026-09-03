import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8642,
    open: false,
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
      // src/vendor/privy/privy-entry.js (pre-bundled by scripts/bundle-privy.mjs)
      // contains one genuine dynamic import("@farcaster/mini-app-solana") for a
      // Farcaster login method this game never enables (loginMethods is only
      // ["email", "google"]). It is never reached at runtime, so rollup should
      // leave the bare specifier as-is rather than trying to resolve a package
      // that is not installed.
      external: ['@farcaster/mini-app-solana'],
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
