import {
  t as t2
} from "./chunk-FAFNMCNW.js";
import {
  n as n5
} from "./chunk-CIPV5FN4.js";
import {
  r
} from "./chunk-ZZ27HOQC.js";
import {
  e as e2
} from "./chunk-DNNT7Y2Z.js";
import {
  c as c4
} from "./chunk-W3FIRIBO.js";
import {
  e as e4
} from "./chunk-WLRIHMQB.js";
import {
  a as a3,
  c as c5,
  l as l3,
  p as p3,
  s as s3
} from "./chunk-RDL3SKLR.js";
import {
  inner,
  useFloating,
  useInnerOffset,
  useInteractions
} from "./chunk-75JACRL2.js";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size
} from "./chunk-S5KBLGPR.js";
import {
  n as n7
} from "./chunk-PZMIZGJH.js";
import {
  d as d2,
  e as e5
} from "./chunk-AIDDSJF6.js";
import {
  ChevronDownIcon_default
} from "./chunk-QM2ZBVYE.js";
import {
  e
} from "./chunk-QB7GMZ7D.js";
import {
  w
} from "./chunk-44C3QNBW.js";
import {
  e as e3,
  n as n6,
  s as s2
} from "./chunk-C2ILIC2D.js";
import {
  t
} from "./chunk-E5F673JX.js";
import {
  WalletIcon_default
} from "./chunk-EOSGBBZ3.js";
import {
  c as c3,
  s
} from "./chunk-EIEISV5R.js";
import {
  h2 as h,
  u as u4
} from "./chunk-RPCD4HAF.js";
import {
  A,
  E,
  G,
  H,
  H2,
  I,
  K,
  K2,
  L,
  N,
  R,
  S,
  T,
  T2,
  V,
  Y,
  a,
  a2,
  c,
  c2,
  d,
  f,
  i,
  i2,
  i3,
  import_react,
  k,
  k2,
  k3,
  l,
  l2,
  le,
  m,
  n as n2,
  n2 as n3,
  n3 as n4,
  o,
  o2,
  o3,
  o4,
  p,
  p2,
  u,
  u2,
  u3,
  x,
  x2,
  y,
  y2
} from "./chunk-2IJQ6F4F.js";
import {
  require_react_dom
} from "./chunk-5QJKWR6B.js";
import {
  n
} from "./chunk-COXZQBSX.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  Gi,
  mi
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/BridgeNetworkSelectionView-bQo5uNRy.mjs
import { createPublicClient as e8, http as r5 } from "viem";
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);

// node_modules/react-aria/dist/private/utils/domHelpers.mjs
var $d447af545b77c9f1$export$b204af158042fbac = (target) => {
  if ($d447af545b77c9f1$var$isWindow(target)) return target.document;
  if ($d447af545b77c9f1$export$62858bae88b53fd0(target)) return target;
  return target?.ownerDocument ?? (typeof document !== "undefined" ? document : void 0);
};
var $d447af545b77c9f1$export$f21a1ffae260145a = (target) => {
  let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(target);
  return ownerDocument?.defaultView ?? (typeof window !== "undefined" ? window : void 0);
};
function $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $d447af545b77c9f1$var$isWindow(value) {
  return typeof value === "object" && value != null && "window" in value && value.window === value;
}
function $d447af545b77c9f1$export$62858bae88b53fd0(value) {
  return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 9;
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(value) {
  return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 11 && "host" in value;
}

// node_modules/react-stately/dist/private/flags/flags.mjs
var $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
  return $6a20a7989e6c817a$var$_shadowDOM;
}

// node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
  if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (typeof currentNode.assignedElements !== "function" && currentNode.assignedSlot?.parentNode)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ((0, $d447af545b77c9f1$export$af51f0f06c0f328a)(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
var $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
  if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)()) return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && activeElement.shadowRoot?.activeElement) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
  if ((0, $6a20a7989e6c817a$export$98658e8c59125e6a)() && event.target instanceof Element && event.target.shadowRoot) {
    if ("composedPath" in event) return event.composedPath()[0] ?? null;
    else if ("composedPath" in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
  }
  return event.target;
}

// node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
  if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
    element.focus();
    $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
  }
}
var $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
  if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
    $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var import_react2 = __toESM(require_react(), 1);
var $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react2.default).useLayoutEffect : () => {
};

// node_modules/react-aria/dist/private/interactions/utils.mjs
var import_react3 = __toESM(require_react(), 1);
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react3.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  return (0, import_react3.useCallback)((e9) => {
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9);
    if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = eventTarget;
      let onBlurHandler = (e10) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $a92dc41f639950be$export$525bc4921d56d4a(e10);
          onBlur?.(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer?.disconnect();
          let relatedTargetEl = target === (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)() ? null : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    onBlur
  ]);
}
var $a92dc41f639950be$export$fda7da73ab5d4c48 = false;

// node_modules/react-aria/dist/private/utils/platform.mjs
function $2add3ce32c6007eb$var$testUserAgent(re) {
  if (typeof window === "undefined" || window.navigator == null) return false;
  let brands = window.navigator["userAgentData"]?.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
  if (false) return fn;
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
var $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
});
var $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
});
var $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
});
var $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && ($2add3ce32c6007eb$export$fedb369cb70207f1() || !$2add3ce32c6007eb$export$6446a186d09e379e());
});
var $2add3ce32c6007eb$export$95df08bae54cb4df = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$export$78551043582a6a98() && !$2add3ce32c6007eb$export$6446a186d09e379e() && !$2add3ce32c6007eb$export$b7d78993b74f766d();
});
var $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Chrome|CriOS|CrMo/i);
});
var $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
var $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/(Firefox|FxiOS)/i);
});

// node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function $b5c62b033c25b96d$export$60278871457622de(event) {
  if (event.pointerType === "" && event.isTrusted) return true;
  if ((0, $2add3ce32c6007eb$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}

// node_modules/react-aria/dist/private/utils/openLink.mjs
var import_react4 = __toESM(require_react(), 1);
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if (!(0, $2add3ce32c6007eb$export$78551043582a6a98)() && (0, $2add3ce32c6007eb$export$b7d78993b74f766d)() && window.event?.type?.startsWith("key") && target.target === "_blank") {
    if ((0, $2add3ce32c6007eb$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $2add3ce32c6007eb$export$78551043582a6a98)() && (0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && !(0, $2add3ce32c6007eb$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    detail: 1,
    bubbles: true,
    cancelable: true
  });
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;

// node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var import_react5 = __toESM(require_react(), 1);
var $8f5a2122b0992be3$var$currentModality = null;
var $8f5a2122b0992be3$var$currentPointerType = "keyboard";
var $8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
var $8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
var $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
var $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e9) {
  for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e9);
}
function $8f5a2122b0992be3$var$isValidKey(e9) {
  return !(e9.metaKey || !(0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && e9.altKey || e9.ctrlKey || e9.key === "Control" || e9.key === "Shift" || e9.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e9) {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
  if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && $8f5a2122b0992be3$var$isValidKey(e9)) {
    $8f5a2122b0992be3$var$currentModality = "keyboard";
    $8f5a2122b0992be3$var$currentPointerType = "keyboard";
    $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e9);
  }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e9) {
  $8f5a2122b0992be3$var$currentModality = "pointer";
  $8f5a2122b0992be3$var$currentPointerType = "pointerType" in e9 ? e9.pointerType : "mouse";
  if (e9.type === "mousedown" || e9.type === "pointerdown") {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e9);
  }
}
function $8f5a2122b0992be3$var$handleClickEvent(e9) {
  if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && (0, $b5c62b033c25b96d$export$60278871457622de)(e9)) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$currentPointerType = "virtual";
  }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e9) {
  if (0, $a92dc41f639950be$export$fda7da73ab5d4c48) return;
  let target = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9);
  let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(target);
  let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(target);
  if (target === ownerWindow) {
    $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
    return;
  }
  if (target === ownerDocument || !e9.isTrusted) return;
  if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$currentPointerType = "virtual";
    $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e9);
  }
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
  if (0, $a92dc41f639950be$export$fda7da73ab5d4c48) return;
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
  let focus = windowObject.HTMLElement.prototype.focus;
  Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
    configurable: true,
    writable: true,
    value: function() {
      $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
      focus.apply(this, arguments);
    }
  });
  documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  } else if (false) {
    documentObject.addEventListener("mousedown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
  Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
    configurable: true,
    writable: true,
    value: $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus
  });
  documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  } else if (false) {
    documentObject.removeEventListener("mousedown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
  return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
var $8f5a2122b0992be3$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e9) {
  let eventTarget = e9 ? (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9) : void 0;
  let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
  let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(eventTarget);
  const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
  let activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
  isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e9 instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e9.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $8f5a2122b0992be3$var$setupGlobalFocusEvents();
  (0, import_react5.useEffect)(() => {
    if (opts?.enabled === false) return;
    let handler = (modality, e9) => {
      if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e9)) return;
      fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
    };
    $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
    return () => {
      $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
    };
  }, deps);
}

