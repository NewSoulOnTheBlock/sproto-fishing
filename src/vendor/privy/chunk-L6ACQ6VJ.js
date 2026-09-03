import {
  ArrowsRightLeftIcon_default
} from "./chunk-IONSA6UE.js";
import {
  CheckCircleIcon_default
} from "./chunk-7VTS4IUD.js";
import {
  t
} from "./chunk-4MCBV4ZR.js";
import {
  a as a2
} from "./chunk-EIEISV5R.js";
import {
  L,
  b,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  It
} from "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
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
  a2 as a,
  c,
  gt,
  l
} from "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
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

// node_modules/@privy-io/react-auth/dist/esm/CoinbaseOnrampStatusScreen-mPpAuSR0.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var b2 = "If you've completed your purchase in Coinbase, your funds are on the way and may take a few minutes to appear.";
var j = { component: () => {
  let { data: o, setModalData: i, navigate: c3, navigateBack: m } = g(), { closePrivyModal: d, createAnalyticsEvent: u, client: p } = l(), [f, w] = (0, import_react.useState)("pending-in-flow"), [b3, j2] = (0, import_react.useState)(false), C2 = (0, import_react.useRef)(0), I2 = { ...o?.funding, showAlternateFundingMethod: true };
  I2.usingDefaultFundingMethod && (I2.usingDefaultFundingMethod = false);
  let { partnerUserId: x2, popup: F2 } = o?.coinbaseOnrampStatus ?? {};
  return (0, import_react.useEffect)((() => {
    if ("pending-in-flow" === f || "pending-after-flow" === f) {
      let e2 = setInterval((async () => {
        if (x2) try {
          let { status: e3 } = await p.getCoinbaseOnRampStatus({ partnerUserId: x2 });
          if ("success" === e3) return void w("success");
          if ("failure" === e3) throw Error("There was an error completing Coinbase Onramp flow.");
          if (C2.current >= 3) return i({ funding: I2, solanaFundingData: o?.solanaFundingData }), void c3("FundingMethodSelectionScreen");
          F2?.closed && (C2.current = C2.current + 1, w("pending-after-flow"));
        } catch (e3) {
          console.error(e3), w("error"), u({ eventName: t, payload: { status: "failure", provider: "coinbase-onramp", error: e3.message } }), i({ funding: { ...I2, errorMessage: "Something went wrong adding funds. Please try again or use another method." }, solanaFundingData: o?.solanaFundingData }), c3("FundingMethodSelectionScreen");
        }
      }), 1500);
      return () => clearInterval(e2);
    }
  }), [x2, F2, f]), (0, import_react.useEffect)((() => {
    let e2 = setTimeout((() => j2(true)), 3e4);
    return () => clearTimeout(e2);
  }), []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { title: "Fund account", backFn: () => {
    i({ funding: I2, solanaFundingData: o?.solanaFundingData }), m();
  } }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k, { status: f, hasPendingTimedOut: b3, onClickCta: d }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
var C = (e2, r2) => {
  switch (e2) {
    case "success":
      return { title: "You've funded your account!", body: "It may take a few minutes for the assets to appear.", cta: "Continue" };
    case "pending-after-flow":
      return { title: "In progress", body: r2 ? b2 : "Almost done. Retrieving transaction status from Coinbase", cta: "Done" };
    case "error":
    case "pending-in-flow":
      return { title: "In progress", body: r2 ? b2 : "Go back to Coinbase Onramp to finish funding your account.", cta: "Done" };
  }
};
var k = ({ status: o, hasPendingTimedOut: i, onClickCta: n2 }) => {
  let { title: a4, body: s2, cta: m } = (0, import_react.useMemo)((() => C(o, i)), [o, i]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(M, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { isSucccess: "success" === o }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: a4 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, { children: s2 })] })] }), m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: n2, children: m })] });
};
var I = (e2) => e2 ? CheckCircleIcon_default : () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowsRightLeftIcon_default, { width: "3rem", height: "3rem", style: { backgroundColor: "var(--privy-color-foreground-4)", color: "var(--privy-color-background)", borderRadius: "100%", padding: "0.5rem", margin: "0.5rem" } });
var x = ({ isSucccess: r2 }) => {
  if (!r2) {
    let r3 = "var(--privy-color-foreground-4)";
    return (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { color: r3, style: { position: "absolute" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { color: r3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(It, { style: { position: "absolute", width: "2.8rem", height: "2.8rem", top: "1.2rem", left: "1.2rem" } })] });
  }
  let o = I(r2), i = r2 ? "var(--privy-color-success)" : "var(--privy-color-foreground-4)";
  return (0, import_jsx_runtime.jsx)("div", { style: { borderColor: i, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", borderWidth: 2, padding: "0.5rem", marginBottom: "0.5rem" }, children: o && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { width: "4rem", height: "4rem", color: i }) });
};
var F = gt.p`
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
  j as CoinbaseOnrampStatusScreen,
  b2 as PENDING_TIMED_OUT_BODY,
  j as default,
  C as getStatusCopy
};
