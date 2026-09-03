import {
  a,
  c
} from "./chunk-LBSQU3JN.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import {
  CircleCheckBig,
  FingerprintPattern,
  Trash2
} from "./chunk-ELJY7WHB.js";
import {
  Y
} from "./chunk-5IEXBHIB.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import {
  i,
  t
} from "./chunk-W22FA2JU.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  ft,
  gt,
  l,
  l2
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/LinkPasskeyScreen-kLHXLgOb.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var g2 = ({ passkeys: t2, name: n3, isLoading: a3, errorReason: s, success: c2, expanded: l3, onLinkPasskey: d, onUnlinkPasskey: m, onExpand: p, onBack: h, onClose: u }) => c2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: "Passkeys updated", icon: CircleCheckBig, iconVariant: "success", primaryCta: { label: "Done", onClick: u }, onClose: u, watermark: true }) : l3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { icon: FingerprintPattern, title: "Your passkeys", onBack: h, onClose: u, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { passkeys: t2, expanded: l3, onUnlink: m, onExpand: p }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { icon: FingerprintPattern, title: "Set up passkey verification", subtitle: "Verify with passkey", primaryCta: { label: "Add new passkey", onClick: d, loading: a3 }, onClose: u, watermark: true, helpText: s || void 0, children: [0 === t2.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { passkeys: t2, expanded: l3, onUnlink: m, onExpand: p }) }), n3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { children: "New Passkey Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { children: n3 })] }) : null] });
var x = gt.div`
  margin-bottom: 0.75rem;
`;
var w = gt.div`
  margin-top: 0.25rem;
`;
var j = gt.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`;
var b = gt.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
var C = ({ passkeys: o, expanded: i2, onUnlink: a3, onExpand: s }) => {
  let [c2, d] = (0, import_react.useState)([]), m = i2 ? o.length : 2;
  return (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { children: "Your passkeys" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(N, { children: [o.slice(0, m).map(((o2) => {
    return (0, import_jsx_runtime.jsxs)(T, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(M, { children: (i3 = o2, i3.authenticatorName ? i3.createdWithBrowser ? `${i3.authenticatorName} on ${i3.createdWithBrowser}` : i3.authenticatorName : i3.createdWithBrowser ? i3.createdWithOs ? `${i3.createdWithBrowser} on ${i3.createdWithOs}` : `${i3.createdWithBrowser}` : "Unknown device") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(S, { children: ["Last used:", " ", (o2.latestVerifiedAt ?? o2.firstVerifiedAt)?.toLocaleString() ?? "N/A"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(B, { disabled: c2.includes(o2.credentialId), onClick: () => (async (e2) => {
      d(((r2) => r2.concat([e2]))), await a3(e2), d(((r2) => r2.filter(((r3) => r3 !== e2))));
    })(o2.credentialId), children: c2.includes(o2.credentialId) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l2, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 }) })] }, o2.credentialId);
    var i3;
  })), o.length > 2 && !i2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClick: s, children: "View all" })] })] });
};
var I = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a, { style: { color: "var(--privy-color-foreground)" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: "Verify with Touch ID, Face ID, PIN, or hardware key" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: "Takes seconds to set up and use" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: "Use your passkey to verify transactions and login to your account" })] });
var A = { component: () => {
  let { user: r2 } = k(), { unlink: o } = Y(), { linkWithPasskey: i2, closePrivyModal: t2 } = l(), { data: s } = g(), c2 = r2?.linkedAccounts.filter(((e2) => "passkey" === e2.type)), [l3, d] = (0, import_react.useState)(false), [m, v] = (0, import_react.useState)(""), [x2, w2] = (0, import_react.useState)(false), [j2, b2] = (0, import_react.useState)(false);
  (0, import_react.useEffect)((() => {
    0 === c2.length && b2(false);
  }), [c2.length]);
  return (0, import_jsx_runtime.jsx)(g2, { passkeys: c2, name: s?.passkeyAuthModalData?.name, isLoading: l3, errorReason: m, success: x2, expanded: j2, onLinkPasskey: () => {
    d(true), i2({ name: s?.passkeyAuthModalData?.name }).then((() => w2(true))).catch(((e2) => {
      if (e2 instanceof t) {
        if (e2.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE) return void v("Cannot link more passkeys to account.");
        if (e2.privyErrorCode === i.PASSKEY_NOT_ALLOWED) return void v("Passkey request timed out or rejected by user.");
      }
      v("Unknown error occurred.");
    })).finally((() => {
      d(false);
    }));
  }, onUnlinkPasskey: async (e2) => (d(true), await o({ credentialId: e2 }).then((() => w2(true))).catch(((e3) => {
    e3 instanceof t && e3.privyErrorCode === i.MISSING_MFA_CREDENTIALS ? v("Cannot unlink a passkey enrolled in MFA") : v("Unknown error occurred.");
  })).finally((() => {
    d(false);
  }))), onExpand: () => b2(true), onBack: () => b2(false), onClose: () => t2() });
} };
var P = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;
var E = ft`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
var L = gt.button`
  ${E}
`;
var N = gt.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`;
var z = gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`;
var M = gt.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`;
var S = gt.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`;
var T = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`;
var U = ft`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`;
var B = gt.button`
  ${U}
`;

export {
  g2 as g,
  A,
  P,
  L
};
