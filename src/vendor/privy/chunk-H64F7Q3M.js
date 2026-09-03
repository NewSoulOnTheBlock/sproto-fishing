import {
  s
} from "./chunk-PANVPNZ2.js";
import {
  v
} from "./chunk-SLTT5NIH.js";
import {
  u
} from "./chunk-EJB6TW3T.js";
import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  D,
  y
} from "./chunk-COXZQBSX.js";
import {
  ft,
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/useActiveWallet-Cx-foFVv.mjs
var import_react = __toESM(require_react(), 1);
import { toHex as s2 } from "viem/utils";
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var k = (r2) => {
  let [n2, a2] = (0, import_react.useState)("auto");
  return (0, import_react.useEffect)((() => {
    let e2 = new ResizeObserver(((e3) => {
      a2(e3[0]?.contentRect.height ?? "auto");
    }));
    return r2.current && e2.observe(r2.current), () => {
      r2.current && e2.unobserve(r2.current);
    };
  }), [r2.current]), n2;
};
var $ = gt.div`
  text-align: left;
  flex-grow: 1;
`;
var S = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;
var T = gt.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
var C = gt(T)`
  ${(e2) => "light" === e2.$colorScheme ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;" : "dark" === e2.$colorScheme ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;" : void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`;
var j = ft`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`;
var z = gt.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`;
var I = gt.button.attrs({ className: "login-method-button" })`
  ${j}
`;
gt.a`
  ${j}
`;
var W = gt.div`
  width: 32px;
  height: 32px;
  border-radius: ${(e2) => e2.$fullSize ? "0" : "4px"};
  background: ${(e2) => e2.$fullSize ? "transparent" : "var(--privy-color-background-2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${(e2) => e2.$fullSize ? "32px" : "18px"};
    height: ${(e2) => e2.$fullSize ? "32px" : "18px"};
    color: ${(e2) => e2.$fullSize ? "inherit" : "var(--privy-color-icon-muted)"};
  }
`;
var O = gt.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${(e2) => e2.$if ? "display: none;" : ""}
`;
var E = gt.div`
  width: 100%;
  height: 100%;
  padding: ${(e2) => e2.$withPadding ? "64px 0px" : "0px"};
`;
var M = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
async function P(e2, t2, r2) {
  if (!t2.shouldEnforceDefaultChainOnConnect) return;
  let n2 = Number(e2.chainId.replace("eip155:", ""));
  if (!t2.chains.find(((e3) => e3.id === n2)) && ("wallet_connect_v2" !== e2.connectorType || "metamask" !== e2.walletClientType)) {
    r2?.();
    try {
      await e2.switchChain(t2.defaultChain.id), e2.chainId = y(s2(t2.defaultChain.id));
    } catch {
      u.warn("Unable to switch to default chain after connect", { chainId: t2.defaultChain.id });
    }
  }
}
var A = /* @__PURE__ */ (0, import_react.createContext)({});
var R = ({ children: r2 }) => {
  let n2 = se(), [a2, o2] = (0, import_react.useState)({});
  return s("login", { onComplete: ({ loginAccount: e2 }) => {
    e2 && "passkey" !== e2.type && "cross_app" !== e2.type && ("wallet" !== e2.type || "privy" !== e2.walletClientType) && (D.put(_(n2.id), e2.type), "wallet" === e2.type ? (D.put(N(n2.id), e2.walletClientType), D.put(U(n2.id), e2.chainType), o2({ accountType: e2.type, walletClientType: e2.walletClientType, chainType: e2.chainType })) : (D.del(N(n2.id)), D.del(U(n2.id)), o2({ accountType: e2.type })));
  } }), (0, import_react.useEffect)((() => {
    if (!n2.id) return;
    let e2 = D.get(_(n2.id)), t2 = D.get(N(n2.id)), r3 = D.get(U(n2.id));
    e2 && o2("wallet" === e2 ? { accountType: e2, walletClientType: t2, chainType: r3 } : { accountType: e2 });
  }), [n2.id]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A.Provider, { value: a2, children: r2 });
};
var _ = (e2) => `privy:${e2}:recent-login-method`;
var N = (e2) => `privy:${e2}:recent-login-wallet-client`;
var U = (e2) => `privy:${e2}:recent-login-chain-type`;
var D2 = () => (0, import_react.useContext)(A);
var F = (e2) => {
  s("fundWallet", e2);
  let { fundWallet: t2 } = l();
  return { fundWallet: ({ address: e3, options: r2 }) => t2(e3, r2) };
};
function H(e2) {
  let { logout: t2 } = (0, import_react.useContext)(v);
  return s("logout", e2), { logout: t2 };
}
var B = create((() => ({ isModalOpen: false, resolvers: null })));
var J = create((() => ({})));
var Y = ({ address: e2, client: t2, appId: r2 }) => {
  let n2 = `${t2}:${e2}`;
  r2 && D.put(ee(r2), n2), B.setState({ wallet: n2 });
};
var ee = (e2) => `privy:${e2}:active-wallet-connection`;

export {
  k,
  $,
  S,
  T,
  C,
  z,
  I,
  W,
  O,
  E,
  M,
  P,
  R,
  D2 as D,
  F,
  H,
  Y
};
