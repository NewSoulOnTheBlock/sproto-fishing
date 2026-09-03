import {
  e
} from "./chunk-4X5V72BU.js";
import {
  h
} from "./chunk-SLTT5NIH.js";
import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  s
} from "./chunk-W22FA2JU.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/get-entropy-details-for-user-Bq7nAeEf.mjs
var import_react = __toESM(require_react(), 1);
var l2 = (e3, { chainType: r2, walletIndex: t2 } = {}) => e3?.linkedAccounts.filter(((e4) => !("wallet" !== e4.type || "privy" !== e4.walletClientType || void 0 !== t2 && e4.walletIndex !== t2 || void 0 !== r2 && e4.chainType !== r2))) ?? [];
var d = create((() => ({ ethereumExternal: [], areExternalConnectorsReady: false, ethereumEmbedded: [] })));
var m = (e3) => d.setState({ areExternalConnectorsReady: e3 });
var u = /* @__PURE__ */ (0, import_react.createContext)(false);
var c = () => {
  if ((0, import_react.useContext)(u)) throw new s("Multiple PrivyProvider instances found", "Found multiple instances of PrivyProvider, ensure there is only one mounted in your application tree.");
};
function p() {
  let r2 = (0, import_react.useContext)(u), a = l(), i = d(((e3) => e3.ethereumEmbedded)), s2 = d(((e3) => e3.ethereumExternal)), m2 = d(((e3) => e3.areExternalConnectorsReady)), c2 = e(((e3) => e3.user)), p2 = e(((e3) => e3.hasResolvedInitialUser)), y2 = (0, import_react.useMemo)((() => [...i, ...s2].sort(((e3, r3) => r3.connectedAt - e3.connectedAt))), [i, s2]), f2 = l2(c2, { chainType: "ethereum" }).length > 0, h2 = i.length > 0, w = !!m2 && !!p2 && !!a.walletProxy && (!f2 || h2);
  return r2 ? (0, import_react.useMemo)((() => ({ wallets: y2, ready: w })), [y2, w]) : (console.warn("`useWallets` was called outside the PrivyProvider component"), { wallets: [], ready: false });
}
var y = (e3) => {
  if ("ethereum" === e3.chainType) return { entropyId: e3.address, entropyIdVerifier: "ethereum-address-verifier" };
  if ("solana" === e3.chainType) return { entropyId: e3.address, entropyIdVerifier: "solana-address-verifier" };
  throw Error("Failed to get account entropy details");
};
var f = (e3, r2) => {
  if (r2?.imported) return y(r2);
  let t2 = h(e3);
  if (!t2) throw Error("Failed to find primary wallet");
  return y(t2);
};

export {
  l2 as l,
  d,
  m,
  u,
  c,
  p,
  y,
  f
};
