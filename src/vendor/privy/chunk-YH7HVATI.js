import {
  n
} from "./chunk-COXZQBSX.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/useWalletBalance-D47dI-xh.mjs
var import_react = __toESM(require_react(), 1);
import { createPublicClient as n2, http as o } from "viem";
function s({ rpcConfig: s2, appId: l2, address: m, chain: d }) {
  let { chains: p } = l(), [f, u] = (0, import_react.useState)(0n), [h, g] = (0, import_react.useState)(false), b = (0, import_react.useMemo)((() => {
    let r2 = d || p[0];
    if (r2) return n2({ chain: d, transport: o(n(r2, s2, l2)) });
  }), [d, s2, l2]), j = (0, import_react.useCallback)((async () => {
    if (!m || !b) return;
    g(true);
    let r2 = await b.getBalance({ address: m }).catch(console.error);
    return r2 ? (u(r2), g(false), r2) : void 0;
  }), [b, m, u]);
  return (0, import_react.useEffect)((() => {
    j().catch(console.error);
  }), []), { balance: f, isLoading: h, reloadBalance: j };
}

export {
  s
};
