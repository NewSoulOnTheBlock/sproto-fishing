import {
  n as n2
} from "./chunk-BQ7TWRZK.js";
import {
  l as l2
} from "./chunk-RXHEHL44.js";
import {
  r
} from "./chunk-NH742RS2.js";
import {
  require_browser,
  x
} from "./chunk-4BHOTT2W.js";
import {
  a as a2
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Check,
  Copy
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  f
} from "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import {
  A,
  i
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  a2 as a,
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
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/FarcasterConnectStatusScreen-Dc5qi2Ay.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var import_qrcode = __toESM(require_browser(), 1);
import "viem";
import "viem/chains";
import "viem/utils";
import "viem/accounts";
var E = gt.div`
  width: 100%;
`;
var T = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${(e2) => e2.$disabled ? "var(--privy-color-background-2)" : "var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${(e2) => e2.$disabled ? "var(--privy-color-foreground-4)" : "var(--privy-color-foreground-3)"};
  }
`;
var A2 = gt.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`;
var L = gt.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${(e2) => e2.$disabled ? "var(--privy-color-foreground-2)" : "var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  /* Use single-line truncation without nowrap to respect container width */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
var F = gt(L)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`;
var O = gt(r)`
  margin-bottom: 0.5rem;
`;
var _ = gt(f)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;
var I = ({ value: a4, title: n4, placeholder: s2, className: l3, showCopyButton: c = true, truncate: d, maxLength: m = 40, disabled: h = false }) => {
  let [v, f2] = (0, import_react.useState)(false), g3 = d && a4 ? ((e2, r3, t2) => {
    if ((e2 = e2.startsWith("https://") ? e2.slice(8) : e2).length <= t2) return e2;
    if ("middle" === r3) {
      let r4 = Math.ceil(t2 / 2) - 2, o2 = Math.floor(t2 / 2) - 1;
      return `${e2.slice(0, r4)}...${e2.slice(-o2)}`;
    }
    return `${e2.slice(0, t2 - 3)}...`;
  })(a4, d, m) : a4;
  return (0, import_react.useEffect)((() => {
    if (v) {
      let e2 = setTimeout((() => f2(false)), 3e3);
      return () => clearTimeout(e2);
    }
  }), [v]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(E, { className: l3, children: [n4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { children: n4 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T, { $disabled: h, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A2, { children: a4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { $disabled: h, title: a4, children: g3 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, { $disabled: h, children: s2 || "No value" }) }), c && a4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_, { onClick: function(e2) {
    e2.stopPropagation(), navigator.clipboard.writeText(a4).then((() => f2(true))).catch(console.error);
  }, size: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, v ? { children: ["Copied", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 })] }) })] })] });
};
var R = ({ connectUri: t2, loading: o2, success: i3, errorMessage: a4, onBack: l3, onClose: p, onOpenFarcaster: u }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, import_react_device_detect.isMobile || o2 ? import_react_device_detect.isIOS ? { title: a4 ? a4.message : "Sign in with Farcaster", subtitle: a4 ? a4.detail : "To sign in with Farcaster, please open the Farcaster app.", icon: l2, iconVariant: "loading", iconLoadingStatus: { success: i3, fail: !!a4 }, primaryCta: t2 && u ? { label: "Open Farcaster app", onClick: u } : void 0, onBack: l3, onClose: p, watermark: true } : { title: a4 ? a4.message : "Signing in with Farcaster", subtitle: a4 ? a4.detail : "This should only take a moment", icon: l2, iconVariant: "loading", iconLoadingStatus: { success: i3, fail: !!a4 }, onBack: l3, onClose: p, watermark: true, children: t2 && import_react_device_detect.isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(U, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { text: "Take me to Farcaster", url: t2, color: "#8a63d2" }) }) } : { title: "Sign in with Farcaster", subtitle: "Scan with your phone's camera to continue.", onBack: l3, onClose: p, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(M, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { children: t2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { url: t2, size: 275, squareLogoElement: l2 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(W, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(D, { children: "Or copy this link and paste it into a phone browser to open the Farcaster app." }), t2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { value: t2, truncate: "end", maxLength: 30, showCopyButton: true, disabled: true })] })] }) });
var N = { component: () => {
  let { authenticated: e2, logout: t2, ready: n4, user: s2 } = k(), { lastScreen: l3, navigate: c, navigateBack: d, setModalData: m } = g2(), p = se(), { getAuthFlow: u, loginWithFarcaster: h, closePrivyModal: v, createAnalyticsEvent: S } = l(), [k2, E2] = (0, import_react.useState)(void 0), [T2, A3] = (0, import_react.useState)(false), [L2, F2] = (0, import_react.useState)(false), O2 = (0, import_react.useRef)([]), _2 = u(), I2 = _2?.meta.connectUri;
  return (0, import_react.useEffect)((() => {
    let e3 = Date.now(), r3 = setInterval((async () => {
      let t3 = await _2.pollForReady.execute(), o2 = Date.now() - e3;
      if (t3) {
        clearInterval(r3), A3(true);
        try {
          await h(), F2(true);
        } catch (e4) {
          let r4 = { retryable: false, message: "Authentication failed" };
          if (e4?.privyErrorCode === i.ALLOWLIST_REJECTED) return void c("AllowlistRejectionScreen");
          if (e4?.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A(e4).toString()), void c("UserLimitReachedScreen");
          if (e4?.privyErrorCode === i.USER_DOES_NOT_EXIST) return void c("AccountNotFoundScreen");
          if (e4?.privyErrorCode === i.LINKED_TO_ANOTHER_USER) r4.detail = e4.message ?? "This account has already been linked to another user.";
          else {
            if (e4?.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e4.data?.data?.nonce) return m({ accountTransfer: { nonce: e4.data?.data?.nonce, account: e4.data?.data?.subject, displayName: e4.data?.data?.account?.displayName, linkMethod: "farcaster", embeddedWalletAddress: e4.data?.data?.otherUser?.embeddedWalletAddress, farcasterEmbeddedAddress: e4.data?.data?.otherUser?.farcasterEmbeddedAddress } }), void c("LinkConflictScreen");
            e4?.privyErrorCode === i.INVALID_CREDENTIALS ? (r4.retryable = true, r4.detail = "Something went wrong. Try again.") : e4?.privyErrorCode === i.TOO_MANY_REQUESTS && (r4.detail = "Too many requests. Please wait before trying again.");
          }
          E2(r4);
        }
      } else o2 > 12e4 && (clearInterval(r3), E2({ retryable: true, message: "Authentication failed", detail: "The request timed out. Try again." }));
    }), 2e3);
    return () => {
      clearInterval(r3), O2.current.forEach(((e4) => clearTimeout(e4)));
    };
  }), []), (0, import_react.useEffect)((() => {
    if (n4 && e2 && L2 && s2) {
      if (p?.legal.requireUsersAcceptTerms && !s2.hasAcceptedTerms) {
        let e3 = setTimeout((() => {
          c("AffirmativeConsentScreen");
        }), g);
        return () => clearTimeout(e3);
      }
      L2 && (a2(s2, p.embeddedWallets) ? O2.current.push(setTimeout((() => {
        m({ createWallet: { onSuccess: () => {
        }, onFailure: (e3) => {
          console.error(e3), S({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, screen: "FarcasterConnectStatusScreen" } }), t2();
        }, callAuthOnSuccessOnClose: true } }), c("EmbeddedWalletOnAccountCreateScreen");
      }), g)) : O2.current.push(setTimeout((() => v({ shouldCallAuthOnSuccess: true, isSuccess: true })), g)));
    }
  }), [L2, n4, e2, s2]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(R, { connectUri: I2, loading: T2, success: L2, errorMessage: k2, onBack: l3 ? d : void 0, onClose: v, onOpenFarcaster: () => {
    I2 && (window.location.href = I2);
  } });
} };
var U = gt.div`
  margin-top: 24px;
`;
var M = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
var $ = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`;
var W = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
var D = gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`;
var z = gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;
export {
  N as FarcasterConnectStatusScreen,
  R as FarcasterConnectStatusView,
  N as default
};
