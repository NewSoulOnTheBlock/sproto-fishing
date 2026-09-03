import {
  Check,
  Copy
} from "./chunk-ELJY7WHB.js";
import {
  f
} from "./chunk-RPCD4HAF.js";
import {
  o
} from "./chunk-COXZQBSX.js";
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

// node_modules/@privy-io/react-auth/dist/esm/Address-P0fi9aXn.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var d = ({ address: l, showCopyIcon: d2, url: h, className: g }) => {
  let [u, x] = (0, import_react.useState)(false);
  function y(e2) {
    e2.stopPropagation(), navigator.clipboard.writeText(l).then((() => x(true))).catch(console.error);
  }
  return (0, import_react.useEffect)((() => {
    if (u) {
      let e2 = setTimeout((() => x(false)), 3e3);
      return () => clearTimeout(e2);
    }
  }), [u]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m, h ? { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f2, { title: l, className: g, href: `${h}/address/${l}`, target: "_blank", children: o(l) }), d2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: y, size: "sm", style: { gap: "0.375rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, u ? { children: ["Copied", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 })] } : { children: ["Copy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 })] }) })] } : { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { title: l, className: g, children: o(l) }), d2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: y, size: "sm", style: { gap: "0.375rem", fontSize: "14px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, u ? { children: ["Copied", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 })] }) })] });
};
var m = gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;
var p = gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;
var f2 = gt.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  d
};
