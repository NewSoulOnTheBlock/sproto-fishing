import {
  r
} from "./chunk-NH742RS2.js";
import {
  d
} from "./chunk-AIDDSJF6.js";
import {
  e
} from "./chunk-QB7GMZ7D.js";
import {
  d as d2
} from "./chunk-VC62FKIT.js";
import {
  Check,
  Copy
} from "./chunk-ELJY7WHB.js";
import {
  f
} from "./chunk-RPCD4HAF.js";
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

// node_modules/@privy-io/react-auth/dist/esm/WalletInfoCard-D_KcqTI9.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var h = gt(d)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`;
var f2 = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
var g = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
var u = gt.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`;
var x = gt(r)`
  text-align: left;
  margin-bottom: 0.5rem;
`;
var v = gt(e)`
  margin-top: 0.25rem;
`;
var y = gt(f)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;
var j = ({ errMsg: n, balance: m, address: l, className: d3, title: p, showCopyButton: j2 = false }) => {
  let [b, w] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)((() => {
    if (b) {
      let e3 = setTimeout((() => w(false)), 3e3);
      return () => clearTimeout(e3);
    }
  }), [b]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: p }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { className: d3, $state: n ? "error" : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(f2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { address: l, showCopyIcon: false }), void 0 !== m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { children: m })] }), j2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, { onClick: function(e3) {
    e3.stopPropagation(), navigator.clipboard.writeText(l).then((() => w(true))).catch(console.error);
  }, size: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, b ? { children: ["Copied", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 })] }) })] }) }), n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { children: n })] });
};

export {
  j
};
