import {
  n
} from "./chunk-PZMIZGJH.js";
import {
  b,
  w
} from "./chunk-RPCD4HAF.js";
import {
  D
} from "./chunk-H64F7Q3M.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  ai,
  di,
  fi,
  getCountryCallingCode,
  li,
  se,
  si,
  ui
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/ConnectPhoneForm-C-sYQf7w.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var f = ({ value: r2, onChange: n3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { value: r2, onChange: n3, children: ui.map(((o2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: o2.code, children: [o2.code, " +", o2.callCode] }, o2.code))) });
var w2 = /* @__PURE__ */ (0, import_react.forwardRef)(((n3, a) => {
  let d = se(), [w3, k] = (0, import_react.useState)(false), { accountType: $ } = D(), [P, N] = (0, import_react.useState)(""), [S, j] = (0, import_react.useState)(n3.defaultCountry ?? d?.intl.defaultCountry ?? "US"), V = ai(P, S), z = li(S), T = di(S), U = getCountryCallingCode(S), L = !V, [q, E] = (0, import_react.useState)(false), B = U.length, D2 = (o2) => {
    let e2 = o2.target.value;
    j(e2), N(""), n3.onChange && n3.onChange({ rawPhoneNumber: P, qualifiedPhoneNumber: si(P, e2), countryCode: e2, isValid: ai(P, S) });
  }, I = (o2, e2) => {
    try {
      let r2 = o2.replace(/\D/g, "") === P.replace(/\D/g, "") ? o2 : z.input(o2);
      N(r2), n3.onChange && n3.onChange({ rawPhoneNumber: r2, qualifiedPhoneNumber: si(o2, e2), countryCode: e2, isValid: ai(o2, e2) });
    } catch (o3) {
      console.error("Error processing phone number:", o3);
    }
  }, R = () => {
    E(true);
    let o2 = si(P, S);
    n3.onSubmit({ rawPhoneNumber: P, qualifiedPhoneNumber: o2, countryCode: S, isValid: ai(P, S) }).finally((() => E(false)));
  };
  return (0, import_react.useEffect)((() => {
    if (n3.defaultValue) {
      let o2 = fi(n3.defaultValue);
      z.reset(), D2({ target: { value: o2.countryCode } }), I(o2.phone, o2.countryCode);
    }
  }), [n3.defaultValue]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { $callingCodeLength: B, $stacked: n3.stacked, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { value: S, onChange: D2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ref: a, id: "phone-number-input", className: "login-method-button", type: "tel", placeholder: T, onFocus: () => k(true), onChange: (o2) => {
    I(o2.target.value, S);
  }, onKeyUp: (o2) => {
    "Enter" === o2.key && R();
  }, value: P, autoComplete: "tel" }), "phone" !== $ || w3 || n3.hideRecent ? n3.stacked || n3.noIncludeSubmitButton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { isSubmitting: q, onClick: R, disabled: L, children: "Submit" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { color: "gray", children: "Recent" })] }) }), n3.stacked && !n3.noIncludeSubmitButton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { loading: q, loadingText: null, onClick: R, disabled: L, children: "Submit" }) : null] });
}));
var y = gt.div`
  width: 100%;
`;
var C = gt.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${(o2) => o2.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${(o2) => o2.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${(o2) => o2.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: calc(100% - var(--country-code-dropdown-width));

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${(o2) => o2.$stacked ? "16px" : "88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;

export {
  w2 as w
};
