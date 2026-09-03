import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/ConnectLedgerScreen-MHTeJjDI.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var i = (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.625 12.48 397.647 399.546", width: "2500", height: "674", preserveAspectRatio: "none", ...t, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#333745", d: "M 333.9 12.8 L 150.9 12.8 L 150.9 258.4 L 396.5 258.4 L 396.5 76.7 C 396.6 42.2 368.4 12.8 333.9 12.8 Z M 94.7 12.8 L 64 12.8 C 29.5 12.8 0 40.9 0 76.8 L 0 107.5 L 94.7 107.5 L 94.7 12.8 Z M 0 165 L 94.7 165 L 94.7 259.7 L 0 259.7 L 0 165 Z M 301.9 410.6 L 332.6 410.6 C 367.1 410.6 396.6 382.5 396.6 346.6 L 396.6 316 L 301.9 316 L 301.9 410.6 Z M 150.9 316 L 245.6 316 L 245.6 410.7 L 150.9 410.7 L 150.9 316 Z M 0 316 L 0 346.7 C 0 381.2 28.1 410.7 64 410.7 L 94.7 410.7 L 94.7 316 L 0 316 Z" }) }) });
var r = ({ onContinueWithLedger: t, onContinueWithoutLedger: o, title: r2 = "Using a hardware wallet?", subtitle: a2 = "If you have a Ledger connected,\ncontinue to sign with Ledger" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: r2, subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { children: a2 }), primaryCta: { label: "Continue with Ledger", onClick: t }, secondaryCta: { label: "Continue without Ledger", onClick: o }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { style: { width: "48px", height: "48px" } }) }) });
function a() {
  let { data: t, setModalData: n2, navigate: i2 } = g();
  return (0, import_jsx_runtime.jsx)(r, { onContinueWithLedger: function() {
    n2({ ...t, login: { ...t?.login, isSigningInWithLedgerSolana: true } }), i2("ConnectionStatusScreen");
  }, onContinueWithoutLedger: function() {
    n2({ ...t, login: { ...t?.login, isSigningInWithLedgerSolana: false } }), i2("ConnectionStatusScreen");
  } });
}
var c = { component: a };
var s = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--screen-space);
`;
var l = gt.span`
  white-space: pre-wrap;
`;
export {
  c as ConnectLedgerScreen,
  a as ConnectLedgerScreenComponent,
  r as ConnectLedgerScreenView,
  c as default
};
