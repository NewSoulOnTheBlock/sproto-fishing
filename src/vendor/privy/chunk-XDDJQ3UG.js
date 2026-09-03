import {
  l
} from "./chunk-THXMRURJ.js";
import {
  O2 as O
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// src/vendor/stubs/solana-program-token.js
function unused(name) {
  return () => {
    throw new Error(`[stub] ${name} is not implemented \u2014 Solana wallet funding is not enabled in this game.`);
  };
}
var TOKEN_PROGRAM_ADDRESS = "STUB_TOKEN_PROGRAM_NOT_A_REAL_ADDRESS";
var findAssociatedTokenPda = unused("findAssociatedTokenPda");
var fetchMint = unused("fetchMint");
var fetchToken = unused("fetchToken");
var getCreateAssociatedTokenInstructionAsync = unused("getCreateAssociatedTokenInstructionAsync");
var getCreateAssociatedTokenIdempotentInstruction = unused("getCreateAssociatedTokenIdempotentInstruction");
var getTransferInstruction = unused("getTransferInstruction");
var getTransferCheckedInstruction = unused("getTransferCheckedInstruction");

// node_modules/@privy-io/react-auth/dist/esm/use-sign-with-user-signer-CCJur_Cn.mjs
var import_react = __toESM(require_react(), 1);
var i = () => {
  let { walletProxy: i2, initializeWalletProxy: a, client: s } = l();
  return (0, import_react.useMemo)((() => ({ signWithUserSigner: async ({ message: t2, targetAppId: r }) => {
    let n = i2 ?? await a(O);
    if (!n) throw Error("Wallet proxy not initialized");
    let o = await s.getAccessToken();
    if (!o) throw Error("User must be authenticated");
    let { signature: l2 } = await n.signWithUserSigner({ accessToken: o, message: t2, targetAppId: r });
    return { signature: l2 };
  } })), [i2, s]);
};

export {
  TOKEN_PROGRAM_ADDRESS,
  findAssociatedTokenPda,
  getCreateAssociatedTokenIdempotentInstruction,
  getTransferInstruction,
  i
};
