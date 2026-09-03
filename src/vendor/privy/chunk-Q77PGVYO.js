import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  he
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/use-deposit-address-BXUevKae.mjs
var import_react = __toESM(require_react(), 1);
var d = Promise.withResolvers?.bind(Promise) ?? (() => {
  let e2, t2;
  return { promise: new Promise(((r, o) => {
    e2 = r, t2 = o;
  })), resolve: e2, reject: t2 };
});
function c(e2, t2) {
  return (r) => {
    e2({ eventName: r.eventName, payload: { ...r.payload, flowId: t2 } });
  };
}
var l2 = create((() => null));
var p = (e2) => {
  null !== l2.getState() && l2.setState(e2);
};
async function f(e2, t2) {
  let o = await e2.fetchPrivyRoute(he, {}), a = { config: { status: "ready", data: { currencies: o.currencies, chains: o.chains } } };
  t2?.aborted || p(a);
}
function m() {
  let r = l2(), { closePrivyModal: a, privy: s, createAnalyticsEvent: n } = l(), d2 = r?.flowId, i = (0, import_react.useMemo)((() => d2 ? c(n, d2) : () => {
  }), [n, d2]), u = r?.params ?? null, m2 = r?.config ?? { status: "loading" }, _2 = (0, import_react.useCallback)(((e2) => {
    let t2 = E(d2);
    if (!t2 || (p({ modalState: e2 }), t2.modalState.step === e2.step)) return;
    i({ eventName: "sdk_deposit_address_step_viewed", payload: { step: e2.step, ..."error" === e2.step ? { errorCode: e2.code } : {} } });
    let r2 = (function(e3) {
      switch (e3.step) {
        case "complete":
          return { outcome: "completed", step: "complete" };
        case "failed":
          return { outcome: "failed", step: "failed", errorCode: "DEPOSIT_FAILED" };
        case "refunded":
          return { outcome: "refunded", step: "refunded", errorCode: "DEPOSIT_REFUNDED" };
        default:
          return null;
      }
    })(e2);
    r2 && i({ eventName: "sdk_deposit_address_concluded", payload: r2 });
  }), [i, d2]), y = (0, import_react.useCallback)((async () => {
    let e2 = r?.controller;
    if (u && e2 && !e2.signal.aborted) {
      p({ config: { status: "loading" } });
      try {
        await f(s, e2.signal);
      } catch (t2) {
        if (e2.signal.aborted) return;
        throw p({ config: { status: "error", error: t2 instanceof Error ? t2 : Error("Failed to load deposit config") } }), t2;
      }
    }
  }), [u, s, r?.controller]), v = (0, import_react.useCallback)((() => {
    let e2 = E(d2);
    if (!e2) return;
    let { modalState: t2 } = e2;
    i({ eventName: "sdk_deposit_address_exited", payload: { step: t2.step, ..."error" === t2.step ? { errorCode: t2.code } : {} } });
    let r2 = (function(e3) {
      switch (e3.step) {
        case "complete":
        case "failed":
        case "refunded":
          return null;
        case "error":
          return { outcome: "failed", step: "error", errorCode: e3.code };
        default:
          return { outcome: "abandoned", step: e3.step };
      }
    })(t2);
    r2 && i({ eventName: "sdk_deposit_address_concluded", payload: r2 }), "complete" === t2.step ? e2.onComplete() : "failed" === t2.step ? e2.onError(Error("DEPOSIT_FAILED")) : "error" === t2.step ? e2.onError(Error(t2.code)) : "refunded" === t2.step ? e2.onError(Error("DEPOSIT_REFUNDED")) : e2.onError(Error("USER_EXITED")), a({ shouldCallAuthOnSuccess: false });
  }), [d2, a, i]);
  return { modalState: r?.modalState ?? { step: "intro" }, setModalState: _2, config: m2, retryConfig: y, params: u, close: v, onBack: r?.onBack, createDepositAddressEvent: i };
}
function E(e2) {
  let t2 = l2.getState();
  return t2 && t2.flowId === e2 ? t2 : null;
}
function _(e2) {
  let { modalState: t2, config: r, params: o, ...a } = m();
  if ((function(e3, t3) {
    if (e3.step !== t3) throw Error("UNEXPECTED_STATE");
  })(t2, e2), !o || "ready" !== r.status) throw Error("UNEXPECTED_STATE");
  return { state: t2, configData: r.data, params: o, ...a };
}

export {
  d,
  l2 as l,
  m,
  _
};
