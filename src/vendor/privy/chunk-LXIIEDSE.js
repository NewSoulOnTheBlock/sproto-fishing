import {
  h as h2,
  t as t4
} from "./chunk-ED6XPATD.js";
import {
  c,
  p as p2,
  w as w2
} from "./chunk-OL32SSSM.js";
import {
  t as t3
} from "./chunk-3X5UVGJ4.js";
import {
  t as t2
} from "./chunk-VAKKZBAS.js";
import {
  w
} from "./chunk-4JCAMCZH.js";
import "./chunk-OBV6VSAS.js";
import {
  p
} from "./chunk-3DDSRDFL.js";
import "./chunk-SGK7A445.js";
import {
  autoUpdate,
  clamp,
  evaluate,
  flip,
  floor,
  getAlignment,
  getAlignmentAxis,
  getAxisLength,
  getComputedStyle,
  getNodeName,
  getOverflowAncestors,
  getPaddingObject,
  getParentNode,
  getSide,
  getSideAxis,
  getWindow,
  isElement,
  isHTMLElement,
  isLastTraversableNode,
  isNode,
  isOverflowElement,
  isShadowRoot,
  limitShift,
  offset,
  shift,
  size,
  useFloating
} from "./chunk-S5KBLGPR.js";
import "./chunk-PZMIZGJH.js";
import "./chunk-WSIRTJK5.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Building,
  Calendar,
  Check,
  ChevronRight,
  CircleX,
  CreditCard,
  FileText,
  Globe,
  Landmark,
  Lock,
  MapPin,
  Plus,
  Search,
  Smartphone,
  User,
  Wallet,
  X
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  h
} from "./chunk-RPCD4HAF.js";
import {
  Al,
  Ml,
  fi,
  fl,
  gl,
  ml,
  pl,
  vl,
  wl,
  yl
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import {
  require_react_dom
} from "./chunk-5QJKWR6B.js";
import {
  t
} from "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  o
} from "./chunk-COXZQBSX.js";
import {
  i,
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  Ge,
  He,
  Je,
  Ke,
  Ue,
  Ve,
  We,
  _a,
  oi,
  qe,
  se
} from "./chunk-MIVUYAK7.js";
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
  __commonJS,
  __export,
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React83.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState16({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect2(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect14(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React83 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState16 = React83.useState, useEffect14 = React83.useEffect, useLayoutEffect2 = React83.useLayoutEffect, useDebugValue2 = React83.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React83.useSyncExternalStore ? React83.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React83 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore2 = shim.useSyncExternalStore, useRef27 = React83.useRef, useEffect14 = React83.useEffect, useMemo20 = React83.useMemo, useDebugValue2 = React83.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef27(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo20(
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
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect14(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/@privy-io/react-auth/dist/esm/FiatOnrampScreen-9mT5Hieh.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/index.parts.mjs
var index_parts_exports = {};
__export(index_parts_exports, {
  Arrow: () => ComboboxArrow,
  Backdrop: () => ComboboxBackdrop,
  Chip: () => ComboboxChip,
  ChipRemove: () => ComboboxChipRemove,
  Chips: () => ComboboxChips,
  Clear: () => ComboboxClear,
  Collection: () => ComboboxCollection,
  Empty: () => ComboboxEmpty,
  Group: () => ComboboxGroup,
  GroupLabel: () => ComboboxGroupLabel,
  Icon: () => ComboboxIcon,
  Input: () => ComboboxInput,
  InputGroup: () => ComboboxInputGroup,
  Item: () => ComboboxItem,
  ItemIndicator: () => ComboboxItemIndicator,
  Label: () => ComboboxLabel,
  List: () => ComboboxList,
  Popup: () => ComboboxPopup,
  Portal: () => ComboboxPortal,
  Positioner: () => ComboboxPositioner,
  Root: () => ComboboxRoot,
  Row: () => ComboboxRow,
  Separator: () => ComboboxSeparator,
  Status: () => ComboboxStatus,
  Trigger: () => ComboboxTrigger,
  Value: () => ComboboxValue,
  useFilter: () => useComboboxFilter,
  useFilteredItems: () => useFilteredItems
});

// node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
var React38 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/root/AriaCombobox.mjs
var React37 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/useControlled.mjs
var React = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/error.mjs
var set;
if (true) {
  set = /* @__PURE__ */ new Set();
}
function error(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@base-ui/utils/useControlled.mjs
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React.useRef(controlled !== void 0);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React.useRef(defaultProp);
    React.useEffect(() => {
      if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
        error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = /* @__PURE__ */ new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
        return void 0;
      }
      if (typeof value === "bigint") {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === "object") {
        const id = seen.get(value);
        if (id !== void 0) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return "__unserializable__";
  }
}

// node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var React2 = __toESM(require_react(), 1);
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React2.useLayoutEffect : noop;

// node_modules/@base-ui/utils/useOnFirstRender.mjs
var React3 = __toESM(require_react(), 1);
function useOnFirstRender(fn) {
  const ref = React3.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}

// node_modules/@base-ui/utils/safeReact.mjs
var React4 = __toESM(require_react(), 1);
var SafeReact = {
  ...React4
};

// node_modules/@base-ui/utils/useRefWithInit.mjs
var React5 = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React5.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@base-ui/utils/useStableCallback.mjs
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// node_modules/@base-ui/utils/useMergedRefs.mjs
function useMergedRefs(a, b, c2, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c2, d)) {
    update(forkRef, [a, b, c2, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c2, d) {
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c2 || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i2 = 0; i2 < refs.length; i2 += 1) {
        const ref = refs[i2];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i2] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i2 = 0; i2 < refs.length; i2 += 1) {
          const ref = refs[i2];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i2];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                void ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// node_modules/@base-ui/utils/useValueAsRef.mjs
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

// node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
var visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};

// node_modules/@base-ui/utils/store/useStore.mjs
var React8 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// node_modules/@base-ui/utils/reactVersion.mjs
var React6 = __toESM(require_react(), 1);
var majorVersion = parseInt(React6.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/@base-ui/utils/fastHooks.mjs
var React7 = __toESM(require_react(), 1);
var hooks = [];
var currentInstance = void 0;
function getInstance() {
  return currentInstance;
}
function register(hook) {
  hooks.push(hook);
}

// node_modules/@base-ui/utils/store/useStore.mjs
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React8.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange2 = false;
        for (let i2 = 0; i2 < instance.syncHooks.length; i2 += 1) {
          const hook = instance.syncHooks[i2];
          const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
          if (!Object.is(hook.value, value)) {
            didChange2 = true;
            hook.value = value;
          }
        }
        if (didChange2) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = (onStoreChange) => {
          const stores = /* @__PURE__ */ new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      (0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
    }
  }
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3)
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index];
    if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.value = selector(store.getSnapshot(), a1, a2, a3);
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/@base-ui/utils/store/Store.mjs
var Store = class {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => {
    return this.state;
  };
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
};

// node_modules/@base-ui/utils/store/ReactStore.mjs
var React9 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/empty.mjs
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/@base-ui/utils/store/ReactStore.mjs
var ReactStore = class extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors3) {
    super(state);
    this.context = context;
    this.selectors = selectors3;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    React9.useDebugValue(key);
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
    }, [store, key, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, void 0);
      };
    }, [store, key, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    const store = this;
    if (true) {
      React9.useDebugValue(statePart, (p3) => Object.keys(p3));
      const keys = React9.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key, index) => key !== nextKeys[index])) {
        console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    React9.useDebugValue(key);
    const store = this;
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(store.state[key], controlled)) {
        store.setState({
          ...store.state,
          [key]: controlled
        });
      }
    }, [store, key, controlled, isControlled]);
    if (true) {
      const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
      if (!cache.has(key)) {
        cache.set(key, isControlled);
      }
      const previouslyControlled = cache.get(key);
      if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
        console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key, a1, a2, a3) {
    React9.useDebugValue(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    React9.useDebugValue(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = React9.useRef(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
};

// node_modules/@base-ui/utils/mergeCleanups.mjs
function mergeCleanups(...cleanups) {
  return () => {
    for (let i2 = 0; i2 < cleanups.length; i2 += 1) {
      const cleanup = cleanups[i2];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/@base-ui/utils/addEventListener.mjs
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// node_modules/@base-ui/utils/useOnMount.mjs
var React10 = __toESM(require_react(), 1);
function useOnMount(fn) {
  React10.useEffect(fn, EMPTY_ARRAY);
}

// node_modules/@base-ui/utils/useAnimationFrame.mjs
var EMPTY = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i2 = 0; i2 < currentCallbacks.length; i2 += 1) {
        currentCallbacks[i2]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/useTimeout.mjs
var EMPTY2 = 0;
var Timeout = class _Timeout {
  static create() {
    return new _Timeout();
  }
  currentId = EMPTY2;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY2;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY2;
  }
  clear = () => {
    if (this.currentId !== EMPTY2) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
};
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/platform/parts.mjs
var parts_exports = {};
__export(parts_exports, {
  engine: () => engine_exports,
  env: () => env_exports,
  os: () => os_exports,
  screenReader: () => screen_reader_exports
});

// node_modules/@base-ui/utils/platform/os.mjs
var os_exports = {};
__export(os_exports, {
  android: () => android,
  apple: () => apple,
  ios: () => ios,
  linux: () => linux,
  mac: () => mac,
  windows: () => windows
});

// node_modules/@base-ui/utils/platform/shared.mjs
function readRawData() {
  if (typeof navigator === "undefined") {
    return {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0
    };
  }
  if (true) {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return {
        userAgent: uaData.brands.map(({
          brand,
          version: version2
        }) => `${brand}/${version2}`).join(" "),
        platform: uaData.platform ?? navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? 0
      };
    }
  }
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
var {
  userAgent,
  platform,
  maxTouchPoints
} = readRawData();
var lowerUserAgent = userAgent.toLowerCase();
var lowerPlatform = platform.toLowerCase();

// node_modules/@base-ui/utils/platform/os.mjs
var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
var ANDROID_STRING = "android";
var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
var mac = !ios && lowerPlatform.startsWith("mac");
var windows = lowerPlatform.startsWith("win");
var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
var apple = mac || ios;

// node_modules/@base-ui/utils/platform/engine.mjs
var engine_exports = {};
__export(engine_exports, {
  blink: () => blink,
  gecko: () => gecko,
  webkit: () => webkit
});
var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
var gecko = !webkit && lowerUserAgent.includes("firefox");
var blink = !webkit && lowerUserAgent.includes("chrom");

// node_modules/@base-ui/utils/platform/screen-reader.mjs
var screen_reader_exports = {};
__export(screen_reader_exports, {
  voiceOver: () => voiceOver
});
var voiceOver = apple;

// node_modules/@base-ui/utils/platform/env.mjs
var env_exports = {};
__export(env_exports, {
  jsdom: () => jsdom
});
var jsdom = /jsdom|happydom/.test(lowerUserAgent);

// node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (parts_exports.os.android && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (parts_exports.env.jsdom) {
    return false;
  }
  return !parts_exports.os.android && event.width === 0 && event.height === 0 || parts_exports.os.android && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";

// node_modules/@base-ui/react/internals/shadowDom.mjs
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isInteractiveElement(element) {
  return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}

// node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  initial: () => initial,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  missing: () => missing,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    ...custom
  };
  return details;
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
var React17 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/utils/FocusGuard.mjs
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var FocusGuard = /* @__PURE__ */ React11.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React11.useState();
  useIsoLayoutEffect(() => {
    if (parts_exports.screenReader.voiceOver && parts_exports.engine.webkit) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (true) FocusGuard.displayName = "FocusGuard";

// node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function isDifferentGridRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(list, index) {
  return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledListIndex(list, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(list, {
  event,
  orientation,
  loopFocus,
  onLoop,
  rtl,
  cols,
  disabledIndices,
  minIndex,
  maxIndex,
  prevIndex,
  stopEvent: stop = false
}) {
  let nextIndex = prevIndex;
  let verticalDirection;
  if (event.key === ARROW_UP) {
    verticalDirection = "up";
  } else if (event.key === ARROW_DOWN) {
    verticalDirection = "down";
  }
  if (verticalDirection) {
    const rows = [];
    const rowIndexMap = [];
    let hasRoleRow = false;
    let visibleItemCount = 0;
    {
      let currentRowEl = null;
      let currentRowIndex = -1;
      list.forEach((el, idx) => {
        if (el == null) {
          return;
        }
        visibleItemCount += 1;
        const rowEl = el.closest('[role="row"]');
        if (rowEl) {
          hasRoleRow = true;
        }
        if (rowEl !== currentRowEl || currentRowIndex === -1) {
          currentRowEl = rowEl;
          currentRowIndex += 1;
          rows[currentRowIndex] = [];
        }
        rows[currentRowIndex].push(idx);
        rowIndexMap[idx] = currentRowIndex;
      });
    }
    let hasDomRows = false;
    let inferredDomCols = 0;
    if (hasRoleRow) {
      for (const row of rows) {
        const rowLength = row.length;
        if (rowLength > inferredDomCols) {
          inferredDomCols = rowLength;
        }
        if (rowLength !== cols) {
          hasDomRows = true;
        }
      }
    }
    const hasVirtualizedGaps = hasDomRows && visibleItemCount < list.length;
    const verticalCols = inferredDomCols || cols;
    const navigateVertically = (direction) => {
      if (!hasDomRows || prevIndex === -1) {
        return void 0;
      }
      const currentRow = rowIndexMap[prevIndex];
      if (currentRow == null) {
        return void 0;
      }
      const colInRow = rows[currentRow].indexOf(prevIndex);
      const step = direction === "up" ? -1 : 1;
      for (let nextRow = currentRow + step, i2 = 0; i2 < rows.length; i2 += 1, nextRow += step) {
        if (nextRow < 0 || nextRow >= rows.length) {
          if (!loopFocus || hasVirtualizedGaps) {
            return void 0;
          }
          nextRow = nextRow < 0 ? rows.length - 1 : 0;
          if (onLoop) {
            const clampedCol = Math.min(colInRow, rows[nextRow].length - 1);
            const targetItemIndex = rows[nextRow][clampedCol] ?? rows[nextRow][0];
            const returnedItemIndex = onLoop(event, prevIndex, targetItemIndex);
            nextRow = rowIndexMap[returnedItemIndex] ?? nextRow;
          }
        }
        const targetRow = rows[nextRow];
        for (let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1) {
          const candidate = targetRow[col];
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    const navigateVerticallyWithInferredRows = (direction) => {
      if (!hasVirtualizedGaps || prevIndex === -1) {
        return void 0;
      }
      const colInRow = prevIndex % verticalCols;
      const rowStep = direction === "up" ? -verticalCols : verticalCols;
      const lastRowStart = maxIndex - maxIndex % verticalCols;
      const rowCount = floor(maxIndex / verticalCols) + 1;
      for (let rowStart = prevIndex - colInRow + rowStep, i2 = 0; i2 < rowCount; i2 += 1, rowStart += rowStep) {
        if (rowStart < 0 || rowStart > maxIndex) {
          if (!loopFocus) {
            return void 0;
          }
          rowStart = rowStart < 0 ? lastRowStart : 0;
        }
        const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
        for (let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1) {
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    if (stop) {
      stopEvent(event);
    }
    const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
    if (verticalCandidate !== void 0) {
      nextIndex = verticalCandidate;
    } else if (prevIndex === -1) {
      nextIndex = verticalDirection === "up" ? maxIndex : minIndex;
    } else {
      nextIndex = findNonDisabledListIndex(list, {
        startingIndex: prevIndex,
        amount: verticalCols,
        decrement: verticalDirection === "up",
        disabledIndices
      });
      if (loopFocus) {
        if (verticalDirection === "up" && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
          const col = prevIndex % verticalCols;
          const maxCol = maxIndex % verticalCols;
          const offset2 = maxIndex - (maxCol - col);
          if (maxCol === col) {
            nextIndex = maxIndex;
          } else {
            nextIndex = maxCol > col ? offset2 : offset2 - verticalCols;
          }
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
        if (verticalDirection === "down" && prevIndex + verticalCols > maxIndex) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex % verticalCols - verticalCols,
            amount: verticalCols,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      }
    }
    if (isIndexOutOfListBounds(list, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfListBounds(list, nextIndex)) {
      if (loopFocus && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function isListIndexDisabled(list, index, disabledIndices) {
  const isExplicitlyDisabled = typeof disabledIndices === "function" ? disabledIndices(index) : disabledIndices?.includes(index) ?? false;
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }
  if (element.matches(":disabled")) {
    return true;
  }
  return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index = list.indexOf(active);
  const nextIndex = index === -1 ? dir === 1 ? 0 : len - 1 : index + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find((node) => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

// node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
  return `data-base-ui-${name}`;
}

// node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    sync = false,
    shouldFocus
  } = options;
  cancelAnimationFrame(rafId);
  function exec() {
    if (shouldFocus && !shouldFocus()) {
      return;
    }
    el?.focus({
      preventScroll
    });
  }
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}

// node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var counters = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap()
};
var markerName = "data-base-ui-inert";
var uncontrolledElementsSets = {
  inert: /* @__PURE__ */ new WeakSet(),
  "aria-hidden": /* @__PURE__ */ new WeakSet()
};
var markerCounterMap = /* @__PURE__ */ new WeakMap();
var lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
  return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x) => x != null);
var buildKeepSet = (targets) => {
  const keep = /* @__PURE__ */ new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
  mark = true
}) {
  let controlAttribute = null;
  if (inert) {
    controlAttribute = "inert";
  } else if (ariaHidden) {
    controlAttribute = "aria-hidden";
  }
  let counterMap = null;
  let uncontrolledElementsSet = null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (controlAttribute) {
    const map = counters[controlAttribute];
    const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
    uncontrolledElementsSet = currentUncontrolledElementsSet;
    counterMap = map;
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach((node) => {
      const attr2 = node.getAttribute(controlAttribute);
      const alreadyHidden = attr2 !== null && attr2 !== "false";
      const counterValue = (map.get(node) || 0) + 1;
      map.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        currentUncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    if (counterMap) {
      hiddenElements.forEach((element) => {
        const currentCounterValue = counterMap.get(element) || 0;
        const counterValue = currentCounterValue - 1;
        counterMap.set(element, counterValue);
        if (!counterValue) {
          if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
            element.removeAttribute(controlAttribute);
          }
          uncontrolledElementsSet?.delete(element);
        }
      });
    }
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      counters.inert = /* @__PURE__ */ new WeakMap();
      counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
      uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
      markerCounterMap = /* @__PURE__ */ new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    inert = false,
    mark = true
  } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
    mark
  });
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
var React15 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/utils/useId.mjs
var React12 = __toESM(require_react(), 1);
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = React12.useState(idOverride);
  const id = idOverride || defaultId;
  React12.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// node_modules/@base-ui/react/internals/useRenderElement.mjs
var React14 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/getReactElementRef.mjs
var React13 = __toESM(require_react(), 1);
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React13.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/@base-ui/utils/mergeObjects.mjs
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}

// node_modules/@base-ui/utils/warn.mjs
var set2;
if (true) {
  set2 = /* @__PURE__ */ new Set();
}
function warn(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set2.has(messageKey)) {
      set2.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@base-ui/react/utils/resolveClassName.mjs
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@base-ui/react/utils/resolveStyle.mjs
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@base-ui/react/merge-props/mergeProps.mjs
var EMPTY_PROPS = {};
function mergeProps(a, b, c2, d, e2) {
  if (!c2 && !d && !e2 && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c2) {
    merged = mergeInto(merged, c2);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e2) {
    merged = mergeInto(merged, e2);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i2 = 1; i2 < props.length; i2 += 1) {
    merged = mergeInto(merged, props[i2]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@base-ui/react/internals/useRenderElement.mjs
var import_react = __toESM(require_react(), 1);
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping4,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping4) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      void useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = React14.Children.toArray(render);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React14.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React14.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React14.createElement(Tag, props);
}

// node_modules/@base-ui/react/internals/constants.mjs
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var DROPDOWN_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "none"
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};

// node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var PortalContext = /* @__PURE__ */ React15.createContext(null);
if (true) PortalContext.displayName = "PortalContext";
var usePortalContext = () => React15.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React15.useState(null);
  const [portalNode, setPortalNode] = React15.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React15.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM.createPortal(portalElement, containerElement) : null;
  return {
    node: portalNode,
    // `id` and `render` props can override or remove the generated ID. Use the exact
    // rendered value so `aria-owns` never points at an ID absent from the DOM.
    nodeId: /* @__PURE__ */ React15.isValidElement(portalElement) ? portalElement.props.id : void 0,
    subtree: portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React15.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    container,
    ...elementProps
  } = componentProps;
  const {
    node: portalNode,
    nodeId: portalNodeId,
    subtree: portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = React15.useRef(null);
  const afterOutsideRef = React15.useRef(null);
  const beforeInsideRef = React15.useRef(null);
  const afterInsideRef = React15.useRef(null);
  const [focusManagerState, setFocusManagerState] = React15.useState(null);
  const focusInsideDisabledRef = React15.useRef(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React15.useEffect(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  useIsoLayoutEffect(() => {
    if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = React15.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(React15.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
        "aria-owns": portalNodeId,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (true) FloatingPortal.displayName = "FloatingPortal";

// node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var React16 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var FloatingNodeContext = /* @__PURE__ */ React16.createContext(null);
if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React16.createContext(null);
if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React16.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React16.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

// node_modules/@base-ui/react/utils/resolveRef.mjs
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return event.pointerType || "keyboard";
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
  if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
    return;
  }
  if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
      floatingFocusElement.setAttribute("data-tabindex", "0");
    }
  } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled: disabled2 = false,
    initialFocus = true,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const openRef = useValueAsRef(open);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = React17.useRef(false);
  const isPointerDownRef = React17.useRef(false);
  const pointerDownOutsideRef = React17.useRef(false);
  const lastFocusedTabbableRef = React17.useRef(null);
  const closeTypeRef = React17.useRef("");
  const lastInteractionTypeRef = React17.useRef("");
  const beforeGuardRef = React17.useRef(null);
  const afterGuardRef = React17.useRef(null);
  const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
  const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
    return container ? tabbable(container) : [];
  });
  const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
  React17.useEffect(() => {
    if (disabled2 || !modal) {
      return void 0;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [disabled2, floatingFocusElement, modal, isUntrappedTypeableCombobox, getTabbableContent]);
  React17.useEffect(() => {
    if (disabled2 || !open) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (target?.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(
      addEventListener(doc, "pointerdown", onPointerDown, true),
      addEventListener(doc, "pointerup", clearPointerDownOutside, true),
      addEventListener(doc, "pointercancel", clearPointerDownOutside, true),
      addEventListener(doc, "keydown", onKeyDown, true),
      // Avoid a stale `true` leaking into the next open (e.g. keep-mounted popups)
      // if the popup dismissed between pointerdown and pointerup.
      clearPointerDownOutside
    );
  }, [disabled2, floating, domReference, floatingFocusElement, open, portalContext, pointerDownTimeout, getResolvedInsideElements]);
  React17.useEffect(() => {
    if (disabled2 || !closeOnFocusOut) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      if (modal && relatedTarget == null && target != null && contains(floating, target)) {
        addPreviouslyFocusedElement(target);
      }
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement);
        }
        if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return void 0;
    }
    return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
  }, [disabled2, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  React17.useEffect(() => {
    if (disabled2 || !floating || !open) {
      return void 0;
    }
    const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
    const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = ancestors.find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x) => x != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter((x) => x != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open, disabled2, domReference, floating, modal, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!open || disabled2 || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    closeTypeRef.current = "";
    lastInteractionTypeRef.current = "";
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
      if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
      void enqueueFocus(elToFocus, {
        preventScroll: elToFocus === floatingFocusElement,
        shouldFocus() {
          if (!openRef.current) {
            return false;
          }
          if (hadFocusInside) {
            return true;
          }
          const currentActiveElement = activeElement(doc);
          const focusMovedInside = currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement);
          return !focusMovedInside;
        }
      });
    });
  }, [disabled2, open, floatingFocusElement, getTabbableContent, initialFocusRef, openInteractionTypeRef, openRef]);
  useIsoLayoutEffect(() => {
    if (disabled2 || !floatingFocusElement) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    const elementFocusedBeforeOpen = activeElement(doc);
    const preferPreviousFocus = openInteractionTypeRef.current == null;
    addPreviouslyFocusedElement(elementFocusedBeforeOpen);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === reason_parts_exports.triggerHover && details.nativeEvent.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== reason_parts_exports.outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement).createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement(closeType) {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeType) : returnFocusValueOrFn;
      if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      const referenceReturnElement = domReference?.isConnected ? domReference : null;
      const previousReturnElement = elementFocusedBeforeOpen?.isConnected && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
      let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
      if (!defaultReturnElement) {
        defaultReturnElement = getPreviouslyFocusedElement() || null;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        return defaultReturnElement;
      }
      return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
      const returnFocusValueOrFn = returnFocusRef.current;
      const closeType = closeTypeRef.current;
      const returnElement = getReturnElement(closeType);
      queueMicrotask(() => {
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
        if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          const focusOptions = {
            preventScroll: true
          };
          if (closeType === "keyboard") {
            focusOptions.focusVisible = true;
          }
          tabbableReturnElement.focus(focusOptions);
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled2, floating, floatingFocusElement, returnFocusRef, openInteractionTypeRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!parts_exports.engine.webkit || open || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);
  useIsoLayoutEffect(() => {
    if (disabled2 || !portalContext) {
      return void 0;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled2, portalContext, modal, open, store, closeOnFocusOut, domReference]);
  useIsoLayoutEffect(() => {
    if (disabled2 || !floatingFocusElement) {
      return void 0;
    }
    handleTabIndex(floatingFocusElement);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled2, floatingFocusElement]);
  const shouldRenderGuards = !disabled2 && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(React17.Fragment, {
    children: [shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FocusGuard, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: (event) => {
        if (modal) {
          const els = getTabbableContent();
          void enqueueFocus(els[els.length - 1]);
        } else if (portalContext?.portalNode) {
          preventReturnFocusRef.current = false;
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
          } else {
            resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FocusGuard, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: (event) => {
        if (modal) {
          void enqueueFocus(getTabbableContent()[0]);
        } else if (portalContext?.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          } else {
            resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
          }
        }
      }
    })]
  });
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
var React18 = __toESM(require_react(), 1);
function useClick(context, props = {}) {
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = reason_parts_exports.triggerPress
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const dataRef = store.context.dataRef;
  const pointerTypeRef = React18.useRef(void 0);
  const frame = useAnimationFrame();
  const touchOpenTimeout = useTimeout();
  const reference = React18.useMemo(() => {
    function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
      const details = createChangeEventDetails(reason, nativeEvent, target);
      if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    }
    function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
      if (open && hasClickedOnInactiveTrigger) {
        return true;
      }
      if (!open) {
        return true;
      }
      if (!toggle) {
        return true;
      }
      if (openEvent && stickIfOpen) {
        return !isClickLikeOpenEvent(openEvent.type);
      }
      return false;
    }
    return {
      onPointerDown(event) {
        pointerTypeRef.current = isMouseLikePointerType(event.pointerType, true) && isVirtualPointerEvent(event.nativeEvent) ? "virtual" : event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        const nativeEvent = event.nativeEvent;
        const open = store.select("open");
        if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) {
          return;
        }
        const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
        const target = getTarget(nativeEvent);
        if (isTypeableElement(target)) {
          setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
          return;
        }
        const eventCurrentTarget = event.currentTarget;
        frame.request(() => {
          setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
        });
      },
      onClick(event) {
        if (eventOption === "mousedown-only") {
          return;
        }
        const pointerType = pointerTypeRef.current;
        if (eventOption === "mousedown" && pointerType) {
          pointerTypeRef.current = void 0;
          return;
        }
        if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
          return;
        }
        const open = store.select("open");
        const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup");
        setOpenWithTouchDelay(nextOpen, event.nativeEvent, event.currentTarget, pointerType);
      },
      onKeyDown() {
        pointerTypeRef.current = void 0;
      }
    };
  }, [dataRef, eventOption, ignoreMouse, reason, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay]);
  return React18.useMemo(() => enabled ? {
    reference
  } : EMPTY_OBJECT, [enabled, reference]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
var React19 = __toESM(require_react(), 1);
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
  };
}
function useDismiss(context, props = {}) {
  const {
    enabled = true,
    escapeKey: escapeKey2 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    bubbles,
    externalTree
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const {
    dataRef
  } = store.context;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
  const outsidePress2 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress2 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const pressStartedInsideRef = React19.useRef(false);
  const pressStartPreventedRef = React19.useRef(false);
  const suppressNextOutsideClickRef = React19.useRef(false);
  const isComposingRef = React19.useRef(false);
  const currentPointerTypeRef = React19.useRef("");
  const touchStateRef = React19.useRef(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const hasBlockingChild = useStableCallback((bubbleKey) => {
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    return children.some((child) => child.context?.open && !child.context.dataRef.current[bubbleKey]);
  });
  const isEventWithinOwnElements = useStableCallback((event) => {
    return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
  });
  const closeOnReferencePress = useStableCallback((event) => {
    if (!referencePress()) {
      return;
    }
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
  });
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open || !enabled || !escapeKey2 || event.key !== "Escape") {
      return;
    }
    if (isComposingRef.current) {
      return;
    }
    if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) {
      return;
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    const eventDetails = createChangeEventDetails(reason_parts_exports.escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!eventDetails.isCanceled) {
      event.preventDefault();
    }
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  React19.useEffect(() => {
    if (!open || !enabled) {
      return clearInsideReactTree;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const compositionTimeout = new Timeout();
    const preventedPressSuppressionTimeout = new Timeout();
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      compositionTimeout.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        parts_exports.engine.webkit ? 5 : 0,
        () => {
          isComposingRef.current = false;
        }
      );
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
      return isEventWithinOwnElements(event) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        if (event.type !== "click" && !isEventWithinOwnElements(event)) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
        }
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every((marker) => !contains(targetRootAncestor, marker))) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY2 = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY2 && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL = style.direction === "rtl";
        const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = false;
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      if (hasBlockingChild("__outsidePressBubbles")) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1e3, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe2 = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe2();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const doc = ownerDocument(floatingElement);
    const unsubscribe = mergeCleanups(escapeKey2 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
    return () => {
      unsubscribe();
      compositionTimeout.clear();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
      clearInsideReactTree();
    };
  }, [dataRef, floatingElement, escapeKey2, outsidePressEnabled, outsidePress2, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, hasBlockingChild, isEventWithinOwnElements, tree, store, cancelDismissOnEndTimeout]);
  const reference = React19.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onPointerDown: closeOnReferencePress,
    onClick: closeOnReferencePress
  }), [closeOnEscapeKeyDown, closeOnReferencePress]);
  const floating = React19.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return React19.useMemo(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
var React23 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var React22 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors = {
  open: (state) => state.open,
  transitionStatus: (state) => state.transitionStatus,
  domReferenceElement: (state) => state.domReferenceElement,
  referenceElement: (state) => state.positionReference ?? state.referenceElement,
  floatingElement: (state) => state.floatingElement,
  floatingId: (state) => state.floatingId
};
var FloatingRootStore = class extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors);
    this.syncOnly = syncOnly;
  }
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (newOpen, event) => {
    if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    event != null && isClickLikeEvent(event)) {
      this.context.dataRef.current.openEvent = newOpen ? event : void 0;
    }
  };
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger
    };
    this.context.events.emit("openchange", details);
  };
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
};

// node_modules/@base-ui/react/internals/useTransitionStatus.mjs
var React20 = __toESM(require_react(), 1);
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = React20.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React20.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
var React21 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
var ReactDOM2 = __toESM(require_react_dom(), 1);
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM2.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = "data-starting-style";
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open);
  React21.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [FOCUSABLE_ATTRIBUTE]: ""
};

// node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
var devElementIdsByMap;
function getDevElementIds(map) {
  devElementIdsByMap ??= /* @__PURE__ */ new WeakMap();
  let elementIds = devElementIdsByMap.get(map);
  if (!elementIds) {
    elementIds = /* @__PURE__ */ new WeakMap();
    devElementIdsByMap.set(map, elementIds);
  }
  return elementIds;
}
var PopupTriggerMap = class {
  constructor() {
    this.idMap = /* @__PURE__ */ new Map();
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    if (true) {
      const elementIds = getDevElementIds(this);
      const existingId = elementIds.get(element);
      if (existingId !== void 0 && existingId !== id) {
        throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
      }
      const previousElement = this.idMap.get(id);
      if (previousElement !== void 0 && previousElement !== element) {
        elementIds.delete(previousElement);
      }
      elementIds.set(element, id);
    }
    this.idMap.set(id, element);
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    if (true) {
      const element = this.idMap.get(id);
      if (element !== void 0) {
        devElementIdsByMap?.get(this)?.delete(element);
      }
    }
    this.idMap.delete(id);
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    for (const registered of this.idMap.values()) {
      if (registered === element) {
        return true;
      }
    }
    return false;
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.idMap.values()) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.idMap.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
};

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
  }
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
function useBaseUIFloating(options) {
  return useFloatingWithStore(options, options.rootContext);
}
function useFloatingWithStore(options, store) {
  const {
    nodeId,
    externalTree
  } = options;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = React23.useState(null);
  const [localDomReference, setLocalDomReference] = React23.useState(void 0);
  const [localFloatingElement, setLocalFloatingElement] = React23.useState(void 0);
  const domReferenceRef = React23.useRef(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = React23.useMemo(() => ({
    reference: referenceElement,
    floating: floatingElement,
    domReference: domReferenceElement
  }), [referenceElement, floatingElement, domReferenceElement]);
  const position = useFloating({
    ...options,
    elements: {
      ...storeElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
  const syncedFloatingElement = localFloatingElement === void 0 ? store.state.floatingElement : localFloatingElement;
  store.useSyncedValue("referenceElement", localDomReference ?? null);
  store.useSyncedValue("domReferenceElement", localDomReference === void 0 ? domReferenceElement : localDomReferenceElement);
  store.useSyncedValue("floatingElement", syncedFloatingElement);
  const setPositionReference = React23.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React23.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = React23.useCallback((node) => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = React23.useMemo(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = React23.useMemo(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = React23.useMemo(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open, floatingId]);
  useIsoLayoutEffect(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  useIsoLayoutEffect(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n2) => n2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React23.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
var React24 = __toESM(require_react(), 1);
var ESCAPE = "Escape";
function isStationaryWebKitPointer(event) {
  return parts_exports.engine.webkit && event.movementX === 0 && event.movementY === 0;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  if (orientation === "both" || orientation === "horizontal" && grid) {
    return key === ESCAPE;
  }
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
  const {
    listRef,
    activeIndex,
    onNavigate: onNavigateProp = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loopFocus = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    parentOrientation,
    id,
    resetOnPointerLeave = true,
    externalTree,
    grid: navigateGrid
  } = props;
  const isGrid = navigateGrid != null;
  if (true) {
    if (allowEscape) {
      if (!loopFocus) {
        console.warn("`useListNavigation` looping must be enabled to allow escaping.");
      }
      if (!virtual) {
        console.warn("`useListNavigation` must be virtual to allow escaping.");
      }
    }
    if (orientation === "vertical" && isGrid) {
      console.warn("In grid list navigation mode, the `orientation` should", 'be either "horizontal" or "both".');
    }
  }
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const floatingFocusElement = getFloatingFocusElement(floatingElement);
  const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
  const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree(externalTree);
  const focusItemOnOpenRef = React24.useRef(focusItemOnOpen);
  const indexRef = React24.useRef(selectedIndex ?? -1);
  const keyRef = React24.useRef(null);
  const isPointerModalityRef = React24.useRef(true);
  const onNavigate = useStableCallback((event) => {
    onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
  });
  const previousMountedRef = React24.useRef(!!floatingElement);
  const previousOpenRef = React24.useRef(open);
  const forceSyncFocusRef = React24.useRef(false);
  const forceScrollIntoViewRef = React24.useRef(false);
  const cancelQueuedFocusRef = React24.useRef(null);
  const disabledIndicesRef = useValueAsRef(disabledIndices);
  const latestOpenRef = useValueAsRef(open);
  const selectedIndexRef = useValueAsRef(selectedIndex);
  const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
  const focusFrame = useAnimationFrame();
  const waitForListPopulatedFrame = useAnimationFrame();
  const focusItem = useStableCallback(() => {
    function runFocus(item2) {
      if (virtual) {
        tree?.events.emit("virtualfocus", item2);
      } else {
        cancelQueuedFocusRef.current = enqueueFocus(item2, {
          sync: forceSyncFocusRef.current,
          preventScroll: true
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    const forceScrollIntoView = forceScrollIntoViewRef.current;
    if (initialItem) {
      runFocus(initialItem);
    }
    const scheduler2 = forceSyncFocusRef.current ? (callback) => callback() : (callback) => focusFrame.request(callback);
    scheduler2(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) {
        return;
      }
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const shouldScrollIntoView = (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        item && (forceScrollIntoView || !isPointerModalityRef.current)
      );
      if (shouldScrollIntoView) {
        waitedItem.scrollIntoView?.({
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  });
  useIsoLayoutEffect(() => {
    dataRef.current.orientation = orientation;
  }, [dataRef, orientation]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (open && floatingElement) {
      indexRef.current = selectedIndex ?? -1;
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate();
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      onNavigate();
    }
  }, [enabled, open, floatingElement, selectedIndex, onNavigate]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (!open) {
      forceSyncFocusRef.current = false;
      return;
    }
    if (!floatingElement) {
      return;
    }
    if (activeIndex == null) {
      forceSyncFocusRef.current = false;
      if (selectedIndexRef.current != null) {
        return;
      }
      if (previousMountedRef.current) {
        indexRef.current = -1;
        focusItem();
      }
      if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = () => {
          if (listRef.current[0] == null) {
            if (runs < 2) {
              const scheduler2 = runs ? (callback) => waitForListPopulatedFrame.request(callback) : queueMicrotask;
              scheduler2(waitForListPopulated);
            }
            runs += 1;
          } else {
            indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
            keyRef.current = null;
            onNavigate();
          }
        };
        waitForListPopulated();
      }
    } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
      focusItem();
      forceScrollIntoViewRef.current = false;
    }
  }, [enabled, open, floatingElement, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, waitForListPopulatedFrame]);
  useIsoLayoutEffect(() => {
    if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = nodes.find((node) => node.id === parentId)?.context?.elements.floating;
    const activeEl = activeElement(ownerDocument(domReferenceElement ?? parent ?? null));
    const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
  useIsoLayoutEffect(() => {
    previousOpenRef.current = open;
    previousMountedRef.current = !!floatingElement;
  });
  useIsoLayoutEffect(() => {
    if (!open) {
      keyRef.current = null;
      focusItemOnOpenRef.current = focusItemOnOpen;
    }
  }, [open, focusItemOnOpen]);
  const hasActiveIndex = activeIndex != null;
  const syncCurrentTarget = useStableCallback((event) => {
    if (!latestOpenRef.current) {
      return;
    }
    const index = listRef.current.indexOf(event.currentTarget);
    if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
      indexRef.current = index;
      onNavigate(event);
    }
  });
  const getParentOrientation = useStableCallback(() => {
    return parentOrientation ?? tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.dataRef?.current.orientation;
  });
  const getMinEnabledIndex = useStableCallback(() => {
    return getMinListIndex(listRef, disabledIndicesRef.current);
  });
  const commonOnKeyDown = useStableCallback((event) => {
    isPointerModalityRef.current = false;
    forceSyncFocusRef.current = true;
    if (event.which === 229) {
      return;
    }
    if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
      if (!isMainOrientationKey(event.key, getParentOrientation())) {
        stopEvent(event);
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
      if (isHTMLElement(domReferenceElement)) {
        if (virtual) {
          tree?.events.emit("virtualfocus", domReferenceElement);
        } else {
          domReferenceElement.focus();
        }
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinListIndex(listRef, disabledIndices);
    const maxIndex = getMaxListIndex(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(event);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(event);
      }
    }
    if (navigateGrid != null) {
      const index = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
      if (index != null) {
        indexRef.current = index;
        onNavigate(event);
      }
      if (orientation === "both") {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      stopEvent(event);
      if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(event);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loopFocus) {
          if (currentIndex >= maxIndex) {
            if (allowEscape && currentIndex !== listRef.current.length) {
              indexRef.current = -1;
            } else {
              forceSyncFocusRef.current = false;
              indexRef.current = minIndex;
            }
          } else {
            indexRef.current = findNonDisabledListIndex(listRef.current, {
              startingIndex: currentIndex,
              disabledIndices
            });
          }
        } else {
          indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef.current, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else if (loopFocus) {
        if (currentIndex <= minIndex) {
          if (allowEscape && currentIndex !== -1) {
            indexRef.current = listRef.current.length;
          } else {
            forceSyncFocusRef.current = false;
            indexRef.current = maxIndex;
          }
        } else {
          indexRef.current = findNonDisabledListIndex(listRef.current, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        }
      } else {
        indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef.current, {
          startingIndex: currentIndex,
          decrement: true,
          disabledIndices
        }));
      }
      if (isIndexOutOfListBounds(listRef.current, indexRef.current)) {
        indexRef.current = -1;
      }
      onNavigate(event);
    }
  });
  const item = React24.useMemo(() => {
    const itemProps = {
      onFocus(event) {
        forceSyncFocusRef.current = true;
        syncCurrentTarget(event);
      },
      onClick: ({
        currentTarget
      }) => currentTarget.focus({
        preventScroll: true
      }),
      // Safari
      onMouseMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        forceSyncFocusRef.current = true;
        forceScrollIntoViewRef.current = false;
        if (focusItemOnHover) {
          syncCurrentTarget(event);
        }
      },
      onPointerLeave(event) {
        if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === "touch") {
          return;
        }
        forceSyncFocusRef.current = true;
        const relatedTarget = event.relatedTarget;
        if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
          return;
        }
        if (!resetOnPointerLeaveRef.current) {
          return;
        }
        cancelQueuedFocusRef.current?.();
        cancelQueuedFocusRef.current = null;
        indexRef.current = -1;
        onNavigate(event);
        if (!virtual) {
          const floatingFocusEl = floatingFocusElementRef.current;
          const activeEl = activeElement(ownerDocument(floatingFocusEl));
          if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
            floatingFocusEl.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return itemProps;
  }, [syncCurrentTarget, latestOpenRef, floatingFocusElementRef, focusItemOnHover, listRef, onNavigate, resetOnPointerLeaveRef, virtual]);
  const ariaActiveDescendantProp = React24.useMemo(() => {
    return virtual && open && hasActiveIndex && {
      "aria-activedescendant": `${id}-${activeIndex}`
    };
  }, [virtual, open, hasActiveIndex, id, activeIndex]);
  const floating = React24.useMemo(() => {
    return {
      "aria-orientation": orientation === "both" ? void 0 : orientation,
      ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
      onKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey && open && !virtual) {
          const target = getTarget(event.nativeEvent);
          if (target && !contains(floatingFocusElementRef.current, target)) {
            return;
          }
          stopEvent(event);
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
          if (isHTMLElement(domReferenceElement)) {
            domReferenceElement.focus();
          }
          return;
        }
        commonOnKeyDown(event);
      },
      onPointerMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, floatingFocusElementRef, orientation, typeableComboboxReference, store, open, virtual, domReferenceElement]);
  const trigger = React24.useMemo(() => {
    function openOnNavigationKeyDown(event) {
      store.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent, event.currentTarget));
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = !virtual;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      onKeyDown(event) {
        const currentOpen = store.select("open");
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith("Arrow");
        const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
        if (virtual && currentOpen) {
          return commonOnKeyDown(event);
        }
        if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
          return void 0;
        }
        if (isNavigationKey) {
          const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
          keyRef.current = nested && isParentMainKey ? null : event.key;
        }
        if (nested) {
          if (isParentCrossOpenKey) {
            stopEvent(event);
            if (currentOpen) {
              indexRef.current = getMinEnabledIndex();
              onNavigate(event);
            } else {
              openOnNavigationKeyDown(event);
            }
          }
          return void 0;
        }
        if (isMainKey) {
          if (selectedIndexRef.current != null) {
            indexRef.current = selectedIndexRef.current;
          }
          stopEvent(event);
          if (!currentOpen && openOnArrowKeyDown) {
            openOnNavigationKeyDown(event);
          } else {
            commonOnKeyDown(event);
          }
          if (currentOpen) {
            onNavigate(event);
          }
        }
        return void 0;
      },
      onFocus(event) {
        if (store.select("open") && !virtual) {
          indexRef.current = -1;
          onNavigate(event);
        }
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [commonOnKeyDown, focusItemOnOpen, getMinEnabledIndex, nested, onNavigate, store, openOnArrowKeyDown, orientation, getParentOrientation, rtl, selectedIndexRef, virtual]);
  const reference = React24.useMemo(() => {
    return {
      ...ariaActiveDescendantProp,
      ...trigger
    };
  }, [ariaActiveDescendantProp, trigger]);
  return React24.useMemo(() => enabled ? {
    reference,
    floating,
    item,
    trigger
  } : {}, [enabled, reference, floating, trigger, item]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
var React25 = __toESM(require_react(), 1);
function useTypeahead(context, props) {
  const {
    listRef,
    elementsRef,
    activeIndex,
    onMatch: onMatchProp,
    disabledIndices,
    onTyping,
    enabled = true,
    resetMs = 750,
    selectedIndex = null
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const timeout = useTimeout();
  const stringRef = React25.useRef("");
  const prevIndexRef = React25.useRef(selectedIndex ?? activeIndex ?? -1);
  const matchIndexRef = React25.useRef(null);
  const onKeyDown = useStableCallback((event) => {
    function getElement(index2) {
      return elementsRef?.current[index2];
    }
    function isItemAvailable(index2) {
      const element = getElement(index2);
      if (element && !isElementVisible(element) || element?.matches(":disabled")) {
        return false;
      }
      return disabledIndices == null || !isListIndexDisabled(EMPTY_ARRAY, index2, disabledIndices);
    }
    function getMatchingIndex(list, string, startIndex2 = 0) {
      if (list.length === 0) {
        return -1;
      }
      const normalizedStartIndex = (startIndex2 % list.length + list.length) % list.length;
      const lowerString = string.toLowerCase();
      for (let offset2 = 0; offset2 < list.length; offset2 += 1) {
        const index2 = (normalizedStartIndex + offset2) % list.length;
        const text = list[index2];
        if (!text?.toLowerCase().startsWith(lowerString) || !isItemAvailable(index2)) {
          continue;
        }
        return index2;
      }
      return -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && event.key === " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
      if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== " ") {
        onTyping?.(false);
      }
    }
    if (listContent == null || // Character key.
    event.key.length !== 1 || // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open && event.key !== " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    const isNewSession = stringRef.current === "";
    if (isNewSession) {
      prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
    }
    const allowRapidSuccessionOfFirstLetter = listContent.every((text, index2) => text && isItemAvailable(index2) ? text[0]?.toLowerCase() !== text[1]?.toLowerCase() : true);
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    timeout.start(resetMs, () => {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
      onTyping?.(false);
    });
    const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
    const startIndex = (prevIndex ?? 0) + 1;
    const index = getMatchingIndex(listContent, stringRef.current, startIndex);
    if (index !== -1) {
      onMatchProp?.(index);
      matchIndexRef.current = index;
    } else if (event.key !== " ") {
      stringRef.current = "";
      onTyping?.(false);
    }
  });
  const onBlur = useStableCallback((event) => {
    const next = event.relatedTarget;
    const currentDomReferenceElement = store.select("domReferenceElement");
    const currentFloatingElement = store.select("floatingElement");
    const withinComposite = contains(currentDomReferenceElement, next) || contains(currentFloatingElement, next);
    if (withinComposite) {
      return;
    }
    timeout.clear();
    stringRef.current = "";
    prevIndexRef.current = matchIndexRef.current;
    onTyping?.(false);
  });
  useIsoLayoutEffect(() => {
    if (!open && selectedIndex !== null) {
      return;
    }
    timeout.clear();
    matchIndexRef.current = null;
    if (stringRef.current !== "") {
      stringRef.current = "";
    }
  }, [open, selectedIndex, timeout]);
  const sharedProps = React25.useMemo(() => ({
    onKeyDown,
    onBlur
  }), [onKeyDown, onBlur]);
  return React25.useMemo(() => enabled ? {
    reference: sharedProps,
    floating: sharedProps
  } : {}, [enabled, sharedProps]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/gridNavigation.mjs
function gridNavigation(event, prevIndex, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex, cols = 2) {
  const nextIndex = getGridNavigatedIndex(listRef.current, {
    event,
    orientation,
    loopFocus,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    // An out-of-range previous index falls back to the first enabled item.
    prevIndex: prevIndex > maxIndex ? minIndex : prevIndex,
    stopEvent: true
  });
  return isIndexOutOfListBounds(listRef.current, nextIndex) ? void 0 : nextIndex;
}

// node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var React26 = __toESM(require_react(), 1);
var ComboboxRootContext = /* @__PURE__ */ React26.createContext(void 0);
if (true) ComboboxRootContext.displayName = "ComboboxRootContext";
var ComboboxFloatingContext = /* @__PURE__ */ React26.createContext(void 0);
if (true) ComboboxFloatingContext.displayName = "ComboboxFloatingContext";
var ComboboxDerivedItemsContext = /* @__PURE__ */ React26.createContext(void 0);
if (true) ComboboxDerivedItemsContext.displayName = "ComboboxDerivedItemsContext";
var ComboboxHasItemsContext = /* @__PURE__ */ React26.createContext(false);
if (true) ComboboxHasItemsContext.displayName = "ComboboxHasItemsContext";
var ComboboxInputValueContext = /* @__PURE__ */ React26.createContext("");
if (true) ComboboxInputValueContext.displayName = "ComboboxInputValueContext";
function useComboboxRootContext() {
  const context = React26.useContext(ComboboxRootContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxRootContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(22));
  }
  return context;
}
function useComboboxFloatingContext() {
  const context = React26.useContext(ComboboxFloatingContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxFloatingContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(23));
  }
  return context;
}
function useComboboxDerivedItemsContext() {
  const context = React26.useContext(ComboboxDerivedItemsContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxItemsContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(24));
  }
  return context;
}
function useComboboxInputValueContext() {
  return React26.useContext(ComboboxInputValueContext);
}
function useComboboxHasItemsContext() {
  return React26.useContext(ComboboxHasItemsContext);
}

// node_modules/@base-ui/react/internals/itemEquality.mjs
var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
  if (itemValue == null || selectedValue == null) {
    return Object.is(itemValue, selectedValue);
  }
  return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
  if (!selectedValues || selectedValues.length === 0) {
    return false;
  }
  return selectedValues.some((selectedValue) => {
    if (selectedValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findItemIndex(itemValues, selectedValue, comparer) {
  if (!itemValues || itemValues.length === 0) {
    return -1;
  }
  return itemValues.findIndex((itemValue) => {
    if (itemValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
  const lastValue = multiple && Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
  const index = findItemIndex(itemValues, lastValue, comparer);
  return index === -1 ? null : index;
}
function removeItem(selectedValues, itemValue, comparer) {
  return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}

// node_modules/@base-ui/react/internals/resolveValueLabel.mjs
var React27 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

// node_modules/@base-ui/react/internals/resolveValueLabel.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function isGroupedItems(items) {
  return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
}
function hasNullItemLabel(items) {
  if (!Array.isArray(items)) {
    return items != null && "null" in items;
  }
  const arrayItems = items;
  if (isGroupedItems(arrayItems)) {
    for (const group of arrayItems) {
      for (const item of group.items) {
        if (item && item.value == null && item.label != null) {
          return true;
        }
      }
    }
    return false;
  }
  for (const item of arrayItems) {
    if (item && item.value == null && item.label != null) {
      return true;
    }
  }
  return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
  if (itemToStringLabel && item != null) {
    return itemToStringLabel(item) ?? "";
  }
  if (item && typeof item === "object") {
    if ("label" in item && item.label != null) {
      return String(item.label);
    }
    if ("value" in item) {
      return String(item.value);
    }
  }
  return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
  if (itemToStringValue && item != null) {
    return itemToStringValue(item) ?? "";
  }
  if (item && typeof item === "object" && "value" in item && "label" in item) {
    return serializeValue(item.value);
  }
  return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
  function fallback() {
    return stringifyAsLabel(value, itemToStringLabel);
  }
  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value);
  }
  if (value && typeof value === "object" && "label" in value && value.label != null) {
    return value.label;
  }
  if (items && !Array.isArray(items)) {
    return items[value] ?? fallback();
  }
  if (Array.isArray(items)) {
    const arrayItems = items;
    const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group) => group.items) : arrayItems;
    if (value == null || typeof value !== "object") {
      const match = flatItems.find((item) => item.value === value);
      if (match && match.label != null) {
        return match.label;
      }
      return fallback();
    }
    if ("value" in value) {
      const match = flatItems.find((item) => item && item.value === value.value);
      if (match && match.label != null) {
        return match.label;
      }
    }
  }
  return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
  return values.reduce((acc, value, index) => {
    if (index > 0) {
      acc.push(", ");
    }
    acc.push(/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(React27.Fragment, {
      children: resolveSelectedLabel(value, items, itemToStringLabel)
    }, index));
    return acc;
  }, []);
}

// node_modules/@base-ui/react/combobox/store.mjs
var selectors2 = {
  id: (state) => state.id,
  labelId: (state) => state.labelId,
  items: (state) => state.items,
  selectedValue: (state) => state.selectedValue,
  hasSelectionChips: (state) => {
    const selectedValue = state.selectedValue;
    return Array.isArray(selectedValue) && selectedValue.length > 0;
  },
  hasSelectedValue: (state) => {
    const {
      selectedValue,
      selectionMode
    } = state;
    if (selectedValue == null) {
      return false;
    }
    if (selectionMode === "multiple" && Array.isArray(selectedValue)) {
      return selectedValue.length > 0;
    }
    return true;
  },
  hasNullItemLabel: (state, enabled) => {
    return enabled ? hasNullItemLabel(state.items) : false;
  },
  open: (state) => state.open,
  mounted: (state) => state.mounted,
  forceMounted: (state) => state.forceMounted,
  inline: (state) => state.inline,
  activeIndex: (state) => state.activeIndex,
  selectedIndex: (state) => state.selectedIndex,
  isActive: (state, index) => state.activeIndex === index,
  isSelected: (state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const selectedValue = state.selectedValue;
    if (Array.isArray(selectedValue)) {
      return selectedValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  },
  transitionStatus: (state) => state.transitionStatus,
  popupProps: (state) => state.popupProps,
  listProps: (state) => state.listProps,
  inputProps: (state) => state.inputProps,
  triggerProps: (state) => state.triggerProps,
  itemProps: (state) => state.itemProps,
  positionerElement: (state) => state.positionerElement,
  listElement: (state) => state.listElement,
  popupId: (state) => state.popupId,
  triggerElement: (state) => state.triggerElement,
  inputElement: (state) => state.inputElement,
  inputGroupElement: (state) => state.inputGroupElement,
  popupSide: (state) => state.popupSide,
  openMethod: (state) => state.openMethod,
  inputInsidePopup: (state) => state.inputInsidePopup,
  inputOwnsFormValue: (state) => state.inputOwnsFormValue,
  selectionMode: (state) => state.selectionMode,
  name: (state) => state.name,
  form: (state) => state.form,
  disabled: (state) => state.disabled,
  readOnly: (state) => state.readOnly,
  required: (state) => state.required,
  grid: (state) => state.grid,
  virtualized: (state) => state.virtualized,
  itemToStringLabel: (state) => state.itemToStringLabel,
  isItemEqualToValue: (state) => state.isItemEqualToValue,
  modal: (state) => state.modal,
  autoHighlight: (state) => state.autoHighlight
};

// node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var React28 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: false,
  dirty: false,
  filled: false,
  focused: false
};
var DEFAULT_FIELD_ROOT_STATE = {
  disabled: false,
  ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
var fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        "data-valid": ""
      };
    }
    return {
      "data-invalid": ""
    };
  }
};

// node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var DEFAULT_FIELD_ROOT_CONTEXT = {
  invalid: void 0,
  name: void 0,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: NOOP,
  disabled: void 0,
  setTouched: NOOP,
  setDirty: NOOP,
  setFilled: NOOP,
  setFocused: NOOP,
  validationMode: "onSubmit",
  shouldValidateOnChange: () => false,
  state: DEFAULT_FIELD_ROOT_STATE,
  registerFieldControl: NOOP,
  validation: {
    getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null
    },
    registeredInputs: /* @__PURE__ */ new Map(),
    registerInput: NOOP,
    getInputControl: () => null,
    commit: async () => {
    },
    change: NOOP
  }
};
var FieldRootContext = /* @__PURE__ */ React28.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
if (true) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
  const context = React28.useContext(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(true ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : formatErrorMessage_default(28));
  }
  return context;
}

// node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
  const {
    registerFieldControl
  } = useFieldRootContext();
  const sourceRef = useRefWithInit(() => Symbol());
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    if (!enabled) {
      registerFieldControl(source, void 0);
      return;
    }
    const registration = {
      controlRef,
      getValue: getFormValueOverride,
      id,
      name,
      value
    };
    registerFieldControl(source, registration);
  }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, sourceRef, value]);
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    return () => {
      registerFieldControl(source, void 0);
    };
  }, [registerFieldControl, sourceRef]);
}

// node_modules/@base-ui/react/internals/form-context/FormContext.mjs
var React29 = __toESM(require_react(), 1);
var FormContext = /* @__PURE__ */ React29.createContext({
  elementRef: {
    current: null
  },
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: false
  }
});
if (true) FormContext.displayName = "FormContext";
function useFormContext() {
  return React29.useContext(FormContext);
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
var React31 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/useBaseUiId.mjs
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
var React30 = __toESM(require_react(), 1);
var LabelableContext = /* @__PURE__ */ React30.createContext({
  controlId: void 0,
  registerControlId: NOOP,
  labelId: void 0,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps
});
if (true) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
  return React30.useContext(LabelableContext);
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    registerControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId(id);
  const controlIdForEffect = implicit ? controlId : void 0;
  const controlSourceRef = useRefWithInit(() => Symbol());
  const hasRegisteredRef = React31.useRef(false);
  const hadExplicitIdRef = React31.useRef(id != null);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, void 0);
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    let nextId;
    if (implicit) {
      const elem = controlRef?.current;
      if (isElement(elem) && elem.closest("label") != null) {
        nextId = id ?? null;
      } else {
        nextId = controlIdForEffect ?? defaultId;
      }
    } else if (id != null) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      unregisterControlId();
      return void 0;
    }
    if (nextId === void 0) {
      unregisterControlId();
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return void 0;
  }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
  React31.useEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return controlId ?? defaultId;
}

// node_modules/@base-ui/react/combobox/root/utils/index.mjs
function getComboboxPopupId(rootId) {
  return rootId == null ? void 0 : `${rootId}-popup`;
}
function createCollatorItemFilter(collatorFilter, itemToStringLabel) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    return collatorFilter.contains(item, query, itemToStringLabel);
  };
}
function createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    if (!query) {
      return true;
    }
    const selectedString = selectedValue != null ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
    if (selectedString && collatorFilter.contains(selectedString, query) && selectedString.length === query.length) {
      return true;
    }
    return collatorFilter.contains(item, query, itemToStringLabel);
  };
}

