import {
  EnvelopeIcon_default
} from "./chunk-GIDVL7W3.js";
import {
  PhoneIcon_default
} from "./chunk-P6V6I22J.js";
import {
  n as n2
} from "./chunk-JU4Q6HQT.js";
import {
  o
} from "./chunk-EIEISV5R.js";
import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
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
  A,
  i,
  r
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

// node_modules/@privy-io/react-auth/dist/esm/AwaitingPasswordlessCodeScreen-FXv-IHFW.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/@heroicons/react/20/solid/esm/CheckIcon.js
var React = __toESM(require_react(), 1);
function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = /* @__PURE__ */ React.forwardRef(CheckIcon);
var CheckIcon_default = ForwardRef;

// node_modules/@privy-io/react-auth/dist/esm/AwaitingPasswordlessCodeScreen-FXv-IHFW.mjs
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
import "viem/accounts";
var b = ({ contactMethod: c, authFlow: m, emailDomain: p, appName: u = "Privy", whatsAppEnabled: f = false, onBack: v, onCodeSubmit: h, onResend: y, errorMessage: g3, success: x = false, resendCountdown: b2 = 0, onInvalidInput: S2, onClearError: w2 }) => {
  let [A3, T2] = (0, import_react.useState)(C);
  (0, import_react.useEffect)((() => {
    g3 || T2(C);
  }), [g3]);
  let k3 = async (e2) => {
    e2.preventDefault();
    let r3 = e2.currentTarget.value.replace(" ", "");
    if ("" === r3) return;
    if (isNaN(Number(r3))) return void S2?.("Code should be numeric");
    w2?.();
    let o2 = Number(e2.currentTarget.name?.charAt(5)), t = [...r3 || [""]].slice(0, j - o2), i2 = [...A3.slice(0, o2), ...t, ...A3.slice(o2 + t.length)];
    T2(i2);
    let n4 = Math.min(Math.max(o2 + t.length, 0), j - 1);
    if (!isNaN(Number(e2.currentTarget.value))) {
      let e3 = document.querySelector(`input[name=code-${n4}]`);
      e3?.focus();
    }
    if (i2.every(((e3) => e3 && !isNaN(+e3)))) {
      let e3 = document.querySelector(`input[name=code-${n4}]`);
      e3?.blur(), await h?.(i2.join(""));
    }
  };
  return (0, import_jsx_runtime.jsx)(n, { title: "Enter confirmation code", subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", "email" === m ? { children: ["Please check ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(R, { children: c }), " for an email from", " ", p ?? "privy.io", " and enter your code below."] } : { children: ["Please check ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(R, { children: c }), " for a", f ? " WhatsApp" : "", " message from ", u, " and enter your code below."] }), icon: "email" === m ? EnvelopeIcon_default : PhoneIcon_default, onBack: v, showBack: true, helpText: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(L, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Didn't get ", "email" === m ? "an email" : "a message", "?"] }), b2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(M, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon_default, { color: "var(--privy-color-foreground)", strokeWidth: 1.33, height: "12px", width: "12px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Code sent" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { as: "button", size: "sm", onClick: y, children: "Resend code" })] }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(N, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: A3.map(((r3, o2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { name: `code-${o2}`, type: "text", value: A3[o2], onChange: k3, onKeyUp: (e2) => {
    "Backspace" === e2.key && ((e3) => {
      if (w2?.(), T2([...A3.slice(0, e3), "", ...A3.slice(e3 + 1)]), e3 > 0) {
        let r4 = document.querySelector(`input[name=code-${e3 - 1}]`);
        r4?.focus();
      }
    })(o2);
  }, inputMode: "numeric", autoFocus: 0 === o2, pattern: "[0-9]", className: `${x ? "success" : ""} ${g3 ? "fail" : ""}`, autoComplete: import_react_device_detect.isMobile ? "one-time-code" : "off" }, o2))) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { $fail: !!g3, $success: x, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Invalid or expired verification code" === g3 ? "Incorrect code" : g3 || (x ? "Success!" : "") }) })] }) }) }) });
};
var j = 6;
var C = Array(6).fill("");
var S;
var w;
var A2 = ((S = A2 || {})[S.RESET_AFTER_DELAY = 0] = "RESET_AFTER_DELAY", S[S.CLEAR_ON_NEXT_VALID_INPUT = 1] = "CLEAR_ON_NEXT_VALID_INPUT", S);
var T = ((w = T || {})[w.EMAIL = 0] = "EMAIL", w[w.SMS = 1] = "SMS", w);
var k2 = { component: () => {
  let { navigate: r3, lastScreen: o2, navigateBack: t, setModalData: i2, onUserCloseViaDialogOrKeybindRef: s2 } = g2(), c = se(), { closePrivyModal: l2, resendEmailCode: d, resendSmsCode: E, getAuthMeta: j2, loginWithCode: C2, updateWallets: S2, createAnalyticsEvent: w2 } = l(), { authenticated: A3, logout: T2, user: k3 } = k(), { whatsAppEnabled: N2 } = se(), [_2, I2] = (0, import_react.useState)(false), [L2, M2] = (0, import_react.useState)(null), [R2, D] = (0, import_react.useState)(null), [O, P] = (0, import_react.useState)(0);
  s2.current = () => null;
  let U = j2()?.email ? 0 : 1, W = 0 === U ? j2()?.email || "" : j2()?.phoneNumber || "", F = g - 500;
  (0, import_react.useEffect)((() => {
    if (O) {
      let e2 = setTimeout((() => {
        P(O - 1);
      }), 1e3);
      return () => clearTimeout(e2);
    }
  }), [O]), (0, import_react.useEffect)((() => {
    if (A3 && _2 && k3) {
      if (c?.legal.requireUsersAcceptTerms && !k3.hasAcceptedTerms) {
        let e2 = setTimeout((() => {
          r3("AffirmativeConsentScreen");
        }), F);
        return () => clearTimeout(e2);
      }
      if (a(k3, c.embeddedWallets)) {
        let e2 = setTimeout((() => {
          i2({ createWallet: { onSuccess: () => {
          }, onFailure: (e3) => {
            console.error(e3), w2({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, screen: "AwaitingPasswordlessCodeScreen" } }), T2();
          }, callAuthOnSuccessOnClose: true } }), r3("EmbeddedWalletOnAccountCreateScreen");
        }), F);
        return () => clearTimeout(e2);
      }
      {
        S2();
        let e2 = setTimeout((() => l2({ shouldCallAuthOnSuccess: true, isSuccess: true })), g);
        return () => clearTimeout(e2);
      }
    }
  }), [A3, _2, k3]), (0, import_react.useEffect)((() => {
    if (L2 && 0 === R2) {
      let e2 = setTimeout((() => {
        M2(null), D(null);
        let e3 = document.querySelector("input[name=code-0]");
        e3?.focus();
      }), 1400);
      return () => clearTimeout(e2);
    }
  }), [L2, R2]);
  return (0, import_jsx_runtime.jsx)(b, { contactMethod: W, authFlow: 0 === U ? "email" : "sms", emailDomain: c?.appearance.emailDomain, appName: c?.name, whatsAppEnabled: N2, onBack: () => t(), onCodeSubmit: async (e2) => {
    try {
      await C2(e2), I2(true);
    } catch (e3) {
      if (e3 instanceof r && e3.privyErrorCode === i.INVALID_CREDENTIALS) M2("Invalid or expired verification code"), D(0);
      else if (e3 instanceof r && e3.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE) M2(e3.message);
      else {
        if (e3 instanceof r && e3.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A(e3).toString()), void r3("UserLimitReachedScreen");
        if (e3 instanceof r && e3.privyErrorCode === i.USER_DOES_NOT_EXIST) return void r3("AccountNotFoundScreen");
        if (e3 instanceof r && e3.privyErrorCode === i.LINKED_TO_ANOTHER_USER) return i2({ errorModalData: { error: e3, previousScreen: o2 ?? "AwaitingPasswordlessCodeScreen" } }), void r3("ErrorScreen", false);
        if (e3 instanceof r && e3.privyErrorCode === i.DISALLOWED_PLUS_EMAIL) return i2({ inlineError: { error: e3 } }), void r3("ConnectOrCreateScreen", false);
        if (e3 instanceof r && e3.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e3.data?.data?.nonce) return i2({ accountTransfer: { nonce: e3.data?.data?.nonce, account: W, displayName: e3.data?.data?.account?.displayName, linkMethod: 0 === U ? "email" : "sms", embeddedWalletAddress: e3.data?.data?.otherUser?.embeddedWalletAddress } }), void r3("LinkConflictScreen");
        M2("Issue verifying code"), D(0);
      }
    }
  }, onResend: async () => {
    P(30), 0 === U ? await d() : await E();
  }, errorMessage: L2 || void 0, success: _2, resendCountdown: O, onInvalidInput: (e2) => {
    M2(e2), D(1);
  }, onClearError: () => {
    1 === R2 && (M2(null), D(null));
  } });
} };
var N = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`;
var _ = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`;
var I = gt.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${(e2) => e2.$success ? "var(--privy-color-success-dark)" : e2.$fail ? "var(--privy-color-error-dark)" : "transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
var L = gt.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`;
var M = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`;
var R = gt.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;
export {
  k2 as AwaitingPasswordlessCodeScreen,
  b as AwaitingPasswordlessCodeScreenView,
  k2 as default
};
