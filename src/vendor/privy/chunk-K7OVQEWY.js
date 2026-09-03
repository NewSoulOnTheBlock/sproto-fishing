import {
  i as i3
} from "./chunk-6EXMXTND.js";
import {
  t as t4
} from "./chunk-VAKKZBAS.js";
import {
  o
} from "./chunk-RSVXHVWT.js";
import {
  j
} from "./chunk-FUH2YWOK.js";
import {
  r as r2
} from "./chunk-NH742RS2.js";
import {
  BoltIcon_default,
  ClipboardDocumentIcon_default
} from "./chunk-52LU76MD.js";
import {
  ExclamationCircleIcon_default
} from "./chunk-76DEAMJ5.js";
import {
  ClipboardDocumentCheckIcon_default
} from "./chunk-3FZKW4WI.js";
import {
  r
} from "./chunk-ZZ27HOQC.js";
import {
  e as e3
} from "./chunk-WLRIHMQB.js";
import {
  d
} from "./chunk-AIDDSJF6.js";
import {
  ChevronDownIcon_default
} from "./chunk-QM2ZBVYE.js";
import {
  e
} from "./chunk-QB7GMZ7D.js";
import {
  e as e2,
  n,
  s,
  t as t2,
  t2 as t3
} from "./chunk-C2ILIC2D.js";
import {
  i as i2
} from "./chunk-WSIRTJK5.js";
import {
  d as d2
} from "./chunk-VC62FKIT.js";
import {
  ArrowRightIcon_default,
  L,
  b,
  h2 as h,
  i,
  w
} from "./chunk-RPCD4HAF.js";
import {
  $
} from "./chunk-H64F7Q3M.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  qi,
  se,
  t2 as t
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/InteractiveLabel-7yG0PXUY.mjs
var e4 = gt(e2)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;

// node_modules/@privy-io/react-auth/dist/esm/TransactionErrorView-DO52M2Lr.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { isAddress as j2 } from "viem";
var B = ({ iconUrl: n3, value: i4, symbol: t5, usdValue: o2, nftName: l3, nftCount: a, decimals: s2, $isLoading: d3 }) => {
  if (d3) return (0, import_jsx_runtime.jsx)(z, { $isLoading: d3 });
  let c = i4 && o2 && s2 ? (function(e6, r4, n4) {
    let i5 = parseFloat(e6), t6 = parseFloat(n4);
    if (0 === i5 || 0 === t6 || Number.isNaN(i5) || Number.isNaN(t6)) return e6;
    let o3 = Math.ceil(-Math.log10(0.01 / (t6 / i5))), l4 = Math.pow(10, o3 = Math.max(o3 = Math.min(o3, r4), 1)), a2 = +(Math.floor(i5 * l4) / l4).toFixed(o3).replace(/\.?0+$/, "");
    return Intl.NumberFormat(void 0, { maximumFractionDigits: r4 }).format(a2);
  })(i4, s2, o2) : i4;
  return (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(z, { $isLoading: d3, children: [n3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { src: n3, alt: "Token icon" }), a && a > 1 ? a + "x" : void 0, " ", l3, c, " ", t5] }), o2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(R, { $isLoading: d3, children: ["$", o2] })] });
};
var z = gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  /**
   * @NOTE This is a code smell anti-pattern for styling components.
   * We are mixing JSX definitions with styled-components CSS definitions.
   * This is not ideal and should be refactored in the future to separate concerns.
   * This is also hard to read, as it makes it difficult to understand the structure
   * of the component and its styles by viewing the JSX.
   */

  ${i2}