// node_modules/@base-ui/react/combobox/root/utils/useFilter.mjs
var React32 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/utils/stringifyLocale.mjs
function stringifyLocale(locale) {
  if (Array.isArray(locale)) {
    return locale.map((value) => stringifyLocale(value)).join(",");
  }
  if (locale == null) {
    return "";
  }
  return String(locale);
}

// node_modules/@base-ui/react/internals/filter.mjs
var filterCache = /* @__PURE__ */ new Map();
function getFilter(options = {}) {
  const mergedOptions = {
    usage: "search",
    sensitivity: "base",
    ignorePunctuation: true,
    ...options
  };
  const cacheKey = `${stringifyLocale(options.locale)}|${JSON.stringify(mergedOptions)}`;
  const cachedFilter = filterCache.get(cacheKey);
  if (cachedFilter) {
    return cachedFilter;
  }
  const collator = new Intl.Collator(options.locale, mergedOptions);
  const filter = {
    contains(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      for (let i2 = 0; i2 <= itemString.length - query.length; i2 += 1) {
        if (collator.compare(itemString.slice(i2, i2 + query.length), query) === 0) {
          return true;
        }
      }
      return false;
    },
    startsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      return collator.compare(itemString.slice(0, query.length), query) === 0;
    },
    endsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      const queryLength = query.length;
      return itemString.length >= queryLength && collator.compare(itemString.slice(itemString.length - queryLength), query) === 0;
    }
  };
  filterCache.set(cacheKey, filter);
  return filter;
}

// node_modules/@base-ui/react/combobox/root/utils/useFilter.mjs
var useCoreFilter = getFilter;
function useComboboxFilter(options = {}) {
  const {
    multiple = false,
    value,
    ...collatorOptions
  } = options;
  const coreFilter = getFilter(collatorOptions);
  const contains2 = React32.useCallback((item, query, itemToString) => {
    if (multiple) {
      return createCollatorItemFilter(coreFilter, itemToString)(item, query);
    }
    return createSingleSelectionCollatorFilter(coreFilter, itemToString, value)(item, query);
  }, [coreFilter, value, multiple]);
  return React32.useMemo(() => ({
    ...coreFilter,
    contains: contains2
  }), [contains2, coreFilter]);
}

// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
var React35 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
var React33 = __toESM(require_react(), 1);
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = React33.useRef("");
  const handlePointerDown = React33.useCallback((event) => {
    if (event.defaultPrevented) {
      return;
    }
    lastClickInteractionTypeRef.current = event.pointerType;
    handler(event, event.pointerType);
  }, [handler]);
  const handleClick = React33.useCallback((event) => {
    if (event.detail === 0) {
      handler(event, "keyboard");
      return;
    }
    if ("pointerType" in event) {
      handler(event, event.pointerType);
    } else {
      handler(event, lastClickInteractionTypeRef.current);
    }
    lastClickInteractionTypeRef.current = "";
  }, [handler]);
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown
  };
}

// node_modules/@base-ui/react/internals/useValueChanged.mjs
var React34 = __toESM(require_react(), 1);
function useValueChanged(value, onChange) {
  const valueRef = React34.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current !== value) {
      onChangeCallback(valueRef.current);
    }
    valueRef.current = value;
  }, [value, onChangeCallback]);
}

// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function useOpenMethodTriggerProps(open, setOpenMethod) {
  const handleTriggerClick = useStableCallback((_, interactionType) => {
    const isOpen = typeof open === "function" ? open() : open;
    if (!isOpen) {
      setOpenMethod(interactionType || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
      // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
      // will be "" in that case.
      (parts_exports.os.ios ? "touch" : ""));
    }
  });
  const {
    onClick,
    onPointerDown
  } = useEnhancedClickHandler(handleTriggerClick);
  return React35.useMemo(() => ({
    onClick,
    onPointerDown
  }), [onClick, onPointerDown]);
}
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = React35.useState(null);
  const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
  useValueChanged(open, (previousOpen) => {
    if (previousOpen && !open) {
      setOpenMethod(null);
    }
  });
  return React35.useMemo(() => ({
    openMethod,
    triggerProps
  }), [openMethod, triggerProps]);
}

// node_modules/@base-ui/react/utils/scrollable.mjs
function isScrollableY(element, allowOverflowIntent = false) {
  const {
    overflowY
  } = getComputedStyle(element);
  if (overflowY !== "auto" && overflowY !== "scroll") {
    return false;
  }
  return allowOverflowIntent ? element.clientHeight > 0 : element.scrollHeight > element.clientHeight;
}

// node_modules/@base-ui/react/internals/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/@base-ui/react/combobox/root/utils/constants.mjs
var NO_ACTIVE_VALUE = Symbol("none");
var INITIAL_LAST_HIGHLIGHT = {
  value: NO_ACTIVE_VALUE,
  index: -1
};

