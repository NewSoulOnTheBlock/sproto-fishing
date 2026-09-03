import {
  e as e2
} from "./chunk-6TIKH233.js";
import {
  B,
  C,
  d,
  e,
  h,
  i as i2,
  l as l2,
  n as n2,
  o,
  r as r2,
  s
} from "./chunk-3JLDN2QE.js";
import {
  c
} from "./chunk-7562YI5E.js";
import {
  GlobeAltIcon_default
} from "./chunk-34BVSFPO.js";
import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  xa
} from "./chunk-2IJQ6F4F.js";
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
  k,
  r
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

// node_modules/@privy-io/react-auth/dist/esm/OAuthStatusScreen-Bp5-pukh.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var R = ({ style: t2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeAltIcon_default, { style: { color: "var(--privy-color-error)", ...t2 } });
var N = { google: { name: "Google", component: r2 }, discord: { name: "Discord", component: e }, github: { name: "Github", component: l2 }, linkedin: { name: "LinkedIn", component: n2 }, twitter: { name: "Twitter", component: d }, spotify: { name: "Spotify", component: s }, instagram: { name: "Instagram", component: h }, tiktok: { name: "Tiktok", component: o }, line: { name: "LINE", component: C }, twitch: { name: "Twitch", component: B }, apple: { name: "Apple", component: i2 }, telegram: { name: "Telegram", component: c } };
var U = ({ iconUrl: e4, ...r4 }) => import_react.default.createElement("svg", { width: "33", height: "32", viewBox: "0 0 33 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r4 }, import_react.default.createElement("foreignObject", { x: "2", y: "2", width: "29", height: "28" }, import_react.default.createElement("img", { src: e4, width: "29", height: "28", style: { display: "block", objectFit: "contain", borderRadius: "4px" }, alt: "Provider icon" })));
var k2 = (e4, r4) => {
  if (e4 in N) return N[e4];
  if (r(e4) && r4) {
    let o3 = r4.find(((t2) => t2.provider === e4));
    if (o3) return { name: o3.provider_display_name, component: (e5) => import_react.default.createElement(U, { ...e5, iconUrl: o3.provider_icon_url }) };
  }
  return { name: "Unknown", component: R };
};
function I(e4, t2, r4) {
  let o3 = { detail: "", retryable: false }, i3 = e2(t2);
  if (e4?.privyErrorCode === i.LINKED_TO_ANOTHER_USER && (o3.detail = "This account has already been linked to another user."), e4?.privyErrorCode === i.INVALID_CREDENTIALS && (o3.retryable = true, o3.detail = "Something went wrong. Try again."), e4.privyErrorCode === i.OAUTH_USER_DENIED && (o3.detail = `Retry and check ${i3} to finish connecting your account.`, o3.retryable = true), e4?.privyErrorCode === i.TOO_MANY_REQUESTS && (o3.detail = "Too many requests. Please wait before trying again."), e4?.privyErrorCode === i.TOO_MANY_REQUESTS && e4.message.includes("provider rate limit")) {
    let e5 = k2(t2, r4).name;
    o3.detail = `Request limit reached for ${e5}. Please wait a moment and try again.`;
  }
  if (e4?.privyErrorCode === i.OAUTH_ACCOUNT_SUSPENDED) {
    let e5 = k2(t2, r4).name;
    o3.detail = `Your ${e5} account is suspended. Please try another login method.`;
  }
  return e4?.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE && (o3.detail = "You cannot authorize more than one account for this user."), e4?.privyErrorCode === i.OAUTH_UNEXPECTED && t2.startsWith("privy:") && (o3.detail = "Something went wrong. Please try again."), o3;
}
var L = ({ providerName: t2, ProviderLogo: r4, success: o3, errorMessage: i3, onRetry: a2 }) => {
  let n3 = o3 ? `Successfully connected with ${t2}` : i3 ? i3.message : `Verifying connection to ${t2}`;
  return (0, import_jsx_runtime.jsx)(n, { title: n3, subtitle: o3 ? "You're good to go!" : i3 ? i3.detail : "Just a few moments more", icon: r4, iconVariant: "loading", iconLoadingStatus: { success: o3, fail: !!i3 }, secondaryCta: i3?.retryable && a2 ? { label: "Retry", onClick: a2 } : void 0, watermark: true });
};
var P = { component: () => {
  let { authenticated: t2, logout: i3, ready: n3, user: s2 } = k(), { setModalData: m, navigate: c2, resetNavigation: l3 } = g2(), d2 = se(), { getAuthMeta: p, initLoginWithOAuth: u, loginWithOAuth: v, updateWallets: y, setReadyToTrue: h2, closePrivyModal: g3, createAnalyticsEvent: f } = l(), [_, b] = (0, import_react.useState)(false), [R2, N2] = (0, import_react.useState)(void 0), U2 = p()?.provider || "google", { name: P2, component: x } = k2(U2, d2.customOAuthProviders);
  return (0, import_react.useEffect)((() => {
    v(U2).then((() => {
      b(true), h2(true);
    })).catch(((e4) => {
      if (h2(false), e4?.privyErrorCode === i.ALLOWLIST_REJECTED) return N2(void 0), l3(), void c2("AllowlistRejectionScreen");
      if (e4?.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A(e4).toString()), N2(void 0), l3(), void c2("UserLimitReachedScreen");
      if (e4?.privyErrorCode === i.USER_DOES_NOT_EXIST) return N2(void 0), l3(), void c2("AccountNotFoundScreen");
      if (e4?.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e4.data?.data?.nonce) return N2(void 0), l3(), m({ accountTransfer: { nonce: e4.data?.data?.nonce, account: e4.data?.data?.subject, displayName: e4.data?.data?.account?.displayName, linkMethod: p()?.provider, embeddedWalletAddress: e4.data?.data?.otherUser?.embeddedWalletAddress, oAuthUserInfo: e4.data?.data?.otherUser?.oAuthUserInfo } }), void c2("LinkConflictScreen");
      let { retryable: t3, detail: r4 } = I(e4, U2, d2.customOAuthProviders);
      N2({ retryable: t3, detail: r4, message: "Authentication failed" });
    })).finally((() => {
      xa();
    }));
  }), [P2, U2]), (0, import_react.useEffect)((() => {
    if (n3 && t2 && _ && s2) {
      if (d2?.legal.requireUsersAcceptTerms && !s2.hasAcceptedTerms) {
        let e4 = setTimeout((() => {
          c2("AffirmativeConsentScreen");
        }), g);
        return () => clearTimeout(e4);
      }
      if (a(s2, d2.embeddedWallets)) {
        let e4 = setTimeout((() => {
          m({ createWallet: { onSuccess: () => {
          }, onFailure: (e5) => {
            console.error(e5), f({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e5, provider: U2, screen: "OAuthStatusScreen" } }), i3();
          }, callAuthOnSuccessOnClose: true } }), c2("EmbeddedWalletOnAccountCreateScreen");
        }), g);
        return () => clearTimeout(e4);
      }
      {
        let e4 = setTimeout((() => g3({ shouldCallAuthOnSuccess: true, isSuccess: true })), g);
        return y(), () => clearTimeout(e4);
      }
    }
  }), [n3, t2, _, s2]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { providerName: P2, ProviderLogo: x, success: _, errorMessage: R2, onRetry: R2?.retryable ? () => {
    xa(), u(U2), N2(void 0);
  } : void 0 });
}, isShownBeforeReady: true };
export {
  P as OAuthStatusScreen,
  L as OAuthStatusScreenView,
  P as default
};