// node_modules/react-aria/dist/private/interactions/useFocus.mjs
var import_react6 = __toESM(require_react(), 1);
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react6.useCallback)((e9) => {
    if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9) === e9.currentTarget) {
      if (onBlurProp) onBlurProp(e9);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react6.useCallback)((e9) => {
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9);
    const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
    const activeElement = ownerDocument ? (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument) : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
    if (eventTarget === e9.currentTarget && eventTarget === activeElement) {
      if (onFocusProp) onFocusProp(e9);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e9);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
var import_react7 = __toESM(require_react(), 1);
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react7.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react7.useCallback)((eventTarget, type, listener, options) => {
    let fn = options?.once ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, import_react7.useCallback)((eventTarget, type, listener, options) => {
    let fn = globalListeners.current.get(listener)?.fn || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react7.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react7.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var import_react8 = __toESM(require_react(), 1);
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react8.useRef)({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
  let onBlur = (0, import_react8.useCallback)((e9) => {
    if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e9.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9))) return;
    if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e9.currentTarget, e9.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e9);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react8.useCallback)((e9) => {
    if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e9.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9))) return;
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9);
    const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
    const activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === eventTarget) {
      if (onFocusWithin) onFocusWithin(e9);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e9);
      let currentTarget = e9.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e10) => {
        let eventTarget2 = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e10);
        if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(currentTarget, eventTarget2)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: eventTarget2
          });
          (0, $a92dc41f639950be$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
          let event = (0, $a92dc41f639950be$export$525bc4921d56d4a)(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var import_react9 = __toESM(require_react(), 1);
function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react9.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react9.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react9.useState)(
    // oxlint-disable-next-line react/react-compiler
    () => state.current.isFocused && state.current.isFocusVisible
  );
  let updateState = (0, import_react9.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react9.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    state.current.isFocusVisible = (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)();
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $8f5a2122b0992be3$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [
    isTextInput,
    isFocused
  ], {
    enabled: isFocused,
    isTextInput
  });
  let { focusProps } = (0, $1e74c67db218ce67$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $2c9edc598a03d523$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/react-aria/dist/private/interactions/useHover.mjs
var import_react10 = __toESM(require_react(), 1);
var $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
var $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
  $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
  }, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e9) {
  if (e9.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
  let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(null);
  if (typeof ownerDocument === "undefined") return;
  if ($e969f22b6713ca4a$var$hoverCount === 0) {
    if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
    else if (false) ownerDocument.addEventListener("touchend", $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents);
  }
  $e969f22b6713ca4a$var$hoverCount++;
  return () => {
    $e969f22b6713ca4a$var$hoverCount--;
    if ($e969f22b6713ca4a$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
    else if (false) ownerDocument.removeEventListener("touchend", $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react10.useState)(false);
  let state = (0, import_react10.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react10.useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
  let { hoverProps, triggerHoverEnd } = (0, import_react10.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !(0, $23f2114a1b82827e$export$4282f70798064fe0)(event.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event))) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event)), "pointerover", (e9) => {
        if (state.isHovered && state.target && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9)))
          triggerHoverEnd2(e9, e9.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e9) => {
        if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e9.pointerType === "mouse") return;
        triggerHoverStart(e9, e9.pointerType);
      };
      hoverProps2.onPointerLeave = (e9) => {
        if (!isDisabled && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e9.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9))) triggerHoverEnd2(e9, e9.pointerType);
      };
    } else if (false) {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e9) => {
        if (!state.ignoreEmulatedMouseEvents && !$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e9, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e9) => {
        if (!isDisabled && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e9.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e9))) triggerHoverEnd2(e9, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  (0, import_react10.useEffect)(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react11 = __toESM(require_react(), 1);
function E2(e9) {
  let t5 = e9.width / 2, n9 = e9.height / 2;
  return { top: e9.clientY - n9, right: e9.clientX + t5, bottom: e9.clientY + n9, left: e9.clientX - t5 };
}
function P(e9, t5) {
  return !(!e9 || !t5 || e9.right < t5.left || e9.left > t5.right || e9.bottom < t5.top || e9.top > t5.bottom);
}
function w2({ disabled: e9 = false } = {}) {
  let t5 = (0, import_react11.useRef)(null), [n9, l7] = (0, import_react11.useState)(false), r6 = p(), o9 = o2(() => {
    t5.current = null, l7(false), r6.dispose();
  }), f4 = o2((s9) => {
    if (r6.dispose(), t5.current === null) {
      t5.current = s9.currentTarget, l7(true);
      {
        let i5 = l(s9.currentTarget);
        r6.addEventListener(i5, "pointerup", o9, false), r6.addEventListener(i5, "pointermove", (c9) => {
          if (t5.current) {
            let p6 = E2(c9);
            l7(P(p6, t5.current.getBoundingClientRect()));
          }
        }, false), r6.addEventListener(i5, "pointercancel", o9, false);
      }
    }
  });
  return { pressed: n9, pressProps: e9 ? {} : { onPointerDown: f4, onPointerUp: o9, onClick: o9 } };
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react12 = __toESM(require_react(), 1);
var e6 = (0, import_react12.createContext)(void 0);
function u5() {
  return (0, import_react12.useContext)(e6);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function s4(l7) {
  let e9 = l7.parentElement, t5 = null;
  for (; e9 && !a2(e9); ) E(e9) && (t5 = e9), e9 = e9.parentElement;
  let i5 = (e9 == null ? void 0 : e9.getAttribute("disabled")) === "";
  return i5 && r2(t5) ? false : i5;
}
function r2(l7) {
  if (!l7) return false;
  let e9 = l7.previousElementSibling;
  for (; e9 !== null; ) {
    if (E(e9)) return false;
    e9 = e9.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react13 = __toESM(require_react(), 1);
var L2 = (0, import_react13.createContext)(null);
L2.displayName = "LabelContext";
function C() {
  let n9 = (0, import_react13.useContext)(L2);
  if (n9 === null) {
    let l7 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l7, C), l7;
  }
  return n9;
}
function N2(n9) {
  var a9, e9, o9;
  let l7 = (e9 = (a9 = (0, import_react13.useContext)(L2)) == null ? void 0 : a9.value) != null ? e9 : void 0;
  return ((o9 = n9 == null ? void 0 : n9.length) != null ? o9 : 0) > 0 ? [l7, ...n9].filter(Boolean).join(" ") : l7;
}
function V2({ inherit: n9 = false } = {}) {
  let l7 = N2(), [a9, e9] = (0, import_react13.useState)([]), o9 = n9 ? [l7, ...a9].filter(Boolean) : a9;
  return [o9.length > 0 ? o9.join(" ") : void 0, (0, import_react13.useMemo)(() => function(t5) {
    let p6 = o2((i5) => (e9((u9) => [...u9, i5]), () => e9((u9) => {
      let d4 = u9.slice(), f4 = d4.indexOf(i5);
      return f4 !== -1 && d4.splice(f4, 1), d4;
    }))), b = (0, import_react13.useMemo)(() => ({ register: p6, slot: t5.slot, name: t5.name, props: t5.props, value: t5.value }), [p6, t5.slot, t5.name, t5.props, t5.value]);
    return import_react13.default.createElement(L2.Provider, { value: b }, t5.children);
  }, [e9])];
}
var G2 = "label";
function U(n9, l7) {
  var y5;
  let a9 = (0, import_react.useId)(), e9 = C(), o9 = u5(), T5 = a(), { id: t5 = `headlessui-label-${a9}`, htmlFor: p6 = o9 != null ? o9 : (y5 = e9.props) == null ? void 0 : y5.htmlFor, passive: b = false, ...i5 } = n9, u9 = y(l7);
  n2(() => e9.register(t5), [t5, e9.register]);
  let d4 = o2((s9) => {
    let g2 = s9.currentTarget;
    if (!(s9.target !== s9.currentTarget && L(s9.target)) && (m(g2) && s9.preventDefault(), e9.props && "onClick" in e9.props && typeof e9.props.onClick == "function" && e9.props.onClick(s9), m(g2))) {
      let r6 = document.getElementById(g2.htmlFor);
      if (r6) {
        let E4 = r6.getAttribute("disabled");
        if (E4 === "true" || E4 === "") return;
        let x4 = r6.getAttribute("aria-disabled");
        if (x4 === "true" || x4 === "") return;
        (l2(r6) && (r6.type === "file" || r6.type === "radio" || r6.type === "checkbox") || r6.role === "radio" || r6.role === "checkbox" || r6.role === "switch") && r6.click(), r6.focus({ preventScroll: true });
      }
    }
  }), f4 = n3({ ...e9.slot, disabled: T5 || false }), c9 = { ref: u9, ...e9.props, id: t5, htmlFor: p6, onClick: d4 };
  return b && ("onClick" in c9 && (delete c9.htmlFor, delete c9.onClick), "onClick" in i5 && delete i5.onClick), K()({ ourProps: c9, theirProps: i5, slot: f4, defaultTag: p6 ? G2 : "div", name: e9.name || "Label" });
}
var j = Y(U);
var Z = Object.assign(j, {});

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react14 = __toESM(require_react(), 1);
function h3(i5) {
  if (i5 === null) return { width: 0, height: 0 };
  let { width: t5, height: e9 } = i5.getBoundingClientRect();
  return { width: t5, height: e9 };
}
function w3(i5, t5, e9 = false) {
  let [r6, f4] = (0, import_react14.useState)(() => h3(t5));
  return n2(() => {
    if (!t5 || !i5) return;
    let n9 = o();
    return n9.requestAnimationFrame(function s9() {
      n9.requestAnimationFrame(s9), f4((u9) => {
        let o9 = h3(t5);
        return o9.width === u9.width && o9.height === u9.height ? u9 : o9;
      });
    }), () => {
      n9.dispose();
    };
  }, [t5, i5]), e9 ? { width: `${r6.width}px`, height: `${r6.height}px` } : r6;
}

// node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/mouse.js
var g = ((f4) => (f4[f4.Left = 0] = "Left", f4[f4.Right = 2] = "Right", f4))(g || {});

// node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
function s5(t5) {
  let r6 = (0, import_react15.useRef)(null), u9 = o2((e9) => {
    r6.current = e9.pointerType, !s4(e9.currentTarget) && e9.pointerType === "mouse" && e9.button === g.Left && (e9.preventDefault(), t5(e9));
  }), i5 = o2((e9) => {
    r6.current !== "mouse" && (s4(e9.currentTarget) || t5(e9));
  });
  return { onPointerDown: u9, onClick: i5 };
}

// node_modules/@headlessui/react/dist/hooks/use-quick-release.js
var import_react16 = __toESM(require_react(), 1);
var H3 = ((e9) => (e9[e9.Ignore = 0] = "Ignore", e9[e9.Select = 1] = "Select", e9[e9.Close = 2] = "Close", e9))(H3 || {});
var S2 = { Ignore: { kind: 0 }, Select: (r6) => ({ kind: 1, target: r6 }), Close: { kind: 2 } };
var M = 200;
var f2 = 5;
function L3(r6, { trigger: n9, action: T5, close: e9, select: p6 }) {
  let l7 = (0, import_react16.useRef)(null), i5 = (0, import_react16.useRef)(null), u9 = (0, import_react16.useRef)(null);
  i2(r6 && n9 !== null, "pointerdown", (t5) => {
    o3(t5 == null ? void 0 : t5.target) && n9 != null && n9.contains(t5.target) && (i5.current = t5.x, u9.current = t5.y, l7.current = t5.timeStamp);
  }), i2(r6 && n9 !== null, "pointerup", (t5) => {
    var s9, m4;
    let c9 = l7.current;
    if (c9 === null || (l7.current = null, !i(t5.target)) || Math.abs(t5.x - ((s9 = i5.current) != null ? s9 : t5.x)) < f2 && Math.abs(t5.y - ((m4 = u9.current) != null ? m4 : t5.y)) < f2) return;
    let a9 = T5(t5);
    switch (a9.kind) {
      case 0:
        return;
      case 1: {
        t5.timeStamp - c9 > M && (p6(a9.target), e9());
        break;
      }
      case 2: {
        e9();
        break;
      }
    }
  }, { capture: true });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react17 = __toESM(require_react(), 1);
function e7(t5, u9) {
  return (0, import_react17.useMemo)(() => {
    var n9;
    if (t5.type) return t5.type;
    let r6 = (n9 = t5.as) != null ? n9 : "button";
    if (typeof r6 == "string" && r6.toLowerCase() === "button" || (u9 == null ? void 0 : u9.tagName) === "BUTTON" && !u9.hasAttribute("type")) return "button";
  }, [t5.type, t5.as, u9]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react18 = __toESM(require_react(), 1);
function t3(e9) {
  return [e9.screenX, e9.screenY];
}
function u6() {
  let e9 = (0, import_react18.useRef)([-1, -1]);
  return { wasMoved(r6) {
    let n9 = t3(r6);
    return e9.current[0] === n9[0] && e9.current[1] === n9[1] ? false : (e9.current = n9, true);
  }, update(r6) {
    e9.current = t3(r6);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react19 = __toESM(require_react(), 1);
function F(c9, { container: e9, accept: t5, walk: r6 }) {
  let o9 = (0, import_react19.useRef)(t5), l7 = (0, import_react19.useRef)(r6);
  (0, import_react19.useEffect)(() => {
    o9.current = t5, l7.current = r6;
  }, [t5, r6]), n2(() => {
    if (!e9 || !c9) return;
    let n9 = l(e9);
    if (!n9) return;
    let f4 = o9.current, p6 = l7.current, i5 = Object.assign((m4) => f4(m4), { acceptNode: f4 }), u9 = n9.createTreeWalker(e9, NodeFilter.SHOW_ELEMENT, i5, false);
    for (; u9.nextNode(); ) p6(u9.currentNode);
  }, [e9, c9, o9, l7]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j2 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
var y3 = (0, import_react21.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y3.displayName = "FloatingContext";
var $ = (0, import_react21.createContext)(null);
$.displayName = "PlacementContext";
function ye(e9) {
  return (0, import_react21.useMemo)(() => e9 ? typeof e9 == "string" ? { to: e9 } : e9 : null, [e9]);
}
function Fe() {
  return (0, import_react21.useContext)(y3).setReference;
}
function be() {
  return (0, import_react21.useContext)(y3).getReferenceProps;
}
function Te() {
  let { getFloatingProps: e9, slot: t5 } = (0, import_react21.useContext)(y3);
  return (0, import_react21.useCallback)((...n9) => Object.assign({}, e9(...n9), { "data-anchor": t5.anchor }), [e9, t5]);
}
function Re(e9 = null) {
  e9 === false && (e9 = null), typeof e9 == "string" && (e9 = { to: e9 });
  let t5 = (0, import_react21.useContext)($), n9 = (0, import_react21.useMemo)(() => e9, [JSON.stringify(e9, (l7, o9) => {
    var u9;
    return (u9 = o9 == null ? void 0 : o9.outerHTML) != null ? u9 : o9;
  })]);
  n2(() => {
    t5 == null || t5(n9 != null ? n9 : null);
  }, [t5, n9]);
  let r6 = (0, import_react21.useContext)(y3);
  return (0, import_react21.useMemo)(() => [r6.setFloating, e9 ? r6.styles : {}], [r6.setFloating, e9, r6.styles]);
}
var D2 = 4;
function Ae({ children: e9, enabled: t5 = true }) {
  let [n9, r6] = (0, import_react21.useState)(null), [l7, o9] = (0, import_react21.useState)(0), u9 = (0, import_react21.useRef)(null), [f4, s9] = (0, import_react21.useState)(null);
  ce(f4);
  let i5 = t5 && n9 !== null && f4 !== null, { to: F3 = "bottom", gap: E4 = 0, offset: A2 = 0, padding: c9 = 0, inner: h6 } = ge(n9, f4), [a9, p6 = "center"] = F3.split(" ");
  n2(() => {
    i5 && o9(0);
  }, [i5]);
  let { refs: b, floatingStyles: S4, context: g2 } = useFloating({ open: i5, placement: a9 === "selection" ? p6 === "center" ? "bottom" : `bottom-${p6}` : p6 === "center" ? `${a9}` : `${a9}-${p6}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a9 === "selection" ? 0 : E4, crossAxis: A2 }), shift({ padding: c9 }), a9 !== "selection" && flip({ padding: c9 }), a9 === "selection" && h6 ? inner({ ...h6, padding: c9, overflowRef: u9, offset: l7, minItemsVisible: D2, referenceOverflowThreshold: c9, onFallbackChange(P3) {
    var L4, N3;
    if (!P3) return;
    let d4 = g2.elements.floating;
    if (!d4) return;
    let M3 = parseFloat(getComputedStyle(d4).scrollPaddingBottom) || 0, I2 = Math.min(D2, d4.childElementCount), W2 = 0, B = 0;
    for (let m4 of (N3 = (L4 = g2.elements.floating) == null ? void 0 : L4.childNodes) != null ? N3 : []) if (n4(m4)) {
      let x4 = m4.offsetTop, k7 = x4 + m4.clientHeight + M3, H5 = d4.scrollTop, U3 = H5 + d4.clientHeight;
      if (x4 >= H5 && k7 <= U3) I2--;
      else {
        B = Math.max(0, Math.min(k7, U3) - Math.max(x4, H5)), W2 = m4.clientHeight;
        break;
      }
    }
    I2 >= 1 && o9((m4) => {
      let x4 = W2 * I2 - B + M3;
      return m4 >= x4 ? m4 : x4;
    });
  } }) : null, size({ padding: c9, apply({ availableWidth: P3, availableHeight: d4, elements: M3 }) {
    Object.assign(M3.floating.style, { overflow: "auto", maxWidth: `${P3}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d4}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w4 = a9, V4 = p6] = g2.placement.split("-");
  a9 === "selection" && (w4 = "selection");
  let G4 = (0, import_react21.useMemo)(() => ({ anchor: [w4, V4].filter(Boolean).join(" ") }), [w4, V4]), K4 = useInnerOffset(g2, { overflowRef: u9, onChange: o9 }), { getReferenceProps: Q2, getFloatingProps: X2 } = useInteractions([K4]), Y3 = o2((P3) => {
    s9(P3), b.setFloating(P3);
  });
  return j2.createElement($.Provider, { value: r6 }, j2.createElement(y3.Provider, { value: { setFloating: Y3, setReference: b.setReference, styles: S4, getReferenceProps: Q2, getFloatingProps: X2, slot: G4 } }, e9));
}
function ce(e9) {
  n2(() => {
    if (!e9) return;
    let t5 = new MutationObserver(() => {
      let n9 = window.getComputedStyle(e9).maxHeight, r6 = parseFloat(n9);
      if (isNaN(r6)) return;
      let l7 = parseInt(n9);
      isNaN(l7) || r6 !== l7 && (e9.style.maxHeight = `${Math.ceil(r6)}px`);
    });
    return t5.observe(e9, { attributes: true, attributeFilter: ["style"] }), () => {
      t5.disconnect();
    };
  }, [e9]);
}
function ge(e9, t5) {
  var o9, u9, f4;
  let n9 = O((o9 = e9 == null ? void 0 : e9.gap) != null ? o9 : "var(--anchor-gap, 0)", t5), r6 = O((u9 = e9 == null ? void 0 : e9.offset) != null ? u9 : "var(--anchor-offset, 0)", t5), l7 = O((f4 = e9 == null ? void 0 : e9.padding) != null ? f4 : "var(--anchor-padding, 0)", t5);
  return { ...e9, gap: n9, offset: r6, padding: l7 };
}
function O(e9, t5, n9 = void 0) {
  let r6 = p(), l7 = o2((s9, i5) => {
    if (s9 == null) return [n9, null];
    if (typeof s9 == "number") return [s9, null];
    if (typeof s9 == "string") {
      if (!i5) return [n9, null];
      let F3 = J(s9, i5);
      return [F3, (E4) => {
        let A2 = q(s9);
        {
          let c9 = A2.map((h6) => window.getComputedStyle(i5).getPropertyValue(h6));
          r6.requestAnimationFrame(function h6() {
            r6.nextFrame(h6);
            let a9 = false;
            for (let [b, S4] of A2.entries()) {
              let g2 = window.getComputedStyle(i5).getPropertyValue(S4);
              if (c9[b] !== g2) {
                c9[b] = g2, a9 = true;
                break;
              }
            }
            if (!a9) return;
            let p6 = J(s9, i5);
            F3 !== p6 && (E4(p6), F3 = p6);
          });
        }
        return r6.dispose;
      }];
    }
    return [n9, null];
  }), o9 = (0, import_react21.useMemo)(() => l7(e9, t5)[0], [e9, t5]), [u9 = o9, f4] = (0, import_react21.useState)();
  return n2(() => {
    let [s9, i5] = l7(e9, t5);
    if (f4(s9), !!i5) return i5(f4);
  }, [e9, t5]), u9;
}
function q(e9) {
  let t5 = /var\((.*)\)/.exec(e9);
  if (t5) {
    let n9 = t5[1].indexOf(",");
    if (n9 === -1) return [t5[1]];
    let r6 = t5[1].slice(0, n9).trim(), l7 = t5[1].slice(n9 + 1).trim();
    return l7 ? [r6, ...q(l7)] : [r6];
  }
  return [];
}
function J(e9, t5) {
  let n9 = document.createElement("div");
  t5.appendChild(n9), n9.style.setProperty("margin-top", "0px", "important"), n9.style.setProperty("margin-top", e9, "important");
  let r6 = parseFloat(window.getComputedStyle(n9).marginTop) || 0;
  return t5.removeChild(n9), r6;
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u7(l7) {
  throw new Error("Unexpected object: " + l7);
}
var c6 = ((i5) => (i5[i5.First = 0] = "First", i5[i5.Previous = 1] = "Previous", i5[i5.Next = 2] = "Next", i5[i5.Last = 3] = "Last", i5[i5.Specific = 4] = "Specific", i5[i5.Nothing = 5] = "Nothing", i5))(c6 || {});
function f3(l7, n9) {
  let t5 = n9.resolveItems();
  if (t5.length <= 0) return null;
  let r6 = n9.resolveActiveIndex(), s9 = r6 != null ? r6 : -1;
  switch (l7.focus) {
    case 0: {
      for (let e9 = 0; e9 < t5.length; ++e9) if (!n9.resolveDisabled(t5[e9], e9, t5)) return e9;
      return r6;
    }
    case 1: {
      s9 === -1 && (s9 = t5.length);
      for (let e9 = s9 - 1; e9 >= 0; --e9) if (!n9.resolveDisabled(t5[e9], e9, t5)) return e9;
      return r6;
    }
    case 2: {
      for (let e9 = s9 + 1; e9 < t5.length; ++e9) if (!n9.resolveDisabled(t5[e9], e9, t5)) return e9;
      return r6;
    }
    case 3: {
      for (let e9 = t5.length - 1; e9 >= 0; --e9) if (!n9.resolveDisabled(t5[e9], e9, t5)) return e9;
      return r6;
    }
    case 4: {
      for (let e9 = 0; e9 < t5.length; ++e9) if (n9.resolveId(t5[e9], e9, t5) === l7.id) return e9;
      return r6;
    }
    case 5:
      return null;
    default:
      u7(l7);
  }
}

// node_modules/@headlessui/react/dist/utils/element-movement.js
var c7 = { Idle: { kind: "Idle" }, Tracked: (e9) => ({ kind: "Tracked", position: e9 }), Moved: { kind: "Moved" } };
function a6(e9) {
  let t5 = e9.getBoundingClientRect();
  return `${t5.x},${t5.y}`;
}
function p4(e9, t5, i5) {
  let n9 = o();
  if (t5.kind === "Tracked") {
    let o9 = function() {
      d4 !== a6(e9) && (n9.dispose(), i5());
    };
    var f4 = o9;
    let { position: d4 } = t5, s9 = new ResizeObserver(o9);
    s9.observe(e9), n9.add(() => s9.disconnect()), n9.addEventListener(window, "scroll", o9, { passive: true }), n9.addEventListener(window, "resize", o9);
  }
  return () => n9.dispose();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react22 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a7 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o7(e9) {
  var l7, n9;
  let i5 = (l7 = e9.innerText) != null ? l7 : "", t5 = e9.cloneNode(true);
  if (!n4(t5)) return i5;
  let u9 = false;
  for (let f4 of t5.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f4.remove(), u9 = true;
  let r6 = u9 ? (n9 = t5.innerText) != null ? n9 : "" : i5;
  return a7.test(r6) && (r6 = r6.replace(a7, "")), r6;
}
function F2(e9) {
  let i5 = e9.getAttribute("aria-label");
  if (typeof i5 == "string") return i5.trim();
  let t5 = e9.getAttribute("aria-labelledby");
  if (t5) {
    let u9 = t5.split(" ").map((r6) => {
      let l7 = document.getElementById(r6);
      if (l7) {
        let n9 = l7.getAttribute("aria-label");
        return typeof n9 == "string" ? n9.trim() : o7(l7).trim();
      }
      return null;
    }).filter(Boolean);
    if (u9.length > 0) return u9.join(", ");
  }
  return o7(e9).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s6(c9) {
  let t5 = (0, import_react22.useRef)(""), r6 = (0, import_react22.useRef)("");
  return o2(() => {
    let e9 = c9.current;
    if (!e9) return "";
    let u9 = e9.innerText;
    if (t5.current === u9) return r6.current;
    let n9 = F2(e9).trim().toLowerCase();
    return t5.current = u9, r6.current = n9, n9;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react24 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/components/menu/menu-machine.js
var y4 = Object.defineProperty;
var M2 = (e9, i5, t5) => i5 in e9 ? y4(e9, i5, { enumerable: true, configurable: true, writable: true, value: t5 }) : e9[i5] = t5;
var S3 = (e9, i5, t5) => (M2(e9, typeof i5 != "symbol" ? i5 + "" : i5, t5), t5);
var P2 = ((t5) => (t5[t5.Open = 0] = "Open", t5[t5.Closed = 1] = "Closed", t5))(P2 || {});
var D3 = ((t5) => (t5[t5.Pointer = 0] = "Pointer", t5[t5.Other = 1] = "Other", t5))(D3 || {});
var C2 = ((o9) => (o9[o9.OpenMenu = 0] = "OpenMenu", o9[o9.CloseMenu = 1] = "CloseMenu", o9[o9.GoToItem = 2] = "GoToItem", o9[o9.Search = 3] = "Search", o9[o9.ClearSearch = 4] = "ClearSearch", o9[o9.RegisterItems = 5] = "RegisterItems", o9[o9.UnregisterItems = 6] = "UnregisterItems", o9[o9.SetButtonElement = 7] = "SetButtonElement", o9[o9.SetItemsElement = 8] = "SetItemsElement", o9[o9.SortItems = 9] = "SortItems", o9[o9.MarkButtonAsMoved = 10] = "MarkButtonAsMoved", o9))(C2 || {});
function x3(e9, i5 = (t5) => t5) {
  let t5 = e9.activeItemIndex !== null ? e9.items[e9.activeItemIndex] : null, n9 = G(i5(e9.items.slice()), (s9) => s9.dataRef.current.domRef.current), r6 = t5 ? n9.indexOf(t5) : null;
  return r6 === -1 && (r6 = null), { items: n9, activeItemIndex: r6 };
}
var k5 = { [1](e9) {
  if (e9.menuState === 1) return e9;
  let i5 = e9.buttonElement ? c7.Tracked(a6(e9.buttonElement)) : e9.buttonPositionState;
  return { ...e9, activeItemIndex: null, pendingFocus: { focus: c6.Nothing }, menuState: 1, buttonPositionState: i5 };
}, [0](e9, i5) {
  return e9.menuState === 0 ? e9 : { ...e9, __demoMode: false, pendingFocus: i5.focus, menuState: 0, buttonPositionState: c7.Idle };
}, [2]: (e9, i5) => {
  var s9, l7, a9, I2, f4;
  if (e9.menuState === 1) return e9;
  let t5 = { ...e9, searchQuery: "", activationTrigger: (s9 = i5.trigger) != null ? s9 : 1, __demoMode: false };
  if (i5.focus === c6.Nothing) return { ...t5, activeItemIndex: null };
  if (i5.focus === c6.Specific) return { ...t5, activeItemIndex: e9.items.findIndex((d4) => d4.id === i5.id) };
  if (i5.focus === c6.Previous) {
    let d4 = e9.activeItemIndex;
    if (d4 !== null) {
      let o9 = e9.items[d4].dataRef.current.domRef, c9 = f3(i5, { resolveItems: () => e9.items, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (u9) => u9.id, resolveDisabled: (u9) => u9.dataRef.current.disabled });
      if (c9 !== null) {
        let u9 = e9.items[c9].dataRef.current.domRef;
        if (((l7 = o9.current) == null ? void 0 : l7.previousElementSibling) === u9.current || ((a9 = u9.current) == null ? void 0 : a9.previousElementSibling) === null) return { ...t5, activeItemIndex: c9 };
      }
    }
  } else if (i5.focus === c6.Next) {
    let d4 = e9.activeItemIndex;
    if (d4 !== null) {
      let o9 = e9.items[d4].dataRef.current.domRef, c9 = f3(i5, { resolveItems: () => e9.items, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (u9) => u9.id, resolveDisabled: (u9) => u9.dataRef.current.disabled });
      if (c9 !== null) {
        let u9 = e9.items[c9].dataRef.current.domRef;
        if (((I2 = o9.current) == null ? void 0 : I2.nextElementSibling) === u9.current || ((f4 = u9.current) == null ? void 0 : f4.nextElementSibling) === null) return { ...t5, activeItemIndex: c9 };
      }
    }
  }
  let n9 = x3(e9), r6 = f3(i5, { resolveItems: () => n9.items, resolveActiveIndex: () => n9.activeItemIndex, resolveId: (d4) => d4.id, resolveDisabled: (d4) => d4.dataRef.current.disabled });
  return { ...t5, ...n9, activeItemIndex: r6 };
}, [3]: (e9, i5) => {
  let n9 = e9.searchQuery !== "" ? 0 : 1, r6 = e9.searchQuery + i5.value.toLowerCase(), l7 = (e9.activeItemIndex !== null ? e9.items.slice(e9.activeItemIndex + n9).concat(e9.items.slice(0, e9.activeItemIndex + n9)) : e9.items).find((I2) => {
    var f4;
    return ((f4 = I2.dataRef.current.textValue) == null ? void 0 : f4.startsWith(r6)) && !I2.dataRef.current.disabled;
  }), a9 = l7 ? e9.items.indexOf(l7) : -1;
  return a9 === -1 || a9 === e9.activeItemIndex ? { ...e9, searchQuery: r6 } : { ...e9, searchQuery: r6, activeItemIndex: a9, activationTrigger: 1 };
}, [4](e9) {
  return e9.searchQuery === "" ? e9 : { ...e9, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e9, i5) => {
  let t5 = e9.items.concat(i5.items.map((r6) => r6)), n9 = e9.activeItemIndex;
  return e9.pendingFocus.focus !== c6.Nothing && (n9 = f3(e9.pendingFocus, { resolveItems: () => t5, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (r6) => r6.id, resolveDisabled: (r6) => r6.dataRef.current.disabled })), { ...e9, items: t5, activeItemIndex: n9, pendingFocus: { focus: c6.Nothing }, pendingShouldSort: true };
}, [6]: (e9, i5) => {
  let t5 = e9.items, n9 = [], r6 = new Set(i5.items);
  for (let [s9, l7] of t5.entries()) if (r6.has(l7.id) && (n9.push(s9), r6.delete(l7.id), r6.size === 0)) break;
  if (n9.length > 0) {
    t5 = t5.slice();
    for (let s9 of n9.reverse()) t5.splice(s9, 1);
  }
  return { ...e9, items: t5, activationTrigger: 1 };
}, [7]: (e9, i5) => e9.buttonElement === i5.element ? e9 : { ...e9, buttonElement: i5.element }, [8]: (e9, i5) => e9.itemsElement === i5.element ? e9 : { ...e9, itemsElement: i5.element }, [9]: (e9) => e9.pendingShouldSort ? { ...e9, ...x3(e9), pendingShouldSort: false } : e9, [10](e9) {
  return e9.buttonPositionState.kind !== "Tracked" ? e9 : { ...e9, buttonPositionState: c7.Moved };
} };
var h4 = class _h extends T {
  constructor(t5) {
    super(t5);
    S3(this, "actions", { registerItem: k(() => {
      let t6 = [], n9 = /* @__PURE__ */ new Set();
      return [(r6, s9) => {
        n9.has(s9) || (n9.add(s9), t6.push({ id: r6, dataRef: s9 }));
      }, () => (n9.clear(), this.send({ type: 5, items: t6.splice(0) }))];
    }), unregisterItem: k(() => {
      let t6 = [];
      return [(n9) => t6.push(n9), () => this.send({ type: 6, items: t6.splice(0) })];
    }) });
    S3(this, "selectors", { activeDescendantId(t6) {
      var s9;
      let n9 = t6.activeItemIndex, r6 = t6.items;
      return n9 === null || (s9 = r6[n9]) == null ? void 0 : s9.id;
    }, isActive(t6, n9) {
      var l7;
      let r6 = t6.activeItemIndex, s9 = t6.items;
      return r6 !== null ? ((l7 = s9[r6]) == null ? void 0 : l7.id) === n9 : false;
    }, shouldScrollIntoView(t6, n9) {
      return t6.__demoMode || t6.menuState !== 0 || t6.activationTrigger === 0 ? false : this.isActive(t6, n9);
    }, didButtonMove(t6) {
      return t6.buttonPositionState.kind === "Moved";
    } });
    this.on(5, () => {
      this.disposables.requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
    {
      let n9 = this.state.id, r6 = x.get(null);
      this.disposables.add(r6.on(k2.Push, (s9) => {
        !r6.selectors.isTop(s9, n9) && this.state.menuState === 0 && this.send({ type: 1 });
      })), this.on(0, () => r6.actions.push(n9)), this.on(1, () => r6.actions.pop(n9));
    }
    this.disposables.group((n9) => {
      this.on(1, (r6) => {
        r6.buttonElement && (n9.dispose(), n9.add(p4(r6.buttonElement, r6.buttonPositionState, () => {
          this.send({ type: 10 });
        })));
      });
    });
  }
  static new({ id: t5, __demoMode: n9 = false }) {
    return new _h({ id: t5, __demoMode: n9, menuState: n9 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: false, pendingFocus: { focus: c6.Nothing }, buttonPositionState: c7.Idle });
  }
  reduce(t5, n9) {
    return u(n9.type, k5, t5, n9);
  }
};

// node_modules/@headlessui/react/dist/components/menu/menu-machine-glue.js
var import_react23 = __toESM(require_react(), 1);
var a8 = (0, import_react23.createContext)(null);
function p5(t5) {
  let n9 = (0, import_react23.useContext)(a8);
  if (n9 === null) {
    let e9 = new Error(`<${t5} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e9, s7), e9;
  }
  return n9;
}
function s7({ id: t5, __demoMode: n9 = false }) {
  let e9 = (0, import_react23.useMemo)(() => h4.new({ id: t5, __demoMode: n9 }), []);
  return c2(() => e9.dispose()), e9;
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var Ze = import_react24.Fragment;
function et(m4, y5) {
  let l7 = (0, import_react.useId)(), { __demoMode: a9 = false, ...p6 } = m4, s9 = s7({ id: l7, __demoMode: a9 }), [n9, M3, f4] = S(s9, (d4) => [d4.menuState, d4.itemsElement, d4.buttonElement]), _3 = y(y5), o9 = x.get(null), F3 = S(o9, (0, import_react24.useCallback)((d4) => o9.selectors.isTop(d4, l7), [o9, l7]));
  k3(F3, [f4, M3], (d4, T5) => {
    var P3;
    s9.send({ type: C2.CloseMenu }), H2(T5, I.Loose) || (d4.preventDefault(), (P3 = s9.state.buttonElement) == null || P3.focus());
  });
  let I2 = o2(() => {
    s9.send({ type: C2.CloseMenu });
  }), b = n3({ open: n9 === P2.Open, close: I2 }), i5 = { ref: _3 }, g2 = K();
  return import_react24.default.createElement(Ae, null, import_react24.default.createElement(a8.Provider, { value: s9 }, import_react24.default.createElement(c, { value: u(n9, { [P2.Open]: i3.Open, [P2.Closed]: i3.Closed }) }, g2({ ourProps: i5, theirProps: p6, slot: b, defaultTag: Ze, name: "Menu" }))));
}
var tt = "button";
function ot(m4, y5) {
  let l7 = p5("Menu.Button"), a9 = (0, import_react.useId)(), { id: p6 = `headlessui-menu-button-${a9}`, disabled: s9 = false, autoFocus: n9 = false, ...M3 } = m4, f4 = (0, import_react24.useRef)(null), _3 = be(), o9 = y(y5, f4, Fe(), o2((t5) => l7.send({ type: C2.SetButtonElement, element: t5 }))), F3 = o2((t5) => {
    switch (t5.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        t5.preventDefault(), t5.stopPropagation(), l7.send({ type: C2.OpenMenu, focus: { focus: c6.First } });
        break;
      case o4.ArrowUp:
        t5.preventDefault(), t5.stopPropagation(), l7.send({ type: C2.OpenMenu, focus: { focus: c6.Last } });
        break;
    }
  }), I2 = o2((t5) => {
    switch (t5.key) {
      case o4.Space:
        t5.preventDefault();
        break;
    }
  }), [b, i5, g2] = S(l7, (t5) => [t5.menuState, t5.buttonElement, t5.itemsElement]), d4 = b === P2.Open;
  L3(d4, { trigger: i5, action: (0, import_react24.useCallback)((t5) => {
    if (i5 != null && i5.contains(t5.target)) return S2.Ignore;
    let S4 = t5.target.closest('[role="menuitem"]:not([data-disabled])');
    return n4(S4) ? S2.Select(S4) : g2 != null && g2.contains(t5.target) ? S2.Ignore : S2.Close;
  }, [i5, g2]), close: (0, import_react24.useCallback)(() => l7.send({ type: C2.CloseMenu }), []), select: (0, import_react24.useCallback)((t5) => t5.click(), []) });
  let T5 = s5((t5) => {
    var S4;
    s9 || (b === P2.Open ? ((0, import_react_dom.flushSync)(() => l7.send({ type: C2.CloseMenu })), (S4 = f4.current) == null || S4.focus({ preventScroll: true })) : (t5.preventDefault(), l7.send({ type: C2.OpenMenu, focus: { focus: c6.Nothing }, trigger: D3.Pointer })));
  }), { isFocusVisible: P3, focusProps: L4 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: n9 }), { isHovered: O3, hoverProps: v3 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: s9 }), { pressed: D4, pressProps: U3 } = w2({ disabled: s9 }), H5 = n3({ open: b === P2.Open, active: D4 || b === P2.Open, disabled: s9, hover: O3, focus: P3, autofocus: n9 }), G4 = V(_3(), { ref: o9, id: p6, type: e7(m4, f4.current), "aria-haspopup": "menu", "aria-controls": g2 == null ? void 0 : g2.id, "aria-expanded": b === P2.Open, disabled: s9 || void 0, autoFocus: n9, onKeyDown: F3, onKeyUp: I2 }, T5, L4, v3, U3);
  return K()({ ourProps: G4, theirProps: M3, slot: H5, defaultTag: tt, name: "Menu.Button" });
}
var nt = "div";
var rt = A.RenderStrategy | A.Static;
function at(m4, y5) {
  let l7 = (0, import_react.useId)(), { id: a9 = `headlessui-menu-items-${l7}`, anchor: p6, portal: s9 = false, modal: n9 = true, transition: M3 = false, ...f4 } = m4, _3 = ye(p6), o9 = p5("Menu.Items"), [F3, I2] = Re(_3), b = Te(), [i5, g2] = (0, import_react24.useState)(null), d4 = y(y5, _3 ? F3 : null, o2((e9) => o9.send({ type: C2.SetItemsElement, element: e9 })), g2), [T5, P3] = S(o9, (e9) => [e9.menuState, e9.buttonElement]), L4 = u2(P3), O3 = u2(i5);
  _3 && (s9 = true);
  let v3 = u3(), [D4, U3] = N(M3, i5, v3 !== null ? (v3 & i3.Open) === i3.Open : T5 === P2.Open);
  p2(D4, P3, () => {
    o9.send({ type: C2.CloseMenu });
  });
  let H5 = S(o9, (e9) => e9.__demoMode), G4 = H5 ? false : n9 && T5 === P2.Open;
  f(G4, O3);
  let w4 = H5 ? false : n9 && T5 === P2.Open;
  y2(w4, { allowed: (0, import_react24.useCallback)(() => [P3, i5], [P3, i5]) });
  let S4 = S(o9, o9.selectors.didButtonMove) ? false : D4;
  (0, import_react24.useEffect)(() => {
    let e9 = i5;
    e9 && T5 === P2.Open && (d(e9) || e9.focus({ preventScroll: true }));
  }, [T5, i5]), F(T5 === P2.Open, { container: i5, accept(e9) {
    return e9.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e9.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e9) {
    e9.setAttribute("role", "none");
  } });
  let z2 = p(), le2 = o2((e9) => {
    var N3, Y3, Z2;
    switch (z2.dispose(), e9.key) {
      case o4.Space:
        if (o9.state.searchQuery !== "") return e9.preventDefault(), e9.stopPropagation(), o9.send({ type: C2.Search, value: e9.key });
      case o4.Enter:
        if (e9.preventDefault(), e9.stopPropagation(), o9.state.activeItemIndex !== null) {
          let { dataRef: de } = o9.state.items[o9.state.activeItemIndex];
          (Y3 = (N3 = de.current) == null ? void 0 : N3.domRef.current) == null || Y3.click();
        }
        o9.send({ type: C2.CloseMenu }), K2(o9.state.buttonElement);
        break;
      case o4.ArrowDown:
        return e9.preventDefault(), e9.stopPropagation(), o9.send({ type: C2.GoToItem, focus: c6.Next });
      case o4.ArrowUp:
        return e9.preventDefault(), e9.stopPropagation(), o9.send({ type: C2.GoToItem, focus: c6.Previous });
      case o4.Home:
      case o4.PageUp:
        return e9.preventDefault(), e9.stopPropagation(), o9.send({ type: C2.GoToItem, focus: c6.First });
      case o4.End:
      case o4.PageDown:
        return e9.preventDefault(), e9.stopPropagation(), o9.send({ type: C2.GoToItem, focus: c6.Last });
      case o4.Escape:
        e9.preventDefault(), e9.stopPropagation(), (0, import_react_dom.flushSync)(() => o9.send({ type: C2.CloseMenu })), (Z2 = o9.state.buttonElement) == null || Z2.focus({ preventScroll: true });
        break;
      case o4.Tab:
        e9.preventDefault(), e9.stopPropagation(), (0, import_react_dom.flushSync)(() => o9.send({ type: C2.CloseMenu })), R(o9.state.buttonElement, e9.shiftKey ? T2.Previous : T2.Next);
        break;
      default:
        e9.key.length === 1 && (o9.send({ type: C2.Search, value: e9.key }), z2.setTimeout(() => o9.send({ type: C2.ClearSearch }), 350));
        break;
    }
  }), pe = o2((e9) => {
    switch (e9.key) {
      case o4.Space:
        e9.preventDefault();
        break;
    }
  }), ie = n3({ open: T5 === P2.Open }), ue2 = V(_3 ? b() : {}, { "aria-activedescendant": S(o9, o9.selectors.activeDescendantId), "aria-labelledby": S(o9, (e9) => {
    var N3;
    return (N3 = e9.buttonElement) == null ? void 0 : N3.id;
  }), id: a9, onKeyDown: le2, onKeyUp: pe, role: "menu", tabIndex: T5 === P2.Open ? 0 : void 0, ref: d4, style: { ...f4.style, ...I2, "--button-width": w3(D4, P3, true).width }, ...x2(U3) }), me = K();
  return import_react24.default.createElement(le, { enabled: s9 ? m4.static || D4 : false, ownerDocument: L4 }, me({ ourProps: ue2, theirProps: f4, slot: ie, defaultTag: nt, features: rt, visible: S4, name: "Menu.Items" }));
}
var st = import_react24.Fragment;
function lt(m4, y5) {
  let l7 = (0, import_react.useId)(), { id: a9 = `headlessui-menu-item-${l7}`, disabled: p6 = false, ...s9 } = m4, n9 = p5("Menu.Item"), M3 = S(n9, (t5) => n9.selectors.isActive(t5, a9)), f4 = (0, import_react24.useRef)(null), _3 = y(y5, f4), o9 = S(n9, (t5) => n9.selectors.shouldScrollIntoView(t5, a9));
  n2(() => {
    if (o9) return o().requestAnimationFrame(() => {
      var t5, S4;
      (S4 = (t5 = f4.current) == null ? void 0 : t5.scrollIntoView) == null || S4.call(t5, { block: "nearest" });
    });
  }, [o9, f4]);
  let F3 = s6(f4), I2 = (0, import_react24.useRef)({ disabled: p6, domRef: f4, get textValue() {
    return F3();
  } });
  n2(() => {
    I2.current.disabled = p6;
  }, [I2, p6]), n2(() => (n9.actions.registerItem(a9, I2), () => n9.actions.unregisterItem(a9)), [I2, a9]);
  let b = o2(() => {
    n9.send({ type: C2.CloseMenu });
  }), i5 = o2((t5) => {
    if (p6) return t5.preventDefault();
    n9.send({ type: C2.CloseMenu }), K2(n9.state.buttonElement);
  }), g2 = o2(() => {
    if (p6) return n9.send({ type: C2.GoToItem, focus: c6.Nothing });
    n9.send({ type: C2.GoToItem, focus: c6.Specific, id: a9 });
  }), d4 = u6(), T5 = o2((t5) => d4.update(t5)), P3 = o2((t5) => {
    d4.wasMoved(t5) && (p6 || M3 || n9.send({ type: C2.GoToItem, focus: c6.Specific, id: a9, trigger: D3.Pointer }));
  }), L4 = o2((t5) => {
    d4.wasMoved(t5) && (p6 || M3 && n9.state.activationTrigger === D3.Pointer && n9.send({ type: C2.GoToItem, focus: c6.Nothing }));
  }), [O3, v3] = V2(), [D4, U3] = H(), H5 = n3({ active: M3, focus: M3, disabled: p6, close: b }), G4 = { id: a9, ref: _3, role: "menuitem", tabIndex: p6 === true ? void 0 : -1, "aria-disabled": p6 === true ? true : void 0, "aria-labelledby": O3, "aria-describedby": D4, disabled: void 0, onClick: i5, onFocus: g2, onPointerEnter: T5, onMouseEnter: T5, onPointerMove: P3, onMouseMove: P3, onPointerLeave: L4, onMouseLeave: L4 }, w4 = K();
  return import_react24.default.createElement(v3, null, import_react24.default.createElement(U3, null, w4({ ourProps: G4, theirProps: s9, slot: H5, defaultTag: st, name: "Menu.Item" })));
}
var pt = "div";
function it(m4, y5) {
  let [l7, a9] = V2(), p6 = m4, s9 = { ref: y5, "aria-labelledby": l7, role: "group" }, n9 = K();
  return import_react24.default.createElement(a9, null, n9({ ourProps: s9, theirProps: p6, slot: {}, defaultTag: pt, name: "Menu.Section" }));
}
var ut = "header";
function mt(m4, y5) {
  let l7 = (0, import_react.useId)(), { id: a9 = `headlessui-menu-heading-${l7}`, ...p6 } = m4, s9 = C();
  n2(() => s9.register(a9), [a9, s9.register]);
  let n9 = { id: a9, ref: y5, role: "presentation", ...s9.props };
  return K()({ ourProps: n9, theirProps: p6, slot: {}, defaultTag: ut, name: "Menu.Heading" });
}
var dt = "div";
function Tt(m4, y5) {
  let l7 = m4, a9 = { ref: y5, role: "separator" };
  return K()({ ourProps: a9, theirProps: l7, slot: {}, defaultTag: dt, name: "Menu.Separator" });
}
var ct = Y(et);
var ft = Y(ot);
var yt = Y(at);
var gt2 = Y(lt);
var Pt = Y(it);
var Et = Y(mt);
var Mt = Y(Tt);
var lo = Object.assign(ct, { Button: ft, Items: yt, Item: gt2, Section: Pt, Heading: Et, Separator: Mt });

// node_modules/@privy-io/react-auth/dist/esm/BridgeNetworkSelectionView-bQo5uNRy.mjs
var U2 = ({ chains: o9, appId: t5, address: s9, rpcConfig: c9 }) => Promise.all(o9.map((async (o10) => {
  let m4 = e8({ chain: o10, transport: r5(n(o10, c9, t5)) }), l7 = await m4.getBalance({ address: s9 }).catch((() => 0n)), d4 = null, h6 = mi[o10.id];
  if (h6) {
    let { balance: e9 } = await n5({ address: s9, chain: o10, rpcConfig: c9, appId: t5, erc20Address: h6 });
    d4 = e9;
  }
  return { balance: l7, erc20Balance: d4, erc20Address: h6, chain: o10 };
})));
var W = ({ balance: e9, className: r6, chain: a9 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { className: r6, $state: void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H4, { balance: e9, chain: a9 }) });
var H4 = ({ balance: e9, chain: r6 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(V3, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(K3, { chainId: "object" == typeof r6 ? r6.id : "solana" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n6, { children: "object" == typeof r6 ? r6.name : e2(r6) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n7, { isLoading: false, isPulsing: false, color: "gray", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletIcon_default, {}) }), e9] })] });
var V3 = gt.div`
  display: flex;
  align-items: center;
`;
var z = gt.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`;
var K3 = gt(w)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;
var O2 = ({ options: e9, onSelect: r6, selected: a9, className: o9 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(lo, { as: Y2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ft, { as: J2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H4, { balance: a9.balance, chain: a9.chain }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(G3, { height: 16 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(yt, { as: _2, className: o9, children: e9.map(((e10, a10) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(gt2, { as: q2, onClick: () => r6(a10), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H4, { balance: e10.balance, chain: e10.chain }) }, a10))) })] });
var Y2 = gt.div`
  width: 100%;
  position: relative;
`;
var _2 = gt.div`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: var(--privy-color-background);
  border-radius: var(--privy-border-radius-md);
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  max-height: 11.75rem;

  && {
    border: solid 1px var(--privy-color-foreground-4);
  }

  z-index: 1;
`;
var q2 = gt.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  && {
    padding: 1rem;
  }

  :not(:last-child) {
    border-bottom: solid 1px var(--privy-color-foreground-4);
  }

  :hover {
    background: var(--privy-color-background-2);
  }
`;
var G3 = gt(ChevronDownIcon_default)`
  height: 1rem;
  margin-left: 0.5rem;
`;
var J2 = gt.button`
  ${e5}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${G3} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${G3} {
      rotate: -180deg;
    }
  }
`;
var X = ({ displayName: e9, errorMessage: r6, configuredFundingChain: a9, formattedBalance: i5, fundingAmount: n9, fundingCurrency: b, fundingAmountInUsd: w4, options: C3, selectedOption: k7, isPreparing: N3, isSubmitting: B, addressToFund: S4, fundingWalletAddress: T5, onSubmit: I2, onSelect: A2, onAmountChange: E4 }) => {
  let F3 = (0, import_react25.useRef)(null);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e4, { children: "Transfer from another network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(r, { children: ["You need more funds on the", " ", "object" == typeof a9 ? a9.name : e2(a9), " ", "network. Bridge from another blockchain network."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a3, { style: { marginTop: "2rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p3, { onClick: () => F3.current?.focus(), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s3, { ref: F3, value: n9, onChange: (e10) => {
    let r7 = e10.target.value;
    if (/^[0-9.]*$/.test(r7) && r7.split(".").length - 1 <= 1) {
      let e11 = /\.$/.test(r7) ? "." : "", a10 = Number(r7.replace(/\.$/, "") || "0");
      if (Number.isNaN(a10)) return void E4("0");
      E4(a10.toString() + e11);
    }
  } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c5, { children: b })] }), w4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l3, { children: w4 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: "From" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: Gi(T5) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O2, { selected: { chain: k7.chain, balance: k7.isErc20Quote ? t2({ amount: k7.erc20Balance ?? 0n, decimals: 6 }) + " USDC" : c4(k7.balance, k7.chain.nativeCurrency.symbol, 3, true) }, options: C3.map((({ chain: e10, balance: r7, isErc20Quote: a10, erc20Balance: o9 }) => ({ chain: e10, balance: a10 ? t2({ amount: o9 ?? 0n, decimals: 6 }) + " USDC" : c4(r7, e10.nativeCurrency.symbol, 3, true) }))), onSelect: A2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: "To" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: Gi(S4) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { chain: a9, balance: i5 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "1rem" }, children: r6 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u4, { style: { marginTop: "1rem" }, loading: B || N3, disabled: N3 || B, onClick: I2, children: ["Confirm with ", e9] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};

export {
  U2 as U,
  X
};