// node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
var React36 = __toESM(require_react(), 1);
var DirectionContext = /* @__PURE__ */ React36.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React36.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@base-ui/react/combobox/root/AriaCombobox.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function AriaCombobox(props) {
  const {
    id: idProp,
    onOpenChangeComplete: onOpenChangeCompleteProp,
    defaultSelectedValue = null,
    selectedValue: selectedValueProp,
    onSelectedValueChange,
    defaultInputValue: defaultInputValueProp,
    inputValue: inputValueProp,
    open: openProp,
    defaultOpen = false,
    selectionMode,
    onItemHighlighted: onItemHighlightedProp,
    name: nameProp,
    form,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    inputRef: inputRefProp,
    grid = false,
    items,
    filteredItems: filteredItemsProp,
    filter: filterProp,
    openOnInputClick = true,
    autoHighlight = false,
    keepHighlight = false,
    highlightItemOnHover = true,
    loopFocus = true,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = defaultItemEquality,
    virtualized = false,
    inline: inlineProp = false,
    fillInputOnItemPress = true,
    modal = false,
    limit = -1,
    autoComplete = "list",
    formAutoComplete,
    locale,
    submitOnItemClick = false
  } = props;
  const {
    clearErrors
  } = useFormContext();
  const {
    setDirty,
    validityData,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const direction = useDirection();
  const id = useLabelableId({
    id: idProp
  });
  const collatorFilter = useCoreFilter({
    locale
  });
  const [queryChangedAfterOpen, setQueryChangedAfterOpen] = React37.useState(false);
  const [closeQuery, setCloseQuery] = React37.useState(null);
  const listRef = React37.useRef([]);
  const labelsRef = React37.useRef([]);
  const popupRef = React37.useRef(null);
  const inputRef = React37.useRef(null);
  const startDismissRef = React37.useRef(null);
  const endDismissRef = React37.useRef(null);
  const emptyRef = React37.useRef(null);
  const keyboardActiveRef = React37.useRef(true);
  const hadInputClearRef = React37.useRef(false);
  const chipsContainerRef = React37.useRef(null);
  const clearRef = React37.useRef(null);
  const selectionEventRef = React37.useRef(null);
  const lastHighlightRef = React37.useRef(INITIAL_LAST_HIGHLIGHT);
  const pendingQueryHighlightRef = React37.useRef(null);
  const valuesRef = React37.useRef([]);
  const pointerDownItemRef = React37.useRef(null);
  const disabled2 = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const multiple = selectionMode === "multiple";
  const single = selectionMode === "single";
  const hasInputValue = inputValueProp !== void 0 || defaultInputValueProp !== void 0;
  const hasItems = items !== void 0;
  const hasFilteredItemsProp = filteredItemsProp !== void 0;
  let autoHighlightMode;
  if (autoHighlight === "always") {
    autoHighlightMode = "always";
  } else {
    autoHighlightMode = autoHighlight ? "input-change" : false;
  }
  const [selectedValue, setSelectedValueUnwrapped] = useControlled({
    controlled: selectedValueProp,
    default: multiple ? defaultSelectedValue ?? EMPTY_ARRAY : defaultSelectedValue,
    name: "Combobox",
    state: "selectedValue"
  });
  const filter = React37.useMemo(() => {
    if (filterProp === null) {
      return () => true;
    }
    if (filterProp !== void 0) {
      return filterProp;
    }
    return createCollatorItemFilter(collatorFilter, itemToStringLabel);
  }, [filterProp, collatorFilter, itemToStringLabel]);
  const initialDefaultInputValue = useRefWithInit(() => {
    if (hasInputValue) {
      return defaultInputValueProp ?? "";
    }
    if (single) {
      return stringifyAsLabel(selectedValue, itemToStringLabel);
    }
    return "";
  }).current;
  const [inputValue, setInputValueUnwrapped] = useControlled({
    controlled: inputValueProp,
    default: initialDefaultInputValue,
    name: "Combobox",
    state: "inputValue"
  });
  const [open, setOpenUnwrapped] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Combobox",
    state: "open"
  });
  const isGrouped = isGroupedItems(items);
  const query = closeQuery ?? String(inputValue).trim();
  const selectedLabelString = single ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
  const shouldBypassFiltering = single && !queryChangedAfterOpen && query !== "" && selectedLabelString.length === query.length && collatorFilter.contains(selectedLabelString, query);
  const filterQuery = shouldBypassFiltering ? "" : query;
  const shouldIgnoreExternalFiltering = hasItems && hasFilteredItemsProp && shouldBypassFiltering;
  const flatItems = React37.useMemo(() => {
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      return items.flatMap((group) => group.items);
    }
    return items;
  }, [items, isGrouped]);
  const filteredItems = React37.useMemo(() => {
    if (filteredItemsProp && !shouldIgnoreExternalFiltering) {
      return filteredItemsProp;
    }
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      const groupedItems = items;
      const resultingGroups = [];
      let currentCount = 0;
      for (const group of groupedItems) {
        if (limit > -1 && currentCount >= limit) {
          break;
        }
        const remainingLimit = limit > -1 ? limit - currentCount : Infinity;
        const itemsToTake = filterQuery === "" ? group.items.slice(0, remainingLimit) : [];
        if (filterQuery !== "") {
          for (const item of group.items) {
            if (itemsToTake.length >= remainingLimit) {
              break;
            }
            if (filter(item, filterQuery, itemToStringLabel)) {
              itemsToTake.push(item);
            }
          }
        }
        if (itemsToTake.length > 0) {
          const newGroup = {
            ...group,
            items: itemsToTake
          };
          resultingGroups.push(newGroup);
          currentCount += itemsToTake.length;
        }
      }
      return resultingGroups;
    }
    if (filterQuery === "") {
      return limit > -1 ? flatItems.slice(0, limit) : (
        // The cast here is done as `flatItems` is readonly.
        // valuesRef.current, a mutable ref, can be set to `flatFilteredItems`, which may
        // reference this exact readonly value, creating a mutation risk.
        // However, <Combobox.Item> can never mutate this value as the mutating effect
        // bails early when `items` is provided, and this is only ever returned
        // when `items` is provided due to the early return at the top of this hook.
        flatItems
      );
    }
    const limitedItems = [];
    for (const item of flatItems) {
      if (limit > -1 && limitedItems.length >= limit) {
        break;
      }
      if (filter(item, filterQuery, itemToStringLabel)) {
        limitedItems.push(item);
      }
    }
    return limitedItems;
  }, [filteredItemsProp, shouldIgnoreExternalFiltering, items, isGrouped, filterQuery, limit, filter, itemToStringLabel, flatItems]);
  const flatFilteredItems = React37.useMemo(() => {
    if (isGrouped) {
      const groups = filteredItems;
      return groups.flatMap((g2) => g2.items);
    }
    return filteredItems;
  }, [filteredItems, isGrouped]);
  const store = useRefWithInit(() => {
    let initialSelectedIndex = null;
    if (inlineProp && open && hasItems && selectionMode !== "none") {
      initialSelectedIndex = findSelectionIndex(flatFilteredItems, selectedValue, isItemEqualToValue, multiple);
    }
    return new Store({
      id,
      labelId: void 0,
      selectedValue,
      open,
      items,
      selectionMode,
      listRef,
      labelsRef,
      popupRef,
      emptyRef,
      inputRef,
      startDismissRef,
      endDismissRef,
      keyboardActiveRef,
      chipsContainerRef,
      clearRef,
      valuesRef,
      pointerDownItemRef,
      selectionEventRef,
      name,
      form,
      disabled: disabled2,
      readOnly,
      required,
      grid,
      virtualized,
      openOnInputClick,
      itemToStringLabel,
      isItemEqualToValue,
      modal,
      autoHighlight: autoHighlightMode,
      submitOnItemClick,
      hasInputValue,
      mounted: false,
      forceMounted: false,
      transitionStatus: "idle",
      inline: inlineProp,
      activeIndex: null,
      selectedIndex: initialSelectedIndex,
      popupProps: {},
      listProps: {},
      inputProps: {},
      triggerProps: {},
      itemProps: EMPTY_OBJECT,
      positionerElement: null,
      listElement: null,
      popupId: void 0,
      triggerElement: null,
      inputElement: null,
      inputGroupElement: null,
      popupSide: null,
      openMethod: null,
      inputInsidePopup: true,
      // Avoid duplicate names in the server HTML. Popup inputs aren't rendered
      // until after hydration, so the hidden input takes over then if needed.
      inputOwnsFormValue: selectionMode === "none",
      // Placeholder callbacks replaced on first render
      onOpenChangeComplete: NOOP,
      setOpen: NOOP,
      setInputValue: NOOP,
      setSelectedValue: NOOP,
      setIndices: NOOP,
      handleSelection: NOOP,
      forceMount: NOOP,
      requestSubmit: NOOP
    });
  }).current;
  const fieldRawValue = selectionMode === "none" ? inputValue : selectedValue;
  const fieldStringValue = React37.useMemo(() => {
    if (selectionMode === "none") {
      return fieldRawValue;
    }
    if (Array.isArray(selectedValue)) {
      return selectedValue.map((value) => stringifyAsValue(value, itemToStringValue));
    }
    return stringifyAsValue(selectedValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue, selectionMode, selectedValue]);
  const onItemHighlighted = useStableCallback(onItemHighlightedProp);
  const onOpenChangeComplete = useStableCallback(onOpenChangeCompleteProp);
  const activeIndex = useStore(store, selectors2.activeIndex);
  const selectedIndex = useStore(store, selectors2.selectedIndex);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const listElement = useStore(store, selectors2.listElement);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const inputGroupElement = useStore(store, selectors2.inputGroupElement);
  const inline2 = useStore(store, selectors2.inline);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const inputOwnsFormValue = useStore(store, selectors2.inputOwnsFormValue);
  const triggerRef = useValueAsRef(triggerElement);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  const {
    openMethod,
    triggerProps
  } = useOpenInteractionType(open);
  const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
  useRegisterFieldControl(inputInsidePopup ? triggerRef : inputRef, id, fieldRawValue, getStringifiedValueForForm, !disabled2, nameProp);
  const forceMount = useStableCallback(() => {
    if (items) {
      labelsRef.current = flatFilteredItems.map((item) => stringifyAsLabel(item, itemToStringLabel));
    } else {
      store.set("forceMounted", true);
    }
  });
  const emitHighlight = useStableCallback((value, index, type) => {
    if (index === -1) {
      if (lastHighlightRef.current === INITIAL_LAST_HIGHLIGHT) {
        return;
      }
      lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
    } else {
      lastHighlightRef.current = {
        value,
        index
      };
    }
    onItemHighlighted(value, createGenericEventDetails(type, void 0, {
      index
    }));
  });
  const setIndices = useStableCallback((options) => {
    store.update(options);
    const activeIndexOption = options.activeIndex;
    if (activeIndexOption === void 0) {
      return;
    }
    const type = options.type || reason_parts_exports.none;
    if (activeIndexOption === null) {
      emitHighlight(void 0, -1, type);
    } else {
      emitHighlight(valuesRef.current[activeIndexOption], activeIndexOption, type);
    }
  });
  const setInputValue = useStableCallback((next, eventDetails) => {
    hadInputClearRef.current = eventDetails.reason === reason_parts_exports.inputClear;
    props.onInputValueChange?.(next, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (eventDetails.reason === reason_parts_exports.inputChange) {
      if (open && closeQuery !== null) {
        setCloseQuery(null);
      }
      const event = eventDetails.event;
      const inputType = event.inputType;
      const isTypedInput = event.type === "compositionend" || inputType != null && inputType !== "" && inputType !== "insertReplacementText";
      if (isTypedInput) {
        const hasQuery = next.trim() !== "";
        if (hasQuery) {
          setQueryChangedAfterOpen(true);
        }
        pendingQueryHighlightRef.current = {
          hasQuery
        };
        const list = store.state.listElement;
        if (!store.state.virtualized && list) {
          const popup = popupRef.current;
          for (const ancestor of getOverflowAncestors(list.firstElementChild ?? list)) {
            if (!isHTMLElement(ancestor) || (popup ? !contains(popup, ancestor) : ancestor.getAttribute("role") === "dialog")) {
              break;
            }
            if (isScrollableY(ancestor)) {
              ancestor.scrollTop = 0;
              break;
            }
          }
        }
        if (hasQuery && autoHighlightMode && store.state.activeIndex == null && (open || inline2)) {
          store.set("activeIndex", 0);
        }
      }
    } else if (eventDetails.reason === reason_parts_exports.inputClear && next === "" && store.state.inputInsidePopup) {
      pendingQueryHighlightRef.current = {
        hasQuery: false,
        selection: true
      };
    }
    setInputValueUnwrapped(next);
  });
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    if (open === nextOpen) {
      return;
    }
    if (eventDetails.reason === reason_parts_exports.escapeKey && hasItems && flatFilteredItems.length === 0 && !emptyRef.current) {
      eventDetails.allowPropagation();
    }
    props.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (nextOpen && inputInsidePopup && !inline2 && closeQuery !== null) {
      setQueryChangedAfterOpen(false);
      setCloseQuery(null);
      if (inputValue !== "" && eventDetails.reason !== reason_parts_exports.inputChange) {
        setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear, eventDetails.event));
      }
    }
    if (!nextOpen && queryChangedAfterOpen) {
      if (single) {
        if (!inline2) {
          setCloseQuery(query);
        }
        if (query === "") {
          setQueryChangedAfterOpen(false);
        }
      } else if (multiple) {
        if (!inline2) {
          setCloseQuery(query);
        }
        if (inputInsidePopup) {
          setIndices({
            activeIndex: null
          });
        }
        if (!inputInsidePopup || inline2) {
          setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear, eventDetails.event));
        }
      }
    }
    setOpenUnwrapped(nextOpen);
    if (!nextOpen && inputInsidePopup && (eventDetails.reason === reason_parts_exports.focusOut || eventDetails.reason === reason_parts_exports.outsidePress)) {
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
        validation.commit(valueToValidate);
      }
    }
  });
  const setSelectedValue = useStableCallback((nextValue, eventDetails) => {
    onSelectedValueChange?.(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setSelectedValueUnwrapped(nextValue);
    const shouldFillInput = selectionMode === "none" && popupRef.current && fillInputOnItemPress || single && !store.state.inputInsidePopup;
    if (shouldFillInput) {
      setInputValue(stringifyAsLabel(nextValue, itemToStringLabel), createChangeEventDetails(eventDetails.reason, eventDetails.event));
    }
  });
  const handleSelection = useStableCallback((event, itemValue) => {
    const targetEl = getTarget(event);
    const overrideEvent = selectionEventRef.current ?? event;
    selectionEventRef.current = null;
    const eventDetails = createChangeEventDetails(reason_parts_exports.itemPress, overrideEvent);
    const href = targetEl?.closest("a")?.getAttribute("href");
    if (href) {
      if (href.startsWith("#")) {
        setOpen(false, eventDetails);
      }
      return;
    }
    if (multiple) {
      const currentSelectedValue = Array.isArray(selectedValue) ? selectedValue : [];
      const isCurrentlySelected = selectedValueIncludes(currentSelectedValue, itemValue, isItemEqualToValue);
      const nextValue = isCurrentlySelected ? removeItem(currentSelectedValue, itemValue, isItemEqualToValue) : [...currentSelectedValue, itemValue];
      setSelectedValue(nextValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      const wasFiltering = inputRef.current ? inputRef.current.value.trim() !== "" : false;
      if (!wasFiltering) {
        return;
      }
      if (store.state.inputInsidePopup) {
        setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear, eventDetails.event));
      } else {
        setOpen(false, eventDetails);
      }
    } else {
      setSelectedValue(itemValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setOpen(false, eventDetails);
    }
  });
  const requestSubmit = useStableCallback(() => {
    const formElement = validation.inputRef.current?.form ?? store.state.inputElement?.form;
    if (formElement && typeof formElement.requestSubmit === "function") {
      formElement.requestSubmit();
    }
  });
  const handleUnmount = useStableCallback(() => {
    setMounted(false);
    onOpenChangeComplete?.(false);
    setQueryChangedAfterOpen(false);
    setCloseQuery(null);
    if (selectionMode === "none") {
      setIndices({
        activeIndex: null,
        selectedIndex: null
      });
    } else {
      setIndices({
        activeIndex: null
      });
    }
    if (multiple && inputRef.current && inputRef.current.value !== "" && !hadInputClearRef.current) {
      setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear));
    }
    if (single) {
      if (store.state.inputInsidePopup) {
        if (inputRef.current && inputRef.current.value !== "") {
          setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear));
        }
      } else {
        const stringVal = stringifyAsLabel(selectedValue, itemToStringLabel);
        if (inputRef.current && inputRef.current.value !== stringVal) {
          const reason = stringVal === "" ? reason_parts_exports.inputClear : reason_parts_exports.none;
          setInputValue(stringVal, createChangeEventDetails(reason));
        }
      }
    }
  });
  const resolvedPopupRef = React37.useMemo(() => {
    if (inline2 && positionerElement) {
      return {
        current: positionerElement.closest('[role="dialog"]')
      };
    }
    return popupRef;
  }, [inline2, positionerElement]);
  useOpenChangeComplete({
    enabled: !props.actionsRef,
    open,
    ref: resolvedPopupRef,
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  React37.useImperativeHandle(props.actionsRef, () => ({
    unmount: handleUnmount
  }), [handleUnmount]);
  useIsoLayoutEffect(function syncClosedState() {
    if (open) {
      return;
    }
    pointerDownItemRef.current = null;
    if (selectionMode === "none") {
      return;
    }
    const registry = hasItems ? flatItems : valuesRef.current;
    setIndices({
      selectedIndex: findSelectionIndex(registry, selectedValue, isItemEqualToValue, multiple)
    });
  }, [open, selectedValue, selectionMode, multiple, hasItems, flatItems, isItemEqualToValue, setIndices]);
  useIsoLayoutEffect(() => {
    if (items) {
      valuesRef.current = flatFilteredItems;
      listRef.current.length = flatFilteredItems.length;
    }
  }, [items, flatFilteredItems]);
  useIsoLayoutEffect(() => {
    const pendingHighlight = pendingQueryHighlightRef.current;
    if (pendingHighlight) {
      const listIsNavigable = open || inline2 || store.state.positionerElement?.hidden === false;
      if (pendingHighlight.hasQuery) {
        if (autoHighlightMode && listIsNavigable) {
          store.set("activeIndex", 0);
        }
        pendingQueryHighlightRef.current = null;
      } else if (String(inputValue).trim() === "") {
        pendingQueryHighlightRef.current = null;
        if (listIsNavigable) {
          const clearedBySelection = pendingHighlight.selection;
          if (autoHighlightMode === "always" && !clearedBySelection && store.state.selectionMode === "none") {
            store.set("activeIndex", 0);
          }
          queueMicrotask(() => {
            if (!store.state.open && !store.state.inline || inputRef.current && inputRef.current.value.trim() !== "") {
              return;
            }
            const currentSelectedValue = store.state.selectedValue;
            const isMultiple = store.state.selectionMode === "multiple";
            const lastSelectedValue = isMultiple && Array.isArray(currentSelectedValue) ? currentSelectedValue[currentSelectedValue.length - 1] : currentSelectedValue;
            const hasSelection = store.state.selectionMode !== "none" && lastSelectedValue != null;
            if (hasSelection || clearedBySelection) {
              const registry = hasItems || hasFilteredItemsProp ? flatFilteredItems : valuesRef.current;
              store.set("activeIndex", hasSelection ? findSelectionIndex(registry, currentSelectedValue, store.state.isItemEqualToValue, isMultiple) : null);
            } else if (autoHighlightMode === "always") {
              store.set("activeIndex", 0);
            }
          });
        }
      }
    }
    if (!open && !inline2) {
      return;
    }
    const shouldUseFlatFilteredItems = hasItems || hasFilteredItemsProp;
    const candidateItems = shouldUseFlatFilteredItems ? flatFilteredItems : valuesRef.current;
    const storeActiveIndex = store.state.activeIndex;
    if (storeActiveIndex == null) {
      if (autoHighlightMode === "always" && candidateItems.length > 0) {
        store.set("activeIndex", 0);
        return;
      }
      emitHighlight(void 0, -1, reason_parts_exports.none);
      return;
    }
    if (storeActiveIndex >= candidateItems.length) {
      emitHighlight(void 0, -1, reason_parts_exports.none);
      store.set("activeIndex", null);
      return;
    }
    const itemValue = candidateItems[storeActiveIndex];
    const previouslyHighlightedItemValue = lastHighlightRef.current.value;
    const isSameItem = previouslyHighlightedItemValue !== NO_ACTIVE_VALUE && compareItemEquality(itemValue, previouslyHighlightedItemValue, store.state.isItemEqualToValue);
    if (lastHighlightRef.current.index !== storeActiveIndex || !isSameItem) {
      emitHighlight(itemValue, storeActiveIndex, reason_parts_exports.none);
    }
  }, [
    activeIndex,
    autoHighlightMode,
    emitHighlight,
    hasFilteredItemsProp,
    hasItems,
    flatFilteredItems,
    inline2,
    open,
    store,
    // Reruns the effect when the query changes without affecting the deps above, such as
    // clearing the input when no items are filtered out (individually rendered items).
    inputValue
  ]);
  useIsoLayoutEffect(() => {
    if (selectionMode === "none") {
      setFilled(String(inputValue) !== "");
      return;
    }
    setFilled(multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue != null);
  }, [setFilled, selectionMode, inputValue, selectedValue, multiple]);
  React37.useEffect(() => {
    if (hasItems && autoHighlightMode && flatFilteredItems.length === 0) {
      setIndices({
        activeIndex: null
      });
    }
  }, [hasItems, autoHighlightMode, flatFilteredItems.length, setIndices]);
  function isSelectedValueDirty(value) {
    const initialValue = validityData.initialValue;
    if (Array.isArray(value) && Array.isArray(initialValue)) {
      return !areArraysEqual(value, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
    }
    return value !== initialValue;
  }
  useValueChanged(query, () => {
    if (!open || query === "" || query === String(initialDefaultInputValue)) {
      return;
    }
    setQueryChangedAfterOpen(true);
  });
  function syncInputToSelectedLabel() {
    const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
    if (inputValue !== nextInputValue) {
      setInputValue(nextInputValue, createChangeEventDetails(reason_parts_exports.none));
    }
  }
  useValueChanged(selectedValue, () => {
    if (selectionMode === "none") {
      return;
    }
    clearErrors(name);
    setDirty(isSelectedValueDirty(selectedValue));
    validation.change(selectedValue);
    if (single && !hasInputValue && !inputInsidePopup) {
      syncInputToSelectedLabel();
    }
  });
  useValueChanged(inputValue, () => {
    if (selectionMode !== "none") {
      return;
    }
    clearErrors(name);
    setDirty(inputValue !== validityData.initialValue);
    validation.change(inputValue);
  });
  useValueChanged(items, () => {
    if (!single || hasInputValue || inputInsidePopup || queryChangedAfterOpen) {
      return;
    }
    syncInputToSelectedLabel();
  });
  const floatingRootContext = useFloatingRootContext({
    open: inline2 ? true : open,
    onOpenChange: setOpen,
    elements: {
      reference: inputInsidePopup ? triggerElement : inputElement,
      floating: positionerElement
    }
  });
  const ariaHasPopup = grid ? "grid" : "listbox";
  const expanded = open || inline2;
  const ariaExpanded = expanded ? "true" : "false";
  const role = React37.useMemo(() => {
    const isPlainInput = inputElement?.tagName === "INPUT";
    const shouldTreatAsInput = inputElement == null || isPlainInput;
    const shouldApplyAria = shouldTreatAsInput || expanded;
    const reference = shouldTreatAsInput ? {
      autoComplete: "off",
      spellCheck: "false",
      autoCorrect: "off",
      autoCapitalize: "none"
    } : {};
    if (shouldApplyAria) {
      reference.role = "combobox";
      reference["aria-expanded"] = ariaExpanded;
      reference["aria-haspopup"] = ariaHasPopup;
      reference["aria-controls"] = expanded ? listElement?.id : void 0;
      reference["aria-autocomplete"] = autoComplete;
    }
    return {
      reference,
      floating: {
        role: "presentation"
      }
    };
  }, [inputElement, expanded, ariaExpanded, ariaHasPopup, listElement?.id, autoComplete]);
  const click = useClick(floatingRootContext, {
    enabled: !readOnly && !disabled2 && openOnInputClick,
    event: "mousedown-only",
    toggle: false,
    // Apply a small delay for touch to let mobile viewport/keyboard positioning settle.
    // This avoids top-bottom flip flickers if the preferred position is "top" when first tapping.
    touchOpenDelay: inputInsidePopup ? 0 : 100,
    reason: reason_parts_exports.inputPress
  });
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !readOnly && !disabled2 && !inline2,
    outsidePressEvent: {
      mouse: "sloppy",
      // The visual viewport (affected by the mobile software keyboard) can be
      // somewhat small. The user may want to scroll the screen to see more of
      // the popup.
      touch: "intentional"
    },
    // Without a popup, let the Escape key bubble the event up to other popups' handlers.
    bubbles: inline2 ? true : void 0,
    outsidePress(event) {
      const target = getTarget(event);
      return !contains(triggerElement, target) && !contains(clearRef.current, target) && !contains(chipsContainerRef.current, target) && !contains(inputGroupElement, target);
    }
  });
  const listNavigation2 = useListNavigation(floatingRootContext, {
    enabled: !readOnly && !disabled2,
    id,
    listRef,
    activeIndex,
    selectedIndex,
    virtual: true,
    loopFocus,
    allowEscape: loopFocus && !autoHighlightMode,
    focusItemOnOpen: queryChangedAfterOpen || selectionMode === "none" && !autoHighlightMode ? false : "auto",
    focusItemOnHover: highlightItemOnHover,
    resetOnPointerLeave: !keepHighlight,
    orientation: grid ? "horizontal" : void 0,
    rtl: direction === "rtl",
    disabledIndices: EMPTY_ARRAY,
    grid: grid ? gridNavigation : void 0,
    onNavigate(nextActiveIndex, event) {
      if (!event && !open || transitionStatus === "ending") {
        return;
      }
      if (!event) {
        setIndices({
          activeIndex: nextActiveIndex
        });
      } else {
        setIndices({
          activeIndex: nextActiveIndex,
          type: keyboardActiveRef.current ? reason_parts_exports.keyboard : reason_parts_exports.pointer
        });
      }
    }
  });
  const inputProps = React37.useMemo(() => mergeProps(listNavigation2.reference, {
    onKeyDown(event) {
      if (grid && store.state.activeIndex == null && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventBaseUIHandler();
      }
    }
  }, dismiss.reference, click.reference, role.reference), [listNavigation2.reference, dismiss.reference, click.reference, role.reference, grid, store]);
  const popupProps = React37.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, dismiss.floating), [dismiss.floating]);
  const listProps = React37.useMemo(() => mergeProps(listNavigation2.floating, role.floating), [listNavigation2.floating, role.floating]);
  const itemProps = React37.useMemo(() => {
    const listNavigationItemProps = listNavigation2.item;
    if (!listNavigationItemProps) {
      return EMPTY_OBJECT;
    }
    return {
      ...listNavigationItemProps,
      onFocus: void 0
    };
  }, [listNavigation2.item]);
  useOnFirstRender(() => {
    store.update({
      inline: inlineProp,
      popupProps,
      listProps,
      inputProps,
      triggerProps,
      itemProps,
      setOpen,
      setInputValue,
      setSelectedValue,
      setIndices,
      handleSelection,
      forceMount,
      requestSubmit,
      onOpenChangeComplete
    });
  });
  useIsoLayoutEffect(() => {
    store.update({
      id,
      selectedValue,
      open,
      mounted,
      transitionStatus,
      items,
      inline: inlineProp,
      popupProps,
      listProps,
      inputProps,
      triggerProps,
      openMethod,
      itemProps,
      selectionMode,
      name,
      form,
      disabled: disabled2,
      readOnly,
      required,
      grid,
      virtualized,
      openOnInputClick,
      itemToStringLabel,
      modal,
      autoHighlight: autoHighlightMode,
      isItemEqualToValue,
      submitOnItemClick,
      hasInputValue,
      inputOwnsFormValue: selectionMode === "none" && (inlineProp || !store.state.inputInsidePopup)
    });
  }, [store, id, selectedValue, open, mounted, transitionStatus, items, popupProps, listProps, inputProps, itemProps, openMethod, triggerProps, selectionMode, name, disabled2, readOnly, required, grid, virtualized, openOnInputClick, itemToStringLabel, modal, isItemEqualToValue, submitOnItemClick, hasInputValue, inlineProp, autoHighlightMode, form]);
  const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
  const itemsContextValue = React37.useMemo(() => ({
    query,
    hasItems,
    filteredItems,
    flatFilteredItems
  }), [query, hasItems, filteredItems, flatFilteredItems]);
  const serializedValue = React37.useMemo(() => {
    if (Array.isArray(fieldRawValue)) {
      return "";
    }
    return stringifyAsValue(fieldRawValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue]);
  const hasMultipleSelection = multiple && Array.isArray(selectedValue) && selectedValue.length > 0;
  const hiddenInputName = multiple || selectionMode === "none" && inputOwnsFormValue ? void 0 : name;
  const hiddenInputs = React37.useMemo(() => {
    if (!multiple || !Array.isArray(selectedValue) || !name) {
      return null;
    }
    return selectedValue.map((value) => {
      const currentSerializedValue = stringifyAsValue(value, itemToStringValue);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
        type: "hidden",
        form,
        name,
        value: currentSerializedValue,
        disabled: disabled2
      }, currentSerializedValue);
    });
  }, [multiple, selectedValue, form, name, itemToStringValue, disabled2]);
  const children = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(React37.Fragment, {
    children: [props.children, /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
      ...validation.getValidationProps(disabled2, {
        // Move focus when the hidden input is focused.
        onFocus() {
          if (inputInsidePopup) {
            triggerElement?.focus();
            return;
          }
          (inputRef.current || triggerElement)?.focus();
        },
        // Handle browser autofill.
        onChange(event) {
          if (event.nativeEvent.defaultPrevented || disabled2 || readOnly) {
            return;
          }
          const nextValue = event.currentTarget.value;
          const nextValueLower = nextValue.toLowerCase();
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          const findSerializedMatchIndex = () => valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
          function handleChange() {
            if (multiple) {
              return;
            }
            if (selectionMode === "none") {
              setInputValue(nextValue, details);
              return;
            }
            let matchingIndex = findSerializedMatchIndex();
            if (matchingIndex === -1) {
              matchingIndex = valuesRef.current.findIndex((_, index) => {
                const renderedLabel = labelsRef.current[index];
                return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
              });
            }
            const matchingValue = matchingIndex === -1 ? void 0 : valuesRef.current[matchingIndex];
            if (matchingValue != null) {
              setSelectedValue?.(matchingValue, details);
            }
          }
          if (single) {
            forceMount();
            if (items && findSerializedMatchIndex() === -1) {
              store.set("forceMounted", true);
            }
          }
          queueMicrotask(handleChange);
        }
      }),
      id: id && hiddenInputName == null ? `${id}-hidden-input` : void 0,
      form,
      name: hiddenInputName,
      autoComplete: formAutoComplete,
      disabled: disabled2,
      required: required && !hasMultipleSelection,
      readOnly,
      value: serializedValue,
      ref: hiddenInputRef,
      style: hiddenInputName ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      "aria-hidden": true,
      suppressHydrationWarning: true
    }), hiddenInputs]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ComboboxRootContext.Provider, {
    value: store,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ComboboxFloatingContext.Provider, {
      value: floatingRootContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ComboboxHasItemsContext.Provider, {
        value: hasItems,
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ComboboxDerivedItemsContext.Provider, {
          value: itemsContextValue,
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ComboboxInputValueContext.Provider, {
            value: inputValue,
            children
          })
        })
      })
    })
  });
}

// node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function ComboboxRoot(props) {
  const {
    multiple = false,
    defaultValue,
    value,
    onValueChange,
    autoComplete,
    ...other
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AriaCombobox, {
    ...other,
    selectionMode: multiple ? "multiple" : "single",
    selectedValue: value,
    defaultSelectedValue: defaultValue,
    onSelectedValueChange: onValueChange,
    formAutoComplete: autoComplete
  });
}

// node_modules/@base-ui/react/combobox/label/ComboboxLabel.mjs
var React39 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
function useRegisteredLabelId(idProp, setLabelId) {
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => currentId === id ? void 0 : currentId);
    };
  }, [id, setLabelId]);
  return id;
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
function useLabel(params = {}) {
  const {
    id: idProp,
    fallbackControlId,
    native = false,
    setLabelId: setLabelIdProp,
    focusControl: focusControlProp
  } = params;
  const {
    controlId: contextControlId,
    setLabelId: setContextLabelId
  } = useLabelableContext();
  const syncLabelId = useStableCallback((nextLabelId) => {
    setContextLabelId(nextLabelId);
    setLabelIdProp?.(nextLabelId);
  });
  const id = useRegisteredLabelId(idProp, syncLabelId);
  const resolvedControlId = contextControlId ?? fallbackControlId;
  function focusControl(event) {
    if (focusControlProp) {
      focusControlProp(event, resolvedControlId);
      return;
    }
    if (!resolvedControlId) {
      return;
    }
    const controlElement = ownerDocument(event.currentTarget).getElementById(resolvedControlId);
    if (isHTMLElement(controlElement)) {
      focusElementWithVisible(controlElement);
    }
  }
  function handleInteraction(event) {
    const target = getTarget(event.nativeEvent);
    if (target?.closest("button,input,select,textarea")) {
      return;
    }
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }
    if (native) {
      return;
    }
    focusControl(event);
  }
  return native ? {
    id,
    htmlFor: resolvedControlId ?? void 0,
    onMouseDown: handleInteraction
  } : {
    id,
    onClick: handleInteraction,
    onPointerDown(event) {
      event.preventDefault();
    }
  };
}
function focusElementWithVisible(element) {
  element.focus({
    // Available from Chrome 144+ (January 2026).
    // Safari and Firefox already support it.
    focusVisible: true
  });
}

// node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
function getDefaultLabelId(id) {
  return id == null ? void 0 : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}

// node_modules/@base-ui/react/combobox/label/ComboboxLabel.mjs
var ComboboxLabel = /* @__PURE__ */ React39.forwardRef(function ComboboxLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const elementPropsWithoutId = elementProps;
  delete elementPropsWithoutId.id;
  const fieldRootContext = useFieldRootContext();
  const store = useComboboxRootContext();
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const rootId = useStore(store, selectors2.id);
  const defaultLabelId = getDefaultLabelId(rootId);
  const localControlId = triggerElement?.id ?? (inputInsidePopup ? rootId : void 0);
  if (true) {
    React39.useEffect(() => {
      if (!inputElement || inputInsidePopup) {
        return;
      }
      const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
      const message = "<Combobox.Label> labels <Combobox.Trigger> only. When <Combobox.Input> is the form control, use a native <label> or <Field.Label> instead.";
      error(`${message}${ownerStackMessage}`);
    }, [inputElement, inputInsidePopup]);
  }
  const labelProps = useLabel({
    id: defaultLabelId,
    fallbackControlId: localControlId,
    setLabelId(nextLabelId) {
      const resolvedLabelId = typeof nextLabelId === "function" ? nextLabelId(store.state.labelId) : nextLabelId;
      store.set("labelId", resolvedLabelId);
    }
  });
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state: fieldRootContext.state,
    props: [labelProps, elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
});
if (true) ComboboxLabel.displayName = "ComboboxLabel";

// node_modules/@base-ui/react/combobox/value/ComboboxValue.mjs
var React40 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function ComboboxValue(props) {
  const {
    children: childrenProp,
    placeholder
  } = props;
  const store = useComboboxRootContext();
  const itemToStringLabel = useStore(store, selectors2.itemToStringLabel);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const items = useStore(store, selectors2.items);
  const multiple = useStore(store, selectors2.selectionMode) === "multiple";
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
  const hasNullLabel = useStore(store, selectors2.hasNullItemLabel, shouldCheckNullItemLabel);
  let children = null;
  if (typeof childrenProp === "function") {
    children = childrenProp(selectedValue);
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (!hasSelectedValue && placeholder != null && !hasNullLabel) {
    children = placeholder;
  } else if (multiple && Array.isArray(selectedValue)) {
    children = resolveMultipleLabels(selectedValue, items, itemToStringLabel);
  } else {
    children = resolveSelectedLabel(selectedValue, items, itemToStringLabel);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(React40.Fragment, {
    children
  });
}

// node_modules/@base-ui/react/combobox/input/ComboboxInput.mjs
var React47 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
var STARTING_HOOK = {
  "data-starting-style": ""
};
var ENDING_HOOK = {
  "data-ending-style": ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// node_modules/@base-ui/react/utils/popupStateMapping.mjs
var CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
})({});
var TRIGGER_HOOK = {
  "data-popup-open": ""
};
var PRESSABLE_TRIGGER_HOOK = {
  "data-popup-open": "",
  "data-pressed": ""
};
var POPUP_OPEN_HOOK = {
  "data-open": ""
};
var POPUP_CLOSED_HOOK = {
  "data-closed": ""
};
var ANCHOR_HIDDEN_HOOK = {
  "data-anchor-hidden": ""
};
var triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  }
};
var pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  }
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
var popupTransitionStateMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};

// node_modules/@base-ui/react/combobox/utils/stateAttributesMapping.mjs
var triggerStateAttributesMapping = {
  ...pressableTriggerOpenStateMapping,
  ...fieldValidityMapping,
  popupSide: (side) => side ? {
    "data-popup-side": side
  } : null,
  listEmpty: (empty) => empty ? {
    "data-list-empty": ""
  } : null
};

// node_modules/@base-ui/react/combobox/chips/ComboboxChipsContext.mjs
var React41 = __toESM(require_react(), 1);
var ComboboxChipsContext = /* @__PURE__ */ React41.createContext(void 0);
if (true) ComboboxChipsContext.displayName = "ComboboxChipsContext";
function useComboboxChipsContext() {
  return React41.useContext(ComboboxChipsContext);
}

// node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var React42 = __toESM(require_react(), 1);
var ComboboxPositionerContext = /* @__PURE__ */ React42.createContext(void 0);
if (true) ComboboxPositionerContext.displayName = "ComboboxPositionerContext";
function useComboboxPositionerContext(optional) {
  const context = React42.useContext(ComboboxPositionerContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: <Combobox.Popup> and <Combobox.Arrow> must be used within the <Combobox.Positioner> component" : formatErrorMessage_default(21));
  }
  return context;
}

// node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
var React46 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/use-button/useButton.mjs
var React45 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
var React43 = __toESM(require_react(), 1);
var CompositeRootContext = /* @__PURE__ */ React43.createContext(void 0);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React43.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
var React44 = __toESM(require_react(), 1);
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled2,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React44.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled2) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
      additionalProps["aria-disabled"] = disabled2;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled2;
    }
    return additionalProps;
  }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0
} = {}) {
  target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
}

// node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React45.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled2,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React45.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React45.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React45.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return mergeProps({
      onClick(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled2) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (!isNativeButton || isButton) {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(currentTarget, event);
          }
          return;
        }
        if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
          if (isCurrentTarget && isLink && isSpaceKey) {
            event.preventDefault();
          }
          return;
        }
        if (event.defaultPrevented) {
          return;
        }
        event.preventDefault();
        if (isEnterKey) {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(currentTarget, event);
        }
      },
      onKeyUp(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(event.currentTarget, event);
        }
      },
      onPointerDown(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, isNativeButton ? {
      type: "button"
    } : {
      role: "button"
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}

// node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var ComboboxInternalDismissButton = /* @__PURE__ */ React46.forwardRef(function ComboboxInternalDismissButton2(_, forwardedRef) {
  const store = useComboboxRootContext();
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: false
  });
  const mergedRef = useMergedRefs(forwardedRef, buttonRef);
  function handleDismiss(event) {
    store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent, event.currentTarget));
  }
  const dismissProps = getButtonProps({
    onClick: handleDismiss
  });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", {
    ref: mergedRef,
    ...dismissProps,
    "aria-label": "Dismiss",
    tabIndex: void 0,
    style: visuallyHiddenInput
  });
});
if (true) ComboboxInternalDismissButton.displayName = "ComboboxInternalDismissButton";

