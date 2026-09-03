import {
  y
} from "./chunk-2ZAIE4AW.js";
import {
  ArrowsRightLeftIcon_default
} from "./chunk-IONSA6UE.js";
import {
  CheckCircleIcon_default
} from "./chunk-7VTS4IUD.js";
import "./chunk-4MCBV4ZR.js";
import {
  a as a2
} from "./chunk-EIEISV5R.js";
import {
  L,
  b,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  a2 as a,
  c,
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/MoonpayStatusScreen-B2EepPlp.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var y2 = ({ size: e2 = 61, ...t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: e2, height: e2, viewBox: "0 0 61 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { id: "moonpay_symbol_wht 2", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "1.3374", y: "1", width: "59", height: "59", rx: "11.5", fill: "#7715F5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { id: "Vector", d: "M43.8884 23.3258C45.0203 23.3258 46.1268 22.9901 47.068 22.3613C48.0091 21.7324 48.7427 20.8386 49.1759 19.7928C49.6091 18.747 49.7224 17.5962 49.5016 16.4861C49.2807 15.3759 48.7357 14.3561 47.9353 13.5557C47.1349 12.7553 46.1151 12.2102 45.0049 11.9893C43.8947 11.7685 42.7439 11.8819 41.6982 12.3151C40.6524 12.7482 39.7585 13.4818 39.1297 14.423C38.5008 15.3641 38.1651 16.4707 38.1651 17.6026C38.165 18.3542 38.3131 19.0985 38.6007 19.7929C38.8883 20.4873 39.3098 21.1182 39.8413 21.6496C40.3728 22.1811 41.0037 22.6027 41.6981 22.8903C42.3925 23.1778 43.1367 23.3259 43.8884 23.3258ZM26.3395 49.1017C23.5804 49.1017 20.8832 48.2836 18.5891 46.7507C16.295 45.2178 14.5069 43.039 13.4511 40.49C12.3952 37.9409 12.1189 35.1359 12.6572 32.4298C13.1955 29.7237 14.5241 27.238 16.4751 25.287C18.4262 23.336 20.9118 22.0074 23.6179 21.4691C26.324 20.9308 29.129 21.2071 31.6781 22.2629C34.2272 23.3189 36.406 25.1069 37.9389 27.401C39.4717 29.6952 40.2899 32.3923 40.2899 35.1514C40.2899 36.9835 39.9291 38.7975 39.2281 40.49C38.527 42.1826 37.4994 43.7205 36.204 45.0159C34.9086 46.3113 33.3707 47.3389 31.6781 48.04C29.9856 48.741 28.1715 49.1018 26.3395 49.1017Z", fill: "white" })] }) });
var C = { component: () => {
  let { data: t, setModalData: i, navigateBack: n2 } = g(), a3 = se(), { closePrivyModal: c2 } = l(), s = y(t?.moonpayStatus?.externalTransactionId || null, a3.fundingMethodConfig.moonpay.useSandbox ?? false);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { title: "Fund account", backFn: () => {
    let o2 = { ...t?.funding, showAlternateFundingMethod: true };
    o2.usingDefaultFundingMethod && (o2.usingDefaultFundingMethod = false), i({ funding: o2, solanaFundingData: t?.solanaFundingData }), n2();
  } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { status: s, onClickCta: c2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
var v = ({ status: t, onClickCta: i }) => {
  let { title: a3, body: l2, cta: d } = (0, import_react.useMemo)((() => ((o2) => {
    switch (o2) {
      case "completed":
        return { title: "You've funded your account!", body: "It may take a few minutes for the assets to appear.", cta: "Continue" };
      case "waitingAuthorization":
        return { title: "Processing payment", body: "This may take up to a few hours. You will receive an email when the purchase is complete.", cta: "Continue" };
      default:
        return { title: "In Progress", body: "Go back to MoonPay to finish funding your account.", cta: "" };
    }
  })(t)), [t]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(M, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { status: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: a3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: l2 })] })] }), d && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: i, children: d })] });
};
var w = (r2) => {
  switch (r2) {
    case "completed":
      return CheckCircleIcon_default;
    case "waitingAuthorization":
      return () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowsRightLeftIcon_default, { width: "3rem", height: "3rem", style: { backgroundColor: "var(--privy-color-foreground-4)", color: "var(--privy-color-background)", borderRadius: "100%", padding: "0.5rem", margin: "0.5rem" } });
    default:
      return;
  }
};
var b2 = ({ status: e2 }) => {
  if (!e2 || "pending" === e2) {
    let e3 = "var(--privy-color-foreground-4)";
    return (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { color: e3, style: { position: "absolute" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { color: e3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y2, { size: "3rem", style: { position: "absolute", top: "1rem", left: "1rem" } })] });
  }
  let t = w(e2), i = (n2 = e2) ? { completed: "var(--privy-color-success)", failed: "var(--privy-color-error)", serviceFailure: "var(--privy-color-error)", waitingAuthorization: "var(--privy-color-accent)", pending: "var(--privy-color-foreground-4)" }[n2] : "var(--privy-color-foreground-4)";
  var n2;
  return (0, import_jsx_runtime.jsx)("div", { style: { borderColor: i, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", borderWidth: 2, padding: "0.5rem", marginBottom: "0.5rem" }, children: t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { width: "4rem", height: "4rem", color: i }) });
};
var x = gt.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
var M = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`;
export {
  C as MoonpayStatusScreen,
  C as default
};
