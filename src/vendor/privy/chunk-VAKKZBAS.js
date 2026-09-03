import {
  ExclamationTriangleIcon_default
} from "./chunk-SGK7A445.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/WarningBanner-ZZqCEtZK.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var t = ({ children: i, theme: t2, className: a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l, { $theme: t2, className: a, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExclamationTriangleIcon_default, { width: "16px", height: "16px", color: "var(--privy-color-icon-warning)", strokeWidth: 2, style: { flexShrink: 0 } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { $theme: t2, children: i })] });
var l = gt.div`
  display: flex;
  gap: 0.5rem;
  background-color: var(--privy-color-warn-bg);
  border: 1px solid var(--privy-color-border-warning);
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow: clip;
  width: 100%;
`;
var n = gt.div`
  color: ${(r2) => "dark" === r2.$theme ? "var(--privy-color-foreground-2)" : "var(--privy-color-foreground)"};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  flex: 1;
  text-align: left;
  font-feature-settings:
    'calt' 0,
    'kern' 0;
`;

export {
  t
};
