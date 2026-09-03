import {
  i
} from "./chunk-WSIRTJK5.js";
import {
  Et,
  ft,
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/Chip-CZKIKt9K.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var n = ({ children: o, color: i2, isLoading: e, isPulsing: l, ...n2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { $color: i2, $isLoading: e, $isPulsing: l, ...n2, children: o });
var a = gt.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${(r2) => {
  let e, l;
  "green" === r2.$color && (e = "var(--privy-color-success-dark)", l = "var(--privy-color-success-light)"), "red" === r2.$color && (e = "var(--privy-color-error)", l = "var(--privy-color-error-light)"), "gray" === r2.$color && (e = "var(--privy-color-foreground-2)", l = "var(--privy-color-background-2)");
  let n2 = Et`
      from, to {
        background-color: ${l};
      }

      50% {
        background-color: rgba(${l}, 0.8);
      }
    `;
  return ft`
      color: ${e};
      background-color: ${l};
      ${r2.$isPulsing && ft`
        animation: ${n2} 3s linear infinite;
      `};
    `;
}}

  ${i}
`;

export {
  n
};