// node_modules/@base-ui/react/combobox/utils/parts.mjs
function usePopupSide(store) {
  const mounted = useStore(store, selectors2.mounted);
  const popupSide = useStore(store, selectors2.popupSide);
  const positionerElement = useStore(store, selectors2.positionerElement);
  return mounted && positionerElement ? popupSide : null;
}
function useListEmpty() {
  return useComboboxDerivedItemsContext().filteredItems.length === 0;
}
function getChipNavigationKeys(direction) {
  return direction === "rtl" ? ["ArrowRight", "ArrowLeft"] : ["ArrowLeft", "ArrowRight"];
}
function getIndexAfterChipRemoval(index, chipCount) {
  const nextIndex = index >= chipCount - 1 ? chipCount - 2 : index;
  return nextIndex >= 0 ? nextIndex : void 0;
}
function clickHighlightedItem(store, activeIndex, nativeEvent) {
  const listItem = store.state.listRef.current[activeIndex];
  if (listItem) {
    store.state.selectionEventRef.current = nativeEvent;
    listItem.click();
    store.state.selectionEventRef.current = null;
  }
}

// node_modules/@base-ui/react/combobox/input/ComboboxInput.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var ComboboxInput = /* @__PURE__ */ React47.forwardRef(function ComboboxInput2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const comboboxChipsContext = useComboboxChipsContext();
  const positioning = useComboboxPositionerContext(true);
  const hasPositionerParent = Boolean(positioning);
  const store = useComboboxRootContext();
  const inputValue = useComboboxInputValueContext();
  const direction = useDirection();
  const required = useStore(store, selectors2.required);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const name = useStore(store, selectors2.name);
  const form = useStore(store, selectors2.form);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const autoHighlightMode = useStore(store, selectors2.autoHighlight);
  const inputProps = useStore(store, selectors2.inputProps);
  const triggerProps = useStore(store, selectors2.triggerProps);
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const rootId = useStore(store, selectors2.id);
  const inline2 = useStore(store, selectors2.inline);
  const modal = useStore(store, selectors2.modal);
  const autoHighlightEnabled = Boolean(autoHighlightMode);
  const popupSide = usePopupSide(store);
  const disabled2 = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = useListEmpty();
  const isInsidePopup = hasPositionerParent || inline2;
  const focusManagerModal = !isInsidePopup || modal;
  const id = useBaseUiId(idProp ?? (!isInsidePopup ? rootId : void 0));
  const fieldStateForInput = hasPositionerParent ? DEFAULT_FIELD_STATE_ATTRIBUTES : fieldState;
  const [composingValue, setComposingValue] = React47.useState(null);
  const isComposingRef = React47.useRef(false);
  const lastActiveIndexRef = React47.useRef(null);
  const shouldRestoreActiveIndexRef = React47.useRef(false);
  const inputOwnsFormValue = selectionMode === "none" && !hasPositionerParent;
  const setInputElement = useStableCallback((element2) => {
    const nextIsInsidePopup = hasPositionerParent || store.state.inline;
    if (nextIsInsidePopup && !store.state.hasInputValue) {
      store.state.setInputValue("", createChangeEventDetails(reason_parts_exports.none));
    }
    store.update({
      inputElement: element2,
      inputInsidePopup: nextIsInsidePopup,
      inputOwnsFormValue
    });
  });
  const validationProps = hasPositionerParent ? elementProps : validation.getValidationProps(disabled2, elementProps);
  function clearHighlight() {
    store.state.setIndices({
      activeIndex: null,
      selectedIndex: null,
      type: store.state.keyboardActiveRef.current ? reason_parts_exports.keyboard : reason_parts_exports.pointer
    });
  }
  function markPointerActive() {
    store.state.keyboardActiveRef.current = false;
  }
  const state = {
    ...fieldStateForInput,
    open,
    disabled: disabled2,
    readOnly,
    popupSide,
    listEmpty
  };
  function handleKeyDown(event) {
    if (!comboboxChipsContext) {
      return void 0;
    }
    let nextIndex;
    const {
      highlightedChipIndex
    } = comboboxChipsContext;
    const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
    const [previousChipKey, nextChipKey] = getChipNavigationKeys(direction);
    if (highlightedChipIndex !== void 0) {
      if (event.key === previousChipKey) {
        event.preventDefault();
        if (highlightedChipIndex > 0) {
          nextIndex = highlightedChipIndex - 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === nextChipKey) {
        event.preventDefault();
        if (highlightedChipIndex < renderedChipsCount - 1) {
          nextIndex = highlightedChipIndex + 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        nextIndex = getIndexAfterChipRemoval(highlightedChipIndex, selectedValue.length);
        clearHighlight();
      }
      return nextIndex;
    }
    if (event.key === previousChipKey && (event.currentTarget.selectionStart ?? 0) === 0 && selectedValue.length > 0) {
      event.preventDefault();
      nextIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : void 0;
    }
    return nextIndex;
  }
  const element = useRenderElement("input", componentProps, {
    state,
    ref: [forwardedRef, store.state.inputRef, setInputElement],
    props: [inputProps, triggerProps, {
      value: composingValue ?? inputValue,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": fieldLabelId,
      disabled: disabled2,
      readOnly,
      required: selectionMode === "none" ? required : void 0,
      form,
      ...inputOwnsFormValue && name && {
        name
      },
      id,
      onFocus() {
        setFocused(true);
        if (!inline2 || !shouldRestoreActiveIndexRef.current) {
          return;
        }
        shouldRestoreActiveIndexRef.current = false;
        const nextActiveIndex = lastActiveIndexRef.current;
        if (nextActiveIndex == null || // `valuesRef` can be sparse, so guard against restoring a removed slot.
        !Object.hasOwn(store.state.valuesRef.current, nextActiveIndex)) {
          return;
        }
        store.state.setIndices({
          activeIndex: nextActiveIndex
        });
      },
      onBlur() {
        setTouched(true);
        setFocused(false);
        const activeIndex = store.state.activeIndex;
        if (inline2 && activeIndex !== null && autoHighlightMode !== "always") {
          lastActiveIndexRef.current = activeIndex;
          shouldRestoreActiveIndexRef.current = true;
          store.state.setIndices({
            activeIndex: null
          });
        }
        if (validationMode === "onBlur") {
          const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onCompositionStart(event) {
        if (parts_exports.os.android) {
          return;
        }
        isComposingRef.current = true;
        setComposingValue(event.currentTarget.value);
      },
      onCompositionEnd(event) {
        isComposingRef.current = false;
        const next = event.currentTarget.value;
        setComposingValue(null);
        store.state.setInputValue(next, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
      },
      onChange(event) {
        const nativeEvent = event.nativeEvent;
        const inputType = nativeEvent.inputType;
        const autofillLikeInput = !inputType || inputType === "insertReplacementText";
        const shouldOpenOnInput = isComposingRef.current || !autofillLikeInput;
        function maybeOpenOnInput(trimmed) {
          if (readOnly || disabled2 || !trimmed || !shouldOpenOnInput) {
            return;
          }
          store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.inputChange, nativeEvent));
          if (!autoHighlightEnabled) {
            clearHighlight();
          }
        }
        if (isComposingRef.current) {
          const nextVal = event.currentTarget.value;
          setComposingValue(nextVal);
          if (nextVal === "" && !store.state.openOnInputClick && !store.state.inputInsidePopup) {
            store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.inputClear, nativeEvent));
          }
          const trimmed = nextVal.trim();
          const shouldMaintainHighlight = autoHighlightEnabled && trimmed !== "";
          maybeOpenOnInput(trimmed);
          if (open && store.state.activeIndex !== null && !shouldMaintainHighlight) {
            clearHighlight();
          }
          return;
        }
        const inputChangeDetails = createChangeEventDetails(reason_parts_exports.inputChange, nativeEvent);
        store.state.setInputValue(event.currentTarget.value, inputChangeDetails);
        if (inputChangeDetails.isCanceled) {
          return;
        }
        const empty = event.currentTarget.value === "";
        const clearDetails = createChangeEventDetails(reason_parts_exports.inputClear, nativeEvent);
        if (empty && !store.state.inputInsidePopup) {
          if (selectionMode === "single") {
            store.state.setSelectedValue(null, clearDetails);
          }
          if (!store.state.openOnInputClick) {
            store.state.setOpen(false, clearDetails);
          }
        }
        maybeOpenOnInput(event.currentTarget.value.trim());
        if (open && store.state.activeIndex !== null && !autoHighlightEnabled) {
          clearHighlight();
        }
      },
      onKeyDown(event) {
        if (disabled2 || readOnly) {
          return;
        }
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
          return;
        }
        store.state.keyboardActiveRef.current = true;
        const input = event.currentTarget;
        const scrollAmount = input.scrollWidth - input.clientWidth;
        const isRTL = direction === "rtl";
        if (event.key === "Home") {
          stopEvent(event);
          const cursor = parts_exports.engine.gecko && isRTL ? input.value.length : 0;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = 0;
          return;
        }
        if (event.key === "End") {
          stopEvent(event);
          const cursor = parts_exports.engine.gecko && isRTL ? 0 : input.value.length;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = isRTL ? -scrollAmount : scrollAmount;
          return;
        }
        if (!mounted && event.key === "Escape") {
          const isClear = selectionMode === "multiple" && Array.isArray(selectedValue) ? selectedValue.length === 0 : selectedValue === null;
          const details = createChangeEventDetails(reason_parts_exports.escapeKey, event.nativeEvent);
          const value = selectionMode === "multiple" ? [] : null;
          store.state.setInputValue("", details);
          store.state.setSelectedValue(value, details);
          if (!isClear && !store.state.inline && !details.isPropagationAllowed) {
            event.stopPropagation();
          }
          return;
        }
        if (comboboxChipsContext && event.key === "Backspace" && input.value === "" && comboboxChipsContext.highlightedChipIndex === void 0 && Array.isArray(selectedValue) && selectedValue.length > 0) {
          const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
          const removalIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : selectedValue.length - 1;
          const newValue = selectedValue.filter((_, index) => index !== removalIndex);
          clearHighlight();
          store.state.setSelectedValue(newValue, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
          return;
        }
        const hadHighlightedChip = comboboxChipsContext?.highlightedChipIndex !== void 0;
        const nextIndex = handleKeyDown(event);
        comboboxChipsContext?.setHighlightedChipIndex(nextIndex);
        if (nextIndex !== void 0) {
          comboboxChipsContext?.chipsRef.current[nextIndex]?.focus();
        } else if (hadHighlightedChip) {
          store.state.inputRef.current?.focus();
        }
        if (event.which === 229) {
          return;
        }
        if (event.key === "Enter" && open) {
          const activeIndex = store.state.activeIndex;
          const nativeEvent = event.nativeEvent;
          if (activeIndex === null) {
            if (inline2) {
              return;
            }
            store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.none, nativeEvent));
            return;
          }
          stopEvent(event);
          clickHighlightedItem(store, activeIndex, nativeEvent);
        }
      },
      onPointerMove: markPointerActive,
      onPointerDown: markPointerActive
    }, validationProps],
    stateAttributesMapping: triggerStateAttributesMapping
  });
  const renderedInput = hasPositionerParent ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FieldRootContext.Provider, {
    value: DEFAULT_FIELD_ROOT_CONTEXT,
    children: element
  }) : element;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(React47.Fragment, {
    children: [open && focusManagerModal && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ComboboxInternalDismissButton, {
      ref: store.state.startDismissRef
    }), renderedInput]
  });
});
if (true) ComboboxInput.displayName = "ComboboxInput";

// node_modules/@base-ui/react/combobox/input-group/ComboboxInputGroup.mjs
var React48 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/utils/handleInputPress.mjs
function handleInputPress(event, store, disabled2, readOnly, shouldIgnoreTarget) {
  if (event.baseUIHandlerPrevented || readOnly) {
    return;
  }
  const target = getTarget(event.nativeEvent);
  const targetElement = isElement(target) ? target : null;
  if (targetElement !== event.currentTarget && (shouldIgnoreTarget?.(targetElement) || isInteractiveElement(targetElement))) {
    return;
  }
  event.preventDefault();
  if (disabled2) {
    return;
  }
  store.state.inputRef.current?.focus();
  if (store.state.openOnInputClick) {
    store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.inputPress, event.nativeEvent));
  }
}

// node_modules/@base-ui/react/combobox/input-group/ComboboxInputGroup.mjs
var ComboboxInputGroup = /* @__PURE__ */ React48.forwardRef(function ComboboxInputGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState
  } = useFieldRootContext();
  const store = useComboboxRootContext();
  const open = useStore(store, selectors2.open);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const popupSide = usePopupSide(store);
  const disabled2 = comboboxDisabled;
  const listEmpty = useListEmpty();
  const placeholder = selectionMode === "none" ? false : !hasSelectedValue;
  const state = {
    ...fieldState,
    open,
    disabled: disabled2,
    readOnly,
    popupSide,
    listEmpty,
    placeholder
  };
  const setInputGroupElement = useStableCallback((element) => {
    store.set("inputGroupElement", element);
  });
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, setInputGroupElement],
    props: [{
      role: "group",
      onMouseDown(event) {
        handleInputPress(event, store, disabled2, readOnly, (target) => {
          return contains(store.state.chipsContainerRef.current, target);
        });
      }
    }, elementProps],
    state,
    stateAttributesMapping: triggerStateAttributesMapping
  });
});
if (true) ComboboxInputGroup.displayName = "ComboboxInputGroup";

// node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs
var React49 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
var BOUNDARY_OFFSET = 5;
function isMouseWithinBounds(event, element) {
  const bounds = getPseudoElementBounds(element);
  return event.clientX >= bounds.left - BOUNDARY_OFFSET && event.clientX <= bounds.right + BOUNDARY_OFFSET && event.clientY >= bounds.top - BOUNDARY_OFFSET && event.clientY <= bounds.bottom + BOUNDARY_OFFSET;
}
function getPseudoElementBounds(element) {
  const elementRect = element.getBoundingClientRect();
  const win = getWindow(element);
  if (parts_exports.env.jsdom) {
    return elementRect;
  }
  const beforeStyles = win.getComputedStyle(element, "::before");
  const afterStyles = win.getComputedStyle(element, "::after");
  const hasPseudoElements = beforeStyles.content !== "none" || afterStyles.content !== "none";
  if (!hasPseudoElements) {
    return elementRect;
  }
  const beforeWidth = parseFloat(beforeStyles.width) || 0;
  const beforeHeight = parseFloat(beforeStyles.height) || 0;
  const afterWidth = parseFloat(afterStyles.width) || 0;
  const afterHeight = parseFloat(afterStyles.height) || 0;
  const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
  const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
  const widthDiff = totalWidth - elementRect.width;
  const heightDiff = totalHeight - elementRect.height;
  return {
    left: elementRect.left - widthDiff / 2,
    right: elementRect.right + widthDiff / 2,
    top: elementRect.top - heightDiff / 2,
    bottom: elementRect.bottom + heightDiff / 2
  };
}

// node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs
var ComboboxTrigger = /* @__PURE__ */ React49.forwardRef(function ComboboxTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    nativeButton = true,
    disabled: disabledProp = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const store = useComboboxRootContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const required = useStore(store, selectors2.required);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const listElement = useStore(store, selectors2.listElement);
  const storedPopupId = useStore(store, selectors2.popupId);
  const triggerProps = useStore(store, selectors2.triggerProps);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const rootId = useStore(store, selectors2.id);
  const comboboxLabelId = useStore(store, selectors2.labelId);
  const open = useStore(store, selectors2.open);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const activeIndex = useStore(store, selectors2.activeIndex);
  const selectedIndex = useStore(store, selectors2.selectedIndex);
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const floatingRootContext = useComboboxFloatingContext();
  const inputValue = useComboboxInputValueContext();
  const focusTimeout = useTimeout();
  const disabled2 = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = useListEmpty();
  const popupSide = usePopupSide(store);
  useLabelableId({
    id: inputInsidePopup ? idProp : void 0
  });
  const id = inputInsidePopup ? idProp ?? rootId : idProp;
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, comboboxLabelId);
  let ariaControls;
  if (open && inputInsidePopup) {
    ariaControls = storedPopupId ?? getComboboxPopupId(rootId);
  } else if (open) {
    ariaControls = listElement?.id;
  }
  const currentPointerTypeRef = React49.useRef("");
  function trackPointerType(event) {
    currentPointerTypeRef.current = event.pointerType;
  }
  const {
    reference: triggerTypeaheadProps
  } = useTypeahead(floatingRootContext, {
    enabled: !open && !readOnly && !comboboxDisabled && selectionMode === "single",
    listRef: store.state.labelsRef,
    activeIndex,
    selectedIndex,
    onMatch(index) {
      const nextSelectedValue = store.state.valuesRef.current[index];
      if (nextSelectedValue !== void 0) {
        store.state.setSelectedValue(nextSelectedValue, createChangeEventDetails(reason_parts_exports.none));
      }
    }
  });
  const {
    reference: triggerClickProps
  } = useClick(floatingRootContext, {
    enabled: !readOnly && !comboboxDisabled,
    event: "mousedown"
  });
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled: disabled2
  });
  const state = {
    ...fieldState,
    open,
    disabled: disabled2,
    popupSide,
    listEmpty,
    placeholder: selectionMode === "none" ? false : !hasSelectedValue
  };
  const setTriggerElement = useStableCallback((element2) => {
    store.set("triggerElement", element2);
  });
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef, setTriggerElement],
    state,
    props: [triggerProps, triggerClickProps, triggerTypeaheadProps, {
      id,
      tabIndex: inputInsidePopup ? 0 : -1,
      role: inputInsidePopup ? "combobox" : void 0,
      "aria-expanded": open,
      "aria-haspopup": inputInsidePopup ? "dialog" : "listbox",
      "aria-controls": ariaControls,
      "aria-required": inputInsidePopup ? required || void 0 : void 0,
      "aria-labelledby": ariaLabelledBy,
      onPointerDown: trackPointerType,
      onPointerEnter: trackPointerType,
      onFocus() {
        setFocused(true);
        if (disabled2 || readOnly) {
          return;
        }
        focusTimeout.start(0, store.state.forceMount);
      },
      onBlur(event) {
        if (contains(positionerElement, event.relatedTarget)) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onMouseDown(event) {
        if (disabled2 || readOnly) {
          return;
        }
        if (!inputInsidePopup) {
          floatingRootContext.set("domReferenceElement", event.currentTarget);
        }
        store.state.forceMount();
        if (currentPointerTypeRef.current !== "touch") {
          store.state.inputRef.current?.focus();
          if (!inputInsidePopup) {
            event.preventDefault();
          }
        }
        if (open) {
          return;
        }
        const doc = ownerDocument(event.currentTarget);
        function handleMouseUp(mouseEvent) {
          const currentTriggerElement = store.state.triggerElement;
          if (!currentTriggerElement) {
            return;
          }
          const mouseUpTarget = getTarget(mouseEvent);
          const positioner = store.state.positionerElement;
          const list = store.state.listElement;
          if (contains(currentTriggerElement, mouseUpTarget) || contains(positioner, mouseUpTarget) || contains(list, mouseUpTarget)) {
            return;
          }
          if (isMouseWithinBounds(mouseEvent, currentTriggerElement)) {
            return;
          }
          store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.cancelOpen, mouseEvent));
        }
        if (inputInsidePopup) {
          doc.addEventListener("mouseup", handleMouseUp, {
            once: true
          });
        }
      },
      onKeyDown(event) {
        if (readOnly) {
          return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          stopEvent(event);
          store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
          store.state.inputRef.current?.focus();
        }
      }
    }, validation.getValidationProps(disabled2, elementProps), getButtonProps],
    stateAttributesMapping: triggerStateAttributesMapping
  });
  return element;
});
if (true) ComboboxTrigger.displayName = "ComboboxTrigger";

// node_modules/@base-ui/react/combobox/list/ComboboxList.mjs
var React54 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/collection/ComboboxCollection.mjs
var React51 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/collection/GroupCollectionContext.mjs
var React50 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var GroupCollectionContext = /* @__PURE__ */ React50.createContext(null);
if (true) GroupCollectionContext.displayName = "GroupCollectionContext";
function useGroupCollectionContext() {
  return React50.useContext(GroupCollectionContext);
}
function GroupCollectionProvider(props) {
  const {
    children,
    items
  } = props;
  const contextValue = React50.useMemo(() => ({
    items
  }), [items]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(GroupCollectionContext.Provider, {
    value: contextValue,
    children
  });
}

// node_modules/@base-ui/react/combobox/collection/ComboboxCollection.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function ComboboxCollection(props) {
  const {
    children
  } = props;
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const groupContext = useGroupCollectionContext();
  const itemsToRender = groupContext ? groupContext.items : filteredItems;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(React51.Fragment, {
    children: itemsToRender.map(children)
  });
}

// node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
var React53 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var React52 = __toESM(require_react(), 1);
var CompositeListContext = /* @__PURE__ */ React52.createContext({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => () => {
  },
  nextIndexRef: {
    current: 0
  }
});
if (true) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
  return React52.useContext(CompositeListContext);
}

// node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const [, setMapTick] = React53.useState(false);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const nextIndexRef = React53.useRef(0);
  const isDirtyRef = React53.useRef(true);
  const itemsRef = React53.useRef([]);
  const mutationObserverRef = React53.useRef(null);
  const scheduleMapUpdate = useStableCallback(() => {
    if (isDirtyRef.current) {
      return;
    }
    isDirtyRef.current = true;
    setMapTick((tick) => !tick);
  });
  const register2 = useStableCallback((node, registration) => {
    map.set(node, registration);
    scheduleMapUpdate();
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    scheduleMapUpdate();
  });
  const syncRefs = useStableCallback((items) => {
    const nextMap = /* @__PURE__ */ new Map();
    elementsRef.current.length = 0;
    if (labelsRef) {
      labelsRef.current.length = 0;
    }
    items.forEach((item) => {
      nextMap.set(item.element, {
        ...item.registration.metadata ?? {},
        index: item.index
      });
      elementsRef.current[item.index] = item.element;
      if (labelsRef) {
        labelsRef.current[item.index] = item.registration.label !== void 0 ? item.registration.label : item.registration.textRef?.current?.textContent ?? item.element.textContent;
      }
    });
    nextIndexRef.current = elementsRef.current.length;
    return nextMap;
  });
  function observe(sortedNodes) {
    mutationObserverRef.current?.disconnect();
    mutationObserverRef.current = null;
    if (typeof MutationObserver !== "function" || sortedNodes.length < 2) {
      return;
    }
    const mutationObserver = new MutationObserver((entries) => {
      if (!hasMovedNode(entries)) {
        return;
      }
      let previousConnectedNode = null;
      for (const node of sortedNodes) {
        if (!node.isConnected) {
          continue;
        }
        if (previousConnectedNode && sortByDocumentPosition(previousConnectedNode, node) > 0) {
          mutationObserver.disconnect();
          scheduleMapUpdate();
          return;
        }
        previousConnectedNode = node;
      }
    });
    mutationObserverRef.current = mutationObserver;
    const roots = /* @__PURE__ */ new Set();
    for (let i2 = 1; i2 < sortedNodes.length; i2 += 1) {
      const root = getCommonAncestor(sortedNodes[i2 - 1], sortedNodes[i2]);
      if (root) {
        roots.add(root);
      }
    }
    roots.forEach((root) => mutationObserver.observe(root, {
      childList: true
    }));
  }
  const flush = useStableCallback(() => {
    const [items, automaticNodes] = getCompositeListSnapshot(map);
    const nextMap = syncRefs(items);
    observe(automaticNodes);
    itemsRef.current = items;
    isDirtyRef.current = false;
    listeners.forEach((listener) => listener(nextMap));
    onMapChange(nextMap);
  });
  useIsoLayoutEffect(() => {
    if (!isDirtyRef.current) {
      syncRefs(itemsRef.current);
    }
    return () => {
      elementsRef.current = [];
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [elementsRef, labelsRef, syncRefs]);
  useIsoLayoutEffect(() => {
    if (isDirtyRef.current) {
      flush();
    }
  });
  useIsoLayoutEffect(() => {
    return () => {
      mutationObserverRef.current?.disconnect();
      isDirtyRef.current = true;
    };
  }, []);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  const contextValue = React53.useMemo(() => ({
    register: register2,
    unregister,
    subscribeMapChange,
    nextIndexRef
  }), [register2, unregister, subscribeMapChange, nextIndexRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CompositeListContext.Provider, {
    value: contextValue,
    children
  });
}
function createMap() {
  return /* @__PURE__ */ new Map();
}
function createListeners() {
  return /* @__PURE__ */ new Set();
}
function getCompositeListSnapshot(map) {
  const reservedIndices = /* @__PURE__ */ new Set();
  const items = [];
  const automaticItems = [];
  map.forEach((registration, node) => {
    if (!node.isConnected) {
      return;
    }
    const index = registration.index;
    const item = {
      index: index ?? -1,
      element: node,
      registration
    };
    if (index === null) {
      automaticItems.push(item);
    } else if (index >= 0) {
      reservedIndices.add(index);
      items.push(item);
    }
  });
  let nextAutomaticIndex = 0;
  automaticItems.sort((a, b) => sortByDocumentPosition(a.element, b.element));
  automaticItems.forEach((item) => {
    while (reservedIndices.has(nextAutomaticIndex)) {
      nextAutomaticIndex += 1;
    }
    item.index = nextAutomaticIndex;
    items.push(item);
    nextAutomaticIndex += 1;
  });
  if (reservedIndices.size > 0) {
    items.sort((a, b) => a.index - b.index);
  }
  return [items, automaticItems.map((item) => item.element)];
}
function getCommonAncestor(firstNode, lastNode) {
  let ancestor = firstNode.parentElement;
  while (ancestor && !ancestor.contains(lastNode)) {
    ancestor = ancestor.parentElement;
  }
  return ancestor;
}
function hasMovedNode(entries) {
  for (const entry of entries) {
    for (let i2 = 0; i2 < entry.removedNodes.length; i2 += 1) {
      if (entry.removedNodes[i2].isConnected) {
        return true;
      }
    }
  }
  return false;
}
function sortByDocumentPosition(a, b) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

// node_modules/@base-ui/react/combobox/list/ComboboxList.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var ComboboxList = /* @__PURE__ */ React54.forwardRef(function ComboboxList2(componentProps, forwardedRef) {
  var _ComboboxCollection;
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const floatingRootContext = useComboboxFloatingContext();
  const hasPositionerContext = Boolean(useComboboxPositionerContext(true));
  const {
    filteredItems,
    hasItems
  } = useComboboxDerivedItemsContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const grid = useStore(store, selectors2.grid);
  const listProps = useStore(store, selectors2.listProps);
  const virtualized = useStore(store, selectors2.virtualized);
  const forceMounted = useStore(store, selectors2.forceMounted);
  const multiple = selectionMode === "multiple";
  const empty = filteredItems.length === 0;
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const setListElement = useStableCallback((element2) => {
    store.set("listElement", element2);
  });
  const resolvedChildren = React54.useMemo(() => {
    if (typeof children === "function") {
      return _ComboboxCollection || (_ComboboxCollection = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ComboboxCollection, {
        children
      }));
    }
    return children;
  }, [children]);
  const state = {
    empty
  };
  const floatingId = floatingRootContext.useState("floatingId");
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, setListElement, hasPositionerContext ? null : setPositionerElement],
    props: [listProps, {
      children: resolvedChildren,
      tabIndex: -1,
      id: floatingId,
      role: grid ? "grid" : "listbox",
      "aria-multiselectable": multiple ? "true" : void 0,
      onKeyDown(event) {
        if (store.state.disabled || store.state.readOnly) {
          return;
        }
        if (event.key === "Enter") {
          const activeIndex = store.state.activeIndex;
          if (activeIndex == null) {
            return;
          }
          stopEvent(event);
          clickHighlightedItem(store, activeIndex, event.nativeEvent);
        }
      },
      onKeyDownCapture() {
        store.state.keyboardActiveRef.current = true;
      },
      onPointerMoveCapture() {
        store.state.keyboardActiveRef.current = false;
      }
    }, elementProps]
  });
  if (virtualized) {
    return element;
  }
  const labelsRef = hasItems && !forceMounted ? void 0 : store.state.labelsRef;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CompositeList, {
    elementsRef: store.state.listRef,
    labelsRef,
    children: element
  });
});
if (true) ComboboxList.displayName = "ComboboxList";

// node_modules/@base-ui/react/combobox/status/ComboboxStatus.mjs
var React56 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/utils/useInitialLiveRegionTextMutation.mjs
var React55 = __toESM(require_react(), 1);
var LIVE_REGION_MARKER = "\u2060";
var INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY = 200;
function findLastTextNode(root) {
  const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let lastTextNode = null;
  while (walker.nextNode()) {
    const textNode = walker.currentNode;
    if (textNode.nodeValue !== "") {
      lastTextNode = textNode;
    }
  }
  return lastTextNode;
}
function useInitialLiveRegionTextMutation() {
  const timeout = useTimeout();
  const rootRef = React55.useRef(null);
  React55.useEffect(() => {
    if (parts_exports.os.ios) {
      return void 0;
    }
    const root = rootRef.current;
    if (root == null) {
      return void 0;
    }
    const textNode = findLastTextNode(root);
    if (textNode == null) {
      return void 0;
    }
    const originalValue = textNode.data;
    const markedValue = `${originalValue}${LIVE_REGION_MARKER}`;
    textNode.nodeValue = markedValue;
    timeout.start(INITIAL_LIVE_REGION_TEXT_MUTATION_RESET_DELAY, () => {
      if (textNode.nodeValue === markedValue) {
        textNode.nodeValue = originalValue;
      }
    });
    return () => {
      timeout.clear();
      if (textNode.nodeValue === markedValue) {
        textNode.nodeValue = originalValue;
      }
    };
  }, [rootRef, timeout]);
  return rootRef;
}

// node_modules/@base-ui/react/combobox/status/ComboboxStatus.mjs
var ComboboxStatus = /* @__PURE__ */ React56.forwardRef(function ComboboxStatus2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const statusRef = useInitialLiveRegionTextMutation();
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, statusRef],
    props: [{
      children: childrenProp,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": true
    }, elementProps]
  });
});
if (true) ComboboxStatus.displayName = "ComboboxStatus";

// node_modules/@base-ui/react/combobox/portal/ComboboxPortal.mjs
var React58 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/portal/ComboboxPortalContext.mjs
var React57 = __toESM(require_react(), 1);
var ComboboxPortalContext = /* @__PURE__ */ React57.createContext(void 0);
if (true) ComboboxPortalContext.displayName = "ComboboxPortalContext";
function useComboboxPortalContext() {
  const context = React57.useContext(ComboboxPortalContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: <Combobox.Portal> is missing." : formatErrorMessage_default(20));
  }
  return context;
}

// node_modules/@base-ui/react/combobox/portal/ComboboxPortal.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var ComboboxPortal = /* @__PURE__ */ React58.forwardRef(function ComboboxPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useComboboxRootContext();
  const mounted = useStore(store, selectors2.mounted);
  const forceMounted = useStore(store, selectors2.forceMounted);
  const shouldRender = mounted || keepMounted || forceMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ComboboxPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) ComboboxPortal.displayName = "ComboboxPortal";

// node_modules/@base-ui/react/combobox/backdrop/ComboboxBackdrop.mjs
var React59 = __toESM(require_react(), 1);
var stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var ComboboxBackdrop = /* @__PURE__ */ React59.forwardRef(function ComboboxBackdrop2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    stateAttributesMapping,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps]
  });
});
if (true) ComboboxBackdrop.displayName = "ComboboxBackdrop";

// node_modules/@base-ui/react/combobox/positioner/ComboboxPositioner.mjs
var React63 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

// node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
var React60 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform3,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0,
      offsetParent = "real"
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform3.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = offsetParent === "real" ? await platform3.getOffsetParent?.(element) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];
    if (!clientSize || !await platform3.isElement?.(arrowOffsetParent)) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min, center, max);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var arrow2 = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});

// node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide2 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height,
      x,
      y
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: "reference"
    });
    const referenceHidden = overflow.top - height >= 0 || overflow.right - width >= 0 || overflow.bottom - height >= 0 || overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden
      }
    };
  }
};

// node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};

// node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
var AVAILABLE_WIDTH_VAR = "--available-width";
var AVAILABLE_HEIGHT_VAR = "--available-height";
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shift: shift2,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree
  } = params;
  const [mountSide, setMountSide] = React60.useState(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const shiftCrossAxis = shift2?.crossAxis ?? false;
  const shiftRootBoundary = shift2?.rootBoundary;
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placement = align === "center" ? side : `${side}-${align}`;
  let collisionPadding = collisionPaddingParam;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding,
      right: collisionPadding,
      bottom: collisionPadding,
      left: collisionPadding
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: collisionPadding.top || 0,
      right: collisionPadding.right || 0,
      bottom: collisionPadding.bottom || 0,
      left: collisionPadding.left || 0
    };
  }
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = React60.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push(offset((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias + biasTop,
      right: collisionPadding.right + bias + biasRight,
      bottom: collisionPadding.bottom + bias + biasBottom,
      left: collisionPadding.left + bias + biasLeft
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift({
    ...commonCollisionProps,
    // Use the Layout Viewport to avoid shifting around when pinch-zooming.
    rootBoundary: shiftRootBoundary,
    mainAxis: collisionAvoidanceAlign !== "none",
    crossAxis: crossAxisShiftEnabled,
    limiter: sticky || shiftCrossAxis ? void 0 : limitShift((limitData) => {
      if (!arrowRef.current) {
        return {};
      }
      const {
        width,
        height
      } = arrowRef.current.getBoundingClientRect();
      const sideAxis = getSideAxis(getSide(limitData.placement));
      const arrowSize = sideAxis === "y" ? width : height;
      const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
      return {
        offset: arrowSize / 2 + offsetAmount / 2
      };
    })
  }, [commonCollisionProps, sticky, shiftCrossAxis, shiftRootBoundary, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth}px`);
      floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x2,
        y: y2,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
      const anchorHeight = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
      floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
    }
  }), arrow2((state) => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
    padding: arrowPadding,
    offsetParent: "floating"
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: elements2,
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        rects,
        y: y2
      } = state;
      const currentRenderedSide = getSide(renderedPlacement2);
      const currentRenderedAxis = getSideAxis(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = middlewareData2.arrow?.x || 0;
      const arrowY = middlewareData2.arrow?.y || 0;
      const arrowWidth = arrowEl?.clientWidth || 0;
      const arrowHeight = arrowEl?.clientHeight || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(middlewareData2.shift?.y || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y2}px`;
      elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
      return {};
    }
  }, hide2, adaptiveOrigin);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React60.useMemo(() => ({
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloatingHook({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React60.useMemo(() => {
    let base;
    if (!isPositioned) {
      base = {
        position: resolvedPosition,
        top: 0,
        left: 0
      };
    } else if (adaptiveOrigin) {
      base = {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y
      };
    } else {
      base = {
        ...originalFloatingStyles,
        position: resolvedPosition
      };
    }
    base[AVAILABLE_WIDTH_VAR] = "100vw";
    base[AVAILABLE_HEIGHT_VAR] = "100vh";
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = React60.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React60.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React60.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned && renderedSide !== side) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide, side]);
  const arrowStyles = React60.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React60.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}

// node_modules/@base-ui/react/utils/InternalBackdrop.mjs
var React61 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var InternalBackdrop = /* @__PURE__ */ React61.forwardRef(function InternalBackdrop2(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
    ref,
    role: "presentation",
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath
    }
  });
});
if (true) InternalBackdrop.displayName = "InternalBackdrop";

// node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/@base-ui/react/utils/usePositioner.mjs
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}

// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var React62 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/useScrollLock.mjs
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function getViewportScroller(html, body) {
  return isOverflowElement(html) ? html : body;
}
function isPageScrollLocked(win, html, body) {
  return /hidden|clip/.test(win.getComputedStyle(getViewportScroller(html, body)).overflowY);
}
function hasInsetScrollbars(referenceElement) {
  if (typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const win = getWindow(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable");
  if (!supported || typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = getViewportScroller(html, body);
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = "stable";
  scrollContainer.style.overflowY = "scroll";
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = "hidden";
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const elementToLock = getViewportScroller(html, body);
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX
  };
  Object.assign(elementToLock.style, {
    overflowY: "hidden",
    overflowX: "hidden"
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = getWindow(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = AnimationFrame.create();
  if (parts_exports.engine.webkit && (win.visualViewport?.scale ?? 1) !== 1) {
    return () => {
    };
  }
  function lockScroll() {
    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
    const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
    const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior
    };
    const isScrollableY2 = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
    const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
    const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = getViewportScroller(html, body);
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = "hidden";
      elementToLock.style.overflowX = "hidden";
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: "hidden",
      overflowX: "hidden"
    });
    if (isScrollableY2 || hasConstantOverflowY) {
      html.style.overflowY = "scroll";
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = "scroll";
    }
    Object.assign(body.style, {
      position: "relative",
      height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
      width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
      boxSizing: "border-box",
      // Assign the longhands that `cleanup` restores, so nothing is left behind.
      overflowY: "hidden",
      overflowX: "hidden",
      scrollBehavior: "unset"
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute("data-base-ui-scroll-locked", "");
    html.style.scrollBehavior = "unset";
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute("data-base-ui-scroll-locked");
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = addEventListener(win, "resize", handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    if (typeof win.removeEventListener === "function") {
      unsubscribeResize();
    }
  };
}
var ScrollLocker = class {
  lockCount = 0;
  restore = null;
  timeoutLock = Timeout.create();
  timeoutUnlock = Timeout.create();
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  release = () => {
    this.lockCount -= 1;
    if (this.lockCount === 0 && this.restore) {
      this.timeoutUnlock.start(0, this.unlock);
    }
  };
  unlock = () => {
    if (this.lockCount === 0 && this.restore) {
      this.restore?.();
      this.restore = null;
    }
  };
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = getWindow(html);
    if (isPageScrollLocked(win, html, body)) {
      const observer = new win.MutationObserver(() => {
        if (isPageScrollLocked(win, html, body)) {
          return;
        }
        observer.disconnect();
        this.restore = null;
        this.lock(referenceElement);
      });
      const options = {
        attributes: true
      };
      observer.observe(html, options);
      observer.observe(body, options);
      this.restore = () => observer.disconnect();
      return;
    }
    const hasOverlayScrollbars = parts_exports.os.ios || !hasInsetScrollbars(referenceElement);
    this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
  }
};
var SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}

// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = React62.useState(false);
  useIsoLayoutEffect(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}

// node_modules/@base-ui/react/combobox/positioner/ComboboxPositioner.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var ComboboxPositioner = /* @__PURE__ */ React63.forwardRef(function ComboboxPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    // `useAnchorPositioning` applies the same defaults to the undefined values; the names
    // remain destructured to exclude the props from `elementProps`.
    positionMethod,
    side,
    align,
    sideOffset,
    alignOffset,
    collisionBoundary = "clipping-ancestors",
    collisionPadding,
    arrowPadding,
    sticky,
    disableAnchorTracking = false,
    collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
    style: styleProp,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const floatingRootContext = useComboboxFloatingContext();
  const keepMounted = useComboboxPortalContext();
  const modal = useStore(store, selectors2.modal);
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const openMethod = useStore(store, selectors2.openMethod);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const inputGroupElement = useStore(store, selectors2.inputGroupElement);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const empty = useListEmpty();
  const resolvedAnchor = anchor ?? (inputInsidePopup ? triggerElement : inputGroupElement ?? inputElement);
  const positioning = useAnchorPositioning({
    anchor: resolvedAnchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    lazyFlip: true
  });
  useAnchoredPopupScrollLock(open && modal, openMethod === "touch", positionerElement, triggerElement);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    empty
  };
  useIsoLayoutEffect(() => {
    store.set("popupSide", positioning.side);
  }, [store, positioning.side]);
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement],
    hidden: !mounted,
    inert: !open
  });
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ComboboxPositionerContext.Provider, {
    value: positioning,
    children: [mounted && modal && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(InternalBackdrop, {
      inert: inertValue(!open),
      cutout: inputGroupElement ?? inputElement ?? triggerElement
    }), element]
  });
});
if (true) ComboboxPositioner.displayName = "ComboboxPositioner";

// node_modules/@base-ui/react/combobox/popup/ComboboxPopup.mjs
var React64 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping2 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var ComboboxPopup = /* @__PURE__ */ React64.forwardRef(function ComboboxPopup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const positioning = useComboboxPositionerContext();
  const floatingRootContext = useComboboxFloatingContext();
  const mounted = useStore(store, selectors2.mounted);
  const open = useStore(store, selectors2.open);
  const openMethod = useStore(store, selectors2.openMethod);
  const popupProps = useStore(store, selectors2.popupProps);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const inputElement = useStore(store, selectors2.inputElement);
  const modal = useStore(store, selectors2.modal);
  const rootId = useStore(store, selectors2.id);
  const empty = useListEmpty();
  const popupId = elementProps.id ?? (inputInsidePopup ? getComboboxPopupId(rootId) : void 0);
  useIsoLayoutEffect(() => {
    store.set("popupId", store.state.popupRef.current?.id || popupId);
    return () => {
      store.set("popupId", void 0);
    };
  }, [store, popupId]);
  useOpenChangeComplete({
    open,
    ref: store.state.popupRef,
    onComplete() {
      if (open) {
        store.state.onOpenChangeComplete(true);
      }
    }
  });
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    transitionStatus,
    empty
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.state.popupRef],
    props: [popupProps, {
      id: popupId,
      role: inputInsidePopup ? "dialog" : "presentation",
      onFocus(event) {
        const target = getTarget(event.nativeEvent);
        if (openMethod !== "touch" && (contains(store.state.listElement, target) || target === event.currentTarget)) {
          store.state.inputRef.current?.focus();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping2
  });
  const computedDefaultInitialFocus = inputInsidePopup ? (interactionType) => interactionType === "touch" ? store.state.popupRef.current : inputElement : false;
  const resolvedInitialFocus = initialFocus === void 0 ? computedDefaultInitialFocus : initialFocus;
  let resolvedFinalFocus;
  if (finalFocus != null) {
    resolvedFinalFocus = finalFocus;
  } else {
    resolvedFinalFocus = inputInsidePopup ? void 0 : false;
  }
  const focusManagerModal = !inputInsidePopup || modal;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FloatingFocusManager, {
    context: floatingRootContext,
    disabled: !mounted,
    modal: focusManagerModal,
    openInteractionType: openMethod,
    initialFocus: resolvedInitialFocus,
    returnFocus: resolvedFinalFocus,
    getInsideElements: () => [store.state.startDismissRef.current, store.state.endDismissRef.current],
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(React64.Fragment, {
      children: [element, focusManagerModal && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ComboboxInternalDismissButton, {
        ref: store.state.endDismissRef
      })]
    })
  });
});
if (true) ComboboxPopup.displayName = "ComboboxPopup";

// node_modules/@base-ui/react/combobox/arrow/ComboboxArrow.mjs
var React65 = __toESM(require_react(), 1);
var ComboboxArrow = /* @__PURE__ */ React65.forwardRef(function ComboboxArrow2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useComboboxPositionerContext();
  const open = useStore(store, selectors2.open);
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  return useRenderElement("div", componentProps, {
    ref: [arrowRef, forwardedRef],
    stateAttributesMapping: popupStateMapping,
    state,
    props: {
      style: arrowStyles,
      "aria-hidden": true,
      ...elementProps
    }
  });
});
if (true) ComboboxArrow.displayName = "ComboboxArrow";

// node_modules/@base-ui/react/combobox/icon/ComboboxIcon.mjs
var React66 = __toESM(require_react(), 1);
var ComboboxIcon = /* @__PURE__ */ React66.forwardRef(function ComboboxIcon2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const element = useRenderElement("span", componentProps, {
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: "\u25BC"
    }, elementProps]
  });
  return element;
});
if (true) ComboboxIcon.displayName = "ComboboxIcon";

// node_modules/@base-ui/react/combobox/group/ComboboxGroup.mjs
var React68 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/combobox/group/ComboboxGroupContext.mjs
var React67 = __toESM(require_react(), 1);
var ComboboxGroupContext = /* @__PURE__ */ React67.createContext(void 0);
if (true) ComboboxGroupContext.displayName = "ComboboxGroupContext";
function useComboboxGroupContext() {
  const context = React67.useContext(ComboboxGroupContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ComboboxGroupContext is missing. ComboboxGroup parts must be placed within <Combobox.Group>." : formatErrorMessage_default(18));
  }
  return context;
}

// node_modules/@base-ui/react/combobox/group/ComboboxGroup.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var ComboboxGroup = /* @__PURE__ */ React68.forwardRef(function ComboboxGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    items,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React68.useState();
  const contextValue = React68.useMemo(() => ({
    labelId,
    setLabelId,
    items
  }), [labelId, setLabelId, items]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "group",
      "aria-labelledby": labelId
    }, elementProps]
  });
  const wrappedElement = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ComboboxGroupContext.Provider, {
    value: contextValue,
    children: element
  });
  if (items) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(GroupCollectionProvider, {
      items,
      children: wrappedElement
    });
  }
  return wrappedElement;
});
if (true) ComboboxGroup.displayName = "ComboboxGroup";

// node_modules/@base-ui/react/combobox/group-label/ComboboxGroupLabel.mjs
var React69 = __toESM(require_react(), 1);
var ComboboxGroupLabel = /* @__PURE__ */ React69.forwardRef(function ComboboxGroupLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setLabelId
  } = useComboboxGroupContext();
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => currentId === id ? void 0 : currentId);
    };
  }, [id, setLabelId]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) ComboboxGroupLabel.displayName = "ComboboxGroupLabel";

// node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs
var React73 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
var React70 = __toESM(require_react(), 1);
function useCompositeListItem(params = {}) {
  const {
    guess,
    label,
    metadata,
    textRef,
    index: externalIndex
  } = params;
  const {
    register: register2,
    unregister,
    subscribeMapChange,
    nextIndexRef
  } = useCompositeListContext();
  const indexRef = React70.useRef(-1);
  const [internalIndex, setInternalIndex] = React70.useState(externalIndex == null && guess ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1);
  const index = externalIndex ?? internalIndex;
  const componentRef = React70.useRef(null);
  const ref = React70.useCallback((node) => {
    const previousNode = componentRef.current;
    if (previousNode) {
      unregister(previousNode);
    }
    componentRef.current = node;
    if (node) {
      register2(node, {
        metadata: metadata ?? null,
        index: externalIndex ?? null,
        label,
        textRef
      });
    }
  }, [externalIndex, register2, unregister, metadata, label, textRef]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    return subscribeMapChange((map) => {
      const i2 = componentRef.current ? map.get(componentRef.current)?.index : null;
      if (i2 != null) {
        setInternalIndex(i2);
      }
    });
  }, [externalIndex, subscribeMapChange]);
  return {
    ref,
    index
  };
}

// node_modules/@base-ui/react/combobox/item/ComboboxItemContext.mjs
var React71 = __toESM(require_react(), 1);
var ComboboxItemContext = /* @__PURE__ */ React71.createContext(void 0);
if (true) ComboboxItemContext.displayName = "ComboboxItemContext";
function useComboboxItemContext() {
  const context = React71.useContext(ComboboxItemContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxItemContext is missing. ComboboxItem parts must be placed within <Combobox.Item>." : formatErrorMessage_default(19));
  }
  return context;
}

// node_modules/@base-ui/react/combobox/row/ComboboxRowContext.mjs
var React72 = __toESM(require_react(), 1);
var ComboboxRowContext = /* @__PURE__ */ React72.createContext(false);
if (true) ComboboxRowContext.displayName = "ComboboxRowContext";
function useComboboxRowContext() {
  return React72.useContext(ComboboxRowContext);
}

// node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function ComboboxItemInner(props) {
  const {
    componentProps,
    forwardedRef,
    virtualized,
    indexFromFilter
  } = props;
  const {
    render,
    className,
    style,
    value: itemValue = null,
    index: indexProp,
    disabled: disabledProp = false,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const textRef = React73.useRef(null);
  const listItem = useCompositeListItem({
    guess: true,
    index: indexProp,
    textRef
  });
  const store = useComboboxRootContext();
  const isRow = useComboboxRowContext();
  const hasItems = useComboboxHasItemsContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const rootDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const isItemEqualToValue = useStore(store, selectors2.isItemEqualToValue);
  const disabled2 = rootDisabled || disabledProp;
  const selectable = selectionMode !== "none";
  const index = indexProp ?? indexFromFilter ?? listItem.index;
  const hasRegistered = index !== -1;
  const rootId = useStore(store, selectors2.id);
  const highlighted = useStore(store, selectors2.isActive, index);
  const matchesSelectedValue = useStore(store, selectors2.isSelected, itemValue);
  const itemProps = useStore(store, selectors2.itemProps);
  const itemRef = React73.useRef(null);
  const id = rootId != null && hasRegistered ? `${rootId}-${index}` : void 0;
  const selected = matchesSelectedValue && selectable;
  useIsoLayoutEffect(() => {
    const shouldRun = hasRegistered && (virtualized || indexProp != null);
    if (!shouldRun) {
      return void 0;
    }
    const list = store.state.listRef.current;
    list[index] = itemRef.current;
    return () => {
      delete list[index];
    };
  }, [hasRegistered, virtualized, index, indexProp, store]);
  useIsoLayoutEffect(() => {
    if (!hasRegistered || hasItems) {
      return void 0;
    }
    const visibleMap = store.state.valuesRef.current;
    visibleMap[index] = itemValue;
    return () => {
      delete visibleMap[index];
    };
  }, [hasRegistered, hasItems, index, itemValue, store]);
  useIsoLayoutEffect(() => {
    if (!hasRegistered || hasItems) {
      return;
    }
    const selectedValue = store.state.selectedValue;
    const lastSelectedValue = Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
    if (compareItemEquality(itemValue, lastSelectedValue, isItemEqualToValue)) {
      store.set("selectedIndex", index);
    }
  }, [hasRegistered, hasItems, store, index, itemValue, isItemEqualToValue]);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const state = {
    disabled: disabled2,
    selected,
    highlighted
  };
  function commitSelection(nativeEvent) {
    function selectItem() {
      store.state.handleSelection(nativeEvent, itemValue);
    }
    if (store.state.submitOnItemClick) {
      ReactDOM4.flushSync(selectItem);
      store.state.requestSubmit();
    } else {
      selectItem();
    }
  }
  const defaultProps = {
    id,
    role: isRow ? "gridcell" : "option",
    "aria-selected": selectable ? selected : void 0,
    // Focusable items steal focus from the input upon mouseup.
    // Warn if the user renders a natively focusable element like `<button>`,
    // as it should be a `<div>` instead.
    tabIndex: void 0,
    onPointerDownCapture(event) {
      if (event.isPrimary) {
        store.state.pointerDownItemRef.current = event.currentTarget;
      }
      event.preventDefault();
    },
    onMouseDown(event) {
      event.preventDefault();
    },
    onClick(event) {
      if (disabled2 || readOnly) {
        return;
      }
      commitSelection(event.nativeEvent);
    },
    onMouseUp(event) {
      const pointerStartedOnItem = store.state.pointerDownItemRef.current === event.currentTarget;
      store.state.pointerDownItemRef.current = null;
      if (disabled2 || readOnly || event.button !== 0 || pointerStartedOnItem || !highlighted) {
        return;
      }
      commitSelection(event.nativeEvent);
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
    state,
    props: [itemProps, defaultProps, elementProps, getButtonProps]
  });
  const contextValue = React73.useMemo(() => ({
    selected,
    textRef
  }), [selected, textRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ComboboxItemContext.Provider, {
    value: contextValue,
    children: element
  });
}
function ComboboxItemVirtualizedIndex(props) {
  const {
    componentProps,
    forwardedRef
  } = props;
  const store = useComboboxRootContext();
  const isItemEqualToValue = useStore(store, selectors2.isItemEqualToValue);
  const {
    flatFilteredItems
  } = useComboboxDerivedItemsContext();
  const indexFromFilter = findItemIndex(flatFilteredItems, componentProps.value ?? null, isItemEqualToValue);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ComboboxItemInner, {
    componentProps,
    forwardedRef,
    virtualized: true,
    indexFromFilter
  });
}
var ComboboxItem = /* @__PURE__ */ React73.memo(/* @__PURE__ */ React73.forwardRef(function ComboboxItem2(componentProps, forwardedRef) {
  const store = useComboboxRootContext();
  const virtualized = useStore(store, selectors2.virtualized);
  if (virtualized && componentProps.index == null) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ComboboxItemVirtualizedIndex, {
      componentProps,
      forwardedRef
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ComboboxItemInner, {
    componentProps,
    forwardedRef,
    virtualized,
    indexFromFilter: void 0
  });
}));
if (true) ComboboxItem.displayName = "ComboboxItem";

// node_modules/@base-ui/react/combobox/item-indicator/ComboboxItemIndicator.mjs
var React74 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var ComboboxItemIndicator = /* @__PURE__ */ React74.forwardRef(function ComboboxItemIndicator2(componentProps, forwardedRef) {
  const {
    selected
  } = useComboboxItemContext();
  const shouldRender = componentProps.keepMounted || selected;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Inner, {
    ...componentProps,
    ref: forwardedRef
  });
});
if (true) ComboboxItemIndicator.displayName = "ComboboxItemIndicator";
var Inner = /* @__PURE__ */ React74.memo(/* @__PURE__ */ React74.forwardRef((componentProps, forwardedRef) => {
  const {
    render,
    className,
    style,
    keepMounted,
    ...elementProps
  } = componentProps;
  const {
    selected
  } = useComboboxItemContext();
  const indicatorRef = React74.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = useTransitionStatus(selected);
  const state = {
    selected,
    transitionStatus
  };
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: [{
      "aria-hidden": true,
      children: "\u2714\uFE0F"
    }, elementProps],
    stateAttributesMapping: transitionStatusMapping
  });
  useOpenChangeComplete({
    open: selected,
    ref: indicatorRef,
    onComplete() {
      if (!selected) {
        setMounted(false);
      }
    }
  });
  return element;
}));
if (true) Inner.displayName = "Inner";

// node_modules/@base-ui/react/combobox/chips/ComboboxChips.mjs
var React75 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var ComboboxChips = /* @__PURE__ */ React75.forwardRef(function ComboboxChips2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const open = useStore(store, selectors2.open);
  const hasSelectionChips = useStore(store, selectors2.hasSelectionChips);
  const [highlightedChipIndex, setHighlightedChipIndex] = React75.useState(void 0);
  if (open && highlightedChipIndex !== void 0) {
    setHighlightedChipIndex(void 0);
  }
  const chipsRef = React75.useRef([]);
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.state.chipsContainerRef],
    // NVDA enters browse mode instead of staying in focus mode when navigating with
    // arrow keys inside a container unless it has a toolbar role.
    props: [hasSelectionChips ? {
      role: "toolbar"
    } : EMPTY_OBJECT, {
      onMouseDown(event) {
        handleInputPress(event, store, store.state.disabled, store.state.readOnly);
      }
    }, elementProps]
  });
  const contextValue = React75.useMemo(() => ({
    highlightedChipIndex,
    setHighlightedChipIndex,
    chipsRef
  }), [highlightedChipIndex, setHighlightedChipIndex, chipsRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ComboboxChipsContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CompositeList, {
      elementsRef: chipsRef,
      children: element
    })
  });
});
if (true) ComboboxChips.displayName = "ComboboxChips";

// node_modules/@base-ui/react/combobox/chip/ComboboxChip.mjs
var React77 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/combobox/chip/ComboboxChipContext.mjs
var React76 = __toESM(require_react(), 1);
var ComboboxChipContext = /* @__PURE__ */ React76.createContext(void 0);
if (true) ComboboxChipContext.displayName = "ComboboxChipContext";
function useComboboxChipContext() {
  const context = React76.useContext(ComboboxChipContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxChipContext is missing. ComboboxChip parts must be placed within <Combobox.Chip>." : formatErrorMessage_default(17));
  }
  return context;
}

// node_modules/@base-ui/react/combobox/chip/ComboboxChip.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var ComboboxChip = /* @__PURE__ */ React77.forwardRef(function ComboboxChip2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    setHighlightedChipIndex,
    chipsRef
  } = useComboboxChipsContext();
  const direction = useDirection();
  const disabled2 = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const {
    ref,
    index
  } = useCompositeListItem();
  function handleKeyDown(event) {
    let nextIndex = index;
    const [previousChipKey, nextChipKey] = getChipNavigationKeys(direction);
    if (event.key === previousChipKey) {
      event.preventDefault();
      if (index > 0) {
        nextIndex = index - 1;
      } else {
        nextIndex = void 0;
      }
    } else if (event.key === nextChipKey) {
      event.preventDefault();
      if (index < chipsRef.current.length - 1) {
        nextIndex = index + 1;
      } else {
        nextIndex = void 0;
      }
    } else if (event.key === "Backspace" || event.key === "Delete") {
      nextIndex = getIndexAfterChipRemoval(index, selectedValue.length);
      stopEvent(event);
      store.state.setIndices({
        activeIndex: null,
        selectedIndex: null,
        type: reason_parts_exports.keyboard
      });
      store.state.setSelectedValue(selectedValue.filter((_, i2) => i2 !== index), createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
    } else if (event.key === "Enter" || event.key === " ") {
      stopEvent(event);
      nextIndex = void 0;
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      stopEvent(event);
      store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
      nextIndex = void 0;
    } else if (
      // Check for printable characters (letters, numbers, symbols)
      event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey
    ) {
      nextIndex = void 0;
    }
    return nextIndex;
  }
  const state = {
    disabled: disabled2
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, ref],
    state,
    props: [{
      tabIndex: -1,
      "aria-disabled": disabled2 || void 0,
      "aria-readonly": readOnly || void 0,
      onKeyDown(event) {
        if (disabled2 || readOnly) {
          return;
        }
        const nextIndex = handleKeyDown(event);
        ReactDOM5.flushSync(() => {
          setHighlightedChipIndex(nextIndex);
        });
        if (nextIndex === void 0) {
          store.state.inputRef.current?.focus();
        } else {
          chipsRef.current[nextIndex]?.focus();
        }
      }
    }, elementProps]
  });
  const contextValue = React77.useMemo(() => ({
    index
  }), [index]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ComboboxChipContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ComboboxChip.displayName = "ComboboxChip";

// node_modules/@base-ui/react/combobox/chip-remove/ComboboxChipRemove.mjs
var React78 = __toESM(require_react(), 1);
var ComboboxChipRemove = /* @__PURE__ */ React78.forwardRef(function ComboboxChipRemove2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    index
  } = useComboboxChipContext();
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const isItemEqualToValue = useStore(store, selectors2.isItemEqualToValue);
  const disabled2 = comboboxDisabled || disabledProp;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled: disabled2 || readOnly,
    focusableWhenDisabled: true
  });
  const state = {
    disabled: disabled2
  };
  function clearActiveIndexForRemovedItem(removedItem) {
    const activeIndex = store.state.activeIndex;
    if (activeIndex == null) {
      return;
    }
    const removedIndex = findItemIndex(store.state.valuesRef.current, removedItem, isItemEqualToValue);
    if (removedIndex !== -1 && activeIndex === removedIndex) {
      store.state.setIndices({
        activeIndex: null,
        type: store.state.keyboardActiveRef.current ? reason_parts_exports.keyboard : reason_parts_exports.pointer
      });
    }
  }
  function removeChip(event) {
    const eventDetails = createChangeEventDetails(reason_parts_exports.chipRemovePress, event.nativeEvent);
    const removedItem = selectedValue[index];
    clearActiveIndexForRemovedItem(removedItem);
    store.state.setSelectedValue(selectedValue.filter((_, i2) => i2 !== index), eventDetails);
    store.state.inputRef.current?.focus();
    return eventDetails;
  }
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [{
      tabIndex: -1,
      onMouseDown(event) {
        event.preventDefault();
      },
      onClick(event) {
        const eventDetails = removeChip(event);
        if (!eventDetails.isPropagationAllowed) {
          event.stopPropagation();
        }
      },
      onKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
          const eventDetails = removeChip(event);
          if (!eventDetails.isPropagationAllowed) {
            stopEvent(event);
          }
        }
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) ComboboxChipRemove.displayName = "ComboboxChipRemove";

// node_modules/@base-ui/react/combobox/row/ComboboxRow.mjs
var React79 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var ComboboxRow = /* @__PURE__ */ React79.forwardRef(function ComboboxRow2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "row"
    }, elementProps]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ComboboxRowContext.Provider, {
    value: true,
    children: element
  });
});
if (true) ComboboxRow.displayName = "ComboboxRow";

// node_modules/@base-ui/react/combobox/empty/ComboboxEmpty.mjs
var React80 = __toESM(require_react(), 1);
var ComboboxEmpty = /* @__PURE__ */ React80.forwardRef(function ComboboxEmpty2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const store = useComboboxRootContext();
  const emptyRef = useInitialLiveRegionTextMutation();
  const children = filteredItems.length === 0 ? childrenProp : null;
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.state.emptyRef, emptyRef],
    props: [{
      children,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": true
    }, elementProps]
  });
});
if (true) ComboboxEmpty.displayName = "ComboboxEmpty";

// node_modules/@base-ui/react/combobox/clear/ComboboxClear.mjs
var React81 = __toESM(require_react(), 1);
var stateAttributesMapping3 = {
  ...transitionStatusMapping,
  ...triggerOpenStateMapping
};
var ComboboxClear = /* @__PURE__ */ React81.forwardRef(function ComboboxClear2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    keepMounted = false,
    style,
    ...elementProps
  } = componentProps;
  const {
    disabled: fieldDisabled
  } = useFieldRootContext();
  const store = useComboboxRootContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const open = useStore(store, selectors2.open);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const hasSelectionChips = useStore(store, selectors2.hasSelectionChips);
  const inputValue = useComboboxInputValueContext();
  let visible = false;
  if (selectionMode === "none") {
    visible = inputValue !== "";
  } else if (selectionMode === "single") {
    visible = selectedValue != null;
  } else {
    visible = hasSelectionChips;
  }
  const disabled2 = fieldDisabled || comboboxDisabled || disabledProp;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled: disabled2
  });
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(visible);
  const state = {
    disabled: disabled2,
    visible,
    open,
    transitionStatus
  };
  useOpenChangeComplete({
    open: visible,
    ref: store.state.clearRef,
    onComplete() {
      if (!visible) {
        setMounted(false);
      }
    }
  });
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef, store.state.clearRef],
    props: [{
      tabIndex: -1,
      children: "x",
      // Avoid stealing focus from the input.
      onMouseDown(event) {
        event.preventDefault();
      },
      onClick(event) {
        if (disabled2 || readOnly) {
          return;
        }
        const type = store.state.keyboardActiveRef.current ? reason_parts_exports.keyboard : reason_parts_exports.pointer;
        store.state.setInputValue("", createChangeEventDetails(reason_parts_exports.clearPress, event.nativeEvent));
        if (selectionMode !== "none") {
          store.state.setSelectedValue(Array.isArray(selectedValue) ? [] : null, createChangeEventDetails(reason_parts_exports.clearPress, event.nativeEvent));
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type
          });
        } else {
          store.state.setIndices({
            activeIndex: null,
            type
          });
        }
        store.state.inputRef.current?.focus();
      }
    }, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping3
  });
  const shouldRender = keepMounted || mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) ComboboxClear.displayName = "ComboboxClear";

// node_modules/@base-ui/react/utils/listbox-separator/ListboxSeparator.mjs
var React82 = __toESM(require_react(), 1);
var ListboxSeparator = /* @__PURE__ */ React82.forwardRef(function ListboxSeparator2(componentProps, forwardedRef) {
  const {
    className,
    render,
    orientation = "horizontal",
    style,
    ...elementProps
  } = componentProps;
  const state = {
    orientation
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "presentation"
    }, elementProps]
  });
});
if (true) ListboxSeparator.displayName = "ListboxSeparator";

// node_modules/@base-ui/react/combobox/separator/ComboboxSeparator.mjs
var ComboboxSeparator = ListboxSeparator;

// node_modules/@base-ui/react/combobox/root/utils/useFilteredItems.mjs
function useFilteredItems() {
  const items = useComboboxDerivedItemsContext();
  return items.filteredItems;
}

