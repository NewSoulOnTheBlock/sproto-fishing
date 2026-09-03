import {
  MagnifyingGlassIcon_default
} from "./chunk-52LU76MD.js";
import {
  e as e2
} from "./chunk-GKBGICJ5.js";
import {
  e
} from "./chunk-TFIKZDBU.js";
import {
  x
} from "./chunk-4BHOTT2W.js";
import {
  p
} from "./chunk-3DDSRDFL.js";
import {
  t as t3
} from "./chunk-PLXAKKNQ.js";
import {
  n as n2
} from "./chunk-JU4Q6HQT.js";
import {
  a,
  i as i2,
  t as t2
} from "./chunk-ZKJ6AAV3.js";
import {
  w
} from "./chunk-2MR7ZHQH.js";
import {
  t,
  v
} from "./chunk-RPCD4HAF.js";
import {
  P,
  W as W2,
  Y
} from "./chunk-H64F7Q3M.js";
import {
  require_react_dom
} from "./chunk-5QJKWR6B.js";
import {
  D,
  E,
  M,
  O as O2,
  R,
  S,
  W,
  _
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  O,
  j,
  u
} from "./chunk-EJB6TW3T.js";
import {
  i,
  n
} from "./chunk-W22FA2JU.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function createLazyMeasurementsView(count, flat, getItemKey) {
  const cache = new Array(count);
  return new Proxy(cache, {
    get(target, prop, receiver) {
      if (typeof prop === "string") {
        const c2 = prop.charCodeAt(0);
        if (c2 >= 48 && c2 <= 57) {
          const i3 = +prop;
          if (Number.isInteger(i3) && i3 >= 0 && i3 < count) {
            let v2 = target[i3];
            if (!v2) {
              const s2 = flat[i3 * 2];
              v2 = target[i3] = {
                index: i3,
                key: getItemKey(i3),
                start: s2,
                size: flat[i3 * 2 + 1],
                end: s2 + flat[i3 * 2 + 1],
                lane: 0
              };
            }
            return v2;
          }
        }
        if (prop === "length") return count;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  let isInitial = true;
  function memoizedFunction() {
    var _a;
    const debugEnabled = !!opts.key && !!((_a = opts.debug) == null ? void 0 : _a.call(opts));
    let depTime = 0;
    if (debugEnabled) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime = 0;
    if (debugEnabled) resultTime = Date.now();
    result = fn(...newDeps);
    if (debugEnabled) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
      opts.onChange(result);
    }
    isInitial = false;
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a3, b) => Math.abs(a3 - b) < 1.01;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return Object.assign(
    function(...args) {
      targetWindow.clearTimeout(timeoutId);
      timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
    },
    {
      // The handle is closure-local, so a caller that has already
      // unsubscribed has no way to stop a queued call. Teardown paths use
      // this to drop the pending invocation instead of letting it land.
      cancel: () => {
        targetWindow.clearTimeout(timeoutId);
      }
    }
  );
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var _isIOSResult;
var isIOSWebKit = () => {
  if (_isIOSResult !== void 0) return _isIOSResult;
  if (typeof navigator === "undefined") return _isIOSResult = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
  const mtp = navigator.maxTouchPoints;
  return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
};
var getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const len = end - start + 1;
  const arr = new Array(len);
  for (let i3 = 0; i3 < len; i3++) {
    arr[i3] = start + i3;
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeOffset = (instance, cb, readOffset) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  let offset = 0;
  const fallback = registerScrollendEvent ? null : debounce(
    targetWindow,
    () => cb(offset, false),
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset = readOffset(element);
    fallback == null ? void 0 : fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  element.addEventListener("scroll", handler, addEventListenerOptions);
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
    fallback == null ? void 0 : fallback.cancel();
  };
};
var observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
  const { horizontal, isRtl } = instance.options;
  return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
});
var measureElement = (element, entry, instance) => {
  if (instance.options.useCachedMeasurements) {
    const index = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index);
    return instance.itemSizeCache.get(key) ?? instance.options.estimateSize(index);
  }
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  if (!entry) {
    const index = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index);
    const cachedSize = instance.itemSizeCache.get(key);
    if (cachedSize !== void 0) {
      return cachedSize;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
var scrollWithAdjustments = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: offset + adjustments,
    behavior
  });
};
var elementScroll = scrollWithAdjustments;
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollState = null;
    this.measurementsCache = [];
    this._flatMeasurements = null;
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.itemSizeCacheVersion = 0;
    this.laneAssignments = /* @__PURE__ */ new Map();
    this.pendingMin = null;
    this.prevLanes = void 0;
    this.lanesChangedFlag = false;
    this.lanesSettling = false;
    this.pendingScrollAnchor = null;
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this._iosDeferredAdjustment = 0;
    this._iosTouching = false;
    this._iosJustTouchEnded = false;
    this._iosTouchEndTimerId = null;
    this._intendedScrollOffset = null;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.now = () => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
    };
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              const node = entry.target;
              const index = this.indexFromElement(node);
              if (!node.isConnected) {
                this.observer.unobserve(node);
                for (const [cacheKey, cachedNode] of this.elementsCache) {
                  if (cachedNode === node) {
                    this.elementsCache.delete(cacheKey);
                    break;
                  }
                }
                return;
              }
              if (!this.isIndexInRange(index)) return;
              if (this.shouldMeasureDuringScroll(index)) {
                this.resizeItem(
                  index,
                  this.options.measureElement(node, entry, this)
                );
              }
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      var _a, _b;
      const merged = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: false,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: false
      };
      for (const key in opts2) {
        const v2 = opts2[key];
        if (v2 !== void 0) merged[key] = v2;
      }
      const prevOptions = this.options;
      let anchor = null;
      let followOnAppend = null;
      let edgeKeysChanged = false;
      if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
        const prevCount = prevOptions.count;
        const nextCount = merged.count;
        const measurements = this.getMeasurements();
        const prevFirstKey = prevCount > 0 ? ((_a = measurements[0]) == null ? void 0 : _a.key) ?? prevOptions.getItemKey(0) : null;
        const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
        const didCountChange = nextCount !== prevCount;
        const didEdgeKeysChange = didCountChange || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey);
        if (didEdgeKeysChange) {
          edgeKeysChanged = true;
          const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
          if (item) {
            anchor = [item.key, this.getScrollOffset() - item.start];
          }
          const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
          if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
            followOnAppend = behavior;
          }
        }
      }
      this.options = merged;
      if (edgeKeysChanged) {
        this.pendingMin = 0;
        this.itemSizeCacheVersion++;
      }
      let anchorResolved = false;
      let anchorDelta = 0;
      if (anchor && this.scrollOffset !== null) {
        const [anchorKey, anchorOffset] = anchor;
        const newMeasurements = this.getMeasurements();
        const { count, getItemKey } = this.options;
        let idx = 0;
        while (idx < count && getItemKey(idx) !== anchorKey) {
          idx++;
        }
        if (idx < count) {
          const anchorItem = newMeasurements[idx];
          if (anchorItem) {
            const newOffset = Math.max(0, anchorItem.start + anchorOffset);
            if (newOffset !== this.scrollOffset) {
              anchorDelta = newOffset - this.scrollOffset;
              this.scrollOffset = newOffset;
              anchorResolved = true;
            }
          }
        }
      }
      if (anchorResolved || followOnAppend) {
        this.pendingScrollAnchor = [
          anchorResolved ? anchor[0] : null,
          anchorResolved ? anchor[1] : 0,
          followOnAppend,
          anchorDelta
        ];
      }
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d2) => d2());
      this.unsubs = [];
      this.observer.disconnect();
      if (this.rafId != null && this.targetWindow) {
        this.targetWindow.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.scrollState = null;
      this.isScrolling = false;
      this.scrollDirection = null;
      this._iosDeferredAdjustment = 0;
      this._iosTouching = false;
      this._iosJustTouchEnded = false;
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            if (isScrolling && this._intendedScrollOffset === null && offset === this.scrollOffset) {
              return;
            }
            if (this._intendedScrollOffset !== null && Math.abs(offset - this._intendedScrollOffset) < 1.5) {
              offset = this._intendedScrollOffset;
            }
            this._intendedScrollOffset = null;
            this.scrollAdjustments = 0;
            const prevOffset = this.getScrollOffset();
            this.scrollDirection = isScrolling ? prevOffset === offset ? this.scrollDirection : prevOffset < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this._flushIosDeferredIfReady();
            if (this.scrollState) {
              this.scheduleScrollReconcile();
            }
            this.maybeNotify();
          })
        );
        if ("addEventListener" in this.scrollElement) {
          const scrollEl = this.scrollElement;
          const onTouchStart = () => {
            this._iosTouching = true;
            this._iosJustTouchEnded = false;
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          };
          const onTouchEnd = () => {
            this._iosTouching = false;
            if (!isIOSWebKit() || this.targetWindow == null) {
              return;
            }
            this._iosJustTouchEnded = true;
            this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false;
              this._iosTouchEndTimerId = null;
              this._flushIosDeferredIfReady();
            }, 150);
          };
          scrollEl.addEventListener(
            "touchstart",
            onTouchStart,
            addEventListenerOptions
          );
          scrollEl.addEventListener(
            "touchend",
            onTouchEnd,
            addEventListenerOptions
          );
          this.unsubs.push(() => {
            scrollEl.removeEventListener("touchstart", onTouchStart);
            scrollEl.removeEventListener("touchend", onTouchEnd);
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const anchor = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null;
      if (anchor && this.scrollElement && this.options.enabled) {
        const [key, _offset, followOnAppend, anchorDelta] = anchor;
        if (key !== null && !followOnAppend) {
          if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
            if (anchorDelta !== 0) {
              this._iosDeferredAdjustment += anchorDelta;
            }
          } else {
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: void 0,
              behavior: void 0
            });
          }
        }
        if (followOnAppend) {
          this.scrollToEnd({ behavior: followOnAppend });
        }
      }
    };
    this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0) return;
      if (this.isScrolling) return;
      if (this._iosTouching) return;
      if (this._iosJustTouchEnded) return;
      const cur = this.getScrollOffset();
      const max = this.getMaxScrollOffset();
      if (cur < 0 || cur > max) return;
      if (this._iosDeferredAdjustment < 0 && cur >= max - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const delta = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0;
      this._scrollToOffset(cur, {
        adjustments: this.scrollAdjustments += delta,
        behavior: void 0
      });
    };
    this.rafId = null;
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap) => {
        const lanesChanged = this.prevLanes !== void 0 && this.prevLanes !== lanes;
        if (lanesChanged) {
          this.lanesChangedFlag = true;
        }
        this.prevLanes = lanes;
        this.pendingMin = null;
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled,
          lanes,
          laneAssignmentMode,
          gap
        };
      },
      {
        key: false
      }
    );
    this.isIndexInRange = (index) => index >= 0 && index < this.options.count;
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count,
        paddingStart,
        scrollMargin,
        getItemKey,
        enabled,
        lanes,
        laneAssignmentMode,
        gap
      }, _itemSizeCacheVersion) => {
        const itemSizeCache = this.itemSizeCache;
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          return [];
        }
        if (this.laneAssignments.size > count) {
          for (const index of this.laneAssignments.keys()) {
            if (index >= count) {
              this.laneAssignments.delete(index);
            }
          }
        }
        if (this.lanesChangedFlag) {
          this.lanesChangedFlag = false;
          this.lanesSettling = true;
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          this.pendingMin = null;
        }
        if (this.measurementsCache.length === 0 && !this.lanesSettling) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        this.pendingMin = null;
        if (this.lanesSettling && this.measurementsCache.length === count) {
          this.lanesSettling = false;
        }
        if (lanes === 1) {
          const need = count * 2;
          let flat = this._flatMeasurements;
          if (!flat || flat.length < need) {
            const next = new Float64Array(need);
            if (flat && min > 0) next.set(flat.subarray(0, min * 2));
            flat = next;
            this._flatMeasurements = flat;
          }
          let runningStart;
          if (min === 0) {
            runningStart = paddingStart + scrollMargin;
          } else {
            const prevIdx = min - 1;
            runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
          }
          for (let i3 = min; i3 < count; i3++) {
            const key = getItemKey(i3);
            const measuredSize = itemSizeCache.get(key);
            const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i3);
            flat[i3 * 2] = runningStart;
            flat[i3 * 2 + 1] = size;
            runningStart += size + gap;
          }
          const view = createLazyMeasurementsView(count, flat, getItemKey);
          this.measurementsCache = view;
          return view;
        }
        const measurements = this.measurementsCache.slice(0, min);
        const laneLastIndex = new Array(lanes).fill(
          void 0
        );
        const laneEnds = new Float64Array(lanes);
        let filledLanes = 0;
        for (let m = 0; m < min; m++) {
          const item = measurements[m];
          if (item) {
            if (laneLastIndex[item.lane] === void 0) filledLanes++;
            laneLastIndex[item.lane] = m;
            laneEnds[item.lane] = item.end;
          }
        }
        for (let i3 = min; i3 < count; i3++) {
          const key = getItemKey(i3);
          const cachedLane = this.laneAssignments.get(i3);
          let lane;
          let start;
          const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
          if (cachedLane !== void 0 && this.options.lanes > 1) {
            lane = cachedLane;
            const prevIndex = laneLastIndex[lane];
            const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
            start = prevInLane ? prevInLane.end + gap : paddingStart + scrollMargin;
          } else if (filledLanes === lanes) {
            let bestLane = 0;
            let bestEnd = laneEnds[0];
            let bestIdx = laneLastIndex[0];
            for (let l2 = 1; l2 < lanes; l2++) {
              const e4 = laneEnds[l2];
              if (e4 < bestEnd || e4 === bestEnd && laneLastIndex[l2] < bestIdx) {
                bestLane = l2;
                bestEnd = e4;
                bestIdx = laneLastIndex[l2];
              }
            }
            lane = bestLane;
            start = bestEnd + gap;
            if (shouldCacheLane) {
              this.laneAssignments.set(i3, lane);
            }
          } else {
            lane = i3 % this.options.lanes;
            start = paddingStart + scrollMargin;
            if (shouldCacheLane) {
              this.laneAssignments.set(i3, lane);
            }
          }
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i3);
          const end = start + size;
          measurements[i3] = {
            index: i3,
            start,
            size,
            end,
            key,
            lane
          };
          if (laneLastIndex[lane] === void 0) filledLanes++;
          laneLastIndex[lane] = i3;
          laneEnds[lane] = end;
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        if (measurements.length === 0 || outerSize === 0) {
          this.range = null;
          return null;
        }
        this.range = calculateRangeImpl(
          measurements,
          outerSize,
          scrollOffset,
          lanes,
          // Pass the typed array so binary search + forward-walk can read
          // start/end directly from Float64Array, skipping the Proxy traps.
          lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
        );
        return this.range;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: "getVirtualIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this.shouldMeasureDuringScroll = (index) => {
      var _a;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") {
        return true;
      }
      const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
      if (scrollIndex !== void 0 && this.range) {
        const bufferSize = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        );
        const minIndex = Math.max(0, scrollIndex - bufferSize);
        const maxIndex = Math.min(
          this.options.count - 1,
          scrollIndex + bufferSize
        );
        return index >= minIndex && index <= maxIndex;
      }
      return true;
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key2) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key2);
          }
        });
        return;
      }
      const index = this.indexFromElement(node);
      if (!this.isIndexInRange(index)) return;
      const key = this.options.getItemKey(index);
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) {
        this.resizeItem(index, this.options.measureElement(node, void 0, this));
      }
    };
    this.resizeItem = (index, size) => {
      var _a, _b;
      if (!this.isIndexInRange(index)) return;
      let cachedSize;
      let itemStart;
      let key;
      const flat = this._flatMeasurements;
      if (this.options.lanes === 1 && flat !== null) {
        key = this.options.getItemKey(index);
        itemStart = flat[index * 2];
        cachedSize = flat[index * 2 + 1];
      } else {
        const item = this.measurementsCache[index];
        if (!item) return;
        key = item.key;
        itemStart = item.start;
        cachedSize = item.size;
      }
      const itemSize = this.itemSizeCache.get(key) ?? cachedSize;
      const delta = size - itemSize;
      if (delta !== 0) {
        const wasAtEnd = this.options.anchorTo === "end" && ((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
        const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
        const scrollOffsetWithAdj = this.getScrollOffset() + this.scrollAdjustments;
        const isFirstMeasure = !this.itemSizeCache.has(key);
        const defaultShouldAdjust = isFirstMeasure ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          itemStart < scrollOffsetWithAdj
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          itemStart + itemSize <= scrollOffsetWithAdj && this.scrollDirection !== "backward"
        );
        const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[index] ?? {
            index,
            key,
            start: itemStart,
            size: cachedSize,
            end: itemStart + cachedSize,
            lane: 0
          },
          delta,
          this
        ) : defaultShouldAdjust);
        if (this.pendingMin === null || index < this.pendingMin) {
          this.pendingMin = index;
        }
        this.itemSizeCache.set(key, size);
        this.itemSizeCacheVersion++;
        let adjustedSync = false;
        if (wasAtEnd) {
          adjustedSync = this.applyScrollAdjustment(
            this.getTotalSize() - prevTotalSize
          );
        } else if (shouldAdjustScroll) {
          adjustedSync = this.applyScrollAdjustment(delta);
        }
        this.notify(adjustedSync);
      }
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i3 = indexes[k];
          const measurement = measurements[i3];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      const flat = this._flatMeasurements;
      const useFlat = this.options.lanes === 1 && flat != null;
      const idx = findNearestBinarySearch(
        0,
        measurements.length - 1,
        useFlat ? (i3) => flat[i3 * 2] : (i3) => notUndefined(measurements[i3]).start,
        offset
      );
      return notUndefined(measurements[idx]);
    };
    this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) {
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      } else {
        const doc = this.scrollElement.document.documentElement;
        return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
      }
    };
    this.getVirtualDistanceFromEnd = () => {
      return Math.max(
        this.getTotalSize() - this.getSize() - this.getScrollOffset(),
        0
      );
    };
    this.getDistanceFromEnd = () => {
      return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
    };
    this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
      return this.getDistanceFromEnd() <= threshold;
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      if (!this.scrollElement) return 0;
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getMaxScrollOffset();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      const item = this.measurementsCache[index];
      if (!item) return;
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      if (align === "end" && index === this.options.count - 1) {
        return [this.getMaxScrollOffset(), align];
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const offset = this.getOffsetForAlignment(toOffset, align);
      const now = this.now();
      this.scrollState = {
        index: null,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToIndex = (index, {
      align: initialAlign = "auto",
      behavior = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0;
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const offsetInfo = this.getOffsetForIndex(index, initialAlign);
      if (!offsetInfo) {
        return;
      }
      const [offset, align] = offsetInfo;
      const now = this.now();
      this.scrollState = {
        index,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollBy = (delta, { behavior = "auto" } = {}) => {
      const offset = this.getScrollOffset() + delta;
      const now = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToEnd = ({ behavior = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        const lastIdx = measurements.length - 1;
        const flat = this._flatMeasurements;
        if (flat != null) {
          end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
        } else {
          end = ((_a = measurements[lastIdx]) == null ? void 0 : _a.end) ?? 0;
        }
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this.takeSnapshot = () => {
      const snapshot = [];
      if (this.itemSizeCache.size === 0) return snapshot;
      const m = this.getMeasurements();
      for (const item of m) {
        if (item && this.itemSizeCache.has(item.key)) {
          snapshot.push({
            index: item.index,
            key: item.key,
            start: item.start,
            size: item.size,
            end: item.end,
            lane: item.lane
          });
        }
      }
      return snapshot;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this._intendedScrollOffset = offset + (adjustments ?? 0);
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.pendingMin = null;
      this.itemSizeCache.clear();
      this.laneAssignments.clear();
      this.itemSizeCacheVersion++;
      this.notify(false);
    };
    this.setOptions(opts);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(delta, behavior) {
    if (delta === 0) return false;
    if (this.options.debug) {
      console.info("correction", delta);
    }
    if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
      this._iosDeferredAdjustment += delta;
      return false;
    } else {
      this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += delta,
        behavior
      });
      if (this.scrollOffset !== null) {
        this.scrollOffset += this.scrollAdjustments;
        if (this.scrollOffset < 0) this.scrollOffset = 0;
        this.scrollAdjustments = 0;
      }
      return true;
    }
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    if (this.rafId != null) return;
    this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null;
      this.reconcileScroll();
    });
  }
  reconcileScroll() {
    if (!this.scrollState) return;
    const el = this.scrollElement;
    if (!el) return;
    const MAX_RECONCILE_MS = 5e3;
    if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
      this.scrollState = null;
      return;
    }
    const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
    const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
    const STABLE_FRAMES = 1;
    const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
    if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
      this.scrollState.stableFrames++;
      if (this.scrollState.stableFrames >= STABLE_FRAMES) {
        if (this.getScrollOffset() !== targetOffset) {
          this._scrollToOffset(targetOffset, {
            adjustments: void 0,
            behavior: "auto"
          });
        }
        this.scrollState = null;
        return;
      }
    } else {
      this.scrollState.stableFrames = 0;
      if (targetChanged) {
        const viewport = this.getSize() || 600;
        const distance = Math.abs(targetOffset - this.getScrollOffset());
        const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
        this.scrollState.lastTargetOffset = targetOffset;
        if (!keepSmooth) {
          this.scrollState.behavior = "auto";
        }
        this._scrollToOffset(targetOffset, {
          adjustments: void 0,
          behavior: keepSmooth ? "smooth" : "auto"
        });
      }
    }
    this.scheduleScrollReconcile();
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function findNearestBinarySearchFlat(flat, high, value) {
  let low = 0;
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = flat[middle * 2];
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return low > 0 ? low - 1 : 0;
}
function calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, flat) {
  const lastIndex = measurements.length - 1;
  if (measurements.length <= lanes) {
    return { startIndex: 0, endIndex: lastIndex };
  }
  if (lanes === 1 && flat !== null) {
    const startIndex2 = findNearestBinarySearchFlat(
      flat,
      lastIndex,
      scrollOffset
    );
    let endIndex2 = startIndex2;
    const limit = scrollOffset + outerSize;
    while (endIndex2 < lastIndex && flat[endIndex2 * 2] + flat[endIndex2 * 2 + 1] < limit) {
      endIndex2++;
    }
    return { startIndex: startIndex2, endIndex: endIndex2 };
  }
  const getStart = (index) => measurements[index].start;
  let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase({
  useFlushSync = true,
  directDomUpdates = false,
  directDomUpdatesMode = "transform",
  ...options
}) {
  const rerender = React.useReducer((x2) => x2 + 1, 0)[1];
  const directRef = React.useRef({
    enabled: directDomUpdates,
    mode: directDomUpdatesMode,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  directRef.current.enabled = directDomUpdates;
  directRef.current.mode = directDomUpdatesMode;
  const applyContainerSize = (instance2) => {
    const state = directRef.current;
    if (!state.enabled || !state.container) return;
    const totalSize = instance2.getTotalSize();
    if (totalSize !== state.lastSize) {
      state.lastSize = totalSize;
      const sizeAxis = instance2.options.horizontal ? "width" : "height";
      state.container.style[sizeAxis] = `${totalSize}px`;
    }
  };
  const applyDirectStyles = (instance2) => {
    const state = directRef.current;
    if (!state.enabled || !state.container) return;
    applyContainerSize(instance2);
    const horizontal = !!instance2.options.horizontal;
    const useTransform = state.mode === "transform";
    const posAxis = horizontal ? "left" : "top";
    const scrollMargin = instance2.options.scrollMargin;
    const items = instance2.getVirtualItems();
    for (const item of items) {
      const next = item.start - scrollMargin;
      const el = instance2.elementsCache.get(item.key);
      if (!el) continue;
      if (state.lastPositions.get(el) === next) continue;
      state.lastPositions.set(el, next);
      if (useTransform) {
        el.style.transform = horizontal ? `translate3d(${next}px, 0, 0)` : `translate3d(0, ${next}px, 0)`;
      } else {
        el.style[posAxis] = `${next}px`;
      }
    }
  };
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      const state = directRef.current;
      let shouldRerender = true;
      if (state.enabled) {
        applyDirectStyles(instance2);
        const range = instance2.range;
        const prev = state.prevRange;
        shouldRerender = !prev || prev.isScrolling !== instance2.isScrolling || prev.startIndex !== (range == null ? void 0 : range.startIndex) || prev.endIndex !== (range == null ? void 0 : range.endIndex);
        if (shouldRerender) {
          state.prevRange = range ? {
            startIndex: range.startIndex,
            endIndex: range.endIndex,
            isScrolling: instance2.isScrolling
          } : null;
        }
      }
      if (shouldRerender) {
        if (useFlushSync && sync) {
          (0, import_react_dom.flushSync)(rerender);
        } else {
          rerender();
        }
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(() => {
    const v2 = new Virtualizer(resolvedOptions);
    return Object.assign(v2, {
      containerRef: (node) => {
        const state = directRef.current;
        state.container = node;
        state.lastSize = null;
        if (node && state.enabled) {
          const total = v2.getTotalSize();
          state.lastSize = total;
          const axis = v2.options.horizontal ? "width" : "height";
          node.style[axis] = `${total}px`;
        }
      }
    });
  });
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    applyContainerSize(instance);
    return instance._willUpdate();
  });
  useIsomorphicLayoutEffect(() => {
    applyDirectStyles(instance);
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@privy-io/react-auth/dist/esm/ConnectWalletView-CbeZc3Wo.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var D2 = { phantom: { mobile: { native: "phantom://", universal: "https://phantom.app/ul/" } }, solflare: { mobile: { native: void 0, universal: "https://solflare.com/ul/v1/" } }, metamask: { image_url: { sm: O2, md: O2 } }, "okx-wallet": { mobile: { native: "okex://main", universal: "okex://main" } }, "okx-wallet-1": { mobile: { native: "okxwallet://main", universal: "okxwallet://main" } } };
var P2 = class _P {
  static normalize(e4) {
    return e4.replace(/[-_]wallet$/, "").replace(/[-_]extension$/, "").toLowerCase();
  }
  isEth(e4) {
    return e4.chains.some(((e5) => e5.includes("eip155:")));
  }
  isSol(e4) {
    return e4.chains.some(((e5) => e5.includes("solana:")));
  }
  inAllowList(e4, n4) {
    if (!this.normalizedAllowList || 0 === this.normalizedAllowList.length || "listing" === n4 && this.includeWalletConnect) return true;
    let t5 = _P.normalize(e4);
    return this.normalizedAllowList.some(((e5) => t5 === _P.normalize(e5)));
  }
  inDenyList(e4, n4) {
    return "listing" === n4 && "rabby" === e4 || "agw" === _P.normalize(e4);
  }
  chainMatches(e4) {
    return "ethereum-only" === this.chainFilter ? "ethereum" === e4 : "solana-only" !== this.chainFilter || "solana" === e4;
  }
  getAllowListKey(e4, n4, t5, l2) {
    let i3 = _P.normalize(e4);
    for (let e5 of this.normalizedAllowList || []) if (i3 === _P.normalize(e5)) return e5;
    if ("connector" === n4) {
      if (("injected" === t5 || "solana_adapter" === t5) && "ethereum" === l2 && this.detectedEth) return "detected_ethereum_wallets";
      if (("injected" === t5 || "solana_adapter" === t5) && "solana" === l2 && this.detectedSol) return "detected_solana_wallets";
    }
    if ("listing" === n4 && this.includeWalletConnect) return "wallet_connect";
  }
  connectorOk(e4) {
    return !!("null" !== e4.connectorType && "walletconnect_solana" !== e4.walletBranding.id && this.chainMatches(e4.chainType) && (this.inAllowList(e4.walletClientType, "connector") || ("injected" === e4.connectorType || "solana_adapter" === e4.connectorType) && ("ethereum" === e4.chainType && this.detectedEth || "solana" === e4.chainType && this.detectedSol)));
  }
  listingOk(e4) {
    if (e4.slug.includes("coinbase")) return false;
    if ("ethereum-only" === this.chainFilter) {
      if (!this.isEth(e4)) return false;
    } else if ("solana-only" === this.chainFilter && !this.isSol(e4)) return false;
    return !(!this.inAllowList(e4.slug, "listing") || this.inDenyList(e4.slug, "listing"));
  }
  getWallets(e4, n4) {
    let t5 = /* @__PURE__ */ new Map(), l2 = (e5) => {
      let n5 = t5.get(e5.id);
      if (n5) {
        n5.chainType !== e5.chainType && (n5.chainType = "multi");
        let t6 = new Set(n5.chains);
        e5.chains.forEach(((e6) => t6.add(e6))), n5.chains = Array.from(t6), !n5.icon && e5.icon && (n5.icon = e5.icon), !n5.url && e5.url && (n5.url = e5.url), !n5.listing && e5.listing && (n5.listing = e5.listing), !n5.allowListKey && e5.allowListKey && (n5.allowListKey = e5.allowListKey);
      } else t5.set(e5.id, e5);
    };
    e4.filter(((e5) => this.connectorOk(e5))).forEach(((e5) => {
      let n5 = _P.normalize(e5.walletClientType);
      l2({ id: n5, label: e5.walletBranding?.name ?? n5, source: "connector", connector: e5, chainType: e5.chainType, icon: e5.walletBranding?.icon, url: void 0, chains: ["ethereum" === e5.chainType ? "eip155" : "solana"], allowListKey: this.getAllowListKey(e5.walletClientType, "connector", e5.connectorType, e5.chainType) });
    }));
    let i3 = e4.find(((e5) => "wallet_connect_v2" === e5.connectorType)), a3 = e4.find(((e5) => "walletconnect_solana" === e5.walletBranding.id));
    n4.filter(((e5) => this.listingOk(e5))).forEach(((n5) => {
      let t6 = [...n5.chains].filter(((e5) => e5.includes("eip155:") || e5.includes("solana:")));
      if (e4.some(((e5) => _P.normalize(e5.walletClientType) === _P.normalize(n5.slug) && "ethereum" === e5.chainType && "null" !== e5.connectorType)) || i3 || n5.mobile.native || n5.mobile.universal || R[n5.slug]?.chainTypes.includes("ethereum") || (t6 = t6.filter(((e5) => !e5.includes("eip155:")))), e4.some(((e5) => _P.normalize(e5.walletClientType) === _P.normalize(n5.slug) && "solana" === e5.chainType && "null" !== e5.connectorType)) || a3 || n5.mobile.native || n5.mobile.universal || R[n5.slug]?.chainTypes.includes("solana") || (t6 = t6.filter(((e5) => !e5.includes("solana:")))), !t6.length) return;
      let o3 = _P.normalize(n5.slug), r3 = D2[n5.slug], c2 = r3?.image_url?.sm || n5.image_url?.sm;
      t6.some(((e5) => e5.includes("eip155:"))) && l2({ id: o3, label: n5.name || o3, source: "listing", listing: n5, chainType: "ethereum", icon: c2, url: n5.homepage, chains: t6, allowListKey: this.getAllowListKey(n5.slug, "listing") }), t6.some(((e5) => e5.includes("solana:"))) && l2({ id: o3, label: n5.name || o3, source: "listing", listing: n5, chainType: "solana", icon: c2, url: n5.homepage, chains: t6, allowListKey: this.getAllowListKey(n5.slug, "listing") });
    })), this.includeWalletConnectQr && i3 && l2({ id: "wallet_connect_qr", label: "WalletConnect", source: "connector", connector: i3, chainType: "ethereum", icon: j, url: void 0, chains: ["eip155"], allowListKey: "wallet_connect_qr" }), this.includeWalletConnectQrSolana && a3 && l2({ id: "wallet_connect_qr_solana", label: "WalletConnect", source: "connector", connector: a3, chainType: "solana", icon: j, url: void 0, chains: ["solana"], allowListKey: "wallet_connect_qr_solana" });
    let o2 = Array.from(t5.values());
    o2.forEach(((e5) => {
      let n5 = D2[e5.listing?.slug || e5.id];
      n5?.image_url?.sm && (e5.icon = n5.image_url.sm);
    }));
    let r2 = /* @__PURE__ */ new Map();
    return this.normalizedAllowList?.forEach(((e5, n5) => {
      r2.set(_P.normalize(e5), n5);
    })), { wallets: o2.slice().sort(((e5, n5) => {
      if (e5.allowListKey && n5.allowListKey) {
        let t7 = this.normalizedAllowList?.findIndex(((n6) => _P.normalize(n6) === _P.normalize(e5.allowListKey))) ?? -1, l4 = this.normalizedAllowList?.findIndex(((e6) => _P.normalize(e6) === _P.normalize(n5.allowListKey))) ?? -1;
        if (t7 !== l4 && t7 >= 0 && l4 >= 0) return t7 - l4;
      }
      if (e5.allowListKey && !n5.allowListKey) return -1;
      if (!e5.allowListKey && n5.allowListKey) return 1;
      let t6 = _P.normalize(e5.id), l3 = _P.normalize(n5.id);
      "binance-defi" === t6 ? t6 = "binance" : "universalprofiles" === t6 ? t6 = "universal_profile" : "cryptocom-defi" === t6 ? t6 = "cryptocom" : "bitkeep" === t6 && (t6 = "bitget_wallet"), "binance-defi" === l3 ? l3 = "binance" : "universalprofiles" === l3 ? l3 = "universal_profile" : "cryptocom-defi" === l3 ? l3 = "cryptocom" : "bitkeep" === l3 && (l3 = "bitget_wallet");
      let i4 = r2.has(t6), a4 = r2.has(l3);
      return i4 && a4 ? r2.get(t6) - r2.get(l3) : i4 ? -1 : a4 ? 1 : "connector" === e5.source && "listing" === n5.source ? -1 : "listing" === e5.source && "connector" === n5.source ? 1 : e5.label.toLowerCase().localeCompare(n5.label.toLowerCase());
    })), walletCount: o2.length };
  }
  constructor(e4, n4) {
    if (this.chainFilter = e4, n4 && n4.length > 0) {
      if (this.normalizedAllowList = n4.map(String), this.normalizedAllowList.includes("binance")) {
        let e5 = this.normalizedAllowList.indexOf("binance");
        this.normalizedAllowList.splice(e5 + 1, 0, "binance-defi-wallet");
      }
      if (this.normalizedAllowList.includes("bitget_wallet")) {
        let e5 = this.normalizedAllowList.indexOf("bitget_wallet");
        this.normalizedAllowList.splice(e5 + 1, 0, "bitkeep");
      }
    }
    this.detectedEth = this.normalizedAllowList?.includes("detected_ethereum_wallets") ?? false, this.detectedSol = this.normalizedAllowList?.includes("detected_solana_wallets") ?? false, this.includeWalletConnect = this.normalizedAllowList?.includes("wallet_connect") ?? false, this.includeWalletConnectQr = this.normalizedAllowList?.includes("wallet_connect_qr") ?? false, this.includeWalletConnectQrSolana = this.normalizedAllowList?.includes("wallet_connect_qr_solana") ?? false;
  }
};
var Q = (t5) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...t5, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m0 0h32v32h-32z", fill: "#5469d4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z", fill: "#c2ccf4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.996 5.333-6.548 10.865 6.548 3.87z", fill: "#fff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z", fill: "#c2ccf4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.996 26.665v-5.36l-6.548-3.867z", fill: "#fff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.995 20.07 6.548-3.87-6.548-2.976v6.847z", fill: "#8698e8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9.448 16.2 6.548 3.87v-6.846z", fill: "#c2ccf4" })] });
var V = (t5) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...t5, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: "7.233", x2: "24.766", y1: "24.766", y2: "7.234", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0", stopColor: "#9945ff" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: ".2", stopColor: "#7962e7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", stopColor: "#00d18c" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m0 0h32v32h-32z", fill: "#10111a" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { clipRule: "evenodd", d: "m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z", fill: "url(#a)", fillRule: "evenodd" })] });
function H({ enabled: e4 = true, walletList: n4, walletChainType: t5 }) {
  let l2 = se(), { connectors: i3 } = l(), { listings: r2, loading: c2 } = _(e4), s2 = t5 ?? l2.appearance.walletChainType, d2 = n4 ?? l2.appearance?.walletList, m = (0, import_react.useMemo)((() => new P2(s2, d2)), [s2, d2]), { wallets: h, walletCount: u2 } = (0, import_react.useMemo)((() => m.getWallets(i3, r2)), [m, i3, r2]), [p2, w2] = (0, import_react.useState)(""), g2 = (0, import_react.useMemo)((() => p2 ? h.filter(((e5) => e5.label.toLowerCase().includes(p2.toLowerCase()))) : h), [p2, h]), [f, v2] = (0, import_react.useState)();
  return { selected: f, setSelected: v2, search: p2, setSearch: w2, loadingListings: c2, wallets: g2, walletCount: u2 };
}
var R2 = (e4) => !e4 || "string" != typeof e4 && (e4 instanceof W || e4 instanceof D);
var Y2 = ({ index: l2, style: i3, data: a3, recent: o2 }) => {
  let r2 = a3.wallets[l2], { walletChainType: c2, handleWalletClick: s2 } = a3, { t: d2 } = t3(), m = { ...i3, boxSizing: "border-box" };
  return r2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Z, { style: m, onClick: () => s2(r2), children: [r2.icon && (r2.connector && !R2(r2.connector) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { children: "string" == typeof r2.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, { src: r2.icon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2.icon, { style: { width: "32px", height: "32px" } }) }) : "string" == typeof r2.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, { src: r2.icon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2.icon, { style: { width: "32px", height: "32px" } })), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(te, { children: r2.label }), o2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, { children: d2("connectWallet.lastUsed") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ee, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ethereum-only" === c2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, {}), "solana-only" === c2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {})] }) })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ee, { children: !("ethereum-only" === c2 || "solana-only" === c2) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [r2.chains?.some(((e4) => e4.startsWith("eip155"))) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, {}), r2.chains?.some(((e4) => e4.startsWith("solana"))) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {})] }) })] }) : null;
};
var G = ({ className: m, customDescription: u2, connectOnly: C, preSelectedWalletId: _2, hideHeader: S2, ...F }) => {
  let M2 = se(), { t: G2 } = t3(), { connectors: ae } = l(), oe = F.walletChainType || M2.appearance.walletChainType, re = F.walletList || M2.appearance?.walletList, { onBack: ce, onClose: se2, app: de } = F, { selected: me, setSelected: he, qrUrl: ue, setQrUrl: pe, connecting: we, uiState: ge, errorCode: fe, wallets: ye, walletCount: ve, handleConnect: be, handleBack: Ce, showSearchBar: Te, isInitialConnectView: _e, title: We, search: Le, setSearch: xe } = (function({ onConnect: e4, onBack: n4, onClose: t5, onConnectError: l2, walletList: i3, walletChainType: c2, app: s2 }) {
    let m2 = se(), { connectors: h } = l(), { t: u3 } = t3(), { wallets: p2, walletCount: w2, search: g2, setSearch: f, selected: C2, setSelected: T } = H({ enabled: S(i3 ?? []), walletList: i3, walletChainType: c2 }), [_3, x2] = (0, import_react.useState)(), [z, k] = (0, import_react.useState)(), [S3, j2] = (0, import_react.useState)(), [B, O3] = (0, import_react.useState)(), q = !C2 && !S3 && !B, I = q && (w2 > 6 || g2.length > 0), F2 = h.find(((e5) => "wallet_connect_v2" === e5.connectorType)), M3 = (0, import_react.useCallback)((async (n5, t6) => {
      if (!n5) return;
      let i4 = t6?.name ?? "Wallet";
      if (B?.connector !== n5 || "loading" !== _3) {
        if (x2("loading"), "string" == typeof n5) return u.debug("Connecting wallet via deeplink", { wallet: i4, url: n5.length > 80 ? `${n5.slice(0, 80)}...` : n5 }), O3({ connector: n5, name: i4, icon: t6?.icon, id: t6?.id, url: t6?.url }), void window.open(n5, "_blank");
        u.debug("Connecting wallet via connector", { wallet: i4, connectorType: n5.connectorType }), O3({ connector: n5, name: t6?.name ?? n5.walletBranding.name ?? "Wallet", icon: t6?.icon ?? n5.walletBranding.icon, id: t6?.id, url: t6?.url });
        try {
          let t7 = await n5.connect({ showPrompt: true });
          if (!t7) return u.warn("Wallet connection returned null", { wallet: i4, connectorType: n5.connectorType }), x2("error"), k(void 0), void l2?.(new n("Unable to connect wallet"));
          u.debug("Wallet connection successful", { wallet: i4, connectorType: n5.connectorType }), E(t7) && await P(t7, m2), x2("success"), k(void 0), Y({ address: t7.address, client: t7.walletClientType, appId: m2.id }), setTimeout((() => {
            e4({ connector: n5, wallet: t7 });
          }), g);
        } catch (e5) {
          if (e5?.message?.includes("already pending for origin") || e5?.message?.includes("wallet_requestPermissions")) return void u.debug("Connection request already pending, maintaining loading state", { wallet: i4 });
          let t7 = e5 instanceof Error ? e5.message : String(e5?.message || "Unknown error");
          u.error("Wallet connection failed", e5, { wallet: i4, connectorType: n5.connectorType, errorCode: e5?.privyErrorCode }), x2("error"), k(e5?.privyErrorCode), l2?.(e5 instanceof Error ? e5 : new n(t7 || "Unable to connect wallet"));
        }
      } else u.debug("Duplicate connection attempt prevented", { wallet: i4 });
    }), [m2.id, e4, B, _3]), $ = (0, import_react.useCallback)((() => S3 ? (x2(void 0), k(void 0), O3(void 0), void j2(void 0)) : B ? (x2(void 0), k(void 0), void O3(void 0)) : C2 ? (x2(void 0), k(void 0), O3(void 0), void T(void 0)) : "error" === _3 || "loading" === _3 ? (x2(void 0), k(void 0), void O3(void 0)) : void n4?.()), [S3, B, C2, _3, n4]), D3 = (0, import_react.useMemo)((() => B?.connector === F2 && S3 && import_react_device_detect.isMobile && B?.name ? u3("connectWallet.goToWallet", { walletName: B.name }) : B?.connector === F2 && S3 && B?.name ? u3("connectWallet.scanToConnect", { walletName: B.name }) : S3 && B?.name ? u3(import_react_device_detect.isMobile ? "connectWallet.goToWallet" : "connectWallet.scanToConnect", { walletName: B.name }) : "string" == typeof B?.connector ? u3("connectWallet.openOrInstall", { walletName: B.name }) : C2 && !B ? u3("connectWallet.selectNetwork") : B ? null : u3("connectWallet.selectYourWallet")), [B, S3, C2, F2, u3]);
    return { selected: C2, setSelected: T, qrUrl: S3, setQrUrl: j2, connecting: B, uiState: _3, errorCode: z, search: g2, setSearch: f, wallets: p2, walletCount: w2, wc: F2, isInitialConnectView: q, showSearchBar: I, title: D3, handleConnect: M3, handleBack: $, onClose: t5, onConnect: e4, app: s2 };
  })({ ...F, walletList: re, walletChainType: oe }), ze = ae.find(((e4) => "wallet_connect_v2" === e4.connectorType)), ke = ae.find(((e4) => "walletconnect_solana" === e4.walletBranding.id)), Se = (0, import_react.useRef)(null), Ae = useVirtualizer({ count: ye.length, getScrollElement: () => Se.current, estimateSize: () => 56, overscan: 6, gap: 5 }), je = (0, import_react.useCallback)((async (e4) => {
    let n4 = "solana-only" !== oe && e4.chains?.some(((e5) => e5.startsWith("eip155"))), t5 = "ethereum-only" !== oe && e4.chains?.some(((e5) => e5.startsWith("solana"))), l2 = (() => {
      let n5 = e4.id;
      return R[n5] || R[`${n5}_wallet`];
    })(), i3 = (n5) => {
      let t6 = P2.normalize(e4.id);
      return ae.find(((e5) => P2.normalize(e5.walletClientType) === t6 && e5.chainType === n5 && "wallet_connect_v2" !== e5.connectorType && !("ethereum" === e5.chainType && e5 instanceof W || "solana" === e5.chainType && e5 instanceof D)));
    }, a3 = n4 ? i3("ethereum") : void 0, o2 = t5 ? i3("solana") : void 0;
    if (l2 && M({ isMobile: import_react_device_detect.isMobile, walletConfig: l2 }) && !a3 && !o2) return u.debug("Using install flow for wallets that do not support WalletConnect.", { wallet: e4.id }), void await be(l2.installLink, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url });
    let r2 = async () => {
      if (!ze || !e4.listing) return false;
      let n5 = D2[e4.listing.slug] ? { ...e4.listing, ...D2[e4.listing.slug] } : e4.listing;
      return ze.setWalletEntry(n5, pe), await ze.resetConnection(e4.id), await be(ze, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url }), true;
    }, c2 = async () => !!ke && !!e4.listing && (await ke.disconnect(), ke.wallet.setWalletEntry(e4.listing, pe), await new Promise(((e5) => setTimeout(e5, 100))), await be(ke, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url }), true), s2 = async (n5) => {
      let t6 = ((e5) => {
        if (l2) return l2.getMobileRedirect({ isSolana: e5, connectOnly: !!C, useUniversalLink: false });
      })(n5);
      return !!t6 && (await be(t6, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url }), true);
    };
    if (n4 && t5) he(e4);
    else {
      if (n4 && !t5) {
        if (a3 && !R2(a3)) return u.debug("Attempting injected EVM connection", { wallet: e4.id, connectorType: a3.connectorType }), void await be(a3, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url });
        if (import_react_device_detect.isMobile && l2) {
          if (await s2(false) || await r2()) return;
        } else if (await r2() || await s2(false)) return;
      }
      if (t5 && !n4) {
        if (o2 && !R2(o2)) return u.debug("Attempting injected Solana connection", { wallet: e4.id, connectorType: o2.connectorType }), void await be(o2, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url });
        if (import_react_device_detect.isMobile) {
          if (await s2(true) || await c2()) return;
        } else if (await c2() || await s2(true)) return;
      }
      if (!R2(e4.connector)) {
        if (u.debug("Using fallback direct connector", { wallet: e4.id, connectorType: e4.connector?.connectorType }), ze && "wallet_connect_v2" === e4.connector?.connectorType) if (await ze.resetConnection(e4.id), "wallet_connect_qr" !== e4.id && e4.listing) {
          let n5 = D2[e4.listing.slug] ? { ...e4.listing, ...D2[e4.listing.slug] } : e4.listing;
          ze.setWalletEntry(n5, pe);
        } else ze.setWalletEntry({ id: "wallet_connect_qr", name: "WalletConnect", rdns: "", slug: "wallet-connect", homepage: "", chains: ["eip155"], mobile: { native: "", universal: void 0 } }, pe);
        return ke && "walletconnect_solana" === e4.connector?.walletBranding.id && (await ke.disconnect(), "wallet_connect_qr_solana" !== e4.id && e4.listing ? ke.wallet.setWalletEntry(e4.listing, pe) : ke.wallet.setWalletEntry({ id: "wallet_connect_solana_qr", name: "WalletConnect", rdns: "", slug: "wallet-connect-solana", homepage: "", chains: ["solana"], mobile: { native: "", universal: void 0 } }, pe), await new Promise(((e5) => setTimeout(e5, 100)))), void await be(e4.connector, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url });
      }
      e4.url ? await be(e4.url, { name: e4.label, icon: e4.icon, id: e4.id, url: e4.url }) : u.warn("No available connection method for wallet", { wallet: e4.id });
    }
  }), [ze, ke, be, he, pe, oe, C, ae]);
  return (0, import_react.useEffect)((() => {
    if (!_2) return;
    let e4 = ye.find((({ id: e5 }) => e5 === _2));
    e4 && je(e4).catch(console.error);
  }), [_2]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { className: m, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Header, { icon: S2 && _e ? void 0 : we && !ue || ue && import_react_device_detect.isMobile && we?.icon ? we.icon : we ? void 0 : e2, iconVariant: we && !ue || ue && import_react_device_detect.isMobile ? "loading" : void 0, iconLoadingStatus: we && !ue || ue && import_react_device_detect.isMobile ? { success: "success" === ge, fail: "error" === ge } : void 0, title: S2 && _e ? void 0 : we && !ue ? G2("connectWallet.waitingForWallet", { walletName: we.name }) : ue && import_react_device_detect.isMobile ? G2("connectWallet.waitingForWallet", { walletName: we?.name ?? "connection" }) : We, subtitle: S2 && _e ? void 0 : we && !ue && "string" == typeof we.connector ? G2("connectWallet.installAndConnect", { walletName: we.name }) : we && !ue && "string" != typeof we.connector ? "error" === ge ? fe === i.NO_SOLANA_ACCOUNTS ? `The connected wallet has no Solana accounts. Please add a Solana account in ${we.name} and try again.` : G2("connectWallet.tryConnectingAgain") : G2("connectionStatus.connectOneWallet") : _e ? u2 ?? (de ? G2("connectWallet.connectToAccount", { appName: de.name }) : null) : null, showBack: !!ce || !_e, showClose: true, onBack: ce || Ce, onClose: se2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w.Body, { ref: Se, $colorScheme: M2.appearance.palette.colorScheme, style: { marginBottom: ue ? "0.5rem" : void 0 }, children: [Te && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(e, { style: { background: "transparent" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagnifyingGlassIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "login-method-button", type: "text", placeholder: G2("connectWallet.searchPlaceholder", { count: String(ve) }), onChange: (e4) => xe(e4.target.value), value: Le })] }) }), ue && import_react_device_detect.isMobile && "loading" === ge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { variant: "primary", onClick: () => window.open(ue.universal ?? ue.native, "_blank"), style: { width: "100%" }, children: G2("connectWallet.openInApp") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { value: ue.universal ?? ue.native, iconOnly: true, children: "Copy link" })] }), ue && !import_react_device_detect.isMobile && "loading" === ge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { value: ue.universal ?? ue.native, iconOnly: true, children: G2("connectWallet.copyLink") }) }), ue && !import_react_device_detect.isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { size: 280, url: ue.universal ?? ue.native, squareLogoElement: we?.icon ? "string" == typeof we.icon ? (e4) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...e4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", { href: we.icon, height: e4.height, width: e4.width }) }) : we.icon : O }), ue && !import_react_device_detect.isMobile && we?.url && ("binance" === we.id || "binanceus" === we.id || "binance-defi" === we.id || "robinhood" === we.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ie, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Don't have ", we.name, "? "] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { href: we.url, target: "_blank", size: "sm", children: "Download here" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(J, { children: [we && !ue && "string" == typeof we.connector && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Z, { onClick: () => window.open(we.connector, "_blank"), children: [we.icon && ("string" == typeof we.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, { src: we.icon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(we.icon, {})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(te, { children: we.name })] }), me?.chains.some(((e4) => e4.startsWith("eip155"))) && !we && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Z, { onClick: () => je({ ...me, chains: me.chains.filter(((e4) => e4.startsWith("eip155"))) }), children: [me.icon && ("string" == typeof me.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, { src: me.icon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(me.icon, {})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(te, { children: me.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ee, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, {}) })] }), me?.chains.some(((e4) => e4.startsWith("solana"))) && !we && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Z, { onClick: () => je({ ...me, chains: me.chains.filter(((e4) => e4.startsWith("solana"))) }), children: [me.icon && ("string" == typeof me.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, { src: me.icon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(me.icon, {})), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(te, { children: me.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ee, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {}) })] }), _e && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!(ve > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ne, { children: G2("connectWallet.noWalletsFound") }), ve > 0 && !ue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxHeight: 56 * Math.min(ye.length, 5) + 5, width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: `${Ae.getTotalSize()}px`, width: "100%", position: "relative" }, children: Ae.getVirtualItems().map(((e4) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Y2, { index: e4.index, style: { position: "absolute", top: 0, left: 0, height: `${e4.size}px`, transform: `translateY(${e4.start}px)` }, data: { wallets: ye, walletChainType: oe, handleWalletClick: je } }, e4.key))) }) })] })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w.Footer, { children: [we && !ue && "string" != typeof we.connector && "error" === ge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Actions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { style: { width: "100%", alignItems: "center" }, variant: "error", onClick: () => be(we.connector, { name: we.name, icon: we.icon, id: we.id, url: we.url }), children: G2("connectWallet.retry") }) }), !!(de && de.legal.privacyPolicyUrl && de.legal.termsAndConditionsUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { app: de, alwaysShowImplicitConsent: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Watermark, {})] })] });
};
var X = gt.div`
  position: sticky;
  // Offset by negative margin to account for focus outline
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`;
var J = gt.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`;
var Z = gt.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`;
var ee = gt.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`;
var ne = gt.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
var te = gt.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`;
var le = gt(p)`
  && {
    margin: 0.5rem auto 0 auto;
  }
`;
var ie = gt.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`;

export {
  P2 as P,
  H,
  Y2 as Y,
  G
};
