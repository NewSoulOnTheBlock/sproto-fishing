import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/ScreenHeader-CHmc4-Lu.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var n = ({ title: e, description: n2, children: o2, ...c2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { ...c2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: e }), "string" == typeof n2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: n2 }) : n2, o2] }) });
gt(n)`
  margin-bottom: 24px;
`;
var o = ({ title: i2, description: e, icon: n2, children: o2, ...l2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(c, { ...l2, children: [n2 || null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: i2 }), e && "string" == typeof e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: e }) : e, o2] });
var l = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`;
var c = gt(l)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;

export {
  n,
  o
};
