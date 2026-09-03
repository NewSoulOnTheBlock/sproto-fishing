import {
  Check,
  X
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

// node_modules/@privy-io/react-auth/dist/esm/TodoList-CgrU7uwu.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var a = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;
gt.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;
var c = ({ children: n, variant: a2 = "default", icon: c2 }) => {
  let p = () => {
    switch (a2) {
      case "success":
        return "var(--privy-color-icon-success)";
      case "error":
        return "var(--privy-color-icon-error)";
      default:
        return "var(--privy-color-icon-muted)";
    }
  };
  return (0, import_jsx_runtime.jsxs)(l, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { $variant: a2, "data-variant": a2, children: (() => {
    if (c2)
      return import_react.default.isValidElement(c2) ? /* @__PURE__ */ import_react.default.cloneElement(c2, { stroke: p(), strokeWidth: 2 }) : c2;
    switch (a2) {
      case "success":
      default:
        return (0, import_jsx_runtime.jsx)(Check, { size: 12, stroke: p(), strokeWidth: 3 });
      case "error":
        return (0, import_jsx_runtime.jsx)(X, { size: 12, stroke: p(), strokeWidth: 3 });
    }
  })() }), n] });
};
var s = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $variant: r2 }) => {
  switch (r2) {
    case "success":
      return "var(--privy-color-success-bg, #EAFCEF)";
    case "error":
      return "var(--privy-color-error-bg, #FEE2E2)";
    default:
      return "var(--privy-color-background-2)";
  }
}};
  flex-shrink: 0;
`;
var l = gt.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`;

export {
  a,
  c
};
