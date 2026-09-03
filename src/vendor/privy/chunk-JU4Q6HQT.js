import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/Link-DTncR-24.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var o = gt.a`
  && {
    color: ${({ $variant: r2 }) => "underlined" === r2 ? "var(--privy-color-foreground)" : "var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({ $variant: r2 }) => "underlined" === r2 ? "underline" : "var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({ $disabled: r2 }) => r2 ? "not-allowed" : "pointer"};
    opacity: ${({ $disabled: r2 }) => r2 ? 0.5 : 1};

    font-size: ${({ $size: r2 }) => {
  switch (r2) {
    case "xs":
      return "12px";
    case "sm":
      return "14px";
    default:
      return "16px";
  }
}};

    line-height: ${({ $size: r2 }) => {
  switch (r2) {
    case "xs":
      return "18px";
    case "sm":
      return "22px";
    default:
      return "24px";
  }
}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({ $variant: r2, $disabled: e }) => "underlined" === r2 ? "var(--privy-color-foreground)" : "var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({ $disabled: r2 }) => r2 ? "none" : "underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({ $variant: r2, $disabled: e }) => e ? "underlined" === r2 ? "var(--privy-color-foreground)" : "var(--privy-link-navigation-color, var(--privy-color-accent))" : "var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`;
var n = ({ size: e = "md", variant: n2 = "navigation", disabled: i = false, as: a, children: t, onClick: l, ...c }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { as: a, $size: e, $variant: n2, $disabled: i, onClick: (r2) => {
  i ? r2.preventDefault() : l?.(r2);
}, ...c, children: t });

export {
  n
};
