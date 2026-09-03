import {
  a as a2,
  i
} from "./chunk-RKJUPTLR.js";
import {
  h
} from "./chunk-KN76ETVM.js";
import {
  a
} from "./chunk-EIEISV5R.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  SquarePen
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import {
  C,
  m
} from "./chunk-EJB6TW3T.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  O,
  O2,
  g2 as g
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import {
  base64
} from "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/SignRequestScreen-m5XHigiC.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { isHex as l2, hexToString as c } from "viem";
import "viem/chains";
var T = gt.img`
  && {
    height: ${(e2) => "sm" === e2.size ? "65px" : "140px"};
    width: ${(e2) => "sm" === e2.size ? "65px" : "140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;
var v = (e2) => {
  if (!l2(e2)) return e2;
  try {
    let o2 = c(e2);
    return o2.includes("\uFFFD") ? e2 : o2;
  } catch {
    return e2;
  }
};
var S = (e2) => {
  try {
    let o2 = base64.decode(e2), t2 = new TextDecoder().decode(o2);
    return t2.includes("\uFFFD") ? e2 : t2;
  } catch {
    return e2;
  }
};
var E = (r) => {
  let { types: i2, primaryType: n3, ...a4 } = r.typedData;
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { data: a4 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { text: (s = r.typedData, JSON.stringify(s, null, 2)), itemName: "full payload to clipboard" }), " "] });
  var s;
};
var L = ({ method: t2, messageData: r, copy: n3, iconUrl: a4, isLoading: s, success: l3, walletProxyIsLoading: c2, errorMessage: m2, isCancellable: p, onSign: u, onCancel: g3, onClose: y }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: n3.title, subtitle: n3.description, showClose: true, onClose: y, icon: SquarePen, iconVariant: "subtle", helpText: m2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(D, { children: m2 }) : void 0, primaryCta: { label: n3.buttonText, onClick: u, disabled: s || l3 || c2, loading: s }, secondaryCta: p ? { label: "Not now", onClick: g3, disabled: s || l3 || c2 } : void 0, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a, { children: [a4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { style: { alignSelf: "center" }, size: "sm", src: a4, alt: "app image" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_, { children: ["personal_sign" === t2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(M, { children: v(r) }), "eth_signTypedData_v4" === t2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, { typedData: r }), "solana_signMessage" === t2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(M, { children: S(r) })] })] }) });
var R = { component: () => {
  let { authenticated: o2 } = k(), { initializeWalletProxy: t2, closePrivyModal: r } = l(), { navigate: i2, data: s, onUserCloseViaDialogOrKeybindRef: l3 } = g2(), [c2, p] = (0, import_react.useState)(true), [d, u] = (0, import_react.useState)(""), [g3, w] = (0, import_react.useState)(), [T2, v2] = (0, import_react.useState)(null), [S2, E2] = (0, import_react.useState)(false);
  (0, import_react.useEffect)((() => {
    o2 || i2("LandingScreen");
  }), [o2]), (0, import_react.useEffect)((() => {
    t2(O2).then(((e2) => {
      p(false), e2 || (u("An error has occurred, please try again."), w(new m(new C(d, O.E32603_DEFAULT_INTERNAL_ERROR.eipCode))));
    }));
  }), []);
  let { method: R2, data: _2, confirmAndSign: D2, onSuccess: A2, onFailure: M2, uiOptions: U } = s.signMessage, I = { title: U?.title || "Sign message", description: U?.description || "Signing this message will not cost you any fees.", buttonText: U?.buttonText || "Sign and continue" }, k2 = (e2) => {
    e2 ? A2(e2) : M2(g3 || new m(new C("The user rejected the request.", O.E4001_USER_REJECTED_REQUEST.eipCode))), r({ shouldCallAuthOnSuccess: false }), setTimeout((() => {
      v2(null), u(""), w(void 0);
    }), 200);
  };
  l3.current = () => {
    k2(T2);
  };
  return (0, import_jsx_runtime.jsx)(L, { method: R2, messageData: _2, copy: I, iconUrl: U?.iconUrl && "string" == typeof U.iconUrl ? U.iconUrl : void 0, isLoading: S2, success: null !== T2, walletProxyIsLoading: c2, errorMessage: d, isCancellable: U?.isCancellable, onSign: async () => {
    E2(true), u("");
    try {
      let e2 = await D2();
      v2(e2), E2(false), setTimeout((() => {
        k2(e2);
      }), g);
    } catch (e2) {
      console.error(e2), u("An error has occurred, please try again."), w(new m(new C(d, O.E32603_DEFAULT_INTERNAL_ERROR.eipCode))), E2(false);
    }
  }, onCancel: () => k2(null), onClose: () => k2(T2) });
} };
var _ = gt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
var D = gt.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`;
var A = gt(a2)`
  margin-top: 0;
`;
var M = gt(i)`
  margin-top: 0;
`;
export {
  R as SignRequestScreen,
  L as SignRequestView,
  R as default
};
