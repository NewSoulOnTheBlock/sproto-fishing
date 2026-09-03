import {
  L
} from "./chunk-KZ4OUGKV.js";
import {
  x
} from "./chunk-RPCD4HAF.js";
import {
  Et,
  gt
} from "./chunk-THXMRURJ.js";

// node_modules/@privy-io/react-auth/dist/esm/styles-B2wD3REl.mjs
var e = gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`;
var n = gt.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`;
var a = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;
var p = gt.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;
gt.div`
  font-size: 42px !important;
`;
var s = gt.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`;
var d = gt(s)`
  && {
    font-size: 42px;
  }
`;
gt.button`
  cursor: pointer;
  padding-left: 4px;
`;
var c = gt.div`
  font-size: 18px;
`;
var l = gt.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;
gt.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`, gt(L)`
  margin-top: 16px;
`;
var x2 = Et`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
gt(x)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${x2} 0.3s ease-in-out;
`;
var m = gt.div``;
var f = gt.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;

export {
  e,
  n,
  a,
  p,
  s,
  d,
  c,
  l,
  m,
  f
};
