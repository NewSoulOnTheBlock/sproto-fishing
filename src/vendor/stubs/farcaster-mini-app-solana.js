// Stub for @farcaster/mini-app-solana.
//
// Privy's own code already treats this import as optional: it wraps
// `await import("@farcaster/mini-app-solana")` in a try/catch and logs
// "package may not be installed" on failure, gated behind detecting whether
// the page is running inside an actual Farcaster mini-app (user agent /
// window.farcaster / URL params) — something this game never is. The import's
// result isn't even read (`await import(...), console.debug(...)`), so an
// empty module is a complete, correct stand-in: it resolves cleanly for both
// Vite's dev-server transform and the production bundler, and Privy's own
// try/catch already handles the case where the real package would fail to
// load in an actual Farcaster context we never reach.
export {};
