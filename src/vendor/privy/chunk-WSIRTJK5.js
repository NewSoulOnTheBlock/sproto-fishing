import {
  Et,
  ft
} from "./chunk-THXMRURJ.js";

// node_modules/@privy-io/react-auth/dist/esm/LoadingSkeleton-BMsgO5PV.mjs
var a = Et`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;
var i = ft`
  ${(r) => r.$isLoading ? ft`
          width: 35%;
          animation: ${a} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        ` : ""}
`;

export {
  i
};
