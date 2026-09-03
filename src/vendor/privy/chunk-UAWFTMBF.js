import {
  m
} from "./chunk-MK657462.js";
import {
  n as n2
} from "./chunk-623CPBW2.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import {
  Lock,
  Phone,
  TriangleAlert
} from "./chunk-ELJY7WHB.js";
import {
  gi,
  za
} from "./chunk-2IJQ6F4F.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  i,
  r,
  s,
  t
} from "./chunk-W22FA2JU.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt
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

// node_modules/@privy-io/react-auth/dist/esm/ErrorScreen-C5jkUm97.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var f = ({ error: n3, allowlistConfig: s2, onRetry: m2, onCaptchaReset: T, onBack: f2 }) => {
  let j2 = ((n4, s3) => {
    if (n4 instanceof m) return { title: "Transaction failed", detail: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n4.message }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" ", "Check the", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { href: n4.relayLink, target: "_blank", children: "refund status" }), "."] })] }), ctaText: "Try again", icon: TriangleAlert };
    if (n4 instanceof s) switch (n4.privyErrorCode) {
      case i.CLIENT_REQUEST_TIMEOUT:
        return { title: "Timed out", detail: n4.message, ctaText: "Try again", icon: TriangleAlert };
      case i.INSUFFICIENT_BALANCE:
        return { title: "Insufficient balance", detail: n4.message, ctaText: "Try again", icon: TriangleAlert };
      case i.TRANSACTION_FAILURE:
        return { title: "Transaction failure", detail: n4.message, ctaText: "Try again", icon: TriangleAlert };
      default:
        return { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
    }
    else {
      if (n4 instanceof gi && "twilio_verification_failed" === n4.type) return { title: "Something went wrong", detail: n4.message, ctaText: "Try again", icon: Phone };
      if (!(n4 instanceof t)) return n4 instanceof r && n4.status && [400, 422].includes(n4.status) ? { title: "Something went wrong", detail: n4.message, ctaText: "Try again", icon: TriangleAlert } : { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
      switch (n4.privyErrorCode) {
        case i.INVALID_CAPTCHA:
          return { title: "Something went wrong", detail: "Please try again.", ctaText: "Try again", icon: TriangleAlert };
        case i.DISALLOWED_LOGIN_METHOD:
          return { title: "Not allowed", detail: n4.message, ctaText: "Try another method", icon: TriangleAlert };
        case i.ALLOWLIST_REJECTED:
          return { title: s3.errorTitle || "You don't have access to this app", detail: s3.errorDetail || "Have you been invited?", ctaText: s3.errorCtaText || "Try another account", icon: Lock };
        case i.CAPTCHA_FAILURE:
          return { title: "Something went wrong", detail: "You did not pass CAPTCHA. Please try again.", ctaText: "Try again", icon: null };
        case i.CAPTCHA_TIMEOUT:
          return { title: "Something went wrong", detail: "Something went wrong! Please try again later.", ctaText: "Try again", icon: null };
        case i.LINKED_TO_ANOTHER_USER:
          return { title: "Authentication failed", detail: "This account has already been linked to another user.", ctaText: "Try again", icon: TriangleAlert };
        case i.NOT_SUPPORTED:
          return { title: "This region is not supported", detail: "SMS authentication from this region is not available", ctaText: "Try another method", icon: TriangleAlert };
        case i.TOO_MANY_REQUESTS:
          return { title: "Request failed", detail: "Too many attempts.", ctaText: "Try again later", icon: TriangleAlert };
        default:
          return { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
      }
    }
  })(n3, s2);
  return (0, import_jsx_runtime.jsx)(n, { title: j2.title, subtitle: j2.detail, icon: j2.icon, onBack: f2, iconVariant: "error", primaryCta: { label: j2.ctaText, onClick: () => {
    if (n3 instanceof t && (n3.privyErrorCode === i.INVALID_CAPTCHA && T?.(), n3.privyErrorCode === i.ALLOWLIST_REJECTED)) {
      let t3 = n2(s2.errorCtaLink);
      if (t3) return void window.open(t3, "_blank", "noopener,noreferrer");
    }
    m2?.();
  }, variant: "error" }, watermark: true });
};
var j = { component: () => {
  let { navigate: e2, data: r3, lastScreen: i2, currentScreen: o } = g(), a = se(), { reset: n3 } = za(), c = r3?.errorModalData?.previousScreen || (i2 === o ? void 0 : i2);
  return (0, import_jsx_runtime.jsx)(f, { error: r3?.errorModalData?.error || Error(), allowlistConfig: a.allowlistConfig, onRetry: () => {
    e2(c || "LandingScreen", false);
  }, onCaptchaReset: n3 });
} };
var w = gt.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;

export {
  f,
  j
};
