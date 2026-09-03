import {
  n
} from "./chunk-COXZQBSX.js";

// node_modules/@privy-io/react-auth/dist/esm/getErc20Balance-CvWAyRuU.mjs
import { createPublicClient as a, http as t } from "viem";
var n2 = async ({ chain: n3, address: r, appId: c, rpcConfig: i, erc20Address: o }) => {
  let p = a({ chain: n3, transport: t(n(n3, i, c)) });
  return { balance: await p.readContract({ address: o, abi: s, functionName: "balanceOf", args: [r] }).catch((() => 0n)), chain: n3 };
};
var s = [{ constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }];

export {
  n2 as n
};
