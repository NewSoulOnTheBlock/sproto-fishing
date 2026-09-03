import {
  n as n2
} from "./chunk-VKSKAFTK.js";
import {
  i
} from "./chunk-6EXMXTND.js";
import {
  l as l2
} from "./chunk-2ZAIE4AW.js";
import {
  h as h2,
  t as t5
} from "./chunk-ED6XPATD.js";
import {
  t as t4
} from "./chunk-3X5UVGJ4.js";
import {
  e
} from "./chunk-GKBGICJ5.js";
import {
  CreditCardIcon_default,
  QrCodeIcon_default
} from "./chunk-YR2QF5GA.js";
import "./chunk-76DEAMJ5.js";
import "./chunk-OBV6VSAS.js";
import {
  e as e2,
  f,
  m,
  n
} from "./chunk-RDL3SKLR.js";
import "./chunk-KZ4OUGKV.js";
import "./chunk-LBSQU3JN.js";
import {
  t as t3
} from "./chunk-E5F673JX.js";
import {
  ArrowsRightLeftIcon_default
} from "./chunk-IONSA6UE.js";
import "./chunk-4MCBV4ZR.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  I as I2
} from "./chunk-H64F7Q3M.js";
import {
  t as t2
} from "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import {
  p
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import {
  F,
  I
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import {
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  Br,
  C,
  Di,
  Ti,
  Vr,
  a,
  ae,
  r,
  se,
  t,
  wi,
  x,
  y
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

// node_modules/@privy-io/react-auth/dist/esm/FundingMethodSelectionScreen-BDTXai61.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { getAddress as c } from "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
var B = (e4) => {
  let [n4, t7] = (0, import_react.useState)();
  return (0, import_react.useEffect)((() => {
    e4().then(((e5) => {
      t7(e5);
    })).catch((() => {
    }));
  }), []), n4;
};
function Q(e4) {
  let n4 = $[e4];
  if (!n4) throw new s(`Unsupported chainId: ${e4} for Coinbase Onramp`);
  return n4;
}
var $ = { [y.id]: "ethereum", [a.id]: "base", [x.id]: "optimism", [C.id]: "polygon", [t.id]: "arbitrum", [r.id]: "avacchain", [ae.id]: "monad" };
var G = (e4, n4, t7, o, a2, r2) => new Promise((async (i3, s3) => {
  let d2 = t2();
  if (!d2) return void s3(Error("Unable to initialize flow"));
  let c2 = "ethereum" === n4.chainType ? Q(n4.chain.id) : "solana", l3 = n4.isUSDC ? "USDC" : "ethereum" === n4.chainType ? Di(n4.chain.id, "native-currency") : "SOL", m2 = await e4.initCoinbaseOnRamp({ addresses: [{ address: n4.address, blockchains: [c2] }], assets: [l3] }), { url: p2 } = wi({ appId: e4.getAppId(), input: m2, amount: n4.amount, blockchain: c2, asset: l3, experience: r2 });
  d2.location = p2.toString();
  let u = { ...a2?.funding, showAlternateFundingMethod: true };
  n4.usingDefaultFundingMethod && (u.usingDefaultFundingMethod = false), t7({ funding: u, solanaFundingData: a2?.solanaFundingData, coinbaseOnrampStatus: { popup: d2 } }), o("CoinbaseOnrampStatusScreen"), e4.createAnalyticsEvent({ eventName: "sdk_fiat_on_ramp_started", payload: { provider: "coinbase-onramp", value: n4.amount, chainType: n4.chainType, chainId: "ethereum" === n4.chainType ? n4.chain.id : n4.chain } }), setTimeout((() => {
    t7({ funding: u, solanaFundingData: a2?.solanaFundingData, coinbaseOnrampStatus: { partnerUserId: m2.partner_user_id, popup: d2 } });
  }), 5e3), i3();
}));
var X = async (e4, n4, t7, o, a2, r2, i3, s3) => {
  let d2 = t2();
  if (!d2) throw Error("Unable to initialize flow");
  let c2 = "ethereum" === n4.chainType ? Vr(n4.chain.id, o) : n4.isUSDC ? "USDC_SOL" : "SOL", { signedUrl: l3, externalTransactionId: m2 } = await e4.signMoonpayOnRampUrl({ address: n4.address, useSandbox: t7.fundingMethodConfig.moonpay.useSandbox ?? false, config: { uiConfig: { accentColor: t7.appearance.palette.accent, theme: t7.appearance.palette.colorScheme }, paymentMethod: s3, currencyCode: c2, quoteCurrencyAmount: l2(n4.amount) } });
  e4.createAnalyticsEvent({ eventName: "sdk_fiat_on_ramp_started", payload: { provider: "moonpay", value: n4.amount, chainType: n4.chainType, chainId: "ethereum" === n4.chainType ? n4.chain.id : n4.chain } }), d2.location = l3;
  let p2 = { ...i3?.funding, showAlternateFundingMethod: true };
  n4.usingDefaultFundingMethod && (p2.usingDefaultFundingMethod = false), a2({ moonpayStatus: {}, funding: p2, solanaFundingData: i3?.solanaFundingData }), r2("MoonpayStatusScreen"), setTimeout((() => {
    a2({ moonpayStatus: { externalTransactionId: m2 }, funding: p2, solanaFundingData: i3?.solanaFundingData });
  }), 8e3);
};
var Y = async (e4) => "undefined" != typeof window && "PaymentRequest" in window && await new window.PaymentRequest([{ supportedMethods: e4 }], { id: "0", total: { label: "Item", amount: { currency: "USD", value: "1.00" } } }).canMakePayment();
var J = () => Y("https://apple.com/apple-pay");
var K = () => Y("https://google.com/pay");
var V = { component: () => {
  let { wallets: i3 } = p(), { connectors: S } = l(), W = S.filter(F).flatMap(((e4) => e4.wallets)), { navigate: M, data: I3, setModalData: x2 } = g(), { client: T } = l(), k = se(), D = I3?.funding, A = B(J), L = B(K), O = "solana" === D.chainType, U = O ? void 0 : D, _ = (0, import_react.useMemo)((() => ((e4, n4, t7, o, a2, r2) => {
    let i4, s3, d2 = "solana" === t7.chainType, c2 = d2 ? void 0 : t7, l3 = t7.isUSDC ? "USDC" : c2?.erc20Address ? void 0 : "native-currency", m2 = !!d2 || l3 && Br(Number(t7.chain.id), l3), p2 = !!d2 || l3 && Ti(Number(t7.chain.id), l3), u = [];
    for (let i5 of (t7.preferredCardProvider && t7.supportedOptions.sort(((e5) => e5.provider === t7.preferredCardProvider ? -1 : 1)), t7.supportedOptions)) "card" === i5.method && "coinbase" === i5.provider && p2 && u.push((() => G(n4, t7, o, a2, r2, "buy"))), "card" === i5.method && "moonpay" === i5.provider && m2 && l3 && u.push((() => X(n4, t7, e4, l3, o, a2, r2, "credit_debit_card")));
    for (let e5 of t7.supportedOptions) "exchange" === e5.method && "coinbase" === e5.provider && p2 && (i4 = () => G(n4, t7, o, a2, r2, "buy"));
    for (let e5 of r2?.funding?.supportedOptions ?? []) "wallets" === e5.method && (s3 = () => a2("TransferFromWalletScreen"));
    return { onFundWithCard: u, onFundWithExchange: i4, onFundWithWallet: s3 };
  })(k, T, D, x2, M, I3)), [k, T, D, I3, x2, M]), Q2 = O ? W.find((({ address: e4 }) => e4 === D.address)) : i3.find((({ address: e4 }) => c(e4) === c(D.address))), $2 = I(Q2?.walletClientType || "unknown"), Y2 = $2?.name || "wallet", V2 = Q2 && "privy" !== Q2.walletClientType ? Y2 : k.name, Z = (0, import_react.useMemo)((() => D.uiConfig?.landing?.title ? D.uiConfig?.landing?.title : `Add funds to your ${V2?.toLowerCase().endsWith("wallet") ? V2 : V2 + " wallet"}`), [D.uiConfig?.landing?.title, V2]);
  (0, import_react.useEffect)((() => {
    if (D?.defaultFundingMethod && D.usingDefaultFundingMethod) switch (x2({ funding: { ...D, usingDefaultFundingMethod: false }, solanaFundingData: I3?.solanaFundingData }), D?.defaultFundingMethod) {
      case "card":
        _.onFundWithCard[0] && _.onFundWithCard[0]();
        break;
      case "exchange":
        _.onFundWithExchange && _.onFundWithExchange();
        break;
      case "wallet":
        _.onFundWithWallet && _.onFundWithWallet();
        break;
      case "manual":
        M("ManualTransferScreen");
    }
  }), []), (0, import_react.useEffect)((() => {
    U?.erc20Address && !U.erc20ContractInfo && n2({ address: U.erc20Address, chain: U.chain, rpcConfig: k.rpcConfig, privyAppId: k.id }).then(((e4) => {
      x2({ ...I3, funding: { ...U, erc20ContractInfo: e4 ? { symbol: e4.symbol, decimals: e4.decimals } : void 0 } });
    })).catch(console.error);
  }), [U?.erc20Address, U?.chain]);
  let ee = !(!U?.erc20Address || U?.erc20ContractInfo);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: Z }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(e2, { children: [D.errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { theme: k.appearance.palette.colorScheme, children: D.errorMessage }), _.onFundWithCard?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I2, { disabled: ee, onClick: _.onFundWithCard[0], children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCardIcon_default, { style: { width: 24 } }) }), "Pay with card", A ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h2, { style: { marginLeft: "auto", maxWidth: "100%", width: "auto", height: "0.875rem" } }) : L ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t5, { style: { marginLeft: "auto", maxWidth: "100%", width: "auto", height: "0.875rem" } }) : null] }), _.onFundWithExchange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I2, { disabled: ee, onClick: _.onFundWithExchange, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowsRightLeftIcon_default, { style: { width: 24 } }) }), "Transfer from an exchange"] }), _.onFundWithWallet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I2, { disabled: ee, onClick: _.onFundWithWallet, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { width: 24 } }) }), "Transfer from wallet"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I2, { disabled: ee, onClick: () => M("ManualTransferScreen"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCodeIcon_default, { style: { width: 24 } }) }), "Receive funds"] }), D?.showAlternateFundingMethod && _.onFundWithCard?.[1] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t4, { theme: k.appearance.palette.colorScheme, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m, { children: ["Having trouble or facing location restrictions?", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: _.onFundWithCard[1], children: "Try a different provider." })] }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  V as FundingMethodSelectionScreen,
  V as default
};
