// Stub for @solana-program/system — not a real dependency of this game.
//
// Privy's "fund wallet with an external Solana wallet" flow (and, transitively,
// the x402 payments package it depends on) statically imports this package.
// That flow is only reachable through a Solana funding method we never
// configure (loginMethods is ["email", "google"] and defaultChain is Ethereum
// mainnet), but esbuild still needs every static import in the graph to
// RESOLVE even when the module is only reached via a dynamic import() —
// splitting controls chunking, not whether resolution is required. Rather than
// install a real Solana package this game has no other use for, this stub
// satisfies the import. If it is ever actually called, it fails loudly instead
// of doing something quietly wrong with someone's funds.
function unused(name) {
  return () => { throw new Error(`[stub] ${name} is not implemented — Solana wallet funding is not enabled in this game.`); };
}
export const getTransferSolInstruction = unused("getTransferSolInstruction");
