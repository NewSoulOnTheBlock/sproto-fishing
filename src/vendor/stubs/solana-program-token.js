// Stub for @solana-program/token — see solana-program-system.js for why this
// exists. Same story: only reachable through a Solana funding / x402 payment
// flow this game never enables, and stubbed rather than installed for real.
function unused(name) {
  return () => { throw new Error(`[stub] ${name} is not implemented — Solana wallet funding is not enabled in this game.`); };
}
// Not a real Solana program address — 11111... is the actual System Program ID,
// so an obviously-invalid placeholder is used instead to avoid any chance of
// this getting confused for a real address if some code ever reads the value
// without calling anything.
export const TOKEN_PROGRAM_ADDRESS = "STUB_TOKEN_PROGRAM_NOT_A_REAL_ADDRESS";
export const findAssociatedTokenPda = unused("findAssociatedTokenPda");
export const fetchMint = unused("fetchMint");
export const fetchToken = unused("fetchToken");
export const getCreateAssociatedTokenInstructionAsync = unused("getCreateAssociatedTokenInstructionAsync");
export const getCreateAssociatedTokenIdempotentInstruction = unused("getCreateAssociatedTokenIdempotentInstruction");
export const getTransferInstruction = unused("getTransferInstruction");
export const getTransferCheckedInstruction = unused("getTransferCheckedInstruction");
