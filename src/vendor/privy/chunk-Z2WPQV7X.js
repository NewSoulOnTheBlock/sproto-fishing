import {
  require_browser,
  x
} from "./chunk-4BHOTT2W.js";
import {
  p as p2
} from "./chunk-3DDSRDFL.js";
import {
  FloatingPortal,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles
} from "./chunk-75JACRL2.js";
import {
  autoUpdate,
  flip,
  offset,
  shift
} from "./chunk-S5KBLGPR.js";
import {
  a as a2,
  b as b2,
  c,
  d,
  f,
  g as g2,
  h,
  i,
  l as l3,
  m as m2,
  n as n3,
  p,
  s,
  t,
  u,
  v,
  y
} from "./chunk-IYZPTX46.js";
import {
  n as n2
} from "./chunk-ZKJ6AAV3.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Hourglass,
  Info,
  QrCode,
  TriangleAlert,
  Undo2
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  b
} from "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import {
  _,
  l as l2,
  m
} from "./chunk-Q77PGVYO.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-4X5V72BU.js";
import "./chunk-H7FAMYXB.js";
import {
  o
} from "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  a2 as a,
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  T,
  Ta,
  de
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

// node_modules/@privy-io/react-auth/dist/esm/DepositAddressScreen-DvAcLlNk.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_qrcode = __toESM(require_browser(), 1);
import "viem";
import "viem/chains";
var ce = class extends import_react.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(e2, r2) {
    this.props.onError(e2);
  }
  componentDidUpdate(e2) {
    e2.resetKey !== this.props.resetKey && this.state.hasError && this.setState({ hasError: false });
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
  constructor(...e2) {
    super(...e2), this.state = { hasError: false };
  }
};
function ue(e2, r2, t3) {
  let o3 = Number(e2);
  if (!Number.isFinite(o3) || 0 === o3) return `1 ${r2} \u2248 ${e2} ${t3}`;
  if (o3 >= 0.01) {
    return `1 ${r2} \u2248 ${me(o3)} ${t3}`;
  }
  return `${me(1 / o3)} ${r2} \u2248 1 ${t3}`;
}
function me(e2) {
  return e2 >= 1e3 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(e2)) : e2 >= 100 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(e2) : e2 >= 1 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(e2) : new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(e2);
}
function pe(e2, r2) {
  let t3 = Number(e2);
  if (!Number.isFinite(t3) || 0 === t3) return e2;
  let o3 = null != r2 ? t3 / 10 ** r2 : t3;
  return o3 >= 1e3 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(o3) : o3 >= 1 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(o3) : o3 >= 1e-4 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(o3) : new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 }).format(o3);
}
function he({ address: e2, caip2: r2, config: t3 }) {
  for (let o3 of t3.currencies) {
    let t4 = o3.chains.find(((t5) => t5.caip2 === r2 && t5.address.toLowerCase() === e2.toLowerCase()));
    if (t4) return { symbol: o3.symbol.toUpperCase(), decimals: t4.decimals };
  }
  return { symbol: e2, decimals: void 0 };
}
function fe(e2, r2) {
  return r2[e2]?.displayName ?? e2;
}
function ye(e2, r2) {
  return e2.chains.filter(((e3) => true === e3.can_be_relay_deposit_source)).map(((e3) => {
    let t3 = r2.chains[e3.caip2];
    return t3 ? { caip2: e3.caip2, displayName: t3.displayName, iconUrl: t3.iconUrl, vmType: t3.vmType, currencyAddress: e3.address, currencyDecimals: e3.decimals } : null;
  })).filter(((e3) => null !== e3));
}
function ge(e2, r2) {
  if (!e2.chains[r2.destinationChain]) return `Unsupported destination chain: "${r2.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;
  let t3 = r2.destinationCurrency.toLowerCase();
  return e2.currencies.some(((e3) => e3.chains.some(((e4) => e4.caip2 === r2.destinationChain && e4.address.toLowerCase() === t3)))) ? null : `Unsupported destination currency "${r2.destinationCurrency}" on chain "${r2.destinationChain}". Check that this token address is supported on the specified chain.`;
}
var be = /* @__PURE__ */ new Set(["ROUTE_UNAVAILABLE", "UNEXPECTED_STATE", "TIMEOUT_WAITING_FOR_NEXT_ORDER", "TIMEOUT_ORDER_COMPLETION", "DEPOSIT_FAILED", "DEPOSIT_REFUNDED", "USER_EXITED", "AMOUNT_TOO_LOW", "INSUFFICIENT_LIQUIDITY", "UNSUPPORTED_CHAIN", "UNSUPPORTED_CURRENCY", "UNSUPPORTED_ROUTE", "NO_SWAP_ROUTES_FOUND", "NO_INTERNAL_SWAP_ROUTES_FOUND", "NO_QUOTES", "SANCTIONED_WALLET_ADDRESS", "REFUND_WALLET_CREATION_FAILED", "DEPOSIT_ADDRESSES_NOT_ENABLED", "NOT_AUTHENTICATED"]);
function _e(e2) {
  return be.has(e2);
}
function ve(e2) {
  return _e(e2) ? e2 : "UNKNOWN_ERROR";
}
function Ce() {
  let { params: e2, setModalState: r2 } = m(), { privy: t3 } = l(), o3 = (function() {
    let { privy: e3, refreshSessionAndUser: r3 } = l();
    return (0, import_react.useCallback)(((t4, o4) => o4 ? Promise.resolve({ ok: true, address: o4 }) : Ta.resolveRefundAddress({ privy: e3, caip2: t4, onWalletCreated: r3 })), [e3, r3]);
  })(), [a4, s3] = (0, import_react.useState)(false);
  return { fetchQuote: (0, import_react.useCallback)((async (n5, i3, a5) => {
    if (e2) {
      s3(true);
      try {
        let s4 = await o3(n5.caip2, e2.refundAddress);
        if (!s4.ok) return void r2({ step: "error", code: ve(s4.error) });
        let d3 = await t3.fetchPrivyRoute(de, { body: { source_chain: n5.caip2, source_currency: n5.currencyAddress, destination_chain: e2.destinationChain, destination_currency: e2.destinationCurrency, destination_address: e2.destinationAddress, refund_address: s4.address, ...null != e2.slippageBps ? { slippage_bps: e2.slippageBps } : {} } });
        r2({ step: "address", selectedCurrency: i3, selectedChain: n5, availableChains: a5, quote: d3 });
      } catch (e3) {
        let t4 = e3 instanceof Error ? e3 : Error(String(e3)), o4 = "status" in t4 && "number" == typeof t4.status ? t4.status : void 0;
        r2({ step: "error", code: t4 instanceof T && "feature_not_enabled" === t4.code ? "DEPOSIT_ADDRESSES_NOT_ENABLED" : o4 && o4 >= 500 ? "UNKNOWN_ERROR" : ve(t4.message), message: t4.message });
      } finally {
        s3(false);
      }
    }
  }), [e2, t3, o3, r2]), isFetching: a4 };
}
function ke(e2, r2) {
  switch (e2.status) {
    case "completed":
      return r2({ step: "complete", order: e2 });
    case "refunded":
      return r2({ step: "refunded", order: e2 });
    case "failed":
      return r2({ step: "failed", order: e2 });
    case "executing":
      return r2({ step: "processing", order: e2 });
    default:
      return;
  }
}
var we = ({ sourceAmount: r2, sourceSymbol: t3, sourceChainName: o3, sourceDecimals: n5, destinationAmount: i3, destSymbol: a4, destChainName: s3, destDecimals: d3, onClose: l4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { icon: Check, iconVariant: "success", title: "Transfer complete", subtitle: i3 ? `Received ${pe(r2, n5)} ${t3} on ${o3} and converted it to ${pe(i3, d3)} ${a4} on ${s3}. Funds are available to use.` : `Your ${t3} has been received and is now available in your wallet.`, showClose: true, onClose: l4, primaryCta: { label: "Done", onClick: l4 }, watermark: false });
function Ee() {
  let { state: r2, configData: t3, close: o3 } = _("complete"), { order: n5 } = r2, { sourceSymbol: i3, sourceChainName: a4, sourceDecimals: d3, destSymbol: l4, destChainName: c2, destDecimals: u2 } = (0, import_react.useMemo)((() => {
    let e2 = he({ address: n5.source_currency, caip2: n5.source_chain, config: t3 }), r3 = he({ address: n5.destination_currency, caip2: n5.destination_chain, config: t3 });
    return { sourceSymbol: e2.symbol, sourceChainName: fe(n5.source_chain, t3.chains), sourceDecimals: e2.decimals, destSymbol: r3.symbol, destChainName: fe(n5.destination_chain, t3.chains), destDecimals: r3.decimals };
  }), [n5, t3]);
  return (0, import_jsx_runtime.jsx)(we, { sourceAmount: n5.source_amount, sourceSymbol: i3, sourceChainName: a4, sourceDecimals: d3, destinationAmount: n5.destination_amount, destSymbol: l4, destChainName: c2, destDecimals: u2, onClose: o3 });
}
function Ne() {
  let { modalState: r2, setModalState: t3, config: o3, retryConfig: n5, close: a4, createDepositAddressEvent: s3 } = m();
  if ("error" !== r2.step) throw Error("UNEXPECTED_STATE");
  let { code: d3 } = r2, { title: l4, subtitle: u2, detail: m3, iconVariant: p3 } = ((e2) => {
    switch (e2) {
      case "AMOUNT_TOO_LOW":
        return { title: "Amount too low", subtitle: "The deposit amount is below the minimum for this route.", detail: "Try a larger amount or a different token.", iconVariant: "warning" };
      case "INSUFFICIENT_LIQUIDITY":
        return { title: "Insufficient liquidity", subtitle: "There isn't enough liquidity for this route right now.", detail: "Try a smaller amount or a different network.", iconVariant: "warning" };
      case "UNSUPPORTED_CHAIN":
        return { title: "Unsupported chain", subtitle: "Deposits from this chain type aren't supported yet. Try a different network.", iconVariant: "warning" };
      case "UNSUPPORTED_CURRENCY":
      case "UNSUPPORTED_ROUTE":
      case "ROUTE_UNAVAILABLE":
      case "NO_SWAP_ROUTES_FOUND":
      case "NO_INTERNAL_SWAP_ROUTES_FOUND":
      case "NO_QUOTES":
        return { title: "Route not available", subtitle: "This deposit route isn't supported right now. Try a different token or network.", iconVariant: "warning" };
      case "SANCTIONED_WALLET_ADDRESS":
        return { title: "Address restricted", subtitle: "This address cannot be used for deposits due to compliance restrictions.", iconVariant: "warning" };
      case "REFUND_WALLET_CREATION_FAILED":
        return { title: "Unable to set up refund address", subtitle: "We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.", iconVariant: "warning" };
      case "DEPOSIT_ADDRESSES_NOT_ENABLED":
        return { title: "Not enabled", subtitle: "Deposit addresses are not enabled for this app.", iconVariant: "warning" };
      case "NOT_AUTHENTICATED":
        return { title: "Not signed in", subtitle: "Please sign in to continue with your deposit.", iconVariant: "warning" };
      case "TIMEOUT_WAITING_FOR_NEXT_ORDER":
      case "TIMEOUT_ORDER_COMPLETION":
        return { title: "Taking longer than expected", subtitle: "Your funds are safe. The deposit is still being processed \u2014 check back later.", iconVariant: "subtle" };
      default:
        return { title: "Something went wrong", subtitle: "We couldn't complete your request. Please try again.", iconVariant: "subtle" };
    }
  })(d3), [f2, y2] = (0, import_react.useState)(false);
  return (0, import_jsx_runtime.jsx)(i, { icon: TriangleAlert, iconVariant: p3, title: l4, subtitle: m3 ? `${u2} ${m3}` : u2, showClose: true, onClose: a4, primaryCta: { label: "Try again", onClick: async () => {
    if (s3({ eventName: "sdk_deposit_address_action", payload: { action: "retry", step: "error", errorCode: d3 } }), "ready" !== o3.status) {
      y2(true);
      try {
        await n5(), t3({ step: "token" });
      } catch {
        y2(false);
      }
    } else t3({ step: "token" });
  }, loading: f2 }, watermark: true });
}
function Te() {
  let { state: t3, close: o3, createDepositAddressEvent: n5 } = _("failed"), { order: i3 } = t3;
  return (0, import_jsx_runtime.jsx)(n, { icon: TriangleAlert, iconVariant: "error", title: "Transfer failed", subtitle: "Something went wrong processing your transfer.", showClose: true, onClose: o3, primaryCta: { label: "Done", onClick: o3 }, secondaryCta: { label: "Learn about manual recovery", onClick: () => {
    n5({ eventName: "sdk_deposit_address_action", payload: { action: "link_opened", step: "failed", target: "recovery_docs" } }), window.open("https://docs.privy.io", "_blank", "noopener,noreferrer");
  } }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Se, { href: i3.tracking_url, target: "_blank", rel: "noopener noreferrer", onClick: () => {
    n5({ eventName: "sdk_deposit_address_action", payload: { action: "link_opened", step: "failed", target: "relay_reference" } });
  }, children: ["Reference: ", i3.provider_request_id] }) });
}
var Se = gt.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;
function Ue() {
  let { close: r2, setModalState: t3, config: o3, params: n5, onBack: s3, createDepositAddressEvent: d3 } = m(), [l4, u2] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)((() => {
    if (l4 && n5) {
      if ("ready" === o3.status) {
        let e2 = ge(o3.data, n5);
        t3(e2 ? { step: "error", code: "ROUTE_UNAVAILABLE", message: e2 } : { step: "token" });
      }
      "error" === o3.status && t3({ step: "error", code: "ROUTE_UNAVAILABLE" });
    }
  }), [l4, o3, n5, t3]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { icon: QrCode, iconVariant: "subtle", title: "Add funds", subtitle: "Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.", showClose: true, onClose: r2, showBack: !!s3, onBack: s3 ? () => {
    d3({ eventName: "sdk_deposit_address_action", payload: { action: "back", step: "intro" } }), s3();
  } : void 0, primaryCta: { label: "Continue", onClick: () => {
    if (d3({ eventName: "sdk_deposit_address_action", payload: { action: "continue", step: "intro" } }), "ready" === o3.status && n5) {
      let e2 = ge(o3.data, n5);
      t3(e2 ? { step: "error", code: "ROUTE_UNAVAILABLE", message: e2 } : { step: "token" });
    } else "error" === o3.status ? t3({ step: "error", code: "ROUTE_UNAVAILABLE" }) : u2(true);
  }, loading: l4 && "loading" === o3.status, loadingText: null }, watermark: true });
}
function Ae() {
  let { state: t3, setModalState: o3, close: a4, createDepositAddressEvent: s3 } = _("network"), [d3, l4] = (0, import_react.useState)(-1), { availableChains: p3 } = t3, { confirm: h2, isFetching: f2 } = (function() {
    let e2 = l2(), { params: r2 } = m(), { fetchQuote: t4, isFetching: o4 } = Ce();
    return { confirm: (0, import_react.useCallback)((async (o5) => {
      if (!o5 || !r2) return;
      let n5 = e2?.modalState;
      n5 && "network" === n5.step && await t4(o5, n5.selectedCurrency, n5.availableChains);
    }), [r2, e2, t4]), isFetching: o4 };
  })();
  return (0, import_jsx_runtime.jsx)(n, { title: "Select network", eyebrow: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: "0.375rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: t3.selectedCurrency.logoURI, alt: "", style: { width: "1rem", height: "1rem", borderRadius: "50%" } }), "Send ", t3.selectedCurrency.symbol] }), showBack: true, onBack: () => {
    s3({ eventName: "sdk_deposit_address_action", payload: { action: "back", step: "network" } }), o3({ step: "token" });
  }, showClose: true, onClose: a4, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { style: { marginTop: "1rem", height: "22rem" }, $colorScheme: "light", children: p3.map(((t4, o4) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l3, { $selected: d3 === o4, disabled: f2, onClick: () => {
    s3({ eventName: "sdk_deposit_address_action", payload: { action: "network_selected", step: "network", network: t4.caip2 } }), l4(o4), h2(t4);
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { src: t4.iconUrl, alt: t4.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: t4.displayName }), f2 && o4 === d3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, {})] }, t4.caip2))) }) });
}
var De = ({ trackingUrl: t3, onViewBlockExplorer: o3, onClose: n5 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { icon: Hourglass, iconVariant: "subtle", title: "Transfer in progress", subtitle: "Your deposit was received and the transfer is now processing.", showClose: true, onClose: n5, secondaryCta: { label: "View on block explorer \u2197", onClick: () => {
  o3(), window.open(t3, "_blank", "noopener,noreferrer");
} }, watermark: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { $status: "done", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14, color: "var(--privy-color-icon-success)", strokeWidth: 2 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { children: "Deposit received" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { $status: "active", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Oe, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { children: "Bridging" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { $status: "pending" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { children: "Funds arrived" })] })] }) });
var Oe = gt.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
function Ie() {
  let { state: r2, close: t3, createDepositAddressEvent: o3 } = _("processing");
  return (function({ orderId: e2, enabled: r3 }) {
    let { privy: t4 } = l(), { setModalState: o4 } = m();
    (0, import_react.useEffect)((() => {
      let r4 = new AbortController();
      return Ta.waitForCompletion({ privy: t4, orderId: e2, signal: r4.signal }).then(((e3) => {
        r4.signal.aborted || ("success" === e3.status ? ke(e3.order, o4) : "timeout" === e3.status && o4({ step: "error", code: "TIMEOUT_ORDER_COMPLETION" }));
      })), () => {
        r4.abort();
      };
    }), [r3, e2, t4, o4]);
  })({ orderId: r2.order.id, enabled: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(De, { trackingUrl: r2.order.tracking_url, onViewBlockExplorer: () => {
    o3({ eventName: "sdk_deposit_address_action", payload: { action: "link_opened", step: "processing", target: "block_explorer" } });
  }, onClose: t3 });
}
function Re() {
  let { state: r2, close: t3, createDepositAddressEvent: o3 } = _("refunded"), { order: n5 } = r2;
  return (0, import_jsx_runtime.jsx)(i, { icon: Undo2, iconVariant: "subtle", title: "Transfer refunded", subtitle: "Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.", showClose: true, onClose: t3, primaryCta: { label: "Done", onClick: t3 }, secondaryCta: { label: "View transaction details", onClick: () => {
    o3({ eventName: "sdk_deposit_address_action", payload: { action: "link_opened", step: "refunded", target: "transaction_details" } }), window.open(n5.tracking_url, "_blank", "noopener,noreferrer");
  } }, watermark: true });
}
function xe() {
  let { close: t3, setModalState: o3, config: a4, createDepositAddressEvent: s3 } = m(), { confirm: d3, currencies: l4, isFetching: u2 } = (function() {
    let { config: e2, setModalState: r2 } = m(), { fetchQuote: t4, isFetching: o4 } = Ce(), i3 = "ready" === e2.status ? e2.data.currencies.filter(((r3) => ye(r3, e2.data).length > 0)) : [];
    return { confirm: (0, import_react.useCallback)((async (o5) => {
      if ("ready" !== e2.status || !o5) return;
      let n5 = ye(o5, e2.data);
      if (1 !== n5.length) r2({ step: "network", selectedCurrency: o5, availableChains: n5 });
      else {
        let e3 = n5[0];
        await t4(e3, o5, n5);
      }
    }), [e2, t4, r2]), currencies: i3, isFetching: o4 };
  })(), [m3, p3] = (0, import_react.useState)(-1);
  return (0, import_jsx_runtime.jsx)(n, { title: "Select token", subtitle: "Choose the asset you'll send.", showBack: true, onBack: () => {
    s3({ eventName: "sdk_deposit_address_action", payload: { action: "back", step: "token" } }), o3({ step: "intro" });
  }, showClose: true, onClose: t3, watermark: true, children: "error" === a4.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n3, { children: "Failed to load tokens" }) }) : "loading" === a4.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { style: { marginTop: "1rem", height: "22rem" }, $colorScheme: "light", children: l4.map(((t4, o4) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l3, { $selected: m3 === o4, disabled: u2, onClick: () => {
    s3({ eventName: "sdk_deposit_address_action", payload: { action: "token_selected", step: "token", token: t4.symbol } }), p3(o4), d3(t4);
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a2, { src: t4.logoURI, alt: t4.symbol }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { children: t4.name }), u2 && o4 === m3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { children: t4.symbol })] }, t4.symbol))) }) });
}
function Fe({ address: o3, onClick: n5 }) {
  let [a4, s3] = (0, import_react.useState)(false);
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: a4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Le, { onClick: () => s3(false), style: { marginTop: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { url: o3, size: 312, hideLogo: true }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pe, { title: "Click to copy address", onClick: n5, style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)($e, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Me, { children: "Deposit address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ve, { children: o3 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(je, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Be, { type: "button", onClick: (e2) => {
    e2.stopPropagation(), s3(true);
  }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { size: 16, color: "var(--privy-color-icon-muted)" }) }) })] }) });
}
var Le = gt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;
var Pe = gt.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`;
var $e = gt.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`;
var Me = gt.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`;
var Ve = gt.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`;
var je = gt.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`;
var Be = gt.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;
function ze({ quote: t3, selectedCurrency: o3, selectedChain: a4, destinationSymbol: s3 }) {
  let [l4, c2] = (0, import_react.useState)(false), u2 = o3.symbol.toUpperCase(), m3 = a4.displayName, p3 = (0, import_react.useRef)(null);
  return (0, import_jsx_runtime.jsxs)(We, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(qe, { onClick: (0, import_react.useCallback)((() => {
    let e2 = document.getElementById("privy-modal-content");
    e2 && (p3.current && clearTimeout(p3.current), e2.style.transition = "none", p3.current = setTimeout((() => {
      e2.style.transition = "", p3.current = null;
    }), 160)), c2(((e3) => !e3));
  }), []), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Qe, { children: [o3.logoURI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a2, { src: o3.logoURI, alt: u2, style: { width: "2rem", height: "2rem" } }), a4.iconUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ye, { src: a4.iconUrl, alt: m3 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Xe, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ke, { children: "You send" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(He, { children: [u2, " on ", m3] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ge, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l4 ? ChevronUp : ChevronDown, { size: 16 }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rr, { $expanded: l4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tr, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Je, { children: [
    t3.indicative_rate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { children: "Conversion rate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b2, { style: { display: "flex", alignItems: "center", gap: "0.25rem" }, children: [ue(t3.indicative_rate, u2, s3.toUpperCase()), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(or, { content: "Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing." })] })] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { children: "Max slippage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b2, { children: [(t3.slippage_bps / 100).toFixed(1), "%"] })] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { children: "Refund address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p2, { value: t3.refund_address, iconOnly: true, iconSize: 11, children: o(t3.refund_address, 4, 4) }) })] })
  ] }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ze, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 16, color: "var(--privy-color-icon-muted)", style: { flexShrink: 0 } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(er, { children: ["Only send ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: u2 }), " on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: m3 }), ". Other assets may be lost."] })] })] });
}
var We = gt.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`;
var qe = gt.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;
var Qe = gt.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;
var Ye = gt(t)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`;
var Xe = gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
var Ke = gt.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`;
var He = gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
var Ge = gt.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`;
var Je = gt.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`;
var Ze = gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`;
var er = gt.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`;
var rr = gt.div`
  display: grid;
  grid-template-rows: ${({ $expanded: e2 }) => e2 ? "1fr" : "0fr"};
  transition: grid-template-rows 150ms ease-out;
`;
var tr = gt.div`
  overflow: hidden;
`;
function or({ content: o3 }) {
  let [n5, a4] = (0, import_react.useState)(false), { refs: s3, floatingStyles: d3, context: l4 } = useFloating({ open: n5, onOpenChange: a4, placement: "top", whileElementsMounted: autoUpdate, middleware: [offset(6), flip(), shift({ padding: 8 })] }), c2 = useHover(l4, { move: false, handleClose: safePolygon() }), u2 = useFocus(l4), { getReferenceProps: m3, getFloatingProps: p3 } = useInteractions([c2, u2, useClick(l4), useDismiss(l4), useRole(l4, { role: "tooltip" })]), { isMounted: h2, styles: f2 } = useTransitionStyles(l4, { duration: 150 });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { ref: s3.setReference, type: "button", "aria-label": "More information about conversion rate", style: { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0, border: "none", background: "none", color: "var(--privy-color-icon-muted)", cursor: "pointer" }, ...m3(), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { size: 14 }) }), h2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, { root: document.getElementById("privy-modal-content") ?? void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(nr, { ref: s3.setFloating, style: { ...d3, ...f2 }, ...p3(), children: o3 }) })] });
}
var nr = gt.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`;
var ir = ({ quote: o3, selectedCurrency: n5, selectedChain: a4, destinationSymbol: s3, onBack: d3, onClose: l4 }) => {
  let [c2, u2] = (0, import_react.useState)(false), m3 = n5?.symbol?.toUpperCase() ?? "funds", h2 = a4?.displayName ?? "", f2 = async () => {
    c2 || (await navigator.clipboard.writeText(o3.deposit_address), u2(true), setTimeout((() => u2(false)), 2e3));
  };
  return (0, import_jsx_runtime.jsxs)(n, { title: `Send ${m3}${h2 ? ` on ${h2}` : ""}`, subtitle: "Send funds to the address below. Conversion and routing handled by Relay.", showBack: true, onBack: d3, showClose: true, onClose: l4, watermark: false, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ze, { quote: o3, selectedCurrency: n5, selectedChain: a4, destinationSymbol: s3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fe, { address: o3.deposit_address, onClick: f2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { style: { marginTop: "1rem", marginBottom: "0.5rem", ...c2 ? { backgroundColor: "var(--privy-color-icon-success)", borderColor: "var(--privy-color-icon-success)" } : {} }, onClick: f2, children: c2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Copied ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16, style: { marginLeft: "0.25rem" } })] }) : "Copy address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ar, { children: "Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes." })] });
};
var ar = gt.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;
function sr() {
  let { state: r2, configData: t3, setModalState: o3, close: n5, params: i3, createDepositAddressEvent: d3 } = _("address"), { quote: l4, selectedCurrency: u2, selectedChain: p3, availableChains: h2 } = r2;
  return (function({ depositAddressId: e2, enabled: r3, quoteCreatedAt: t4 }) {
    let { privy: o4 } = l(), { setModalState: n6 } = m();
    (0, import_react.useEffect)((() => {
      if (!e2) return;
      let r4 = new AbortController();
      return Ta.waitForDeposit({ privy: o4, depositAddressId: e2, quoteCreatedAt: t4, signal: r4.signal }).then(((e3) => {
        r4.signal.aborted || ("success" === e3.status ? ke(e3.order, n6) : "timeout" === e3.status && n6({ step: "error", code: "TIMEOUT_WAITING_FOR_NEXT_ORDER" }));
      })), () => {
        r4.abort();
      };
    }), [r3, e2, o4, t4, n6]);
  })({ depositAddressId: l4.id, enabled: true, quoteCreatedAt: l4.created_at }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ir, { quote: l4, selectedCurrency: u2, selectedChain: p3, destinationSymbol: (0, import_react.useMemo)((() => he({ address: i3.destinationCurrency, caip2: i3.destinationChain, config: t3 }).symbol), [i3, t3]), onBack: () => {
    d3({ eventName: "sdk_deposit_address_action", payload: { action: "back", step: "address" } }), o3({ step: "network", selectedCurrency: u2, availableChains: h2 });
  }, onClose: n5 });
}
function dr() {
  let { modalState: r2, setModalState: t3 } = m();
  return (0, import_jsx_runtime.jsx)(ce, { onError: (e2) => t3({ step: "error", code: "UNEXPECTED_STATE", message: e2.message }), resetKey: r2.step, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(lr, {}) });
}
function lr() {
  let { modalState: r2 } = m();
  switch (r2.step) {
    case "intro":
      return (0, import_jsx_runtime.jsx)(Ue, {});
    case "token":
      return (0, import_jsx_runtime.jsx)(xe, {});
    case "network":
      return (0, import_jsx_runtime.jsx)(Ae, {});
    case "address":
      return (0, import_jsx_runtime.jsx)(sr, {});
    case "processing":
      return (0, import_jsx_runtime.jsx)(Ie, {});
    case "complete":
      return (0, import_jsx_runtime.jsx)(Ee, {});
    case "refunded":
      return (0, import_jsx_runtime.jsx)(Re, {});
    case "failed":
      return (0, import_jsx_runtime.jsx)(Te, {});
    case "error":
      return (0, import_jsx_runtime.jsx)(Ne, {});
    default:
      return null;
  }
}
var cr = { component: () => {
  let { onUserCloseViaDialogOrKeybindRef: r2 } = g(), t3 = l2(), { close: o3, config: n5 } = m();
  return (0, import_react.useEffect)((() => {
    r2.current = o3;
  }), [r2, o3]), (0, import_react.useEffect)((() => {
    if ("ready" === n5.status) {
      for (let e2 of n5.data.currencies) new Image().src = e2.logoURI;
      for (let e2 of Object.values(n5.data.chains)) new Image().src = e2.iconUrl;
    }
  }), [n5]), t3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dr, {}) : null;
} };
export {
  cr as default
};
