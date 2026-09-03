import {
  c,
  p,
  w
} from "./chunk-OL32SSSM.js";
import {
  t as t2
} from "./chunk-3X5UVGJ4.js";
import "./chunk-OBV6VSAS.js";
import {
  h
} from "./chunk-3DDSRDFL.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Check,
  CircleX,
  Hourglass,
  UserCheck
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  Cl
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import {
  t
} from "./chunk-5IEXBHIB.js";
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
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  _a
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

// node_modules/@privy-io/react-auth/dist/esm/FundWithBankDepositScreen-BxBYRc64.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
import "viem/accounts";
var j = (e2) => {
  try {
    return e2.location.origin;
  } catch {
    return;
  }
};
var x = ({ data: r2, onClose: o2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: o2, title: "Initiate bank transfer", subtitle: "Use the details below to complete a bank transfer from your bank.", primaryCta: { label: "Done", onClick: o2 }, watermark: false, footerText: "Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { children: (Cl[r2.deposit_instructions.asset] || []).map((([o3, s2], i2) => {
  let a = r2.deposit_instructions[o3];
  if (!a || Array.isArray(a)) return null;
  let n2 = "asset" === o3 ? a.toUpperCase() : a, c2 = n2.length > 100 ? `${n2.slice(0, 9)}...${n2.slice(-9)}` : n2;
  return (0, import_jsx_runtime.jsxs)(S, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(U, { children: s2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { value: n2, includeChildren: import_react_device_detect.isMobile, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, { children: c2 }) })] }, i2);
})) }) });
var A = gt.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`;
var S = gt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`;
var U = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`;
var E = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;
var T = ({ onClose: t4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: t4, icon: CircleX, iconVariant: "error", title: "Something went wrong", subtitle: "We couldn't complete account setup. This isn't caused by anything you did.", primaryCta: { label: "Close", onClick: t4 }, watermark: true });
var I = ({ onClose: t4, reason: r2 }) => {
  let o2 = r2 ? r2.charAt(0).toLowerCase() + r2.slice(1) : void 0;
  return (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: t4, icon: CircleX, iconVariant: "error", title: "Identity verification failed", subtitle: o2 ? `We can't complete identity verification because ${o2}. Please try again or contact support for assistance.` : "We couldn't verify your identity. Please try again or contact support for assistance.", primaryCta: { label: "Close", onClick: t4 }, watermark: true });
};
var L = ({ onClose: r2, email: o2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: r2, icon: Hourglass, title: "Identity verification in progress", subtitle: "We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.", primaryCta: { label: "Done", onClick: r2 }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t2, { theme: "light", children: ["You'll receive an email at ", o2, " once approved with instructions for completing your deposit."] }) });
var _ = ({ onClose: o2, onAcceptTerms: s2, isLoading: i2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: o2, icon: UserCheck, title: "Verify your identity to continue", subtitle: "Finish verification with Persona \u2014 it takes just a few minutes and requires a government ID.", helpText: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`, " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://www.bridge.xyz/legal", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }), " ", "and", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }), "."] }), primaryCta: { label: "Accept and continue", onClick: s2, loading: i2 }, watermark: true });
var P = ({ onClose: t4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { showClose: true, onClose: t4, icon: Check, iconVariant: "success", title: "Identity verified successfully", subtitle: "We've successfully verified your identity. Now initiate a bank transfer to view instructions.", primaryCta: { label: "Initiate bank transfer", onClick: () => {
}, loading: true }, watermark: true });
var W = ({ opts: r2, onClose: o2, onEditSourceAsset: s2, onSelectAmount: i2, isLoading: a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { showClose: true, onClose: o2, headerTitle: `Buy ${r2.destination.asset.toLocaleUpperCase()}`, primaryCta: { label: "Continue", onClick: i2, loading: a }, watermark: true, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { currency: r2.source.selectedAsset, inputMode: "decimal", autoFocus: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { selectedAsset: r2.source.selectedAsset, onEditSourceAsset: s2 })] });
var B = ({ onClose: t4, onAcceptTerms: r2, onSelectAmount: o2, onSelectSource: s2, onEditSourceAsset: i2, opts: a, state: n2, email: c2, isLoading: l }) => "select-amount" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { onClose: t4, onSelectAmount: o2, onEditSourceAsset: i2, opts: a, isLoading: l }) : "select-source-asset" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { onSelectSource: s2, opts: a, isLoading: l }) : "kyc-prompt" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_, { onClose: t4, onAcceptTerms: r2, opts: a, isLoading: l }) : "kyc-incomplete" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: t4, email: c2 }) : "kyc-success" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { onClose: t4 }) : "kyc-error" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { onClose: t4, reason: n2.reason }) : "account-details" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { onClose: t4, data: n2.data }) : "create-customer-error" === n2.status || "get-customer-error" === n2.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { onClose: t4 }) : null;
var z = { component: () => {
  let { user: t4 } = k(), r2 = g().data;
  if (!r2?.FundWithBankDepositScreen) throw Error("Missing data");
  let { onSuccess: u2, onFailure: m, opts: d, createOrUpdateCustomer: p2, getCustomer: y, getOrCreateVirtualAccount: f } = r2.FundWithBankDepositScreen, [h2, g2] = (0, import_react.useState)(d), [v, w2] = (0, import_react.useState)({ status: "select-amount" }), [C, b] = (0, import_react.useState)(null), [k2, x2] = (0, import_react.useState)(false), A2 = (0, import_react.useRef)(null), S2 = (0, import_react.useCallback)((async () => {
    let e2;
    x2(true), b(null);
    try {
      e2 = await y({ kycRedirectUrl: window.location.origin });
    } catch (e3) {
      if (!e3 || "object" != typeof e3 || !("status" in e3) || 404 !== e3.status) return w2({ status: "get-customer-error" }), b(e3), void x2(false);
    }
    if (!e2) try {
      e2 = await p2({ hasAcceptedTerms: false, kycRedirectUrl: window.location.origin });
    } catch (e3) {
      return w2({ status: "create-customer-error" }), b(e3), void x2(false);
    }
    if (!e2) return w2({ status: "create-customer-error" }), b(Error("Unable to create customer")), void x2(false);
    if ("not_started" === e2.status && e2.kyc_url) return w2({ status: "kyc-prompt", kycUrl: e2.kyc_url }), void x2(false);
    if ("not_started" === e2.status) return w2({ status: "get-customer-error" }), b(Error("Unexpected user state")), void x2(false);
    if ("rejected" === e2.status) return w2({ status: "kyc-error", reason: e2.rejection_reasons?.[0]?.reason }), b(Error("User KYC rejected.")), void x2(false);
    if ("incomplete" === e2.status) return w2({ status: "kyc-incomplete" }), void x2(false);
    if ("active" !== e2.status) return w2({ status: "get-customer-error" }), b(Error("Unexpected user state")), void x2(false);
    e2.status;
    try {
      let e3 = await f({ destination: h2.destination, provider: h2.provider, source: { asset: h2.source.selectedAsset } });
      w2({ status: "account-details", data: e3 });
    } catch (e3) {
      return w2({ status: "create-customer-error" }), b(e3), void x2(false);
    }
  }), [h2]), U2 = (0, import_react.useCallback)((async () => {
    if (b(null), x2(true), "kyc-prompt" !== v.status) return b(Error("Unexpected state")), void x2(false);
    let e2 = t({ location: v.kycUrl });
    if (await p2({ hasAcceptedTerms: true }), !e2) return b(Error("Unable to begin kyc flow.")), x2(false), void w2({ status: "create-customer-error" });
    A2.current = new AbortController();
    let t5 = await (async (e3, t6) => {
      let r4 = await _a({ operation: async () => ({ done: j(e3) === window.location.origin, closed: e3.closed }), until: ({ done: e4, closed: t7 }) => e4 || t7, delay: 0, interval: 500, attempts: 360, signal: t6 });
      return "aborted" === r4.status ? (e3.close(), { status: "aborted" }) : "max_attempts" === r4.status ? { status: "timeout" } : r4.result.done ? (e3.close(), { status: "redirected" }) : { status: "closed" };
    })(e2, A2.current.signal);
    if ("aborted" === t5.status) return;
    if ("closed" === t5.status) return void x2(false);
    t5.status;
    let r3 = await _a({ operation: () => y({}), until: (e3) => "active" === e3.status || "rejected" === e3.status, delay: 0, interval: 2e3, attempts: 60, signal: A2.current.signal });
    if ("aborted" !== r3.status) {
      if ("max_attempts" === r3.status) return w2({ status: "kyc-incomplete" }), void x2(false);
      if (r3.status, "rejected" === r3.result.status) return w2({ status: "kyc-error", reason: r3.result.rejection_reasons?.[0]?.reason }), b(Error("User KYC rejected.")), void x2(false);
      if ("active" !== r3.result.status) return w2({ status: "kyc-incomplete" }), void x2(false);
      e2.closed || e2.close(), r3.result.status;
      try {
        w2({ status: "kyc-success" });
        let e3 = await f({ destination: h2.destination, provider: h2.provider, source: { asset: h2.source.selectedAsset } });
        w2({ status: "account-details", data: e3 });
      } catch (e3) {
        w2({ status: "create-customer-error" }), b(e3);
      } finally {
        x2(false);
      }
    }
  }), [w2, b, x2, p2, f, v, h2, A2]), E2 = (0, import_react.useCallback)(((e2) => {
    w2({ status: "select-amount" }), g2({ ...h2, source: { ...h2.source, selectedAsset: e2 } });
  }), [w2, g2]), T2 = (0, import_react.useCallback)((() => {
    w2({ status: "select-source-asset" });
  }), [w2]);
  return (0, import_jsx_runtime.jsx)(B, { onClose: (0, import_react.useCallback)((async () => {
    A2.current?.abort(), C ? m(C) : await u2();
  }), [C, A2]), opts: h2, state: v, isLoading: k2, email: t4.email.address, onAcceptTerms: U2, onSelectAmount: S2, onSelectSource: E2, onEditSourceAsset: T2 });
} };
export {
  z as FundWithBankDepositScreen,
  z as default
};
