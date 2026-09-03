import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/TurnstileWrapper-DlRr5wef.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@marsidev/react-turnstile/dist/index.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var c = (0, import_react.forwardRef)(({ as: e3 = `div`, ...t2 }, n2) => (0, import_jsx_runtime.jsx)(e3, { ...t2, ref: n2 }));
var l = `https://challenges.cloudflare.com/turnstile/v0/api.js`;
var u = `cf-turnstile-script`;
var f = `onloadTurnstileCallback`;
var p = (e3) => !!document.getElementById(e3);
var m = ({ render: e3 = `explicit`, onLoadCallbackName: t2 = f, scriptOptions: { nonce: n2 = ``, defer: r2 = true, async: i2 = true, id: a2 = ``, appendTo: o3, onError: s2, crossOrigin: c2 = `` } = {} }) => {
  let u2 = a2 || `cf-turnstile-script`;
  if (p(u2)) return;
  let d = document.createElement(`script`);
  d.id = u2, d.src = `${l}?onload=${t2}&render=${e3}`, !document.querySelector(`script[src="${d.src}"]`) && (d.defer = !!r2, d.async = !!i2, n2 && d.setAttribute(`nonce`, n2), c2 && (d.crossOrigin = c2), s2 && (d.onerror = s2, delete window[t2]), (o3 === `body` ? document.body : document.getElementsByTagName(`head`)[0]).appendChild(d));
};
var h = { normal: { width: 300, height: 65 }, compact: { width: 150, height: 140 }, invisible: { width: 0, height: 0, overflow: `hidden` }, flexible: { minWidth: 300, width: `100%`, height: 65 } };
function g(e3) {
  if (e3 !== `invisible`) return e3;
}
function _(e3 = u) {
  let [t2, r2] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)(() => {
    let t3 = () => {
      p(e3) && r2(true);
    }, n2 = new MutationObserver(t3);
    return n2.observe(document, { childList: true, subtree: true }), t3(), () => {
      n2.disconnect();
    };
  }, [e3]), t2;
}
var v = `unloaded`;
var y;
var b = new Promise((e3, t2) => {
  y = { resolve: e3, reject: t2 }, v === `ready` && e3(void 0);
});
var x = (e3 = f) => (v === `unloaded` && (v = `loading`, window[e3] = () => {
  y.resolve(), v = `ready`, delete window[e3];
}), b);
var S = (0, import_react.forwardRef)((e3, l2) => {
  let { scriptOptions: u2, options: d = {}, siteKey: f2, onWidgetLoad: p2, onSuccess: y2, onExpire: b2, onError: S2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T, onTimeout: E, onLoadScript: D, id: O, style: k, as: A = `div`, injectScript: j = true, rerenderOnCallbackChange: M = false, ...N } = e3, P = d.size, F = (0, import_react.useMemo)(() => {
    if (P === void 0) return {};
    let e4 = h[P];
    return d.appearance === `interaction-only` ? { ...e4, height: `auto` } : e4;
  }, [P, d.appearance]), I = d.execution === `execute` ? h.invisible : F, [L, R] = (0, import_react.useState)(I), z = (0, import_react.useRef)(null), [B, V] = (0, import_react.useState)(false), H = (0, import_react.useRef)(void 0), U = (0, import_react.useRef)(false), W = O || `cf-turnstile`, G = (0, import_react.useRef)({ onSuccess: y2, onError: S2, onExpire: b2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T, onTimeout: E });
  (0, import_react.useEffect)(() => {
    M || (G.current = { onSuccess: y2, onError: S2, onExpire: b2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T, onTimeout: E });
  });
  let K = u2?.id || `cf-turnstile-script`, q = _(K), J = u2?.onLoadCallbackName || `onloadTurnstileCallback`, Y = (0, import_react.useMemo)(() => ({ sitekey: f2, action: d.action, cData: d.cData, theme: d.theme || `auto`, language: d.language || `auto`, tabindex: d.tabIndex, "response-field": d.responseField, "response-field-name": d.responseFieldName, size: g(P), retry: d.retry || `auto`, "retry-interval": d.retryInterval || 8e3, "refresh-expired": d.refreshExpired || `auto`, "refresh-timeout": d.refreshTimeout || `auto`, execution: d.execution || `render`, appearance: d.appearance || `always`, "feedback-enabled": d.feedbackEnabled ?? true, "offlabel-show-privacy": d.offlabelShowPrivacy ?? true, "offlabel-show-help": d.offlabelShowHelp ?? true, callback: (e4) => {
    U.current = true, M ? y2?.(e4) : G.current.onSuccess?.(e4);
  }, "error-callback": M ? S2 : (...e4) => G.current.onError?.(...e4), "expired-callback": M ? b2 : (...e4) => G.current.onExpire?.(...e4), "before-interactive-callback": M ? C : (...e4) => G.current.onBeforeInteractive?.(...e4), "after-interactive-callback": M ? w : (...e4) => G.current.onAfterInteractive?.(...e4), "unsupported-callback": M ? T : (...e4) => G.current.onUnsupported?.(...e4), "timeout-callback": M ? E : (...e4) => G.current.onTimeout?.(...e4) }), [d.action, d.appearance, d.cData, d.execution, d.language, d.refreshExpired, d.responseField, d.responseFieldName, d.retry, d.retryInterval, d.tabIndex, d.theme, d.feedbackEnabled, d.offlabelShowPrivacy, d.offlabelShowHelp, d.refreshTimeout, f2, P, M, M ? y2 : null, M ? S2 : null, M ? b2 : null, M ? C : null, M ? w : null, M ? T : null, M ? E : null]), X = (0, import_react.useCallback)(() => typeof window < `u` && !!window.turnstile, []), Z = (0, import_react.useCallback)((e4, t2) => {
    try {
      return window.turnstile.render(e4, t2);
    } catch (e5) {
      let t3 = M ? S2 : G.current.onError;
      t3 ? t3(e5 instanceof Error ? e5.message : String(e5)) : console.error(e5);
      return;
    }
  }, [M, M ? S2 : null]);
  return (0, import_react.useEffect)(function() {
    j && !B && (x(J), m({ onLoadCallbackName: J, scriptOptions: { ...u2, id: K } }));
  }, [j, B, u2, K, J]), (0, import_react.useEffect)(function() {
    v !== `ready` && x(J).then(() => V(true)).catch(console.error);
  }, [J]), (0, import_react.useEffect)(function() {
    if (!z.current || !B) return;
    let e4 = false;
    return (async () => {
      if (e4 || !z.current) return;
      let t2 = Z(z.current, Y);
      H.current = t2, R(I), H.current && p2?.(H.current);
    })(), () => {
      e4 = true, H.current && (window.turnstile.remove(H.current), U.current = false);
    };
  }, [W, B, Y, I, Z]), (0, import_react.useImperativeHandle)(l2, () => {
    let { turnstile: e4 } = window;
    return { getResponse() {
      if (!e4?.getResponse || !H.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      return e4.getResponse(H.current);
    }, async getResponsePromise(e5 = 3e4, t2 = 100) {
      return new Promise((n2, r2) => {
        let i2, a2 = async () => {
          if (U.current && window.turnstile && H.current) try {
            let e6 = window.turnstile.getResponse(H.current);
            return i2 && clearTimeout(i2), e6 ? n2(e6) : r2(Error(`No response received`));
          } catch (e6) {
            return i2 && clearTimeout(i2), console.warn(`Failed to get response`, e6), r2(Error(`Failed to get response`));
          }
          i2 ||= setTimeout(() => {
            i2 && clearTimeout(i2), r2(Error(`Timeout`));
          }, e5), await new Promise((e6) => setTimeout(e6, t2)), await a2();
        };
        a2();
      });
    }, reset() {
      if (!e4?.reset || !H.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      R(I);
      try {
        U.current = false, e4.reset(H.current);
      } catch (e5) {
        console.warn(`Failed to reset Turnstile widget ${H.current}`, e5);
      }
    }, remove() {
      if (!e4?.remove || !H.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      R(h.invisible), U.current = false, e4.remove(H.current), H.current = null;
    }, render() {
      if (!e4?.render || !z.current || !X() || H.current) {
        console.warn(`Turnstile has not been loaded or container not found`);
        return;
      }
      let t2 = Z(z.current, Y);
      return H.current = t2, H.current && p2?.(H.current), R(I), t2;
    }, execute() {
      if (d.execution !== `execute`) {
        console.warn(`Execution mode is not set to "execute"`);
        return;
      }
      if (!e4?.execute || !z.current || !H.current || !X()) {
        console.warn(`Turnstile has not been loaded or container not found`);
        return;
      }
      e4.execute(z.current), R(F);
    }, isExpired() {
      return !e4?.isExpired || !H.current || !X() ? (console.warn(`Turnstile has not been loaded`), false) : e4.isExpired(H.current);
    } };
  }, [H, d.execution, Y, z, X, Z, B, p2, I, F]), (0, import_react.useEffect)(() => {
    if (B || !q) return;
    if (window.turnstile) {
      V(true);
      return;
    }
    let e4 = setInterval(() => {
      window.turnstile && (V(true), clearInterval(e4));
    }, 50);
    return () => {
      clearInterval(e4);
    };
  }, [B, q]), (0, import_react.useEffect)(() => {
    R(I);
  }, [I]), (0, import_react.useEffect)(() => {
    !q || typeof D != `function` || D();
  }, [q]), (0, import_jsx_runtime.jsx)(c, { ref: z, as: A, id: W, style: { ...L, ...k }, ...N });
});
S.displayName = `Turnstile`;

// node_modules/@privy-io/react-auth/dist/esm/TurnstileWrapper-DlRr5wef.mjs
var import_react2 = __toESM(require_react(), 1);
var o2 = ({ delayedExecution: o3, captchaContext: n2, ...i2 }) => {
  let { appId: s2, setError: c2, setToken: p2, setExecuting: a2, siteKey: u2, ref: d } = n2, { scriptNonce: x2 } = se();
  return (0, import_jsx_runtime2.jsx)(S, { ...i2, ref: d, siteKey: u2 ?? "", scriptOptions: x2 ? { nonce: x2 } : void 0, options: { action: s2, size: "invisible", ...o3 ? { appearance: "execute", execution: "execute" } : { appearance: "always", execution: "render" } }, onUnsupported: () => {
    i2.onUnsupported?.(), console.warn("Browser does not support Turnstile.");
  }, onError: (e3) => {
    i2.onError?.(e3), c2("Captcha failed"), a2(false);
  }, onSuccess: (e3) => {
    i2.onSuccess?.(e3), p2(e3), a2(false);
  }, onExpire: (e3) => {
    i2.onExpire?.(e3);
    try {
      d.current?.reset(), c2(void 0), p2(void 0);
    } catch (e4) {
      c2("expired_and_failed_reset");
    }
  } });
};
export {
  o2 as TurnstileWrapper,
  o2 as default
};
