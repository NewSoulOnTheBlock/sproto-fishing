import {
  Check,
  Copy
} from "./chunk-ELJY7WHB.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/CopyableText-CQapvaMr.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var l = gt.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;
var a = gt.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`;
var s = gt(Check)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`;
var d = gt(Copy)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;
function p({ children: o2, iconOnly: i, value: n, hideCopyIcon: c, onCopy: p2, iconSize: h2 = 14, ...m }) {
  let [u, f] = (0, import_react.useState)(false);
  return (0, import_jsx_runtime.jsxs)(l, { ...m, onClick: () => {
    navigator.clipboard.writeText(n || ("string" == typeof o2 ? o2 : "")).then((() => p2?.())).catch(console.error), f(true), setTimeout((() => f(false)), 1500);
  }, children: [o2, " ", u ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { size: h2 }), " ", !i && "Copied"] }) : !c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { size: h2 })] });
}
var h = ({ value: i, includeChildren: n, children: c, ...p2 }) => {
  let [h2, m] = (0, import_react.useState)(false), u = () => {
    navigator.clipboard.writeText(i).catch(console.error), m(true), setTimeout((() => m(false)), 1500);
  };
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { ...p2, onClick: u, children: c }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { ...p2, onClick: u, children: h2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, {}) })] });
};

export {
  p,
  h
};
