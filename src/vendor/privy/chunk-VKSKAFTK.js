import {
  n
} from "./chunk-COXZQBSX.js";

// node_modules/@privy-io/react-auth/dist/esm/getErc20TokenInfo-DluFoVaC.mjs
import { createPublicClient as t, http as e } from "viem";
var n2 = async ({ address: n3, chain: s, rpcConfig: r, privyAppId: o }) => {
  try {
    let l = t({ chain: s, transport: e(n(s, r, o)) }), [m, c] = await Promise.all([l.readContract({ abi: i, address: n3, functionName: "symbol" }), l.readContract({ abi: i, address: n3, functionName: "decimals" })]);
    return { decimals: c, symbol: m };
  } catch (t2) {
    return console.log(t2), null;
  }
};
var i = [{ inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }];

export {
  n2 as n
};