`;
var R = gt.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${i2}
`;
var V = gt.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`;
var H = (i4) => {
  let { chain: t5, transactionDetails: o2, isTokenContractInfoLoading: l3, symbol: a } = i4, { action: s2, functionName: d3 } = o2;
  return (0, import_jsx_runtime.jsx)(d, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t2, { children: ["transaction" !== s2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Action" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: d3 })] }), "mint" === d3 && "args" in o2 && o2.args.filter(((e6) => e6)).map(((n3, i5) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: `Param ${i5}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: "string" == typeof n3 && j2(n3) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3, url: t5?.blockExplorers?.default?.url, showCopyIcon: false }) : n3?.toString() })] }, i5))), "setApprovalForAll" === d3 && o2.operator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Operator" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: o2.operator, url: t5?.blockExplorers?.default?.url, showCopyIcon: false }) })] }), "setApprovalForAll" === d3 && void 0 !== o2.approved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Set approval to" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: o2.approved ? "true" : "false" })] }), "transfer" === d3 || "transferWithMemo" === d3 || "transferFrom" === d3 || "safeTransferFrom" === d3 || "approve" === d3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["formattedAmount" in o2 && o2.formattedAmount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { $isLoading: l3, children: [o2.formattedAmount, " ", a] })] }), "tokenId" in o2 && o2.tokenId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: o2.tokenId.toString() })] })] }) : null, "safeBatchTransferFrom" === d3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["amounts" in o2 && o2.amounts && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amounts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: o2.amounts.join(", ") })] }), "tokenIds" in o2 && o2.tokenIds && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token IDs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: o2.tokenIds.join(", ") })] })] }), "approve" === d3 && o2.spender && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Spender" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: o2.spender, url: t5?.blockExplorers?.default?.url, showCopyIcon: false }) })] }), ("transferFrom" === d3 || "safeTransferFrom" === d3 || "safeBatchTransferFrom" === d3) && o2.transferFrom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Transferring from" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: o2.transferFrom, url: t5?.blockExplorers?.default?.url, showCopyIcon: false }) })] }), ("transferFrom" === d3 || "safeTransferFrom" === d3 || "safeBatchTransferFrom" === d3) && o2.transferTo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Transferring to" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: o2.transferTo, url: t5?.blockExplorers?.default?.url, showCopyIcon: false }) })] })] }) });
};
var U = ({ variant: i4, setPreventMaliciousTransaction: t5, colorScheme: o2 = "light", preventMaliciousTransaction: l3 }) => "warn" === i4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t4, { theme: o2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontWeight: "500" }, children: "Warning: Suspicious transaction" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), "This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."] }) }) : "error" === i4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(J, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i3, { theme: o2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "This is a malicious transaction" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), "This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(q, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { color: "var(--privy-color-error)", checked: !l3, readOnly: true, onClick: () => t5(!l3) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I understand and want to proceed anyways." })] })] }) }) : null;
var J = gt.div`
  margin-top: 1.5rem;
`;
var q = gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;
var Q = ({ transactionIndex: e6, maxIndex: r4 }) => "number" != typeof e6 || 0 === r4 ? "" : ` (${e6 + 1} / ${r4 + 1})`;
var X = ({ img: a, submitError: s2, prepareError: u, onClose: v, action: S, title: M, subtitle: j3, to: $2, tokenAddress: E, network: O, missingFunds: N, fee: D, from: F, cta: L2, disabled: P, chain: W, isSubmitting: z2, isPreparing: R2, isTokenPriceLoading: V2, isTokenContractInfoLoading: J2, isSponsored: q2, symbol: X2, balance: G2, onClick: K2, transactionDetails: ne2, transactionIndex: ie2, maxIndex: te2, onBack: oe2, chainName: le2, validation: ae2, hasScanDetails: se3, setIsScanDetailsOpen: de2, preventMaliciousTransaction: ce2, setPreventMaliciousTransaction: he2, tokensSent: me2, tokensReceived: ue2, isScanning: pe2, isCancellable: ge2, functionName: fe2 }) => {
  let { showTransactionDetails: ye2, setShowTransactionDetails: ke2, hasMoreDetails: xe, isErc20Ish: be } = ((e6) => {
    let [r4, n3] = (0, import_react.useState)(false), i4 = true, t5 = false;
    return (!e6 || e6.isErc20Ish || "transaction" === e6.action) && (i4 = false), i4 && (t5 = Object.entries(e6 || {}).some((([e7, r5]) => r5 && !["action", "isErc20Ish", "isNFTIsh"].includes(e7)))), { showTransactionDetails: r4, setShowTransactionDetails: n3, hasMoreDetails: i4 && t5, isErc20Ish: e6?.isErc20Ish };
  })(ne2), ve = se(), we = be && J2 || R2 || V2 || pe2;
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: v, backFn: oe2 }), a && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Z, { children: a }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(e3, { style: { marginTop: a ? "1.5rem" : 0 }, children: [M, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, { maxIndex: te2, transactionIndex: ie2 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { children: j3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t2, { style: { marginTop: "2rem" }, children: [(!!me2[0] || we) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [ue2.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Send" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "approve" === S ? "Approval amount" : "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-col", children: me2.map(((r4, n3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(B, { iconUrl: r4.iconUrl, value: "setApprovalForAll" === fe2 ? "All" : r4.value, usdValue: r4.usdValue, symbol: r4.symbol, nftName: r4.nftName, nftCount: r4.nftCount, decimals: r4.decimals }, n3))) })] }), ue2.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Receive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-col", children: ue2.map(((r4, n3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(B, { iconUrl: r4.iconUrl, value: r4.value, usdValue: r4.usdValue, symbol: r4.symbol, nftName: r4.nftName, nftCount: r4.nftCount, decimals: r4.decimals }, n3))) })] }), ne2 && "spender" in ne2 && ne2?.spender ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Spender" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: ne2.spender, url: W?.blockExplorers?.default?.url }) })] }) : null, $2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "To" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: $2, url: W?.blockExplorers?.default?.url, showCopyIcon: true }) })] }), E && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: E, url: W?.blockExplorers?.default?.url }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: O })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Estimated fee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { $isLoading: R2 || V2 || void 0 === q2, children: q2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ee, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(re, { children: ["Sponsored by ", ve.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoltIcon_default, { height: 16, width: 16 })] }) : D })] }), xe && !se3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { className: "cursor-pointer", onClick: () => ke2(!ye2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t3, { className: "flex items-center gap-x-1", children: ["Details", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon_default, { style: { width: "0.75rem", marginLeft: "0.25rem", transform: ye2 ? "rotate(180deg)" : void 0 } })] }) }), ye2 && ne2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, { action: S, chain: W, transactionDetails: ne2, isTokenContractInfoLoading: J2, symbol: X2 })] }), se3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(e4, { onClick: () => de2(true), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-color-primary", children: "Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon_default, { height: "14px", width: "14px", strokeWidth: "2" })] }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, {}), s2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "2rem" }, children: s2.message }) : u && 0 === ie2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "2rem" }, children: u.shortMessage ?? Y }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(U, { variant: ae2, preventMaliciousTransaction: ce2, setPreventMaliciousTransaction: he2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_, { $useSmallMargins: !(!u && !s2 && "warn" !== ae2 && "error" !== ae2), address: F, balance: G2, errMsg: R2 || u || s2 || !N ? void 0 : `Add funds on ${W?.name ?? le2} to complete transaction.` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { style: { marginTop: "1rem" }, loading: z2, disabled: P || R2, onClick: K2, children: L2 }), ge2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginTop: "1rem" }, onClick: v, isSubmitting: false, children: "Not now" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};
var G = ({ img: t5, title: a, subtitle: h2, cta: u, instructions: b2, network: S, blockExplorerUrl: M, isMissingFunds: j3, submitError: $2, parseError: E, total: O, swap: N, transactingWalletAddress: D, fee: F, balance: L2, disabled: P, isSubmitting: W, isPreparing: B2, isTokenPriceLoading: z2, onClick: R2, onClose: V2, onBack: H2, isSponsored: U2 }) => {
  let J2 = B2 || z2, [q2, Q2] = (0, import_react.useState)(false), X2 = se();
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: V2, backFn: H2 }), t5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Z, { children: t5 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { style: { marginTop: t5 ? "1.5rem" : 0 }, children: a }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { children: h2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t2, { style: { marginTop: "2rem", marginBottom: ".5rem" }, children: [(O || J2) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { $isLoading: J2, children: O })] }), N && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Swap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: N })] }), S && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: S })] }), (F || J2 || void 0 !== U2) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Estimated fee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { $isLoading: J2, children: U2 && !J2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ee, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(re, { children: ["Sponsored by ", X2.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoltIcon_default, { height: 16, width: 16 })] }) : F })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(e4, { onClick: () => Q2(((e6) => !e6)), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Advanced" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon_default, { height: "16px", width: "16px", strokeWidth: "2", style: { transition: "all 300ms", transform: q2 ? "rotate(180deg)" : void 0 } })] }) }), q2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: b2.map(((n3, i4) => "sol-transfer" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Transfer ", n3.withSeed ? "with seed" : ""] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { children: [qi({ amount: n3.value, decimals: n3.token.decimals }), " ", n3.token.symbol] })] }), !!n3.toAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Destination" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.toAccount, url: M }) })] })] }, i4) : "spl-transfer" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Transfer ", n3.token.symbol] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.value.toString() })] }), !!n3.fromAta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.fromAta, url: M }) })] }), !!n3.toAta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Destination" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.toAta, url: M }) })] }), !!n3.token.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.token.address, url: M }) })] })] }, i4) : "ata-creation" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { children: "Create token account" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Program ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.program, url: M }) })] }), !!n3.owner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Owner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.owner, url: M }) })] })] }, i4) : "create-account" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Create account ", n3.withSeed ? "with seed" : ""] }) }), !!n3.account && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.account, url: M }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { children: [qi({ amount: n3.value, decimals: 9 }), " SOL"] })] })] }, i4) : "spl-init-account" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { children: "Initialize token account" }) }), !!n3.account && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.account, url: M }) })] }), !!n3.mint && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Mint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mint, url: M }) })] }), !!n3.owner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Owner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.owner, url: M }) })] })] }, i4) : "spl-close-account" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { children: "Close token account" }) }), !!n3.source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.source, url: M }) })] }), !!n3.destination && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Destination" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.destination, url: M }) })] }), !!n3.owner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Owner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.owner, url: M }) })] })] }, i4) : "spl-sync-native" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { children: "Sync native" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Program ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.program, url: M }) })] })] }, i4) : "raydium-swap-base-input" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Raydium swap", " ", n3.tokenIn && n3.tokenOut ? `${n3.tokenIn.symbol} \u2192 ${n3.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.amountIn.toString() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Minimum amount out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.minimumAmountOut.toString() })] }), n3.mintIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintIn, url: M }) })] }), n3.mintOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintOut, url: M }) })] })] }, i4) : "raydium-swap-base-output" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Raydium swap", " ", n3.tokenIn && n3.tokenOut ? `${n3.tokenIn.symbol} \u2192 ${n3.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Max amount in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.maxAmountIn.toString() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.amountOut.toString() })] }), n3.mintIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintIn, url: M }) })] }), n3.mintOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintOut, url: M }) })] })] }, i4) : "jupiter-swap-shared-accounts-route" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Jupiter swap", " ", n3.tokenIn && n3.tokenOut ? `${n3.tokenIn.symbol} \u2192 ${n3.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "In amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.inAmount.toString() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Quoted out amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.quotedOutAmount.toString() })] }), n3.mintIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintIn, url: M }) })] }), n3.mintOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintOut, url: M }) })] })] }, i4) : "jupiter-swap-exact-out-route" === n3.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r2, { children: ["Jupiter swap", " ", n3.tokenIn && n3.tokenOut ? `${n3.tokenIn.symbol} \u2192 ${n3.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Quoted in amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.quotedInAmount.toString() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Amount out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.outAmount.toString() })] }), n3.mintIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintIn, url: M }) })] }), n3.mintOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Token out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.mintOut, url: M }) })] })] }, i4) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(K, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Program ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: n3.program, url: M }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Data" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: n3.discriminator })] })] }, i4))) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, {}), $2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "2rem" }, children: $2.message }) : E ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "2rem" }, children: Y }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_, { $useSmallMargins: !(!E && !$2), title: "", address: D, balance: L2, errMsg: B2 || E || $2 || !j3 ? void 0 : "Add funds on Solana to complete transaction." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { style: { marginTop: "1rem" }, loading: W, disabled: P || B2, onClick: R2, children: u }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};
var _ = gt(j)`
  ${(e6) => e6.$useSmallMargins ? "margin-top: 0.5rem;" : "margin-top: 2rem;"}
`;
var K = gt(t2)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`;
var Y = "There was an error preparing your transaction. Your transaction request will likely fail.";
var Z = gt.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`;
var ee = gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`;
var re = gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;
var ne = (e6) => e6?.code === t.COMPLIANCE_BLOCKED;
var ie = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(se2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ce, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(de, {})] });
var te = ({ transactionError: i4, chainId: t5, onClose: o2, onRetry: a, chainType: s2, transactionHash: c }) => {
  let { chains: h2 } = l(), [m, p] = (0, import_react.useState)(false), { errorCode: g, errorMessage: f } = ((e6, r4) => {
    if ("ethereum" === r4) return ne(e6) ? { errorCode: "Transaction blocked", errorMessage: e6.message } : { errorCode: e6.details ?? e6.message, errorMessage: e6.shortMessage };
    let n3 = e6.txSignature, i5 = e6?.transactionMessage || "Something went wrong.";
    if (Array.isArray(e6.logs)) {
      let r5 = e6.logs.find(((e7) => /insufficient (lamports|funds)/gi.test(e7)));
      r5 && (i5 = r5);
    }
    return { transactionHash: n3, errorMessage: i5 };
  })(i4, s2), y = ne(i4), k = (({ chains: e6, chainId: r4, chainType: n3, transactionHash: i5 }) => "ethereum" === n3 ? e6.find(((e7) => e7.id === r4))?.blockExplorers?.default.url ?? "https://etherscan.io" : (function(e7, r5) {
    return `https://explorer.solana.com/tx/${e7}?chain=${r5}`;
  })(i5 || "", r4))({ chains: h2, chainId: t5, chainType: s2, transactionHash: c });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: o2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(oe, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ie, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { children: g }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ae, { children: y ? "This transaction cannot be completed." : "Please try again." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ue, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(me, { children: "Error message" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ge, { $clickable: false, children: f })] }), c && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ue, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(me, { children: "Transaction hash" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(pe, { children: ["Copy this hash to view details about the transaction on a", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("u", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: k, children: "block explorer" }) }), "."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ge, { $clickable: true, onClick: async () => {
    await navigator.clipboard.writeText(c), p(true);
  }, children: [c, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ke, { clicked: m })] })] }), !y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(he, { onClick: () => a({ resetNonce: !!c }), children: "Retry transaction" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {})] });
};
var oe = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var le = gt.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`;
var ae = gt.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`;
var se2 = gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var de = gt(ExclamationCircleIcon_default)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`;
var ce = gt.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`;
var he = gt(b)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;
var me = gt.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`;
var ue = gt.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var pe = gt.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`;
var ge = gt.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${(e6) => e6.$clickable && "cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }"}
`;
var fe = gt(ClipboardDocumentIcon_default)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`;
var ye = gt(ClipboardDocumentCheckIcon_default)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`;
var ke = ({ clicked: r4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r4 ? ye : fe, {});

export {
  X,
  G,
  te
};
