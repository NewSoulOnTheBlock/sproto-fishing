import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  FingerprintPattern
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
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
  i,
  t
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
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
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/PasskeyStatusScreen-B4EIwnM-.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var f = ({ status: t3, passkeySignupFlow: o2 = false, error: i3, onRetry: s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: (() => {
  switch (t3) {
    case "loading":
      return "Waiting for passkey";
    case "success":
      return "Success";
    case "error":
      return "Something went wrong";
  }
})(), subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { children: (() => {
  switch (t3) {
    case "loading":
      return o2 ? "Please follow prompts to register your passkey." : "Please follow prompts to verify your passkey.\nYou will have to sign up with another method first to register a passkey for your account.";
    case "success":
      return "You've successfully logged in with your passkey.";
    case "error":
      if (i3 instanceof t) {
        if (i3.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE) return "Cannot link more passkeys to account.";
        if (i3.privyErrorCode === i.PASSKEY_NOT_ALLOWED) return "Passkey request timed out or rejected by user.\nYou will have to sign up with another method first to register a passkey for your account.";
      }
      return "An unknown error occurred.\nYou will have to sign up with another method first to register a passkey for your account.";
  }
})() }), icon: FingerprintPattern, iconVariant: "loading", iconLoadingStatus: { success: "success" === t3, fail: "error" === t3 }, primaryCta: "error" === t3 && s ? { label: "Retry", onClick: s } : "success" === t3 ? { label: "Continue", disabled: true } : void 0, watermark: true });
var h = { component: () => {
  let { data: r, setModalData: s, navigate: m } = g2(), y = se(), { loginWithPasskey: h2, signupWithPasskey: j2, closePrivyModal: v, createAnalyticsEvent: g3 } = l(), { user: w, logout: S, ready: k2, authenticated: E } = k(), { passkeySignupFlow: C } = r?.passkeyAuthModalData ?? {}, A = g - 500, [b, _] = (0, import_react.useState)("loading"), [P, T] = (0, import_react.useState)(null), x = (0, import_react.useRef)([]), L = (e2) => {
    x.current = [e2, ...x.current];
  };
  (0, import_react.useEffect)((() => () => {
    x.current.forEach(((e2) => clearTimeout(e2))), x.current = [];
  }), []);
  let O = async () => {
    _("loading");
    try {
      C ? await j2() : await h2(), _("success");
    } catch (e2) {
      if (e2?.privyErrorCode === i.USER_DOES_NOT_EXIST) return void m("AccountNotFoundScreen");
      if (e2?.privyErrorCode === i.ALLOWLIST_REJECTED) return void m("AllowlistRejectionScreen");
      if (e2?.privyErrorCode === i.USER_LIMIT_REACHED) return void m("UserLimitReachedScreen");
      T(e2), _("error");
    }
  };
  return (0, import_react.useEffect)((() => {
    if (k2 && E && "success" === b && w) {
      if (y?.legal.requireUsersAcceptTerms && !w.hasAcceptedTerms) return void L(setTimeout((() => {
        m("AffirmativeConsentScreen");
      }), A));
      if (!a(w, y?.embeddedWallets)) return void L(setTimeout((() => {
        v({ shouldCallAuthOnSuccess: true, isSuccess: true });
      }), g));
      L(setTimeout((() => {
        s({ createWallet: { onSuccess: () => {
        }, onFailure: (e2) => {
          console.error(e2), g3({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e2, screen: "PasskeyStatusScreen" } }), S();
        }, callAuthOnSuccessOnClose: true } }), m("EmbeddedWalletOnAccountCreateScreen");
      }), A));
    }
  }), [k2, E, w, b]), (0, import_react.useEffect)((() => {
    O();
  }), []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { status: b, passkeySignupFlow: C, error: P, onRetry: O });
} };
var j = gt.span`
  white-space: pre-wrap;
`;
export {
  h as PasskeyStatusScreen,
  f as PasskeyStatusScreenView,
  h as default
};
