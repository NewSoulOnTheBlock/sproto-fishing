// Pre-bundles Privy + React with esbuild into one flat ESM file.
//
// Why this script exists: Vite's dev server pre-bundles dependencies with
// esbuild and Privy works fine there. Vite's PRODUCTION build hands the same
// dependency graph to rollup, and rollup cannot trace the named export
// `formatWalletAddress` across @privy-io/js-sdk-core's pre-built ESM chunks —
// it throws at build time. esbuild resolves the identical graph without
// complaint, so we run esbuild ourselves once, ahead of time, and give rollup
// a single already-flattened file with no cross-package imports left to
// resolve.
//
// Run manually with `node scripts/bundle-privy.mjs` whenever the Privy or
// React versions change. The output is committed (see src/vendor/README.md)
// so a normal `vite build` never needs esbuild or network access.

import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { rmSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const entry = join(__dirname, "..", "src", "vendor", "privy-entry.js");
const outdir = join(__dirname, "..", "src", "vendor", "privy");

// Code-splitting matters here, not just flattening. Solana wallet funding,
// Farcaster mini-apps, Abstract chain and Base smart accounts are all reached
// only through Privy's internal dynamic import()s for UI a game with
// loginMethods: ["email", "google"] never renders. Bundling to a single
// `outfile` forces esbuild to inline those dynamic imports eagerly, which is
// what pulled in @solana-program/system et al and produced unresolved
// externals. With `outdir` + `splitting: true`, each lazy branch becomes its
// own chunk that is only fetched if that UI is actually reached - which here
// is never, so those chunks (and their unresolved deps) simply never load.
rmSync(outdir, { recursive: true, force: true });

const result = await build({
  entryPoints: [entry],
  outdir,
  entryNames: "privy-entry",
  chunkNames: "chunk-[hash]",
  bundle: true,
  splitting: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  minify: false,       // rollup minifies the final app bundle; keep this readable for diffs
  sourcemap: false,
  metafile: true,
  logLevel: "info",
  external: [
    "viem", "viem/*",              // a normal, hoisted npm package - let Vite's rollup resolve it directly
    "@farcaster/mini-app-solana",  // only reached via a genuine dynamic import() for a login method we never enable
  ],
  alias: {
    // These two are resolved but never executed: see src/vendor/stubs/*.js
    // for why. Every other optional peer (Farcaster, Abstract, Base smart
    // accounts, permissionless) is reached only via a dynamic import() whose
    // own static imports esbuild does not need to touch until that chunk is
    // actually built, and none of them showed up as resolve errors - only
    // these two Solana packages, imported eagerly by the funding component.
    "@solana-program/system": join(__dirname, "..", "src", "vendor", "stubs", "solana-program-system.js"),
    "@solana-program/token": join(__dirname, "..", "src", "vendor", "stubs", "solana-program-token.js"),
  },
});

const bytes = Object.values(result.metafile.outputs).reduce((n, o) => n + o.bytes, 0);
console.log(`\nbundled -> ${outdir}  (${Object.keys(result.metafile.outputs).length} files, ${(bytes / 1024).toFixed(0)} KB total)`);

// Fail loudly if any chunk still references something unresolved - that means
// a code path we DO use pulled in a dependency we have not accounted for.
const EXPECTED_EXTERNAL = ["viem", "@farcaster/mini-app-solana"];
const stray = Object.values(result.metafile.outputs)
  .flatMap((o) => (o.imports || []))
  .filter((i) => i.external && !EXPECTED_EXTERNAL.some((p) => i.path.startsWith(p)));
if (stray.length) {
  console.error("\nUnexpected external imports survived splitting:", stray);
  process.exit(1);
}
