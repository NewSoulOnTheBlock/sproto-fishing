import {
  i,
  l,
  s
} from "./chunk-IYZPTX46.js";
import {
  n
} from "./chunk-ZKJ6AAV3.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Banknote,
  CreditCard,
  QrCode
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  El,
  kl
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  se
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

// node_modules/@privy-io/react-auth/dist/esm/AddFundsSelectionScreen-DwZEW8eu.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var f = { component: () => {
  let a = El(), { onUserCloseViaDialogOrKeybindRef: f2 } = g(), C = se(), b = (0, import_react.useRef)(false);
  (0, import_react.useEffect)((() => {
    a && (b.current = false);
  }), [a]);
  let x = (0, import_react.useCallback)((async () => {
    !b.current && a && (b.current = true, kl(), await a.onCancel());
  }), [a]);
  if ((0, import_react.useEffect)((() => (f2.current = x, () => {
    f2.current === x && (f2.current = null);
  })), [x, f2]), !a) return null;
  if (a.error) return (0, import_jsx_runtime.jsx)(i, { icon: Banknote, iconVariant: "warning", title: "Unable to add funds", subtitle: a.error, showClose: true, onClose: x, primaryCta: { label: "Close", onClick: x } });
  return (0, import_jsx_runtime.jsx)(i, { icon: Banknote, iconVariant: "subtle", title: "Select method", subtitle: "Choose how to fund your wallet", showClose: true, onClose: x, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { style: { marginTop: "1rem" }, $colorScheme: C.appearance.palette.colorScheme, children: [a.startFiat && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l, { onClick: async () => {
    b.current || (b.current = true, await a.startFiat?.());
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: "Pay with fiat" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { children: "Apple Pay, Google Pay, or debit card" })] })] }), a.startCrypto && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l, { onClick: async () => {
    b.current || (b.current = true, await a.startCrypto?.());
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: "Transfer from wallet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { children: "Send crypto from any wallet" })] })] })] }) });
} };
var v = gt.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--color-icon-muted, #64668b);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
var g2 = gt.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
var w = gt.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;
export {
  f as AddFundsSelectionScreen,
  f as default
};
