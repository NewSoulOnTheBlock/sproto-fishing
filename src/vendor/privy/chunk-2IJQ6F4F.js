import {
  TOKEN_PROGRAM_ADDRESS
} from "./chunk-XDDJQ3UG.js";
import {
  d as d8
} from "./chunk-Q77PGVYO.js";
import {
  e as e2
} from "./chunk-KH2OFJFK.js";
import {
  F as F2,
  O as O2,
  P as P3,
  R as R2,
  k as k4
} from "./chunk-H64F7Q3M.js";
import {
  require_react_dom
} from "./chunk-5QJKWR6B.js";
import {
  L as L2,
  j,
  q as q2,
  se as se2
} from "./chunk-5IEXBHIB.js";
import {
  A as A2,
  B as B2,
  T as T2,
  a as a3,
  k as k3,
  r as r3,
  s as s5,
  t as t2,
  u as u3
} from "./chunk-PANVPNZ2.js";
import {
  c as c2,
  d as d7,
  f as f2,
  m as m4,
  p as p3,
  u as u4,
  y as y3
} from "./chunk-LTBS5V6F.js";
import {
  a as a4,
  e,
  i as i4,
  s as s6
} from "./chunk-4X5V72BU.js";
import {
  a as a2,
  i as i3,
  s as s4
} from "./chunk-75YLIS6S.js";
import {
  $t,
  Ai,
  Ei,
  Kt,
  Pi,
  Xt,
  _i,
  ai,
  bi,
  ci,
  d as d5,
  di,
  ei,
  hi,
  li,
  oi,
  pi,
  ri,
  ti,
  xi
} from "./chunk-2DL5TNP5.js";
import {
  O,
  P as P2,
  Q,
  R,
  S as S3,
  T,
  U,
  V,
  h as h2,
  k as k2,
  m as m3,
  w as w2
} from "./chunk-NFV3EFLQ.js";
import {
  _,
  d,
  f,
  h,
  k,
  o,
  p,
  r,
  s as s2,
  v,
  y
} from "./chunk-SLTT5NIH.js";
import {
  d as d6,
  n as n3,
  o as o3
} from "./chunk-JC23ZM22.js";
import {
  E as E2,
  J,
  L,
  N,
  S as S2,
  _ as _2,
  q
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  b,
  m as m2,
  u
} from "./chunk-EJB6TW3T.js";
import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  D as D2,
  P,
  c,
  d as d4,
  l as l3,
  m,
  p as p2,
  w,
  y as y2
} from "./chunk-COXZQBSX.js";
import {
  d as d3,
  i as i2,
  n as n2,
  o as o2,
  r as r2,
  s as s3,
  t
} from "./chunk-W22FA2JU.js";
import {
  g,
  u as u2
} from "./chunk-2LSC5KMF.js";
import {
  St,
  a2 as a5,
  ft,
  gt,
  i,
  l as l2,
  n,
  s
} from "./chunk-THXMRURJ.js";
import {
  A,
  B,
  C2 as C,
  D,
  E2 as E,
  F,
  Ha,
  Ii,
  S2 as S,
  a2 as a,
  ce,
  cn,
  d as d2,
  de2 as de,
  eventemitter3_default,
  external_exports,
  ie2 as ie,
  l2 as l,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  base58,
  base64
} from "./chunk-GVC7K3K7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
var require_use_sync_external_store_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x8, y9) {
        return x8 === y9 && (0 !== x8 || 1 / x8 === 1 / y9) || x8 !== x8 && y9 !== y9;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect2 = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect2(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_with_selector_development();
    }
  }
});

// node_modules/mipd/dist/esm/utils.js
function requestProviders(listener) {
  if (typeof window === "undefined")
    return;
  const handler = (event) => listener(event.detail);
  window.addEventListener("eip6963:announceProvider", handler);
  window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
  return () => window.removeEventListener("eip6963:announceProvider", handler);
}

// node_modules/mipd/dist/esm/store.js
function createStore() {
  const listeners = /* @__PURE__ */ new Set();
  let providerDetails = [];
  const request = () => requestProviders((providerDetail) => {
    if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))
      return;
    providerDetails = [...providerDetails, providerDetail];
    listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));
  });
  let unwatch = request();
  return {
    _listeners() {
      return listeners;
    },
    clear() {
      listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));
      providerDetails = [];
    },
    destroy() {
      this.clear();
      listeners.clear();
      unwatch?.();
    },
    findProvider({ rdns }) {
      return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);
    },
    getProviders() {
      return providerDetails;
    },
    reset() {
      this.clear();
      unwatch?.();
      unwatch = request();
    },
    subscribe(listener, { emitImmediately } = {}) {
      listeners.add(listener);
      if (emitImmediately)
        listener(providerDetails, { added: providerDetails });
      return () => listeners.delete(listener);
    }
  };
}

// node_modules/@privy-io/react-auth/dist/esm/useSendTransaction-DgBRGWWt.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i5 = Object.defineProperty;
var d9 = (t17, e14, n18) => e14 in t17 ? i5(t17, e14, { enumerable: true, configurable: true, writable: true, value: n18 }) : t17[e14] = n18;
var r4 = (t17, e14, n18) => (d9(t17, typeof e14 != "symbol" ? e14 + "" : e14, n18), n18);
var o4 = class {
  constructor() {
    r4(this, "current", this.detect());
    r4(this, "handoffState", "pending");
    r4(this, "currentId", 0);
  }
  set(e14) {
    this.current !== e14 && (this.handoffState = "pending", this.currentId = 0, this.current = e14);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s7 = new o4();

// node_modules/@headlessui/react/dist/utils/owner.js
function l4(n18) {
  var u17;
  return s7.isServer ? null : n18 == null ? document : (u17 = n18 == null ? void 0 : n18.ownerDocument) != null ? u17 : document;
}
function r5(n18) {
  var u17, o22;
  return s7.isServer ? null : n18 == null ? document : (o22 = (u17 = n18 == null ? void 0 : n18.getRootNode) == null ? void 0 : u17.call(n18)) != null ? o22 : document;
}
function e3(n18) {
  var u17, o22;
  return (o22 = (u17 = r5(n18)) == null ? void 0 : u17.activeElement) != null ? o22 : null;
}
function d10(n18) {
  return e3(n18) === n18;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e14) {
  typeof queueMicrotask == "function" ? queueMicrotask(e14) : Promise.resolve().then(e14).catch((o22) => setTimeout(() => {
    throw o22;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o5() {
  let s19 = [], r17 = { addEventListener(e14, t17, n18, i19) {
    return e14.addEventListener(t17, n18, i19), r17.add(() => e14.removeEventListener(t17, n18, i19));
  }, requestAnimationFrame(...e14) {
    let t17 = requestAnimationFrame(...e14);
    return r17.add(() => cancelAnimationFrame(t17));
  }, nextFrame(...e14) {
    return r17.requestAnimationFrame(() => r17.requestAnimationFrame(...e14));
  }, setTimeout(...e14) {
    let t17 = setTimeout(...e14);
    return r17.add(() => clearTimeout(t17));
  }, microTask(...e14) {
    let t17 = { current: true };
    return t3(() => {
      t17.current && e14[0]();
    }), r17.add(() => {
      t17.current = false;
    });
  }, style(e14, t17, n18) {
    let i19 = e14.style.getPropertyValue(t17);
    return Object.assign(e14.style, { [t17]: n18 }), this.add(() => {
      Object.assign(e14.style, { [t17]: i19 });
    });
  }, group(e14) {
    let t17 = o5();
    return e14(t17), this.add(() => t17.dispose());
  }, add(e14) {
    return s19.includes(e14) || s19.push(e14), () => {
      let t17 = s19.indexOf(e14);
      if (t17 >= 0) for (let n18 of s19.splice(t17, 1)) n18();
    };
  }, dispose() {
    for (let e14 of s19.splice(0)) e14();
  } };
  return r17;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p4() {
  let [e14] = (0, import_react.useState)(o5);
  return (0, import_react.useEffect)(() => () => e14.dispose(), [e14]), e14;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);
var n4 = (e14, t17) => {
  s7.isServer ? (0, import_react2.useEffect)(e14, t17) : (0, import_react2.useLayoutEffect)(e14, t17);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s9(e14) {
  let r17 = (0, import_react3.useRef)(e14);
  return n4(() => {
    r17.current = e14;
  }, [e14]), r17;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o7 = function(t17) {
  let e14 = s9(t17);
  return import_react4.default.useCallback((...r17) => e14.current(...r17), [e14]);
};

// node_modules/@headlessui/react/dist/hooks/use-slot.js
var import_react5 = __toESM(require_react(), 1);
function n5(e14) {
  return (0, import_react5.useMemo)(() => e14, Object.values(e14));
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react6 = __toESM(require_react(), 1);
var e4 = (0, import_react6.createContext)(void 0);
function a7() {
  return (0, import_react6.useContext)(e4);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r17) {
  return Array.from(new Set(r17.flatMap((n18) => typeof n18 == "string" ? n18.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u5(r17, n18, ...a22) {
  if (r17 in n18) {
    let e14 = n18[r17];
    return typeof e14 == "function" ? e14(...a22) : e14;
  }
  let t17 = new Error(`Tried to handle "${r17}" but there is no handler defined. Only defined handlers are: ${Object.keys(n18).map((e14) => `"${e14}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t17, u5), t17;
}

// node_modules/@headlessui/react/dist/utils/render.js
var A3 = ((a22) => (a22[a22.None = 0] = "None", a22[a22.RenderStrategy = 1] = "RenderStrategy", a22[a22.Static = 2] = "Static", a22))(A3 || {});
var C2 = ((t17) => (t17[t17.Unmount = 0] = "Unmount", t17[t17.Hidden = 1] = "Hidden", t17))(C2 || {});
function K() {
  let e14 = I();
  return (0, import_react7.useCallback)((r17) => U2({ mergeRefs: e14, ...r17 }), [e14]);
}
function U2({ ourProps: e14, theirProps: r17, slot: t17, defaultTag: a22, features: o22, visible: n18 = true, name: i19, mergeRefs: l14 }) {
  l14 = l14 != null ? l14 : H;
  let s19 = P4(r17, e14);
  if (n18) return F3(s19, t17, a22, i19, l14);
  let y9 = o22 != null ? o22 : 0;
  if (y9 & 2) {
    let { static: f15 = false, ...u17 } = s19;
    if (f15) return F3(u17, t17, a22, i19, l14);
  }
  if (y9 & 1) {
    let { unmount: f15 = true, ...u17 } = s19;
    return u5(f15 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F3({ ...u17, hidden: true, style: { display: "none" } }, t17, a22, i19, l14);
    } });
  }
  return F3(s19, t17, a22, i19, l14);
}
function F3(e14, r17 = {}, t17, a22, o22) {
  let { as: n18 = t17, children: i19, refName: l14 = "ref", ...s19 } = h3(e14, ["unmount", "static"]), y9 = e14.ref !== void 0 ? { [l14]: e14.ref } : {}, f15 = typeof i19 == "function" ? i19(r17) : i19;
  f15 = E3(f15), "className" in s19 && s19.className && typeof s19.className == "function" && (s19.className = s19.className(r17)), s19["aria-labelledby"] && s19["aria-labelledby"] === s19.id && (s19["aria-labelledby"] = void 0);
  let u17 = {};
  if (r17) {
    let d18 = false, p9 = [];
    for (let [c15, T9] of Object.entries(r17)) typeof T9 == "boolean" && (d18 = true), T9 === true && p9.push(c15.replace(/([A-Z])/g, (g4) => `-${g4.toLowerCase()}`));
    if (d18) {
      u17["data-headlessui-state"] = p9.join(" ");
      for (let c15 of p9) u17[`data-${c15}`] = "";
    }
  }
  if (b2(n18) && (Object.keys(m5(s19)).length > 0 || Object.keys(m5(u17)).length > 0)) if (!(0, import_react7.isValidElement)(f15) || Array.isArray(f15) && f15.length > 1 || L3(f15)) {
    if (Object.keys(m5(s19)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a22} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m5(s19)).concat(Object.keys(m5(u17))).map((d18) => `  - ${d18}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d18) => `  - ${d18}`).join(`
`)].join(`
`));
  } else {
    let d18 = f15.props, p9 = d18 == null ? void 0 : d18.className, c15 = typeof p9 == "function" ? (...R5) => t6(p9(...R5), s19.className) : t6(p9, s19.className), T9 = c15 ? { className: c15 } : {}, g4 = P4(f15.props, m5(h3(s19, ["ref"])));
    for (let R5 in u17) R5 in g4 && delete u17[R5];
    return (0, import_react7.cloneElement)(f15, Object.assign({}, g4, u17, y9, { ref: o22(D3(f15), y9.ref) }, T9));
  }
  return (0, import_react7.createElement)(n18, Object.assign({}, h3(s19, ["ref"]), !b2(n18) && y9, !b2(n18) && u17), f15);
}
function I() {
  let e14 = (0, import_react7.useRef)([]), r17 = (0, import_react7.useCallback)((t17) => {
    for (let a22 of e14.current) a22 != null && (typeof a22 == "function" ? a22(t17) : a22.current = t17);
  }, []);
  return (...t17) => {
    if (!t17.every((a22) => a22 == null)) return e14.current = t17, r17;
  };
}
function H(...e14) {
  return e14.every((r17) => r17 == null) ? void 0 : (r17) => {
    for (let t17 of e14) t17 != null && (typeof t17 == "function" ? t17(r17) : t17.current = r17);
  };
}
function P4(...e14) {
  var a22;
  if (e14.length === 0) return {};
  if (e14.length === 1) return e14[0];
  let r17 = {}, t17 = {};
  for (let o22 of e14) for (let n18 in o22) n18.startsWith("on") && typeof o22[n18] == "function" ? ((a22 = t17[n18]) != null || (t17[n18] = []), t17[n18].push(o22[n18])) : r17[n18] = o22[n18];
  if (r17.disabled || r17["aria-disabled"]) for (let o22 in t17) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(o22) && (t17[o22] = [(n18) => {
    var i19;
    return (i19 = n18 == null ? void 0 : n18.preventDefault) == null ? void 0 : i19.call(n18);
  }]);
  for (let o22 in t17) Object.assign(r17, { [o22](n18, ...i19) {
    let l14 = t17[o22];
    for (let s19 of l14) {
      if ((n18 instanceof Event || (n18 == null ? void 0 : n18.nativeEvent) instanceof Event) && n18.defaultPrevented) return;
      s19(n18, ...i19);
    }
  } });
  return r17;
}
function V2(...e14) {
  var a22;
  if (e14.length === 0) return {};
  if (e14.length === 1) return e14[0];
  let r17 = {}, t17 = {};
  for (let o22 of e14) for (let n18 in o22) n18.startsWith("on") && typeof o22[n18] == "function" ? ((a22 = t17[n18]) != null || (t17[n18] = []), t17[n18].push(o22[n18])) : r17[n18] = o22[n18];
  for (let o22 in t17) Object.assign(r17, { [o22](...n18) {
    let i19 = t17[o22];
    for (let l14 of i19) l14 == null || l14(...n18);
  } });
  return r17;
}
function Y(e14) {
  var r17;
  return Object.assign((0, import_react7.forwardRef)(e14), { displayName: (r17 = e14.displayName) != null ? r17 : e14.name });
}
function m5(e14) {
  let r17 = Object.assign({}, e14);
  for (let t17 in r17) r17[t17] === void 0 && delete r17[t17];
  return r17;
}
function h3(e14, r17 = []) {
  let t17 = Object.assign({}, e14);
  for (let a22 of r17) a22 in t17 && delete t17[a22];
  return t17;
}
function D3(e14) {
  return import_react7.default.version.split(".")[0] >= "19" ? e14.props.ref : e14.ref;
}
function E3(e14) {
  if (e14 != null && e14.$$typeof === Symbol.for("react.lazy")) {
    let r17 = e14._payload;
    if (r17 != null && r17.status === "fulfilled") return E3(r17.value);
  }
  return e14;
}
function b2(e14) {
  return e14 === import_react7.Fragment || e14 === Symbol.for("react.fragment");
}
function L3(e14) {
  return b2(e14.type);
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/hidden.js
var a8 = "span";
var s10 = ((e14) => (e14[e14.None = 1] = "None", e14[e14.Focusable = 2] = "Focusable", e14[e14.Hidden = 4] = "Hidden", e14))(s10 || {});
function l5(t17, r17) {
  var n18;
  let { features: d18 = 1, ...e14 } = t17, o22 = { ref: r17, "aria-hidden": (d18 & 2) === 2 ? true : (n18 = e14["aria-hidden"]) != null ? n18 : void 0, hidden: (d18 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d18 & 4) === 4 && (d18 & 2) !== 2 && { display: "none" } } };
  return K()({ ourProps: o22, theirProps: e14, slot: {}, defaultTag: a8, name: "Hidden" });
}
var f4 = Y(l5);

// node_modules/@headlessui/react/dist/utils/dom.js
function o8(e14) {
  return typeof e14 != "object" || e14 === null ? false : "nodeType" in e14;
}
function t7(e14) {
  return o8(e14) && "tagName" in e14;
}
function n7(e14) {
  return t7(e14) && "accessKey" in e14;
}
function i7(e14) {
  return t7(e14) && "tabIndex" in e14;
}
function r8(e14) {
  return t7(e14) && "style" in e14;
}
function u6(e14) {
  return n7(e14) && e14.nodeName === "IFRAME";
}
function l6(e14) {
  return n7(e14) && e14.nodeName === "INPUT";
}
function m6(e14) {
  return n7(e14) && e14.nodeName === "LABEL";
}
function a9(e14) {
  return n7(e14) && e14.nodeName === "FIELDSET";
}
function E4(e14) {
  return n7(e14) && e14.nodeName === "LEGEND";
}
function L4(e14) {
  return t7(e14) ? e14.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react9 = __toESM(require_react(), 1);
var u7 = Symbol();
function T3(t17, n18 = true) {
  return Object.assign(t17, { [u7]: n18 });
}
function y4(...t17) {
  let n18 = (0, import_react9.useRef)(t17);
  (0, import_react9.useEffect)(() => {
    n18.current = t17;
  }, [t17]);
  let c15 = o7((e14) => {
    for (let o22 of n18.current) o22 != null && (typeof o22 == "function" ? o22(e14) : o22.current = e14);
  });
  return t17.every((e14) => e14 == null || (e14 == null ? void 0 : e14[u7])) ? void 0 : c15;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a10 = (0, import_react10.createContext)(null);
a10.displayName = "DescriptionContext";
function f5() {
  let r17 = (0, import_react10.useContext)(a10);
  if (r17 === null) {
    let e14 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e14, f5), e14;
  }
  return r17;
}
function H2() {
  let [r17, e14] = (0, import_react10.useState)([]);
  return [r17.length > 0 ? r17.join(" ") : void 0, (0, import_react10.useMemo)(() => function(t17) {
    let i19 = o7((n18) => (e14((o22) => [...o22, n18]), () => e14((o22) => {
      let s19 = o22.slice(), p9 = s19.indexOf(n18);
      return p9 !== -1 && s19.splice(p9, 1), s19;
    }))), l14 = (0, import_react10.useMemo)(() => ({ register: i19, slot: t17.slot, name: t17.name, props: t17.props, value: t17.value }), [i19, t17.slot, t17.name, t17.props, t17.value]);
    return import_react10.default.createElement(a10.Provider, { value: l14 }, t17.children);
  }, [e14])];
}
var I2 = "p";
function C3(r17, e14) {
  let c15 = (0, import_react8.useId)(), t17 = a7(), { id: i19 = `headlessui-description-${c15}`, ...l14 } = r17, n18 = f5(), o22 = y4(e14);
  n4(() => n18.register(i19), [i19, n18.register]);
  let s19 = n5({ ...n18.slot, disabled: t17 || false }), p9 = { ref: o22, ...n18.props, id: i19 };
  return K()({ ourProps: p9, theirProps: l14, slot: s19, defaultTag: I2, name: n18.name || "Description" });
}
var _3 = Y(C3);
var M2 = Object.assign(_3, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o9 = ((r17) => (r17.Space = " ", r17.Enter = "Enter", r17.Escape = "Escape", r17.Backspace = "Backspace", r17.Delete = "Delete", r17.ArrowLeft = "ArrowLeft", r17.ArrowUp = "ArrowUp", r17.ArrowRight = "ArrowRight", r17.ArrowDown = "ArrowDown", r17.Home = "Home", r17.End = "End", r17.PageUp = "PageUp", r17.PageDown = "PageDown", r17.Tab = "Tab", r17))(o9 || {});

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react11 = __toESM(require_react(), 1);
var e5 = (0, import_react11.createContext)(() => {
});
function C4({ value: t17, children: o22 }) {
  return import_react11.default.createElement(e5.Provider, { value: t17 }, o22);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a11 = class extends Map {
  constructor(t17) {
    super();
    this.factory = t17;
  }
  get(t17) {
    let e14 = super.get(t17);
    return e14 === void 0 && (e14 = this.factory(t17), this.set(t17, e14)), e14;
  }
};

// node_modules/@headlessui/react/dist/machine.js
var h4 = Object.defineProperty;
var v3 = (t17, e14, r17) => e14 in t17 ? h4(t17, e14, { enumerable: true, configurable: true, writable: true, value: r17 }) : t17[e14] = r17;
var S5 = (t17, e14, r17) => (v3(t17, typeof e14 != "symbol" ? e14 + "" : e14, r17), r17);
var b3 = (t17, e14, r17) => {
  if (!e14.has(t17)) throw TypeError("Cannot " + r17);
};
var i10 = (t17, e14, r17) => (b3(t17, e14, "read from private field"), r17 ? r17.call(t17) : e14.get(t17));
var c4 = (t17, e14, r17) => {
  if (e14.has(t17)) throw TypeError("Cannot add the same private member more than once");
  e14 instanceof WeakSet ? e14.add(t17) : e14.set(t17, r17);
};
var u9 = (t17, e14, r17, s19) => (b3(t17, e14, "write to private field"), s19 ? s19.call(t17, r17) : e14.set(t17, r17), r17);
var n9;
var a12;
var o10;
var T5 = class {
  constructor(e14) {
    c4(this, n9, {});
    c4(this, a12, new a11(() => /* @__PURE__ */ new Set()));
    c4(this, o10, /* @__PURE__ */ new Set());
    S5(this, "disposables", o5());
    u9(this, n9, e14), s7.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return i10(this, n9);
  }
  subscribe(e14, r17) {
    if (s7.isServer) return () => {
    };
    let s19 = { selector: e14, callback: r17, current: e14(i10(this, n9)) };
    return i10(this, o10).add(s19), this.disposables.add(() => {
      i10(this, o10).delete(s19);
    });
  }
  on(e14, r17) {
    return s7.isServer ? () => {
    } : (i10(this, a12).get(e14).add(r17), this.disposables.add(() => {
      i10(this, a12).get(e14).delete(r17);
    }));
  }
  send(e14) {
    let r17 = this.reduce(i10(this, n9), e14);
    if (r17 !== i10(this, n9)) {
      u9(this, n9, r17);
      for (let s19 of i10(this, o10)) {
        let l14 = s19.selector(i10(this, n9));
        j3(s19.current, l14) || (s19.current = l14, s19.callback(l14));
      }
      for (let s19 of i10(this, a12).get(e14.type)) s19(i10(this, n9), e14);
    }
  }
};
n9 = /* @__PURE__ */ new WeakMap(), a12 = /* @__PURE__ */ new WeakMap(), o10 = /* @__PURE__ */ new WeakMap();
function j3(t17, e14) {
  return Object.is(t17, e14) ? true : typeof t17 != "object" || t17 === null || typeof e14 != "object" || e14 === null ? false : Array.isArray(t17) && Array.isArray(e14) ? t17.length !== e14.length ? false : f6(t17[Symbol.iterator](), e14[Symbol.iterator]()) : t17 instanceof Map && e14 instanceof Map || t17 instanceof Set && e14 instanceof Set ? t17.size !== e14.size ? false : f6(t17.entries(), e14.entries()) : p5(t17) && p5(e14) ? f6(Object.entries(t17)[Symbol.iterator](), Object.entries(e14)[Symbol.iterator]()) : false;
}
function f6(t17, e14) {
  do {
    let r17 = t17.next(), s19 = e14.next();
    if (r17.done && s19.done) return true;
    if (r17.done || s19.done || !Object.is(r17.value, s19.value)) return false;
  } while (true);
}
function p5(t17) {
  if (Object.prototype.toString.call(t17) !== "[object Object]") return false;
  let e14 = Object.getPrototypeOf(t17);
  return e14 === null || Object.getPrototypeOf(e14) === null;
}
function k6(t17) {
  let [e14, r17] = t17(), s19 = o5();
  return (...l14) => {
    e14(...l14), s19.dispose(), s19.microTask(r17);
  };
}

// node_modules/@headlessui/react/dist/machines/stack-machine.js
var a13 = Object.defineProperty;
var r10 = (e14, c15, t17) => c15 in e14 ? a13(e14, c15, { enumerable: true, configurable: true, writable: true, value: t17 }) : e14[c15] = t17;
var p6 = (e14, c15, t17) => (r10(e14, typeof c15 != "symbol" ? c15 + "" : c15, t17), t17);
var k7 = ((t17) => (t17[t17.Push = 0] = "Push", t17[t17.Pop = 1] = "Pop", t17))(k7 || {});
var y5 = { [0](e14, c15) {
  let t17 = c15.id, s19 = e14.stack, i19 = e14.stack.indexOf(t17);
  if (i19 !== -1) {
    let n18 = e14.stack.slice();
    return n18.splice(i19, 1), n18.push(t17), s19 = n18, { ...e14, stack: s19 };
  }
  return { ...e14, stack: [...e14.stack, t17] };
}, [1](e14, c15) {
  let t17 = c15.id, s19 = e14.stack.indexOf(t17);
  if (s19 === -1) return e14;
  let i19 = e14.stack.slice();
  return i19.splice(s19, 1), { ...e14, stack: i19 };
} };
var o11 = class _o extends T5 {
  constructor() {
    super(...arguments);
    p6(this, "actions", { push: (t17) => this.send({ type: 0, id: t17 }), pop: (t17) => this.send({ type: 1, id: t17 }) });
    p6(this, "selectors", { isTop: (t17, s19) => t17.stack[t17.stack.length - 1] === s19, inStack: (t17, s19) => t17.stack.includes(s19) });
  }
  static new() {
    return new _o({ stack: [] });
  }
  reduce(t17, s19) {
    return u5(s19.type, y5, t17, s19);
  }
};
var x2 = new a11(() => o11.new());

// node_modules/@headlessui/react/dist/react-glue.js
var import_with_selector = __toESM(require_with_selector(), 1);
function S6(e14, n18, r17 = j3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(o7((i19) => e14.subscribe(s11, i19)), o7(() => e14.state), o7(() => e14.state), o7(n18), r17);
}
function s11(e14) {
  return e14;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
function I3(o22, s19) {
  let t17 = (0, import_react12.useId)(), r17 = x2.get(s19), [i19, c15] = S6(r17, (0, import_react12.useCallback)((e14) => [r17.selectors.isTop(e14, t17), r17.selectors.inStack(e14, t17)], [r17, t17]));
  return n4(() => {
    if (o22) return r17.actions.push(t17), () => r17.actions.pop(t17);
  }, [r17, o22, t17]), o22 ? c15 ? i19 : true : false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f7 = /* @__PURE__ */ new Map();
var u11 = /* @__PURE__ */ new Map();
function h5(t17) {
  var e14;
  let r17 = (e14 = u11.get(t17)) != null ? e14 : 0;
  return u11.set(t17, r17 + 1), r17 !== 0 ? () => m8(t17) : (f7.set(t17, { "aria-hidden": t17.getAttribute("aria-hidden"), inert: t17.inert }), t17.setAttribute("aria-hidden", "true"), t17.inert = true, () => m8(t17));
}
function m8(t17) {
  var i19;
  let r17 = (i19 = u11.get(t17)) != null ? i19 : 1;
  if (r17 === 1 ? u11.delete(t17) : u11.set(t17, r17 - 1), r17 !== 1) return;
  let e14 = f7.get(t17);
  e14 && (e14["aria-hidden"] === null ? t17.removeAttribute("aria-hidden") : t17.setAttribute("aria-hidden", e14["aria-hidden"]), t17.inert = e14.inert, f7.delete(t17));
}
function y6(t17, { allowed: r17, disallowed: e14 } = {}) {
  let i19 = I3(t17, "inert-others");
  n4(() => {
    var d18, c15;
    if (!i19) return;
    let a22 = o5();
    for (let n18 of (d18 = e14 == null ? void 0 : e14()) != null ? d18 : []) n18 && a22.add(h5(n18));
    let s19 = (c15 = r17 == null ? void 0 : r17()) != null ? c15 : [];
    for (let n18 of s19) {
      if (!n18) continue;
      let l14 = l4(n18);
      if (!l14) continue;
      let o22 = n18.parentElement;
      for (; o22 && o22 !== l14.body; ) {
        for (let p9 of o22.children) s19.some((E9) => p9.contains(E9)) || a22.add(h5(p9));
        o22 = o22.parentElement;
      }
    }
    return a22.dispose;
  }, [i19, r17, e14]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react13 = __toESM(require_react(), 1);
function p7(s19, n18, o22) {
  let i19 = s9((t17) => {
    let e14 = t17.getBoundingClientRect();
    e14.x === 0 && e14.y === 0 && e14.width === 0 && e14.height === 0 && o22();
  });
  (0, import_react13.useEffect)(() => {
    if (!s19) return;
    let t17 = n18 === null ? null : n7(n18) ? n18 : n18.current;
    if (!t17) return;
    let e14 = o5();
    if (typeof ResizeObserver != "undefined") {
      let r17 = new ResizeObserver(() => i19.current(t17));
      r17.observe(t17), e14.add(() => r17.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r17 = new IntersectionObserver(() => i19.current(t17));
      r17.observe(t17), e14.add(() => r17.disconnect());
    }
    return () => e14.dispose();
  }, [n18, i19, s19]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var E5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e14) => `${e14}:not([tabindex='-1'])`).join(",");
var S7 = ["[data-autofocus]"].map((e14) => `${e14}:not([tabindex='-1'])`).join(",");
var T6 = ((o22) => (o22[o22.First = 1] = "First", o22[o22.Previous = 2] = "Previous", o22[o22.Next = 4] = "Next", o22[o22.Last = 8] = "Last", o22[o22.WrapAround = 16] = "WrapAround", o22[o22.NoScroll = 32] = "NoScroll", o22[o22.AutoFocus = 64] = "AutoFocus", o22))(T6 || {});
var A4 = ((n18) => (n18[n18.Error = 0] = "Error", n18[n18.Overflow = 1] = "Overflow", n18[n18.Success = 2] = "Success", n18[n18.Underflow = 3] = "Underflow", n18))(A4 || {});
var O4 = ((t17) => (t17[t17.Previous = -1] = "Previous", t17[t17.Next = 1] = "Next", t17))(O4 || {});
function x3(e14 = document.body) {
  return e14 == null ? [] : Array.from(e14.querySelectorAll(E5)).sort((r17, t17) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t17.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function h6(e14 = document.body) {
  return e14 == null ? [] : Array.from(e14.querySelectorAll(S7)).sort((r17, t17) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t17.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var I4 = ((t17) => (t17[t17.Strict = 0] = "Strict", t17[t17.Loose = 1] = "Loose", t17))(I4 || {});
function H3(e14, r17 = 0) {
  var t17;
  return e14 === ((t17 = l4(e14)) == null ? void 0 : t17.body) ? false : u5(r17, { [0]() {
    return e14.matches(E5);
  }, [1]() {
    let l14 = e14;
    for (; l14 !== null; ) {
      if (l14.matches(E5)) return true;
      l14 = l14.parentElement;
    }
    return false;
  } });
}
function K2(e14) {
  o5().nextFrame(() => {
    let r17 = e3(e14);
    r17 && i7(r17) && !H3(r17, 0) && w4(e14);
  });
}
var g2 = ((t17) => (t17[t17.Keyboard = 0] = "Keyboard", t17[t17.Mouse = 1] = "Mouse", t17))(g2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e14) => {
  e14.metaKey || e14.altKey || e14.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e14) => {
  e14.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e14.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function w4(e14) {
  e14 == null || e14.focus({ preventScroll: true });
}
var _4 = ["textarea", "input"].join(",");
function P5(e14) {
  var r17, t17;
  return (t17 = (r17 = e14 == null ? void 0 : e14.matches) == null ? void 0 : r17.call(e14, _4)) != null ? t17 : false;
}
function G(e14, r17 = (t17) => t17) {
  return e14.slice().sort((t17, l14) => {
    let n18 = r17(t17), a22 = r17(l14);
    if (n18 === null || a22 === null) return 0;
    let u17 = n18.compareDocumentPosition(a22);
    return u17 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u17 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function R3(e14, r17, t17 = e14 === null ? document.body : r5(e14)) {
  return v4(x3(t17), r17, { relativeTo: e14 });
}
function v4(e14, r17, { sorted: t17 = true, relativeTo: l14 = null, skipElements: n18 = [] } = {}) {
  let a22 = Array.isArray(e14) ? e14.length > 0 ? r5(e14[0]) : document : r5(e14), u17 = Array.isArray(e14) ? t17 ? G(e14) : e14 : r17 & 64 ? h6(e14) : x3(e14);
  n18.length > 0 && u17.length > 1 && (u17 = u17.filter((i19) => !n18.some((d18) => d18 != null && "current" in d18 ? (d18 == null ? void 0 : d18.current) === i19 : d18 === i19))), l14 = l14 != null ? l14 : a22 == null ? void 0 : a22.activeElement;
  let o22 = (() => {
    if (r17 & 5) return 1;
    if (r17 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M7 = (() => {
    if (r17 & 1) return 0;
    if (r17 & 2) return Math.max(0, u17.indexOf(l14)) - 1;
    if (r17 & 4) return Math.max(0, u17.indexOf(l14)) + 1;
    if (r17 & 8) return u17.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), N4 = r17 & 32 ? { preventScroll: true } : {}, m12 = 0, c15 = u17.length, s19;
  do {
    if (m12 >= c15 || m12 + c15 <= 0) return 0;
    let i19 = M7 + m12;
    if (r17 & 16) i19 = (i19 + c15) % c15;
    else {
      if (i19 < 0) return 3;
      if (i19 >= c15) return 1;
    }
    s19 = u17[i19], s19 == null || s19.focus(N4), m12 += o22;
  } while (s19 !== e3(s19));
  return r17 & 6 && P5(s19) && s19.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t8() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i11() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n11() {
  return t8() || i11();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react14 = __toESM(require_react(), 1);
function i12(t17, e14, o22, n18) {
  let u17 = s9(o22);
  (0, import_react14.useEffect)(() => {
    if (!t17) return;
    function r17(m12) {
      u17.current(m12);
    }
    return document.addEventListener(e14, r17, n18), () => document.removeEventListener(e14, r17, n18);
  }, [t17, e14, n18]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react15 = __toESM(require_react(), 1);
function s12(t17, e14, o22, n18) {
  let i19 = s9(o22);
  (0, import_react15.useEffect)(() => {
    if (!t17) return;
    function r17(d18) {
      i19.current(d18);
    }
    return window.addEventListener(e14, r17, n18), () => window.removeEventListener(e14, r17, n18);
  }, [t17, e14, n18]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var C5 = 30;
function k8(o22, f15, h9) {
  let m12 = s9(h9), s19 = (0, import_react16.useCallback)(function(e14, c15) {
    if (e14.defaultPrevented) return;
    let r17 = c15(e14);
    if (r17 === null || !r17.getRootNode().contains(r17) || !r17.isConnected) return;
    let M7 = (function u17(n18) {
      return typeof n18 == "function" ? u17(n18()) : Array.isArray(n18) || n18 instanceof Set ? n18 : [n18];
    })(f15);
    for (let u17 of M7) if (u17 !== null && (u17.contains(r17) || e14.composed && e14.composedPath().includes(u17))) return;
    return !H3(r17, I4.Loose) && r17.tabIndex !== -1 && e14.preventDefault(), m12.current(e14, r17);
  }, [m12, f15]), i19 = (0, import_react16.useRef)(null);
  i12(o22, "pointerdown", (t17) => {
    var e14, c15;
    n11() || (i19.current = ((c15 = (e14 = t17.composedPath) == null ? void 0 : e14.call(t17)) == null ? void 0 : c15[0]) || t17.target);
  }, true), i12(o22, "pointerup", (t17) => {
    if (n11() || !i19.current) return;
    let e14 = i19.current;
    return i19.current = null, s19(t17, () => e14);
  }, true);
  let l14 = (0, import_react16.useRef)({ x: 0, y: 0 });
  i12(o22, "touchstart", (t17) => {
    l14.current.x = t17.touches[0].clientX, l14.current.y = t17.touches[0].clientY;
  }, true), i12(o22, "touchend", (t17) => {
    let e14 = { x: t17.changedTouches[0].clientX, y: t17.changedTouches[0].clientY };
    if (!(Math.abs(e14.x - l14.current.x) >= C5 || Math.abs(e14.y - l14.current.y) >= C5)) return s19(t17, () => i7(t17.target) ? t17.target : null);
  }, true), s12(o22, "blur", (t17) => s19(t17, () => u6(window.document.activeElement) ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react17 = __toESM(require_react(), 1);
function u12(...e14) {
  return (0, import_react17.useMemo)(() => l4(...e14), [...e14]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react18 = __toESM(require_react(), 1);
function E7(n18, e14, a22, t17) {
  let i19 = s9(a22);
  (0, import_react18.useEffect)(() => {
    n18 = n18 != null ? n18 : window;
    function r17(o22) {
      i19.current(o22);
    }
    return n18.addEventListener(e14, r17, t17), () => n18.removeEventListener(e14, r17, t17);
  }, [n18, e14, t17]);
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react19 = __toESM(require_react(), 1);
function o13(t17) {
  return (0, import_react19.useSyncExternalStore)(t17.subscribe, t17.getSnapshot, t17.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a16(o22, r17) {
  let t17 = o22(), n18 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t17;
  }, subscribe(e14) {
    return n18.add(e14), () => n18.delete(e14);
  }, dispatch(e14, ...s19) {
    let i19 = r17[e14].call(t17, ...s19);
    i19 && (t17 = i19, n18.forEach((c15) => c15()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d13() {
  let r17;
  return { before({ doc: e14 }) {
    var l14;
    let o22 = e14.documentElement, t17 = (l14 = e14.defaultView) != null ? l14 : window;
    r17 = Math.max(0, t17.innerWidth - o22.clientWidth);
  }, after({ doc: e14, d: o22 }) {
    let t17 = e14.documentElement, l14 = Math.max(0, t17.clientWidth - t17.offsetWidth), n18 = Math.max(0, r17 - l14);
    o22.style(t17, "paddingRight", `${n18}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function w5() {
  return t8() ? { before({ doc: o22, d: r17, meta: m12 }) {
    function a22(s19) {
      for (let l14 of m12().containers) for (let c15 of l14()) if (c15.contains(s19)) return true;
      return false;
    }
    r17.microTask(() => {
      var c15;
      if (window.getComputedStyle(o22.documentElement).scrollBehavior !== "auto") {
        let t17 = o5();
        t17.style(o22.documentElement, "scrollBehavior", "auto"), r17.add(() => r17.microTask(() => t17.dispose()));
      }
      let s19 = (c15 = window.scrollY) != null ? c15 : window.pageYOffset, l14 = null;
      r17.addEventListener(o22, "click", (t17) => {
        if (i7(t17.target)) try {
          let e14 = t17.target.closest("a");
          if (!e14) return;
          let { hash: n18 } = new URL(e14.href), f15 = o22.querySelector(n18);
          i7(f15) && !a22(f15) && (l14 = f15);
        } catch {
        }
      }, true), r17.group((t17) => {
        r17.addEventListener(o22, "touchstart", (e14) => {
          if (t17.dispose(), i7(e14.target) && r8(e14.target)) if (a22(e14.target)) {
            let n18 = e14.target;
            for (; n18.parentElement && a22(n18.parentElement); ) n18 = n18.parentElement;
            t17.style(n18, "overscrollBehavior", "contain");
          } else t17.style(e14.target, "touchAction", "none");
        });
      }), r17.addEventListener(o22, "touchmove", (t17) => {
        if (i7(t17.target)) {
          if (l6(t17.target)) return;
          if (a22(t17.target)) {
            let e14 = t17.target;
            for (; e14.parentElement && e14.dataset.headlessuiPortal !== "" && !(e14.scrollHeight > e14.clientHeight || e14.scrollWidth > e14.clientWidth); ) e14 = e14.parentElement;
            e14.dataset.headlessuiPortal === "" && t17.preventDefault();
          } else t17.preventDefault();
        }
      }, { passive: false }), r17.add(() => {
        var e14;
        let t17 = (e14 = window.scrollY) != null ? e14 : window.pageYOffset;
        s19 !== t17 && window.scrollTo(0, s19), l14 && l14.isConnected && (l14.scrollIntoView({ block: "nearest" }), l14 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r11() {
  return { before({ doc: e14, d: o22 }) {
    o22.style(e14.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function r12(e14) {
  let o22 = {};
  for (let t17 of e14) Object.assign(o22, t17(o22));
  return o22;
}
var c6 = a16(() => /* @__PURE__ */ new Map(), { PUSH(e14, o22) {
  var n18;
  let t17 = (n18 = this.get(e14)) != null ? n18 : { doc: e14, count: 0, d: o5(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return t17.count++, t17.meta.add(o22), t17.computedMeta = r12(t17.meta), this.set(e14, t17), this;
}, POP(e14, o22) {
  let t17 = this.get(e14);
  return t17 && (t17.count--, t17.meta.delete(o22), t17.computedMeta = r12(t17.meta)), this;
}, SCROLL_PREVENT(e14) {
  let o22 = { doc: e14.doc, d: e14.d, meta() {
    return e14.computedMeta;
  } }, t17 = [w5(), d13(), r11()];
  t17.forEach(({ before: n18 }) => n18 == null ? void 0 : n18(o22)), t17.forEach(({ after: n18 }) => n18 == null ? void 0 : n18(o22));
}, SCROLL_ALLOW({ d: e14 }) {
  e14.dispose();
}, TEARDOWN({ doc: e14 }) {
  this.delete(e14);
} });
c6.subscribe(() => {
  let e14 = c6.getSnapshot(), o22 = /* @__PURE__ */ new Map();
  for (let [t17] of e14) o22.set(t17, t17.documentElement.style.overflow);
  for (let t17 of e14.values()) {
    let n18 = o22.get(t17.doc) === "hidden", a22 = t17.count !== 0;
    (a22 && !n18 || !a22 && n18) && c6.dispatch(t17.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t17), t17.count === 0 && c6.dispatch("TEARDOWN", t17);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a17(r17, e14, n18 = () => ({ containers: [] })) {
  let f15 = o13(c6), o22 = e14 ? f15.get(e14) : void 0, i19 = o22 ? o22.count > 0 : false;
  return n4(() => {
    if (!(!e14 || !r17)) return c6.dispatch("PUSH", e14, n18), () => c6.dispatch("POP", e14, n18);
  }, [r17, e14]), i19;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f8(e14, c15, n18 = () => [document.body]) {
  let r17 = I3(e14, "scroll-lock");
  a17(r17, c15, (t17) => {
    var o22;
    return { containers: [...(o22 = t17.containers) != null ? o22 : [], n18] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react21 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react20 = __toESM(require_react(), 1);
function c7(u17 = 0) {
  let [r17, a22] = (0, import_react20.useState)(u17), g4 = (0, import_react20.useCallback)((e14) => a22(e14), []), s19 = (0, import_react20.useCallback)((e14) => a22((l14) => l14 | e14), []), m12 = (0, import_react20.useCallback)((e14) => (r17 & e14) === e14, [r17]), n18 = (0, import_react20.useCallback)((e14) => a22((l14) => l14 & ~e14), []), F5 = (0, import_react20.useCallback)((e14) => a22((l14) => l14 ^ e14), []);
  return { flags: r17, setFlag: g4, addFlag: s19, hasFlag: m12, removeFlag: n18, toggleFlag: F5 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T8;
var S8;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T8 = process == null ? void 0 : process.env) == null ? void 0 : T8["NODE_ENV"]) === "test" && typeof ((S8 = Element == null ? void 0 : Element.prototype) == null ? void 0 : S8.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var A5 = ((i19) => (i19[i19.None = 0] = "None", i19[i19.Closed = 1] = "Closed", i19[i19.Enter = 2] = "Enter", i19[i19.Leave = 4] = "Leave", i19))(A5 || {});
function x4(e14) {
  let r17 = {};
  for (let t17 in e14) e14[t17] === true && (r17[`data-${t17}`] = "");
  return r17;
}
function N2(e14, r17, t17, n18) {
  let [i19, a22] = (0, import_react21.useState)(t17), { hasFlag: s19, addFlag: o22, removeFlag: l14 } = c7(e14 && i19 ? 3 : 0), u17 = (0, import_react21.useRef)(false), f15 = (0, import_react21.useRef)(false), E9 = p4();
  return n4(() => {
    var d18;
    if (e14) {
      if (t17 && a22(true), !r17) {
        t17 && o22(3);
        return;
      }
      return (d18 = n18 == null ? void 0 : n18.start) == null || d18.call(n18, t17), C6(r17, { inFlight: u17, prepare() {
        f15.current ? f15.current = false : f15.current = u17.current, u17.current = true, !f15.current && (t17 ? (o22(3), l14(4)) : (o22(4), l14(2)));
      }, run() {
        f15.current ? t17 ? (l14(3), o22(4)) : (l14(4), o22(3)) : t17 ? l14(1) : o22(1);
      }, done() {
        var p9;
        f15.current && D5(r17) || (u17.current = false, l14(7), t17 || a22(false), (p9 = n18 == null ? void 0 : n18.end) == null || p9.call(n18, t17));
      } });
    }
  }, [e14, t17, r17, E9]), e14 ? [i19, { closed: s19(1), enter: s19(2), leave: s19(4), transition: s19(2) || s19(4) }] : [t17, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C6(e14, { prepare: r17, run: t17, done: n18, inFlight: i19 }) {
  let a22 = o5();
  return j4(e14, { prepare: r17, inFlight: i19 }), a22.nextFrame(() => {
    t17(), a22.requestAnimationFrame(() => {
      a22.add(M3(e14, n18));
    });
  }), a22.dispose;
}
function M3(e14, r17) {
  var a22, s19;
  let t17 = o5();
  if (!e14) return t17.dispose;
  let n18 = false;
  t17.add(() => {
    n18 = true;
  });
  let i19 = (s19 = (a22 = e14.getAnimations) == null ? void 0 : a22.call(e14).filter((o22) => o22 instanceof CSSTransition)) != null ? s19 : [];
  return i19.length === 0 ? (r17(), t17.dispose) : (Promise.allSettled(i19.map((o22) => o22.finished)).then(() => {
    n18 || r17();
  }), t17.dispose);
}
function j4(e14, { inFlight: r17, prepare: t17 }) {
  if (r17 != null && r17.current) {
    t17();
    return;
  }
  let n18 = e14.style.transition;
  e14.style.transition = "none", t17(), e14.offsetHeight, e14.style.transition = n18;
}
function D5(e14) {
  var t17, n18;
  return ((n18 = (t17 = e14.getAnimations) == null ? void 0 : t17.call(e14)) != null ? n18 : []).some((i19) => i19 instanceof CSSTransition && i19.playState !== "finished");
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react22 = __toESM(require_react(), 1);
function m9(u17, t17) {
  let e14 = (0, import_react22.useRef)([]), r17 = o7(u17);
  (0, import_react22.useEffect)(() => {
    let o22 = [...e14.current];
    for (let [a22, l14] of t17.entries()) if (e14.current[a22] !== l14) {
      let n18 = r17(t17, o22);
      return e14.current = t17, n18;
    }
  }, [r17, ...t17]);
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react23 = __toESM(require_react(), 1);
var n12 = (0, import_react23.createContext)(null);
n12.displayName = "OpenClosedContext";
var i13 = ((e14) => (e14[e14.Open = 1] = "Open", e14[e14.Closed = 2] = "Closed", e14[e14.Closing = 4] = "Closing", e14[e14.Opening = 8] = "Opening", e14))(i13 || {});
function u13() {
  return (0, import_react23.useContext)(n12);
}
function c9({ value: o22, children: t17 }) {
  return import_react23.default.createElement(n12.Provider, { value: o22 }, t17);
}
function s14({ children: o22 }) {
  return import_react23.default.createElement(n12.Provider, { value: null }, o22);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t10(n18) {
  function e14() {
    document.readyState !== "loading" && (n18(), document.removeEventListener("DOMContentLoaded", e14));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e14), e14());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var n13 = [];
t10(() => {
  function e14(t17) {
    if (!i7(t17.target) || t17.target === document.body || n13[0] === t17.target) return;
    let r17 = t17.target;
    r17 = r17.closest(E5), n13.unshift(r17 != null ? r17 : t17.target), n13 = n13.filter((o22) => o22 != null && o22.isConnected), n13.splice(10);
  }
  window.addEventListener("click", e14, { capture: true }), window.addEventListener("mousedown", e14, { capture: true }), window.addEventListener("focus", e14, { capture: true }), document.body.addEventListener("click", e14, { capture: true }), document.body.addEventListener("mousedown", e14, { capture: true }), document.body.addEventListener("focus", e14, { capture: true });
});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react24 = __toESM(require_react(), 1);
function c10(t17) {
  let r17 = o7(t17), e14 = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => (e14.current = false, () => {
    e14.current = true, t3(() => {
      e14.current && r17();
    });
  }), [r17]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t11 = __toESM(require_react(), 1);
function s15() {
  let r17 = typeof document == "undefined";
  return "useSyncExternalStore" in t11 ? ((o22) => o22.useSyncExternalStore)(t11)(() => () => {
  }, () => false, () => !r17) : false;
}
function l10() {
  let r17 = s15(), [e14, n18] = t11.useState(s7.isHandoffComplete);
  return e14 && s7.isHandoffComplete === false && n18(false), t11.useEffect(() => {
    e14 !== true && n18(true);
  }, [e14]), t11.useEffect(() => s7.handoff(), []), r17 ? false : e14;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react25 = __toESM(require_react(), 1);
var e7 = (0, import_react25.createContext)(false);
function a18() {
  return (0, import_react25.useContext)(e7);
}
function l11(o22) {
  return import_react25.default.createElement(e7.Provider, { value: o22.force }, o22.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function j5(e14) {
  let o22 = a18(), l14 = (0, import_react26.useContext)(c12), [r17, p9] = (0, import_react26.useState)(() => {
    var s19;
    if (!o22 && l14 !== null) return (s19 = l14.current) != null ? s19 : null;
    if (s7.isServer) return null;
    let t17 = e14 == null ? void 0 : e14.getElementById("headlessui-portal-root");
    if (t17) return t17;
    if (e14 === null) return null;
    let n18 = e14.createElement("div");
    return n18.setAttribute("id", "headlessui-portal-root"), e14.body.appendChild(n18);
  });
  return (0, import_react26.useEffect)(() => {
    r17 !== null && (e14 != null && e14.body.contains(r17) || e14 == null || e14.body.appendChild(r17));
  }, [r17, e14]), (0, import_react26.useEffect)(() => {
    o22 || l14 !== null && p9(l14.current);
  }, [l14, p9, o22]), r17;
}
var _5 = import_react26.Fragment;
var I5 = Y(function(o22, l14) {
  let { ownerDocument: r17 = null, ...p9 } = o22, t17 = (0, import_react26.useRef)(null), n18 = y4(T3((a22) => {
    t17.current = a22;
  }), l14), s19 = u12(t17.current), C8 = r17 != null ? r17 : s19, u17 = j5(C8), y9 = (0, import_react26.useContext)(m10), g4 = p4(), v5 = l10(), M7 = K();
  return c10(() => {
    var a22;
    u17 && u17.childNodes.length <= 0 && ((a22 = u17.parentElement) == null || a22.removeChild(u17));
  }), !u17 || !v5 ? null : (0, import_react_dom.createPortal)(import_react26.default.createElement("div", { "data-headlessui-portal": "", ref: (a22) => {
    g4.dispose(), y9 && a22 && g4.add(y9.register(a22));
  } }, M7({ ourProps: { ref: n18 }, theirProps: p9, slot: {}, defaultTag: _5, name: "Portal" })), u17);
});
function D6(e14, o22) {
  let l14 = y4(o22), { enabled: r17 = true, ownerDocument: p9, ...t17 } = e14, n18 = K();
  return r17 ? import_react26.default.createElement(I5, { ...t17, ownerDocument: p9, ref: l14 }) : n18({ ourProps: { ref: l14 }, theirProps: t17, slot: {}, defaultTag: _5, name: "Portal" });
}
var J2 = import_react26.Fragment;
var c12 = (0, import_react26.createContext)(null);
function X(e14, o22) {
  let { target: l14, ...r17 } = e14, t17 = { ref: y4(o22) }, n18 = K();
  return import_react26.default.createElement(c12.Provider, { value: l14 }, n18({ ourProps: t17, theirProps: r17, defaultTag: J2, name: "Popover.Group" }));
}
var m10 = (0, import_react26.createContext)(null);
function oe() {
  let e14 = (0, import_react26.useContext)(m10), o22 = (0, import_react26.useRef)([]), l14 = o7((t17) => (o22.current.push(t17), e14 && e14.register(t17), () => r17(t17))), r17 = o7((t17) => {
    let n18 = o22.current.indexOf(t17);
    n18 !== -1 && o22.current.splice(n18, 1), e14 && e14.unregister(t17);
  }), p9 = (0, import_react26.useMemo)(() => ({ register: l14, unregister: r17, portals: o22 }), [l14, r17, o22]);
  return [o22, (0, import_react26.useMemo)(() => function({ children: n18 }) {
    return import_react26.default.createElement(m10.Provider, { value: p9 }, n18);
  }, [p9])];
}
var k9 = Y(D6);
var B3 = Y(X);
var le = Object.assign(k9, { Group: B3 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a19(o22, r17 = typeof document != "undefined" ? document.defaultView : null, t17) {
  let n18 = I3(o22, "escape");
  E7(r17, "keydown", (e14) => {
    n18 && (e14.defaultPrevented || e14.key === o9.Escape && t17(e14));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react27 = __toESM(require_react(), 1);
function f11() {
  var t17;
  let [e14] = (0, import_react27.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o22, c15] = (0, import_react27.useState)((t17 = e14 == null ? void 0 : e14.matches) != null ? t17 : false);
  return n4(() => {
    if (!e14) return;
    function n18(r17) {
      c15(r17.matches);
    }
    return e14.addEventListener("change", n18), () => e14.removeEventListener("change", n18);
  }, [e14]), o22;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react28 = __toESM(require_react(), 1);
function S9({ defaultContainers: l14 = [], portals: n18, mainTreeNode: o22 } = {}) {
  let c15 = o7(() => {
    var r17, u17;
    let i19 = l4(o22), t17 = [];
    for (let e14 of l14) e14 !== null && (t7(e14) ? t17.push(e14) : "current" in e14 && t7(e14.current) && t17.push(e14.current));
    if (n18 != null && n18.current) for (let e14 of n18.current) t17.push(e14);
    for (let e14 of (r17 = i19 == null ? void 0 : i19.querySelectorAll("html > *, body > *")) != null ? r17 : []) e14 !== document.body && e14 !== document.head && t7(e14) && e14.id !== "headlessui-portal-root" && (o22 && (e14.contains(o22) || e14.contains((u17 = o22 == null ? void 0 : o22.getRootNode()) == null ? void 0 : u17.host)) || t17.some((E9) => e14.contains(E9)) || t17.push(e14));
    return t17;
  });
  return { resolveContainers: c15, contains: o7((i19) => c15().some((t17) => t17.contains(i19))) };
}
var d15 = (0, import_react28.createContext)(null);
function j6({ children: l14, node: n18 }) {
  let [o22, c15] = (0, import_react28.useState)(null), i19 = x6(n18 != null ? n18 : o22);
  return import_react28.default.createElement(d15.Provider, { value: i19 }, l14, i19 === null && import_react28.default.createElement(f4, { features: s10.Hidden, ref: (t17) => {
    var r17, u17;
    if (t17) {
      for (let e14 of (u17 = (r17 = l4(t17)) == null ? void 0 : r17.querySelectorAll("html > *, body > *")) != null ? u17 : []) if (e14 !== document.body && e14 !== document.head && t7(e14) && e14 != null && e14.contains(t17)) {
        c15(e14);
        break;
      }
    }
  } }));
}
function x6(l14 = null) {
  var n18;
  return (n18 = (0, import_react28.useContext)(d15)) != null ? n18 : l14;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react29 = __toESM(require_react(), 1);
function f12() {
  let e14 = (0, import_react29.useRef)(false);
  return n4(() => (e14.current = true, () => {
    e14.current = false;
  }), []), e14;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react30 = __toESM(require_react(), 1);
var a20 = ((r17) => (r17[r17.Forwards = 0] = "Forwards", r17[r17.Backwards = 1] = "Backwards", r17))(a20 || {});
function u15() {
  let e14 = (0, import_react30.useRef)(0);
  return s12(true, "keydown", (r17) => {
    r17.key === "Tab" && (e14.current = r17.shiftKey ? 1 : 0);
  }, true), e14;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function x7(o22) {
  if (!o22) return /* @__PURE__ */ new Set();
  if (typeof o22 == "function") return new Set(o22());
  let t17 = /* @__PURE__ */ new Set();
  for (let e14 of o22.current) t7(e14.current) && t17.add(e14.current);
  return t17;
}
var $ = "div";
var G3 = ((n18) => (n18[n18.None = 0] = "None", n18[n18.InitialFocus = 1] = "InitialFocus", n18[n18.TabLock = 2] = "TabLock", n18[n18.FocusLock = 4] = "FocusLock", n18[n18.RestoreFocus = 8] = "RestoreFocus", n18[n18.AutoFocus = 16] = "AutoFocus", n18))(G3 || {});
function w6(o22, t17) {
  let e14 = (0, import_react31.useRef)(null), r17 = y4(e14, t17), { initialFocus: u17, initialFocusFallback: a22, containers: n18, features: s19 = 15, ...f15 } = o22;
  l10() || (s19 = 0);
  let l14 = u12(e14.current);
  re(s19, { ownerDocument: l14 });
  let T9 = ne(s19, { ownerDocument: l14, container: e14, initialFocus: u17, initialFocusFallback: a22 });
  oe2(s19, { ownerDocument: l14, container: e14, containers: n18, previousActiveElement: T9 });
  let g4 = u15(), A7 = o7((c15) => {
    if (!n7(e14.current)) return;
    let E9 = e14.current;
    ((V4) => V4())(() => {
      u5(g4.current, { [a20.Forwards]: () => {
        v4(E9, T6.First, { skipElements: [c15.relatedTarget, a22] });
      }, [a20.Backwards]: () => {
        v4(E9, T6.Last, { skipElements: [c15.relatedTarget, a22] });
      } });
    });
  }), v5 = I3(!!(s19 & 2), "focus-trap#tab-lock"), N4 = p4(), b11 = (0, import_react31.useRef)(false), k12 = { ref: r17, onKeyDown(c15) {
    c15.key == "Tab" && (b11.current = true, N4.requestAnimationFrame(() => {
      b11.current = false;
    }));
  }, onBlur(c15) {
    if (!(s19 & 4)) return;
    let E9 = x7(n18);
    n7(e14.current) && E9.add(e14.current);
    let L5 = c15.relatedTarget;
    i7(L5) && L5.dataset.headlessuiFocusGuard !== "true" && (I6(E9, L5) || (b11.current ? v4(e14.current, u5(g4.current, { [a20.Forwards]: () => T6.Next, [a20.Backwards]: () => T6.Previous }) | T6.WrapAround, { relativeTo: c15.target }) : i7(c15.target) && w4(c15.target)));
  } }, B5 = K();
  return import_react31.default.createElement(import_react31.default.Fragment, null, v5 && import_react31.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A7, features: s10.Focusable }), B5({ ourProps: k12, theirProps: f15, defaultTag: $, name: "FocusTrap" }), v5 && import_react31.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A7, features: s10.Focusable }));
}
var ee = Y(w6);
var ge = Object.assign(ee, { features: G3 });
function te(o22 = true) {
  let t17 = (0, import_react31.useRef)(n13.slice());
  return m9(([e14], [r17]) => {
    r17 === true && e14 === false && t3(() => {
      t17.current.splice(0);
    }), r17 === false && e14 === true && (t17.current = n13.slice());
  }, [o22, n13, t17]), o7(() => {
    var e14;
    return (e14 = t17.current.find((r17) => r17 != null && r17.isConnected)) != null ? e14 : null;
  });
}
function re(o22, { ownerDocument: t17 }) {
  let e14 = !!(o22 & 8), r17 = te(e14);
  m9(() => {
    e14 || d10(t17 == null ? void 0 : t17.body) && w4(r17());
  }, [e14]), c10(() => {
    e14 && w4(r17());
  });
}
function ne(o22, { ownerDocument: t17, container: e14, initialFocus: r17, initialFocusFallback: u17 }) {
  let a22 = (0, import_react31.useRef)(null), n18 = I3(!!(o22 & 1), "focus-trap#initial-focus"), s19 = f12();
  return m9(() => {
    if (o22 === 0) return;
    if (!n18) {
      u17 != null && u17.current && w4(u17.current);
      return;
    }
    let f15 = e14.current;
    f15 && t3(() => {
      if (!s19.current) return;
      let l14 = t17 == null ? void 0 : t17.activeElement;
      if (r17 != null && r17.current) {
        if ((r17 == null ? void 0 : r17.current) === l14) {
          a22.current = l14;
          return;
        }
      } else if (f15.contains(l14)) {
        a22.current = l14;
        return;
      }
      if (r17 != null && r17.current) w4(r17.current);
      else {
        if (o22 & 16) {
          if (v4(f15, T6.First | T6.AutoFocus) !== A4.Error) return;
        } else if (v4(f15, T6.First) !== A4.Error) return;
        if (u17 != null && u17.current && (w4(u17.current), (t17 == null ? void 0 : t17.activeElement) === u17.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a22.current = t17 == null ? void 0 : t17.activeElement;
    });
  }, [u17, n18, o22]), a22;
}
function oe2(o22, { ownerDocument: t17, container: e14, containers: r17, previousActiveElement: u17 }) {
  let a22 = f12(), n18 = !!(o22 & 4);
  E7(t17 == null ? void 0 : t17.defaultView, "focus", (s19) => {
    if (!n18 || !a22.current) return;
    let f15 = x7(r17);
    n7(e14.current) && f15.add(e14.current);
    let l14 = u17.current;
    if (!l14) return;
    let T9 = s19.target;
    n7(T9) ? I6(f15, T9) ? (u17.current = T9, w4(T9)) : (s19.preventDefault(), s19.stopPropagation(), w4(l14)) : w4(u17.current);
  }, true);
}
function I6(o22, t17) {
  for (let e14 of o22) if (e14.contains(t17)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react32 = __toESM(require_react(), 1);
function ue(e14) {
  var t17;
  return !!(e14.enter || e14.enterFrom || e14.enterTo || e14.leave || e14.leaveFrom || e14.leaveTo) || !b2((t17 = e14.as) != null ? t17 : de2) || import_react32.default.Children.count(e14.children) === 1;
}
var V3 = (0, import_react32.createContext)(null);
V3.displayName = "TransitionContext";
var De = ((n18) => (n18.Visible = "visible", n18.Hidden = "hidden", n18))(De || {});
function He() {
  let e14 = (0, import_react32.useContext)(V3);
  if (e14 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e14;
}
function Ae() {
  let e14 = (0, import_react32.useContext)(w7);
  if (e14 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e14;
}
var w7 = (0, import_react32.createContext)(null);
w7.displayName = "NestingContext";
function M5(e14) {
  return "children" in e14 ? M5(e14.children) : e14.current.filter(({ el: t17 }) => t17.current !== null).filter(({ state: t17 }) => t17 === "visible").length > 0;
}
function Te(e14, t17) {
  let n18 = s9(e14), l14 = (0, import_react32.useRef)([]), S10 = f12(), R5 = p4(), d18 = o7((o22, i19 = C2.Hidden) => {
    let a22 = l14.current.findIndex(({ el: s19 }) => s19 === o22);
    a22 !== -1 && (u5(i19, { [C2.Unmount]() {
      l14.current.splice(a22, 1);
    }, [C2.Hidden]() {
      l14.current[a22].state = "hidden";
    } }), R5.microTask(() => {
      var s19;
      !M5(l14) && S10.current && ((s19 = n18.current) == null || s19.call(n18));
    }));
  }), y9 = o7((o22) => {
    let i19 = l14.current.find(({ el: a22 }) => a22 === o22);
    return i19 ? i19.state !== "visible" && (i19.state = "visible") : l14.current.push({ el: o22, state: "visible" }), () => d18(o22, C2.Unmount);
  }), C8 = (0, import_react32.useRef)([]), p9 = (0, import_react32.useRef)(Promise.resolve()), h9 = (0, import_react32.useRef)({ enter: [], leave: [] }), g4 = o7((o22, i19, a22) => {
    C8.current.splice(0), t17 && (t17.chains.current[i19] = t17.chains.current[i19].filter(([s19]) => s19 !== o22)), t17 == null || t17.chains.current[i19].push([o22, new Promise((s19) => {
      C8.current.push(s19);
    })]), t17 == null || t17.chains.current[i19].push([o22, new Promise((s19) => {
      Promise.all(h9.current[i19].map(([r17, f15]) => f15)).then(() => s19());
    })]), i19 === "enter" ? p9.current = p9.current.then(() => t17 == null ? void 0 : t17.wait.current).then(() => a22(i19)) : a22(i19);
  }), v5 = o7((o22, i19, a22) => {
    Promise.all(h9.current[i19].splice(0).map(([s19, r17]) => r17)).then(() => {
      var s19;
      (s19 = C8.current.shift()) == null || s19();
    }).then(() => a22(i19));
  });
  return (0, import_react32.useMemo)(() => ({ children: l14, register: y9, unregister: d18, onStart: g4, onStop: v5, wait: p9, chains: h9 }), [y9, d18, l14, g4, v5, h9, p9]);
}
var de2 = import_react32.Fragment;
var fe = A3.RenderStrategy;
function Fe(e14, t17) {
  var ee2, te3;
  let { transition: n18 = true, beforeEnter: l14, afterEnter: S10, beforeLeave: R5, afterLeave: d18, enter: y9, enterFrom: C8, enterTo: p9, entered: h9, leave: g4, leaveFrom: v5, leaveTo: o22, ...i19 } = e14, [a22, s19] = (0, import_react32.useState)(null), r17 = (0, import_react32.useRef)(null), f15 = ue(e14), U3 = y4(...f15 ? [r17, t17, s19] : t17 === null ? [] : [t17]), H5 = (ee2 = i19.unmount) == null || ee2 ? C2.Unmount : C2.Hidden, { show: u17, appear: z2, initial: K3 } = He(), [m12, j8] = (0, import_react32.useState)(u17 ? "visible" : "hidden"), Q2 = Ae(), { register: A7, unregister: F5 } = Q2;
  n4(() => A7(r17), [A7, r17]), n4(() => {
    if (H5 === C2.Hidden && r17.current) {
      if (u17 && m12 !== "visible") {
        j8("visible");
        return;
      }
      return u5(m12, { ["hidden"]: () => F5(r17), ["visible"]: () => A7(r17) });
    }
  }, [m12, r17, A7, F5, u17, H5]);
  let G4 = l10();
  n4(() => {
    if (f15 && G4 && m12 === "visible" && r17.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r17, m12, G4, f15]);
  let ce2 = K3 && !z2, Y2 = z2 && u17 && K3, B5 = (0, import_react32.useRef)(false), I7 = Te(() => {
    B5.current || (j8("hidden"), F5(r17));
  }, Q2), Z = o7((W) => {
    B5.current = true;
    let L5 = W ? "enter" : "leave";
    I7.onStart(r17, L5, (_6) => {
      _6 === "enter" ? l14 == null || l14() : _6 === "leave" && (R5 == null || R5());
    });
  }), $3 = o7((W) => {
    let L5 = W ? "enter" : "leave";
    B5.current = false, I7.onStop(r17, L5, (_6) => {
      _6 === "enter" ? S10 == null || S10() : _6 === "leave" && (d18 == null || d18());
    }), L5 === "leave" && !M5(I7) && (j8("hidden"), F5(r17));
  });
  (0, import_react32.useEffect)(() => {
    f15 && n18 || (Z(u17), $3(u17));
  }, [u17, f15, n18]);
  let pe2 = /* @__PURE__ */ (() => !(!n18 || !f15 || !G4 || ce2))(), [, T9] = N2(pe2, a22, u17, { start: Z, end: $3 }), Ce = m5({ ref: U3, className: ((te3 = t6(i19.className, Y2 && y9, Y2 && C8, T9.enter && y9, T9.enter && T9.closed && C8, T9.enter && !T9.closed && p9, T9.leave && g4, T9.leave && !T9.closed && v5, T9.leave && T9.closed && o22, !T9.transition && u17 && h9)) == null ? void 0 : te3.trim()) || void 0, ...x4(T9) }), N4 = 0;
  m12 === "visible" && (N4 |= i13.Open), m12 === "hidden" && (N4 |= i13.Closed), u17 && m12 === "hidden" && (N4 |= i13.Opening), !u17 && m12 === "visible" && (N4 |= i13.Closing);
  let he = K();
  return import_react32.default.createElement(w7.Provider, { value: I7 }, import_react32.default.createElement(c9, { value: N4 }, he({ ourProps: Ce, theirProps: i19, defaultTag: de2, features: fe, visible: m12 === "visible", name: "Transition.Child" })));
}
function Ie(e14, t17) {
  let { show: n18, appear: l14 = false, unmount: S10 = true, ...R5 } = e14, d18 = (0, import_react32.useRef)(null), y9 = ue(e14), C8 = y4(...y9 ? [d18, t17] : t17 === null ? [] : [t17]);
  l10();
  let p9 = u13();
  if (n18 === void 0 && p9 !== null && (n18 = (p9 & i13.Open) === i13.Open), n18 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h9, g4] = (0, import_react32.useState)(n18 ? "visible" : "hidden"), v5 = Te(() => {
    n18 || g4("hidden");
  }), [o22, i19] = (0, import_react32.useState)(true), a22 = (0, import_react32.useRef)([n18]);
  n4(() => {
    o22 !== false && a22.current[a22.current.length - 1] !== n18 && (a22.current.push(n18), i19(false));
  }, [a22, n18]);
  let s19 = (0, import_react32.useMemo)(() => ({ show: n18, appear: l14, initial: o22 }), [n18, l14, o22]);
  n4(() => {
    n18 ? g4("visible") : !M5(v5) && d18.current !== null && g4("hidden");
  }, [n18, v5]);
  let r17 = { unmount: S10 }, f15 = o7(() => {
    var u17;
    o22 && i19(false), (u17 = e14.beforeEnter) == null || u17.call(e14);
  }), U3 = o7(() => {
    var u17;
    o22 && i19(false), (u17 = e14.beforeLeave) == null || u17.call(e14);
  }), H5 = K();
  return import_react32.default.createElement(w7.Provider, { value: v5 }, import_react32.default.createElement(V3.Provider, { value: s19 }, H5({ ourProps: { ...r17, as: import_react32.Fragment, children: import_react32.default.createElement(me, { ref: C8, ...r17, ...R5, beforeEnter: f15, beforeLeave: U3 }) }, theirProps: {}, defaultTag: import_react32.Fragment, features: fe, visible: h9 === "visible", name: "Transition" })));
}
function Le(e14, t17) {
  let n18 = (0, import_react32.useContext)(V3) !== null, l14 = u13() !== null;
  return import_react32.default.createElement(import_react32.default.Fragment, null, !n18 && l14 ? import_react32.default.createElement(X2, { ref: t17, ...e14 }) : import_react32.default.createElement(me, { ref: t17, ...e14 }));
}
var X2 = Y(Ie);
var me = Y(Fe);
var Oe = Y(Le);
var Ke = Object.assign(X2, { Child: Oe, Root: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var we = ((o22) => (o22[o22.Open = 0] = "Open", o22[o22.Closed = 1] = "Closed", o22))(we || {});
var Be = ((t17) => (t17[t17.SetTitleId = 0] = "SetTitleId", t17))(Be || {});
var Ue = { [0](e14, t17) {
  return e14.titleId === t17.id ? e14 : { ...e14, titleId: t17.id };
} };
var w8 = (0, import_react33.createContext)(null);
w8.displayName = "DialogContext";
function O6(e14) {
  let t17 = (0, import_react33.useContext)(w8);
  if (t17 === null) {
    let o22 = new Error(`<${e14} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o22, O6), o22;
  }
  return t17;
}
function He2(e14, t17) {
  return u5(t17.type, Ue, e14, t17);
}
var z = Y(function(t17, o22) {
  let a22 = (0, import_react8.useId)(), { id: n18 = `headlessui-dialog-${a22}`, open: i19, onClose: p9, initialFocus: d18, role: s19 = "dialog", autoFocus: f15 = true, __demoMode: u17 = false, unmount: y9 = false, ...S10 } = t17, R5 = (0, import_react33.useRef)(false);
  s19 = (function() {
    return s19 === "dialog" || s19 === "alertdialog" ? s19 : (R5.current || (R5.current = true, console.warn(`Invalid role [${s19}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let g4 = u13();
  i19 === void 0 && g4 !== null && (i19 = (g4 & i13.Open) === i13.Open);
  let T9 = (0, import_react33.useRef)(null), I7 = y4(T9, o22), F5 = u12(T9.current), c15 = i19 ? 0 : 1, [b11, Q2] = (0, import_react33.useReducer)(He2, { titleId: null, descriptionId: null, panelRef: (0, import_react33.createRef)() }), m12 = o7(() => p9(false)), B5 = o7((r17) => Q2({ type: 0, id: r17 })), D7 = l10() ? c15 === 0 : false, [Z, ee2] = oe(), te3 = { get current() {
    var r17;
    return (r17 = b11.panelRef.current) != null ? r17 : T9.current;
  } }, v5 = x6(), { resolveContainers: M7 } = S9({ mainTreeNode: v5, portals: Z, defaultContainers: [te3] }), U3 = g4 !== null ? (g4 & i13.Closing) === i13.Closing : false;
  y6(u17 || U3 ? false : D7, { allowed: o7(() => {
    var r17, W;
    return [(W = (r17 = T9.current) == null ? void 0 : r17.closest("[data-headlessui-portal]")) != null ? W : null];
  }), disallowed: o7(() => {
    var r17;
    return [(r17 = v5 == null ? void 0 : v5.closest("body > *:not(#headlessui-portal-root)")) != null ? r17 : null];
  }) });
  let P6 = x2.get(null);
  n4(() => {
    if (D7) return P6.actions.push(n18), () => P6.actions.pop(n18);
  }, [P6, n18, D7]);
  let H5 = S6(P6, (0, import_react33.useCallback)((r17) => P6.selectors.isTop(r17, n18), [P6, n18]));
  k8(H5, M7, (r17) => {
    r17.preventDefault(), m12();
  }), a19(H5, F5 == null ? void 0 : F5.defaultView, (r17) => {
    r17.preventDefault(), r17.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m12();
  }), f8(u17 || U3 ? false : D7, F5, M7), p7(D7, T9, m12);
  let [oe3, ne3] = H2(), re2 = (0, import_react33.useMemo)(() => [{ dialogState: c15, close: m12, setTitleId: B5, unmount: y9 }, b11], [c15, m12, B5, y9, b11]), N4 = n5({ open: c15 === 0 }), le2 = { ref: I7, id: n18, role: s19, tabIndex: -1, "aria-modal": u17 ? void 0 : c15 === 0 ? true : void 0, "aria-labelledby": b11.titleId, "aria-describedby": oe3, unmount: y9 }, ae = !f11(), E9 = G3.None;
  D7 && !u17 && (E9 |= G3.RestoreFocus, E9 |= G3.TabLock, f15 && (E9 |= G3.AutoFocus), ae && (E9 |= G3.InitialFocus));
  let ie3 = K();
  return import_react33.default.createElement(s14, null, import_react33.default.createElement(l11, { force: true }, import_react33.default.createElement(le, null, import_react33.default.createElement(w8.Provider, { value: re2 }, import_react33.default.createElement(B3, { target: T9 }, import_react33.default.createElement(l11, { force: false }, import_react33.default.createElement(ne3, { slot: N4 }, import_react33.default.createElement(ee2, null, import_react33.default.createElement(ge, { initialFocus: d18, initialFocusFallback: T9, containers: M7, features: E9 }, import_react33.default.createElement(C4, { value: m12 }, ie3({ ourProps: le2, theirProps: S10, slot: N4, defaultTag: Ne, features: We, visible: c15 === 0, name: "Dialog" })))))))))));
});
var Ne = "div";
var We = A3.RenderStrategy | A3.Static;
function $e(e14, t17) {
  let { transition: o22 = false, open: a22, ...n18 } = e14, i19 = u13(), p9 = e14.hasOwnProperty("open") || i19 !== null, d18 = e14.hasOwnProperty("onClose");
  if (!p9 && !d18) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p9) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d18) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i19 && typeof e14.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e14.open}`);
  if (typeof e14.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e14.onClose}`);
  return (a22 !== void 0 || o22) && !n18.static ? import_react33.default.createElement(j6, null, import_react33.default.createElement(Ke, { show: a22, transition: o22, unmount: n18.unmount }, import_react33.default.createElement(z, { ref: t17, ...n18 }))) : import_react33.default.createElement(j6, null, import_react33.default.createElement(z, { ref: t17, open: a22, ...n18 }));
}
var je = "div";
function Ye(e14, t17) {
  let o22 = (0, import_react8.useId)(), { id: a22 = `headlessui-dialog-panel-${o22}`, transition: n18 = false, ...i19 } = e14, [{ dialogState: p9, unmount: d18 }, s19] = O6("Dialog.Panel"), f15 = y4(t17, s19.panelRef), u17 = n5({ open: p9 === 0 }), y9 = o7((I7) => {
    I7.stopPropagation();
  }), S10 = { ref: f15, id: a22, onClick: y9 }, R5 = n18 ? Oe : import_react33.Fragment, g4 = n18 ? { unmount: d18 } : {}, T9 = K();
  return import_react33.default.createElement(R5, { ...g4 }, T9({ ourProps: S10, theirProps: i19, slot: u17, defaultTag: je, name: "Dialog.Panel" }));
}
var Je = "div";
function Ke2(e14, t17) {
  let { transition: o22 = false, ...a22 } = e14, [{ dialogState: n18, unmount: i19 }] = O6("Dialog.Backdrop"), p9 = n5({ open: n18 === 0 }), d18 = { ref: t17, "aria-hidden": true }, s19 = o22 ? Oe : import_react33.Fragment, f15 = o22 ? { unmount: i19 } : {}, u17 = K();
  return import_react33.default.createElement(s19, { ...f15 }, u17({ ourProps: d18, theirProps: a22, slot: p9, defaultTag: Je, name: "Dialog.Backdrop" }));
}
var Xe = "h2";
function Ve(e14, t17) {
  let o22 = (0, import_react8.useId)(), { id: a22 = `headlessui-dialog-title-${o22}`, ...n18 } = e14, [{ dialogState: i19, setTitleId: p9 }] = O6("Dialog.Title"), d18 = y4(t17);
  (0, import_react33.useEffect)(() => (p9(a22), () => p9(null)), [a22, p9]);
  let s19 = n5({ open: i19 === 0 }), f15 = { ref: d18, id: a22 };
  return K()({ ourProps: f15, theirProps: n18, slot: s19, defaultTag: Xe, name: "Dialog.Title" });
}
var qe = Y($e);
var ze = Y(Ye);
var Lt = Y(Ke2);
var Qe = Y(Ve);
var ht = Object.assign(qe, { Panel: ze, Title: Qe, Description: M2 });

// node_modules/@privy-io/react-auth/dist/esm/useSendTransaction-DgBRGWWt.mjs
var import_react35 = __toESM(require_react(), 1);
var u16 = St`
  :root {
     ${(o22) => b9(o22.palette)}
  };
`;
var b9 = (o22) => {
  let n18 = (function(o23) {
    return { "--privy-color-background": o23.background, "--privy-color-background-2": o23.background2, "--privy-color-background-3": o23.background3, "--privy-color-foreground": o23.foreground, "--privy-color-foreground-2": o23.foreground2, "--privy-color-foreground-3": o23.foreground3, "--privy-color-foreground-4": o23.foreground4, "--privy-color-foreground-accent": o23.foregroundAccent, "--privy-color-accent": o23.accent, "--privy-color-accent-light": o23.accentLight, "--privy-color-accent-hover": o23.accentHover, "--privy-color-accent-dark": o23.accentDark, "--privy-color-accent-darkest": o23.accentDarkest, "--privy-color-success": o23.success, "--privy-color-success-dark": o23.successDark, "--privy-color-success-light": o23.successLight, "--privy-color-success-bg": o23.successBg, "--privy-color-error": o23.error, "--privy-color-error-light": o23.errorLight, "--privy-color-error-bg": o23.errorBg, "--privy-color-error-bg-hover": o23.errorBgHover, "--privy-color-warn": o23.warn, "--privy-color-warn-light": o23.warnLight, "--privy-color-warn-bg": o23.warnBg, "--privy-color-warning-dark": o23.warningDark, "--privy-color-error-dark": o23.errorDark, "--privy-color-info-bg": o23.infoBg, "--privy-color-info-bg-hover": o23.infoBgHover, "--privy-color-border-default": o23.borderDefault, "--privy-color-border-hover": o23.borderHover, "--privy-color-border-focus": o23.borderFocus, "--privy-color-border-error": o23.borderError, "--privy-color-border-success": o23.borderSuccess, "--privy-color-border-warning": o23.borderWarning, "--privy-color-border-info": o23.borderInfo, "--privy-color-border-interactive": o23.borderInteractive, "--privy-color-border-interactive-hover": o23.borderInteractiveHover, "--privy-color-background-hover": o23.backgroundHover, "--privy-color-background-clicked": o23.backgroundClicked, "--privy-color-background-disabled": o23.backgroundDisabled, "--privy-color-background-interactive": o23.backgroundInteractive, "--privy-color-background-interactive-hover": o23.backgroundInteractiveHover, "--privy-color-background-interactive-clicked": o23.backgroundInteractiveClicked, "--privy-color-background-interactive-disabled": o23.backgroundInteractiveDisabled, "--privy-color-foreground-hover": o23.foregroundHover, "--privy-color-foreground-clicked": o23.foregroundClicked, "--privy-color-foreground-disabled": o23.foregroundDisabled, "--privy-color-foreground-interactive": o23.foregroundInteractive, "--privy-color-foreground-interactive-hover": o23.foregroundInteractiveHover, "--privy-link-navigation-color": o23.linkNavigationColor, "--privy-link-navigation-decoration": o23.linkNavigationDecoration, "--privy-accent-has-good-contrast": o23.accentHasGoodContrast, "--privy-color-icon-default": o23.iconDefault, "--privy-color-icon-muted": o23.iconMuted, "--privy-color-icon-subtle": o23.iconSubtle, "--privy-color-icon-inverse": o23.iconInverse, "--privy-color-icon-success": o23.iconSuccess, "--privy-color-icon-warning": o23.iconWarning, "--privy-color-icon-error": o23.iconError, "--privy-color-icon-interactive": o23.iconInteractive, "--privy-color-icon-default-hover": o23.iconDefaultHover, "--privy-color-icon-muted-hover": o23.iconMutedHover, "--privy-color-icon-subtle-hover": o23.iconSubtleHover, "--privy-color-icon-default-clicked": o23.iconDefaultClicked, "--privy-color-icon-muted-clicked": o23.iconMutedClicked, "--privy-color-icon-subtle-clicked": o23.iconSubtleClicked, "--privy-color-icon-default-disabled": o23.iconDefaultDisabled, "--privy-color-icon-muted-disabled": o23.iconMutedDisabled, "--privy-color-icon-subtle-disabled": o23.iconSubtleDisabled, "--privy-color-icon-error-hover": o23.iconErrorHover, "--privy-color-icon-interactive-hover": o23.iconInteractiveHover, "--privy-color-icon-error-clicked": o23.iconErrorClicked, "--privy-color-icon-interactive-clicked": o23.iconInteractiveClicked, "--privy-color-icon-muted-disabled-alt": o23.iconMutedDisabledAlt, "--privy-color-icon-subtle-disabled-alt": o23.iconSubtleDisabledAlt, "--privy-border-radius-xs": "6px", "--privy-border-radius-sm": "8px", "--privy-border-radius-md": "12px", "--privy-border-radius-mdlg": "16px", "--privy-border-radius-lg": "24px", "--privy-border-radius-full": "9999px", "--privy-height-modal-full": "620px", "--privy-height-modal-compact": "480px" };
  })(o22);
  return ft`
    ${Object.entries(n18).map((([o23, n19]) => `${o23}: ${n19};`)).join("\n")}
  `;
};
var g3 = gt.div`
  // css normalize only the privy application to avoid conflicts
  // with consuming application
  ${"\n  *,\n  ::before,\n  ::after {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n  }\n\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  font-feature-settings: normal;\n\n  margin: 0;\n  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji';\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    text-decoration: underline dotted;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji';\n    display: inline;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    line-height: inherit;\n    color: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  ::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  :-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  legend {\n    padding: 0;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type='search'] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  blockquote,\n  dl,\n  dd,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  figure,\n  p,\n  pre {\n    margin: 0;\n  }\n\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  legend {\n    padding: 0;\n  }\n\n  ol,\n  ul,\n  menu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  input::placeholder,\n  textarea::placeholder {\n    opacity: 1;\n    color: #9ca3af;\n  }\n\n  button,\n  [role='button'] {\n    cursor: pointer;\n  }\n\n  :disabled {\n    cursor: default;\n  }\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block;\n  }\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  [hidden] {\n    display: none;\n  }\n"}

  // Privy styles
  color: var(--privy-color-foreground-2);

  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--privy-color-foreground-2);
  }

  h4 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--privy-color-foreground);
  }

  p {
    font-size: 13px;
    line-height: 20px;
    color: var(--privy-color-foreground-2);
  }

  button:focus,
  input:focus,
  optgroup:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  button:focus-visible,
  input:focus-visible,
  optgroup:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: none;
    border-color: var(--privy-color-accent-light);
    box-shadow: 0 0 0 3px var(--privy-color-border-focus);
  }

  .mobile-only {
    @media (min-width: 441px) {
      display: none;
    }
  }

  /* Animations */

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
var y7 = ({ children: o22, open: n18, onClick: r17, ...s19 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ke, { show: n18, as: import_react35.default.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ht, { onClose: r17, ...s19, as: h8, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Oe, { as: import_react35.default.Fragment, enterFrom: "entering", leaveTo: "leaving", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f13, { id: "privy-dialog-backdrop", "aria-hidden": "true" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m11, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Oe, { as: import_react35.default.Fragment, enterFrom: "entering", leaveTo: "leaving", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ze, { as: k11, children: o22 }) }) })] }) });
var f13 = gt.div`
  position: fixed;
  inset: 0;

  transition: backdrop-filter 100ms ease;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  &.entering,
  &.leaving {
    backdrop-filter: unset;
    -webkit-backdrop-filter: unset;
  }
`;
var h8 = gt.div`
  position: relative;
  z-index: 999999;
`;
var m11 = gt.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100dvh;
  /* overflow-y: auto allows the browser to scroll the focused input into view
     when the mobile keyboard opens, preventing the keyboard from covering inputs */
  overflow-y: auto;

  @media (max-width: 440px) {
    align-items: flex-end;
  }
`;
var k11 = gt.div`
  // reset some default dialog styles
  padding: 0;
  background: transparent;
  border: none;
  width: 100%;
  pointer-events: auto;

  outline: none;
  display: block;

  /*
   * Normally it is bad to mix media queries like this We are doing
   * this here specifically for animations to avoid weird jank.
   */
  /* Mobile animation is a bottom drawer */
  @media (max-width: 440px) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 200ms ease-in;
    position: sticky;
    bottom: 0;

    &.entering,
    &.leaving {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      transition:
        transform 150ms ease-in 0ms,
        opacity 0ms ease 150ms;
    }
  }

  /* Tablet/Desktop animation is a fade in */
  @media (min-width: 441px) {
    opacity: 1;
    transition: opacity 100ms ease-in;

    &.entering,
    &.leaving {
      opacity: 0;
      transition-delay: 5ms;
    }

    margin: auto;
    width: 360px;
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`;
gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

// node_modules/@privy-io/react-auth/dist/esm/getEmbeddedConnectedWallet-Ba6LFHzY.mjs
import { isHex as e9 } from "viem";
var t13 = Symbol("data-suffix-plugin");
function n15(e14) {
  return e14.find(((e15) => "privy" === e15.walletClientType && "embedded" === e15.connectorType && !e15.imported)) ?? null;
}

// node_modules/x402/dist/esm/chunk-EMSAO3AI.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var config = {
  "84532": {
    usdcAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    usdcName: "USDC"
  },
  "8453": {
    usdcAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    usdcName: "USD Coin"
  },
  "43113": {
    usdcAddress: "0x5425890298aed601595a70AB815c96711a31Bc65",
    usdcName: "USD Coin"
  },
  "43114": {
    usdcAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    usdcName: "USD Coin"
  },
  "4689": {
    usdcAddress: "0xcdf79194c6c285077a58da47641d4dbe51f63542",
    usdcName: "Bridged USDC"
  },
  // solana devnet
  "103": {
    usdcAddress: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
    usdcName: "USDC"
  },
  // solana mainnet
  "101": {
    usdcAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    usdcName: "USDC"
  },
  "1328": {
    usdcAddress: "0x4fcf1784b31630811181f670aea7a7bef803eaed",
    usdcName: "USDC"
  },
  "1329": {
    usdcAddress: "0xe15fc38f6d8c56af07bbcbe3baf5708a2bf42392",
    usdcName: "USDC"
  },
  "137": {
    usdcAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    usdcName: "USD Coin"
  },
  "80002": {
    usdcAddress: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582",
    usdcName: "USDC"
  },
  "3338": {
    usdcAddress: "0xbbA60da06c2c5424f03f7434542280FCAd453d10",
    usdcName: "USDC"
  },
  "2741": {
    usdcAddress: "0x84a71ccd554cc1b02749b35d22f684cc8ec987e1",
    usdcName: "Bridged USDC"
  },
  "11124": {
    usdcAddress: "0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc",
    usdcName: "Bridged USDC"
  },
  "1514": {
    usdcAddress: "0xF1815bd50389c46847f0Bda824eC8da914045D14",
    usdcName: "Bridged USDC"
  },
  "41923": {
    usdcAddress: "0x12a272A581feE5577A5dFa371afEB4b2F3a8C2F8",
    usdcName: "Bridged USDC (Stargate)"
  },
  "324705682": {
    usdcAddress: "0x2e08028E3C4c2356572E096d8EF835cD5C6030bD",
    usdcName: "Bridged USDC (SKALE Bridge)"
  }
};

// node_modules/x402/dist/esm/chunk-K4TZLEOT.mjs
var usdcABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32"
      }
    ],
    name: "AuthorizationCanceled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32"
      }
    ],
    name: "AuthorizationUsed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address"
      }
    ],
    name: "Blacklisted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newBlacklister",
        type: "address"
      }
    ],
    name: "BlacklisterChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newMasterMinter",
        type: "address"
      }
    ],
    name: "MasterMinterChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minterAllowedAmount",
        type: "uint256"
      }
    ],
    name: "MinterConfigured",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldMinter",
        type: "address"
      }
    ],
    name: "MinterRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "PauserChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRescuer",
        type: "address"
      }
    ],
    name: "RescuerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address"
      }
    ],
    name: "UnBlacklisted",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" },
  {
    inputs: [],
    name: "CANCEL_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" }
    ],
    name: "authorizationState",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "blacklister",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "cancelAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "authorizer", type: "address" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "cancelAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "minter", type: "address" },
      { internalType: "uint256", name: "minterAllowedAmount", type: "uint256" }
    ],
    name: "configureMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "currency",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "decrement", type: "uint256" }
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "increment", type: "uint256" }
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "string", name: "tokenName", type: "string" },
      { internalType: "string", name: "tokenSymbol", type: "string" },
      { internalType: "string", name: "tokenCurrency", type: "string" },
      { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
      { internalType: "address", name: "newMasterMinter", type: "address" },
      { internalType: "address", name: "newPauser", type: "address" },
      { internalType: "address", name: "newBlacklister", type: "address" },
      { internalType: "address", name: "newOwner", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "newName", type: "string" }],
    name: "initializeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "lostAndFound", type: "address" }],
    name: "initializeV2_1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accountsToBlacklist",
        type: "address[]"
      },
      { internalType: "string", name: "newSymbol", type: "string" }
    ],
    name: "initializeV2_2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "isBlacklisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "masterMinter",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" }
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "minterAllowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pauser",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "receiveWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "receiveWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "removeMinter",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenContract",
        type: "address"
      },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rescuer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "transferWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "validAfter", type: "uint256" },
      { internalType: "uint256", name: "validBefore", type: "uint256" },
      { internalType: "bytes32", name: "nonce", type: "bytes32" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "transferWithAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "unBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newBlacklister", type: "address" }],
    name: "updateBlacklister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newMasterMinter", type: "address" }],
    name: "updateMasterMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_newPauser", type: "address" }],
    name: "updatePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newRescuer", type: "address" }],
    name: "updateRescuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function"
  }
];

// node_modules/x402/dist/esm/chunk-3EQVFRKV.mjs
import { createPublicClient, createWalletClient, http, publicActions } from "viem";
import {
  baseSepolia,
  avalancheFuji,
  base,
  sei,
  seiTestnet,
  polygon,
  polygonAmoy,
  peaq,
  avalanche,
  iotexTestnet,
  iotex,
  abstract,
  abstractTestnet,
  story,
  eduChain
} from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { eip712WalletActions } from "viem/zksync";

// node_modules/x402/node_modules/@solana/errors/dist/index.browser.mjs
var SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 1;
var SOLANA_ERROR__INVALID_NONCE = 2;
var SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 3;
var SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 4;
var SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 5;
var SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 6;
var SOLANA_ERROR__MALFORMED_BIGINT_STRING = 7;
var SOLANA_ERROR__MALFORMED_NUMBER_STRING = 8;
var SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 9;
var SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR = 10;
var SOLANA_ERROR__JSON_RPC__PARSE_ERROR = -32700;
var SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = -32603;
var SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = -32602;
var SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = -32601;
var SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = -32600;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE = -32019;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY = -32018;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE = -32017;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = -32016;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = -32015;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = -32014;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = -32013;
var SOLANA_ERROR__JSON_RPC__SCAN_ERROR = -32012;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = -32011;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = -32010;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = -32009;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = -32008;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = -32007;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = -32006;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = -32005;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = -32004;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = -32003;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = -32002;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = -32001;
var SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = 28e5;
var SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = 2800001;
var SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = 2800002;
var SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = 2800003;
var SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = 2800004;
var SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = 2800005;
var SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006;
var SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007;
var SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = 2800008;
var SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009;
var SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = 2800010;
var SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS = 2800011;
var SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = 323e4;
var SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300001;
var SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = 3230002;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = 3230003;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230004;
var SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = 361e4;
var SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = 3610001;
var SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = 3610002;
var SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = 3610003;
var SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = 3610004;
var SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = 3610005;
var SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = 3610006;
var SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY = 3610007;
var SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED = 3611e3;
var SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = 3704e3;
var SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001;
var SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = 3704002;
var SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003;
var SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY = 3704004;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = 4128e3;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = 4128001;
var SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = 4128002;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = 4615e3;
var SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = 4615001;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = 4615002;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = 4615003;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = 4615004;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = 4615005;
var SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = 4615006;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = 4615007;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = 4615008;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = 4615009;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = 4615010;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = 4615011;
var SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = 4615012;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = 4615015;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = 4615016;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = 4615017;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = 4615018;
var SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = 4615019;
var SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = 4615020;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = 4615021;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = 4615022;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = 4615023;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 4615024;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025;
var SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = 4615026;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = 4615027;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = 4615028;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = 4615029;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = 4615031;
var SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = 4615032;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = 4615033;
var SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = 4615034;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4615035;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = 4615036;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = 4615037;
var SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = 4615038;
var SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = 4615039;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = 4615041;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = 4615042;
var SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = 4615043;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = 4615044;
var SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = 4615045;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = 4615046;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = 4615047;
var SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = 4615048;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = 4615049;
var SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = 4615050;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = 4615052;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053;
var SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054;
var SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508e3;
var SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = 5508001;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = 5508002;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = 5508005;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008;
var SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009;
var SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = 5508010;
var SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED = 5508011;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__MAXIMUM_LENGTH_EXCEEDED = 5607e3;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__RESTRICTED_ASCII_BODY_CHARACTER_OUT_OF_RANGE = 5607001;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__APPLICATION_DOMAIN_STRING_LENGTH_OUT_OF_RANGE = 5607002;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__INVALID_APPLICATION_DOMAIN_BYTE_LENGTH = 5607003;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_SIGNATURES_MISMATCH = 5607004;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_REQUIRED_SIGNERS_CANNOT_BE_ZERO = 5607005;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__VERSION_NUMBER_NOT_SUPPORTED = 5607006;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_FORMAT_MISMATCH = 5607007;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_LENGTH_MISMATCH = 5607008;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_MUST_BE_NON_EMPTY = 5607009;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_ENVELOPE_SIGNATURES_CANNOT_BE_ZERO = 5607010;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATURES_MISSING = 5607011;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__ENVELOPE_SIGNERS_MISMATCH = 5607012;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__ADDRESSES_CANNOT_SIGN_OFFCHAIN_MESSAGE = 5607013;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__UNEXPECTED_VERSION = 5607014;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATORIES_MUST_BE_SORTED = 5607015;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATORIES_MUST_BE_UNIQUE = 5607016;
var SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATURE_VERIFICATION_FAILURE = 5607017;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663e3;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663001;
var SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = 5663002;
var SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = 5663003;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = 5663004;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663005;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663006;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663007;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663008;
var SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = 5663009;
var SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = 5663010;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = 5663011;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = 5663012;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = 5663013;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = 5663014;
var SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION = 5663015;
var SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES = 5663016;
var SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH = 5663017;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT = 5663018;
var SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT = 5663019;
var SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT = 5663020;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED = 5663021;
var SOLANA_ERROR__TRANSACTION__NONCE_ACCOUNT_CANNOT_BE_IN_LOOKUP_TABLE = 5663022;
var SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = 705e4;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = 7050001;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = 7050002;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = 7050003;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = 7050004;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = 7050005;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = 7050006;
var SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = 7050007;
var SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = 7050008;
var SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = 7050009;
var SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = 7050010;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = 7050011;
var SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = 7050012;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = 7050013;
var SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = 7050014;
var SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = 7050015;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 7050016;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017;
var SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = 7050018;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = 7050019;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021;
var SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = 7050022;
var SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = 7050027;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029;
var SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = 7050030;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = 7050031;
var SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033;
var SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = 7050034;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035;
var SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = 7050036;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN = 7618e3;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE = 7618001;
var SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN = 7618002;
var SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN = 7618003;
var SOLANA_ERROR__INSTRUCTION_PLANS__NON_DIVISIBLE_TRANSACTION_PLANS_NOT_SUPPORTED = 7618004;
var SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_SINGLE_TRANSACTION_PLAN_RESULT_NOT_FOUND = 7618005;
var SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_INSTRUCTION_PLAN = 7618006;
var SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_TRANSACTION_PLAN = 7618007;
var SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_TRANSACTION_PLAN_RESULT = 7618008;
var SOLANA_ERROR__INSTRUCTION_PLANS__EXPECTED_SUCCESSFUL_TRANSACTION_PLAN_RESULT = 7618009;
var SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078e3;
var SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001;
var SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = 8078002;
var SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = 8078003;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006;
var SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = 8078007;
var SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008;
var SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT = 8078009;
var SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT = 8078010;
var SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
var SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = 8078012;
var SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = 8078013;
var SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = 8078014;
var SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT = 8078015;
var SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE = 8078016;
var SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE = 8078017;
var SOLANA_ERROR__CODECS__INVALID_CONSTANT = 8078018;
var SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE = 8078019;
var SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL = 8078020;
var SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES = 8078021;
var SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS = 8078022;
var SOLANA_ERROR__CODECS__EXPECTED_DECODER_TO_CONSUME_ENTIRE_BYTE_ARRAY = 8078023;
var SOLANA_ERROR__RPC__INTEGER_OVERFLOW = 81e5;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = 8100001;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = 8100002;
var SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD = 8100003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN = 819e4;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED = 8190003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT = 8190004;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING = 99e5;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = 9900001;
var SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002;
var SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = 9900003;
var SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED = 9900004;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND = 9900005;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND = 9900006;
var SolanaErrorMessages = {
  [SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND]: "Account not found at address: $address",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT]: "Expected decoded account at address: $address",
  [SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT]: "Failed to decode account data at address: $address",
  [SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND]: "Accounts not found at addresses: $addresses",
  [SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED]: "Unable to find a viable program address bump seed.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS]: "$putativeAddress is not a base58-encoded address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY]: "The `CryptoKey` must be an `Ed25519` public key.",
  [SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE]: "Invalid seeds; point must fall off the Ed25519 curve.",
  [SOLANA_ERROR__ADDRESSES__MALFORMED_PDA]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
  [SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
  [SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
  [SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
  [SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER]: "Program address cannot end with PDA marker.",
  [SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED]: "The network has progressed past the last block for which this transaction could have been committed.",
  [SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY]: "Codec [$codecDescription] cannot decode empty byte arrays.",
  [SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
  [SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH]: "Encoder and decoder must either both be fixed-size or variable-size.",
  [SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
  [SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH]: "Expected a fixed-size codec, got a variable-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
  [SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH]: "Expected a variable-size codec, got a fixed-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
  [SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
  [SOLANA_ERROR__CODECS__INVALID_CONSTANT]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
  [SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
  [SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT]: "Invalid literal union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS]: "Expected [$codecDescription] to have $expected items, got $actual.",
  [SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE]: "Invalid value $value for base $base with alphabet $alphabet.",
  [SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
  [SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
  [SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
  [SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
  [SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
  [SOLANA_ERROR__CODECS__EXPECTED_DECODER_TO_CONSUME_ENTIRE_BYTE_ARRAY]: "This decoder expected a byte array of exactly $expectedLength bytes, but $numExcessBytes unexpected excess bytes remained after decoding. Are you sure that you have chosen the correct decoder for this data?",
  [SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED]: "No random values implementation could be found.",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED]: "instruction requires an uninitialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED]: "instruction tries to borrow reference for an account which is already borrowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "instruction left account with an outstanding borrowed reference",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED]: "program other than the account's owner changed the size of the account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL]: "account data too small for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE]: "instruction expected an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT]: "An account does not have enough lamports to be rent-exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW]: "Program arithmetic overflowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR]: "Failed to serialize or deserialize account data: $encodedData",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS]: "Builtin programs must consume compute units",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH]: "Cross-program invocation call depth too deep",
  [SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED]: "Computational budget exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM]: "custom program error: #$code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX]: "instruction contains duplicate accounts",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC]: "instruction modifications of multiply-passed account differ",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT]: "executable accounts must be rent exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED]: "instruction changed executable accounts data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE]: "instruction changed the balance of an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED]: "instruction changed executable bit of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED]: "instruction modified data of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND]: "instruction spent from the balance of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR]: "generic instruction error",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER]: "Provided owner is not allowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE]: "Account is immutable",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY]: "Incorrect authority provided",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID]: "incorrect program id for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS]: "insufficient funds for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA]: "invalid account data for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER]: "Invalid account owner",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT]: "invalid program argument",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR]: "program returned invalid error code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA]: "invalid instruction data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC]: "Failed to reallocate account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS]: "Provided seeds do not result in a valid address",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED]: "Accounts data allocations exceeded the maximum allowed per transaction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED]: "Max accounts exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED]: "Max instruction trace length exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED]: "Length of the seed is too long for address generation",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT]: "An account required by the instruction is missing",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE]: "missing required signature for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID]: "instruction illegally modified the program id of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS]: "insufficient account keys for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION]: "Cross-program invocation with unauthorized signer or writable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE]: "Failed to create program execution environment",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE]: "Program failed to compile",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE]: "Program failed to complete",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED]: "instruction modified data of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE]: "instruction changed the balance of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED]: "Cross-program invocation reentrancy not allowed for this instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED]: "instruction modified rent epoch of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION]: "sum of account balances before and after instruction do not match",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT]: "instruction requires an initialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN]: "",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID]: "Unsupported program id",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR]: "Unsupported sysvar",
  [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND]: "Invalid instruction plan kind: $kind.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN]: "The provided instruction plan is empty.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_SINGLE_TRANSACTION_PLAN_RESULT_NOT_FOUND]: "No failed transaction plan result was found in the provided transaction plan result.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__NON_DIVISIBLE_TRANSACTION_PLANS_NOT_SUPPORTED]: "This transaction plan executor does not support non-divisible sequential plans. To support them, you may create your own executor such that multi-transaction atomicity is preserved \u2014 e.g. by targetting RPCs that support transaction bundles.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN]: "The provided transaction plan failed to execute. See the `transactionPlanResult` attribute for more details. Note that the `cause` property is deprecated, and a future version will not set it.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN]: "The provided message has insufficient capacity to accommodate the next instruction(s) in this plan. Expected at least $numBytesRequired free byte(s), got $numFreeBytes byte(s).",
  [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND]: "Invalid transaction plan kind: $kind.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE]: "No more instructions to pack; the message packer has completed the instruction plan.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_INSTRUCTION_PLAN]: "Unexpected instruction plan. Expected $expectedKind plan, got $actualKind plan.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_TRANSACTION_PLAN]: "Unexpected transaction plan. Expected $expectedKind plan, got $actualKind plan.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__UNEXPECTED_TRANSACTION_PLAN_RESULT]: "Unexpected transaction plan result. Expected $expectedKind plan, got $actualKind plan.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__EXPECTED_SUCCESSFUL_TRANSACTION_PLAN_RESULT]: "Expected a successful transaction plan result. I.e. there is at least one failed or cancelled transaction in the plan.",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS]: "The instruction does not have any accounts.",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA]: "The instruction does not have any data.",
  [SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
  [SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__INVALID_NONCE]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
  [SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_PARAMS]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_REQUEST]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__PARSE_ERROR]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__SCAN_ERROR]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE]: "Epoch rewards period still active at slot $slot",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE]: "Failed to query long-term storage; please try again",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED]: "Minimum context slot has not been reached",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY]: "Node is unhealthy; behind by $numSlotsBehind slots",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT]: "No snapshot",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE]: "Transaction simulation failed",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY]: "Rewards cannot be found because slot $slot is not the epoch boundary. This may be due to gap in the queried node's local ledger or long-term storage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE]: "Transaction history is not available from this node",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH]: "Transaction signature length mismatch",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE]: "Transaction signature verification failure",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION]: "$__serverMessage",
  [SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH]: "Key pair bytes must be of length 64, got $byteLength.",
  [SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH]: "Expected private key bytes with length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY]: "The provided private key does not match the provided public key.",
  [SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
  [SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE]: "Lamports value must be in the range [0, 2e64-1]",
  [SOLANA_ERROR__MALFORMED_BIGINT_STRING]: "`$value` cannot be parsed as a `BigInt`",
  [SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR]: "$message",
  [SOLANA_ERROR__MALFORMED_NUMBER_STRING]: "`$value` cannot be parsed as a `Number`",
  [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND]: "No nonce account could be found at address `$nonceAccountAddress`",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__INVALID_APPLICATION_DOMAIN_BYTE_LENGTH]: "Expected base58 encoded application domain to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__ADDRESSES_CANNOT_SIGN_OFFCHAIN_MESSAGE]: "Attempted to sign an offchain message with an address that is not a signer for it",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__APPLICATION_DOMAIN_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded application domain string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__ENVELOPE_SIGNERS_MISMATCH]: "The signer addresses in this offchain message envelope do not match the list of required signers in the message preamble. These unexpected signers were present in the envelope: `[$unexpectedSigners]`. These required signers were missing from the envelope `[$missingSigners]`.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__MAXIMUM_LENGTH_EXCEEDED]: "The message body provided has a byte-length of $actualBytes. The maximum allowable byte-length is $maxBytes",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_FORMAT_MISMATCH]: "Expected message format $expectedMessageFormat, got $actualMessageFormat",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_LENGTH_MISMATCH]: "The message length specified in the message preamble is $specifiedLength bytes. The actual length of the message is $actualLength bytes.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__MESSAGE_MUST_BE_NON_EMPTY]: "Offchain message content must be non-empty",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_REQUIRED_SIGNERS_CANNOT_BE_ZERO]: "Offchain message must specify the address of at least one required signer",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_ENVELOPE_SIGNATURES_CANNOT_BE_ZERO]: "Offchain message envelope must reserve space for at least one signature",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__NUM_SIGNATURES_MISMATCH]: "The offchain message preamble specifies $numRequiredSignatures required signature(s), got $signaturesLength.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATORIES_MUST_BE_SORTED]: "The signatories of this offchain message must be listed in lexicographical order",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATORIES_MUST_BE_UNIQUE]: "An address must be listed no more than once among the signatories of an offchain message",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATURES_MISSING]: "Offchain message is missing signatures for addresses: $addresses.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__SIGNATURE_VERIFICATION_FAILURE]: "Offchain message signature verification failed. Signature mismatch for required signatories [$signatoriesWithInvalidSignatures]. Missing signatures for signatories [$signatoriesWithMissingSignatures]",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__RESTRICTED_ASCII_BODY_CHARACTER_OUT_OF_RANGE]: "The message body provided contains characters whose codes fall outside the allowed range. In order to ensure clear-signing compatiblity with hardware wallets, the message may only contain line feeds and characters in the range [\\x20-\\x7e].",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__UNEXPECTED_VERSION]: "Expected offchain message version $expectedVersion. Got $actualVersion.",
  [SOLANA_ERROR__OFFCHAIN_MESSAGE__VERSION_NUMBER_NOT_SUPPORTED]: "This version of Kit does not support decoding offchain messages with version $unsupportedVersion. The current max supported version is 0.",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED]: "WebSocket was closed before payload could be added to the send buffer",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED]: "WebSocket connection closed",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT]: "WebSocket failed to connect",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID]: "Failed to obtain a subscription id from the server",
  [SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD]: "Could not find an API plan for RPC method: `$method`",
  [SOLANA_ERROR__RPC__INTEGER_OVERFLOW]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR]: "HTTP error ($statusCode): $message",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
  [SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
  [SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER]: "The provided value does not implement the `KeyPairSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER]: "The provided value does not implement the `MessageModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER]: "The provided value does not implement the `MessagePartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER]: "The provided value does not implement any of the `MessageSigner` interfaces",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER]: "The provided value does not implement the `TransactionModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER]: "The provided value does not implement the `TransactionPartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER]: "The provided value does not implement the `TransactionSendingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER]: "The provided value does not implement any of the `TransactionSigner` interfaces",
  [SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS]: "More than one `TransactionSendingSigner` was identified.",
  [SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
  [SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
  [SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY]: "Cannot export a non-extractable key.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED]: "No digest implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED]: "This runtime does not support the generation of Ed25519 key pairs.\n\nInstall @solana/webcrypto-ed25519-polyfill and call its `install` function before generating keys in environments that do not support Ed25519.\n\nFor a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED]: "No signature verification implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED]: "No key generation implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED]: "No signing implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED]: "No key export implementation could be found.",
  [SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "Transaction processing left an account with an outstanding borrowed reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE]: "Account in use",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE]: "Account loaded twice",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND]: "Attempt to debit an account but found no record of a prior credit.",
  [SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND]: "Transaction loads an address table account that doesn't exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED]: "This transaction has already been processed",
  [SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND]: "Blockhash not found",
  [SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP]: "Loader call chain is too deep",
  [SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE]: "Transactions are currently disabled due to cluster maintenance",
  [SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION]: "Transaction contains a duplicate instruction ($index) that is not allowed",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE]: "Insufficient funds for fee",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE]: "This account may not be used to pay transaction fees",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX]: "Transaction contains an invalid account reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA]: "Transaction loads an address table account with invalid data",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX]: "Transaction address table lookup uses an invalid index",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER]: "Transaction loads an address table account with an invalid owner",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION]: "This program may not be used for executing instructions",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT]: "Transaction loads a writable account that cannot be written",
  [SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED]: "Transaction exceeded max loaded accounts data size cap",
  [SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE]: "Transaction requires a fee but has no signature present",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND]: "Attempt to load a program that does not exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
  [SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED]: "ResanitizationNeeded",
  [SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE]: "Transaction failed to sanitize accounts offsets correctly",
  [SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE]: "Transaction did not pass signature verification",
  [SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS]: "Transaction locked too many accounts",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION]: "Sum of account balances before and after transaction do not match",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN]: "The transaction failed with the error `$errorName`",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION]: "Transaction version is unsupported",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT]: "Transaction would exceed account data limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT]: "Transaction would exceed total account data limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT]: "Transaction would exceed max account limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT]: "Transaction would exceed max Block Cost Limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT]: "Transaction would exceed max Vote Cost Limit",
  [SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION]: "Attempted to sign a transaction with an address that is not a signer for it",
  [SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING]: "Transaction is missing an address at index: $index.",
  [SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES]: "Transaction has no expected signers therefore it cannot be encoded",
  [SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME]: "Transaction does not have a blockhash lifetime",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME]: "Transaction is not a durable nonce transaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING]: "No fee payer set in CompiledTransaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND]: "Could not find program address at index $index",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING]: "Transaction is missing a fee payer.",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE]: "Transaction first instruction is not advance nonce account instruction.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING]: "Transaction with no instructions cannot be durable nonce transaction.",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
  [SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH]: "The transaction message expected the transaction to have $numRequiredSignatures signatures, got $signaturesLength.",
  [SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING]: "Transaction is missing signatures for addresses: $addresses.",
  [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE]: "Transaction version must be in the range [0, 127]. `$actualVersion` given",
  [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED]: "This version of Kit does not support decoding transactions with version $unsupportedVersion. The current max supported version is 0.",
  [SOLANA_ERROR__TRANSACTION__NONCE_ACCOUNT_CANNOT_BE_IN_LOOKUP_TABLE]: "The transaction has a durable nonce lifetime (with nonce `$nonce`), but the nonce account address is in a lookup table. The lifetime constraint cannot be constructed without fetching the lookup tables for the transaction."
};
var START_INDEX = "i";
var TYPE = "t";
function getHumanReadableErrorMessage(code, context = {}) {
  const messageFormatString = SolanaErrorMessages[code];
  if (messageFormatString.length === 0) {
    return "";
  }
  let state;
  function commitStateUpTo(endIndex) {
    if (state[TYPE] === 2) {
      const variableName = messageFormatString.slice(state[START_INDEX] + 1, endIndex);
      fragments.push(
        variableName in context ? (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${context[variableName]}`
        ) : `$${variableName}`
      );
    } else if (state[TYPE] === 1) {
      fragments.push(messageFormatString.slice(state[START_INDEX], endIndex));
    }
  }
  const fragments = [];
  messageFormatString.split("").forEach((char, ii3) => {
    if (ii3 === 0) {
      state = {
        [START_INDEX]: 0,
        [TYPE]: messageFormatString[0] === "\\" ? 0 : messageFormatString[0] === "$" ? 2 : 1
        /* Text */
      };
      return;
    }
    let nextState;
    switch (state[TYPE]) {
      case 0:
        nextState = {
          [START_INDEX]: ii3,
          [TYPE]: 1
          /* Text */
        };
        break;
      case 1:
        if (char === "\\") {
          nextState = {
            [START_INDEX]: ii3,
            [TYPE]: 0
            /* EscapeSequence */
          };
        } else if (char === "$") {
          nextState = {
            [START_INDEX]: ii3,
            [TYPE]: 2
            /* Variable */
          };
        }
        break;
      case 2:
        if (char === "\\") {
          nextState = {
            [START_INDEX]: ii3,
            [TYPE]: 0
            /* EscapeSequence */
          };
        } else if (char === "$") {
          nextState = {
            [START_INDEX]: ii3,
            [TYPE]: 2
            /* Variable */
          };
        } else if (!char.match(/\w/)) {
          nextState = {
            [START_INDEX]: ii3,
            [TYPE]: 1
            /* Text */
          };
        }
        break;
    }
    if (nextState) {
      if (state !== nextState) {
        commitStateUpTo(ii3);
      }
      state = nextState;
    }
  });
  commitStateUpTo();
  return fragments.join("");
}
function getErrorMessage(code, context = {}) {
  if (true) {
    return getHumanReadableErrorMessage(code, context);
  } else {
    let decodingAdviceMessage = `Solana error #${code}; Decode this error by running \`npx @solana/errors decode -- ${code}`;
    if (Object.keys(context).length) {
      decodingAdviceMessage += ` '${encodeContextObject(context)}'`;
    }
    return `${decodingAdviceMessage}\``;
  }
}
function isSolanaError(e14, code) {
  const isSolanaError2 = e14 instanceof Error && e14.name === "SolanaError";
  if (isSolanaError2) {
    if (code !== void 0) {
      return e14.context.__code === code;
    }
    return true;
  }
  return false;
}
var SolanaError = class extends Error {
  /**
   * Indicates the root cause of this {@link SolanaError}, if any.
   *
   * For example, a transaction error might have an instruction error as its root cause. In this
   * case, you will be able to access the instruction error on the transaction error as `cause`.
   */
  cause = this.cause;
  /**
   * Contains context that can assist in understanding or recovering from a {@link SolanaError}.
   */
  context;
  constructor(...[code, contextAndErrorOptions]) {
    let context;
    let errorOptions;
    if (contextAndErrorOptions) {
      Object.entries(Object.getOwnPropertyDescriptors(contextAndErrorOptions)).forEach(([name, descriptor]) => {
        if (name === "cause") {
          errorOptions = { cause: descriptor.value };
        } else {
          if (context === void 0) {
            context = {
              __code: code
            };
          }
          Object.defineProperty(context, name, descriptor);
        }
      });
    }
    const message = getErrorMessage(code, context);
    super(message, errorOptions);
    this.context = Object.freeze(
      context === void 0 ? {
        __code: code
      } : context
    );
    this.name = "SolanaError";
  }
};
function safeCaptureStackTrace(...args) {
  if ("captureStackTrace" in Error && typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(...args);
  }
}
function getSolanaErrorFromRpcError({ errorCodeBaseOffset, getErrorContext, orderedErrorNames, rpcEnumError }, constructorOpt) {
  let rpcErrorName;
  let rpcErrorContext;
  if (typeof rpcEnumError === "string") {
    rpcErrorName = rpcEnumError;
  } else {
    rpcErrorName = Object.keys(rpcEnumError)[0];
    rpcErrorContext = rpcEnumError[rpcErrorName];
  }
  const codeOffset = orderedErrorNames.indexOf(rpcErrorName);
  const errorCode = errorCodeBaseOffset + codeOffset;
  const errorContext = getErrorContext(errorCode, rpcErrorName, rpcErrorContext);
  const err = new SolanaError(errorCode, errorContext);
  safeCaptureStackTrace(err, constructorOpt);
  return err;
}
var ORDERED_ERROR_NAMES = [
  // Keep synced with RPC source: https://github.com/anza-xyz/solana-sdk/blob/master/instruction-error/src/lib.rs
  // If this list ever gets too large, consider implementing a compression strategy like this:
  // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
  "GenericError",
  "InvalidArgument",
  "InvalidInstructionData",
  "InvalidAccountData",
  "AccountDataTooSmall",
  "InsufficientFunds",
  "IncorrectProgramId",
  "MissingRequiredSignature",
  "AccountAlreadyInitialized",
  "UninitializedAccount",
  "UnbalancedInstruction",
  "ModifiedProgramId",
  "ExternalAccountLamportSpend",
  "ExternalAccountDataModified",
  "ReadonlyLamportChange",
  "ReadonlyDataModified",
  "DuplicateAccountIndex",
  "ExecutableModified",
  "RentEpochModified",
  "NotEnoughAccountKeys",
  "AccountDataSizeChanged",
  "AccountNotExecutable",
  "AccountBorrowFailed",
  "AccountBorrowOutstanding",
  "DuplicateAccountOutOfSync",
  "Custom",
  "InvalidError",
  "ExecutableDataModified",
  "ExecutableLamportChange",
  "ExecutableAccountNotRentExempt",
  "UnsupportedProgramId",
  "CallDepth",
  "MissingAccount",
  "ReentrancyNotAllowed",
  "MaxSeedLengthExceeded",
  "InvalidSeeds",
  "InvalidRealloc",
  "ComputationalBudgetExceeded",
  "PrivilegeEscalation",
  "ProgramEnvironmentSetupFailure",
  "ProgramFailedToComplete",
  "ProgramFailedToCompile",
  "Immutable",
  "IncorrectAuthority",
  "BorshIoError",
  "AccountNotRentExempt",
  "InvalidAccountOwner",
  "ArithmeticOverflow",
  "UnsupportedSysvar",
  "IllegalOwner",
  "MaxAccountsDataAllocationsExceeded",
  "MaxAccountsExceeded",
  "MaxInstructionTraceLengthExceeded",
  "BuiltinProgramsMustConsumeComputeUnits"
];
function getSolanaErrorFromInstructionError(index, instructionError) {
  const numberIndex = Number(index);
  return getSolanaErrorFromRpcError(
    {
      errorCodeBaseOffset: 4615001,
      getErrorContext(errorCode, rpcErrorName, rpcErrorContext) {
        if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN) {
          return {
            errorName: rpcErrorName,
            index: numberIndex,
            ...rpcErrorContext !== void 0 ? { instructionErrorContext: rpcErrorContext } : null
          };
        } else if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM) {
          return {
            code: Number(rpcErrorContext),
            index: numberIndex
          };
        }
        return { index: numberIndex };
      },
      orderedErrorNames: ORDERED_ERROR_NAMES,
      rpcEnumError: instructionError
    },
    getSolanaErrorFromInstructionError
  );
}
var ORDERED_ERROR_NAMES2 = [
  // Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/src/transaction/error.rs
  // If this list ever gets too large, consider implementing a compression strategy like this:
  // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
  "AccountInUse",
  "AccountLoadedTwice",
  "AccountNotFound",
  "ProgramAccountNotFound",
  "InsufficientFundsForFee",
  "InvalidAccountForFee",
  "AlreadyProcessed",
  "BlockhashNotFound",
  // `InstructionError` intentionally omitted; delegated to `getSolanaErrorFromInstructionError`
  "CallChainTooDeep",
  "MissingSignatureForFee",
  "InvalidAccountIndex",
  "SignatureFailure",
  "InvalidProgramForExecution",
  "SanitizeFailure",
  "ClusterMaintenance",
  "AccountBorrowOutstanding",
  "WouldExceedMaxBlockCostLimit",
  "UnsupportedVersion",
  "InvalidWritableAccount",
  "WouldExceedMaxAccountCostLimit",
  "WouldExceedAccountDataBlockLimit",
  "TooManyAccountLocks",
  "AddressLookupTableNotFound",
  "InvalidAddressLookupTableOwner",
  "InvalidAddressLookupTableData",
  "InvalidAddressLookupTableIndex",
  "InvalidRentPayingAccount",
  "WouldExceedMaxVoteCostLimit",
  "WouldExceedAccountDataTotalLimit",
  "DuplicateInstruction",
  "InsufficientFundsForRent",
  "MaxLoadedAccountsDataSizeExceeded",
  "InvalidLoadedAccountsDataSizeLimit",
  "ResanitizationNeeded",
  "ProgramExecutionTemporarilyRestricted",
  "UnbalancedTransaction"
];
function getSolanaErrorFromTransactionError(transactionError) {
  if (typeof transactionError === "object" && "InstructionError" in transactionError) {
    return getSolanaErrorFromInstructionError(
      ...transactionError.InstructionError
    );
  }
  return getSolanaErrorFromRpcError(
    {
      errorCodeBaseOffset: 7050001,
      getErrorContext(errorCode, rpcErrorName, rpcErrorContext) {
        if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN) {
          return {
            errorName: rpcErrorName,
            ...rpcErrorContext !== void 0 ? { transactionErrorContext: rpcErrorContext } : null
          };
        } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION) {
          return {
            index: Number(rpcErrorContext)
          };
        } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT || errorCode === SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED) {
          return {
            accountIndex: Number(rpcErrorContext.account_index)
          };
        }
      },
      orderedErrorNames: ORDERED_ERROR_NAMES2,
      rpcEnumError: transactionError
    },
    getSolanaErrorFromTransactionError
  );
}
function getSolanaErrorFromJsonRpcError(putativeErrorResponse) {
  let out;
  if (isRpcErrorResponse(putativeErrorResponse)) {
    const { code: rawCode, data, message } = putativeErrorResponse;
    const code = Number(rawCode);
    if (code === SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE) {
      const { err, ...preflightErrorContext } = data;
      const causeObject = err ? { cause: getSolanaErrorFromTransactionError(err) } : null;
      out = new SolanaError(SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE, {
        ...preflightErrorContext,
        ...causeObject
      });
    } else {
      let errorContext;
      switch (code) {
        case SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR:
        case SOLANA_ERROR__JSON_RPC__INVALID_PARAMS:
        case SOLANA_ERROR__JSON_RPC__INVALID_REQUEST:
        case SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND:
        case SOLANA_ERROR__JSON_RPC__PARSE_ERROR:
        case SOLANA_ERROR__JSON_RPC__SCAN_ERROR:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
        case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION:
          errorContext = { __serverMessage: message };
          break;
        default:
          if (typeof data === "object" && !Array.isArray(data)) {
            errorContext = data;
          }
      }
      out = new SolanaError(code, errorContext);
    }
  } else {
    const message = typeof putativeErrorResponse === "object" && putativeErrorResponse !== null && "message" in putativeErrorResponse && typeof putativeErrorResponse.message === "string" ? putativeErrorResponse.message : "Malformed JSON-RPC error with no message attribute";
    out = new SolanaError(SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR, { error: putativeErrorResponse, message });
  }
  safeCaptureStackTrace(out, getSolanaErrorFromJsonRpcError);
  return out;
}
function isRpcErrorResponse(value) {
  return typeof value === "object" && value !== null && "code" in value && "message" in value && (typeof value.code === "number" || typeof value.code === "bigint") && typeof value.message === "string";
}

// node_modules/x402/node_modules/@solana/codecs-core/dist/index.browser.mjs
function padBytes(bytes, length) {
  if (bytes.length >= length) return bytes;
  const paddedBytes = new Uint8Array(length).fill(0);
  paddedBytes.set(bytes);
  return paddedBytes;
}
var fixBytes = (bytes, length) => padBytes(bytes.length <= length ? bytes : bytes.slice(0, length), length);
function bytesEqual(bytes1, bytes2) {
  return bytes1.length === bytes2.length && bytes1.every((value, index) => value === bytes2[index]);
}
function getEncodedSize(value, encoder) {
  return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
}
function createEncoder(encoder) {
  return Object.freeze({
    ...encoder,
    encode: (value) => {
      const bytes = new Uint8Array(getEncodedSize(value, encoder));
      encoder.write(value, bytes, 0);
      return bytes;
    }
  });
}
function createDecoder(decoder) {
  return Object.freeze({
    ...decoder,
    decode: (bytes, offset = 0) => decoder.read(bytes, offset)[0]
  });
}
function isFixedSize(codec) {
  return "fixedSize" in codec && typeof codec.fixedSize === "number";
}
function isVariableSize(codec) {
  return !isFixedSize(codec);
}
function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset = 0) {
  if (bytes.length - offset <= 0) {
    throw new SolanaError(SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY, {
      codecDescription
    });
  }
}
function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset = 0) {
  const bytesLength = bytes.length - offset;
  if (bytesLength < expected) {
    throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
      bytesLength,
      codecDescription,
      expected
    });
  }
}
function assertByteArrayOffsetIsNotOutOfRange(codecDescription, offset, bytesLength) {
  if (offset < 0 || offset > bytesLength) {
    throw new SolanaError(SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE, {
      bytesLength,
      codecDescription,
      offset
    });
  }
}
function addDecoderSizePrefix(decoder, prefix) {
  const read = ((bytes, offset) => {
    const [bigintSize, decoderOffset] = prefix.read(bytes, offset);
    const size = Number(bigintSize);
    offset = decoderOffset;
    if (offset > 0 || bytes.length > size) {
      bytes = bytes.slice(offset, offset + size);
    }
    assertByteArrayHasEnoughBytesForCodec("addDecoderSizePrefix", size, bytes);
    return [decoder.decode(bytes), offset + size];
  });
  if (isFixedSize(prefix) && isFixedSize(decoder)) {
    return createDecoder({ ...decoder, fixedSize: prefix.fixedSize + decoder.fixedSize, read });
  }
  const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
  const decoderMaxSize = isFixedSize(decoder) ? decoder.fixedSize : decoder.maxSize ?? null;
  const maxSize = prefixMaxSize !== null && decoderMaxSize !== null ? prefixMaxSize + decoderMaxSize : null;
  return createDecoder({ ...decoder, ...maxSize !== null ? { maxSize } : {}, read });
}
function toArrayBuffer(bytes, offset, length) {
  const bytesOffset = bytes.byteOffset + (offset ?? 0);
  const bytesLength = length ?? bytes.byteLength;
  let buffer;
  if (typeof SharedArrayBuffer === "undefined") {
    buffer = bytes.buffer;
  } else if (bytes.buffer instanceof SharedArrayBuffer) {
    buffer = new ArrayBuffer(bytes.length);
    new Uint8Array(buffer).set(new Uint8Array(bytes));
  } else {
    buffer = bytes.buffer;
  }
  return (bytesOffset === 0 || bytesOffset === -bytes.byteLength) && bytesLength === bytes.byteLength ? buffer : buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
function fixEncoderSize(encoder, fixedBytes) {
  return createEncoder({
    fixedSize: fixedBytes,
    write: (value, bytes, offset) => {
      const variableByteArray = encoder.encode(value);
      const fixedByteArray = variableByteArray.length > fixedBytes ? variableByteArray.slice(0, fixedBytes) : variableByteArray;
      bytes.set(fixedByteArray, offset);
      return offset + fixedBytes;
    }
  });
}
function fixDecoderSize(decoder, fixedBytes) {
  return createDecoder({
    fixedSize: fixedBytes,
    read: (bytes, offset) => {
      assertByteArrayHasEnoughBytesForCodec("fixCodecSize", fixedBytes, bytes, offset);
      if (offset > 0 || bytes.length > fixedBytes) {
        bytes = bytes.slice(offset, offset + fixedBytes);
      }
      if (isFixedSize(decoder)) {
        bytes = fixBytes(bytes, decoder.fixedSize);
      }
      const [value] = decoder.read(bytes, 0);
      return [value, offset + fixedBytes];
    }
  });
}
function offsetDecoder(decoder, config2) {
  return createDecoder({
    ...decoder,
    read: (bytes, preOffset) => {
      const wrapBytes = (offset) => modulo(offset, bytes.length);
      const newPreOffset = config2.preOffset ? config2.preOffset({ bytes, preOffset, wrapBytes }) : preOffset;
      assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPreOffset, bytes.length);
      const [value, postOffset] = decoder.read(bytes, newPreOffset);
      const newPostOffset = config2.postOffset ? config2.postOffset({ bytes, newPreOffset, postOffset, preOffset, wrapBytes }) : postOffset;
      assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPostOffset, bytes.length);
      return [value, newPostOffset];
    }
  });
}
function modulo(dividend, divisor) {
  if (divisor === 0) return 0;
  return (dividend % divisor + divisor) % divisor;
}
function resizeDecoder(decoder, resize) {
  if (isFixedSize(decoder)) {
    const fixedSize = resize(decoder.fixedSize);
    if (fixedSize < 0) {
      throw new SolanaError(SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH, {
        bytesLength: fixedSize,
        codecDescription: "resizeDecoder"
      });
    }
    return createDecoder({ ...decoder, fixedSize });
  }
  return decoder;
}
function padRightDecoder(decoder, offset) {
  return offsetDecoder(
    resizeDecoder(decoder, (size) => size + offset),
    { postOffset: ({ postOffset }) => postOffset + offset }
  );
}
function transformEncoder(encoder, unmap) {
  return createEncoder({
    ...isVariableSize(encoder) ? { ...encoder, getSizeFromValue: (value) => encoder.getSizeFromValue(unmap(value)) } : encoder,
    write: (value, bytes, offset) => encoder.write(unmap(value), bytes, offset)
  });
}
function transformDecoder(decoder, map) {
  return createDecoder({
    ...decoder,
    read: (bytes, offset) => {
      const [value, newOffset] = decoder.read(bytes, offset);
      return [map(value, bytes, offset), newOffset];
    }
  });
}

// node_modules/x402/node_modules/@solana/codecs-strings/dist/index.browser.mjs
var getBaseXDecoder = (alphabet4) => {
  return createDecoder({
    read(rawBytes, offset) {
      const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
      if (bytes.length === 0) return ["", 0];
      let trailIndex = bytes.findIndex((n18) => n18 !== 0);
      trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
      const leadingZeroes = alphabet4[0].repeat(trailIndex);
      if (trailIndex === bytes.length) return [leadingZeroes, rawBytes.length];
      const base10Number = bytes.slice(trailIndex).reduce((sum, byte) => sum * 256n + BigInt(byte), 0n);
      const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
      return [leadingZeroes + tailChars, rawBytes.length];
    }
  });
};
function getBaseXFromBigInt(value, alphabet4) {
  const base2 = BigInt(alphabet4.length);
  const tailChars = [];
  while (value > 0n) {
    tailChars.unshift(alphabet4[Number(value % base2)]);
    value /= base2;
  }
  return tailChars.join("");
}
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Decoder = () => getBaseXDecoder(alphabet2);
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = () => {
  {
    return createEncoder({
      getSizeFromValue: (value) => {
        try {
          return atob(value).length;
        } catch {
          throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
            alphabet: alphabet3,
            base: 64,
            value
          });
        }
      },
      write(value, bytes, offset) {
        try {
          const bytesToAdd = atob(value).split("").map((c15) => c15.charCodeAt(0));
          bytes.set(bytesToAdd, offset);
          return bytesToAdd.length + offset;
        } catch {
          throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
            alphabet: alphabet3,
            base: 64,
            value
          });
        }
      }
    });
  }
};
var getBase64Decoder = () => {
  {
    return createDecoder({
      read(bytes, offset = 0) {
        const slice = bytes.slice(offset);
        const value = btoa(String.fromCharCode(...slice));
        return [value, bytes.length];
      }
    });
  }
};
var e10 = globalThis.TextDecoder;
var o15 = globalThis.TextEncoder;

// node_modules/x402/node_modules/@solana/assertions/dist/index.browser.mjs
function assertPRNGIsAvailable() {
  if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.getRandomValues !== "function") {
    throw new SolanaError(SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED);
  }
}
function assertIsSecureContext() {
  if (!globalThis.isSecureContext) {
    throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT);
  }
}
function assertKeyExporterIsAvailable() {
  assertIsSecureContext();
  if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.exportKey !== "function") {
    throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED);
  }
}
function assertSigningCapabilityIsAvailable() {
  assertIsSecureContext();
  if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.sign !== "function") {
    throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED);
  }
}
function assertVerificationCapabilityIsAvailable() {
  assertIsSecureContext();
  if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.verify !== "function") {
    throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED);
  }
}

// node_modules/x402/node_modules/@solana/addresses/dist/index.browser.mjs
var memoizedBase58Decoder;
function getMemoizedBase58Decoder() {
  if (!memoizedBase58Decoder) memoizedBase58Decoder = getBase58Decoder();
  return memoizedBase58Decoder;
}
function getAddressDecoder() {
  return fixDecoderSize(getMemoizedBase58Decoder(), 32);
}
async function getAddressFromPublicKey(publicKey) {
  assertKeyExporterIsAvailable();
  if (publicKey.type !== "public" || publicKey.algorithm.name !== "Ed25519") {
    throw new SolanaError(SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY);
  }
  const publicKeyBytes = await crypto.subtle.exportKey("raw", publicKey);
  return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
}

// node_modules/x402/node_modules/@solana/codecs-numbers/dist/index.browser.mjs
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
  if (value < min || value > max) {
    throw new SolanaError(SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
      codecDescription,
      max,
      min,
      value
    });
  }
}
function isLittleEndian(config2) {
  return config2?.endian === 1 ? false : true;
}
function numberEncoderFactory(input) {
  return createEncoder({
    fixedSize: input.size,
    write(value, bytes, offset) {
      if (input.range) {
        assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
      }
      const arrayBuffer = new ArrayBuffer(input.size);
      input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
      bytes.set(new Uint8Array(arrayBuffer), offset);
      return offset + input.size;
    }
  });
}
function numberDecoderFactory(input) {
  return createDecoder({
    fixedSize: input.size,
    read(bytes, offset = 0) {
      assertByteArrayIsNotEmptyForCodec(input.name, bytes, offset);
      assertByteArrayHasEnoughBytesForCodec(input.name, input.size, bytes, offset);
      const view = new DataView(toArrayBuffer(bytes, offset, input.size));
      return [input.get(view, isLittleEndian(input.config)), offset + input.size];
    }
  });
}
var getShortU16Encoder = () => createEncoder({
  getSizeFromValue: (value) => {
    if (value <= 127) return 1;
    if (value <= 16383) return 2;
    return 3;
  },
  maxSize: 3,
  write: (value, bytes, offset) => {
    assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
    const shortU16Bytes = [0];
    for (let ii3 = 0; ; ii3 += 1) {
      const alignedValue = Number(value) >> ii3 * 7;
      if (alignedValue === 0) {
        break;
      }
      const nextSevenBits = 127 & alignedValue;
      shortU16Bytes[ii3] = nextSevenBits;
      if (ii3 > 0) {
        shortU16Bytes[ii3 - 1] |= 128;
      }
    }
    bytes.set(shortU16Bytes, offset);
    return offset + shortU16Bytes.length;
  }
});
var getShortU16Decoder = () => createDecoder({
  maxSize: 3,
  read: (bytes, offset) => {
    let value = 0;
    let byteCount = 0;
    while (++byteCount) {
      const byteIndex = byteCount - 1;
      const currentByte = bytes[offset + byteIndex];
      const nextSevenBits = 127 & currentByte;
      value |= nextSevenBits << byteIndex * 7;
      if ((currentByte & 128) === 0) {
        break;
      }
    }
    return [value, offset + byteCount];
  }
});
var getU32Encoder = (config2 = {}) => numberEncoderFactory({
  config: config2,
  name: "u32",
  range: [0, Number("0xffffffff")],
  set: (view, value, le2) => view.setUint32(0, Number(value), le2),
  size: 4
});
var getU32Decoder = (config2 = {}) => numberDecoderFactory({
  config: config2,
  get: (view, le2) => view.getUint32(0, le2),
  name: "u32",
  size: 4
});
var getU8Decoder = () => numberDecoderFactory({
  get: (view) => view.getUint8(0),
  name: "u8",
  size: 1
});

// node_modules/x402/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
  if (expected !== actual) {
    throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS, {
      actual,
      codecDescription,
      expected
    });
  }
}
function sumCodecSizes(sizes) {
  return sizes.reduce((all, size) => all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
  return isFixedSize(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
  return isFixedSize(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
function getArrayEncoder(item, config2 = {}) {
  const size = config2.size ?? getU32Encoder();
  const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
  const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
  return createEncoder({
    ...fixedSize !== null ? { fixedSize } : {
      getSizeFromValue: (array) => {
        const prefixSize = typeof size === "object" ? getEncodedSize(array.length, size) : 0;
        return prefixSize + [...array].reduce((all, value) => all + getEncodedSize(value, item), 0);
      },
      maxSize
    },
    write: (array, bytes, offset) => {
      if (typeof size === "number") {
        assertValidNumberOfItemsForCodec("array", size, array.length);
      }
      if (typeof size === "object") {
        offset = size.write(array.length, bytes, offset);
      }
      array.forEach((value) => {
        offset = item.write(value, bytes, offset);
      });
      return offset;
    }
  });
}
function getArrayDecoder(item, config2 = {}) {
  const size = config2.size ?? getU32Decoder();
  const itemSize = getFixedSize(item);
  const fixedSize = computeArrayLikeCodecSize(size, itemSize);
  const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
  return createDecoder({
    ...fixedSize !== null ? { fixedSize } : { maxSize },
    read: (bytes, offset) => {
      const array = [];
      if (typeof size === "object" && bytes.slice(offset).length === 0) {
        return [array, offset];
      }
      if (size === "remainder") {
        while (offset < bytes.length) {
          const [value, newOffset2] = item.read(bytes, offset);
          offset = newOffset2;
          array.push(value);
        }
        return [array, offset];
      }
      const [resolvedSize, newOffset] = typeof size === "number" ? [size, offset] : size.read(bytes, offset);
      offset = newOffset;
      for (let i19 = 0; i19 < resolvedSize; i19 += 1) {
        const [value, newOffset2] = item.read(bytes, offset);
        offset = newOffset2;
        array.push(value);
      }
      return [array, offset];
    }
  });
}
function computeArrayLikeCodecSize(size, itemSize) {
  if (typeof size !== "number") return null;
  if (size === 0) return 0;
  return itemSize === null ? null : itemSize * size;
}
function getBytesEncoder() {
  return createEncoder({
    getSizeFromValue: (value) => value.length,
    write: (value, bytes, offset) => {
      bytes.set(value, offset);
      return offset + value.length;
    }
  });
}
function getBytesDecoder() {
  return createDecoder({
    read: (bytes, offset) => {
      const slice = bytes.slice(offset);
      return [slice, offset + slice.length];
    }
  });
}
function getTupleDecoder(items) {
  const fixedSize = sumCodecSizes(items.map(getFixedSize));
  const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
  return createDecoder({
    ...fixedSize === null ? { maxSize } : { fixedSize },
    read: (bytes, offset) => {
      const values = [];
      items.forEach((item) => {
        const [newValue, newOffset] = item.read(bytes, offset);
        values.push(newValue);
        offset = newOffset;
      });
      return [values, offset];
    }
  });
}
function getStructEncoder(fields) {
  const fieldCodecs = fields.map(([, codec]) => codec);
  const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
  const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
  return createEncoder({
    ...fixedSize === null ? {
      getSizeFromValue: (value) => fields.map(([key, codec]) => getEncodedSize(value[key], codec)).reduce((all, one) => all + one, 0),
      maxSize
    } : { fixedSize },
    write: (struct, bytes, offset) => {
      fields.forEach(([key, codec]) => {
        offset = codec.write(struct[key], bytes, offset);
      });
      return offset;
    }
  });
}
function getStructDecoder(fields) {
  const fieldCodecs = fields.map(([, codec]) => codec);
  const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
  const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
  return createDecoder({
    ...fixedSize === null ? { maxSize } : { fixedSize },
    read: (bytes, offset) => {
      const struct = {};
      fields.forEach(([key, codec]) => {
        const [value, newOffset] = codec.read(bytes, offset);
        offset = newOffset;
        struct[key] = value;
      });
      return [struct, offset];
    }
  });
}

// node_modules/x402/node_modules/@solana/functional/dist/index.browser.mjs
function pipe(init, ...fns) {
  return fns.reduce((acc, fn2) => fn2(acc), init);
}

// node_modules/x402/node_modules/@solana/rpc-types/dist/index.browser.mjs
function mainnet(putativeString) {
  return putativeString;
}
function devnet(putativeString) {
  return putativeString;
}

// node_modules/x402/node_modules/@solana/transaction-messages/dist/index.browser.mjs
var getBaseXDecoder2 = (alphabet4) => {
  return createDecoder({
    read(rawBytes, offset) {
      const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
      if (bytes.length === 0) return ["", 0];
      let trailIndex = bytes.findIndex((n18) => n18 !== 0);
      trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
      const leadingZeroes = alphabet4[0].repeat(trailIndex);
      if (trailIndex === bytes.length) return [leadingZeroes, rawBytes.length];
      const base10Number = bytes.slice(trailIndex).reduce((sum, byte) => sum * 256n + BigInt(byte), 0n);
      const tailChars = getBaseXFromBigInt2(base10Number, alphabet4);
      return [leadingZeroes + tailChars, rawBytes.length];
    }
  });
};
function getBaseXFromBigInt2(value, alphabet4) {
  const base2 = BigInt(alphabet4.length);
  const tailChars = [];
  while (value > 0n) {
    tailChars.unshift(alphabet4[Number(value % base2)]);
    value /= base2;
  }
  return tailChars.join("");
}
var alphabet22 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Decoder2 = () => getBaseXDecoder2(alphabet22);
var memoizedAddressTableLookupDecoder;
function getAddressTableLookupDecoder() {
  if (!memoizedAddressTableLookupDecoder) {
    const indexEncoder = getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() });
    memoizedAddressTableLookupDecoder = getStructDecoder([
      ["lookupTableAddress", getAddressDecoder()],
      ["writableIndexes", indexEncoder],
      ["readonlyIndexes", indexEncoder]
    ]);
  }
  return memoizedAddressTableLookupDecoder;
}
var memoizedU8Decoder;
function getMemoizedU8Decoder() {
  if (!memoizedU8Decoder) memoizedU8Decoder = getU8Decoder();
  return memoizedU8Decoder;
}
function getMessageHeaderDecoder() {
  return getStructDecoder([
    ["numSignerAccounts", getMemoizedU8Decoder()],
    ["numReadonlySignerAccounts", getMemoizedU8Decoder()],
    ["numReadonlyNonSignerAccounts", getMemoizedU8Decoder()]
  ]);
}
var memoizedGetInstructionDecoder;
function getInstructionDecoder() {
  if (!memoizedGetInstructionDecoder) {
    memoizedGetInstructionDecoder = transformDecoder(
      getStructDecoder([
        ["programAddressIndex", getU8Decoder()],
        ["accountIndices", getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() })],
        [
          "data",
          addDecoderSizePrefix(getBytesDecoder(), getShortU16Decoder())
        ]
      ]),
      // Convert an instruction to exclude optional fields if they are empty
      (instruction) => {
        if (instruction.accountIndices.length && instruction.data.byteLength) {
          return instruction;
        }
        const { accountIndices, data, ...rest } = instruction;
        return {
          ...rest,
          ...accountIndices.length ? { accountIndices } : null,
          ...data.byteLength ? { data } : null
        };
      }
    );
  }
  return memoizedGetInstructionDecoder;
}
var MAX_SUPPORTED_TRANSACTION_VERSION = 0;
var VERSION_FLAG_MASK = 128;
function getTransactionVersionDecoder() {
  return createDecoder({
    maxSize: 1,
    read: (bytes, offset) => {
      const firstByte = bytes[offset];
      if ((firstByte & VERSION_FLAG_MASK) === 0) {
        return ["legacy", offset];
      } else {
        const version = firstByte ^ VERSION_FLAG_MASK;
        if (version > MAX_SUPPORTED_TRANSACTION_VERSION) {
          throw new SolanaError(SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED, {
            unsupportedVersion: version
          });
        }
        return [version, offset + 1];
      }
    }
  });
}
function getPreludeStructDecoderTuple() {
  return [
    ["version", getTransactionVersionDecoder()],
    ["header", getMessageHeaderDecoder()],
    ["staticAccounts", getArrayDecoder(getAddressDecoder(), { size: getShortU16Decoder() })],
    ["lifetimeToken", fixDecoderSize(getBase58Decoder2(), 32)],
    ["instructions", getArrayDecoder(getInstructionDecoder(), { size: getShortU16Decoder() })],
    ["addressTableLookups", getAddressTableLookupArrayDecoder()]
  ];
}
function getAddressTableLookupArrayDecoder() {
  return getArrayDecoder(getAddressTableLookupDecoder(), { size: getShortU16Decoder() });
}
function getCompiledTransactionMessageDecoder() {
  return transformDecoder(
    getStructDecoder(getPreludeStructDecoderTuple()),
    ({ addressTableLookups, ...restOfMessage }) => {
      if (restOfMessage.version === "legacy" || !addressTableLookups?.length) {
        return restOfMessage;
      }
      return { ...restOfMessage, addressTableLookups };
    }
  );
}
var TYPE2 = Symbol("AddressMapTypeProperty");

// node_modules/x402/node_modules/@solana/keys/dist/index.browser.mjs
var ED25519_ALGORITHM_IDENTIFIER = (
  // Resist the temptation to convert this to a simple string; As of version 133.0.3, Firefox
  // requires the object form of `AlgorithmIdentifier` and will throw a `DOMException` otherwise.
  Object.freeze({ name: "Ed25519" })
);
function addPkcs8Header(bytes) {
  return new Uint8Array([
    /**
     * PKCS#8 header
     */
    48,
    // ASN.1 sequence tag
    46,
    // Length of sequence (46 more bytes)
    2,
    // ASN.1 integer tag
    1,
    // Length of integer
    0,
    // Version number
    48,
    // ASN.1 sequence tag
    5,
    // Length of sequence
    6,
    // ASN.1 object identifier tag
    3,
    // Length of object identifier
    // Edwards curve algorithms identifier https://oid-rep.orange-labs.fr/get/1.3.101.112
    43,
    // iso(1) / identified-organization(3) (The first node is multiplied by the decimal 40 and the result is added to the value of the second node)
    101,
    // thawte(101)
    // Ed25519 identifier
    112,
    // id-Ed25519(112)
    /**
     * Private key payload
     */
    4,
    // ASN.1 octet string tag
    34,
    // String length (34 more bytes)
    // Private key bytes as octet string
    4,
    // ASN.1 octet string tag
    32,
    // String length (32 bytes)
    ...bytes
  ]);
}
async function createPrivateKeyFromBytes(bytes, extractable = false) {
  const actualLength = bytes.byteLength;
  if (actualLength !== 32) {
    throw new SolanaError(SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH, {
      actualLength
    });
  }
  const privateKeyBytesPkcs8 = addPkcs8Header(bytes);
  return await crypto.subtle.importKey("pkcs8", privateKeyBytesPkcs8, ED25519_ALGORITHM_IDENTIFIER, extractable, [
    "sign"
  ]);
}
async function getPublicKeyFromPrivateKey(privateKey, extractable = false) {
  assertKeyExporterIsAvailable();
  if (privateKey.extractable === false) {
    throw new SolanaError(SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY, { key: privateKey });
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  return await crypto.subtle.importKey(
    "jwk",
    {
      crv: "Ed25519",
      ext: extractable,
      key_ops: ["verify"],
      kty: "OKP",
      x: jwk.x
    },
    "Ed25519",
    extractable,
    ["verify"]
  );
}
async function signBytes(key, data) {
  assertSigningCapabilityIsAvailable();
  const signedData = await crypto.subtle.sign(ED25519_ALGORITHM_IDENTIFIER, key, toArrayBuffer(data));
  return new Uint8Array(signedData);
}
async function verifySignature(key, signature2, data) {
  assertVerificationCapabilityIsAvailable();
  return await crypto.subtle.verify(ED25519_ALGORITHM_IDENTIFIER, key, toArrayBuffer(signature2), toArrayBuffer(data));
}
async function createKeyPairFromBytes(bytes, extractable = false) {
  assertPRNGIsAvailable();
  if (bytes.byteLength !== 64) {
    throw new SolanaError(SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH, { byteLength: bytes.byteLength });
  }
  const [publicKey, privateKey] = await Promise.all([
    crypto.subtle.importKey(
      "raw",
      bytes.slice(32),
      ED25519_ALGORITHM_IDENTIFIER,
      /* extractable */
      true,
      [
        "verify"
      ]
    ),
    createPrivateKeyFromBytes(bytes.slice(0, 32), extractable)
  ]);
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  const signedData = await signBytes(privateKey, randomBytes);
  const isValid = await verifySignature(publicKey, signedData, randomBytes);
  if (!isValid) {
    throw new SolanaError(SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY);
  }
  return { privateKey, publicKey };
}
async function createKeyPairFromPrivateKeyBytes(bytes, extractable = false) {
  const privateKeyPromise = createPrivateKeyFromBytes(bytes, extractable);
  const [publicKey, privateKey] = await Promise.all([
    // This nested promise makes things efficient by
    // creating the public key in parallel with the
    // second private key creation, if it is needed.
    (extractable ? privateKeyPromise : createPrivateKeyFromBytes(
      bytes,
      true
      /* extractable */
    )).then(
      async (privateKey2) => await getPublicKeyFromPrivateKey(
        privateKey2,
        true
        /* extractable */
      )
    ),
    privateKeyPromise
  ]);
  return { privateKey, publicKey };
}

// node_modules/x402/node_modules/@solana/transactions/dist/index.browser.mjs
function getSignaturesToEncode(signaturesMap) {
  const signatures = Object.values(signaturesMap);
  if (signatures.length === 0) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES);
  }
  return signatures.map((signature) => {
    if (!signature) {
      return new Uint8Array(64).fill(0);
    }
    return signature;
  });
}
function getSignaturesEncoder() {
  return transformEncoder(
    getArrayEncoder(fixEncoderSize(getBytesEncoder(), 64), { size: getShortU16Encoder() }),
    getSignaturesToEncode
  );
}
function getTransactionEncoder() {
  return getStructEncoder([
    ["signatures", getSignaturesEncoder()],
    ["messageBytes", getBytesEncoder()]
  ]);
}
function getTransactionDecoder() {
  return transformDecoder(
    getStructDecoder([
      ["signatures", getArrayDecoder(fixDecoderSize(getBytesDecoder(), 64), { size: getShortU16Decoder() })],
      ["messageBytes", getBytesDecoder()]
    ]),
    decodePartiallyDecodedTransaction
  );
}
function decodePartiallyDecodedTransaction(transaction) {
  const { messageBytes, signatures } = transaction;
  const signerAddressesDecoder = getTupleDecoder([
    // read transaction version
    getTransactionVersionDecoder(),
    // read first byte of header, `numSignerAccounts`
    // padRight to skip the next 2 bytes, `numReadOnlySignedAccounts` and `numReadOnlyUnsignedAccounts` which we don't need
    padRightDecoder(getU8Decoder(), 2),
    // read static addresses
    getArrayDecoder(getAddressDecoder(), { size: getShortU16Decoder() })
  ]);
  const [_txVersion, numRequiredSignatures, staticAddresses] = signerAddressesDecoder.decode(messageBytes);
  const signerAddresses = staticAddresses.slice(0, numRequiredSignatures);
  if (signerAddresses.length !== signatures.length) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH, {
      numRequiredSignatures,
      signaturesLength: signatures.length,
      signerAddresses
    });
  }
  const signaturesMap = {};
  signerAddresses.forEach((address, index) => {
    const signatureForAddress = signatures[index];
    if (signatureForAddress.every((b11) => b11 === 0)) {
      signaturesMap[address] = null;
    } else {
      signaturesMap[address] = signatureForAddress;
    }
  });
  return {
    messageBytes,
    signatures: Object.freeze(signaturesMap)
  };
}
async function partiallySignTransaction(keyPairs, transaction) {
  let newSignatures;
  let unexpectedSigners;
  await Promise.all(
    keyPairs.map(async (keyPair) => {
      const address = await getAddressFromPublicKey(keyPair.publicKey);
      const existingSignature = transaction.signatures[address];
      if (existingSignature === void 0) {
        unexpectedSigners ||= /* @__PURE__ */ new Set();
        unexpectedSigners.add(address);
        return;
      }
      if (unexpectedSigners) {
        return;
      }
      const newSignature = await signBytes(keyPair.privateKey, transaction.messageBytes);
      if (existingSignature !== null && bytesEqual(newSignature, existingSignature)) {
        return;
      }
      newSignatures ||= {};
      newSignatures[address] = newSignature;
    })
  );
  if (unexpectedSigners && unexpectedSigners.size > 0) {
    const expectedSigners = Object.keys(transaction.signatures);
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION, {
      expectedAddresses: expectedSigners,
      unexpectedAddresses: [...unexpectedSigners]
    });
  }
  if (!newSignatures) {
    return transaction;
  }
  return Object.freeze({
    ...transaction,
    signatures: Object.freeze({
      ...transaction.signatures,
      ...newSignatures
    })
  });
}
function getBase64EncodedWireTransaction(transaction) {
  const wireTransactionBytes = getTransactionEncoder().encode(transaction);
  return getBase64Decoder().decode(wireTransactionBytes);
}
var TRANSACTION_PACKET_SIZE = 1280;
var TRANSACTION_PACKET_HEADER = 40 + 8;
var TRANSACTION_SIZE_LIMIT = TRANSACTION_PACKET_SIZE - TRANSACTION_PACKET_HEADER;

// node_modules/x402/node_modules/@solana/promises/dist/index.browser.mjs
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}
function addRaceContender(contender) {
  const deferreds = /* @__PURE__ */ new Set();
  const record = { deferreds, settled: false };
  Promise.resolve(contender).then(
    (value) => {
      for (const { resolve } of deferreds) {
        resolve(value);
      }
      deferreds.clear();
      record.settled = true;
    },
    (err) => {
      for (const { reject } of deferreds) {
        reject(err);
      }
      deferreds.clear();
      record.settled = true;
    }
  );
  return record;
}
var wm = /* @__PURE__ */ new WeakMap();
async function safeRace(contenders) {
  let deferred;
  const result = new Promise((resolve, reject) => {
    deferred = { reject, resolve };
    for (const contender of contenders) {
      if (!isObject(contender)) {
        Promise.resolve(contender).then(resolve, reject);
        continue;
      }
      let record = wm.get(contender);
      if (record === void 0) {
        record = addRaceContender(contender);
        record.deferreds.add(deferred);
        wm.set(contender, record);
      } else if (record.settled) {
        Promise.resolve(contender).then(resolve, reject);
      } else {
        record.deferreds.add(deferred);
      }
    }
  });
  return await result.finally(() => {
    for (const contender of contenders) {
      if (isObject(contender)) {
        const record = wm.get(contender);
        record.deferreds.delete(deferred);
      }
    }
  });
}

// node_modules/x402/node_modules/@solana/rpc-spec-types/dist/index.browser.mjs
function parseJsonWithBigInts(json) {
  return JSON.parse(wrapIntegersInBigIntValueObject(json), (_6, value) => {
    return isBigIntValueObject(value) ? unwrapBigIntValueObject(value) : value;
  });
}
function wrapIntegersInBigIntValueObject(json) {
  const out = [];
  let inQuote = false;
  for (let ii3 = 0; ii3 < json.length; ii3++) {
    let isEscaped = false;
    if (json[ii3] === "\\") {
      out.push(json[ii3++]);
      isEscaped = !isEscaped;
    }
    if (json[ii3] === '"') {
      out.push(json[ii3]);
      if (!isEscaped) {
        inQuote = !inQuote;
      }
      continue;
    }
    if (!inQuote) {
      const consumedNumber = consumeNumber(json, ii3);
      if (consumedNumber?.length) {
        ii3 += consumedNumber.length - 1;
        if (consumedNumber.match(/\.|[eE]-/)) {
          out.push(consumedNumber);
        } else {
          out.push(wrapBigIntValueObject(consumedNumber));
        }
        continue;
      }
    }
    out.push(json[ii3]);
  }
  return out.join("");
}
function consumeNumber(json, ii3) {
  const JSON_NUMBER_REGEX = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/;
  if (!json[ii3]?.match(/[-\d]/)) {
    return null;
  }
  const numberMatch = json.slice(ii3).match(JSON_NUMBER_REGEX);
  return numberMatch ? numberMatch[0] : null;
}
function wrapBigIntValueObject(value) {
  return `{"$n":"${value}"}`;
}
function unwrapBigIntValueObject({ $n: $n2 }) {
  if ($n2.match(/[eE]/)) {
    const [units, exponent] = $n2.split(/[eE]/);
    return BigInt(units) * BigInt(10) ** BigInt(exponent);
  }
  return BigInt($n2);
}
function isBigIntValueObject(value) {
  return !!value && typeof value === "object" && "$n" in value && typeof value.$n === "string";
}
var _nextMessageId = 0n;
function getNextMessageId() {
  const id = _nextMessageId;
  _nextMessageId++;
  return id.toString();
}
function createRpcMessage(request) {
  return {
    id: getNextMessageId(),
    jsonrpc: "2.0",
    method: request.methodName,
    params: request.params
  };
}
function stringifyJsonWithBigInts(value, space) {
  return unwrapBigIntValueObject2(
    JSON.stringify(value, (_6, v5) => typeof v5 === "bigint" ? wrapBigIntValueObject2(v5) : v5, space)
  );
}
function wrapBigIntValueObject2(value) {
  return { $n: `${value}` };
}
function unwrapBigIntValueObject2(value) {
  return value.replace(/\{\s*"\$n"\s*:\s*"(-?\d+)"\s*\}/g, "$1");
}

// node_modules/x402/node_modules/@solana/rpc-spec/dist/index.browser.mjs
function createRpc(rpcConfig) {
  return makeProxy(rpcConfig);
}
function makeProxy(rpcConfig) {
  return new Proxy(rpcConfig.api, {
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    get(target, p9, receiver) {
      if (p9 === "then") {
        return void 0;
      }
      return function(...rawParams) {
        const methodName = p9.toString();
        const getApiPlan = Reflect.get(target, methodName, receiver);
        if (!getApiPlan) {
          throw new SolanaError(SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD, {
            method: methodName,
            params: rawParams
          });
        }
        const apiPlan = getApiPlan(...rawParams);
        return createPendingRpcRequest(rpcConfig, apiPlan);
      };
    }
  });
}
function createPendingRpcRequest({ transport }, plan) {
  return {
    async send(options) {
      return await plan.execute({ signal: options?.abortSignal, transport });
    }
  };
}
function createJsonRpcApi(config2) {
  return new Proxy({}, {
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    get(...args) {
      const [_6, p9] = args;
      const methodName = p9.toString();
      return function(...rawParams) {
        const rawRequest = Object.freeze({ methodName, params: rawParams });
        const request = config2?.requestTransformer ? config2?.requestTransformer(rawRequest) : rawRequest;
        return Object.freeze({
          execute: async ({ signal, transport }) => {
            const payload = createRpcMessage(request);
            const response = await transport({ payload, signal });
            if (!config2?.responseTransformer) {
              return response;
            }
            return config2.responseTransformer(response, request);
          }
        });
      };
    }
  });
}
function isJsonRpcPayload(payload) {
  if (payload == null || typeof payload !== "object" || Array.isArray(payload)) {
    return false;
  }
  return "jsonrpc" in payload && payload.jsonrpc === "2.0" && "method" in payload && typeof payload.method === "string" && "params" in payload;
}

// node_modules/x402/node_modules/@solana/rpc-transformers/dist/index.browser.mjs
function downcastNodeToNumberIfBigint(value) {
  return typeof value === "bigint" ? (
    // FIXME(solana-labs/solana/issues/30341) Create a data type to represent u64 in the Solana
    // JSON RPC implementation so that we can throw away this entire patcher instead of unsafely
    // downcasting `bigints` to `numbers`.
    Number(value)
  ) : value;
}
var KEYPATH_WILDCARD = {};
function getTreeWalker(visitors) {
  return function traverse(node, state) {
    if (Array.isArray(node)) {
      return node.map((element, ii3) => {
        const nextState = {
          ...state,
          keyPath: [...state.keyPath, ii3]
        };
        return traverse(element, nextState);
      });
    } else if (typeof node === "object" && node !== null) {
      const out = {};
      for (const propName in node) {
        if (!Object.prototype.hasOwnProperty.call(node, propName)) {
          continue;
        }
        const nextState = {
          ...state,
          keyPath: [...state.keyPath, propName]
        };
        out[propName] = traverse(node[propName], nextState);
      }
      return out;
    } else {
      return visitors.reduce((acc, visitNode) => visitNode(acc, state), node);
    }
  };
}
function getTreeWalkerRequestTransformer(visitors, initialState) {
  return (request) => {
    const traverse = getTreeWalker(visitors);
    return Object.freeze({
      ...request,
      params: traverse(request.params, initialState)
    });
  };
}
function getTreeWalkerResponseTransformer(visitors, initialState) {
  return (json) => getTreeWalker(visitors)(json, initialState);
}
function getBigIntDowncastRequestTransformer() {
  return getTreeWalkerRequestTransformer([downcastNodeToNumberIfBigint], { keyPath: [] });
}
function applyDefaultCommitment({
  commitmentPropertyName,
  params,
  optionsObjectPositionInParams,
  overrideCommitment
}) {
  const paramInTargetPosition = params[optionsObjectPositionInParams];
  if (
    // There's no config.
    paramInTargetPosition === void 0 || // There is a config object.
    paramInTargetPosition && typeof paramInTargetPosition === "object" && !Array.isArray(paramInTargetPosition)
  ) {
    if (
      // The config object already has a commitment set.
      paramInTargetPosition && commitmentPropertyName in paramInTargetPosition
    ) {
      if (!paramInTargetPosition[commitmentPropertyName] || paramInTargetPosition[commitmentPropertyName] === "finalized") {
        const nextParams = [...params];
        const {
          [commitmentPropertyName]: _6,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...rest
        } = paramInTargetPosition;
        if (Object.keys(rest).length > 0) {
          nextParams[optionsObjectPositionInParams] = rest;
        } else {
          if (optionsObjectPositionInParams === nextParams.length - 1) {
            nextParams.length--;
          } else {
            nextParams[optionsObjectPositionInParams] = void 0;
          }
        }
        return nextParams;
      }
    } else if (overrideCommitment !== "finalized") {
      const nextParams = [...params];
      nextParams[optionsObjectPositionInParams] = {
        ...paramInTargetPosition,
        [commitmentPropertyName]: overrideCommitment
      };
      return nextParams;
    }
  }
  return params;
}
function getDefaultCommitmentRequestTransformer({
  defaultCommitment,
  optionsObjectPositionByMethod
}) {
  return (request) => {
    const { params, methodName } = request;
    if (!Array.isArray(params)) {
      return request;
    }
    const optionsObjectPositionInParams = optionsObjectPositionByMethod[methodName];
    if (optionsObjectPositionInParams == null) {
      return request;
    }
    return Object.freeze({
      methodName,
      params: applyDefaultCommitment({
        commitmentPropertyName: methodName === "sendTransaction" ? "preflightCommitment" : "commitment",
        optionsObjectPositionInParams,
        overrideCommitment: defaultCommitment,
        params
      })
    });
  };
}
function getIntegerOverflowNodeVisitor(onIntegerOverflow) {
  return (value, { keyPath }) => {
    if (typeof value === "bigint") {
      if (onIntegerOverflow && (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER)) {
        onIntegerOverflow(keyPath, value);
      }
    }
    return value;
  };
}
function getIntegerOverflowRequestTransformer(onIntegerOverflow) {
  return (request) => {
    const transformer = getTreeWalkerRequestTransformer(
      [getIntegerOverflowNodeVisitor((...args) => onIntegerOverflow(request, ...args))],
      { keyPath: [] }
    );
    return transformer(request);
  };
}
var OPTIONS_OBJECT_POSITION_BY_METHOD = {
  accountNotifications: 1,
  blockNotifications: 1,
  getAccountInfo: 1,
  getBalance: 1,
  getBlock: 1,
  getBlockHeight: 0,
  getBlockProduction: 0,
  getBlocks: 2,
  getBlocksWithLimit: 2,
  getEpochInfo: 0,
  getFeeForMessage: 1,
  getInflationGovernor: 0,
  getInflationReward: 1,
  getLargestAccounts: 0,
  getLatestBlockhash: 0,
  getLeaderSchedule: 1,
  getMinimumBalanceForRentExemption: 1,
  getMultipleAccounts: 1,
  getProgramAccounts: 1,
  getSignaturesForAddress: 1,
  getSlot: 0,
  getSlotLeader: 0,
  getStakeMinimumDelegation: 0,
  getSupply: 0,
  getTokenAccountBalance: 1,
  getTokenAccountsByDelegate: 2,
  getTokenAccountsByOwner: 2,
  getTokenLargestAccounts: 1,
  getTokenSupply: 1,
  getTransaction: 1,
  getTransactionCount: 0,
  getVoteAccounts: 0,
  isBlockhashValid: 1,
  logsNotifications: 1,
  programNotifications: 1,
  requestAirdrop: 2,
  sendTransaction: 1,
  signatureNotifications: 1,
  simulateTransaction: 1
};
function getDefaultRequestTransformerForSolanaRpc(config2) {
  const handleIntegerOverflow = config2?.onIntegerOverflow;
  return (request) => {
    return pipe(
      request,
      handleIntegerOverflow ? getIntegerOverflowRequestTransformer(handleIntegerOverflow) : (r17) => r17,
      getBigIntDowncastRequestTransformer(),
      getDefaultCommitmentRequestTransformer({
        defaultCommitment: config2?.defaultCommitment,
        optionsObjectPositionByMethod: OPTIONS_OBJECT_POSITION_BY_METHOD
      })
    );
  };
}
function getBigIntUpcastVisitor(allowedNumericKeyPaths) {
  return function upcastNodeToBigIntIfNumber(value, { keyPath }) {
    const isInteger2 = typeof value === "number" && Number.isInteger(value) || typeof value === "bigint";
    if (!isInteger2) return value;
    if (keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths)) {
      return Number(value);
    } else {
      return BigInt(value);
    }
  };
}
function keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths) {
  return allowedNumericKeyPaths.some((prohibitedKeyPath) => {
    if (prohibitedKeyPath.length !== keyPath.length) {
      return false;
    }
    for (let ii3 = keyPath.length - 1; ii3 >= 0; ii3--) {
      const keyPathPart = keyPath[ii3];
      const prohibitedKeyPathPart = prohibitedKeyPath[ii3];
      if (prohibitedKeyPathPart !== keyPathPart && (prohibitedKeyPathPart !== KEYPATH_WILDCARD || typeof keyPathPart !== "number")) {
        return false;
      }
    }
    return true;
  });
}
function getBigIntUpcastResponseTransformer(allowedNumericKeyPaths) {
  return getTreeWalkerResponseTransformer([getBigIntUpcastVisitor(allowedNumericKeyPaths)], { keyPath: [] });
}
function getResultResponseTransformer() {
  return (json) => json.result;
}
var jsonParsedTokenAccountsConfigs = [
  // parsed Token/Token22 token account
  ["data", "parsed", "info", "tokenAmount", "decimals"],
  ["data", "parsed", "info", "tokenAmount", "uiAmount"],
  ["data", "parsed", "info", "rentExemptReserve", "decimals"],
  ["data", "parsed", "info", "rentExemptReserve", "uiAmount"],
  ["data", "parsed", "info", "delegatedAmount", "decimals"],
  ["data", "parsed", "info", "delegatedAmount", "uiAmount"],
  ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "olderTransferFee", "transferFeeBasisPoints"],
  ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "newerTransferFee", "transferFeeBasisPoints"],
  ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "preUpdateAverageRate"],
  ["data", "parsed", "info", "extensions", KEYPATH_WILDCARD, "state", "currentRate"]
];
var jsonParsedAccountsConfigs = [
  ...jsonParsedTokenAccountsConfigs,
  // parsed AddressTableLookup account
  ["data", "parsed", "info", "lastExtendedSlotStartIndex"],
  // parsed Config account
  ["data", "parsed", "info", "slashPenalty"],
  ["data", "parsed", "info", "warmupCooldownRate"],
  // parsed Token/Token22 mint account
  ["data", "parsed", "info", "decimals"],
  // parsed Token/Token22 multisig account
  ["data", "parsed", "info", "numRequiredSigners"],
  ["data", "parsed", "info", "numValidSigners"],
  // parsed Stake account
  ["data", "parsed", "info", "stake", "delegation", "warmupCooldownRate"],
  // parsed Sysvar rent account
  ["data", "parsed", "info", "exemptionThreshold"],
  ["data", "parsed", "info", "burnPercent"],
  // parsed Vote account
  ["data", "parsed", "info", "commission"],
  ["data", "parsed", "info", "votes", KEYPATH_WILDCARD, "confirmationCount"]
];
var innerInstructionsConfigs = [
  ["index"],
  ["instructions", KEYPATH_WILDCARD, "accounts", KEYPATH_WILDCARD],
  ["instructions", KEYPATH_WILDCARD, "programIdIndex"],
  ["instructions", KEYPATH_WILDCARD, "stackHeight"]
];
var messageConfig = [
  ["addressTableLookups", KEYPATH_WILDCARD, "writableIndexes", KEYPATH_WILDCARD],
  ["addressTableLookups", KEYPATH_WILDCARD, "readonlyIndexes", KEYPATH_WILDCARD],
  ["header", "numReadonlySignedAccounts"],
  ["header", "numReadonlyUnsignedAccounts"],
  ["header", "numRequiredSignatures"],
  ["instructions", KEYPATH_WILDCARD, "accounts", KEYPATH_WILDCARD],
  ["instructions", KEYPATH_WILDCARD, "programIdIndex"],
  ["instructions", KEYPATH_WILDCARD, "stackHeight"]
];
function getSimulateTransactionAllowedNumericKeypaths() {
  return [
    ["loadedAccountsDataSize"],
    ...jsonParsedAccountsConfigs.map((c15) => ["accounts", KEYPATH_WILDCARD, ...c15]),
    ...innerInstructionsConfigs.map((c15) => ["innerInstructions", KEYPATH_WILDCARD, ...c15])
  ];
}
function getThrowSolanaErrorResponseTransformer() {
  return (json, request) => {
    const jsonRpcResponse = json;
    if ("error" in jsonRpcResponse) {
      const { error } = jsonRpcResponse;
      const isSendTransactionPreflightFailure = error && typeof error === "object" && "code" in error && (error.code === -32002 || error.code === -32002n);
      if (isSendTransactionPreflightFailure && "data" in error && error.data) {
        const treeWalker = getTreeWalkerResponseTransformer(
          [getBigIntUpcastVisitor(getSimulateTransactionAllowedNumericKeypaths())],
          { keyPath: [] }
        );
        const transformedData = treeWalker(error.data, request);
        const transformedError = { ...error, data: transformedData };
        throw getSolanaErrorFromJsonRpcError(transformedError);
      }
      throw getSolanaErrorFromJsonRpcError(jsonRpcResponse.error);
    }
    return jsonRpcResponse;
  };
}
function getDefaultResponseTransformerForSolanaRpc(config2) {
  return (response, request) => {
    const methodName = request.methodName;
    const keyPaths = config2?.allowedNumericKeyPaths && methodName ? config2.allowedNumericKeyPaths[methodName] : void 0;
    return pipe(
      response,
      (r17) => getThrowSolanaErrorResponseTransformer()(r17, request),
      (r17) => getResultResponseTransformer()(r17, request),
      (r17) => getBigIntUpcastResponseTransformer(keyPaths ?? [])(r17, request)
    );
  };
}
function getDefaultResponseTransformerForSolanaRpcSubscriptions(config2) {
  return (response, request) => {
    const methodName = request.methodName;
    const keyPaths = config2?.allowedNumericKeyPaths && methodName ? config2.allowedNumericKeyPaths[methodName] : void 0;
    return pipe(response, (r17) => getBigIntUpcastResponseTransformer(keyPaths ?? [])(r17, request));
  };
}

// node_modules/x402/node_modules/@solana/rpc-api/dist/index.browser.mjs
function createSolanaRpcApi(config2) {
  return createJsonRpcApi({
    requestTransformer: getDefaultRequestTransformerForSolanaRpc(config2),
    responseTransformer: getDefaultResponseTransformerForSolanaRpc({
      allowedNumericKeyPaths: getAllowedNumericKeypaths()
    })
  });
}
var memoizedKeypaths;
function getAllowedNumericKeypaths() {
  if (!memoizedKeypaths) {
    memoizedKeypaths = {
      getAccountInfo: jsonParsedAccountsConfigs.map((c15) => ["value", ...c15]),
      getBlock: [
        ["transactions", KEYPATH_WILDCARD, "meta", "preTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
        [
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "preTokenBalances",
          KEYPATH_WILDCARD,
          "uiTokenAmount",
          "decimals"
        ],
        ["transactions", KEYPATH_WILDCARD, "meta", "postTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
        [
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "postTokenBalances",
          KEYPATH_WILDCARD,
          "uiTokenAmount",
          "decimals"
        ],
        ["transactions", KEYPATH_WILDCARD, "meta", "rewards", KEYPATH_WILDCARD, "commission"],
        ...innerInstructionsConfigs.map((c15) => [
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "innerInstructions",
          KEYPATH_WILDCARD,
          ...c15
        ]),
        ...messageConfig.map((c15) => ["transactions", KEYPATH_WILDCARD, "transaction", "message", ...c15]),
        ["rewards", KEYPATH_WILDCARD, "commission"]
      ],
      getClusterNodes: [
        [KEYPATH_WILDCARD, "featureSet"],
        [KEYPATH_WILDCARD, "shredVersion"]
      ],
      getInflationGovernor: [["initial"], ["foundation"], ["foundationTerm"], ["taper"], ["terminal"]],
      getInflationRate: [["foundation"], ["total"], ["validator"]],
      getInflationReward: [[KEYPATH_WILDCARD, "commission"]],
      getMultipleAccounts: jsonParsedAccountsConfigs.map((c15) => ["value", KEYPATH_WILDCARD, ...c15]),
      getProgramAccounts: jsonParsedAccountsConfigs.flatMap((c15) => [
        ["value", KEYPATH_WILDCARD, "account", ...c15],
        [KEYPATH_WILDCARD, "account", ...c15]
      ]),
      getRecentPerformanceSamples: [[KEYPATH_WILDCARD, "samplePeriodSecs"]],
      getTokenAccountBalance: [
        ["value", "decimals"],
        ["value", "uiAmount"]
      ],
      getTokenAccountsByDelegate: jsonParsedTokenAccountsConfigs.map((c15) => [
        "value",
        KEYPATH_WILDCARD,
        "account",
        ...c15
      ]),
      getTokenAccountsByOwner: jsonParsedTokenAccountsConfigs.map((c15) => [
        "value",
        KEYPATH_WILDCARD,
        "account",
        ...c15
      ]),
      getTokenLargestAccounts: [
        ["value", KEYPATH_WILDCARD, "decimals"],
        ["value", KEYPATH_WILDCARD, "uiAmount"]
      ],
      getTokenSupply: [
        ["value", "decimals"],
        ["value", "uiAmount"]
      ],
      getTransaction: [
        ["meta", "preTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
        ["meta", "preTokenBalances", KEYPATH_WILDCARD, "uiTokenAmount", "decimals"],
        ["meta", "postTokenBalances", KEYPATH_WILDCARD, "accountIndex"],
        ["meta", "postTokenBalances", KEYPATH_WILDCARD, "uiTokenAmount", "decimals"],
        ["meta", "rewards", KEYPATH_WILDCARD, "commission"],
        ...innerInstructionsConfigs.map((c15) => ["meta", "innerInstructions", KEYPATH_WILDCARD, ...c15]),
        ...messageConfig.map((c15) => ["transaction", "message", ...c15])
      ],
      getVersion: [["feature-set"]],
      getVoteAccounts: [
        ["current", KEYPATH_WILDCARD, "commission"],
        ["delinquent", KEYPATH_WILDCARD, "commission"]
      ],
      simulateTransaction: [
        ["value", "loadedAccountsDataSize"],
        ...jsonParsedAccountsConfigs.map((c15) => ["value", "accounts", KEYPATH_WILDCARD, ...c15]),
        ...innerInstructionsConfigs.map((c15) => ["value", "innerInstructions", KEYPATH_WILDCARD, ...c15])
      ]
    };
  }
  return memoizedKeypaths;
}

// node_modules/x402/node_modules/@solana/rpc-transport-http/dist/index.browser.mjs
var DISALLOWED_HEADERS = {
  accept: true,
  "content-length": true,
  "content-type": true
};
var FORBIDDEN_HEADERS = /* @__PURE__ */ Object.assign(
  {
    "accept-charset": true,
    "access-control-request-headers": true,
    "access-control-request-method": true,
    connection: true,
    "content-length": true,
    cookie: true,
    date: true,
    dnt: true,
    expect: true,
    host: true,
    "keep-alive": true,
    "permissions-policy": true,
    // Prefix matching is implemented in code, below.
    // 'proxy-': true,
    // 'sec-': true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    via: true
  },
  { "accept-encoding": true },
  { origin: true }
);
function assertIsAllowedHttpRequestHeaders(headers) {
  const badHeaders = Object.keys(headers).filter((headerName) => {
    const lowercaseHeaderName = headerName.toLowerCase();
    return DISALLOWED_HEADERS[headerName.toLowerCase()] === true || FORBIDDEN_HEADERS[headerName.toLowerCase()] === true || lowercaseHeaderName.startsWith("proxy-") || lowercaseHeaderName.startsWith("sec-");
  });
  if (badHeaders.length > 0) {
    throw new SolanaError(SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN, {
      headers: badHeaders
    });
  }
}
function normalizeHeaders(headers) {
  const out = {};
  for (const headerName in headers) {
    out[headerName.toLowerCase()] = headers[headerName];
  }
  return out;
}
var didWarnDispatcherWasSuppliedInNonNodeEnvironment = false;
function warnDispatcherWasSuppliedInNonNodeEnvironment() {
  if (didWarnDispatcherWasSuppliedInNonNodeEnvironment) {
    return;
  }
  didWarnDispatcherWasSuppliedInNonNodeEnvironment = true;
  console.warn(
    "You have supplied a `Dispatcher` to `createHttpTransport()`. It has been ignored because Undici dispatchers only work in Node environments. To eliminate this warning, omit the `dispatcher_NODE_ONLY` property from your config when running in a non-Node environment."
  );
}
function createHttpTransport(config2) {
  if ("dispatcher_NODE_ONLY" in config2) {
    warnDispatcherWasSuppliedInNonNodeEnvironment();
  }
  const { fromJson, headers, toJson, url } = config2;
  if (headers) {
    assertIsAllowedHttpRequestHeaders(headers);
  }
  let dispatcherConfig;
  const customHeaders = headers && normalizeHeaders(headers);
  return async function makeHttpRequest({
    payload,
    signal
  }) {
    const body = toJson ? toJson(payload) : JSON.stringify(payload);
    const requestInfo = {
      ...dispatcherConfig,
      body,
      headers: {
        ...customHeaders,
        // Keep these headers lowercase so they will override any user-supplied headers above.
        accept: "application/json",
        "content-length": body.length.toString(),
        "content-type": "application/json; charset=utf-8"
      },
      method: "POST",
      signal
    };
    const response = await fetch(url, requestInfo);
    if (!response.ok) {
      throw new SolanaError(SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR, {
        headers: response.headers,
        message: response.statusText,
        statusCode: response.status
      });
    }
    if (fromJson) {
      return fromJson(await response.text(), payload);
    }
    return await response.json();
  };
}
var SOLANA_RPC_METHODS = [
  "getAccountInfo",
  "getBalance",
  "getBlock",
  "getBlockCommitment",
  "getBlockHeight",
  "getBlockProduction",
  "getBlocks",
  "getBlocksWithLimit",
  "getBlockTime",
  "getClusterNodes",
  "getEpochInfo",
  "getEpochSchedule",
  "getFeeForMessage",
  "getFirstAvailableBlock",
  "getGenesisHash",
  "getHealth",
  "getHighestSnapshotSlot",
  "getIdentity",
  "getInflationGovernor",
  "getInflationRate",
  "getInflationReward",
  "getLargestAccounts",
  "getLatestBlockhash",
  "getLeaderSchedule",
  "getMaxRetransmitSlot",
  "getMaxShredInsertSlot",
  "getMinimumBalanceForRentExemption",
  "getMultipleAccounts",
  "getProgramAccounts",
  "getRecentPerformanceSamples",
  "getRecentPrioritizationFees",
  "getSignaturesForAddress",
  "getSignatureStatuses",
  "getSlot",
  "getSlotLeader",
  "getSlotLeaders",
  "getStakeMinimumDelegation",
  "getSupply",
  "getTokenAccountBalance",
  "getTokenAccountsByDelegate",
  "getTokenAccountsByOwner",
  "getTokenLargestAccounts",
  "getTokenSupply",
  "getTransaction",
  "getTransactionCount",
  "getVersion",
  "getVoteAccounts",
  "index",
  "isBlockhashValid",
  "minimumLedgerSlot",
  "requestAirdrop",
  "sendTransaction",
  "simulateTransaction"
];
function isSolanaRequest(payload) {
  return isJsonRpcPayload(payload) && SOLANA_RPC_METHODS.includes(payload.method);
}
function createHttpTransportForSolanaRpc(config2) {
  return createHttpTransport({
    ...config2,
    fromJson: (rawResponse, payload) => isSolanaRequest(payload) ? parseJsonWithBigInts(rawResponse) : JSON.parse(rawResponse),
    toJson: (payload) => isSolanaRequest(payload) ? stringifyJsonWithBigInts(payload) : JSON.stringify(payload)
  });
}

// node_modules/x402/node_modules/@solana/fast-stable-stringify/dist/index.browser.mjs
var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
  const keys = [];
  for (const name in obj) {
    keys.push(name);
  }
  return keys;
};
function stringify(val, isArrayProp) {
  let i19, max, str, keys, key, propVal, toStr;
  if (val === true) {
    return "true";
  }
  if (val === false) {
    return "false";
  }
  switch (typeof val) {
    case "object":
      if (val === null) {
        return null;
      } else if ("toJSON" in val && typeof val.toJSON === "function") {
        return stringify(val.toJSON(), isArrayProp);
      } else {
        toStr = objToString.call(val);
        if (toStr === "[object Array]") {
          str = "[";
          max = val.length - 1;
          for (i19 = 0; i19 < max; i19++) {
            str += stringify(val[i19], true) + ",";
          }
          if (max > -1) {
            str += stringify(val[i19], true);
          }
          return str + "]";
        } else if (toStr === "[object Object]") {
          keys = objKeys(val).sort();
          max = keys.length;
          str = "";
          i19 = 0;
          while (i19 < max) {
            key = keys[i19];
            propVal = stringify(val[key], false);
            if (propVal !== void 0) {
              if (str) {
                str += ",";
              }
              str += JSON.stringify(key) + ":" + propVal;
            }
            i19++;
          }
          return "{" + str + "}";
        } else {
          return JSON.stringify(val);
        }
      }
    case "function":
    case "undefined":
      return isArrayProp ? null : void 0;
    case "bigint":
      return `${val.toString()}n`;
    case "string":
      return JSON.stringify(val);
    default:
      return isFinite(val) ? val : null;
  }
}
function index_default(val) {
  const returnVal = stringify(val, false);
  if (returnVal !== void 0) {
    return "" + returnVal;
  }
}

// node_modules/x402/node_modules/@solana/rpc/dist/index.browser.mjs
function createSolanaJsonRpcIntegerOverflowError(methodName, keyPath, value) {
  let argumentLabel = "";
  if (typeof keyPath[0] === "number") {
    const argPosition = keyPath[0] + 1;
    const lastDigit = argPosition % 10;
    const lastTwoDigits = argPosition % 100;
    if (lastDigit == 1 && lastTwoDigits != 11) {
      argumentLabel = argPosition + "st";
    } else if (lastDigit == 2 && lastTwoDigits != 12) {
      argumentLabel = argPosition + "nd";
    } else if (lastDigit == 3 && lastTwoDigits != 13) {
      argumentLabel = argPosition + "rd";
    } else {
      argumentLabel = argPosition + "th";
    }
  } else {
    argumentLabel = `\`${keyPath[0].toString()}\``;
  }
  const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart) => typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
  const error = new SolanaError(SOLANA_ERROR__RPC__INTEGER_OVERFLOW, {
    argumentLabel,
    keyPath,
    methodName,
    optionalPathLabel: path ? ` at path \`${path}\`` : "",
    value,
    ...path !== void 0 ? { path } : void 0
  });
  safeCaptureStackTrace(error, createSolanaJsonRpcIntegerOverflowError);
  return error;
}
var DEFAULT_RPC_CONFIG = {
  defaultCommitment: "confirmed",
  onIntegerOverflow(request, keyPath, value) {
    throw createSolanaJsonRpcIntegerOverflowError(request.methodName, keyPath, value);
  }
};
var o16 = globalThis.AbortController;
var EXPLICIT_ABORT_TOKEN;
function createExplicitAbortToken() {
  return true ? {
    EXPLICIT_ABORT_TOKEN: "This object is thrown from the request that underlies a series of coalesced requests when the last request in that series aborts"
  } : {};
}
function getRpcTransportWithRequestCoalescing(transport, getDeduplicationKey) {
  let coalescedRequestsByDeduplicationKey;
  return async function makeCoalescedHttpRequest(request) {
    const { payload, signal } = request;
    const deduplicationKey = getDeduplicationKey(payload);
    if (deduplicationKey === void 0) {
      return await transport(request);
    }
    if (!coalescedRequestsByDeduplicationKey) {
      queueMicrotask(() => {
        coalescedRequestsByDeduplicationKey = void 0;
      });
      coalescedRequestsByDeduplicationKey = {};
    }
    if (coalescedRequestsByDeduplicationKey[deduplicationKey] == null) {
      const abortController = new o16();
      const responsePromise = (async () => {
        try {
          return await transport({
            ...request,
            signal: abortController.signal
          });
        } catch (e14) {
          if (e14 === (EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken())) {
            return;
          }
          throw e14;
        }
      })();
      coalescedRequestsByDeduplicationKey[deduplicationKey] = {
        abortController,
        numConsumers: 0,
        responsePromise
      };
    }
    const coalescedRequest = coalescedRequestsByDeduplicationKey[deduplicationKey];
    coalescedRequest.numConsumers++;
    if (signal) {
      const responsePromise = coalescedRequest.responsePromise;
      return await new Promise((resolve, reject) => {
        const handleAbort = (e14) => {
          signal.removeEventListener("abort", handleAbort);
          coalescedRequest.numConsumers -= 1;
          queueMicrotask(() => {
            if (coalescedRequest.numConsumers === 0) {
              const abortController = coalescedRequest.abortController;
              abortController.abort(EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken());
            }
          });
          reject(e14.target.reason);
        };
        signal.addEventListener("abort", handleAbort);
        responsePromise.then(resolve).catch(reject).finally(() => {
          signal.removeEventListener("abort", handleAbort);
        });
      });
    } else {
      return await coalescedRequest.responsePromise;
    }
  };
}
function getSolanaRpcPayloadDeduplicationKey(payload) {
  return isJsonRpcPayload(payload) ? index_default([payload.method, payload.params]) : void 0;
}
function normalizeHeaders2(headers) {
  const out = {};
  for (const headerName in headers) {
    out[headerName.toLowerCase()] = headers[headerName];
  }
  return out;
}
function createDefaultRpcTransport(config2) {
  return pipe(
    createHttpTransportForSolanaRpc({
      ...config2,
      headers: {
        ...false,
        ...config2.headers ? normalizeHeaders2(config2.headers) : void 0,
        ...{
          // Keep these headers lowercase so they will override any user-supplied headers above.
          "solana-client": `js/${"5.5.1"}`
        }
      }
    }),
    (transport) => getRpcTransportWithRequestCoalescing(transport, getSolanaRpcPayloadDeduplicationKey)
  );
}
function createSolanaRpc(clusterUrl, config2) {
  return createSolanaRpcFromTransport(createDefaultRpcTransport({ url: clusterUrl, ...config2 }));
}
function createSolanaRpcFromTransport(transport) {
  return createRpc({
    api: createSolanaRpcApi(DEFAULT_RPC_CONFIG),
    transport
  });
}

// node_modules/x402/node_modules/@solana/subscribable/dist/index.browser.mjs
var o17 = globalThis.AbortController;
var t14 = globalThis.EventTarget;
var EXPLICIT_ABORT_TOKEN2;
function createExplicitAbortToken2() {
  return Symbol(
    true ? "This symbol is thrown from a socket's iterator when the connection is explicitly aborted by the user" : void 0
  );
}
var UNINITIALIZED = Symbol();
function createAsyncIterableFromDataPublisher({
  abortSignal,
  dataChannelName,
  dataPublisher,
  errorChannelName
}) {
  const iteratorState = /* @__PURE__ */ new Map();
  function publishErrorToAllIterators(reason) {
    for (const [iteratorKey, state] of iteratorState.entries()) {
      if (state.__hasPolled) {
        iteratorState.delete(iteratorKey);
        state.onError(reason);
      } else {
        state.publishQueue.push({
          __type: 1,
          err: reason
        });
      }
    }
  }
  const abortController = new o17();
  abortSignal.addEventListener("abort", () => {
    abortController.abort();
    publishErrorToAllIterators(EXPLICIT_ABORT_TOKEN2 ||= createExplicitAbortToken2());
  });
  const options = { signal: abortController.signal };
  let firstError = UNINITIALIZED;
  dataPublisher.on(
    errorChannelName,
    (err) => {
      if (firstError === UNINITIALIZED) {
        firstError = err;
        abortController.abort();
        publishErrorToAllIterators(err);
      }
    },
    options
  );
  dataPublisher.on(
    dataChannelName,
    (data) => {
      iteratorState.forEach((state, iteratorKey) => {
        if (state.__hasPolled) {
          const { onData } = state;
          iteratorState.set(iteratorKey, { __hasPolled: false, publishQueue: [] });
          onData(data);
        } else {
          state.publishQueue.push({
            __type: 0,
            data
          });
        }
      });
    },
    options
  );
  return {
    async *[Symbol.asyncIterator]() {
      if (abortSignal.aborted) {
        return;
      }
      if (firstError !== UNINITIALIZED) {
        throw firstError;
      }
      const iteratorKey = Symbol();
      iteratorState.set(iteratorKey, { __hasPolled: false, publishQueue: [] });
      try {
        while (true) {
          const state = iteratorState.get(iteratorKey);
          if (!state) {
            throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING);
          }
          if (state.__hasPolled) {
            throw new SolanaError(
              SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE
            );
          }
          const publishQueue = state.publishQueue;
          try {
            if (publishQueue.length) {
              state.publishQueue = [];
              for (const item of publishQueue) {
                if (item.__type === 0) {
                  yield item.data;
                } else {
                  throw item.err;
                }
              }
            } else {
              yield await new Promise((resolve, reject) => {
                iteratorState.set(iteratorKey, {
                  __hasPolled: true,
                  onData: resolve,
                  onError: reject
                });
              });
            }
          } catch (e14) {
            if (e14 === (EXPLICIT_ABORT_TOKEN2 ||= createExplicitAbortToken2())) {
              return;
            } else {
              throw e14;
            }
          }
        }
      } finally {
        iteratorState.delete(iteratorKey);
      }
    }
  };
}
function getDataPublisherFromEventEmitter(eventEmitter) {
  return {
    on(channelName, subscriber, options) {
      function innerListener(ev) {
        if (ev instanceof CustomEvent) {
          const data = ev.detail;
          subscriber(data);
        } else {
          subscriber();
        }
      }
      eventEmitter.addEventListener(channelName, innerListener, options);
      return () => {
        eventEmitter.removeEventListener(channelName, innerListener);
      };
    }
  };
}
function demultiplexDataPublisher(publisher, sourceChannelName, messageTransformer) {
  let innerPublisherState;
  const eventTarget = new t14();
  const demultiplexedDataPublisher = getDataPublisherFromEventEmitter(eventTarget);
  return {
    ...demultiplexedDataPublisher,
    on(channelName, subscriber, options) {
      if (!innerPublisherState) {
        const innerPublisherUnsubscribe = publisher.on(sourceChannelName, (sourceMessage) => {
          const transformResult = messageTransformer(sourceMessage);
          if (!transformResult) {
            return;
          }
          const [destinationChannelName, message] = transformResult;
          eventTarget.dispatchEvent(
            new CustomEvent(destinationChannelName, {
              detail: message
            })
          );
        });
        innerPublisherState = {
          dispose: innerPublisherUnsubscribe,
          numSubscribers: 0
        };
      }
      innerPublisherState.numSubscribers++;
      const unsubscribe = demultiplexedDataPublisher.on(channelName, subscriber, options);
      let isActive = true;
      function handleUnsubscribe() {
        if (!isActive) {
          return;
        }
        isActive = false;
        options?.signal.removeEventListener("abort", handleUnsubscribe);
        innerPublisherState.numSubscribers--;
        if (innerPublisherState.numSubscribers === 0) {
          innerPublisherState.dispose();
          innerPublisherState = void 0;
        }
        unsubscribe();
      }
      options?.signal.addEventListener("abort", handleUnsubscribe);
      return handleUnsubscribe;
    }
  };
}

// node_modules/x402/node_modules/@solana/rpc-subscriptions-spec/dist/index.browser.mjs
function createSubscriptionRpc(rpcConfig) {
  return new Proxy(rpcConfig.api, {
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    get(target, p9, receiver) {
      if (p9 === "then") {
        return void 0;
      }
      return function(...rawParams) {
        const notificationName = p9.toString();
        const createRpcSubscriptionPlan = Reflect.get(target, notificationName, receiver);
        if (!createRpcSubscriptionPlan) {
          throw new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN, {
            notificationName
          });
        }
        const subscriptionPlan = createRpcSubscriptionPlan(...rawParams);
        return createPendingRpcSubscription(rpcConfig.transport, subscriptionPlan);
      };
    }
  });
}
function createPendingRpcSubscription(transport, subscriptionsPlan) {
  return {
    async subscribe({ abortSignal }) {
      const notificationsDataPublisher = await transport({
        signal: abortSignal,
        ...subscriptionsPlan
      });
      return createAsyncIterableFromDataPublisher({
        abortSignal,
        dataChannelName: "notification",
        dataPublisher: notificationsDataPublisher,
        errorChannelName: "error"
      });
    }
  };
}
function createRpcSubscriptionsApi(config2) {
  return new Proxy({}, {
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    get(...args) {
      const [_6, p9] = args;
      const methodName = p9.toString();
      return function(...params) {
        const rawRequest = { methodName, params };
        const request = config2.requestTransformer ? config2.requestTransformer(rawRequest) : rawRequest;
        return {
          execute(planConfig) {
            return config2.planExecutor({ ...planConfig, request });
          },
          request
        };
      };
    }
  });
}
function transformChannelInboundMessages(channel, transform) {
  return Object.freeze({
    ...channel,
    on(type, subscriber, options) {
      if (type !== "message") {
        return channel.on(
          type,
          subscriber,
          options
        );
      }
      return channel.on(
        "message",
        (message) => subscriber(transform(message)),
        options
      );
    }
  });
}
function transformChannelOutboundMessages(channel, transform) {
  return Object.freeze({
    ...channel,
    send: (message) => channel.send(transform(message))
  });
}
var o18 = globalThis.AbortController;
var subscriberCountBySubscriptionIdByChannel = /* @__PURE__ */ new WeakMap();
function decrementSubscriberCountAndReturnNewCount(channel, subscriptionId) {
  return augmentSubscriberCountAndReturnNewCount(-1, channel, subscriptionId);
}
function incrementSubscriberCount(channel, subscriptionId) {
  augmentSubscriberCountAndReturnNewCount(1, channel, subscriptionId);
}
function getSubscriberCountBySubscriptionIdForChannel(channel) {
  let subscriberCountBySubscriptionId = subscriberCountBySubscriptionIdByChannel.get(channel);
  if (!subscriberCountBySubscriptionId) {
    subscriberCountBySubscriptionIdByChannel.set(channel, subscriberCountBySubscriptionId = {});
  }
  return subscriberCountBySubscriptionId;
}
function augmentSubscriberCountAndReturnNewCount(amount, channel, subscriptionId) {
  if (subscriptionId === void 0) {
    return;
  }
  const subscriberCountBySubscriptionId = getSubscriberCountBySubscriptionIdForChannel(channel);
  if (!subscriberCountBySubscriptionId[subscriptionId] && amount > 0) {
    subscriberCountBySubscriptionId[subscriptionId] = 0;
  }
  const newCount = amount + subscriberCountBySubscriptionId[subscriptionId];
  if (newCount <= 0) {
    delete subscriberCountBySubscriptionId[subscriptionId];
  } else {
    subscriberCountBySubscriptionId[subscriptionId] = newCount;
  }
  return newCount;
}
var cache = /* @__PURE__ */ new WeakMap();
function getMemoizedDemultiplexedNotificationPublisherFromChannelAndResponseTransformer(channel, subscribeRequest, responseTransformer) {
  let publisherByResponseTransformer = cache.get(channel);
  if (!publisherByResponseTransformer) {
    cache.set(channel, publisherByResponseTransformer = /* @__PURE__ */ new WeakMap());
  }
  const responseTransformerKey = responseTransformer ?? channel;
  let publisher = publisherByResponseTransformer.get(responseTransformerKey);
  if (!publisher) {
    publisherByResponseTransformer.set(
      responseTransformerKey,
      publisher = demultiplexDataPublisher(channel, "message", (rawMessage) => {
        const message = rawMessage;
        if (!("method" in message)) {
          return;
        }
        const transformedNotification = responseTransformer ? responseTransformer(message.params.result, subscribeRequest) : message.params.result;
        return [`notification:${message.params.subscription}`, transformedNotification];
      })
    );
  }
  return publisher;
}
async function executeRpcPubSubSubscriptionPlan({
  channel,
  responseTransformer,
  signal,
  subscribeRequest,
  unsubscribeMethodName
}) {
  let subscriptionId;
  channel.on(
    "error",
    () => {
      subscriptionId = void 0;
      subscriberCountBySubscriptionIdByChannel.delete(channel);
    },
    { signal }
  );
  const abortPromise = new Promise((_6, reject) => {
    function handleAbort() {
      if (decrementSubscriberCountAndReturnNewCount(channel, subscriptionId) === 0) {
        const unsubscribePayload = createRpcMessage({
          methodName: unsubscribeMethodName,
          params: [subscriptionId]
        });
        subscriptionId = void 0;
        channel.send(unsubscribePayload).catch(() => {
        });
      }
      reject(this.reason);
    }
    if (signal.aborted) {
      handleAbort.call(signal);
    } else {
      signal.addEventListener("abort", handleAbort);
    }
  });
  const subscribePayload = createRpcMessage(subscribeRequest);
  await channel.send(subscribePayload);
  const subscriptionIdPromise = new Promise((resolve, reject) => {
    const abortController = new o18();
    signal.addEventListener("abort", abortController.abort.bind(abortController));
    const options = { signal: abortController.signal };
    channel.on(
      "error",
      (err) => {
        abortController.abort();
        reject(err);
      },
      options
    );
    channel.on(
      "message",
      (message) => {
        if (message && typeof message === "object" && "id" in message && message.id === subscribePayload.id) {
          abortController.abort();
          if ("error" in message) {
            reject(getSolanaErrorFromJsonRpcError(message.error));
          } else {
            resolve(message.result);
          }
        }
      },
      options
    );
  });
  subscriptionId = await safeRace([abortPromise, subscriptionIdPromise]);
  if (subscriptionId == null) {
    throw new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID);
  }
  incrementSubscriberCount(channel, subscriptionId);
  const notificationPublisher = getMemoizedDemultiplexedNotificationPublisherFromChannelAndResponseTransformer(
    channel,
    subscribeRequest,
    responseTransformer
  );
  const notificationKey = `notification:${subscriptionId}`;
  return {
    on(type, listener, options) {
      switch (type) {
        case "notification":
          return notificationPublisher.on(
            notificationKey,
            listener,
            options
          );
        case "error":
          return channel.on(
            "error",
            listener,
            options
          );
        default:
          throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED, {
            channelName: type,
            supportedChannelNames: ["notification", "error"]
          });
      }
    }
  };
}

// node_modules/x402/node_modules/@solana/rpc-subscriptions-api/dist/index.browser.mjs
function createSolanaRpcSubscriptionsApi_INTERNAL(config2) {
  const requestTransformer = getDefaultRequestTransformerForSolanaRpc(config2);
  const responseTransformer = getDefaultResponseTransformerForSolanaRpcSubscriptions({
    allowedNumericKeyPaths: getAllowedNumericKeypaths2()
  });
  return createRpcSubscriptionsApi({
    planExecutor({ request, ...rest }) {
      return executeRpcPubSubSubscriptionPlan({
        ...rest,
        responseTransformer,
        subscribeRequest: { ...request, methodName: request.methodName.replace(/Notifications$/, "Subscribe") },
        unsubscribeMethodName: request.methodName.replace(/Notifications$/, "Unsubscribe")
      });
    },
    requestTransformer
  });
}
function createSolanaRpcSubscriptionsApi(config2) {
  return createSolanaRpcSubscriptionsApi_INTERNAL(config2);
}
var memoizedKeypaths2;
function getAllowedNumericKeypaths2() {
  if (!memoizedKeypaths2) {
    memoizedKeypaths2 = {
      accountNotifications: jsonParsedAccountsConfigs.map((c15) => ["value", ...c15]),
      blockNotifications: [
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "preTokenBalances",
          KEYPATH_WILDCARD,
          "accountIndex"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "preTokenBalances",
          KEYPATH_WILDCARD,
          "uiTokenAmount",
          "decimals"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "postTokenBalances",
          KEYPATH_WILDCARD,
          "accountIndex"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "postTokenBalances",
          KEYPATH_WILDCARD,
          "uiTokenAmount",
          "decimals"
        ],
        ["value", "block", "transactions", KEYPATH_WILDCARD, "meta", "rewards", KEYPATH_WILDCARD, "commission"],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "innerInstructions",
          KEYPATH_WILDCARD,
          "index"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "innerInstructions",
          KEYPATH_WILDCARD,
          "instructions",
          KEYPATH_WILDCARD,
          "programIdIndex"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "meta",
          "innerInstructions",
          KEYPATH_WILDCARD,
          "instructions",
          KEYPATH_WILDCARD,
          "accounts",
          KEYPATH_WILDCARD
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "addressTableLookups",
          KEYPATH_WILDCARD,
          "writableIndexes",
          KEYPATH_WILDCARD
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "addressTableLookups",
          KEYPATH_WILDCARD,
          "readonlyIndexes",
          KEYPATH_WILDCARD
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "instructions",
          KEYPATH_WILDCARD,
          "programIdIndex"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "instructions",
          KEYPATH_WILDCARD,
          "accounts",
          KEYPATH_WILDCARD
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "header",
          "numReadonlySignedAccounts"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "header",
          "numReadonlyUnsignedAccounts"
        ],
        [
          "value",
          "block",
          "transactions",
          KEYPATH_WILDCARD,
          "transaction",
          "message",
          "header",
          "numRequiredSignatures"
        ],
        ["value", "block", "rewards", KEYPATH_WILDCARD, "commission"]
      ],
      programNotifications: jsonParsedAccountsConfigs.flatMap((c15) => [
        ["value", KEYPATH_WILDCARD, "account", ...c15],
        [KEYPATH_WILDCARD, "account", ...c15]
      ])
    };
  }
  return memoizedKeypaths2;
}

// node_modules/x402/node_modules/@solana/rpc-subscriptions-channel-websocket/dist/index.browser.mjs
var t15 = globalThis.EventTarget;
var e11 = globalThis.WebSocket;
var NORMAL_CLOSURE_CODE = 1e3;
function createWebSocketChannel({
  sendBufferHighWatermark,
  signal,
  url
}) {
  if (signal.aborted) {
    return Promise.reject(signal.reason);
  }
  let bufferDrainWatcher;
  let hasConnected = false;
  const listenerRemovers = /* @__PURE__ */ new Set();
  function cleanupListeners() {
    listenerRemovers.forEach((r17) => {
      r17();
    });
    listenerRemovers.clear();
  }
  function handleAbort() {
    cleanupListeners();
    if (!hasConnected) {
      rejectOpen(signal.reason);
    }
    if (webSocket.readyState !== e11.CLOSED && webSocket.readyState !== e11.CLOSING) {
      webSocket.close(NORMAL_CLOSURE_CODE);
    }
  }
  function handleClose(ev) {
    cleanupListeners();
    bufferDrainWatcher?.onCancel();
    signal.removeEventListener("abort", handleAbort);
    webSocket.removeEventListener("close", handleClose);
    webSocket.removeEventListener("error", handleError);
    webSocket.removeEventListener("message", handleMessage);
    webSocket.removeEventListener("open", handleOpen);
    if (!signal.aborted && !(ev.wasClean && ev.code === NORMAL_CLOSURE_CODE)) {
      eventTarget.dispatchEvent(
        new CustomEvent("error", {
          detail: new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED, {
            cause: ev
          })
        })
      );
    }
  }
  function handleError(ev) {
    if (signal.aborted) {
      return;
    }
    if (!hasConnected) {
      const failedToConnectError = new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT, {
        errorEvent: ev
      });
      rejectOpen(failedToConnectError);
      eventTarget.dispatchEvent(
        new CustomEvent("error", {
          detail: failedToConnectError
        })
      );
    }
  }
  function handleMessage(ev) {
    if (signal.aborted) {
      return;
    }
    eventTarget.dispatchEvent(new CustomEvent("message", { detail: ev.data }));
  }
  const eventTarget = new t15();
  const dataPublisher = getDataPublisherFromEventEmitter(eventTarget);
  function handleOpen() {
    hasConnected = true;
    resolveOpen({
      ...dataPublisher,
      async send(message) {
        if (webSocket.readyState !== e11.OPEN) {
          throw new SolanaError(SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED);
        }
        if (!bufferDrainWatcher && webSocket.bufferedAmount > sendBufferHighWatermark) {
          let onCancel;
          const promise = new Promise((resolve, reject) => {
            const intervalId = setInterval(() => {
              if (webSocket.readyState !== e11.OPEN || !(webSocket.bufferedAmount > sendBufferHighWatermark)) {
                clearInterval(intervalId);
                bufferDrainWatcher = void 0;
                resolve();
              }
            }, 16);
            onCancel = () => {
              bufferDrainWatcher = void 0;
              clearInterval(intervalId);
              reject(
                new SolanaError(
                  SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED
                )
              );
            };
          });
          bufferDrainWatcher = {
            onCancel,
            promise
          };
        }
        if (bufferDrainWatcher) {
          if (ArrayBuffer.isView(message) && !(message instanceof DataView)) {
            const TypedArrayConstructor = message.constructor;
            message = new TypedArrayConstructor(message);
          }
          await bufferDrainWatcher.promise;
        }
        webSocket.send(message);
      }
    });
  }
  const webSocket = new e11(url);
  signal.addEventListener("abort", handleAbort);
  webSocket.addEventListener("close", handleClose);
  webSocket.addEventListener("error", handleError);
  webSocket.addEventListener("message", handleMessage);
  webSocket.addEventListener("open", handleOpen);
  let rejectOpen;
  let resolveOpen;
  return new Promise((resolve, reject) => {
    rejectOpen = reject;
    resolveOpen = resolve;
  });
}

// node_modules/x402/node_modules/@solana/rpc-subscriptions/dist/index.browser.mjs
function createSolanaJsonRpcIntegerOverflowError2(methodName, keyPath, value) {
  let argumentLabel = "";
  if (typeof keyPath[0] === "number") {
    const argPosition = keyPath[0] + 1;
    const lastDigit = argPosition % 10;
    const lastTwoDigits = argPosition % 100;
    if (lastDigit == 1 && lastTwoDigits != 11) {
      argumentLabel = argPosition + "st";
    } else if (lastDigit == 2 && lastTwoDigits != 12) {
      argumentLabel = argPosition + "nd";
    } else if (lastDigit == 3 && lastTwoDigits != 13) {
      argumentLabel = argPosition + "rd";
    } else {
      argumentLabel = argPosition + "th";
    }
  } else {
    argumentLabel = `\`${keyPath[0].toString()}\``;
  }
  const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart) => typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
  const error = new SolanaError(SOLANA_ERROR__RPC__INTEGER_OVERFLOW, {
    argumentLabel,
    keyPath,
    methodName,
    optionalPathLabel: path ? ` at path \`${path}\`` : "",
    value,
    ...path !== void 0 ? { path } : void 0
  });
  safeCaptureStackTrace(error, createSolanaJsonRpcIntegerOverflowError2);
  return error;
}
var DEFAULT_RPC_SUBSCRIPTIONS_CONFIG = {
  defaultCommitment: "confirmed",
  onIntegerOverflow(request, keyPath, value) {
    throw createSolanaJsonRpcIntegerOverflowError2(request.methodName, keyPath, value);
  }
};
var o19 = globalThis.AbortController;
var PING_PAYLOAD = {
  jsonrpc: "2.0",
  method: "ping"
};
function getRpcSubscriptionsChannelWithAutoping({
  abortSignal: callerAbortSignal,
  channel,
  intervalMs
}) {
  let intervalId;
  function sendPing() {
    channel.send(PING_PAYLOAD).catch((e14) => {
      if (isSolanaError(e14, SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED)) {
        pingerAbortController.abort();
      }
    });
  }
  function restartPingTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(sendPing, intervalMs);
  }
  const pingerAbortController = new o19();
  pingerAbortController.signal.addEventListener("abort", () => {
    clearInterval(intervalId);
  });
  callerAbortSignal.addEventListener("abort", () => {
    pingerAbortController.abort();
  });
  channel.on(
    "error",
    () => {
      pingerAbortController.abort();
    },
    { signal: pingerAbortController.signal }
  );
  channel.on("message", restartPingTimer, { signal: pingerAbortController.signal });
  if (globalThis.navigator.onLine) {
    restartPingTimer();
  }
  {
    globalThis.addEventListener(
      "offline",
      function handleOffline() {
        clearInterval(intervalId);
      },
      { signal: pingerAbortController.signal }
    );
    globalThis.addEventListener(
      "online",
      function handleOnline() {
        sendPing();
        restartPingTimer();
      },
      { signal: pingerAbortController.signal }
    );
  }
  return {
    ...channel,
    send(...args) {
      if (!pingerAbortController.signal.aborted) {
        restartPingTimer();
      }
      return channel.send(...args);
    }
  };
}
function createChannelPool() {
  return {
    entries: [],
    freeChannelIndex: -1
  };
}
function getChannelPoolingChannelCreator(createChannel, { maxSubscriptionsPerChannel, minChannels }) {
  const pool = createChannelPool();
  function recomputeFreeChannelIndex() {
    if (pool.entries.length < minChannels) {
      pool.freeChannelIndex = -1;
      return;
    }
    let mostFreeChannel;
    for (let ii3 = 0; ii3 < pool.entries.length; ii3++) {
      const nextPoolIndex = (pool.freeChannelIndex + ii3 + 2) % pool.entries.length;
      const nextPoolEntry = (
        // Start from the item two positions after the current item. This way, the
        // search will finish on the item after the current one. This ensures that, if
        // any channels tie for having the most capacity, the one that will be chosen is
        // the one immediately to the current one's right (wrapping around).
        pool.entries[nextPoolIndex]
      );
      if (nextPoolEntry.subscriptionCount < maxSubscriptionsPerChannel && (!mostFreeChannel || mostFreeChannel.subscriptionCount >= nextPoolEntry.subscriptionCount)) {
        mostFreeChannel = {
          poolIndex: nextPoolIndex,
          subscriptionCount: nextPoolEntry.subscriptionCount
        };
      }
    }
    pool.freeChannelIndex = mostFreeChannel?.poolIndex ?? -1;
  }
  return function getExistingChannelWithMostCapacityOrCreateChannel({ abortSignal }) {
    let poolEntry;
    function destroyPoolEntry() {
      const index = pool.entries.findIndex((entry) => entry === poolEntry);
      pool.entries.splice(index, 1);
      poolEntry.dispose();
      recomputeFreeChannelIndex();
    }
    if (pool.freeChannelIndex === -1) {
      const abortController = new o19();
      const newChannelPromise = createChannel({ abortSignal: abortController.signal });
      newChannelPromise.then((newChannel) => {
        newChannel.on("error", destroyPoolEntry, { signal: abortController.signal });
      }).catch(destroyPoolEntry);
      poolEntry = {
        channel: newChannelPromise,
        dispose() {
          abortController.abort();
        },
        subscriptionCount: 0
      };
      pool.entries.push(poolEntry);
    } else {
      poolEntry = pool.entries[pool.freeChannelIndex];
    }
    poolEntry.subscriptionCount++;
    abortSignal.addEventListener("abort", function destroyConsumer() {
      poolEntry.subscriptionCount--;
      if (poolEntry.subscriptionCount === 0) {
        destroyPoolEntry();
      } else if (pool.freeChannelIndex !== -1) {
        pool.freeChannelIndex--;
        recomputeFreeChannelIndex();
      }
    });
    recomputeFreeChannelIndex();
    return poolEntry.channel;
  };
}
function getRpcSubscriptionsChannelWithBigIntJSONSerialization(channel) {
  return pipe(
    channel,
    (c15) => transformChannelInboundMessages(c15, parseJsonWithBigInts),
    (c15) => transformChannelOutboundMessages(c15, stringifyJsonWithBigInts)
  );
}
function createDefaultSolanaRpcSubscriptionsChannelCreator(config2) {
  return createDefaultRpcSubscriptionsChannelCreatorImpl({
    ...config2,
    jsonSerializer: getRpcSubscriptionsChannelWithBigIntJSONSerialization
  });
}
function createDefaultRpcSubscriptionsChannelCreatorImpl(config2) {
  if (/^wss?:/i.test(config2.url) === false) {
    const protocolMatch = config2.url.match(/^([^:]+):/);
    throw new DOMException(
      protocolMatch ? `Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${protocolMatch[1]}:' is not allowed.` : `Failed to construct 'WebSocket': The URL '${config2.url}' is invalid.`
    );
  }
  const { intervalMs, ...rest } = config2;
  const createDefaultRpcSubscriptionsChannel = (({ abortSignal }) => {
    return createWebSocketChannel({
      ...rest,
      sendBufferHighWatermark: config2.sendBufferHighWatermark ?? // Let 128KB of data into the WebSocket buffer before buffering it in the app.
      131072,
      signal: abortSignal
    }).then(config2.jsonSerializer).then(
      (channel) => getRpcSubscriptionsChannelWithAutoping({
        abortSignal,
        channel,
        intervalMs: intervalMs ?? 5e3
      })
    );
  });
  return getChannelPoolingChannelCreator(createDefaultRpcSubscriptionsChannel, {
    maxSubscriptionsPerChannel: config2.maxSubscriptionsPerChannel ?? /**
    * A note about this default. The idea here is that, because some RPC providers impose
    * an upper limit on the number of subscriptions you can make per channel, we must
    * choose a number low enough to avoid hitting that limit. Without knowing what provider
    * a given person is using, or what their limit is, we have to choose the lowest of all
    * known limits. As of this writing (October 2024) that is the public mainnet RPC node
    * (api.mainnet-beta.solana.com) at 100 subscriptions.
    */
    100,
    minChannels: config2.minChannels ?? 1
  });
}
function getRpcSubscriptionsTransportWithSubscriptionCoalescing(transport) {
  const cache2 = /* @__PURE__ */ new Map();
  return function rpcSubscriptionsTransportWithSubscriptionCoalescing(config2) {
    const { request, signal } = config2;
    const subscriptionConfigurationHash = index_default([request.methodName, request.params]);
    let cachedDataPublisherPromise = cache2.get(subscriptionConfigurationHash);
    if (!cachedDataPublisherPromise) {
      const abortController = new o19();
      const dataPublisherPromise = transport({
        ...config2,
        signal: abortController.signal
      });
      dataPublisherPromise.then((dataPublisher) => {
        dataPublisher.on(
          "error",
          () => {
            cache2.delete(subscriptionConfigurationHash);
            abortController.abort();
          },
          { signal: abortController.signal }
        );
      }).catch(() => {
      });
      cache2.set(
        subscriptionConfigurationHash,
        cachedDataPublisherPromise = {
          abortController,
          dataPublisherPromise,
          numSubscribers: 0
        }
      );
    }
    cachedDataPublisherPromise.numSubscribers++;
    signal.addEventListener(
      "abort",
      () => {
        cachedDataPublisherPromise.numSubscribers--;
        if (cachedDataPublisherPromise.numSubscribers === 0) {
          queueMicrotask(() => {
            if (cachedDataPublisherPromise.numSubscribers === 0) {
              cache2.delete(subscriptionConfigurationHash);
              cachedDataPublisherPromise.abortController.abort();
            }
          });
        }
      },
      { signal: cachedDataPublisherPromise.abortController.signal }
    );
    return cachedDataPublisherPromise.dataPublisherPromise;
  };
}
function createDefaultRpcSubscriptionsTransport({
  createChannel
}) {
  return pipe(
    createRpcSubscriptionsTransportFromChannelCreator(
      createChannel
    ),
    (transport) => getRpcSubscriptionsTransportWithSubscriptionCoalescing(transport)
  );
}
function createRpcSubscriptionsTransportFromChannelCreator(createChannel) {
  return (async ({ execute, signal }) => {
    const channel = await createChannel({ abortSignal: signal });
    return await execute({ channel, signal });
  });
}
function createSolanaRpcSubscriptionsImpl(clusterUrl, config2) {
  const transport = createDefaultRpcSubscriptionsTransport({
    createChannel: createDefaultSolanaRpcSubscriptionsChannelCreator({ ...config2, url: clusterUrl })
  });
  return createSolanaRpcSubscriptionsFromTransport(transport);
}
function createSolanaRpcSubscriptions(clusterUrl, config2) {
  return createSolanaRpcSubscriptionsImpl(clusterUrl, config2);
}
function createSolanaRpcSubscriptionsFromTransport(transport) {
  return createSubscriptionRpc({
    api: createSolanaRpcSubscriptionsApi(DEFAULT_RPC_SUBSCRIPTIONS_CONFIG),
    transport
  });
}

// node_modules/x402/node_modules/@solana/signers/dist/index.browser.mjs
function isTransactionModifyingSigner(value) {
  return "modifyAndSignTransactions" in value && typeof value.modifyAndSignTransactions === "function";
}
function isTransactionPartialSigner(value) {
  return "signTransactions" in value && typeof value.signTransactions === "function";
}
function isTransactionSendingSigner(value) {
  return "signAndSendTransactions" in value && typeof value.signAndSendTransactions === "function";
}
function isTransactionSigner(value) {
  return isTransactionPartialSigner(value) || isTransactionModifyingSigner(value) || isTransactionSendingSigner(value);
}
async function createSignerFromKeyPair(keyPair) {
  const address = await getAddressFromPublicKey(keyPair.publicKey);
  const out = {
    address,
    keyPair,
    signMessages: (messages) => Promise.all(
      messages.map(
        async (message) => Object.freeze({ [address]: await signBytes(keyPair.privateKey, message.content) })
      )
    ),
    signTransactions: (transactions) => Promise.all(
      transactions.map(async (transaction) => {
        const signedTransaction = await partiallySignTransaction([keyPair], transaction);
        return Object.freeze({ [address]: signedTransaction.signatures[address] });
      })
    )
  };
  return Object.freeze(out);
}
async function createKeyPairSignerFromBytes(bytes, extractable) {
  return await createSignerFromKeyPair(await createKeyPairFromBytes(bytes, extractable));
}
async function createKeyPairSignerFromPrivateKeyBytes(bytes, extractable) {
  return await createSignerFromKeyPair(await createKeyPairFromPrivateKeyBytes(bytes, extractable));
}
var o20 = globalThis.TextEncoder;

// node_modules/x402/node_modules/@solana-program/token-2022/dist/src/index.mjs
var TOKEN_2022_PROGRAM_ADDRESS = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
var ASSOCIATED_TOKEN_ERROR__INVALID_OWNER = 0;
var associatedTokenErrorMessages;
if (true) {
  associatedTokenErrorMessages = {
    [ASSOCIATED_TOKEN_ERROR__INVALID_OWNER]: `Associated token account owner does not match address derivation`
  };
}
var TOKEN_2022_ERROR__NOT_RENT_EXEMPT = 0;
var TOKEN_2022_ERROR__INSUFFICIENT_FUNDS = 1;
var TOKEN_2022_ERROR__INVALID_MINT = 2;
var TOKEN_2022_ERROR__MINT_MISMATCH = 3;
var TOKEN_2022_ERROR__OWNER_MISMATCH = 4;
var TOKEN_2022_ERROR__FIXED_SUPPLY = 5;
var TOKEN_2022_ERROR__ALREADY_IN_USE = 6;
var TOKEN_2022_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS = 7;
var TOKEN_2022_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS = 8;
var TOKEN_2022_ERROR__UNINITIALIZED_STATE = 9;
var TOKEN_2022_ERROR__NATIVE_NOT_SUPPORTED = 10;
var TOKEN_2022_ERROR__NON_NATIVE_HAS_BALANCE = 11;
var TOKEN_2022_ERROR__INVALID_INSTRUCTION = 12;
var TOKEN_2022_ERROR__INVALID_STATE = 13;
var TOKEN_2022_ERROR__OVERFLOW = 14;
var TOKEN_2022_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED = 15;
var TOKEN_2022_ERROR__MINT_CANNOT_FREEZE = 16;
var TOKEN_2022_ERROR__ACCOUNT_FROZEN = 17;
var TOKEN_2022_ERROR__MINT_DECIMALS_MISMATCH = 18;
var TOKEN_2022_ERROR__NON_NATIVE_NOT_SUPPORTED = 19;
var token2022ErrorMessages;
if (true) {
  token2022ErrorMessages = {
    [TOKEN_2022_ERROR__ACCOUNT_FROZEN]: `Account is frozen`,
    [TOKEN_2022_ERROR__ALREADY_IN_USE]: `Already in use`,
    [TOKEN_2022_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED]: `Account does not support specified authority type`,
    [TOKEN_2022_ERROR__FIXED_SUPPLY]: `Fixed supply`,
    [TOKEN_2022_ERROR__INSUFFICIENT_FUNDS]: `Insufficient funds`,
    [TOKEN_2022_ERROR__INVALID_INSTRUCTION]: `Invalid instruction`,
    [TOKEN_2022_ERROR__INVALID_MINT]: `Invalid Mint`,
    [TOKEN_2022_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS]: `Invalid number of provided signers`,
    [TOKEN_2022_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS]: `Invalid number of required signers`,
    [TOKEN_2022_ERROR__INVALID_STATE]: `State is invalid for requested operation`,
    [TOKEN_2022_ERROR__MINT_CANNOT_FREEZE]: `This token mint cannot freeze accounts`,
    [TOKEN_2022_ERROR__MINT_DECIMALS_MISMATCH]: `The provided decimals value different from the Mint decimals`,
    [TOKEN_2022_ERROR__MINT_MISMATCH]: `Account not associated with this Mint`,
    [TOKEN_2022_ERROR__NATIVE_NOT_SUPPORTED]: `Instruction does not support native tokens`,
    [TOKEN_2022_ERROR__NON_NATIVE_HAS_BALANCE]: `Non-native account can only be closed if its balance is zero`,
    [TOKEN_2022_ERROR__NON_NATIVE_NOT_SUPPORTED]: `Instruction does not support non-native tokens`,
    [TOKEN_2022_ERROR__NOT_RENT_EXEMPT]: `Lamport balance below rent-exempt threshold`,
    [TOKEN_2022_ERROR__OVERFLOW]: `Operation overflowed`,
    [TOKEN_2022_ERROR__OWNER_MISMATCH]: `Owner does not match`,
    [TOKEN_2022_ERROR__UNINITIALIZED_STATE]: `State is unititialized`
  };
}
var EMIT_TOKEN_METADATA_DISCRIMINATOR = new Uint8Array([
  250,
  166,
  180,
  250,
  13,
  12,
  184,
  70
]);
var INITIALIZE_TOKEN_GROUP_DISCRIMINATOR = new Uint8Array([
  121,
  113,
  108,
  39,
  54,
  51,
  0,
  4
]);
var INITIALIZE_TOKEN_GROUP_MEMBER_DISCRIMINATOR = new Uint8Array([
  152,
  32,
  222,
  176,
  223,
  237,
  116,
  134
]);
var INITIALIZE_TOKEN_METADATA_DISCRIMINATOR = new Uint8Array([
  210,
  225,
  30,
  162,
  88,
  184,
  77,
  141
]);
var REMOVE_TOKEN_METADATA_KEY_DISCRIMINATOR = new Uint8Array([
  234,
  18,
  32,
  56,
  89,
  141,
  37,
  181
]);
var UPDATE_TOKEN_GROUP_MAX_SIZE_DISCRIMINATOR = new Uint8Array([
  108,
  37,
  171,
  143,
  248,
  30,
  18,
  110
]);
var UPDATE_TOKEN_GROUP_UPDATE_AUTHORITY_DISCRIMINATOR = new Uint8Array(
  [161, 105, 88, 1, 237, 221, 216, 203]
);
var UPDATE_TOKEN_METADATA_FIELD_DISCRIMINATOR = new Uint8Array([
  221,
  233,
  49,
  45,
  181,
  202,
  220,
  200
]);
var UPDATE_TOKEN_METADATA_UPDATE_AUTHORITY_DISCRIMINATOR = new Uint8Array([215, 228, 166, 228, 84, 100, 86, 123]);
var SECONDS_PER_YEAR = 60 * 60 * 24 * 365.24;

// node_modules/x402/dist/esm/chunk-3EQVFRKV.mjs
var moneySchema = external_exports.union([external_exports.string().transform((x8) => x8.replace(/[^0-9.-]+/g, "")), external_exports.number()]).pipe(external_exports.coerce.number().min(1e-4).max(999999999));
var NetworkSchema = external_exports.enum([
  "abstract",
  "abstract-testnet",
  "base-sepolia",
  "base",
  "avalanche-fuji",
  "avalanche",
  "iotex",
  "solana-devnet",
  "solana",
  "sei",
  "sei-testnet",
  "polygon",
  "polygon-amoy",
  "peaq",
  "story",
  "educhain",
  "skale-base-sepolia"
]);
var SupportedEVMNetworks = [
  "abstract",
  "abstract-testnet",
  "base-sepolia",
  "base",
  "avalanche-fuji",
  "avalanche",
  "iotex",
  "sei",
  "sei-testnet",
  "polygon",
  "polygon-amoy",
  "peaq",
  "story",
  "educhain",
  "skale-base-sepolia"
];
var EvmNetworkToChainId = /* @__PURE__ */ new Map([
  ["abstract", 2741],
  ["abstract-testnet", 11124],
  ["base-sepolia", 84532],
  ["base", 8453],
  ["avalanche-fuji", 43113],
  ["avalanche", 43114],
  ["iotex", 4689],
  ["sei", 1329],
  ["sei-testnet", 1328],
  ["polygon", 137],
  ["polygon-amoy", 80002],
  ["peaq", 3338],
  ["story", 1514],
  ["educhain", 41923],
  ["skale-base-sepolia", 324705682]
]);
var SupportedSVMNetworks = ["solana-devnet", "solana"];
var ChainIdToNetwork = Object.fromEntries(
  [...SupportedEVMNetworks, ...SupportedSVMNetworks].map((network) => [
    EvmNetworkToChainId.get(network),
    network
  ])
);
var skaleBaseSepolia = {
  id: 324705682,
  name: "SKALE Base Sepolia",
  nativeCurrency: {
    name: "Credits",
    symbol: "CREDITS",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://base-sepolia-testnet.skalenodes.com/v1/jubilant-horrible-ancha"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://base-sepolia-testnet-explorer.skalenodes.com",
      apiUrl: "https://base-sepolia-testnet-explorer.skalenodes.com/api"
    }
  }
};
function createConnectedClient(network) {
  const chain = getChainFromNetwork(network);
  return createPublicClient({
    chain,
    transport: http()
  }).extend(publicActions);
}
function createClientSepolia() {
  return createConnectedClient("base-sepolia");
}
function createClientAvalancheFuji() {
  return createConnectedClient("avalanche-fuji");
}
function createSigner(network, privateKey) {
  const chain = getChainFromNetwork(network);
  const walletClient = createWalletClient({
    chain,
    transport: http(),
    account: privateKeyToAccount(privateKey)
  });
  if (isZkStackChain(chain)) {
    return walletClient.extend(publicActions).extend(eip712WalletActions());
  }
  return walletClient.extend(publicActions);
}
function createSignerSepolia(privateKey) {
  return createSigner("base-sepolia", privateKey);
}
function createSignerAvalancheFuji(privateKey) {
  return createSigner("avalanche-fuji", privateKey);
}
function isSignerWallet(wallet) {
  return typeof wallet === "object" && wallet !== null && "chain" in wallet && "transport" in wallet;
}
function isAccount(wallet) {
  const w9 = wallet;
  return typeof wallet === "object" && wallet !== null && typeof w9.address === "string" && typeof w9.type === "string" && // Check for essential signing capabilities
  typeof w9.sign === "function" && typeof w9.signMessage === "function" && typeof w9.signTypedData === "function" && // Check for transaction signing (required by LocalAccount)
  typeof w9.signTransaction === "function";
}
function getChainFromNetwork(network) {
  if (!network) {
    throw new Error("NETWORK environment variable is not set");
  }
  switch (network) {
    case "abstract":
      return abstract;
    case "abstract-testnet":
      return abstractTestnet;
    case "base":
      return base;
    case "base-sepolia":
      return baseSepolia;
    case "avalanche":
      return avalanche;
    case "avalanche-fuji":
      return avalancheFuji;
    case "sei":
      return sei;
    case "sei-testnet":
      return seiTestnet;
    case "polygon":
      return polygon;
    case "polygon-amoy":
      return polygonAmoy;
    case "peaq":
      return peaq;
    case "story":
      return story;
    case "educhain":
      return eduChain;
    case "iotex":
      return iotex;
    case "iotex-testnet":
      return iotexTestnet;
    case "skale-base-sepolia":
      return skaleBaseSepolia;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}
var ZKSTACK_CHAIN_IDS = /* @__PURE__ */ new Set([
  2741,
  // Abstract Mainnet
  11124
  // Abstract Sepolia Testnet
]);
function isZkStackChain(chain) {
  return ZKSTACK_CHAIN_IDS.has(chain.id);
}
var DEVNET_RPC_URL = "https://api.devnet.solana.com";
var MAINNET_RPC_URL = "https://api.mainnet-beta.solana.com";
var DEVNET_WS_URL = "wss://api.devnet.solana.com";
var MAINNET_WS_URL = "wss://api.mainnet-beta.solana.com";
function createDevnetRpcClient(url) {
  return createSolanaRpc(
    url ? devnet(url) : devnet(DEVNET_RPC_URL)
  );
}
function createMainnetRpcClient(url) {
  return createSolanaRpc(
    url ? mainnet(url) : mainnet(MAINNET_RPC_URL)
  );
}
function getRpcClient(network, url) {
  if (network === "solana-devnet") {
    return createDevnetRpcClient(url);
  } else if (network === "solana") {
    return createMainnetRpcClient(url);
  } else {
    throw new Error("Invalid network");
  }
}
function getRpcSubscriptions(network, url) {
  if (network === "solana-devnet") {
    return createSolanaRpcSubscriptions(devnet(url ? httpToWs(url) : DEVNET_WS_URL));
  } else if (network === "solana") {
    return createSolanaRpcSubscriptions(mainnet(url ? httpToWs(url) : MAINNET_WS_URL));
  } else {
    throw new Error("Invalid network");
  }
}
function httpToWs(url) {
  if (url.startsWith("http")) {
    return url.replace("http", "ws");
  }
  return url;
}
function createSvmConnectedClient(network) {
  if (!SupportedSVMNetworks.find((n18) => n18 === network)) {
    throw new Error(`Unsupported SVM network: ${network}`);
  }
  return getRpcClient(network);
}
async function createSignerFromBase58(privateKey) {
  const bytes = base58.decode(privateKey);
  if (bytes.length === 64) {
    return await createKeyPairSignerFromBytes(bytes);
  }
  if (bytes.length === 32) {
    return await createKeyPairSignerFromPrivateKeyBytes(bytes);
  }
  throw new Error(`Unexpected key length: ${bytes.length}. Expected 32 or 64 bytes.`);
}
function isSignerWallet2(wallet) {
  return typeof wallet === "object" && wallet !== null && isTransactionSigner(wallet);
}
var evm_exports = {};
__export(evm_exports, {
  authorizationPrimaryType: () => authorizationPrimaryType,
  authorizationTypes: () => authorizationTypes,
  config: () => config,
  createClientAvalancheFuji: () => createClientAvalancheFuji,
  createClientSepolia: () => createClientSepolia,
  createConnectedClient: () => createConnectedClient,
  createSigner: () => createSigner,
  createSignerAvalancheFuji: () => createSignerAvalancheFuji,
  createSignerSepolia: () => createSignerSepolia,
  getChainFromNetwork: () => getChainFromNetwork,
  isAccount: () => isAccount,
  isSignerWallet: () => isSignerWallet,
  isZkStackChain: () => isZkStackChain,
  usdcABI: () => usdcABI
});
var authorizationTypes = {
  TransferWithAuthorization: [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "validAfter", type: "uint256" },
    { name: "validBefore", type: "uint256" },
    { name: "nonce", type: "bytes32" }
  ]
};
var authorizationPrimaryType = "TransferWithAuthorization";
var svm_exports = {};
__export(svm_exports, {
  SvmAddressRegex: () => SvmAddressRegex
});
var SvmAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
var Base64EncodedRegex = /^[A-Za-z0-9+/]*={0,2}$/;
var EvmMaxAtomicUnits = 18;
var EvmAddressRegex = /^0x[0-9a-fA-F]{40}$/;
var MixedAddressRegex = /^0x[a-fA-F0-9]{40}|[A-Za-z0-9][A-Za-z0-9-]{0,34}[A-Za-z0-9]$/;
var HexEncoded64ByteRegex = /^0x[0-9a-fA-F]{64}$/;
var EvmSignatureRegex = /^0x[0-9a-fA-F]+$/;
var schemes = ["exact"];
var x402Versions = [1];
var ErrorReasons = [
  "insufficient_funds",
  "invalid_exact_evm_payload_authorization_valid_after",
  "invalid_exact_evm_payload_authorization_valid_before",
  "invalid_exact_evm_payload_authorization_value",
  "invalid_exact_evm_payload_signature",
  "invalid_exact_evm_payload_undeployed_smart_wallet",
  "invalid_exact_evm_payload_recipient_mismatch",
  "invalid_exact_svm_payload_transaction",
  "invalid_exact_svm_payload_transaction_amount_mismatch",
  "invalid_exact_svm_payload_transaction_create_ata_instruction",
  "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee",
  "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset",
  "invalid_exact_svm_payload_transaction_instructions",
  "invalid_exact_svm_payload_transaction_instructions_length",
  "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction",
  "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction",
  "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high",
  "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked",
  "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked",
  "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts",
  "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds",
  "invalid_exact_svm_payload_transaction_not_a_transfer_instruction",
  "invalid_exact_svm_payload_transaction_receiver_ata_not_found",
  "invalid_exact_svm_payload_transaction_sender_ata_not_found",
  "invalid_exact_svm_payload_transaction_simulation_failed",
  "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata",
  "invalid_network",
  "invalid_payload",
  "invalid_payment_requirements",
  "invalid_scheme",
  "invalid_payment",
  "payment_expired",
  "unsupported_scheme",
  "invalid_x402_version",
  "invalid_transaction_state",
  "invalid_x402_version",
  "settle_exact_svm_block_height_exceeded",
  "settle_exact_svm_transaction_confirmation_timed_out",
  "unsupported_scheme",
  "unexpected_settle_error",
  "unexpected_verify_error"
];
var isInteger = (value) => Number.isInteger(Number(value)) && Number(value) >= 0;
var hasMaxLength = (maxLength) => (value) => value.length <= maxLength;
var EvmOrSvmAddress = external_exports.string().regex(EvmAddressRegex).or(external_exports.string().regex(SvmAddressRegex));
var mixedAddressOrSvmAddress = external_exports.string().regex(MixedAddressRegex).or(external_exports.string().regex(SvmAddressRegex));
var PaymentRequirementsSchema = external_exports.object({
  scheme: external_exports.enum(schemes),
  network: NetworkSchema,
  maxAmountRequired: external_exports.string().refine(isInteger),
  resource: external_exports.string().url(),
  description: external_exports.string(),
  mimeType: external_exports.string(),
  outputSchema: external_exports.record(external_exports.any()).optional(),
  payTo: EvmOrSvmAddress,
  maxTimeoutSeconds: external_exports.number().int(),
  asset: mixedAddressOrSvmAddress,
  extra: external_exports.record(external_exports.any()).optional()
});
var ExactEvmPayloadAuthorizationSchema = external_exports.object({
  from: external_exports.string().regex(EvmAddressRegex),
  to: external_exports.string().regex(EvmAddressRegex),
  value: external_exports.string().refine(isInteger).refine(hasMaxLength(EvmMaxAtomicUnits)),
  validAfter: external_exports.string().refine(isInteger),
  validBefore: external_exports.string().refine(isInteger),
  nonce: external_exports.string().regex(HexEncoded64ByteRegex)
});
var ExactEvmPayloadSchema = external_exports.object({
  signature: external_exports.string().regex(EvmSignatureRegex),
  authorization: ExactEvmPayloadAuthorizationSchema
});
var ExactSvmPayloadSchema = external_exports.object({
  transaction: external_exports.string().regex(Base64EncodedRegex)
});
var PaymentPayloadSchema = external_exports.object({
  x402Version: external_exports.number().refine((val) => x402Versions.includes(val)),
  scheme: external_exports.enum(schemes),
  network: NetworkSchema,
  payload: external_exports.union([ExactEvmPayloadSchema, ExactSvmPayloadSchema])
});
var x402ResponseSchema = external_exports.object({
  x402Version: external_exports.number().refine((val) => x402Versions.includes(val)),
  error: external_exports.enum(ErrorReasons).optional(),
  accepts: external_exports.array(PaymentRequirementsSchema).optional(),
  payer: external_exports.string().regex(MixedAddressRegex).optional()
});
var HTTPVerbsSchema = external_exports.enum(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]);
var HTTPRequestStructureSchema = external_exports.object({
  type: external_exports.literal("http"),
  method: HTTPVerbsSchema,
  queryParams: external_exports.record(external_exports.string(), external_exports.string()).optional(),
  bodyType: external_exports.enum(["json", "form-data", "multipart-form-data", "text", "binary"]).optional(),
  bodyFields: external_exports.record(external_exports.string(), external_exports.any()).optional(),
  headerFields: external_exports.record(external_exports.string(), external_exports.any()).optional()
});
var RequestStructureSchema = external_exports.discriminatedUnion("type", [
  HTTPRequestStructureSchema
  // MCPRequestStructureSchema,
  // OpenAPIRequestStructureSchema,
]);
var DiscoveredResourceSchema = external_exports.object({
  resource: external_exports.string(),
  type: external_exports.enum(["http"]),
  x402Version: external_exports.number().refine((val) => x402Versions.includes(val)),
  accepts: external_exports.array(PaymentRequirementsSchema),
  lastUpdated: external_exports.date(),
  metadata: external_exports.record(external_exports.any()).optional()
});
var SettleRequestSchema = external_exports.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyRequestSchema = external_exports.object({
  paymentPayload: PaymentPayloadSchema,
  paymentRequirements: PaymentRequirementsSchema
});
var VerifyResponseSchema = external_exports.object({
  isValid: external_exports.boolean(),
  invalidReason: external_exports.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional()
});
var SettleResponseSchema = external_exports.object({
  success: external_exports.boolean(),
  errorReason: external_exports.enum(ErrorReasons).optional(),
  payer: EvmOrSvmAddress.optional(),
  transaction: external_exports.string().regex(MixedAddressRegex),
  network: NetworkSchema
});
var ListDiscoveryResourcesRequestSchema = external_exports.object({
  type: external_exports.string().optional(),
  limit: external_exports.number().optional(),
  offset: external_exports.number().optional()
});
var ListDiscoveryResourcesResponseSchema = external_exports.object({
  x402Version: external_exports.number().refine((val) => x402Versions.includes(val)),
  items: external_exports.array(DiscoveredResourceSchema),
  pagination: external_exports.object({
    limit: external_exports.number(),
    offset: external_exports.number(),
    total: external_exports.number()
  })
});
var SupportedPaymentKindSchema = external_exports.object({
  x402Version: external_exports.number().refine((val) => x402Versions.includes(val)),
  scheme: external_exports.enum(schemes),
  network: NetworkSchema,
  extra: external_exports.record(external_exports.any()).optional()
});
var SupportedPaymentKindsResponseSchema = external_exports.object({
  kinds: external_exports.array(SupportedPaymentKindSchema)
});
var svm_exports2 = {};
__export(svm_exports2, {
  createDevnetRpcClient: () => createDevnetRpcClient,
  createMainnetRpcClient: () => createMainnetRpcClient,
  createSignerFromBase58: () => createSignerFromBase58,
  createSvmConnectedClient: () => createSvmConnectedClient,
  decodeTransactionFromPayload: () => decodeTransactionFromPayload,
  getRpcClient: () => getRpcClient,
  getRpcSubscriptions: () => getRpcSubscriptions,
  getTokenPayerFromTransaction: () => getTokenPayerFromTransaction,
  isSignerWallet: () => isSignerWallet2,
  signAndSimulateTransaction: () => signAndSimulateTransaction,
  signTransactionWithSigner: () => signTransactionWithSigner
});
function decodeTransactionFromPayload(svmPayload) {
  try {
    const base64Encoder = getBase64Encoder();
    const transactionBytes = base64Encoder.encode(svmPayload.transaction);
    const transactionDecoder = getTransactionDecoder();
    return transactionDecoder.decode(transactionBytes);
  } catch (error) {
    console.error("error", error);
    throw new Error("invalid_exact_svm_payload_transaction");
  }
}
function getTokenPayerFromTransaction(transaction) {
  const compiled = getCompiledTransactionMessageDecoder().decode(
    transaction.messageBytes
  );
  const staticAccounts = compiled.staticAccounts ?? [];
  const instructions = compiled.instructions ?? [];
  for (const ix of instructions) {
    const programIndex = ix.programAddressIndex;
    const programAddress = staticAccounts[programIndex].toString();
    if (programAddress === TOKEN_PROGRAM_ADDRESS.toString() || programAddress === TOKEN_2022_PROGRAM_ADDRESS.toString()) {
      const accountIndices = ix.accountIndices ?? [];
      if (accountIndices.length >= 4) {
        const ownerIndex = accountIndices[3];
        const ownerAddress = staticAccounts[ownerIndex].toString();
        if (ownerAddress) return ownerAddress;
      }
    }
  }
  return "";
}
async function signAndSimulateTransaction(signer, transaction, rpc) {
  const signedTransaction = await signTransactionWithSigner(signer, transaction);
  const base64EncodedTransaction = getBase64EncodedWireTransaction(signedTransaction);
  const simulateTxConfig = {
    sigVerify: true,
    replaceRecentBlockhash: false,
    commitment: "confirmed",
    encoding: "base64",
    accounts: void 0,
    innerInstructions: void 0,
    minContextSlot: void 0
  };
  const simulateResult = await rpc.simulateTransaction(base64EncodedTransaction, simulateTxConfig).send();
  return simulateResult;
}
async function signTransactionWithSigner(signer, transaction) {
  if (isTransactionModifyingSigner(signer)) {
    const [modifiedTransaction] = await signer.modifyAndSignTransactions([transaction]);
    if (!modifiedTransaction) {
      throw new Error("transaction_signer_failed_to_return_transaction");
    }
    return modifiedTransaction;
  }
  if (isTransactionPartialSigner(signer)) {
    const [signatures] = await signer.signTransactions([
      transaction
    ]);
    if (!signatures) {
      throw new Error("transaction_signer_failed_to_return_signatures");
    }
    return mergeTransactionSignatures(transaction, signatures);
  }
  throw new Error("transaction_signer_must_support_offline_signing");
}
function mergeTransactionSignatures(transaction, signatures) {
  return Object.freeze({
    ...transaction,
    signatures: Object.freeze({
      ...transaction.signatures,
      ...signatures
    })
  });
}
var facilitatorRequestSchema = external_exports.object({
  paymentHeader: external_exports.string(),
  paymentRequirements: PaymentRequirementsSchema
});

// node_modules/x402/dist/esm/chunk-SQV4BQTM.mjs
import { getAddress, toHex } from "viem";

// node_modules/@privy-io/react-auth/dist/esm/index-BMVqHT_T.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react36 = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import { toHex as _e, isHex as Se, hashAuthorization as Fe2 } from "viem/utils";
import { zeroAddress as Fa, getAddress as Ta, createWalletClient as Ha2, http as ba, parseSignature as Va } from "viem";
function Oa2() {
  let e14 = new URLSearchParams(window.location.search), t17 = e14.get("privy_oauth_code"), a22 = e14.get("privy_oauth_state"), i19 = e14.get("privy_oauth_provider");
  if (!t17 || !a22 || !i19) return { inProgress: false };
  let r17 = false;
  try {
    r17 = !!window.opener.location.origin;
  } catch {
  }
  return { inProgress: true, authorizationCode: t17, stateCode: a22, provider: i19, withPrivyUi: !D2.get(D), popupFlow: null !== window.opener && r17, disableSignup: !!D2.get(B) };
}
function xa() {
  let e14 = new URL(window.location.href);
  e14.searchParams.delete("privy_oauth_code"), e14.searchParams.delete("privy_oauth_provider"), e14.searchParams.delete("privy_oauth_state"), D2.del(A), window.history.replaceState({}, "", e14);
}
var Na = class {
  get meta() {
    return this._meta;
  }
  async authenticate() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    if (!this.meta.channelToken) throw new s3("Auth flow must be initialized first");
    try {
      let e14 = await this.api.post(k2, { channel_token: this.meta.channelToken, message: this.message, signature: this.signature, fid: this.fid, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
      if (!e14) throw new s3("No response from authentication");
      return e14;
    } catch (e14) {
      throw o2(e14);
    }
  }
  async link() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    try {
      return await this.api.post(m3, { channel_token: this.meta.channelToken, message: this.message, signature: this.signature, fid: this.fid });
    } catch (e14) {
      throw o2(e14);
    }
  }
  async _startChannelOnce() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    let e14 = await this.api.post(w2, { token: this.captchaToken });
    import_react_device_detect.isMobile && !import_react_device_detect.isIOS && e14.connect_uri && d5(e14.connect_uri, "_blank"), this._meta = { ...this._meta, connectUri: e14.connect_uri, channelToken: e14.channel_token };
  }
  async initializeFarcasterConnect() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    await this.startChannelOnce.execute();
  }
  async _pollForReady() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    if (!this.meta.channelToken) throw new s3("Auth flow must be initialized first");
    let e14 = await this.api.get(h2, { headers: { "farcaster-channel-token": this.meta.channelToken } });
    return "completed" === e14.state && (this.message = e14.message, this.signature = e14.signature, this.fid = e14.fid, true);
  }
  constructor(e14, t17 = false) {
    this._meta = { disableSignup: false }, this.captchaToken = e14, this.startChannelOnce = new li(this._startChannelOnce.bind(this)), this.pollForReady = new li(this._pollForReady.bind(this)), this._meta.disableSignup = t17;
  }
};
var Da = class {
  async initRegisterFlow(e14) {
    if (!this.api) throw new s3("Auth flow has no API instance");
    this.authenticateForRegistration = true, this.meta.initRegisterResponse = await this.initRegisterOnce.execute(e14);
  }
  async initAuthenticationFlow(e14) {
    if (!this.api) throw new s3("Auth flow has no API instance");
    this.authenticateForRegistration = false, this.meta.initAuthenticateResponse = await this.initAuthenticateOnce.execute(e14);
  }
  async initLinkFlow() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    this.meta.initLinkResponse = await this.initLinkOnce.execute();
  }
  async register() {
    let e14 = await import("./chunk-SCBI5MOT.js");
    if (!this.api) throw new s3("Auth flow has no API instance");
    if (!e14.browserSupportsWebAuthn()) throw new s3("WebAuthn is not supported in this browser");
    this.meta.initRegisterResponse || (this.meta.initRegisterResponse = await this.initRegisterOnce.execute());
    try {
      let t17 = this.meta.initRegisterResponse.options, a22 = await e14.startRegistration({ optionsJSON: this._transformInitLinkOptionsToCamelCase(t17) });
      return this.meta.setPasskeyAuthState?.({ status: "submitting-response" }), await this.api.post(T, { relying_party: this.meta.initRegisterResponse.relying_party, authenticator_response: this._transformRegistrationResponseToSnakeCase(a22) });
    } catch (e15) {
      if ("NotAllowedError" === e15.name) throw new s3("Passkey request timed out or rejected by user.", void 0, i2.PASSKEY_NOT_ALLOWED);
      throw o2(e15);
    }
  }
  async authenticate() {
    if (this.authenticateForRegistration) return this.register();
    let e14 = await import("./chunk-SCBI5MOT.js");
    if (!this.api) throw new s3("Auth flow has no API instance");
    if (!e14.browserSupportsWebAuthn()) throw new s3("WebAuthn is not supported in this browser");
    this.meta.initAuthenticateResponse || (this.meta.initAuthenticateResponse = await this.initAuthenticateOnce.execute());
    let t17 = this.meta.allowedCredentialsIds?.map(((e15) => ({ type: "public-key", id: e15 }))) ?? this.meta.initAuthenticateResponse.options.allow_credentials;
    try {
      let a22 = await e14.startAuthentication({ optionsJSON: this._transformInitAuthenticateOptionsToCamelCase({ ...this.meta.initAuthenticateResponse.options, allow_credentials: t17 }) });
      return this.meta.setPasskeyAuthState?.({ status: "submitting-response" }), await this.api.post(S3, { relying_party: this.meta.initAuthenticateResponse.relying_party, challenge: this.meta.initAuthenticateResponse.options.challenge, authenticator_response: this._transformAuthenticationResponseToSnakeCase(a22) });
    } catch (e15) {
      if ("NotAllowedError" === e15.name) throw new s3("Passkey request timed out or rejected by user.", void 0, i2.PASSKEY_NOT_ALLOWED);
      throw o2(e15);
    }
  }
  async link() {
    let e14 = await import("./chunk-SCBI5MOT.js");
    if (!this.api) throw new s3("Auth flow has no API instance");
    if (!e14.browserSupportsWebAuthn()) throw new s3("WebAuthn is not supported in this browser");
    this.meta.initLinkResponse || (this.meta.initLinkResponse = await this.initLinkOnce.execute());
    try {
      let t17 = this.meta.initLinkResponse.options, a22 = await e14.startRegistration({ optionsJSON: this._transformInitLinkOptionsToCamelCase(t17) });
      return this.meta.setPasskeyAuthState?.({ status: "submitting-response" }), await this.api.post(R, { relying_party: this.meta.initLinkResponse.relying_party, authenticator_response: this._transformRegistrationResponseToSnakeCase(a22) });
    } catch (e15) {
      if ("NotAllowedError" === e15.name) throw new s3("Passkey request timed out or rejected by user.", void 0, i2.PASSKEY_NOT_ALLOWED);
      throw o2(e15);
    }
  }
  async _initRegisterOnce(e14) {
    if (!this.api) throw new s3("Auth flow has no API instance");
    let t17 = Xt(e14);
    return await this.api.post(Q, { token: this.meta.captchaToken }, { headers: { ...t17 } });
  }
  async _initAuthenticateOnce(e14) {
    if (!this.api) throw new s3("Auth flow has no API instance");
    let t17 = Xt(e14);
    return await this.api.post(P2, { token: this.meta.captchaToken }, { headers: { ...t17 } });
  }
  async _initLinkOnce() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    return await this.api.post(O, {});
  }
  _transformInitLinkOptionsToCamelCase(e14) {
    let t17 = this.meta.name?.trim() || void 0;
    return { rp: e14.rp, user: { id: e14.user.id, name: t17 ?? e14.user.name, displayName: t17 ?? e14.user.display_name }, challenge: e14.challenge, pubKeyCredParams: e14.pub_key_cred_params.map(((e15) => ({ type: e15.type, alg: e15.alg }))), timeout: e14.timeout, excludeCredentials: e14.exclude_credentials?.map(((e15) => ({ id: e15.id, type: e15.type, transports: e15.transports }))), authenticatorSelection: { authenticatorAttachment: e14.authenticator_selection?.authenticator_attachment, requireResidentKey: e14.authenticator_selection?.require_resident_key, residentKey: e14.authenticator_selection?.resident_key, userVerification: e14.authenticator_selection?.user_verification }, attestation: e14.attestation, extensions: { appid: e14.extensions?.app_id, credProps: e14.extensions?.cred_props?.rk, hmacCreateSecret: e14.extensions?.hmac_create_secret }, hints: this.meta.hints };
  }
  _transformRegistrationResponseToSnakeCase(e14) {
    return { id: e14.id, raw_id: e14.rawId, response: { client_data_json: e14.response.clientDataJSON, attestation_object: e14.response.attestationObject, authenticator_data: e14.response.authenticatorData }, authenticator_attachment: e14.authenticatorAttachment, client_extension_results: { app_id: e14.clientExtensionResults.appid, cred_props: e14.clientExtensionResults.credProps, hmac_create_secret: e14.clientExtensionResults.hmacCreateSecret }, type: e14.type };
  }
  _transformInitAuthenticateOptionsToCamelCase(e14) {
    return { rpId: e14.rp_id, challenge: e14.challenge, allowCredentials: e14.allow_credentials?.map(((e15) => ({ id: e15.id, type: e15.type, transports: e15.transports }))) || [], timeout: e14.timeout, extensions: { appid: e14.extensions?.app_id, credProps: e14.extensions?.cred_props, hmacCreateSecret: e14.extensions?.hmac_create_secret }, userVerification: e14.user_verification };
  }
  _transformAuthenticationResponseToSnakeCase(e14) {
    return { id: e14.id, raw_id: e14.rawId, response: { client_data_json: e14.response.clientDataJSON, authenticator_data: e14.response.authenticatorData, signature: e14.response.signature, user_handle: e14.response.userHandle }, authenticator_attachment: e14.authenticatorAttachment, client_extension_results: { app_id: e14.clientExtensionResults.appid, cred_props: e14.clientExtensionResults.credProps, hmac_create_secret: e14.clientExtensionResults.hmacCreateSecret }, type: e14.type };
  }
  constructor({ captchaToken: e14, setPasskeyAuthState: t17, hints: a22 }) {
    this.authenticateForRegistration = false, this.initRegisterOnce = new li(this._initRegisterOnce.bind(this)), this.initAuthenticateOnce = new li(this._initAuthenticateOnce.bind(this)), this.initLinkOnce = new li(this._initLinkOnce.bind(this)), this.meta = { captchaToken: e14, setPasskeyAuthState: t17, hints: a22 };
  }
};
var Ba = class {
  get meta() {
    return { connectorType: this.wallet.connectorType, walletClientType: this.wallet.walletClientType, disableSignup: this._meta.disableSignup, messageType: this._meta.messageType, address: this.wallet?.address };
  }
  set messageType(e14) {
    this._meta.messageType = e14;
  }
  async authenticate() {
    if (!this.client) throw new s3("SiwsFlow has no client instance");
    try {
      let { message: e14, signature: t17 } = await this.sign();
      return await this.client.authenticateWithSiwsInternal({ message: e14, signature: t17, walletClientType: this.wallet.walletClientType, connectorType: this.wallet.connectorType, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up", messageType: this.meta.messageType });
    } catch (e14) {
      throw o2(e14);
    }
  }
  async link() {
    if (!this.client) throw new s3("SiwsFlow has no client instance");
    try {
      let { message: e14, signature: t17 } = await this.sign();
      return await this.client.linkWithSiwsInternal({ message: e14, signature: t17, walletClientType: this.wallet.walletClientType, connectorType: this.wallet.connectorType, messageType: this.meta.messageType });
    } catch (e14) {
      throw o2(e14);
    }
  }
  async sign() {
    let e14, t17;
    if (!this.client) throw new s3("SiwsFlow has no client instance");
    await this.buildMessage();
    let a22 = "transaction" === this.meta.messageType, i19 = "offchain-message" === this.meta.messageType;
    if (!this.preparedMessage) throw new s3("Could not prepare SIWS message");
    if (!a22 && !this.wallet.provider.signMessage || a22 && !this.wallet.provider.signTransaction) throw new s3("Wallet does not support the necessary signing methods");
    if (i19) {
      let a23 = Ii({ message: this.preparedMessage, signerPublicKey: base58.decode(this.wallet.address), domain: window.location.origin }), i20 = await this.wallet.provider.signMessage({ message: a23 });
      e14 = this.preparedMessage, t17 = base64.encode(i20.signature);
    } else if (a22 && this._plugin) {
      let a23 = await this.wallet.provider.signTransaction({ transaction: base64.decode(this.preparedMessage) });
      e14 = base64.encode(a23.signedTransaction), t17 = this._plugin.getSignatureFromTransaction(a23.signedTransaction, this.wallet.address);
    } else {
      e14 = this.preparedMessage;
      let a23 = await this.wallet.provider.signMessage({ message: new TextEncoder().encode(this.preparedMessage) });
      t17 = base64.encode(a23.signature);
    }
    return { message: e14, signature: t17 };
  }
  async _getNonceOnce() {
    if (!this.client) throw new s3("SiwsFlow has no client instance");
    return await this.client.generateSiwsNonce({ address: this.wallet.address, captchaToken: this.captchaToken });
  }
  async buildMessage() {
    if (!this.client) throw new s3("SiwsFlow has no client instance");
    let e14 = this.wallet.address;
    return this.nonce || (this.nonce = await this.getNonceOnce.execute()), "transaction" === this.meta.messageType && this._plugin ? this.preparedMessage = this._plugin.createSiwsMemoTransaction({ address: e14, nonce: this.nonce }) : this.preparedMessage = s4({ address: e14, nonce: this.nonce }), this.preparedMessage;
  }
  constructor(e14, t17, a22, i19 = false, r17 = "plain", n18) {
    this._meta = { disableSignup: false, messageType: "plain" }, this.getNonceOnce = new li(this._getNonceOnce.bind(this)), this.wallet = e14, this.captchaToken = a22, this.client = t17, this._meta.disableSignup = i19, this._meta.messageType = r17, this._plugin = n18;
  }
};
var ja = /* @__PURE__ */ (0, import_react36.createContext)({ enabled: false, siteKey: "", provider: void 0, appId: void 0, token: void 0, error: void 0, status: "disabled", setToken: i, setError: i, setExecuting: i, waitForResult: () => Promise.resolve(""), ref: { current: null }, remove: n, reset: i, execute: i });
var qa = class extends t {
  constructor(e14, t17, a22) {
    super(e14 || "Captcha failed"), this.type = "Captcha", t17 instanceof Error && (this.cause = t17), this.privyErrorCode = a22;
  }
};
var Ka = ({ children: t17, appId: a22, captchaSiteKey: i19, enabledCaptchaProvider: r17 }) => {
  let o22 = (0, import_react36.useRef)(null), d18 = (0, import_react36.useRef)(null), [c15, C8] = (0, import_react36.useState)(), [L5, h9] = (0, import_react36.useState)(), [u17, p9] = (0, import_react36.useState)(false), w9 = (0, import_react36.useMemo)((() => r17 ? u17 || c15 || L5 ? !u17 || c15 || L5 ? c15 && !L5 ? { status: "success", token: c15 } : L5 ? { status: "error", error: L5 } : { status: "ready" } : { status: "loading" } : { status: "ready" } : { status: "disabled" }), [r17, c15, L5, u17]), f15 = (0, import_react36.useMemo)((() => r17 ? "turnstile" === r17 ? { remove: () => {
    o22.current?.remove(), p9(false), h9(void 0), C8(void 0);
  }, reset: () => {
    o22.current?.reset(), p9(false), h9(void 0), C8(void 0);
  }, execute: () => {
    p9(true), o22.current?.execute();
  }, waitForResult: async () => {
    try {
      return await p2((() => o22.current?.getResponse()), { interval: 200, timeout: 2e4 });
    } catch (e14) {
      throw new qa("Captcha failed", null, i2.CAPTCHA_TIMEOUT);
    }
  } } : { remove: () => {
    d18.current?.removeCaptcha(), p9(false), h9(void 0), C8(void 0);
  }, reset: () => {
    d18.current?.resetCaptcha(), p9(false), h9(void 0), C8(void 0);
  }, execute: () => {
    p9(true), d18.current?.execute();
  }, waitForResult: async () => {
    try {
      return await p2((() => {
        let e14 = d18.current?.getResponse();
        if (e14) return e14;
      }), { interval: 200, timeout: 2e4 });
    } catch (e14) {
      throw new qa("Captcha failed", null, i2.CAPTCHA_TIMEOUT);
    }
  } } : null), [r17]), m12 = (0, import_react36.useMemo)((() => {
    if (!r17 || !f15) return { ...w9, enabled: false, siteKey: "", appId: a22, setToken: i, setError: i, setExecuting: i, waitForResult: () => Promise.resolve(void 0), remove: n, reset: i, execute: i, provider: void 0, ref: { current: null } };
    let e14 = { ...w9, enabled: true, appId: a22, setToken: C8, setError: h9, setExecuting: p9 };
    return "turnstile" === r17 ? { ...e14, provider: "turnstile", ref: o22, siteKey: i19.split("t:")[1] ?? "", ...f15 } : { ...e14, provider: "hcaptcha", ref: d18, siteKey: i19.split("h:")[1] ?? "", ...f15 };
  }), [w9, r17, f15, a22, i19]);
  return (0, import_jsx_runtime2.jsx)(ja.Provider, { value: m12, children: t17 });
};
var za = () => (0, import_react36.useContext)(ja);
var $a = class {
  async authenticate() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    try {
      return await this.api.post(U, { captcha_token: this.meta.captchaToken, telegram_auth_result: this.meta.telegramAuthResult, telegram_web_app_data: this.meta.telegramWebAppData, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
    } catch (e14) {
      throw o2(e14);
    }
  }
  async link() {
    if (!this.api) throw new s3("Auth flow has no API instance");
    try {
      return await this.api.post(V, { telegram_auth_result: this.meta.telegramAuthResult, telegram_web_app_data: this.meta.telegramWebAppData });
    } catch (e14) {
      throw o2(e14);
    }
  }
  constructor(e14, t17 = false) {
    this.meta = { disableSignup: false }, this.meta = { captchaToken: e14, disableSignup: false }, this.meta.disableSignup = t17;
  }
};
function Ya(e14) {
  let t17 = { detail: "", retryable: false };
  return e14?.privyErrorCode === i2.LINKED_TO_ANOTHER_USER && (t17.detail = "This account has already been linked to another user."), e14?.privyErrorCode === i2.DISALLOWED_LOGIN_METHOD && (t17.detail = "Login with Telegram not allowed."), e14?.privyErrorCode === i2.INVALID_DATA && (t17.retryable = true, t17.detail = "Something went wrong. Try again."), e14?.privyErrorCode === i2.CANNOT_LINK_MORE_OF_TYPE && (t17.retryable = true, t17.detail = "Something went wrong. Try again."), e14?.privyErrorCode === i2.INVALID_CREDENTIALS && (t17.retryable = true, t17.detail = "Something went wrong. Try again."), e14?.privyErrorCode === i2.TOO_MANY_REQUESTS && (t17.detail = "Too many requests. Please wait before trying again."), e14?.privyErrorCode === i2.TOO_MANY_REQUESTS && e14.message.includes("rate limit") && (t17.detail = "Request limit reached for Telegram. Please wait a moment and try again."), e14 instanceof qa && (t17.retryable = true, t17.detail = "Something went wrong. Try again."), t17;
}
function Ja(e14) {
  return Object.fromEntries(decodeURIComponent(e14).split("&").map(((e15) => e15.split("=").map(decodeURIComponent))));
}
function Qa() {
  let e14 = new URL(window.location.href);
  e14.searchParams.delete("id"), e14.searchParams.delete("hash"), e14.searchParams.delete("auth_date"), e14.searchParams.delete("first_name"), e14.searchParams.delete("last_name"), e14.searchParams.delete("username"), e14.searchParams.delete("photo_url"), e14.hash = "", window.history.replaceState({}, "", e14);
}
var Xa = /* @__PURE__ */ (0, import_react36.lazy)((() => import("./chunk-B7VZJZRM.js")));
var ei2 = /* @__PURE__ */ (0, import_react36.lazy)((() => import("./chunk-VZGWJDIZ.js")));
var ti2 = (a22) => {
  let i19 = za();
  return (0, import_react36.useEffect)((() => i19.remove), [i19.remove]), i19.enabled && i19.provider ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react36.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "hidden h-0 w-0", children: ["turnstile" === i19.provider && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Xa, { ...a22, captchaContext: i19 }), "hcaptcha" === i19.provider && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ei2, { ...a22, captchaContext: i19 })] }) }) : null;
};
var ai2 = /* @__PURE__ */ Object.freeze({ __proto__: null, AccountNotFoundScreen: () => import("./chunk-74DMJJYF.js"), AddFundsSelectionScreen: () => import("./chunk-FGPDBLDU.js"), AffirmativeConsentScreen: () => import("./chunk-YEZTPYOB.js"), AllowlistRejectionScreen: () => import("./chunk-DAMVHN4I.js"), AuthenticateWithWalletScreen: () => import("./chunk-QHNAO25Y.js"), AwaitingEvmToSolBridgingScreen: () => import("./chunk-S7YMLGH4.js"), AwaitingExternalEthereumTransferScreen: () => import("./chunk-UZMKPFUW.js"), AwaitingPasswordlessCodeScreen: () => import("./chunk-H2ICDL63.js"), AwaitingSolToEvmBridgingScreen: () => import("./chunk-FAXSF6UO.js"), CaptchaScreen: () => import("./chunk-ICDZJX4N.js"), CoinbaseOnrampStatusScreen: () => import("./chunk-L6ACQ6VJ.js"), ConnectLedgerScreen: () => import("./chunk-FAYKA2CM.js"), ConnectOnlyLandingScreen: () => import("./chunk-75BBT2WR.js"), ConnectOnlyStatusScreen: () => import("./chunk-I3X3KEET.js"), ConnectOrCreateScreen: () => import("./chunk-CEMZBYEU.js"), ConnectionStatusScreen: () => import("./chunk-EJZB2J3P.js"), CrossAppAuthScreen: () => import("./chunk-XH6QON6E.js"), DelegatedActionsConsentScreen: () => import("./chunk-OAF4LZIZ.js"), DelegatedActionsRevokeScreen: () => import("./chunk-IJQSPBT4.js"), DepositAddressScreen: () => import("./chunk-Z2WPQV7X.js"), EmbeddedWalletConnectingScreen: () => import("./chunk-VE2C4AVB.js"), EmbeddedWalletCreatedScreen: () => import("./chunk-6VKHEUNZ.js"), EmbeddedWalletKeyExportScreen: () => import("./chunk-XZKHKHBB.js"), EmbeddedWalletOnAccountCreateScreen: () => import("./chunk-6XCNSWBK.js"), EmbeddedWalletPasswordCreateScreen: () => import("./chunk-ZPMAIVTA.js"), EmbeddedWalletPasswordUpdateScreen: () => import("./chunk-OMOEW357.js"), EmbeddedWalletPasswordUpdateSplashScreen: () => import("./chunk-M3CYRSXA.js"), ErrorScreen: () => import("./chunk-V3V34WVZ.js"), FarcasterConnectStatusScreen: () => import("./chunk-MGOZE2RA.js"), FarcasterSignerStatusScreen: () => import("./chunk-6BXBJFIV.js"), FiatOnrampScreen: () => import("./chunk-LXIIEDSE.js"), FundSolWalletWithExternalSolanaWallet: () => import("./chunk-YO2LWGP5.js"), FundWithBankDepositScreen: () => import("./chunk-3HAFPYZW.js"), FundingAmountEditScreen: () => import("./chunk-7LYEMAEB.js"), FundingMethodSelectionScreen: () => import("./chunk-NLPG2Q7G.js"), InAppBrowserLoginNotPossible: () => import("./chunk-7JTLF77X.js"), InstallWalletScreen: () => import("./chunk-Y7BHN5V5.js"), LandingScreen: () => import("./chunk-UOPPMA3S.js"), LinkConflictScreen: () => import("./chunk-DMAABMZN.js"), LinkEmailScreen: () => import("./chunk-FZQXW6UC.js"), LinkPasskeyScreen: () => import("./chunk-JCUG4GG4.js"), LinkPhoneScreen: () => import("./chunk-5SLRAMOH.js"), LoginFailedScreen: () => import("./chunk-V725QJHE.js"), ManualTransferScreen: () => import("./chunk-BOMGHRNL.js"), MfaAuthEnrollmentFlowScreen: () => import("./chunk-BIK63EOQ.js"), MfaAuthVerifyFlowScreen: () => import("./chunk-DMW7TV3S.js"), MfaEnrollmentFlowScreen: () => import("./chunk-TF3CILN3.js"), MoonpayStatusScreen: () => import("./chunk-7BIQPCP2.js"), OAuthStatusScreen: () => import("./chunk-NTDBHFS5.js"), PasskeySelectSignupOrLogin: () => import("./chunk-RVQNAIXT.js"), PasskeyStatusScreen: () => import("./chunk-RTPVFPI6.js"), PasswordRecoveryScreen: () => import("./chunk-7GNC2IM7.js"), RecoveryOAuthScreen: () => import("./chunk-ZUD2ZEHT.js"), RecoverySelectionScreen: () => import("./chunk-O5RFJTKT.js"), SendTransactionScreen: () => import("./chunk-OS34NLDA.js"), SetAutomaticRecoveryScreen: () => import("./chunk-OABISDHY.js"), SignRequestScreen: () => import("./chunk-P4CJYCW4.js"), StandardSignAndSendTransactionScreen: () => import("./chunk-F3SUP7XV.js"), TelegramAuthScreen: () => import("./chunk-7RBCX63Y.js"), TransferFromWalletScreen: () => import("./chunk-BUYE45LI.js"), UpdateEmailScreen: () => import("./chunk-PASGBYCV.js"), UpdatePhoneScreen: () => import("./chunk-V2IUOD7T.js"), UserLimitReachedScreen: () => import("./chunk-RGZCVWZ7.js"), WalletInterstitialScreen: () => import("./chunk-FDFPZC2Y.js") });
function ii2(e14) {
  s5("configureMfa", e14);
}
var ri2 = create((() => ({ inProgressMfaFlow: void 0 })));
var ni = () => {
  let { ready: e14 } = k(), { currentScreen: t17 } = g(), [a22, i19] = (0, import_react36.useState)(null), [r17, s19] = (0, import_react36.useState)(false), d18 = (function(e15) {
    let [t18, a23] = (0, import_react36.useState)(false), i20 = (0, import_react36.useRef)(null), r18 = (0, import_react36.useRef)(null), s20 = (0, import_react36.useRef)(null);
    return (0, import_react36.useEffect)((() => {
      if (i20.current && (clearTimeout(i20.current), i20.current = null), r18.current && (clearTimeout(r18.current), r18.current = null), e15) s20.current = Date.now(), i20.current = setTimeout((() => {
        a23(true);
      }), 150);
      else if (null !== s20.current) {
        let e16 = Date.now() - s20.current;
        if (e16 >= 150) {
          let t19 = Math.max(0, 400 - (e16 - 150));
          r18.current = setTimeout((() => {
            a23(false), s20.current = null;
          }), t19);
        } else i20.current && (clearTimeout(i20.current), i20.current = null), a23(false), s20.current = null;
      }
      return () => {
        i20.current && clearTimeout(i20.current), r18.current && clearTimeout(r18.current);
      };
    }), [e15]), t18;
  })(r17);
  return (0, import_react36.useEffect)((() => {
    if (!t17) return i19(null), void s19(false);
    s19(true), ai2[t17]().then(((a23) => {
      (!t17 || e14 || a23.default.isShownBeforeReady) && (i19((() => a23.default.component)), s19(false));
    })).catch((() => {
      i19(null), s19(false);
    }));
  }), [t17, e14]), { component: a22, isLoading: d18 };
};
var li2 = /* @__PURE__ */ (0, import_react36.lazy)((() => import("./chunk-GYLAEWHG.js")));
var si = /* @__PURE__ */ (0, import_react36.lazy)((() => ((e14) => ai2[e14]().then(((e15) => ({ default: e15.default.component }))))("MfaAuthVerifyFlowScreen")));
var oi3 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ui, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(a5, {}) });
var di2 = () => {
  let { currentScreen: i19 } = g(), r17 = ri2(((e14) => e14.inProgressMfaFlow)), n18 = () => ri2.setState({ inProgressMfaFlow: void 0 }), { component: s19, isLoading: c15 } = ni();
  return (function() {
    let { isModalOpen: e14 } = k(), { headless: t17 } = se(), { currentScreen: a22 } = g(), { status: i20, execute: r18, reset: n19, enabled: s20 } = za(), [d18, c16] = (0, import_react36.useState)(false);
    (0, import_react36.useEffect)((() => {
      !e14 && s20 && n19();
    }), [e14, s20, n19]), (0, import_react36.useEffect)((() => {
      a22 ? ai2[a22]().then(((e15) => {
        c16(!!e15.default.isCaptchaRequired);
      })).catch((() => {
        c16(false);
      })) : c16(false);
    }), [a22]), (0, import_react36.useEffect)((() => {
      e14 && d18 && !t17 && "ready" === i20 && s20 && r18();
    }), [e14, d18, t17, i20, s20, r18]);
  })(), i19 || "txn" !== r17 ? c15 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(oi3, {}) : s19 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(O2, { $if: !!r17, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react36.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(s19, {}) }) }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react36.Suspense, { children: ["txn" === r17 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(li2, { onClose: n18 }), "auth" === r17 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(si, {})] })] }) : null : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react36.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(li2, { onClose: n18 }) });
};
var ci2 = () => {
  let t17 = (0, import_react36.useRef)(null);
  return (0, import_jsx_runtime2.jsx)(hi2, { style: { height: k4(t17) }, id: "privy-modal-content", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: t17, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(di2, {}) }) });
};
var Ci = ({ open: t17 }) => {
  let a22 = se(), { gracefulClosePrivyModal: i19 } = (() => {
    let { closePrivyModal: e14 } = l2(), { onUserCloseViaDialogOrKeybindRef: t18 } = g();
    return { gracefulClosePrivyModal: (0, import_react36.useCallback)((() => {
      if (!t18?.current) return e14({ shouldCallAuthOnSuccess: false });
      t18.current();
    }), [e14, t18]) };
  })(), r17 = ri2(((e14) => e14.inProgressMfaFlow));
  return ii2({ onMfaRequired: () => {
    a22.mfa.noPromptOnMfaRequired || ri2.setState({ inProgressMfaFlow: "txn" });
  } }), a22.render.standalone ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(g3, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Li, { id: "privy-modal-content", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(di2, {}) }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(y7, { open: !(!t17 && !r17), id: "privy-dialog", "aria-label": "log in or sign up", "aria-labelledby": "privy-dialog-title", onClick: () => i19(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(g3, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ci2, {}) }) });
};
var Li = gt.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 16px;
`;
var hi2 = gt(Li)`
  transition: height 150ms ease-out;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  // Ensure the modal gets pinned to the top if it ever gets too tall
  max-height: calc(100svh - 32px);

  border-radius: var(--privy-border-radius-lg) var(--privy-border-radius-lg) 0 0;
  box-shadow: 0px 0px 36px rgba(55, 65, 81, 0.15);

  @media (min-width: 441px) {
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`;
var ui = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 2rem;
`;
function pi2(t17) {
  let a22 = (0, import_react36.useRef)(null), i19 = (0, import_react36.useRef)(null);
  return (0, import_react36.useEffect)((() => {
    i19.current?.remove(), i19.current = (function({ botUsername: e14, scriptHost: t18 }) {
      let a23 = document.createElement("script"), { origin: i20 } = new URL(t18);
      return a23.async = true, a23.src = `${i20}/js/telegram-login.js`, a23.setAttribute("data-telegram-login", e14), a23.setAttribute("data-request-access", "write"), a23.setAttribute("data-lang", "en"), a23;
    })(t17), a22.current?.after(i19.current);
  }), [t17]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: a22, hidden: true });
}
var wi = () => {
  let { ready: e14, wallets: t17 } = p3();
  return (0, import_react36.useEffect)((() => {
    if (!e14) return;
    let a22 = t17.map(((e15) => ({ address: e15.address, connectorType: e15.connectorType, walletClientType: e15.walletClientType, connectedAt: e15.connectedAt, id: e15.meta.id })));
    D2.put(S, a22);
  }), [e14, t17]), null;
};
var fi = (e14, t17, a22) => {
  let { promise: i19, reject: r17 } = d8(), n18 = setTimeout((() => r17(Error(`Timed out after ${t17}ms`))), t17);
  return a22 && a22.addEventListener("abort", (() => clearTimeout(n18)), { once: true }), Promise.race([e14, i19]).finally((() => clearTimeout(n18)));
};
var mi = ["error", "invalid_request_arguments", "wallet_not_on_device", "invalid_recovery_pin", "insufficient_funds", "missing_or_invalid_mfa", "mfa_verification_max_attempts_reached", "mfa_timeout", "twilio_verification_failed"];
var gi = class extends Error {
  constructor(e14, t17) {
    super(t17), this.type = e14;
  }
};
function yi(e14) {
  let t17 = e14.type;
  return "string" == typeof t17 && mi.includes(t17);
}
function Mi(e14) {
  return yi(e14) && "wallet_not_on_device" === e14.type;
}
function vi(e14) {
  return yi(e14) && ("invalid_recovery_pin" === e14.type || "invalid_request_arguments" === e14.type);
}
function Ai2(e14) {
  return !!yi(e14) && "mfa_timeout" === e14.type;
}
function Zi(e14) {
  return !!yi(e14) && "missing_or_invalid_mfa" === e14.type;
}
function Ei2(e14) {
  return !!yi(e14) && "mfa_verification_max_attempts_reached" === e14.type;
}
function ki(e14) {
  return !(!yi(e14) || !e14.message.includes("code 429"));
}
function _i2(e14) {
  return !!(function(e15) {
    let t17 = e15.type;
    return "string" == typeof t17 && "client_error" === t17;
  })(e14) && "MFA canceled" === e14.message;
}
async function Si(e14, t17, a22, i19, r17, n18 = false) {
  let l14 = n18, s19 = async (s20) => {
    if (l14 && t17 && t17.length > 0) {
      s20 === (n18 ? 0 : 1) ? r17("configureMfa", "onMfaRequired", { mfaMethods: t17 }) : i19.current?.reject(new gi("missing_or_invalid_mfa", "MFA verification failed, retry."));
      let l15 = await new Promise(((e15, t18) => {
        a22.current = { resolve: e15, reject: t18 }, setTimeout((() => {
          let e16 = new gi("mfa_timeout", "Timed out waiting for MFA code");
          i19.current?.reject(e16), t18(e16);
        }), 3e5);
      }));
      return await e14(l15);
    }
    return await e14();
  }, o22 = null;
  for (let e15 = 0; e15 < 4; e15++) try {
    o22 = await s19(e15), i19.current?.resolve(void 0);
    break;
  } catch (e16) {
    if ("missing_or_invalid_mfa" !== e16.type) throw i19.current?.resolve(void 0), e16;
    l14 = true;
  }
  if (null === o22) {
    let e15 = new gi("mfa_verification_max_attempts_reached", "Max MFA verification attempts reached");
    throw i19.current?.reject(e15), e15;
  }
  return o22;
}
var Fi;
var Ti = (Fi = 0, () => "id-" + Fi++);
function Hi(e14) {
  return void 0 !== e14.error;
}
var bi2 = new class {
  enqueue(e14, t17) {
    this.callbacks[e14] = t17;
  }
  dequeue(e14, t17) {
    let a22 = this.callbacks[t17];
    if (!a22) throw Error(`cannot dequeue ${e14} event: no event found for id ${t17}`);
    switch (delete this.callbacks[t17], e14) {
      case "privy:iframe:ready":
      case "privy:user-signer:sign":
      case "privy:wallets:add":
      case "privy:wallets:import":
      case "privy:wallets:set-recovery":
      case "privy:wallets:connect":
      case "privy:wallets:recover":
      case "privy:wallets:rpc":
      case "privy:wallet:create":
      case "privy:mfa:verify":
      case "privy:mfa:init-enrollment":
      case "privy:mfa:submit-enrollment":
      case "privy:mfa:unenroll":
      case "privy:mfa:clear":
      case "privy:auth:unlink-passkey":
      case "privy:farcaster:init-signer":
      case "privy:farcaster:sign":
      case "privy:solana-wallet:create":
      case "privy:delegated-actions:consent":
        return a22;
      default:
        throw Error(`invalid wallet event type ${e14}`);
    }
  }
  constructor() {
    this.callbacks = {};
  }
}();
var Vi = /* @__PURE__ */ new Map();
var Ri2 = (e14, t17) => "bigint" == typeof t17 ? t17.toString() : t17;
function Pi2(e14, t17, a22, i19) {
  let r17 = a22.contentWindow;
  if (!r17) throw Error("iframe not initialized");
  let n18 = ((e15, t18) => `${e15}${JSON.stringify(t18, Ri2)}`)(e14, t17);
  if ("privy:wallet:create" === e14 || "privy:wallets:add" === e14 || "privy:solana-wallet:create" === e14) {
    let e15 = Vi.get(n18);
    if (e15) return e15;
  }
  let l14 = new Promise(((a23, n19) => {
    let l15 = Ti();
    bi2.enqueue(l15, { resolve: a23, reject: n19 }), r17.postMessage({ id: l15, event: e14, data: t17 }, i19);
  })).finally((() => {
    Vi.delete(n18);
  }));
  return Vi.set(n18, l14), l14;
}
function Wi(t17) {
  let a22 = ce(), i19 = (0, import_react36.useRef)(null), r17 = (0, import_react36.useRef)(t17.mfaMethods), s19 = u3(), [d18, c15] = (0, import_react36.useState)(false);
  return r17.current = t17.mfaMethods, (0, import_react36.useEffect)((() => {
    if (!d18) return;
    let e14 = i19.current;
    if (!e14) return;
    function a23(e15) {
      var a24;
      e15 && e15.origin === t17.origin && "string" == typeof (a24 = e15.data).event && /^privy:.+/.test(a24.event) && (function(e16) {
        switch (e16.event) {
          case "privy:iframe:ready":
            let t18 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t18.reject(new gi(e16.error.type, e16.error.message)) : t18.resolve(e16.data);
          case "privy:user-signer:sign": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallets:add": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallets:set-recovery": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallets:connect": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallets:recover": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallets:rpc": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:wallet:create":
            let a25 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? a25.reject(new gi(e16.error.type, e16.error.message)) : a25.resolve(e16.data);
          case "privy:wallets:import":
            let i20 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? i20.reject(new gi(e16.error.type, e16.error.message)) : i20.resolve(e16.data);
          case "privy:mfa:verify":
            let r18 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? r18.reject(new gi(e16.error.type, e16.error.message)) : r18.resolve(e16.data);
          case "privy:mfa:init-enrollment": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:mfa:submit-enrollment": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:mfa:unenroll": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:mfa:clear": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:auth:unlink-passkey": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:solana-wallet:create":
            let n19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? n19.reject(new gi(e16.error.type, e16.error.message)) : n19.resolve(e16.data);
          case "privy:farcaster:init-signer": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:farcaster:sign": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          case "privy:delegated-actions:consent": {
            let t19 = bi2.dequeue(e16.event, e16.id);
            return Hi(e16) ? t19.reject(new gi(e16.error.type, e16.error.message)) : t19.resolve(e16.data);
          }
          default:
            console.warn("Unsupported wallet proxy method:", e16);
        }
      })(e15.data);
    }
    let n18 = { signWithUserSigner: (a24) => Si(((i20) => Pi2("privy:user-signer:sign", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), addWallet: (a24) => Si(((i20) => Pi2("privy:wallets:add", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), setRecovery: (a24) => Si(((i20) => Pi2("privy:wallets:set-recovery", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), connect: (a24) => Si(((i20) => Pi2("privy:wallets:connect", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), recover: (a24) => Si(((i20) => Pi2("privy:wallets:recover", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19, !a24.recoveryAccessToken && !a24.recoveryPassword && !a24.recoverySecretOverride), rpc: (a24) => Si(((i20) => Pi2("privy:wallets:rpc", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), create: (a24) => Pi2("privy:wallet:create", a24, e14, t17.origin), importWallet: (a24) => Pi2("privy:wallets:import", a24, e14, t17.origin), createSolana: (a24) => Si(((i20) => Pi2("privy:solana-wallet:create", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), createDelegatedAction: (a24) => Si(((i20) => Pi2("privy:delegated-actions:consent", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), verifyMfa: (a24) => Si(((i20) => Pi2("privy:mfa:verify", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19, true), initEnrollMfa: (a24) => Si(((i20) => Pi2("privy:mfa:init-enrollment", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), submitEnrollMfa: (a24) => Si(((i20) => Pi2("privy:mfa:submit-enrollment", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), unenrollMfa: (a24) => Si(((i20) => Pi2("privy:mfa:unenroll", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), clearMfa: (a24) => fi(Pi2("privy:mfa:clear", a24, e14, t17.origin), 15e3).catch(((e15) => {
      if (e15 instanceof Error && e15.message.includes("Timed out")) throw new gi("mfa_timeout", "MFA operation timed out");
      throw e15;
    })), unlinkPasskeyAccount: (a24) => Si(((i20) => Pi2("privy:auth:unlink-passkey", { ...a24, ...i20 }, e14, t17.origin)), r17.current, t17.mfaPromise, t17.mfaSubmitPromise, s19), initFarcasterSigner: (a24) => Pi2("privy:farcaster:init-signer", a24, e14, t17.origin), signFarcasterMessage: (a24) => Pi2("privy:farcaster:sign", a24, e14, t17.origin) };
    window.addEventListener("message", a23);
    let l14 = new AbortController();
    return d4((() => Pi2("privy:iframe:ready", {}, e14, t17.origin)), { abortSignal: l14.signal }).then((() => t17.onLoad(n18)), ((...e15) => {
      console.warn("Privy iframe failed to load: ", ...e15), t17.onLoadFailed();
    })), () => {
      window.removeEventListener("message", a23), l14.abort();
    };
  }), [d18]), a22 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("iframe", { ref: i19, width: "0", height: "0", style: { display: "none", height: "0px", width: "0px" }, onLoad: () => c15(true), src: e2({ origin: t17.origin, path: `/apps/${t17.appId}/embedded-wallets`, query: { caid: t17.clientAnalyticsId, client_id: t17.appClientId } }) }) : null;
}
var Ii2 = ({ address: e14, user: t17 }) => {
  let a22 = t17.linkedAccounts.find(((t18) => "wallet" === t18.type && "privy" === t18.walletClientType && t18.address === e14));
  if (!a22) throw new s3("Address to delegate is not associated with current user.");
  if (!k3(a22)) throw new s3(`useDelegatedActions is not supported for ${a22.chainType} wallets. Use the useSessionSigners hook to provision server side access on behalf of your users.`);
  return { address: a22.address, chainType: a22.chainType, walletIndex: a22.walletIndex ?? 0 };
};
var Ui = ({ address: e14, user: t17 }) => {
  let a22 = t17.linkedAccounts.find(((t18) => "wallet" === t18.type && "privy" === t18.walletClientType && t18.address === e14));
  if (!a22) throw new s3("Address to delegate is not associated with current user.");
  let i19 = a22.imported ? a22 : h(t17);
  if (!i19) throw new s3("Unable to determine root address for delegated address.");
  if (!k3(i19)) throw new s3(`useDelegatedActions is not supported for ${i19.chainType} wallets. Use the useSessionSigners hook to provision server side access on behalf of your users.`);
  return { address: i19.address, chainType: i19.chainType, imported: i19.imported };
};
var Oi = (e14) => e14.linkedAccounts.filter(((e15) => "wallet" === e15.type && "privy" === e15.walletClientType && e15.delegated));
var xi2 = "popup-privy-oauth";
var Ni = "PRIVY_OAUTH_USE_BROADCAST_CHANNEL";
function Di({ isCreatingWallet: e14, skipSplashScreen: t17 }) {
  return e14 ? "EmbeddedWalletPasswordCreateScreen" : t17 ? "EmbeddedWalletPasswordUpdateScreen" : "EmbeddedWalletPasswordUpdateSplashScreen";
}
function Bi({ walletAction: e14, availableRecoveryMethods: t17, legacySetWalletPasswordFlow: a22, isResettingPassword: i19, showAutomaticRecovery: r17 }) {
  return r17 ? "SetAutomaticRecoveryScreen" : a22 || 1 === t17.length ? Di({ isCreatingWallet: "create" === e14, skipSplashScreen: i19 }) : "RecoverySelectionScreen";
}
function ji(e14) {
  switch (e14) {
    case "user-passcode":
      return "PasswordRecoveryScreen";
    case "google-drive":
    case "icloud":
      return "RecoveryOAuthScreen";
    default:
      throw Error("Recovery method not supported");
  }
}
var qi = ["warpcast.com", "farcaster.xyz"];
var Ki = ["farcaster", "fid"];
async function zi() {
  if (void 0 !== globalThis.window && (function() {
    if (void 0 === globalThis.window) return false;
    try {
      if (void 0 === globalThis.document) return false;
      let e14 = globalThis.window, t17 = globalThis.document, a22 = false;
      if (t17.referrer) {
        let e15 = t17.referrer.toLowerCase();
        a22 = qi.some(((t18) => e15.includes(t18)));
      }
      let i19 = !!e14.farcaster, r17 = new URLSearchParams(e14.location.search), n18 = Ki.some(((e15) => r17.has(e15)));
      return a22 || i19 || n18;
    } catch {
      return false;
    }
  })()) try {
    await import("@farcaster/mini-app-solana"), console.debug("[Privy] Farcaster Solana wallet registered");
  } catch (e14) {
    console.debug("[Privy] Farcaster Solana wallet not available (package may not be installed)"), (function() {
      try {
        return "undefined" != typeof process && true;
      } catch {
        return false;
      }
    })() && e14 && console.debug("[Privy] Farcaster Solana init error:", e14);
  }
}
function Gi(e14, t17) {
  if (e14.onComplete) switch (t17) {
    case "external":
      e14.fundingResult ? e14.onComplete({ ...e14.fundingResult, fundingMethod: t17 }) : e14.onComplete({ status: "cancelled", address: e14.address, fundingMethod: t17, amount: e14.amount });
      break;
    case null:
      e14.onComplete({ status: "cancelled", address: e14.address, fundingMethod: void 0, amount: e14.amount });
      break;
    default:
      e14.onComplete({ status: "completed", address: e14.address, fundingMethod: t17, amount: e14.amount });
  }
}
function $i(e14, t17, a22, i19, r17, n18, l14) {
  return { ...e14, funding: e14?.funding ? { ...e14.funding, fundingResult: { status: t17, address: e14.funding.address, fundingMethod: void 0, transactionHash: a22, amount: e14.funding.amount, assetType: r17 ? n18?.symbol || "ETH" : l14.nativeCurrency.symbol || "ETH", metadata: { walletClientType: i19 } } } : void 0, solanaFundingData: e14?.solanaFundingData, sendTransaction: e14?.sendTransaction };
}
var Yi = /* @__PURE__ */ new Map([["FundingMethodSelectionScreen", null], ["TransferFromWalletScreen", "external"], ["FundingAmountEditScreen", "external"], ["ConnectOnlyLandingScreen", "external"], ["ConnectOnlyStatusScreen", "external"], ["AwaitingExternalEthereumTransferScreen", "external"], ["AwaitingEvmToSolBridgingScreen", "external"], ["AwaitingSolToEvmBridgingScreen", "external"], ["ManualTransferScreen", "manual"], ["MoonpayStatusScreen", "moonpay"], ["CoinbaseOnrampStatusScreen", "coinbase-onramp"]]);
function Ji(e14) {
  let t17 = e14.toLowerCase();
  return !!window?.webkit?.messageHandlers?.ReactNativeWebView || !!window?.ReactNativeWebView || ["fbav", "fban", "instagram", "snapchat", "linkedinapp"].some(((e15) => t17.includes(e15)));
}
async function Qi({ rpc: e14, address: t17 }) {
  return (await e14.getBalance(t17, { commitment: "confirmed" }).send()).value ?? 0n;
}
function Xi() {
  return (function() {
    if ("undefined" != typeof window) return window.Telegram;
  })()?.WebApp?.initData || void 0;
}
var er = { apple_oauth: "apple", custom_auth: "custom", discord_oauth: "discord", email: "email", farcaster: "farcaster", github_oauth: "github", google_oauth: "google", instagram_oauth: "instagram", linkedin_oauth: "linkedin", passkey: "passkey", phone: "sms", spotify_oauth: "spotify", telegram: "telegram", tiktok_oauth: "tiktok", line_oauth: "line", twitch_oauth: "twitch", twitter_oauth: "twitter", wallet: "siwe", smart_wallet: "siwe", cross_app: "privy:" };
var tr = (e14) => {
  if (r(e14)) return { displayName: e14.replace("custom:", ""), loginMethod: "custom" };
  let t17 = er[e14];
  return "wallet" === e14 || "phone" === e14 ? { displayName: e14, loginMethod: t17 } : { displayName: t17, loginMethod: t17 };
};
var ar = () => {
  let e14 = se(), { user: t17 } = k(), { client: a22, refreshSessionAndUser: i19, walletProxy: r17 } = l2();
  return { migrate: (0, import_react36.useCallback)((async () => {
    if ("legacy-embedded-wallets-only" === e14.embeddedWallets.mode) return { success: true, migrated: false };
    if (!t17) throw new s3("User must be authenticated before migrating wallets", i2.MUST_BE_AUTHENTICATED);
    if (!r17) throw new s3("Cannot connect to wallet proxy");
    let n18 = await a22.getAccessToken();
    if (!n18) throw new s3("User must be authenticated before migrating wallets", i2.MUST_BE_AUTHENTICATED);
    let l14 = t17.linkedAccounts.filter(((e15) => "wallet" === e15.type && "privy" === e15.walletClientType && k3(e15) && !s2(e15)));
    if (0 === l14.length) return { success: true, migrated: false };
    let s19 = l14.filter(((e15) => e15.imported)), o22 = l14.filter(((e15) => !e15.imported));
    if (o22.length > 0) {
      let e15 = o22.find(((e16) => "ethereum" === e16.chainType && 0 === e16.walletIndex)) ?? o22.find(((e16) => "solana" === e16.chainType && 0 === e16.walletIndex)) ?? null;
      if (!e15) throw new s3("Primary wallet not found");
      let { entropyId: t18, entropyIdVerifier: a23 } = y3(e15);
      try {
        await r17.connect({ accessToken: n18, entropyId: t18, entropyIdVerifier: a23 });
      } catch (i20) {
        if (!Mi(i20) || "privy" !== e15.recoveryMethod) throw i20;
        await r17.recover({ accessToken: n18, entropyId: t18, entropyIdVerifier: a23 });
      }
      await r17.createDelegatedAction({ accessToken: n18, rootWallet: { address: e15.address, chainType: e15.chainType, imported: false }, delegatedWallets: o22.map(((e16) => ({ address: e16.address, chainType: e16.chainType, walletIndex: e16.walletIndex ?? 0 }))) });
    }
    for (let e15 of s19) {
      let { entropyId: t18, entropyIdVerifier: a23 } = y3(e15);
      try {
        await r17.connect({ accessToken: n18, entropyId: t18, entropyIdVerifier: a23 });
      } catch (s20) {
        if (!Mi(s20) || "privy" !== e15.recoveryMethod) throw s20;
        await r17.recover({ accessToken: n18, entropyId: t18, entropyIdVerifier: a23 });
      }
      await r17.createDelegatedAction({ accessToken: n18, rootWallet: { address: e15.address, chainType: e15.chainType, imported: true }, delegatedWallets: [{ address: e15.address, chainType: e15.chainType, walletIndex: e15.walletIndex ?? 0 }] });
    }
    return await i19(), { success: true, migrated: true };
  }), [e14.embeddedWallets.mode, t17, r17, a22, i19]) };
};
var ir = ({ disabled: e14 }) => {
  let { migrate: t17 } = ar(), { user: a22 } = k(), { walletProxy: i19 } = l2(), r17 = (0, import_react36.useRef)(false), l14 = (0, import_react36.useRef)(0);
  return (0, import_react36.useEffect)((() => {
    e14 || l14.current > 2 || r17.current || !a22 || !i19 || (r17.current = true, l14.current++, t17().catch(((e15) => {
      console.debug("Unable to migrate wallets: ", e15);
    })).finally((() => {
      r17.current = false;
    })));
  }), [a22, i19, e14, t17]), null;
};
var rr = (e14) => ({ id: e14.id, raw_id: e14.rawId, response: { client_data_json: e14.response.clientDataJSON, authenticator_data: e14.response.authenticatorData, signature: e14.response.signature, user_handle: e14.response.userHandle }, authenticator_attachment: e14.authenticatorAttachment, client_extension_results: { app_id: e14.clientExtensionResults.appid, cred_props: e14.clientExtensionResults.credProps, hmac_create_secret: e14.clientExtensionResults.hmacCreateSecret }, type: e14.type });
var nr = () => {
  let { ethereumEmbedded: e14, ethereumExternal: t17 } = d7.getState();
  return [...e14, ...t17];
};
var lr = (e14, t17, a22) => !(d(e14) || p(e14).length > 0 || false === a22 || "all-users" !== t17 && ("users-without-wallets" !== t17 || sr(e14).length));
var sr = (e14) => e14.linkedAccounts.filter(((e15) => "wallet" === e15.type && "ethereum" === e15.chainType));
var or = (e14, t17, a22) => !(f(e14) || o(e14).length > 0 || false === a22 || "all-users" !== t17 && ("users-without-wallets" !== t17 || dr(e14).length));
var dr = (e14) => e14.linkedAccounts.filter(((e15) => "wallet" === e15.type && "solana" === e15.chainType));
var cr = Symbol("wallet-creation-on-login-plugin");
var Lr = () => {
  let { walletProxy: e14, recoverEmbeddedWallet: t17, setUser: a22, refreshSessionAndUser: i19, privy: r17, client: n18 } = l2(), l14 = se();
  return { create: async ({ walletIndex: s19, chainType: o22, latestUser: d18, recoveryMethod: c15, recoveryPassword: C8, recoveryAccessToken: L5, idempotencyKey: h9 }) => {
    let u17 = d18;
    u17 || (u17 = await i19());
    let p9 = await n18.getAccessToken();
    if (!u17 || !p9 || !e14) throw Error("User must be authenticated before creating a Privy wallet");
    return await L2({ appConfig: l14, user: u17, refreshSessionAndUser: i19, privy: r17, accessToken: p9, proxy: e14, recoverEmbeddedWallet: t17, setUser: a22, walletIndex: s19, chainType: o22, recoveryMethod: c15, recoveryPassword: C8, recoveryAccessToken: L5, idempotencyKey: h9 });
  } };
};
function hr({ subscribe: e14, getExternalJwt: t17, enabled: a22 = true, onAuthenticated: i19, onUnauthenticated: r17, onError: s19 }) {
  let { client: d18, setAuthenticated: c15, setUser: C8, setIsNewUser: L5 } = l2(), { logout: h9, authenticated: u17, ready: p9 } = se2(), w9 = d6(), { create: f15 } = Lr(), m12 = se();
  if (!d18) throw new s3("`useSyncJwtBasedAuthState` must be used within a `PrivyProvider`");
  let [g4, y9] = (0, import_react36.useState)({ status: "initial" }), M7 = (0, import_react36.useRef)(void 0), A7 = (0, import_react36.useRef)(false), Z = (0, import_react36.useRef)(t17);
  (0, import_react36.useEffect)((() => {
    Z.current = t17;
  }), [t17]);
  let E9 = (0, import_react36.useRef)(i19);
  (0, import_react36.useEffect)((() => {
    E9.current = i19;
  }), [i19]);
  let k12 = (0, import_react36.useRef)(r17);
  (0, import_react36.useEffect)((() => {
    k12.current = r17;
  }), [r17]);
  let _6 = (0, import_react36.useRef)(s19);
  (0, import_react36.useEffect)((() => {
    _6.current = s19;
  }), [s19]);
  let S10 = (0, import_react36.useRef)(f15);
  (0, import_react36.useEffect)((() => {
    S10.current = f15;
  }), [f15]);
  let F5 = (0, import_react36.useRef)(m12.embeddedWallets.ethereum.createOnLogin);
  (0, import_react36.useEffect)((() => {
    F5.current = m12.embeddedWallets.ethereum.createOnLogin;
  }), [m12.embeddedWallets.ethereum.createOnLogin]);
  let T9 = (0, import_react36.useRef)(m12.embeddedWallets.solana.createOnLogin);
  (0, import_react36.useEffect)((() => {
    T9.current = m12.embeddedWallets.solana.createOnLogin;
  }), [m12.embeddedWallets.solana.createOnLogin]);
  let H5 = (0, import_react36.useRef)(C8);
  (0, import_react36.useEffect)((() => {
    H5.current = C8;
  }), [C8]);
  let b11 = (0, import_react36.useRef)(L5);
  (0, import_react36.useEffect)((() => {
    b11.current = L5;
  }), [L5]);
  let V4 = (0, import_react36.useRef)(c15);
  return (0, import_react36.useEffect)((() => {
    V4.current = c15;
  }), [c15]), (0, import_react36.useEffect)((() => {
    if (!a22 || !p9) return;
    let t18 = async () => {
      if (!A7.current) {
        A7.current = true;
        try {
          y9({ status: "loading" });
          let e15 = await Z.current();
          if (void 0 !== M7.current && M7.current === e15) return void y9({ status: "done" });
          if (!e15) return u17 && (await h9(), k12.current?.()), M7.current = e15, void y9({ status: "done" });
          d18.startAuthFlow(new Kt(e15));
          let { user: t19, isNewUser: a23 = false } = await d18.authenticate();
          if (!t19) throw new s3("Failed to sync with custom auth provider");
          E9.current?.({ user: t19, isNewUser: a23 }), H5.current(t19), b11.current(a23), V4.current(true);
          let i20 = w9(cr)?.shouldCreateWallet({ user: t19 }), r18 = lr(t19, F5.current, i20), n18 = or(t19, T9.current, i20);
          if (r18 && n18) {
            let e16 = await S10.current({ chainType: "ethereum", walletIndex: 0, latestUser: t19 });
            await S10.current({ chainType: "solana", walletIndex: 0, latestUser: e16.user });
          } else n18 ? await S10.current({ chainType: "solana", walletIndex: 0, latestUser: t19 }) : r18 && await S10.current({ chainType: "ethereum", walletIndex: 0, latestUser: t19 });
          M7.current = e15, y9({ status: "done" });
        } catch (e15) {
          if (console.warn(e15), await h9().catch((() => {
          })), k12.current?.(), e15 instanceof r2 && e15.privyErrorCode === i2.LINKED_TO_ANOTHER_USER) return y9({ status: "initial" }), void setTimeout((() => {
            t18();
          }), 0);
          _6.current?.(e15), y9({ status: "error", error: e15 });
        } finally {
          A7.current = false;
        }
      }
    };
    return t18(), e14(t18);
  }), [e14, d18, u17, h9, a22, p9, w9]), a22 ? { state: g4 } : { state: { status: "not-enabled" } };
}
var ur = create((() => ({ jwtAuthFlowState: { status: "not-enabled" } })));
function pr({ customAuth: e14 }) {
  let { jwtAuthFlowState: t17 } = (function({ customAuth: e15 }) {
    let t18 = u3(), a22 = (0, import_react36.useRef)(void 0), i19 = (0, import_react36.useCallback)(((e16) => (a22.current = e16, () => {
      a22.current = void 0;
    })), []), r17 = e15?.getCustomAccessToken ?? (() => Promise.resolve(void 0)), { state: l14 } = hr({ enabled: true === e15?.enabled, subscribe: i19, getExternalJwt: r17, onAuthenticated: ({ user: e16, isNewUser: a23 }) => {
      t18("login", "onComplete", { user: e16, isNewUser: a23, wasAlreadyAuthenticated: false, loginMethod: "custom", loginAccount: null }), t18("customAuth", "onAuthenticated", { user: e16 });
    }, onUnauthenticated: () => {
      t18("customAuth", "onUnauthenticated");
    }, onError: (e16) => {
      t18("login", "onError", e16.privyErrorCode || i2.UNKNOWN_AUTH_ERROR);
    } });
    return (0, import_react36.useEffect)((() => {
      (async () => {
        e15 && !e15.isLoading && a22.current?.();
      })();
    }), [e15?.enabled, e15?.getCustomAccessToken, e15?.isLoading]), { jwtAuthFlowState: l14 };
  })({ customAuth: e14 });
  return (0, import_react36.useEffect)((() => {
    ur.setState({ jwtAuthFlowState: t17 });
  }), [t17]), null;
}
var wr = ["eth_sign", "eth_populateTransactionRequest", "eth_signTransaction", "personal_sign", "eth_signTypedData_v4", "csw_signUserOperation", "secp256k1_sign"];
var fr = class extends Error {
  constructor(e14, t17, a22) {
    super(e14), this.code = t17, this.data = a22;
  }
};
var mr = class extends eventemitter3_default {
  async handleSendTransaction(e14) {
    if (!e14.params || !Array.isArray(e14.params)) throw new fr(`Invalid params for ${e14.method}`, 4200);
    let t17 = e14.params[0];
    if (l(t17)) throw new fr("Tempo (type 118) transactions are not supported via the EIP-1193 provider. Use useSendTransaction from @privy-io/react-auth/tempo instead.", 4200);
    if (!await bi() || !this.address) throw new fr("Disconnected", 4900);
    let a22 = { ...t17, chainId: t17.chainId ?? m(this.chainId) }, { hash: i19 } = await br(a22, { address: this.address });
    return i19;
  }
  async handleSignTransaction(e14) {
    if (!e14.params || !Array.isArray(e14.params)) throw new fr(`Invalid params for ${e14.method}`, 4200);
    let t17 = e14.params[0];
    if (xi(t17)) return this.handleSignTempoTransaction(t17);
    if (!await bi() || !this.address) throw new fr("Disconnected", 4900);
    let a22 = { ...t17, chainId: t17.chainId ?? m(this.chainId) }, { signature: i19 } = await Hr(a22, { address: this.address });
    return i19;
  }
  async handleSignTempoTransaction(e14) {
    let t17, a22 = await bi();
    if (!a22 || !this.address) throw new fr("Disconnected", 4900);
    let i19 = this.walletAccount;
    if (!i19 || !s2(i19)) throw new fr("Tempo (type 118) transactions are only supported on Unified embedded wallets", 4200);
    let r17 = this.privyClient;
    if (!r17) throw new fr("Disconnected", 4900);
    try {
      t17 = cn(Ei(e14));
    } catch (e15) {
      throw new fr(e15 instanceof Error ? e15.message : "Invalid Tempo transaction", 4200);
    }
    let n18 = await F(r17, (async ({ message: e15 }) => this.walletProxy.signWithUserSigner({ accessToken: a22, message: e15 })), { chain_type: "ethereum", method: "eth_signTransaction", wallet_id: i19.id, params: { transaction: t17 } });
    if ("eth_signTransaction" !== n18.method || !("signed_transaction" in n18.data)) throw new fr("Unable to sign transaction", 4200);
    return n18.data.signed_transaction;
  }
  handleSwitchEthereumChain(e14) {
    let t17;
    if (!e14.params || !Array.isArray(e14.params)) throw new fr(`Invalid params for ${e14.method}`, 4200);
    if ("string" == typeof e14.params[0]) t17 = e14.params[0];
    else {
      if (!("chainId" in e14.params[0]) || "string" != typeof e14.params[0].chainId) throw new fr(`Invalid params for ${e14.method}`, 4200);
      t17 = e14.params[0].chainId;
    }
    this.chainId = Number(t17), this.publicClient = l3(this.chainId, this.chains, this.rpcConfig, { appId: this.appId }), this.emit("chainChanged", t17);
  }
  async handlePersonalSign(e14) {
    if (!e14.params || !Array.isArray(e14.params)) throw Error("Invalid params for personal_sign");
    let t17 = e14.params[0], a22 = e14.params[1], { signature: i19 } = await Fr({ message: t17 }, { address: a22 });
    return i19;
  }
  async handleSignedTypedData(e14) {
    if (!e14.params || !Array.isArray(e14.params)) throw Error("Invalid params for eth_signTypedData_v4");
    let t17 = e14.params[0], a22 = "string" == typeof e14.params[1] ? JSON.parse(e14.params[1]) : e14.params[1], i19 = e14.params[2], { signature: r17 } = await Tr(w(a22), { address: t17, signatureOptions: i19?.signatureOptions, caip2: i19?.caip2 });
    return r17;
  }
  async handleEstimateGas(e14) {
    if (!e14.params || !Array.isArray(e14.params)) throw Error("Invalid params for eth_estimateGas");
    if (delete e14.params[0].gasPrice, delete e14.params[0].maxFeePerGas, delete e14.params[0].maxPriorityFeePerGas, l(e14.params[0])) throw new fr("Tempo (type 118) transactions are not supported via the EIP-1193 provider. Use useSendTransaction from @privy-io/react-auth/tempo instead.", 4200);
    let t17 = { ...e14.params[0], chainId: m(this.chainId) };
    return await this.publicClient.estimateGas({ account: t17.from ?? this.address, ...a(t17) });
  }
  async request(e14) {
    switch (console.debug("Embedded1193Provider.request() called with args", e14), e14.method) {
      case "eth_accounts":
      case "eth_requestAccounts":
        return this.address ? [this.address] : [];
      case "eth_chainId":
        return m(this.chainId);
      case "eth_estimateGas":
        return this.handleEstimateGas(e14);
      case "eth_sendTransaction":
        return this.handleSendTransaction(e14);
      case "eth_signTransaction":
        return this.handleSignTransaction(e14);
      case "wallet_switchEthereumChain":
        return this.handleSwitchEthereumChain(e14);
      case "personal_sign":
        return this.handlePersonalSign(e14);
      case "eth_signTypedData_v4":
        return this.handleSignedTypedData(e14);
    }
    if (!((e15) => wr.includes(e15))(e14.method)) return this.publicClient.request({ method: e14.method, params: e14.params });
    {
      let t17 = await bi();
      if (await Vr({ address: this.address }), !t17 || !this.address) throw new fr("Disconnected", 4900);
      try {
        let a22 = { method: e14.method, params: e14.params }, i19 = this.walletAccount;
        return i19 && s2(i19) ? this.handleWalletApiRequest(a22, i19, t17) : (await this.walletProxy.rpc({ accessToken: t17, entropyId: this.entropyId, entropyIdVerifier: this.entropyIdVerifier, chainType: "ethereum", hdWalletIndex: this.walletIndex, request: a22 })).response.data;
      } catch (e15) {
        throw console.error(e15), new fr("Disconnected", 4900);
      }
    }
  }
  async handleWalletApiRequest(e14, t17, a22) {
    let i19 = this.privyClient;
    if (!i19) throw new fr("Disconnected", 4900);
    if ("secp256k1_sign" === e14.method) {
      let r17 = await F(i19, (async ({ message: e15 }) => this.walletProxy.signWithUserSigner({ accessToken: a22, message: e15 })), { chain_type: "ethereum", method: "secp256k1_sign", wallet_id: t17.id, params: { hash: e14.params[0] } });
      if ("secp256k1_sign" !== r17.method) throw new fr(`Invalid params for ${e14.method}`, 4200);
      return r17.data.signature;
    }
    throw new fr(`Method not supported: ${e14.method}`, 4200);
  }
  constructor({ walletProxy: e14, address: t17, entropyId: a22, entropyIdVerifier: i19, rpcConfig: r17, chains: n18, appId: l14, chainId: s19 = 1, walletIndex: o22, privyClient: d18, walletAccount: c15 }) {
    super(), this.walletProxy = e14, this.address = t17, this.entropyId = a22, this.entropyIdVerifier = i19, this.chainId = s19, this.rpcConfig = r17, this.chains = n18, this.publicClient = l3(s19, this.chains, r17, { appId: l14 }), this.rpcTimeoutDuration = N(r17, "privy"), this.appId = l14, this.walletIndex = o22, this.privyClient = d18, this.walletAccount = c15;
  }
};
var gr = ({ ...t17 } = {}) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t17, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.37126 11.0323C2.37126 12.696 3.90598 13.4421 5.40654 13.4468C8.91753 13.4468 12.8021 11.2897 12.7819 7.67984C12.7673 5.07728 10.3748 2.86167 7.54357 2.88296C4.8495 2.88296 2.21821 4.6411 2.21803 7.03628C2.21803 7.67951 2.58722 8.30178 3.55231 8.37184C2.74763 9.16826 2.37126 10.1225 2.37126 11.0323ZM7.55283 8.68012C8.11562 8.68012 8.57186 8.13217 8.57186 7.45624C8.57186 6.78032 8.11562 6.23237 7.55283 6.23237C6.99003 6.23237 6.53379 6.78032 6.53379 7.45624C6.53379 8.13217 6.99003 8.68012 7.55283 8.68012ZM10.4747 8.68012C11.0375 8.68012 11.4937 8.13217 11.4937 7.45625C11.4937 6.78032 11.0375 6.23237 10.4747 6.23237C9.91186 6.23237 9.45562 6.78032 9.45562 7.45625C9.45562 8.13217 9.91186 8.68012 10.4747 8.68012Z", fill: t17.color || "var(--privy-color-foreground-3)" }) });
var yr = [];
var Mr = {};
var vr = () => ((() => {
  let e14 = se(), { user: t17 } = k(), { walletProxy: a22, privy: i19 } = l2(), { fundWallet: r17 } = F2(), [d18, c15] = (0, import_react36.useState)(Mr), C8 = (0, import_react36.useRef)(r17);
  (0, import_react36.useEffect)((() => {
    C8.current = r17;
  }), [r17]);
  let L5 = (0, import_react36.useMemo)((() => t17 && a22 ? t17.linkedAccounts.filter(((e15) => "wallet" === e15.type && "ethereum" === e15.chainType && null !== e15.walletIndex && "privy" === e15.walletClientType)) : yr), [t17, a22]);
  (0, import_react36.useEffect)((() => {
    if (L5.length < 1) return void d7.setState({ ethereumEmbedded: [] });
    let r18 = b(), n18 = L5.map(((n19) => {
      let l14 = d18[n19.address] ?? e14.defaultChain.id, s19 = () => {
        if (!t17 || !a22) throw new s3("User not ready");
        let { entropyId: r19, entropyIdVerifier: s20 } = f2(t17, n19);
        return new mr({ walletProxy: a22, address: n19.address, entropyId: r19, entropyIdVerifier: s20, rpcConfig: e14.rpcConfig, chains: e14.chains, appId: e14.id, chainId: l14, walletIndex: n19.walletIndex, privyClient: i19, walletAccount: n19 });
      }, o22 = r18.find(((e15) => e15.address === n19.address && e15.connectorType === n19.connectorType && e15.walletClientType === n19.walletClientType))?.connectedAt ?? n19.firstVerifiedAt?.getTime() ?? Date.now();
      return { fund: async (e15) => {
        await C8.current({ address: n19.address, options: e15 });
      }, type: "ethereum", chainId: `eip155:${l14}`, switchChain: async (e15) => {
        c15(((t18) => ({ ...t18, [n19.address]: Number(e15) })));
      }, getEthereumProvider: async () => s19(), sign: async (e15) => {
        let t18 = s19();
        return await t18.request({ method: "personal_sign", params: [_e(e15), n19.address] });
      }, address: n19.address, connectedAt: o22, walletClientType: "privy", connectorType: n19.imported ? "embedded_imported" : "embedded", imported: n19.imported, meta: { name: "Privy Wallet", icon: gr, id: "io.privy.wallet" }, isConnected: async () => true, disconnect: () => {
      }, linked: true, loginOrLink: async () => {
        throw new s3("Cannot link or login with embedded wallet");
      }, unlink: async () => {
        throw new s3("Cannot unlink with embedded wallet");
      }, walletIndex: n19.walletIndex };
    }));
    d7.setState(((e15) => e15.ethereumEmbedded.length === n18.length && e15.ethereumEmbedded.every(((e16, t18) => {
      let a23 = n18[t18];
      return e16.address === a23.address && e16.chainId === a23.chainId && e16.connectorType === a23.connectorType && e16.connectedAt === a23.connectedAt;
    })) ? {} : { ethereumEmbedded: n18 }));
  }), [L5, e14.chains, e14.defaultChain.id, e14.id, e14.rpcConfig, d18, i19, t17, a22]);
})(), null);
var Ar;
var Zr;
var Er;
var kr;
var _r;
var Sr = (a22) => {
  let i19 = a22.client, r17 = a22.privy, s19 = se();
  _2(S2(s19?.appearance.walletList ?? []));
  let [d18, c15] = (0, import_react36.useState)(false), L5 = ri2(((e14) => e14.inProgressMfaFlow)), [h9, u17] = (0, import_react36.useState)(false), w9 = e(((e14) => e14.user)), [f15, m12] = (0, import_react36.useState)(void 0), [g4, y9] = (0, import_react36.useState)(false), [M7, v5] = (0, import_react36.useState)(null), [Z, E9] = (0, import_react36.useState)(false), [I7, U3] = (0, import_react36.useState)({ status: "disconnected", connectedWallet: null, connectError: null, connector: null, connectRetry: i }), [O8, x8] = (0, import_react36.useState)({ status: "initial" }), [N4, D7] = (0, import_react36.useState)({ status: "initial" }), [B5, G4] = (0, import_react36.useState)({ status: "initial" }), [ee2, te3] = (0, import_react36.useState)({ status: "initial" }), [ae, ie3] = (0, import_react36.useState)({ status: "initial" }), [ne3, oe3] = (0, import_react36.useState)({ status: "initial" }), [Ce, he] = (0, import_react36.useState)(null), pe2 = ce(), { initializationError: we2, setInitializationError: fe3 } = de(), [ve, Ze2] = (0, import_react36.useState)({}), [Ee2, Fe3] = (0, import_react36.useState)(null), Te3 = (0, import_react36.useRef)(null), He3 = (0, import_react36.useRef)(null), be = (0, import_react36.useRef)(null), Ve2 = (0, import_react36.useRef)(r3), Re = e(((e14) => e14.authenticated)), Pe = (0, import_react36.useCallback)(((e14) => {
    a4(e14), !e14 && M7 && ai2[M7]().then(((e15) => {
      e15.default.isUnauthenticatedScreem && v5(null);
    }));
  }), [M7]);
  i19.onStoreCustomerAccessToken = (e14) => {
    e14 && a3(Ve2, "accessToken", "onAccessTokenGranted", { accessToken: e14 });
  }, i19.onDeleteCustomerAccessToken = () => {
    s6(null), Pe(false), a3(Ve2, "accessToken", "onAccessTokenRemoved");
  };
  let We2 = (0, import_react36.useRef)(null), Ie2 = (0, import_react36.useRef)(null), Ue2 = (0, import_react36.useRef)(false), Oe2 = ({ showWalletUIs: e14 }) => Ue2.current ? Ue2.current : void 0 !== e14 ? !e14 : !s19.embeddedWallets.showWalletUIs, xe = (e14) => {
    v5(e14), setTimeout((() => {
      c15(!!e14);
    }), 15);
  };
  (0, import_react36.useEffect)((() => {
    Ce && Te3.current?.(Ce);
  }), [Ce]), (0, import_react36.useEffect)((() => {
    if (s19.externalWallets.solana.connectors) return s19.externalWallets.solana.connectors.onMount(), () => s19.externalWallets.solana.connectors?.onUnmount();
  }), [s19.externalWallets.solana.connectors]), (0, import_react36.useEffect)((() => {
    zi();
  }), []), (0, import_react36.useEffect)((() => {
    !h9 && pe2 && (async function() {
      let e14, t17 = Ne2(), a23 = De2(), r18 = createStore();
      i19.initializeConnectorManager({ walletConnectCloudProjectId: s19.walletConnectCloudProjectId, rpcConfig: s19.rpcConfig, chains: s19.chains, defaultChain: s19.defaultChain, store: r18, walletList: s19.appearance.walletList, shouldEnforceDefaultChainOnConnect: s19.shouldEnforceDefaultChainOnConnect, externalWalletConfig: s19.externalWallets, appName: s19.name ?? "Privy", walletChainType: s19.appearance.walletChainType, setBaseAccountSdk: m12, connectorsDebugLogs: s19.connectorsDebugLogs }), i19.connectors?.on("connectorInitialized", (() => {
        e14 && clearTimeout(e14);
        let t18 = i19.connectors.walletConnectors.length, a24 = i19.connectors.walletConnectors.reduce(((e15, t19) => e15 + (t19.initialized ? 1 : 0)), 0);
        a24 === t18 ? m4(true) : e14 = setTimeout((() => {
          console.debug({ message: "Unable to initialize all expected connectors before timeout", initialized: a24, expected: t18 }), m4(true);
        }), 1500);
      })), i19.connectors?.initialize().then((() => {
        Je2();
      }));
      let n18 = await i19.getAuthenticatedUser();
      if (i4(true), a23 && n18) {
        let e15, t18 = i19.authFlow;
        if (t18.meta.telegramWebAppData?.user) try {
          e15 = String(JSON.parse(t18.meta.telegramWebAppData.user).id);
        } catch {
        }
        let a24 = n18.telegram?.telegramUserId;
        e15 && a24 !== e15 && (await i19.logout(), i19.startAuthFlow(t18), n18 = null);
      }
      let l14 = !!n18;
      return s19.legal.requireUsersAcceptTerms && n18 && !n18.hasAcceptedTerms ? (await i19.logout(), Et.setReadyToTrue(true), void a3(Ve2, "logout", "onSuccess")) : (s19.customAuth?.enabled || (Pe(!!n18), n18 && a3(Ve2, "login", "onComplete", { user: n18, isNewUser: false, wasAlreadyAuthenticated: true, loginMethod: null, loginAccount: null }), s6(n18)), t17 ? void (Ie2.current = l14 ? "link" : "login") : a23 && !l14 || Be2(!!n18) && !l14 ? (Ie2.current = "login", We2.current = "telegram", Ze2({ telegramAuthModalData: { seamlessAuth: true } }), void xe("TelegramAuthScreen")) : void Et.setReadyToTrue(!!n18));
    })().catch(((e14) => {
      let t17 = e14 instanceof Error ? e14 : Error(String(e14));
      fe3(t17), console.warn("Error initializing Privy provider: ", t17);
    }));
  }), [i19, Ee2, h9, pe2, fe3]), (0, import_react36.useEffect)((() => {
    i19.connectors?.setWalletList(s19.appearance.walletList);
  }), [s19.appearance.walletList.join()]);
  let Ne2 = () => {
    let e14 = Oa2();
    return e14.inProgress && e14.popupFlow ? window.opener.location.origin !== window.location.origin ? void window.opener.postMessage({ type: "PRIVY_OAUTH_ERROR", error: "Origins between parent and child windows do not match." }) : "error" === e14.authorizationCode ? void window.opener.postMessage({ type: "PRIVY_OAUTH_ERROR", error: "Something went wrong. Try again." }) : void window.opener.postMessage({ type: "PRIVY_OAUTH_RESPONSE", stateCode: e14.stateCode, authorizationCode: e14.authorizationCode }) : (e14.inProgress && e14.provider.startsWith("privy:") && !e14.popupFlow && (new BroadcastChannel(xi2).postMessage({ type: "PRIVY_OAUTH_RESPONSE", stateCode: e14.stateCode, authorizationCode: e14.authorizationCode }), window.close()), !!e14.inProgress && !!e14.withPrivyUi && (i19.startAuthFlow(new oi({ ...e14, customOAuthRedirectUrl: s19.customOAuthRedirectUrl })), xe("OAuthStatusScreen"), true));
  }, De2 = () => {
    if (!s19.loginConfig.telegramHasHmacCredentials) return;
    let e14 = (function() {
      let e15;
      return (e15 = (function() {
        let e16 = new URLSearchParams(window.location.search), t18 = Number(e16.get("id") || ""), a23 = e16.get("hash"), i20 = Number(e16.get("auth_date") || ""), r18 = e16.get("first_name");
        if (t18 && r18 && i20 && a23) return Object.fromEntries(e16.entries());
      })()) ? (Qa(), { flowType: "login-url", authData: e15 }) : (e15 = (function() {
        let e16 = window.location.hash;
        if (!e16 || !e16.startsWith("#tgWebAppData")) return;
        let t18 = Ja(e16.replace("#tgWebAppData=", "")), { user: a23, auth_date: i20, hash: r18 } = t18;
        return a23 && i20 && r18 ? t18 : void 0;
      })()) ? (Qa(), { flowType: "web-app", authData: e15 }) : void 0;
    })();
    if (!e14 || !s19.loginMethods.telegram || !s19.loginConfig.telegramAuthConfiguration?.seamlessAuthEnabled) return;
    let t17 = new $a();
    return i19.startAuthFlow(t17), "login-url" === e14.flowType && (t17.meta.telegramWebAppData = void 0, t17.meta.telegramAuthResult = e14.authData), "web-app" === e14.flowType && (t17.meta.telegramAuthResult = void 0, t17.meta.telegramWebAppData = e14.authData), true;
  }, Be2 = (e14) => {
    if (!s19.loginMethods.telegram || s19.loginConfig.telegramHasHmacCredentials || !s19.loginConfig.telegramSeamlessAuthEnabled || e14) return false;
    let t17 = Xi();
    if (!t17) return false;
    let a23 = (function(e15) {
      try {
        let t18 = e15.split("&").filter(((e16) => e16.length > 0)).map(((e16) => {
          let t19 = e16.indexOf("=");
          return -1 === t19 ? [decodeURIComponent(e16), ""] : [decodeURIComponent(e16.slice(0, t19)), decodeURIComponent(e16.slice(t19 + 1))];
        })), a24 = Object.fromEntries(t18);
        return a24.signature ? a24 : null;
      } catch {
        return null;
      }
    })(t17);
    if (!a23) return false;
    let r18 = new $a();
    return i19.startAuthFlow(r18), r18.meta.telegramAuthResult = void 0, r18.meta.telegramWebAppData = a23, true;
  }, je2 = async (e14, t17, a23, r18) => {
    if ("solana_adapter" !== e14) qe2(await i19.connectors?.createEthereumWalletConnector({ connectorType: e14, walletClientType: t17 }) || null, t17, a23, r18);
    else {
      let e15 = i19.connectors?.findSolanaWalletConnector(t17);
      if (!e15) return;
      qe2(e15, t17, a23, r18);
    }
  };
  async function qe2(e14, t17, a23, i20) {
    if (!e14) return U3({ status: "disconnected", connectedWallet: null, connectError: new n2("Unable to connect to wallet."), connector: null, connectRetry: i }), i20?.(null, a23);
    U3({ status: "disconnected", connectedWallet: null, connectError: null, connector: e14, connectRetry: i }), e14 instanceof $t && t17 && await e14.resetConnection(t17), U3({ connector: e14, status: "connecting", connectedWallet: null, connectError: null, connectRetry: () => qe2(e14, t17, a23, i20) });
    try {
      let t18 = await e14.connect({ showPrompt: true });
      return t18 && E2(t18) && await P3(t18, s19, (() => {
        U3(((t19) => ({ ...t19, connector: e14, status: "switching_to_supported_chain", connectedWallet: null, connectError: null, connectRetry: i })));
      })), U3(((e15) => ({ ...e15, status: "connected", connectedWallet: t18, connectError: null, connectRetry: i }))), t18 && a3(Ve2, "connectWallet", "onSuccess", { wallet: t18 }), i20?.(t18, a23);
    } catch (e15) {
      return e15 instanceof t ? (console.warn(e15.cause ? e15.cause : e15.message), a3(Ve2, "connectWallet", "onError", e15.privyErrorCode || i2.GENERIC_CONNECT_WALLET_ERROR)) : (console.warn(e15), a3(Ve2, "connectWallet", "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR)), U3(((t18) => ({ ...t18, status: "disconnected", connectedWallet: null, connectError: e15 }))), i20?.(null, a23);
    }
  }
  let Ge = async (e14, t17, a23) => {
    if (null === e14 || !E2(e14)) return;
    let r18 = new hi(i19, e14, t17, a23);
    i19.startAuthFlow(r18);
  }, Ye2 = async (e14, t17, a23, r18 = "plain") => {
    let n18 = n3(i3);
    if ("transaction" === r18 && !n18) throw new s3("useSolanaLedger plugin hook must be mounted");
    if (null === e14 || !J(e14)) return;
    let l14 = new Ba(e14, i19, t17, a23, r18, n18);
    i19.startAuthFlow(l14);
  }, Je2 = async () => {
    let e14 = new URLSearchParams(window.location.search), t17 = e14.get("privy_connector"), a23 = e14.get("privy_wallet_client"), r18 = "true" === e14.get("privy_connect_only");
    if (!t17 || !a23) return;
    u.debug("Mobile wallet return detected", { connectorType: t17, wallet: a23, connectOnly: r18 });
    let n18 = q({ connectorType: t17, walletClientType: a23 });
    if (!n18 || !n18.isInstalled) return u.warn("Wallet not installed on mobile return", { wallet: a23, hasConfig: !!n18, isInstalled: n18?.isInstalled }), xe("LoginFailedScreen");
    if (!i19.connectors) throw new s3("Connector not initialized");
    await xe(r18 ? "ConnectOnlyStatusScreen" : "ConnectionStatusScreen");
    let l14 = new URL(window.location.href);
    l14.searchParams.delete("privy_connector"), l14.searchParams.delete("privy_wallet_client"), l14.searchParams.delete("privy_connect_only"), window.history.pushState({}, "", l14), u.debug("Launching connection flow from mobile return", { wallet: a23, connectorType: t17, connectOnly: r18 }), je2(t17, a23, void 0, r18 ? void 0 : "solana_adapter" === t17 ? Ye2 : Ge);
  };
  (0, import_react36.useEffect)((() => {
    h9 && Re && null === w9 && i19.getAuthenticatedUser().then(s6);
  }), [h9, Re, w9, i19]);
  let Xe2 = (e14) => {
    if (!Re) throw a3(Ve2, "linkAccount", "onError", i2.MUST_BE_AUTHENTICATED, { linkMethod: e14 }), new s3("User must be authenticated before linking an account.");
  }, nt = (e14) => {
    if (!Re || !w9) return false;
    if ("privy" === e14.walletClientType) return true;
    for (let t17 of w9.linkedAccounts) if ("wallet" === t17.type && t17.address === e14.address && "privy" !== t17.walletClientType) return true;
    return false;
  }, ct = () => {
    d7.setState(((e14) => {
      let t17 = i19.connectors?.wallets.filter(E2).map(((e15) => ({ ...e15, linked: nt(e15), loginOrLink: async () => {
        if (!await e15.isConnected()) throw new s3("Wallet is not connected");
        if ("embedded" === e15.connectorType && "privy" === e15.walletClientType) throw new s3("Cannot link or login with embedded wallet");
        (async (e16) => {
          let t18;
          if (!i19.connectors) throw new s3("Connector not initialized");
          t18 = "ethereum" === e16.type ? i19.connectors.findWalletConnector(e16.connectorType, e16.walletClientType) || null : i19.connectors.findSolanaWalletConnector(e16.walletClientType) || null, U3(((a23) => ({ ...a23, connector: t18, status: "connected", connectedWallet: e16, connectError: null, connectRetry: i }))), s19.captcha.enabledProvider && !Re ? (Ze2({ captchaModalData: { callback: (t19) => E2(e16) ? Ge(e16, t19) : Ye2(e16, t19), userIntentRequired: false, onSuccessNavigateTo: "ConnectionStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), await xe("CaptchaScreen")) : (E2(e16) ? await Ge(e16) : await Ye2(e16), await xe("ConnectionStatusScreen"));
        })(e15);
      }, fund: async (t18) => {
        await Et.fundWallet(e15.address, t18);
      }, unlink: async () => {
        if (!Re) throw new s3("User is not authenticated.");
        if ("embedded" === e15.connectorType && "privy" === e15.walletClientType) throw new s3("Cannot unlink an embedded wallet");
        s6(await i19.unlinkEthereumWallet(e15.address));
      } }))) || [];
      return L(e14.ethereumExternal, t17) ? {} : { ethereumExternal: t17 };
    }));
  };
  (0, import_react36.useEffect)((() => {
    ct();
  }), [w9?.linkedAccounts, Re, h9]), (0, import_react36.useEffect)((() => {
    if (h9) {
      if (!i19.connectors) throw new s3("Connector not initialized");
      ct(), i19.connectors.on("walletsUpdated", ct);
    }
  }), [h9]), (0, import_react36.useEffect)((() => {
    [...s19.loginMethodsAndOrder?.primary ?? [], ...s19.loginMethodsAndOrder?.overflow ?? []].filter(((e14) => e14.startsWith("privy:"))).forEach(((e14) => i19.getCrossAppProviderDetails(e14.replace("privy:", ""))));
  }), [!!i19]);
  let Ct = ({ transaction: e14, sponsor: t17, uiOptions: n18, fundWalletConfig: l14, address: o22, signOnly: d19 }) => new Promise((async (c16, C8) => {
    let { requesterAppId: L6 } = n18 || {}, h10 = d19 ? "signTransaction" : "sendTransaction", u18 = o22 ? _(w9, o22) : d(w9);
    if (!u18 && o22) {
      let a23 = y(nr(), o22);
      if (a23) {
        if (t17) return C8(new s3("Cannot sponsor transactions for externally connected wallet.")), void a3(Ve2, h10, "onError", i2.TRANSACTION_FAILURE);
        try {
          let t18 = await a23.getEthereumProvider(), i20 = e14.data, r18 = n3(t13);
          r18 && (i20 = r18.appendDataSuffix({ data: i20 }));
          let n19 = { ...e14, from: o22, chainId: e14.chainId || Number(a23.chainId.replace("eip155:", "")), value: void 0 !== e14.value ? _e(e14.value) : void 0, data: i20 }, l15 = await t18.request({ method: "sendTransaction" === h10 ? "eth_sendTransaction" : "eth_signTransaction", params: [n19] });
          return a3(Ve2, h10, "onSuccess", { hash: l15 }), void c16({ hash: l15 });
        } catch (e15) {
          return a3(Ve2, h10, "onError", i2.TRANSACTION_FAILURE), void C8(e15 ?? new m2("Unable to " + h10 + e15));
        }
      }
    }
    if (!u18) return a3(Ve2, h10, "onError", i2.EMBEDDED_WALLET_NOT_FOUND), void C8(new s3("No embedded or connected wallet found for address."));
    if (!Re || !w9) return a3(Ve2, h10, "onError", i2.MUST_BE_AUTHENTICATED), void C8(Error("User must be authenticated before signing with a Privy wallet"));
    let f16 = u18.address, m13 = u18.walletIndex ?? 0, { entropyId: g5, entropyIdVerifier: y10 } = f2(w9, u18), M8 = y(nr(), f16);
    if (!M8) return a3(Ve2, h10, "onError", i2.EMBEDDED_WALLET_NOT_FOUND), void C8(Error("Must have a Privy wallet before signing"));
    let v6 = await M8.getEthereumProvider(), Z2 = await v6.request({ method: "eth_chainId" }), E10 = e14.chainId ? Number(e14.chainId) : A2(Z2);
    ((e15) => {
      if (!s19.chains.map(((e16) => e16.id)).includes(e15)) throw new n2(`Chain ID ${e15} is not supported. It must be added to the config.supportedChains property of the PrivyProvider.`, i2.UNSUPPORTED_CHAIN_ID);
    })(E10);
    let k12 = n3(t13), _6 = e14.data;
    k12 && !t17 && (_6 = k12.appendDataSuffix({ data: _6 }));
    let S10 = { ...e14, from: e14.from ?? f16, chainId: E10, data: _6 }, F5 = await bi();
    if (!F5 || !Ce) return a3(Ve2, h10, "onError", i2.EMBEDDED_WALLET_NOT_FOUND), void C8(Error("Must have valid access token and Privy wallet to send transaction"));
    let T9 = l3(S10.chainId, s19.chains, s19.rpcConfig, { appId: a22.appId }), H5 = s2(u18), b11 = async ({ transactionRequest: e15 }) => {
      try {
        let a23;
        if (!await Et.recoverEmbeddedWallet({ address: f16 })) throw a3(Ve2, h10, "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR), C8(Error("Unable to connect to wallet")), Error("Unable to connect to wallet");
        if (t17) {
          let t18 = await (async ({ transactionRequest: e16 }) => {
            if (!H5) throw new s3("Sponsoring is only supported for wallets on the TEE stack");
            if (d19) throw new s3("Cannot sponsor a sign transaction request");
            let t19 = (e17) => null == e17 ? void 0 : _e(e17), a24 = await F(r17, (async ({ message: e17 }) => await Ce.signWithUserSigner({ accessToken: F5, requesterAppId: L6, message: e17 })), { chain_type: "ethereum", method: "eth_sendTransaction", caip2: y2(_e(e16.chainId)), sponsor: true, ...k12 ? { experimental_data_suffix: k12.suffix } : {}, params: { transaction: { from: e16.from, to: e16.to, chain_id: t19(e16.chainId), data: Se(e16.data) ? e16.data ? e16.data : _e(Uint8Array.from(e16.data)) : void 0, value: t19(e16.value) } }, wallet_id: u18.id });
            if (a24.data && "hash" in a24.data) return a24.data.hash;
            throw new m2("Unable to sign transaction");
          })({ transactionRequest: e15 });
          return a3(Ve2, "sendTransaction", "onSuccess", { hash: t18 }), t18;
        }
        if (H5) {
          let t18 = (e16) => {
            if (null != e16) return Se(e16) ? e16 : _e(e16);
          }, i20 = await F(r17, (async ({ message: e16 }) => await Ce.signWithUserSigner({ accessToken: F5, requesterAppId: L6, message: e16 })), { chain_type: "ethereum", method: "eth_signTransaction", params: { transaction: { from: e15.from, to: e15.to, nonce: t18(e15.nonce), chain_id: t18(e15.chainId), data: Se(e15.data) ? e15.data ? e15.data : _e(Uint8Array.from(e15.data)) : void 0, value: t18(e15.value), type: e15.type, gas_limit: t18(e15.gasLimit ?? e15.gas), gas_price: t18(e15.gasPrice ?? e15.gas), max_fee_per_gas: t18(e15.maxFeePerGas), max_priority_fee_per_gas: t18(e15.maxPriorityFeePerGas) } }, wallet_id: u18.id });
          if (!i20.data || !("signed_transaction" in i20.data)) throw new m2("Unable to sign transaction");
          a23 = i20.data.signed_transaction;
        } else a23 = await (async function({ accessToken: e16, entropyId: t18, entropyIdVerifier: a24, transactingWalletIndex: i20, walletProxy: r18, transactionRequest: n19, requesterAppId: l15 }) {
          return (await r18.rpc({ entropyId: t18, entropyIdVerifier: a24, hdWalletIndex: i20 ?? 0, chainType: "ethereum", accessToken: e16, requesterAppId: l15, request: { method: "eth_signTransaction", params: [n19] } })).response.data;
        })({ accessToken: F5, entropyId: g5, entropyIdVerifier: y10, transactingWalletIndex: m13, walletProxy: Ce, transactionRequest: e15, requesterAppId: L6 });
        if (d19) return a3(Ve2, "signTransaction", "onSuccess", { signature: a23 }), a23;
        {
          let e16 = await T9.sendRawTransaction({ serializedTransaction: a23 });
          return a3(Ve2, "sendTransaction", "onSuccess", { hash: e16 }), e16;
        }
      } catch (e16) {
        throw a3(Ve2, h10, "onError", i2.TRANSACTION_FAILURE), e16;
      }
    };
    if (Oe2({ showWalletUIs: n18?.showWalletUIs })) try {
      let e15 = d19 || t17 ? S10 : await Pi(S10, T9, S10.from), a23 = await b11({ transactionRequest: e15 });
      d19 ? a3(Ve2, "signTransaction", "onSuccess", { signature: a23 }) : a3(Ve2, "sendTransaction", "onSuccess", { hash: a23 }), c16({ hash: a23 });
    } catch (e15) {
      a3(Ve2, h10, "onError", i2.TRANSACTION_FAILURE), C8(e15);
    }
    else {
      let e15 = { connectingWalletAddress: f16, recoveryMethod: u18.recoveryMethod, entropyId: g5, entropyIdVerifier: y10, onCompleteNavigateTo: "SendTransactionScreen", isUnifiedWallet: H5, onFailure: (e16) => {
        a3(Ve2, h10, "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR), C8(e16);
      } }, a23 = ((e16) => !!e16.fundingConfig && B2(e16.fundingConfig.options).length >= 1)(s19) ? T2({ address: f16, appConfig: s19, fundWalletConfig: l14, methodScreen: "FundingMethodSelectionScreen", chainIdOverride: S10.chainId, comingFromSendTransactionScreen: true }) : void 0;
      Ze2({ connectWallet: e15, sendTransaction: { transactionRequest: S10, transactingWalletIndex: m13, transactingWalletAddress: f16, entropyId: g5, entropyIdVerifier: y10, signOnly: d19, scanTransaction: async () => {
        let e16 = await Pi(S10, T9, S10.from);
        return await i19.scanTransaction({ metadata: { domain: s19.embeddedWallets.transactionScanning.domain }, chain_id: e16.chainId.toString(), request: { method: "eth_sendTransaction", params: [{ from: e16.from, to: e16.to, value: e16.value?.toString(), gas: e16.gas?.toString(), gasPrice: e16.gasPrice?.toString(), nonce: e16.nonce?.toString(), data: e16.data }] } });
      }, getIsSponsored: async () => !!t17, onConfirm: ({ transactionRequest: e16 }) => b11({ transactionRequest: e16 }), onSuccess: (e16) => {
        d19 ? a3(Ve2, "signTransaction", "onSuccess", { signature: e16.hash }) : a3(Ve2, "sendTransaction", "onSuccess", { hash: e16.hash }), c16(e16);
      }, onFailure: (e16) => {
        a3(Ve2, h10, "onError", i2.TRANSACTION_FAILURE), C8(e16);
      }, uiOptions: n18 || {}, fundWalletConfig: l14, requesterAppId: L6 }, funding: a23 }), xe("EmbeddedWalletConnectingScreen");
    }
  }));
  function ut() {
    return new Promise((async (e14, t17) => {
      if (!w9 || 0 === w9.mfaMethods.length) return e14();
      let a23 = await bi();
      if (!a23 || !Ce) throw Error("Must have valid access token to enroll in MFA");
      try {
        await Ce.verifyMfa({ accessToken: a23 }), e14();
      } catch (e15) {
        t17(e15);
      }
    }));
  }
  let pt = (e14) => e14?.linkedAccounts.filter(((e15) => null !== e15.latestVerifiedAt && !("wallet" === e15.type && "privy" === e15.walletClientType))).sort(((e15, t17) => t17.latestVerifiedAt.getTime() - e15.latestVerifiedAt.getTime()))[0], mt = (e14) => {
    let t17 = w9?.linkedAccounts.filter(((t18) => t18.type === e14)).length ?? 0, { displayName: a23, loginMethod: i20 } = tr(e14);
    if ("passkey" === e14 && t17 >= 5 || "passkey" !== e14 && t17 >= 1) throw a3(Ve2, "linkAccount", "onError", i2.CANNOT_LINK_MORE_OF_TYPE, { linkMethod: i20 }), new s3(`User already has an account of type ${a23} linked.`);
  };
  async function gt2({ showAutomaticRecovery: e14 = false, legacySetWalletPasswordFlow: t17 = false }) {
    v5(null);
    let a23 = t17 ? "setWalletPassword" : "setWalletRecovery";
    if (!Re || !w9) throw a3(Ve2, a23, "onError", i2.MUST_BE_AUTHENTICATED), Error("User must be authenticated before adding recovery method to Privy wallet");
    let i20 = h(w9);
    if (!i20 || !Ce) throw a3(Ve2, a23, "onError", i2.EMBEDDED_WALLET_NOT_FOUND), Error("Must have a Privy wallet to add a recovery method");
    let r18 = s2(i20);
    if (r18) throw a3(Ve2, a23, "onError", i2.UNSUPPORTED_WALLET_TYPE), new s3("User owned wallet recovery is only supported for on-device execution and this app uses TEE execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide");
    try {
      await ut();
    } catch (e15) {
      throw a3(Ve2, a23, "onError", i2.MISSING_MFA_CREDENTIALS), e15;
    }
    return new Promise(((n18, l14) => {
      let o22 = "user-passcode" === i20.recoveryMethod, d19 = Bi({ walletAction: "update", availableRecoveryMethods: s19.embeddedWallets.userOwnedRecoveryOptions, legacySetWalletPasswordFlow: t17, isResettingPassword: o22, showAutomaticRecovery: e14 }), { entropyId: c16, entropyIdVerifier: C8 } = f2(w9), L6 = { recoveryMethod: i20.recoveryMethod, connectingWalletAddress: i20.address, onCompleteNavigateTo: d19, shouldForceMFA: false, entropyId: c16, isUnifiedWallet: r18, entropyIdVerifier: C8, onFailure: (e15) => {
        a3(Ve2, a23, "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR), l14(e15);
      } };
      Ze2({ setWalletPassword: { onSuccess: (e15) => {
        a3(Ve2, a23, "onSuccess", { method: "user-passcode", wallet: e15 }), n18(e15);
      }, onFailure: (e15) => {
        a3(Ve2, a23, "onError", i2.USER_EXITED_SET_PASSWORD_FLOW), l14(e15);
      }, callAuthOnSuccessOnClose: false }, recoverWallet: { entropyId: c16, entropyIdVerifier: C8, onFailure: l14 }, connectWallet: L6, recoverySelection: { isInAccountCreateFlow: false, isResettingPassword: o22, shouldCreateEth: false, shouldCreateSol: false } }), xe("EmbeddedWalletConnectingScreen");
    }));
  }
  let At = { ready: h9, authenticated: Re, user: w9, error: we2, walletConnectors: i19.connectors || null, connectWallet: (e14) => {
    e14 && "target" in e14 && e14 && (e14 = void 0), Ze2({ externalConnectWallet: { walletList: e14?.walletList && e14?.walletList.length > 0 ? e14.walletList : void 0, walletChainType: e14?.walletChainType, description: e14?.description, hideHeader: e14?.hideHeader } }), xe("ConnectOnlyLandingScreen");
  }, linkWallet: (e14) => (e14 && "target" in e14 && e14 && (e14 = void 0), Xe2("siwe"), We2.current = "siwe", Ie2.current = "link", Ze2({ ...ve, externalConnectWallet: { ...ve.externalConnectWallet, walletList: e14?.walletList, walletChainType: e14?.walletChainType, description: e14?.description || `Link a wallet to your ${s19?.name} account` } }), xe("AuthenticateWithWalletScreen")), linkEmail: () => {
    Xe2("email"), mt("email"), We2.current = "email", Ie2.current = "link", xe("LinkEmailScreen");
  }, linkPhone: () => {
    Xe2("sms"), mt("phone"), We2.current = "sms", Ie2.current = "link", xe("LinkPhoneScreen");
  }, linkGoogle: async () => {
    Xe2("google"), mt("google_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("google");
  }, linkTwitter: async () => {
    Xe2("twitter"), mt("twitter_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("twitter");
  }, linkTwitch: async () => {
    Xe2("twitch"), mt("twitch_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("twitch");
  }, linkDiscord: async () => {
    Xe2("discord"), mt("discord_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("discord");
  }, linkGithub: async () => {
    Xe2("github"), mt("github_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("github");
  }, linkSpotify: async () => {
    Xe2("spotify"), mt("spotify_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("spotify");
  }, linkInstagram: async () => {
    Xe2("instagram"), mt("instagram_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("instagram");
  }, linkTiktok: async () => {
    Xe2("tiktok"), mt("tiktok_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("tiktok");
  }, linkLine: async () => {
    Xe2("line"), mt("line_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("line");
  }, linkLinkedIn: async () => {
    Xe2("linkedin"), mt("linkedin_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("linkedin");
  }, linkApple: async () => {
    Xe2("apple"), mt("apple_oauth"), Ie2.current = "link", await Et.initLoginWithOAuth("apple");
  }, linkOAuth: async ({ provider: e14 }) => {
    Xe2(e14), mt(r(e14) ? e14 : `${e14}_oauth`), Ie2.current = "link", await Et.initLoginWithOAuth(e14);
  }, linkPasskey: async (e14) => {
    Xe2("passkey"), mt("passkey"), await Et.initLinkWithPasskey(), Ze2({ passkeyAuthModalData: { passkeySignupFlow: false, name: e14?.name } }), xe("LinkPasskeyScreen");
  }, linkTelegram: async (e14) => {
    if (Xe2("telegram"), mt("telegram"), !s19.loginConfig.telegramHasHmacCredentials) throw new s3('linkTelegram requires HMAC bot credentials. Use linkWithOAuth("telegram") for OIDC-configured apps.');
    if (Ie2.current = "link", We2.current = "telegram", e14?.launchParams) if (e14.launchParams.initDataRaw) {
      let t17 = new $a();
      i19.startAuthFlow(t17), t17.meta.telegramAuthResult = void 0, t17.meta.telegramWebAppData = Ja(e14.launchParams.initDataRaw), Ze2({ telegramAuthModalData: { seamlessAuth: true } }), xe("TelegramAuthScreen");
    } else a3(Ve2, "linkAccount", "onError", i2.INVALID_DATA, { linkMethod: "telegram" });
    else await Et.initLoginWithTelegram();
    xe("TelegramAuthScreen");
  }, linkFarcaster: async () => {
    Xe2("farcaster"), mt("farcaster"), await Et.initLoginWithFarcaster(), Ie2.current = "link", We2.current = "farcaster", xe("FarcasterConnectStatusScreen");
  }, login: async (e14) => {
    e14 && "target" in e14 && e14 && (e14 = void 0);
    let t17 = "Attempted to log in, but user is already logged in. Use a `link` helper instead.";
    if (!h9) {
      let e15 = await new Promise(((e16) => {
        Fe3(((t18) => e16.bind(t18)));
      }));
      if (Fe3(null), e15) return void console.warn(t17);
    }
    !w9 || w9.isGuest ? (Ie2.current = "login", Ze2({ login: e14 }), xe("LandingScreen")) : console.warn(t17);
  }, connectOrCreateWallet: async () => {
    h9 || (await new Promise(((e14) => {
      Fe3((() => e14));
    })), Fe3(null)), Re ? console.warn("User must be unauthenticated to `connectOrCreateWallet`") : (Ie2.current = "connect-or-create", xe("ConnectOrCreateScreen"));
  }, logout: async () => {
    if (Ie2.current = null, We2.current = null, w9 && i19.clearProviderAcccessTokens(w9), v5(null), await i19.logout(), w9 && Ce) try {
      await Ce.clearMfa({ userId: w9.id });
    } catch (e14) {
    }
    s6(null), Pe(false), y9(false), D7({ status: "initial" }), G4({ status: "initial" }), x8({ status: "initial" }), te3({ status: "initial" }), ie3({ status: "initial" }), oe3({ status: "initial" }), a3(Ve2, "logout", "onSuccess"), c15(false), D2.del(C), D2.del(E(s19.id));
  }, getAccessToken: (0, import_react36.useCallback)((async () => {
    let e14 = await i19.getCustomerAccessToken();
    return e14 && !Re && Pe(true), e14;
  }), [i19, Re]), setWalletRecovery: async (e14) => gt2({ legacySetWalletPasswordFlow: false, showAutomaticRecovery: e14?.showAutomaticRecovery ?? false }), setWalletPassword: async () => gt2({ legacySetWalletPasswordFlow: true, showAutomaticRecovery: false }), signMessage: (e14, t17) => new Promise((async (a23, n18) => {
    let { requesterAppId: l14 } = t17?.uiOptions || {}, s20 = e14.message, o22 = t17?.address ? _(w9, t17.address) : d(w9);
    if (!o22 && void 0 !== t17?.address) {
      let e15 = y(nr(), t17.address);
      if (e15) try {
        let t18 = await e15.getEthereumProvider(), i20 = await t18.request({ method: "personal_sign", params: [s20, e15.address] });
        return a3(Ve2, "signMessage", "onSuccess", { signature: i20 }), void a23({ signature: i20 });
      } catch (e16) {
        return a3(Ve2, "signMessage", "onError", i2.UNABLE_TO_SIGN), void n18(e16 ?? new m2("Unable to sign message"));
      }
    }
    if (!o22) throw new s3("No embedded or connected wallet found for address.");
    if (!Re || !w9) return a3(Ve2, "signMessage", "onError", i2.MUST_BE_AUTHENTICATED), void n18(Error("User must be authenticated before signing with a Privy wallet"));
    let d19 = o22.address, c16 = o22.walletIndex ?? 0, { entropyId: C8, entropyIdVerifier: L6 } = f2(w9, o22), h10 = s2(o22);
    if ("string" != typeof s20 || s20.length < 1) return a3(Ve2, "signMessage", "onError", i2.INVALID_MESSAGE), void n18(Error("Message must be a non-empty string"));
    let u18 = async () => {
      let t18;
      if (!Re) throw Error("User must be authenticated before signing with a Privy wallet");
      let a24 = await bi();
      if (!Ce || !a24 || !await Et.recoverEmbeddedWallet({ address: d19 })) throw Error("Unable to connect to wallet");
      if (i19.createAnalyticsEvent({ eventName: "embedded_wallet_sign_message_started", payload: { walletAddress: d19, requesterAppId: l14 } }), h10) {
        let i20 = Se(e14.message, { strict: true }), n19 = await F(r17, (async ({ message: e15 }) => await Ce.signWithUserSigner({ accessToken: a24, requesterAppId: l14, message: e15 })), { chain_type: "ethereum", method: "personal_sign", params: i20 ? { message: s20.slice(2), encoding: "hex" } : { message: s20, encoding: "utf-8" }, wallet_id: o22.id });
        if (!n19.data || !("signature" in n19.data)) throw new m2("Unable to sign message");
        t18 = n19.data.signature;
      } else {
        let { response: e15 } = await Ce.rpc({ accessToken: a24, entropyId: C8, entropyIdVerifier: L6, chainType: "ethereum", hdWalletIndex: c16, requesterAppId: l14, request: { method: "personal_sign", params: [s20, d19] } });
        t18 = e15.data;
      }
      return i19.createAnalyticsEvent({ eventName: "embedded_wallet_sign_message_completed", payload: { walletAddress: d19, requesterAppId: l14 } }), t18;
    };
    if (Oe2({ showWalletUIs: t17?.uiOptions?.showWalletUIs })) try {
      let e15 = await u18();
      a3(Ve2, "signMessage", "onSuccess", { signature: e15 }), a23({ signature: e15 });
    } catch (e15) {
      a3(Ve2, "signMessage", "onError", i2.UNABLE_TO_SIGN), n18(e15 ?? new m2("Unable to sign message"));
    }
    else Ze2({ signMessage: { method: "personal_sign", data: s20, confirmAndSign: u18, onSuccess: (e15) => {
      a3(Ve2, "signMessage", "onSuccess", { signature: e15 }), a23({ signature: e15 });
    }, onFailure: (e15) => {
      a3(Ve2, "signMessage", "onError", i2.UNABLE_TO_SIGN), n18(e15);
    }, uiOptions: t17?.uiOptions || {} }, connectWallet: { recoveryMethod: o22.recoveryMethod, connectingWalletAddress: d19, entropyId: C8, entropyIdVerifier: L6, onCompleteNavigateTo: "SignRequestScreen", isUnifiedWallet: h10, onFailure: (e15) => {
      a3(Ve2, "signMessage", "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR), n18(e15);
    } } }), xe("EmbeddedWalletConnectingScreen");
  })), signTypedData: (e14, t17) => new Promise((async (a23, n18) => {
    let { requesterAppId: l14 } = t17?.uiOptions || {}, s20 = t17?.address ? _(w9, t17.address) : d(w9);
    if (!s20 && t17?.address) {
      let i20 = y(nr(), t17.address);
      if (i20) try {
        let t18 = await i20.getEthereumProvider(), r18 = w(e14), n19 = await t18.request({ method: "eth_signTypedData_v4", params: [i20.address, JSON.stringify(r18, ((e15, t19) => "bigint" == typeof t19 ? t19.toString() : t19))] });
        return a3(Ve2, "signTypedData", "onSuccess", { signature: n19 }), void a23({ signature: n19 });
      } catch (e15) {
        return a3(Ve2, "signTypedData", "onError", i2.UNABLE_TO_SIGN), void n18(e15 ?? new m2("Unable to sign typed data " + e15));
      }
    }
    if (!s20) throw new s3("No embedded or connected wallet found for address.");
    if (!Re || !w9) return a3(Ve2, "signTypedData", "onError", i2.MUST_BE_AUTHENTICATED), void n18(Error("User must be authenticated before signing with a Privy wallet"));
    let o22 = s20.address, d19 = s20.walletIndex ?? 0, { entropyId: c16, entropyIdVerifier: C8 } = f2(w9, s20), L6 = s2(s20), h10 = w(e14), u18 = async () => {
      let e15;
      if (!Re) throw Error("User must be authenticated before signing with a Privy wallet");
      let a24 = await bi();
      if (!Ce || !a24 || !await Et.recoverEmbeddedWallet({ address: o22 })) throw Error("Unable to connect to wallet");
      if (i19.createAnalyticsEvent({ eventName: "embedded_wallet_sign_typed_data_started", payload: { walletAddress: o22, requesterAppId: l14 } }), L6) {
        let { domain: i20, types: n19, primaryType: o23, message: d20 } = h10, c17 = await F(r17, (async ({ message: e16 }) => await Ce.signWithUserSigner({ accessToken: a24, requesterAppId: l14, message: e16 })), { chain_type: "ethereum", method: "eth_signTypedData_v4", params: { typed_data: { domain: i20, types: n19, primary_type: o23, message: d20 } }, wallet_id: s20.id, ...t17?.signatureOptions ? { signature_options: t17.signatureOptions } : {}, ...t17?.caip2 ? { caip2: t17.caip2 } : {} });
        if (!c17.data || !("signature" in c17.data)) throw new m2("Unable to sign message");
        e15 = c17.data.signature;
      } else {
        let { response: t18 } = await Ce.rpc({ accessToken: a24, entropyId: c16, entropyIdVerifier: C8, chainType: "ethereum", hdWalletIndex: d19, requesterAppId: l14, request: { method: "eth_signTypedData_v4", params: [o22, h10] } });
        e15 = t18.data;
      }
      return i19.createAnalyticsEvent({ eventName: "embedded_wallet_sign_typed_data_completed", payload: { walletAddress: o22, requesterAppId: l14 } }), e15;
    };
    if (Oe2({ showWalletUIs: t17?.uiOptions?.showWalletUIs })) try {
      let e15 = await u18();
      a3(Ve2, "signTypedData", "onSuccess", { signature: e15 }), a23({ signature: e15 });
    } catch (e15) {
      a3(Ve2, "signTypedData", "onError", i2.UNABLE_TO_SIGN), n18(e15 ?? new m2("Unable to sign message"));
    }
    else Ze2({ signMessage: { method: "eth_signTypedData_v4", data: h10, confirmAndSign: u18, onSuccess: (e15) => {
      a3(Ve2, "signTypedData", "onSuccess", { signature: e15 }), a23({ signature: e15 });
    }, onFailure: (e15) => {
      a3(Ve2, "signTypedData", "onError", i2.UNABLE_TO_SIGN), n18(e15);
    }, uiOptions: t17?.uiOptions || {} }, connectWallet: { recoveryMethod: s20.recoveryMethod, connectingWalletAddress: s20.address, entropyId: c16, isUnifiedWallet: L6, entropyIdVerifier: C8, onCompleteNavigateTo: "SignRequestScreen", onFailure: (e15) => {
      a3(Ve2, "signMessage", "onError", i2.UNKNOWN_CONNECT_WALLET_ERROR), n18(e15);
    } } }), xe("EmbeddedWalletConnectingScreen");
  })), sendTransaction: async (e14, t17) => await Ct({ transaction: e14, sponsor: t17?.sponsor, uiOptions: t17?.uiOptions, fundWalletConfig: t17?.fundWalletConfig, address: t17?.address, signOnly: false }), signTransaction: async (e14, t17) => ({ signature: (await Ct({ transaction: e14, uiOptions: t17?.uiOptions, address: t17?.address, signOnly: true })).hash }), promptMfa: ut, async init(e14) {
    switch (e14) {
      case "sms":
        return void await i19.initMfaSmsVerification();
      case "passkey":
        return await i19.initMfaPasskeyVerification();
      case "totp":
        return;
      default:
        throw Error(`Unsupported MFA method: ${e14}`);
    }
  }, async submit(e14, t17) {
    switch (e14) {
      case "totp":
      case "sms":
        if ("string" != typeof t17) throw new s3("Invalid MFA code");
        He3.current?.resolve({ mfaMethod: e14, mfaCode: t17, relyingParty: window.origin }), await new Promise(((e15, t18) => {
          be.current = { resolve: e15, reject: t18 };
        }));
        break;
      case "passkey":
        if ("string" == typeof t17) throw new s3("Invalid authenticator response");
        let a23 = await import("./chunk-SCBI5MOT.js"), i20 = rr(await a23.startAuthentication({ optionsJSON: t17 }));
        He3.current?.resolve({ mfaMethod: e14, mfaCode: i20, relyingParty: window.origin }), await new Promise(((e15, t18) => {
          be.current = { resolve: e15, reject: t18 };
        }));
        break;
      default:
        throw He3.current?.reject(new s3("Unsupported MFA method")), new s3(`Unsupported MFA method: ${e14}`);
    }
  }, cancel() {
    He3.current?.reject(new s3("MFA canceled"));
  }, async clear() {
    if (!w9 || !Ce) throw Error("Must be authenticated to clear MFA");
    await Ce.clearMfa({ userId: w9.id });
  }, async initEnrollmentWithSms(e14) {
    let t17 = await bi();
    if (!t17 || !Ce) throw Error("Must have valid access token to enroll in MFA");
    await Ce.initEnrollMfa({ method: "sms", accessToken: t17, phoneNumber: e14.phoneNumber });
  }, enrollInMfa: (e14) => new Promise(((t17, a23) => {
    if (!e14) return Et.closePrivyModal(), void t17();
    s19.mfa.noPromptOnMfaRequired && console.warn("[Privy Warning] Triggering the 'showMfaEnrollmentModal' function when 'noPromptOnMfaRequired' is set to true is unexpected. If this is intentional, ensure that you are building custom UIs for MFA verification."), Ze2({ mfaEnrollmentFlow: { mfaMethods: s19.mfa.methods, shouldUnlinkOnUnenrollMfa: s19.passkeys.shouldUnlinkOnUnenrollMfa, onSuccess: t17, onFailure: a23 } }), xe("MfaEnrollmentFlowScreen");
  })), async initEnrollmentWithTotp() {
    let e14 = await bi();
    if (!e14 || !Ce) throw Error("Must have valid access token to enroll in MFA");
    let t17 = await Ce.initEnrollMfa({ method: "totp", accessToken: e14 });
    return { secret: t17.secret, authUrl: t17.authUrl };
  }, async submitEnrollmentWithSms(e14) {
    let t17 = await bi();
    if (!t17 || !Ce) throw Error("Must have valid access token to enroll in MFA");
    await Ce.submitEnrollMfa({ method: "sms", accessToken: t17, phoneNumber: e14.phoneNumber, code: e14.mfaCode }), s6(await i19.getAuthenticatedUser());
  }, async submitEnrollmentWithTotp(e14) {
    let t17 = await bi();
    if (!t17 || !Ce) throw Error("Must have valid access token to enroll in MFA");
    await Ce.submitEnrollMfa({ method: "totp", accessToken: t17, code: e14.mfaCode }), s6(await i19.getAuthenticatedUser());
  }, async initEnrollmentWithPasskey() {
  }, async submitEnrollmentWithPasskey({ credentialIds: e14 }, t17 = {}) {
    let a23 = await bi();
    if (!a23 || !Ce) throw Error("Must have valid access token to enroll in MFA");
    await Ce.submitEnrollMfa({ method: "passkey", accessToken: a23, credentialIds: e14, removeForLogin: t17.removeForLogin }), s6(await i19.getAuthenticatedUser());
  }, async unenroll(e14, t17 = {}) {
    let a23 = await bi();
    if (!a23 || !Ce) throw Error("Must have valid access token to remove MFA");
    "passkey" === e14 ? await Ce.submitEnrollMfa({ method: "passkey", accessToken: a23, credentialIds: [], removeForLogin: t17.removeForLogin }) : await Ce.unenrollMfa({ method: e14, accessToken: a23 });
    let r18 = await i19.getAuthenticatedUser();
    if (s6(r18), r18 && 0 === r18.mfaMethods.length) try {
      await Ce.clearMfa({ userId: r18.id });
    } catch (e15) {
    }
  }, isModalOpen: d18 || !!L5, mfaMethods: s19.mfa.methods };
  Ar = At.signMessage, Zr = At.signTypedData, kr = async (e14, t17) => await Ct({ transaction: e14, ...t17, signOnly: false }), Er = async (e14, t17) => ({ signature: (await Ct({ transaction: e14, ...t17, signOnly: true })).hash });
  let Zt2 = async (e14) => {
    let t17, a23, r18;
    E9(true), ie3({ status: "loading" }), i19.startAuthFlow(new oi({ ...e14, customOAuthRedirectUrl: s19.customOAuthRedirectUrl }));
    let n18 = D2.get(A), l14 = e14.stateCode;
    if (n18 !== l14) throw i19.createAnalyticsEvent({ eventName: "possible_phishing_attempt", payload: { provider: e14.provider, storedStateCode: n18 ?? "", returnedStateCode: l14 ?? "" } }), E9(false), new s3("Unexpected auth flow. This may be a phishing attempt.", void 0, i2.OAUTH_UNEXPECTED);
    if (null !== await i19.getAccessToken()) try {
      ({ user: t17, oAuthTokens: r18 } = await i19.link()), We2.current = e14.provider;
      let a24 = pt(t17);
      t17 && a24 && a3(Ve2, "linkAccount", "onSuccess", { user: t17, linkMethod: We2.current, linkedAccount: a24 });
    } catch (t18) {
      throw E9(false), a3(Ve2, "linkAccount", "onError", t18.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: e14.provider }), t18;
    }
    else try {
      ({ user: t17, isNewUser: a23, oAuthTokens: r18 } = await i19.authenticate()), We2.current = e14.provider;
      let n19 = pt(t17);
      t17 && n19 && void 0 !== a23 && a3(Ve2, "login", "onComplete", { user: t17, isNewUser: a23, wasAlreadyAuthenticated: false, loginMethod: We2.current, loginAccount: n19 });
    } catch (e15) {
      throw E9(false), ie3({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    return s6(t17), y9(a23 || false), Pe(true), E9(false), ie3({ status: "done" }), r18 && t17 && a3(Ve2, "oAuthAuthorization", "onOAuthTokenGrant", { oAuthTokens: r18, user: t17 }), t17 ?? void 0;
  }, Et = { privy: r17, setAuthenticated: Pe, setUser: s6, setIsNewUser: y9, isNewUserThisSession: g4, pendingTransaction: null, walletConnectionStatus: I7, setWalletConnectionStatus: U3, connectors: i19.connectors?.walletConnectors ?? [], rpcConfig: s19.rpcConfig, chains: s19.chains, appId: a22.appId, showFiatPrices: "native-token" !== s19.embeddedWallets.priceDisplay.primary, clientAnalyticsId: i19.clientAnalyticsId, hideWalletUIs: Ue2, isHeadlessSigning: (0, import_react36.useCallback)(Oe2, [s19.embeddedWallets.showWalletUIs]), emailOtpState: N4, setEmailOtpState: D7, smsOtpState: B5, setSmsOtpState: G4, oAuthState: ae, setOAuthState: ie3, telegramAuthState: ne3, setTelegramAuthState: oe3, siweState: ee2, setSiweState: te3, isHeadlessOAuthLoading: Z, baseAccountSdk: f15, setBaseAccountSdk: m12, nativeTokenSymbolForChainId: (e14) => s19.chains.find(((t17) => t17.id === Number(e14)))?.nativeCurrency.symbol, initializeWalletProxy: async (e14) => {
    if (Ce) return Ce;
    let t17 = new Promise(((e15) => {
      Te3.current = e15;
    })), a23 = new Promise(((t18) => setTimeout((() => t18(null)), e14))), i20 = await Promise.race([t17, a23]);
    return Te3.current = null, i20;
  }, getAuthFlow: () => i19.authFlow, getAuthMeta: () => i19.authFlow?.meta, client: i19, closePrivyModal: async (e14 = { shouldCallAuthOnSuccess: true, isSuccess: false }) => {
    let t17, r18 = h9 && Re && w9;
    if (r18 && We2.current && (t17 = pt(w9)), "login" === Ie2.current) e14.shouldCallAuthOnSuccess && r18 && We2.current ? a3(Ve2, "login", "onComplete", { user: w9, isNewUser: g4, wasAlreadyAuthenticated: false, loginMethod: We2.current, loginAccount: t17 ?? null }) : a3(Ve2, "login", "onError", i2.USER_EXITED_AUTH_FLOW);
    else if ("link" === Ie2.current && t17) e14.isSuccess && r18 && We2.current ? a3(Ve2, "linkAccount", "onSuccess", { user: w9, linkMethod: We2.current, linkedAccount: t17 }) : We2.current && a3(Ve2, "linkAccount", "onError", i2.USER_EXITED_LINK_FLOW, { linkMethod: We2.current });
    else if ("update" === Ie2.current && t17) e14.isSuccess && r18 && We2.current ? a3(Ve2, "update", "onSuccess", { user: w9, updateMethod: We2.current, updatedAccount: t17 }) : We2.current && a3(Ve2, "update", "onError", i2.USER_EXITED_UPDATE_FLOW, { linkMethod: We2.current });
    else if ("connect-or-create" === Ie2.current) {
      let e15 = nr();
      e15[0] ? a3(Ve2, "connectOrCreateWallet", "onSuccess", { wallet: e15[0] }) : a3(Ve2, "connectOrCreateWallet", "onError", i2.USER_EXITED_AUTH_FLOW);
    }
    let n18 = M7 && Yi.has(M7), l14 = "ErrorScreen" === M7 && ve.errorModalData && Yi.has(ve.errorModalData.previousScreen);
    if ((n18 || l14) && ve.funding) {
      let e15, t18 = Yi.get(M7) ?? null;
      if (l14 && ve.funding?.onError) {
        let e16 = ve.errorModalData?.error, t19 = e16?.privyErrorCode || i2.UNKNOWN_FUNDING_ERROR, a23 = new s3(e16?.message || "Funding failed", e16, t19);
        ve.funding?.onError?.(a23);
      }
      if ("solana" === ve.funding.chainType) {
        let a23 = s19.solanaRpcs[ve.funding.chain];
        if (!a23) return console.warn("Unable to load solana rpc, skipping balance"), a3(Ve2, "fundSolanaWallet", "onUserExited", { address: ve.funding.address, fundingMethod: t18, chain: ve.funding.chain, balance: e15 }), c15(false), void Gi(ve.funding, t18);
        if (n3(a2)) try {
          e15 = await Qi({ rpc: a23.rpc, address: ve.funding.address });
        } catch {
          console.error("Unable to pull wallet balance");
        }
        else console.warn("Unable to load solana plugin, skipping balance");
        a3(Ve2, "fundSolanaWallet", "onUserExited", { address: ve.funding.address, fundingMethod: t18, chain: ve.funding.chain, balance: e15 });
      } else {
        let i20 = l3(ve.funding.chain.id, s19.chains, s19.rpcConfig, { appId: a22.appId });
        try {
          e15 = await i20.getBalance({ address: ve.funding.address });
        } catch {
          console.error("Unable to pull wallet balance");
        }
        a3(Ve2, "fundWallet", "onUserExited", { address: ve.funding.address, chain: ve.funding.chain, fundingMethod: t18, balance: e15 }), Gi(ve.funding, t18);
      }
    }
    Ze2(((e15) => ({ ...e15, externalConnectWallet: {} }))), Ie2.current = null, We2.current = null, y9(false), c15(false), U3({ status: "disconnected", connectedWallet: null, connector: null, connectError: null, connectRetry: () => {
    } }), setTimeout((() => {
      i19.authFlow = void 0;
    }), 200);
  }, openPrivyModal: xe, connectWallet: qe2, initLoginWithWallet: async (e14, t17, a23, i20) => {
    E2(e14) ? (We2.current = "siwe", Ge(e14, t17, a23)) : (We2.current = "siws", Ye2(e14, t17, a23, i20));
  }, loginWithWallet: async () => {
    let e14, t17, a23;
    if (!h9) throw new d3();
    if (i19.authFlow instanceof hi ? e14 = "siwe" : i19.authFlow instanceof Ba && (e14 = "siws"), !e14) throw new s3("Must initialize SIWE/SIWS flow first.");
    if (null !== await i19.getAccessToken()) try {
      ({ user: t17 } = await i19.link()), We2.current = e14;
    } catch (t18) {
      throw a3(Ve2, "linkAccount", "onError", t18.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: e14 }), t18;
    }
    else try {
      ({ user: t17, isNewUser: a23 } = await i19.authenticate()), We2.current = e14;
    } catch (e15) {
      throw a3(Ve2, "login", "onError", e15.privyErrorCode || i2.GENERIC_CONNECT_WALLET_ERROR), e15;
    }
    s6(t17 || w9 || null), y9(a23 || false), Pe(true);
  }, delegateWallet: async ({ address: e14, chainType: t17, showDelegationUIs: a23 }) => new Promise((async (i20, r18) => {
    let n18 = await bi();
    if (!Re || !w9 || !n18) throw new s3("User must be authenticated and have an embedded wallet to delegate actions.");
    if ("solana" !== t17 && "ethereum" !== t17) throw new s3("Only Solana and Ethereum embedded wallets are supported for delegation and revocation.");
    let l14 = Et.walletProxy ?? await Et.initializeWalletProxy(15e3);
    if (!l14) throw new s3("Wallet proxy not initialized.");
    if ((({ address: e15, user: t18 }) => !!Oi(t18).find(((t19) => t19.address === e15)))({ address: e14, user: w9 })) return i20();
    let s20 = _(w9, e14);
    if (!s20) throw new s3("Address to delegate is not associated with current user.");
    if (s2(s20)) throw new s3("useDelegatedActions is only supported for on-device execution and this app uses TEE execution. Use the useSessionSigners hook to provision server side access on behalf of your users. Learn more at https://docs.privy.io/recipes/tee-wallet-migration-guide");
    let o22 = Ii2({ address: e14, user: w9 }), d19 = Ui({ address: e14, user: w9 }), c16 = async () => {
      await l14.createDelegatedAction({ accessToken: n18, rootWallet: d19, delegatedWallets: [o22] }), await Et.refreshSessionAndUser();
    };
    if (await Et.recoverEmbeddedWallet({ address: e14 }), a23) Ze2({ delegatedActions: { consent: { address: e14, onDelegate: c16, onSuccess: async () => {
      i20();
    }, onError: async (e15) => {
      r18(e15);
    } } } }), xe("DelegatedActionsConsentScreen");
    else try {
      await c16(), i20();
    } catch (e15) {
      r18(e15);
    }
  })), revokeDelegatedWallets: async ({ showDelegationUIs: e14 }) => new Promise((async (t17, a23) => {
    if (!Re || !w9) throw new s3("User must be authenticated and have an embedded wallet to revoke a delegated wallet.");
    let r18 = Oi(w9);
    if (0 === r18.length) throw new s3("User has no delegated wallets to revoke.");
    if (r18.some(s2)) throw new s3("useDelegatedActions is only supported for on-device execution and this app uses TEE execution. Use the useSessionSigners hook to provision server side access on behalf of your users. Learn more at https://docs.privy.io/recipes/tee-wallet-migration-guide");
    let n18 = async () => {
      await i19.revokeDelegatedWallet(), await Et.refreshSessionAndUser();
    };
    if (e14) Ze2({ delegatedActions: { revoke: { onRevoke: n18, onSuccess: async () => {
      t17();
    }, onError: async (e15) => {
      a23(e15);
    } } } }), xe("DelegatedActionsRevokeScreen");
    else try {
      await n18(), t17();
    } catch (e15) {
      a23(e15);
    }
  })), initLoginWithFarcaster: async (e14, t17) => {
    let a23 = new Na(e14, t17);
    i19.startAuthFlow(a23);
    try {
      We2.current = "farcaster", await a23.initializeFarcasterConnect();
    } catch (e15) {
      throw "login" === Ie2.current ? a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR) : "link" === Ie2.current && a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR, { linkMethod: "farcaster" }), e15;
    }
  }, loginWithFarcaster: async () => {
    let e14, t17;
    if (!h9) throw new d3();
    if (!(i19.authFlow instanceof Na)) throw new s3("Must initialize Farcaster flow first.");
    if (null !== await i19.getAccessToken()) try {
      ({ user: e14 } = await i19.link()), We2.current = "farcaster";
    } catch (e15) {
      throw a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "farcaster" }), e15;
    }
    else try {
      ({ user: e14, isNewUser: t17 } = await i19.authenticate()), We2.current = "farcaster";
    } catch (e15) {
      throw a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    s6(e14 || null), y9(t17 || false), Pe(true);
  }, async crossAppAuthFlow({ appId: e14, popup: t17, action: a23, disableSignup: r18 }) {
    let n18 = `privy:${e14}`;
    We2.current = n18;
    let { url: l14, stateCode: s20, codeVerifier: o22 } = await q2({ api: i19.api, appId: e14 });
    if (!l14) throw i19.createAnalyticsEvent({ eventName: "cross_app_auth_error", payload: { error: "Unable to open cross-app auth popup", appId: e14 } }), new s3("No authorization URL returned for cross-app auth.");
    try {
      let d19 = await (async function({ url: e15, popup: t18 }) {
        return t18.location = e15, new Promise(((e16, a24) => {
          let i20, r19 = setTimeout((() => {
            a24(new s3("Authorization request timed out after 2 minutes.")), n19();
          }), 12e4);
          function n19() {
            t18?.close(), window.removeEventListener("message", s21);
          }
          let l15 = setInterval((() => {
            t18?.closed && !i20 && (n19(), clearInterval(l15), clearTimeout(r19), a24(new s3("User rejected request")));
          }), 300);
          function s21(t19) {
            t19.data && ("PRIVY_OAUTH_RESPONSE" === t19.data.type && t19.data.stateCode && t19.data.authorizationCode && (clearTimeout(r19), e16(t19.data), n19()), "PRIVY_OAUTH_ERROR" === t19.data.type && (clearTimeout(r19), a24(new s3(t19.data.error)), n19()), t19.data.type === Ni && ((i20 = new BroadcastChannel(xi2)).onmessage = s21));
          }
          window.addEventListener("message", s21);
        }));
      })({ url: l14, popup: t17, provider: n18 }), c16 = d19.stateCode, C8 = d19.authorizationCode;
      if (c16 !== s20) throw i19.createAnalyticsEvent({ eventName: "possible_phishing_attempt", payload: { provider: n18, storedStateCode: s20 ?? "", returnedStateCode: c16 ?? "" } }), new s3("Unexpected auth flow. This may be a phishing attempt.", void 0, i2.OAUTH_UNEXPECTED);
      let L6 = await j({ appId: e14, codeVerifier: o22, stateCode: c16, authorizationCode: C8, action: a23, client: i19, disableSignup: r18 });
      L6 && i19.storeProviderAccessToken(e14, L6);
      let h10 = await Et.refreshSessionAndUser();
      if (!h10) throw new s3("Unable to update user");
      return i19.createAnalyticsEvent({ eventName: "cross_app_auth_completed", payload: { providerAppId: e14 } }), h10;
    } catch (e15) {
      throw i19.createAnalyticsEvent({ eventName: "cross_app_auth_error", payload: { error: e15.toString(), provider: n18 } }), e15;
    }
  }, async initLoginWithOAuth(e14, t17, a23) {
    if (We2.current = e14, !P()) return void xe("InAppBrowserLoginNotPossible");
    if ("google" === e14 && !s19.allowOAuthInEmbeddedBrowsers && Ji(window.navigator.userAgent)) return void xe("InAppBrowserLoginNotPossible");
    "twitter" === e14 && window.opener && window.opener.postMessage({ type: Ni }, "*"), D2.del(D), D2.del(B);
    let r18 = new oi({ provider: e14, disableSignup: !!a23, withPrivyUi: true, customOAuthRedirectUrl: s19.customOAuthRedirectUrl });
    t17 && r18.addCaptchaToken(t17), i19.startAuthFlow(r18);
    let n18 = await i19.authFlow.getAuthorizationUrl();
    if (n18 && n18.url) if ("twitter" === e14 && import_react_device_detect.isAndroid && (n18.url = n18.url.replace("x.com", "twitter.com")), "chrome-extension:" === window.location.protocol && ai()) try {
      let { privyOAuthCode: e15, privyOAuthState: t18 } = await ri(n18.url);
      xe("OAuthStatusScreen"), r18.meta.stateCode = t18, r18.meta.authorizationCode = e15;
    } catch (e15) {
      throw console.error("OAuth in chrome extension flow failed:", e15), e15;
    }
    else window.location.assign(n18.url);
  }, async initLoginWithTelegram(e14, t17) {
    if (!h9) throw new d3();
    We2.current = "telegram";
    let a23 = new $a(e14, t17);
    i19.startAuthFlow(a23), oe3({ status: "loading" }), a23.meta.telegramWebAppData = void 0, a23.meta.telegramAuthResult = await new Promise(((e15, t18) => s19.loginConfig.telegramAuthConfiguration ? window.Telegram ? void window.Telegram.Login.auth({ bot_id: s19.loginConfig.telegramAuthConfiguration.botId, request_access: true }, ((a24) => a24 ? e15(a24) : ("link" === Ie2.current ? a3(Ve2, "linkAccount", "onError", i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "telegram" }) : "login" === Ie2.current ? a3(Ve2, "login", "onError", i2.INVALID_CREDENTIALS) : "update" === Ie2.current && a3(Ve2, "login", "onError", i2.FAILED_TO_UPDATE_ACCOUNT), t18(new s3("Telegram auth failed or was canceled by the client"))))) : t18(new s3("Telegram was not initialized")) : t18(new s3("Telegram Auth configuration is not loaded"))));
  }, async loginWithTelegram(e14) {
    let t17, a23;
    if (!(i19.authFlow instanceof $a)) throw new s3("Must initialize Telegram flow before calling loginWithTelegram");
    i19.authFlow.meta.captchaToken ||= e14?.captchaToken;
    let r18 = await bi(), n18 = e14?.intent || Ie2.current;
    if ("login" === n18) try {
      let e15 = await i19.authenticate();
      t17 = e15.user, a23 = e15.isNewUser, We2.current = "telegram";
    } catch (e15) {
      throw a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    else {
      if ("link" !== n18) throw new s3("Unknown auth intent");
      try {
        t17 = (await i19.link()).user, We2.current = "telegram";
      } catch (e15) {
        throw a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "telegram" }), e15;
      }
    }
    s6(t17), y9(a23 || false), Pe(true), oe3({ status: "done" });
    let l14 = t17?.linkedAccounts.find((({ type: e15 }) => "telegram" === e15)) || null;
    return { user: t17, isNewUser: a23 || false, wasAlreadyAuthenticated: !!r18, loginAccount: l14 };
  }, async loginWithOAuth(e14) {
    let t17, a23, r18;
    if (!(i19.authFlow instanceof oi)) throw new s3("Must initialize OAuth flow before calling loginWithOAuth");
    let n18 = D2.get(A), l14 = i19.authFlow.meta.stateCode;
    if (n18 !== l14) throw i19.createAnalyticsEvent({ eventName: "possible_phishing_attempt", payload: { provider: e14, storedStateCode: n18 ?? "", returnedStateCode: l14 ?? "" } }), new s3("Unexpected auth flow. This may be a phishing attempt.", void 0, i2.OAUTH_UNEXPECTED);
    if (null !== await i19.getAccessToken()) try {
      let n19 = await i19.link();
      t17 = n19.user, a23 = false, r18 = n19.oAuthTokens, We2.current = e14;
    } catch (t18) {
      throw a3(Ve2, "linkAccount", "onError", t18.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: e14 }), t18;
    }
    else try {
      let n19 = await i19.authenticate();
      t17 = n19.user, a23 = n19.isNewUser, r18 = n19.oAuthTokens, We2.current = e14;
    } catch (t18) {
      throw "login" === Ie2.current ? a3(Ve2, "login", "onError", t18.privyErrorCode || i2.UNKNOWN_AUTH_ERROR) : "link" === Ie2.current && a3(Ve2, "linkAccount", "onError", t18.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: e14 }), t18;
    }
    return s6(t17), y9(a23 || false), Pe(true), r18 && t17 && a3(Ve2, "oAuthAuthorization", "onOAuthTokenGrant", { oAuthTokens: r18, user: t17 }), r18;
  }, passkeyAuthState: O8, setPasskeyAuthState: x8, async initSignupWithPasskey({ captchaToken: e14, withPrivyUi: t17 }) {
    let a23 = new Da({ captchaToken: e14, setPasskeyAuthState: x8, hints: s19.passkeys.registration?.hints });
    i19.startAuthFlow(a23), Ie2.current = "login";
    try {
      We2.current = "passkey", x8({ status: "generating-challenge" }), await a23.initRegisterFlow(t17), x8({ status: "awaiting-passkey" });
    } catch (e15) {
      throw x8({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
  }, async signupWithPasskey() {
    let e14, t17;
    if (!h9) throw new d3();
    if (!(i19.authFlow instanceof Da)) throw new s3("Must initialize Passkey flow first.");
    if ("passkey" !== We2.current) {
      let e15 = new s3("Must init login with Passkey flow first.");
      throw x8({ status: "error", error: e15 }), e15;
    }
    let a23 = await bi();
    try {
      We2.current = "passkey", x8({ status: "awaiting-passkey" }), { user: e14, isNewUser: t17 } = await i19.authenticate();
    } catch (e15) {
      throw x8({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    s6(e14), y9(t17 || false), Pe(true), x8({ status: "done" });
    let r18 = e14?.linkedAccounts.find((({ type: e15 }) => "passkey" === e15)) || null;
    return { user: e14, isNewUser: t17 || false, wasAlreadyAuthenticated: !!a23, loginAccount: r18 };
  }, async initLoginWithPasskey({ captchaToken: e14, withPrivyUi: t17 }) {
    let a23 = new Da({ captchaToken: e14, setPasskeyAuthState: x8, hints: void 0 });
    i19.startAuthFlow(a23), Ie2.current = "login";
    try {
      We2.current = "passkey", x8({ status: "generating-challenge" }), await a23.initAuthenticationFlow(t17), x8({ status: "awaiting-passkey" });
    } catch (e15) {
      throw x8({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
  }, async loginWithPasskey(e14) {
    let t17, a23;
    if (!h9) throw new d3();
    if (!(i19.authFlow instanceof Da)) throw new s3("Must initialize Passkey flow first.");
    if (e14?.credentialIds && (i19.authFlow.meta.allowedCredentialsIds = e14.credentialIds), "passkey" !== We2.current) {
      let e15 = new s3("Must init login with Passkey flow first.");
      throw x8({ status: "error", error: e15 }), e15;
    }
    let r18 = await bi();
    try {
      We2.current = "passkey", x8({ status: "awaiting-passkey" }), { user: t17, isNewUser: a23 } = await i19.authenticate();
    } catch (e15) {
      throw x8({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    s6(t17), y9(a23 || false), Pe(true), x8({ status: "done" });
    let n18 = t17?.linkedAccounts.find((({ type: e15 }) => "passkey" === e15)) || null;
    return { user: t17, isNewUser: a23 || false, wasAlreadyAuthenticated: !!r18, loginAccount: n18 };
  }, async initLinkWithPasskey(e14) {
    let t17 = new Da({ captchaToken: e14, hints: s19.passkeys.registration?.hints });
    i19.startAuthFlow(t17), Ie2.current = "link", We2.current = "passkey", x8({ status: "generating-challenge" });
    try {
      await t17.initLinkFlow(), x8({ status: "awaiting-passkey" });
    } catch (e15) {
      throw a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR, { linkMethod: "passkey" }), x8({ status: "error", error: e15 }), e15;
    }
  }, async linkWithPasskey(e14) {
    let t17;
    if (!h9) throw new d3();
    if (!(i19.authFlow instanceof Da)) throw new s3("Must initialize Passkey flow first.");
    if ("passkey" !== We2.current) throw new s3("Must init login with Passkey flow first.");
    try {
      We2.current = "passkey", i19.authFlow.meta.name = e14?.name, { user: t17 } = await i19.link();
    } catch (e15) {
      throw a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "passkey" }), e15;
    }
    return s6(t17 || w9 || null), x8({ status: "done" }), t17;
  }, async initLoginWithHeadlessOAuth(e14, t17, a23) {
    if (!P()) throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");
    if ("google" === e14 && !s19.allowOAuthInEmbeddedBrowsers && Ji(window.navigator.userAgent)) throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");
    let r18 = new oi({ provider: e14, withPrivyUi: false, disableSignup: a23 ?? false, customOAuthRedirectUrl: s19.customOAuthRedirectUrl });
    t17 && r18.addCaptchaToken(t17), ie3({ status: "loading" });
    let n18 = await i19.startAuthFlow(r18).getAuthorizationUrl();
    if (n18?.url) if ("chrome-extension:" === window.location.protocol && ai()) try {
      let { privyOAuthCode: e15, privyOAuthState: t18 } = await ri(n18.url);
      r18.meta.stateCode = t18, r18.meta.authorizationCode = e15, await Zt2(r18.meta);
    } catch (e15) {
      throw ie3({ status: "error", error: e15 }), e15;
    }
    else window.location.assign(n18.url);
  }, loginWithHeadlessOAuth: Zt2, initLoginWithEmail: async ({ email: e14, captchaToken: t17, disableSignup: a23, withPrivyUi: r18 }) => {
    let n18 = new ei({ email: e14, captchaToken: t17, disableSignup: a23 });
    i19.startAuthFlow(n18);
    try {
      We2.current = "email", D7({ status: "sending-code" });
      let e15 = await n18.sendCodeEmail({ withPrivyUi: r18 });
      if (e15?.ssoRedirectUrl) return window.location.href = e15.ssoRedirectUrl, void await c(1e4);
      D7({ status: "awaiting-code-input" });
    } catch (e15) {
      throw D7({ status: "error", error: e15 }), "login" === Ie2.current ? a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR) : "link" === Ie2.current && a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "email" }), e15;
    }
  }, initUpdateEmail: async ({ oldAddress: e14, newAddress: t17, captchaToken: a23 }) => {
    let r18 = new ti(e14, t17, a23);
    i19.startAuthFlow(r18);
    try {
      await r18.sendCodeEmail({ withPrivyUi: true });
    } catch (e15) {
      throw a3(Ve2, "update", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR, { linkMethod: We2.current }), e15;
    }
  }, initUpdatePhone: async (e14, t17, a23) => {
    let r18 = new pi(e14, t17, a23);
    i19.startAuthFlow(r18);
    try {
      await r18.sendSmsCode({ withPrivyUi: true });
    } catch (e15) {
      a3(Ve2, "update", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR, { linkMethod: We2.current });
    }
  }, initLoginWithSms: async ({ phoneNumber: e14, captchaToken: t17, disableSignup: a23, withPrivyUi: r18 }) => {
    G4({ status: "sending-code" });
    let n18 = new di({ phoneNumber: e14, captchaToken: t17, disableSignup: a23 });
    i19.startAuthFlow(n18);
    try {
      We2.current = "sms", await n18.sendSmsCode({ withPrivyUi: r18 }), G4({ status: "awaiting-code-input" });
    } catch (e15) {
      throw G4({ status: "error", error: e15 }), "login" === Ie2.current ? a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR) : "link" === Ie2.current && a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "sms" }), e15;
    }
  }, resendEmailCode: async () => {
    await i19.authFlow?.sendCodeEmail({ withPrivyUi: true });
  }, resendSmsCode: async () => {
    await i19.authFlow?.sendSmsCode({ withPrivyUi: true });
  }, loginWithCode: async (e14) => {
    let t17, a23;
    function r18(e15) {
      i19.authFlow instanceof ei ? D7(e15) : i19.authFlow instanceof di && G4(e15);
    }
    if (r18({ status: "submitting-code" }), !h9) {
      let e15 = new d3();
      throw r18({ status: "error", error: e15 }), e15;
    }
    if (i19.authFlow instanceof ei) i19.authFlow.meta.emailCode = e14.trim();
    else {
      if (!(i19.authFlow instanceof di)) {
        let e15 = new s3("Must initialize a passwordless code flow first");
        throw r18({ status: "error", error: e15 }), e15;
      }
      i19.authFlow.meta.smsCode = e14.trim();
    }
    let n18 = await bi();
    if ("link" === Ie2.current) try {
      ({ user: t17 } = await i19.link());
    } catch (e15) {
      throw r18({ status: "error", error: e15 }), a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: We2.current }), e15;
    }
    else if ("update" === Ie2.current) try {
      ({ user: t17 } = await i19.link());
    } catch (e15) {
      throw r18({ status: "error", error: e15 }), a3(Ve2, "update", "onError", e15.privyErrorCode || i2.FAILED_TO_UPDATE_ACCOUNT, { linkMethod: We2.current }), e15;
    }
    else try {
      ({ user: t17, isNewUser: a23 } = await i19.authenticate());
    } catch (e15) {
      throw r18({ status: "error", error: e15 }), a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), e15;
    }
    let l14 = t17 || w9;
    s6(l14 || null), y9(a23 || false), Pe(true), r18({ status: "done" });
    let s20 = null;
    return i19.authFlow instanceof ei ? s20 = l14?.linkedAccounts.find((({ type: e15 }) => "email" === e15)) || null : i19.authFlow instanceof di && (s20 = l14?.linkedAccounts.find((({ type: e15 }) => "phone" === e15)) || null), { user: l14, isNewUser: a23 || false, wasAlreadyAuthenticated: !!n18, linkedAccount: s20 };
  }, generateSiweMessage: async ({ address: e14, chainId: t17, captchaToken: a23 }) => {
    Ie2.current = Re ? "link" : "login", We2.current = "siwe", te3({ status: "generating-message" });
    let r18 = await i19.generateSiweNonce({ address: e14, captchaToken: a23 });
    return te3({ status: "awaiting-signature" }), ci({ address: e14, chainId: t17.replace("eip155:", ""), nonce: r18 });
  }, generateSiweMessageForSmartWallet: async ({ address: e14, chainId: t17 }) => {
    let a23 = await i19.generateSiweNonce({ address: e14 });
    return ci({ address: e14, chainId: t17.replace("eip155:", ""), nonce: a23 });
  }, linkSmartWallet: async ({ message: e14, signature: t17, smartWalletType: a23, smartWalletVersion: r18 }) => {
    let n18;
    n18 = await i19.linkSmartWallet({ message: e14, signature: t17, smartWalletType: a23, smartWalletVersion: r18 }), s6((n18 = await Et.refreshSessionAndUser() ?? n18) || w9 || null);
  }, loginWithSiwe: async ({ message: e14, signature: t17, captchaToken: a23, disableSignup: r18, walletClientType: n18, connectorType: l14 }) => {
    let s20, o22 = null;
    try {
      if (w9) throw Error("User already authenticated");
      let d19 = new hi(i19, void 0, a23, r18, { message: e14, signature: t17, walletClientType: n18, connectorType: l14 });
      i19.startAuthFlow(d19), We2.current = "siwe", Ie2.current = "login", te3({ status: "submitting-signature" });
      let c16 = await i19.authenticate();
      if ({ user: o22, isNewUser: s20 } = c16, !o22) throw Error("Authentication failed - no user returned");
    } catch (e15) {
      throw a3(Ve2, "login", "onError", e15.privyErrorCode || i2.UNKNOWN_AUTH_ERROR), te3({ status: "error", error: e15 }), e15;
    }
    return s6(o22), y9(s20 || false), Pe(true), te3({ status: "done" }), Ie2.current = null, We2.current = null, { user: o22, isNewUser: s20 || false };
  }, linkWithSiwe: async ({ message: e14, signature: t17, chainId: a23, walletClientType: r18, connectorType: n18 }) => {
    let l14;
    Xe2("siwe");
    let s20 = null;
    try {
      te3({ status: "submitting-signature" }), l14 = await i19.linkWithSiwe({ message: e14, signature: t17, chainId: a23, walletClientType: r18, connectorType: n18 }), l14 = await Et.refreshSessionAndUser() ?? l14, te3({ status: "done" }), (s20 = pt(l14) || null) && a3(Ve2, "linkAccount", "onSuccess", { user: l14, linkMethod: "siwe", linkedAccount: s20 });
    } catch (e15) {
      throw a3(Ve2, "linkAccount", "onError", e15.privyErrorCode || i2.FAILED_TO_LINK_ACCOUNT, { linkMethod: "siwe" }), Ie2.current = null, We2.current = null, te3({ status: "error", error: e15 }), e15;
    }
    let o22 = l14 || w9;
    return s6(o22 || null), Ie2.current = null, We2.current = null, { user: o22, linkedAccount: s20 };
  }, refreshSessionAndUser: async () => {
    let e14 = await i19.getAuthenticatedUser();
    return Pe(!!e14), s6(e14), e14;
  }, walletProxy: Ce, createAnalyticsEvent: ({ eventName: e14, payload: t17, timestamp: a23 }) => i19.createAnalyticsEvent({ eventName: e14, payload: t17, timestamp: a23 }), acceptTerms: async () => {
    let e14 = await i19.acceptTerms();
    return s6(e14), e14;
  }, getUsdTokenPrice: (e14) => i19.getUsdTokenPrice(e14), getUsdPriceForSol: () => i19.getUsdPriceForSol(), getSplTokenMetadata: (e14) => i19.getSplTokenMetadata(e14), recoverEmbeddedWallet: async (e14) => new Promise((async (t17, a23) => {
    if (!w9) return void t17(true);
    let r18 = e14?.address ? _(w9, e14.address) : h(w9) || p(w9).at(0) || o(w9).at(0);
    if (!r18 || s2(r18)) return void t17(true);
    let n18 = await bi();
    if (!n18 || !Ce || !r18) return void a23(Error("Must have valid access token and Privy wallet to recover wallet"));
    let { entropyId: l14, entropyIdVerifier: s20 } = f2(w9, r18);
    try {
      await Ce.connect({ accessToken: n18, entropyId: l14, entropyIdVerifier: s20 }), t17(true);
    } catch (e15) {
      if (Mi(e15) && "privy" === r18.recoveryMethod) {
        let e16;
        i19.createAnalyticsEvent({ eventName: "embedded_wallet_pinless_recovery_started", payload: { walletAddress: r18.address } });
        try {
          e16 = await Ce.recover({ entropyId: l14, entropyIdVerifier: s20, accessToken: n18 });
        } catch (e17) {
          return void a23(e17);
        }
        e16.entropyId || a23(Error("Unable to recover wallet")), i19.createAnalyticsEvent({ eventName: "embedded_wallet_recovery_completed", payload: { walletAddress: r18.address } }), t17(true);
      } else Mi(e15) && "privy" !== r18.recoveryMethod && "privy-v2" !== r18.recoveryMethod ? (Ze2(((e16) => ({ ...e16, recoverWallet: { entropyId: l14, entropyIdVerifier: s20, onFailure: a23, onSuccess: () => {
        t17(true);
      }, onCompleteNavigateTo: e16.createWallet ? "EmbeddedWalletOnAccountCreateScreen" : void 0 }, recoveryOAuthStatus: { provider: r18.recoveryMethod, action: "recover", shouldCreateEth: false, shouldCreateSol: false, isInAccountCreateFlow: !!e16.createWallet } }))), xe(ji(r18.recoveryMethod))) : a23(e15);
    }
  })), setReadyToTrue: (e14) => {
    u17(true), Ee2?.(e14);
  }, updateWallets: () => ct(), fundWallet: async (e14, t17) => {
    let a23 = "FundingMethodSelectionScreen";
    return new Promise(((i20, r18) => {
      Ze2({ funding: { ...T2({ address: e14, appConfig: s19, fundWalletConfig: t17, methodScreen: a23, onComplete: i20, onError: r18 }) } }), xe(a23);
    }));
  }, openModal: xe, requestFarcasterSignerStatus: async (e14) => {
    let t17 = await bi(), a23 = w9?.linkedAccounts.find(((e15) => "wallet" === e15.type && "privy" === e15.walletClientType));
    if (!t17) throw Error("Must have valid access token to connect with Farcaster");
    if (!Ce || !a23) throw Error("Must have an embedded wallet to use Farcaster signers");
    if (!w9?.farcaster?.fid) throw Error("Must have Farcaster account to use Farcaster signers");
    let r18 = await i19.requestFarcasterSignerStatus(e14);
    return "approved" === r18.status && s6(await i19.getAuthenticatedUser() || w9 || null), r18;
  }, connectCoinbaseSmartWallet: async () => {
    s19.externalWallets.coinbaseWallet.config.preference = { ...s19.externalWallets.coinbaseWallet.config.preference, options: "smartWalletOnly" };
    let e14 = i19.connectors?.findWalletConnector("coinbase_wallet", "coinbase_smart_wallet") || i19.connectors?.findWalletConnector("coinbase_wallet", "coinbase_wallet");
    if (e14) return e14.updateConnectionPreference("smartWalletOnly"), qe2(e14);
    await je2("coinbase_wallet", "coinbase_smart_wallet");
  }, connectBaseAccount: async () => {
    let e14 = i19.connectors?.findWalletConnector("base_account", "base_account");
    if (e14) return qe2(e14);
    await je2("base_account", "base_account");
  }, initiateAccountTransfer: async ({ nonce: e14, account: t17, accountType: a23, externalWalletMetadata: r18, telegramAuthResult: n18, telegramWebAppData: l14, farcasterEmbeddedAddress: s20, oAuthUserInfo: o22 }) => {
    let d19 = await i19.sendAccountTransferRequest({ nonce: e14, account: t17, accountType: a23, externalWalletMetadata: r18, telegramAuthResult: n18, telegramWebAppData: l14, farcasterEmbeddedAddress: s20, oAuthUserInfo: o22 });
    return s6(d19), d19;
  }, inProgressAuthFlowRef: Ie2, inProgressLoginOrLinkMethodRef: We2 };
  _r = Et.recoverEmbeddedWallet, Et.recoverEmbeddedWallet;
  let _t = i19.authFlow instanceof $a, { siteKey: St2, enabledProvider: Ft } = s19.captcha, Rt = !s19.headless && Ft && !Re && (h9 || _t);
  return (0, import_jsx_runtime2.jsx)(u4.Provider, { value: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(v.Provider, { value: At, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t2.Provider, { value: Ve2, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Ka, { appId: s19.id, captchaSiteKey: St2, enabledCaptchaProvider: Ft, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(s.Provider, { value: Et, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(R2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(u2, { data: ve, setModalData: Ze2, setInitialScreen: v5, initialScreen: M7, authenticated: Re, open: d18, children: [a22.children, /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(pr, { customAuth: s19.customAuth }), Rt && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ti2, { delayedExecution: false }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(wi, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vr, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ir, { disabled: s19.embeddedWallets.disableAutomaticMigration }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(u16, { palette: s19.appearance.palette || {} }), !s19.render.standalone && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Ci, { open: d18 })] }) }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Wi, { appId: a22.appId, appClientId: a22.clientId, clientAnalyticsId: i19.clientAnalyticsId, origin: i19.apiUrl, mfaMethods: w9?.mfaMethods, mfaPromise: He3, mfaSubmitPromise: be, onLoad: he, onLoadFailed: () => null }), s19.loginConfig.telegramHasHmacCredentials && s19.loginConfig.telegramAuthConfiguration && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(O2, { $if: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(pi2, { scriptHost: a22.apiUrl || d2, botUsername: s19.loginConfig.telegramAuthConfiguration.botName }) })] }) }) }) }) });
};
var Fr = (e14, t17) => Ar(e14, t17);
var Tr = (e14, t17) => Zr(e14, t17);
var Hr = (e14, t17) => Er(e14, t17);
var br = (e14, t17) => kr(e14, t17);
var Vr = (e14) => _r(e14);
var Rr = ({ config: t17, ...a22 }) => {
  c2(), (function() {
    if ("undefined" == typeof window) return;
    let e14 = ["localhost", "127.0.0.1"].includes(window.location.hostname), t18 = "https:" === window.location.protocol || "chrome-extension:" === window.location.protocol;
    if (!e14 && !t18) throw new s3("Embedded wallet is only available over HTTPS");
  })(), (function(e14) {
    if ("string" != typeof e14 || 25 !== e14.length) throw new s3("Cannot initialize the Privy provider with an invalid Privy app ID");
  })(a22.appId), _i(a22);
  let i19 = (0, import_react36.useMemo)((() => new Ha({ appId: a22.appId, clientId: a22.clientId, storage: D2, baseUrl: a22.apiUrl, sdkVersion: "react-auth:3.39.0" })), []), r17 = Ai(), n18 = Object.assign({}, t17);
  return (0, import_jsx_runtime2.jsx)(ie, { client: i19, legacyClient: r17, appClientId: a22.clientId, clientConfig: n18, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(o3, { configPlugins: t17?.plugins, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sr, { ...a22, client: r17, privy: i19 }) }) });
};
function Dr() {
  let { promptMfa: e14, init: t17, submit: a22, cancel: r17, clear: n18, mfaMethods: l14 } = (0, import_react36.useContext)(v);
  return { promptMfa: e14, init: t17, submit: a22, cancel: r17, clear: n18, mfaMethods: l14 };
}
function Br() {
  let { initEnrollmentWithSms: e14, initEnrollmentWithTotp: t17, initEnrollmentWithPasskey: a22, submitEnrollmentWithSms: r17, submitEnrollmentWithTotp: n18, submitEnrollmentWithPasskey: l14, unenroll: s19, enrollInMfa: o22 } = (0, import_react36.useContext)(v);
  return { initEnrollmentWithSms: e14, initEnrollmentWithTotp: t17, initEnrollmentWithPasskey: a22, submitEnrollmentWithSms: r17, submitEnrollmentWithTotp: n18, submitEnrollmentWithPasskey: l14, unenrollWithSms: () => s19("sms"), unenrollWithTotp: () => s19("totp"), unenrollWithPasskey: (e15) => s19("passkey", e15), showMfaEnrollmentModal: () => o22(true), closeMfaEnrollmentModal: () => o22(false) };
}
var un = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_aed)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V170.7H0V0Z", fill: "#00732F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 170.7H512V341.3H0V170.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 341.3H512V512H0V341.3Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H180V512H0V0Z", fill: "#FF0000" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_aed", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var pn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_ars)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#74ACDF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 170.7H512V341.4H0V170.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 284.4C271.685 284.4 284.4 271.684 284.4 256C284.4 240.315 271.685 227.6 256 227.6C240.315 227.6 227.6 240.315 227.6 256C227.6 271.684 240.315 284.4 256 284.4Z", fill: "#F6B40E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_ars", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var wn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_aud)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#00008B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 0V32L161 128L256 221.5V256H222.5L127 162L34 256H0V222L93 128.5L0 37V0H31L127 94L220 0H256Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 104V152H256V104H0ZM104 0V256H152V0H104Z", fill: "#FF0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M202 402.8L156.2 408.2L160.8 454.1L128 421.7L95.0001 453.9L99.9001 408L54.1001 402.2L93.0001 377.4L69.0001 338L112.6 353L128.4 309.6L143.9 353.1L187.6 338.4L163.3 377.6L202.1 402.7L202 402.8Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_aud", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var fn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_bdt)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#006A4E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M230 426.7C324.275 426.7 400.7 350.275 400.7 256C400.7 161.725 324.275 85.2998 230 85.2998C135.725 85.2998 59.2998 161.725 59.2998 256C59.2998 350.275 135.725 426.7 230 426.7Z", fill: "#F42A41" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_bdt", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var mn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_bgn)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V170.7H0V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 170.7H512V341.3H0V170.7Z", fill: "#00966E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 341.3H512V512H0V341.3Z", fill: "#D62612" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_bgn", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var gn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_4989_138102)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#229E45" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M261.4 405.4L491.2 256.2L260 106.6L29.2998 256.6L261.4 405.4Z", fill: "#F8E509" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M361.5 256C361.904 269.02 359.687 281.989 354.98 294.136C350.273 306.283 343.173 317.359 334.1 326.708C325.028 336.056 314.17 343.486 302.17 348.555C290.17 353.624 277.273 356.229 264.246 356.216C251.22 356.202 238.329 353.57 226.339 348.477C214.349 343.383 203.506 335.931 194.453 326.564C185.4 317.197 178.323 306.106 173.641 293.949C168.959 281.793 166.769 268.82 167.2 255.8C168.035 230.574 178.649 206.662 196.798 189.122C214.947 171.582 239.207 161.79 264.447 161.816C289.686 161.842 313.926 171.684 332.039 189.262C350.151 206.839 360.717 230.773 361.5 256Z", fill: "#2B49A3" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M232.3 314.2L229.3 312.4L226.2 314L226.9 310.5L224.5 308L227.9 307.6L229.5 304.4L231 307.7L234.4 308.3L231.8 310.7M297.5 330.7L294.5 328.9L291.3 330.5L292 327L289.6 324.5L293.1 324.1L294.7 320.9L296.1 324.2L299.5 324.8L297 327.2M269.4 304.3L266.8 302.8L264.1 304.1L264.7 301.1L262.7 298.9L265.6 298.6L267 295.9L268.2 298.7L271.2 299.2L269 301.2M335.2 294.8L332.6 293.3L330 294.6L330.6 291.7L328.6 289.6L331.5 289.2L332.8 286.6L334.1 289.3L337 289.8L334.8 291.8M268.2 275.1L265.2 273.3L262.1 274.9L262.8 271.4L260.4 268.9L263.8 268.5L265.4 265.4L266.9 268.6L270.3 269.2L267.7 271.6M188 245L185 243.2L182 244.8L182.6 241.3L180.2 238.8L183.7 238.4L185.3 235.2L186.7 238.5L190.1 239.1L187.6 241.5M197.7 285L194.7 283.3L191.6 284.8L192.3 281.4L189.9 278.8L193.3 278.4L194.9 275.4L196.4 278.5L199.8 279.2L197.2 281.5M297.8 230.2L295.2 228.7L292.4 230L293 227L291 224.7L294 224.4L295.4 221.6L296.7 224.5L299.7 225L297.4 227.1M292.4 256.3L290 255L287.9 256L288.3 253.6L286.7 251.9L289.1 251.6L290.2 249.4L291.2 251.7L293.6 252.1L291.8 253.7M183.4 292.2L181.4 291L179.3 292L179.7 289.7L178.1 288L180.5 287.8L181.5 285.8L182.5 287.8L184.8 288.3L183.1 289.9M335.7 301.4L334 300.6L332.3 301.3L332.7 299.6L331.4 298.3L333.3 298.1L334.2 296.6L334.9 298.2L336.8 298.5L335.4 299.7", fill: "#FFFFEF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M183.5 292.3L181.5 291.1L179.4 292.1L179.9 289.8L178.2 288.1L180.5 287.9L181.6 285.9L182.6 287.9L184.9 288.4L183.2 290", fill: "#FFFFEF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M183.5 292.3L181.5 291.1L179.4 292.1L179.9 289.8L178.2 288.1L180.5 287.9L181.6 285.9L182.6 287.9L184.9 288.4L183.2 290M215.4 292.3L213.4 291.1L211.4 292.1L211.8 289.8L210.2 288.1L212.5 287.9L213.5 285.8L214.5 287.9L216.8 288.4L215.1 290M211.4 303L209.4 301.8L207.4 302.8L207.8 300.5L206.2 298.8L208.5 298.5L209.5 296.5L210.5 298.5L212.8 299L211.1 300.6M277.8 283.6L275.8 282.4L273.7 283.4L274.1 281.1L272.5 279.4L274.8 279.2L275.9 277.1L276.9 279.2L279.1 279.6L277.4 281.2M258.3 283.6L256.3 282.4L254.2 283.4L254.7 281.1L253.1 279.4L255.4 279.2L256.4 277.1L257.4 279.2L259.7 279.6L258 281.2M205.5 276.8L204.3 276.1L203 276.7L203.2 275.2L202.2 274.2L203.7 274L204.4 272.7L204.9 274.1L206.4 274.3L205.4 275.3M333.2 310L331.2 308.9L329.1 309.9L329.6 307.6L328 305.9L330.3 305.6L331.3 303.6L332.3 305.6L334.6 306.1L332.9 307.7M316.9 312.1L315.3 311.1L313.6 312.1L314 310.1L312.6 308.7L314.6 308.5L315.4 306.8L316.2 308.5L318.2 308.9L316.7 310.2M324.7 312L323.1 311L321.5 311.9L321.8 310.1L320.6 308.8L322.4 308.6L323.2 307L323.9 308.6L325.7 308.9L324.4 310.2M346.6 292.8L345.1 291.9L343.5 292.7L343.9 291L342.7 289.7L344.4 289.5L345.2 288L345.9 289.6L347.6 289.9L346.3 291.1M317 322.9L315 321.8L313 322.8L313.5 320.6L311.9 319.1L314.1 318.8L315.2 316.9L316.2 318.9L318.3 319.3L316.7 320.7M317.1 331.6L315.3 330.6L313.5 331.5L313.9 329.3L312.5 327.8L314.5 327.5L315.5 325.6L316.3 327.6L318.3 328L316.8 329.4M302.3 312L300.8 311.1L299.2 311.9L299.6 310.1L298.4 308.9L300.1 308.7L300.9 307.1L301.6 308.7L303.3 309L302 310.2M288.5 312L287 311.1L285.4 311.9L285.8 310.1L284.6 308.9L286.3 308.7L287.1 307.1L287.8 308.7L289.5 309L288.3 310.2M265 291.4L263.5 290.5L261.9 291.3L262.3 289.6L261.1 288.3L262.8 288.1L263.6 286.6L264.3 288.2L266 288.5L264.7 289.6M267.6 333.1L266.3 332.4L265 333.1L265.3 331.6L264.3 330.6L265.7 330.3L266.4 329L267 330.4L268.5 330.6L267.4 331.6M232.2 265.6L229.2 263.9L226.1 265.4L226.8 262L224.4 259.4L227.8 259L229.4 255.9L230.9 259.1L234.3 259.7L231.7 262.1", fill: "#FFFFEF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M355.1 291C356.981 286.097 358.453 281.046 359.5 275.9C307.9 230.5 250.3 207.2 177.5 212C174.892 217.096 172.75 222.418 171.1 227.9C204.497 224.527 238.23 228.41 269.987 239.284C301.745 250.157 330.778 267.765 355.1 290.9V291Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M331.9 265.4L333.7 266.4C333.45 266.965 333.38 267.594 333.5 268.2C333.633 268.667 333.967 269.067 334.5 269.4C335.033 269.733 335.567 269.933 336.1 270C336.5 270 336.833 269.8 337.1 269.4C337.233 269.2 337.267 268.967 337.2 268.7L336.9 267.9L335.7 266.6C335.065 265.949 334.586 265.163 334.3 264.3C334.164 263.65 334.248 262.974 334.537 262.377C334.827 261.78 335.306 261.296 335.9 261C336.435 260.77 337.026 260.7 337.6 260.8C338.325 260.948 339.008 261.256 339.6 261.7C340.467 262.309 341.157 263.137 341.6 264.1C341.721 264.543 341.739 265.007 341.652 265.458C341.566 265.909 341.377 266.334 341.1 266.7L339.3 265.6C339.5 265.067 339.567 264.6 339.5 264.2C339.367 263.867 339.033 263.533 338.5 263.2C337.967 262.867 337.5 262.7 337.1 262.7L336.5 263L336.4 263.7C336.4 264.1 336.8 264.667 337.6 265.4L339.1 267.4C339.373 267.898 339.499 268.463 339.463 269.029C339.428 269.595 339.233 270.14 338.9 270.6C338.555 271.1 338.067 271.483 337.5 271.7C336.905 271.972 336.238 272.042 335.6 271.9C334.841 271.707 334.128 271.367 333.5 270.9C332.577 270.308 331.875 269.43 331.5 268.4C331.167 267.533 331.3 266.533 331.9 265.4ZM323.1 259.7L325.1 260.7C324.889 261.205 324.819 261.758 324.9 262.3C325.033 262.833 325.367 263.267 325.9 263.6C326.433 263.933 326.967 264.067 327.5 264C327.9 264 328.233 263.8 328.5 263.4L328.6 262.8C328.6 262.533 328.467 262.267 328.2 262L327 260.7C326.342 260.088 325.829 259.336 325.5 258.5C325.381 258.101 325.346 257.682 325.397 257.268C325.449 256.855 325.586 256.457 325.8 256.1C326.105 255.667 326.519 255.322 327 255.1C327.535 254.87 328.126 254.8 328.7 254.9C329.3 254.9 329.967 255.167 330.7 255.7C331.767 256.367 332.433 257.133 332.7 258C332.85 258.428 332.9 258.884 332.848 259.334C332.797 259.785 332.643 260.217 332.4 260.6L330.5 259.5C330.767 258.967 330.833 258.533 330.7 258.2C330.567 257.867 330.233 257.533 329.7 257.2C329.497 257.019 329.259 256.881 329.001 256.796C328.744 256.71 328.471 256.677 328.2 256.7L327.6 257.1V257.8C327.6 258.133 328 258.7 328.8 259.5C329.6 260.3 330.133 260.9 330.4 261.3C330.708 261.8 330.863 262.378 330.845 262.965C330.827 263.552 330.638 264.12 330.3 264.6C329.98 265.138 329.499 265.563 328.925 265.814C328.351 266.065 327.713 266.13 327.1 266C326.314 265.85 325.566 265.544 324.9 265.1C323.957 264.551 323.219 263.708 322.8 262.7C322.505 261.699 322.613 260.623 323.1 259.7ZM312.3 256.7L317.9 247.7L324.6 251.7L323.6 253.3L318.8 250.3L317.5 252.3L322.1 255.1L321.1 256.7L316.6 253.9L315.1 256.4L320.1 259.4L319.2 261L312.3 256.7ZM296.5 243.8L297.4 242.2L301.4 244.4L299.5 248.1C297.88 248.477 296.178 248.264 294.7 247.5C293.81 247.028 293.054 246.341 292.5 245.5C291.998 244.724 291.721 243.824 291.7 242.9C291.7 241.9 291.967 240.967 292.5 240.1C292.958 239.174 293.646 238.382 294.5 237.8C295.233 237.2 296.133 236.9 297.2 236.9C297.933 236.9 298.767 237.133 299.7 237.6C300.686 238.063 301.493 238.836 302 239.8C302.4 240.6 302.5 241.5 302.3 242.5L300.2 241.9C300.332 241.393 300.261 240.855 300 240.4C299.709 239.93 299.294 239.549 298.8 239.3C298.443 239.086 298.045 238.949 297.632 238.897C297.218 238.846 296.799 238.881 296.4 239C295.733 239.333 295.067 240 294.4 241C293.926 241.924 293.751 242.972 293.9 244C294.1 244.8 294.633 245.4 295.5 245.8L296.8 246.2H298.1L298.7 245L296.5 243.8ZM227.7 226.8L229.3 216.2L232.5 216.7L233.3 224.2L236.3 217.2L239.4 217.7L237.9 228.3L235.9 228L237.1 219.7L233.8 227.7L231.8 227.4L230.9 218.7L229.7 227.1L227.7 226.8ZM217 225.5L218 214.9L225.8 215.6L225.7 217.4L219.9 216.9L219.7 219.2L225 219.7L224.9 221.5L219.6 221L219.3 224L225.2 224.5L225 226.3L217 225.5Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M181.4 218.8C181.4 217.733 181.567 216.833 181.9 216.1L182.9 214.7L184.4 213.7C185.14 213.451 185.921 213.349 186.7 213.4C187.394 213.395 188.082 213.535 188.719 213.811C189.356 214.086 189.928 214.491 190.4 215C191.333 216 191.767 217.333 191.7 219C191.7 220.8 191.2 222.133 190.2 223C189.699 223.486 189.103 223.861 188.448 224.102C187.794 224.343 187.096 224.445 186.4 224.4C185.713 224.418 185.031 224.293 184.394 224.035C183.757 223.777 183.181 223.391 182.7 222.9C182.206 222.368 181.834 221.734 181.609 221.043C181.385 220.353 181.313 219.621 181.4 218.9V218.8Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M183.6 218.8C183.6 220 183.867 220.933 184.4 221.6C184.933 222.267 185.6 222.6 186.4 222.6C186.809 222.608 187.215 222.532 187.593 222.377C187.971 222.222 188.314 221.992 188.6 221.7C189.133 221.1 189.433 220.2 189.5 219C189.5 217.667 189.233 216.733 188.7 216.2C188.187 215.621 187.471 215.263 186.7 215.2C185.7 215.2 184.967 215.5 184.5 216.1C183.9 216.7 183.567 217.6 183.5 218.8H183.6Z", fill: "#F7FFFF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M194 224.4L194.1 213.7H198.6C199.8 213.7 200.633 213.833 201.1 214.1C201.767 214.367 202.167 214.7 202.3 215.1C202.567 215.633 202.733 216.2 202.8 216.8C202.8 217.6 202.567 218.267 202.1 218.8C201.633 219.267 200.9 219.6 199.9 219.8C200.433 220 200.833 220.267 201.1 220.6L202.3 222.4L203.6 224.4H201L199.5 222.1L198.3 220.5L197.7 220.1L196.7 219.9H196.2V224.4H194Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M196.2 218.2H199.8L200.3 217.7C200.5 217.5 200.6 217.233 200.6 216.9C200.6 216.567 200.5 216.267 200.3 216L199.5 215.6H196.3L196.2 218.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M206.2 214.2L210.1 214.4L212.1 214.7C212.669 214.915 213.182 215.257 213.6 215.7C214.067 216.253 214.408 216.902 214.6 217.6C214.8 218.267 214.866 219.1 214.8 220.1C214.851 220.868 214.724 221.638 214.429 222.349C214.135 223.06 213.679 223.694 213.1 224.2C212.7 224.533 212.2 224.8 211.6 225H209.6L205.6 224.9L206.2 214.2Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M208.199 216.1L207.899 223.1L209.499 223.3H210.799L211.699 222.8C211.966 222.6 212.166 222.267 212.299 221.8L212.599 219.8L212.499 218C212.366 217.533 212.166 217.2 211.899 217L210.899 216.4L209.199 216.2L208.199 216.1Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M258.5 233.3L261 222.9L264.3 223.7C265.633 224.033 266.467 224.3 266.8 224.5C267.333 224.767 267.733 225.2 268 225.8C268.267 226.4 268.3 227.133 268.1 228C268.011 228.516 267.789 228.999 267.456 229.403C267.123 229.806 266.69 230.116 266.2 230.3L265.1 230.6L262.9 230.2L261.5 229.9L260.5 233.8L258.5 233.3Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M262.6 225.2L261.9 228.2L263.1 228.4C263.9 228.6 264.467 228.667 264.8 228.6C265.077 228.572 265.339 228.461 265.553 228.283C265.767 228.105 265.922 227.867 266 227.6L265.9 226.5L265.1 225.8L263.6 225.4L262.6 225.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M268.4 236.3L271.9 226.2L276.2 227.7L278.4 228.7C278.8 229.1 279.1 229.6 279.3 230.2C279.6 231.1 279.3 231.3 279.1 231.9C278.9 232.7 278.467 233.233 277.8 233.5C277.456 233.7 277.075 233.83 276.681 233.881C276.286 233.933 275.884 233.905 275.5 233.8L276.3 235L276.9 237L277.4 239.4L275 238.6L274.3 235.9L273.7 234L273.3 233.4L272.3 232.9L271.9 232.8L270.4 237L268.4 236.3Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M272.4 231.2L273.9 231.7L275.8 232.2C276.067 232.2 276.3 232.133 276.5 232L277 231.3V230.3L276.4 229.7L274.9 229.2L273.3 228.6L272.4 231.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M280.9 235.9C281.159 234.987 281.601 234.137 282.2 233.4C282.533 232.933 282.966 232.567 283.5 232.3L285.1 231.8C285.766 231.8 286.533 231.9 287.4 232.1C288.078 232.27 288.714 232.58 289.265 233.011C289.816 233.441 290.271 233.983 290.6 234.6C291.266 235.867 291.3 237.3 290.7 238.9C290.328 240.336 289.437 241.582 288.2 242.4C287.583 242.707 286.909 242.884 286.221 242.918C285.532 242.952 284.844 242.844 284.2 242.6C283.521 242.43 282.886 242.12 282.334 241.69C281.783 241.259 281.329 240.717 281 240.1C280.461 238.758 280.426 237.266 280.9 235.9Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M283 236.5C282.667 237.567 282.667 238.5 283 239.3C283.333 240.1 283.933 240.633 284.8 240.9C285.6 241.1 286.333 241 287 240.6C287.667 240.2 288.233 239.4 288.7 238.2C288.967 237.067 288.967 236.1 288.7 235.3C288.516 234.942 288.262 234.625 287.952 234.367C287.643 234.109 287.285 233.917 286.9 233.8C286.516 233.695 286.115 233.667 285.72 233.719C285.325 233.77 284.944 233.9 284.6 234.1C283.933 234.5 283.4 235.3 283 236.5Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M301.7 250.8L306.6 241.3L310.6 243.3C311.6 243.9 312.267 244.367 312.6 244.7C313 245.167 313.234 245.667 313.3 246.2C313.434 246.867 313.3 247.433 312.9 247.9C312.634 248.567 312.134 249.067 311.4 249.4C310.734 249.6 309.967 249.567 309.1 249.3C309.367 249.7 309.567 250.133 309.7 250.6L310 252.7L310.2 255.2L307.9 254L307.6 251.2L307.3 249.2L306.9 248.6L306 248L305.6 247.8L303.6 251.8L301.7 250.8Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M306.4 246.3L307.8 247L309.6 247.8C309.867 247.8 310.1 247.733 310.3 247.6C310.536 247.424 310.729 247.199 310.868 246.939C311.006 246.68 311.085 246.393 311.1 246.1L310.5 245.4L309.2 244.6L307.7 243.9L306.4 246.3Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M341.2 270.3C341.733 269.367 342.4 268.7 343.2 268.3L344.8 267.6H346.4C347.133 267.667 347.867 268 348.6 268.6C349.191 268.961 349.7 269.44 350.096 270.008C350.492 270.577 350.766 271.221 350.9 271.9C351.045 273.355 350.654 274.813 349.8 276C349.001 277.275 347.751 278.203 346.3 278.6C345.623 278.727 344.927 278.712 344.256 278.557C343.585 278.402 342.953 278.111 342.4 277.7C341.809 277.339 341.299 276.86 340.903 276.291C340.507 275.723 340.234 275.079 340.1 274.4C339.926 272.957 340.281 271.5 341.1 270.3H341.2Z", fill: "#309E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M343 271.4C342.334 272.467 342.067 273.4 342.2 274.2C342.269 274.605 342.419 274.991 342.643 275.335C342.867 275.679 343.158 275.973 343.5 276.2C344.155 276.612 344.943 276.755 345.7 276.6C346.5 276.4 347.267 275.767 348 274.7C348.734 273.633 349 272.733 348.8 272C348.8 271.267 348.4 270.6 347.6 270C346.4 269.1 346.1 269.4 345.3 269.6C344.5 269.8 343.767 270.4 343.1 271.4H343Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.4 229L248.1 221.4L253.7 222.7L253.4 224L249.4 223L249 224.7L252.7 225.6L252.4 226.9L248.7 225.9L248.2 228L252.4 229L252.1 230.3L246.4 229Z", fill: "#309E3A" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_4989_138102", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var yn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_cad)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M81.1001 0H443.4V512H81.1001V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M-100 0H81.1V512H-100V0ZM443.4 0H624.5V512H443.4V0Z", fill: "#D52B1E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M135.3 247.4L121.3 252.2L186.7 309.7C191.7 324.5 185 328.8 180.7 336.6L251.7 327.6L249.9 399.1L264.7 398.6L261.4 327.7L332.6 336.1C328.2 326.8 324.3 321.9 328.3 307.1L393.7 252.6L382.3 248.5L257.4 101.4L135.3 247.5V247.4Z", fill: "#D52B1E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_cad", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Mn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_chf)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#FF0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M96 208H416V304H96V208Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M208 96H304V416H208V96Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_chf", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var vn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_clp)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M255.805 0H767.486V255.805H255.805V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H255.805V255.805H0V0Z", fill: "#0039A6" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M167.721 191.547L128.011 161.872L88.6616 191.835L103.318 143.1L63.9692 112.993L112.632 112.56L127.794 63.9692L143.173 112.488H191.908L152.631 142.956L167.721 191.547Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 255.805H767.486V511.682H0V255.805Z", fill: "#D52B1E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_clp", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var An = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_cny)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#EE1C25" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M204.8 104.96L74.2402 189.44L128 51.2002L174.08 189.44L51.2002 104.96H204.8Z", fill: "#FFFF00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.577 33.0493L283.098 55.8344L234.403 64.2012L265.969 27.3271L262.929 76.9066L236.577 33.0493Z", fill: "#FFFF00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M295.87 78.2082L329.881 117.326L281.736 106.078L325.192 84.3783L303.084 128.897L295.87 78.2082Z", fill: "#FFFF00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M306.574 152.531L321.655 202.153L282.279 172.21L330.834 170.145L292.454 201.774L306.574 152.531Z", fill: "#FFFF00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M266.01 205.632L260.775 257.178L236.032 214.4L281.575 231.219L234.01 245.568L266.01 205.632Z", fill: "#FFFF00" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_cny", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Zn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_cop)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#FFE800" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 256H512V512H0V256Z", fill: "#00148E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 384H512V512H0V384Z", fill: "#DA0010" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_cop", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var En = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_czk)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V256H0V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 256H512V512H0V256Z", fill: "#D7141A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M300 256L0 56V456L300 256Z", fill: "#11457E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_czk", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var kn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_dkk)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512.1V512H0V0Z", fill: "#C8102E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M144 0H217.1V512H144V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 219.4H512.1V292.6H0V219.4Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_dkk", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var _n = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_egp)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 341.3H512V512H0V341.3Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 170.7H512V341.3H0V170.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V170.7H0V0Z", fill: "#CE1126" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256.681 258.047L315.134 312.319L310.953 213.759C310.355 198.826 297.385 202.239 287.913 207.615C278.441 213.759 267.433 213.759 255.998 209.749C244.478 213.759 233.555 213.759 224.084 207.615C214.697 202.239 201.641 198.826 201.044 213.759L196.862 312.319L256.681 258.047Z", fill: "white", stroke: "#C09300", strokeWidth: "1.10933", strokeLinejoin: "round" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_egp", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Sn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_etb)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-237.908 3.54639H799.515V501.338H-238.013L-237.908 3.54639Z", fill: "#FFC621" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-240 342.346H798.887V511.798H-240V342.346Z", fill: "#EF2118" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-237.908 -0.0102539H799.514V179.902H-237.908V-0.0102539Z", fill: "#298C08" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.885 371.676C321.297 371.676 369.461 323.512 369.461 264.099C369.461 204.687 321.297 156.523 261.885 156.523C202.472 156.523 154.308 204.687 154.308 264.099C154.308 323.512 202.472 371.676 261.885 371.676Z", fill: "#006BC6" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_etb", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Fn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_4989_138368)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#003399" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.999 81.4124L248.414 106.696L261.056 109.225L255.999 81.4124Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.999 81.4124L263.584 106.696L250.942 109.225L255.999 81.4124Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M280.046 98.8831L253.656 99.4824L255.158 112.287L280.046 98.8831Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M280.046 98.8831L258.343 113.91L252.032 102.668L280.046 98.8831Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.861 127.151L262.136 102.238L250.422 107.623L270.861 127.151Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.86 127.151L249.862 111.155L258.604 101.678L270.86 127.151Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.953 98.8831L258.343 99.4824L256.841 112.287L231.953 98.8831Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.953 98.8831L253.655 113.91L259.967 102.668L231.953 98.8831Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.138 127.151L249.863 102.238L261.576 107.623L241.138 127.151Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.138 127.151L262.136 111.155L253.395 101.678L241.138 127.151Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.999 384.82L248.414 410.104L261.056 412.632L255.999 384.82Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.999 384.82L263.584 410.104L250.942 412.632L255.999 384.82Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M280.046 402.291L253.656 402.89L255.158 415.694L280.046 402.291Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M280.046 402.291L258.343 417.318L252.032 406.076L280.046 402.291Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.862 430.559L262.137 405.645L250.423 411.031L270.862 430.559Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.861 430.559L249.863 414.562L258.604 405.086L270.861 430.559Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.953 402.291L258.343 402.89L256.841 415.694L231.953 402.291Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.953 402.291L253.655 417.318L259.967 406.076L231.953 402.291Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.138 430.559L249.863 405.645L261.576 411.031L241.138 430.559Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.138 430.559L262.136 414.562L253.395 405.086L241.138 430.559Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M104.296 233.116L96.7109 258.4L109.353 260.928L104.296 233.116Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M104.296 233.116L111.881 258.4L99.2394 260.928L104.296 233.116Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M128.342 250.587L101.952 251.186L103.454 263.991L128.342 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M128.343 250.587L106.64 265.614L100.329 254.372L128.343 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M119.157 278.855L110.432 253.942L98.7187 259.327L119.157 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M119.158 278.855L98.1595 262.858L106.901 253.382L119.158 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M80.2498 250.587L106.64 251.186L105.138 263.991L80.2498 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M80.2497 250.587L101.952 265.614L108.263 254.372L80.2497 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M89.4349 278.855L98.1599 253.942L109.874 259.327L89.4349 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M89.4347 278.855L110.433 262.858L101.691 253.382L89.4347 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M167.148 148.621L188.146 132.625L179.404 123.149L167.148 148.621Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M167.148 148.622L175.873 123.708L187.586 129.093L167.148 148.622Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M157.963 120.353L179.665 135.38L185.976 124.138L157.963 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M157.963 120.353L184.353 120.952L182.851 133.757L157.963 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M182.009 102.882L174.424 128.166L187.066 130.695L182.009 102.882Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M182.009 102.882L189.594 128.166L176.952 130.695L182.009 102.882Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M196.871 148.621L175.873 132.625L184.614 123.149L196.871 148.621Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M196.871 148.622L188.146 123.708L176.432 129.093L196.871 148.622Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M206.056 120.353L184.353 135.38L178.042 124.138L206.056 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M206.056 120.353L179.665 120.952L181.167 133.757L206.056 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M140.628 204.864L131.903 179.951L120.189 185.336L140.628 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M140.628 204.864L119.63 188.868L128.371 179.391L140.628 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M110.904 204.864L131.903 188.868L123.161 179.391L110.904 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M110.905 204.864L119.63 179.951L131.343 185.336L110.905 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.719 176.596L123.422 191.623L129.733 180.381L101.719 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.72 176.596L128.11 177.195L126.608 190L101.72 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M149.813 176.596L128.11 191.623L121.799 180.381L149.813 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M149.813 176.596L123.422 177.195L124.924 190L149.813 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M125.766 159.125L133.352 184.409L120.71 186.938L125.766 159.125Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M125.766 159.125L118.181 184.409L130.823 186.938L125.766 159.125Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M149.841 328.664L123.45 329.263L124.952 342.067L149.841 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M149.841 328.664L128.138 343.691L121.827 332.449L149.841 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M140.656 356.932L131.931 332.018L120.217 337.403L140.656 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M140.656 356.932L119.658 340.935L128.399 331.459L140.656 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M110.933 356.932L131.931 340.935L123.189 331.459L110.933 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M110.933 356.932L119.658 332.018L131.372 337.404L110.933 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M125.794 311.193L133.379 336.477L120.737 339.005L125.794 311.193Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M125.794 311.193L118.209 336.477L130.851 339.005L125.794 311.193Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.748 328.664L128.138 329.263L126.636 342.067L101.748 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.748 328.664L123.45 343.691L129.762 332.449L101.748 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M204.716 379.555L178.325 380.154L179.827 392.958L204.716 379.555Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M204.716 379.554L183.013 394.582L176.702 383.34L204.716 379.554Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M195.531 407.823L186.806 382.909L175.092 388.294L195.531 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M195.531 407.823L174.533 391.826L183.274 382.35L195.531 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M165.808 407.823L186.806 391.826L178.064 382.35L165.808 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M165.808 407.823L174.533 382.909L186.247 388.294L165.808 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M180.669 362.084L188.254 387.368L175.612 389.896L180.669 362.084Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M180.669 362.084L173.084 387.368L185.726 389.896L180.669 362.084Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M156.623 379.555L183.013 380.154L181.511 392.958L156.623 379.555Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M156.623 379.554L178.325 394.582L184.637 383.34L156.623 379.554Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M407.703 233.116L415.288 258.4L402.646 260.928L407.703 233.116Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M407.703 233.116L400.118 258.4L412.76 260.928L407.703 233.116Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M383.656 250.587L410.046 251.186L408.545 263.991L383.656 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M383.656 250.587L405.359 265.614L411.67 254.372L383.656 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M392.841 278.855L401.566 253.941L413.279 259.327L392.841 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M392.841 278.855L413.839 262.858L405.098 253.382L392.841 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M431.749 250.587L405.359 251.186L406.861 263.991L431.749 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M431.749 250.587L410.046 265.614L403.735 254.372L431.749 250.587Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M422.565 278.855L413.84 253.941L402.126 259.327L422.565 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M422.564 278.855L401.566 262.858L410.308 253.382L422.564 278.855Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M344.852 148.621L323.854 132.625L332.596 123.149L344.852 148.621Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M344.852 148.622L336.127 123.708L324.413 129.093L344.852 148.622Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M354.037 120.353L332.334 135.38L326.023 124.138L354.037 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M354.036 120.353L327.646 120.952L329.148 133.757L354.036 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M329.99 102.882L337.575 128.166L324.933 130.695L329.99 102.882Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M329.99 102.882L322.405 128.166L335.047 130.695L329.99 102.882Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M315.129 148.621L336.127 132.625L327.386 123.148L315.129 148.621Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M315.13 148.621L323.855 123.708L335.568 129.093L315.13 148.621Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M305.945 120.353L327.647 135.38L333.958 124.138L305.945 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M305.945 120.353L332.336 120.952L330.834 133.757L305.945 120.353Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M371.372 204.864L380.097 179.951L391.811 185.336L371.372 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M371.372 204.864L392.37 188.868L383.629 179.391L371.372 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M401.096 204.864L380.097 188.867L388.839 179.391L401.096 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M401.095 204.864L392.37 179.951L380.656 185.336L401.095 204.864Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M410.28 176.596L388.578 191.623L382.266 180.381L410.28 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M410.279 176.596L383.889 177.195L385.391 190L410.279 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M362.187 176.596L383.889 191.623L390.2 180.381L362.187 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M362.187 176.596L388.578 177.195L387.076 190L362.187 176.596Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M386.234 159.125L378.648 184.409L391.29 186.938L386.234 159.125Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M386.233 159.125L393.818 184.409L381.176 186.938L386.233 159.125Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M362.159 328.664L388.549 329.263L387.047 342.067L362.159 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M362.159 328.664L383.862 343.691L390.173 332.449L362.159 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M371.344 356.932L380.069 332.018L391.782 337.404L371.344 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M371.344 356.932L392.342 340.935L383.601 331.459L371.344 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M401.066 356.932L380.068 340.935L388.81 331.459L401.066 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M401.066 356.932L392.341 332.018L380.627 337.403L401.066 356.932Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M386.205 311.193L378.62 336.477L391.262 339.005L386.205 311.193Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M386.205 311.193L393.79 336.477L381.148 339.005L386.205 311.193Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M410.252 328.664L383.862 329.263L385.364 342.068L410.252 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M410.252 328.664L388.549 343.691L382.238 332.449L410.252 328.664Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M307.284 379.555L333.674 380.154L332.172 392.958L307.284 379.555Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M307.284 379.554L328.987 394.582L335.298 383.34L307.284 379.554Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M316.469 407.823L325.194 382.909L336.907 388.294L316.469 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M316.469 407.823L337.467 391.826L328.726 382.35L316.469 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M346.191 407.823L325.193 391.826L333.935 382.35L346.191 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M346.191 407.823L337.466 382.909L325.752 388.294L346.191 407.823Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M331.33 362.084L323.745 387.368L336.387 389.896L331.33 362.084Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M331.33 362.084L338.915 387.368L326.273 389.896L331.33 362.084Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M355.377 379.555L328.987 380.154L330.489 392.958L355.377 379.555Z", fill: "#FFCC00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M355.377 379.554L333.674 394.582L327.363 383.34L355.377 379.554Z", fill: "#FFCC00" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_4989_138368", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Tn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_4989_138137)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#012169" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M512 0V64L322 256L512 443V512H445L254 324L68 512H0V444L186 257L0 74V0H62L254 188L440 0H512Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M184 324L195 358L42 512H0V509L184 324ZM308 312L362 320L512 467V512L308 312ZM512 0L320 196L316 152L466 0H512ZM0 1L193 190L134 182L0 49V1Z", fill: "#C8102E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M176 0V512H336V0H176ZM0 176V336H512V176H0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 208V304H512V208H0ZM208 0V512H304V0H208Z", fill: "#C8102E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_4989_138137", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Hn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_hkd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0", fill: "#EC1B2E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M282.3 119.2C203 114 166.6 218 241.6 256.4C215.6 234 221 201 231.5 184L233.4 185C219.6 208.6 222.2 237.8 244.4 256C231.8 243.8 235 217 256.6 207.2C278.2 197.4 280.2 167.9 273 158.1C263.2 141.033 266.3 128.033 282.3 119.1V119.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M392.378 248.29C372.818 171.265 262.66 168.784 249.316 251.98C262.585 220.33 295.639 215.268 315.052 220.001L314.688 222.117C287.978 216.285 261.011 227.781 250.562 254.519C258.271 238.766 284.748 233.527 300.743 251.042C316.738 268.556 345.413 261.342 352.508 251.466C365.711 236.872 379.033 235.803 392.473 248.259L392.378 248.29Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_hkd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var bn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_huf)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 512H0V0H512V512Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 512H0V341.3H512V512Z", fill: "#388D00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 170.8H0V0.100098H512V170.8Z", fill: "#D43516" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_huf", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Vn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_idr)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V256H0V0Z", fill: "#E70011" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 256H512V512H0V256Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_idr", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Rn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_ils)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M619.4 512H-112V0H619.4V512Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M619.4 115.2H-112V48H619.4V115.2ZM619.4 465.7H-112V398.5H619.4V465.7ZM136.4 190.7L246.5 382.3L359 191.6L136.4 190.7Z", fill: "#0038B8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M136 320.6L246.2 129L358.6 319.8L136 320.6Z", fill: "#0038B8" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_ils", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Pn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_inr)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V170.7H0V0Z", fill: "#FF9933" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 170.7H512V341.3H0V170.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 341.3H512V512H0V341.3Z", fill: "#128807" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 324.267C293.703 324.267 324.267 293.703 324.267 256C324.267 218.297 293.703 187.733 256 187.733C218.297 187.733 187.733 218.297 187.733 256C187.733 293.703 218.297 324.267 256 324.267Z", fill: "#000088" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.999 267.947C262.597 267.947 267.946 262.598 267.946 256C267.946 249.402 262.597 244.053 255.999 244.053C249.401 244.053 244.053 249.402 244.053 256C244.053 262.598 249.401 267.947 255.999 267.947Z", fill: "#000088" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_inr", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Wn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_jpy)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-128 0H640.007V512.029H-128V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256.009 415.199C343.904 415.199 415.156 343.947 415.156 256.052C415.156 168.157 343.904 96.9048 256.009 96.9048C168.114 96.9048 96.8618 168.157 96.8618 256.052C96.8618 343.947 168.114 415.199 256.009 415.199Z", fill: "#BC002D" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_jpy", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var In = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_kes)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V153.6H0V0Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 358.4H512V512H0V358.4Z", fill: "#006600" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.8 102.4C236.6 102.4 204.6 153.6 195 179.2H0V332.8H195C204.7 358.4 236.7 409.6 255.9 409.6C275.1 409.6 307.1 358.4 316.7 332.8H512V179.2H316.6C307 153.6 275 102.4 255.8 102.4Z", fill: "#BB0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.8 275.2C262.869 275.2 268.6 266.604 268.6 256C268.6 245.396 262.869 236.8 255.8 236.8C248.731 236.8 243 245.396 243 256C243 266.604 248.731 275.2 255.8 275.2Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_kes", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Un = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_krw)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.9756 167.546L84.3956 73.9515L99.9947 84.3549L37.5747 177.95L21.9756 167.546ZM45.3743 183.151L107.794 89.5565L123.393 99.9599L60.9734 193.555L45.3743 183.151ZM68.773 198.756L131.193 105.162L146.792 115.565L84.3721 209.16L68.773 198.756Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M365.156 396.42L427.576 302.825L443.175 313.228L380.755 406.823L365.156 396.42ZM388.555 412.025L450.975 318.43L466.574 328.833L404.154 422.428L388.555 412.025ZM411.954 427.63L474.374 334.035L489.973 344.438L427.553 438.033L411.954 427.63Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M388.567 344.42L466.563 396.437Z", fill: "black" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M388.567 344.42L466.563 396.437", stroke: "white", strokeWidth: "9.375" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.38 193.572C178.935 168.749 204.672 151.52 233.931 145.673C263.189 139.827 293.572 145.843 318.395 162.397C343.218 178.952 360.447 204.69 366.294 233.948C372.14 263.207 366.124 293.589 349.57 318.412L162.38 193.572Z", fill: "#CD2E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.38 193.572C145.825 218.395 139.809 248.778 145.656 278.036C151.502 307.295 168.732 333.032 193.555 349.587C218.378 366.142 248.76 372.158 278.019 366.311C307.277 360.465 333.015 343.235 349.57 318.412C357.847 306.001 360.855 290.809 357.932 276.18C355.009 261.551 346.394 248.682 333.982 240.405C321.571 232.127 306.379 229.119 291.75 232.043C277.121 234.966 264.252 243.581 255.975 255.992L162.38 193.572Z", fill: "#0047A0" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.975 255.992C273.212 230.147 266.233 195.222 240.387 177.985C214.542 160.748 179.617 167.727 162.38 193.572C145.143 219.418 152.122 254.343 177.967 271.58C203.813 288.816 238.738 281.838 255.975 255.992Z", fill: "#CD2E3A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M84.4473 438.033L22.0273 344.438L37.6264 334.035L100.046 427.63L84.4473 438.033ZM107.846 422.428L45.426 328.833L61.0251 318.43L123.445 412.025L107.846 422.428ZM131.245 406.823L68.8247 313.228L84.4238 302.825L146.844 396.42L131.245 406.823Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M427.628 209.16L365.208 115.565L380.807 105.162L443.227 198.757L427.628 209.16ZM451.027 193.555L388.607 99.9601L404.206 89.5567L466.626 183.152L451.027 193.555ZM474.425 177.95L412.005 84.3551L427.604 73.9517L490.024 167.547L474.425 177.95Z", fill: "#000001" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M72.7363 378.231L96.135 362.626ZM388.619 167.564L415.917 149.358ZM439.316 133.753L462.715 118.148Z", fill: "black" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M72.7363 378.231L96.135 362.626M388.619 167.564L415.917 149.358M439.316 133.753L462.715 118.148", stroke: "white", strokeWidth: "9.375" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_krw", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var On = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_kwd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 170.606H1023.95V341.316H0V170.606Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 341.315H1023.95V512.025H0V341.315Z", fill: "#F31830" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H1023.95V170.709H0V0Z", fill: "#00D941" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0V511.922L255.445 341.315L255.961 170.503L0 0Z", fill: "#000001" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_kwd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var xn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_kzt)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#00ABC2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M276.699 283.915C314.76 283.915 345.615 253.061 345.615 215C345.615 176.939 314.76 146.085 276.699 146.085C238.639 146.085 207.784 176.939 207.784 215C207.784 253.061 238.639 283.915 276.699 283.915Z", fill: "#FFEC2D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M274.309 335.36C272.517 338.585 271.442 342.323 269.189 345.241C262.226 338.944 252.191 339.097 243.385 338.739C236.114 338.329 228.229 337.664 222.597 332.493C216.709 327.629 211.845 321.382 205.292 317.44C199.132 316.117 193.343 313.441 188.345 309.606C178.002 301.158 172.063 288.614 161.925 279.91C160.031 278.067 157.727 276.582 155.577 274.995Z", fill: "#FFEC2D" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_kzt", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Nn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_mad)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M512 0H0V512H512V0Z", fill: "#C1272D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 191.4L218 308.2L317.4 236H194.6L293.9 308.2L256 191.4Z", stroke: "#006233", strokeWidth: "12.5" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_mad", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Dn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_4989_137735)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M341.3 0H512V512H341.3V0Z", fill: "#CE1126" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M170.7 0H341.3V512H170.7V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H170.7V512H0V0Z", fill: "#006847" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284.6 295.6L284.8 299.1L286.2 298.2L285.2 295.2L284.6 295.6Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284.5 295.7C285.108 295.7 285.6 295.208 285.6 294.6C285.6 293.992 285.108 293.5 284.5 293.5C283.893 293.5 283.4 293.992 283.4 294.6C283.4 295.208 283.893 295.7 284.5 295.7Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M289 301.1L286.3 298.6L285.1 299.6L288.7 301.6L289 301.1Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M288.7 302.6C288.3 301.933 288.4 301.367 289 300.9C289.6 300.433 290.133 300.5 290.6 301.1C290.933 301.7 290.833 302.233 290.3 302.7C289.7 303.1 289.167 303.033 288.7 302.5V302.6ZM309 263.7L311.7 266.3L312.1 265L309.6 263.3L309 263.7Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M308.7 264.1C309.307 264.1 309.8 263.608 309.8 263C309.8 262.393 309.307 261.9 308.7 261.9C308.092 261.9 307.6 262.393 307.6 263C307.6 263.608 308.092 264.1 308.7 264.1Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M316.1 265.3L312.1 266.4L312.4 265.1L315.9 264.7L316.1 265.3Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M316.8 265.8C317.408 265.8 317.9 265.307 317.9 264.7C317.9 264.092 317.408 263.6 316.8 263.6C316.193 263.6 315.7 264.092 315.7 264.7C315.7 265.307 316.193 265.8 316.8 265.8Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M302.3 285.5L299.8 281.5L300.2 281.4L303.1 284.7L302.3 285.5Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M299.6 281.9C300.263 281.9 300.8 281.363 300.8 280.7C300.8 280.037 300.263 279.5 299.6 279.5C298.938 279.5 298.4 280.037 298.4 280.7C298.4 281.363 298.938 281.9 299.6 281.9Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M302.5 285.6L305.7 286.2L305.8 285.7L303.1 284.7L302.5 285.6Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M306.6 287.3C307.208 287.3 307.7 286.807 307.7 286.2C307.7 285.592 307.208 285.1 306.6 285.1C305.992 285.1 305.5 285.592 305.5 286.2C305.5 286.807 305.992 287.3 306.6 287.3Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.7 294.4C227.633 295.067 227.366 295.4 226.9 295.4C226.233 295.333 225.966 295 226.1 294.4C226.3 293.6 226.566 293.267 226.9 293.4C227.433 293.6 227.7 293.933 227.7 294.4ZM227.7 296.2L228.4 300.2L227.4 299.9L227.1 296.4L227.7 296.2Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.6 294.9C229 295.5 228.3 296.4 227.4 296.6C226.6 296.9 225.5 296.5 225.5 295.7C225.5 294.9 226.8 295.3 227.1 295.2C227.6 295 228.1 294.2 228.6 294.9Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M221.6 301.9C222.318 301.9 222.9 301.497 222.9 301C222.9 300.503 222.318 300.1 221.6 300.1C220.882 300.1 220.3 300.503 220.3 301C220.3 301.497 220.882 301.9 221.6 301.9Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M223.7 300.8L227.6 300.6L226.9 299.8L223.7 300.2V300.8Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M224 300.4C224.4 301.4 224.4 302.7 223.3 302.5C222.2 302.3 222.4 301.4 222.3 301C222.2 300.3 221.5 299.7 222.2 299C222.8 298.4 223.7 299.4 224 300.4Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M211.5 280.5C211.942 280.5 212.3 280.008 212.3 279.4C212.3 278.793 211.942 278.3 211.5 278.3C211.058 278.3 210.7 278.793 210.7 279.4C210.7 280.008 211.058 280.5 211.5 280.5Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M211.5 281.9L211.6 285.6L210.6 284.7L210.7 281.7L211.5 281.9Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M213 280.8C213.2 281.6 211.9 282.1 211 281.9C210.067 281.767 209.633 281.3 209.7 280.5C209.7 279.8 210.9 279.9 211.2 280.1C211.6 280.4 212.7 279.5 213 280.8Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M204.9 285.8C205.618 285.8 206.2 285.531 206.2 285.2C206.2 284.869 205.618 284.6 204.9 284.6C204.182 284.6 203.6 284.869 203.6 285.2C203.6 285.531 204.182 285.8 204.9 285.8Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M207.3 285.2L210.2 285L211.4 286L207.2 285.8L207.3 285.2Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M206.2 283.6C207 283.6 207.5 284.5 207.4 285.4C207.4 286.4 206.6 287.1 205.9 287C205.1 286.9 205.2 286.2 205.2 286L205.7 285.2C205.7 284.9 205.5 284.2 205.6 284C205.6 283.733 205.8 283.6 206.2 283.6ZM203.8 260.9C203.5 261.5 202.8 261.9 202.6 261.6C202.333 261.267 202.366 260.8 202.7 260.2C203.033 259.6 203.433 259.4 203.9 259.6C204.166 259.867 204.166 260.3 203.9 260.9H203.8ZM200.6 266.8L202.2 262.9L202 262.7L200.1 265.4L200.6 266.8Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M202 263C201.2 262.333 200.933 261.7 201.2 261.1C201.5 260.6 202.1 260.9 202.1 260.9L202.8 261.6C203 261.7 203.5 261.5 203.8 262C204.066 262.6 204.066 262.933 203.8 263C203.508 263.158 203.181 263.24 202.85 263.24C202.518 263.24 202.192 263.158 201.9 263H202ZM195.1 262.4C195.766 262.867 196 263.3 195.8 263.7C195.6 264.1 195.133 264.1 194.4 263.7C193.4 263.1 193.5 262.9 193.7 262.5C194.033 262.1 194.5 262.1 195.1 262.5V262.4ZM196.8 264.1L199.8 265.9V267.4L196.5 264.6L196.8 264.1Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M196.8 264.5C196.134 265.167 195.534 265.333 195 265C194.4 264.7 194.9 264.1 194.9 264.1L195.5 263.5C195.7 263.2 195.5 262.7 196.1 262.5C196.7 262.233 197.034 262.3 197.1 262.7C197.2 263 197.4 263.9 196.8 264.5Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M285.3 295.8L284.9 296.2L284.7 296.9V295.8L285.1 295.5L285.3 295.8Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M285.4 295C285.4 295 285.2 295.5 284.5 295.5C283.833 295.5 283.5 295.267 283.5 294.8L283.6 293.9L283.3 294.3V295L283.8 295.6H284.2L284.6 295.7L285.1 295.5L285.4 295.3V295.1V295ZM288.8 301H288.2L285.5 299.6L288.5 301.6L288.8 301ZM290.7 301.8C290.7 301.8 290.7 302.4 290.1 302.6C289.5 302.867 289.1 302.867 288.9 302.6C288.763 302.477 288.662 302.319 288.609 302.142C288.556 301.966 288.553 301.778 288.6 301.6L288.5 302.1L288.8 302.7L289.4 303H289.9L290.2 302.8L290.6 302.4L290.8 302L290.7 301.8ZM310.1 263.8V264.6L309.4 263.9L309.7 263.5L310.1 263.8ZM309.8 262.8C309.8 263.3 309 264.1 308.5 263.8C307.833 263.533 307.6 263.067 307.8 262.4L307.6 262.7L307.7 263.5L308.3 264H308.9L309.5 263.8L309.8 263.2V262.8ZM317.8 264.2C317.8 264.7 317.3 265.6 316.7 265.5C316.033 265.367 315.733 265 315.8 264.4V265.2L316.1 265.5L316.6 265.8H317.1L317.7 265.4L317.9 264.9V264.6L317.8 264.2Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M315 264.9C315 264.9 315 265.1 314.7 265.3L313.7 265.9L315.9 265.3L315.7 264.7L315 264.9ZM301.4 282.8L301.2 283.2V283.8L300 281.8L300.4 281.6L301.4 282.8ZM300.7 280.8C300.4 281.4 299.5 281.8 299.1 281.5C298.7 281.2 298.3 280.3 298.8 279.9L298.5 280.1L298.4 280.7L298.6 281.2L299 281.7L299.4 281.9L300.1 281.7L300.6 281.4C300.6 281.4 300.9 280.4 300.6 280.9L300.7 280.8ZM305.1 285.5C305.1 285.5 305.1 285.7 304.7 285.7H303.5L305.5 286.1L305.7 285.7L305.1 285.5Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M307.7 286C307.9 286.7 307.3 287.4 306.5 287.1C305.7 286.8 305.5 286.1 305.7 285.6L305.5 286.2L305.7 286.8L306.2 287.2L306.7 287.4L307.2 287.2L307.7 286.7L307.8 286.1V286H307.7ZM228.5 294.9C228.7 295.1 228.4 296.1 227.5 296.4C226.6 296.7 226.1 296.4 225.9 296.1L225.7 295.5L225.5 295.7L225.7 296.1L226.1 296.5L226.9 296.7L227.5 296.6L228.1 296.3L228.4 296L228.7 295.6V295.1L228.6 294.9H228.5Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.7 296.9L227.4 297.2L227.2 297.8V296.8L227.6 296.5L227.7 296.9ZM224.7 300.1C224.7 300.1 224.6 300.3 224.8 300.5L225.6 300.7H224.2L224 300.2L224.7 300.1ZM224.2 301.1L224.1 301.6C223.966 302.067 223.7 302.3 223.3 302.3C223.087 302.257 222.893 302.146 222.749 301.984C222.605 301.822 222.517 301.617 222.5 301.4L222.3 300.9V301.4L222.6 302.2L223.2 302.5H223.6L224 302.3L224.2 301.8V301V301.1ZM220.4 300.9C220.4 300.9 220.6 301.6 221.4 301.6L222.4 301.4V301.7L222.1 301.8L221.5 301.9L220.9 301.8L220.6 301.6L220.4 301.2V300.9ZM212.9 280.6V280.9C212.8 281.2 212.3 281.8 211.4 281.8C210.6 281.8 210.133 281.6 210 281.2C209.733 280.8 209.633 280.567 209.7 280.5V281L210 281.5L210.9 281.9H211.7L212.5 281.7L212.9 281.3V280.6ZM211.5 282.4L211 282.6L210.7 282.9V281.9H211.5V282.5V282.4ZM207.7 285.2L208.1 285.5C208.5 285.7 210.6 285.9 210.6 285.9L207.3 285.8L207.5 285.2H207.7ZM207.4 285.2L207.2 285.7C207 286 206.6 286.9 205.9 286.8C205.2 286.7 205.3 286.2 205.3 286.1V285.9L205.2 286.4L205.4 286.7L205.6 286.9H206.2L206.6 286.8L207 286.4L207.2 286L207.4 285.5V285.2ZM205.6 285.3C205.6 285.3 205.6 285.5 205 285.5L203.7 285.3L204 285.6L204.4 285.7H205.4L205.6 285.3ZM203.9 262.3C203.9 262.3 204 262.6 203.7 262.8C203.3 263.067 202.833 263.1 202.3 262.9C201.9 262.7 201.1 261.9 201.1 261.9L201.5 262.5L202 263L202.8 263.2H203.6L203.9 262.8L204 262.6L203.9 262.3Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M201.6 263.3V263.7L201.5 264.7L202.1 263.1L201.9 262.9L201.6 263.3ZM197.3 264.5L197.4 264.8C197.6 265.3 199.4 266.9 199.4 266.9L196.6 264.7L196.9 264.2L197.3 264.5ZM196.4 264.7L195.7 265C195.5 265 194.9 265 194.9 264.6V264.1L194.7 264.6L194.8 264.9L195.2 265.1H195.8L196.3 264.9L196.4 264.8V264.7ZM195.4 263.6H194.8C194.3 263.6 193.8 263 193.8 263L194.1 263.6L195 264L195.4 263.6Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M319.9 256.1C319.6 259.1 316.6 260.8 315 261.9C314.072 262.609 313.291 263.492 312.7 264.5L312.1 266.3L311.9 267.4V267.8L312.1 269.5L312 272.9L314.1 271.4L315.7 270.8H316.1C316.1 270.8 314.4 272.4 313.8 274.2C313.1 276.1 311.8 280 309.5 281.2C307.2 282.4 305.7 282 304.9 282.7L304.1 283.6L303.1 284.9L302.3 285.9L301.6 286.5L301.1 286.8L300.9 288.2L300.4 290.1L301.4 289.7H302.5L301.9 290.7C301.8 291.2 302 294.4 299 296.3C296 298.2 288.3 297.9 288.3 297.9L286.9 298.5L285.5 299.5L284.3 300.9L284.2 301.2C284.2 301.2 283.2 302.4 282.5 302.8L280.3 304.3L282.1 304.4L284.9 305.6C284.9 305.6 283.1 305.6 281.9 306C280.7 306.4 275.4 309.5 272.9 309.4C270.2 309.4 266.5 305.6 266.5 305.6L264.9 304.4L262.1 303.8L258.6 303.6V303.2L258.7 302.6L261.7 302.7C263.4 302.9 263.9 303.5 265.3 303.7C266.244 303.824 267.204 303.721 268.1 303.4L272.8 299.6L277.5 298L279.3 298.2L280.1 298.4L280.8 298.6L280 299.6L278.8 300.3L279.4 300.8L282.4 300.3L283.4 300.6L283.6 300.7L284 299.7C284.4 299.2 286 297.9 286.8 297.4C287.467 297 287.8 296.733 287.8 296.6C288.1 296.4 289.1 293.9 289.1 293.9L289.2 292.6L292.5 289.5L294.7 287.1L295.7 284.4L295.6 283.9C295.6 283.9 296.3 284.7 296.2 286.4C296 288 295.833 288.733 295.7 288.6C295.5 288.4 297.9 287.1 299.1 286.6C300.1 286.2 300.767 286.067 301.1 286.2C301.738 285.825 302.284 285.312 302.7 284.7C303.4 283.7 303.5 283.5 303.5 283.1L303.6 280.9L303.4 275.2L305.4 271L308.2 268.5L308.7 268.2L308.4 269.2V270.2C308.4 270.2 309.8 268.4 310.5 268L311 267.8L311.6 266.2C311.8 265.2 311.8 263.7 311.8 263.7V261.4L311.4 259.6L310.1 256.1V251.5L309.1 250.2C309.1 250.2 310 250.1 311.1 251.7C311.857 252.922 312.366 254.281 312.6 255.7L315.3 247.6C315.3 247.6 316 248.6 316.5 250.1L317.2 252.8L318.2 250.6L318.3 251.4C318.5 252.1 320.1 253.1 319.9 256.1ZM266.1 308.1C266.1 308.1 265.5 306.9 263 305.6C261.569 304.914 260.057 304.41 258.5 304.1V305.1L262.5 306.8L264.5 308.4L266.1 308.1Z", fill: "#9CA168" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284.3 300.5C285.352 299.432 286.527 298.492 287.8 297.7C288.621 297.321 289.5 297.085 290.4 297C291.9 296.7 292.1 297 295.6 295C299.1 293 299.9 290.9 300.6 290.3C301.3 289.8 302.5 289.6 302.5 289.6L299.8 292.8C298.5 294.2 297.1 295.1 295.1 296.4C293.1 297.7 289.1 297.8 289.1 297.8C287.848 298.004 286.693 298.599 285.8 299.5C284.8 300.3 284.2 301.2 284.2 301.2C284.2 301.2 284 300.8 284.2 300.5H284.3ZM294 290.3C290.7 293.3 289.7 296.1 289.7 296.1L294 292.1C295.5 290.7 297.6 290.1 298.5 289.1C299.5 288.3 299.5 287.6 300.1 287.1L301.1 286.2C301.1 286.2 299.7 285.2 294 290.3ZM287.1 297.2C287.1 297.2 288.5 296.6 289.1 295.3C289.4 294.4 289.2 294.2 289.8 293.1C289.8 293.1 293.2 289.9 294.4 288.5C296.5 286 295.6 283.9 295.6 283.9C295.6 283.9 295.8 284.9 294.9 286.1C294 287.1 289.7 290.1 289.1 291.9C288.5 293.7 288.9 293.6 288.7 294.6C288.1 296.6 287.1 297.2 287.1 297.2ZM284.9 305.6C284.9 305.6 283.2 304.5 281.3 304.6C277.4 304.9 274.1 307.2 271.6 307.3C269 307.3 268 306.1 266 304.7C263.9 303.3 258.7 303.5 258.7 303.5V303.6L258.6 303.8C258.6 303.8 262.2 303.8 263.7 304.2C266.7 305.1 268.2 308.2 271.6 307.9C275.9 307.7 279.4 305 281.2 305C284.2 305 284.9 305.6 284.9 305.6ZM265.6 303.6C265.6 303.6 268.6 304.2 271 302.5C273.3 300.8 276.1 298.5 277.6 298.4C279.2 298.3 280.8 298.7 280.8 298.7C280.8 298.7 278.8 297.7 277.3 297.8C275.696 297.75 274.108 298.13 272.7 298.9C271.2 299.8 270.5 301.4 268.9 302.4C267.3 303.4 265.6 303.7 265.6 303.7V303.6ZM265.1 307.7L264.1 307.9C263.9 307.9 263.1 306.9 261.7 306.3C260.3 305.7 258.5 305.2 258.5 305.2C258.5 305.2 258.3 305.2 258.7 305.4L261.7 306.5C262.549 306.943 263.298 307.556 263.9 308.3C263.9 308.4 264.3 308.9 265.1 308.9C265.767 308.767 266.1 308.533 266.1 308.2C265.9 307.867 265.567 307.7 265.1 307.7ZM267.2 304.7C267.2 304.7 268.4 305.5 270.4 305.4C274.6 305.4 277.2 302.4 280 301.4C282.8 300.4 284.2 301.2 284.2 301.2V301C283.279 300.387 282.206 300.041 281.1 300C276.5 300.1 272.1 303 270.2 303.8C268.267 304.533 267.267 304.867 267.2 304.8V304.7ZM312 273C310.5 274.5 308.4 279.2 307.5 280.4C306.5 281.7 305.4 282.1 304.9 282.6L302.4 285.9C302 286.5 301.9 286.3 301.6 286.5C301.267 286.767 301.267 286.833 301.6 286.7C302.1 286.6 302.2 286.3 302.9 285.5C303.6 284.7 303.6 284.3 304.7 283.3C305.8 282.3 307.8 281.2 308.8 280C309.8 278.7 311.8 274 313 272.8C314.1 271.6 316.1 270.8 316.1 270.8C316.1 270.8 314.5 270.4 312 273ZM304.8 281.9C304.8 281.9 304.8 281 305.8 279.8C306.8 278.6 307.2 278.8 308 276.9L309.9 271.4C310.5 269.4 311.7 267.6 311.7 267.6C311.7 267.6 310.6 267.6 309.5 269.2C307.906 271.34 306.627 273.697 305.7 276.2C304.7 278.8 304.7 281.9 304.7 281.9H304.8ZM303.4 283.7C303.4 283.7 303.8 283.4 303.9 281.1C304 278.8 303.8 275.5 304.4 273.8C305.1 272.2 308.7 268.3 308.7 268.3C308.7 268.3 307.2 268.6 305.1 270.3C303.1 272.1 302.167 273.867 302.3 275.6C302.3 277.2 303.3 279 303.3 280.6L303.4 283.6V283.7ZM311.9 267.5L313.1 263.5C313.5 262.8 313.5 262.3 315.3 260.3C316.3 259.2 317.3 258.4 317.8 256.8C318.3 255.2 318.2 250.7 318.2 250.7C318.2 250.7 317.7 251.1 317.4 251.9C317.1 252.7 317.3 255.6 316.6 256.9C315.9 258.3 314.4 261.5 313.6 262.2C313.6 262.2 313.5 259.9 313.7 257.6C313.9 255.3 314.7 254.6 315.1 253.1C315.5 251.6 315.3 247.7 315.3 247.7C315.3 247.7 314 248.9 313.4 250.4C312.8 251.9 312.4 254.4 312.4 256.4C312.4 258.4 312.9 260 313 261.1C313.1 262.2 313.1 262.8 312.7 264L312.2 265.6L311.6 267.6L311.9 267.5ZM309.1 250.3C309.1 250.3 310.1 251.6 310 253.2C309.8 254.7 309.2 256.8 309.8 258.4C310.4 260 311.3 260.1 311.6 261.1C311.8 262 311.8 263.8 311.8 263.8C311.8 263.8 312.3 260.4 312 259.4C311.6 258.4 311.5 258.9 311 257.9C310.5 256.9 311 254.2 310.6 252.6C310.387 251.68 309.856 250.866 309.1 250.3Z", fill: "#717732" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.4 307.9C245.4 307.9 245.7 306.9 247.9 305.9C250.1 304.9 253.3 303.4 253.6 303.6C254 303.8 253.5 304.9 253.5 304.9L251.4 305.6L249.7 306.6L247.7 307.9H245.4Z", fill: "#9CA168" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251 302.1C248.1 302.2 246.6 302.9 246 303.1H245.1C244.5 302.9 243.9 302 243.9 302L243.3 301.5L243.2 303.5L239.2 299.9L238.7 302.3L238.2 303.3L234.2 299.5L234.3 302.5H233.3L230.3 300.5L229.5 300.9L230.5 302.6L226.8 302.9L226 303.5L225.3 304.4V304.7H226.7C227 304.5 227.2 304 227.3 304.2C227.4 304.4 227.5 305.2 228 305.2C228.5 305 230.2 303.8 231.4 304.3C232.7 305 229.6 305.9 230 306.8C230.3 307.8 232.5 307.4 233 307.1C233.5 306.8 235.3 304.7 236 305.5C237 306.5 234 307.5 234.5 308.5C235.1 309.6 236.7 309.4 237.5 308.9C238.3 308.4 240.2 305.6 240.6 306.2C241.3 307.2 239 308.3 239.6 309.2C240.2 310.1 241.5 309.2 242.3 308.5C243.1 307.8 243.5 306.5 244.7 305.8C245.8 305.2 245.7 305.5 246.1 305.4C246.4 305.4 247.3 304.5 247.3 304.5L250 303.4H251.4L252.1 303.8L253.5 304L253.6 302.8C253.6 302.8 252 302.1 250.9 302.1H251ZM229 302.1L229.5 301.1L229.2 300.6C229.2 300.6 228.2 300.1 227.3 299.2L225.7 297.9L224 296.8L223.4 294.5L223 293.9L222 294.3L220.6 289.4L220.3 288.5H219.7L218.6 291.5L217.3 289.6L217 285.6L216.2 286.5L215.2 287.5L213.4 283.8C213.4 283.8 213.2 283.8 213.1 284.1C213 284.4 212.9 285.5 213.1 286.2L210.6 284.4C208.933 282.8 208.166 282 208.3 282L207.5 280L208.3 278.3L208.7 276.3L206.9 277L206.6 272.4L206.3 271L204.2 274L203.4 272.8V269.8L202.8 269.7L201.9 271.3C201.9 271.3 201.1 269.6 200.7 269.3C200.8 268.6 200.9 267 200.5 265.7C200 264.1 199.5 263.2 199.6 261.9C199.8 260.5 200.4 260.4 200.3 259.9C200.3 259.2 199.3 260.2 199.7 259.4C200 258.7 202.7 256.9 202.2 256C201.6 255 198.9 257.4 199.5 255.8C200.2 254.2 202.7 254.2 202.9 251.9C202.9 250.6 200.4 252.9 200.2 252.1C200 251.4 201.8 250 201.8 249.1C201.8 248.1 202.1 248.1 201.6 247.6C201.1 247.1 199.6 249.5 199.6 249.5L197.9 248.9L197.3 251.3L196.8 253.3L194.7 252.1L195.2 254.6L195.7 257L193.6 256.4L194.7 258.5L196.2 260L197.2 261.3L197.8 261.6L198.8 262.6L199 263.8L199.5 265.3L199.6 266.8V269.1L199.5 269.9C199.1 269.9 198.5 269.3 198.2 269.7C197.9 270.2 199.4 271.3 199.2 271.7C198.9 271.9 196.6 271.2 196.5 271.9C196.4 272.6 196.7 273.6 198 273.9C199.3 274.2 202.2 274.9 201.7 275.5C201.2 276.1 198 273.7 198.2 275.5C198.225 276.098 198.43 276.675 198.786 277.156C199.143 277.637 199.635 278.001 200.2 278.2C201.1 278.5 204.3 278.2 204.2 278.9C203.9 279.6 201.5 278.6 201.2 279.7C200.9 280.8 203 281 203.4 281C203.8 281 205.1 281 205.7 281.4L209.1 284.6C210.1 285.5 212.2 286.9 212.8 287.3C212.2 287.3 210.9 287.1 210.7 287.6C210.5 288.1 215.6 290 214.1 290.6C212.6 291.2 211.1 289 210.6 290.3C210.1 291.6 211.6 292.7 212.4 293.3C213.2 293.7 217.7 293.3 216.9 294.3C215.9 295.3 212.7 293.6 212.6 294.9C212.5 296.2 214.8 298 216 297.9C217.1 297.9 218.4 296.1 218.9 297.1C219.4 298.1 218 298.5 219.1 298.7C220.2 298.9 221 297.7 222.3 297.9C223.5 298.1 225.5 298.9 226.7 299.9L228.9 302.2L229 302.1Z", fill: "#9CA168" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.7 307.3C247.366 307.433 247.7 307.567 247.7 307.7C247.7 307.7 249.1 306.6 250.4 305.9C251.6 305.2 253.4 304.9 253.4 304.9H253.6C253.6 304.9 251.3 305.6 250.3 306.3L247.8 308C247.733 308.267 247.266 308.433 246.4 308.5C245.733 308.433 245.4 308.233 245.4 307.9C245.4 307.567 245.833 307.367 246.7 307.3ZM253.5 303.9C253.5 303.9 252.8 303.9 252.5 303.6C251.869 303.209 251.142 303.001 250.4 303C249.199 303.067 248.063 303.564 247.2 304.4C247.2 304.4 247 304.9 246.1 305.4C246.433 305.4 246.933 305.133 247.6 304.6C248.482 303.969 249.519 303.589 250.6 303.5C251.4 303.5 251.966 303.7 252.3 304.1C252.7 304.4 253.5 304.3 253.5 304.3V303.9ZM213.1 287.4V286.8C213.1 286.8 212.5 286.6 211.4 285.8C210.1 285.1 207.3 282.9 207.3 282.9L209.6 285L212.8 287.3L213.1 287.4ZM241.6 307.6L242.8 305.8C243.666 304.667 244.166 304.1 244.3 304.1C244.3 303.9 244.133 303.5 243.8 302.9L243.6 301.9C243.6 301.9 243.9 302.7 244.4 303.1L245.4 303.8C245.4 303.8 246.4 303.7 246.4 303.5C246.4 303.3 246.333 303.133 246.2 303H245.3C244.3 302.5 243.9 301 243.3 301C242.7 300.9 243.1 302.6 242.8 302.6C241.8 302.6 241.2 299.1 238.8 299C237.3 298.9 237 299.2 236.9 299.6C236.8 300 238.9 302 238.2 302.3C237.5 302.6 235.4 299 233.8 299C232.2 299 232.1 299.5 232.2 299.9C232.3 300.2 234 300.5 233.6 301.6C233.2 302.7 231.6 299.9 230.2 300.1C228.8 300.3 228.6 300.4 228.5 300.8C228.4 301.2 229 301.8 228.8 301.9C228.6 302 227.8 302 227 302.5C226.3 303 225.3 304.4 225.3 304.4C225.3 304.4 226.2 303 227.5 302.9H231.9L231 302.2C230.5 301.8 230.1 300.9 230.1 300.9L231.5 302.2L233 303.2C233 303.2 234.4 303.2 234.5 303.4C234.633 303.6 234.433 303.967 233.9 304.5L232.5 305.8L234.1 304.6L235.3 303.6C235.3 303.6 236.3 303.8 236.4 303.7C236.533 303.767 236.333 303.333 235.8 302.4L234.5 300.4C234.5 300.4 235.3 301.1 236.1 302.2C237 303.2 236.8 303.8 237.1 303.8L238.3 304C238.633 304 238.533 304.433 238 305.3L237 307.3L238.3 305.7C238.9 305.1 239.3 304.3 239.5 304.3H240.7L240 303C239.6 302 239.5 300.8 239.5 300.8C239.5 300.8 239.9 302 240.5 302.8L241.6 304.4H242.9C242.966 304.667 242.8 305.133 242.4 305.8L241.6 307.6ZM224.4 297.6L225.7 297.9C225.7 297.9 224.4 297.1 224 295.9C223.7 294.9 224 292.5 223.4 292.5C222.8 292.5 222.5 294.3 222 293.9C221.4 293.6 222.2 290.4 221.5 289.1C220.9 287.7 219.5 286.8 219.1 287.3C218.7 287.8 218.9 290.7 218 290.1C217.1 289.5 218 286.9 217.8 285.8C217.6 284.7 216.8 283.8 216.3 284.1C215.8 284.4 216.5 286.5 215.7 286.6C214.8 286.6 215 285.1 214.7 284.9C214.4 284.7 214.1 285.2 214 284.9C213.8 284.6 213.9 283.6 213.4 283.7C213 283.7 213.1 284.7 213.2 285.1L213.8 286.5C213.9 286.8 214.6 287.2 214.5 287.5C214.433 287.767 214.166 287.9 213.7 287.9H212.3L213.7 288.2C214.1 288.2 214.9 288.1 215.1 288.4L216.2 290.1C216.2 290.1 216.5 289.4 216.6 288.2V286.1C216.6 286.1 216.9 287.4 216.9 288.2L216.6 290.6C216.6 290.6 217.5 291.3 217.2 291.6H214.9C213.9 291.6 212.3 291.3 212.3 291.3C212.3 291.3 213.7 291.9 214.7 292.1C215.7 292.3 217.7 292.3 217.7 292.3L219.1 293.9C219.1 293.9 219.8 292.8 219.9 291.6V289L220.3 291.2C220.287 292.22 220.118 293.231 219.8 294.2L218.3 295C217.3 295.3 215.4 295.5 215.4 295.5C215.4 295.5 217.2 295.8 218.4 295.5C219.7 295.2 219.8 294.8 220.2 295L220.9 295.6L221.9 296.4L221.1 296.9L219.9 297.5L221.7 296.9L222.6 296.6L223 296.8L222.9 295.8L222.6 294.4C222.6 294.4 223.1 295 223.2 295.7L223.3 296.9C223.3 296.9 223.4 297.1 224.3 297.5L224.4 297.6ZM199.5 269C199.5 269 199.8 267.6 199.8 266C199.8 264.5 198.8 262.1 198.5 261.9L198.3 261.4L199 260.4L198 261.1L197 260.7L196.4 260L197.4 260.5L197.9 260.6L197.6 259.1L196 258.3C195 257.7 194 256.8 194 256.8L196.2 258L197.5 258.3C197.5 258.3 198.4 258.1 198.8 257.8L200.1 256.9C200.1 256.9 199.3 257.4 198.7 257.5L197.5 257.7L197.2 255.8L196.3 254.9C195.6 253.9 195.1 252.7 195.1 252.7C195.1 252.7 195.8 253.6 196.4 254C197 254.4 197.5 255.2 197.5 255.2L198.8 254.4L201.1 252.8L198.9 253.8L197.6 254.4V253.2L198.2 251.9C198.1 251.5 197.8 251.7 197.7 251.4L198.1 249.3V250.3C198.1 250.7 198.233 250.933 198.5 251C198.9 251.1 201.1 248.9 201.3 248.5C201.6 248.1 202 247 200.9 247.5C199.8 248 200 248.8 199.1 248.8C198.8 248.8 198.5 247.6 198.1 247.8C197.8 248.1 197.1 248.8 196.9 249.8C196.7 250.6 197.1 251.8 196.6 252.2C196.1 252.6 195.6 250.8 194.8 251C193.8 251.3 193.6 252.6 193.8 253C193.9 253.6 195.9 256 195.3 256.2C194.7 256.4 193.1 254.2 192.3 255.8C191.3 257.3 194.9 258.9 195.3 259.3C195.8 259.7 195.3 259.8 196 260.6C196.7 261.4 197.5 261.6 197.9 262.1C198.3 262.6 199.6 265.1 199.6 266.7V269H199.5ZM208.9 282.6C208.9 282.6 208 281.6 208.3 280C208.6 278.4 209.8 275.4 209.3 275C209 274.6 207.7 276.8 207.4 276.3C207.1 275.8 208.1 272.9 207.6 271.7C207.1 270.5 207 269.7 206 269.8C205 269.9 204.5 273.3 204 272.8C203.5 272.1 204.3 270.6 204 269.8C203.733 269 203.4 268.667 203 268.8C202.4 268.9 202.2 270.5 201.8 270.5C201.4 270.5 200.8 268.5 200.1 268.9C199.4 269.1 201.9 272.4 201.9 272.4C201.9 272.4 202.4 272 202.6 271.4L203.1 270.3C203.1 270.3 203.3 271.3 203.1 271.8L202.8 273.2C202.733 273.267 202.166 273.267 201.1 273.2C200.1 273.1 199.2 272.7 199.2 272.7C199.2 272.7 199.9 273.1 201 273.4L203.2 274L203.9 275L204.8 276.1L205.4 274.5L206.4 271.7C206.4 271.7 206.2 273.7 205.9 274.7L205.4 277.2C205.4 277.2 204.4 277.2 203.3 276.9L200.3 276.3L203.3 277.3L205.6 277.9L206.6 279.3L207.4 278.2C207.9 277.5 208.2 276.7 208.2 276.7C208.2 276.7 208 277.8 207.7 278.5L207.1 279.6L205.7 279.8H203.7C204.869 280.17 206.077 280.405 207.3 280.5C207.3 280.5 207.3 280.9 207.8 281.6L208.9 282.6Z", fill: "#717732" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.6 312.7C251.6 312.7 251.1 312.1 250.4 311.7L249.4 311.5H249.1L249.8 309.9L254.2 305.6L254.9 301.3H257.6V307.2L258.4 307.5L263.4 310.5V311.8L262.6 312.1L262 312.4L260.2 312.6L256.9 310.2L255.5 308.8L253.1 311.9L251.5 312.7H251.6Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255 301.3V302.3C255 302.9 255 306.3 254.8 306.8C254.7 307.3 252.3 308.2 250.8 309.4C249.5 310.6 249.5 311.5 249.5 311.5L248.2 311.9C247.334 312.3 246.9 312.567 246.9 312.7C246.9 312.9 247.4 310.5 249.7 308.6C251.9 306.6 253 306.4 253.2 306.1C253.4 305.8 253.2 302 253.2 301.7C253.334 301.433 253.534 301.333 253.8 301.4H255.1L255 301.3ZM260.7 313.9L261.3 313L262 312.4L261 311.8C259.7 311.3 259 311.4 258.2 310.8L256.5 309.1L255.3 310.1L256.7 311.8C257.3 312.4 258.8 312.6 259.5 313L260.7 314V313.9Z", fill: "#016848" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.2 301.3L258.7 301.4L258.9 301.9C258.9 302 258.9 305.1 258.7 306.1C258.56 306.998 258.218 307.853 257.7 308.6C257.3 308.9 255.3 310.6 254.4 311.6C253.4 312.5 252.5 313.8 252.5 313.8L251.9 313L251.3 312.3C251.956 311.159 252.883 310.197 254 309.5C255.5 308.5 256.9 307.3 257.1 305.6C257.3 303.9 257.2 301.3 257.2 301.3Z", fill: "#CD202A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M266 312C266 312 265.7 311.7 264.6 311.6C263.4 311.6 263.4 311.8 263.4 311.8C263.4 311.8 262.7 311 261.8 310.4C260.8 309.7 260 309.8 259 309.1C258 308.4 257.4 307.4 257.4 307.4L258.2 305.8C258.2 305.8 259.1 307.1 260 307.8C260.9 308.5 263 309.1 263.7 309.8C264.4 310.3 266 312 266 312Z", fill: "#CD202A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M276 293C276 293 273 292 273.3 291C273.6 290 279.9 288.3 279.9 288.3L280 286.6C280 286.6 279 286.6 277.5 287.1C275.243 287.86 272.881 288.265 270.5 288.3C268.966 288.3 267.966 288.2 267.5 288L244.3 286.6H243.1C240.1 286.3 238.2 281.8 238.2 281.8L236.8 282C236.8 282 237.2 284.3 236.5 284.5C235 284.9 225.4 279.7 225.4 279.7L224.8 281.8C224.8 281.8 230.8 285 230.6 286.1C230.4 287.3 228.6 287.2 228.6 287.2L229.4 288.6C229.7 288.6 239.1 289.1 239.3 291.9C239.3 293.1 237 293.8 237 293.8L237.8 294.8V295.2C237.8 295.2 243 295.2 244.5 296.1C245.9 296.9 246.7 298.1 248.5 299.1C253.697 299.917 258.984 299.984 264.2 299.3C266.3 298.7 267.6 296.3 271.1 295.3C274.6 294.2 275.7 294.1 275.7 294.1L276 293Z", fill: "#30C2DC", stroke: "#0872A7", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.6 290.3C228.539 290.3 229.3 289.539 229.3 288.6C229.3 287.661 228.539 286.9 227.6 286.9C226.662 286.9 225.9 287.661 225.9 288.6C225.9 289.539 226.662 290.3 227.6 290.3Z", fill: "white", stroke: "#0872A7", strokeWidth: "0.8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.2 282.5C238.139 282.5 238.9 281.739 238.9 280.8C238.9 279.861 238.139 279.1 237.2 279.1C236.261 279.1 235.5 279.861 235.5 280.8C235.5 281.739 236.261 282.5 237.2 282.5Z", fill: "white", stroke: "#0872A7", strokeWidth: "0.8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M277.2 294.9C278.139 294.9 278.9 294.139 278.9 293.2C278.9 292.261 278.139 291.5 277.2 291.5C276.261 291.5 275.5 292.261 275.5 293.2C275.5 294.139 276.261 294.9 277.2 294.9Z", fill: "white", stroke: "#0872A7", strokeWidth: "0.8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M220.1 278.3C219.6 279.5 221.7 281.9 223.2 282.2C224.733 282.4 225.6 282.1 225.8 281.3C226 280.5 225.9 279.833 225.5 279.3C224.5 278 220.7 277 220.1 278.3Z", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M224.8 280.2C224.8 279.4 223.5 278.7 222.8 278.7C222.1 278.7 221.1 278.7 221.3 279.1C221.5 279.5 223.5 280.1 223.5 280.3C223.5 280.5 222.9 280.8 223.2 281.1C223.6 281.3 223.967 281.267 224.3 281C224.7 280.8 224.867 280.533 224.8 280.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238.2 294.6C238.5 295.7 237.6 296.3 236.5 296.8C235.4 297.3 233.1 297 232.5 296.1C232.1 295.1 233.5 293.7 234.8 293.4C236.2 293.1 237.8 293.6 238.2 294.6Z", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.8 295.3C236.3 295.2 236.3 295.9 236.7 295.9C237.1 295.9 237.4 295.2 237.3 294.8C237.1 294.2 236.6 293.867 235.8 293.8C235.2 293.8 233.4 295.4 233.6 295.8C233.8 296.2 234.134 296.267 234.6 296C234.9 295.9 235.4 295.3 235.8 295.3Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M279.4 288.8C280.4 290.2 282.2 288.9 282.7 288.4C283.2 287.9 284.7 287 284.1 286.2C283.5 285.2 282.4 285.3 281.7 285.4C281 285.5 279.7 286.4 279.4 286.9C279 287.433 279 288.1 279.4 288.9V288.8Z", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M279.7 288C279.7 288 279.8 286.5 281.2 286.4C281.9 286.4 282 286.6 282.6 287C283.2 287.4 283.4 286.5 283.4 286.5C283.4 286.5 283.4 287.5 282.4 287.6C281.5 287.6 281.9 287.2 280.9 287C280.1 287 279.7 288 279.7 288Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.5 285.1L256.8 284.7H251.8L254.5 292.7L257.8 297.3L259 297.7L261.5 297.6L262 296.3L261 288.7L257.5 285.1Z", fill: "#F9AA51", stroke: "#953220", strokeWidth: "0.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M248.5 285.6L248.6 284.7L250.1 284.6L251.8 284.7C251.9 284.7 253.8 287 254.3 288.5C254.9 289.9 255.7 292.3 256.5 293.8L259 297.8H255.8L254.3 297.3L249.7 290.1L248.5 285.6Z", fill: "#F9AA51", stroke: "#953220", strokeWidth: "0.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.6 284.6L248.6 284.7C248.8 284.8 250.9 286.7 251.7 288.9C252.5 291.1 252.1 291.5 253.2 293.9C254.2 296.2 255.8 297.9 255.8 297.9C255.8 297.9 252.6 297.9 250.8 297.7C249 297.5 248.5 297.4 248.1 296.9L246.7 295.9H244.9L245.4 293.4L244.9 287.9V285L246.6 284.6ZM265.3 286.1L262.3 284.9L256.8 284.6L257.2 287.4C257.4 288.8 258.4 292 259.2 293.6C260.2 295.2 261.1 297.1 261.6 297.6C262.1 298.1 265.2 296.7 265.2 296.7L267.3 296.4L267 294.1L266.7 293.4L267.2 287L266.8 286L265.3 286.1Z", fill: "#F9AA51", stroke: "#953220", strokeWidth: "0.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.7 286.1C245.7 286.8 246.4 286.9 246.7 286.8C246.8 286.8 247.5 286.5 247.5 285.6C247.5 284.7 246.9 283.9 245.7 283.8C244.6 283.8 243.7 285.2 243.7 286.2C243.7 287.2 244.7 287.7 244.7 288.1C244.7 288.1 243.7 289 243.7 290.6C243.7 292.2 245.1 293.4 245.1 293.4C245.1 293.4 243.7 294.5 243.7 295.6C243.7 296.7 244.7 297.5 245.7 297.5C246.7 297.5 248 296.8 248 296C248 295.2 247.2 294.6 246.6 294.6C246 294.667 245.7 294.9 245.7 295.3M266.2 286.6C266.134 287.2 265.867 287.433 265.4 287.3C264.7 287.1 264.5 287.1 264.5 286.2C264.5 285.3 265.6 284.9 266.4 284.9C267.2 284.9 268.4 285.9 268.4 287.1C268.4 288.3 267.4 289.1 267.4 289.1C267.4 289.1 268 289.4 268 290.9C268 292.4 267 293.5 267 293.5C267 293.5 268.3 294 268.3 295.6C268.3 297.2 267.3 297.7 266.5 297.7C265.7 297.7 264.4 297.2 264.4 296.2C264.4 295.2 265.1 294.7 265.6 294.7C266.1 294.7 266.6 295.3 266.6 295.9", fill: "#F9AA51" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.7 286.1C245.7 286.8 246.4 286.9 246.7 286.8C246.8 286.8 247.5 286.5 247.5 285.6C247.5 284.7 246.9 283.9 245.7 283.8C244.6 283.8 243.7 285.2 243.7 286.2C243.7 287.2 244.7 287.7 244.7 288.1C244.7 288.1 243.7 289 243.7 290.6C243.7 292.2 245.1 293.4 245.1 293.4C245.1 293.4 243.7 294.5 243.7 295.6C243.7 296.7 244.7 297.5 245.7 297.5C246.7 297.5 248 296.8 248 296C248 295.2 247.2 294.6 246.6 294.6C246 294.667 245.7 294.9 245.7 295.3M266.2 286.6C266.134 287.2 265.867 287.433 265.4 287.3C264.7 287.1 264.5 287.1 264.5 286.2C264.5 285.3 265.6 284.9 266.4 284.9C267.2 284.9 268.4 285.9 268.4 287.1C268.4 288.3 267.4 289.1 267.4 289.1C267.4 289.1 268 289.4 268 290.9C268 292.4 267 293.5 267 293.5C267 293.5 268.3 294 268.3 295.6C268.3 297.2 267.3 297.7 266.5 297.7C265.7 297.7 264.4 297.2 264.4 296.2C264.4 295.2 265.1 294.7 265.6 294.7C266.1 294.7 266.6 295.3 266.6 295.9", stroke: "#953220", strokeWidth: "0.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.6 295L247.9 295.4C248.033 295.8 248.233 296.133 248.5 296.4C249.2 297.1 254.3 297.3 255.9 297.3C257.5 297.3 262.1 297.5 263 297C264 296.4 264 295.6 264.5 295.2L265.2 294.8L264.6 295.4V296.4L264.9 297.1C264.9 297.1 264.9 297.4 264.3 297.7C263.833 298.033 263.233 298.233 262.5 298.3C261.7 298.3 251.9 298.3 250.3 298.1C248.7 297.9 248.8 297.8 248.3 297.5L247.6 296.8L247.9 296.1L247.6 295ZM263.6 285.5L264.4 285.9C264.4 285.9 263.7 286.1 263.1 287.7C262.5 289.2 263.1 289.7 262.6 289.9H258L257.3 288.1L263.6 285.5Z", fill: "#953220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M277.1 284.9C277.1 284.9 276.4 284.6 276.1 283.9C275.7 283.4 275.4 282.6 275.7 282.5C276.1 282.433 276.367 282.7 276.5 283.3C276.767 284.3 276.967 284.833 277.1 284.9ZM285.5 282.6L286.2 283.6L287.2 284.1C287.2 284.1 286 284.1 285.6 283.8L284.8 282.6H285.5Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M288 283.3C288 283.3 287.3 283.7 286.7 283.5C286.033 283.233 285.733 282.967 285.8 282.7C286 282.433 286.233 282.5 286.5 282.9C286.9 283.2 288 283.3 288 283.3ZM292.2 279.7C292.2 279.7 291.6 280.3 291.2 280.3C290.8 280.3 290 280.1 290 279.9C290 279.7 291 279.6 291.2 279.6L292.2 279.7ZM285.9 271.4C285.9 271.4 284.9 271.6 284.6 272.1C284.333 272.7 284.4 273.033 284.8 273.1C285.4 273.2 285.3 272.5 285.3 272.4C285.3 272.2 285.9 271.4 285.9 271.4ZM281.7 273.7C281.7 273.7 281 274.1 280.8 274.5C280.6 274.9 280.5 275.7 280.8 275.8C281.3 275.8 281.4 275.1 281.5 274.8L281.7 273.7Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M274.2 278.7L271.9 281.1C271.9 281.1 277.2 284.1 281.3 283.9C285.3 283.9 289.9 280.6 290.3 279.9C290.5 279.3 290.3 276.5 289.8 275.6C289.3 274.7 286.4 272.6 285.4 272.6C284.4 272.7 282.4 274.2 280.7 275.8C279 277.4 279.1 279 276.7 278.8L274.2 278.7Z", fill: "#8CBEBF", stroke: "#04534E", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M273.6 279.7C273.6 279.7 279.3 280.5 280.9 279.1C282.5 277.6 284.3 274.8 285.4 274.1C286.6 273.567 287.167 273.367 287.1 273.5L288.3 274.5L289.8 275.6L290.2 278.3V279.8L288.5 281.2L285.2 282.7L282.2 283.7L279.5 283.6L274.2 282L272.8 281.1L272.5 280.8L273.6 279.7Z", fill: "#0C8489" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M282.2 276.4C282.267 276 282.533 275.867 283 276C283.7 276.2 283.9 276 283.9 276.5C283.9 277 283.4 277.7 282.9 277.7C282.6 277.7 282.2 276.9 282.2 276.4ZM284.5 277.8C284.5 277.4 284.767 277.2 285.3 277.2C285.9 277.2 286.3 277.8 286.3 278.2C286.3 278.6 285.9 279 285.4 279C284.9 279 284.5 278.3 284.5 277.8ZM283.7 281.2C283.7 280.733 284 280.533 284.6 280.6C285.5 280.7 285.4 280.8 285.4 281.3C285.4 281.8 285 282.3 284.4 282.3C284 282.233 283.767 281.9 283.7 281.3V281.2ZM280.7 280.2C280.7 279.6 281.3 279.4 281.7 279.4C282.233 279.467 282.533 279.8 282.6 280.4C282.533 281.067 282.267 281.433 281.8 281.5C281.2 281.367 280.867 280.933 280.8 280.2H280.7ZM276 280.8C276 280.495 276.121 280.202 276.337 279.987C276.552 279.771 276.845 279.65 277.15 279.65C277.455 279.65 277.747 279.771 277.963 279.987C278.179 280.202 278.3 280.495 278.3 280.8C278.3 281.105 278.179 281.397 277.963 281.613C277.747 281.829 277.455 281.95 277.15 281.95C276.845 281.95 276.552 281.829 276.337 281.613C276.121 281.397 276 281.105 276 280.8Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284.5 277.8C284.633 277.4 284.9 277.2 285.3 277.2C285.7 277.2 285.9 277.433 285.9 277.9C285.9 278.367 285.733 278.6 285.4 278.6C284.933 278.533 284.633 278.267 284.5 277.8ZM283.7 281.1C283.767 280.633 284.1 280.4 284.7 280.4C285.167 280.4 285.433 280.633 285.5 281.1C285.5 281.767 285.2 282.033 284.6 281.9C283.7 281.7 283.7 281.5 283.7 281.1ZM280.7 280.1C280.7 279.6 281.6 279.4 281.9 279.4C282.167 279.4 282.267 279.667 282.2 280.2C282.067 280.867 281.867 281.167 281.6 281.1C281.133 281.033 280.867 280.7 280.8 280.1H280.7ZM282.2 276.4C282.2 276 282.4 275.833 282.8 275.9C283.4 276 283.3 276 283.3 276.5C283.3 276.967 283.133 277.233 282.8 277.3C282.333 277.3 282.133 276.967 282.2 276.3V276.4ZM276 280.4C276.067 279.8 276.433 279.467 277.1 279.4C277.9 279.4 278.367 279.633 278.5 280.1C278.5 280.7 277.7 281.6 277 281.6C276.3 281.6 276 280.9 276 280.4Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M278.2 279.5C278.2 279.5 277.4 279.6 277 280C276.6 280.467 276.533 280.8 276.8 281C277.066 281 277.233 280.833 277.3 280.5L278.2 279.5ZM281.9 278.7C281.9 278.7 281.2 279.2 281.1 279.7C281.1 280.3 281.166 280.567 281.3 280.5C281.5 280.3 281.6 279.967 281.6 279.5C281.5 279.3 281.9 278.7 281.9 278.7Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M282.5 279.5C282.5 279.5 282.1 279.5 281.7 279.8C281.3 280.2 281.167 280.433 281.3 280.5C281.567 280.5 281.767 280.4 281.9 280.2C281.9 280 282.5 279.5 282.5 279.5ZM283.3 275.1L282.8 275.6C282.467 275.933 282.4 276.233 282.6 276.5C282.8 276.5 283 276.333 283.2 276C283.4 275.533 283.467 275.233 283.4 275.1H283.3ZM286.2 276.9C286.2 276.9 285.5 277 285.2 277.4C284.933 277.733 284.933 277.933 285.2 278C285.467 278.067 285.633 277.933 285.7 277.6C285.7 277.3 286.2 276.9 286.2 276.9ZM285.7 280.3C285.7 280.3 285.6 280.8 285.1 281C284.767 281.4 284.533 281.467 284.4 281.2C284.267 280.867 284.367 280.667 284.7 280.6L285.7 280.3Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M290.3 278C290.3 278 290.6 279.6 289.3 280.3C287.9 281.1 284.1 283.8 280.5 283.5C276.9 283.1 272.8 281.1 272.8 281.1L272.3 281.4L273.2 281.8L276 282.9L279.1 283.9H281.1L282.8 283.8L286 282.7L288.7 281.3L290.1 280.3L290.4 279.8V278.2L290.3 278Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M219.9 257.8C219.9 257.8 220.7 258.5 220.7 259.1C220.567 259.7 220.367 259.933 220.1 259.8C219.9 259.8 219.9 259.1 219.9 258.8V257.8ZM226.1 263.5C226.1 263.5 225.8 264.5 225.4 264.6C224.934 264.6 224.7 264.433 224.7 264.1C224.8 263.9 225.2 264.1 225.4 263.9L226.1 263.5ZM212.7 264.3C212.7 264.3 213 264.9 213.5 265C214.1 265 214.334 264.833 214.2 264.5H213.6L212.7 264.3ZM215.1 269C215.1 269 215.6 269.6 216.2 269.6C216.424 269.64 216.656 269.603 216.856 269.494C217.056 269.385 217.213 269.21 217.3 269C217.3 268.9 216.5 268.9 216.3 269.1C216 269.3 215.1 269 215.1 269ZM219.3 272.6C219.3 272.6 220.3 272.4 220.6 272.1C220.867 271.7 220.934 271.367 220.8 271.1C220.6 270.7 220.4 271.4 220.3 271.7L219.3 272.6Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M226.1 269.7C226.1 269.7 226.8 264.8 222.9 261.4C219 258 216.4 258.8 215 260.1C213.7 261.3 212.5 265.5 216.7 269.1C220.9 272.7 226 271.6 226 271.6L226.1 269.7Z", fill: "#8CBEBF", stroke: "#04534E", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M214 264.6C214 264.6 214 261.9 215.3 261.1C215.948 260.756 216.659 260.545 217.389 260.479C218.12 260.414 218.857 260.496 219.556 260.719C220.255 260.943 220.902 261.304 221.459 261.782C222.016 262.259 222.472 262.843 222.8 263.5C224.8 267.5 224.8 269.5 224.3 271.5H222.1L218.7 270.1L215.9 268L214 264.6Z", fill: "#0C8489" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M225.6 270.4C225.6 270.4 224.9 271.2 223.5 271.1C222 271.1 215.5 269.3 213.8 263.4V264.7L213.9 265.1L214.4 266.3L215.8 268.3L217.5 269.8L219.7 271L221.3 271.4L223.3 271.8H224.5L225.5 270.4H225.6Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M222.1 268.7C222.1 268.3 222.333 268.133 222.8 268.2C223.2 268.2 223.6 268 223.6 268.5C223.6 269 223.3 269.8 222.9 269.8C222.4 269.8 222.1 269.2 222.1 268.8V268.7ZM222.4 265.6C222.4 265.2 222.666 264.967 223.2 264.9C224 264.8 223.9 265.2 223.9 265.6C223.9 265.933 223.666 266.133 223.2 266.2C222.533 266.2 222.266 266 222.4 265.6ZM219.4 269C219.4 268.667 219.7 268.5 220.3 268.5C220.766 268.5 221.033 268.667 221.1 269C221.2 269.5 220.3 269.7 219.8 269.7C219.3 269.7 219.4 269.3 219.4 269ZM219.1 265.3C219.1 264.967 219.333 264.867 219.8 265C220.266 265 220.566 265.2 220.7 265.6C220.9 266.2 220.2 266.7 219.7 266.7C219.4 266.7 219.1 265.8 219.1 265.3ZM216.4 266C216.4 265.6 216.6 265 217.1 265C217.6 265 218.1 265.6 218.1 266C218.1 266.4 217.8 266.633 217.2 266.7C216.3 266.8 216.3 266.3 216.3 266H216.4ZM216.9 262.7C216.9 262.367 217.133 262.233 217.6 262.3C218.266 262.3 218.6 262.5 218.6 262.9C218.466 263.433 218.1 263.767 217.5 263.9C216.9 263.9 216.9 263.1 216.9 262.7ZM219.9 262.4C219.9 262.133 220.166 262.033 220.7 262.1C221.366 262.167 221.633 262.4 221.5 262.8C221.5 263.2 220.9 263.6 220.5 263.6C220.1 263.6 219.9 262.8 219.9 262.4Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M216.9 262.6C216.9 262.267 217.1 262.1 217.5 262.1C218.033 262.033 218.266 262.2 218.2 262.6C218.2 263 217.966 263.233 217.5 263.3C217.033 263.367 216.833 263.133 216.9 262.6ZM216.3 265.8C216.3 265.333 216.5 265.067 216.9 265C217.3 264.933 217.533 265.1 217.6 265.5C217.6 266.1 217.366 266.367 216.9 266.3C216.5 266.367 216.3 266.2 216.3 265.8ZM219.8 262.4C219.8 262.133 220.033 262.033 220.5 262.1C220.9 262.033 221.133 262.167 221.2 262.5C221.133 262.833 220.9 263 220.5 263C220.1 263 219.9 262.8 219.9 262.4H219.8ZM219.2 265.5C219.2 265.967 219.433 266.233 219.9 266.3C220.366 266.233 220.633 265.967 220.7 265.5C220.8 264.8 220.2 264.7 219.9 264.7C219.433 264.767 219.2 265.033 219.2 265.5ZM222.5 265C222.566 265.467 222.833 265.733 223.3 265.8C223.966 265.8 224.233 265.533 224.1 265C224.033 264.6 223.766 264.367 223.3 264.3C222.6 264.2 222.5 264.7 222.5 265ZM219.3 269C219.3 268.6 219.533 268.367 220 268.3C220.466 268.233 220.7 268.433 220.7 268.9C220.566 269.3 220.233 269.567 219.7 269.7C219.433 269.633 219.3 269.4 219.3 269ZM222.2 268.5C222.2 268.167 222.433 268 222.9 268C223.5 267.933 223.733 268.1 223.6 268.5C223.466 269.1 223.2 269.367 222.8 269.3C222.4 269.233 222.166 268.967 222.1 268.5H222.2Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M223 263.6C223 263.6 223.4 264.1 223.5 264.6L223.4 265.5C223.2 265.5 223.033 265.267 222.9 264.8V263.5L223 263.6ZM220.4 260.9C220.4 260.9 220.7 261.3 220.7 261.7C220.7 262.1 220.7 262.5 220.4 262.5C220.266 262.433 220.2 262.2 220.2 261.8L220.4 260.9ZM217.4 261.3C217.4 261.3 217.7 261.7 217.7 262.1C217.7 262.5 217.7 262.9 217.5 262.9C217.3 262.9 217.3 262.5 217.3 262.2L217.4 261.3Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M216.4 261.8L217.1 262.2C217.5 262.533 217.634 262.767 217.5 262.9C217.234 263.033 217.067 262.967 217 262.7L216.4 261.8ZM218.7 264.9C218.7 264.9 219.2 264.9 219.6 265.2C219.934 265.533 220.034 265.8 219.9 266C219.7 266.067 219.434 265.933 219.1 265.6L218.7 264.9ZM215.9 264.9L216.7 265.1C216.967 265.367 217.034 265.6 216.9 265.8C216.767 265.8 216.6 265.7 216.4 265.5L215.9 264.9ZM222.6 266.9L222.7 267.9C222.767 268.5 222.734 268.833 222.6 268.9C222.4 269 222.3 268.3 222.3 267.9L222.6 266.9Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M221.8 268L222.5 268.3C222.7 268.567 222.7 268.733 222.5 268.8L222.2 268.4L221.8 268ZM218.8 268.1L219.6 268.3C219.8 268.633 219.866 268.967 219.8 269.3C219.666 269.367 219.5 269.233 219.3 268.9L218.8 268.1Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M217.7 259C217.7 259 215.1 259.6 214.7 261.3C214.1 263 214.1 264.9 214.1 264.9L213.7 262.7L214.3 261.4L215 260.1L216.2 259.4L217.2 259H217.7ZM225.9 269C225.9 269 226.1 268.4 225.4 266.4C224.6 264.3 223 261.6 223 261.6L224.2 263L225.2 264.6L225.7 266L226.1 267.3V268.6L225.9 269Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.5 265.7C228.5 265.7 229.5 266.3 229.5 266.7V267.2C229.1 267.133 228.834 266.967 228.7 266.7L228.5 265.7ZM224.7 276C224.7 276 225.1 275.2 225.7 275C226.367 274.667 226.734 274.6 226.8 274.8C227 275 226.5 275.5 226.1 275.6L224.7 276ZM231.1 278.5C231.1 278.5 231.8 278.2 232.1 277.7C232.5 277.3 232.634 277 232.5 276.8C232.234 276.733 231.9 276.9 231.5 277.3L231.1 278.5ZM230.4 277.9C230.4 277.9 230.6 277.1 230.9 276.8C231.1 276.533 231.334 276.433 231.6 276.5C231.8 276.7 231.8 276.933 231.6 277.2L230.4 277.9Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.2 273C241.2 273 237.2 267.2 230.9 266.9C225.9 266.6 224.4 271.1 224.6 272.4C224.7 273.8 226.6 276.7 233.3 277.1C240 277.5 241 274.1 241.3 273.8C241.5 273.7 241.2 273 241.2 273Z", fill: "#8CBEBF", stroke: "#04534E", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.5 269C236.5 269 238.1 270.3 238.8 271.3C239.5 272.3 239.7 273 239.3 273.1C238.9 273.2 235.3 269.9 232.3 269.2C229.3 268.5 226.8 269.2 226.2 270.6C225.6 272 225.8 274.1 227.2 275C228.6 275.9 234.9 277 234.9 277L237.9 276.5L239.7 275.5L240.1 274.5L240.5 273.1L240.7 272.6L239.2 270.9L236.5 269Z", fill: "#0C8489" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.4 269.8C231.333 270.2 231.067 270.4 230.6 270.4C230 270.4 229.767 270.2 229.9 269.8C229.9 269.4 230.133 269.167 230.6 269.1C231.067 269.033 231.333 269.267 231.4 269.8ZM227.7 271.1C227.7 270.833 228 270.733 228.6 270.8C229.5 270.9 229.3 271.1 229.3 271.4C229.3 271.8 228.6 272.4 228.3 272.2C227.833 271.867 227.633 271.533 227.7 271.2V271.1ZM231.7 273.3C231.7 272.767 231.967 272.467 232.5 272.4C233.233 272.4 233.567 272.7 233.5 273.3C233.3 274.1 232.9 274.433 232.3 274.3C231.4 274.1 231.6 273.8 231.6 273.3H231.7Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.7 274.2C228.767 273.8 229.034 273.633 229.5 273.7C229.9 273.767 230.167 274.033 230.3 274.5C230.5 275.2 229.8 275.2 229.5 275.2C229.034 275.067 228.767 274.733 228.7 274.2Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234 275.6C234 275.267 234.167 275.067 234.5 275C234.967 275 235.233 275.167 235.3 275.5C235.3 275.967 235.067 276.2 234.6 276.2L234 275.6ZM236.4 273.8C236.4 273.467 236.6 273.333 237 273.4C237.533 273.4 237.833 273.633 237.9 274.1C237.833 274.5 237.5 274.7 236.9 274.7C236.5 274.633 236.333 274.3 236.4 273.7V273.8Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.1 269.5C231.1 269.833 230.967 270 230.7 270C230.234 270 229.967 269.833 229.9 269.5C229.9 269.167 230.067 269 230.4 269C230.867 269 231.1 269.167 231.1 269.5ZM229.2 271C229.134 271.4 228.834 271.6 228.3 271.6C227.5 271.6 227.8 271.4 227.8 271C227.8 270.733 228 270.6 228.4 270.6C228.8 270.533 229.067 270.667 229.2 271ZM230.1 274.1C230.1 274.433 229.934 274.633 229.6 274.7C229.067 274.7 228.767 274.5 228.7 274.1C228.6 273.5 228.9 273.6 229.2 273.6C229.734 273.6 230.034 273.767 230.1 274.1ZM233.2 273.1C233.067 273.5 232.734 273.733 232.2 273.8C231.4 273.9 231.7 273.2 231.7 272.8C231.7 272.467 231.934 272.267 232.4 272.2C232.8 272.267 233.067 272.567 233.2 273.1ZM237.9 274.1C237.767 274.367 237.434 274.467 236.9 274.4C236.634 274.333 236.467 274.067 236.4 273.6C236.4 273.3 236.4 273 237.3 273.1C237.634 273.233 237.834 273.567 237.9 274.1ZM235.1 275.4C235.1 275.8 234.9 276.033 234.5 276.1L233.9 275.5C233.9 275.1 234.1 274.933 234.5 275C234.9 275.067 235.1 275.233 235.1 275.5V275.4Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.6 273.5C235.6 273.5 236.2 273.3 236.6 273.4C237.066 273.4 237.266 273.5 237.2 273.7L236.6 273.9L235.6 273.5ZM232.9 275.8L233.8 275.4C234.266 275.4 234.466 275.5 234.4 275.7C234.4 275.967 234.233 276.067 233.9 276L232.9 275.8ZM231.1 271.8C231.1 271.8 232.2 272.3 232.5 272.8C232.766 273.133 232.766 273.333 232.5 273.4C232.3 273.533 232.1 273.433 231.9 273.1L231.1 271.8Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M230.8 273.3L232.1 273C232.5 273 232.666 273.067 232.6 273.2C232.533 273.333 232.4 273.433 232.2 273.5L230.8 273.2V273.3ZM228.1 273.3C228.1 273.3 229.1 273.4 229.3 273.7C229.5 273.9 229.533 274.1 229.4 274.3C229.2 274.367 228.966 274.333 228.7 274.2C228.3 274 228.1 273.3 228.1 273.3Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228 274.6C228 274.6 228.3 274.1 228.7 274H229.5C229.5 274.333 229.3 274.533 228.9 274.6H228ZM227.3 270.6L228.2 270.8C228.534 271.067 228.634 271.267 228.5 271.4H227.8C227.4 271 227.2 270.733 227.2 270.6H227.3ZM229.3 268.2C229.3 268.2 230.3 268.5 230.5 268.9C230.767 269.3 230.834 269.567 230.7 269.7L229.9 269.3L229.3 268.2Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240 275C240 275 238.1 276.6 233.8 276.5C229.5 276.4 225.5 274.5 224.6 272.5L225 273.5L226 274.7L229 276.3L232.4 277L235.1 277.2L237.6 276.8L239.6 275.8L239.9 275.3L240.1 275H240ZM240.6 273L238.9 271L233.9 267.6L237.1 269L239.2 270.8L240.7 272.4L240.6 273Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240.8 269C240.8 269 241.9 269.5 242.1 269.8L242.5 270.3C242.5 270.3 242.2 271 242 270.7L241.4 270L240.8 269ZM244.1 267.3C244.1 267.3 245.1 267.8 245.4 268.3C245.733 268.833 245.8 269.167 245.6 269.3C245.4 269.3 244.7 268.7 244.6 268.5L244.1 267.3Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245 267.1C245 267.1 246 267.8 246.2 268.1C246.534 268.5 246.6 268.833 246.4 269.1C246 268.967 245.667 268.7 245.4 268.3L245 267.1ZM250.6 268.4C250.6 268.4 251.3 268.7 251.4 269.4V270.4L250.8 269.8V269.3L250.6 268.4ZM252 268.9C252 268.9 252.6 269.5 252.7 269.9C252.767 270.3 252.7 270.533 252.5 270.6C252.167 270.6 252 270.4 252 270V269V268.9ZM242.2 280.9C242.2 280.9 242.7 281.1 243.1 280.9C243.634 280.7 243.867 280.433 243.8 280.1C243.8 279.767 243.6 279.733 243.2 280L242.8 280.6L242.2 280.9ZM247.6 282.4C247.6 282.4 248.3 282.3 248.8 281.7C249.334 281.167 249.467 280.833 249.2 280.7C248.8 280.567 248.5 280.7 248.3 281.1L247.6 282.4ZM252 282.5L253 281.8C253.467 281.467 253.6 281.133 253.4 280.8C253.134 280.667 252.9 280.7 252.7 280.9L252.6 281.5L252 282.5Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253.4 282.5C253.4 282.5 254 281.8 254.1 281.4C254.234 280.867 254.234 280.6 254.1 280.6C253.767 280.667 253.534 280.867 253.4 281.2V282.5Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M239.9 275.3C239.9 273.3 242.7 268.8 245.9 268.9C247.2 268.9 249.9 269.6 251.9 270.6C253.7 271.4 254.3 272.2 255.4 272.6C256.6 272.8 258.4 272.6 258.4 272.6L262.4 272.1L259.2 276.7L258.2 277.7C258.2 277.7 257.2 279.7 254.2 280.7C251.5 281.8 246.7 281 244.5 280.5C242.3 280 239.8 277.9 239.9 275.3Z", fill: "#8CBEBF", stroke: "#04534E", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M239.9 275.3H240.1C240.1 274.9 240.267 274.333 240.6 273.6C241.11 272.479 241.822 271.462 242.7 270.6C243.7 269.667 244.734 269.167 245.8 269.1C247.861 269.371 249.878 269.909 251.8 270.7L253.8 271.9C254.72 272.592 255.85 272.945 257 272.9L258.4 272.8L261.9 272.4L259.1 276.6L257.9 277.6C257.055 279.002 255.746 280.063 254.2 280.6C253.2 280.933 252.034 281.1 250.7 281.1C248.4 281.1 245.9 280.6 244.6 280.3C243.474 279.992 242.443 279.408 241.6 278.6C240.727 277.751 240.194 276.614 240.1 275.4V275.3H239.7C239.709 275.977 239.856 276.645 240.131 277.264C240.406 277.883 240.804 278.439 241.3 278.9C242.188 279.774 243.292 280.395 244.5 280.7C245.9 281 248.3 281.5 250.7 281.5C251.959 281.513 253.21 281.31 254.4 280.9C257.3 279.8 258.3 277.9 258.3 277.8L258.1 277.7L258.2 277.9L259.4 276.9L262.8 271.9L258.3 272.4H257L255.5 272.3C254.967 272.167 254.467 271.933 254 271.6C253.6 271.2 252.934 270.8 252 270.4L248.7 269.2C247.567 268.867 246.634 268.7 245.9 268.7C244.967 268.7 244.134 268.967 243.4 269.5C242.343 270.236 241.456 271.191 240.8 272.3C240.207 273.202 239.831 274.228 239.7 275.3H239.9Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.2 275.9C258.867 276.167 258.5 276.267 258.1 276.2C257.6 276.2 248.8 270.8 246.1 271C243.3 271.2 240.7 272.4 240.6 275.2C240.5 278 241.2 278.1 241.8 278.9C242.4 279.7 247.8 280.9 247.8 280.9H251L253.7 280.5L256 279.2L257.3 278.2L258.2 277.2L259.2 275.9Z", fill: "#0C8489" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.2 274.5C245.2 275.1 244.933 275.433 244.4 275.5C243.867 275.567 243.567 275.267 243.5 274.6C243.5 274.133 243.767 273.9 244.3 273.9C244.967 273.767 245.267 273.967 245.2 274.5ZM246.2 272C246.2 271.6 246.5 271.4 247.1 271.4C248 271.4 248 271.5 248 272C248 272.5 247.6 272.8 247 272.8C246.4 272.8 246.1 272.5 246.1 272H246.2ZM251.4 273.5C251.467 273.033 251.733 272.767 252.2 272.7C252.867 272.7 253.133 272.967 253 273.5C252.8 274.3 252.6 274.2 252.2 274.2C252.014 274.17 251.841 274.089 251.699 273.965C251.558 273.841 251.454 273.68 251.4 273.5ZM252.4 276.7C252.4 276.1 252.733 275.767 253.4 275.7C253.867 275.7 254.133 275.967 254.2 276.5C254.2 277.233 254 277.567 253.6 277.5C252.933 277.5 252.567 277.233 252.5 276.7H252.4ZM249.9 278.7C249.9 278.3 250.2 278.067 250.8 278C251.7 277.9 251.6 278.3 251.6 278.8C251.6 279.2 251.333 279.433 250.8 279.5C250.333 279.5 250.033 279.267 249.9 278.8V278.7ZM245 277.9C245.067 277.5 245.333 277.267 245.8 277.2C245.921 277.155 246.051 277.14 246.179 277.156C246.307 277.173 246.429 277.22 246.535 277.293C246.641 277.367 246.728 277.465 246.787 277.579C246.847 277.694 246.878 277.821 246.878 277.95C246.878 278.079 246.847 278.206 246.787 278.321C246.728 278.435 246.641 278.533 246.535 278.607C246.429 278.68 246.307 278.727 246.179 278.744C246.051 278.76 245.921 278.745 245.8 278.7C245.601 278.663 245.419 278.567 245.276 278.424C245.133 278.281 245.037 278.099 245 277.9Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.2 274.4C245.2 274.867 244.9 275.133 244.3 275.2C244.101 275.163 243.919 275.067 243.776 274.924C243.633 274.781 243.537 274.598 243.5 274.4C243.567 273.933 243.833 273.733 244.3 273.8C244.767 273.867 245.067 274.033 245.2 274.3V274.4ZM247.7 271.9C247.7 272.3 247.533 272.533 247.2 272.6C246.6 272.6 246.267 272.333 246.2 271.8C246.2 271.4 246.433 271.167 246.9 271.1C247.433 271.1 247.7 271.367 247.7 271.9ZM252.9 273.2C252.833 273.6 252.567 273.833 252.1 273.9C251.5 273.9 251.267 273.667 251.4 273.2C251.4 272.867 251.633 272.667 252.1 272.6C252.767 272.6 253.033 272.8 252.9 273.2Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M250.1 275.4C250.1 276.067 249.867 276.4 249.4 276.4C248.734 276.4 248.4 276.1 248.4 275.5C248.4 275.033 248.7 274.8 249.3 274.8C250.2 274.8 250.1 274.8 250.1 275.4Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.4 277.8C246.4 278.2 246.133 278.433 245.6 278.5C245.414 278.47 245.241 278.389 245.099 278.265C244.958 278.141 244.854 277.98 244.8 277.8C244.866 277.333 245.2 277.1 245.8 277.1C246.2 277.1 246.4 277.3 246.4 277.7V277.8ZM250 275.3C249.963 275.499 249.867 275.681 249.724 275.824C249.581 275.967 249.398 276.063 249.2 276.1C249.001 276.063 248.819 275.967 248.676 275.824C248.533 275.681 248.437 275.499 248.4 275.3C248.437 275.101 248.533 274.919 248.676 274.776C248.819 274.633 249.001 274.537 249.2 274.5C249.398 274.537 249.581 274.633 249.724 274.776C249.867 274.919 249.963 275.101 250 275.3ZM254.2 276.3C254.2 276.967 253.933 277.3 253.4 277.3C253.135 277.3 252.88 277.195 252.693 277.007C252.505 276.82 252.4 276.565 252.4 276.3C252.4 275.9 252.633 275.7 253.1 275.7C253.766 275.7 254.1 275.933 254.1 276.4L254.2 276.3ZM251.5 278.6C251.5 279 251.233 279.233 250.7 279.3C250.033 279.3 249.733 279.067 249.8 278.6C249.866 278.133 250.166 277.9 250.7 277.9C251.166 277.9 251.433 278.133 251.5 278.6Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.8 276C251.8 276 253.1 275.8 253.4 276C253.6 276.333 253.6 276.6 253.4 276.8L252.7 276.7L251.8 276ZM250.5 271.7C250.5 271.7 251.5 272 251.9 272.4C252.233 272.867 252.333 273.167 252.2 273.3C252.067 273.433 251.833 273.367 251.5 273.1L250.5 271.7ZM247.5 273.7C247.5 273.7 248.7 274.4 248.9 274.7C249.233 275.1 249.3 275.4 249.1 275.6C249.1 275.7 248.4 275.6 248.3 275.3L247.5 273.7Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247 274.6C247 274.6 248.3 274.8 248.6 275.1C249 275.233 249.2 275.367 249.2 275.5C249.2 275.633 249.067 275.767 248.8 275.9L247.8 275.5C247.8 275.3 247 274.7 247 274.7V274.6ZM245.4 270.8C245.4 270.8 246.8 271 247.1 271.2C247.433 271.533 247.433 271.867 247.1 272.2C246.767 272.267 246.5 272.133 246.3 271.8C246.3 271.5 245.4 270.8 245.4 270.8ZM242.5 272.8C242.5 272.8 243.8 273.4 244.2 274C244.533 274.333 244.533 274.533 244.2 274.6C243.8 274.8 243.4 274.1 243.4 274L242.5 272.8Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242.3 274.4L243.4 274.3C243.933 274.167 244.266 274.2 244.4 274.4C244.266 274.667 244 274.767 243.6 274.7L242.3 274.4ZM249.1 278.9C249.1 278.9 250.1 278.3 250.4 278.4C250.866 278.4 251.066 278.5 251 278.7C250.8 278.9 250.6 278.967 250.4 278.9H249.2H249.1ZM244.3 278.2C244.3 278.2 244.7 277.7 245 277.6L245.6 277.7C245.533 277.967 245.366 278.133 245.1 278.2H244.3Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M258 277.3C258 277.3 256.8 278.9 255 279.7C253 280.5 251.7 280.7 249.1 280.6C247.139 280.565 245.216 280.05 243.5 279.1C242.2 278.477 241.068 277.551 240.2 276.4C239.9 275.8 240.5 277.4 240.5 277.4L242 279.4L244 280.2L246.7 280.9L249.3 281.2H251.3L253.7 280.8L255.3 280.3L256.3 279.6L257.1 279L258 277.3ZM255.6 272.6C255.6 272.6 254.9 272.8 253.3 271.9C251.7 270.9 249.8 269.6 246.3 269.6C242.7 269.6 241.5 272 241.3 272.2L242.9 270.1L244.5 269.1L245.8 269H247L248.6 269.5L250 269.9L251.7 270.5L253.2 271.3L254.9 272.2L255.6 272.6ZM260.4 273.6H257.7C257.234 273.667 257 273.8 257 274L256.8 274.4L256.1 273L259 272.6L260.6 273.2L260.4 273.7V273.6Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256.6 288.3C256.733 288.767 257 289.033 257.4 289.1H258.8L261.6 288.9L262.6 287.8L263.2 285.2L264 284.2L266.6 282.7L268.9 282.1L270.4 281.9L272.4 281.2L273.9 280.5L274.5 279.5L275.2 278L274.5 276L272.9 274L270.3 272.9H268L265.5 273.8L261.2 274.8C261.2 274.8 258.7 275.8 257.7 277.8C256.7 279.6 256.7 280.1 256.6 282.6C256.5 285.1 256.6 288.3 256.6 288.3Z", fill: "#0C8489", stroke: "#04534E", strokeWidth: "0.4" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.7 287.4C258.6 287.4 257.9 286 258.9 284.4C259.9 282.8 260.9 280.7 261.3 280.7C261.5 280.833 261.733 280.9 262 280.9C262.3 280.8 263 280.2 263 280.1C262.866 279.767 263.1 279.2 263.7 278.4C264.4 277.8 265.5 277 265.9 276.9C266.366 276.767 266.633 276.767 266.7 276.9C266.8 277.1 266.5 277.4 266.8 277.6C267.266 277.667 267.7 277.5 268.1 277.1L268.2 276.4C268.1 276.4 268.7 275.9 269.7 276.1C270.7 276.3 270.7 276.3 270.8 276.6C270.9 277 270.4 277 270.5 277.3V277.7C270.6 277.9 270.8 278.5 271.5 278.5C272.1 278.367 272.366 278.233 272.3 278.1L272.5 277.8C272.5 277.8 272.7 277.4 272.5 277.2C272.233 276.933 272.233 276.867 272.5 277C272.8 277 273.7 278.4 274.1 277.9C274.366 277.167 274.433 276.633 274.3 276.3L272.7 274.1L270.3 273.2L267.1 273.5L263.9 275.3L261 276.8C261 276.8 260.9 279.2 260.4 278.8C259.8 278.3 259.1 277.2 258.9 277.5L257.9 280.5C257.6 281.4 256.7 284 256.9 285C256.9 286 257.4 287.4 257.7 287.4Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M260.6 283.6L260 283.9L259.8 284.7C259.9 285 260.4 285.3 260.4 285.3H260.8L261.5 285.1C261.5 285.1 261.8 284.8 261.8 284.4C261.8 284.067 261.7 283.9 261.5 283.9L260.6 283.6ZM265.6 279.5C265.133 279.433 264.9 279.5 264.9 279.7V280.2C264.9 280.2 264.9 280.8 265.2 280.9C265.5 281 266 281.2 266.2 281C266.4 280.867 266.533 280.633 266.6 280.3C266.6 279.9 266 279.7 266 279.7L265.6 279.5ZM269.6 280.5C269.533 280.3 269.3 280.2 268.9 280.2C268.5 280.2 268.333 280.5 268.4 281.1C268.6 281.567 268.933 281.7 269.4 281.5C269.8 281.5 269.7 280.9 269.7 280.8L269.6 280.4V280.5ZM258 281.2C258.067 281.6 258.4 281.833 259 281.9C259.234 281.905 259.462 281.827 259.645 281.681C259.828 281.535 259.953 281.329 260 281.1C260 280.8 259.7 281.4 259.3 281.5H258.4L258.1 281.2H258Z", fill: "#8CBEBF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.8 284.4C261.8 284.4 261.8 284.9 261.5 285.2L260.7 285.4C260.433 285.4 260.233 285.333 260.1 285.2L259.8 284.6C259.8 284.6 260.2 285.3 260.8 285.1C261.4 284.9 261.8 284.4 261.8 284.4ZM272.5 277.8C272.5 277.8 272.5 278.3 272.1 278.5C271.7 278.7 271.433 278.767 271.3 278.7C271.033 278.7 270.833 278.6 270.7 278.4C270.2 277.7 270.5 277.2 270.5 277.2C270.5 277.2 270.8 278.5 271.5 278.4C272.2 278.3 272.5 277.8 272.5 277.8ZM263 280C263 280 262.6 281 262 281C261.4 281 261.4 280.9 261.4 280.7H262C262.3 280.7 263 280.1 263 280.1V280ZM264.8 279.9C264.8 279.9 264.8 280.6 265 280.9C265.2 281.1 265.466 281.2 265.8 281.2C266.133 281.2 266.366 281.1 266.5 280.9V280.3L266.4 280.6L265.8 280.9C265.533 280.9 265.3 280.8 265.1 280.6L264.8 279.9ZM268.2 276.4C268.2 276.4 268.4 276.9 268 277.4C267.6 277.9 266.8 277.6 266.8 277.6C266.8 277.6 267.4 277.7 267.8 277.4C268.1 277 268.2 276.4 268.2 276.4Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.4 288.9C257.4 288.9 261.6 288.9 261.9 288.2C262.3 287.7 261.6 285.4 264.1 283.6C266.6 281.8 268.6 281.8 270 281.7C271.3 281.7 274.2 280.7 274.8 278.1C275.1 276.5 272.9 276.4 272.1 274.9C271.3 273.4 269.2 274 269.1 274C269.1 274 266.7 274 265.6 275C265 275.7 265.1 276.5 264.7 276.8C264.5 277.2 261.7 276.8 261.4 277.3C261.1 277.8 261.4 278.7 261.2 278.9C261 279.1 260.4 278.3 260.4 278.3L260.6 276L264.1 274L268.1 271.7H270.9L273.7 273.2L275.1 274.8C275.1 274.8 275.4 275.4 275.5 276.6L275.4 278.2C275.002 279.329 274.275 280.314 273.313 281.027C272.351 281.74 271.197 282.148 270 282.2C267.6 282.3 265.4 283.4 264.4 284.2C263.3 285 262.7 288.5 262.7 288.9C262.7 289.3 257.5 289.1 257.5 289.1L257.4 288.9Z", fill: "#04534E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.1 280.7C258.834 280.9 258.634 280.867 258.5 280.6C258.3 279.9 258.8 278.9 258.8 278.9V280.1L259.2 280.4L259.1 280.7ZM261.8 280.1C261.6 280.1 261.6 279.4 261.8 279.1L263.1 278L262.6 279.2C262.5 279.5 262.1 280.2 261.8 280.2V280.1ZM260.8 284.4C260.6 284.4 260.5 284.133 260.5 283.6C260.5 282.8 261.3 282.3 261.3 282.3L261.1 283.3V284C261.1 284.267 261 284.4 260.8 284.4Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M262.7 283.2L261.9 283.9C261.434 284.233 261.067 284.4 260.8 284.4C260.5 284.4 260.9 283.8 261.1 283.7L262.7 283.2ZM266.3 278.1L265.6 279.1C265.334 279.7 265.334 280.033 265.6 280.1C265.8 280.3 266.1 279.5 266.1 279.3L266.3 278.1Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267.6 279.9C267.6 279.9 267.3 279.6 266.7 279.4C266.1 279.333 265.767 279.4 265.7 279.6C265.7 279.8 265.3 280 265.5 280.2L266.2 279.9L266.9 279.8H267.7L267.6 279.9ZM266.9 276.4C267.1 276.4 267.367 276.233 267.7 275.9L268.2 274.9L267.4 275.4C267 275.733 266.834 276.067 266.9 276.4ZM272.4 276.2L271.4 276.9C271.134 277.233 271.034 277.5 271.1 277.7C271.367 277.767 271.6 277.633 271.8 277.3L272.4 276.3V276.2ZM270.8 279.9C270.8 279.9 270.6 280.4 270.1 280.7C269.6 281 269.1 281.1 269.1 281C268.967 280.733 269.034 280.533 269.3 280.4L270 280.2L270.8 279.9Z", fill: "#231F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234.379 271.172C235.634 271.365 236.883 270.016 237.167 268.159C237.451 266.303 236.663 264.643 235.407 264.451C234.152 264.259 232.904 265.607 232.62 267.464C232.335 269.32 233.123 270.98 234.379 271.172Z", fill: "url(#paint0_radial_4989_137735)" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.3 261.5L234.9 265L236 264.8L236.7 261.8L236.3 261.5Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 260C236.334 260 236 260.333 236 261C235.934 261.467 236.167 261.8 236.7 262C237.3 262 237.634 261.7 237.7 261.1C237.767 260.5 237.5 260.167 236.9 260.1L237 260ZM295.8 268.6L292.4 271.8L293.8 272.1L296.1 269.1L295.8 268.6Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M297.3 267.3C296.634 267.1 296.067 267.267 295.6 267.8C295.513 267.92 295.453 268.059 295.426 268.205C295.399 268.351 295.405 268.502 295.443 268.645C295.481 268.789 295.551 268.922 295.648 269.036C295.744 269.149 295.865 269.239 296 269.3C296.5 269.6 297.3 269.3 297.6 268.8C297.688 268.68 297.747 268.541 297.774 268.395C297.801 268.249 297.796 268.099 297.757 267.955C297.719 267.811 297.649 267.678 297.553 267.565C297.456 267.451 297.336 267.361 297.2 267.3H297.3ZM210.2 250.4L212 254.3L212.8 253.3L210.8 250.3L210.2 250.4Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M209.5 248.7C209.387 248.787 209.294 248.896 209.227 249.022C209.16 249.147 209.12 249.285 209.111 249.427C209.101 249.569 209.122 249.712 209.172 249.845C209.222 249.978 209.3 250.099 209.4 250.2C209.867 250.733 210.367 250.8 210.9 250.4C211.013 250.313 211.106 250.204 211.174 250.078C211.241 249.953 211.281 249.815 211.29 249.673C211.299 249.531 211.279 249.388 211.229 249.255C211.179 249.122 211.101 249.001 211 248.9C210.922 248.78 210.818 248.678 210.696 248.602C210.575 248.525 210.438 248.476 210.296 248.457C210.154 248.438 210.009 248.45 209.872 248.492C209.734 248.534 209.608 248.605 209.5 248.7Z", fill: "#FCCA3E", stroke: "#AA8C30", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.3 260.2C236.9 260.2 236.1 260.5 236.1 261.1C236.167 261.633 236.434 261.9 236.9 261.9H236.3L236.1 261.5L235.9 261.1L236 260.6L236.3 260.2L236.7 260.1H237L237.3 260.2Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.5 262.5C236.5 262.5 236.3 262.5 236.1 262.8L235.5 263.6L236.2 261.7L236.7 261.9L236.5 262.5ZM297.5 267.6C297.2 267.3 296.1 267.4 295.8 268C295.6 268.667 295.767 269.1 296.3 269.3C296.8 269.5 296.1 269.3 296.1 269.3L295.6 268.9L295.5 268.5V267.9L295.9 267.5L296.5 267.2H297L297.3 267.4L297.6 267.6H297.5Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M295.5 269.8H294.9L293.7 270.5L295.6 268.8L296 269.3L295.5 269.8ZM209.9 248.5C209.6 248.8 209.3 249.7 209.7 250.1C209.881 250.255 210.112 250.34 210.35 250.34C210.589 250.34 210.819 250.255 211 250.1C211.4 249.8 211 250.3 211 250.3L210.4 250.6H210L209.5 250.4L209.2 249.9V249.3L209.3 248.8L209.6 248.6L209.9 248.5Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M211.2 251C211.2 251 211 251.2 211.1 251.6L211.3 252.8L210.3 250.6L210.8 250.4L211.2 251Z", fill: "#AA8C30" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M212.036 258.936C212.967 260.755 214.718 261.72 215.947 261.091C217.176 260.462 217.418 258.477 216.487 256.658C215.556 254.839 213.805 253.874 212.576 254.503C211.347 255.132 211.105 257.117 212.036 258.936Z", fill: "url(#paint1_radial_4989_137735)" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M210 257C210 257 210.8 257.2 211.2 257C211.6 256.667 211.8 256.433 211.8 256.3L212 255.6L211.2 254.4H210.4C210.4 254.2 210.334 254.033 210.2 253.9C210 253.9 208.9 255.2 209.1 255.4C209.3 255.6 209.4 255.3 209.5 255.4V256.4L210 257Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M211.2 254.5C211.2 254.7 211.7 255.3 211.9 255.3H212.8C212.9 255.3 213.5 254.8 213.5 254.5L213.4 253.9C213.3 253.7 213.4 253.1 213.1 253C212.967 253 212.867 252.933 212.8 252.8L212.6 252.3C212.5 252 210.6 253.1 210.8 253.3L211.2 253.5V254.5Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M215.4 254L215.3 252.6C215.033 252.6 214.833 252.5 214.7 252.3C214.833 252.233 214.933 252.1 215 251.9C215.1 251.6 213 252 213 252.2C213.2 252.5 213.5 252.3 213.5 252.5L213.1 253L213.3 253.9L213.5 254.3L214 254.4H215.1L215.4 254ZM232.9 264.3C232.9 264.3 233.2 264.9 233.6 265H234.3C234.5 265 234.7 264.9 234.9 264.7L235.2 263.6L234.7 263L234.9 262.6C234.9 262.4 233.3 262.6 233.3 262.8C233.3 263 233.5 262.9 233.5 263.1L232.9 263.6V264.3Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235 263.6V264.6L235.5 265.1H236.4L236.7 264.6L237.1 264L237 263.6C237.133 263.533 237.233 263.4 237.3 263.2C237.4 262.9 235.6 262.4 235.6 262.6L235.7 263C235.7 263 235.1 263.4 235.1 263.6H235Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.8 266C238 265.9 238.6 265.3 238.6 265L238.5 264.6L238.9 264.5C238.9 264.4 237.6 263.2 237.6 263.5C237.5 263.7 237.8 263.8 237.6 263.9H237.2L236.7 264.6L236.6 264.9L236.7 265.3L237.4 266H237.8ZM290.7 270.4C290.7 270.4 290.7 271 291 271.4L291.6 271.7H292.2C292.4 271.7 292.9 271 292.9 270.8V270.1L293.1 269.9C293.2 269.7 291.8 269 291.7 269.3V269.6L291 269.8L290.7 270.4Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M292.7 270.8L292.2 271.4V272.1L293.1 272.5L293.5 272.3C293.834 272.3 294.067 272.2 294.2 272V271.7L294.7 271.5C294.8 271.4 293.7 270.2 293.6 270.3V270.6L292.7 270.8Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M293.2 273.8H294.2L294.5 273.4L294.8 273.5C295 273.5 294.8 272 294.7 272.1C294.567 272.167 294.5 272.267 294.5 272.4C294.3 272.4 294.167 272.3 294.1 272.1L293.4 272.2C293.2 272.2 293.067 272.267 293 272.4L292.9 272.7V273.6L293.2 273.8Z", fill: "#E92736" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M211.3 255.3C211.5 255.5 211.3 256.1 211.1 256.3C211 256.5 210.1 256.3 210.1 256.1V255.4C210.233 255.2 210.466 255.033 210.8 254.9C211.066 254.967 211.233 255.1 211.3 255.3ZM211.6 254.1C211.533 254.433 211.6 254.633 211.8 254.7C211.8 254.9 212.5 255 212.8 254.9C212.8 254.9 213.2 253.8 213 253.6C212.866 253.467 212.666 253.433 212.4 253.5L211.6 254.1ZM213.8 253.1V253.7C213.8 253.7 214.3 254.1 214.6 254.1C214.8 254.1 214.9 253.3 214.9 253.1C214.9 252.9 214.9 253 214.7 252.9L213.8 253.1ZM234.7 264.1C234.7 264.4 234.1 264.6 233.9 264.6C233.7 264.6 233.4 263.9 233.5 263.8C233.5 263.667 233.633 263.567 233.9 263.5H234.6L234.7 264.1ZM235.5 263.6C235.366 263.667 235.3 263.833 235.3 264.1C235.3 264.2 235.5 264.7 235.7 264.8C235.9 264.9 236.7 264.4 236.7 264.2L236.4 263.8L235.5 263.6ZM237.5 264.4C237.3 264.467 237.166 264.6 237.1 264.8L237.3 265.5C237.633 265.5 237.9 265.4 238.1 265.2V264.9L237.5 264.4ZM292.3 271H291.5C291.3 271 291.3 270.1 291.5 270.1L291.9 270C292.1 270 292.266 270.133 292.4 270.4L292.3 271ZM293.1 271L292.6 271.2V272C292.7 272.1 293.6 272.2 293.6 272C293.8 272 293.7 271.6 293.7 271.6L293.1 271ZM294 272.6H293.5L293.2 273.2C293.2 273.4 293.7 273.5 293.8 273.5C293.933 273.5 294.033 273.433 294.1 273.3L294 272.6Z", fill: "#F7E204" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M287.658 276.891C288.324 277.629 290.06 277.146 291.535 275.813C293.011 274.48 293.666 272.802 293 272.064C292.333 271.326 290.597 271.809 289.122 273.142C287.647 274.475 286.991 276.154 287.658 276.891Z", fill: "url(#paint2_radial_4989_137735)" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.6 223.4C228.6 223.4 225.6 223.7 223.4 223.4C221.4 223 221.8 217.5 221.7 217.4C221.7 217.2 220.4 215.9 220.7 214.7C220.9 213.5 224.7 210.3 225.3 210.1C225.7 210 226.5 210.3 226.5 210.3C226.5 210.3 227.5 209.3 227.8 209.3C228.1 209.3 228.5 209.9 228.4 210.1C228.2 210.4 226.9 211.1 226.8 211.8C226.8 212.4 226.667 213 226.4 213.6C226 214.2 225.3 215 225.2 215.5C225 216.1 225 216.467 225.2 216.6C225.6 216.8 226.9 216.6 228 216.1L229.7 215.1C229.9 215.1 229.1 216.4 227.9 216.9C226.7 217.4 225.9 218 225.2 217.9C225.2 217.9 224.6 219.5 226.6 219.6C228.7 219.7 229.9 219.2 229.9 219.2L228.6 223.4ZM216.6 236.2C216.6 236.2 218.3 236.8 218.3 238.6C218.3 240.4 216.5 241.9 216.6 245.1C216.6 248.3 217.1 248.3 221.3 251.7C221.4 251.7 222.3 252.7 222.5 253.7C222.8 254.7 223.5 260.7 227.5 260.7C231.5 260.7 232.1 258.2 232.1 258.2L230.4 255.7C230.4 255.7 229 256.1 228.2 255.9C227.797 255.761 227.427 255.538 227.117 255.244C226.806 254.951 226.562 254.595 226.4 254.2C225.9 253.2 225.8 250.9 225.1 249.9C223.4 247.4 220.4 246.9 220.4 244.3C220.4 241.6 222.3 241.3 221.7 238.2C221.1 235.1 217.4 233.5 217.4 233.5L215.9 232.9L215.4 236L216.6 236.2Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.8 214.1C229.1 213.8 228.3 210.3 228.3 210.3L227.4 211C227.4 211 228 211.8 228 212.6C228 213.4 227.8 214.1 227.8 214.1Z", fill: "#F1A720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M230.2 249.2L229.5 248.6C229.1 248.3 226.9 246.6 227.3 241.6C227.7 235.8 236 232.8 236.5 230.5C237.2 227.9 239.1 226.8 232.4 221.6L230.8 223.5L233.6 225.5C233.6 225.5 234.2 225.2 234.2 226C234.2 226.7 233.5 227.4 233.2 228C233.2 228.5 229 231.4 228.7 231.7L226.3 233.7C226.3 233.7 225.2 234.7 224.2 236.9C223.2 239.1 223.7 241.9 223.7 241.9C223.7 241.9 223.7 248.1 230.2 249.2Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M226.2 252.4L226.6 254.6L225.3 255.1H224.7L224.3 255.2L223.3 256.2H223L222.8 255.5L222.7 254.4L223.9 254.9H224.4L224.7 254.8L225.2 253.6L226.2 252.4ZM222.2 252.8L221.7 252L220.9 251.3L221.9 250.8H222.9L222.7 252L222.2 252.8ZM224.5 249.3C224.5 249.3 225.1 249.6 225.3 250.1L225.8 251.1L224.2 251L223.1 250.6L223.8 249.6L224.5 249.3ZM223.9 258.9C223.9 258.9 223.6 258.7 223.4 258.2L223.1 256.9L224.1 256.7L225.3 257.2H225.6L225.3 257.8L224.2 258.8L223.9 258.9ZM227.9 255.6C227.9 255.6 227.1 255.3 226.9 254.9L226.7 254.5L226.4 255.7L226 256.9L226.1 257.1L227.1 256.8L227.7 256.1L227.9 255.6ZM224.2 259.4L225.2 260L226.2 260.4L226.8 259.9L227.2 258.9L227.3 258.8L224.8 259L224.2 259.4ZM227.7 258.4L229.8 257.2L229.9 256.1L229.5 255.8H228.3L228 257.2L227.7 258.5V258.4ZM226.2 260.4C226.2 260.4 227.7 261.1 230.2 260.2C231.267 259.6 231.734 259.267 231.6 259.2L230.6 258.8L229.6 259.6L226.2 260.4ZM224.2 244.2L223.9 243.2L223.8 242.2L224.5 242.6L225.6 243.4L224.9 244L224.2 244.2ZM226 247.2L225.3 246.4L224.8 245.4L225.6 245.6L226.5 246.1L226.1 247.2H226Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M221.3 213.7C221.1 214.2 220.9 215.1 221.6 215.3C222 215.3 223.6 215.3 225.3 213.3C226.1 212.3 226.1 211.3 226.1 211.3L226.5 210.3C226.5 210.3 225.8 209.8 224.7 210.5L221.3 213.7Z", fill: "#C6C7A6" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M226 211.2C226.166 211.2 226.3 211.066 226.3 210.9C226.3 210.734 226.166 210.6 226 210.6C225.835 210.6 225.7 210.734 225.7 210.9C225.7 211.066 225.835 211.2 226 211.2Z", fill: "#1C242F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M223.8 211.2C223 211.8 222.4 212.5 222.4 212.5C222.4 212.5 223.5 212.2 224.4 211.4C225.026 210.918 225.817 210.703 226.6 210.8C226.734 210.733 226.734 210.6 226.6 210.4C226.3 210.2 225.5 210.1 225.3 210.2C225.3 210.2 224.5 210.6 223.8 211.2Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.3 243.6V241.8L226.6 242.4L225.9 243.4L226.9 243.7L227.3 243.6ZM223.7 241.6V239.7C223.7 238.8 224.1 237.2 224.1 237.2L224.5 238.3L225.8 240.3L226.2 240.6L225.2 241.3L224 241.7L223.7 241.6ZM227.3 241L227.5 240.2L227.9 239.2L226.8 240.2L226.3 240.6L226.9 241.1L227.3 241ZM224.3 236.3C224.3 236.3 224.5 235.7 225 235L226.1 233.5L226.6 235.5L226.9 237.1V237.4L226.4 237.6C226.3 237.6 225.1 237.6 224.9 237.3L224.3 236.3ZM228.1 238.5L228.8 237.8L229.6 237L227 237.5L227.4 238.3L228.1 238.5ZM226.6 233.2L227.5 232.4C228.2 231.7 228.5 231.8 228.5 231.8L228.8 234.6L227.5 234.2L226.6 233.2ZM229.8 237L231.4 235.4L228.8 234.6L229.3 236.4L229.8 237ZM230.9 232.8L231.1 230.1L229.9 230.9L228.9 231.7L229.2 232.1L230.2 232.7L230.9 232.8ZM233.2 230.2V228.2L232.3 229.1L231.7 229.7L232.4 230.1L233.2 230.2ZM234.2 233L235.4 232L236.6 230.7L233.3 230.4L233.4 231.8L234.2 233ZM226.4 222V223.5H229.1L228.4 222.5L227.6 222L226.8 221.2L226.4 222ZM231.8 235L233 234L234 233.2L231.3 232.9L231.4 234.7L231.8 235ZM236.8 230.2C236.8 230.2 237.1 229.2 237.1 228.2L236.9 226.7L234.9 228L235.2 229L236 229.9L236.8 230.2Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M233.4 227.8C233.4 227.8 234 227.1 234.1 226.7V226.4H235.7L236.6 226.5L236.7 226.6L236 227.4L235 228L233.8 228.1L233.4 227.8ZM236.6 226.3L235.6 224.6L235 223.8L234.2 226V226.3H236.6Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M217.3 241.8L217 242.4C217 242.4 218 241.8 218.9 241.9C219.8 242 220.6 242.9 220.6 242.9L220.8 242.2C220.8 242.2 219.7 241.2 219 241.1C218.3 241.1 217.3 241.8 217.3 241.8ZM217.8 237.1L218.1 237.4C218.1 237.5 218.1 236.7 219.2 236.2C220.2 235.8 220.9 236.2 220.9 236.2C220.9 236.2 220.7 235.5 220.2 235.4C219.666 235.267 219.166 235.4 218.7 235.8C218.1 236.2 217.8 237.1 217.8 237.1ZM221.4 240.6C221.4 240.6 220.9 239.6 220 239.3C219.2 239.1 218.1 239.8 218.1 239.8L217.9 240.3C217.9 240.3 219.1 239.7 219.9 240C220.8 240.4 221.2 241.4 221.2 241.4L221.4 240.6ZM217.4 236.6L217.7 236.9C217.7 236.9 217.5 235.9 218.1 235.2L219 234.4L218.5 234.2C218.5 234.2 217.8 234.7 217.5 235.2C217.3 235.8 217.266 236.233 217.4 236.5V236.6ZM216.9 234.6C217.2 234.1 217.9 233.9 217.9 233.9L217.6 233.7H217.3C217.3 233.7 216.9 233.9 216.6 234.5C216.3 235.1 216.3 236.1 216.3 236.1L216.8 236.3C216.8 236.3 216.7 235.3 216.9 234.7V234.6ZM223.2 219.4C223.933 219.133 224.333 219.033 224.4 219.1C224.5 219.2 223.4 220.1 223.9 221.4C223.3 222.4 223.1 223.3 223.1 223.3H223.7L224 221.8C224.363 222.474 224.876 223.056 225.5 223.5H226.3C226.3 223.5 226.3 222.5 226.8 221.5C227.223 222.029 227.773 222.442 228.4 222.7V222.4C228.4 222.4 227.5 221.9 227 221.2V221.1C227.6 220.1 228.4 219.8 228.4 219.8L229 220.2L229.1 220.1L228.7 219.5H228.2L226.8 220.9L226.2 219.6H225.8C225.8 219.6 225 219.6 224.2 220.9C224.1 219.9 225.2 218.9 225.2 218.9L225.1 218.6L223.1 219C222.4 219.3 221.9 220 221.9 220V220.6C221.9 220.6 222.6 219.8 223.2 219.4ZM224.4 221.1C224.9 220.4 225.9 219.9 225.9 219.9C225.9 219.9 225.9 220.5 226.6 221.2C226.2 222 226 223.1 226 223.1C226 223.1 225.1 222.5 224.4 221.5L224.3 221.2V221.1H224.4ZM218.4 238V238.6C218.4 238.6 219 237.9 219.9 237.9C220.8 237.9 221.7 238.6 221.7 238.6V237.7C221.5 237.7 220.7 237.2 220 237.2C219.2 237.2 218.3 238 218.3 238H218.4ZM235.4 229L235.1 228.2L235.5 228L236.9 226.7L236.6 226.3H235.3L234.2 226.2L234.6 224.8L235 223.7L234.6 223.3C234.6 223.3 234.7 223.7 233.9 223.8L231.7 223.1V223.5L233.7 224L234.7 223.8L234.2 224.8L234 225.6L234.2 225.7L234.1 226.4L235.2 226.5L236.6 226.6C236.6 226.6 235.9 227.4 235.2 227.7L234.9 227.8L234.1 226.6V227L234.6 228L233.4 227.8L233.1 228.1V230.1L231.7 229.7L231.4 229.9L231.1 230.1C231.1 230.1 230.8 231.3 230.8 232.7C229.6 232.4 228.9 231.7 228.9 231.7L228.6 231.9C228.6 231.9 228.4 233.1 228.7 234.5C227.948 234.263 227.263 233.852 226.7 233.3L226.3 233.7L226.7 237.2L226.8 237.5H226.2C225.2 237.5 224.4 236.4 224.4 236.4L224.1 237.2C224.1 237.2 224.5 239.4 225.7 240.4L226 240.6C225 241.4 223.7 241.6 223.7 241.6L223.8 242.2L225.5 243.5L224.2 244.2L224.4 244.6L225.8 243.6L227.3 244V243.6L226.1 243.4V243.3C226.6 242.9 227.3 241.8 227.3 241.8V241C227.3 241 226.9 241 226.4 240.6C227.9 239.6 227.9 239.1 227.9 239.1L228.2 238.6C228.2 238.6 227.7 238.4 227.3 237.6L229.7 237.1L229.9 236.9C229.9 236.9 229.3 236 229 234.9L231.4 235.4L231.8 235C231.8 235 231.5 234.1 231.4 233L233.9 233.3L234.2 233C234.2 233 233.4 231.5 233.4 230.7V230.6H236.6L236.8 230.2C236.8 230.2 235.8 229.5 235.4 229ZM227 241.4C227 241.4 226.7 242.2 226 243L225.7 243.2L225.3 243C224.566 242.4 224.233 242.067 224.3 242L226.3 240.7L227 241.4ZM227.7 238.9L226.2 240.4L225.9 240C225.2 239.1 224.3 238.4 224.4 237C224.4 237 224.9 238 226.1 237.9L226.9 237.7C227.3 238.5 227.566 238.9 227.7 238.9ZM229.3 236.9L227.3 237.4L227.1 237.1C226.7 235.8 226.7 233.9 226.7 233.9C226.7 233.9 227.6 234.5 228.7 234.8L229.3 236.9ZM229 234.5C228.8 233.4 229 232.2 229 232.2C229 232.2 229.7 232.8 230.9 233L231.1 234.7L229 234.5ZM233.6 232.7C233.6 232.7 232.9 233 231.4 232.8V230L233.2 230.5V230.6L233.6 232.7ZM233.6 230.2H233.4V228.1C233.4 228.1 234.2 228.3 234.8 228.2C234.8 228.467 234.933 228.8 235.2 229.2C235.5 229.8 236.1 230.2 236.1 230.2C236.1 230.2 234.2 230.4 233.5 230.2H233.6ZM227.6 245.2L227.4 244.7C227.4 244.7 226.7 245.2 226.4 245.8H226.2L224.6 245.1L224.8 245.4L226.3 246L226 247.2L226.2 247.5C226.2 247.5 226.2 246.7 226.6 246.1H227.6L227.4 246.8L227.1 248L227.4 248.2H229.1L228.8 247.9H227.3L227.6 246.9L227.8 246.3L227.6 245.7L226.7 245.8L227.5 245.1L227.6 245.2ZM218.5 244.1C219.161 244.129 219.793 244.375 220.3 244.8V244.3C220.3 244.3 219.5 243.3 218.6 243.3C217.6 243.3 216.6 244.2 216.6 244.2V245.2C216.6 245.2 217.5 244.1 218.5 244.1ZM229.1 259.6C228.1 260.1 226.9 260.1 226.9 260.1L227.6 258.8C229.6 258.3 230 256.9 230 256.9L229.9 256.4C229.9 256.4 229.4 257.7 227.7 258.4L228.3 255.8L227.8 255.6C227.8 255.6 227 256.6 226.2 256.9C226.539 256.212 226.742 255.465 226.8 254.7L226.6 254.3C226.6 254.3 226 254.8 225.2 254.9H224.7C225.2 254.3 226.1 252.4 226.1 252.4L226 252C226 252 225.3 253.7 224.6 254.5L224.3 254.8L222.6 254V254.3C222.6 254.3 223.3 254.8 224.1 255.1L223.1 256.1V256.9L225.5 257.2C225.083 257.866 224.539 258.444 223.9 258.9L224.2 259.4C224.2 259.4 225.3 259.4 227.2 258.9L226.2 260.4C226.1 260.4 228 260.5 229.2 259.9C230.4 259.3 230.8 258.7 230.8 258.7L230.4 258.3C230.4 258.3 230.2 259.2 229.1 259.6ZM223.6 256.3L224.6 255.2C225.8 255.5 226.2 255.1 226.2 255.1C226.2 255.1 226.4 255.8 225.7 256.9L223.6 256.3ZM224.7 258.8L225.7 257.5L226 257.2C227.2 257.2 227.9 256.2 227.9 256.2C227.9 256.2 228 257.2 227.5 258.4C225.9 259 224.7 258.8 224.7 258.8ZM223.2 250.9C224.4 251 225.8 251.5 225.8 251.5L225.7 250.9L223.4 250.5C223.8 249.6 224.6 249.2 224.6 249.2L224.2 249C224.2 249 223.8 249 223.2 250.2L223 250.4H222.7C221.7 250.4 220.8 251 220.8 251L221 251.3C221 251.3 221.9 250.9 222.8 250.9L222.2 252.9L222.4 253.4L223.2 250.9ZM220.8 246L220.6 245.4C220.6 245.4 219.3 245 218.4 245.4C217.5 245.8 216.8 246.9 216.8 246.9L217.2 247.7C217.2 247.7 217.8 246.5 218.7 246.2C219.6 245.9 220.8 246 220.8 246ZM223.2 247.9L222.4 247.5C222.4 247.5 221.1 247.8 220.6 248.3C220.1 248.8 219.7 250 219.9 250.3C220.1 250.7 220.266 250.9 220.4 250.9C220.6 250.9 220.6 249.6 221.3 249C222 248.4 223.2 247.9 223.2 247.9ZM220.2 247.5C220.6 247 221.6 246.8 221.6 246.8L221.1 246.3C221.1 246.3 219.9 246.5 219.3 247L217.9 248.7L218.6 249.4L220.1 247.5H220.2ZM224.2 211.7C224.9 210.9 225.5 210.9 225.7 210.9H226.3L225.6 212.9C225.4 213.7 225.1 213.9 224.8 214.4C224.333 215.067 224 215.833 223.8 216.7C223.8 217.5 223.966 217.933 224.3 218C224.566 217.867 224.733 217.7 224.8 217.5C224.8 217.2 224.6 217.5 224.4 217.5C224.2 217.5 224.4 217.2 224.2 216.7C224.2 216.2 224.8 214.9 225 214.5C225.4 214.1 225.7 213.567 225.9 212.9C225.9 212.2 226.4 210.9 226.4 210.9C226.4 210.767 226.066 210.7 225.4 210.7C225.098 210.727 224.806 210.821 224.546 210.977C224.286 211.133 224.065 211.346 223.9 211.6C223.5 212.1 222.5 212.5 222.5 212.5C222.5 212.5 223.6 212.5 224.2 211.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.2 219.6H226.2L226.7 221.1L228.2 219.6ZM225.8 219.6L225.4 219.2L225.1 218.9L224.4 219.4L224 220.9L224.2 221.1L225.8 219.5V219.6ZM225.5 223.6L224.1 221.4L223.3 223.1L223.7 223.3L224.7 223.4L225.5 223.5V223.6ZM231.5 259.3H231.4C230.276 260.06 228.956 260.477 227.6 260.5C226.733 260.5 225.833 260.267 224.9 259.8C224.346 259.445 223.925 258.918 223.7 258.3C223.3 257.367 223.033 256.333 222.9 255.2C222.746 254.149 222.408 253.133 221.9 252.2C221.233 251.267 220.233 250.4 218.9 249.6C218.267 249.086 217.746 248.449 217.368 247.727C216.989 247.004 216.762 246.213 216.7 245.4V244.8C216.747 243.551 217.053 242.324 217.6 241.2C218.133 240.133 218.433 239.2 218.5 238.4V238C218.233 237.4 217.833 236.9 217.3 236.5L216.3 235.9L215.5 235.6V235.9L216.2 236.1L217.2 236.8C217.733 237.2 218.067 237.633 218.2 238.1V238.4C218.2 239.067 217.9 239.967 217.3 241.1C216.74 242.255 216.433 243.517 216.4 244.8C216.368 245.765 216.57 246.724 216.988 247.594C217.405 248.464 218.027 249.221 218.8 249.8C220 250.8 221.2 251.4 221.8 252.4C222.267 253.467 222.6 254.8 222.8 256.4L223.4 258.4C223.667 259.067 224.133 259.6 224.8 260C225.653 260.493 226.615 260.767 227.6 260.8C229.9 260.8 231.6 259.5 231.6 259.5L231.5 259.3Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M229.7 255.4L228.7 255.6C228.172 255.593 227.669 255.377 227.3 255C226.767 254.467 226.467 253.867 226.4 253.2C226.333 252.533 226.1 251.633 225.7 250.5C225.033 249.433 224.067 248.467 222.8 247.6C221.8 246.7 220.7 245.8 220.5 244.9V244.4C220.5 243.6 220.7 242.733 221.1 241.8C221.5 240.867 221.767 239.8 221.9 238.6V238C221.7 236.4 220.4 235.2 219.3 234.4L217 233.3V233.5H217.1C217.5 233.7 218.6 234.2 219.6 235C220.667 235.667 221.333 236.667 221.6 238V238.6C221.6 239.8 221.367 240.833 220.9 241.7C220.433 242.567 220.2 243.467 220.2 244.4V244.9C220.667 245.967 221.5 246.933 222.7 247.8C223.8 248.7 225 249.6 225.4 250.6C225.8 251.733 226.033 252.6 226.1 253.2C226.236 253.948 226.583 254.642 227.1 255.2C227.7 255.667 228.233 255.9 228.7 255.9L229.9 255.6L229.7 255.4Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 249.3C237 249.3 238.5 249.6 238.4 250.7C238.4 251.9 237.8 253.4 237.8 253.4L235.8 251.7L236.9 250.7L237.3 250.2L237.1 249.2L237 249.3Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M213.1 235.6C213.1 235.6 211.7 236.1 211.4 235.5C211.267 234.9 211.233 234.5 211.3 234.3C211.3 234.2 210.4 234.1 210.5 233.3C210.6 232.5 211.5 232.6 211.8 232.6C212 232.6 212.1 231.4 212.8 231.4C213.5 231.4 213.8 232.3 213.8 232.3L213.1 235.6Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M214.6 236C214.6 236 213.5 236.6 213.1 236C212.7 235.4 213.1 234.7 213 234.6C212.8 234.5 212.1 234.2 212.3 233.6C212.3 232.8 213.1 233.1 213.3 232.9C213.6 232.8 213.8 231.8 214.6 231.9C215.3 232.1 215.4 232.7 215.4 232.7L214.6 236Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M216.6 236.3C216.6 236.3 216.3 237 215.4 236.8C214.5 236.6 214.9 235.5 214.7 235.3C214.5 235.1 214 234.9 214.1 234.1C214.2 233.3 215 233.5 215.3 233.4C215.6 233.3 215.8 232.1 216.3 232.3C216.8 232.5 217.5 233.1 217.3 233.4C217.3 233.4 216.2 233.8 216 234.6C215.8 235.4 216.6 236.3 216.6 236.3Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235 249L233.2 246.9L231.4 244.7L229.6 243.8L228.4 241.9V239.7L228.8 238.4L229.5 237.4C229.5 237.4 225.8 238.8 227.7 245.9C228.5 248.9 230.5 249.3 230.5 249.3L233.9 249.1L234.9 249H235Z", fill: "#AF7029" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M233.3 225.4C233.633 225.4 233.833 225.467 233.9 225.6L234 226.2V226.4L234.1 226.5C232.8 229.2 230.2 230.5 227.9 232.1C226.705 232.925 225.685 233.979 224.9 235.2C223.912 236.86 223.425 238.77 223.5 240.7C223.6 244.7 225.1 247 226.8 248.1C228.051 248.917 229.506 249.367 231 249.4H231.3L232.5 249.3L234.9 249.1L236.3 249.2C236.7 249.2 236.933 249.3 237 249.5L237.2 249.9C237.2 250.233 237.033 250.567 236.7 250.9L236 251.4V251.7L236.9 251.1C237.233 250.767 237.4 250.367 237.4 249.9L237.2 249.4C237 249.2 236.7 249.067 236.3 249L234.9 248.9L231.3 249.1H231.1C230.4 249.1 228.6 249.1 227 247.9C225.4 246.9 223.9 244.7 223.8 240.7V240.4C223.8 238.267 224.2 236.6 225 235.4C226.2 233.4 228 232.4 229.8 231.1C231.6 229.8 233.3 228.7 234.2 226.6C235.1 224.5 234.2 226.4 234.2 226.2L234.1 225.5C233.966 225.3 233.7 225.167 233.3 225.1V225.4Z", fill: "#816C2A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238.3 250.1C238.3 250.1 237.3 251.7 237.1 251.8C236.9 251.9 237.9 252 238.1 252.4L237.9 252.8C237.9 252.8 236.9 252.1 236.4 252.1L236.3 251.5C236.3 251.5 236.8 251.3 237.2 250.9C237.5 250.6 237.9 249.8 237.9 249.6L238.3 250.1Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.7 251.2L239.5 251.8L238.4 251.1C238.4 251.1 238.4 250.2 238 249.8C237.534 249.467 237.1 249.233 236.7 249.1C236.3 248.9 234.7 248.9 234.7 248.9L230.7 244.6L232.2 244.8L234.6 244.5L236.7 244.3L237.9 244.5L239.1 244.8L239.7 245.4L240.4 246L241.1 247L241.5 248.3L241.7 249.6V251.2Z", fill: "#FCCA3D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.8 251C241.8 251 241 251.3 240 251.3C239 251.3 238.4 251.1 238.4 251.1L238.2 251.8L237.8 252.8V255.4L239.9 255.8L241 255.4L241.6 252.6L241.7 251.1L241.8 251Z", fill: "#AF7029" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.2 250V251H241.7V250.2L241.2 250ZM239.2 226L239 224.3L238.3 223.1L237.4 221.9L236.5 220.9L236 220.4L235.8 220.1L233.5 220.2L232.3 221.6C232.3 221.6 235.3 223.8 236.6 226.2C237.666 226.6 238.4 227.067 238.8 227.6L238.9 227.4L239.2 226Z", fill: "#FCCA3D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 228C237 229.667 236.8 230.667 236.4 231L237.8 229.4L238.8 227.6C238.179 226.978 237.428 226.5 236.6 226.2C236.867 226.8 237 227.4 237 228Z", fill: "#AF7029" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240.2 254.3L239.1 253L238.1 252.3L237.9 252.5H238L239 253.2L240 254.5L240.2 254.3Z", fill: "#816C2A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.6 252.4C241.6 252.4 241.4 253.2 240.6 253.9C239.8 254.6 238.8 255 238.8 255L241 255.9L242.5 254.5L241.5 252.4H241.6Z", fill: "#6F5B24" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.9 254.3L241.7 254.5L241.3 254.9L241 255.3L241.6 252.9L242 253.6V254L241.9 254.3Z", fill: "#404118" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.6 223.4C228.6 223.4 225.6 223.7 223.4 223.4C221.4 223 221.8 217.5 221.7 217.4C221.7 217.2 220.4 215.9 220.7 214.7C220.9 213.5 224.7 210.3 225.3 210.1C225.7 210 226.5 210.3 226.5 210.3C226.5 210.3 227.5 209.3 227.8 209.3C228.1 209.3 228.5 209.9 228.4 210.1C228.2 210.4 226.9 211.1 226.8 211.8C226.8 212.4 226.667 213 226.4 213.6C226 214.2 225.3 215 225.2 215.5C225 216.1 225 216.467 225.2 216.6C225.6 216.8 226.9 216.6 228 216.1L229.7 215.1C229.9 215.1 229.1 216.4 227.9 216.9C226.7 217.4 225.9 218 225.2 217.9C225.2 217.9 224.6 219.5 226.6 219.6C228.7 219.7 229.9 219.2 229.9 219.2L228.6 223.4Z", stroke: "#78732E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255 200.5C255 200.5 249.3 199.5 249.4 204.1C249.4 205.433 249.9 206.2 250.9 206.4C252.1 206.7 254.5 206.9 256.5 208.7C258.5 210.5 258.7 211.8 258.7 212.9C258.7 213.9 258.2 214.9 258.2 214.9L259.5 221.1L260.7 225.7L264.5 223.5L266.8 216.7L263.9 204.5L255 200.5Z", fill: "#AB6D29", stroke: "#4D2A15", strokeWidth: "0.3" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M260.5 224C260.5 224 262.5 223.2 263 221.6C263 221.2 261 219.3 261 219.3L262.5 220.3C263.1 220.833 263.434 221.033 263.5 220.9C263.8 220.9 264.7 218.8 264.3 218.3C263.9 217.8 263.4 216.8 262.6 216.3C261.8 215.8 260.7 215.8 260.7 215.8C260.7 215.8 262.2 215.3 263 215.8C263.7 216.1 263.8 216.6 263.9 216.4C263.905 215.379 263.736 214.364 263.4 213.4C263.134 212.733 262.6 212.367 261.8 212.3C260.8 212.1 259.9 212.2 259.9 212.2C259.9 212.2 261.2 211.4 262.2 211.7C263.2 211.9 263.2 212.4 263.2 212.3L262.5 210C262.056 209.376 261.474 208.863 260.8 208.5L259.4 208.3H258.9C258.9 208.3 259.6 207.8 260.6 207.9C261.6 208 261.6 208.3 261.7 208.3C261.9 208.3 261.667 208.1 261 207.7L257.6 206.1H255.1C255.1 206.1 255.1 205.4 255.8 205.3C256.467 205.3 256.767 205.267 256.7 205.2C256.7 205 254.5 204.5 254.5 204.5H252.8L250.4 204.8L250.9 204.1C251.3 203.833 251.667 203.667 252 203.6C252.9 203.4 251.6 202.7 251.6 202.7L252.2 201.7L255.4 201.9L261.9 205.8L265 208.4L267 213.4L266.4 222L262 225.6L260 225.8L260.5 224Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.8 202.7C254.8 202.7 254.6 202.1 254.6 201.3V200.6C254.6 200.6 252.6 200.3 251.1 201.5C249.5 202.7 250.4 204.8 250.4 204.8C250.4 204.8 251.1 204.2 251.9 203.8C252.8 203.5 254.3 203.6 254.3 203.6C254.5 203.4 254 202.8 253.4 202.7L251.7 202.6C251.7 202.6 252.4 202.1 253.5 202.2C254.5 202.4 254.933 202.567 254.8 202.7Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.3 224.7L259.9 225.2L260.8 231.2L266.5 240.9L269.5 240.4L270.5 238.6L271.2 238.9C271.6 239.3 272.7 241.2 273.6 241.6C274.6 241.9 275 241.8 275.9 242.5C276.8 243.2 279.8 247.7 279.9 247.8C280.1 248 279.7 245.9 279.7 245.9L278.8 243.2L277.7 241.3L277.5 240.8H279L280 241.4L281.5 242.7L282.3 243.6L282.7 244.6L282.9 245.4L283.3 246.7L284.1 248.4L285.1 250.1L285.4 249.5L284.9 247.5L283.4 242.6L282.4 241L284 242C284.4 242 285.5 243.8 285.5 243.8L286.2 245.5L286.7 247.1L287.1 248.5L287.6 250L288.5 249.5L288.3 248.4L287.5 245L287.2 241.4C287.2 241.4 287.6 241.4 288.2 242C288.8 242.6 289.2 243.9 289.2 243.9L289.5 247.1L290 250.1L291 253.1L292 255.1L292.7 256.1V254.6L291.5 241.8L291.6 241.3C291.6 241.3 291.8 241.2 292.2 241.8L293.1 243.3L293.4 245.3L293.6 246.7L293.9 249.3L294.2 252.1L295.5 255.1L296.2 256.8L296.6 254.8L296 241.2L296.3 240.8L297.3 241.8L297.9 242.6L298.4 245.6L298.7 254.3L299 256.5L301.6 233.9L303.1 233.6L303.3 233.1L302.2 232.3L299.6 228.3L297.9 224.4L294.9 218.8L289.6 212.4L285.5 209L284 208L284.2 207.1L285.1 205.7H284.3L282.5 206L280.7 205.4L277.2 203L273.5 201.2L271.3 200.4L266 199.1L260.7 198.4H258.4L256.2 198.7C256.2 198.7 255.2 199.2 254.8 199.9C254.466 200.367 254.366 201.067 254.5 202C254.5 202.867 255.233 203.567 256.7 204.1C258.2 204.7 261.7 207.1 261.7 207.1L263.3 208.7L263.9 209.5L264 210.1L265.2 219.1L262.9 223.9L261.3 224.7Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267 238.6C267 238.6 268 240.2 269.3 238.9C270.7 237.7 268.7 234.1 268.8 233.9C268.9 233.7 269.4 233.6 269.4 233.6L270.4 235.5C270.4 235.5 271 236.5 270.7 238C270.5 239.6 269 241 269 241L267.3 240.5L267 238.6Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M300.2 259.4L299 255.8L298.6 253L298.3 245.5C298.2 244.5 298.3 243.2 298.1 243L296.8 241.2L296.3 240.7L296.6 240.4C296.6 240.4 297.1 240.9 297.2 240.7C297.334 240.367 297.167 239.167 296.7 237.1C296 234 293.7 230.4 293.7 230.4L293.9 230.7L294.6 231.4L296.1 232.6L299.4 233.8L301.1 234.1L302.3 236.4C302.3 236.4 303.1 240.3 303 242.3C303 244.3 302.9 245.9 302.1 247.9C301.3 249.9 301.1 256.1 301.1 257.1L300.6 259.1L300.2 259.4Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M300.2 249C300.2 249 300.9 248.1 301.2 247C301.5 246 301.6 237.1 300.6 236C299.658 235.146 298.527 234.529 297.3 234.2L298.1 237.1L298.8 238.1L299.3 239.6C299.3 240.3 300 242.1 300.1 244.4L300.2 249Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M295.4 254.4C295.4 254.4 295.9 250.3 295.7 247.3C295.5 244.3 295.2 243.9 294.9 243.3C294.062 241.707 293.392 240.031 292.9 238.3C292.234 235.633 291.7 233.967 291.3 233.3C290.8 232.8 289.9 231.7 289.7 232C289.5 232.3 289.5 232.9 289.5 232.9L288.2 232.6L287.9 231.8L288.3 230.5V229.9L288.1 229L289.7 230.3L293 232.5L294.7 239.5L296.2 243.7L296.4 250.9L296.3 257.3L295.4 254.4ZM297.4 234.7L298.7 235.7C299.2 236.1 300.2 236.7 300 236.7L298.4 236.1L297.4 235.4V234.7Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M291 252.8C291 252.8 291.6 251.4 291.5 249.5C291.4 247.6 290.5 243.2 290.2 242.7C289.9 242.2 288.6 241.3 287.5 238.7C286.3 236.3 286.4 235.7 285.6 234.9L284 232.9L284.3 230.2L287.1 231.7L288.4 232.3L289.8 239.3L291.1 241.3L291.7 244L292.4 250.5L292.7 255.7L292.5 256.2L291 252.8ZM287.6 249.8C287.6 249.8 287.6 247.8 287.2 246C286.733 244.067 286.233 242.8 285.7 242.2C284.479 240.972 283.374 239.633 282.4 238.2L279.3 234.2V231.5L281 232.7L282.8 233.7L283.6 236.7L284.6 238.8L286 240.8L287 241.6L287.5 244.8L287.8 246.6L288.6 249.2L288.3 250.5L287.6 249.8ZM285.2 249.8L284.4 249.1C284.4 249.1 284.9 248.6 284.7 247.6L283.7 244.6C283.1 243.1 283.1 243 282.8 242.7L279.3 239.5L276.3 236.9C275.433 236.433 274.967 236.233 274.9 236.3L274.5 233.1C274.5 233.1 275.5 234.5 276.2 234.7L277.8 235.3L280.1 239.3L280.9 240.3L282.9 242L283.8 243.7L284.4 245.7L285.2 248.4L285.4 250.1L285.2 249.8ZM280.8 249C280.8 249 279.5 247.5 279.2 246.5C279 245.5 279.4 245.5 279 244.4C278.313 242.943 277.283 241.674 276 240.7C274.9 239.7 273.3 238.4 273.4 237.7C273.467 237.033 273.567 236.767 273.7 236.9L274.4 237.5L277.9 241.3L279 243.3L279.9 245.8L280.4 246.9L280.9 248.4L280.8 249ZM293.6 230.4C293.6 230.4 296.1 233.4 296.7 230.6C297 229.4 295.9 227 295.9 227L292.9 222L288.2 216.2L285.4 214.9L286.4 216.5C286.4 216.5 288.4 218.5 291.1 223.2C293.8 227.8 293.2 230.2 293.2 230.2L293.6 230.4ZM279.4 212C279.4 212 284.3 216.2 287.4 220.7C290.5 225.2 291.8 228.2 291.1 228.7C290.4 229.4 288.4 228.4 287.6 227.2C286.8 225.9 286.1 223.7 283.2 220.3C280.3 216.9 278.8 216.4 278.8 216.4L276.6 213L279.4 212ZM276.8 222C276.8 222 279.8 224.4 281.5 226.3L284.3 229.7L285.4 230.8C285.4 230.8 284.8 229.6 285.2 229.2C285.6 228.8 286 229 286 229L276.8 219.3V222ZM276.2 222.2C276.2 222.2 277.2 224 278.7 225.5L281.9 228.6L282.6 231C282.6 231 278.4 227.8 278.4 228.6C278.581 229.455 278.92 230.269 279.4 231L278.1 230.3L276.3 227.8L275.3 225.5L274.1 222.5L276.2 222.2Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M263.6 232.2C263.6 232.2 265.8 234.2 267 232.2C268.2 230.3 267.2 228.2 267.2 228.2C267.2 228.2 270.3 232.7 271.2 228.4C271.3 227.6 269.3 224.7 269.3 224.7L270 224L271.6 226.6C271.6 226.6 273.1 226 273.1 224.2C273.1 222.4 271.5 220 271.5 220L273 221.6C273 221.6 275.8 221.6 275.9 219.9C275.9 218.2 273.5 216.4 273.5 216.4C273.5 216.4 275.5 216.5 275.5 215.4C275.4 214.2 272.8 213.4 272.7 212.7C272.6 212 273.5 210.8 274.7 211.5C275.9 212.2 277.5 212.7 278.2 211.4C278.9 210.1 278.2 209.8 278.2 209.8L276.5 209.4L273.7 208L271.6 207.2L269.4 206.9L270.2 208.6L270.8 213.1V215.2L271.2 219.8L270.2 223.6L269.5 224.3L269.1 224.8L268.1 226.8L266.9 228.3L265.2 230.5L263.6 232.2Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M279 240.7C279 240.7 278.5 239.4 277.3 238.4C276.1 237.4 274.3 237.4 274.3 237.4L277.5 240.8L279 240.7ZM283.5 241.5C283.5 241.5 282.5 239.5 281.3 238.2C280.1 236.9 279.3 235.2 278.9 235.2L278.4 235.3L278.7 237.9L280.9 240.1C280.9 240.1 282.9 241.6 283.5 241.5ZM287.2 241.3C287.2 241.3 286.7 238.9 285.5 236.6C284.3 234.3 282.9 233.3 282.9 233.3L283.2 235.8L284.2 238.2L285.9 240.6L287.2 241.3ZM290.2 240C290.2 240 291.1 235 290.3 233.7C289.793 232.888 289.013 232.285 288.1 232L287.6 232.7L288.1 236.3L289.2 239L290.2 240ZM293.2 231.7C293.2 231.7 293.9 232.1 294.8 233.7C295.7 235.3 296.9 240.4 296.9 240.7C296.9 241 296.4 240.8 296.3 240.7L293.3 236L292.7 231.7H293.2Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M272.3 237.5C272.3 237.5 273.9 237.1 273.9 236.5C273.9 235.9 271.9 234.9 272.1 234C272.2 233.6 273.7 234.1 273.8 233.8C274 233.5 272.3 230.8 272.8 230.2C273.3 229.6 274.8 233.1 274.8 233.1C274.8 233.1 275.6 234.7 275.3 235.6C274.3 238.6 272.3 237.5 272.3 237.5ZM276 233.9C276 233.7 278.5 234.2 278.5 234C278.6 233.5 276.3 231.7 276.3 231.7C276.3 231.7 275.8 230.7 276 230.6C276.1 230.4 277.6 230.7 277.7 230.6C277.7 230.3 276 228 276 227.6C276 227.2 276.5 227.6 276.5 227.6C276.5 227.6 277.8 229 278.5 230.1C279.3 231.3 280 232.2 279.7 234.1C279.5 236.1 275.7 234.5 276 233.9ZM287 230.3C287 230.3 286.5 228.6 286.8 228.4L287.6 228C287.6 228 286.3 227.2 285.7 227.2C285.167 227.067 284.9 227.067 284.9 227.2C284.7 227.5 285.9 229.2 285.9 229.2L287 230.3Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M279.6 231.5C279.6 231.5 283.3 232.5 283.4 232.2C283.6 231.9 280.4 229 280.4 229V228.3C280.4 228.1 281.7 228.1 282.1 228.4C282.5 228.7 282.1 229.4 282.1 229.6C282.3 229.8 283.5 231.6 283.7 231.3C283.9 231 283.5 228.8 283.6 228.7C283.6 228.5 285 229.9 285.3 230.2C285.7 230.4 287.8 232 288 231.2C288.2 230.5 288.3 230.4 288.3 229.9C288.2 229.5 288.9 232 288 232.3C287 232.7 285.9 232 285.9 232L285 231.3L284.5 230.8C284.5 230.8 285.1 232.8 284.5 233C283.9 233.2 283 233.1 283 233.1L281.5 232.9L279.5 231.5H279.6ZM288.1 229C288.1 229 292.1 231.4 292.4 231C292.8 230.5 291.4 225 291.6 224.4C291.8 223.8 294.8 230.7 293.4 231.6C292.2 232.3 291.7 231.8 291.7 231.8L289.7 230.8L288.1 229ZM299.1 239L300 239.4L300.5 239.6L299.4 239.8L299.1 239ZM295.3 225.9L295.9 226.2L296.4 226.4L295.9 226.6L295.6 226.5L295.3 225.9ZM294.1 223.9C294.1 223.9 294.5 224.1 295.1 223.8C295.7 223.5 295.6 223.1 295.6 223L294.4 222.6L294.2 222.1H293L294.1 223.9ZM297.6 235.5L299.2 236.2C299.5 236.2 300.1 236.6 300 236.7C299.9 236.8 299 236.9 298.6 236.7L298 236.5L297.6 235.5ZM291.1 217.4H292.1C292.3 217.6 292.1 218.4 291.8 218.7L291 219.1L289.7 217.3L291.1 217.4ZM285.4 212.4L286.6 212.3C287.067 212.367 287.467 212.533 287.8 212.8C288.2 213 288.5 215.4 288.3 215.8C288.1 216.3 285.5 214.3 285.4 214.1C285.4 213.9 284.2 212.1 284.2 212.1L285.4 212.4ZM282.9 211.2C282.9 211.2 284.9 211.4 284.7 210.2C284.612 209.465 284.256 208.788 283.7 208.3L281.3 210L282.9 211.2ZM277.7 209C277.7 209 278.2 209.2 278.8 209C279.4 208.8 280.9 206.8 282 206.6C283 206.333 283.533 206.333 283.6 206.6C283.8 206.8 283.6 208 283.4 208.3C283.2 208.6 279.9 210 279.9 210L278.7 209.8L277.7 209.5V209ZM277.1 205.4C276.6 204.2 275.7 203.8 275.4 203.8C275.1 203.9 276.5 205.1 276.7 206.6L276.9 209.4H277.6V208.9L277.8 208.4V208L277.7 207.2L277.5 206.6L277.4 206.1L277.1 205.4ZM272.5 203.7C271.276 202.383 269.773 201.358 268.1 200.7C267.9 200.7 271.3 202.7 272.1 204.1C272.8 205.3 272.8 207.1 273.1 207.3C273.4 207.5 273.8 207.3 273.8 207.2C273.933 207.067 274 206.9 274 206.7L273.8 205.8L273.3 205L273 204.4L272.5 203.7ZM268.1 201.9C265.782 200.206 262.969 199.327 260.1 199.4C257.2 199.4 255.8 199.6 256.2 201.2C256.6 202.667 257.933 203.367 260.2 203.3C262.6 203.3 263.2 203.1 264.4 203.5C265.733 203.967 266.7 204.5 267.3 205.1C267.7 205.5 266.3 203.9 265.2 203.1L263.2 201.6C263.2 201.6 263 201.1 264.6 201.4C266.2 201.7 268.4 202.6 268.9 204C269.5 205.3 269.4 206 269.4 206.4C269.4 206.6 270 206.2 270 206.2L270.2 205.5C270.2 205.5 270.3 205 270 204.5C269.7 203.8 269.6 203.6 268.9 202.8L268.1 201.9ZM260.4 224.7C261.6 224.7 264.2 222.5 264.6 219.3C264.587 215.836 263.908 212.407 262.6 209.2C262.1 208.5 263.3 208.9 264 209.5C264.7 210.1 266 214.7 266 218C266 221.3 265.2 222.3 263.5 224C261.7 225.6 260.3 225.5 260.3 225.5L260.4 224.7ZM264.5 234C264.5 234 265.1 234.7 265.7 234.5C266.9 234 268.8 233.1 268.8 231.5C268.8 230.3 267.4 229.3 267.3 228.9V228.1L268.6 228.4L268.9 230.2C268.9 230.2 269.4 230.7 269.9 230.5C270.4 230.3 271.9 229.2 271.8 228.1C271.7 227 270.1 225.8 270 225.3V224.3L271.2 224.5L271.6 226C271.6 226 271.9 226.6 272.6 226.4C273.3 226.2 274.6 225 274.3 224.4L273 222.3V221.6L273.5 221.9C273.5 221.9 273.9 222.1 274.9 221.8C275.9 221.5 276.7 220.8 276.7 220.2C276.7 219.6 276 219 275.9 218.6V218.1L276.5 218.2L277.3 219.2L277.5 220.2L277.2 221.2L276.1 222.5L274.9 222.9H274.6L275.3 224.1L275.1 225.7L274.1 226.7L272.7 227.4V228.9L271.9 230.5L270.2 231.5H269.7L269.5 232.5L268.5 234L266.5 235.3L265.2 235.5L264.4 234.4L264.5 234Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M274.7 217.1C274.7 217.1 277.8 218.1 277.7 216.1C277.7 214.9 274.7 212.4 274.5 212C274.366 211.4 274.333 211.067 274.4 211L275.9 212.4C275.9 212.4 277.9 212.9 278.5 211.7C279 210.6 278.5 209.9 278.5 209.8H278.9L279.9 209.9L279.7 211.7L278.7 216.1C278.7 216.1 279 217.8 277.7 218C276.3 218 274.7 217.1 274.7 217.1ZM277.7 240.7C277.7 240.7 277.7 239.8 277 239.2C276.3 238.6 275 238 274.8 237.8L277 240.6L277.7 240.7ZM282.2 240.8L280.2 238.3C280 237.6 279.2 236.2 278.5 236.1C277.9 236.1 279.1 238.5 279.1 238.5L281.6 240.8H282.2ZM286.5 240.8L284.8 237.5C284.5 236.8 283.8 234.8 283 234.2C282.2 233.6 283 235.2 283 235.2L284 237.8L285.4 240.1L286.4 240.8H286.5ZM289.6 239C289.6 239 289.5 236.8 289.2 235.3C288.997 234.264 288.472 233.319 287.7 232.6L287.8 235.3L289.6 239ZM296.1 240.6L294.6 236.8L292.9 233.5L293.2 235.8L294.6 239.6L296.1 240.6ZM301.7 233.8C301.7 233.8 300.7 232.8 298.6 231.9C297.218 231.391 295.769 231.087 294.3 231L294.5 231.3L295.5 232.1L297.7 233.3L300.7 234L301.7 233.8Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M278.6 235C278.6 235 278.6 237 279.6 238.1L283.3 241.8C283.7 242.2 284.1 244.5 284.8 246.4L285.9 250.4C286.2 251 286.8 251.9 286.4 251.8C285.866 251.733 285.466 251.3 285.2 250.5C284.9 249.8 285 249.8 285.1 248.8C285.1 247.8 283.6 242.9 282.9 242.4C282.2 241.9 279 239.2 277.8 237.4C276.6 235.5 276.8 235.1 276.8 235.1L278.6 235Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M283.7 247.5C283.1 246.033 282.767 244.867 282.7 244C281.779 242.639 280.588 241.482 279.2 240.6C278.7 240.4 277.7 240.7 277.2 240.4L274.3 237.2C274.3 237.2 274 237.6 274.1 237.7C274.2 237.8 276.8 240.7 277.8 241.5C278.8 242.5 279.3 244.5 280 246.1C280.6 247.7 280.4 247.3 280.4 248.1C280.6 248.9 280.934 249.3 281.4 249.3C282.067 249.3 282.234 249.2 281.9 249C281.147 248.194 280.568 247.241 280.2 246.2C279.6 244.8 279 242.2 278.2 241.3L277.9 241.1L278.9 241C279.6 241 282.3 243.4 282.5 244.1C282.7 244.8 282.5 245.1 283.5 247.5C284.7 249.9 285.2 250.5 285.2 250.5H285.4L283.7 247.5ZM279.6 231.5L282 232.9L283 233.1C283 233.1 283.3 236.6 284.7 238.6C286.1 240.6 287.3 241.3 287.3 241.3C287.3 241.3 287.3 245.1 288.3 247.7C289.114 249.695 289.456 251.851 289.3 254C289.1 254.5 288.3 252.5 287.7 250.7L286.2 245.7C285.791 244.374 285.11 243.148 284.2 242.1C283.5 241.6 284 241.7 284.4 242.1C285.323 243.1 286.007 244.297 286.4 245.6C287 247.6 287.3 249.6 287.6 249.6C288 249.6 288.2 249.367 288.2 248.9L287.5 245.6C287.1 243.6 286.767 242.367 286.5 241.9C286.2 241.3 285.7 241.3 284.5 239.1C283.633 237.805 282.959 236.39 282.5 234.9V233.9C282.2 233.7 282.1 233.9 281.1 233.4C280.1 232.9 279.6 231.5 279.6 231.5Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284.5 230.8C284.5 230.8 285.7 231.8 286.4 232C287 232.3 288 232.3 288 232.3C288 232.3 287.7 235.7 289 237.8C290.3 240 291.7 241.2 291.7 241.2C291.7 241.2 291.9 242 292.3 246.7L292.9 253.3C292.9 255.1 293 261.7 292.8 261.5C291.8 260.7 292.6 257.2 292.1 255.7C291.6 254.2 290.8 254 289.8 249.7C288.8 245.7 289.5 244.7 288.8 243.1C288.1 241.5 287.2 241.4 287.2 241.4C287.2 241.4 288.5 241.6 289 243C289.5 244.3 289.6 247.8 290 249.5C291 253.5 292.4 255.5 292.4 255.5C292.4 255.5 292.1 250.5 291.7 247.7C291.3 244.9 291.4 242.6 290.8 241.5C290.3 240.5 289.2 239.5 288.5 238.2C287.8 236.7 287.6 233.9 287.3 233.2C287 232.5 286.8 232.7 286.3 232.5C284.8 231.9 284.5 230.8 284.5 230.8Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M288 229C288 229 289.1 230.2 290.6 231C292 231.9 292.8 231.6 293 231.8C293.2 232 292.7 234.9 294.2 237.6C295.7 240.4 296.2 240.4 296.3 240.8L296.8 251.8C297 254.6 297.2 263.8 296.1 263.8C295 263.8 296 257 295.4 255.4L294.4 253C293.9 251.7 293.8 246.8 293 243.8C292.3 241.6 291.7 241.2 291.7 241.2C291.7 241.2 292.7 241.8 293.3 243.7C293.8 245.5 293.9 251.7 294.5 252.6C295.233 253.733 295.767 254.733 296.1 255.6C296.3 256.6 296.1 244.1 295.7 243.3C295.5 242.5 293 238 292.7 235.5C292.6 233 292.5 232.7 292.3 232.5C292.1 232.3 291.3 232.5 290.1 231.4C288.9 230.3 288.1 229 288.1 229H288Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M293.8 230.4C293.8 230.2 294.6 231.8 296.8 232.7C299 233.6 301.3 233.4 301.6 233.7C302.788 236.231 303.37 239.005 303.3 241.8C303.3 246.3 302.5 245.9 301.8 249.8C301.1 253.7 301.1 261.6 300.7 262.8C300.5 263.3 300.2 263.5 300 264.3C299.7 265 300.2 266.5 299.5 266.5C298.8 266.5 298.7 265.4 298.7 264.8C298.7 264.2 299.4 262 299.4 259.8C299.4 257.6 299 257.4 298.6 254.8C298.3 252.3 298.3 244.1 298 243.3C297.7 242.5 296.3 240.8 296.3 240.8C296.3 240.8 297.8 241.8 298.2 242.8C298.6 244 298.6 253.1 299 254.9C299.4 256.8 299.3 254.5 299.4 253.4C299.6 252.4 300.1 247.9 300.1 245.5C300 243.1 299 237.9 298.1 237.1L299.1 238.7L299.7 239.2L300.5 239.6L299.7 239.4L299.2 239.1C299.897 241.16 300.236 243.325 300.2 245.5C300.3 249.5 299.7 258.5 300.3 258.7C301 258.7 300.8 253.7 301.5 249.7C302.2 245.7 303.1 245.1 302.8 241.7C302.5 238.5 301.6 234.9 300.9 234.4C300.2 233.9 298.3 234.1 296.5 233C294.7 231.9 293.7 230.7 293.8 230.4ZM265.2 235C265.2 235 265.8 235.3 266.6 235C267.3 234.6 269.3 233 269.3 232.3V231C269.3 231 269.3 231.3 270 231.4C270.5 231.4 272.2 230.2 272.3 229.4V227C272 226.8 272.7 227.3 273.1 227C273.4 226.7 275 225.7 275 224.6C275 223.5 274 222.6 274 222.6H275.3C275.8 222.5 277.3 221.6 277.3 220.6C277.3 219.6 276.7 218.2 275.5 218.1C275.5 218.1 276.4 218.3 277.3 218.1C278.167 217.7 278.567 217.033 278.5 216.1C278.4 214.7 276.7 213.1 276.4 212.9C276.1 212.7 278.3 213.5 278.9 212.6C279.367 211.667 279.5 211 279.3 210.6C279.2 210.1 278.7 209.9 278.7 209.9C278.7 209.9 279.7 210.2 281 209.5C282.3 208.8 283.4 208 284 208C284.6 208 282.1 209.4 282 210.1C282 210.367 282.6 210.933 283.8 211.8L284 211.9C284.5 212.2 286.5 212.3 286.6 212.4C286.7 212.5 284.7 212.4 284.9 212.6C286.596 213.849 288.14 215.292 289.5 216.9C289.5 216.9 289.8 217.2 290.2 217.3L291.2 217.5H290L292.6 221.3C292.6 221.3 293 221.8 293.3 221.9L294.3 222.1C294.3 222.3 293.1 222.1 293.3 222.3L295.9 227.1C295.9 227.1 293.4 222.8 290.4 219.5C287.4 216.1 286.8 215.7 286.6 216C286.4 216.3 288.8 219.3 290.1 221.3C291.4 223.4 292.5 226 292.5 226C292.5 226 289.5 219.8 285.3 216C281.1 212.1 280.7 211.5 280.3 211.7C279.7 211.8 279.3 214.7 279.7 215.2C280 215.8 283 218.2 285.7 221.2C288.3 224.2 291.6 229.6 291.6 229.6C291.6 229.6 289.2 225.8 285.2 221.6C281.2 217.4 279.7 216.3 279.4 216.3C279.1 216.3 279 217.1 278.6 217.8C278.2 218.5 277.1 218.3 277.1 218.6C277.1 218.9 280.5 222 281.1 222.4C281.7 222.8 282.2 222.6 282.7 222.9L283.8 223.6L282.6 223.2C282 223 281.667 223 281.6 223.2C281.5 223.5 284.3 226.7 284.8 226.9L286.1 227.3C286.7 227.5 287.6 228.1 287.6 228.1L286 227.4C285.334 227.4 285 227.467 285 227.6C285 227.8 287.1 230.5 287 230.6C287 230.6 283.8 226.8 281.2 224.5C278.5 222.1 277.3 221.6 277.2 221.7C277.1 221.8 277.2 222.5 276.5 222.7C275.834 222.9 275.434 223.1 275.3 223.3C275.3 223.5 277.6 225.8 279.3 227.6L282.5 231.3L278.9 227.8C277.034 226.067 276.034 225.267 275.9 225.4C275.7 225.5 275.7 226.4 275.9 226.7C276 226.9 279.5 231 279.4 231.1C279.3 231.2 275.3 226.2 275 226.2C274.8 226.333 274.6 226.667 274.4 227.2C274.1 227.4 273 227.4 273 227.8C273 228.2 278.6 233.8 278.4 233.8C278.4 233.8 273.8 229.8 273.6 230.1C273.5 230.3 275.6 234.1 275.5 234.2C275.4 234.3 272.7 230.2 272.5 230.2C272.3 230.2 272.3 230.7 271.6 231.3C270.9 231.9 270.1 231.7 270.1 231.9C270.1 232.2 273.9 236.5 273.8 236.6C273.8 236.6 269.8 232.5 269.8 232.7C269.667 232.7 269.6 232.9 269.6 233.3C269.9 234.3 270.8 236.2 270.6 236.3C270.6 236.3 269.4 233.8 269.1 233.9C268.8 233.9 268.8 234.5 268.1 234.9C267.6 235.2 267.1 235.1 267.1 235.4C267.1 235.7 267.8 236.1 268.1 236.7C268.4 237.3 268.7 238.7 268.7 238.7C268.7 238.7 268.3 237.5 267.7 236.8C267.167 236.067 266.7 235.667 266.3 235.6C265.9 235.733 265.667 235.867 265.6 236L265.2 235Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M301.6 233.7C301.6 233.7 302.8 233.6 303 233.3C303.2 233 302.5 233.3 301.4 232C300.2 230.8 297.4 222.3 294.1 218C288.9 211.1 284.1 208 284.1 208C284.1 208 289.8 211.3 294.3 217.9C298.9 224.5 300 229.8 301.3 231.1C302.6 232.5 303.8 232.7 303.7 233.1C303.7 233.5 303.467 233.767 303 233.9L301.3 234L301.5 233.7H301.6ZM263.2 231.8L263.4 231.9C263.7 231.9 265.3 230.4 265.2 229.9C265.067 229.9 264.634 229.633 263.9 229.1C263.3 228.5 263.2 227.6 263.2 227.6C263.2 227.6 263.7 228.6 264.2 228.9C264.734 229.233 265.2 229.333 265.6 229.2C265.8 228.9 268.1 227.2 268 226.6C267.867 226.667 267.4 226.5 266.6 226.1C265.4 225.5 265.8 224.5 265.8 224.5C265.8 224.5 266.2 225.4 266.9 225.7C267.7 225.967 268.234 225.967 268.5 225.7C268.7 225.4 270.2 223.3 270 222.7C269.867 222.767 269.4 222.633 268.6 222.3C267.9 221.8 267.5 220.6 267.5 220.6C267.5 220.6 268 221.6 268.9 221.8C269.834 221.867 270.4 221.533 270.6 220.8C270.8 220.2 271.3 217.8 270.6 217.2C270.6 217.2 269.4 217.6 268.6 217.2C267.8 216.8 267.5 215.7 267.5 215.7C267.5 215.7 268.1 216.7 269.1 216.7C270 216.9 270.4 216.4 270.5 216C270.7 215.7 270.7 214.3 270.5 213.6C270.3 212.9 269.6 212.9 269.5 211.8C269.567 211.933 269.067 212.067 268 212.2C266.4 212.4 266.2 210.9 266.2 210.9C266.2 210.9 267.2 211.8 268.1 211.7C269 211.6 269.3 210.9 269.4 210.3C269.267 209.7 269 209.1 268.6 208.5C268.4 207.9 268.3 207.2 268.2 207.3C268 207.3 267.8 207.9 266.6 207.7C265.4 207.5 265.1 206.7 265.1 206.7C265.1 206.7 266 207.3 266.6 207.3C267.334 207.3 267.734 207 267.8 206.4C267.8 206 267.5 205.1 266 203.8L263.2 201.6C263.2 201.6 265.2 202.7 266.5 203.8C267.8 204.8 268.5 205.9 268.5 205.9C268.5 205.9 269.9 206.4 270 205.9C270.267 205.5 270.167 204.833 269.7 203.9C269.3 203.2 268.1 201.9 268.1 201.9C268.1 201.9 269.3 202.9 269.9 204C270.5 205.1 270.3 205.9 270.3 206.1C270.3 206.3 273 207.4 273.6 207.1C274.067 206.633 274 205.967 273.4 205.1L272.4 203.7C272.4 203.7 273.1 204.4 273.6 205.2C274.134 206 274.334 206.567 274.2 206.9L273.7 207.6L275.5 208.6C276.4 209.1 277.4 209.6 277.5 209.3C277.7 209.033 277.767 208.433 277.7 207.5C277.6 206.7 277.1 205.4 277.1 205.4C277.1 205.4 277.7 206.6 277.8 207.5V209.5C278.1 209.7 278.8 209.8 278.8 209.8C278.8 209.8 278.2 210.2 277.1 209.8C275.9 209.5 270.9 207 270.7 207.2C270.5 207.5 273 209 274.2 210.2C275.4 211.2 275.9 212.4 275.9 212.4C275.9 212.4 275 211.6 274.1 211.1C273.2 210.6 270.6 209.3 270.4 209.5C270.3 209.7 271.4 209.9 271.5 210.1C271.6 210.3 270.7 211.1 270.7 211.5C270.7 211.9 274.5 214.5 274.4 214.7C274.2 215 273.4 215.7 273.2 215.7C273 215.7 271.2 214.2 271.2 214.4C271.2 214.7 272.2 215.6 272.2 215.8C272.2 216 271.6 216.4 271.7 216.8C271.8 217.2 273.8 218.9 273.7 219.5C273.7 220 272.7 220.5 272.9 220.9L274.1 222.5L272.6 221.4C272.3 221 271.6 220.2 271.5 220.3L270.7 222.3C270.7 222.7 271.7 223.2 271.8 224.1C271.9 225 271.7 226.1 271.6 226.1C271.6 226.1 270.3 224.4 270.1 224.4C269.767 224.333 269.5 224.5 269.3 224.9C269.1 225.3 268.3 226.6 268.5 226.9C268.5 227 269.8 227.3 269.8 228.3C269.8 229.3 269 230.2 268.9 230.2L267.3 228.2C267.1 228.2 265.5 230.1 265.5 230.2C265.5 230.5 266.5 231.3 266.4 231.6C266.2 232 265.4 231.6 264.9 231.8L263.6 232.3C263.4 232.3 263.2 231.8 263.2 231.8Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M284 208C284 208 284.1 207.5 284.4 207.2C284.6 207 285.6 205.9 285.2 205.6C284.9 205.4 283.6 205.8 282.8 205.8C282 205.7 281.5 205.8 279.1 203.9C279.1 203.9 271.7 198.8 260.2 198.1C256.6 197.9 255 199.1 254.8 199.9C254.8 200 255.8 198.4 259.4 198.4C266.18 198.641 272.787 200.603 278.6 204.1C278.9 204.4 280.9 206.3 282.7 206.1C284.6 205.8 285 205.6 284.9 205.9L284.2 207.1L284 208ZM264 209.5C263.421 208.514 262.676 207.634 261.8 206.9C259.812 205.512 257.663 204.371 255.4 203.5C255.2 203.5 260.2 205.8 261.6 207.2L264 209.5Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M264 217.8C264 217.8 263.6 217.3 262.6 216.6L260.6 215.7L263 216.3C263.6 216.9 264 217.8 264 217.8ZM263.3 213.5C263.3 213.5 263 213 261.6 212.5C260.334 212.167 259.767 212.067 259.9 212.2C260.1 212.4 261.2 211.6 262.2 212.2C262.487 212.31 262.744 212.485 262.952 212.71C263.16 212.935 263.313 213.206 263.4 213.5H263.3ZM262.5 209.9C262.5 209.9 262.2 209.3 261 208.9C259.667 208.433 258.967 208.233 258.9 208.3C258.8 208.4 260.2 208 261.4 208.5C262.7 209 262.5 209.9 262.5 209.9ZM261 207.7C261 207.7 260.7 207.2 258.3 206.7L255.1 206.1C255.2 206.2 258.4 205.8 259.3 206.1C260.2 206.5 261 207.7 261 207.7ZM256.7 205.2C256.7 205.2 255.3 204.8 253.9 204.7L250.4 204.8C250.4 204.8 254.4 204.2 255.4 204.4C256.4 204.8 256.834 205.067 256.7 205.2Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243.6 254.7C243.6 254.7 244.3 256 245.6 256C247.1 256 248.2 258 248.2 258L246.7 259.6L243 259.8L241.8 257.8L243.6 254.8V254.7ZM243.6 253.5C243.8 253.2 242.6 250.8 241.7 250.5C240.9 250 242 251.2 241.8 251.7C241.6 252.233 241.533 252.633 241.6 252.9C241.6 252.9 242.3 253.9 241.9 254.4C241.5 254.9 243.7 253.4 243.7 253.4L243.6 253.5Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243 257.1C243 257.1 243.7 257.4 244.2 257.3C244.8 256.967 245.134 256.733 245.2 256.6M242.3 256.2C242.3 256.2 244.4 254.7 244.3 253.9C244.034 253.233 243.7 253 243.3 253.2L241.7 254.5L242.3 256.2Z", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243 257.1C243 257.1 243.7 257.4 244.2 257.3C244.8 256.967 245.134 256.733 245.2 256.6M242.3 256.2C242.3 256.2 244.4 254.7 244.3 253.9C244.034 253.233 243.7 253 243.3 253.2L241.7 254.5L242.3 256.2Z", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240.9 257.2C240.9 257.2 241.2 258.2 241.9 258.2C242.6 258.2 243.6 257.7 243.6 257.2C243.6 256.9 242.9 256.2 242.5 255.9C242 255.7 241 256.2 241 256.2L240.9 257.2Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242.8 255.8C242.6 256.1 241.3 256.8 240.9 256.8C240.5 256.8 239.6 255.8 239.9 255.6L241.1 255.3C241.4 255.1 241.5 254.6 241.7 254.6C241.967 254.6 242.267 254.767 242.6 255.1C243.1 255.6 242.9 255.5 242.8 255.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.4 256.7C241.4 256.7 239.4 259.5 238.5 259.3C237.6 259.1 238.9 255.4 238.9 255.4L239.9 255.8C240.567 256 241.067 256.333 241.4 256.8V256.7Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.8 254.8C237.8 254.8 240.4 255.2 240.5 255.6C240.6 256 239.3 256.6 238.5 256.6C237.8 256.6 237.8 254.7 237.8 254.7V254.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.2 258.7C231.2 258.7 231.6 260 232.7 260.1C233.8 260.2 234.9 258.9 234.9 258.9L232.2 257.9L231.2 258.7Z", fill: "#202220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.2 258.7L231.5 259.4C231.767 259.8 232.167 260.033 232.7 260.1H232.8C233.9 260.1 235 258.9 235 258.9L232.2 257.7L231.2 258.7ZM231.2 258.7L232.2 257.9L234.9 258.9L234.7 259C234.4 259.4 233.6 260 232.8 260C232.2 260 231.8 259.767 231.6 259.3L231.4 258.9L231.3 258.8L231.2 258.7Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M232 258.4C232 258.4 232.4 259.4 234 259.4C235.4 259.4 236.6 258.2 236.6 258.2L234.2 256.3L232 258.4Z", fill: "#202220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M232 258.4C232 258.4 232.4 259.4 234 259.4C234.985 259.334 235.912 258.907 236.6 258.2L234.2 256.2L231.9 258.4H232ZM232 258.4L234.2 256.4L236.6 258.2H236.5C235.822 258.849 234.937 259.238 234 259.3C233.713 259.337 233.422 259.312 233.145 259.226C232.869 259.139 232.615 258.994 232.4 258.8L232.1 258.5L232 258.4Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M232.2 258.6C232.2 258.6 232.8 259.1 233.6 259.2L235.4 259L234.4 259.3H233.2L232.7 259.1L232.3 258.8L232.2 258.6Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234 257.3C234 257.3 234.6 258.9 236 258.7C237.3 258.6 237.4 257.7 237.4 257.7L235.8 255.5L234 257.3Z", fill: "#202220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234 257.3L234.4 258.1C234.734 258.5 235.234 258.733 235.9 258.8H236.1C236.767 258.667 237.167 258.467 237.3 258.2L237.5 257.8L235.9 255.4L233.9 257.3H234ZM234 257.3L236 255.6L237.4 257.8C237.4 257.9 237.3 258.5 236.1 258.7H235.9C235.367 258.633 234.9 258.4 234.5 258L234.2 257.5V257.3H234Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234.1 257.6C234.1 257.6 235 258.6 235.7 258.6C236.433 258.533 236.833 258.433 236.9 258.3V258.4L236.5 258.6L235.9 258.7H235.2L234.6 258.3L234.1 257.6ZM231.5 259.2C231.5 259.2 232.1 259.9 232.7 259.9C233.3 259.9 234.2 259.4 234.2 259.4H234.3L234.2 259.5L233.6 259.9L232.8 260.1L232.2 260L231.8 259.7L231.5 259.4V259.2Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.6 254.6C238.2 254.6 239.6 256.3 239.6 257.2C239.6 258.1 239.2 259.4 238.6 259.3C237.9 259.3 236.4 258 236.1 257.3C235.633 256.633 235.5 256.167 235.7 255.9C235.9 255.5 237.7 254.6 237.7 254.6H237.6ZM231.2 254.8C231.2 254.8 230.2 254 229.7 254.4C229.2 254.8 229.4 256.2 229.7 256.4C230 256.8 231.2 255.8 231.2 255.8V254.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231 255.8C231 255.8 229.6 255.8 229.6 256.5C229.6 257.2 230.3 257.8 230.4 258C230.5 258.2 231.8 257.4 231.8 257.4L231 255.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.6 256.9C231.6 256.9 230.1 257.3 230.1 257.9C230.1 258.3 230.8 259.2 231.2 259.2C231.6 259.2 232 258.3 232.2 258.2C232.4 258 231.6 256.9 231.6 256.9ZM232.3 252.8C232.3 252.8 232 252.4 231.4 252.6C230.8 252.8 230.1 253.5 230.3 254.4C230.433 255.467 230.566 256 230.7 256L232.8 255.3L232.3 252.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M232.4 254.4C232.4 254.4 230.6 255 230.5 255.7C230.5 256.567 230.833 257.1 231.5 257.3C231.9 257.4 233.5 255.9 233.5 255.9L232.4 254.4Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234 257.4C234 257.4 232.2 258.6 232 258.6C231.7 258.6 231 257.6 231.2 257C231.4 256.4 232.6 255.9 233.1 255.7C233.6 255.5 234.1 257.4 234.1 257.4H234ZM235.6 250.8C235.6 250.8 235 250.4 233.9 250.4C232.9 250.5 232 251.9 231.9 252.7C231.8 253.5 231.9 254.7 232.3 254.9C232.7 255.1 235 253.3 235 253.3L235.6 250.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M233.4 256.2C232.6 256.2 232 255.1 232.1 254.4C232.2 253.7 233.7 252.6 234.5 252.8C235.3 252.8 235.1 254.8 235.1 254.8C235.1 254.8 234.1 256.3 233.4 256.2Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.8 256C235.8 256 235.4 257 234.7 257.3C233.9 257.633 233.334 257.467 233 256.8C232.5 256.1 233.2 255.8 233.5 255.5C233.9 255.2 234.9 255 234.9 255L235.8 256Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M234.6 253.8C234.6 253.8 233.7 254.4 234.2 255.2C234.667 255.867 235.167 256.267 235.7 256.4C236.233 256.533 236.733 256.3 237.2 255.7C237.9 254.8 238.4 254.8 238.3 254.1C238.3 253.367 238.033 252.867 237.5 252.6C237.1 252.4 235.8 252.6 234.5 253.7L234.6 253.8Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 250.4C237 250.4 236.1 250 235.4 250.4C234.733 250.867 234.366 251.533 234.3 252.4L234.4 254.1C234.4 254.1 235.4 253.9 235.9 253.4C236.4 252.9 236.7 252.7 236.6 252.4C236.466 252.4 236.366 252.1 236.3 251.5C236.3 250.5 237 250.4 237 250.4Z", fill: "#202220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 250.4C237 250.4 236 250.2 235.5 250.5C234.966 250.833 234.6 251.333 234.4 252C234.333 252.667 234.333 252.933 234.4 252.8C234.5 252.6 234.2 252.3 234.4 251.7C234.666 251.033 235.066 250.567 235.6 250.3L237 250.4Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M263 269.6L264.3 269L265.9 268L266.2 269.8L264.8 270.8H263.6L262.9 270.3L263.1 269.6H263Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.1 269.7H262L263 269.6C263.2 269.6 263.5 270.6 263.5 270.6L263.1 271.1L261.9 271.8L260.9 271.2L260.8 269.8L261.1 269.7ZM270.8 269.2L270.1 268.3L268.4 266.8V270.8H270.2L271 269.5L270.8 269.2Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.1 269.7C261.1 269.7 260.8 269.3 260.1 269.4C259.167 269.6 258.6 270.033 258.4 270.7C258.4 271.2 258.4 272.7 258.8 273C259.2 273.333 259.8 273.433 260.6 273.3C261.4 273 265.6 270.4 265.6 270.4L264.6 270.7L263.4 270.5C263.4 270.5 262.9 271.2 262.2 271.3C261.6 271.3 261.267 271.1 261.2 270.7L261.1 269.7Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M264 271.1L263 271.5L262 272L262.3 273.3L264.1 273.7L265.2 272.7V271.5L264 271.1ZM272.3 270.2L271.7 269.6C271.3 269.2 271 269.067 270.8 269.2L269.8 270.3V271.2L270.8 271.7L271.5 271.8L272.5 271.2L272.3 270.2Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M266.1 269.6L264.9 270.3L263.9 271.1L264.9 272.1L265.8 272.3L267.8 270.9L267.6 269.6H266.1ZM273.7 271.2L273.3 270.6C272.9 270.333 272.567 270.2 272.3 270.2C272.1 270.2 271.3 271.4 271.3 271.4L271.2 271.7L271.9 272.5L273.2 272.8L274.1 272L273.7 271.2Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.4 272.6L271.4 272.8C271.4 272.8 271.3 273 271.6 273.2H271.9C271.9 273.1 271.9 274.2 272.9 274.9C272.9 274.9 274.1 275.3 274.6 274.9C275.2 274.6 275.1 275 275.1 275L276.7 273C276.7 273 276.7 272.6 276.3 272.6C276.3 272.6 276.6 271.4 275.6 271.1C274.6 270.8 273.7 271.2 273.7 271.2C273.7 271.2 272.9 272.7 272.5 272.5L271.9 272.1L271.3 271.4L270.6 271.2C270.2 271 269.9 270.3 269.9 270.3C269.9 270.3 269.3 270.3 269.1 270L268.6 269.4L267.1 270.4C267.1 270.4 267.1 270.9 266.2 271.5C265.334 272.1 264.867 272.333 264.8 272.2C264.7 272 264.6 273.5 263.6 273.2C262.6 273.1 262 272 262 272C262 272 261.3 271.9 260.9 272.5C260.5 273.1 260.2 273.3 260.2 273.9C260.267 274.567 260.5 275.133 260.9 275.6C261.2 275.9 262.2 276.6 263.3 276C264.5 275.4 264.1 274.5 264.1 274.5L264.7 274.1C265.434 273.433 266.1 272.967 266.7 272.7", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.4 272.6L271.4 272.8C271.4 272.8 271.3 273 271.6 273.2H271.9C271.9 273.1 271.9 274.2 272.9 274.9C272.9 274.9 274.1 275.3 274.6 274.9C275.2 274.6 275.1 275 275.1 275L276.7 273C276.7 273 276.7 272.6 276.3 272.6C276.3 272.6 276.6 271.4 275.6 271.1C274.6 270.8 273.7 271.2 273.7 271.2C273.7 271.2 272.9 272.7 272.5 272.5L271.9 272.1L271.3 271.4L270.6 271.2C270.2 271 269.9 270.3 269.9 270.3C269.9 270.3 269.3 270.3 269.1 270L268.6 269.4L267.1 270.4C267.1 270.4 267.1 270.9 266.2 271.5C265.334 272.1 264.867 272.333 264.8 272.2C264.7 272 264.6 273.5 263.6 273.2C262.6 273.1 262 272 262 272C262 272 261.3 271.9 260.9 272.5C260.5 273.1 260.2 273.3 260.2 273.9C260.267 274.567 260.5 275.133 260.9 275.6C261.2 275.9 262.2 276.6 263.3 276C264.5 275.4 264.1 274.5 264.1 274.5L264.7 274.1C265.434 273.433 266.1 272.967 266.7 272.7", stroke: "#977C2E", strokeWidth: "0.2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M268.6 264.7V267.2C268.6 267.2 269 269.5 268.5 270.2C268 270.9 266.2 270.8 265.9 270.2C265.7 269.5 265.8 267.6 265.8 267.6L268.6 264.6V264.7Z", fill: "#F8C83C", stroke: "#977C2E", strokeWidth: "0.2" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M266.6 272.4C266.6 272.4 266.2 273.1 267.4 273.2L268.1 272.9C268.367 272.567 268.467 272.367 268.4 272.3C268.3 272.2 268.3 273.2 269.4 273.3C270.5 273.4 270.4 272.2 270.4 272.2", fill: "#F8C83C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M266.6 272.4C266.6 272.4 266.2 273.1 267.4 273.2L268.1 272.9C268.367 272.567 268.467 272.367 268.4 272.3C268.3 272.2 268.3 273.2 269.4 273.3C270.5 273.4 270.4 272.2 270.4 272.2", stroke: "#977C2E", strokeWidth: "0.2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257 274.5C257 274.5 256.3 273.4 257 273C257.8 272.6 258.3 273 258.7 273C259.2 273 259 271.8 258.9 271.6C258.833 271.2 258.667 270.867 258.4 270.6C258.2 270.6 255.6 270.8 255.7 272.5C255.8 274.2 257 274.5 257 274.5ZM261 278.6C261 278.6 260.2 277.4 260.6 276.7C261 276 261.4 276.5 261.6 276.4C261.867 276.4 261.867 275.967 261.6 275.1C261.2 273.8 260.7 274 260.4 273.9C260.1 273.8 258.6 275 258.9 276.5C259.3 278.3 260.9 278.6 260.9 278.6H261ZM275.5 277.2C275.5 277.2 278.3 278.4 278.5 275.5C278.6 274 277.2 273 276.8 273C276.6 273 276.267 273.267 275.8 273.8C275.2 274.4 274.967 274.8 275.1 275C275.3 275.3 276.1 274.8 276.5 275.7C277.1 277.2 275.5 277.2 275.5 277.2Z", fill: "#202220" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261 278.6C261 278.6 258.8 278.1 258.8 276C258.8 274.6 260.4 274 260.4 274C260.4 274 259 274.7 258.9 276C258.9 278.1 260.9 278.6 260.9 278.6H261ZM257 274.5C257 274.5 255.7 274.2 255.6 272.4C255.4 270.6 258.4 270.7 258.4 270.7C258.4 270.7 255.6 270.7 255.7 272.5C255.9 274.3 257 274.5 257 274.5ZM275.5 277.2C275.5 277.2 276.1 277.5 276.7 277.4C277.5 277.467 278.067 277.067 278.4 276.2C278.7 275.1 278.5 274.6 277.8 273.7C277.2 273.1 276.867 272.867 276.8 273C276.7 273.2 277.4 273.1 277.8 273.7C278.2 274.3 278.7 275 278.3 276.2C277.9 277.4 276.8 277.4 276.3 277.4L275.5 277.2Z", fill: "#4B4139" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242.1 217.9L241.6 217.8L242 216.9L243.4 216.4L244.9 216.3H246.4L247.1 216.7L247.9 218.6L245 220.3L244.5 220.5L244.4 219.7L243.9 218.6L242.1 217.9Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M269.5 260.4L269.4 256L257.4 259.6L262.2 264L269.5 260.4Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.6 252.7L246.6 251.9L245.5 251.3H244.5L244.4 251.5L244.5 251.9L245.6 253.2L247.4 254.2L248.1 254.7L248.5 254.9L247.6 252.7ZM247.3 254.6H248L248.6 255.5L249.1 256.3L249.6 257.3L249.8 258L248.5 257.7L244.6 256.5L245 255.6L245.6 255L246.2 254.8L247 254.6H247.3Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M249.8 257.8L250.4 257.7L250.8 257.3L250.6 255.9L250.9 251.3L247.8 247.6L247.1 249.7L248.1 253.5L248.7 255.7L249.8 257.8Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.5 249.3C247.5 249.3 247.3 249.7 247.6 250.9C247.9 252.1 248.3 254.9 249.4 256.7C250.4 258.5 248.4 255.2 248.4 255.2C248.4 255.2 246.7 251.5 246.9 248.7C247.2 245.8 247.5 249.3 247.5 249.3Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M249.8 251.7C249.8 251.7 249.1 252.5 249 253.2V254.9C249 254.9 249 254.1 249.7 253.9C250.4 253.7 250.3 255.8 250.3 256L250.7 252.2L249.8 251.7ZM250.2 259.4L246.7 258.6C244.834 257.8 243.9 257.133 243.9 256.6C243.9 256.2 247.1 256.8 247.6 256.9C248.1 257 249.5 257.7 249.5 257.7H250.3L251.8 257.1L252 258.7L250.2 259.4ZM244.2 258.7C244.2 258.7 245.2 259.3 244.7 259.6C244.2 259.9 243.2 259.9 242.9 259.8L246.3 260.6L246.9 260L244.3 258.7H244.2Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243.4 257.8C243.4 257.6 243.6 258.3 244.8 258.4C246 258.6 246.6 258.2 246.6 258.2L247.1 258.6L247.7 258.7L247.2 259.6L244.9 258.9L243.7 258.3L243.4 257.8Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.3 256.2L251.9 257.1L252.3 255.1V253.1L251 252.3L251.3 256.2Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.8 253L246.8 251.2L245.4 248.7L246.2 247.3L247.2 248.7C247.2 248.7 246.9 249.7 247.2 250.7C247.2 251.7 247.8 252.9 247.8 252.9V253Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240.6 259.2C240.6 259.2 241.1 258.5 242.1 258.4L244.1 258.5L246.1 259.7L246.6 260.4L242.6 259.8L240.6 259.2Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.2 252L251.3 255.3C251.4 256 251.9 256.8 251.8 257.1C251.8 257.367 251.533 257.567 251 257.7C250.5 257.9 249.5 257.7 249.5 257.7C249.5 257.7 250.5 257.6 250.5 257.4L250.2 255.4C250.2 254.6 250.2 253.7 250 253.7C249.666 253.767 249.433 253.9 249.3 254.1C249.3 254.2 249.6 251.1 249.9 250.8C250.3 250.4 251.2 252.1 251.2 252.1V252Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243.8 258.4C243.8 258.4 243.4 258.1 243.4 257.8C243.4 257.5 243.8 259.1 246.1 259C248.3 258.9 248.1 258.8 248.1 258.8H249.2C249.2 258.8 249 259.8 248.8 259.9C248.6 259.9 247.1 261 247 261.1L246.5 261.4V261.2L246.2 259.5L244.3 258.8L243.8 258.4Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.8 253C247.8 253 245.2 250.2 244.3 248.5C243.4 246.8 244 244.3 244 244.3L246.4 247.5C246.4 247.5 246.1 248.1 246.2 249.1C246.3 250.1 247.8 252.9 247.8 252.9V253Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.1 262.6C246.1 262.4 245.9 261.8 246.4 261.2C247.945 259.729 249.786 258.603 251.8 257.9V260.3L246.8 262.7L246.1 262.6Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.4 260.8L247.5 259.8C247.5 259.533 246.933 259.333 245.8 259.2L243.8 258.4C243.8 258.4 245.1 259.5 245.7 259.7C246.1 259.9 246.233 260.1 246.1 260.3L246.4 260.8ZM253 261.4L252 259.7L251.8 257.9L251 258.5L249.5 259C249.5 259 251.1 259 251.1 259.5C251.1 260 248.7 260.3 248.7 260.4C248.7 260.5 250.6 260 250.5 260.4C250.3 260.9 249.5 260.9 248.5 261.4L246.1 262.6C246.1 262.6 246.5 262.9 247.3 262.8L249.6 262.4L252.6 261.2L253 261.4Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253 261.4C253 261.4 252.2 261.1 251.6 257.5C251 253.9 251.1 253 251.1 253L252.6 254L253.9 256.3L253 261.4Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253.5 255.4C253.5 255.4 252.8 257.4 252.8 258.6C252.8 259.733 252.866 260.667 253 261.4L254.5 263.2L255 262.7L255.3 261.1V258.4L253.5 255.4Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.5 258.2C255.5 258.2 255.9 263.2 254.5 263.3C254 263.4 253.1 261.4 253 261.3C253 261.3 254.1 263.3 254.6 263C255.4 262.7 255.1 257.8 255.1 257.8L255.5 258.2ZM253 261.4L252.5 260.7C252.1 260.1 252.5 261.2 249.7 262.2C246.9 263.2 246.1 262.6 246.1 262.6C246.1 262.6 247 263.3 249.7 262.5C252.4 261.7 252.2 261.5 252.5 261.5L253 261.4Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M248 255C248 255 248.5 255.3 249 256.3L249.8 258L249.9 257.9L249.1 256.2L247.4 253.6L248 255Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.4 261.2C246.4 261.2 246.7 260.2 246.4 260.1L244 259.9L240.6 259.2C240.6 259.2 241.9 260 243.1 260.3L245.8 261H246.3L246.4 261.2Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.4 261.2L246.2 260.8C246 260.6 245.7 260.8 243.4 260.3L240.6 259.3C240.6 259.3 241.4 259.9 243.4 260.4L246.4 261.2Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M247.4 254.6C247.4 254.6 245.7 254.6 245.2 255.1L243.9 256.7L245 256.8C245 256.8 244.9 255.8 245.4 255.3C245.9 254.8 246.7 254.7 247.4 254.6Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.2 251.4C244.2 251.4 244.9 252.3 245.6 252.6C246.4 252.867 246.967 253.2 247.3 253.6C247.7 253.9 248 255 248 255C248 255 245.6 253.9 245.2 253.4C244.7 252.8 244.2 251.4 244.2 251.4Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.6 252C246.6 252 246.3 251.6 245.6 251.3C245 251.033 244.566 251 244.3 251.2V251.4L245.1 252.7L245.6 252.6C245.6 252.6 244.3 251.8 244.6 251.6C245.2 251 246.6 251.9 246.6 251.9V252Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253 248.9L266.6 241.9L273 250.9L261.3 253.9L255.1 254.5L252.1 252.3L253 248.9Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M271.2 252.7L288 267.3L286.2 268.6L282.2 267.5L274 259.4L271 256.3L271.2 252.7Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M292.8 264.4L283.1 257.1L271 248L271.3 252.3L285.2 265.1L289.8 267.3L292.1 266.6L293.3 265.4L292.8 264.4Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M271.1 254.1C271.1 254.1 276 259.6 279.7 262.4C283.4 265.2 286.9 268.2 287.7 267.8C288.5 267.4 288.1 266.9 288.1 266.9L271.1 253V254.1Z", fill: "#803F1D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M283 268.1L281.4 269.4L279.4 268.6L269 258L269.5 256L271 256.3L283 268.1Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M292.8 264.4C292.8 264.4 291.5 267.4 288.8 266.7C286.1 266 271.2 251.9 271.2 251.9V253.4C271.2 253.4 286.2 267.2 289.2 267.7C292.1 268.3 294.5 265.7 294.2 265.5L292.8 264.5V264.4Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M269.5 256.3C269.5 256.3 274.3 262.5 276.8 264.7C279.4 267 281.6 268.8 282.6 268.6C283.6 268.4 282 267.2 282 267.2L274.7 260.1L271 256.3C271 256.3 269.5 255.7 269.5 256.3Z", fill: "#803F1D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.7 256.3C270.7 256.3 282.9 268.7 283.8 269C285.8 269.6 288.8 267.5 288.8 267.5L287.8 266.9L287.6 267.3C287.6 267.3 287.1 268.5 284.4 268C279.537 264.466 275.077 260.409 271.1 255.9L270.7 256.3Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M275.3 268.2L270.8 263.1L269.8 261.4L269.6 259.2L278.4 268.2L277.2 269L276.1 268.6L275.3 268.2Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M283.3 268.4C283.3 268.4 282.3 270 280.8 269.7C279.894 269.513 279.082 269.018 278.5 268.3L270 260L269.8 258.7C269.8 258.7 279.1 268.6 280.8 269C282 269.3 282.8 267.8 282.8 267.8L283.3 268.4Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M278.6 268.1C278.6 268.1 278.2 269.3 276.9 269.1C275.6 268.9 275.3 268.5 275.3 268.5L270.1 262.3L270 260.7C270 260.7 275.4 268.1 276.6 268.6C277.9 269 278.2 267.7 278.2 267.7L278.6 268.1Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M273 251.9C273 251.9 278 256.2 278.5 256.4C279 256.6 280.7 256.7 280.8 257C280.9 257.3 279.6 257 279.5 257.2C279.5 257.5 282.1 259.6 282.5 259.7C282.9 259.7 285 259.7 285 260C285 260.3 283.5 260 283.5 260.3C283.5 260.6 285.7 262.5 286.2 262.5C286.6 262.6 289.2 262.6 289.2 262.9C289.2 263.2 287.1 262.9 287.2 263.3C287.2 263.7 290.8 266 290.7 266.3C290.6 266.6 286.3 263.5 286.2 263.6L285.7 265C285.4 265.1 285.7 263.6 285.5 263C285.3 262.4 282.8 260.5 282.5 260.7C282.2 260.9 282.5 262.1 282.3 262.1C282.1 262.1 282.3 260.7 282.1 260.2C281.9 259.7 279.5 257.8 279.2 257.8C278.9 257.8 279.1 258.8 278.9 259C278.7 259.2 278.7 257.8 278.4 257.4C278.1 257 272.8 252.2 273 251.9Z", fill: "#B07229" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M264.4 265.9C264.4 265.9 264.4 267.8 263.6 268.1C262.8 268.4 261.1 264.6 261.1 264.6L260.7 261L263.2 263.4L264.4 265.9ZM271.1 264.9V263.9L270.9 262.7L270.7 260.7L270.3 259.5L269.9 258.6H269.3L268 259.6L267.6 260.9L268.3 263.3L268.9 265.4L269.9 265.8L271.1 264.9Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M269.4 268.3C269.7 268.1 269.1 265.5 269.1 265.5L267.6 261.7L267.1 260.3L265.9 259.8L265.1 260.8L265.2 262.3L267.1 265.8C267.6 266.6 268.9 268.4 269.4 268.2V268.3Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M268 260C268.5 260.4 269 261.4 269.1 262.1C269.1 262.1 270.1 265 270 265.2C269.9 265.4 269.2 265.5 269.2 265.5C269.2 265.5 270.6 267 271 266.8C271.4 266.6 271.3 265.2 271.1 264.9C270.9 264.6 270.6 264.9 270.4 264.5C270.2 264.2 269.7 262.3 269.7 261.2V259C269.9 258.7 270.9 261.3 270.9 262.7L271.4 263.3L270.9 260.7L270.4 258.9L270.6 257.7V256.9L271.3 257.3C271.567 257.367 271.767 256.833 271.9 255.7C272.1 254 271.8 250.9 271.8 250.9L266.4 258L268 260Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M268 259.4C268 259.4 267.8 261.4 268.5 263.4C269.2 265.3 269.4 265.4 269.5 265.6C269.7 265.9 269.7 268 269.5 268.2C269.5 268.2 268 264.7 267.5 263C267 261.3 267 260.6 266.7 260.4L266.1 260.3L268 259.4Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267.5 269.6C267.6 269.6 267.5 268.8 267.5 268.8L267.3 267L265.4 263L263.4 261.2L262.3 259.5L262.1 262.7C262.1 262.7 263.6 265.9 264.6 266.9C265.6 267.9 267.2 269.7 267.5 269.6Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.7 260.9C259.7 260.9 260.1 261.7 260.1 262.3V263.3L261.5 266.1C262.2 267.4 262.9 268.6 263.5 268.4C264 268.1 264.2 267.2 264.3 267.1C264.3 267 263.6 268.1 263.3 267.9C263 267.7 261.3 262.7 261.4 262.6L260.6 262L259.7 260.9ZM265.4 265.2L264 262.7C263.467 261.833 263.1 261.367 262.9 261.3C262.7 261.3 262.5 259.8 262.5 259.8C262.5 259.8 263 260.8 263.8 261.2C264.467 261.6 264.967 261.767 265.3 261.7L265.5 263.3L265.4 265.3V265.2Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M262 262.6C262 262.6 262.3 263.7 263 264.8L264.9 267.1C264.9 267.1 263.6 265.9 262.9 264.9C262.2 263.9 261.8 262.6 261.8 262.6H261.9H262Z", fill: "#5C3A1D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M265.6 261.3C265.6 261.3 266 260.3 266.3 260.3L267.2 260.1C267.2 260.1 266.7 260 266.2 259.5L265.2 258.5L265.5 260L265.6 261.3ZM265.3 261.6L267.3 266C267.6 267.2 267.6 268.8 267.6 268.8L267 266.7C266.7 265.7 265.3 263 265.2 262.7C265.1 262.4 265.2 261.7 265.2 261.7L265.3 261.6Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267.4 259.5L267.8 254.7L267.4 252.9L265.2 248.1C265.2 248.1 265.1 248.8 264.5 248.8C263.572 248.542 262.738 248.021 262.1 247.3C261.664 248.555 261.595 249.907 261.9 251.2L266.2 259.1L267.4 259.5Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259 262.7C259 262.7 259.7 263.5 260 263.4C260.3 263.3 260.3 261.8 259.8 260.9C259.3 260 254.2 253.2 253.4 252.8C252.7 252.4 259 262.7 259 262.7Z", fill: "#8B441F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M262.5 259.9C262.6 260.2 263 262.4 262.1 262.6C260.9 262.8 255.2 255.1 254.4 254C254.4 254 250.8 251.8 250.8 251.2C250.8 250.6 254.6 252 254.6 252L262.1 259.2L262.5 259.9Z", fill: "#8B441F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259 262.7C259 262.7 258.4 261.6 258.3 260.7C258.233 260.033 258.133 259.567 258 259.3L253.4 252.7L251.6 251.6L251.8 253.5C251.8 253.5 253.1 255.9 255 258.1L259 262.7Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M265.3 261.6C265.8 261.3 265.6 259.4 265.3 258.8C265.2 258.2 261.8 251.2 261.8 251.2L260.8 251.6L258.9 250.1L257.9 249L258.2 251.5V252.8L260.8 257.4L265.3 261.6ZM269.1 257.4L269.9 256.4L269.4 252.9L267.2 245.3C267.2 245.3 266.7 245.5 266.2 245.1L265 244.1L265.5 248.6L267.8 255L268 256.9L269.1 257.4Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M262.1 259.2C262.1 259.2 259.9 256.8 259.1 255.6L257.8 253.2C257.8 253.2 257.2 253.5 256.4 253.2C255.7 252.8 254.6 251.7 254.6 251.7C254.6 251.7 254 252.9 257.2 256.2C260.9 259.9 262.2 259.2 262.2 259.2H262.1Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267.5 260C268.5 259.6 268.5 255.7 267.5 253C266.6 250.4 265.2 248 265.2 248C265.2 248 267 252.4 267.4 254C267.8 255.8 267.4 257 267.1 257C266.8 256.9 266.8 256 266.1 254.3C265.3 252.6 264.8 252.2 264.8 252.2C264.8 252.2 267.4 259.2 266.7 259.1C266 258.9 262.4 251.1 262.2 250.9C262.1 250.7 262 251.2 262 251.2C262 251.2 265.2 261 267.5 260Z", fill: "#8B441F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M269.6 241L271.2 244.4L271.7 247.9L271.8 250.9C271.8 250.9 271.9 256.9 271.2 256.9C270.5 257.1 270.1 256.4 270.1 256.2L268.7 249.6L267.3 242.8L267.8 242.4L268 241.4L269 241.3L269.6 241Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M265.3 261.6C265.9 261.6 265.3 260 265.3 260C265.3 260 264.8 260.7 264.3 260.2C263.8 259.7 263.3 257.7 263.3 257.7L262.9 256.5C262.9 256.5 262.4 257.8 261.9 257.8C261.2 257.8 258.2 252.7 258.2 252.7L257.8 253.2C257.8 253.2 262.1 262.1 265.3 261.6Z", fill: "#8B441F" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M263.3 257.7C263.3 257.7 263.8 256.5 263.6 255.3C263.129 253.912 262.526 252.573 261.8 251.3L260.8 251.2L258.9 250.2C259.995 252.9 261.477 255.427 263.3 257.7ZM265.8 255.9C265.8 255.9 265.4 253.2 264.1 250.7C263.611 249.472 262.936 248.325 262.1 247.3V250.1C262.1 250.1 263.3 250.6 264.1 252.1L265.8 255.9ZM269.2 251.3C269.2 251.3 269 248.3 268.5 246.6L267.5 242.6L267.8 242.4H268.3C269 242.5 269.3 244.1 269.3 244.1L269.1 241.6L268.9 241.2H267.8C267.8 241.2 268 241.9 267.7 242.2C267.4 242.5 267.2 242.1 267.1 242L267 242.3L267.2 243.9V245.3C267.2 245.3 267.6 247 268.2 248.1L269.2 251.3ZM271.8 250.9C271.8 250.9 272.3 246.7 271.4 243.9C271.052 242.65 270.438 241.49 269.6 240.5L269.1 241.1C269.1 241.1 270.6 243.4 271.1 245.5C271.5 247.8 271.8 250.9 271.8 250.9ZM267.5 253.1C267.5 253.1 267.1 249.7 266.5 247.6L265.7 244.6L264.8 243.9C264.8 243.9 265.3 246.1 265.3 246.8L265.2 247.8C265.2 247.8 265.6 249 266.2 250C266.8 251 267.5 253 267.5 253V253.1Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M269.8 258.3C270.6 258.3 269.8 253.5 269.5 252.3L267.2 245.3C267.2 245.3 269.6 253.5 269.4 253.9C269.1 254.5 268.2 251.4 268 251.5C267.8 251.5 269.8 257 269 257.1C268.4 257.1 268 255.9 268 255.9V257.1C268 257.1 268.5 258.3 269.8 258.3Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M270.8 255.9C271.4 255.9 270.6 251.4 270.2 249.3L268.7 243.3C268.7 243.3 269.8 246.1 270.5 249.3C271.2 252.5 271.5 256.6 271 256.7C270.3 256.7 270 256.1 270 256.1V255.4C270 255.4 270.2 255.9 270.8 255.9Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M263 261.2C263 261.5 263 263.1 262.2 263C261.4 262.9 259.9 261.5 259.6 260.5C259.6 260.5 261.4 262.5 262 262.5C262.6 262.5 262.6 260.5 262.5 259.9C262.5 259.4 263 261.2 263 261.2Z", fill: "#312317" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M267.3 239.6C267.3 239.6 268.3 240.3 269.3 239.8C269.691 239.531 270.013 239.174 270.239 238.756C270.465 238.339 270.588 237.874 270.6 237.4C270.666 236.8 270.5 236.167 270.1 235.5C269.5 234.8 270.9 236.1 270.9 237.4C270.9 238.7 270.9 240.8 268.9 241.3C266.9 241.8 267.8 241.2 267.8 241.2L267.3 239.6Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M265.7 235.8C265.7 235.8 267 237.8 267.5 239.8C267.967 241.533 267.967 242.4 267.5 242.4C267.234 242.4 267.1 242.167 267.1 241.7L265.7 235.8Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243.3 238.3L251.7 250.6L262.4 238.6L255.7 231.8L243.3 238.3Z", fill: "#1E2121" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254 230.8L253.5 232.8L254.5 236L256.3 237.8L258.3 239.2L258.8 237.7L259.3 235.9L259.8 235.7L261.1 236.2L262 234.9L263.4 232.5L263.1 231.5L262.7 230.8L260.6 227.1L259.9 228.5L259.2 228.9L258 228.2L256.5 230.2L254.6 229.3L254 230.8Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M258.4 239.2C258.4 239.2 258.7 238.9 258.9 238C259 237 259.1 234 258.8 232.8C258.5 231.6 257.8 229.3 257.6 229.5C257.4 229.6 258.8 232 258.6 235C258.4 237.9 258.6 238.7 257.9 239C257.2 239.3 258.4 239.2 258.4 239.2Z", fill: "#5C3818" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M258.8 234.3C258.8 234.3 260.2 236.3 260.9 235.5C261.6 234.8 261.2 232.3 260.9 231.3L259.9 228.8L260.3 228.4L261 231.1C261.3 232.2 262 235.3 261.1 235.9C260.2 236.5 258.9 234.7 258.9 234.7V234.3H258.8Z", fill: "#5C3818" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.3 235.6C254.3 235.6 254.8 234.9 255.4 234.9C256.066 234.967 256.333 235.033 256.2 235.1L256.8 236.7L257.7 238.4L258.5 239.3L258.1 239.8H257.4L255.4 238.8L254.8 238L254.3 235.6Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.6 253C257 253.4 255.5 252.7 254.6 251.9L249.2 246.5L248.6 244L250.4 244.4L253.4 243.1L254 242.1L257.7 240.1L259.7 239.1L264.2 238.9L265.2 236.8C265.2 236.8 266.8 239.4 267 240.4C267.2 241.4 267.2 244.7 266.8 244.9C266.4 245.1 265 243.9 264.8 243.9C264.5 243.9 265.8 248.5 264.8 248.7C263.7 248.8 261.8 246.9 261.8 246.9C261.8 246.9 262.6 251.1 261.8 251.1C260.8 251.1 258.6 250.1 257.7 249.1C257.7 249.1 258.7 252.5 257.7 253.1L257.6 253Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256.8 247.7L257.7 249.1C257.9 249.4 257.7 251.4 257.5 251.7C257.2 252.5 256.2 250.8 255.7 249.4L253.9 246.4C253.9 246 256.8 247.7 256.8 247.7ZM265.5 237.4C265.5 237.4 267 243.9 266.3 244.1C265.5 244.3 263.3 242.1 263.1 241.7L259.8 236.6L259.2 235.9L259.4 235.6L260.7 236.1L265.5 237.4Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.3 249.8C254 250.1 253.3 249 253 248.8L250.6 246.1C249.466 245.033 248.866 244.367 248.8 244.1C248.8 243.8 248.1 243.1 248.1 243.1L248.7 242.5L249.4 242.4C249.4 242.4 253.7 245.8 254 246.4C254.3 246.9 254.5 249.7 254.3 249.9V249.8ZM260.8 249.9C260.6 250.1 257.8 248 256.5 246.3C255.2 244.6 254.1 243.1 253.8 242.3L253.3 240.8L254.1 241C254.1 241 261.1 249.6 260.8 249.9ZM261.8 246.9C261.6 247.1 260.4 246.2 259.6 245.2C258.9 244.2 259.3 242.9 259.3 242.9C259.3 242.9 261.9 246.7 261.8 246.9ZM263.4 246.5C263 246.7 261.4 244.7 260 242.5C259 240.9 258.7 240.6 258.5 240.5L257.5 240.2L257.3 240L258 239.8L258.6 239.1L259.4 238.1L262.8 244.9C262.8 244.9 263.6 246.4 263.4 246.5Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.6 251.9C254.6 252.2 254.6 252.4 253.6 252.3C252.8 252.3 247.9 249.6 245.8 246.1L243.3 242.1L244.3 241L251.9 249.7L254.6 251.9Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.6 251.9C254.6 252.3 254.334 252.433 253.8 252.3C253.2 252.2 251.3 251.5 248.3 248.1C245.3 244.7 244 242.2 244 242.1L243.9 240.7L244.8 240.3L250 248.3L254.6 251.9Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.7 248.5C259.7 248.5 258.1 247.3 257.1 246.1C256.1 244.9 254.1 242.1 254.1 241.5C254.1 240.9 255.1 241 255.1 241L255 239.5L255.2 239.1L256.7 239.7L258.6 242L259.3 243C259.3 243 260.5 245.8 260.3 246C260 246.4 258.3 244.5 258.1 244.7C257.9 244.9 260.1 248.2 259.7 248.5ZM256.7 247.7C256.7 247.7 257.3 248.5 257 249C256.7 249.5 256.6 249.9 255.8 248.7C255 247.5 254.1 246.2 254 246.3C254 246.4 254.1 248.1 253.7 248.1C253.3 248.1 252.1 246.7 251.3 245.5L249.3 242.5C249.3 242.5 249.5 242 249.4 240.7L249.3 238.7C249.3 238.7 249.3 239.1 249.5 239.4L249.9 240L252.7 243.3L253.5 242.8L255.2 246.1L256.7 247.7ZM245.9 242.7C245.9 242.7 248.1 246.7 250.2 248.8C251.452 250.108 252.947 251.161 254.6 251.9L248 244L246 242.8L245.9 242.7ZM262.9 245.1C262.8 245.1 261.4 243.7 260.5 242.4C259.722 241.197 259.242 239.826 259.1 238.4L259.3 235.6C259.3 235.6 261.6 238 262.1 239.1C262.5 240.1 263.4 241.7 263.2 241.9C263 242.1 261.5 240.9 261.3 241.1C261.1 241.4 263.1 244.9 262.9 245.1ZM265.5 242.6C265.2 242.7 264 241.4 263.7 240.6C263.4 239.6 263.3 238 263.3 238L262.3 235.6L262.4 233L263.4 232.8L264.9 234.9C264.9 234.9 265.5 236.2 265.5 237.9C265.5 239.8 265.8 242.4 265.5 242.6ZM247.5 249.1C245.5 246.6 244.2 244.1 244.2 244.1L243.5 241.9L243.9 242.2C243.9 242.2 244.5 244.8 247.6 247.9C250.8 251 251.5 251.3 251.5 251.3C251.5 251.3 252.1 253 251.8 253.6C251.8 253.6 249.5 251.6 247.5 249.1Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M250.9 252.7C250.9 252.7 248.2 250.3 246 247.7C243.9 244.9 242.5 242.3 242.5 242.3L243.5 241.4C243.5 241.4 245.3 245.6 246.5 247.3L250.9 252.7ZM254.6 251.9L250 247C249.03 245.937 248.19 244.762 247.5 243.5L248.8 244C248.8 244 249.3 245.4 250.5 246.8L254.6 251.9ZM254 246.3C254 246.3 252.3 244.3 251.5 242.9L249.8 239.9C249.8 239.9 252.1 242.6 252.8 242.7H253.5C253.3 242.6 253.2 243.7 253.5 244.5C253.6 245.3 254 246.3 254 246.3ZM254.7 237.9C254.7 237.9 255 239.3 254.8 240.2C254.6 241.1 254.1 241 254.1 241L255.6 242.8C256.1 243.4 257.4 244.3 257.4 244.3L255.9 242.1C255.5 241.4 254.9 240.5 255.2 239.8C255.4 239.1 256.8 240.3 257.2 240.6L259.2 242.9C259.2 242.9 258.7 240.9 257.8 240.2L254.8 237.9H254.7Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M261.6 242.3L260.2 238.8L258.9 234.8V237C258.9 238 258.5 239.4 258.1 239.6C257.7 239.8 257.6 239.8 256.8 239.6C256.1 239.4 257.4 240 257.4 240C257.4 240 258.2 240 258.4 239.6C258.8 239.2 258.9 238.4 259.3 238.5C259.6 238.6 260 239.8 260.3 240.4L261.6 242.3Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259 234.7C259 234.7 260.6 236.6 261.3 235.7C262 234.8 261.6 232.6 261.6 232.6C261.6 232.6 262.6 232.9 262.9 232.6C263.2 232.3 263.1 231.6 263.1 231.6C263.1 231.6 264.9 234.1 265.7 235.8C266.6 237.4 267 240.4 267 240.4C267 240.4 265.5 238 264.8 235.8C264.1 233.6 263.1 232.8 262.9 233C262.7 233.2 262.5 234.6 262.7 235.4L263.9 238.1C264.4 239.2 264.9 240.9 264.9 240.9L263.5 238.9C262.967 238.233 262.5 237.8 262.1 237.6C261.8 237.3 261.3 236.6 260.8 236.5C260.3 236.4 259.3 235.8 259.3 236.2L259.1 235.4L259 234.7Z", fill: "#202020" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253.4 242.6L255 245.4L256.8 247.7C256.8 247.7 255.2 246.3 254.6 245.4C254 244.4 253.4 242.6 253.4 242.6Z", fill: "#171717" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M264.1 243C263.9 243.2 263.1 242.9 263.1 243.2C263 243.5 263.5 244.5 264.1 245.1C264.566 245.633 264.866 245.8 265 245.6L264.8 244.5V243C264.7 242.8 264.1 243 264.1 243Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.7 231.5L243.7 232.1L242.7 234.4L243 238.7L244.7 241.1C245.3 242.1 247.5 244.5 248 244.3C248.5 244.1 249.2 242.5 249.2 241.6L249.4 239C249.4 239 249.9 240 250.8 240.9C251.7 241.9 252.5 242.8 252.8 242.7C253.3 242.7 254.5 240.2 254.6 239.8C254.6 239.5 251.4 231.8 251.4 231.8L250 231.1L244.7 231.5Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.8 238L252.7 240.9C253 241.9 252.7 242.7 252.9 242.7C253 242.7 254.7 240.5 254.7 239.5C254.7 238.5 254.7 237.5 254.3 234.5C253.8 231.4 254.4 230.5 254.4 230.5L253.4 229.7L251.9 233L251.8 238ZM246.3 236.2L246.8 240.2C247 241.2 247.6 242.8 247.9 242.7C248.2 242.7 249.2 240.1 249.3 239.2C249.3 239.2 248.6 237.9 248.6 234.8C248.6 231.7 248.3 231.3 248.3 231.3L246.3 236.2Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242 230C242 230 239.5 233.6 239.6 235.6C239.6 237.6 239.9 237.2 240.6 239C241.1 240.8 241.4 243.4 241.4 243.6C241.533 243.8 241.7 243.7 241.9 243.3L242 230Z", fill: "#45392D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242 230.5C242 230.5 239.8 233.8 240 235.7C240.1 237.6 240.4 237.5 241 239.2C241.6 240.9 241.7 243.6 241.7 243.6C241.7 243.6 242.4 243.4 243.2 242.8L244.7 241.1L243.9 239.4L243.3 237.9L242.7 236.9L242.9 233.8L243.5 231.4V230.6L242 230.5Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253.8 236.3L252.2 235.8C251.8 235.5 251.6 234.8 251.6 234.8L251.9 234.2L253.8 236.3Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242.4 230.8C242.4 230.8 240.9 234.2 241 236.6C241.253 238.452 241.828 240.246 242.7 241.9V234.2L243.4 231.9V230.7L242.4 230.8Z", fill: "#D2A567" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.3 231.6V233C246.2 233.5 245.3 234 245 234.6L244.2 236.9C244.2 236.9 244.5 235.9 245.1 235.4C245.6 234.9 245.8 234.4 245.9 234.8C246 235.1 246.2 236.4 246.1 236.7C245.9 236.833 245.634 237.367 245.3 238.3C245.094 238.917 245.094 239.583 245.3 240.2L245.7 238.4C245.9 237.933 246.067 237.7 246.2 237.7L247.2 239.5V238C247.4 237.3 248.2 236.4 248.3 236.4C248.6 236.4 248.9 236.2 248.1 235.8C247.8 235.6 248 232.4 248.1 232.2C248.4 232.1 249.6 232.1 249.5 231.6L248.2 229.9L246.2 231.6H246.3Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M253.6 238.5L252.4 238.3L252 237.8V237.3L253 237.8L253.6 238.5Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243.6 238.9L243.1 240.1L242.8 241.3L242.5 238.7L242.2 236.8L241.7 237.3C241.7 237.3 241.7 236.1 241.9 235.5C242.234 234.767 242.3 234.233 242.1 233.9C241.834 233.9 241.567 234.1 241.3 234.5L240.7 235.5L241.2 234C241.5 233.6 242.6 232.3 242.9 231.7L243.1 230.7L243.9 230.6C243.9 230.6 244.8 231.3 244.8 231.9C244.8 232.2 243.9 232.5 243.9 232.6C243.9 232.7 243.2 232.6 243.1 235.2C242.9 237.9 243.6 237.7 243.6 238.9ZM251 231.9C251 231.9 251.2 233.4 251 233.9C250.867 234.3 250.6 234.733 250.2 235.2C249.8 235.8 249.9 237.2 249.9 237.2L250.3 236.2L250.8 235.3C251 235.3 251.234 235.733 251.5 236.6L252.1 238.6C252.1 238.6 251.9 237.6 252.1 237.6C252.3 237.6 252.5 237.6 252.9 237.9L253.6 238.5C253.6 238.5 253.6 238.1 253.1 237.5C252.6 236.9 252.3 237.1 252.1 236.4C251.967 235.6 251.934 235.033 252 234.7C252.067 234.5 252.3 234.667 252.7 235.2L253.9 236.3L253.4 235.5V233.2C253.4 232.333 253.467 231.733 253.6 231.4C253.9 231.2 254 230.2 253.8 230C253.8 229.8 251 232 251 232V231.9Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.7 228.9C259.7 228.9 259.7 230.5 260 231.5L260.9 234.5C260.9 234.5 260 233 259.6 231.7C259.2 230.3 258.9 228.9 258.6 228.7C258.2 228.7 257.8 229.4 257.8 230C257.865 231.171 258.136 232.322 258.6 233.4C259.1 234.1 257.9 232.4 257.6 231.5L257 229.8C257 229.8 256.7 230.5 256.8 231.4C257 232.3 257.7 233.5 257.7 233.5L256.9 232.7L256.4 232.2C256.4 232.2 256.4 233.4 256.7 233.9L257.7 235.2L256.7 234.3L256.3 233.8C256.3 233.8 256.4 235.5 256.8 236.4L258 238.7C258 238.7 257 238 256.4 236.5C255.795 234.388 255.525 232.195 255.6 230L256.6 228.5C257 227.8 257.6 224.7 257.6 224.7C257.6 224.7 258.2 227.6 258.7 228.2L259.7 228.9ZM252.8 228L253.4 229.1L253.9 229.9C253.9 229.9 253 230.9 252.1 231.6C251.2 232.3 249.9 233.1 249.6 232.7C249.333 232.233 249.233 231.967 249.3 231.9L251.2 230.4C251.751 229.934 252.194 229.354 252.5 228.7L252.8 228ZM244.1 230.9C244.1 230.9 244.2 232.7 245 232.6C245.8 232.6 248 230.3 248.1 230.2C248.3 230.2 248.4 229.6 248.4 229.4V228.8C248.4 228.8 245.9 231.2 245.1 231.3C244.912 231.336 244.719 231.317 244.541 231.246C244.364 231.175 244.211 231.055 244.1 230.9ZM244.1 228.5L243.9 230.1L244.1 230.8C244.2 230.9 242.4 231.4 242.1 230.8C241.8 230.2 242 229.6 242 229.6L243.2 229.5C243.6 229.4 244.2 228.5 244.2 228.5H244.1ZM260.4 226C260.4 226 261.1 227.8 261.6 228.6L262.7 230.8L261.2 229.2L260.2 228.4L260.4 227.5V226Z", fill: "#1E2121" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.7 229.6H242.7L243.4 229.5L244 228.5C244 228.5 243.7 229.6 244 230.5C244.267 231.167 244.533 231.467 244.8 231.4C245.499 231.289 246.137 230.935 246.6 230.4L248.3 229C248.3 229 248.1 230 248.5 231C248.833 232 249.433 232.167 250.3 231.5C251.1 230.8 251.9 229.7 252.3 229.2L252.9 228.4L253.8 227.7L254.6 223.3L254.1 222.7L253.1 223.3L251.7 222.7L251.3 222.2L250.5 223.5L249.7 224H249.3L248.3 224.3L247.9 223.4L247.7 222.8L247.2 222.6L245.2 224.6L244.2 224.5L243.1 226.2L242.3 227.2L241.5 229.2L241.7 229.6Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.1 225.2C251.1 225.2 251.3 226.2 250.7 228.1C250.1 230 249.4 231.1 249.4 231.1C249.4 231.1 251.4 230 252.3 227.9C253.3 225.7 253 223.3 253 223.3L251.1 225.2ZM253.5 223.2C253.5 223.2 253.7 223.5 253.5 225.2L252.9 228.4L253.4 229.3C253.6 229.8 254.3 230.7 254.8 230.6C255.334 230.467 255.9 229.867 256.5 228.8L257.5 226.5C257.767 226.367 257.9 226.433 257.9 226.7C257.9 226.7 258.1 227.7 258.6 228.1C259.1 228.5 259.6 229.1 260 228.9C260.334 228.633 260.5 228.3 260.5 227.9L259.5 224.7L258.2 221.5L257.4 220.3L255.1 220.5L253.5 223.2Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M257.4 220.3C257.4 220.3 258 221.6 258.1 223.1C258.2 224.6 257.8 226.1 257.8 226.1V223.1C257.7 221.9 257.2 221.4 257.2 221.1L257.4 220.3Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M260.5 226V228C260.3 228.5 259.5 227.5 258.9 225.5C258.4 223.5 258.5 223.1 258.1 222.1L257.4 220.3L258.5 220.1L260.5 226ZM254.9 229.8C254.9 229.8 257.1 228.5 257.4 224.8C257.4 223.1 256.4 220.3 256.4 220.3C256.4 220.3 256.4 223.3 255.6 225.3L254.1 228.4L254.9 227.9L255.5 227V228.3L254.9 229.8ZM253 223.3C253 223.3 253 224.1 252 224.8C251.1 225.6 249.5 226.4 249.5 226.4C249.5 226.4 250.7 225.3 251.1 224.3C251.5 223.3 251.2 222.7 251.2 222.7C251.2 222.7 251.1 223.2 250.6 223.7C250.1 224.2 249.3 224.1 249.3 224.1C249.3 224.1 249.3 223.6 249.8 223.1L250 222.5C250.2 221.7 250.9 220.6 250.9 220.6C250.9 220.6 251.4 221.8 251.9 222.3L253 223.3Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M259.8 218.9C259.8 218.9 260.3 220.2 260.5 222.1C260.7 223.9 260.5 226.1 260.5 226.1L259.1 223.6L258.6 221.3L257.7 220.5L256.9 220.4C256.9 220.4 257.6 220.1 257.6 219.5V218.7C258.3 218.972 259.062 219.041 259.8 218.9ZM254.9 226.7C254.9 226.7 256.1 225.1 256.4 223C256.7 221 256.4 220.3 256.4 220.3C256.4 220.3 255.9 220.2 255.4 219.8C254.9 219.4 254.4 218.4 254.4 218.4C254.4 218.4 254.6 219.4 254.4 220.8C254.2 222.2 253 223.3 253 223.3C253 223.3 253.6 223.5 254.2 223.2C255.4 222.5 255.2 221.2 255.2 221.2C255.2 221.2 255.5 221.4 255.5 223C255.5 224.6 254.9 226.7 254.9 226.7Z", fill: "#1E2121" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241 229.5C240.7 229.5 241.7 227.9 242.4 226.8L244.1 224.1C244.1 224.1 244.3 224.3 244.7 224.3C245.105 224.232 245.491 224.081 245.835 223.857C246.179 223.634 246.473 223.342 246.7 223L247.4 221C247.4 220.7 247.4 222.4 248.2 223.3C249 224.3 248.9 224.2 249.2 224.1C249.2 224.1 249.2 225.3 248.9 226.3L248.3 229C248.3 229 248.4 227 248.1 226.4C247.8 225.8 247.6 226.4 247.3 227.2C247 227.9 246.4 228.4 246.4 228.4L247.2 226.6C247.5 225.6 247.3 225.6 247.2 225.6L246.7 225.9C246.3 226.3 246.067 226.467 246 226.4C245.9 226.3 246.4 226.1 246.6 225.6C246.6 225.1 247.1 224.4 247.3 224.2L247.7 223.4C247.7 223.133 247.633 222.933 247.5 222.8C247.367 222.667 247 223 246.4 223.8C245.6 224.5 245.4 224.5 245.4 224.8L244.7 226.8L243.8 229.1L243.4 229.5L244 227.5C244.4 226.5 245 225 244.8 224.8C244.667 224.6 244.5 224.6 244.3 224.8C244.2 225 243.3 225.9 242.6 227C241.9 228.1 241.9 229.5 241.7 229.6L241 229.5Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M260.5 217.7C260.5 217.8 260.6 218.7 259.8 218.9C259.141 219.097 258.435 219.061 257.8 218.8V217.6L260.5 217.7Z", fill: "#874F20" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.8 220.3L244.2 222C243.7 223 243 223.7 243.1 223.8C243.2 223.9 243.6 224.4 244.3 224.3C245 224.2 245.1 220.5 245.1 220.5V220.3H244.8Z", fill: "#B27129" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.8 218.2C254.8 218.2 254.4 223.2 253 223.2C251.6 223.2 251 220.7 251 220.7C251 220.7 250.8 224.2 249 224.2C248.1 224.2 247.3 221.5 247.4 221C247.4 221 247.1 222.8 246.2 223.5C244.5 224.9 243.4 224.2 243.4 224C243.3 223.8 244.8 222.3 245 220.3C245 220.433 245.234 220.267 245.7 219.8C246.1 219.133 246.434 218.767 246.7 218.7C247.2 218.7 249.3 217.8 249.3 217.8L250.3 216.5C250.3 216.5 250.5 216.9 251.3 216.4C251.763 216.041 252.111 215.554 252.3 215L254.5 216.8L254.7 218.2H254.8Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M249.1 213.3L251.3 216.3L251.8 215.9C252.066 216.3 252.166 216.633 252.1 216.9C251.8 217.6 251.1 218.7 251.6 219.9C251.533 219.833 251.6 219.333 251.8 218.4C252.066 217.6 252.3 217.267 252.5 217.4C252.7 217.4 253 222 253.3 222C253.6 222 254 219.9 254 218.4C254 216.9 254.3 218.1 254.5 218.4C254.6 218.7 255.9 220.8 257 220.4C258 220.2 258 218.2 257.9 217.8L257.1 214.8L252.2 211.8L251.8 213C251.5 213.8 249.1 213.3 249.1 213.3Z", fill: "#B27129" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 212.8C256 212.8 256.3 213.1 256.8 214.3C257.3 215.5 257.3 219.4 256.8 219.4C256.1 219.4 254.8 218.7 254.6 218.1C254.4 217.6 254.7 215.7 254.3 215.1C253.841 214.43 253.503 213.686 253.3 212.9L253.4 211.4L254.5 211L256.1 212.8H256Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M255.7 211.6L257.7 214.7L259.7 217.3L260.5 217.7C260.194 218.045 259.777 218.273 259.322 218.346C258.866 218.419 258.399 218.332 258 218.1C257.3 217.7 257.7 216.5 256.8 214.5C256.199 213.297 255.305 212.266 254.2 211.5L254.8 211L255.8 211.6H255.7Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.6 210C254.6 210 256.4 211.1 257.1 212.5L258.9 215.9C259.7 217.2 260.6 217.6 260.5 217.7C260.433 217.833 260.1 217.833 259.5 217.7L258.5 216.4L256.5 213C255.959 212.393 255.316 211.886 254.6 211.5L255.9 213.2C256.383 213.956 256.691 214.81 256.8 215.7L255.8 214.1C255.2 212.9 253.7 211.4 253.6 211.6L254.8 214L255.8 216.6L254.4 214.3C253.6 213 253.4 213.2 253.1 212.8L252 211.4C252 211.4 252.7 211.6 253.5 211.1C254.2 210.6 254.5 209.9 254.5 209.9L254.6 210Z", fill: "#1E2121" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M249.8 213.3C249.8 213.3 251 213.6 251.7 213.5H252.6C252.6 213.5 253 214 253 214.6C253 215.2 252.5 216.3 252.4 216.4C252.2 216.4 252.2 215.4 251.9 215L249.9 213.3H249.8Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M250.5 216.5C250.5 216.5 250.9 217.8 250.5 219.5C250.3 221.4 249.2 223.2 249 223.2C248.7 223.2 248.8 221.2 248.7 220.2V219.8L248.2 221C248.2 220.9 248.6 219.1 248.5 219V218.3L249.8 216.7L250.5 216.5Z", fill: "#B27129" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M248.2 217.8C247.8 218.3 247.2 218.1 246.8 218.3C246.3 218.4 246.1 219.2 246.1 219.2C246.1 219.2 246.5 218.9 246.7 219C246.9 219.1 247.1 219 246.7 220C246.3 220.8 244.9 222.3 245 222.4C245 222.4 246.6 221.1 247 220.4C247.6 219.6 247.5 219.2 247.6 218.9C247.7 218.6 248.3 218.3 248.5 218.3C248.634 218.167 248.8 218.367 249 218.9L249.4 220.9L250.1 218.9L250.2 216.6L249.7 216.5L248.5 215.8C248.5 215.8 248.7 217.2 248.2 217.8Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.6 208.6C254.6 208.6 255.1 209.9 254.1 210.7C253.833 210.967 253.467 211.133 253 211.2C252.4 211.2 251.6 210.7 251.6 210.7L248.5 209.4L246.8 208.9L246 208.7L246.1 207.8L248.6 207.9L251 208.9L252 209.2L253 209.3H253.6L254.2 209.2L254.5 208.9L254.6 208.6Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M254.6 208.6C254.7 208.8 254.4 209.6 254.2 209.6C254 209.8 253.467 209.833 252.6 209.7C251.6 209.5 250.7 208.9 249.6 208.7C248.667 208.3 247.833 208.1 247.1 208.1C246 208.1 246.6 207.7 246.6 207.7C246.6 207.7 248.5 207.5 250.1 208.1C251.7 208.7 252.4 209.1 253.2 209.1C254.4 209.1 254.6 208.6 254.6 208.6Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.1 207.7H246.8L247.3 207.5L247.2 208H246.2L246.1 207.7Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M252.2 211.5C252.2 211.5 253.3 212.5 253 213.5L251 212.5L247.5 211.1L245.7 210.5L245.4 210.2L246 209.6V209L248.3 209.3L250.7 210L252.2 211.5Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M249.9 213C249.9 213 251.9 215.5 251.4 216.4L246.9 213.4L245.2 216.1L241.5 214.3C241.5 214.3 244.5 212 244.9 211.5L245.2 210.9L246.9 211.3L249.6 212.1L249.9 213Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M248.8 209.3C248.8 209.3 250.4 209.7 251.5 210.3C252.5 210.7 253.9 210.9 253.9 210.9C253.9 210.9 253.3 211.5 252.2 211.5C251.733 211.367 251.2 211.033 250.6 210.5C249.7 209.7 248.6 209.7 248.6 209.7L248.8 209.3Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246 208.4L247.9 209C248.6 209.3 248.6 209.2 248.9 209.2L249 209C249 209 249.2 209.7 248.6 209.7C248 209.7 247.9 209.5 247.2 209.2C246.5 208.9 246 209.2 246 209.2V208.4Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M252.3 212.9C252.3 212.9 253.2 213.4 253 213.5C252.867 213.633 252.434 213.733 251.7 213.8C251.1 213.8 250.6 213.733 250.2 213.6C249.6 213.4 249.4 212.5 248.2 212L245.9 211.2L244.9 211L245.7 210.7L248.3 211.2L250.5 211.9L251.8 212.5L252.3 212.9ZM248 214.4L248.5 216.4L248.2 217.7L247.5 218.1L246.9 217.9L246.7 217.5C246.7 217.5 247 217 246.7 216.6C246.4 216.2 245.1 215.6 245.1 215.6C245.1 215.6 245.6 214.6 246.1 214.4C246.8 214.2 246.5 213.4 246.5 213.4L248 214.4Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.4 210.2C245.4 210.2 245.8 210.6 246.7 210.7L248.4 211C248.6 211.1 249.2 210.8 249.3 210.8L248.8 211.1L250.8 211.8C251.7 212.2 252.4 212.8 252.4 212.8L250.8 212.1L248.4 211.4C246.8 211.1 245.3 211.2 244.9 211.1C244.5 211 245.1 211 245.2 210.8C245.4 210.533 245.466 210.333 245.4 210.2Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.2 215.8C251.2 215.8 251.7 216.4 251.2 216.6C250.7 216.8 249.2 216.7 248.6 216L248.2 215C247.9 214.7 246.9 214 246.2 213.7C245.7 213.3 246.5 213.2 246.5 213.2L249.4 214.5C250.2 214.9 251.2 215.8 251.2 215.8Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M251.3 215.9C251.3 215.9 250.3 214.5 247.3 213.3L248.2 213.1H246.7L246 212.8C244.4 212.4 244.3 212.4 244.2 212.2C244.134 212.067 244 212.167 243.8 212.5L243.2 213.3C243.848 213.098 244.536 213.063 245.2 213.2C246 213.4 246.267 213.7 246 214.1C246 214.4 244.9 215.7 245 215.7C245.1 215.7 245.7 214.5 246.5 214.7C247.234 214.967 247.567 215.167 247.5 215.3L247.4 214.6C247.2 214.4 246.4 213.6 246.6 213.6C246.8 213.6 247.8 213.9 249.2 214.6C250.6 215.3 250.8 215.5 251.2 215.9H251.3Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M246.5 213.6C246.5 213.6 248.7 214.3 248.6 216.6C248.6 219 246.8 218.6 246.6 217.7C246.4 216.8 246.9 218.1 247.5 218C248.167 217.867 248.433 217.3 248.3 216.3C248.3 215.5 248.033 214.9 247.5 214.5L246.5 213.6Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.8 208C236.8 208 237.1 208 236.4 209.8C236.01 211.023 235.362 212.148 234.5 213.1C232.7 215.1 231.9 215.1 232.1 215.9C232.3 216.8 233 216.6 233.1 216.6C233.3 216.6 236.6 211.8 236.6 211.8L237.3 209L237.1 208.2L236.9 207.9L236.8 208Z", fill: "#6C3F18" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.9 204.5C244.9 204.5 245.9 205.9 245.5 208.5C245.2 211.2 241.7 213.5 241.7 213.5L236.7 217.1L234.5 216.9H233.9L233.2 216.5C233 216.5 232.8 215.5 232.8 215.5L233.4 214.7L235.3 212.9L236.4 211.2C236.4 211.2 237 210.2 237 209.3L236.9 207.9L237.3 208.6L237.5 210L237.3 211.6L238.7 210.6L240.4 209.9C240.4 209.9 240.9 209.8 241.3 208.9C241.6 207.9 241.9 206.4 241.9 205.7V204.3H242.1C242.1 204.4 242.6 205.3 242.6 205.7L242.9 207.9L243.8 207.1L244.5 205.9L244.9 204.5Z", fill: "#DBAD6C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M245.5 217.8C245.5 217.8 245.8 218 245.7 219C245.6 220 244.7 220.5 244.4 220.5V219.2L243.3 218.2L242.1 217.9L242.3 217.7C242.4 217.5 243.7 217 243.7 217L245.5 217.8Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.6 217.8C244.6 217.8 244.9 218.1 245.5 218C246.1 217.9 246.3 217 246 216.6C245.7 216.2 245.8 217.4 245.5 217.6C245.1 217.6 244.7 216.6 244.2 216.6C243.7 216.4 242.9 216.8 242.7 217.1C242.5 217.4 243.5 217.1 243.5 217.1L244.1 217.3L244.5 217.4L244.6 217.8Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.2 214.1C237.2 214.1 237.9 214.3 238.6 214.2C239.3 214.1 241.1 213.4 241.1 213.4L242.5 212.4C243.1 211.7 245 210.6 245.2 208.2C245.4 205.9 244.9 204.5 244.9 204.5C244.9 204.5 247.7 207.5 245.2 211C243.6 213.3 242.2 214 242.2 214C242.2 214 245 213.2 245.2 213.9C245.4 214.5 245.1 215.5 245 215.7C245 215.7 246.5 216 246.8 216.8C246.9 217.3 245 216.3 243.6 216.6C242.829 216.792 242.132 217.21 241.6 217.8C241.6 217.8 241.3 217.4 240.1 217.4C238.8 217.4 238.2 218 237.5 217.9C236.8 217.8 234.5 217.4 234.1 216.8L235.6 215.1C236.3 213.8 237.2 214.1 237.2 214.1Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243 207.8C243 207.8 244.1 206.8 244.5 205.9L244.9 204.5C244.9 204.5 245 205.3 244.4 206.3L243 207.8Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M242.7 205.4C242.7 205.4 243.7 208.8 242.7 210.3C241.7 211.7 237.6 213.5 237.6 213.5C237.6 213.5 240.7 211.8 241.6 209.9C242.6 207.9 242.6 206.3 242.6 206.3L242.7 205.4Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238.6 214.2C238.6 214.2 239.9 214.2 240.6 213.7C241.4 213.3 242.5 212.3 242.5 212.3C242.5 212.3 241.5 213.2 241.2 213.2C240.866 213.067 240.733 212.8 240.8 212.4C240.8 212.4 240.6 213.1 240 213.5L238.6 214.2ZM241.6 209.9C241.6 209.9 242.8 208.7 242.8 206.3C242.8 203.9 241.8 204.3 241.8 204.3C241.8 204.3 242.6 204.9 242.4 206.7C242.3 208.6 241.7 209.9 241.7 209.9H241.6ZM243 210.1C243 210.1 244.3 209.8 244.7 209.1C245.2 208.3 245.2 206.9 245.2 206.9C245.2 206.9 245 208.2 244.7 208.7C244.3 209.2 243 210.1 243 210.1ZM242.3 217.7C242.3 217.7 242.9 216.5 243.7 216.7C244.6 217.1 244.6 217.7 244.6 217.7C244.6 217.7 244.3 217.3 243.6 217.2L242.3 217.7ZM239.9 215.5L242.9 214.7L245.2 213.9C245.2 213.9 244.3 214.9 243 215.8C241.466 216.467 240.633 216.733 240.5 216.6C240.3 216.4 243 215.5 243.2 215C243.2 215 240.8 215.7 239.9 215.5Z", fill: "#1E2121" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237 212.7C237.464 213.018 237.782 213.508 237.886 214.061C237.989 214.614 237.868 215.186 237.55 215.65C237.231 216.114 236.742 216.433 236.189 216.536C235.635 216.639 235.064 216.518 234.6 216.2", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.9 212.9C237.192 213.225 237.364 213.64 237.385 214.076C237.407 214.512 237.278 214.942 237.02 215.295C236.762 215.647 236.39 215.899 235.968 216.009C235.545 216.12 235.098 216.081 234.7 215.9", fill: "#F16E16" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236 214C236.152 213.986 236.305 214.016 236.44 214.086C236.576 214.156 236.689 214.263 236.765 214.395C236.842 214.527 236.879 214.678 236.873 214.83C236.866 214.983 236.816 215.13 236.729 215.255C236.641 215.38 236.52 215.478 236.379 215.536C236.238 215.594 236.083 215.611 235.933 215.584C235.783 215.557 235.643 215.488 235.531 215.385C235.419 215.281 235.339 215.148 235.3 215", fill: "black" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.2 214.9C236.187 214.966 236.148 215.025 236.092 215.062C236.035 215.1 235.967 215.113 235.9 215.1C235.834 215.087 235.776 215.048 235.738 214.991C235.701 214.935 235.687 214.866 235.7 214.8C235.695 214.763 235.7 214.725 235.716 214.69C235.731 214.656 235.756 214.627 235.787 214.606C235.819 214.585 235.855 214.573 235.893 214.572C235.931 214.571 235.968 214.581 236 214.6C236 214.6 236.2 214.7 236.2 214.9Z", fill: "#D5D3CA" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M237.5 211.3C237.5 211.3 238.7 210.1 239 208.5V206L239.7 206.7L240 207.9L239.6 209.9L240.9 209.3C241.66 207.748 242.005 206.025 241.9 204.3C241.9 204.3 242.2 205 241.7 207.3C241.2 209.6 240.8 209.9 239.1 210.9C237.808 211.693 236.767 212.838 236.1 214.2L234.2 216.7C234.2 216.7 235.1 215.5 235.5 214.5C236.3 213.1 236.767 212.367 236.9 212.3L237.5 211.3Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.9 212.3C236.9 212.3 237.4 210.7 237.4 209.8C237.4 208.9 236.8 207.9 236.8 207.9C236.8 207.9 237.6 207.9 237.7 209.7C237.7 211.7 237.4 211.7 236.9 212.3Z", fill: "#904720" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M239.3 210.3C239.3 210.3 239.9 208.8 239.9 207.9C239.9 206.9 239.1 206 239.1 206C239.1 206 240.1 206.2 240.1 208C240.1 209.7 239.9 209.7 239.3 210.3Z", fill: "#4D2A15" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M233.7 216.8C233.7 216.8 233.2 216.2 233.3 215.8C233.4 215.4 233.3 215.2 234.4 214C235.21 213.293 235.888 212.446 236.4 211.5C236.7 210.9 237.6 209.2 236.9 207.9C236.9 207.9 237.4 209.9 236.3 211.3C235.561 212.434 234.65 213.447 233.6 214.3C232.6 215 232.6 215.3 232.6 215.7C232.6 216.1 232.7 216.367 232.9 216.5L233.7 216.8Z", fill: "#AB6D29" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.4 220.5C244.4 220.5 244.6 220.5 244.8 220.2C244.933 219.933 244.833 219.533 244.5 219C244.168 218.552 243.717 218.206 243.2 218L241.6 217.8C241.6 217.8 241.9 218.4 242.6 218.8C243 219 243.6 218.8 244 219.1C244.3 219.5 244.4 220.5 244.4 220.5Z", fill: "#6C4119" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M244.4 220.5C244.4 220.5 245.6 220.1 245.7 218.9L245.6 217.9C245.6 217.9 245.8 218.3 246.3 218.5L246.7 218.3C246.7 218.3 246 220.6 244.4 220.5Z", fill: "#6C4119" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.8 220.3L236.5 220.9L237.2 221.6L240.2 220.8L241.2 219.9L240.3 218.6H238.2L235.8 220.3Z", fill: "#BF802D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243 219.3L242.5 218.5C242.5 218.5 242.3 218.2 241.9 218C241.5 217.8 239.7 217.8 239.7 217.8L238.4 218C238.4 218 238 218.4 237.4 218.2L235.2 217.5L233.8 216.8C233.8 216.8 232.7 216.4 232.4 216.5C232.2 216.5 231.4 217.5 231.4 217.5C231.4 217.5 231.1 218.1 231.5 218.1C231.8 218.1 231 218.3 231 218.3C231 218.3 228.7 219.5 228.4 221.7C228.1 223.9 232.1 227.2 233.6 225.5C233.6 225.5 231.4 223.9 231.8 222.5C232.2 221.167 233.266 220.4 235 220.2C236.7 220.2 236.8 219.9 237.6 219.4C238.3 218.8 239.7 218.5 240.8 219.6C241.8 220.7 236.8 221.7 236.8 221.7L237.4 222.5C237.4 222.5 243.5 220.4 243 219.3Z", fill: "#F9C83A", stroke: "#8F4620", strokeWidth: "0.3" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.5 224.5C231.5 224.5 229 223.9 229.2 221.6C229.31 220.869 229.621 220.183 230.098 219.619C230.574 219.054 231.198 218.632 231.9 218.4C232.3 218.3 232.2 217.1 232.6 217C233 216.9 233.8 217 234.2 217.3C234.5 217.7 235.3 218 235.3 218C235.3 218 230.9 220 230.8 222.5C230.8 224.2 231.5 224.5 231.5 224.5Z", fill: "#FCF3D8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M243 219C243 219 242.7 219.2 242.6 219C242.2 218.2 241.1 218 240.2 218C239.1 218 238.3 218.4 237.5 218.4L236.1 218.2C235.1 218.2 233.3 216.8 232.8 216.9C232.4 217.167 232.233 217.5 232.3 217.9C232.3 218.1 231.5 218.2 231.3 217.9C231.1 217.6 232 216.5 232.8 216.5C234.9 216.5 236.5 217.9 237.5 217.9C238.5 217.9 238.8 217.4 240.2 217.4C241.6 217.4 243 218 243 219Z", fill: "#FDEAAF" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.2 220.7L237.9 220.1L239.7 219.5L238.1 220.5L236.4 220.9L236.2 220.7Z", fill: "#513625" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M232.6 225.8C232.466 226 231.666 225.7 230.2 224.9C228 223.7 228.4 222.4 228.4 222.4C228.4 222.4 228.1 220.9 229.6 219.4C231 217.8 231.2 218.3 231.3 218.4V218.5L230 219.5L229.3 220.6L228.8 221.6V222.6L229.5 223.8L231.5 225.1L232.6 225.8Z", fill: "#F9C83A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.9 217.2V217L231.7 217.1L231.9 217.2ZM231.9 217.2H231.7V217.3L231.9 217.2ZM231.9 217.2H231.7L231.3 217.7L231.1 218.2C231.1 218.4 231.2 218.567 231.4 218.7H232.6V218.4L232.4 218.3H231.6V218L231.9 217.6V217.2ZM231.9 217.2V217L231.8 216.8C231.762 216.795 231.724 216.8 231.69 216.816C231.655 216.831 231.626 216.856 231.605 216.887C231.584 216.919 231.573 216.955 231.572 216.993C231.571 217.03 231.58 217.068 231.6 217.1L231.9 217.2Z", fill: "#8B5122" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236.1 219.3L233.1 220.2C232.8 220.4 234 220.2 234.9 220.2H236.7C237.9 219.7 240.3 218.8 240.5 219.8C240.7 220.8 237.2 221.5 237.2 221.5V221.8L240 221.1L241.4 220.4L241.9 219.6L240.5 218.6H238.5L237.5 218.9L236.1 219.3Z", fill: "#F9C83A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M231.8 223.6C232 224.2 232.5 225.1 233 225.4C233 225.667 232.567 225.733 231.7 225.6C230.7 225.3 229.3 224.9 228.4 222.3V222.8L228.9 223.8L229.9 224.8L231.3 225.8L232.3 226L233.2 225.8L233.6 225.5L232.7 224.7L231.7 222.9V223.6H231.8Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.7 250.1V251.1H241.1L241.2 249.8L241.7 250.1ZM237.9 222.6L236.9 221.5H236.3L237.3 222.9L237.9 222.6Z", fill: "#FCCA3D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M241.6 252.4L240.3 251.6L238.3 251.1V251.4H238.5L240.2 251.9L241.5 252.6L241.6 252.4ZM241.6 249.9H239.4C238.6 250.167 238.2 250.367 238.2 250.5L238.3 250.7C238.899 250.243 239.649 250.029 240.4 250.1H241.5L241.6 249.9ZM241.3 247.8L239.3 248.8L237.9 249.8L238.1 250L238.5 249.7L239.4 249.1L241.4 248.1L241.3 247.8ZM239.9 245.6L239.7 246.6L239.2 247.2L237.9 248.6L237.2 249.3L237.3 249.5L238.5 248.3L239.4 247.3L239.9 246.7C240.166 246.1 240.266 245.767 240.2 245.7H239.9V245.6ZM238.2 244.6C238.352 245.196 238.317 245.824 238.1 246.4L237.3 248.1L236.9 248.9L236.8 249.2H237C237 249.2 238 247.5 238.3 246.5L238.5 245.3V244.6H238.2ZM236.5 244.4V245.4L236.4 246.7L235.9 248.2L235.6 249H235.8L236.6 246.8C236.8 246.333 236.866 245.833 236.8 245.3V244.4H236.5ZM235.2 244.4V245.4L235.1 246.9L234.7 248.9H234.9L235 248.3L235.3 247C235.5 246.1 235.5 244.4 235.5 244.4H235.2ZM233.9 244.7V246.9C233.6 247.7 233.5 248.9 233.5 248.9H233.8L234.1 247V244.6L233.9 244.7ZM232.8 244.7V244.9L232.5 246.7L232.1 248.2L231.9 249L232.1 249.1L232.8 246.8L233 244.9V244.8H232.8V244.7ZM231.5 244.8V245.3C231.5 245.833 231.4 246.4 231.2 247C230.933 247.533 230.6 247.933 230.2 248.2L229.5 248.7H229.4L229.5 248.9C229.5 248.9 230.9 248.1 231.5 247.1C231.779 246.367 231.881 245.58 231.8 244.8H231.5ZM230.8 244.6V244.7L230 246.2L229 247.2L228.5 247.4L228.3 247.5L228.4 247.8C228.4 247.8 229.6 247.1 230.2 246.4C230.7 245.7 231 244.6 231 244.6H230.8ZM229.6 244V244.1L229.2 244.6C229.2 244.8 229.1 244.967 228.9 245.1L228.1 245.6L227.6 245.9L227.7 246.1L228.2 245.8L229 245.3L229.6 244.6L229.8 244.1L229.6 244ZM229 243.2L228.8 243.5L228.1 244.2L227.7 244.6L227.4 244.8V245L228 244.7L229.2 243.4L229 243.2ZM228.8 242.7L228.6 242.9L227.9 243.3L227.2 243.6V243.9C227.4 243.9 227.566 243.833 227.7 243.7L228.9 242.9L228.8 242.7ZM228.5 242.2L227.9 242.5L227.5 242.7L227.1 242.9V243.1L227.6 243L228.6 242.4L228.5 242.2ZM228.3 241.1L227.8 241.5L227.1 241.8V242C227.5 242 227.833 241.867 228.1 241.6L228.5 241.3L228.3 241.1ZM228.3 239.3L227.9 239.7L227.3 240.5L227.2 240.6V240.9L227.4 240.8L227.5 240.6C227.5 240.4 227.7 240.167 228.1 239.9L228.4 239.7L228.5 239.5L228.3 239.3ZM236.9 229.1H238.2V229L238.1 229.1V229H238V228.9H238.1H236.9V229.1ZM236.9 228.3L237.5 228.2L238.3 227.7L238.6 227.4H238.9V227.1L238.4 227.3L237.6 227.8L236.9 228.1V228.3ZM236.9 227.1L237.4 226.9L238.4 226.3L239.1 226V225.7L238.6 225.9L237.6 226.5L236.8 226.9V227.1H236.9ZM236.4 226.1L237.6 225.1L238.9 224.2L238.8 224L237.5 225L236.3 225.8L236.4 226.1ZM235.6 224.8L238.2 222.9L238 222.7L235.4 224.6L235.6 224.8ZM234.4 223.5L235.9 222.5L237.1 221.7L237 221.5L235.8 222.3L234.3 223.3L234.4 223.5ZM233.6 222.8L235.7 221.3L236.3 220.9V220.7L235.6 221L233.4 222.6L233.6 222.8Z", fill: "#816C2A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.6 220.3L237.6 222.3C238.467 223.367 238.933 224.467 239 225.6V226C238.727 227.496 238.033 228.884 237 230C235.5 231.9 233.2 233.5 231.4 235.1C230.5 235.831 229.693 236.67 229 237.6C228.39 238.41 228.042 239.387 228 240.4V240.5C228 241.567 228.333 242.467 229 243.2C229.597 244.034 230.492 244.607 231.5 244.8H232.1C233.5 244.8 235.1 244.3 236.6 244.3C237.8 244.233 238.967 244.733 240.1 245.8C241.1 246.9 241.4 248.7 241.4 250.4L241.1 253.7L240.8 255.2H241C241 255.2 241.7 252.9 241.7 250.4C241.7 248.7 241.3 246.8 240.3 245.6C239.819 245.109 239.243 244.723 238.606 244.465C237.97 244.207 237.287 244.082 236.6 244.1C235 244.1 233.5 244.5 232.1 244.5H231.5C231.034 244.462 230.583 244.316 230.184 244.073C229.785 243.829 229.448 243.496 229.2 243.1C228.663 242.335 228.351 241.434 228.3 240.5V240.4C228.3 239.133 228.833 237.967 229.9 236.9C231.3 235.3 233.5 233.7 235.4 231.9C237.4 230.3 239 228.4 239.3 225.9V225.6C239.3 224.2 238.3 222.8 237.4 221.7L235.6 220V220.3Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M233.7 222.8L233.4 222.5L233.1 222.6L233.6 223L233.7 222.8ZM234.5 223.5L234.3 223.3H234.1L234.3 223.6L234.5 223.5Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.6 224.8L235.4 224.5L235.3 224.7L235.6 224.8ZM236.4 226V225.8H236.1L236.4 226.1V226ZM236.9 227.2V226.9H236.8L236.9 227.2ZM227.2 241L227.3 240.4C227.4 240.1 227.1 240.5 227.1 240.5V240.9H227.2V241Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.1 241.7V242.1H227.2L227.1 241.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.2 243.1V242.8H227V243.3L227.2 243.1Z", fill: "#78732E" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M227.3 243.9V243.6H227.1V243.9H227.3ZM227.8 246.2L227.6 245.8V246.2H227.8Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M228.5 247.8L228.4 247.5H228.2L228.5 247.8ZM229.7 248.9L229.3 248.6C229.1 248.4 229.2 248.8 229.2 248.8L229.5 249L229.7 248.9ZM237.5 249.5L237.2 249.3L237.4 249.6V249.5H237.5Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238.2 250L237.9 249.8V250H238.1H238.2Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238.3 250.3L238.1 250.5L238.4 250.7L238.3 250.3Z", fill: "#A8AC71" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M238 252.6V252.3L237.8 252.6H238ZM226 210.9C226 210.9 226.5 210.8 226.1 211.3L226.4 210.9L226.2 210.8L226 210.9Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M235.7 220L236 220.3L235.6 220.2L235.7 220Z", fill: "#F9C83A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M236 220.3H235.4L235.6 220.2L236 220.3Z", fill: "#8F4620" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M240.7 255.3C240.7 255.3 241.1 255.3 241.2 255C241.4 254.8 241.2 255.3 241.2 255.3L240.9 255.4L240.7 255.3Z", fill: "#977C2E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("radialGradient", { id: "paint0_radial_4989_137735", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(2.78573 1.17983 -1.15213 2.79993 234.885 267.814)", gradientUnits: "userSpaceOnUse", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { stopColor: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", stopColor: "#F15770" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("radialGradient", { id: "paint1_radial_4989_137735", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(-0.27566 -2.98743 2.7721 -0.263226 214.229 257.819)", gradientUnits: "userSpaceOnUse", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { stopColor: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", stopColor: "#F15770" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("radialGradient", { id: "paint2_radial_4989_137735", cx: "0", cy: "0", r: "1", gradientTransform: "matrix(1.00364 1.19767 -2.32347 2.00377 290.391 274.461)", gradientUnits: "userSpaceOnUse", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { stopColor: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", stopColor: "#F15770" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_4989_137735", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) })] })] });
var Bn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_myr)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V36.6H0V0Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 36.6001H512V73.0001H0V36.6001Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 73.1001H512V109.7H0V73.1001Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 109.7H512V146.3H0V109.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 146.3H512V182.9H0V146.3Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 182.9H512V219.4H0V182.9Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 219.4H512V256H0V219.4Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 256H512V292.6H0V256Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 292.6H512V329H0V292.6Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 329.1H512V365.7H0V329.1Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 365.7H512V402.3H0V365.7Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 402.3H512V438.9H0V402.3Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 438.9H512V475.4H0V438.9Z", fill: "#CC0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 475.4H512V512H0V475.4Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H256V292.6H0V0Z", fill: "#000066" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M166 93.0001L170.8 125.5L189.2 98.3001L179.2 129.6L207.7 113L185.2 137L218 134.4L187.3 146.3L218 158L185.2 155.5L207.7 179.5L179.3 162.8L189.1 194.3L170.7 167L165.9 199.5L161.2 167L142.8 194.2L152.7 162.8L124.3 179.5L146.7 155.5L113.9 158L144.6 146.2L114 134.3L146.8 136.9L124.3 112.9L152.7 129.5L142.7 98.1001L161.2 125.4L166 92.8001V93.0001Z", fill: "#FFCC00" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_myr", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var jn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_ngn)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M341.3 0H512V512H341.3V0ZM0 0H170.7V512H0V0Z", fill: "#008753" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_ngn", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var qn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_nok)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#ED2939" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M128 0H256V512H128V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 192H512V320H0V192Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M160 0H224V512H160V0Z", fill: "#002664" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 224H512V288H0V224Z", fill: "#002664" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_nok", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Kn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_npr)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.5 505.5H385.3L137.4 254.1L394.7 254.4L6.6 6.5V505.5H6.5Z", fill: "#CE0000", stroke: "#000063", strokeWidth: "13" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M180.7 371.8L153.7 380.8L174.9 400.6L146.4 398.8L158.1 425L132.6 412.7L133.1 441.3L114.3 420.4L103.6 447L94.4 420.7L74.1 441.3L75.9 413.6L49 425L61.6 400L32.3 400.6L53.8 382.3L26.5 371.8L53.5 362.8L32.2 343L60.6 344.8L49 318.6L74.6 330.9L74.1 302.3L92.9 323.2L103.6 296.6L112.7 322.9L133.1 302.3L131.2 330L158.2 318.6L145.5 343.6L174.9 343L153.4 361.3L180.7 371.8Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_npr", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var zn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_nzd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#00247D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M396.394 157.728V166.813L414.564 157.728H396.394Z", fill: "#CC142B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M468.428 221.214L468.428 228.785L483.569 221.214L468.428 221.214Z", fill: "#CC142B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M312.462 242.252L312.462 251.337L330.632 242.252L312.462 242.252Z", fill: "#CC142B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M396.394 374.857V385.456L417.592 374.857H396.394Z", fill: "#CC142B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H256V256H0V0Z", fill: "#012169" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M256 0V32L161 128L256 221.5V256H222.5L127 162L34 256H0V222L93 128.5L0 37V0H31L127 94L220 0H256Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 104V152H256V104H0ZM104 0V256H152V0H104Z", fill: "#C8102E" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_nzd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Gn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_php)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V256H0V0Z", fill: "#0038A8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 256H512V512H0V256Z", fill: "#CE1126" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M443.4 256L0 512V0", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M158.9 148L152.3 154.6L155.5 204.9L152.2 205.2L146.2 159.3L140.7 164.7L148.9 205.7C142.32 207.03 136.067 209.647 130.5 213.4L107.2 178.6H99.5L127.7 215.4L125.2 217.5L91.9 179.5H82.5V189L120.5 222.3L118.3 224.8L81.5 196.6V204.3L116.3 227.6C112.583 233.174 110 239.427 108.7 246L67.7 237.8L62.2 243.3L108.2 249.3L107.8 252.7L57.5 249.4L50.8 256L57.5 262.6L107.8 259.4L108.1 262.7L62.2 268.7L67.6 274.2L108.6 266C109.931 272.58 112.547 278.833 116.3 284.4L81.5 307.7V315.4L118.3 287.2L120.4 289.7L82.4 323V332.4H92L125.3 294.4L127.8 296.6L99.6 333.4H107.3L130.6 298.6C136.175 302.317 142.427 304.9 149 306.2L140.8 347.2L146.3 352.7L152.3 306.7L155.6 307.1L152.4 357.4L159 364.1L165.6 357.4L162.4 307.1L165.7 306.8L171.7 352.7L177.2 347.3L169 306.3C175.58 304.969 181.833 302.353 187.4 298.6L210.7 333.4H218.4L190 296.6L192.5 294.5L225.8 332.5H235.2V323L197.2 289.7L199.4 287.2L236.2 315.4V307.7L201.4 284.4C205.117 278.825 207.7 272.573 209 266L250 274.2L255.5 268.7L209.5 262.7L209.9 259.4L260.2 262.6L266.9 256L260.2 249.4L209.9 252.7C209.9 251.5 209.8 250.367 209.6 249.3L255.5 243.3L250.1 237.8L209.1 246C207.769 239.42 205.153 233.167 201.4 227.6L236.2 204.3V196.6L199.4 224.8L197.3 222.3L235.3 189V179.6H225.8L192.5 217.6L190 215.4L218.2 178.6H210.5L187.2 213.4C181.625 209.682 175.373 207.1 168.8 205.8L177 164.8L171.5 159.3L165.5 205.3L162.2 204.9L165.4 154.6L158.9 148Z", fill: "#FCD116" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_php", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var $n = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_pkr)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-95 0H673V512H-95V0Z", fill: "#0C590B" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-95 0H97.5V512H-95V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M403.7 225.4L372.5 218.8L356.1 246.1L352.7 214.5L321.7 207.3L350.7 194.3L348 162.6L369.4 186.2L398.7 173.8L382.8 201.4L403.8 225.4H403.7Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M415.4 306C408.766 320.54 399.318 333.622 387.6 344.49C375.882 355.358 362.128 363.797 347.131 369.32C332.133 374.842 316.191 377.339 300.223 376.667C284.256 375.994 268.579 372.165 254.1 365.4C239.541 358.674 226.45 349.142 215.578 337.352C204.706 325.561 196.265 311.743 190.739 296.687C185.213 281.631 182.709 265.634 183.372 249.609C184.034 233.585 187.85 217.848 194.6 203.3C201.378 188.208 211.228 174.695 223.522 163.623C235.815 152.552 250.283 144.166 266 139C261.882 142.428 257.943 146.066 254.2 149.9C234.69 171.507 224.333 199.846 225.313 228.941C226.293 258.036 238.533 285.614 259.453 305.859C280.372 326.104 308.336 337.435 337.448 337.461C366.56 337.487 394.544 326.207 415.5 306H415.4Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_pkr", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Yn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_pln)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 512H0V0H512V512Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 512H0V256H512V512Z", fill: "#DC143C" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_pln", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Jn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_qar)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#8D1B3D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0V512H113L217.2 483.6L113 455L217.2 426.6L113 398.2L217.2 369.8L113 341.3L217.2 313L113 284.4L217.2 256L113 227.6L217.2 199L113 170.7L217.2 142.2L113 113.8L217.2 85.3L113 57L217.2 28.6L113 0H0Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_qar", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Qn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_ron)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H170.7V512H0V0Z", fill: "#00319C" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M170.7 0H341.3V512H170.7V0Z", fill: "#FFDE00" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M341.3 0H512V512H341.3V0Z", fill: "#DE2110" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_ron", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var Xn = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_sar)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-128 0H639.882V511.922H-128V0Z", fill: "#165D31" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M65.519 145.113C64.6933 157.086 63.558 178.14 73.7758 180.308C86.0578 181.443 79.2459 159.459 83.684 155.537C84.6129 153.473 86.161 153.473 86.2642 156.053V174.631C86.161 180.824 90.083 182.475 93.1793 183.817C96.482 183.507 98.5462 183.611 99.8879 186.707L101.333 219.012C101.333 219.012 108.867 221.076 109.177 200.847C109.59 188.977 106.803 178.966 108.454 176.695C108.454 174.425 111.344 174.322 113.408 175.354C116.608 177.624 118.053 180.514 123.007 179.276C130.645 177.212 135.186 173.496 135.392 167.716", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M354.197 362.577C363.383 362.886 369.369 362.99 377.522 363.919L387.018 362.886C397.648 361.854 398.164 378.058 398.164 378.058C398.061 387.554 394.346 387.966 389.701 388.999C387.018 389.411 385.573 387.45 384.231 385.386C382.511 386.074 380.137 386.212 377.11 385.799L365.756 385.283C361.628 384.973 359.461 385.799 355.435 385.386C354.507 386.728 353.371 388.482 350.997 387.966C348.933 387.76 346.456 381.877 347.179 377.542C348.624 374.343 348.211 375.375 348.107 373.93Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_sar", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var el = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_sek)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H512V512H0V0Z", fill: "#005293" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M134 0V204.8H0V307.2H134V512H236.4V307.2H512V204.8H236.4V0H134Z", fill: "#FECB00" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_sek", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var tl = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_sgd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-20 0H748.007V512.029H-20V0Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-20 0H748.007V255.978H-20V0Z", fill: "#DF0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M157.155 42.916C136.944 47.2463 118.839 58.3997 105.881 74.5026C92.9228 90.6056 85.9005 110.677 85.9937 131.346C86.087 152.015 93.29 172.023 106.393 188.008C119.496 203.994 137.701 214.983 157.949 219.131C144.316 223.121 129.941 223.888 115.96 221.373C101.979 218.857 88.7741 213.126 77.3866 204.634C65.9991 196.141 56.7408 185.119 50.342 172.436C43.9433 159.753 40.5792 145.757 40.5151 131.551C40.451 117.346 43.6888 103.32 49.9728 90.58C56.2569 77.8399 65.4155 66.7344 76.7259 58.1394C88.0364 49.5445 101.189 43.6954 115.147 41.0535C129.105 38.4116 143.486 39.0492 157.155 42.916Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M125.943 117.332L112.288 107.362L129.267 107.218L134.469 91.106L139.887 107.218H156.793L143.211 117.332L148.413 133.444L134.613 123.546L120.886 133.516L125.943 117.332Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_sgd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var al = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_thb)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#F4F5F8" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 173.4H512V344H0V173.4Z", fill: "#2D2A4A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V88H0V0ZM0 426.7H512V512H0V426.7Z", fill: "#A51931" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_thb", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var il = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_try)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#E30A17" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M348.8 264C348.8 334.6 290.5 391.9 218.7 391.9C146.9 391.9 88.6001 334.6 88.6001 263.9C88.6001 193.2 146.8 136.1 218.6 136.1C290.4 136.1 348.9 193.3 348.9 264H348.8Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M355.3 264C355.3 320.5 308.7 366.3 251.2 366.3C193.7 366.3 147.2 320.5 147.2 264C147.2 207.5 193.7 161.7 251.2 161.7C308.7 161.7 355.2 207.5 355.2 264H355.3Z", fill: "#E30A17" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M374.1 204.2L373.1 251.5L328.9 263.5L372.4 279L371.4 322.3L399.7 288.5L442.6 303.3L417.8 267L448 230.9L401.6 243.7L374.1 204.2Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_try", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var rl = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_twd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H768V512H0V0Z", fill: "#FF0000" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0H384V256H0V0Z", fill: "#000095" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M214.3 115.1L204.9 105.7L192 102.3L179.1 105.7L169.7 115.1L166.3 128L169.7 140.9L179.1 150.3L192 153.7L204.9 150.3L214.3 140.9L217.7 128L214.3 115.1Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M192 182.4C222.044 182.4 246.4 158.044 246.4 128C246.4 97.9557 222.044 73.6 192 73.6C161.956 73.6 137.6 97.9557 137.6 128C137.6 158.044 161.956 182.4 192 182.4Z", fill: "#000095" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M192 176C218.51 176 240 154.51 240 128C240 101.49 218.51 80 192 80C165.49 80 144 101.49 144 128C144 154.51 165.49 176 192 176Z", fill: "white" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_twd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var nl = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_uah)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V512H0V0Z", fill: "#FFD700" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H512V256H0V0Z", fill: "#0057B8" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_uah", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var ll = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "256", height: "256", viewBox: "0 0 256 256", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { clipPath: "url(#clip0_4989_137730)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip1_4989_137730)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M-65.3379 -3.625H434.837V259.625H-65.3379", fill: "#B31942" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M-65.3379 26.75H434.837ZM434.837 67.25H-65.3379ZM-65.3379 107.75H434.837ZM434.837 148.25H-65.3379ZM-65.3379 188.75H434.837ZM434.837 229.25H-65.3379Z", fill: "black" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M-65.3379 26.75H434.837M434.837 67.25H-65.3379M-65.3379 107.75H434.837M434.837 148.25H-65.3379M-65.3379 188.75H434.837M434.837 229.25H-65.3379", stroke: "white", strokeWidth: "20.25" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M-65.3379 -3.625H134.732V138.125H-65.3379", fill: "#0A3161" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.352 16.625L6.11306 31.278L-6.35156 22.2219H9.05555L-3.40906 31.278L1.352 16.625Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.352 44.975L6.11306 59.628L-6.35156 50.5719H9.05555L-3.40906 59.628L1.352 44.975Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.352 73.325L6.11306 87.978L-6.35156 78.9219H9.05555L-3.40906 87.978L1.352 73.325Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.352 101.675L6.11306 116.328L-6.35156 107.272H9.05555L-3.40906 116.328L1.352 101.675Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.0248 2.44998L22.7859 17.103L10.3213 8.04694H25.7284L13.2638 17.103L18.0248 2.44998Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.0248 30.8L22.7859 45.453L10.3213 36.3969H25.7284L13.2638 45.453L18.0248 30.8Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.0248 59.15L22.7859 73.803L10.3213 64.7469H25.7284L13.2638 73.803L18.0248 59.15Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.0248 87.5L22.7859 102.153L10.3213 93.0969H25.7284L13.2638 102.153L18.0248 87.5Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.0248 115.85L22.7859 130.503L10.3213 121.447H25.7284L13.2638 130.503L18.0248 115.85Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M34.6977 16.625L39.4588 31.278L26.9941 22.2219H42.4013L29.9366 31.278L34.6977 16.625Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M34.6977 44.975L39.4588 59.628L26.9941 50.5719H42.4013L29.9366 59.628L34.6977 44.975Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M34.6977 73.325L39.4588 87.978L26.9941 78.9219H42.4013L29.9366 87.978L34.6977 73.325Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M34.6977 101.675L39.4588 116.328L26.9941 107.272H42.4013L29.9366 116.328L34.6977 101.675Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M51.3696 2.44992L56.1306 17.103L43.666 8.04688H59.0731L46.6085 17.103L51.3696 2.44992Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M51.3696 30.7999L56.1306 45.453L43.666 36.3969H59.0731L46.6085 45.453L51.3696 30.7999Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M51.3696 59.1499L56.1306 73.803L43.666 64.7469H59.0731L46.6085 73.803L51.3696 59.1499Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M51.3696 87.4999L56.1306 102.153L43.666 93.0969H59.0731L46.6085 102.153L51.3696 87.4999Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M51.3696 115.85L56.1306 130.503L43.666 121.447H59.0731L46.6085 130.503L51.3696 115.85Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M68.0424 16.625L72.8035 31.278L60.3389 22.2219H75.746L63.2814 31.278L68.0424 16.625Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M68.0424 44.9749L72.8035 59.628L60.3389 50.5719H75.746L63.2814 59.628L68.0424 44.9749Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M68.0424 73.325L72.8035 87.978L60.3389 78.9219H75.746L63.2814 87.978L68.0424 73.325Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M68.0424 101.675L72.8035 116.328L60.3389 107.272H75.746L63.2814 116.328L68.0424 101.675Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M84.7143 2.44998L89.4754 17.103L77.0107 8.04694H92.4179L79.9532 17.103L84.7143 2.44998Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M84.7143 30.8L89.4754 45.453L77.0107 36.3969H92.4179L79.9532 45.453L84.7143 30.8Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M84.7143 59.15L89.4754 73.803L77.0107 64.7469H92.4179L79.9532 73.803L84.7143 59.15Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M84.7143 87.5L89.4754 102.153L77.0107 93.0969H92.4179L79.9532 102.153L84.7143 87.5Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M84.7143 115.85L89.4754 130.503L77.0107 121.447H92.4179L79.9532 130.503L84.7143 115.85Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.387 16.625L106.148 31.278L93.6836 22.2219H109.091L96.6261 31.278L101.387 16.625Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.387 44.975L106.148 59.628L93.6836 50.5719H109.091L96.6261 59.628L101.387 44.975Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.387 73.325L106.148 87.978L93.6836 78.9219H109.091L96.6261 87.978L101.387 73.325Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M101.387 101.675L106.148 116.328L93.6836 107.272H109.091L96.6261 116.328L101.387 101.675Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M118.06 2.44995L122.821 17.103L110.356 8.04691H125.764L113.299 17.103L118.06 2.44995Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M118.06 30.8L122.821 45.453L110.356 36.3969H125.764L113.299 45.453L118.06 30.8Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M118.06 59.15L122.821 73.803L110.356 64.7469H125.764L113.299 73.803L118.06 59.15Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M118.06 87.4999L122.821 102.153L110.356 93.0969H125.764L113.299 102.153L118.06 87.4999Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M118.06 115.85L122.821 130.503L110.356 121.447H125.764L113.299 130.503L118.06 115.85Z", fill: "white" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_4989_137730", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "256", height: "256", rx: "128", fill: "white" }) }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip1_4989_137730", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "500.175", height: "263.25", fill: "white", transform: "translate(-65.3379 -3.625)" }) })] })] });
var sl = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_vnd)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-128 0H640.007V512.029H-128V0Z", fill: "#DA251D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M349.566 381.113L259.977 314.211L170.894 381.764L204.056 271.945L115.045 204.176L225.153 203.236L259.254 93.7792L294.151 203.02L404.258 203.164L315.753 271.584L349.566 381.113Z", fill: "#FFFF00" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_vnd", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var ol = (a22) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a22, children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { clipPath: "url(#clip0_zar)", children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M82.23 512.093L335.766 341.463H696.085V512.093H82.23Z", fill: "#000C8A" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M65.9358 0H696.188V170.732H335.663C335.663 170.732 69.3176 -1.63968 65.9358 0Z", fill: "#E1392D" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-71.8999 64.05V104.325L153.966 255.995L-71.8999 407.665V448.043L212.585 255.995L-71.8999 64.05Z", fill: "#FFB915" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-71.8999 64.05V0H22.9966L324.288 203.935H696.085V308.157H324.288L22.9966 511.99H-71.8999V448.043L212.585 255.995L-71.8999 64.05Z", fill: "#007847" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.9966 0H82.23L335.766 170.732H696.085V203.935H324.288L22.9966 0ZM22.9966 512.093H82.23L335.766 341.463H696.085V308.26H324.288L22.9966 512.093Z", fill: "white" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M-71.8999 407.768V104.427L153.966 255.995L-71.8999 407.768Z", fill: "#000001" })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_zar", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "512", height: "512", rx: "256", fill: "white" }) }) })] });
var cl = { usd: { symbol: "$", name: "US Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ll, {}) }, eur: { symbol: "\u20AC", name: "Euro", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Fn, {}) }, gbp: { symbol: "\xA3", name: "British Pound", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tn, {}) }, mxn: { symbol: "$", name: "Mexican Peso", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Dn, {}) }, brl: { symbol: "R$", name: "Brazilian Real", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(gn, {}) }, cny: { symbol: "\xA5", name: "Chinese Yuan", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(An, {}) }, jpy: { symbol: "\xA5", name: "Japanese Yen", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Wn, {}) }, inr: { symbol: "\u20B9", name: "Indian Rupee", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Pn, {}) }, cad: { symbol: "$", name: "Canadian Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(yn, {}) }, krw: { symbol: "\u20A9", name: "South Korean Won", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Un, {}) }, aud: { symbol: "$", name: "Australian Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(wn, {}) }, idr: { symbol: "Rp", name: "Indonesian Rupiah", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Vn, {}) }, sar: { symbol: "\uFDFC", name: "Saudi Riyal", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Xn, {}) }, try: { symbol: "\u20BA", name: "Turkish Lira", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(il, {}) }, chf: { symbol: "CHF", name: "Swiss Franc", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Mn, {}) }, twd: { symbol: "NT$", name: "New Taiwan Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(rl, {}) }, sek: { symbol: "kr", name: "Swedish Krona", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(el, {}) }, ngn: { symbol: "\u20A6", name: "Nigerian Naira", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(jn, {}) }, pln: { symbol: "z\u0142", name: "Polish Zloty", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Yn, {}) }, ars: { symbol: "$", name: "Argentine Peso", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(pn, {}) }, aed: { symbol: "\u062F.\u0625", name: "UAE Dirham", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(un, {}) }, thb: { symbol: "\u0E3F", name: "Thai Baht", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(al, {}) }, zar: { symbol: "R", name: "South African Rand", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ol, {}) }, dkk: { symbol: "kr", name: "Danish Krone", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(kn, {}) }, egp: { symbol: "E\xA3", name: "Egyptian Pound", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(_n, {}) }, myr: { symbol: "RM", name: "Malaysian Ringgit", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Bn, {}) }, sgd: { symbol: "$", name: "Singapore Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(tl, {}) }, cop: { symbol: "$", name: "Colombian Peso", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Zn, {}) }, php: { symbol: "\u20B1", name: "Philippine Peso", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Gn, {}) }, clp: { symbol: "$", name: "Chilean Peso", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vn, {}) }, bdt: { symbol: "\u09F3", name: "Bangladeshi Taka", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(fn, {}) }, vnd: { symbol: "\u20AB", name: "Vietnamese Dong", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(sl, {}) }, czk: { symbol: "K\u010D", name: "Czech Koruna", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(En, {}) }, ils: { symbol: "\u20AA", name: "Israeli Shekel", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Rn, {}) }, hkd: { symbol: "$", name: "Hong Kong Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Hn, {}) }, nzd: { symbol: "$", name: "New Zealand Dollar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(zn, {}) }, pkr: { symbol: "\u20A8", name: "Pakistani Rupee", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)($n, {}) }, ron: { symbol: "lei", name: "Romanian Leu", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Qn, {}) }, kzt: { symbol: "\u20B8", name: "Kazakhstani Tenge", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(xn, {}) }, nok: { symbol: "kr", name: "Norwegian Krone", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(qn, {}) }, huf: { symbol: "Ft", name: "Hungarian Forint", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(bn, {}) }, uah: { symbol: "\u20B4", name: "Ukrainian Hryvnia", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(nl, {}) }, kwd: { symbol: "\u062F.\u0643", name: "Kuwaiti Dinar", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(On, {}) }, qar: { symbol: "\uFDFC", name: "Qatari Riyal", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Jn, {}) }, etb: { symbol: "Br", name: "Ethiopian Birr", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sn, {}) }, mad: { symbol: "\u062F.\u0645.", name: "Moroccan Dirham", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Nn, {}) }, bgn: { symbol: "\u043B\u0432", name: "Bulgarian Lev", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(mn, {}) }, kes: { symbol: "KSh", name: "Kenyan Shilling", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(In, {}) }, npr: { symbol: "\u20A8", name: "Nepalese Rupee", icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Kn, {}) } };
var Cl = { usd: [["asset", "Currency"], ["bank_beneficiary_name", "Beneficiary name"], ["bank_beneficiary_address", "Beneficiary address"], ["bank_account_number", "Account number"], ["bank_routing_number", "Routing number"], ["bank_name", "Bank name"], ["bank_address", "Bank address"]], eur: [["asset", "Currency"], ["account_holder_name", "Account holder"], ["iban", "IBAN"], ["bic", "BIC / SWIFT"], ["bank_name", "Bank name"], ["bank_address", "Bank address"]], mxn: [["asset", "Currency"], ["account_holder_name", "Account holder"], ["clabe", "CLABE"], ["bank_name", "Bank name"], ["bank_address", "Bank address"]], brl: [["asset", "Currency"], ["account_holder_name", "Account holder"], ["br_code", "PIX code"], ["bank_name", "Bank name"], ["bank_address", "Bank address"]], gbp: [["asset", "Currency"], ["account_holder_name", "Account holder"], ["account_number", "Account number"], ["sort_code", "Sort code"], ["bank_name", "Bank name"], ["bank_address", "Bank address"]] };
var ul = (e14, t17) => e14.length > 0 ? null : 3 > parseFloat(t17) ? "amount_too_low" : "provider_errors";
var pl = create((() => null));
var wl = (e14) => {
  null !== pl.getState() ? pl.setState(e14) : console.warn("[FiatOnramp] setState skipped \u2014 no active flow");
};
var fl = () => {
  let e14 = pl.getState();
  if (!e14) throw Error("Unexpected call to getFiatOnrampFlowState");
  return e14;
};
var ml = () => {
  let e14 = fl();
  return e14.localQuotes ?? e14.initialQuotes;
};
var gl = (e14) => e14.localSelectedQuote ?? (null === e14.localQuotes ? e14.initialSelectedQuote : null);
var yl = () => gl(fl());
var [Ml, vl] = /* @__PURE__ */ ((e14, t17 = 750) => {
  let a22;
  return [(...i19) => {
    a22 && clearTimeout(a22), a22 = setTimeout((() => {
      e14(...i19);
    }), t17);
  }, () => {
    a22 && clearTimeout(a22);
  }];
})((async (e14, t17) => {
  let { getQuotes: a22, flowId: i19 } = fl();
  wl({ isLoading: true });
  try {
    let r17 = await a22({ source: { asset: t17.source.selectedAsset.toUpperCase(), amount: e14 }, destination: { asset: t17.destination.asset, chain: t17.destination.chain, address: t17.destination.address }, environment: t17.environment });
    if (pl.getState()?.flowId !== i19) return;
    let n18 = r17.quotes ?? [], l14 = r17.provider_errors, s19 = ul(n18, e14);
    wl({ localQuotes: n18, localSelectedQuote: n18[0] ?? null, isLoading: false, quotesWarning: s19, quotesErrors: l14 ?? null, destinationCurrencySymbol: r17.destination_currency_symbol ?? null, destinationCurrencyIconUrl: r17.destination_currency_icon_url ?? null, destinationNetworkIconUrl: r17.destination_network_icon_url ?? null });
  } catch {
    if (pl.getState()?.flowId !== i19) return;
    wl({ localQuotes: [], localSelectedQuote: null, quotesWarning: "provider_errors", quotesErrors: null });
  }
}));
var Al = () => {
  let { stripeSession: e14, controller: t17 } = fl();
  e14 && (t17.current?.abort(), e14.onramp.destroy(), wl({ stripeSession: null }));
};
var El = create((() => null));
var kl = () => El.setState(null);

export {
  l4 as l,
  d10 as d,
  o5 as o,
  p4 as p,
  n4 as n,
  o7 as o2,
  n5 as n2,
  a7 as a,
  u5 as u,
  A3 as A,
  K,
  V2 as V,
  Y,
  import_react8 as import_react,
  o8 as o3,
  n7 as n3,
  i7 as i,
  l6 as l2,
  m6 as m,
  a9 as a2,
  E4 as E,
  L4 as L,
  y4 as y,
  H2 as H,
  o9 as o4,
  T5 as T,
  k6 as k,
  k7 as k2,
  x2 as x,
  S6 as S,
  y6 as y2,
  p7 as p2,
  T6 as T2,
  I4 as I,
  H3 as H2,
  K2,
  G,
  R3 as R,
  i12 as i2,
  k8 as k3,
  u12 as u2,
  f8 as f,
  x4 as x2,
  N2 as N,
  i13 as i3,
  u13 as u3,
  c9 as c,
  c10 as c2,
  le,
  n15 as n4,
  xa,
  Ba,
  qa,
  za,
  Ya,
  fi,
  gi,
  Mi,
  vi,
  Ai2 as Ai,
  Zi,
  Ei2 as Ei,
  ki,
  _i2 as _i,
  Di,
  Bi,
  ji,
  $i,
  Ji,
  Qi,
  tr,
  lr,
  or,
  cr,
  Lr,
  gr,
  Rr,
  Dr,
  Br,
  cl,
  Cl,
  pl,
  wl,
  fl,
  ml,
  gl,
  yl,
  Ml,
  vl,
  Al,
  El,
  kl
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