// node_modules/@privy-io/react-auth/dist/esm/FiatOnrampScreen-9mT5Hieh.mjs
import "viem";
import "viem/utils";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
import "viem/chains";
var de = (e2) => {
  wl({ amount: e2, localQuotes: [], localSelectedQuote: null, quotesWarning: null, quotesErrors: null, isLoading: true });
  let { opts: t6 } = fl();
  Ml(e2, t6);
};
var ue = async () => {
  let { error: e2, state: t6, onFailure: r2, onSuccess: o2 } = fl();
  vl(), Al();
  let i2 = ((e3, t7) => t7 ? { type: "failure", error: t7 } : "provider-success" === e3.status ? { type: "success", value: { status: "confirmed" } } : "provider-confirming" === e3.status ? { type: "success", value: { status: "submitted" } } : { type: "failure", error: Error("User exited flow") })(t6, e2);
  "success" === i2.type ? await o2(i2.value) : r2(i2.error);
};
var me = async (e2, { environment: t6 }) => (await e2.fetchPrivyRoute(Ue, { query: { environment: t6 } })).data;
var pe = (e2, t6, r2 = "us", o2) => {
  if ("eu" === r2) return ye(t6, o2);
  let i2 = (e3) => t6.includes(e3), n2 = i2("first_name") && i2("last_name"), a = i2("address_line_1") && i2("address_city") && i2("address_state") && i2("address_postal_code"), s2 = i2("dob"), l = i2("id_number");
  return "l0" === e2 ? n2 ? a ? null : "collect-address" : "collect-name" : n2 ? s2 ? l ? a ? null : "collect-address" : "collect-ssn" : "collect-dob" : "collect-name";
};
var ye = (e2, t6) => {
  let r2 = (t7) => e2.includes(t7);
  if ("pending" !== t6 && "verified" !== t6 && "rejected" !== t6) {
    if (!r2("first_name") || !r2("last_name")) return "collect-name";
    if (!r2("dob")) return "collect-dob";
    if (!r2("nationalities")) return "collect-nationality";
    if (!r2("birth_city") || !r2("birth_country")) return "collect-birth-location";
    if (!r2("address_line_1")) return "collect-address";
  }
  return r2("identifiers") ? r2("attestation") ? "verified" !== t6 ? "verify-documents" : null : "eu-attestation" : "collect-identifiers";
};
var he = (e2) => {
  let t6 = ["collect-name", "collect-dob", "collect-nationality", "collect-birth-location", "collect-address", "collect-identifiers", "eu-attestation", "verify-documents", "select-payment"], r2 = t6.indexOf(e2);
  return -1 === r2 ? "select-payment" : t6[r2 + 1] ?? "select-payment";
};
var fe = (e2) => e2?.find(((e3) => "l2" === e3.tier))?.verification_status;
var ge = (e2) => e2?.find(((e3) => "l2" === e3.tier && "rejected" === e3.verification_status))?.verification_errors?.includes("user_has_reached_max_verification_attempts") ?? false;
var ve = (e2) => e2.replace(/[\s/-]/g, "").toUpperCase();
var be = (e2) => ve(e2).split("").map(Number);
var Ce = (e2, t6, r2) => Number(e2.slice(t6, r2));
var we = (e2, t6, r2) => e2 >= t6 && e2 <= r2;
var ke = (e2) => we(e2, 1, 12);
var _e = (e2) => we(e2, 1, 31);
var xe = (e2) => Math.floor(e2 / 10) + e2 % 10;
var Se = (e2, t6, r2) => {
  let o2 = be(e2);
  return r2(t6.reduce(((e3, t7, r3) => e3 + o2[r3] * t7), 0)) === o2[t6.length];
};
var Ee = (e2) => {
  let t6 = be(e2), r2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1].reduce(((e3, r3, o3) => e3 + t6[o3] * r3), 0), o2 = r2 % 11;
  return 10 === o2 && 10 == (o2 = (r2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3].reduce(((e3, r3, o3) => e3 + t6[o3] * r3), 0)) % 11) && (o2 = 0), o2 === t6[10];
};
var Ae = (e2, t6) => {
  let r2 = be(e2);
  return (10 - t6.reduce(((e3, t7, o2) => e3 + xe(r2[o2] * t7)), 0) % 10) % 10 === r2[t6.length];
};
var Pe = { at_stn: (e2) => {
  let t6 = ve(e2);
  return /^\d{9}$/.test(t6) && Ae(t6, [1, 2, 1, 2, 1, 2, 1, 2]);
}, be_nrn: (e2) => {
  let t6 = ve(e2);
  if (!/^\d{11}$/.test(t6) || !ke(Ce(t6, 2, 4)) || !_e(Ce(t6, 4, 6))) return false;
  let r2 = Number(t6.slice(0, 9)), o2 = Ce(t6, 9, 11);
  return 97 - r2 % 97 === o2 || 97 - Number(`2${t6.slice(0, 9)}`) % 97 === o2;
}, bg_ucn: (e2) => {
  let t6 = ve(e2), r2 = Ce(t6, 2, 4);
  return /^\d{10}$/.test(t6) && (we(r2, 1, 12) || we(r2, 21, 32) || we(r2, 41, 52)) && _e(Ce(t6, 4, 6)) && Se(t6, [2, 4, 8, 5, 10, 9, 7, 3, 6], ((e3) => e3 % 11 == 10 ? 0 : e3 % 11));
}, hr_oib: (e2) => /^\d{11}$/.test(ve(e2)) && ((e3) => {
  let t6 = be(e3), r2 = 10;
  for (let e4 = 0; e4 < 10; e4++) {
    let o3 = (t6[e4] + r2) % 10;
    0 === o3 && (o3 = 10), r2 = 2 * o3 % 11;
  }
  let o2 = 11 - r2;
  return 10 === o2 && (o2 = 0), o2 === t6[10];
})(ve(e2)), cy_tic: (e2) => {
  let t6 = ve(e2);
  if (!/^[069]\d{7}[A-Z]$/.test(t6)) return false;
  let r2 = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 };
  return String.fromCharCode(65 + ([0, 2, 4, 6].reduce(((e3, o2) => e3 + r2[t6[o2]]), 0) + [1, 3, 5, 7].reduce(((e3, r3) => e3 + Number(t6[r3])), 0)) % 26) === t6[8];
}, cz_rc: (e2) => {
  let t6 = ve(e2), r2 = Ce(t6, 2, 4);
  return /^\d{9,10}$/.test(t6) && (we(r2, 1, 12) || we(r2, 51, 62) || 10 === t6.length && (we(r2, 21, 32) || we(r2, 71, 82))) && _e(Ce(t6, 4, 6));
}, dk_cpr: (e2) => {
  let t6 = ve(e2);
  return /^\d{10}$/.test(t6) && _e(Ce(t6, 0, 2)) && ke(Ce(t6, 2, 4)) && Se(t6, [4, 3, 2, 7, 6, 5, 4, 3, 2], ((e3) => {
    let t7 = e3 % 11;
    return 1 === t7 ? -1 : 0 === t7 ? 0 : 11 - t7;
  }));
}, ee_ik: (e2) => {
  let t6 = ve(e2);
  return /^\d{11}$/.test(t6) && we(Ce(t6, 0, 1), 1, 6) && ke(Ce(t6, 3, 5)) && _e(Ce(t6, 5, 7)) && we(Ce(t6, 7, 10), 1, 710) && Ee(t6);
}, es_nif: (e2) => {
  let t6 = ve(e2);
  return !!/^([KLMXYZ]?\d{7}[A-Z]|\d{8}[A-Z])$/.test(t6) && "TRWAGMYFPDXBNJZSQVHLCKE"[Number(/^\d/.test(t6) ? t6.slice(0, 8) : `${{ X: "0", Y: "1", Z: "2", K: "0", L: "0", M: "0" }[t6[0]]}${t6.slice(1, 8)}`) % 23] === t6[8];
}, fi_hetu: (e2) => {
  let t6 = e2.replace(/\s/g, "").toUpperCase();
  return !!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[+\-A-FU-Y]\d{3}[A-Z0-9]$/.test(t6) && "0123456789ABCDEFHJKLMNPRSTUVWXY"[Number(`${t6.slice(0, 6)}${t6.slice(7, 10)}`) % 31] === t6[10];
}, fr_nir: (e2) => {
  let t6 = ve(e2);
  return /^[0-3]\d{12}$/.test(t6) && String(Number(t6.slice(0, 10)) % 511).padStart(3, "0") === t6.slice(10);
}, fr_spi: (e2) => {
  let t6 = ve(e2);
  return /^[0-3]\d{12}$/.test(t6) && String(Number(t6.slice(0, 10)) % 511).padStart(3, "0") === t6.slice(10);
}, de_stn: (e2) => {
  let t6 = ve(e2);
  if (/^\d{13}$/.test(t6)) return "0" === t6[4];
  if (!/^\d{11}$/.test(t6) || "0" === t6[0] || /(\d)\1\1/.test(t6) || ![...new Set(t6.slice(0, 10))].map(((e3) => t6.slice(0, 10).split(e3).length - 1)).some(((e3) => 2 === e3 || 3 === e3))) return false;
  let r2 = be(t6), o2 = 10;
  for (let e3 = 0; e3 < 10; e3++) {
    let t7 = (r2[e3] + o2) % 10;
    0 === t7 && (t7 = 10), o2 = 2 * t7 % 11;
  }
  return (11 - o2 == 10 ? 0 : 11 - o2) === r2[10];
}, gr_afm: (e2) => /^\d{9}$/.test(ve(e2)), hu_ad: (e2) => /^8\d{9}$/.test(ve(e2)) && Se(ve(e2), [1, 2, 3, 4, 5, 6, 7, 8, 9], ((e3) => e3 % 11)), ie_ppsn: (e2) => {
  let t6 = ve(e2);
  if (!/^\d{7}[A-W][A-IW]?$/.test(t6)) return false;
  let r2 = (9 * (9 === t6.length ? "W" === t6[8] ? 0 : t6.charCodeAt(8) - 64 : 0) + [8, 7, 6, 5, 4, 3, 2].reduce(((e3, r3, o2) => e3 + Number(t6[o2]) * r3), 0)) % 23;
  return (0 === r2 ? "W" : String.fromCharCode(64 + r2)) === t6[7];
}, is_kt: (e2) => {
  let t6 = ve(e2);
  return /^\d{10}$/.test(t6) && _e(Ce(t6, 0, 2)) && ke(Ce(t6, 2, 4)) && ("9" === t6[9] || "0" === t6[9]);
}, it_cf: (e2) => {
  let t6 = ve(e2);
  if (!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(t6) || !"ABCDEHLMPRST".includes(t6[8]) || ![...Array(31).keys()].some(((e3) => Ce(t6, 9, 11) === e3 + 1 || Ce(t6, 9, 11) === e3 + 41))) return false;
  let r2 = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21, A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21, K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14, U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23 }, o2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce(((e3, t7, r3) => ({ ...e3, [t7]: r3 < 10 ? r3 : r3 - 10 })), {});
  return String.fromCharCode(65 + t6.slice(0, 15).split("").reduce(((e3, t7, i2) => e3 + ((i2 + 1) % 2 ? r2[t7] : o2[t7])), 0) % 26) === t6[15];
}, lv_pk: (e2) => {
  let t6 = ve(e2);
  return /^(0[1-9]|[12]\d|3[01])(0[0-9]|1[0-2])\d{7}$|^32\d{9}$/.test(t6) && (t6.startsWith("32") || ["0", "1", "2"].includes(t6[6]));
}, lt_ak: (e2) => {
  let t6 = ve(e2);
  return /^\d{11}$/.test(t6) && we(Ce(t6, 0, 1), 1, 6) && ke(Ce(t6, 3, 5)) && _e(Ce(t6, 5, 7)) && Ee(t6);
}, lu_nif: (e2) => {
  let t6 = ve(e2);
  return !!(/^\d{13}$/.test(t6) && we(Ce(t6, 0, 4), 1800, 2100) && ke(Ce(t6, 4, 6)) && _e(Ce(t6, 6, 8))) && [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1].reduce(((e3, r2, o2) => e3 + xe(Number(t6[o2]) * r2)), 0) % 10 == 0 && ((e3) => {
    let t7 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], r2 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], o2 = 0, i2 = be(e3).reverse();
    for (let e4 = 0; e4 < i2.length; e4++) o2 = t7[o2][r2[e4 % 8][i2[e4]]];
    return 0 === o2;
  })(`${t6.slice(0, 11)}${t6[12]}`);
}, mt_nic: (e2) => {
  let t6 = ve(e2);
  return /^\d{7}[MGAPLHBZ]$/.test(t6) || /^\d{9}$/.test(t6) && ["11", "22", "33", "44", "55", "66", "77", "88"].includes(t6.slice(0, 2));
}, mt_pp: (e2) => /^\d{7}$/.test(ve(e2)), nl_bsn: (e2) => /^\d{9}$/.test(ve(e2)) && Se(ve(e2), [9, 8, 7, 6, 5, 4, 3, 2], ((e3) => e3 % 11 == 10 ? -1 : e3 % 11)), pl_nip: (e2) => /^\d{10}$/.test(ve(e2)) && Se(ve(e2), [6, 5, 7, 2, 3, 4, 5, 6, 7], ((e3) => e3 % 11 == 10 ? -1 : e3 % 11)), pl_pesel: (e2) => {
  let t6 = ve(e2), r2 = Ce(t6, 2, 4);
  return /^\d{11}$/.test(t6) && (ke(r2) || we(r2, 21, 32) || we(r2, 41, 52) || we(r2, 61, 72) || we(r2, 81, 92)) && _e(Ce(t6, 4, 6)) && Se(t6, [1, 3, 7, 9, 1, 3, 7, 9, 1, 3], ((e3) => (10 - e3 % 10) % 10));
}, pt_nif: (e2) => /^\d{9}$/.test(ve(e2)) && Se(ve(e2), [9, 8, 7, 6, 5, 4, 3, 2], ((e3) => {
  let t6 = 11 - e3 % 11;
  return t6 >= 10 ? 0 : t6;
})), ro_cnp: (e2) => {
  let t6 = ve(e2), r2 = Ce(t6, 7, 9), o2 = "9" === t6[0] && "000" === t6.slice(1, 4);
  return /^\d{13}$/.test(t6) && we(Ce(t6, 0, 1), 1, 9) && (o2 || ke(Ce(t6, 3, 5)) && _e(Ce(t6, 5, 7))) && (we(r2, 1, 47) || 51 === r2 || 52 === r2) && Se(t6, [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], ((e3) => e3 % 11 == 10 ? 1 : e3 % 11));
}, sk_rc: (e2) => {
  let t6 = ve(e2), r2 = Ce(t6, 2, 4);
  return /^\d{9,10}$/.test(t6) && (ke(r2) || we(r2, 51, 62)) && _e(Ce(t6, 4, 6));
}, si_pin: (e2) => {
  let t6 = ve(e2);
  return /^\d{8}$/.test(t6) && we(Ce(t6, 0, 7), 1e6, 9999999) && Se(t6, [8, 7, 6, 5, 4, 3, 2], ((e3) => {
    let t7 = 11 - e3 % 11;
    return 10 === t7 ? 0 : 11 === t7 ? -1 : t7;
  }));
}, se_pin: (e2) => {
  let t6 = ve(e2);
  if (!/^\d{10}$|^\d{12}$/.test(t6)) return false;
  if (12 === t6.length) {
    if (!["18", "19", "20"].includes(t6.slice(0, 2))) return false;
    t6 = t6.slice(2);
  }
  let r2 = Ce(t6, 4, 6);
  return ke(Ce(t6, 2, 4)) && (_e(r2) || we(r2, 61, 91)) && Ae(t6, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
} };
var Ie = { ee_ik: "39901011231", es_nif: "00000000T", is_kt: "0101000000", it_cf: "AAAAAA00A01A000H", mt_nic: "0000000M", mt_pp: "0000000", pl_pesel: "44051401458", pl_nip: "8567346215" };
var Le = { at_stn: "Steuernummer (Austria)", be_nrn: "National Registration Number (Belgium)", bg_ucn: "Unified Civil Number (Bulgaria)", hr_oib: "OIB (Croatia)", cy_tic: "Tax Identification Code (Cyprus)", cz_rc: "Rodn\xE9 \u010D\xEDslo (Czech Republic)", dk_cpr: "CPR (Denmark)", ee_ik: "Isikukood (Estonia)", es_nif: "NIF (Spain)", fi_hetu: "HETU (Finland)", fr_spi: "Num\xE9ro fiscal (France)", fr_nir: "NIR (France)", de_stn: "Steuer-ID (Germany)", gr_afm: "AFM (Greece)", hu_ad: "Ad\xF3azonos\xEDt\xF3 (Hungary)", ie_ppsn: "PPSN (Ireland)", is_kt: "Kennitala (Iceland)", it_cf: "Codice fiscale (Italy)", lv_pk: "Personas kods (Latvia)", lt_ak: "Asmens kodas (Lithuania)", lu_nif: "NIF (Luxembourg)", mt_nic: "National Identity Card (Malta)", mt_pp: "Passport (Malta)", nl_bsn: "BSN (Netherlands)", pl_pesel: "PESEL (Poland)", pl_nip: "NIP (Poland)", pt_nif: "NIF (Portugal)", ro_cnp: "CNP (Romania)", sk_rc: "Rodn\xE9 \u010D\xEDslo (Slovakia)", si_pin: "EM\u0160O (Slovenia)", se_pin: "Personnummer (Sweden)" };
var Te = () => {
  let e2 = fl().stripeSession;
  if (!e2) throw Error("No active Stripe onramp session");
  return e2;
};
var $e = () => {
  let { stripeSession: e2, controller: t6 } = fl();
  return null !== e2 && !(t6.current?.signal.aborted ?? 1);
};
var Ne = () => {
  let { controller: e2 } = fl();
  if (!e2.current) throw Error("No active abort controller");
  return e2.current.signal;
};
var Re = async () => {
  let e2 = Te().onramp;
  if (!e2.getMissingIdentifiers) throw Error("Stripe onramp getMissingIdentifiers is unavailable");
  let t6 = await e2.getMissingIdentifiers();
  if (!$e()) return false;
  let r2 = Te();
  return wl({ stripeSession: { ...r2, context: { ...r2.context, kycMissingIdentifiers: t6.identifiers, kycMissingAlternatives: t6.alternatives } } }), (({ identifiers: e3 }) => e3.length > 0)(t6);
};
var Me = ({ stripeKycRegion: e2, sourceCurrency: t6 }) => {
  if ("eu" === e2 || "us" === e2) return e2;
  let r2 = t6.toUpperCase();
  if ("EUR" === r2) return "eu";
  if ("USD" === r2) return "us";
  throw Error(`Unsupported source currency for Stripe onramp: ${r2}`);
};
var Fe = (e2) => ({ providedFields: "active" === e2.status ? e2.provided_fields : [], kycTiers: "active" === e2.status ? e2.kyc_tiers : void 0 });
var De = ({ customer: e2, region: t6 }) => "active" === e2.status && ("eu" === t6 ? ((e3, t7) => "verified" === t7 && e3.includes("identifiers") && e3.includes("attestation"))(e2.provided_fields, fe(e2.kyc_tiers)) : e2.verifications.some(((e3) => "verified" === e3.status)));
var Be = async ({ customer: e2, region: t6, tier: r2 = "l0" }) => {
  let { providedFields: o2, kycTiers: i2 } = Fe(e2);
  if ("eu" !== t6) return pe(r2, o2, t6);
  if (ge(i2)) throw Error("Document verification was rejected. Contact Stripe support for help.");
  let n2 = (({ kycTiers: e3, providedFields: t7 }) => {
    let r3 = fe(e3);
    return ye(t7, r3);
  })({ kycTiers: i2, providedFields: o2 });
  return "collect-identifiers" !== n2 || await Re() || (n2 = he("collect-identifiers")), n2;
};
var je = (e2) => e2 ? "privyErrorCode" in e2 && "string" == typeof e2.privyErrorCode ? e2.privyErrorCode : "code" in e2 && "string" == typeof e2.code ? e2.code : null : null;
var Ue2 = ({ eventType: e2, error: t6, errorCode: r2, attempt: o2, context: i2, stripeSessionId: n2 }) => {
  let a = pl.getState();
  if (!a) return;
  let s2 = a.stripeSession, l = i2 ?? s2?.context.config;
  l && a.privy.track({ name: "stripe_onramp_client_operation", properties: { event_type: e2, error_code: r2 ?? je(t6 instanceof Error ? t6 : null), privy_session_id: l.sessionId, stripe_session_id: n2 ?? s2?.context.stripeSessionId, source_currency: a.opts.source.selectedAsset.toLowerCase(), destination_currency: a.opts.destination.asset.toLowerCase(), destination_network: l.network, environment: l.environment, ...void 0 === o2 ? {} : { attempt: o2 } } });
};
var qe2 = (e2) => (e2 instanceof Error ? e2.message : String(e2)).toLowerCase().includes("user is not authenticated");
var ze = (e2, t6 = "flow_failed") => {
  let r2 = e2 instanceof Error ? e2 : Error(String(e2));
  if (console.error("[FiatOnramp:Stripe]", r2), qe2(r2)) return Ue2({ eventType: "link_auth_error", error: r2 }), void wl({ state: { status: "stripe-flow", step: "choose-email" }, error: null, stripeElement: null, isLoading: false });
  Ue2({ eventType: t6, error: r2 }), wl({ state: { status: "provider-error" }, error: r2, isLoading: false });
};
var Ve2 = { path: "/api/v1/onramp/stripe/transaction_limits", method: "GET" };
var Oe = async () => {
  let e2 = Te(), { opts: t6, amount: r2 } = fl(), o2 = Ke2(r2);
  try {
    let r3 = await (async (e3, t7) => await e3.fetchPrivyRoute(Ve2, { query: { environment: t7.environment, destination_chain: t7.destinationChain, wallet_address: t7.walletAddress } }))(e2.privy, { environment: e2.context.config.environment, destinationChain: t6.destination.chain, walletAddress: t6.destination.address }), i2 = Ye({ limits: r3, sourceCurrency: t6.source.selectedAsset });
    return null === i2 || o2 <= i2;
  } catch {
    return true;
  }
};
var Ke2 = (e2) => {
  let t6 = e2.trim();
  if (!/^\d+(?:\.\d*)?$/.test(t6)) throw Error("Enter a valid amount and try again.");
  let r2 = Number.parseFloat(t6);
  if (!Number.isFinite(r2)) throw Error("Enter a valid amount and try again.");
  return r2;
};
var Ye = ({ limits: e2, sourceCurrency: t6 }) => {
  let r2 = Object.values(e2.limits[`${t6.toLowerCase()}.fiat`] ?? {}).flat();
  return r2.length ? Math.max(...r2.map(((e3) => e3.limit))) : null;
};
var He2 = async ({ customer: e2, loader: t6, tier: r2 }) => {
  if (!$e()) return;
  let { providedFields: o2 } = Fe(e2), n2 = Te(), a = n2.context.kycRegion ?? "us", s2 = r2 ?? (({ customer: e3, region: t7 }) => {
    if ("active" !== e3.status) return null;
    if ("eu" === t7) return De({ customer: e3, region: t7 }) ? null : "l2";
    let r3 = (t8) => e3.kyc_tiers?.some(((e4) => e4.tier === t8 && "verified" === e4.verification_status));
    return r3("l2") ? null : r3("l1") ? "l2" : r3("l0") ? "l1" : "l0";
  })({ customer: e2, region: a });
  if (!s2) throw new s("Checkout failed: transaction_limit_reached", void 0, i.ONRAMP_TRANSACTION_LIMIT_REACHED);
  if ("eu" === a) {
    let r3 = await Be({ customer: e2, region: a });
    if (!$e()) return;
    if (!r3) throw Error("Stripe could not continue identity verification. Try again.");
    return void wl({ stripeSession: { ...n2 = Te(), context: { ...n2.context, ...t6 ? { documentVerificationAction: { type: "retry-payment", loader: t6 } } : {}, kycTier: s2, kycProvidedFields: o2 } }, state: { status: "stripe-flow", step: r3 }, isLoading: false });
  }
  let l = await Be({ customer: e2, region: a, tier: s2 });
  if (!$e()) return;
  let c2 = { ...(n2 = Te()).context, ..."l2" === s2 && t6 ? { documentVerificationAction: { type: "retry-payment", loader: t6 } } : {}, kycTier: s2, kycProvidedFields: o2 };
  if (l) wl({ stripeSession: { ...n2, context: c2 }, state: { status: "stripe-flow", step: l }, isLoading: false });
  else {
    if ("l2" !== s2) throw Error("Stripe could not continue identity verification. Try again.");
    wl({ stripeSession: { ...n2, context: c2 }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
  }
};
var We2 = async (e2, { environment: t6 }) => (await e2.fetchPrivyRoute(Ge, { query: { environment: t6 } })).data;
var Qe = ["aptos", "avalanche", "arbitrum", "base", "bitcoin", "ethereum", "optimism", "polygon", "solana", "stellar", "sui", "tempo", "worldchain", "xrpl"];
var Ze = 2e3;
var Ge2 = (e2) => {
  if (((e3) => Qe.some(((t6) => t6 === e3)))(e2)) return e2;
  throw Error(`Unsupported Stripe onramp network: ${e2}`);
};
var Xe = async (e2, t6) => await e2.fetchPrivyRoute(Ke, { body: { session_id: t6.sessionId, environment: t6.environment, session: t6.session } });
var Je2 = (e2) => {
  let t6 = et(e2?.source_currency?.toLowerCase());
  return { currencySymbol: t6, paymentMethodLabel: null, fee: e2?.fee && t6 ? `${t6}${e2.fee}` : null, destinationAmount: tt(e2?.destination_amount), destinationToken: e2?.destination_currency?.toUpperCase() ?? null, destinationNetwork: rt(e2?.destination_network), sourceAmount: e2?.source_total_amount ?? null, quoteExpiresAt: e2?.quote_expiration ?? null };
};
var et = (e2) => "usd" === e2 ? "$" : "eur" === e2 ? "\u20AC" : "gbp" === e2 ? "\xA3" : null;
var tt = (e2) => e2 ? e2.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1") : null;
var rt = (e2) => e2 ? e2.split(/[-_]/).map(((e3) => `${e3.slice(0, 1).toUpperCase()}${e3.slice(1)}`)).join(" ") : null;
var ot = (e2) => {
  let t6 = nt(e2);
  if (t6 === i.ONRAMP_MINIMUM_IDENTITY_VERIFICATION_REQUIRED) return "l0";
  if (t6 === i.ONRAMP_IDENTITY_VERIFICATION_REQUIRED) return "l1";
  if (t6 === i.ONRAMP_DOCUMENT_VERIFICATION_REQUIRED) return "l2";
  if ("crypto_onramp_missing_minimum_identity_verification" === t6) return "l0";
  if ("crypto_onramp_missing_identity_verification" === t6) return "l1";
  if ("crypto_onramp_missing_document_verification" === t6) return "l2";
  let r2 = at(e2);
  return r2.includes("crypto_onramp_missing_minimum_identity_verification") ? "l0" : r2.includes("crypto_onramp_missing_identity_verification") ? "l1" : r2.includes("crypto_onramp_missing_document_verification") ? "l2" : r2.toLowerCase().includes("minimum identity verification") ? "l0" : r2.toLowerCase().includes("identity verification") ? "l1" : r2.toLowerCase().includes("document verification") ? "l2" : null;
};
var it = (e2) => {
  let t6 = nt(e2);
  return t6 === i.ONRAMP_TRANSACTION_LIMIT_REACHED || "transaction_limit_reached" === t6 || "crypto_onramp_transaction_limit_reached" === t6;
};
var nt = (e2) => {
  if (!e2 || "object" != typeof e2) return null;
  if ("code" in e2 && "string" == typeof e2.code) return e2.code;
  if ("error" in e2) {
    let t6 = e2.error;
    if (t6 && "object" == typeof t6 && "code" in t6 && "string" == typeof t6.code) return t6.code;
  }
  return null;
};
var at = (e2) => {
  if (!e2) return "";
  let t6 = [];
  if (e2 instanceof Error ? t6.push(e2.name, e2.message) : t6.push(String(e2)), "object" == typeof e2 && ("code" in e2 && t6.push(String(e2.code)), "type" in e2 && t6.push(String(e2.type)), "error" in e2)) {
    let r2 = e2.error;
    "object" == typeof r2 && r2 && "message" in r2 && t6.push(String(r2.message)), "object" == typeof r2 && r2 && "code" in r2 && t6.push(String(r2.code));
  }
  return t6.join(" ");
};
var st = (e2, t6) => {
  let r2 = e2.find(((e3) => e3.id === t6));
  if (!r2?.card) return null;
  let o2 = r2.card.brand ? `${r2.card.brand.charAt(0).toUpperCase()}${r2.card.brand.slice(1)}` : "Card";
  return r2.card.last4 ? `${o2} \u2022\u2022\u2022\u2022 ${r2.card.last4}` : o2;
};
var lt = async ({ paymentToken: e2, loader: t6 }) => {
  let r2 = Te();
  try {
    let o2, a, { opts: s2, amount: l } = fl(), { config: c2, cryptoCustomerId: d } = r2.context;
    if (!d) throw Error("Missing cryptoCustomerId");
    "inline" === t6 ? wl({ stripeSession: { ...r2, context: { ...r2.context, paymentToken: e2 } }, isLoading: true }) : "screen" === t6 && wl({ stripeSession: { ...r2, context: { ...r2.context, paymentToken: e2 } }, state: { status: "stripe-flow", step: "checkout" }, isLoading: false });
    let u = { crypto_customer_id: d, payment_token: e2, source_amount: l || "0", source_currency: s2.source.selectedAsset.toUpperCase(), destination_currency: s2.destination.asset, destination_network: c2.network, wallet_address: s2.destination.address };
    try {
      let e3 = await Xe(r2.privy, { sessionId: c2.sessionId, environment: c2.environment, session: u });
      o2 = e3.id, a = e3.transaction_details;
    } catch (e3) {
      let o3 = ot(e3);
      if (!o3 && !it(e3)) throw e3;
      if (!$e()) return;
      let i2 = await me(r2.privy, { environment: c2.environment });
      return await He2({ customer: i2, loader: t6, tier: o3 });
    }
    if (!$e()) return;
    let m = Te().context.paymentMethodLabel ?? null;
    if (!m) try {
      let t7 = await We2(r2.privy, { environment: c2.environment });
      m = st(t7, e2);
    } catch {
    }
    let p3 = { ...Je2(a), paymentMethodLabel: m }, y = Te();
    wl({ stripeSession: { ...y, context: { ...y.context, stripeSessionId: o2, checkoutDetails: p3 } }, stripeConfirmCheckoutDetails: p3, state: { status: "stripe-flow", step: "confirm-checkout" }, isLoading: false });
  } catch (e3) {
    ze(e3);
  }
};
var ct = async (e2) => {
  let t6 = Te();
  try {
    let { opts: r2 } = fl(), o2 = t6.context.config.network, a = await (async (e3, { environment: t7 }) => (await e3.fetchPrivyRoute(We, { query: { environment: t7 } })).data)(t6.privy, { environment: t6.context.config.environment });
    if (!$e()) return;
    if (!a.some(((e3) => e3.wallet_address === r2.destination.address && e3.network === o2))) {
      try {
        await t6.onramp.registerWalletAddress(r2.destination.address, Ge2(o2));
      } catch (e3) {
        if (console.warn("[FiatOnramp:Stripe] registerWalletAddress failed:", e3), qe2(e3)) return void ze(e3);
        Ue2({ eventType: "wallet_registration_error", error: e3 });
      }
      if (!$e()) return;
    }
    if (!e2?.skipTokenCheck) {
      let e3 = [];
      try {
        e3 = await We2(t6.privy, { environment: t6.context.config.environment });
      } catch {
      }
      if (!$e()) return;
      if (e3.length > 0) {
        let t7 = /* @__PURE__ */ new Set(), r3 = e3.filter(((e4) => {
          let r4 = `${e4.type}:${e4.card?.brand ?? ""}:${e4.card?.last4 ?? ""}`;
          return !t7.has(r4) && (t7.add(r4), true);
        })), o3 = Te();
        return void wl({ stripeSession: { ...o3, context: { ...o3.context, savedPaymentTokens: r3 } }, state: { status: "stripe-flow", step: "select-payment" }, isLoading: false });
      }
    }
    wl({ stripeElement: null, state: { status: "stripe-flow", step: "payment" }, isLoading: false });
    let s2 = t6.context.kycRegion ?? "us", l = await fi(t6.onramp.collectPaymentMethod({ payment_method_types: "eu" === s2 ? ["card"] : ["card", "us_bank_account"], wallets: { applePay: "auto", googlePay: "auto" } }, ((e3) => {
      if ($e()) {
        if (!e3.cryptoPaymentToken) return void ze(Error("Payment method selection was cancelled"), "flow_cancelled");
        lt({ paymentToken: e3.cryptoPaymentToken, loader: "screen" });
      }
    })).catch(((e3) => (ze(e3), null))), 3e4, Ne());
    $e() && l && wl({ stripeElement: l });
  } catch (e3) {
    ze(e3);
  }
};
var dt = async () => {
  let e2, t6 = yl();
  if (!t6) return;
  let r2 = t6.provider;
  if ("stripe" === r2 || "stripe-sandbox" === r2) {
    wl({ isLoading: true });
    let { opts: e3, amount: o3, getProviderUrl: a2, email: s3, phone: c3, privy: u } = fl();
    try {
      let m2 = await a2({ source: { asset: e3.source.selectedAsset.toUpperCase(), amount: o3 || "0" }, destination: { asset: e3.destination.asset, chain: e3.destination.chain, address: e3.destination.address }, provider: t6.provider, sub_provider: t6.sub_provider ?? void 0, payment_method: t6.payment_method }), p4 = ut(m2), y = "stripe" === r2 ? "production" : "sandbox", h4 = { publishableKey: p4.publishable_key, network: p4.network, sessionId: p4.session_id, userEmail: s3 ?? "", userPhone: c3, environment: y };
      try {
        await (async (e4, t7) => {
          let r3;
          Al();
          try {
            ({ loadCryptoOnrampAndInitialize: r3 } = await import("./chunk-FHJLSFB7.js"));
          } catch {
            throw Error("@stripe/crypto is required for Stripe onramp but could not be loaded. Ensure the package is installed.");
          }
          let { controller: o4 } = fl();
          o4.current = new AbortController();
          let a3 = await fi(Promise.resolve(r3(t7.publishableKey, { theme: "stripe" })), 15e3, o4.current.signal);
          if (!a3) throw Error("Stripe crypto SDK unavailable");
          let s4 = crypto.randomUUID();
          wl({ stripeSession: { id: s4, onramp: a3, privy: e4, context: { sessionId: s4, config: t7 } } });
        })(u, h4);
      } catch (e4) {
        throw Ue2({ eventType: "sdk_init_error", error: e4, context: h4 }), e4;
      }
      let f = Te();
      if (!f) return;
      let g3 = await me(f.privy, { environment: y });
      if (!$e()) return;
      if ("active" === g3.status) {
        let t7 = Te(), r3 = Me({ stripeKycRegion: g3.kyc_region, sourceCurrency: e3.source.selectedAsset });
        wl({ stripeSession: { ...t7, context: { ...t7.context, cryptoCustomerId: g3.crypto_customer_id, kycRegion: r3, kycProvidedFields: g3.provided_fields } }, isLoading: true }), await (async ({ authIntentId: e4, onReady: t8 }) => {
          let r4 = Te(), o4 = false, n2 = async () => {
            if (!o4) {
              o4 = true;
              try {
                await t8();
              } catch (e5) {
                if (!$e()) return;
                ze(e5);
              }
            }
          };
          if (!e4) return void await n2();
          let a3 = null;
          try {
            a3 = await fi(r4.onramp.authenticate(e4, ((e5) => {
              $e() && ("success" === e5.result ? n2() : ze(Error(`Link authentication ${e5.result}`)));
            })), 3e4, Ne());
          } catch (e5) {
            if (!$e()) return;
            return Ue2({ eventType: "link_auth_error", error: e5 }), void wl({ state: { status: "stripe-flow", step: "choose-email" }, isLoading: false });
          }
          $e() && (a3 ? wl({ state: { status: "stripe-flow", step: "authenticating" }, stripeElement: a3, isLoading: false }) : await n2());
        })({ authIntentId: g3.link_auth_intent_id, onReady: async () => {
          if ($e()) if ("eu" === r3) if (De({ customer: g3, region: r3 })) {
            let e4 = await Oe();
            if ($e()) {
              if (!e4) return await He2({ customer: g3 });
              await ct();
            }
          } else {
            let e4 = await Be({ customer: g3, region: r3 }) ?? "collect-name";
            if (!$e()) return;
            wl({ state: { status: "stripe-flow", step: e4 }, isLoading: false });
          }
          else if (De({ customer: g3, region: r3 })) {
            let e4 = await Oe();
            if (!$e()) return;
            if (!e4) return await He2({ customer: g3 });
            await ct();
          } else wl({ state: { status: "stripe-flow", step: "collect-name" }, isLoading: false });
        } });
      } else wl({ state: { status: "stripe-flow", step: "choose-email" }, isLoading: false });
    } catch (e4) {
      console.error("[FiatOnramp:Stripe] Init failed:", e4), wl({ state: { status: "provider-error" }, isLoading: false, error: Error("Something went wrong setting up checkout. Please try again.") });
    }
    return;
  }
  let o2 = t();
  if (!o2) return void wl({ state: { status: "provider-error" }, error: Error("Unable to open payment window") });
  wl({ isLoading: true });
  let { opts: a, amount: s2, getProviderUrl: c2, getStatus: m, controller: p3 } = fl(), h3 = () => {
    try {
      o2.closed || o2.close();
    } catch {
    }
  };
  p3.current = new AbortController();
  try {
    let r3 = await c2({ source: { asset: a.source.selectedAsset.toUpperCase(), amount: s2 || "0" }, destination: { asset: a.destination.asset, chain: a.destination.chain, address: a.destination.address }, provider: t6.provider, sub_provider: t6.sub_provider ?? void 0, payment_method: t6.payment_method, redirect_url: window.location.origin });
    if ("url" !== r3.type) throw Error("Expected URL response for popup-based provider");
    o2.location.href = r3.url, e2 = r3.session_id;
  } catch (e3) {
    return h3(), void wl({ state: { status: "provider-error" }, isLoading: false, error: Error("Unable to start payment session") });
  }
  wl({ isLoading: false }), wl({ state: { status: "provider-confirming" } });
  let g2 = await _a({ operation: () => m({ session_id: e2, provider: t6.provider }), until: (e3) => "completed" === e3.status || "failed" === e3.status || "cancelled" === e3.status, delay: 0, interval: 2e3, attempts: 60, signal: p3.current.signal });
  if ("aborted" !== g2.status) {
    if ("max_attempts" === g2.status) return h3(), g2.error ? (console.error(g2.error), void wl({ state: { status: "select-amount" }, isLoading: false, error: Error("Unable to check payment status. Please try again.") })) : void wl({ state: { status: "provider-error" }, error: Error("Could not confirm payment status yet.") });
    "completed" === g2.result?.status ? (h3(), wl({ state: { status: "provider-success" } })) : (h3(), wl({ state: { status: "provider-error" }, error: Error(`Transaction ${g2.result?.status ?? "failed"}`) }));
  }
};
var ut = (e2) => {
  if (e2 && "object" == typeof e2 && "publishable_key" in e2 && "network" in e2 && "session_id" in e2) return e2;
  throw Error("Unexpected response shape from provider_session_url for Stripe");
};
var mt = () => {
  let e2 = ml();
  e2 && e2.length > 0 && wl({ state: { status: "select-payment-method", quotes: e2 } });
};
var pt = () => {
  wl({ state: { status: "select-source-asset" }, localQuotes: [], localSelectedQuote: null, quotesWarning: null, quotesErrors: null });
};
var yt = () => {
  wl({ error: null, state: { status: "select-amount" } });
};
var ht = (e2) => {
  wl({ localSelectedQuote: e2, state: { status: "select-amount" } });
};
var ft = (e2) => {
  let { opts: t6, amount: r2 } = fl(), o2 = { ...t6, source: { ...t6.source, selectedAsset: e2 } };
  wl({ opts: o2, state: { status: "select-amount" }, localQuotes: [], localSelectedQuote: null, quotesWarning: null, quotesErrors: null, isLoading: true }), Ml(r2, o2);
};
var gt2 = ({ element: t6, minHeight: r2, bleed: o2 = false }) => {
  let i2 = (0, import_react2.useRef)(null);
  return (0, import_react2.useEffect)((() => (i2.current && t6 && i2.current.replaceChildren(t6), () => {
    i2.current && i2.current.replaceChildren();
  })), [t6]), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { ref: i2, style: { minHeight: r2, margin: o2 ? "0 -1rem" : void 0 } });
};
var vt = (e2, t6) => "collect-address" !== e2 || "eu" !== t6.kycRegion || t6.kycAddress?.country ? e2 : "collect-country";
var bt = (e2) => {
  $e() && wl({ state: { status: "stripe-flow", step: vt(e2, Te().context) } });
};
var Ct = ({ city: e2, country: t6 }) => {
  let r2 = Te(), o2 = r2.context, n2 = [...o2.kycProvidedFields ?? [], "birth_city", "birth_country"];
  wl({ stripeSession: { ...r2, context: { ...o2, kycBirthCity: e2, kycBirthCountry: t6, kycProvidedFields: n2 } } }), bt(he("collect-birth-location"));
};
var wt = async (e2, t6) => (await e2.fetchPrivyRoute(Je, { params: { session_id: t6 } })).client_secret;
var kt = async (e2, t6) => {
  let r2 = await e2.fetchPrivyRoute(qe, { params: { session_id: t6 } });
  return { quoteExpiresAt: r2.quote_expiration, sourceTotalAmount: r2.source_total_amount, fee: r2.fee, destinationAmount: r2.destination_amount };
};
var _t = (e2) => {
  if (!e2 || "object" != typeof e2) return null;
  let t6 = e2.transaction_details;
  return t6?.last_error ?? null;
};
var xt = /* @__PURE__ */ new Set(["transaction_limit_reached", "location_not_supported", "transaction_failed"]);
var St = (e2) => "transaction_limit_reached" === e2 ? new s("Checkout failed: transaction_limit_reached", void 0, i.ONRAMP_TRANSACTION_LIMIT_REACHED) : Error(`Checkout failed: ${e2 ?? "unknown error"}`);
var Et = (e2) => !!(e2 && "object" == typeof e2 && "message" in e2 && "string" == typeof e2.message && e2.message.toLowerCase().includes("quote expired"));
var At = async () => {
  let e2 = Te();
  try {
    let { stripeSessionId: t6 } = e2.context;
    if (!t6) throw Error("Missing stripeSessionId");
    wl({ isLoading: true });
    for (let r2 = 0; r2 < 3; r2++) {
      let o2;
      if (!$e()) return;
      try {
        o2 = await e2.onramp.performCheckout(t6, (async (t7) => await wt(e2.privy, t7)));
      } catch (o3) {
        if (!Et(o3)) throw o3;
        Ue2({ eventType: "checkout_error", error: o3, errorCode: "quote_expired", attempt: r2 + 1, stripeSessionId: t6 }), await kt(e2.privy, t6);
        continue;
      }
      if (o2.successful) {
        if (!$e()) return;
        return void wl({ state: { status: "provider-success" }, isLoading: false });
      }
      let a = _t(o2);
      if (Ue2({ eventType: "checkout_error", errorCode: a, attempt: r2 + 1, stripeSessionId: t6 }), !a || xt.has(a)) throw St(a);
      if (!$e()) return;
      if ("charged_with_expired_quote" === a) await kt(e2.privy, t6);
      else if ("quote_rate_drifted" === a) {
        let { opts: r3, amount: o3 } = fl(), { config: a2, cryptoCustomerId: s2, paymentToken: l } = e2.context;
        if (!s2 || !l) throw Error("Cannot recreate session: missing customer or payment token");
        t6 = (await Xe(e2.privy, { sessionId: a2.sessionId, environment: a2.environment, session: { crypto_customer_id: s2, payment_token: l, source_amount: o3 || "0", source_currency: r3.source.selectedAsset.toUpperCase(), destination_currency: r3.destination.asset, destination_network: a2.network, wallet_address: r3.destination.address } })).id;
        let c2 = Te();
        wl({ stripeSession: { ...c2, context: { ...c2.context, stripeSessionId: t6 } } });
      } else {
        if ("missing_kyc" === a) {
          let t7 = await me(e2.privy, { environment: e2.context.config.environment });
          if (!$e()) return;
          let { providedFields: r3 } = Fe(t7), o3 = Te(), n2 = o3.context.kycRegion ?? "us", a2 = await Be({ customer: t7, region: n2, tier: "l0" });
          if (!$e()) return;
          if (o3 = Te(), !a2) throw Error("Checkout failed: missing_kyc but all fields already provided");
          return void wl({ stripeSession: { ...o3, context: { ...o3.context, documentVerificationAction: { type: "retry-checkout" }, kycTier: "l0", kycProvidedFields: r3 } }, state: { status: "stripe-flow", step: a2 } });
        }
        if ("missing_document_verification" === a) {
          let t7 = await me(e2.privy, { environment: e2.context.config.environment });
          if (!$e()) return;
          let { providedFields: r3 } = Fe(t7), o3 = Te(), n2 = o3.context.kycRegion ?? "us", a2 = await Be({ customer: t7, region: n2, tier: "l2" });
          if (!$e()) return;
          let s2 = { ...(o3 = Te()).context, documentVerificationAction: { type: "retry-checkout" }, kycTier: "l2", kycProvidedFields: r3 };
          return a2 ? void wl({ stripeSession: { ...o3, context: s2 }, state: { status: "stripe-flow", step: a2 }, isLoading: false }) : void wl({ stripeSession: { ...o3, context: s2 }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
        }
        if ("missing_consumer_wallet" !== a) throw Error(`Checkout failed: ${a}`);
        {
          let { opts: t7 } = fl();
          await e2.onramp.registerWalletAddress(t7.destination.address, Ge2(e2.context.config.network));
        }
      }
    }
    throw Error("Checkout failed after maximum retry attempts");
  } catch (e3) {
    ze(e3);
  }
};
var Pt = [{ code: "AT", name: "Austria" }, { code: "BE", name: "Belgium" }, { code: "BG", name: "Bulgaria" }, { code: "HR", name: "Croatia" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "EE", name: "Estonia" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" }, { code: "DE", name: "Germany" }, { code: "GR", name: "Greece" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" }, { code: "IE", name: "Ireland" }, { code: "IT", name: "Italy" }, { code: "LV", name: "Latvia" }, { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MT", name: "Malta" }, { code: "NL", name: "Netherlands" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "RO", name: "Romania" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "ES", name: "Spain" }, { code: "SE", name: "Sweden" }];
var It = new Set(Pt.map(((e2) => e2.code)));
var Lt = (e2) => {
  if (!It.has(e2)) return void ze(Error("Stripe EU onramp is not available in this country"));
  let t6 = Te(), r2 = t6.context, o2 = r2.cryptoCustomerId ? "collect-address" : "create-link-account";
  wl({ stripeSession: { ...t6, context: { ...r2, kycRegion: "eu", kycAddress: { ...r2.kycAddress ?? { addressLine1: "", city: "", state: "", postalCode: "" }, country: e2 } } }, state: { status: "stripe-flow", step: o2 } });
};
var Tt = async (e2, { email: t6, environment: r2 }) => (await e2.fetchPrivyRoute(Ve, { body: { email: t6, environment: r2 } })).data;
var $t = (e2) => {
  let t6 = Te();
  wl({ stripeSession: { ...t6, context: { ...t6.context, ...e2 } } });
};
var Nt = async (e2, t6) => {
  let r2 = Te();
  try {
    if (await (async (e3, { authIntentId: t7, cryptoCustomerId: r3, environment: o3 }) => {
      await e3.fetchPrivyRoute(He, { body: { auth_intent_id: t7, crypto_customer_id: r3, environment: o3 } });
    })(r2.privy, { authIntentId: t6, cryptoCustomerId: e2, environment: r2.context.config.environment }), !$e()) return;
    $t({ cryptoCustomerId: e2 });
    let o2 = await me(r2.privy, { environment: r2.context.config.environment });
    if (!$e()) return;
    if ("active" !== o2.status) throw Error("Session unexpectedly inactive after authentication");
    let { opts: i2 } = fl(), a = Me({ stripeKycRegion: o2.kyc_region, sourceCurrency: i2.source.selectedAsset });
    if ($t({ kycRegion: a, kycProvidedFields: o2.provided_fields }), "eu" === a) if (De({ customer: o2, region: a })) {
      let e3 = await Oe();
      if (!$e()) return;
      if (!e3) return await He2({ customer: o2 });
      await ct();
    } else {
      let e3 = await Be({ customer: o2, region: a }) ?? "collect-name";
      if (!$e()) return;
      bt(e3);
    }
    else if (De({ customer: o2, region: a })) {
      let e3 = await Oe();
      if (!$e()) return;
      if (!e3) return await He2({ customer: o2 });
      await ct();
    } else bt("collect-name");
  } catch (e3) {
    ze(e3);
  }
};
var Rt = async (e2) => {
  let t6 = Te();
  try {
    wl({ isLoading: true });
    let r2 = await Tt(t6.privy, { email: e2, environment: t6.context.config.environment });
    if (!$e()) return;
    if (wl({ isLoading: false }), "no_account" === r2.status) {
      let { opts: r3 } = fl(), o2 = "EUR" === r3.source.selectedAsset.toUpperCase();
      wl({ stripeSession: { ...t6, context: { ...t6.context, pendingEmail: e2 } }, state: { status: "stripe-flow", step: o2 ? "collect-country" : "create-link-account" }, email: e2 });
    } else {
      wl({ stripeSession: { ...t6, context: { ...t6.context, authIntentId: r2.id, pendingEmail: e2 } }, state: { status: "stripe-flow", step: "authenticating" }, email: e2 });
      let o2 = await fi(t6.onramp.authenticate(r2.id, ((e3) => {
        $e() && ("success" === e3.result && e3.crypto_customer_id ? Nt(e3.crypto_customer_id, r2.id) : ze(Error(`Link authentication ${e3.result}`)));
      })), 3e4, Ne());
      $e() && o2 && wl({ stripeElement: o2 });
    }
  } catch (e3) {
    ze(e3);
  }
};
var Mt = async (e2) => {
  let t6 = Te(), r2 = t6.context, o2 = t6.onramp, n2 = await o2.updateKycInfo(e2).catch(((e3) => (ze(e3), null)));
  if (!n2) return;
  let a = [...r2.kycProvidedFields ?? []];
  n2.completed && a.push("identifiers"), wl({ stripeSession: { ...t6, context: { ...r2, kycProvidedFields: a, kycMissingIdentifiers: n2.identifiers ?? [], kycMissingAlternatives: n2.alternatives ?? [], kycInvalidIdentifiers: n2.invalid_identifiers ?? [] } } }), n2.completed && bt(he("collect-identifiers"));
};
var Ft = async () => {
  let e2 = Te();
  try {
    let { kycSsn: t6, kycTier: r2, kycRegion: o2, config: n2 } = e2.context, a = { ...Dt(e2.context), ...Bt(e2.context), ...jt(e2.context), ...Ut(e2.context), ...qt(e2.context) };
    if (bt("kyc"), await e2.onramp.submitKycInfo(a), t6) {
      let e3 = Te();
      wl({ stripeSession: { ...e3, context: { ...e3.context, kycSsn: void 0 } } });
    }
    if (!$e()) return;
    let s2 = "eu" === o2 ? "l2" : "l2" === r2 ? "l1" : r2 ?? "l0", l = await _a({ operation: () => me(e2.privy, { environment: n2.environment }), until: (e3) => {
      if ("active" !== e3.status) return false;
      if ("eu" === o2) {
        let t7 = e3.kyc_tiers?.find(((e4) => "l2" === e4.tier));
        return "pending" === t7?.verification_status || "verified" === t7?.verification_status;
      }
      if (e3.kyc_tiers?.length) {
        let t7 = e3.kyc_tiers.find(((e4) => e4.tier === s2));
        if (t7) return "verified" === t7.verification_status;
      }
      return e3.verifications.some(((e4) => "verified" === e4.status));
    }, delay: 0, interval: Ze, attempts: Math.ceil(30), signal: Ne() });
    if (!$e() || "aborted" === l.status) return;
    if ("max_attempts" === l.status) throw Error("KYC verification timed out");
    let c2 = await Oe();
    if (!$e()) return;
    if (!c2) return await He2({ customer: l.result });
    if ("l2" === r2) {
      let e3 = Te(), t7 = e3.context.documentVerificationAction ?? { type: "retry-payment", loader: "screen" };
      return void wl({ stripeSession: { ...e3, context: { ...e3.context, documentVerificationAction: t7 } }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
    }
    await ct();
  } catch (e3) {
    ze(e3);
  }
};
var Dt = ({ kycName: e2 }) => e2 ? { given_name: e2.firstName, surname: e2.lastName } : {};
var Bt = ({ kycDob: e2 }) => e2 ? { date_of_birth: { day: e2.day, month: e2.month, year: e2.year } } : {};
var jt = ({ kycRegion: e2, kycSsn: t6 }) => "eu" !== e2 && t6 ? { id_number: { type: "us_ssn", value: t6 } } : {};
var Ut = ({ kycAddress: e2 }) => e2 ? { address: { line1: e2.addressLine1, city: e2.city, ...e2.state ? { state: e2.state } : {}, postal_code: e2.postalCode, country: e2.country } } : {};
var qt = ({ kycRegion: e2, kycNationalities: t6, kycBirthCity: r2, kycBirthCountry: o2 }) => "eu" === e2 ? { ...t6?.length ? { nationalities: t6 } : {}, ...r2 ? { birth_city: r2 } : {}, ...o2 ? { birth_country: o2 } : {} } : {};
var zt = async (e2) => {
  let t6 = Te(), r2 = t6.context, o2 = r2.kycAddress?.country;
  if (!("eu" !== r2.kycRegion || o2 && It.has(o2))) return void ze(Error("Stripe EU onramp is not available in this country"));
  let n2 = "eu" === r2.kycRegion && o2 ? { ...e2, country: o2 } : e2;
  wl({ stripeSession: { ...t6, context: { ...r2, kycAddress: n2, kycProvidedFields: [...r2.kycProvidedFields ?? [], "address_line_1", "address_city", ...n2.state ? ["address_state"] : [], "address_postal_code"] } } }), "eu" !== r2.kycRegion ? await Ft() : await (async () => {
    let e3 = Te();
    try {
      let { kycName: t7, kycDob: r3, kycAddress: o3, kycNationalities: i2, kycBirthCity: n3, kycBirthCountry: a } = e3.context, s2 = { ...t7 ? { given_name: t7.firstName, surname: t7.lastName } : {}, ...r3 ? { date_of_birth: { day: r3.day, month: r3.month, year: r3.year } } : {}, ...o3 ? { address: { line1: o3.addressLine1, city: o3.city, ...o3.state ? { state: o3.state } : {}, postal_code: o3.postalCode, country: o3.country } } : {}, ...i2?.length ? { nationalities: i2 } : {}, ...n3 ? { birth_city: n3 } : {}, ...a ? { birth_country: a } : {} };
      if (bt("kyc"), await e3.onramp.submitKycInfo(s2), !$e()) return;
      let l = await Re();
      if (!$e()) return;
      bt(l ? "collect-identifiers" : he("collect-identifiers"));
    } catch (e4) {
      ze(e4);
    }
  })();
};
var Vt = ({ day: e2, month: t6, year: r2 }) => {
  let o2 = Te(), n2 = o2.context, a = n2.kycTier ?? "l1", s2 = n2.kycRegion ?? "us", l = [...n2.kycProvidedFields ?? [], "dob"], c2 = pe(a, l, s2), d = { ...n2, kycDob: { day: e2, month: t6, year: r2 }, kycProvidedFields: l }, u = c2 ? { status: "stripe-flow", step: vt(c2, d) } : void 0;
  wl({ stripeSession: { ...o2, context: d }, ...u ? { state: u } : {} }), c2 || Ft();
};
var Ot = ({ firstName: e2, lastName: t6 }) => {
  let r2 = Te(), o2 = r2.context, n2 = o2.kycTier ?? "l0", a = o2.kycRegion ?? "us", s2 = [...o2.kycProvidedFields ?? [], "first_name", "last_name"], l = pe(n2, s2, a), c2 = { ...o2, kycName: { firstName: e2, lastName: t6 }, kycProvidedFields: s2 }, d = l ? { status: "stripe-flow", step: vt(l, c2) } : void 0;
  wl({ stripeSession: { ...r2, context: c2 }, ...d ? { state: d } : {} }), l || Ft();
};
var Kt = (e2) => {
  let t6 = Te(), r2 = t6.context, o2 = r2.kycTier ?? "l1", n2 = [...r2.kycProvidedFields ?? [], "id_number"], a = pe(o2, n2);
  wl({ stripeSession: { ...t6, context: { ...r2, kycSsn: e2, kycProvidedFields: n2 } }, ...a ? { state: { status: "stripe-flow", step: a } } : {} }), a || Ft();
};
var Yt = (e2) => e2.kycAddress?.country ? e2.kycAddress.country : "US";
var Ht = async (e2) => {
  let t6 = Te();
  try {
    let r2 = t6.context.pendingEmail;
    if (!r2) throw Error("No email in session context");
    if ("create" === e2) {
      let e3 = t6.context.config.userPhone;
      if (!e3) return void bt("collect-contact");
      let o3 = Yt(t6.context), i2 = await t6.onramp.registerLinkUser(r2, e3, o3);
      if (!$e()) return;
      if (!i2.created) throw Error("Failed to register Stripe Link account");
    }
    let o2 = await Tt(t6.privy, { email: r2, environment: t6.context.config.environment });
    if (!$e()) return;
    if ("created" !== o2.status) throw Error("Failed to create Link auth intent after registration");
    wl({ stripeSession: { ...t6, context: { ...t6.context, authIntentId: o2.id } }, state: { status: "stripe-flow", step: "authenticating" } });
    let n2 = await fi(t6.onramp.authenticate(o2.id, ((e3) => {
      $e() && ("success" === e3.result && e3.crypto_customer_id ? Nt(e3.crypto_customer_id, o2.id) : ze(Error(`Link authentication ${e3.result}`)));
    })), 3e4, Ne());
    $e() && n2 && wl({ stripeElement: n2 });
  } catch (e3) {
    ze(e3);
  }
};
var Wt = (e2) => {
  let t6 = Te(), r2 = t6.context, o2 = [...r2.kycProvidedFields ?? [], "nationalities"];
  wl({ stripeSession: { ...t6, context: { ...r2, kycNationalities: e2, kycProvidedFields: o2 } } }), bt(he("collect-nationality"));
};
var Qt = (e2) => {
  let t6 = Te(), r2 = st([e2], e2.id);
  wl({ stripeSession: { ...t6, context: { ...t6.context, paymentToken: e2.id, paymentMethodLabel: r2 } } }), lt({ paymentToken: e2.id, loader: "inline" });
};
var Zt = async (e2) => {
  let t6 = Te();
  try {
    let r2 = t6.context.pendingEmail;
    if (!r2) throw Error("No email in session context");
    let o2 = Yt(t6.context), i2 = await t6.onramp.registerLinkUser(r2, e2, o2);
    if (!$e()) return;
    if (!i2.created) throw Error("Failed to register Stripe Link account");
    await Ht("connect");
  } catch (e3) {
    ze(e3);
  }
};
var Gt = async () => {
  try {
    if (!$e()) return;
    let e2 = Te(), t6 = e2.context.stripeSessionId;
    if (!t6) return;
    let r2 = await kt(e2.privy, t6);
    if (!$e()) return;
    let o2 = e2.context.checkoutDetails;
    if (o2) {
      let e3 = o2.currencySymbol, t7 = { ...o2, quoteExpiresAt: r2.quoteExpiresAt, sourceAmount: r2.sourceTotalAmount ?? o2.sourceAmount, destinationAmount: r2.destinationAmount ?? o2.destinationAmount, fee: r2.fee && e3 ? `${e3}${r2.fee}` : o2.fee };
      wl({ stripeConfirmCheckoutDetails: t7 });
    }
  } catch (e2) {
    ze(e2);
  }
};
var Xt = ({ height: r2 = 24, ...o2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("svg", { height: r2, viewBox: "120 0 72 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o2, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M132.258 24C138.856 24 144.205 18.6274 144.205 12C144.205 5.37257 138.856 0 132.258 0C125.66 0 120.312 5.37257 120.312 12C120.312 18.6274 125.66 24 132.258 24Z", fill: "#00D66F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M156.317 3.81824C156.317 2.69024 157.263 1.77344 158.377 1.77344C159.49 1.77344 160.436 2.69504 160.436 3.81824C160.436 4.94144 159.524 5.88704 158.377 5.88704C157.23 5.88704 156.317 4.97024 156.317 3.81824Z", fill: "#011E0F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M150.205 2.06143H153.789V22.2214H150.205V2.06143Z", fill: "#011E0F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M160.188 7.82143H156.575V22.2214H160.188V7.82143Z", fill: "#011E0F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M186.16 14.5319C188.879 12.8519 190.728 10.3511 191.459 7.81665H187.847C186.905 10.2359 184.745 12.0551 182.37 12.8279V2.05665H178.758V22.2167H182.37V16.2214C185.128 16.9126 187.307 19.3079 188.052 22.2167H191.689C191.134 19.1639 189.056 16.3079 186.16 14.5319Z", fill: "#011E0F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M166.591 9.43425C167.537 8.17185 169.382 7.43744 170.878 7.43744C173.668 7.43744 175.976 9.48705 175.981 12.5831V22.2167H172.369V13.3846C172.369 12.1126 171.805 10.6438 169.974 10.6438C167.824 10.6438 166.586 12.5591 166.586 14.8007V22.2262H162.974V7.83104H166.591V9.43425Z", fill: "#011E0F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M131.61 4.7998H127.958C128.668 7.80941 130.743 10.3822 133.339 11.9998C130.738 13.6174 128.668 16.1902 127.958 19.1998H131.61C132.515 16.4158 135.021 13.9966 138.1 13.5022V10.4926C135.016 10.003 132.51 7.58381 131.61 4.7998Z", fill: "#011E0F" })] });
function Jt({ children: t6 }) {
  return (0, import_jsx_runtime25.jsx)(er, { theme: se()?.appearance.palette.colorScheme ?? "light", children: t6 ?? "You're in a sandbox environment" });
}
var er = gt(t2)`
  margin: 1rem 0;
`;
var tr = ({ isSandbox: r2, children: o2, ...i2 }) => {
  let n2 = pl(((e2) => "sandbox" === e2?.opts?.environment));
  return r2 ?? n2 ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(n, { ...i2, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Jt, {}), o2] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(n, { ...i2, children: o2 });
};
var rr = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
var or = gt.input`
  && {
    width: 100%;
    padding: 0.625rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(e2) => e2.$hasError ? "var(--privy-color-error-dark)" : "var(--privy-color-foreground)"};
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-border-error)" : "var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-sm, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;

    &:focus {
      border-color: ${(e2) => e2.$hasError ? "var(--privy-color-border-error)" : "var(--privy-color-accent)"};
      box-shadow: ${(e2) => e2.$hasError ? "none" : "0 0 0 1px var(--privy-color-accent-light)"};
    }

    &::placeholder {
      color: ${(e2) => e2.$hasError ? "var(--privy-color-error-dark)" : "var(--privy-color-foreground-3)"};
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`;
var ir = gt.p`
  && {
    color: var(--privy-color-error-dark);
    font-size: 0.8125rem;
  }
`;
var nr = gt.select`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-error, #dc3545)" : "var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`;
var ar = gt.div`
  display: flex;
  gap: 0.5rem;
`;
var sr = gt(index_parts_exports.Root)`
  width: 100%;
`;
var lr = gt.div`
  position: relative;
  width: 100%;
`;
var cr = gt(index_parts_exports.Input)`
  && {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-error, #dc3545)" : "var(--privy-color-foreground-4)"};
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:hover:not(:disabled) {
      border-color: var(--privy-color-foreground-3);
    }

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 2px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    &:disabled {
      color: var(--privy-color-foreground-3);
      background: var(--privy-color-background-2);
      cursor: not-allowed;
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`;
var dr = gt.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--privy-color-foreground-2);
  pointer-events: none;
  transform: translateY(-50%);

  ${cr}:focus + & {
    color: var(--privy-color-accent);
  }

  ${cr}:disabled + & {
    color: var(--privy-color-foreground-3);
  }
`;
var ur = index_parts_exports.Portal;
var mr = gt(index_parts_exports.Positioner)`
  z-index: 2147483647;
`;
var pr = gt(index_parts_exports.Popup)`
  width: var(--anchor-width);
  max-height: min(16rem, var(--available-height));
  overflow: auto;
  padding: 0.25rem 0;
  font-family: inherit;
  background: var(--privy-color-background);
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 8%);
  box-sizing: border-box;
`;
var yr = gt(index_parts_exports.List)`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
var hr = gt.span`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  line-height: 1rem;
`;
var fr = gt(index_parts_exports.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.125rem;
  padding: 0 0.75rem;
  font-family: inherit;
  color: var(--privy-color-foreground);
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  span {
    font-family: inherit;
  }

  &:hover,
  &[data-highlighted] {
    background: var(--privy-color-background-2);
  }

  &[data-focus-visible] {
    background: var(--privy-color-background-2);
    box-shadow: inset 0 0 0 1px var(--privy-color-accent-light);
  }

  &[data-selected] {
    background: transparent;
    color: var(--privy-color-foreground);
  }

  &[data-disabled] {
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }
`;
var gr = gt.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
`;
var vr = gt.li`
  display: block;
`;
var br = gt(h)`
  && {
    gap: 0.375rem;
    width: auto;
    height: 2rem;
    padding: 0 0.625rem;
    color: var(--privy-color-foreground);
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--privy-color-background-2, #f9f9f9);
  border-radius: var(--privy-border-radius-md, 0.5rem);
`, gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, gt.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
`, gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;
var Cr = gt.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.75rem;
`;
var wr = gt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
var kr = gt.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;
var _r = gt.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
`;
var xr = gt.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100px;
  border: 1.5px solid white;
`;
var Sr = gt.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
var Er = gt.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground-3);
`;
var Ar = gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`;
var Pr = gt.div`
  display: flex;
  flex-direction: column;
`;
var Ir = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--privy-color-foreground-4);
  font-size: 0.75rem;
  line-height: 1.125rem;

  &:last-child {
    border-bottom: none;
  }
`;
var Lr = gt.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`;
var Tr = gt.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
`;
var $r = gt.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 999px;
  color: var(--privy-color-foreground);
  background: var(--privy-color-background);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
var Nr = ({ onClose: r2, onEmailChosen: o2, onEmailBack: i2, userEmail: n2 }) => {
  let [a, s2] = (0, import_react2.useState)(n2 ?? ""), [l, c2] = (0, import_react2.useState)(null), [d, u] = (0, import_react2.useState)(false), m = async () => {
    let e2 = a.trim();
    if (e2) if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e2)) {
      u(true);
      try {
        await o2?.(e2);
      } catch {
        u(false);
      }
    } else c2("Enter a valid email address");
    else c2("Email is required");
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, showBack: !!i2, onBack: i2 ?? void 0, icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Xt, { height: 24 }), iconVariant: "logo", title: "Add email", subtitle: "Enter your email address to continue with\xA0Link.", primaryCta: { label: "Submit", onClick: m, loading: d }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { type: "email", placeholder: "email@example.com", value: a, onChange: (e2) => {
    s2(e2.target.value), c2(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && m(), $hasError: !!l, autoFocus: true }), l && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: l })] }) });
};
var Rr = { addressPlaceholder: "Street and house number", addressAriaLabel: "Street and house number", cityPlaceholder: "City", cityAriaLabel: "City", postalPlaceholder: "Postal code", postalAriaLabel: "Postal code", postalInputMode: "text", postalMaxWidth: "7rem", postalFirst: true, missingAddressError: "Street and house number, city, and postal code are required" };
var Mr = { addressPlaceholder: "Street address", addressAriaLabel: "Street address", cityPlaceholder: "City", cityAriaLabel: "City", postalPlaceholder: "ZIP", postalAriaLabel: "ZIP code", postalInputMode: "numeric", postalMaxWidth: "6.25rem", postalFirst: false, missingAddressError: "Street address, city, and ZIP are required", adminPlaceholder: "State", adminAriaLabel: "State", adminRequiredError: "State is required", adminMaxWidth: "5.5rem", adminOptions: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"] };
var Fr = { US: Mr, IE: { ...Rr, addressPlaceholder: "Street address", addressAriaLabel: "Street address", cityPlaceholder: "Town or city", cityAriaLabel: "Town or city", postalPlaceholder: "Eircode", postalAriaLabel: "Eircode", missingAddressError: "Street address, town or city, and Eircode are required", adminPlaceholder: "County", adminAriaLabel: "County", adminRequiredError: "County is required" } };
var Dr = (e2) => "US" === e2 ? "United States" : Pt.find(((t6) => t6.code === e2))?.name ?? e2;
var Br = ({ onClose: t6, onAddressSubmitted: r2, onBack: o2 }) => {
  let i2 = pl(((e2) => e2?.stripeSession?.context.kycRegion ?? "us")), n2 = pl(((e2) => e2?.stripeSession?.context.kycAddress?.country ?? ""));
  return (0, import_jsx_runtime25.jsx)(jr, { onClose: t6, onAddressSubmitted: r2, onBack: o2, region: i2, country: "eu" === i2 ? n2 : "US" });
};
var jr = ({ onClose: o2, onAddressSubmitted: i2, onBack: n2, region: a, country: s2 }) => {
  let l = "eu" === a, [c2, d] = (0, import_react2.useState)(""), [u, m] = (0, import_react2.useState)(""), [p3, y] = (0, import_react2.useState)(""), [h3, f] = (0, import_react2.useState)(""), [g2, v] = (0, import_react2.useState)(null), [b, C] = (0, import_react2.useState)(false), w3 = ((e2, t6) => "eu" !== e2 ? Mr : (t6 ? Fr[t6] : null) ?? Rr)(a, s2), k = !!w3.adminPlaceholder, _ = () => {
    c2.trim() && u.trim() && h3.trim() ? s2 ? !k || p3.trim() ? (C(true), i2?.({ addressLine1: c2.trim(), city: u.trim(), state: p3.trim(), postalCode: h3.trim(), country: s2 })) : v(w3.adminRequiredError ?? "State is required") : v("Country is required") : v(w3.missingAddressError);
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: o2, showBack: !!n2, onBack: n2 ?? void 0, icon: MapPin, title: "Add address", subtitle: "Enter your residential address as it appears on your government-issued ID.", primaryCta: { label: "Continue", onClick: _, loading: b }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.addressPlaceholder, value: c2, onChange: (e2) => {
    d(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _(), $hasError: !!g2 && !c2.trim(), autoFocus: true, "aria-label": w3.addressAriaLabel, autoComplete: "address-line1" }), l ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ar, { children: [w3.postalFirst && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.postalPlaceholder, value: h3, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _(), $hasError: !!g2 && !h3.trim(), style: { maxWidth: w3.postalMaxWidth }, "aria-label": w3.postalAriaLabel, autoComplete: "postal-code", inputMode: w3.postalInputMode }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.cityPlaceholder, value: u, onChange: (e2) => {
    m(e2.target.value), v(null);
  }, $hasError: !!g2 && !u.trim(), "aria-label": w3.cityAriaLabel, autoComplete: "address-level2" }), !w3.postalFirst && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.postalPlaceholder, value: h3, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _(), $hasError: !!g2 && !h3.trim(), style: { maxWidth: w3.postalMaxWidth }, "aria-label": w3.postalAriaLabel, autoComplete: "postal-code", inputMode: w3.postalInputMode })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ar, { children: [w3.adminPlaceholder && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.adminPlaceholder, value: p3, onChange: (e2) => {
    y(e2.target.value), v(null);
  }, $hasError: !!g2 && !p3.trim(), "aria-label": w3.adminAriaLabel ?? w3.adminPlaceholder, autoComplete: "address-level1" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { value: Dr(s2), readOnly: true, $hasError: false, style: { opacity: 0.7 }, "aria-label": "Country", autoComplete: "country-name", tabIndex: -1 })] })] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ar, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.cityPlaceholder, value: u, onChange: (e2) => {
    m(e2.target.value), v(null);
  }, $hasError: !!g2 && !u.trim(), "aria-label": w3.cityAriaLabel, autoComplete: "address-level2" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(nr, { value: p3, onChange: (e2) => {
    y(e2.target.value), v(null);
  }, $hasError: !!g2 && !p3, style: { maxWidth: w3.adminMaxWidth }, "aria-label": w3.adminAriaLabel, autoComplete: "address-level1", children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "", disabled: true, children: w3.adminPlaceholder }), w3.adminOptions?.map(((t6) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: t6, children: t6 }, t6)))] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: w3.postalPlaceholder, value: h3, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _(), $hasError: !!g2 && !h3.trim(), style: { maxWidth: w3.postalMaxWidth }, "aria-label": w3.postalAriaLabel, autoComplete: "postal-code", inputMode: w3.postalInputMode })] }), g2 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: g2 })] }) });
};
var Ur = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n2] = (0, import_react2.useState)(""), [a, s2] = (0, import_react2.useState)(""), [l, c2] = (0, import_react2.useState)(null), d = () => {
    i2.trim() ? a ? o2({ city: i2.trim(), country: a }) : c2("Birth country is required") : c2("Birth city is required");
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: MapPin, title: "Place of birth", subtitle: "Enter your city and country of birth.", primaryCta: { label: "Continue", onClick: d }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: "City of birth", value: i2, onChange: (e2) => {
    n2(e2.target.value), c2(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && d(), $hasError: !!l && !i2.trim(), autoFocus: true, "aria-label": "City of birth", autoComplete: "off" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(nr, { value: a, onChange: (e2) => {
    s2(e2.target.value), c2(null);
  }, $hasError: !!l && !a, "aria-label": "Country of birth", autoComplete: "country", children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "", disabled: true, children: "Select birth country" }), Pt.map(((t6) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: t6.code, children: t6.name }, t6.code)))] }), l && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: l })] }) });
};
var qr = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n2] = (0, import_react2.useState)(""), [a, s2] = (0, import_react2.useState)(null);
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: Globe, title: "Country of residence", subtitle: "Select your country of residence. This determines your verification requirements.", primaryCta: { label: "Continue", onClick: () => {
    i2 ? o2(i2) : s2("Please select your country of residence");
  } }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(nr, { value: i2, onChange: (e2) => {
    n2(e2.target.value), s2(null);
  }, $hasError: !!a, "aria-label": "Country of residence", autoComplete: "country", children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "", disabled: true, children: "Select country" }), Pt.map(((t6) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: t6.code, children: t6.name }, t6.code)))] }), a && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: a })] }) });
};
var zr = ({ onClose: r2, onDobSubmitted: o2, region: i2 = "us" }) => {
  let [n2, a] = (0, import_react2.useState)(""), [s2, l] = (0, import_react2.useState)(null), c2 = "eu" === i2, d = () => {
    let e2 = n2.replace(/\D/g, ""), t6 = Number.parseInt(e2.slice(0, 2), 10), r3 = Number.parseInt(e2.slice(2, 4), 10), i3 = Number.parseInt(e2.slice(4, 8), 10), a2 = c2 ? t6 : r3, s3 = c2 ? r3 : t6, d2 = new Date(i3, s3 - 1, a2), u = /* @__PURE__ */ new Date(), m = new Date(u.getFullYear() - 18, u.getMonth(), u.getDate());
    8 !== e2.length || d2.getFullYear() !== i3 || d2.getMonth() !== s3 - 1 || d2.getDate() !== a2 || i3 < 1900 || d2 > m ? l("Enter a valid date of birth") : o2?.({ day: a2, month: s3, year: i3 });
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: Calendar, title: "Add date of birth", subtitle: "You must be at least 18 years old.", primaryCta: { label: "Continue", onClick: d }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: c2 ? "DD/MM/YYYY" : "MM/DD/YYYY", value: n2, onChange: (e2) => {
    a(((e3) => {
      let t6 = e3.replace(/\D/g, "").slice(0, 8);
      return [t6.slice(0, 2), t6.slice(2, 4), t6.slice(4, 8)].filter(Boolean).join("/");
    })(e2.target.value)), l(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && d(), $hasError: !!s2, inputMode: "numeric", maxLength: 10, autoFocus: true }), s2 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: s2 })] }) });
};
var Vr = ({ onClose: t6, onSubmit: r2, isSandbox: o2 }) => {
  let i2 = pl(((e2) => e2?.stripeSession?.context.kycMissingIdentifiers)), n2 = pl(((e2) => e2?.stripeSession?.context.kycMissingAlternatives)), a = pl(((e2) => e2?.stripeSession?.context.kycInvalidIdentifiers));
  return (0, import_jsx_runtime25.jsx)(Or, { onClose: t6, onSubmit: r2, isSandbox: o2, missingMica: i2, alternatives: n2, invalidIdentifiers: a });
};
var Or = ({ onClose: r2, onSubmit: o2, isSandbox: i2, missingMica: n2, alternatives: a, invalidIdentifiers: s2 }) => {
  let [l, c2] = (0, import_react2.useState)({}), [d, u] = (0, import_react2.useState)({}), [m, p3] = (0, import_react2.useState)(null), [y, h3] = (0, import_react2.useState)(null), [f, g2] = (0, import_react2.useState)(null), v = (e2) => (i2 ? Ie[e2] : void 0) ?? l[e2] ?? "", b = (e2) => {
    let t6 = v(e2);
    return i2 || f === e2 ? t6 : t6.replace(/[^\s/-]/g, "\u2022");
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: FileText, title: "Identity verification", subtitle: "Provide your national identity numbers.", primaryCta: { label: "Continue", onClick: () => {
    let e2 = [];
    for (let t7 of n2 ?? []) {
      let r3 = (a ?? []).find(((e3) => e3.original_missing_identifiers.includes(t7.type))) && d[t7.type] || t7.type, o3 = v(r3).trim();
      if (!o3) return h3(r3), void p3(`Please provide your ${Le[r3] ?? r3}`);
      e2.push({ type: r3, value: o3 });
    }
    let t6 = e2.find(((e3) => !(({ type: e4, value: t7 }) => {
      let r3 = Pe[e4];
      return !r3 || r3(t7);
    })(e3)));
    if (t6) return h3(t6.type), void p3(`Enter a valid ${Le[t6.type] ?? t6.type}`);
    o2(e2);
  } }, watermark: true, isSandbox: i2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [(n2 ?? []).map(((r3) => {
    let o3 = (a ?? []).find(((e2) => e2.original_missing_identifiers.includes(r3.type)));
    if (o3) {
      let n3 = d[r3.type] || r3.type;
      return (0, import_jsx_runtime25.jsxs)(ar, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("select", { value: n3, onChange: (e2) => {
        u(((t6) => ({ ...t6, [r3.type]: e2.target.value }))), g2(null), p3(null), h3(null);
      }, style: { flex: "0 0 auto", padding: "6px" }, children: [r3.type, ...o3.alternative_missing_identifiers].map(((t6) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: t6, children: Le[t6] ?? t6 }, t6))) }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: Le[n3] ?? n3, value: b(n3), onChange: (e2) => {
        c2(((t6) => ({ ...t6, [n3]: e2.target.value }))), p3(null), h3(null);
      }, onFocus: () => g2(n3), onBlur: () => g2(null), readOnly: i2 && !!Ie[n3], $hasError: y === n3 || (s2?.includes(n3) ?? false) })] }, r3.type);
    }
    return (0, import_jsx_runtime25.jsx)(or, { placeholder: Le[r3.type] ?? r3.type, value: b(r3.type), onChange: (e2) => {
      c2(((t6) => ({ ...t6, [r3.type]: e2.target.value }))), p3(null), h3(null);
    }, onFocus: () => g2(r3.type), onBlur: () => g2(null), readOnly: i2 && !!Ie[r3.type], $hasError: y === r3.type || (s2?.includes(r3.type) ?? false) }, r3.type);
  })), m && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: m }), s2 && s2.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ir, { children: ["Invalid format for:", " ", s2.map(((e2) => Le[e2] ?? e2)).join(", ")] })] }) });
};
var Kr = ({ onClose: r2, onNameSubmitted: o2, isSandbox: i2 }) => {
  let [n2, a] = (0, import_react2.useState)(""), [s2, l] = (0, import_react2.useState)(i2 ? "Verified" : ""), [c2, d] = (0, import_react2.useState)(null), u = () => {
    n2.trim() && s2.trim() ? o2?.({ firstName: n2.trim(), lastName: s2.trim() }) : d("First and last name are required");
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: User, title: "Add name", subtitle: "Please enter your full legal name as it appears on your government-issued ID.", primaryCta: { label: "Continue", onClick: u }, watermark: true, isSandbox: i2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: "First name", value: n2, onChange: (e2) => {
    a(e2.target.value), d(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && u(), $hasError: !!c2 && !n2.trim(), autoFocus: true }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: "Last name", value: s2, onChange: (e2) => {
    l(e2.target.value), d(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && u(), $hasError: !!c2 && !s2.trim(), readOnly: i2 }), c2 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: c2 })] }) });
};
var Yr = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n2] = (0, import_react2.useState)([]), [a, s2] = (0, import_react2.useState)(""), [l, c2] = (0, import_react2.useState)(null), d = (0, import_react2.useRef)(false), u = Pt.filter(((e2) => !i2.includes(e2.code))), m = i2.map(((e2) => Pt.find(((t6) => t6.code === e2)))).filter(((e2) => !!e2)), p3 = (e2) => {
    let t6 = e2.trim().toLowerCase();
    return Pt.find(((e3) => e3.code.toLowerCase() === t6 || e3.name.toLowerCase() === t6));
  }, y = (e2) => {
    let t6 = e2.trim().toLowerCase();
    return t6 ? Pt.filter(((e3) => e3.code.toLowerCase().includes(t6) || e3.name.toLowerCase().includes(t6))) : Pt;
  }, h3 = y(a), f = h3.map(((e2) => e2.name)), g2 = (e2) => {
    let t6 = y(e2), r3 = p3(e2) ?? (1 === t6.length ? t6[0] : void 0);
    r3 && (n2(((e3) => e3.includes(r3.code) ? e3 : [...e3, r3.code])), s2(""), c2(null));
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: Globe, title: "Nationality", subtitle: "Select your nationality or nationalities.", primaryCta: { label: "Continue", onClick: () => {
    let e2 = p3(a), t6 = e2 && !i2.includes(e2.code) ? [...i2, e2.code] : i2;
    t6.length ? o2(t6) : c2("Please select at least one nationality");
  } }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(sr, { items: f, value: null, inputValue: a, onInputValueChange: (e2) => {
    d.current && (d.current = false, p3(e2)) || s2(e2);
  }, onValueChange: (e2) => ((e3) => {
    e3 && (d.current = true, g2(e3));
  })("string" == typeof e2 ? e2 : null), children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(lr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(cr, { $hasError: !!l, "aria-label": "Nationality", autoComplete: "country", disabled: !u.length, placeholder: i2.length ? "Add another nationality" : "Search nationality", onKeyDown: (e2) => {
    "Enter" === e2.key && (e2.preventDefault(), g2(e2.currentTarget.value));
  } }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(dr, { "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Search, { size: 18 }) })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ur, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(mr, { side: "bottom", sideOffset: 4, collisionAvoidance: { side: "none", align: "shift", fallbackAxisSide: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(pr, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(yr, { children: (r3) => {
    let o3 = h3.find(((e2) => e2.name === r3));
    return o3 ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(fr, { value: o3.name, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: o3.name }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(hr, { children: i2.includes(o3.code) ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Check, { size: 16 }) : o3.code })] }, o3.code) : null;
  } }) }) }) })] }), !!m.length && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(gr, { "aria-label": "Selected nationalities", children: m.map(((r3) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(vr, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(br, { type: "button", onClick: () => ((e2) => {
    n2(((t6) => t6.filter(((t7) => t7 !== e2)))), c2(null);
  })(r3.code), "aria-label": `Remove ${r3.name}`, size: "sm", children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: r3.name }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(X, { size: 14 })] }) }, r3.code))) }), l && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: l })] }) });
};
var Hr = ({ onClose: t6, onPhoneSubmitted: r2, onPhoneBack: o2, defaultCountry: i2 }) => {
  let n2 = (0, import_react2.useRef)(null), [a, s2] = (0, import_react2.useState)(false), [l, c2] = (0, import_react2.useState)(false);
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: t6, showBack: !!o2, onBack: o2 ?? void 0, icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Xt, { height: 24 }), iconVariant: "logo", title: "Add phone number", subtitle: "Enter your phone number to continue with Link.", primaryCta: { label: "Submit", onClick: () => {
    n2.current?.isValid && (c2(true), r2?.(oi(n2.current.qualifiedPhoneNumber)));
  }, disabled: !a, loading: l }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(w, { stacked: true, noIncludeSubmitButton: true, hideRecent: true, defaultCountry: i2, onChange: (e2) => {
    n2.current = e2, s2(e2.isValid);
  }, onSubmit: async (e2) => {
    c2(true), r2?.(oi(e2.qualifiedPhoneNumber));
  } }) });
};
var Wr = ({ onClose: r2, onSsnSubmitted: o2, appName: i2, isSandbox: n2 }) => {
  let [a, s2] = (0, import_react2.useState)(n2 ? "000-00-0000" : ""), [l, c2] = (0, import_react2.useState)(null), [d, u] = (0, import_react2.useState)(true), m = () => {
    let e2 = a.replace(/\D/g, "");
    9 === e2.length ? o2?.(e2) : c2("Enter your full 9-digit SSN");
  };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: Lock, title: "Add social security number", subtitle: `Required to verify your identity. ${i2} will not store your SSN.`, primaryCta: { label: "Continue", onClick: m }, watermark: true, isSandbox: n2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(rr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(or, { placeholder: "XXX-XX-XXXX", value: n2 || d ? a : a.replace(/\d/g, "\u2022"), onChange: (e2) => {
    s2(((e3) => {
      let t6 = e3.replace(/\D/g, "").slice(0, 9);
      return [t6.slice(0, 3), t6.slice(3, 5), t6.slice(5, 9)].filter(Boolean).join("-");
    })(e2.target.value)), c2(null);
  }, onFocus: () => u(true), onBlur: () => u(false), onKeyDown: (e2) => "Enter" === e2.key && m(), $hasError: !!l, type: "text", inputMode: "numeric", autoComplete: "off", maxLength: 11, readOnly: n2, autoFocus: true }), l && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ir, { children: l })] }) });
};
var Qr = ({ onClose: r2, amount: o2, appName: i2, currencySymbol: n2, paymentMethodLabel: a, fee: s2, destinationAmount: l, destinationToken: c2, destinationNetwork: d, tokenIconUrl: u, networkIconUrl: m, opts: p3, onConfirmCheckout: y, quoteExpiresAt: h3, onRefreshQuote: f, initialLoading: g2 = false }) => {
  let [v, b] = (0, import_react2.useState)(g2), [C, w3] = (0, import_react2.useState)(false), k = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)((() => {
    if (!h3 || !f) return;
    let e2 = Math.max(h3 - Date.now() - 1e4, 0);
    return k.current = setTimeout((() => {
      w3(true), f().finally((() => w3(false)));
    }), e2), () => {
      k.current && clearTimeout(k.current);
    };
  }), [h3, f]);
  let _ = p3?.destination.address ?? "", x = o(_, 4, 4);
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, title: "Approve transaction", subtitle: `${i2} wants your permission for this transaction.`, primaryCta: { label: "Approve", onClick: () => {
    k.current && clearTimeout(k.current), b(true), y?.();
  }, loading: v, disabled: C }, watermark: true, isSandbox: "sandbox" === p3?.environment, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Cr, { children: [u || m ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(wr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(kr, { children: [u && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(_r, { src: u, alt: c2 }), m && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(xr, { src: m, alt: d })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Sr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Er, { children: "You receive" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ar, { children: [l, " ", c2, " on ", d] })] })] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Sr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Er, { children: "You receive" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ar, { children: [l, " ", c2, " on ", d] })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Pr, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ir, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Lr, { children: "Total amount" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Tr, { children: [n2, o2] })] }), a && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ir, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Lr, { children: "From" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tr, { children: a })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ir, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Lr, { children: "To" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(p, { iconOnly: true, value: _, iconSize: 16, children: x })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ir, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Lr, { children: "Estimated fee" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tr, { children: s2 })] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Ir, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Lr, { children: "Processing time" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tr, { children: "Instant" })] })] })] }) });
};
var Zr = ({ onClose: o2 }) => {
  let n2 = (0, import_react2.useRef)(false), [a, s2] = (0, import_react2.useState)(null), l = pl(((e2) => "sandbox" === e2?.opts?.environment));
  return (0, import_react2.useEffect)((() => {
    n2.current || (n2.current = true, (async () => {
      let e2 = Te().onramp;
      try {
        if (!e2.promptUserAttestation) throw Error("Stripe onramp promptUserAttestation is unavailable");
        return await e2.promptUserAttestation("eu_carf", (({ result: e3 }) => {
          if ($e() && "confirmed" === e3) {
            let e4 = Te(), t6 = [...e4.context.kycProvidedFields ?? [], "attestation"];
            wl({ stripeSession: { ...e4, context: { ...e4.context, kycProvidedFields: t6 } } }), bt(he("eu-attestation"));
          }
        }));
      } catch (e3) {
        return ze(e3), null;
      }
    })().then(((e2) => {
      e2 && s2(e2);
    })));
  }), []), a ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [l ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Jt, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(gt2, { element: a, minHeight: 480 })] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: o2, iconVariant: "loading", title: "Loading attestation...", watermark: true });
};
var Gr = ({ size: r2 = 64, ...o2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("svg", { width: r2, height: r2, viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o2, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z", fill: "#00D66F" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M30.5274 12.8003H20.6587C22.5787 20.8259 28.1851 27.6867 35.1995 32.0003C28.1723 36.3139 22.5787 43.1747 20.6587 51.2003H30.5274C32.9722 43.7763 39.7435 37.3251 48.0634 36.0067V27.9811C39.7307 26.6755 32.9594 20.2243 30.5274 12.8003Z", fill: "#011E0F" })] });
var Xr = ({ mode: t6, onClose: r2, onLinkAccountConfirmed: o2, onLinkAccountBack: i2, userEmail: n2 }) => {
  let a = se(), s2 = a?.name ?? "This app", l = "connect" === t6 ? { title: "Connect to Link", subtitle: `${s2} uses Link for quicker and easier checkout.`, description: `${s2} will be able to view your Link account details, identity information, and saved payments.`, cta: "Continue" } : { title: "Create a Link account", subtitle: "With Link, you can securely save your information for faster checkout.", description: null, cta: "Continue" };
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, showBack: !!i2, onBack: i2 ?? void 0, icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Gr, { size: 64 }), iconVariant: "logo", title: l.title, subtitle: l.subtitle, primaryCta: { label: l.cta, onClick: () => o2?.() }, helpText: l.description ?? void 0, watermark: true, children: "create" === t6 && n2 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)($r, { children: n2 }) });
};
var Jr = ({ onClose: r2, tokens: o2, onSelectToken: i2, onAddNew: n2, isLoading: a }) => {
  let [s2, l] = (0, import_react2.useState)(o2[0]?.id ?? null);
  return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: r2, icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Xt, { height: 24 }), iconVariant: "logo", title: "Select payment method", subtitle: "Choose from your saved cards. Debit cards typically have higher success rates than credit cards.", primaryCta: { label: "Continue", onClick: () => {
    let e2 = o2.find(((e3) => e3.id === s2));
    e2 && i2(e2);
  }, loading: a, disabled: !s2 }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(to, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ro, { children: [o2.map(((r3) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(oo, { $selected: s2 === r3.id, onClick: () => l(r3.id), disabled: a, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(io, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CreditCard, { size: 16 }) }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(no, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ao, { children: eo(r3.card?.brand, r3.card?.funding) }), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(so, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(lo, { children: "\u2022\u2022\u2022\u2022" }), " ", r3.card?.last4 ?? ""] })] })] }, r3.id))), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(co, { onClick: n2, disabled: a, children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Plus, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: "Add new card" })] })] }) }) });
};
var eo = (e2, t6) => {
  if (!e2) return "Card";
  let r2 = e2.charAt(0).toUpperCase() + e2.slice(1);
  return t6 ? `${r2} ${t6.charAt(0).toUpperCase()}${t6.slice(1)}` : r2;
};
var to = gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;
var ro = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
var oo = gt.button`
  && {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: ${(e2) => e2.$selected ? "var(--privy-color-background-2, #f8f9ff)" : "transparent"};
    border: ${(e2) => e2.$selected ? "1.5px solid var(--privy-color-accent)" : "1px solid var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    cursor: pointer;
    transition: border-color 0.15s ease;
    box-shadow: ${(e2) => e2.$selected ? "0px 2px 6px rgba(50, 50, 93, 0.06), 0px 1px 1.5px rgba(0, 0, 0, 0.06)" : "none"};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
var io = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--privy-color-foreground-3);
`;
var no = gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;
var ao = gt.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  letter-spacing: -0.15px;
`;
var so = gt.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`;
var lo = gt.span`
  font-weight: 500;
`;
var co = gt.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--privy-color-accent);
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var uo = ({ element: o2, isSandbox: i2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [i2 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Jt, { children: "You're in a sandbox environment. Use 000-000 as the Link verification code." }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(gt2, { element: o2, minHeight: 300, bleed: true })] });
var mo = ({ onClose: t6, onVerified: r2 }) => {
  let o2 = (0, import_react2.useRef)(false), [i2, n2] = (0, import_react2.useState)(false), a = (0, import_react2.useCallback)((async () => {
    n2(false);
    let e2 = await (async (e3 = {}) => {
      let t7 = Te();
      try {
        let r3 = await t7.onramp.verifyDocuments();
        if (!$e()) return "inactive";
        if ("abandoned" === r3?.result) return "abandoned";
        bt("kyc");
        let o3 = await _a({ operation: () => me(t7.privy, { environment: t7.context.config.environment }), until: (e4) => {
          if ("active" !== e4.status) return false;
          let t8 = e4.kyc_tiers?.find(((e5) => "l2" === e5.tier));
          return "verified" === t8?.verification_status;
        }, delay: 0, interval: Ze, attempts: Math.ceil(30), signal: Ne() });
        if (!$e() || "aborted" === o3.status) return "inactive";
        if ("max_attempts" === o3.status) {
          let e4 = await me(t7.privy, { environment: t7.context.config.environment });
          if ("active" === e4.status) {
            let t8 = e4.kyc_tiers?.find(((e5) => "l2" === e5.tier));
            if ("rejected" === t8?.verification_status) {
              if (ge(e4.kyc_tiers)) throw Error("Document verification was rejected. Contact Stripe support for help.");
              throw Error("Document verification was rejected. Try again.");
            }
          }
        }
        return (e3.proceedToPayment ?? true) && await ct(), "done";
      } catch (e4) {
        return ze(e4), "error";
      }
    })({ proceedToPayment: !r2 });
    "abandoned" === e2 && n2(true), "done" === e2 && r2?.();
  }), [r2]);
  return (0, import_react2.useEffect)((() => {
    o2.current || (o2.current = true, a());
  }), [a]), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(tr, i2 ? { showClose: true, onClose: t6, icon: CircleX, iconVariant: "error", title: "Verification canceled", subtitle: "Try again to finish identity verification.", primaryCta: { label: "Try again", onClick: a }, watermark: true } : { showClose: true, onClose: t6, iconVariant: "loading", title: "Verifying identity", subtitle: "Please complete document and selfie verification...", watermark: true });
};
var po = [];
var yo = ({ step: t6, element: r2, onClose: o2, isLoading: n2 }) => {
  let a = se(), s2 = a?.name ?? "This app", d = pl(((e2) => e2?.email ?? null)), u = pl(((e2) => e2?.amount ?? "")), m = pl(((e2) => e2?.opts ?? null)), p3 = pl(((e2) => e2?.stripeConfirmCheckoutDetails ?? null)), y = pl(((e2) => e2?.destinationCurrencyIconUrl ?? null)), h3 = pl(((e2) => e2?.destinationNetworkIconUrl ?? null)), f = pl(((e2) => e2?.destinationCurrencySymbol ?? null)), g2 = pl(((e2) => e2?.stripeSession?.context.kycAddress?.country)), v = pl(((e2) => e2?.stripeSession?.context.savedPaymentTokens)) ?? po, b = pl(((e2) => e2?.stripeSession?.context.documentVerificationAction)), C = pl(((e2) => e2?.stripeSession?.context.kycRegion ?? "us")), w3 = () => {
    Al(), wl({ state: { status: "select-amount" }, isLoading: false });
  }, k = b ? () => {
    let e2 = Te();
    if ((() => {
      let e3 = Te(), { documentVerificationAction: t8, ...r3 } = e3.context;
      wl({ stripeSession: { ...e3, context: r3 } });
    })(), "retry-checkout" === b.type) return void At();
    let t7 = e2.context.paymentToken;
    t7 && lt({ paymentToken: t7, loader: b.loader });
  } : void 0;
  switch (t6) {
    case "choose-email":
      return (0, import_jsx_runtime25.jsx)(Nr, { onClose: o2, onEmailChosen: Rt, onEmailBack: w3, userEmail: d });
    case "connect-link":
      return (0, import_jsx_runtime25.jsx)(Xr, { mode: "connect", onClose: o2, onLinkAccountConfirmed: () => {
        Ht("connect");
      }, onLinkAccountBack: w3, userEmail: d });
    case "create-link-account":
      return (0, import_jsx_runtime25.jsx)(Xr, { mode: "create", onClose: o2, onLinkAccountConfirmed: () => {
        Ht("create");
      }, onLinkAccountBack: w3, userEmail: d });
    case "collect-country":
      return (0, import_jsx_runtime25.jsx)(qr, { onClose: o2, onSubmit: Lt });
    case "collect-contact":
      return (0, import_jsx_runtime25.jsx)(Hr, { onClose: o2, onPhoneSubmitted: Zt, onPhoneBack: w3, defaultCountry: g2 });
    case "collect-name":
      return (0, import_jsx_runtime25.jsx)(Kr, { onClose: o2, onNameSubmitted: Ot, isSandbox: "sandbox" === m?.environment });
    case "collect-dob":
      return (0, import_jsx_runtime25.jsx)(zr, { onClose: o2, onDobSubmitted: Vt, region: C });
    case "collect-ssn":
      return (0, import_jsx_runtime25.jsx)(Wr, { onClose: o2, onSsnSubmitted: Kt, appName: s2, isSandbox: "sandbox" === m?.environment });
    case "collect-address":
      return (0, import_jsx_runtime25.jsx)(Br, { onClose: o2, onAddressSubmitted: zt, onBack: w3 });
    case "collect-nationality":
      return (0, import_jsx_runtime25.jsx)(Yr, { onClose: o2, onSubmit: Wt });
    case "collect-birth-location":
      return (0, import_jsx_runtime25.jsx)(Ur, { onClose: o2, onSubmit: Ct });
    case "collect-identifiers":
      return (0, import_jsx_runtime25.jsx)(Vr, { onClose: o2, onSubmit: Mt, isSandbox: "sandbox" === m?.environment });
    case "eu-attestation":
      return (0, import_jsx_runtime25.jsx)(Zr, { onClose: o2 });
    case "verify-documents":
      return (0, import_jsx_runtime25.jsx)(mo, { onClose: o2, onVerified: k });
    case "authenticating":
      return (0, import_jsx_runtime25.jsx)(uo, { element: r2, isSandbox: "sandbox" === m?.environment });
    case "kyc":
      return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: o2, iconVariant: "loading", title: "Verifying identity", subtitle: "This may take a moment...", watermark: true, isSandbox: "sandbox" === m?.environment });
    case "select-payment":
      return (0, import_jsx_runtime25.jsx)(Jr, { onClose: o2, tokens: v, onSelectToken: Qt, onAddNew: () => {
        ct({ skipTokenCheck: true });
      }, isLoading: n2 });
    case "payment":
      return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: o2, showBack: true, onBack: w3, headerTitle: "Add payment method", watermark: true, isSandbox: "sandbox" === m?.environment, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(gt2, { element: r2, minHeight: 300 }) });
    case "confirm-checkout":
      return (0, import_jsx_runtime25.jsx)(Qr, { onClose: o2, amount: p3?.sourceAmount ?? u, appName: s2, currencySymbol: p3?.currencySymbol ?? "$", paymentMethodLabel: p3?.paymentMethodLabel ?? null, fee: p3?.fee ?? "Included", destinationAmount: p3?.destinationAmount ?? u, destinationToken: p3?.destinationToken ?? f ?? m?.destination.asset?.toUpperCase() ?? "", destinationNetwork: p3?.destinationNetwork ?? "", tokenIconUrl: y, networkIconUrl: h3, opts: m, onConfirmCheckout: At, quoteExpiresAt: p3?.quoteExpiresAt ?? null, onRefreshQuote: Gt });
    case "checkout":
      return (0, import_jsx_runtime25.jsx)(tr, { showClose: true, onClose: o2, iconVariant: "loading", watermark: true, isSandbox: "sandbox" === m?.environment });
    default:
      return null;
  }
};
var ho = ({ onClose: t6 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(n, { showClose: true, onClose: t6, iconVariant: "loading", title: "Processing transaction", subtitle: "Your purchase is in progress. You can leave this screen \u2014 we\u2019ll notify you when it\u2019s complete.", primaryCta: { label: "Done", onClick: t6 }, watermark: true });
var fo = { title: "Something went wrong", subtitle: "We couldn't complete your transaction. Please try again.", primaryCtaLabel: "Try again" };
var go = { [i.ONRAMP_UNSUPPORTED_INFORMATION]: { ...fo, subtitle: "This payment method is not available in your region. Try another payment method." }, [i.ONRAMP_TRANSACTION_LIMIT_REACHED]: { title: "Purchase limit reached", subtitle: "This purchase is above the current limit. Try a smaller amount.", primaryCtaLabel: "Edit amount" } };
var vo = (e2) => {
  let t6 = je(e2);
  return t6 && go[t6] ? go[t6] : e2?.message ? { ...fo, subtitle: e2.message } : fo;
};
var bo = ({ onClose: t6, onRetry: r2, error: o2 }) => {
  let i2 = vo(o2);
  return (0, import_jsx_runtime25.jsx)(n, { showClose: true, onClose: t6, icon: CircleX, iconVariant: "error", title: i2.title, subtitle: i2.subtitle, primaryCta: { label: i2.primaryCtaLabel, onClick: r2 }, secondaryCta: { label: "Close", onClick: t6 }, watermark: true });
};
var Co = ({ onClose: t6 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(n, { showClose: true, onClose: t6, icon: Check, iconVariant: "success", title: "Transaction confirmed", subtitle: "Your purchase is processing. Funds should arrive in your wallet within a few minutes.", primaryCta: { label: "Done", onClick: t6 }, watermark: true });
var wo = { CREDIT_DEBIT_CARD: "card", APPLE_PAY: "Apple Pay", GOOGLE_PAY: "Google Pay", BANK: "bank deposit", BANK_TRANSFER: "bank deposit", SEPA: "bank deposit", PIX: "PIX", STRIPE_LINK: "Link" };
var ko = (e2) => wo[e2] ?? e2.replace(/_/g, " ").toLowerCase().replace(/^\w/, ((e3) => e3.toUpperCase()));
var _o = { CREDIT_DEBIT_CARD: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CreditCard, { size: 14 }), APPLE_PAY: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Smartphone, { size: 14 }), GOOGLE_PAY: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Smartphone, { size: 14 }), BANK: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Building, { size: 14 }), BANK_TRANSFER: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Building, { size: 14 }), SEPA: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Building, { size: 14 }), PIX: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Wallet, { size: 14 }), STRIPE_LINK: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Gr, { size: 14 }) };
var xo = ({ opts: o2, onClose: i2, onBack: n2, onEditSourceAsset: a, onEditPaymentMethod: s2, onContinue: l, onAmountChange: c2, amount: d, selectedQuote: u, quotesWarning: m, quotesErrors: p3, quotesCount: y, isLoading: h3, destinationCurrencySymbol: f }) => {
  let g2 = se().appearance.palette.colorScheme, v = (({ destinationCurrencySymbol: e2 }) => e2 ?? "crypto")({ destinationCurrencySymbol: f });
  return (0, import_jsx_runtime25.jsxs)(n, { showClose: true, onClose: i2, showBack: !!n2, onBack: n2, headerTitle: `Buy ${v}`, primaryCta: { label: "Continue", onClick: l, loading: h3, disabled: !u }, helpText: m ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(t2, { theme: g2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Eo, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, "amount_too_low" === m ? { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Ao, { children: "Amount too low" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Po, { children: "Please choose a higher amount to continue." })] } : { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Ao, { children: "Unable to get quotes" }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Po, { children: p3?.[0]?.error ?? "Something went wrong. Please try again." })] }) }) }) : u && y > 1 ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Io, { onClick: s2, children: [(b = u.payment_method_category ?? u.payment_method, _o[b] ?? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CreditCard, { size: 14 })), /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { children: ["Pay with", " ", ko(u.payment_method_category ?? u.payment_method)] }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronRight, { size: 14 })] }) : null, watermark: true, children: [u?.warning && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(So, { theme: g2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Eo, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Po, { children: u.warning }) }) }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(c, { currency: o2.source.selectedAsset, value: d, onChange: c2, inputMode: "decimal", autoFocus: true }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(p2, { selectedAsset: o2.source.selectedAsset, onEditSourceAsset: a })] });
  var b;
};
var So = gt(t3)`
  margin-bottom: 0.75rem;
`;
var Eo = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`;
var Ao = gt.span`
  font-weight: 600;
`;
var Po = gt.span`
  font-weight: 400;
`;
var Io = gt.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`;
var Lo = { CREDIT_DEBIT_CARD: "Credit / debit card", APPLE_PAY: "Apple Pay", GOOGLE_PAY: "Google Pay", BANK: "Bank transfer", BANK_TRANSFER: "Bank transfer", SEPA: "SEPA", PIX: "PIX", STRIPE_LINK: "Link" };
var To = (e2) => Lo[e2] ?? e2.replace(/_/g, " ").toLowerCase().replace(/^\w/, ((e3) => e3.toUpperCase()));
var $o = { CREDIT_DEBIT_CARD: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CreditCard, { size: 20 }), APPLE_PAY: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(h2, { width: 20, height: 20 }), GOOGLE_PAY: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(t4, { width: 20, height: 20 }), BANK: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Landmark, { size: 20 }), BANK_TRANSFER: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Landmark, { size: 20 }), SEPA: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Landmark, { size: 20 }), PIX: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Landmark, { size: 20 }), STRIPE_LINK: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Gr, { size: 20 }) };
var No = (t6) => $o[t6] ?? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CreditCard, { size: 20 });
var Ro = ({ onClose: r2, onSelectPaymentMethod: o2, quotes: i2, isLoading: n2 }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(n, { showClose: true, onClose: r2, title: "Select payment method", subtitle: "Choose how you'd like to pay", watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Mo, { children: i2.map(((r3, i3) => {
  let a = r3.payment_method_category ?? r3.payment_method;
  return (0, import_jsx_runtime25.jsx)(Fo, { onClick: () => o2(r3), disabled: n2, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Do, { children: [/* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Bo, { children: No(a) }), /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(jo, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Uo, { children: To(a) }) })] }) }, `${r3.provider}-${r3.payment_method}-${i3}`);
})) }) });
var Mo = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;
var Fo = gt.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem 1rem;
  }
`;
var Do = gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
var Bo = gt.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
var jo = gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`;
var Uo = gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;
var qo = ({ onClose: t6, onBack: r2, onContinue: o2, onAmountChange: i2, onSelectSource: n2, onEditSourceAsset: a, onEditPaymentMethod: s2, onSelectPaymentMethod: l, onRetry: c2, opts: d, state: u, amount: m, error: p3, selectedQuote: y, quotesWarning: h3, quotesErrors: f, destinationCurrencySymbol: g2, quotesCount: v, isLoading: b, isInitialQuoteLoading: C, stripeElement: w3 }) => "select-amount" === u.status ? C ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(n, { showClose: true, onClose: t6, iconVariant: "loading" }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(xo, { onClose: t6, onBack: r2, onContinue: o2, onAmountChange: i2, onEditSourceAsset: a, onEditPaymentMethod: s2, opts: d, amount: m, selectedQuote: y, quotesWarning: h3, quotesErrors: f, quotesCount: v, destinationCurrencySymbol: g2, isLoading: b }) : "select-source-asset" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(w2, { onSelectSource: n2, opts: d, isLoading: b }) : "select-payment-method" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Ro, { onClose: t6, onSelectPaymentMethod: l, quotes: u.quotes, isLoading: b }) : "stripe-flow" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(yo, { step: u.step, element: w3, onClose: t6, isLoading: b }) : "provider-confirming" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ho, { onClose: t6 }) : "provider-error" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(bo, { onClose: t6, onRetry: c2, error: p3 }) : "provider-success" === u.status ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Co, { onClose: t6 }) : null;
var zo = { component: () => {
  let { onUserCloseViaDialogOrKeybindRef: t6 } = g(), r2 = pl();
  if (!r2) return null;
  let { opts: i2, state: n2, error: a, isLoading: s2, amount: l, quotesWarning: d, quotesErrors: u, localQuotes: m, localSelectedQuote: y, initialQuotes: h3, initialSelectedQuote: f, destinationCurrencySymbol: g2, stripeElement: v, onBack: b } = r2;
  return t6.current = ue, /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(qo, { onClose: ue, onBack: b, opts: i2, state: n2, error: a, isLoading: s2, isInitialQuoteLoading: null == h3, amount: l, selectedQuote: gl({ localQuotes: m, localSelectedQuote: y, initialSelectedQuote: f }), quotesWarning: d, quotesErrors: u, quotesCount: (m ?? h3)?.length ?? 0, destinationCurrencySymbol: g2, onAmountChange: de, onContinue: dt, onSelectSource: ft, onEditSourceAsset: pt, onEditPaymentMethod: mt, onSelectPaymentMethod: ht, onRetry: yt, stripeElement: v });
} };
export {
  zo as FiatOnrampScreen,
  zo as default
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
