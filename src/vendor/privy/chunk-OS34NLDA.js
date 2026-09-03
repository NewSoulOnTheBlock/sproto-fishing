import {
  a
} from "./chunk-RKJUPTLR.js";
import {
  X,
  te
} from "./chunk-K7OVQEWY.js";
import {
  s as s2
} from "./chunk-YH7HVATI.js";
import {
  $ as $2
} from "./chunk-JIT2Z6LY.js";
import "./chunk-W2GJWPY6.js";
import {
  n as n3
} from "./chunk-VKSKAFTK.js";
import "./chunk-6EXMXTND.js";
import {
  f
} from "./chunk-UAWFTMBF.js";
import "./chunk-VAKKZBAS.js";
import "./chunk-RSVXHVWT.js";
import "./chunk-FUH2YWOK.js";
import "./chunk-NH742RS2.js";
import "./chunk-52LU76MD.js";
import "./chunk-5ZNWNVDZ.js";
import "./chunk-EPRUW2QI.js";
import "./chunk-JFVQGRVD.js";
import "./chunk-KDNCCGXL.js";
import "./chunk-RN3TQCJB.js";
import "./chunk-KLSNZW7N.js";
import "./chunk-YR2QF5GA.js";
import "./chunk-CPWWWFCX.js";
import "./chunk-76DEAMJ5.js";
import "./chunk-OBV6VSAS.js";
import "./chunk-3FZKW4WI.js";
import "./chunk-VIKQUUIS.js";
import "./chunk-SGK7A445.js";
import "./chunk-4M5GFLTB.js";
import "./chunk-FDAXBPM5.js";
import {
  t as t2
} from "./chunk-Q3DIV3BS.js";
import {
  t
} from "./chunk-FAFNMCNW.js";
import "./chunk-ZZ27HOQC.js";
import {
  c as c2,
  m as m2,
  n as n2
} from "./chunk-W3FIRIBO.js";
import "./chunk-WLRIHMQB.js";
import {
  c
} from "./chunk-2HYLPLOV.js";
import "./chunk-NOC53GNL.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QM2ZBVYE.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-GIDVL7W3.js";
import "./chunk-P6V6I22J.js";
import "./chunk-MK657462.js";
import "./chunk-C2ILIC2D.js";
import {
  n
} from "./chunk-I3STI6GC.js";
import "./chunk-WSIRTJK5.js";
import {
  d
} from "./chunk-VC62FKIT.js";
import "./chunk-34BVSFPO.js";
import "./chunk-E74RKHPY.js";
import "./chunk-EOSGBBZ3.js";
import {
  s
} from "./chunk-EIEISV5R.js";
import "./chunk-623CPBW2.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  L,
  b,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import {
  $
} from "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import {
  Pi
} from "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  C,
  m
} from "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  l as l2,
  o
} from "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  O,
  g2 as g,
  qi,
  se,
  wn
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/index-Bze8Ltq-.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { createPublicClient as o2, http as p, toHex as l3, decodeFunctionData as m3, decodeAbiParameters as u, formatEther as c3 } from "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/utils";
import "viem/accounts";
var z = [{ constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }];
var J = gt.div`
  display: flex;
  flex-direction: column;
  min-height: 72px;
`;
var Q = ({ onBack: n5, details: a3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(J, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { backFn: n5 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { data: a3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
var X2 = ({ gasUsed: t4, effectiveGasPrice: e2 }) => {
  if (t4 && e2) try {
    return l3(t4 * e2);
  } catch (t5) {
    return;
  }
};
var Y = ({ txn: a3, receipt: s4, transactionInfo: i2, onClose: r2, tokenPrice: o3, tokenSymbol: p2, receiptHeader: l4, receiptDescription: m4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: r2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: l4 ?? "Transaction complete!", description: m4 ?? "You're all set." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($2, { tokenPrice: o3, from: s4.from, to: s4.to, gas: X2(s4), txn: a3, transactionInfo: i2, tokenSymbol: p2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(K, { loading: false, onClick: r2, children: "All Done" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
var K = gt(b)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;
var Z = [{ constant: false, inputs: [{ name: "_salt", type: "bytes32" }, { name: "_initializer", type: "bytes" }], name: "deployAccount", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var tt = [{ name: "from", type: "address" }, { name: "param2", type: "address" }, { name: "param3", type: "bytes" }, { name: "param4", type: "tuple", components: [] }, { type: "tuple", components: [{ name: "param5", type: "address" }, { name: "param6", type: "uint256" }, { name: "param7", type: "uint256" }, { name: "encodedInitData", type: "bytes" }] }];
var et = [{ constant: false, inputs: [{ name: "spender", type: "address" }, { name: "value", type: "uint256" }], name: "approve", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var nt = [{ inputs: [{ name: "to", type: "address" }, { name: "amount", type: "uint256" }, { name: "memo", type: "bytes32" }], name: "transferWithMemo", outputs: [{ name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }];
var at = [{ inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "mint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "quantity", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "quantity", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" }, { internalType: "uint256[]", name: "quantities", type: "uint256[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mintBatch", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" }, { internalType: "uint256[]", name: "quantities", type: "uint256[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mintBatch", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "batchMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "batchMint", outputs: [], stateMutability: "payable", type: "function" }];
var st = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var it = [{ constant: false, inputs: [{ name: "_operator", type: "address" }, { name: "_approved", type: "bool" }], name: "setApprovalForAll", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var rt = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "transferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var ot = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenIds", type: "uint256[]" }, { name: "_amounts", type: "uint256[]" }, { name: "_data", type: "bytes" }], name: "safeBatchTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var pt = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }, { name: "_amount", type: "uint256" }, { name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }];
var lt = (t4, e2) => {
  let n5 = mt(et, t4);
  if (n5) return { action: "approve", functionName: "approve", isErc20Ish: true, isNFTIsh: false, spender: n5.args[0], amount: n5.args[1] };
  let a3 = mt(t2, t4);
  if (a3) return { action: "transfer", functionName: "transfer", isErc20Ish: true, isNFTIsh: false, transferTo: a3.args[0], amount: a3.args[1] };
  let s4 = mt(nt, t4);
  if (s4) return { action: "transfer", functionName: "transferWithMemo", isErc20Ish: true, isNFTIsh: false, transferTo: s4.args[0], amount: s4.args[1] };
  if (!e2) return { action: "transaction", functionName: "", isErc20Ish: false, isNFTIsh: false };
  let i2 = mt(Z, t4);
  if (i2 && "string" == typeof i2.args[1]) {
    let t5 = ut(i2.args[1]);
    if (t5 && t5[4].encodedInitData) return lt(t5[4].encodedInitData, e2);
  }
  let r2 = mt(it, t4);
  if (r2) return { action: "approve", functionName: "setApprovalForAll", isNFTIsh: true, isErc20Ish: false, operator: r2.args[0], approved: r2.args[1] };
  let o3 = mt(rt, t4);
  if (o3) return { action: "transfer", functionName: "transferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: o3.args[0], transferTo: o3.args[1], tokenId: o3.args[2] };
  let p2 = mt(st, t4);
  if (p2) return { action: "transfer", functionName: "safeTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: p2.args[0], transferTo: p2.args[1], tokenId: p2.args[2] };
  let l4 = mt(pt, t4);
  if (l4) return { action: "transfer", functionName: "safeTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: l4.args[0], transferTo: l4.args[1], tokenId: l4.args[2], amount: l4.args[3] };
  let m4 = mt(ot, t4);
  if (m4) return { action: "batch transfer", functionName: "safeBatchTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: m4.args[0], transferTo: m4.args[1], tokenIds: m4.args[2], amounts: m4.args[3] };
  let u2 = mt(at, t4);
  return u2 ? { action: "mint", functionName: u2.functionName, isNFTIsh: true, isErc20Ish: false, args: u2.args } : { action: "transaction", isErc20Ish: false, isNFTIsh: false };
};
var mt = (t4, e2) => {
  try {
    let n5 = m3({ abi: t4, data: e2 });
    return { functionName: n5.functionName, args: n5.args || [] };
  } catch (t5) {
    return null;
  }
};
var ut = (t4) => {
  try {
    if ("string" == typeof t4) return u(tt, `0x${t4.slice(10)}`);
  } catch (t5) {
    return null;
  }
};
var ct = (t4) => `${parseFloat(t4).toFixed(2)}`;
function dt(t4, e2) {
  let n5 = [], a3 = /* @__PURE__ */ new Map();
  if (t4) {
    for (let e3 of t4) if (e3.in[0]) {
      let t5;
      t5 = "ERC721" === e3.asset.type || "approve_for_all" === e3.in[0].value ? { id: `nft:${e3.asset.name}`, nftName: e3.asset.name, nftCount: e3.in.length } : { id: `token:${e3.asset.type}:${e3.asset.symbol}:${e3.asset.name}`, iconUrl: e3.asset.logo_url, value: e3.in[0].value, symbol: e3.asset.symbol, usdValue: e3.in[0].usd_price ? ct(e3.in[0].usd_price) : void 0, decimals: e3.asset.decimals }, n5.push(t5);
    } else if (e3.out[0]?.value) {
      let t5;
      t5 = "ERC721" === e3.asset.type || "approve_for_all" === e3.out[0].value ? { id: `nft:${e3.asset.name}`, nftName: e3.asset.name } : { id: `token:${e3.asset.type}:${e3.asset.symbol}:${e3.asset.name}`, iconUrl: e3.asset.logo_url, value: e3.out[0].value, symbol: e3.asset.symbol, usdValue: e3.out[0].usd_price ? ct(e3.out[0].usd_price) : void 0, decimals: e3.asset.decimals }, a3.has(t5.id) || a3.set(t5.id, t5);
    }
  }
  for (let t5 of e2) for (let e3 of Object.keys(t5.spenders)) {
    let n6;
    n6 = "ERC721" === t5.asset.type || "approve_for_all" === t5.spenders[e3]?.value ? { id: `nft:${t5.asset.name}`, nftName: t5.asset.name } : { id: `token:${t5.asset.type}:${t5.asset.symbol}:${t5.asset.name}`, iconUrl: t5.asset.logo_url, value: t5.spenders[e3]?.value, symbol: t5.asset.symbol, usdValue: t5.spenders[e3]?.usd_price ? ct(t5.spenders[e3]?.usd_price) : void 0, decimals: t5.asset.decimals }, a3.has(n6.id) || a3.set(n6.id, n6);
  }
  return { assetsIn: n5, assetsOut: Array.from(a3.values()) };
}
var yt = (t4, e2, n5, s4) => {
  let [i2, o3] = (0, import_react.useState)(null), { walletProxy: p2 } = l();
  return (0, import_react.useEffect)((() => {
    i2 && o3(null), (async () => {
      if (!p2 || !e2) return null;
      let a3 = [], i3 = true, r2 = await Pi(t4, n5, e2, s4).catch(((e3) => (e3.message && e3.message.includes("Insufficient balance for transaction") || e3.message && e3.message.includes("Insufficient funds for gas * price + value") || e3.details && e3.details.includes("insufficient funds") || e3.details && e3.details.includes("gas required exceeds allowance") ? i3 = false : a3.push(e3), t4)));
      return { tx: r2, totalGasEstimate: r2.gas, hasFunds: i3, errors: a3 };
    })().then(o3);
  }), [t4]), i2;
};
var ft = new m(new C("There was an issue preparing your transaction", O.E32603_DEFAULT_INTERNAL_ERROR.eipCode));
var bt = (t4, e2) => t4?.sendTransaction ? "transactionRequest" in t4.sendTransaction ? t4.sendTransaction.transactionRequest : t4.sendTransaction.transactionRequests[e2] : void 0;
var Tt = { component: () => {
  let { data: l4, onUserCloseViaDialogOrKeybindRef: m4, setModalData: u2, navigate: R } = g2(), { client: O2, rpcConfig: D, chains: P, closePrivyModal: B, walletProxy: L2, showFiatPrices: W } = l(), { user: U } = k(), G = se(), [V, H] = (0, import_react.useState)(0), [J2, X3] = (0, import_react.useState)(0), [K2, Z2] = (0, import_react.useState)(bt(l4, V)), [tt2, et2] = (0, import_react.useState)(null), [nt2, at2] = (0, import_react.useState)(), [st2, it2] = (0, import_react.useState)(false), [rt2, ot2] = (0, import_react.useState)(null), [pt2, mt2] = (0, import_react.useState)(null), [ut2, ct2] = (0, import_react.useState)(null), [Tt2, ht] = (0, import_react.useState)(void 0), [gt2, vt] = (0, import_react.useState)(void 0), [It, jt] = (0, import_react.useState)(false), [kt, Et] = (0, import_react.useState)(false), [Mt, Ct] = (0, import_react.useState)([]), [Ft, wt] = (0, import_react.useState)([]), [_t, xt] = (0, import_react.useState)("uninitiated"), [Nt, St] = (0, import_react.useState)(void 0);
  if (!K2 || !l4?.sendTransaction || !l4?.sendTransaction) return (0, import_jsx_runtime.jsx)(f, { error: Error("Invalid transaction request"), allowlistConfig: G.allowlistConfig, onRetry: () => {
    l4?.sendTransaction?.onFailure(ft), B({ shouldCallAuthOnSuccess: false });
  } });
  let { transactingWalletAddress: At } = l4.sendTransaction, Rt = (0, import_react.useMemo)((() => P.find(((t4) => Number(t4.id) === Number(K2.chainId)))), [K2.chainId]), Ot = Rt?.nativeCurrency.symbol ?? "ETH", Dt = (0, import_react.useMemo)((() => lt(K2.data, !!G.embeddedWallets.extendedCalldataDecoding)), [K2.data]), { action: Pt, isErc20Ish: Bt, isNFTIsh: $t, functionName: qt } = Dt, { toAddress: Lt, tokenAddress: Wt } = (0, import_react.useMemo)((() => ({ toAddress: Dt.isErc20Ish ? Dt.transferTo : K2.to ?? void 0, tokenAddress: Dt.isErc20Ish ? K2.to : void 0 })), [Dt]);
  (0, import_react.useEffect)((() => {
    K2.to && Rt && Bt && n3({ address: K2.to, chain: Rt, rpcConfig: G.rpcConfig, privyAppId: G.id }).then(et2).catch(console.error);
  }), [K2.to, Rt]);
  let { tokenPrice: Ut, isTokenPriceLoading: Gt } = c(K2.chainId), { balance: Vt } = s2({ rpcConfig: G.rpcConfig, appId: G.id, address: At, chain: Rt }), Ht = (function({ rpcConfig: t4, appId: e2, address: n5, chain: l5, tokenInfo: m5 }) {
    let { chains: u3 } = l(), [c4, f2] = (0, import_react.useState)(null), [b2, T] = (0, import_react.useState)(false), h2 = (0, import_react.useMemo)((() => {
      let n6 = l5 || u3[0];
      if (n6) return o2({ chain: l5, transport: p(wn(n6, t4, e2)) });
    }), [l5, t4, e2]), g3 = (0, import_react.useCallback)((async () => {
      if (n5 && h2 && m5.address) try {
        return T(true), await h2.readContract({ address: m5.address, abi: z, functionName: "balanceOf", args: [n5] });
      } catch (t5) {
        console.error(t5);
      } finally {
        T(false);
      }
    }), [h2, n5, m5?.address, l5]);
    return (0, import_react.useEffect)((() => {
      g3().then(((t5) => null != t5 && f2(t5)));
    }), [g3]), { balance: c4, isLoading: b2 && null == c4, formattedBalance: qi({ amount: c4 ?? BigInt(0), decimals: m5.decimals }) };
  })({ rpcConfig: G.rpcConfig, appId: G.id, address: At, tokenInfo: { address: Wt || "", decimals: tt2?.decimals ?? 18 }, chain: Rt }), zt = (0, import_react.useMemo)((() => l2(Number(K2.chainId), P, D, { appId: G.id })), [K2.chainId, D]), Jt = yt(K2, At, zt, l4?.sendTransaction?.prepareTransactionRequest);
  (0, import_react.useEffect)((() => {
    Z2(bt(l4, V));
  }), [V]), (0, import_react.useEffect)((() => {
    l4.sendTransaction?.getIsSponsored ? l4.sendTransaction.getIsSponsored().then(at2).catch(console.error) : at2(false);
  }), [l4.sendTransaction.getIsSponsored]);
  let Qt = () => {
    if (!st2) return rt2 ? l4?.sendTransaction?.onSuccess({ hash: rt2 }) : ut2 || Jt?.errors[0] ? l4?.sendTransaction?.onFailure(ut2 ?? Jt?.errors[0] ?? ft) : l4?.sendTransaction?.onFailure(new m(new C("The user rejected the request", O.E4001_USER_REJECTED_REQUEST.eipCode))), B({ shouldCallAuthOnSuccess: false });
  };
  m4.current = Qt;
  let Xt = !!(l4.funding && l4.funding.supportedOptions.length > 0), Yt = c2(BigInt(Jt?.totalGasEstimate ?? 0n), Ot), Kt = W && Ut ? n2(BigInt(Jt?.totalGasEstimate ?? 0n), Ut) : void 0, Zt = c2(Vt ?? 0n, Ot, void 0, true), te2 = W && Ut ? n2(Vt ?? 0n, Ut) : void 0, ee = tt2 && !Ht.isLoading && Bt && "approve" !== Pt ? `${Ht.formattedBalance} ${tt2.symbol}` : void 0, ne = l4.sendTransaction?.uiOptions?.transactionInfo?.title;
  ne || (ne = "approve" === Pt ? Bt ? "Confirm address" : "Confirm action" : `Approve ${Pt}`);
  let ae = (0, import_react.useMemo)((() => {
    if (l4.sendTransaction?.uiOptions?.description) return l4.sendTransaction?.uiOptions?.description;
    if ("approve" === Pt && "setApprovalForAll" === qt && Dt.approved) {
      let a3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { address: Dt.operator || "", url: Rt?.blockExplorers?.default?.url });
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [G.name, " would like your permission for ", a3, " to transfer tokens on your behalf."] });
    }
    if ("approve" === Pt && "setApprovalForAll" === qt && !Dt.approved) {
      let a3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { address: Dt.operator || "", url: Rt?.blockExplorers?.default?.url });
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [G.name, " would like your permission to revoke permissions of ", a3, " from transferring tokens on your behalf."] });
    }
    return Bt && "approve" === Pt || Bt && "approve" === Pt ? `${G.name} would like your permission for ${o(Dt.spender)} to spend tokens on your behalf.` : `${G.name} wants your permission to approve the following transaction.`;
  }), [G.name, Bt, Dt, l4.sendTransaction?.uiOptions.description, qt]), se2 = l4.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: l4.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl, alt: l4.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText }) : null, ie = !(!Jt || Jt.errors[0] || Jt.hasFunds || false !== nt2), re = ie && Xt, oe = re ? "Add funds" : l4.sendTransaction?.uiOptions?.buttonText || (V < J2 ? "Continue" : "Approve"), pe = (t4) => {
    if (!t4) throw Error("Transaction scan failed");
    if ("Success" === t4.validation.status && ("Benign" === t4.validation.result_type ? vt("safe") : "Warning" === t4.validation.result_type ? vt("warn") : "Malicious" === t4.validation.result_type && (vt("error"), Et(true))), "Success" !== t4.simulation.status) throw Error("Simulation failed");
    {
      ht(t4.simulation.params);
      let { assetsIn: e2, assetsOut: n5 } = dt(t4.simulation.assets_diffs, t4.simulation.exposures);
      if (0 === n5.length && 0 === e2.length) throw Error("No tokens found");
      Ct(n5), wt(e2);
    }
  };
  if ((0, import_react.useEffect)((() => {
    l4.sendTransaction?.scanTransaction && G.embeddedWallets.transactionScanning.enabled && "uninitiated" === _t && (xt("in progress"), l4.sendTransaction.scanTransaction().then(((t4) => {
      pe(t4), xt("completed");
    })).catch((() => xt("failed"))));
  }), [!!l4.sendTransaction?.scanTransaction]), (0, import_react.useEffect)((() => {
    l4.sendTransaction?.scanTransaction && "failed" !== _t || ((t4, e2, n5) => {
      if (X3(((t5) => t5?.sendTransaction ? "transactionRequest" in t5.sendTransaction ? 0 : t5.sendTransaction.transactionRequests.length - 1 : 0)(l4)), e2.isErc20Ish && e2.amount && n5) {
        let t5 = t({ amount: e2.amount, decimals: n5.decimals });
        St(t5), Ct([{ value: t5, symbol: n5?.symbol, decimals: n5?.decimals }]);
      } else if (t4.value) {
        let e3 = BigInt(t4.value), n6 = Ut ? n2(e3, Ut) : void 0;
        Ct(W && n6 ? [{ value: n6 }] : [{ value: m2(e3), symbol: Ot, decimals: 18, usdValue: n6 }]);
      } else Ct(W ? [{ value: "$0" }] : [{ value: "0", symbol: Ot, decimals: 18 }]);
    })(Jt?.tx ?? K2, Dt, tt2);
  }), [K2, Jt?.tx, Dt, tt2, _t]), pt2) return (0, import_jsx_runtime.jsx)(Y, { txn: Jt?.tx ?? K2, onClose: Qt, receipt: pt2, transactionInfo: l4.sendTransaction?.uiOptions.transactionInfo, tokenPrice: Ut, tokenSymbol: Ot, receiptHeader: l4.sendTransaction?.uiOptions.successHeader, receiptDescription: l4.sendTransaction?.uiOptions.successDescription });
  if (ut2) return (0, import_jsx_runtime.jsx)(te, { transactionError: ut2, transactionHash: rt2 ?? void 0, chainType: "ethereum", chainId: Jt?.tx.chainId ?? K2.chainId, onClose: Qt, onRetry: ({ resetNonce: t4 }) => {
    ct2(null);
    let e2 = { ...Jt?.tx ?? K2 };
    t4 && (e2.nonce = void 0), Z2(e2);
  } });
  let le = 0 !== J2 && "number" == typeof V && 0 !== V ? () => {
    H(V - 1);
  } : void 0;
  return It && Tt2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, { details: Tt2, onBack: () => jt(false) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { transactionIndex: V, onBack: le, maxIndex: J2, disabled: ie && !Xt || kt, isSubmitting: st2, submitError: ut2, isPreparing: !Jt, isTokenPriceLoading: Gt, isTokenContractInfoLoading: !$t && !tt2, prepareError: Jt?.errors[0], symbol: tt2?.symbol, chain: Rt, img: se2, title: ne, subtitle: ae, txValue: K2.value, fee: Kt ?? Yt, isSponsored: nt2, from: At ?? "", to: Lt, tokenAddress: Wt ?? void 0, network: G.chains.find(((t4) => t4.id === K2.chainId))?.name ?? "", transactionDetails: { ...Dt, formattedAmount: Nt }, cta: oe, missingFunds: ie, action: Pt, balance: ee ?? te2 ?? Zt, onClose: Qt, onClick: re ? async () => {
    if (!At) return;
    if (!Xt) throw Error("Funding wallet is not enabled");
    let t4 = "FundingMethodSelectionScreen";
    u2({ ...l4, funding: { ...l4.funding, methodScreen: t4, chainType: "ethereum", amount: c3(BigInt(Jt?.tx.value ?? 0) + BigInt(Jt?.totalGasEstimate?.toString() ?? 0)), chain: Rt }, solanaFundingData: l4?.solanaFundingData }), R(t4);
  } : async () => {
    if (V < J2) H(V + 1);
    else {
      it2(true);
      try {
        let t4 = await O2.getAccessToken();
        if (st2 || !t4 || !L2 || !U) return;
        let e2 = await l4.sendTransaction.onConfirm({ transactionRequest: Jt?.tx ?? K2 });
        if (ot2(e2), l4.sendTransaction?.signOnly) return await new Promise(((t5) => setTimeout(t5, g))), l4?.sendTransaction?.onSuccess({ hash: e2 }), B({ shouldCallAuthOnSuccess: false });
        let n5 = await zt.waitForTransactionReceipt({ hash: e2 });
        if ("reverted" === n5.status) throw Error("Transaction failed");
        mt2(n5);
      } catch (t4) {
        console.warn({ transaction: Jt?.tx ?? K2, error: t4 }), ct2(t4);
      } finally {
        it2(false);
      }
    }
  }, validation: gt2, hasScanDetails: !!Tt2, setIsScanDetailsOpen: jt, preventMaliciousTransaction: kt, setPreventMaliciousTransaction: Et, tokensSent: Mt, tokensReceived: Ft, isScanning: "in progress" === _t, isCancellable: l4.sendTransaction?.uiOptions?.isCancellable ?? false, functionName: qt });
} };
export {
  Tt as SendTransactionScreen,
  Tt as default
};
