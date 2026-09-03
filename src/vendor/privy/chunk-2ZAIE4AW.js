import {
  t
} from "./chunk-4MCBV4ZR.js";
import {
  ofetch
} from "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  P2 as P,
  U,
  q,
  z
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/index-BgxVUJCr.mjs
var import_react = __toESM(require_react(), 1);
var m = "moonpay";
function l2(e) {
  return parseFloat(e);
}
function y(l3, y2 = false) {
  let [f, p] = (0, import_react.useState)(null), { createAnalyticsEvent: g2 } = l(), { data: h, navigate: v, setModalData: A } = g(), F = h?.funding, w = (0, import_react.useRef)(0);
  return (0, import_react.useEffect)((() => {
    let t3 = setInterval((async () => {
      if (l3) try {
        let [n2] = await (async function(t4, n3) {
          return ofetch(`${n3 ? P : U}/transactions/ext/${t4}`, { query: { apiKey: n3 ? z : q } });
        })(l3, y2), a2 = "waitingAuthorization" === n2.status && "credit_debit_card" === n2.paymentMethod ? "pending" : n2.status;
        if (["failed", "completed", "awaitingAuthorization"].includes(a2) && (g2({ eventName: t, payload: { status: a2, provider: m, paymentMethod: n2.paymentMethod, cardPaymentType: n2.cardPaymentType, currency: n2.currency?.code, baseCurrencyAmount: n2.baseCurrencyAmount, quoteCurrencyAmount: n2.quoteCurrencyAmount, feeAmount: n2.feeAmount, extraFeeAmount: n2.extraFeeAmount, networkFeeAmount: n2.networkFeeAmount, isSandbox: y2 } }), clearInterval(t3)), "failed" === a2 || "serviceFailure" === a2) return A({ funding: { ...F, errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet." }, solanaFundingData: h?.solanaFundingData }), void v("FundingMethodSelectionScreen");
        p(a2);
      } catch (e) {
        404 !== e.response?.status && (w.current += 1), w.current >= 3 && (g2({ eventName: t, payload: { status: "serviceFailure", provider: m } }), clearInterval(t3), A({ funding: { ...F, errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet." }, solanaFundingData: h?.solanaFundingData }), v("FundingMethodSelectionScreen"));
      }
    }), 3e3);
    return () => clearInterval(t3);
  }), [l3, w]), f;
}

export {
  l2 as l,
  y
};
