import {
  t
} from "./chunk-PLXAKKNQ.js";
import {
  n as n4
} from "./chunk-JU4Q6HQT.js";
import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n as n3
} from "./chunk-TKDI5N2H.js";
import {
  Ba,
  za
} from "./chunk-2IJQ6F4F.js";
import {
  i as i2
} from "./chunk-75YLIS6S.js";
import {
  $t,
  Mt,
  hi
} from "./chunk-2DL5TNP5.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import {
  n as n2
} from "./chunk-JC23ZM22.js";
import {
  I
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  A as A2,
  m,
  y
} from "./chunk-EJB6TW3T.js";
import {
  c,
  n2 as n
} from "./chunk-COXZQBSX.js";
import {
  A,
  i
} from "./chunk-W22FA2JU.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/ConnectionStatusScreen-3oxQYjl4.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import { isHex as T, getAddress as _ } from "viem";
import "viem/accounts";
import "viem/utils";
import "viem/chains";
var x = (e2) => {
  let t3 = localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(((e3) => T(e3, { strict: true }))).map(((e3) => _(e3)));
  return !!t3?.length && !!e2?.linkedAccounts.filter(((e3) => "wallet" == e3.type && t3.includes(e3.address))).length;
};
var M = /* @__PURE__ */ new Set(["phantom"]);
var N = (e2) => e2 && M.has(e2.toLowerCase()) ? "transaction" : "offchain-message";
var D = (e2) => e2?.privyErrorCode === i.LINKED_TO_ANOTHER_USER ? y.ERROR_USER_EXISTS : e2 instanceof m && !e2.details.default ? e2.details : e2 instanceof A2 ? y.ERROR_TIMED_OUT : e2?.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE ? y.ERROR_USER_LIMIT_REACHED : y.ERROR_WALLET_CONNECTION;
var F = ({ walletLogo: o2, title: r2, subtitle: i4, signSuccess: a3, errorMessage: l3, connectSuccess: c2, separateConnectAndSign: s, signing: m2, walletConnectRedirectUri: d, walletConnectFallbackUniversalUri: p, hasTabbedAway: u, showCoinbaseWalletResetCta: w, numRetries: h, onBack: f, onSign: C, onRetry: v, onCoinbaseReset: b, onDifferentWallet: T2 }) => {
  let { t: _2 } = t(), E = w ? { label: "Use a different wallet", onClick: b, disabled: a3 } : l3 === y.ERROR_USER_EXISTS && f ? { label: "Use a different wallet", onClick: T2 } : c2 && !a3 && s ? { label: m2 ? "Signing" : "Sign with your wallet", onClick: C, disabled: m2 } : !a3 && l3?.retryable && h < 2 ? { label: "Retry", onClick: v, disabled: false } : a3 || l3 ? void 0 : { label: _2("connectionStatus.connecting"), onClick: () => {
  }, disabled: true };
  return (0, import_jsx_runtime.jsx)(n3, { title: r2, subtitle: i4, icon: o2, iconVariant: "loading", iconLoadingStatus: { success: a3, fail: !!l3 }, primaryCta: E, onBack: f, watermark: true, children: !c2 && d && !u && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [_2("connectionStatus.stillHere"), " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n4, { href: d, target: "_blank", variant: "underlined", size: "sm", children: _2("connectionStatus.tryConnectingAgain") }), p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", _2("connectionStatus.or"), " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n4, { href: p, target: "_blank", variant: "underlined", size: "sm", children: _2("connectionStatus.useDifferentLink") })] })] }) });
};
var B = { component: () => {
  let t3, [n6, c2] = (0, import_react.useState)(false), [g3, f] = (0, import_react.useState)(false), [C, T2] = (0, import_react.useState)(void 0), { authenticated: _2, logout: O } = k(), { navigate: M2, navigateBack: B2, lastScreen: P2, currentScreen: q, setModalData: X, data: H } = g2(), z = se(), { t: Y } = t(), { getAuthFlow: K, walletConnectionStatus: Q, closePrivyModal: V, initLoginWithWallet: J, loginWithWallet: $, updateWallets: G, createAnalyticsEvent: Z } = l(), { walletConnectors: ee } = k(), [te, ne] = (0, import_react.useState)(0), { user: oe } = k(), [re] = (0, import_react.useState)(oe?.linkedAccounts.length || 0), [ie, ae] = (0, import_react.useState)(""), [le, ce] = (0, import_react.useState)(""), [se2, me] = (0, import_react.useState)(false), { hasTabbedAway: de } = (function() {
    let [e2, t4] = (0, import_react.useState)(false), n7 = (0, import_react.useCallback)((() => {
      document.hidden && t4(true);
    }), []);
    return (0, import_react.useEffect)((() => (document.addEventListener("visibilitychange", n7), () => document.removeEventListener("visibilitychange", n7))), [n7]), { hasTabbedAway: e2, reset: () => t4(false) };
  })(), { enabled: pe, token: ue } = za(), ge = I(Q?.connector?.walletClientType || "unknown"), we = import_react_device_detect.isMobile && "wallet_connect_v2" === Q?.connector?.connectorType || import_react_device_detect.isMobile && "coinbase_wallet" === Q?.connector?.connectorType || import_react_device_detect.isMobile && "base_account" === Q?.connector?.connectorType || import_react_device_detect.isMobile && "injected" === Q?.connector?.connectorType && "phantom" === Q?.connector?.walletClientType || import_react_device_detect.isMobile && "solana_adapter" === Q?.connector?.connectorType && "mobile_wallet_adapter" === Q.connector.walletClientType, he = "connected" === Q?.status, ye = "switching_to_supported_chain" === Q?.status;
  (0, import_react.useEffect)((() => {
    let e2 = K(), t4 = e2 instanceof hi || e2 instanceof Ba ? e2 : void 0;
    he && "solana" === Q.connector?.chainType && n2(i2) && void 0 === H?.login?.isSigningInWithLedgerSolana ? M2("ConnectLedgerScreen", false) : (he && !t4 && (!pe || ue || _2 ? J(Q.connectedWallet, ue, H?.login?.disableSignup, H?.login?.isSigningInWithLedgerSolana ? N(Q.connector?.walletClientType) : "plain").then((() => {
      me(true);
    })) : (X({ captchaModalData: { callback: (e3) => J(Q.connectedWallet, e3, H?.login?.disableSignup, H?.login?.isSigningInWithLedgerSolana ? N(Q.connector?.walletClientType) : "plain").then((() => {
      me(true);
    })), userIntentRequired: false, onSuccessNavigateTo: "ConnectionStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), M2("CaptchaScreen", false))), t4 instanceof Ba && H?.login?.isSigningInWithLedgerSolana && (t4.messageType = N(t4.meta.walletClientType)), t4 && we && he && !t4.preparedMessage ? t4.buildMessage() : t4 && !we && he && (g3 || (async () => {
      f(true), T2(void 0);
      try {
        "wallet_connect_v2" === Q?.connector?.connectorType && "metamask" === Q?.connector?.walletClientType && await c(2500), await fe();
      } catch (e3) {
        console.warn("Auto-prompted signature failed", e3);
      } finally {
        f(false);
      }
    })()));
  }), [te, he, se2]), (0, import_react.useEffect)((() => {
    if (oe && n6) {
      let e2 = g - 500;
      if (z?.legal.requireUsersAcceptTerms && !oe.hasAcceptedTerms) {
        let t5 = setTimeout((() => {
          M2("AffirmativeConsentScreen");
        }), e2);
        return () => clearTimeout(t5);
      }
      if (a(oe, z.embeddedWallets)) {
        let t5 = setTimeout((() => {
          X({ createWallet: { onSuccess: () => {
          }, onFailure: (e3) => {
            console.error(e3), Z({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, screen: "ConnectionStatusScreen" } }), O();
          }, callAuthOnSuccessOnClose: true } }), M2("EmbeddedWalletOnAccountCreateScreen");
        }), e2);
        return () => clearTimeout(t5);
      }
      G();
      let t4 = setTimeout((() => V({ shouldCallAuthOnSuccess: true, isSuccess: true })), g);
      return () => clearTimeout(t4);
    }
  }), [oe, n6]);
  let Se = (e2) => {
    if (e2?.privyErrorCode !== i.ALLOWLIST_REJECTED) {
      if (e2?.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A(e2).toString()), void M2("UserLimitReachedScreen");
      if (e2?.privyErrorCode !== i.USER_DOES_NOT_EXIST) return e2?.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e2.data?.data?.nonce ? (X({ accountTransfer: { nonce: e2.data?.data?.nonce, account: K()?.meta.address, displayName: e2.data?.data?.account?.displayName, externalWalletMetadata: { walletClientType: K()?.meta.walletClientType, chainId: K()?.meta.chainId, connectorType: K()?.meta.connectorType }, linkMethod: K() instanceof hi ? "siwe" : "siws", embeddedWalletAddress: e2.data?.data?.otherUser?.embeddedWalletAddress } }), void M2("LinkConflictScreen")) : void T2(D(e2));
      M2("AccountNotFoundScreen");
    } else M2("AllowlistRejectionScreen");
  };
  async function fe() {
    try {
      await $(), c2(true);
    } catch (e2) {
      Se(e2);
    } finally {
      f(false);
    }
  }
  (0, import_react.useEffect)((() => {
    Q?.connectError && Se(Q?.connectError);
  }), [Q]), ((e2, t4) => {
    let n7 = (0, import_react.useRef)((() => {
    }));
    (0, import_react.useEffect)((() => {
      n7.current = e2;
    })), (0, import_react.useEffect)((() => {
      if (null !== t4) {
        let e3 = setInterval((() => n7.current()), t4 || 0);
        return () => clearInterval(e3);
      }
    }), [t4]);
  })((() => {
    let e2 = "wallet_connect_v2" === Ce && Q?.connector instanceof $t ? Q.connector.redirectUri : void 0;
    e2 && ae(e2);
    let t4 = "wallet_connect_v2" === Ce && Q?.connector instanceof $t ? Q.connector.fallbackUniversalRedirectUri : void 0;
    t4 && ce(t4);
  }), Q?.connector instanceof $t && !ie ? 500 : null);
  let Ce = Q?.connector?.connectorType || "injected", ve = Q?.connector?.walletClientType || "unknown", be = ge?.metadata?.shortName || ge?.name || Q?.connector?.walletBranding.name || "Browser Extension", Te = ge?.image_url?.md || Q?.connector?.walletBranding.icon || ((t4) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mt, { ...t4 })), _e = "Browser Extension" === be ? be.toLowerCase() : be;
  t3 = n6 ? Y("connectionStatus.successfullyConnected", { walletName: _e }) : C ? Y("connectionStatus.errorTitle", { errorMessage: C.message }) : ye ? "Switching networks" : he ? g3 && we ? "Signing" : "Sign to verify" : `Waiting for ${_e}`;
  let Ee = Y("connectionStatus.checkOtherWindows");
  n6 ? Ee = re === (oe?.linkedAccounts.length || 0) ? "Wallet was already linked." : "You're good to go!" : te >= 2 && C ? Ee = "Unable to connect wallet" : C ? Ee = C.detail : ye ? Ee = "Switch your wallet to the requested network." : he && we ? Ee = "Sign the message in your wallet to verify it belongs to you." : "metamask" === ve && import_react_device_detect.isMobile ? Ee = "Click continue to open and connect MetaMask." : "metamask" === ve ? Ee = "For the best experience, connect only one wallet at a time." : "wallet_connect" === Ce ? Ee = "Open your mobile wallet app to continue" : "coinbase_wallet" === Ce ? n() || (Ee = x(oe) ? "Continue with the Coinbase app. Not the right wallet? Reset your connection below." : "Confirm in the Coinbase app/popup to continue.") : H?.login?.isSigningInWithLedgerSolana && (Ee = "Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");
  let Re = ee?.walletConnectors?.find(((e2) => "coinbase_wallet" === e2.walletClientType)), ke = "coinbase_wallet" === ve && (x(oe) || C === y.ERROR_USER_EXISTS);
  return (0, import_jsx_runtime.jsx)(F, { walletLogo: Te, title: t3, subtitle: Ee, signSuccess: n6, errorMessage: C, connectSuccess: he, separateConnectAndSign: we, signing: g3, walletConnectRedirectUri: ie, walletConnectFallbackUniversalUri: le, hasTabbedAway: de, showCoinbaseWalletResetCta: ke, numRetries: te, onBack: P2 && q !== P2 ? B2 : void 0, onSign: () => {
    f(true), fe();
  }, onRetry: () => {
    ne(te + 1), T2(void 0), he ? (f(true), fe()) : Q?.connectRetry();
  }, onCoinbaseReset: () => {
    Re && Re?.disconnect();
  }, onDifferentWallet: B2 });
} };
var P = gt.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`;

export {
  D,
  F,
  B
};
