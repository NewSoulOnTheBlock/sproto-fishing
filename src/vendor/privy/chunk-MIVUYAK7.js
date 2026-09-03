import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  base64,
  base64nopad,
  base64url,
  hex
} from "./chunk-GVC7K3K7.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn2, context, once) {
      this.fn = fn2;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn2, context, once) {
      if (typeof fn2 !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn2, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names2 = [], events, name;
      if (this._eventsCount === 0) return names2;
      for (name in events = this._events) {
        if (has.call(events, name)) names2.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names2.concat(Object.getOwnPropertySymbols(events));
      }
      return names2;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i5 = 0, l6 = handlers.length, ee4 = new Array(l6); i5 < l6; i5++) {
        ee4[i5] = handlers[i5].fn;
      }
      return ee4;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a22, a32, a42, a52) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i5;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a22), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a22, a32), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a22, a32, a42), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a22, a32, a42, a52), true;
        }
        for (i5 = 1, args = new Array(len - 1); i5 < len; i5++) {
          args[i5 - 1] = arguments[i5];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j4;
        for (i5 = 0; i5 < length; i5++) {
          if (listeners[i5].once) this.removeListener(event, listeners[i5].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i5].fn.call(listeners[i5].context);
              break;
            case 2:
              listeners[i5].fn.call(listeners[i5].context, a1);
              break;
            case 3:
              listeners[i5].fn.call(listeners[i5].context, a1, a22);
              break;
            case 4:
              listeners[i5].fn.call(listeners[i5].context, a1, a22, a32);
              break;
            default:
              if (!args) for (j4 = 1, args = new Array(len - 1); j4 < len; j4++) {
                args[j4 - 1] = arguments[j4];
              }
              listeners[i5].fn.apply(listeners[i5].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on2(event, fn2, context) {
      return addListener(this, event, fn2, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn2, context) {
      return addListener(this, event, fn2, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn2, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn2) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn2 && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i5 = 0, events = [], length = listeners.length; i5 < length; i5++) {
          if (listeners[i5].fn !== fn2 || once && !listeners[i5].once || context && listeners[i5].context !== context) {
            events.push(listeners[i5]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/canonicalize/lib/canonicalize.js
var require_canonicalize = __commonJS({
  "node_modules/canonicalize/lib/canonicalize.js"(exports, module) {
    "use strict";
    module.exports = function serialize(object) {
      if (typeof object === "number" && isNaN(object)) {
        throw new Error("NaN is not allowed");
      }
      if (typeof object === "number" && !isFinite(object)) {
        throw new Error("Infinity is not allowed");
      }
      if (object === null || typeof object !== "object") {
        return JSON.stringify(object);
      }
      if (object.toJSON instanceof Function) {
        return serialize(object.toJSON());
      }
      if (Array.isArray(object)) {
        const values2 = object.reduce((t5, cv, ci2) => {
          const comma = ci2 === 0 ? "" : ",";
          const value = cv === void 0 || typeof cv === "symbol" ? null : cv;
          return `${t5}${comma}${serialize(value)}`;
        }, "");
        return `[${values2}]`;
      }
      const values = Object.keys(object).sort().reduce((t5, cv) => {
        if (object[cv] === void 0 || typeof object[cv] === "symbol") {
          return t5;
        }
        const comma = t5.length === 0 ? "" : ",";
        return `${t5}${comma}${serialize(cv)}:${serialize(object[cv])}`;
      }, "");
      return `{${values}}`;
    };
  }
});

// node_modules/fetch-retry/dist/fetch-retry.umd.js
var require_fetch_retry_umd = __commonJS({
  "node_modules/fetch-retry/dist/fetch-retry.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.fetchRetry = factory());
    })(exports, (function() {
      "use strict";
      var fetchRetry = function(fetch2, defaults) {
        defaults = defaults || {};
        if (typeof fetch2 !== "function") {
          throw new ArgumentError("fetch must be a function");
        }
        if (typeof defaults !== "object") {
          throw new ArgumentError("defaults must be an object");
        }
        if (defaults.retries !== void 0 && !isPositiveInteger(defaults.retries)) {
          throw new ArgumentError("retries must be a positive integer");
        }
        if (defaults.retryDelay !== void 0 && !isPositiveInteger(defaults.retryDelay) && typeof defaults.retryDelay !== "function") {
          throw new ArgumentError("retryDelay must be a positive integer or a function returning a positive integer");
        }
        if (defaults.retryOn !== void 0 && !Array.isArray(defaults.retryOn) && typeof defaults.retryOn !== "function") {
          throw new ArgumentError("retryOn property expects an array or function");
        }
        var baseDefaults = {
          retries: 3,
          retryDelay: 1e3,
          retryOn: []
        };
        defaults = Object.assign(baseDefaults, defaults);
        return function fetchRetry2(input, init2) {
          var retries = defaults.retries;
          var retryDelay = defaults.retryDelay;
          var retryOn = defaults.retryOn;
          if (init2 && init2.retries !== void 0) {
            if (isPositiveInteger(init2.retries)) {
              retries = init2.retries;
            } else {
              throw new ArgumentError("retries must be a positive integer");
            }
          }
          if (init2 && init2.retryDelay !== void 0) {
            if (isPositiveInteger(init2.retryDelay) || typeof init2.retryDelay === "function") {
              retryDelay = init2.retryDelay;
            } else {
              throw new ArgumentError("retryDelay must be a positive integer or a function returning a positive integer");
            }
          }
          if (init2 && init2.retryOn) {
            if (Array.isArray(init2.retryOn) || typeof init2.retryOn === "function") {
              retryOn = init2.retryOn;
            } else {
              throw new ArgumentError("retryOn property expects an array or function");
            }
          }
          return new Promise(function(resolve, reject) {
            var wrappedFetch = function(attempt) {
              var _input = typeof Request !== "undefined" && input instanceof Request ? input.clone() : input;
              fetch2(_input, init2).then(function(response) {
                if (Array.isArray(retryOn) && retryOn.indexOf(response.status) === -1) {
                  resolve(response);
                } else if (typeof retryOn === "function") {
                  try {
                    return Promise.resolve(retryOn(attempt, null, response)).then(function(retryOnResponse) {
                      if (retryOnResponse) {
                        retry(attempt, null, response);
                      } else {
                        resolve(response);
                      }
                    }).catch(reject);
                  } catch (error) {
                    reject(error);
                  }
                } else {
                  if (attempt < retries) {
                    retry(attempt, null, response);
                  } else {
                    resolve(response);
                  }
                }
              }).catch(function(error) {
                if (typeof retryOn === "function") {
                  try {
                    Promise.resolve(retryOn(attempt, error, null)).then(function(retryOnResponse) {
                      if (retryOnResponse) {
                        retry(attempt, error, null);
                      } else {
                        reject(error);
                      }
                    }).catch(function(error2) {
                      reject(error2);
                    });
                  } catch (error2) {
                    reject(error2);
                  }
                } else if (attempt < retries) {
                  retry(attempt, error, null);
                } else {
                  reject(error);
                }
              });
            };
            function retry(attempt, error, response) {
              var delay = typeof retryDelay === "function" ? retryDelay(attempt, error, response) : retryDelay;
              setTimeout(function() {
                wrappedFetch(++attempt);
              }, delay);
            }
            wrappedFetch(0);
          });
        };
      };
      function isPositiveInteger(value) {
        return Number.isInteger(value) && value >= 0;
      }
      function ArgumentError(message) {
        this.name = "ArgumentError";
        this.message = message;
      }
      return fetchRetry;
    }));
  }
});

// node_modules/@privy-io/routes/dist/esm/index.mjs
var e = { path: `/api/v1/analytics_events`, method: `POST` };
var n = { path: `/api/v1/apps/:app_id`, method: `GET` };
var r = { path: `/api/v1/funding/coinbase_on_ramp/init`, method: `POST` };
var i = { path: `/api/v1/funding/coinbase_on_ramp/status`, method: `GET` };
var a = { path: `/api/v1/apps/:app_id/cross-app/connections`, method: `GET` };
var o = { path: `/api/v1/custom_jwt_account/authenticate`, method: `POST` };
var s = { path: `/api/v1/custom_jwt_account/link`, method: `POST` };
var c = { path: `/api/v1/farcaster/init`, method: `POST` };
var l = { path: `/api/v1/farcaster/authenticate`, method: `POST` };
var u = { path: `/api/v1/farcaster/link`, method: `POST` };
var d = { path: `/api/v1/farcaster/unlink`, method: `POST` };
var f = { path: `/api/v1/farcaster/status`, method: `GET` };
var p = { path: `/api/v2/farcaster/init`, method: `POST` };
var m = { path: `/api/v2/farcaster/authenticate`, method: `POST` };
var _ = { path: `/api/v1/guest/authenticate`, method: `POST` };
var v = { path: `/api/v1/mfa/passkeys/init`, method: `POST` };
var C = { path: `/api/v1/mfa/passwordless_sms/init`, method: `POST` };
var I = { path: `/api/v1/oauth/authenticate`, method: `POST` };
var L = { path: `/api/v1/oauth/init`, method: `POST` };
var R = { path: `/api/v1/oauth/link`, method: `POST` };
var z = { path: `/api/v1/oauth/unlink`, method: `POST` };
var H = { path: `/api/v1/passkeys/link`, method: `POST` };
var U = { path: `/api/v1/passkeys/authenticate`, method: `POST` };
var W = { path: `/api/v1/passkeys/register`, method: `POST` };
var G = { path: `/api/v1/passkeys/authenticate/init`, method: `POST` };
var K = { path: `/api/v1/passkeys/register/init`, method: `POST` };
var q = { path: `/api/v1/passkeys/link/init`, method: `POST` };
var Y = { path: `/api/v1/passwordless/authenticate`, method: `POST` };
var X = { path: `/api/v1/passwordless/init`, method: `POST` };
var Z = { path: `/api/v1/passwordless/link`, method: `POST` };
var Q = { path: `/api/v1/passwordless/unlink`, method: `POST` };
var $ = { path: `/api/v1/passwordless/update`, method: `POST` };
var ee = { path: `/api/v1/passwordless_sms/authenticate`, method: `POST` };
var te = { path: `/api/v1/passwordless_sms/init`, method: `POST` };
var ne = { path: `/api/v1/passwordless_sms/link`, method: `POST` };
var re = { path: `/api/v1/passwordless_sms/unlink`, method: `POST` };
var ie = { path: `/api/v1/passwordless_sms/update`, method: `POST` };
var ae = { path: `/api/v1/embedded_wallets/:address/recovery/key_material`, method: `POST` };
var oe = { path: `/api/v1/recovery/oauth/init`, method: `POST` };
var se = { path: `/api/v1/recovery/oauth/authenticate`, method: `POST` };
var ce = { path: `/api/v1/recovery/oauth/init_icloud`, method: `POST` };
var ue = { path: `/api/v1/recovery/configuration_icloud`, method: `POST` };
var de = { path: `/api/v1/onramp/deposit_addresses/quote`, method: `POST` };
var pe = { path: `/api/v1/onramp/deposit_addresses/orders/:order_id`, method: `GET` };
var me = { path: `/api/v1/onramp/deposit_addresses/:deposit_address_id/next_order`, method: `GET` };
var he = { path: `/api/v1/onramp/deposit_addresses/deposit_config`, method: `GET` };
var ge = (e7, t5) => t5 ? Object.entries(t5).reduce((e8, [t6, n5]) => e8.replace(`:${t6}`, `${n5}`), e7) : e7;
var _e = { path: `/api/v1/sessions`, method: `POST` };
var ve = { path: `/api/v1/sessions/logout`, method: `POST` };
var ye = { path: `/api/v1/apps/:app_id/smart_wallets`, method: `GET` };
var xe = { path: `/api/v1/siwe/init`, method: `POST` };
var Se = { path: `/api/v1/siwe/authenticate`, method: `POST` };
var Ce = { path: `/api/v1/siwe/link`, method: `POST` };
var we = { path: `/api/v1/siwe/link_smart_wallet`, method: `POST` };
var Te = { path: `/api/v1/siwe/unlink`, method: `POST` };
var Ee = { path: `/api/v1/siws/init`, method: `POST` };
var De = { path: `/api/v1/siws/authenticate`, method: `POST` };
var Oe = { path: `/api/v1/siws/link`, method: `POST` };
var ke = { path: `/api/v1/siws/unlink`, method: `POST` };
var Ae = { path: `/api/v1/users/me/accept_terms`, method: `POST` };
var je = { path: `/api/v1/telegram/authenticate`, method: `POST` };
var Me = { path: `/api/v1/telegram/link`, method: `POST` };
var Ne = { path: `/api/v1/telegram/unlink`, method: `POST` };
var Pe = { path: `/api/v1/plugins/moonpay_on_ramp/sign`, method: `POST` };
var Ve = { path: `/api/v1/onramp/stripe/create_link_auth_intent`, method: `POST` };
var He = { path: `/api/v1/onramp/stripe/exchange_tokens`, method: `POST` };
var Ue = { path: `/api/v1/onramp/stripe/customer`, method: `GET` };
var We = { path: `/api/v1/onramp/stripe/customer/wallets`, method: `GET` };
var Ge = { path: `/api/v1/onramp/stripe/customer/payment_tokens`, method: `GET` };
var Ke = { path: `/api/v1/onramp/stripe/create_onramp_session`, method: `POST` };
var qe = { path: `/api/v1/onramp/stripe/quote/:session_id`, method: `POST` };
var Je = { path: `/api/v1/onramp/stripe/checkout/:session_id`, method: `POST` };
var Ye = { path: `/api/v1/users/me`, method: `GET` };
var Ze = { path: `/api/v1/wallets`, method: `POST` };
var et = { path: `/api/v1/wallets/:wallet_id/rpc`, method: `POST` };
var it = { path: `/api/v1/wallets/revoke`, method: `POST` };

// node_modules/jose/dist/browser/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64 = (input) => {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i5 = 0; i5 < unencoded.length; i5 += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, unencoded.subarray(i5, i5 + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
};
var encode = (input) => {
  return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
var decodeBase64 = (encoded) => {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i5 = 0; i5 < binary.length; i5++) {
    bytes[i5] = binary.charCodeAt(i5);
  }
  return bytes;
};
var decode = (input) => {
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch (_a2) {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
};

// node_modules/jose/dist/browser/util/errors.js
var JOSEError = class extends Error {
  static get code() {
    return "ERR_JOSE_GENERIC";
  }
  constructor(message) {
    var _a2;
    super(message);
    this.code = "ERR_JOSE_GENERIC";
    this.name = this.constructor.name;
    (_a2 = Error.captureStackTrace) === null || _a2 === void 0 ? void 0 : _a2.call(Error, this, this.constructor);
  }
};
var JWTInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWT_INVALID";
  }
  static get code() {
    return "ERR_JWT_INVALID";
  }
};

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports = {};
__export(base64url_exports, {
  decode: () => decode2,
  encode: () => encode2
});
var encode2 = encode;
var decode2 = decode;

// node_modules/jose/dist/browser/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== "string")
    throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
  const { 1: payload, length } = jwt.split(".");
  if (length === 5)
    throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
  if (length !== 3)
    throw new JWTInvalid("Invalid JWT");
  if (!payload)
    throw new JWTInvalid("JWTs must contain a payload");
  let decoded;
  try {
    decoded = decode2(payload);
  } catch (_a2) {
    throw new JWTInvalid("Failed to base64url decode the payload");
  }
  let result2;
  try {
    result2 = JSON.parse(decoder.decode(decoded));
  } catch (_b) {
    throw new JWTInvalid("Failed to parse the decoded payload as JSON");
  }
  if (!isObject(result2))
    throw new JWTInvalid("Invalid JWT Claims Set");
  return result2;
}

// node_modules/@privy-io/chains/dist/esm/index.mjs
function e2(e7, t5) {
  return { ...e7, rpcUrls: { ...e7.rpcUrls, privy: { http: [t5] } } };
}
var t = { id: 42161, name: `Arbitrum One`, network: `arbitrum`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://arbitrum-mainnet.rpc.privy.systems`] }, alchemy: { http: [`https://arb-mainnet.g.alchemy.com/v2`], webSocket: [`wss://arb-mainnet.g.alchemy.com/v2`] }, infura: { http: [`https://arbitrum-mainnet.infura.io/v3`], webSocket: [`wss://arbitrum-mainnet.infura.io/ws/v3`] }, default: { http: [`https://arb1.arbitrum.io/rpc`] }, public: { http: [`https://arb1.arbitrum.io/rpc`] } }, blockExplorers: { etherscan: { name: `Arbiscan`, url: `https://arbiscan.io` }, default: { name: `Arbiscan`, url: `https://arbiscan.io` } } };
var n2 = { id: 421614, name: `Arbitrum Sepolia`, network: `arbitrum-sepolia`, nativeCurrency: { name: `Arbitrum Sepolia Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://arbitrum-sepolia.rpc.privy.systems`] }, default: { http: [`https://sepolia-rollup.arbitrum.io/rpc`] }, public: { http: [`https://sepolia-rollup.arbitrum.io/rpc`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://sepolia-explorer.arbitrum.io` } }, testnet: true };
var r2 = { id: 43114, name: `Avalanche`, network: `avalanche`, nativeCurrency: { decimals: 18, name: `Avalanche`, symbol: `AVAX` }, rpcUrls: { default: { http: [`https://api.avax.network/ext/bc/C/rpc`] }, public: { http: [`https://api.avax.network/ext/bc/C/rpc`] } }, blockExplorers: { etherscan: { name: `SnowTrace`, url: `https://snowtrace.io` }, default: { name: `SnowTrace`, url: `https://snowtrace.io` } } };
var i2 = { id: 43113, name: `Avalanche Fuji`, network: `avalanche-fuji`, nativeCurrency: { decimals: 18, name: `Avalanche Fuji`, symbol: `AVAX` }, rpcUrls: { default: { http: [`https://api.avax-test.network/ext/bc/C/rpc`] }, public: { http: [`https://api.avax-test.network/ext/bc/C/rpc`] } }, blockExplorers: { etherscan: { name: `SnowTrace`, url: `https://testnet.snowtrace.io` }, default: { name: `SnowTrace`, url: `https://testnet.snowtrace.io` } }, testnet: true };
var a2 = { id: 8453, network: `base`, name: `Base`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://base-mainnet.rpc.privy.systems`] }, default: { http: [`https://mainnet.base.org`] }, public: { http: [`https://mainnet.base.org`] } }, blockExplorers: { etherscan: { name: `Basescan`, url: `https://basescan.org` }, default: { name: `Basescan`, url: `https://basescan.org` } } };
var o2 = { id: 84532, network: `base-sepolia`, name: `Base Sepolia`, nativeCurrency: { name: `Sepolia Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://base-sepolia.rpc.privy.systems`] }, default: { http: [`https://sepolia.base.org`] }, public: { http: [`https://sepolia.base.org`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://base-sepolia.blockscout.com` } }, testnet: true };
var s2 = { id: 80085, network: `berachain-artio`, name: `Berachain Artio`, nativeCurrency: { name: `BERA`, symbol: `BERA`, decimals: 18 }, rpcUrls: { default: { http: [`https://berachain-artio.rpc.privy.systems`] }, public: { http: [`https://berachain-artio.rpc.privy.systems`] } }, blockExplorers: { default: { name: `Beratrail`, url: `https://artio.beratrail.io` } }, testnet: true };
var c2 = { id: 56, network: `bsc`, name: `Binance Smart Chain`, nativeCurrency: { name: `BNB`, symbol: `BNB`, decimals: 18 }, rpcUrls: { privy: { http: [`https://bsc-mainnet.rpc.privy.systems`] }, default: { http: [`https://56.rpc.thirdweb.com`] }, public: { http: [`https://56.rpc.thirdweb.com`] } }, blockExplorers: { etherscan: { name: `BscScan`, url: `https://bscscan.com` }, default: { name: `BscScan`, url: `https://bscscan.com` } } };
var l2 = { id: 42220, name: `Celo Mainnet`, network: `celo`, nativeCurrency: { decimals: 18, name: `CELO`, symbol: `CELO` }, rpcUrls: { default: { http: [`https://forno.celo.org`] }, infura: { http: [`https://celo-mainnet.infura.io/v3`] }, public: { http: [`https://forno.celo.org`] } }, blockExplorers: { default: { name: `Celo Explorer`, url: `https://explorer.celo.org/mainnet` }, etherscan: { name: `CeloScan`, url: `https://celoscan.io` } }, testnet: false };
var u2 = { id: 44787, name: `Celo Alfajores Testnet`, network: `celo-alfajores`, nativeCurrency: { decimals: 18, name: `CELO`, symbol: `CELO` }, rpcUrls: { default: { http: [`https://alfajores-forno.celo-testnet.org`] }, infura: { http: [`https://celo-alfajores.infura.io/v3`] }, public: { http: [`https://alfajores-forno.celo-testnet.org`] } }, blockExplorers: { default: { name: `Celo Explorer`, url: `https://explorer.celo.org/alfajores` }, etherscan: { name: `CeloScan`, url: `https://alfajores.celoscan.io/` } }, testnet: true };
var d2 = { id: 314, name: `Filecoin - Mainnet`, network: `filecoin-mainnet`, nativeCurrency: { decimals: 18, name: `filecoin`, symbol: `FIL` }, rpcUrls: { default: { http: [`https://api.node.glif.io/rpc/v1`] }, public: { http: [`https://api.node.glif.io/rpc/v1`] } }, blockExplorers: { default: { name: `Filfox`, url: `https://filfox.info/en` }, filscan: { name: `Filscan`, url: `https://filscan.io` }, filscout: { name: `Filscout`, url: `https://filscout.io/en` }, glif: { name: `Glif`, url: `https://explorer.glif.io` } } };
var f2 = { id: 314159, name: `Filecoin - Calibration testnet`, network: `filecoin-calibration`, nativeCurrency: { decimals: 18, name: `testnet filecoin`, symbol: `tFIL` }, rpcUrls: { default: { http: [`https://api.calibration.node.glif.io/rpc/v1`] }, public: { http: [`https://api.calibration.node.glif.io/rpc/v1`] } }, blockExplorers: { default: { name: `Filscan`, url: `https://calibration.filscan.io` } } };
var p2 = { id: 17069, name: `Garnet Holesky`, network: `garnet-holesky`, nativeCurrency: { name: `ETH`, symbol: `ETH`, decimals: 18 }, rpcUrls: { default: { http: [`https://rpc.garnetchain.com`] }, public: { http: [`https://rpc.garnetchain.com`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://explorer.garnetchain.com` } } };
var m2 = { id: 43419, name: `Gunz Mainnet`, network: `gunz`, nativeCurrency: { name: `GUN`, symbol: `GUN`, decimals: 18 }, rpcUrls: { privy: { http: [`https://gunz-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc`] }, public: { http: [`https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc`] } }, blockExplorers: { default: { name: `Gunz Explorer`, url: `https://gunzscan.io` } } };
var h = { id: 17e3, name: `Holesky`, network: `holesky`, nativeCurrency: { name: `ETH`, symbol: `ETH`, decimals: 18 }, rpcUrls: { default: { http: [`https://ethereum-holesky.publicnode.com`] }, public: { http: [`https://ethereum-holesky.publicnode.com`] } }, blockExplorers: { etherscan: { name: `EtherScan`, url: `https://holesky.etherscan.io` }, default: { name: `EtherScan`, url: `https://holesky.etherscan.io` } } };
var g = { id: 13371, name: `Immutable zkEVM`, network: `immutable-zkevm`, nativeCurrency: { name: `Immutable Coin`, symbol: `IMX`, decimals: 18 }, rpcUrls: { privy: { http: [`https://immutable-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.immutable.com`] }, public: { http: [`https://rpc.immutable.com`] } }, blockExplorers: { default: { name: `Immutable Explorer`, url: `https://explorer.immutable.com` } } };
var _2 = { id: 59144, network: `linea-mainnet`, name: `Linea Mainnet`, nativeCurrency: { name: `Linea Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { default: { http: [`https://rpc.linea.build`], webSocket: [`wss://rpc.linea.build`] }, public: { http: [`https://rpc.linea.build`], webSocket: [`wss://rpc.linea.build`] } }, blockExplorers: { default: { name: `Etherscan`, url: `https://lineascan.build` }, etherscan: { name: `Etherscan`, url: `https://lineascan.build` } }, testnet: false };
var ee2 = { id: 59140, network: `linea-testnet`, name: `Linea Goerli Testnet`, nativeCurrency: { name: `Linea Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { infura: { http: [`https://linea-goerli.infura.io/v3`], webSocket: [`wss://linea-goerli.infura.io/ws/v3`] }, default: { http: [`https://rpc.goerli.linea.build`], webSocket: [`wss://rpc.goerli.linea.build`] }, public: { http: [`https://rpc.goerli.linea.build`], webSocket: [`wss://rpc.goerli.linea.build`] } }, blockExplorers: { default: { name: `Etherscan`, url: `https://goerli.lineascan.build` }, etherscan: { name: `Etherscan`, url: `https://goerli.lineascan.build` } }, testnet: true };
var v2 = { id: 42, network: `lukso`, name: `LUKSO`, nativeCurrency: { name: `LUKSO`, symbol: `LYX`, decimals: 18 }, rpcUrls: { default: { http: [`https://rpc.mainnet.lukso.network`], webSocket: [`wss://ws-rpc.mainnet.lukso.network`] } }, blockExplorers: { default: { name: `LUKSO Mainnet Explorer`, url: `https://explorer.execution.mainnet.lukso.network` } } };
var y = { id: 1, network: `homestead`, name: `Ethereum`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://mainnet.rpc.privy.systems`] }, alchemy: { http: [`https://eth-mainnet.g.alchemy.com/v2`], webSocket: [`wss://eth-mainnet.g.alchemy.com/v2`] }, infura: { http: [`https://mainnet.infura.io/v3`], webSocket: [`wss://mainnet.infura.io/ws/v3`] }, default: { http: [`https://cloudflare-eth.com`] }, public: { http: [`https://cloudflare-eth.com`] } }, blockExplorers: { etherscan: { name: `Etherscan`, url: `https://etherscan.io` }, default: { name: `Etherscan`, url: `https://etherscan.io` } } };
var b = { id: 1088, name: `Metis Andromeda`, network: `metis`, nativeCurrency: { name: `Metis`, symbol: `METIS`, decimals: 18 }, rpcUrls: { privy: { http: [`https://metis-mainnet.rpc.privy.systems`] }, default: { http: [`https://andromeda.metis.io/?owner=1088`, `https://metis-mainnet.public.blastapi.io`] }, public: { http: [`https://andromeda.metis.io/?owner=1088`, `https://metis-mainnet.public.blastapi.io`] } }, blockExplorers: { default: { name: `Metis Explorer`, url: `https://explorer.metis.io` } } };
var x = { id: 10, name: `OP Mainnet`, network: `optimism`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://optimism-mainnet.rpc.privy.systems`] }, alchemy: { http: [`https://opt-mainnet.g.alchemy.com/v2`], webSocket: [`wss://opt-mainnet.g.alchemy.com/v2`] }, infura: { http: [`https://optimism-mainnet.infura.io/v3`], webSocket: [`wss://optimism-mainnet.infura.io/ws/v3`] }, default: { http: [`https://mainnet.optimism.io`] }, public: { http: [`https://mainnet.optimism.io`] } }, blockExplorers: { etherscan: { name: `Etherscan`, url: `https://optimistic.etherscan.io` }, default: { name: `Optimism Explorer`, url: `https://explorer.optimism.io` } } };
var S = { id: 11155420, name: `Optimism Sepolia`, network: `optimism-sepolia`, nativeCurrency: { name: `Sepolia Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://optimism-sepolia.rpc.privy.systems`] }, default: { http: [`https://sepolia.optimism.io`] }, public: { http: [`https://sepolia.optimism.io`] }, infura: { http: [`https://optimism-sepolia.infura.io/v3`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://optimism-sepolia.blockscout.com` } }, testnet: true };
var C2 = { id: 137, name: `Polygon Mainnet`, network: `polygon`, nativeCurrency: { name: `POL`, symbol: `POL`, decimals: 18 }, rpcUrls: { privy: { http: [`https://polygon-mainnet.rpc.privy.systems`] }, alchemy: { http: [`https://polygon-mainnet.g.alchemy.com/v2`], webSocket: [`wss://polygon-mainnet.g.alchemy.com/v2`] }, infura: { http: [`https://polygon-mainnet.infura.io/v3`], webSocket: [`wss://polygon-mainnet.infura.io/ws/v3`] }, default: { http: [`https://polygon-rpc.com`] }, public: { http: [`https://polygon-rpc.com`] } }, blockExplorers: { etherscan: { name: `PolygonScan`, url: `https://polygonscan.com` }, default: { name: `PolygonScan`, url: `https://polygonscan.com` } } };
var w = { id: 80002, name: `Polygon Amoy`, network: `polygon-amoy`, nativeCurrency: { name: `POL`, symbol: `POL`, decimals: 18 }, rpcUrls: { privy: { http: [`https://polygon-amoy.rpc.privy.systems`] }, infura: { http: [`https://polygon-amoy.infura.io/v3`], webSocket: [`wss://polygon-amoy.infura.io/ws/v3`] }, default: { http: [`https://rpc-amoy.polygon.technology`] } }, blockExplorers: { default: { name: `OK LINK`, url: `https://www.oklink.com/amoy` } }, testnet: true };
var T = { id: 690, name: `Redstone`, network: `redstone`, nativeCurrency: { name: `ETH`, symbol: `ETH`, decimals: 18 }, rpcUrls: { default: { http: [`https://rpc.redstonechain.com`] }, public: { http: [`https://rpc.redstonechain.com`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://explorer.redstone.xyz/` } } };
var E = { id: 11155111, network: `sepolia`, name: `Sepolia`, nativeCurrency: { name: `Sepolia Ether`, symbol: `SEP`, decimals: 18 }, rpcUrls: { privy: { http: [`https://sepolia.rpc.privy.systems`] }, alchemy: { http: [`https://eth-sepolia.g.alchemy.com/v2`], webSocket: [`wss://eth-sepolia.g.alchemy.com/v2`] }, infura: { http: [`https://sepolia.infura.io/v3`], webSocket: [`wss://sepolia.infura.io/ws/v3`] }, default: { http: [`https://rpc.sepolia.org`] }, public: { http: [`https://rpc.sepolia.org`] } }, blockExplorers: { etherscan: { name: `Etherscan`, url: `https://sepolia.etherscan.io` }, default: { name: `Etherscan`, url: `https://sepolia.etherscan.io` } }, testnet: true };
var D = { id: 1868, name: `Soneium Mainnet`, network: `soneium`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://soneium-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.soneium.org`] }, public: { http: [`https://rpc.soneium.org`] } }, blockExplorers: { default: { name: `Blockscout`, url: `https://soneium.blockscout.com` } } };
var O = { id: 130, name: `Unichain`, network: `unichain`, nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 }, rpcUrls: { privy: { http: [`https://unichain-mainnet.rpc.privy.systems`] }, default: { http: [`https://mainnet.unichain.org`] }, public: { http: [`https://mainnet.unichain.org`] } }, blockExplorers: { default: { name: `Uniscan`, url: `https://uniscan.xyz` } } };
var k = { id: 7777777, name: `Zora`, network: `zora`, nativeCurrency: { decimals: 18, name: `Ether`, symbol: `ETH` }, rpcUrls: { privy: { http: [`https://zora-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.zora.energy`], webSocket: [`wss://rpc.zora.energy`] }, public: { http: [`https://rpc.zora.energy`], webSocket: [`wss://rpc.zora.energy`] } }, blockExplorers: { default: { name: `Explorer`, url: `https://explorer.zora.energy` } } };
var A = { id: 999999999, name: `Zora Sepolia`, network: `zora-sepolia`, nativeCurrency: { decimals: 18, name: `Zora Sepolia`, symbol: `ETH` }, rpcUrls: { default: { http: [`https://sepolia.rpc.zora.energy`], webSocket: [`wss://sepolia.rpc.zora.energy`] }, public: { http: [`https://sepolia.rpc.zora.energy`], webSocket: [`wss://sepolia.rpc.zora.energy`] } }, blockExplorers: { default: { name: `Zora Sepolia Explorer`, url: `https://sepolia.explorer.zora.energy/` } }, testnet: true };
var j = { id: 999, name: `Zora Goerli Testnet`, network: `zora-testnet`, nativeCurrency: { decimals: 18, name: `Zora Goerli`, symbol: `ETH` }, rpcUrls: { default: { http: [`https://testnet.rpc.zora.energy`], webSocket: [`wss://testnet.rpc.zora.energy`] }, public: { http: [`https://testnet.rpc.zora.energy`], webSocket: [`wss://testnet.rpc.zora.energy`] } }, blockExplorers: { default: { name: `Explorer`, url: `https://testnet.explorer.zora.energy` } }, testnet: true };
var M = [y, E, h, t, n2, x, S, C2, w, l2, u2, d2, f2, a2, o2, s2, c2, m2, g, v2, _2, ee2, b, r2, i2, D, O, k, j, A, T, p2];
var N = new Set(M.map((e7) => e7.id));
function P(e7) {
  let t5 = e7.filter((e8) => !N.has(e8.id));
  return M.concat(t5);
}
var I2 = (t5) => t5.map((t6) => {
  if (t6.rpcUrls.privyWalletOverride) return t6;
  let n5 = M.find((e7) => e7.id === t6.id)?.rpcUrls.privy?.http[0];
  return n5 ? e2(t6, n5) : t6;
});
var ie2 = { id: 999, name: `HyperEVM Mainnet`, network: `hyperevm`, nativeCurrency: { name: `HYPE`, symbol: `HYPE`, decimals: 18 }, rpcUrls: { privy: { http: [`https://hyperevm-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.hyperliquid.xyz/evm`] }, public: { http: [`https://rpc.hyperliquid.xyz/evm`] } }, blockExplorers: { default: { name: `HyperEVM Mainnet Explorer`, url: `` } } };
var ae2 = { id: 143, name: `Monad`, network: `monad`, nativeCurrency: { name: `Monad`, symbol: `MON`, decimals: 18 }, rpcUrls: { privy: { http: [`https://monad-mainnet.rpc.privy.systems`] }, default: { http: [`https://rpc.monad.xyz`] }, public: { http: [`https://rpc.monad.xyz`] } }, blockExplorers: { default: { name: `Monadscan`, url: `https://mainnet-beta.monvision.io` } } };

// node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// node_modules/@privy-io/ethereum/dist/esm/index.mjs
import { isHex as e3, toHex as t2 } from "viem";
var n3 = { 0: `legacy`, 1: `eip2930`, 2: `eip1559`, 3: `eip4844`, 4: `eip7702` };
var r3 = { legacy: 0, eip2930: 1, eip1559: 2, eip4844: 3, eip7702: 4 };
var i3 = (e7) => e7 === void 0 ? void 0 : BigInt(e7);
function a3(r4) {
  let { type: a6 = 2, authorizationList: o6, ...s5 } = typeof r4 == `string` ? JSON.parse(r4) : r4, c5;
  s5.accessList && Array.isArray(s5.accessList) ? c5 = s5.accessList.map((e7) => Array.isArray(e7) ? { address: e7[0], storageKeys: e7[1] } : e7) : s5.accessList && (c5 = Object.entries(s5.accessList).map((e7) => ({ address: e7[0], storageKeys: e7[1] })));
  let l6 = Number(s5.chainId ?? 1), u6 = e3(s5.data) ? s5.data : s5.data ? t2(Uint8Array.from(s5.data)) : void 0, d6 = s5.nonce ? Number(s5.nonce) : void 0, f5 = { chainId: l6, data: u6, nonce: d6, value: i3(s5.value), gas: i3(s5.gas ?? s5.gasLimit) }, p5 = Number(a6);
  if (p5 === 0) return { ...s5, type: n3[p5], ...f5, gasPrice: i3(s5.gasPrice), accessList: void 0, maxFeePerGas: void 0, maxPriorityFeePerGas: void 0 };
  if (p5 === 1) return { ...s5, type: n3[p5], ...f5, gasPrice: i3(s5.gasPrice), accessList: c5, maxFeePerGas: void 0, maxPriorityFeePerGas: void 0 };
  if (p5 === 2) return { ...s5, type: n3[p5], ...f5, nonce: d6, accessList: c5, maxFeePerGas: i3(s5.maxFeePerGas), maxPriorityFeePerGas: i3(s5.maxPriorityFeePerGas), gasPrice: void 0, maxFeePerBlobGas: void 0 };
  if (p5 === 4) {
    let e7 = (o6 ?? []).map((e8) => ({ address: e8.address, chainId: Number(e8.chainId), nonce: Number(e8.nonce), r: e8.r, s: e8.s, yParity: e8.yParity ?? (e8.v === void 0 ? 0 : Number(e8.v) - 27) }));
    return { ...s5, type: n3[p5], ...f5, nonce: d6, accessList: c5, maxFeePerGas: i3(s5.maxFeePerGas), maxPriorityFeePerGas: i3(s5.maxPriorityFeePerGas), authorizationList: e7, gasPrice: void 0, maxFeePerBlobGas: void 0 };
  }
  throw Error(`Unsupported transaction type: ${a6}`);
}
var o3 = 118;
var s3 = `tempo`;
var c3 = (e7, t5) => {
  if (e7 === void 0) return;
  let n5 = Number(e7);
  if (!Number.isSafeInteger(n5) || n5 < 0) throw Error(`Invalid Tempo ${t5}: ${String(e7)}`);
  return n5;
};
function l3(e7) {
  if (!e7 || typeof e7 != `object`) return false;
  let t5 = e7.type;
  if (!(t5 === 118 || typeof t5 == `string` && t5.toLowerCase() === `tempo`)) return false;
  let n5 = e7.calls;
  return Array.isArray(n5) && n5.length > 0;
}
function u3(e7) {
  let t5;
  if (typeof e7 == `string`) try {
    t5 = JSON.parse(e7);
  } catch (e8) {
    let t6 = e8 instanceof Error ? e8.message : String(e8);
    throw Error(`Invalid Tempo transaction JSON: ${t6}`);
  }
  else t5 = e7;
  let n5;
  if (t5.accessList && Array.isArray(t5.accessList) ? n5 = t5.accessList.map((e8) => Array.isArray(e8) ? { address: e8[0], storageKeys: e8[1] } : e8) : t5.accessList && (n5 = Object.entries(t5.accessList).map((e8) => ({ address: e8[0], storageKeys: e8[1] }))), t5.chainId === void 0 || t5.chainId === null) throw Error(`Tempo transactions require a chainId`);
  let r4 = Number(t5.chainId);
  if (!Number.isSafeInteger(r4) || r4 <= 0) throw Error(`Invalid Tempo chainId: ${String(t5.chainId)}`);
  let a6 = c3(t5.nonce, `nonce`);
  if (!Array.isArray(t5.calls) || t5.calls.length === 0) throw Error(`Tempo transactions require at least one call`);
  let o6 = t5.calls.map((e8) => ({ to: e8.to, data: e8.data, value: i3(e8.value) }));
  return { type: s3, chainId: r4, from: t5.from, nonce: a6, gas: i3(t5.gasLimit), maxFeePerGas: i3(t5.maxFeePerGas), maxPriorityFeePerGas: i3(t5.maxPriorityFeePerGas), calls: o6, feeToken: t5.feeToken, nonceKey: i3(t5.nonceKey), validBefore: c3(t5.validBefore, `validBefore`), validAfter: c3(t5.validAfter, `validAfter`), feePayerSignature: t5.feePayerSignature, accessList: n5 };
}
function d3(e7, t5) {
  let { chain: n5, gas: r4, ...i5 } = e7;
  return { ...i5, ...r4 !== void 0 && t5 === void 0 ? { gasLimit: r4 } : {} };
}

// node_modules/@privy-io/encoding/dist/esm/index.mjs
var i4 = (t5) => base64.encode(t5);
var a4 = (n5) => {
  try {
    return Uint8Array.from(base64.decode(n5));
  } catch (e7) {
    if (e7 instanceof Error && e7.message.includes(`string should have whole number of bytes`)) return Uint8Array.from(base64nopad.decode(n5));
    throw e7;
  }
};
var o4 = (e7) => base64url.encode(e7);
var s4 = (e7) => Uint8Array.from(base64url.decode(e7));
var c4 = (e7) => Uint8Array.from(hex.decode(e7.startsWith(`0x`) ? e7.slice(2) : e7));
var l4 = (e7) => hex.encode(e7);
var u4 = new TextEncoder();
var d4 = (e7) => Uint8Array.from(u4.encode(e7));
var f3 = new TextDecoder();
var p3 = new TextDecoder(`utf-8`, { fatal: true });
var m3 = (e7, t5) => (t5?.fatal ? p3 : f3).decode(e7);
var g2 = { utf8: { fromBytes: m3, toBytes: d4 }, base64: { fromBytes: i4, toBytes: a4 }, base64url: { fromBytes: o4, toBytes: s4 }, hex: { fromBytes: l4, toBytes: c4 } };

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_5) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k4) => typeof obj[obj[k4]] !== "number");
    const filtered = {};
    for (const k4 of validKeys) {
      filtered[k4] = obj[k4];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e7) {
      return obj[e7];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_5, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t5 = typeof data;
  switch (t5) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i5 = 0;
          while (i5 < issue.path.length) {
            const el = issue.path[i5];
            const terminal = i5 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i5++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m5) => !!m5).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x3) => !!x3)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s5 of results) {
      if (s5.status === "aborted")
        return INVALID;
      if (s5.status === "dirty")
        status.dirty();
      arrayValue.push(s5.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x3) => x3.status === "aborted";
var isDirty = (x3) => x3.status === "dirty";
var isValid = (x3) => x3.status === "valid";
var isAsync = (x3) => typeof Promise !== "undefined" && x3 instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result2) => {
  if (isValid(result2)) {
    return { success: true, data: result2.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result2 = this._parse(input);
    if (isAsync(result2)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result2;
  }
  _parseAsync(input) {
    const result2 = this._parse(input);
    return Promise.resolve(result2);
  }
  parse(data, params) {
    const result2 = this.safeParse(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result2 = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result2);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result2 = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result2) ? {
          value: result2.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result2) => isValid(result2) ? {
      value: result2.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result2 = await this.safeParseAsync(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result2 = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result2);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result2 = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result2 instanceof Promise) {
        return result2.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result2) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base642 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base642));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i5) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i5));
      })).then((result3) => {
        return ParseStatus.mergeArray(status, result3);
      });
    }
    const result2 = [...ctx.data].map((item, i5) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i5));
    });
    return ParseStatus.mergeArray(status, result2);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result2 of results) {
        if (result2.result.status === "valid") {
          return result2.result;
        }
      }
      for (const result2 of results) {
        if (result2.result.status === "dirty") {
          ctx.common.issues.push(...result2.ctx.common.issues);
          return result2.result;
        }
      }
      const unionErrors = results.map((result2) => new ZodError(result2.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result2 = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result2.status === "valid") {
          return result2;
        } else if (result2.status === "dirty" && !dirty) {
          dirty = { result: result2, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a6, b3) {
  const aType = getParsedType(a6);
  const bType = getParsedType(b3);
  if (a6 === b3) {
    return { valid: true, data: a6 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b3);
    const sharedKeys = util.objectKeys(a6).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a6, ...b3 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a6[key], b3[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a6.length !== b3.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a6.length; index++) {
      const itemA = a6[index];
      const itemB = b3[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a6 === +b3) {
    return { valid: true, data: a6 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x3) => !!x3);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i5) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i5)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e7) => {
          error.addIssue(makeArgsIssue(args, e7));
          throw error;
        });
        const result2 = await Reflect.apply(fn2, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result2, params).catch((e7) => {
          error.addIssue(makeReturnsIssue(result2, e7));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result2 = Reflect.apply(fn2, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result2, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result2, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result2 = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result2.status === "aborted")
            return INVALID;
          if (result2.status === "dirty")
            return DIRTY(result2.value);
          if (status.value === "dirty")
            return DIRTY(result2.value);
          return result2;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result2 = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result2.status === "aborted")
          return INVALID;
        if (result2.status === "dirty")
          return DIRTY(result2.value);
        if (status.value === "dirty")
          return DIRTY(result2.value);
        return result2;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result2 = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result2);
        }
        if (result2 instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result2 = effect.transform(base.value, checkCtx);
        if (result2 instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result2 };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result2) => ({
            status: status.value,
            value: result2
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result2 = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result2)) {
      return result2.then((result3) => {
        return {
          status: "valid",
          value: result3.status === "valid" ? result3.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result2.status === "valid" ? result2.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a6, b3) {
    return new _ZodPipeline({
      in: a6,
      out: b3,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result2 = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result2) ? result2.then((data) => freeze(data)) : freeze(result2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p5 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p22 = typeof p5 === "string" ? { message: p5 } : p5;
  return p22;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r4 = check(data);
      if (r4 instanceof Promise) {
        return r4.then((r5) => {
          if (!r5) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r4) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// node_modules/@privy-io/api-base/dist/esm/index.mjs
var t3 = (function(e7) {
  return e7.OAUTH_ACCOUNT_SUSPENDED = `oauth_account_suspended`, e7.MISSING_OR_INVALID_PRIVY_APP_ID = `missing_or_invalid_privy_app_id`, e7.MISSING_OR_INVALID_PRIVY_CLIENT_ID = `missing_or_invalid_privy_client_id`, e7.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = `missing_or_invalid_privy_account_id`, e7.MISSING_OR_INVALID_TOKEN = `missing_or_invalid_token`, e7.MISSING_MFA_ENROLLMENT = `missing_mfa_enrollment`, e7.MISSING_OR_INVALID_MFA = `missing_or_invalid_mfa`, e7.EXPIRED_OR_INVALID_MFA_TOKEN = `expired_or_invalid_mfa_token`, e7.INVALID_DATA = `invalid_data`, e7.INVALID_CREDENTIALS = `invalid_credentials`, e7.PASSKEY_NOT_REGISTERED = `passkey_not_registered`, e7.INVALID_CAPTCHA = `invalid_captcha`, e7.LINKED_TO_ANOTHER_USER = `linked_to_another_user`, e7.ALLOWLIST_REJECTED = `allowlist_rejected`, e7.CANNOT_UNLINK_EMBEDDED_WALLET = `cannot_unlink_embedded_wallet`, e7.CANNOT_UNLINK_SOLE_ACCOUNT = `cannot_unlink_sole_account`, e7.CANNOT_LINK_MORE_OF_TYPE = `cannot_link_more_of_type`, e7.LINKED_ACCOUNT_NOT_FOUND = `linked_account_not_found`, e7.TOO_MANY_REQUESTS = `too_many_requests`, e7.RESOURCE_CONFLICT = `resource_conflict`, e7.INVALID_ORIGIN = `invalid_origin`, e7.MISSING_ORIGIN = `missing_origin`, e7.INVALID_NATIVE_APP_ID = `invalid_native_app_id`, e7.TOKEN_ALREADY_USED = `token_already_used`, e7.ALREADY_LOGGED_OUT = `already_logged_out`, e7.NOT_SUPPORTED = `not_supported`, e7.USER_UNSUBSCRIBED = `user_unsubscribed`, e7.MAX_APPS_REACHED = `max_apps_reached`, e7.USER_LIMIT_REACHED = `max_accounts_reached`, e7.DEVICE_REVOKED = `device_revoked`, e7.WALLET_PASSWORD_EXISTS = `wallet_password_exists`, e7.OAUTH_STATE_MISMATCH = `oauth_state_mismatch`, e7.MAX_DENYLIST_ENTRIES_REACHED = `max_denylist_entries_reached`, e7.MAX_TEST_ACCOUNTS_REACHED = `max_test_accounts_reached`, e7.DISALLOWED_LOGIN_METHOD = `disallowed_login_method`, e7.DISALLOWED_PLUS_EMAIL = `disallowed_plus_email`, e7.DISALLOWED_RECOVERY_METHOD = `disallowed_recovery_method`, e7.LEGACY_DASHBOARD_LOGIN_CONFIGURATION = `legacy_dashboard_login_configuration`, e7.CANNOT_SET_PASSWORD = `cannot_set_password`, e7.INVALID_PKCE_PARAMETERS = `invalid_pkce_parameters`, e7.INVALID_APP_URL_SCHEME_CONFIGURATION = `invalid_app_url_scheme_configuration`, e7.CROSS_APP_CONNECTION_NOT_ALLOWED = `cross_app_connection_not_allowed`, e7.USER_DOES_NOT_EXIST = `user_does_not_exist`, e7.ALREADY_EXISTS = `resource_already_exists`, e7.ACCOUNT_TRANSFER_REQUIRED = `account_transfer_required`, e7.USER_HAS_NOT_DELEGATED_WALLET = `user_has_not_delegated_wallet`, e7.FEATURE_NOT_ENABLED = `feature_not_enabled`, e7.ONRAMP_MINIMUM_IDENTITY_VERIFICATION_REQUIRED = `onramp_minimum_identity_verification_required`, e7.ONRAMP_IDENTITY_VERIFICATION_REQUIRED = `onramp_identity_verification_required`, e7.ONRAMP_DOCUMENT_VERIFICATION_REQUIRED = `onramp_document_verification_required`, e7.ONRAMP_UNSUPPORTED_INFORMATION = `onramp_unsupported_information`, e7.ONRAMP_TRANSACTION_LIMIT_REACHED = `transaction_limit_reached`, e7.ONRAMP_QUOTE_EXPIRED = `onramp_quote_expired`, e7.INSUFFICIENT_FUNDS = `insufficient_funds`, e7.TRANSACTION_BROADCAST_FAILURE = `transaction_broadcast_failure`, e7.TRANSACTION_EXECUTION_FAILURE = `transaction_execution_failure`, e7.INVALID_SOLANA_TRANSACTION = `invalid_solana_transaction`, e7.INVALID_POLICY_FORMAT = `invalid_policy_format`, e7.INVALID_AGGREGATION_FORMAT = `invalid_aggregation_format`, e7.POLICY_VIOLATION = `policy_violation`, e7.AUTHORIZATION_KEY_HAS_ASSOCIATED_WALLETS = `authorization_key_has_associated_wallets`, e7.COMPLIANCE_BLOCKED = `compliance_blocked`, e7.INVALID_REQUEST = `invalid_request`, e7.SIGNUP_DISABLED = `signup_disabled`, e7.INVALID_STATE = `invalid_state`, e7.WALLET_ENTITY_ASSIGNMENT_FAILED = `wallet_entity_assignment_failed`, e7.WALLET_ENTITY_LIMIT_EXCEEDED = `wallet_entity_limit_exceeded`, e7.WALLET_ENTITY_ALREADY_SET = `wallet_entity_already_set`, e7;
})({});
var _3 = external_exports.object({ error: external_exports.string(), cause: external_exports.string().optional(), code: external_exports.nativeEnum(t3).optional() });

// node_modules/@privy-io/js-sdk-core/dist/esm/index.mjs
import { createPublicClient as ht, formatEther as gt, formatUnits as _t, http as vt, toHex as yt } from "viem";
var import_canonicalize = __toESM(require_canonicalize(), 1);
import { tempo as Et, tempoModerato as Dt } from "viem/chains";

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i5 = 1; i5 < arguments.length; i5++) {
    var source = arguments[i5];
    for (var key in source) {
      if (key === "__proto__") continue;
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i5 = 0; i5 < cookies.length; i5++) {
      var parts = cookies[i5].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        if (!(found in jar)) jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (_e2) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/@privy-io/js-sdk-core/dist/esm/index.mjs
var import_fetch_retry = __toESM(require_fetch_retry_umd(), 1);

// node_modules/libphonenumber-js/examples.mobile.json.js
var examples_mobile_json_default = { "AC": "40123", "AD": "312345", "AE": "501234567", "AF": "701234567", "AG": "2684641234", "AI": "2642351234", "AL": "672123456", "AM": "77123456", "AO": "923123456", "AR": "91123456789", "AS": "6847331234", "AT": "664123456", "AU": "412345678", "AW": "5601234", "AX": "412345678", "AZ": "401234567", "BA": "61123456", "BB": "2462501234", "BD": "1812345678", "BE": "450001234", "BF": "70123456", "BG": "43012345", "BH": "36001234", "BI": "79561234", "BJ": "0195123456", "BL": "690001234", "BM": "4413701234", "BN": "7123456", "BO": "71234567", "BQ": "3181234", "BR": "11961234567", "BS": "2423591234", "BT": "17123456", "BW": "71123456", "BY": "294911911", "BZ": "6221234", "CA": "5062345678", "CC": "412345678", "CD": "991234567", "CF": "70012345", "CG": "061234567", "CH": "781234567", "CI": "0123456789", "CK": "71234", "CL": "221234567", "CM": "671234567", "CN": "13123456789", "CO": "3211234567", "CR": "83123456", "CU": "51234567", "CV": "9911234", "CW": "95181234", "CX": "412345678", "CY": "96123456", "CZ": "601123456", "DE": "15123456789", "DJ": "77831001", "DK": "34412345", "DM": "7672251234", "DO": "8092345678", "DZ": "551234567", "EC": "991234567", "EE": "51234567", "EG": "1001234567", "EH": "650123456", "ER": "7123456", "ES": "612345678", "ET": "911234567", "FI": "412345678", "FJ": "7012345", "FK": "51234", "FM": "3501234", "FO": "211234", "FR": "612345678", "GA": "06031234", "GB": "7400123456", "GD": "4734031234", "GE": "555123456", "GF": "694201234", "GG": "7781123456", "GH": "231234567", "GI": "57123456", "GL": "221234", "GM": "3012345", "GN": "601123456", "GP": "690001234", "GQ": "222123456", "GR": "6912345678", "GT": "51234567", "GU": "6713001234", "GW": "955012345", "GY": "6091234", "HK": "51234567", "HN": "91234567", "HR": "921234567", "HT": "34101234", "HU": "201234567", "ID": "812345678", "IE": "850123456", "IL": "502345678", "IM": "7924123456", "IN": "8123456789", "IO": "3801234", "IQ": "7912345678", "IR": "9123456789", "IS": "6111234", "IT": "3123456789", "JE": "7797712345", "JM": "8762101234", "JO": "790123456", "JP": "9012345678", "KE": "712123456", "KG": "700123456", "KH": "91234567", "KI": "72001234", "KM": "3212345", "KN": "8697652917", "KP": "1921234567", "KR": "1020000000", "KW": "50012345", "KY": "3453231234", "KZ": "7710009998", "LA": "2023123456", "LB": "71123456", "LC": "7582845678", "LI": "660234567", "LK": "712345678", "LR": "770123456", "LS": "50123456", "LT": "61234567", "LU": "628123456", "LV": "21234567", "LY": "912345678", "MA": "650123456", "MC": "612345678", "MD": "62112345", "ME": "60123456", "MF": "690001234", "MG": "321234567", "MH": "2351234", "MK": "72345678", "ML": "65012345", "MM": "92123456", "MN": "88123456", "MO": "66123456", "MP": "6702345678", "MQ": "696201234", "MR": "22123456", "MS": "6644923456", "MT": "96961234", "MU": "52512345", "MV": "7712345", "MW": "991234567", "MX": "2221234567", "MY": "123456789", "MZ": "821234567", "NA": "811234567", "NC": "751234", "NE": "93123456", "NF": "381234", "NG": "8021234567", "NI": "81234567", "NL": "612345678", "NO": "40612345", "NP": "9841234567", "NR": "5551234", "NU": "8884012", "NZ": "211234567", "OM": "92123456", "PA": "61234567", "PE": "912345678", "PF": "87123456", "PG": "70123456", "PH": "9051234567", "PK": "3012345678", "PL": "512345678", "PM": "551234", "PR": "7872345678", "PS": "599123456", "PT": "912345678", "PW": "6201234", "PY": "961456789", "QA": "33123456", "RE": "692123456", "RO": "712034567", "RS": "601234567", "RU": "9123456789", "RW": "720123456", "SA": "512345678", "SB": "7421234", "SC": "2510123", "SD": "911231234", "SE": "701234567", "SG": "81234567", "SH": "51234", "SI": "31234567", "SJ": "41234567", "SK": "912123456", "SL": "25123456", "SM": "66661212", "SN": "701234567", "SO": "71123456", "SR": "7412345", "SS": "977123456", "ST": "9812345", "SV": "70123456", "SX": "7215205678", "SY": "944567890", "SZ": "76123456", "TA": "8999", "TC": "6492311234", "TD": "63012345", "TG": "90112345", "TH": "812345678", "TJ": "917123456", "TK": "7290", "TL": "77212345", "TM": "66123456", "TN": "20123456", "TO": "7715123", "TR": "5012345678", "TT": "8682911234", "TV": "901234", "TW": "912345678", "TZ": "621234567", "UA": "501234567", "UG": "712345678", "US": "2015550123", "UY": "94231234", "UZ": "912345678", "VA": "3123456789", "VC": "7844301234", "VE": "4121234567", "VG": "2843001234", "VI": "3406421234", "VN": "912345678", "VU": "5912345", "WF": "821234", "WS": "7212345", "XK": "43201234", "YE": "712345678", "YT": "639012345", "ZA": "711234567", "ZM": "955123456", "ZW": "712345678" };

// node_modules/libphonenumber-js/metadata.min.json.js
var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[2-467])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], "BL": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-7]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]|50"]], ["(\\d{8})", "$1", ["[5-7]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], "CF": ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "(?:400|[5-9]\\d\\d)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-9]"]]]], "ET": ["251", "00", "(?:11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[48]\\d{8}|[2-9]\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|4(?:[0-35]|4[16-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1(?:05|[2-9]))", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], "MC": ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-37-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85[02-46-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[013]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|9[2-9]"]], ["(\\d)(\\d{7})", "$1 $2", ["[267]|904"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[346-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "[1-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024", "20240"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]", "20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[2-4]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}", [7, 8, 9, 10], [["(\\d{4})(\\d{4,6})", "$1 $2", ["1(?:2[02]|[89])"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[26]|6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], "ZW": ["263", "00", "(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[2-689]\\d{6}", [7, 9, 10], [["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"], "0$1"], ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["548"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[256]|39|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
function semver_compare_default(a6, b3) {
  a6 = a6.split("-");
  b3 = b3.split("-");
  var pa2 = a6[0].split(".");
  var pb = b3[0].split(".");
  for (var i5 = 0; i5 < 3; i5++) {
    var na2 = Number(pa2[i5]);
    var nb = Number(pb[i5]);
    if (na2 > nb) return 1;
    if (nb > na2) return -1;
    if (!isNaN(na2) && isNaN(nb)) return 1;
    if (isNaN(na2) && !isNaN(nb)) return -1;
  }
  if (a6[1] && b3[1]) {
    return a6[1] > b3[1] ? 1 : a6[1] < b3[1] ? -1 : 0;
  }
  return !a6[1] && b3[1] ? 1 : a6[1] && !b3[1] ? -1 : 0;
}

// node_modules/libphonenumber-js/es6/helpers/isObject.js
var objectConstructor = {}.constructor;
function isObject2(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}

// node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var CALLING_CODE_REG_EXP = /^\d+$/;
function isCallingCode(string) {
  return CALLING_CODE_REG_EXP.test(string);
}

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof(o6) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof(o6);
}
function _classCallCheck(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey(o6.key), o6);
  }
}
function _createClass(e7, r4, t5) {
  return r4 && _defineProperties(e7.prototype, r4), t5 && _defineProperties(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey(t5) {
  var i5 = _toPrimitive(t5, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive(t5, r4) {
  if ("object" != _typeof(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var Metadata = /* @__PURE__ */ (function() {
  function Metadata2(metadata) {
    _classCallCheck(this, Metadata2);
    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }
  return _createClass(Metadata2, [{
    key: "getCountries",
    value: function getCountries3() {
      return Object.keys(this.metadata.countries).filter(function(_5) {
        return _5 !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }
    // Deprecated.
  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
    /**
     * Selects a telephone numbering plan based on either a country code or a calling code.
     * @param {string} argument — Country code or calling code.
     * @param {string} legacyArgumentCallingCode — Legacy argument: calling code, if the first argument is not passed.
     */
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(argument, legacyArgumentCallingCode) {
      var countryCode;
      var callingCode;
      if (argument) {
        if (isCallingCode(argument)) {
          callingCode = argument;
        } else {
          countryCode = argument;
        }
      }
      if (legacyArgumentCallingCode) {
        callingCode = legacyArgumentCallingCode;
      }
      if (countryCode && countryCode !== "001") {
        var countryMetadata = this.getCountryMetadata(countryCode);
        if (!countryMetadata) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(countryMetadata, this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];
        if (metadata) {
          return metadata;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }
  }]);
})();
var NumberingPlan = /* @__PURE__ */ (function() {
  function NumberingPlan2(metadata, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  return _createClass(NumberingPlan2, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    }
    // When multiple countries share the same calling code,
    // all phone number formatting rules are included in the metadata
    // of the "default" country for that calling code.
    // Any other countries' metdata doesn't include any formatting rules.
    // Google developers said that such storage architecture was chosen for performance reasons.
    //
    // For example, for NANPA region ("North American Numbering Plan Administration",
    // which includes USA, Canada, Cayman Islands, Bahamas, etc) all formatting rules
    // are contained in the metadata of `US` country.
    //
    // This is not public API.
    //
  }, {
    key: "_getDefaultCountryMetadataForThisCallingCode",
    value: function _getDefaultCountryMetadataForThisCallingCode() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Deprecated.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this._getDefaultCountryMetadataForThisCallingCode();
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || [];
      return formats2.map(function(_5) {
        return new Format(_5, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);
})();
var Format = /* @__PURE__ */ (function() {
  function Format2(format, metadata) {
    _classCallCheck(this, Format2);
    this._format = format;
    this.metadata = metadata;
  }
  return _createClass(Format2, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);
})();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = /* @__PURE__ */ (function() {
  function Type2(type, metadata) {
    _classCallCheck(this, Type2);
    this.type = type;
    this.metadata = metadata;
  }
  return _createClass(Type2, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
})();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject2(metadata) || !isObject2(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject2(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + typeOf(metadata) + ": " + metadata, "."));
  }
}
var typeOf = function typeOf2(_5) {
  return _typeof(_5);
};
function getCountryCallingCode(country, metadataJson) {
  var metadata = new Metadata(metadataJson);
  if (metadata.hasCountry(country)) {
    return metadata.selectNumberingPlan(country).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadataJson) {
  return metadataJson.countries.hasOwnProperty(country);
}
function setVersion(metadata) {
  var version = metadata.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function _createForOfIteratorHelperLoose(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray(r4, a6) : void 0;
  }
}
function _arrayLikeToArray(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function mergeArrays(a6, b3) {
  var merged = a6.slice();
  for (var _iterator = _createForOfIteratorHelperLoose(b3), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a6.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a7, b4) {
    return a7 - b4;
  });
}

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, country, metadata) {
  return checkNumberLengthForType(nationalNumber, void 0, country, metadata);
}
function checkNumberLengthForType(nationalNumber, type, country, metadata) {
  if (country) {
    metadata = new Metadata(metadata.metadata);
    metadata.selectNumberingPlan(country);
  }
  var type_info = metadata.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", country, metadata);
    }
    var mobile_type = metadata.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadataJson) {
  if (options === void 0) {
    options = {};
  }
  var metadata = new Metadata(metadataJson);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.selectNumberingPlan(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  }
  if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
    return true;
  }
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function isPossibleNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, void 0, metadata)) {
    case "IS_POSSIBLE":
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational
    default:
      return false;
  }
}

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function matchesEntirely(text, regularExpressionText) {
  text = text || "";
  return new RegExp("^(?:" + regularExpressionText + ")$").test(text);
}

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function _createForOfIteratorHelperLoose2(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray2(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray2(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray2(r4, a6) : void 0;
  }
}
function _arrayLikeToArray2(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadataJson) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
    if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose2(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  var typeDefinition = metadata.type(type);
  if (!typeDefinition || !typeDefinition.pattern()) {
    return false;
  }
  if (typeDefinition.possibleLengths() && typeDefinition.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, typeDefinition.pattern());
}

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadataJson) {
  options = options || {};
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  if (metadata.hasTypes()) {
    return getNumberType(input, options, metadata.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata.nationalNumberPattern());
}

// node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var COUNTRY_CODE_REG_EXP = /^[A-Z]{2}$/;
function isCountryCode(string) {
  return COUNTRY_CODE_REG_EXP.test(string);
}

// node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryAndCallingCodeFromOneOfThem(countryOrCallingCode, metadataJson) {
  var country;
  var callingCode;
  var metadata = new Metadata(metadataJson);
  if (isCountryCode(countryOrCallingCode)) {
    country = countryOrCallingCode;
    metadata.selectNumberingPlan(country);
    callingCode = metadata.countryCallingCode();
  } else {
    callingCode = countryOrCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata.isNonGeographicCallingCode(callingCode)) {
        country = "001";
      }
    }
  }
  return {
    country,
    callingCode
  };
}

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
  var _metadata = new Metadata(metadata);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country) {
    return couldNationalNumberBelongToCountry(nationalNumber, country, metadata);
  });
}
function couldNationalNumberBelongToCountry(nationalNumber, country, metadataJson) {
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(country);
  return metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0;
}

// node_modules/libphonenumber-js/es6/constants.js
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9";
var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
var TILDES = "~\u2053\u223C\uFF5E";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B";

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country, callingCode, metadataJson) {
  if (!country) {
    return;
  }
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(country || callingCode);
  var IDDPrefixPattern = new RegExp(metadata.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function _createForOfIteratorHelperLoose3(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray3(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray3(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray3(r4, a6) : void 0;
  }
}
function _arrayLikeToArray3(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function getCountryByNationalNumber(nationalNumber, countries, metadataJson) {
  var metadata = new Metadata(metadataJson);
  for (var _iterator = _createForOfIteratorHelperLoose3(countries), _step; !(_step = _iterator()).done; ) {
    var country = _step.value;
    metadata.selectNumberingPlan(country);
    if (metadata.leadingDigits()) {
      if (nationalNumber && nationalNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } else if (getNumberType({
      phone: nationalNumber,
      country
    }, void 0, metadata.metadata)) {
      return country;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalNumber = _ref.nationalNumber, metadata = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalNumber, possibleCountries, metadata.metadata);
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, country, metadata) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata.numberingPlan.possibleLengths()) {
      if (!country) {
        country = getCountryByCallingCode(metadata.numberingPlan.callingCode(), {
          nationalNumber,
          metadata
        });
      }
      if (!isPossibleIncompleteNationalNumber(nationalNumber, country, metadata)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
  if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
    return false;
  }
  return true;
}
function isPossibleIncompleteNationalNumber(nationalNumber, country, metadata) {
  switch (checkNumberLength(nationalNumber, country, metadata)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!(country || defaultCountry || defaultCallingCode)) {
    return {
      number
    };
  }
  var countryCallingCode = country || defaultCountry ? getCountryCallingCode(country || defaultCountry, metadataJson) : defaultCallingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    var metadata = new Metadata(metadataJson);
    metadata.selectNumberingPlan(country || defaultCountry || defaultCallingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, void 0, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, void 0, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, void 0, metadata) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country || defaultCountry, defaultCallingCode, metadataJson);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country || defaultCountry || defaultCallingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  var metadata = new Metadata(metadataJson);
  var i5 = 2;
  while (i5 - 1 <= MAX_LENGTH_COUNTRY_CODE && i5 <= number.length) {
    var _countryCallingCode = number.slice(1, i5);
    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i5)
      };
    }
    i5++;
  }
  return {};
}

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country || callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)";
  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}

// node_modules/libphonenumber-js/es6/format.js
var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  }
};
function formatNumber(input, format, options, metadataJson) {
  if (options) {
    options = merge({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  var metadata = new Metadata(metadataJson);
  if (input.country && input.country !== "001") {
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata.selectNumberingPlan(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      if (!formattedNumber) {
        return;
      }
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
  }
}
function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);
  if (!format) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata
  });
}
function chooseFormatForNumber(availableFormats, nationalNumber) {
  return pickFirstMatchingElement(availableFormats, function(format) {
    if (format.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
      if (nationalNumber.search(lastLeadingDigitsPattern) !== 0) {
        return false;
      }
    }
    return matchesEntirely(nationalNumber, format.pattern());
  });
}
function addExtension(formattedNumber, ext, metadata, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
}
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
  }
}
function merge() {
  var i5 = 1;
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  while (i5 < objects.length) {
    if (objects[i5]) {
      for (var key in objects[i5]) {
        objects[0][key] = objects[i5][key];
      }
    }
    i5++;
  }
  return objects[0];
}
function pickFirstMatchingElement(elements, testFunction) {
  var i5 = 0;
  while (i5 < elements.length) {
    if (testFunction(elements[i5])) {
      return elements[i5];
    }
    i5++;
  }
}

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function _typeof2(o6) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof2(o6);
}
function ownKeys(e7, r4) {
  var t5 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e7);
    r4 && (o6 = o6.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e7, r5).enumerable;
    })), t5.push.apply(t5, o6);
  }
  return t5;
}
function _objectSpread(e7) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t5 = null != arguments[r4] ? arguments[r4] : {};
    r4 % 2 ? ownKeys(Object(t5), true).forEach(function(r5) {
      _defineProperty(e7, r5, t5[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(t5)) : ownKeys(Object(t5)).forEach(function(r5) {
      Object.defineProperty(e7, r5, Object.getOwnPropertyDescriptor(t5, r5));
    });
  }
  return e7;
}
function _defineProperty(e7, r4, t5) {
  return (r4 = _toPropertyKey2(r4)) in e7 ? Object.defineProperty(e7, r4, { value: t5, enumerable: true, configurable: true, writable: true }) : e7[r4] = t5, e7;
}
function _classCallCheck2(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey2(o6.key), o6);
  }
}
function _createClass2(e7, r4, t5) {
  return r4 && _defineProperties2(e7.prototype, r4), t5 && _defineProperties2(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey2(t5) {
  var i5 = _toPrimitive2(t5, "string");
  return "symbol" == _typeof2(i5) ? i5 : i5 + "";
}
function _toPrimitive2(t5, r4) {
  if ("object" != _typeof2(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof2(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var PhoneNumber = /* @__PURE__ */ (function() {
  function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata) {
    _classCallCheck2(this, PhoneNumber2);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("First argument is required");
    }
    if (typeof countryOrCountryCallingCode !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (countryOrCountryCallingCode[0] === "+" && !nationalNumber) {
      throw new TypeError("`metadata` argument not passed");
    }
    if (isObject2(nationalNumber) && isObject2(nationalNumber.countries)) {
      metadata = nationalNumber;
      var e164Number = countryOrCountryCallingCode;
      if (!E164_NUMBER_REGEXP.test(e164Number)) {
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      }
      var _extractCountryCallin = extractCountryCallingCode(e164Number, void 0, void 0, void 0, metadata), _countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      nationalNumber = number;
      countryOrCountryCallingCode = _countryCallingCode;
      if (!nationalNumber) {
        throw new Error("Invalid `number` argument passed: too short");
      }
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` argument is required");
    }
    if (typeof nationalNumber !== "string") {
      throw new TypeError("`nationalNumber` argument must be a string");
    }
    validateMetadata(metadata);
    var _getCountryAndCalling = getCountryAndCallingCodeFromOneOfThem(countryOrCountryCallingCode, metadata), country = _getCountryAndCalling.country, countryCallingCode = _getCountryAndCalling.callingCode;
    this.country = country;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata;
    };
  }
  return _createClass2(PhoneNumber2, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "getPossibleCountries",
    value: function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function isValid3() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new Metadata(this.getMetadata());
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }
    // `validateLength()` method was originally meant to be an equivalent for `validatePhoneNumberLength()`.
    //
    // Later, it became apparent that it's not really a true equivalent.
    // The reason is that a `PhoneNumber` instance is not created
    // when the phone number string is too short for it to be considered a valid phone number:
    // * When there must be at least 2 national (significant) number digits: `"1"`.
    // * When the country calling code part of an international number is incomplete: `"+12"`.
    //
    // So leaving this `validateLength()` method here would suggest a hidden anti-pattern
    // of using it instead of `validatePhoneNumberLength()` while ignoring
    // the "too short to be even possible" case from phone number length validation.
    // And ignoring that case wouldn't make any sense in a real-world application
    // because it would still be a valid case that should be handled.
    //
    // Because of that, this method was eventually commented out in order to not introduce
    // that kind of an anti-pattern.
    //
    // validateLength() {
    // 	const result = checkNumberLength(
    // 		this.nationalNumber,
    // 		undefined,
    // 		this.getMetadata()
    // 	)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return formatNumber(this, _format, options ? _objectSpread(_objectSpread({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format("NATIONAL", options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format("RFC3966", options);
    }
  }]);
})();
var E164_NUMBER_REGEXP = /^\+\d+$/;

// node_modules/libphonenumber-js/es6/ParseError.js
function _typeof3(o6) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof3(o6);
}
function _defineProperties3(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey3(o6.key), o6);
  }
}
function _createClass3(e7, r4, t5) {
  return r4 && _defineProperties3(e7.prototype, r4), t5 && _defineProperties3(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey3(t5) {
  var i5 = _toPrimitive3(t5, "string");
  return "symbol" == _typeof3(i5) ? i5 : i5 + "";
}
function _toPrimitive3(t5, r4) {
  if ("object" != _typeof3(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof3(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
function _classCallCheck3(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _callSuper(t5, o6, e7) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t5, _isNativeReflectConstruct() ? Reflect.construct(o6, e7 || [], _getPrototypeOf(t5).constructor) : o6.apply(t5, e7));
}
function _possibleConstructorReturn(t5, e7) {
  if (e7 && ("object" == _typeof3(e7) || "function" == typeof e7)) return e7;
  if (void 0 !== e7) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t5);
}
function _assertThisInitialized(e7) {
  if (void 0 === e7) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function _inherits(t5, e7) {
  if ("function" != typeof e7 && null !== e7) throw new TypeError("Super expression must either be null or a function");
  t5.prototype = Object.create(e7 && e7.prototype, { constructor: { value: t5, writable: true, configurable: true } }), Object.defineProperty(t5, "prototype", { writable: false }), e7 && _setPrototypeOf(t5, e7);
}
function _wrapNativeSuper(t5) {
  var r4 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t6) {
    if (null === t6 || !_isNativeFunction(t6)) return t6;
    if ("function" != typeof t6) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r4) {
      if (r4.has(t6)) return r4.get(t6);
      r4.set(t6, Wrapper);
    }
    function Wrapper() {
      return _construct(t6, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t6.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper, t6);
  }, _wrapNativeSuper(t5);
}
function _construct(t5, e7, r4) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o6 = [null];
  o6.push.apply(o6, e7);
  var p5 = new (t5.bind.apply(t5, o6))();
  return r4 && _setPrototypeOf(p5, r4.prototype), p5;
}
function _isNativeReflectConstruct() {
  try {
    var t5 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t6) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t5;
  })();
}
function _isNativeFunction(t5) {
  try {
    return -1 !== Function.toString.call(t5).indexOf("[native code]");
  } catch (n5) {
    return "function" == typeof t5;
  }
}
function _setPrototypeOf(t5, e7) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t6, e8) {
    return t6.__proto__ = e8, t6;
  }, _setPrototypeOf(t5, e7);
}
function _getPrototypeOf(t5) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t6) {
    return t6.__proto__ || Object.getPrototypeOf(t6);
  }, _getPrototypeOf(t5);
}
var ParseError = /* @__PURE__ */ (function(_Error) {
  function ParseError2(code) {
    var _this;
    _classCallCheck3(this, ParseError2);
    _this = _callSuper(this, ParseError2, [code]);
    Object.setPrototypeOf(_this, ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  _inherits(ParseError2, _Error);
  return _createClass3(ParseError2);
})(/* @__PURE__ */ _wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i5 = 1;
  while (i5 < matches.length) {
    if (matches[i5]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i5]
      };
    }
    i5++;
  }
}

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
function _createForOfIteratorHelperLoose4(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray4(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray4(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray4(r4, a6) : void 0;
  }
}
function _arrayLikeToArray4(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "\uFF10": "0",
  // Fullwidth digit 0
  "\uFF11": "1",
  // Fullwidth digit 1
  "\uFF12": "2",
  // Fullwidth digit 2
  "\uFF13": "3",
  // Fullwidth digit 3
  "\uFF14": "4",
  // Fullwidth digit 4
  "\uFF15": "5",
  // Fullwidth digit 5
  "\uFF16": "6",
  // Fullwidth digit 6
  "\uFF17": "7",
  // Fullwidth digit 7
  "\uFF18": "8",
  // Fullwidth digit 8
  "\uFF19": "9",
  // Fullwidth digit 9
  "\u0660": "0",
  // Arabic-indic digit 0
  "\u0661": "1",
  // Arabic-indic digit 1
  "\u0662": "2",
  // Arabic-indic digit 2
  "\u0663": "3",
  // Arabic-indic digit 3
  "\u0664": "4",
  // Arabic-indic digit 4
  "\u0665": "5",
  // Arabic-indic digit 5
  "\u0666": "6",
  // Arabic-indic digit 6
  "\u0667": "7",
  // Arabic-indic digit 7
  "\u0668": "8",
  // Arabic-indic digit 8
  "\u0669": "9",
  // Arabic-indic digit 9
  "\u06F0": "0",
  // Eastern-Arabic digit 0
  "\u06F1": "1",
  // Eastern-Arabic digit 1
  "\u06F2": "2",
  // Eastern-Arabic digit 2
  "\u06F3": "3",
  // Eastern-Arabic digit 3
  "\u06F4": "4",
  // Eastern-Arabic digit 4
  "\u06F5": "5",
  // Eastern-Arabic digit 5
  "\u06F6": "6",
  // Eastern-Arabic digit 6
  "\u06F7": "7",
  // Eastern-Arabic digit 7
  "\u06F8": "8",
  // Eastern-Arabic digit 8
  "\u06F9": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}
function parseDigits(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose4(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    var digit = parseDigit(character);
    if (digit) {
      result2 += digit;
    }
  }
  return result2;
}

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose5(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray5(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray5(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray5(r4, a6) : void 0;
  }
}
function _arrayLikeToArray5(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose5(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
function parsePhoneNumberCharacter(character, prevParsedCharacters, eventListener) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof eventListener === "function") {
        eventListener("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber2 = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber2(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse(text, options, metadataJson) {
  options = options || {};
  var metadata = new Metadata(metadataJson);
  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(
    formattedPhoneNumber,
    options.defaultCountry,
    options.defaultCallingCode,
    // If `country` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if `countryCallingCode` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if neither `country` nor `countryCallingCode` are returned, no numbering plan will be selected in `metadata`.
    metadata
  ), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
    if (country) {
      phoneNumber.country = country;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  }
  return {
    country,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext
  };
}
function _extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }
  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text;
  }
  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parseInput(text, v22, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text, {
    extractFormattedPhoneNumber: function extractFormattedPhoneNumber2(text2) {
      return _extractFormattedPhoneNumber(text2, extract, v22);
    }
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
function result(country, nationalNumber, ext) {
  var result2 = {
    country,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  var _extractCountryCallin = extractCountryCallingCode(
    parseIncompletePhoneNumber(formattedPhoneNumber),
    void 0,
    // `defaultCountry` and `defaultCallingCode` are only used to detect
    // if it's an "international" phone number or not. They won't be used
    // to derive the resulting `countryCallingCode` from them, or anything like that.
    defaultCountry,
    defaultCallingCode,
    metadata.metadata
  ), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country;
  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    if (defaultCountry) {
      country = defaultCountry;
      metadata.selectNumberingPlan(defaultCountry);
      countryCallingCode = metadata.numberingPlan.callingCode();
    } else {
      metadata.selectNumberingPlan(defaultCallingCode);
      countryCallingCode = defaultCallingCode;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata.isNonGeographicCallingCode(countryCallingCode)) {
          country = "001";
        }
      }
    }
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), void 0, metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    metadata
  });
  if (exactCountry) {
    country = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata.selectNumberingPlan(country);
    }
  }
  return {
    country,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function _typeof4(o6) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof4(o6);
}
function ownKeys2(e7, r4) {
  var t5 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e7);
    r4 && (o6 = o6.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e7, r5).enumerable;
    })), t5.push.apply(t5, o6);
  }
  return t5;
}
function _objectSpread2(e7) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t5 = null != arguments[r4] ? arguments[r4] : {};
    r4 % 2 ? ownKeys2(Object(t5), true).forEach(function(r5) {
      _defineProperty2(e7, r5, t5[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(t5)) : ownKeys2(Object(t5)).forEach(function(r5) {
      Object.defineProperty(e7, r5, Object.getOwnPropertyDescriptor(t5, r5));
    });
  }
  return e7;
}
function _defineProperty2(e7, r4, t5) {
  return (r4 = _toPropertyKey4(r4)) in e7 ? Object.defineProperty(e7, r4, { value: t5, enumerable: true, configurable: true, writable: true }) : e7[r4] = t5, e7;
}
function _toPropertyKey4(t5) {
  var i5 = _toPrimitive4(t5, "string");
  return "symbol" == _typeof4(i5) ? i5 : i5 + "";
}
function _toPrimitive4(t5, r4) {
  if ("object" != _typeof4(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof4(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
function parsePhoneNumberWithError(text, options, metadata) {
  return parse(text, _objectSpread2(_objectSpread2({}, options), {}, {
    v2: true
  }), metadata);
}

// node_modules/libphonenumber-js/es6/normalizeArguments.js
function _typeof5(o6) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof5(o6);
}
function ownKeys3(e7, r4) {
  var t5 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e7);
    r4 && (o6 = o6.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e7, r5).enumerable;
    })), t5.push.apply(t5, o6);
  }
  return t5;
}
function _objectSpread3(e7) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t5 = null != arguments[r4] ? arguments[r4] : {};
    r4 % 2 ? ownKeys3(Object(t5), true).forEach(function(r5) {
      _defineProperty3(e7, r5, t5[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(t5)) : ownKeys3(Object(t5)).forEach(function(r5) {
      Object.defineProperty(e7, r5, Object.getOwnPropertyDescriptor(t5, r5));
    });
  }
  return e7;
}
function _defineProperty3(e7, r4, t5) {
  return (r4 = _toPropertyKey5(r4)) in e7 ? Object.defineProperty(e7, r4, { value: t5, enumerable: true, configurable: true, writable: true }) : e7[r4] = t5, e7;
}
function _toPropertyKey5(t5) {
  var i5 = _toPrimitive5(t5, "string");
  return "symbol" == _typeof5(i5) ? i5 : i5 + "";
}
function _toPrimitive5(t5, r4) {
  if ("object" != _typeof5(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof5(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
function _slicedToArray(r4, e7) {
  return _arrayWithHoles(r4) || _iterableToArrayLimit(r4, e7) || _unsupportedIterableToArray6(r4, e7) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray6(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray6(r4, a6) : void 0;
  }
}
function _arrayLikeToArray6(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function _iterableToArrayLimit(r4, l6) {
  var t5 = null == r4 ? null : "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (null != t5) {
    var e7, n5, i5, u6, a6 = [], f5 = true, o6 = false;
    try {
      if (i5 = (t5 = t5.call(r4)).next, 0 === l6) {
        if (Object(t5) !== t5) return;
        f5 = false;
      } else for (; !(f5 = (e7 = i5.call(t5)).done) && (a6.push(e7.value), a6.length !== l6); f5 = true) ;
    } catch (r5) {
      o6 = true, n5 = r5;
    } finally {
      try {
        if (!f5 && null != t5["return"] && (u6 = t5["return"](), Object(u6) !== u6)) return;
      } finally {
        if (o6) throw n5;
      }
    }
    return a6;
  }
}
function _arrayWithHoles(r4) {
  if (Array.isArray(r4)) return r4;
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text;
  var options;
  var metadata;
  if (typeof arg_1 === "string") {
    text = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = void 0;
      metadata = arg_3;
    }
    if (arg_2) {
      options = _objectSpread3({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject2(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text,
    options,
    metadata
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function _typeof6(o6) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof6(o6);
}
function ownKeys4(e7, r4) {
  var t5 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e7);
    r4 && (o6 = o6.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e7, r5).enumerable;
    })), t5.push.apply(t5, o6);
  }
  return t5;
}
function _objectSpread4(e7) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t5 = null != arguments[r4] ? arguments[r4] : {};
    r4 % 2 ? ownKeys4(Object(t5), true).forEach(function(r5) {
      _defineProperty4(e7, r5, t5[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(t5)) : ownKeys4(Object(t5)).forEach(function(r5) {
      Object.defineProperty(e7, r5, Object.getOwnPropertyDescriptor(t5, r5));
    });
  }
  return e7;
}
function _defineProperty4(e7, r4, t5) {
  return (r4 = _toPropertyKey6(r4)) in e7 ? Object.defineProperty(e7, r4, { value: t5, enumerable: true, configurable: true, writable: true }) : e7[r4] = t5, e7;
}
function _toPropertyKey6(t5) {
  var i5 = _toPrimitive6(t5, "string");
  return "symbol" == _typeof6(i5) ? i5 : i5 + "";
}
function _toPrimitive6(t5, r4) {
  if ("object" != _typeof6(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof6(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
function parsePhoneNumber2(text, options, metadata) {
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
    options = _objectSpread4(_objectSpread4({}, options), {}, {
      defaultCountry: void 0
    });
  }
  try {
    return parsePhoneNumberWithError(text, options, metadata);
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber.js
function parsePhoneNumber3() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  return parsePhoneNumber2(text, options, metadata);
}

// node_modules/libphonenumber-js/es6/isPossiblePhoneNumber.js
function _typeof7(o6) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof7(o6);
}
function ownKeys5(e7, r4) {
  var t5 = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e7);
    r4 && (o6 = o6.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e7, r5).enumerable;
    })), t5.push.apply(t5, o6);
  }
  return t5;
}
function _objectSpread5(e7) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t5 = null != arguments[r4] ? arguments[r4] : {};
    r4 % 2 ? ownKeys5(Object(t5), true).forEach(function(r5) {
      _defineProperty5(e7, r5, t5[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(t5)) : ownKeys5(Object(t5)).forEach(function(r5) {
      Object.defineProperty(e7, r5, Object.getOwnPropertyDescriptor(t5, r5));
    });
  }
  return e7;
}
function _defineProperty5(e7, r4, t5) {
  return (r4 = _toPropertyKey7(r4)) in e7 ? Object.defineProperty(e7, r4, { value: t5, enumerable: true, configurable: true, writable: true }) : e7[r4] = t5, e7;
}
function _toPropertyKey7(t5) {
  var i5 = _toPrimitive7(t5, "string");
  return "symbol" == _typeof7(i5) ? i5 : i5 + "";
}
function _toPrimitive7(t5, r4) {
  if ("object" != _typeof7(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof7(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
function isPossiblePhoneNumber2() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  options = _objectSpread5(_objectSpread5({}, options), {}, {
    extract: false
  });
  var phoneNumber = parsePhoneNumber2(text, options, metadata);
  return phoneNumber && phoneNumber.isPossible() || false;
}

// node_modules/libphonenumber-js/es6/AsYouTypeState.js
function _typeof8(o6) {
  "@babel/helpers - typeof";
  return _typeof8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof8(o6);
}
function _classCallCheck4(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties4(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey8(o6.key), o6);
  }
}
function _createClass4(e7, r4, t5) {
  return r4 && _defineProperties4(e7.prototype, r4), t5 && _defineProperties4(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey8(t5) {
  var i5 = _toPrimitive8(t5, "string");
  return "symbol" == _typeof8(i5) ? i5 : i5 + "";
}
function _toPrimitive8(t5, r4) {
  if ("object" != _typeof8(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof8(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var AsYouTypeState = /* @__PURE__ */ (function() {
  function AsYouTypeState2(_ref) {
    var onCountryChange = _ref.onCountryChange, onCallingCodeChange = _ref.onCallingCodeChange;
    _classCallCheck4(this, AsYouTypeState2);
    this.onCountryChange = onCountryChange;
    this.onCallingCodeChange = onCallingCodeChange;
  }
  return _createClass4(AsYouTypeState2, [{
    key: "reset",
    value: function reset(_ref2) {
      var country = _ref2.country, callingCode = _ref2.callingCode;
      this.international = false;
      this.missingPlus = false;
      this.IDDPrefix = void 0;
      this.callingCode = void 0;
      this.digits = "";
      this.resetNationalSignificantNumber();
      this.initCountryAndCallingCode(country, callingCode);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function resetNationalSignificantNumber() {
      this.nationalSignificantNumber = this.getNationalDigits();
      this.nationalSignificantNumberIsModified = false;
      this.nationalPrefix = void 0;
      this.carrierCode = void 0;
      this.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = void 0;
    }
  }, {
    key: "update",
    value: function update(properties) {
      for (var _i2 = 0, _Object$keys = Object.keys(properties); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        this[key] = properties[key];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function initCountryAndCallingCode(country, callingCode) {
      this.setCountry(country);
      this.setCallingCode(callingCode);
    }
  }, {
    key: "setCountry",
    value: function setCountry(country) {
      this.country = country;
      this.onCountryChange(country);
    }
  }, {
    key: "setCallingCode",
    value: function setCallingCode(callingCode) {
      this.callingCode = callingCode;
      this.onCallingCodeChange(callingCode, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(country, callingCode) {
      this.international = true;
      this.initCountryAndCallingCode(country, callingCode);
    }
  }, {
    key: "appendDigits",
    value: function appendDigits(nextDigits) {
      this.digits += nextDigits;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function appendNationalSignificantNumberDigits(nextDigits) {
      this.nationalSignificantNumber += nextDigits;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function getNationalDigits() {
      if (this.international) {
        return this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0));
      }
      return this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function getDigitsWithoutInternationalPrefix() {
      if (this.international) {
        if (this.IDDPrefix) {
          return this.digits.slice(this.IDDPrefix.length);
        }
      }
      return this.digits;
    }
  }]);
})();

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.util.js
function _createForOfIteratorHelperLoose6(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray7(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray7(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray7(r4, a6) : void 0;
  }
}
function _arrayLikeToArray7(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
var DIGIT_PLACEHOLDER = "x";
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
function repeat(string, times) {
  if (times < 1) {
    return "";
  }
  var result2 = "";
  while (times > 1) {
    if (times & 1) {
      result2 += string;
    }
    times >>= 1;
    string += string;
  }
  return result2 + string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ")") {
    cutBeforeIndex++;
  }
  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i5 = 0;
  while (i5 < string.length) {
    if (string[i5] === "(") {
      dangling_braces.push(i5);
    } else if (string[i5] === ")") {
      dangling_braces.pop();
    }
    i5++;
  }
  var start = 0;
  var cleared_string = "";
  dangling_braces.push(string.length);
  for (var _i2 = 0, _dangling_braces = dangling_braces; _i2 < _dangling_braces.length; _i2++) {
    var index = _dangling_braces[_i2];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }
  return cleared_string;
}
function populateTemplateWithDigits(template, position, digits) {
  for (var _iterator2 = _createForOfIteratorHelperLoose6(digits.split("")), _step2; !(_step2 = _iterator2()).done; ) {
    var digit = _step2.value;
    if (template.slice(position + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
      return;
    }
    position = template.search(DIGIT_PLACEHOLDER_MATCHER);
    template = template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  }
  return [template, position];
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.complete.js
function formatCompleteNumber(state, format, _ref) {
  var metadata = _ref.metadata, shouldTryNationalPrefixFormattingRule = _ref.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref.getSeparatorAfterNationalPrefix;
  var matcher = new RegExp("^(?:".concat(format.pattern(), ")$"));
  if (matcher.test(state.nationalSignificantNumber)) {
    return formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, {
      metadata,
      shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix
    });
  }
}
function canFormatCompleteNumber(nationalSignificantNumber, metadata) {
  return checkNumberLength(nationalSignificantNumber, void 0, metadata) === "IS_POSSIBLE";
}
function formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, _ref2) {
  var metadata = _ref2.metadata, shouldTryNationalPrefixFormattingRule = _ref2.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref2.getSeparatorAfterNationalPrefix;
  var nationalSignificantNumber = state.nationalSignificantNumber, international = state.international, nationalPrefix = state.nationalPrefix, carrierCode = state.carrierCode;
  if (shouldTryNationalPrefixFormattingRule(format)) {
    var formattedNumber = formatNationalNumber2(state, format, {
      useNationalPrefixFormattingRule: true,
      getSeparatorAfterNationalPrefix,
      metadata
    });
    if (formattedNumber) {
      return formattedNumber;
    }
  }
  return formatNationalNumber2(state, format, {
    useNationalPrefixFormattingRule: false,
    getSeparatorAfterNationalPrefix,
    metadata
  });
}
function formatNationalNumber2(state, format, _ref3) {
  var metadata = _ref3.metadata, useNationalPrefixFormattingRule = _ref3.useNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref3.getSeparatorAfterNationalPrefix;
  var formattedNationalNumber = formatNationalNumberUsingFormat(state.nationalSignificantNumber, format, {
    carrierCode: state.carrierCode,
    useInternationalFormat: state.international,
    withNationalPrefix: useNationalPrefixFormattingRule,
    metadata
  });
  if (!useNationalPrefixFormattingRule) {
    if (state.nationalPrefix) {
      formattedNationalNumber = state.nationalPrefix + getSeparatorAfterNationalPrefix(format) + formattedNationalNumber;
    } else if (state.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix) {
      formattedNationalNumber = state.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix + " " + formattedNationalNumber;
    }
  }
  if (isValidFormattedNationalNumber(formattedNationalNumber, state)) {
    return formattedNationalNumber;
  }
}
function isValidFormattedNationalNumber(formattedNationalNumber, state) {
  return parseDigits(formattedNationalNumber) === state.getNationalDigits();
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternParser.js
function _typeof9(o6) {
  "@babel/helpers - typeof";
  return _typeof9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof9(o6);
}
function _classCallCheck5(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties5(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey9(o6.key), o6);
  }
}
function _createClass5(e7, r4, t5) {
  return r4 && _defineProperties5(e7.prototype, r4), t5 && _defineProperties5(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey9(t5) {
  var i5 = _toPrimitive9(t5, "string");
  return "symbol" == _typeof9(i5) ? i5 : i5 + "";
}
function _toPrimitive9(t5, r4) {
  if ("object" != _typeof9(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof9(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var PatternParser = /* @__PURE__ */ (function() {
  function PatternParser2() {
    _classCallCheck5(this, PatternParser2);
  }
  return _createClass5(PatternParser2, [{
    key: "parse",
    value: function parse2(pattern) {
      this.context = [{
        or: true,
        instructions: []
      }];
      this.parsePattern(pattern);
      if (this.context.length !== 1) {
        throw new Error("Non-finalized contexts left when pattern parse ended");
      }
      var _this$context$ = this.context[0], branches = _this$context$.branches, instructions = _this$context$.instructions;
      if (branches) {
        return {
          op: "|",
          args: branches.concat([expandSingleElementArray(instructions)])
        };
      }
      if (instructions.length === 0) {
        throw new Error("Pattern is required");
      }
      if (instructions.length === 1) {
        return instructions[0];
      }
      return instructions;
    }
  }, {
    key: "startContext",
    value: function startContext(context) {
      this.context.push(context);
    }
  }, {
    key: "endContext",
    value: function endContext() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function parsePattern(pattern) {
      if (!pattern) {
        throw new Error("Pattern is required");
      }
      var match = pattern.match(OPERATOR);
      if (!match) {
        if (ILLEGAL_CHARACTER_REGEXP.test(pattern)) {
          throw new Error("Illegal characters found in a pattern: ".concat(pattern));
        }
        this.getContext().instructions = this.getContext().instructions.concat(pattern.split(""));
        return;
      }
      var operator = match[1];
      var before = pattern.slice(0, match.index);
      var rightPart = pattern.slice(match.index + operator.length);
      switch (operator) {
        case "(?:":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            or: true,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or) {
            throw new Error('")" operator must be preceded by "(?:" operator');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (this.getContext().instructions.length === 0) {
            throw new Error('No instructions found after "|" operator in an "or" group');
          }
          var _this$getContext = this.getContext(), branches = _this$getContext.branches;
          branches.push(expandSingleElementArray(this.getContext().instructions));
          this.endContext();
          this.getContext().instructions.push({
            op: "|",
            args: branches
          });
          break;
        case "|":
          if (!this.getContext().or) {
            throw new Error('"|" operator can only be used inside "or" groups');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (!this.getContext().branches) {
            if (this.context.length === 1) {
              this.getContext().branches = [];
            } else {
              throw new Error('"branches" not found in an "or" group context');
            }
          }
          this.getContext().branches.push(expandSingleElementArray(this.getContext().instructions));
          this.getContext().instructions = [];
          break;
        case "[":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            oneOfSet: true
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet) {
            throw new Error('"]" operator must be preceded by "[" operator');
          }
          this.endContext();
          this.getContext().instructions.push({
            op: "[]",
            args: parseOneOfSet(before)
          });
          break;
        /* istanbul ignore next */
        default:
          throw new Error("Unknown operator: ".concat(operator));
      }
      if (rightPart) {
        this.parsePattern(rightPart);
      }
    }
  }]);
})();
function parseOneOfSet(pattern) {
  var values = [];
  var i5 = 0;
  while (i5 < pattern.length) {
    if (pattern[i5] === "-") {
      if (i5 === 0 || i5 === pattern.length - 1) {
        throw new Error("Couldn't parse a one-of set pattern: ".concat(pattern));
      }
      var prevValue = pattern[i5 - 1].charCodeAt(0) + 1;
      var nextValue = pattern[i5 + 1].charCodeAt(0) - 1;
      var value = prevValue;
      while (value <= nextValue) {
        values.push(String.fromCharCode(value));
        value++;
      }
    } else {
      values.push(pattern[i5]);
    }
    i5++;
  }
  return values;
}
var ILLEGAL_CHARACTER_REGEXP = /[\(\)\[\]\?\:\|]/;
var OPERATOR = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function expandSingleElementArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array;
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.js
function _createForOfIteratorHelperLoose7(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray8(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray8(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray8(r4, a6) : void 0;
  }
}
function _arrayLikeToArray8(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function _typeof10(o6) {
  "@babel/helpers - typeof";
  return _typeof10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof10(o6);
}
function _classCallCheck6(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties6(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey10(o6.key), o6);
  }
}
function _createClass6(e7, r4, t5) {
  return r4 && _defineProperties6(e7.prototype, r4), t5 && _defineProperties6(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey10(t5) {
  var i5 = _toPrimitive10(t5, "string");
  return "symbol" == _typeof10(i5) ? i5 : i5 + "";
}
function _toPrimitive10(t5, r4) {
  if ("object" != _typeof10(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof10(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var PatternMatcher = /* @__PURE__ */ (function() {
  function PatternMatcher2(pattern) {
    _classCallCheck6(this, PatternMatcher2);
    this.matchTree = new PatternParser().parse(pattern);
  }
  return _createClass6(PatternMatcher2, [{
    key: "match",
    value: function match(string) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, allowOverflow = _ref.allowOverflow;
      if (!string) {
        throw new Error("String is required");
      }
      var result2 = _match(string.split(""), this.matchTree, true);
      if (result2 && result2.match) {
        delete result2.matchedChars;
      }
      if (result2 && result2.overflow) {
        if (!allowOverflow) {
          return;
        }
      }
      return result2;
    }
  }]);
})();
function _match(characters, tree, last) {
  if (typeof tree === "string") {
    var characterString = characters.join("");
    if (tree.indexOf(characterString) === 0) {
      if (characters.length === tree.length) {
        return {
          match: true,
          matchedChars: characters
        };
      }
      return {
        partialMatch: true
        // matchedChars: characters
      };
    }
    if (characterString.indexOf(tree) === 0) {
      if (last) {
        if (characters.length > tree.length) {
          return {
            overflow: true
          };
        }
      }
      return {
        match: true,
        matchedChars: characters.slice(0, tree.length)
      };
    }
    return;
  }
  if (Array.isArray(tree)) {
    var restCharacters = characters.slice();
    var i5 = 0;
    while (i5 < tree.length) {
      var subtree = tree[i5];
      var result2 = _match(restCharacters, subtree, last && i5 === tree.length - 1);
      if (!result2) {
        return;
      } else if (result2.overflow) {
        return result2;
      } else if (result2.match) {
        restCharacters = restCharacters.slice(result2.matchedChars.length);
        if (restCharacters.length === 0) {
          if (i5 === tree.length - 1) {
            return {
              match: true,
              matchedChars: characters
            };
          } else {
            return {
              partialMatch: true
              // matchedChars: characters
            };
          }
        }
      } else {
        if (result2.partialMatch) {
          return {
            partialMatch: true
            // matchedChars: characters
          };
        } else {
          throw new Error("Unsupported match result:\n".concat(JSON.stringify(result2, null, 2)));
        }
      }
      i5++;
    }
    if (last) {
      return {
        overflow: true
      };
    }
    return {
      match: true,
      matchedChars: characters.slice(0, characters.length - restCharacters.length)
    };
  }
  switch (tree.op) {
    case "|":
      var partialMatch;
      for (var _iterator = _createForOfIteratorHelperLoose7(tree.args), _step; !(_step = _iterator()).done; ) {
        var branch = _step.value;
        var _result = _match(characters, branch, last);
        if (_result) {
          if (_result.overflow) {
            return _result;
          } else if (_result.match) {
            return {
              match: true,
              matchedChars: _result.matchedChars
            };
          } else {
            if (_result.partialMatch) {
              partialMatch = true;
            } else {
              throw new Error("Unsupported match result:\n".concat(JSON.stringify(_result, null, 2)));
            }
          }
        }
      }
      if (partialMatch) {
        return {
          partialMatch: true
          // matchedChars: ...
        };
      }
      return;
    case "[]":
      for (var _iterator2 = _createForOfIteratorHelperLoose7(tree.args), _step2; !(_step2 = _iterator2()).done; ) {
        var _char = _step2.value;
        if (characters[0] === _char) {
          if (characters.length === 1) {
            return {
              match: true,
              matchedChars: characters
            };
          }
          if (last) {
            return {
              overflow: true
            };
          }
          return {
            match: true,
            matchedChars: [_char]
          };
        }
      }
      return;
    /* istanbul ignore next */
    default:
      throw new Error("Unsupported instruction tree: ".concat(tree));
  }
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.js
function _typeof11(o6) {
  "@babel/helpers - typeof";
  return _typeof11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof11(o6);
}
function _createForOfIteratorHelperLoose8(r4, e7) {
  var t5 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (t5) return (t5 = t5.call(r4)).next.bind(t5);
  if (Array.isArray(r4) || (t5 = _unsupportedIterableToArray9(r4)) || e7 && r4 && "number" == typeof r4.length) {
    t5 && (r4 = t5);
    var o6 = 0;
    return function() {
      return o6 >= r4.length ? { done: true } : { done: false, value: r4[o6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray9(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray9(r4, a6) : void 0;
  }
}
function _arrayLikeToArray9(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function _classCallCheck7(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties7(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey11(o6.key), o6);
  }
}
function _createClass7(e7, r4, t5) {
  return r4 && _defineProperties7(e7.prototype, r4), t5 && _defineProperties7(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey11(t5) {
  var i5 = _toPrimitive11(t5, "string");
  return "symbol" == _typeof11(i5) ? i5 : i5 + "";
}
function _toPrimitive11(t5, r4) {
  if ("object" != _typeof11(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof11(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var DUMMY_DIGIT = "9";
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);
var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/;
var SUPPORT_LEGACY_FORMATTING_PATTERNS = true;
var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\[([^\[\]])*\]/g;
};
var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\d(?=[^,}][^,}])/g;
};
var NON_ALTERING_FORMAT_REG_EXP = new RegExp("[" + VALID_PUNCTUATION + "]*\\$1[" + VALID_PUNCTUATION + "]*(\\$\\d[" + VALID_PUNCTUATION + "]*)*$");
var MIN_LEADING_DIGITS_LENGTH = 3;
var AsYouTypeFormatter = /* @__PURE__ */ (function() {
  function AsYouTypeFormatter2(_ref) {
    var state = _ref.state, metadata = _ref.metadata;
    _classCallCheck7(this, AsYouTypeFormatter2);
    this.metadata = metadata;
    this.resetFormat();
  }
  return _createClass7(AsYouTypeFormatter2, [{
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = void 0;
      this.template = void 0;
      this.nationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan, state) {
      this.resetFormat();
      if (numberingPlan) {
        this.isNANP = numberingPlan.callingCode() === "1";
        this.matchingFormats = numberingPlan.formats();
        if (state.nationalSignificantNumber) {
          this.narrowDownMatchingFormats(state);
        }
      } else {
        this.isNANP = void 0;
        this.matchingFormats = [];
      }
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function format(nextDigits, state) {
      var _this = this;
      if (canFormatCompleteNumber(state.nationalSignificantNumber, this.metadata)) {
        for (var _iterator = _createForOfIteratorHelperLoose8(this.matchingFormats), _step; !(_step = _iterator()).done; ) {
          var _format = _step.value;
          var formattedCompleteNumber = formatCompleteNumber(state, _format, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function shouldTryNationalPrefixFormattingRule(format2) {
              return _this.shouldTryNationalPrefixFormattingRule(format2, {
                international: state.international,
                nationalPrefix: state.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function getSeparatorAfterNationalPrefix(format2) {
              return _this.getSeparatorAfterNationalPrefix(format2);
            }
          });
          if (formattedCompleteNumber) {
            this.resetFormat();
            this.chosenFormat = _format;
            this.setNationalNumberTemplate(formattedCompleteNumber.replace(/\d/g, DIGIT_PLACEHOLDER), state);
            this.populatedNationalNumberTemplate = formattedCompleteNumber;
            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(DIGIT_PLACEHOLDER);
            return formattedCompleteNumber;
          }
        }
      }
      return this.formatNationalNumberWithNextDigits(nextDigits, state);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits, state) {
      var previouslyChosenFormat = this.chosenFormat;
      var newlyChosenFormat = this.chooseFormat(state);
      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          return this.formatNextNationalNumberDigits(state.getNationalDigits());
        }
      }
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function narrowDownMatchingFormats(_ref2) {
      var _this2 = this;
      var nationalSignificantNumber = _ref2.nationalSignificantNumber, nationalPrefix = _ref2.nationalPrefix, international = _ref2.international;
      var leadingDigits = nationalSignificantNumber;
      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;
      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }
      this.matchingFormats = this.matchingFormats.filter(function(format) {
        return _this2.formatSuits(format, international, nationalPrefix) && _this2.formatMatches(format, leadingDigits, leadingDigitsPatternIndex);
      });
      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "formatSuits",
    value: function formatSuits(format, international, nationalPrefix) {
      if (nationalPrefix && !format.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !format.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
        return false;
      }
      if (!international && !nationalPrefix && format.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
        return false;
      }
      return true;
    }
  }, {
    key: "formatMatches",
    value: function formatMatches(format, leadingDigits, leadingDigitsPatternIndex) {
      var leadingDigitsPatternsCount = format.leadingDigitsPatterns().length;
      if (leadingDigitsPatternsCount === 0) {
        return true;
      }
      leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
      var leadingDigitsPattern = format.leadingDigitsPatterns()[leadingDigitsPatternIndex];
      if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
        try {
          return new PatternMatcher(leadingDigitsPattern).match(leadingDigits, {
            allowOverflow: true
          }) !== void 0;
        } catch (error) {
          console.error(error);
          return true;
        }
      }
      return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format, international) {
      return international ? format.internationalFormat() : format.format();
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat(state) {
      var _this3 = this;
      var _loop = function _loop2() {
        var format = _step2.value;
        if (_this3.chosenFormat === format) {
          return 0;
        }
        if (!NON_ALTERING_FORMAT_REG_EXP.test(_this3.getFormatFormat(format, state.international))) {
          return 1;
        }
        if (!_this3.createTemplateForFormat(format, state)) {
          _this3.matchingFormats = _this3.matchingFormats.filter(function(_5) {
            return _5 !== format;
          });
          return 1;
        }
        _this3.chosenFormat = format;
        return 0;
      }, _ret;
      for (var _iterator2 = _createForOfIteratorHelperLoose8(this.matchingFormats.slice()), _step2; !(_step2 = _iterator2()).done; ) {
        _ret = _loop();
        if (_ret === 0) break;
        if (_ret === 1) continue;
      }
      if (!this.chosenFormat) {
        this.resetFormat();
      }
      return this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function createTemplateForFormat(format, state) {
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format.pattern().indexOf("|") >= 0) {
        return;
      }
      var template = this.getTemplateForFormat(format, state);
      if (template) {
        this.setNationalNumberTemplate(template, state);
        return true;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function getSeparatorAfterNationalPrefix(format) {
      if (this.isNANP) {
        return " ";
      }
      if (format && format.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format.nationalPrefixFormattingRule())) {
        return " ";
      }
      return "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function getInternationalPrefixBeforeCountryCallingCode(_ref3, options) {
      var IDDPrefix = _ref3.IDDPrefix, missingPlus = _ref3.missingPlus;
      if (IDDPrefix) {
        return options && options.spacing === false ? IDDPrefix : IDDPrefix + " ";
      }
      if (missingPlus) {
        return "";
      }
      return "+";
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(state) {
      if (!this.template) {
        return;
      }
      var index = -1;
      var i5 = 0;
      var internationalPrefix = state.international ? this.getInternationalPrefixBeforeCountryCallingCode(state, {
        spacing: false
      }) : "";
      while (i5 < internationalPrefix.length + state.getDigitsWithoutInternationalPrefix().length) {
        index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
        i5++;
      }
      return cutAndStripNonPairedParens(this.template, index + 1);
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function setNationalNumberTemplate(template, state) {
      this.nationalNumberTemplate = template;
      this.populatedNationalNumberTemplate = template;
      this.populatedNationalNumberTemplatePosition = -1;
      if (state.international) {
        this.template = this.getInternationalPrefixBeforeCountryCallingCode(state).replace(/[\d\+]/g, DIGIT_PLACEHOLDER) + repeat(DIGIT_PLACEHOLDER, state.callingCode.length) + " " + template;
      } else {
        this.template = template;
      }
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function getTemplateForFormat(format, _ref4) {
      var nationalSignificantNumber = _ref4.nationalSignificantNumber, international = _ref4.international, nationalPrefix = _ref4.nationalPrefix, prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = _ref4.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix;
      var pattern = format.pattern();
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern.replace(CREATE_CHARACTER_CLASS_PATTERN(), "\\d").replace(CREATE_STANDALONE_DIGIT_PATTERN(), "\\d");
      }
      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0];
      if (nationalSignificantNumber.length > digits.length) {
        return;
      }
      var strictPattern = new RegExp("^" + pattern + "$");
      var nationalNumberDummyDigits = nationalSignificantNumber.replace(/\d/g, DUMMY_DIGIT);
      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }
      var numberFormat = this.getFormatFormat(format, international);
      var nationalPrefixIncludedInTemplate;
      if (this.shouldTryNationalPrefixFormattingRule(format, {
        international,
        nationalPrefix
      })) {
        var numberFormatWithNationalPrefix = numberFormat.replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule());
        if (parseDigits(format.nationalPrefixFormattingRule()) === (nationalPrefix || "") + parseDigits("$1")) {
          numberFormat = numberFormatWithNationalPrefix;
          nationalPrefixIncludedInTemplate = true;
          if (nationalPrefix) {
            var i5 = nationalPrefix.length;
            while (i5 > 0) {
              numberFormat = numberFormat.replace(/\d/, DIGIT_PLACEHOLDER);
              i5--;
            }
          }
        }
      }
      var template = digits.replace(new RegExp(pattern), numberFormat).replace(new RegExp(DUMMY_DIGIT, "g"), DIGIT_PLACEHOLDER);
      if (!nationalPrefixIncludedInTemplate) {
        if (prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix) {
          template = repeat(DIGIT_PLACEHOLDER, prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix.length) + " " + template;
        } else if (nationalPrefix) {
          template = repeat(DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format) + template;
        }
      }
      if (international) {
        template = applyInternationalSeparatorStyle(template);
      }
      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      var result2 = populateTemplateWithDigits(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, digits);
      if (!result2) {
        this.resetFormat();
        return;
      }
      this.populatedNationalNumberTemplate = result2[0];
      this.populatedNationalNumberTemplatePosition = result2[1];
      return cutAndStripNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function shouldTryNationalPrefixFormattingRule(format, _ref5) {
      var international = _ref5.international, nationalPrefix = _ref5.nationalPrefix;
      if (format.nationalPrefixFormattingRule()) {
        var usesNationalPrefix = format.usesNationalPrefix();
        if (usesNationalPrefix && nationalPrefix || !usesNationalPrefix && !international) {
          return true;
        }
      }
    }
  }]);
})();

// node_modules/libphonenumber-js/es6/AsYouTypeParser.js
function _typeof12(o6) {
  "@babel/helpers - typeof";
  return _typeof12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof12(o6);
}
function _slicedToArray2(r4, e7) {
  return _arrayWithHoles2(r4) || _iterableToArrayLimit2(r4, e7) || _unsupportedIterableToArray10(r4, e7) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray10(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray10(r4, a6) : void 0;
  }
}
function _arrayLikeToArray10(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function _iterableToArrayLimit2(r4, l6) {
  var t5 = null == r4 ? null : "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (null != t5) {
    var e7, n5, i5, u6, a6 = [], f5 = true, o6 = false;
    try {
      if (i5 = (t5 = t5.call(r4)).next, 0 === l6) {
        if (Object(t5) !== t5) return;
        f5 = false;
      } else for (; !(f5 = (e7 = i5.call(t5)).done) && (a6.push(e7.value), a6.length !== l6); f5 = true) ;
    } catch (r5) {
      o6 = true, n5 = r5;
    } finally {
      try {
        if (!f5 && null != t5["return"] && (u6 = t5["return"](), Object(u6) !== u6)) return;
      } finally {
        if (o6) throw n5;
      }
    }
    return a6;
  }
}
function _arrayWithHoles2(r4) {
  if (Array.isArray(r4)) return r4;
}
function _classCallCheck8(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey12(o6.key), o6);
  }
}
function _createClass8(e7, r4, t5) {
  return r4 && _defineProperties8(e7.prototype, r4), t5 && _defineProperties8(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey12(t5) {
  var i5 = _toPrimitive12(t5, "string");
  return "symbol" == _typeof12(i5) ? i5 : i5 + "";
}
function _toPrimitive12(t5, r4) {
  if ("object" != _typeof12(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof12(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART = "[" + VALID_PUNCTUATION + VALID_DIGITS + "]+";
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN = new RegExp("^" + VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART + "$", "i");
var VALID_FORMATTED_PHONE_NUMBER_PART = "(?:[" + PLUS_CHARS + "][" + VALID_PUNCTUATION + VALID_DIGITS + "]*|[" + VALID_PUNCTUATION + VALID_DIGITS + "]+)";
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp("[^" + VALID_PUNCTUATION + VALID_DIGITS + "]+.*$");
var COMPLEX_NATIONAL_PREFIX = /[^\d\[\]]/;
var AsYouTypeParser = /* @__PURE__ */ (function() {
  function AsYouTypeParser2(_ref) {
    var defaultCountry = _ref.defaultCountry, defaultCallingCode = _ref.defaultCallingCode, metadata = _ref.metadata, onNationalSignificantNumberChange = _ref.onNationalSignificantNumberChange;
    _classCallCheck8(this, AsYouTypeParser2);
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.metadata = metadata;
    this.onNationalSignificantNumberChange = onNationalSignificantNumberChange;
  }
  return _createClass8(AsYouTypeParser2, [{
    key: "input",
    value: function input(text, state) {
      var _extractFormattedDigi = extractFormattedDigitsAndPlus(text), _extractFormattedDigi2 = _slicedToArray2(_extractFormattedDigi, 2), formattedDigits = _extractFormattedDigi2[0], hasPlus = _extractFormattedDigi2[1];
      var digits = parseDigits(formattedDigits);
      var justLeadingPlus;
      if (hasPlus) {
        if (!state.digits) {
          state.startInternationalNumber(void 0, void 0);
          if (!digits) {
            justLeadingPlus = true;
          }
        }
      }
      if (digits) {
        this.inputDigits(digits, state);
      }
      return {
        digits,
        justLeadingPlus
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits, state) {
      var digits = state.digits;
      var hasReceivedThreeLeadingDigits = digits.length < 3 && digits.length + nextDigits.length >= 3;
      state.appendDigits(nextDigits);
      if (hasReceivedThreeLeadingDigits) {
        this.extractIddPrefix(state);
      }
      if (this.isWaitingForCountryCallingCode(state)) {
        if (!this.extractCountryCallingCode(state)) {
          return;
        }
      } else {
        state.appendNationalSignificantNumberDigits(nextDigits);
      }
      if (!state.international) {
        if (!this.hasExtractedNationalSignificantNumber) {
          this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
            return state.update(stateUpdate);
          });
        }
      }
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function isWaitingForCountryCallingCode(_ref2) {
      var international = _ref2.international, callingCode = _ref2.callingCode;
      return international && !callingCode;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode2(state) {
      var _extractCountryCallin = extractCountryCallingCode("+" + state.getDigitsWithoutInternationalPrefix(), state.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      if (countryCallingCode) {
        state.setCallingCode(countryCallingCode);
        state.update({
          nationalSignificantNumber: number
        });
        return true;
      }
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan) {
      if (numberingPlan) {
        this.hasSelectedNumberingPlan = true;
        var nationalPrefixForParsing = numberingPlan._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = nationalPrefixForParsing && COMPLEX_NATIONAL_PREFIX.test(nationalPrefixForParsing);
      } else {
        this.hasSelectedNumberingPlan = void 0;
        this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
      }
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function extractNationalSignificantNumber(nationalDigits, setState) {
      if (!this.hasSelectedNumberingPlan) {
        return;
      }
      var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe.nationalPrefix, nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
      if (nationalNumber === nationalDigits) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function extractAnotherNationalSignificantNumber(nationalDigits, prevNationalSignificantNumber, setState) {
      if (!this.hasExtractedNationalSignificantNumber) {
        return this.extractNationalSignificantNumber(nationalDigits, setState);
      }
      if (!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        return;
      }
      var _extractNationalNumbe2 = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe2.nationalPrefix, nationalNumber = _extractNationalNumbe2.nationalNumber, carrierCode = _extractNationalNumbe2.carrierCode;
      if (nationalNumber === prevNationalSignificantNumber) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function onExtractedNationalNumber(nationalPrefix, carrierCode, nationalSignificantNumber, nationalDigits, setState) {
      var nationalSignificantNumberIsModified = false;
      var prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix;
      var nationalSignificantNumberIndex = nationalDigits.lastIndexOf(nationalSignificantNumber);
      if (nationalSignificantNumberIndex < 0 || nationalSignificantNumberIndex !== nationalDigits.length - nationalSignificantNumber.length) {
        nationalSignificantNumberIsModified = true;
      } else {
        var prefixBeforeNationalNumber = nationalDigits.slice(0, nationalSignificantNumberIndex);
        if (prefixBeforeNationalNumber) {
          if (prefixBeforeNationalNumber !== nationalPrefix) {
            prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = prefixBeforeNationalNumber;
          }
        }
      }
      setState({
        nationalPrefix,
        carrierCode,
        nationalSignificantNumber,
        nationalSignificantNumberIsModified,
        prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix
      });
      this.hasExtractedNationalSignificantNumber = true;
      this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function reExtractNationalSignificantNumber(state) {
      if (this.extractAnotherNationalSignificantNumber(state.getNationalDigits(), state.nationalSignificantNumber, function(stateUpdate) {
        return state.update(stateUpdate);
      })) {
        return true;
      }
      if (this.extractIddPrefix(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
      if (this.fixMissingPlus(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
    }
  }, {
    key: "extractIddPrefix",
    value: function extractIddPrefix(state) {
      var international = state.international, IDDPrefix = state.IDDPrefix, digits = state.digits, nationalSignificantNumber = state.nationalSignificantNumber;
      if (international || IDDPrefix) {
        return;
      }
      var numberWithoutIDD = stripIddPrefix(digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
      if (numberWithoutIDD !== void 0 && numberWithoutIDD !== digits) {
        state.update({
          IDDPrefix: digits.slice(0, digits.length - numberWithoutIDD.length)
        });
        this.startInternationalNumber(state, {
          country: void 0,
          callingCode: void 0
        });
        return true;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function fixMissingPlus(state) {
      if (!state.international) {
        var _extractCountryCallin2 = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(state.digits, state.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), newCallingCode = _extractCountryCallin2.countryCallingCode;
        if (newCallingCode) {
          state.update({
            missingPlus: true
          });
          this.startInternationalNumber(state, {
            country: state.country,
            callingCode: newCallingCode
          });
          return true;
        }
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(state, _ref3) {
      var country = _ref3.country, callingCode = _ref3.callingCode;
      state.startInternationalNumber(country, callingCode);
      if (state.nationalSignificantNumber) {
        state.resetNationalSignificantNumber();
        this.onNationalSignificantNumberChange();
        this.hasExtractedNationalSignificantNumber = void 0;
      }
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function extractCallingCodeAndNationalSignificantNumber(state) {
      if (this.extractCountryCallingCode(state)) {
        this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
          return state.update(stateUpdate);
        });
      }
    }
  }]);
})();
function extractFormattedPhoneNumber(text) {
  var startsAt = text.search(VALID_FORMATTED_PHONE_NUMBER_PART);
  if (startsAt < 0) {
    return;
  }
  text = text.slice(startsAt);
  var hasPlus;
  if (text[0] === "+") {
    hasPlus = true;
    text = text.slice("+".length);
  }
  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, "");
  if (hasPlus) {
    text = "+" + text;
  }
  return text;
}
function _extractFormattedDigitsAndPlus(text) {
  var extractedNumber = extractFormattedPhoneNumber(text) || "";
  if (extractedNumber[0] === "+") {
    return [extractedNumber.slice("+".length), true];
  }
  return [extractedNumber];
}
function extractFormattedDigitsAndPlus(text) {
  var _extractFormattedDigi3 = _extractFormattedDigitsAndPlus(text), _extractFormattedDigi4 = _slicedToArray2(_extractFormattedDigi3, 2), formattedDigits = _extractFormattedDigi4[0], hasPlus = _extractFormattedDigi4[1];
  if (!VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN.test(formattedDigits)) {
    formattedDigits = "";
  }
  return [formattedDigits, hasPlus];
}

// node_modules/libphonenumber-js/es6/AsYouType.js
function _typeof13(o6) {
  "@babel/helpers - typeof";
  return _typeof13 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof13(o6);
}
function _slicedToArray3(r4, e7) {
  return _arrayWithHoles3(r4) || _iterableToArrayLimit3(r4, e7) || _unsupportedIterableToArray11(r4, e7) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(r4, a6) {
  if (r4) {
    if ("string" == typeof r4) return _arrayLikeToArray11(r4, a6);
    var t5 = {}.toString.call(r4).slice(8, -1);
    return "Object" === t5 && r4.constructor && (t5 = r4.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r4) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray11(r4, a6) : void 0;
  }
}
function _arrayLikeToArray11(r4, a6) {
  (null == a6 || a6 > r4.length) && (a6 = r4.length);
  for (var e7 = 0, n5 = Array(a6); e7 < a6; e7++) n5[e7] = r4[e7];
  return n5;
}
function _iterableToArrayLimit3(r4, l6) {
  var t5 = null == r4 ? null : "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
  if (null != t5) {
    var e7, n5, i5, u6, a6 = [], f5 = true, o6 = false;
    try {
      if (i5 = (t5 = t5.call(r4)).next, 0 === l6) {
        if (Object(t5) !== t5) return;
        f5 = false;
      } else for (; !(f5 = (e7 = i5.call(t5)).done) && (a6.push(e7.value), a6.length !== l6); f5 = true) ;
    } catch (r5) {
      o6 = true, n5 = r5;
    } finally {
      try {
        if (!f5 && null != t5["return"] && (u6 = t5["return"](), Object(u6) !== u6)) return;
      } finally {
        if (o6) throw n5;
      }
    }
    return a6;
  }
}
function _arrayWithHoles3(r4) {
  if (Array.isArray(r4)) return r4;
}
function _classCallCheck9(a6, n5) {
  if (!(a6 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(e7, r4) {
  for (var t5 = 0; t5 < r4.length; t5++) {
    var o6 = r4[t5];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e7, _toPropertyKey13(o6.key), o6);
  }
}
function _createClass9(e7, r4, t5) {
  return r4 && _defineProperties9(e7.prototype, r4), t5 && _defineProperties9(e7, t5), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function _toPropertyKey13(t5) {
  var i5 = _toPrimitive13(t5, "string");
  return "symbol" == _typeof13(i5) ? i5 : i5 + "";
}
function _toPrimitive13(t5, r4) {
  if ("object" != _typeof13(t5) || !t5) return t5;
  var e7 = t5[Symbol.toPrimitive];
  if (void 0 !== e7) {
    var i5 = e7.call(t5, r4 || "default");
    if ("object" != _typeof13(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r4 ? String : Number)(t5);
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE4 = false;
var AsYouType = /* @__PURE__ */ (function() {
  function AsYouType3(optionsOrDefaultCountry, metadata) {
    _classCallCheck9(this, AsYouType3);
    this.metadata = new Metadata(metadata);
    var _this$getCountryAndCa = this.getCountryAndCallingCode(optionsOrDefaultCountry), _this$getCountryAndCa2 = _slicedToArray3(_this$getCountryAndCa, 2), defaultCountry = _this$getCountryAndCa2[0], defaultCallingCode = _this$getCountryAndCa2[1];
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.reset();
  }
  return _createClass9(AsYouType3, [{
    key: "getCountryAndCallingCode",
    value: function getCountryAndCallingCode(optionsOrDefaultCountry) {
      var defaultCountry;
      var defaultCallingCode;
      if (optionsOrDefaultCountry) {
        if (isObject2(optionsOrDefaultCountry)) {
          defaultCountry = optionsOrDefaultCountry.defaultCountry;
          defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
        } else {
          defaultCountry = optionsOrDefaultCountry;
        }
      }
      if (defaultCountry && !this.metadata.hasCountry(defaultCountry)) {
        defaultCountry = void 0;
      }
      if (defaultCallingCode) {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE4) {
          if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            defaultCountry = "001";
          }
        }
      }
      return [defaultCountry, defaultCallingCode];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function input(text) {
      var _this$parser$input = this.parser.input(text, this.state), digits = _this$parser$input.digits, justLeadingPlus = _this$parser$input.justLeadingPlus;
      if (justLeadingPlus) {
        this.formattedOutput = "+";
      } else if (digits) {
        this.determineTheCountryIfNeeded();
        if (this.state.nationalSignificantNumber) {
          this.formatter.narrowDownMatchingFormats(this.state);
        }
        var formattedNationalNumber;
        if (this.metadata.hasSelectedNumberingPlan()) {
          formattedNationalNumber = this.formatter.format(digits, this.state);
        }
        if (formattedNationalNumber === void 0) {
          if (this.parser.reExtractNationalSignificantNumber(this.state)) {
            this.determineTheCountryIfNeeded();
            var nationalDigits = this.state.getNationalDigits();
            if (nationalDigits) {
              formattedNationalNumber = this.formatter.format(nationalDigits, this.state);
            }
          }
        }
        this.formattedOutput = formattedNationalNumber ? this.getFullNumber(formattedNationalNumber) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;
      this.state = new AsYouTypeState({
        onCountryChange: function onCountryChange(country) {
          _this.country = country;
        },
        onCallingCodeChange: function onCallingCodeChange(callingCode, country) {
          _this.metadata.selectNumberingPlan(country || callingCode);
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
          _this.parser.reset(_this.metadata.numberingPlan);
        }
      });
      this.formatter = new AsYouTypeFormatter({
        state: this.state,
        metadata: this.metadata
      });
      this.parser = new AsYouTypeParser({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function onNationalSignificantNumberChange() {
          _this.determineTheCountryIfNeeded();
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
        }
      });
      this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      });
      this.formattedOutput = "";
      return this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function getCallingCode() {
      if (this.isInternational()) {
        return this.state.callingCode;
      }
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode3() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function getCountry() {
      var digits = this.state.digits;
      if (digits) {
        return this._getCountry();
      }
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function _getCountry() {
      var country = this.state.country;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE4) {
        if (country === "001") {
          return;
        }
      }
      return country;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function determineTheCountryIfNeeded() {
      if (!this.state.country || this.isCountryCallingCodeAmbiguous()) {
        this.determineTheCountry();
      }
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      var _this2 = this;
      if (this.isInternational()) {
        var prefix = function prefix2(text) {
          return _this2.formatter.getInternationalPrefixBeforeCountryCallingCode(_this2.state, {
            spacing: text ? true : false
          }) + text;
        };
        var callingCode = this.state.callingCode;
        if (!callingCode) {
          return prefix("".concat(this.state.getDigitsWithoutInternationalPrefix()));
        }
        if (!formattedNationalNumber) {
          return prefix(callingCode);
        }
        return prefix("".concat(callingCode, " ").concat(formattedNationalNumber));
      }
      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function getNonFormattedNationalNumberWithPrefix() {
      var _this$state = this.state, nationalSignificantNumber = _this$state.nationalSignificantNumber, prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = _this$state.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix, nationalPrefix = _this$state.nationalPrefix;
      var number = nationalSignificantNumber;
      var prefix = prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix || nationalPrefix;
      if (prefix) {
        number = prefix + number;
      }
      return number;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function getNonFormattedNumber() {
      var nationalSignificantNumberIsModified = this.state.nationalSignificantNumberIsModified;
      return this.getFullNumber(nationalSignificantNumberIsModified ? this.state.getNationalDigits() : this.getNonFormattedNationalNumberWithPrefix());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      var number = this.getNonFormattedNumber();
      if (number) {
        return number.replace(/[\+\d]/g, DIGIT_PLACEHOLDER);
      }
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var callingCode = this.state.callingCode;
      var countryCodes = this.metadata.getCountryCodesForCallingCode(callingCode);
      return countryCodes && countryCodes.length > 1;
    }
    // Determines the exact country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      var country = getCountryByCallingCode(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        metadata: this.metadata
      });
      if (country !== this.state.country) {
        this.state.setCountry(country);
        if (country) {
          this.metadata.selectNumberingPlan(country);
        }
      }
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function getNumberValue() {
      var _this$state2 = this.state, digits = _this$state2.digits, callingCode = _this$state2.callingCode, country = _this$state2.country, nationalSignificantNumber = _this$state2.nationalSignificantNumber;
      if (!digits) {
        return;
      }
      if (this.isInternational()) {
        if (callingCode) {
          return "+" + callingCode + nationalSignificantNumber;
        } else {
          return "+" + digits;
        }
      } else {
        if (country || callingCode) {
          var callingCode_ = country ? this.metadata.countryCallingCode() : callingCode;
          return "+" + callingCode_ + nationalSignificantNumber;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function getNumber() {
      var _this$state3 = this.state, nationalSignificantNumber = _this$state3.nationalSignificantNumber, carrierCode = _this$state3.carrierCode, callingCode = _this$state3.callingCode;
      if (!nationalSignificantNumber) {
        return;
      }
      var country = this._getCountry();
      if (!country && !callingCode) {
        return;
      }
      if (country) {
        if (country === this.defaultCountry) {
          var countryCallingCode = this.metadata.numberingPlan.callingCode();
          var exactCountry = getExactCountryForMultiCountryCallingCode(countryCallingCode, nationalSignificantNumber, this.metadata);
          if (exactCountry) {
            country = exactCountry;
          }
        }
      }
      var phoneNumber = new PhoneNumber(country || callingCode, nationalSignificantNumber, this.metadata.metadata);
      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      }
      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function isValid3() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isValid();
    }
    /**
     * Checks if the phone number length is valid.
     * If it is, nothing is returned.
     * Otherwise, a rejection reason is returned.
     * @return {string?}
     */
  }, {
    key: "validateLength",
    value: function validateLength() {
      var _this$state4 = this.state, digits = _this$state4.digits, nationalSignificantNumber = _this$state4.nationalSignificantNumber;
      if (!digits) {
        return "NOT_A_NUMBER";
      }
      if (!this.metadata.numberingPlan) {
        return "INVALID_COUNTRY";
      }
      if (!nationalSignificantNumber) {
        return "TOO_SHORT";
      }
      var result2 = checkNumberLength(nationalSignificantNumber, void 0, this.metadata);
      if (result2 !== "IS_POSSIBLE") {
        return result2;
      }
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function getChars() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]);
})();
function getExactCountryForMultiCountryCallingCode(callingCode, nationalSignificantNumber, metadata) {
  var ambiguousCountries = metadata.getCountryCodesForCallingCode(callingCode);
  if (ambiguousCountries.length > 1) {
    return getCountryByNationalNumber(nationalSignificantNumber, ambiguousCountries, metadata.metadata);
  }
}

// node_modules/libphonenumber-js/es6/getCountries.js
function getCountries(metadata) {
  return new Metadata(metadata).getCountries();
}

// node_modules/libphonenumber-js/es6/getExampleNumber.js
function getExampleNumber(country, examples, metadata) {
  if (examples[country]) {
    return new PhoneNumber(country, examples[country], metadata);
  }
}

// node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js
function parsePhoneNumber4() {
  return withMetadataArgument(parsePhoneNumber3, arguments);
}

// node_modules/libphonenumber-js/min/exports/isPossiblePhoneNumber.js
function isPossiblePhoneNumber3() {
  return withMetadataArgument(isPossiblePhoneNumber2, arguments);
}

// node_modules/libphonenumber-js/min/exports/AsYouType.js
function AsYouType2(country) {
  return AsYouType.call(this, country, metadata_min_json_default);
}
AsYouType2.prototype = Object.create(AsYouType.prototype, {});
AsYouType2.prototype.constructor = AsYouType2;

// node_modules/libphonenumber-js/min/exports/getCountries.js
function getCountries2() {
  return withMetadataArgument(getCountries, arguments);
}

// node_modules/libphonenumber-js/min/exports/getCountryCallingCode.js
function getCountryCallingCode2() {
  return withMetadataArgument(getCountryCallingCode, arguments);
}

// node_modules/libphonenumber-js/min/exports/getExampleNumber.js
function getExampleNumber2() {
  return withMetadataArgument(getExampleNumber, arguments);
}

// node_modules/@privy-io/js-sdk-core/dist/esm/index.mjs
var Rt = Object.defineProperty;
var C3 = (e7, t5) => {
  let n5 = {};
  for (var r4 in e7) Rt(n5, r4, { get: e7[r4], enumerable: true });
  return t5 || Rt(n5, Symbol.toStringTag, { value: `Module` }), n5;
};
function zt(e7) {
  return { digest: e7?.digest ?? ((e8, t5) => globalThis.crypto.subtle.digest(e8, t5)), randomUUID: e7?.randomUUID ?? (() => globalThis.crypto.randomUUID()) };
}
var Bt = class {
  _privyInternal;
  _smartWalletConfig;
  constructor(e7) {
    this._privyInternal = e7;
  }
  getConfig() {
    return this._privyInternal.config;
  }
  async getSmartWalletConfig() {
    return this._smartWalletConfig ||= await this._privyInternal.fetch(ye, { params: { app_id: this.appId } }), this._smartWalletConfig;
  }
  get appId() {
    return this._privyInternal.appId;
  }
};
var w2 = class e4 {
  static parse(t5) {
    try {
      return new e4(t5);
    } catch {
      return null;
    }
  }
  value;
  _decoded;
  constructor(e7) {
    this.value = e7, this._decoded = decodeJwt(e7);
  }
  get subject() {
    return this._decoded.sub;
  }
  get expiration() {
    return this._decoded.exp;
  }
  get issuer() {
    return this._decoded.iss;
  }
  get audience() {
    return this._decoded.aud;
  }
  isExpired(e7 = 0) {
    return Date.now() >= (this.expiration - e7) * 1e3;
  }
};
var Vt = class e5 {
  _storage;
  _privyInternal;
  constructor(e7, t5) {
    this._privyInternal = e7, this._storage = t5;
  }
  static providerAccessTokenStorageKey = (e7) => `privy:cross-app:${e7}`;
  async updateOnCrossAppAuthentication(t5, n5) {
    let r4 = n5.access_token, i5 = e5.providerAccessTokenStorageKey(t5);
    await this._storage.put(i5, r4);
  }
  async getProviderAccessToken(t5) {
    let n5 = e5.providerAccessTokenStorageKey(t5), r4 = await this._storage.get(n5);
    if (typeof r4 != `string`) return null;
    try {
      if (new w2(r4).isExpired()) throw Error(`JWT is expired`);
      return r4;
    } catch {
      return await this._storage.del(n5), null;
    }
  }
  async getCrossAppConnections() {
    return await this._privyInternal.fetch(a, { params: { app_id: this._privyInternal.appId } });
  }
};
var Ht = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async revoke() {
    await this._privyInternal.fetch(it, {});
  }
};
var T2 = class extends Error {
  name = `PrivyApiError`;
  error;
  code;
  status;
  constructor({ error: e7, code: t5, status: n5 }) {
    super(e7), this.error = e7, this.code = t5, this.status = n5;
  }
};
var E2 = class extends Error {
  error;
  code;
  constructor({ error: e7, code: t5 }) {
    super(e7), this.code = t5, this.error = e7;
  }
};
var Ut = class extends Error {
  error;
  code;
  response;
  constructor({ error: e7, code: t5, response: n5 }) {
    super(e7), this.code = t5, this.error = e7, this.response = n5;
  }
};
var D2 = (e7) => !!e7.id && e7.recovery_method === `privy-v2`;
var qt = [`error`, `invalid_request_arguments`, `wallet_not_on_device`, `invalid_recovery_pin`, `insufficient_funds`, `mfa_timeout`, `missing_or_invalid_mfa`, `mfa_verification_max_attempts_reached`];
var Jt = (function(e7) {
  return e7.MISSING_OR_INVALID_PRIVY_APP_ID = `missing_or_invalid_privy_app_id`, e7.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = `missing_or_invalid_privy_account_id`, e7.INVALID_DATA = `invalid_data`, e7.LINKED_TO_ANOTHER_USER = `linked_to_another_user`, e7.ALLOWLIST_REJECTED = `allowlist_rejected`, e7.OAUTH_USER_DENIED = `oauth_user_denied`, e7.UNKNOWN_AUTH_ERROR = `unknown_auth_error`, e7.USER_EXITED_AUTH_FLOW = `exited_auth_flow`, e7.MUST_BE_AUTHENTICATED = `must_be_authenticated`, e7.UNKNOWN_CONNECT_WALLET_ERROR = `unknown_connect_wallet_error`, e7.GENERIC_CONNECT_WALLET_ERROR = `generic_connect_wallet_error`, e7.CLIENT_REQUEST_TIMEOUT = `client_request_timeout`, e7.INVALID_CREDENTIALS = `invalid_credentials`, e7;
})({});
var Yt = class extends Error {
  cause;
  privyErrorCode;
  constructor(e7, t5, n5) {
    super(e7), t5 instanceof Error && (this.cause = t5), this.privyErrorCode = n5;
  }
  toString() {
    return `${this.type}${this.privyErrorCode ? `-${this.privyErrorCode}` : ``}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ``}`;
  }
};
var Zt = class extends Error {
  type;
  constructor(e7, t5) {
    super(t5), this.type = e7;
  }
};
var Qt = class extends Yt {
  type = `connector_error`;
  constructor(e7, t5, n5) {
    super(e7, t5, n5);
  }
};
var $t = class extends Error {
  code;
  data;
  constructor(e7, t5, n5) {
    super(e7), this.code = t5, this.data = n5;
  }
};
var O2 = { UNKNOWN_ERROR: { eipCode: 0, message: `Unknown error`, detail: `Unknown error`, retryable: true }, E4001_DEFAULT_USER_REJECTED_REQUEST: { eipCode: 4001, message: `User Rejected Request`, detail: `The user rejected the request.`, default: true, retryable: true }, E4100_DEFAULT_UNAUTHORIZED: { eipCode: 4100, message: `Unauthorized`, detail: `The requested method and/or account has not been authorized by the user.`, default: true, retryable: false }, E4200_DEFAULT_UNSUPPORTED_METHOD: { eipCode: 4200, message: `Unsupported Method`, detail: `The Provider does not support the requested method.`, default: true, retryable: false }, E4900_DEFAULT_DISCONNECTED: { eipCode: 4900, message: `Disconnected`, detail: `The Provider is disconnected from all chains.`, default: true, retryable: true }, E4901_DEFAULT_CHAIN_DISCONNECTED: { eipCode: 4901, message: `Chain Disconnected`, detail: `The Provider is not connected to the requested chain.`, default: true, retryable: true }, E32700_DEFAULT_PARSE_ERROR: { eipCode: -32700, message: `Parse error`, detail: `Invalid JSON`, default: true, retryable: false }, E32600_DEFAULT_INVALID_REQUEST: { eipCode: -32600, message: `Invalid request`, detail: `JSON is not a valid request object`, default: true, retryable: false }, E32601_DEFAULT_METHOD_NOT_FOUND: { eipCode: -32601, message: `Method not found`, detail: `Method does not exist`, default: true, retryable: false }, E32602_DEFAULT_INVALID_PARAMS: { eipCode: -32602, message: `Invalid params`, detail: `Invalid method parameters`, default: true, retryable: false }, E32603_DEFAULT_INTERNAL_ERROR: { eipCode: -32603, message: `Internal error`, detail: `Internal JSON-RPC error`, default: true, retryable: true }, E32000_DEFAULT_INVALID_INPUT: { eipCode: -32e3, message: `Invalid input`, detail: `Missing or invalid parameters`, default: true, retryable: false }, E32001_DEFAULT_RESOURCE_NOT_FOUND: { eipCode: -32001, message: `Resource not found`, detail: `Requested resource not found`, default: true, retryable: false }, E32002_DEFAULT_RESOURCE_UNAVAILABLE: { eipCode: -32002, message: `Resource unavailable`, detail: `Requested resource not available`, default: true, retryable: true }, E32003_DEFAULT_TRANSACTION_REJECTED: { eipCode: -32003, message: `Transaction rejected`, detail: `Transaction creation failed`, default: true, retryable: true }, E32004_DEFAULT_METHOD_NOT_SUPPORTED: { eipCode: -32004, message: `Method not supported`, detail: `Method is not implemented`, default: true, retryable: false }, E32005_DEFAULT_LIMIT_EXCEEDED: { eipCode: -32005, message: `Limit exceeded`, detail: `Request exceeds defined limit`, default: true, retryable: false }, E32006_DEFAULT_JSON_RPC_VERSION_NOT_SUPPORTED: { eipCode: -32006, message: `JSON-RPC version not supported`, detail: `Version of JSON-RPC protocol is not supported`, default: true, retryable: false }, E32002_CONNECTION_ALREADY_PENDING: { eipCode: -32002, message: `Connection request already pending`, detail: `Don\u2019t see your wallet? Check your other browser windows.`, retryable: false }, E32002_REQUEST_ALREADY_PENDING: { eipCode: -32002, message: `Resource request already pending`, detail: `Don\u2019t see your wallet? Check your other browser windows.`, retryable: false }, E32002_WALLET_LOCKED: { eipCode: -32002, message: `Wallet might be locked`, detail: `Unlock your wallet and try again.`, retryable: true }, E4001_USER_REJECTED_REQUEST: { eipCode: 4001, message: `Signature rejected`, detail: `Please try signing again.`, retryable: true } };
function k2(e7) {
  let t5 = e7.type;
  return typeof t5 == `string` && qt.includes(t5);
}
function A2(e7) {
  return k2(e7) && e7.type === `wallet_not_on_device`;
}
var j2 = (e7) => /^0x[0-9a-fA-F]*$/.test(e7);
var on = (e7) => Buffer.from(e7, `utf8`);
var M2 = (e7) => `0x${e7.toString(`hex`)}`;
async function N2(e7, t5) {
  let n5;
  if (t5 instanceof Uint8Array) n5 = g2.base64.fromBytes(t5);
  else {
    let e8 = (0, import_canonicalize.default)(t5);
    if (e8 === void 0) throw new E2({ error: `Failed to prepare the payload for signing`, code: `invalid_input` });
    n5 = g2.base64.fromBytes(g2.utf8.toBytes(e8));
  }
  let { signature: r4 } = await e7({ message: n5 });
  return { signature: r4 };
}
var P2 = `privy-request-expiry`;
var sn = 1800 * 1e3;
async function F(e7, t5, { wallet_id: n5, headers: r4, ...i5 }) {
  let a6 = e7.getCompiledPath(et, { params: { wallet_id: n5 } }), o6 = String(Date.now() + sn), { signature: s5 } = await N2(t5, { version: 1, url: a6, method: et.method, headers: { "privy-app-id": e7.app.appId, [P2]: o6 }, body: { ...i5 } });
  if (Date.now() > Number(o6)) throw new E2({ error: `Wallet request expired before it could be sent. Please try again.`, code: `embedded_wallet_request_expired` });
  return await e7.fetchPrivyRoute(et, { body: i5, params: { wallet_id: n5 }, headers: { "privy-authorization-signature": s5, [P2]: o6, ...r4 ?? {} } });
}
function cn(e7) {
  return l3(e7) ? un(e7) : ln(e7);
}
function ln(e7) {
  return { from: e7.from, to: e7.to ?? void 0, nonce: I3(e7.nonce), chain_id: I3(e7.chainId), data: mn(e7.data), value: I3(e7.value), type: gn(e7.type), gas_limit: I3(e7.gasLimit ?? e7.gas), gas_price: I3(e7.gasPrice), max_fee_per_gas: I3(e7.maxFeePerGas), max_priority_fee_per_gas: I3(e7.maxPriorityFeePerGas) };
}
function un(e7) {
  return { type: o3, from: e7.from, chain_id: I3(e7.chainId), nonce: I3(e7.nonce), nonce_key: I3(e7.nonceKey), gas_limit: I3(e7.gasLimit), max_fee_per_gas: I3(e7.maxFeePerGas), max_priority_fee_per_gas: I3(e7.maxPriorityFeePerGas), fee_token: e7.feeToken, valid_after: I3(e7.validAfter), valid_before: I3(e7.validBefore), fee_payer_signature: fn(e7.feePayerSignature), access_list: dn(e7.accessList), calls: e7.calls.map((e8) => ({ to: e8.to, data: e8.data, value: I3(e8.value) })) };
}
function dn(e7) {
  if (e7) return Array.isArray(e7) ? e7.map((e8) => `address` in e8 ? { address: e8.address, storage_keys: [...e8.storageKeys] } : { address: e8[0], storage_keys: [...e8[1]] }) : Object.entries(e7).map(([e8, t5]) => ({ address: e8, storage_keys: [...t5] }));
}
function fn(e7) {
  if (!e7) return;
  let t5 = pn(e7);
  if (t5 !== 0 && t5 !== 1) throw Error(`Tempo fee payer signatures require a valid yParity value`);
  return { r: e7.r, s: e7.s, y_parity: t5 };
}
function pn(e7) {
  if (e7.yParity !== void 0) return e7.yParity;
  if (e7.v !== void 0) return Number(e7.v) - 27;
}
function mn(e7) {
  if (e7 !== void 0) return typeof e7 == `string` ? j2(e7) ? e7 : M2(on(e7)) : M2(Buffer.from(Uint8Array.from(e7)));
}
var hn = [0, 1, 2, 4];
function gn(e7) {
  if (e7 == null) return;
  let t5 = Number(e7);
  if (!_n(t5)) throw Error(`Invalid transaction type: expected ${hn.join(`, `)} as a number or hex string, got "${e7}".`);
  return t5;
}
function _n(e7) {
  return hn.includes(e7);
}
function I3(e7) {
  if (typeof e7 == `number` || typeof e7 == `bigint`) return `0x${BigInt(e7).toString(16)}`;
  if (typeof e7 == `string`) {
    if (j2(e7)) return e7;
    throw Error(`Invalid quantity string: expected a hex-prefixed value (0x\u2026), got "${e7}". Use a number, bigint, or hex string instead.`);
  }
}
function vn(e7) {
  return typeof e7 == `string` && (e7 = JSON.parse(e7)), { types: e7.types, primary_type: String(e7.primaryType), domain: e7.domain, message: e7.message };
}
async function yn({ context: e7, account: t5, rpcRequest: n5 }) {
  switch (n5.chainType) {
    case `ethereum`:
      return bn({ context: e7, account: t5, rpcRequest: n5.request });
    case `solana`:
      return xn({ context: e7, account: t5, rpcRequest: n5.request });
  }
}
async function bn({ context: e7, account: t5, rpcRequest: n5 }) {
  switch (n5.method) {
    case `personal_sign`: {
      let [r4] = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `ethereum`, method: `personal_sign`, wallet_id: t5.id, params: r4.startsWith(`0x`) ? { message: r4.slice(2), encoding: `hex` } : { message: r4, encoding: `utf-8` } });
      if (i5.method !== `personal_sign`) throw Error(`Unable to sign message`);
      return { data: i5.data.signature };
    }
    case `eth_signTransaction`: {
      let [r4] = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `ethereum`, method: `eth_signTransaction`, wallet_id: t5.id, params: { transaction: cn(r4) } });
      if (i5.method !== `eth_signTransaction`) throw Error(`Unable to sign transaction`);
      return { data: i5.data.signed_transaction };
    }
    case `eth_signTypedData_v4`: {
      let [, r4] = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `ethereum`, method: n5.method, wallet_id: t5.id, params: { typed_data: vn(r4) } });
      if (i5.method !== `eth_signTypedData_v4`) throw Error(`Unable to sign typed data`);
      return { data: i5.data.signature };
    }
    case `eth_sign`: {
      let [, r4] = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `ethereum`, method: `secp256k1_sign`, wallet_id: t5.id, params: { hash: j2(r4) ? r4 : M2(on(r4)) } });
      if (i5.method !== `secp256k1_sign`) throw Error(`Unable to sign message`);
      return { data: i5.data.signature };
    }
    case `secp256k1_sign`: {
      let [r4] = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `ethereum`, method: `secp256k1_sign`, wallet_id: t5.id, params: { hash: j2(r4) ? r4 : M2(on(r4)) } });
      if (i5.method !== `secp256k1_sign`) throw Error(`Unable to sign message`);
      return { data: i5.data.signature };
    }
    case `csw_signUserOperation`:
    case `eth_sendTransaction`:
    case `eth_populateTransactionRequest`:
      throw Error(`This wallet does not support the method: ${n5.method}`);
  }
}
async function xn({ context: e7, account: t5, rpcRequest: n5 }) {
  switch (n5.method) {
    case `signMessage`: {
      let { message: r4 } = n5.params, i5 = await F(e7, e7.signRequest, { chain_type: `solana`, method: `signMessage`, wallet_id: t5.id, params: { message: r4, encoding: `base64` } });
      if (i5.method !== `signMessage`) throw Error(`Unable to sign message`);
      return { data: i5.data.signature };
    }
  }
}
var Sn = (e7, t5, n5, r4) => {
  let i5 = Number(e7), a6 = t5.find((e8) => e8.id === i5);
  if (!a6) throw new Qt(`Unsupported chainId ${e7}`, 4901);
  let o6 = wn(a6, n5, r4.appId);
  if (i5 === Et.id || i5 === Dt.id) {
    let e8 = i5 === Et.id ? Et : Dt;
    return ht({ transport: vt(o6), chain: e8 });
  }
  return ht({ transport: vt(o6), chain: a6 });
};
function Cn(e7) {
  return e7 === Et.id || e7 === Dt.id;
}
var wn = (e7, t5, n5) => {
  let r4 = e7.id, i5 = Number(e7.id), a6;
  if (e7.rpcUrls.privyWalletOverride && e7.rpcUrls.privyWalletOverride.http[0]) a6 = e7.rpcUrls.privyWalletOverride.http[0];
  else if (t5.rpcUrls && t5.rpcUrls[i5]) a6 = t5.rpcUrls[i5];
  else if (e7.rpcUrls.privy?.http[0]) {
    let t6 = new URL(e7.rpcUrls.privy.http[0]);
    t6.searchParams.append(`privyAppId`, n5), a6 = t6.toString();
  } else a6 = e7.rpcUrls.public?.http[0] ? e7.rpcUrls.public.http[0] : e7.rpcUrls.default?.http[0];
  if (!a6) throw new Qt(`No RPC url found for ${r4}`);
  return a6;
};
function Tn({ currentRecoveryMethod: e7, upgradeToRecoveryMethod: t5 }) {
  switch (e7) {
    case `privy`:
    case `user-passcode`:
    case `recovery-encryption-key`:
      return true;
    case `icloud`:
    case `google-drive`:
      if (e7 === t5) throw Error(`Cannot upgrade to the existing cloud platform`);
      return true;
    default:
      throw Error(`Unknown recovery method`);
  }
}
var En = /* @__PURE__ */ new Set([`eth_sign`, `personal_sign`, `eth_signTypedData_v4`, `csw_signUserOperation`, `secp256k1_sign`]);
var Dn = class extends eventemitter3_default {
  _walletProxy;
  _privyInternal;
  _account;
  _entropyId;
  _entropyIdVerifier;
  _chainId;
  _chains;
  _onNeedsRecovery;
  _client;
  _appApi;
  constructor({ walletProxy: e7, privyInternal: t5, account: n5, entropyId: r4, entropyIdVerifier: i5, chains: a6, onNeedsRecovery: o6, chainId: s5 = a6[0].id, appApi: c5 }) {
    super(), this._walletProxy = e7, this._privyInternal = t5, this._account = n5, this._entropyId = r4, this._entropyIdVerifier = i5, this._chainId = s5, this._chains = a6, this._onNeedsRecovery = o6, this._client = Sn(s5, a6, { rpcUrls: [] }, { appId: c5.appId }), this._appApi = c5;
  }
  async request(e7) {
    if (En.has(e7.method)) return this.handleIFrameRpc(e7);
    switch (e7.method) {
      case `eth_accounts`:
      case `eth_requestAccounts`:
        return this._account.address ? [this._account.address] : [];
      case `eth_chainId`:
        return `0x${this._chainId.toString(16)}`;
      case `wallet_switchEthereumChain`:
        return this.handleSwitchEthereumChain(e7);
      case `eth_estimateGas`:
        return this.handleEstimateGas(e7);
      case `eth_signTransaction`: {
        let t5 = e7.params?.[0];
        return this.handleSignTransaction(t5);
      }
      case `eth_sendTransaction`: {
        let t5 = e7.params?.[0];
        return this.handleSendTransaction(t5);
      }
      case `eth_populateTransactionRequest`: {
        let t5 = e7.params?.[0];
        return this.handlePopulateTransaction(t5);
      }
      default:
        return this.handleJsonRpc(e7);
    }
  }
  ensureChainId(e7) {
    let t5 = { chainId: this._chainId, ...e7 };
    return this.internalSwitchEthereumChain(t5.chainId), t5;
  }
  internalSwitchEthereumChain(e7) {
    !e7 || Number(e7) === this._chainId || (this._chainId = Number(e7), this._client = Sn(this._chainId, this._chains, { rpcUrls: [] }, { appId: this._privyInternal.appId }), this.emit(`chainChanged`, e7));
  }
  async handlePopulateTransaction(e7) {
    let t5 = this.ensureChainId(e7);
    if (l3(t5)) {
      let e8 = u3(t5), n6 = d3(await this.requireTempoClient().prepareTransactionRequest({ account: t5.from ?? this._account.address, ...e8 }), t5.gasLimit);
      return { ...t5, ...n6, type: o3 };
    }
    let n5 = a3(t5), { gas: r4, ...i5 } = await this._client.prepareTransactionRequest({ account: t5.from ?? this._account.address, ...n5 });
    return { ...i5, gasLimit: r4, type: r3[i5.type], authorizationList: t5.authorizationList };
  }
  async handleSignTransaction(e7) {
    let t5 = { ...e7 };
    for (let e8 of Object.keys(t5)) {
      let n5 = t5[e8];
      typeof n5 == `bigint` && (t5[e8] = yt(n5));
    }
    return l3(t5) && (t5.calls = t5.calls.map((e8) => ({ ...e8, value: typeof e8.value == `bigint` ? yt(e8.value) : e8.value }))), await this.handleIFrameRpc({ method: `eth_signTransaction`, params: [t5] });
  }
  async handleSendTransaction(e7) {
    let t5 = await this.handlePopulateTransaction(e7), n5 = await this.handleSignTransaction(t5);
    return await this.handleJsonRpc({ method: `eth_sendRawTransaction`, params: [n5] });
  }
  async handleEstimateGas(e7) {
    if (!e7.params || !Array.isArray(e7.params)) throw Error(`Invalid params for eth_estimateGas`);
    let t5 = e7.params?.[0], n5 = this.ensureChainId(t5);
    if (l3(n5)) {
      let e8 = u3(n5);
      return await this.requireTempoClient().estimateGas({ account: n5.from ?? this._account.address, ...e8 });
    }
    let r4 = a3(n5);
    return await this._client.estimateGas({ account: n5.from ?? this._account.address, ...r4 });
  }
  handleSwitchEthereumChain(e7) {
    if (!e7.params || !Array.isArray(e7.params)) throw new $t(`Invalid params for ${e7.method}`, 4200);
    let t5;
    if (typeof e7.params[0] == `string`) t5 = e7.params[0];
    else if (`chainId` in e7.params[0] && typeof e7.params[0].chainId == `string`) t5 = e7.params[0].chainId;
    else throw new $t(`Invalid params for ${e7.method}`, 4200);
    this.internalSwitchEthereumChain(t5);
  }
  async handleIFrameRpc(e7) {
    try {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw Error(`Missing privy token. User must be logged in`);
      this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_started`, { method: e7.method, address: this._account.address });
      let n5 = this._account;
      if (D2(n5)) {
        let { data: r4 } = await yn({ context: { app: this._appApi, fetchPrivyRoute: (...e8) => this._privyInternal.fetch(...e8), getCompiledPath: (...e8) => this._privyInternal.getPath(...e8), signRequest: ({ message: e8 }) => this._walletProxy.signWithUserSigner({ accessToken: t5, message: e8 }) }, account: n5, rpcRequest: { chainType: `ethereum`, request: e7 } });
        return r4;
      }
      try {
        await this._walletProxy.connect({ entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, accessToken: t5 });
      } catch (e8) {
        let n6 = A2(e8);
        if (n6 && this._account.recovery_method === `privy`) await this._walletProxy.recover({ entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, accessToken: t5 });
        else if (n6 && this._onNeedsRecovery) {
          let e9;
          await new Promise(async (t6, n7) => {
            e9 = setTimeout(() => n7(new E2({ code: `embedded_wallet_recovery_error`, error: `User-owned recovery timed out` })), 12e4), await this._onNeedsRecovery?.({ recoveryMethod: this._account.recovery_method, onRecovered: () => t6(true) });
          }).finally(() => clearTimeout(e9));
        } else throw e8;
      }
      return (await this._walletProxy.rpcWallet({ accessToken: t5, request: e7, entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, hdWalletIndex: this._account.wallet_index, chainType: `ethereum` })).response.data;
    } catch (t5) {
      console.error(t5);
      let n5 = t5 instanceof Error ? t5.message : `Unable to make wallet request`;
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_failed`, { method: e7.method, address: this._account.address, error: n5 }), new E2({ code: `embedded_wallet_request_error`, error: n5 });
    }
  }
  async handleJsonRpc(e7) {
    return this._client.request(e7);
  }
  requireTempoClient() {
    if (!Cn(this._chainId)) throw new $t(`Cannot send a Tempo (type 118) transaction on chain ${this._chainId}`, 4901);
    return this._client;
  }
  toJSON() {
    return `PrivyEIP1193Provider { address: '${this._account.address}', chainId: ${this._chainId}, request: [Function] }`;
  }
};
function On(e7) {
  return `version` in e7;
}
function kn(e7, t5) {
  let n5 = (On(e7) ? e7.message : e7.compileMessage()).staticAccountKeys.find((e8) => e8.toBase58() === t5);
  if (!n5) throw Error(`Transaction does not contain public key ${t5}`);
  return n5;
}
var An = class {
  _proxy;
  _privyInternal;
  _app;
  _entropyId;
  _entropyIdVerifier;
  _account;
  _onNeedsRecovery;
  constructor({ proxy: e7, privyInternal: t5, account: n5, entropyId: r4, entropyIdVerifier: i5, onNeedsRecovery: a6, app: o6 }) {
    this._proxy = e7, this._privyInternal = t5, this._account = n5, this._entropyId = r4, this._entropyIdVerifier = i5, this._onNeedsRecovery = a6, this._app = o6;
  }
  async request(e7) {
    if (!await this._privyInternal.getAccessTokenInternal()) throw new E2({ error: `Missing access token`, code: `attempted_rpc_call_before_logged_in` });
    switch (e7.method) {
      case `signAndSendTransaction`:
        return await this.handleSignAndSendTransaction(e7);
      case `signTransaction`:
        return await this.handleSignTransaction(e7);
      default:
        return await this.handleIFrameRpc(e7);
    }
  }
  get _publicKey() {
    return this._account.address;
  }
  async connectAndRecover(e7) {
    if (this._account.recovery_method !== `privy-v2`) try {
      await this._proxy.connect({ entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, accessToken: e7 });
    } catch (t5) {
      let n5 = A2(t5);
      if (n5 && this._account.recovery_method === `privy`) await this._proxy.recover({ entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, accessToken: e7 });
      else if (n5 && this._onNeedsRecovery) {
        let e8;
        await new Promise(async (t6, n6) => {
          e8 = setTimeout(() => n6(new E2({ code: `embedded_wallet_recovery_error`, error: `User-owned recovery timed out` })), 12e4), await this._onNeedsRecovery?.({ recoveryMethod: this._account.recovery_method, onRecovered: () => t6(true) });
        }).finally(() => clearTimeout(e8));
      } else throw t5;
    }
  }
  async signMessageRpc(e7, t5) {
    let n5 = this._account;
    if (D2(n5)) {
      let { data: r4 } = await yn({ context: { app: this._app, fetchPrivyRoute: (...e8) => this._privyInternal.fetch(...e8), getCompiledPath: (...e8) => this._privyInternal.getPath(...e8), signRequest: ({ message: e8 }) => this._proxy.signWithUserSigner({ accessToken: t5, message: e8 }) }, account: n5, rpcRequest: { chainType: `solana`, request: e7 } });
      return { signature: r4 };
    } else return (await this._proxy.rpcWallet({ accessToken: t5, request: e7, chainType: `solana`, hdWalletIndex: this._account.wallet_index, entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier })).response.data;
  }
  async handleIFrameRpc(e7) {
    try {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw Error(`Missing privy token. User must be logged in`);
      return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_started`, { method: e7.method, address: this._account.address }), await this.connectAndRecover(t5), await this.signMessageRpc(e7, t5);
    } catch (t5) {
      console.error(t5);
      let n5 = t5 instanceof Error ? t5.message : `Unable to make wallet request`;
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_failed`, { method: e7.method, address: this._account.address, error: n5 }), new E2({ code: `embedded_wallet_request_error`, error: n5 });
    }
  }
  async handleSignAndSendTransaction(e7) {
    try {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw Error(`Missing privy token. User must be logged in`);
      this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_started`, { method: e7.method, address: this._account.address }), await this.connectAndRecover(t5);
      let { transaction: n5, connection: r4, options: i5 } = e7.params, a6 = kn(n5, this._account.address), o6 = On(n5) ? Buffer.from(n5.message.serialize()) : n5.serializeMessage(), { signature: s5 } = await this.signMessageRpc({ method: `signMessage`, params: { message: o6.toString(`base64`) } }, t5);
      return n5.addSignature(a6, Buffer.from(s5, `base64`)), { signature: await r4.sendRawTransaction(n5.serialize(), i5) };
    } catch (t5) {
      console.error(t5);
      let n5 = t5 instanceof Error ? t5.message : `Unable to make wallet request`;
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_failed`, { method: e7.method, address: this._account.address, error: n5 }), new E2({ code: `embedded_wallet_request_error`, error: n5 });
    }
  }
  async handleSignTransaction(e7) {
    try {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw Error(`Missing privy token. User must be logged in`);
      this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_started`, { method: e7.method, address: this._account.address }), await this.connectAndRecover(t5);
      let { transaction: n5 } = e7.params, r4 = kn(n5, this._account.address), i5 = On(n5) ? Buffer.from(n5.message.serialize()) : n5.serializeMessage(), { signature: a6 } = await this.signMessageRpc({ method: `signMessage`, params: { message: i5.toString(`base64`) } }, t5);
      return n5.addSignature(r4, Buffer.from(a6, `base64`)), { signedTransaction: n5 };
    } catch (t5) {
      console.error(t5);
      let n5 = t5 instanceof Error ? t5.message : `Unable to make wallet request`;
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_failed`, { method: e7.method, address: this._account.wallet_index, error: n5 }), new E2({ code: `embedded_wallet_request_error`, error: n5 });
    }
  }
  toJSON() {
    return `PrivyEmbeddedSolanaProvider { address: '${this._account.address}', request: [Function] }`;
  }
};
var jn = class {
  _proxy;
  _privyInternal;
  _account;
  _entropyId;
  _entropyIdVerifier;
  constructor({ proxy: e7, privyInternal: t5, account: n5, entropyId: r4, entropyIdVerifier: i5 }) {
    this._proxy = e7, this._privyInternal = t5, this._account = n5, this._entropyId = r4, this._entropyIdVerifier = i5;
  }
  async sign({ message: e7 }) {
    return await this.request({ method: `sign`, params: { message: new TextDecoder(`utf8`).decode(e7) } });
  }
  async signTransaction({ psbt: e7 }) {
    return await this.request({ method: `signTransaction`, params: { psbt: e7 } });
  }
  async request(e7) {
    if (D2(this._account)) throw new E2({ code: `unsupported_wallet_type`, error: `Bitcoin wallet providers are only supported for on-device execution and this app uses TEE execution. Use the useSignRawHash hook from @privy-io/expo/extended-chains to sign over a hash with this wallet. Learn more at https://docs.privy.io/recipes/tee-wallet-migration-guide` });
    if (!await this._privyInternal.getAccessTokenInternal()) throw new E2({ error: `Missing access token`, code: `attempted_rpc_call_before_logged_in` });
    return this.handleIFrameRpc(e7);
  }
  async handleIFrameRpc(e7) {
    try {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw Error(`Missing access token. User must be authenticated.`);
      return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_started`, { method: e7.method, address: this._account.address }), (await this._proxy.rpcWallet({ accessToken: t5, request: e7, entropyId: this._entropyId, entropyIdVerifier: this._entropyIdVerifier, hdWalletIndex: this._account.wallet_index, chainType: this._account.chain_type })).response.data;
    } catch (t5) {
      console.error(t5);
      let n5 = t5 instanceof Error ? t5.message : `Unable to make wallet request`;
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_rpc_failed`, { method: e7.method, address: this._account.address, error: n5 }), new E2({ code: `embedded_wallet_request_error`, error: n5 });
    }
  }
  toJSON() {
    return `PrivyEmbeddedBitcoinProvider { address: '${this._account.address}', request: [Function] }`;
  }
};
var Mn = class {
  callbacks = {};
  enqueue(e7, t5) {
    this.callbacks[e7] = t5;
  }
  flush(e7) {
    let t5 = Object.values(this.callbacks);
    this.callbacks = {};
    for (let { reject: n5 } of t5) n5(e7);
  }
  dequeue(e7, t5) {
    let n5 = this.callbacks[t5];
    if (!n5) return console.warn(`[Privy] No callback found for "${e7}" (id: ${t5})`), null;
    switch (delete this.callbacks[t5], e7) {
      case `privy:iframe:ready`:
        return n5;
      case `privy:wallets:create`:
        return n5;
      case `privy:user-signer:sign`:
        return n5;
      case `privy:wallets:add`:
        return n5;
      case `privy:wallets:set-recovery`:
        return n5;
      case `privy:wallets:connect`:
        return n5;
      case `privy:wallets:recover`:
        return n5;
      case `privy:wallets:rpc`:
        return n5;
      case `privy:wallet:create`:
        return n5;
      case `privy:wallet:connect`:
        return n5;
      case `privy:wallet:recover`:
        return n5;
      case `privy:wallet:rpc`:
        return n5;
      case `privy:solana-wallet:create`:
        return n5;
      case `privy:solana-wallet:create-additional`:
        return n5;
      case `privy:solana-wallet:connect`:
        return n5;
      case `privy:solana-wallet:recover`:
        return n5;
      case `privy:solana-wallet:rpc`:
        return n5;
      case `privy:delegated-actions:consent`:
        return n5;
      case `privy:mfa:verify`:
        return n5;
      case `privy:mfa:init-enrollment`:
        return n5;
      case `privy:mfa:submit-enrollment`:
        return n5;
      case `privy:mfa:unenroll`:
        return n5;
      case `privy:mfa:clear`:
        return n5;
      case `privy:auth:unlink-passkey`:
        return n5;
      default:
        throw Error(`invalid wallet event type ${e7}`);
    }
  }
};
async function Nn(e7, t5, n5, r4, i5 = false, a6, o6) {
  let s5 = i5, c5 = async (a7) => s5 ? (a7 === +!i5 ? r4() : n5.current?.reject(new Zt(`missing_or_invalid_mfa`, `MFA verification failed, retry.`)), await e7(await new Promise((e8, r5) => {
    t5.current = { resolve: e8, reject: r5 }, setTimeout(() => {
      let e9 = new Zt(`mfa_timeout`, `Timed out waiting for MFA code`);
      n5.current?.reject(e9), r5(e9);
    }, o6);
  }))) : await e7(), l6 = null;
  for (let e8 = 0; e8 < a6; e8++) try {
    l6 = await c5(e8), n5.current?.resolve(void 0);
    break;
  } catch (e9) {
    if (e9.type === `missing_or_invalid_mfa`) s5 = true;
    else throw n5.current?.resolve(void 0), e9;
  }
  if (l6 === null) {
    let e8 = new Zt(`mfa_verification_max_attempts_reached`, `Max MFA verification attempts reached`);
    throw n5.current?.reject(e8), e8;
  }
  return l6;
}
function Pn(e7) {
  return e7.error !== void 0;
}
var Fn = /* @__PURE__ */ (function(e7) {
  return () => `id-${e7++}`;
})(0);
var In = (e7, t5) => typeof t5 == `bigint` ? t5.toString() : t5;
var Ln = (e7, t5) => `${e7}${JSON.stringify(t5, In)}`;
var L2 = async (e7, { ms: t5, msg: n5 }) => {
  let r4, i5 = new Promise((e8, i6) => {
    r4 = setTimeout(() => {
      i6(Error(n5));
    }, t5 ?? 15e3);
  });
  try {
    return await Promise.race([e7, i5]);
  } finally {
    r4 !== void 0 && clearTimeout(r4);
  }
};
var Rn = new Mn();
var zn = class {
  ready;
  _waitForReadyPromise = null;
  cache;
  _embeddedWalletMessagePoster;
  mfa;
  constructor(e7, t5) {
    this.ready = false, this.cache = /* @__PURE__ */ new Map(), this._embeddedWalletMessagePoster = e7, this.mfa = t5;
  }
  invokeWithMfa(e7, t5) {
    return L2(Nn((n5) => L2(this.waitForReady().then(() => e7(n5)), { msg: t5.timeoutMsg, ms: t5.timeoutMs }), this.mfa.rootPromise, this.mfa.submitPromise, () => this.mfa.emit(`mfaRequired`), t5.mfaAlwaysRequired ?? false, 4, 3e5), { msg: `Operation reached timeout: MFA verification`, ms: 126e4 });
  }
  reload() {
    return this.ready = false, this._waitForReadyPromise = null, Rn.flush(Error(`Embedded wallet WebView was reloaded`)), this.cache.clear(), this._embeddedWalletMessagePoster.reload();
  }
  onBackground() {
    this.ready = false;
  }
  ping(e7 = 15e3) {
    return L2(this.invoke(`privy:iframe:ready`, {}), { msg: `Ping reached timeout`, ms: e7 });
  }
  create(e7) {
    return L2(this.waitForReady().then(() => this.invoke(`privy:wallet:create`, e7)), { msg: `Operation reached timeout: create` });
  }
  rpc(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:wallet:rpc`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: rpc` });
  }
  createSolana(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:solana-wallet:create`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: create`, timeoutMs: 6e4 });
  }
  createAdditionalSolana(e7) {
    return L2(this.waitForReady().then(() => this.invoke(`privy:solana-wallet:create-additional`, e7)), { msg: `Operation reached timeout: create` });
  }
  solanaRpc(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:solana-wallet:rpc`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: solana-rpc` });
  }
  delegateWallets(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:delegated-actions:consent`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: delegated-actions:consent` });
  }
  verifyMfa(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:mfa:verify`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: mfa:verify`, mfaAlwaysRequired: true });
  }
  initEnrollMfa(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:mfa:init-enrollment`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: mfa:init-enrollment` });
  }
  submitEnrollMfa(e7) {
    return e7.method === `passkey` ? this.invokeWithMfa((t5) => this.invoke(`privy:mfa:submit-enrollment`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: mfa:submit-enrollment` }) : L2(this.waitForReady().then(() => this.invoke(`privy:mfa:submit-enrollment`, e7)), { msg: `Operation reached timeout: mfa:submit-enrollment` });
  }
  unenrollMfa(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:mfa:unenroll`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: mfa:unenroll`, mfaAlwaysRequired: true });
  }
  unlinkPasskey(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:auth:unlink-passkey`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: auth:unlink-passkey`, mfaAlwaysRequired: true });
  }
  clearMfa(e7) {
    return L2(this.waitForReady().then(() => this.invoke(`privy:mfa:clear`, e7)), { msg: `Operation reached timeout: mfa:clear` });
  }
  createWallet(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:wallets:create`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: create`, timeoutMs: 6e4 });
  }
  signWithUserSigner(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:user-signer:sign`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: user-signer:sign` });
  }
  addWallet(e7) {
    return L2(this.waitForReady().then(() => this.invoke(`privy:wallets:add`, e7)), { msg: `Operation reached timeout: wallets:add` });
  }
  setRecovery(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:wallets:set-recovery`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: wallets:set-recovery`, timeoutMs: 6e4 });
  }
  connect(e7) {
    return L2(this.waitForReady().then(() => this.invoke(`privy:wallets:connect`, e7)), { msg: `Operation reached timeout: wallets:connect` });
  }
  recover(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:wallets:recover`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: wallets:recover`, timeoutMs: 6e4 });
  }
  rpcWallet(e7) {
    return this.invokeWithMfa((t5) => this.invoke(`privy:wallets:rpc`, { ...t5, ...e7 }), { timeoutMsg: `Operation reached timeout: wallets:rpc` });
  }
  handleEmbeddedWalletMessages(e7) {
    if (!e7.event.startsWith(`privy:`)) {
      console.warn(`Unsupported event type: ${e7.event}`);
      return;
    }
    let t5 = Rn.dequeue(e7.event, e7.id);
    if (t5) return Pn(e7) ? t5.reject(new Zt(e7.error.type, e7.error.message)) : t5.resolve(e7.data);
  }
  waitForReady() {
    return this.ready ? Promise.resolve() : (this._waitForReadyPromise ||= new Promise((e7, t5) => {
      (async () => {
        for (let t6 = 0; t6 < 100 && !this.ready; t6++) this.invoke(`privy:iframe:ready`, {}).then(() => {
          this.ready = true, this._waitForReadyPromise = null, e7();
        }).catch(() => {
        }), await new Promise((e8) => setTimeout(e8, 150));
        this.ready || (this._waitForReadyPromise = null, t5(Error(`Embedded wallet WebView failed to become ready`)));
      })();
    }), this._waitForReadyPromise);
  }
  invoke(e7, t5) {
    let n5 = Ln(e7, t5);
    if (e7 === `privy:wallet:create` || e7 === `privy:solana-wallet:create`) {
      let e8 = this.cache.get(n5);
      if (e8) return e8;
    }
    let r4 = new Promise((n6, r5) => {
      let i5 = Fn();
      Rn.enqueue(i5, { resolve: n6, reject: r5 }), this._embeddedWalletMessagePoster.postMessage(JSON.stringify({ id: i5, event: e7, data: t5 }), `*`);
    }).finally(() => {
      this.cache.delete(n5);
    });
    return this.cache.set(n5, r4), r4;
  }
};
async function Bn(e7, { request: t5, headers: n5 }) {
  return await e7.fetchPrivyRoute(Ze, { body: t5, headers: n5 });
}
async function Vn({ context: e7, chainType: t5, idempotencyKey: n5 }) {
  return { wallet: await Bn(e7, { request: { chain_type: t5, owner_id: void 0 }, headers: n5 ? { "privy-idempotency-key": n5 } : void 0 }) };
}
var Hn = class {
  _privyInternal;
  _proxy;
  _chains = Array.from(M);
  _mfa;
  _mfaPromises;
  _appApi;
  constructor(e7, t5, n5, r4, i5, a6) {
    if (this._privyInternal = e7, t5 && (this._proxy = new zn(t5, i5), r4.setProxy(this._proxy)), n5) {
      let e8 = I2(n5);
      this._chains = e8;
    }
    this._mfa = r4, this._mfaPromises = i5, this._appApi = a6;
  }
  setMessagePoster(e7) {
    this._proxy = new zn(e7, this._mfaPromises), this._mfa.setProxy(this._proxy);
  }
  async signWithUserSigner(e7) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    let t5 = await this._privyInternal.getAccessTokenInternal();
    if (!t5) throw new E2({ error: `User must be logged in to sign a message with the user signer`, code: `user_signer_sign_error` });
    let { signature: n5 } = await this._proxy.signWithUserSigner({ accessToken: t5, message: e7.message });
    return { signature: n5 };
  }
  async add(e7) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    if (this._privyInternal.config?.embedded_wallet_config.mode === `user-controlled-server-wallets-only`) await Vn({ context: { app: this._appApi, fetchPrivyRoute: (...e8) => this._privyInternal.fetch(...e8), getCompiledPath: (...e8) => this._privyInternal.getPath(...e8) }, chainType: e7.chainType });
    else {
      let t6 = await this._privyInternal.getAccessTokenInternal();
      if (!t6) throw new E2({ error: `User must be logged in to create an embedded wallet`, code: `embedded_wallet_creation_error` });
      await this._proxy.addWallet({ accessToken: t6, ...e7 });
    }
    let { user: t5 } = await this._privyInternal.refreshSession();
    return { user: t5 };
  }
  async getBitcoinProvider({ wallet: e7, entropyId: t5, entropyIdVerifier: n5, recoveryPassword: r4, recoveryAccessToken: i5, recoverySecretOverride: a6 }) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    if (!await this._privyInternal.getAccessTokenInternal()) throw Error(`User must be logged in to create an embedded wallet`);
    return D2(e7) || await this._load({ entropyId: t5, entropyIdVerifier: n5, wallet: e7, recoveryPassword: r4, recoveryAccessToken: i5, recoverySecretOverride: a6 }), new jn({ account: e7, privyInternal: this._privyInternal, proxy: this._proxy, entropyId: t5, entropyIdVerifier: n5 });
  }
  async create({ password: e7, recoveryMethod: t5, recoveryToken: n5, recoveryKey: r4, recoverySecretOverride: i5, iCloudRecordNameOverride: a6, solanaAccount: o6, skipCallbacks: s5, idempotencyKey: c5 }) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    if (this._privyInternal.config?.embedded_wallet_config.mode === `user-controlled-server-wallets-only`) {
      if (t5 && !t5.startsWith(`privy`)) throw new E2({ error: `User-controlled server wallets do not support custom recovery methods`, code: `embedded_wallet_creation_error` });
      await Vn({ context: { app: this._appApi, fetchPrivyRoute: (...e8) => this._privyInternal.fetch(...e8), getCompiledPath: (...e8) => this._privyInternal.getPath(...e8) }, chainType: `ethereum`, idempotencyKey: c5 });
    } else {
      let s6;
      if (s6 = t5 || (e7 ? `user-passcode` : `privy`), e7 && typeof e7 != `string`) throw Error(`Invalid recovery password, must be a string`);
      if (s6 === `privy` && this._privyInternal.config?.embedded_wallet_config.require_user_password_on_create) throw Error(`Password not provided yet is required by App configuration`);
      let c6 = await this._privyInternal.getAccessTokenInternal();
      if (!c6) throw Error(`User must be logged in to create an embedded wallet`);
      let { address: l6 } = await this._proxy.create({ accessToken: c6, recoveryMethod: s6, recoveryKey: r4, recoveryPassword: e7, recoveryAccessToken: n5, recoverySecretOverride: i5, iCloudRecordNameOverride: a6, solanaAddress: o6?.address });
      if (!l6) throw Error(`Failed to create wallet`);
    }
    return await this._privyInternal.refreshSession(s5);
  }
  async createSolana(e7) {
    if (!this._proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_creation_error` });
    if (this._privyInternal.config?.embedded_wallet_config.mode === `user-controlled-server-wallets-only`) await Vn({ context: { app: this._appApi, fetchPrivyRoute: (...e8) => this._privyInternal.fetch(...e8), getCompiledPath: (...e8) => this._privyInternal.getPath(...e8) }, chainType: `solana`, idempotencyKey: e7?.idempotencyKey });
    else {
      let t5 = await this._privyInternal.getAccessTokenInternal();
      if (!t5) throw new E2({ error: `User must be logged in to create an embedded wallet`, code: `embedded_wallet_creation_error` });
      e7?.ethereumAccount && await this.getProvider(e7.ethereumAccount);
      let { publicKey: n5 } = await this._proxy.createSolana({ accessToken: t5, ethereumAddress: e7?.ethereumAccount?.address });
      if (!n5) throw new E2({ error: `Failed to create wallet`, code: `embedded_wallet_creation_error` });
    }
    return await this._privyInternal.refreshSession();
  }
  async delegateWallets({ delegatedWallets: e7, rootWallet: t5 }) {
    if (!this._proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_creation_error` });
    let n5 = await this._privyInternal.getAccessTokenInternal();
    if (!n5) throw new E2({ error: `User must be logged in to create an embedded wallet`, code: `embedded_wallet_creation_error` });
    await this._proxy.delegateWallets({ accessToken: n5, delegatedWallets: e7, rootWallet: t5 });
  }
  async getProvider(e7, t5, n5, r4, i5) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    return D2(e7) || await this._load({ wallet: e7, entropyId: e7.address, entropyIdVerifier: `ethereum-address-verifier`, recoveryPassword: t5, recoveryKey: i5, recoveryAccessToken: n5, recoverySecretOverride: r4 }), new Dn({ account: e7, entropyId: e7.address, entropyIdVerifier: `ethereum-address-verifier`, privyInternal: this._privyInternal, chains: this._chains, walletProxy: this._proxy, appApi: this._appApi });
  }
  async getEthereumProvider({ wallet: e7, entropyId: t5, entropyIdVerifier: n5, recoveryPassword: r4, recoveryAccessToken: i5, recoverySecretOverride: a6, recoveryKey: o6, onNeedsRecovery: s5 }) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    if (!await this._privyInternal.getAccessTokenInternal()) throw Error(`User must be logged in to create an embedded wallet`);
    return D2(e7) || (!s5 || r4 || i5 || a6 || o6) && await this._load({ entropyId: t5, entropyIdVerifier: n5, wallet: e7, recoveryPassword: r4, recoveryAccessToken: i5, recoverySecretOverride: a6, recoveryKey: o6 }), new Dn({ account: e7, entropyId: t5, entropyIdVerifier: `ethereum-address-verifier`, privyInternal: this._privyInternal, chains: this._chains, walletProxy: this._proxy, onNeedsRecovery: s5, appApi: this._appApi });
  }
  async getSolanaProvider(e7, t5, n5, r4, i5, a6, o6) {
    if (!this._proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    return D2(e7) || (!o6 || r4 || i5 || a6) && await this._load({ wallet: e7, entropyId: t5, entropyIdVerifier: n5, recoveryPassword: r4, recoveryAccessToken: i5, recoverySecretOverride: a6 }), new An({ account: e7, privyInternal: this._privyInternal, proxy: this._proxy, entropyId: t5, entropyIdVerifier: n5, onNeedsRecovery: o6, app: this._appApi });
  }
  async setRecovery(e7) {
    let { wallet: t5, ...n5 } = e7;
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    if (D2(t5)) throw new E2({ error: `This wallet does not support setting recovery methods`, code: `unsupported_recovery_method` });
    Tn({ currentRecoveryMethod: t5.recovery_method, upgradeToRecoveryMethod: n5.recoveryMethod === `icloud-native` ? `icloud` : n5.recoveryMethod }), await this._load(t5.chain_type === `solana` ? { wallet: t5, entropyId: t5.address, entropyIdVerifier: `solana-address-verifier` } : { wallet: t5, entropyId: t5.address, entropyIdVerifier: `ethereum-address-verifier` });
    let r4 = await this._privyInternal.getAccessTokenInternal();
    if (!r4) throw Error(`User must be logged in to interact with embedded wallets`);
    let i5 = t5.recovery_method;
    this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_set_recovery_started`, { address: t5.address, target_recovery_method: n5.recoveryMethod, existing_recovery_method: i5 });
    try {
      let e8;
      if (n5.recoveryMethod === `user-passcode`) e8 = { recoveryMethod: `user-passcode`, recoveryPassword: n5.password };
      else if (n5.recoveryMethod === `google-drive`) e8 = { recoveryMethod: `google-drive`, recoveryAccessToken: n5.recoveryAccessToken };
      else if (n5.recoveryMethod === `icloud`) e8 = { recoveryMethod: `icloud`, recoveryAccessToken: n5.recoveryAccessToken };
      else if (n5.recoveryMethod === `icloud-native`) e8 = { recoveryMethod: `icloud-native`, iCloudRecordNameOverride: n5.iCloudRecordNameOverride, recoverySecretOverride: n5.recoverySecretOverride };
      else if (n5.recoveryMethod === `recovery-encryption-key`) e8 = { recoveryMethod: `recovery-encryption-key`, recoveryKey: n5.recoveryKey };
      else if (n5.recoveryMethod === `privy`) e8 = { recoveryMethod: `privy` };
      else throw Error(`Unknown recovery method: ${n5.recoveryMethod}`);
      await this._proxy.setRecovery({ accessToken: r4, entropyId: t5.address, entropyIdVerifier: t5.chain_type === `solana` ? `solana-address-verifier` : `ethereum-address-verifier`, ...e8 }), this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_set_recovery_completed`, { address: t5.address, target_recovery_method: n5.recoveryMethod, existing_recovery_method: i5 });
      let { user: a6 } = await this._privyInternal.refreshSession();
      return { user: a6, provider: t5.chain_type === `ethereum` ? new Dn({ account: t5, entropyId: t5.address, entropyIdVerifier: `ethereum-address-verifier`, privyInternal: this._privyInternal, chains: this._chains, walletProxy: this._proxy, appApi: this._appApi }) : null };
    } catch (e8) {
      throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_set_recovery_failed`, { address: t5.address, recovery_method: t5.recovery_method, error: e8 instanceof Error ? e8.message : `Unable to recover wallet` }), e8;
    }
  }
  getURL() {
    let e7 = new URL(`${this._privyInternal.baseUrl}/apps/${this._privyInternal.appId}/embedded-wallets`);
    return this._privyInternal.caid && e7.searchParams.append(`caid`, this._privyInternal.caid), this._privyInternal.appClientId && e7.searchParams.append(`client_id`, this._privyInternal.appClientId), e7.href;
  }
  get chains() {
    return this._chains;
  }
  onMessage(e7) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    return this._proxy.handleEmbeddedWalletMessages(e7);
  }
  reload() {
    if (!this._proxy) {
      this._privyInternal.logger.warn(`Attempted to reload proxy before initialized`);
      return;
    }
    this._proxy.reload();
  }
  onBackground() {
    this._proxy?.onBackground();
  }
  async ping(e7) {
    try {
      if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
      return await this._proxy.ping(e7), true;
    } catch (e8) {
      return this._privyInternal.logger.debug(e8), false;
    }
  }
  async _load({ entropyId: e7, entropyIdVerifier: t5, wallet: n5, recoveryPassword: r4, recoveryKey: i5, recoveryAccessToken: a6, recoverySecretOverride: o6 }) {
    if (!this._proxy) throw Error(`Embedded wallet proxy not initialized`);
    let s5 = await this._privyInternal.getAccessTokenInternal();
    if (!s5) throw Error(`User must be logged in to interact with embedded wallets`);
    try {
      return await this._proxy.connect({ accessToken: s5, entropyId: e7, entropyIdVerifier: t5 }), e7;
    } catch (c5) {
      if (A2(c5)) {
        try {
          if (n5.recovery_method === `privy`) {
            this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_started`, { address: n5.address, recovery_method: n5.recovery_method });
            let r5 = await this._proxy.recover({ accessToken: s5, entropyId: e7, entropyIdVerifier: t5 });
            return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_completed`, { address: n5.address, recovery_method: n5.recovery_method }), r5.entropyId;
          }
          if (n5.recovery_method === `user-passcode` && r4) {
            this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_started`, { address: n5.address, recovery_method: n5.recovery_method });
            let i6 = await this._proxy.recover({ accessToken: s5, recoveryPassword: r4, entropyId: e7, entropyIdVerifier: t5 });
            return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_completed`, { address: n5.address, recovery_method: n5.recovery_method }), i6.entropyId;
          }
          if ([`google-drive`, `icloud`].includes(n5.recovery_method) && a6) {
            this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_started`, { address: n5.address, recovery_method: n5.recovery_method });
            let r5 = await this._proxy.recover({ accessToken: s5, recoveryAccessToken: a6, entropyId: e7, entropyIdVerifier: t5 });
            return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_completed`, { address: n5.address, recovery_method: n5.recovery_method }), r5.entropyId;
          }
          if (n5.recovery_method === `icloud` && o6) {
            this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_started`, { address: n5.address, recovery_method: `icloud-native` });
            let r5 = await this._proxy.recover({ accessToken: s5, recoverySecretOverride: o6, entropyId: e7, entropyIdVerifier: t5 });
            return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_completed`, { address: n5.address, recovery_method: `icloud-native` }), r5.entropyId;
          }
          if (n5.recovery_method === `recovery-encryption-key` && i5) {
            this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_started`, { address: n5.address, recovery_method: n5.recovery_method });
            let r5 = await this._proxy.recover({ accessToken: s5, recoveryKey: i5, entropyId: e7, entropyIdVerifier: t5 });
            return this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_completed`, { address: n5.address, recovery_method: n5.recovery_method }), r5.entropyId;
          }
        } catch (t6) {
          throw this._privyInternal.createAnalyticsEvent(`embedded_wallet_sdk_recovery_failed`, { address: n5.address, recovery_method: n5.recovery_method, error: t6 instanceof Error ? t6.message : `Unable to recover wallet: ${e7}` }), t6;
        }
        throw c5;
      } else throw c5;
    }
  }
};
var Un = class extends eventemitter3_default {
  rootPromise;
  submitPromise;
  constructor() {
    super(), this.rootPromise = { current: null }, this.submitPromise = { current: null };
  }
};
var Wn = [`chrome-extension:`, `moz-extension:`, `safari-web-extension:`];
var Gn = false;
var Kn = () => {
  if (Gn) return true;
  try {
    let e7 = globalThis, t5 = e7.chrome?.runtime?.id ?? e7.browser?.runtime?.id, n5 = e7.location?.protocol;
    Gn = typeof t5 == `string` && t5.length > 0 || typeof n5 == `string` && Wn.includes(n5);
  } catch {
    Gn = true;
  }
  return Gn;
};
var R2 = { get(e7) {
  return api.get(e7);
}, set(e7, t5, n5) {
  Kn() || api.set(e7, t5, n5);
}, remove(e7) {
  api.remove(e7);
} };
var qn = ({ useServerCookies: e7, cookieWriteBehavior: t5 }) => e7 || t5 === `never` ? false : !Kn();
var z2 = `privy:active-user`;
var Jn = `privy:saved-users`;
var B = (e7) => e7 ? `privy:${e7}:token` : `privy:token`;
var V = (e7) => e7 ? `privy:${e7}:pat` : `privy:pat`;
var H2 = (e7) => e7 ? `privy:${e7}:refresh_token` : `privy:refresh_token`;
var U2 = (e7) => e7 ? `privy:${e7}:id-token` : `privy:id-token`;
var Yn = (e7) => e7 ? `privy-${e7}-token` : `privy-token`;
var Xn = (e7) => e7 ? `privy-${e7}-refresh-token` : `privy-refresh-token`;
var Zn = (e7) => e7 ? `privy-${e7}-id-token` : `privy-id-token`;
var W2 = (e7) => e7 ? `privy-${e7}-session` : `privy-session`;
var G2 = Promise.allSettled.bind(Promise) ?? ((e7) => Promise.all(e7.map((e8) => e8.then((e9) => ({ status: `fulfilled`, value: e9 })).catch((e9) => ({ status: `rejected`, reason: e9 })))));
var Qn = [`storage_cleared`, `token_cleared`, `refresh_token_cleared`, `identity_token_cleared`, `token_stored`, `refresh_token_stored`, `identity_token_stored`, `oauth_tokens_granted`, `error_storing_tokens`];
var $n = class extends eventemitter3_default {
  static events = Qn;
  _storage;
  _isUsingServerCookies = false;
  _cookieWriteBehavior;
  GUEST_CREDENTIAL_STORAGE_KEY;
  _setStoredUsers;
  _hasEmittedStoredUsers = false;
  constructor(e7) {
    super(), this._storage = e7.storage, this._isUsingServerCookies = e7.isUsingServerCookies, this._cookieWriteBehavior = e7.cookieWriteBehavior, this.GUEST_CREDENTIAL_STORAGE_KEY = `privy:guest:${e7.appId}`, this._setStoredUsers = e7.setStoredUsers;
  }
  set isUsingServerCookies(e7) {
    this._isUsingServerCookies = e7;
  }
  shouldWriteCookies() {
    return qn({ useServerCookies: this._isUsingServerCookies, cookieWriteBehavior: this._cookieWriteBehavior });
  }
  writeCookie(e7, t5, n5) {
    this.shouldWriteCookies() && R2.set(e7, t5, n5);
  }
  setStoredUsersCallback(e7) {
    this._setStoredUsers = e7, this.getSavedUserIds().then((e8) => {
      this._hasEmittedStoredUsers || this._setStoredUsers?.({ users: e8.map((e9) => ({ id: e9 })) });
    });
  }
  async getCustomerAccessToken() {
    let e7 = await this.getActiveUserId(), t5 = await this._storage.get(B(e7));
    try {
      return typeof t5 == `string` ? new w2(t5).value : null;
    } catch (e8) {
      return console.error(e8), await this.destroyLocalState({ reason: `getToken_error` }), null;
    }
  }
  async getPrivyAccessToken() {
    let e7 = await this.getActiveUserId(), t5 = await this._storage.get(V(e7));
    try {
      return typeof t5 == `string` ? new w2(t5).value : null;
    } catch (e8) {
      return console.error(e8), await this.destroyLocalState({ reason: `getToken_error` }), null;
    }
  }
  async getRefreshToken() {
    let e7 = await this.getActiveUserId(), t5 = await this._storage.get(H2(e7));
    return typeof t5 == `string` ? t5 : null;
  }
  async getIdentityToken() {
    let e7 = await this.getActiveUserId(), t5 = await this._storage.get(U2(e7));
    return typeof t5 == `string` ? t5 : null;
  }
  async mightHaveServerCookies() {
    try {
      let e7 = await this.getActiveUserId(), t5 = R2.get(W2(e7));
      if (t5 !== void 0 && t5.length > 0) return true;
      let n5 = R2.get(W2(null));
      return n5 !== void 0 && n5.length > 0;
    } catch (e7) {
      console.error(e7);
    }
    return false;
  }
  async hasRefreshCredentials(e7, t5) {
    return await this.mightHaveServerCookies() || typeof e7 == `string` && typeof t5 == `string`;
  }
  tokenIsActive(e7) {
    if (!e7) return false;
    let t5 = w2.parse(e7);
    return t5 !== null && !t5.isExpired(30);
  }
  async destroyLocalState(e7) {
    let t5 = await this.getActiveUserId(), n5 = [this._storage.del(B(null)), this._storage.del(V(null)), this._storage.del(H2(null)), this._storage.del(U2(null)), this._storage.del(this.GUEST_CREDENTIAL_STORAGE_KEY), this._storage.del(z2)];
    t5 && n5.push(this._storage.del(B(t5)), this._storage.del(V(t5)), this._storage.del(H2(t5)), this._storage.del(U2(t5)), this.removeSavedUserId(t5)), await G2(n5), R2.remove(Yn(null)), R2.remove(Xn(null)), R2.remove(Zn(null)), R2.remove(W2(null)), t5 && (R2.remove(Yn(t5)), R2.remove(Xn(t5)), R2.remove(Zn(t5)), R2.remove(W2(t5))), e7?.reason && this.emit(`storage_cleared`, { reason: e7.reason });
  }
  async storeCustomerAccessToken(e7) {
    let t5 = await this.getActiveUserId();
    await this.storeCustomerAccessTokenForUser(t5, e7);
  }
  async storeCustomerAccessTokenForUser(e7, t5) {
    let n5 = B(e7), r4 = Yn(e7);
    if (typeof t5 == `string`) {
      let e8 = await this._storage.get(n5);
      await this._storage.put(n5, t5);
      let i5 = w2.parse(t5)?.expiration;
      this.writeCookie(r4, t5, { sameSite: `Strict`, secure: true, expires: i5 ? new Date(i5 * 1e3) : void 0 }), e8 !== t5 && this.emit(`token_stored`, { cookiesEnabled: this._isUsingServerCookies });
    } else {
      let e8 = await this._storage.get(n5);
      await this._storage.del(n5), R2.remove(r4), e8 !== null && this.emit(`token_cleared`, { reason: `set_with_non_string_value` });
    }
  }
  async storePrivyAccessToken(e7) {
    let t5 = await this.getActiveUserId();
    await this.storePrivyAccessTokenForUser(t5, e7);
  }
  async storePrivyAccessTokenForUser(e7, t5) {
    let n5 = V(e7);
    typeof t5 == `string` ? await this._storage.put(n5, t5) : await this._storage.del(n5);
  }
  async storeRefreshTokenForUser(e7, t5) {
    let n5 = H2(e7), r4 = Xn(e7), i5 = W2(e7);
    typeof t5 == `string` ? (await this._storage.put(n5, t5), this.writeCookie(i5, `t`, { sameSite: `Strict`, secure: true, expires: 30 }), this.writeCookie(r4, t5, { sameSite: `Strict`, secure: true, expires: 30 }), this.emit(`refresh_token_stored`, { cookiesEnabled: this._isUsingServerCookies })) : (await this._storage.del(n5), R2.remove(r4), R2.remove(i5), this.emit(`refresh_token_cleared`, { reason: `set_with_non_string_value` }));
  }
  async updateWithTokensResponse(e7) {
    let t5 = e7.user.id, n5 = (await G2([this.storeCustomerAccessTokenForUser(t5, e7.token), this.storePrivyAccessTokenForUser(t5, e7.privy_access_token), this.storeRefreshTokenForUser(t5, e7.refresh_token), this.storeIdentityTokenForUser(t5, e7.identity_token)])).filter((e8) => e8.status === `rejected`);
    if (n5.length > 0) {
      this.emit(`error_storing_tokens`, n5.map((e8) => String(e8.reason)).join(`, `));
      return;
    }
    let r4 = (await G2([this.storeCustomerAccessTokenForUser(null, e7.token), this.storePrivyAccessTokenForUser(null, e7.privy_access_token), this.storeRefreshTokenForUser(null, e7.refresh_token), this.storeIdentityTokenForUser(null, e7.identity_token)])).filter((e8) => e8.status === `rejected`);
    if (r4.length > 0) {
      this.emit(`error_storing_tokens`, r4.map((e8) => String(e8.reason)).join(`, `));
      return;
    }
    await this.storeActiveUserId(t5);
    let i5 = (await G2([this.processOAuthTokens(e7.oauth_tokens)])).filter((e8) => e8.status === `rejected`);
    i5.length > 0 && this.emit(`error_storing_tokens`, i5.map((e8) => String(e8.reason)).join(`, `));
  }
  async backfillLegacySession() {
    if (await this.getActiveUserId()) return;
    let [e7, t5, n5, r4] = await Promise.all([this._storage.get(B(null)), this._storage.get(V(null)), this._storage.get(H2(null)), this._storage.get(U2(null))]);
    if (typeof e7 != `string` || typeof n5 != `string`) return;
    let i5 = w2.parse(e7)?.subject;
    if (typeof i5 != `string` || i5.length === 0) return;
    let a6 = [this.storeCustomerAccessTokenForUser(i5, e7), this.storeRefreshTokenForUser(i5, n5)];
    typeof t5 == `string` && a6.push(this.storePrivyAccessTokenForUser(i5, t5)), typeof r4 == `string` && a6.push(this.storeIdentityTokenForUser(i5, r4));
    let o6 = (await G2(a6)).filter((e8) => e8.status === `rejected`);
    if (o6.length > 0) {
      this.emit(`error_storing_tokens`, o6.map((e8) => String(e8.reason)).join(`, `));
      return;
    }
    await this.storeActiveUserId(i5);
  }
  async processOAuthTokens(e7) {
    e7 && this.emit(`oauth_tokens_granted`, e7);
  }
  async storeIdentityToken(e7) {
    let t5 = await this.getActiveUserId();
    await this.storeIdentityTokenForUser(t5, e7);
  }
  async storeIdentityTokenForUser(e7, t5) {
    let n5 = U2(e7), r4 = Zn(e7);
    if (typeof t5 == `string`) {
      let e8 = await this._storage.get(n5);
      await this._storage.put(n5, t5);
      let i5 = w2.parse(t5)?.expiration;
      this.writeCookie(r4, t5, { sameSite: `Strict`, secure: true, expires: i5 ? new Date(i5 * 1e3) : void 0 }), e8 !== t5 && this.emit(`identity_token_stored`, { cookiesEnabled: this._isUsingServerCookies });
    } else {
      let e8 = await this._storage.get(n5);
      await this._storage.del(n5), R2.remove(r4), e8 !== null && this.emit(`identity_token_cleared`, { reason: `set_with_non_string_value` });
    }
  }
  async getOrCreateGuestCredential() {
    let e7 = await this._storage.get(this.GUEST_CREDENTIAL_STORAGE_KEY);
    if (e7 && typeof e7 == `string`) return e7;
    let t5 = base64url_exports.encode(crypto.getRandomValues(new Uint8Array(32)));
    return await this._storage.put(this.GUEST_CREDENTIAL_STORAGE_KEY, t5), t5;
  }
  async getActiveUserId() {
    let e7 = await this._storage.get(z2);
    return typeof e7 == `string` ? e7 : null;
  }
  async storeActiveUserId(e7) {
    let t5 = await this.getSavedUserIds();
    await this.storeSavedUserIds([...t5, e7]), await this._storage.put(z2, e7);
  }
  async getSavedUserIds() {
    let e7 = await this._storage.get(Jn);
    if (typeof e7 != `string`) return [];
    try {
      let t5 = JSON.parse(e7), n5 = Array.isArray(t5) ? t5.filter((e8) => typeof e8 == `string`) : [];
      return [...new Set(n5)];
    } catch {
      return [];
    }
  }
  async storeSavedUserIds(e7) {
    let t5 = [...new Set(e7)];
    t5.length > 0 ? await this._storage.put(Jn, JSON.stringify(t5)) : await this._storage.del(Jn), this._setStoredUsers && (this._hasEmittedStoredUsers = true, this._setStoredUsers({ users: t5.map((e8) => ({ id: e8 })) }));
  }
  async removeSavedUserId(e7) {
    let t5 = await this.getSavedUserIds();
    await this.storeSavedUserIds(t5.filter((t6) => t6 !== e7));
  }
  async switchActiveUserId(e7) {
    if (!(await this.getSavedUserIds()).includes(e7)) throw new E2({ code: `invalid_input`, error: `Cannot switch active user because the user ID is not saved on this device` });
    await this._storage.put(z2, e7);
  }
};
var er = (e7) => {
  let t5 = new AbortController();
  return setTimeout(() => t5.abort(), e7), t5.signal;
};
function tr(e7) {
  let t5 = new URLSearchParams();
  for (let n5 in e7) e7[n5] != null && t5.append(n5, String(e7[n5]));
  return Array.from(t5).length ? `?` + t5.toString() : ``;
}
var K2 = () => void 0;
var q2 = { NONE: -1 / 0, ERROR: 1, WARN: 2, INFO: 3, DEBUG: 1 / 0 };
var nr = ({ level: e7, logger: t5 }) => ({ get level() {
  return e7;
}, error: q2[e7] >= q2.ERROR ? t5.error : K2, warn: q2[e7] >= q2.WARN ? t5.warn : K2, info: q2[e7] >= q2.INFO ? t5.info : K2, debug: q2[e7] >= q2.DEBUG ? t5.debug : K2 });
function J(e7) {
  return new Promise((t5) => {
    setTimeout(() => {
      t5();
    }, e7);
  });
}
var rr = (e7) => 3 ** e7 * 500;
var ir = [408, 409, 425, 500, 502, 503, 504];
function ar(e7) {
  return async (t5, n5) => {
    let r4 = t5 instanceof Request ? t5 : new Request(t5, n5), i5, a6 = false, o6;
    for (let t6 = 0; t6 <= 3; t6++) {
      let s5 = new Headers(n5?.headers ?? r4.headers);
      s5.set(`privy-retry-attempt`, String(t6));
      try {
        let t7 = await e7(r4.clone(), { ...n5, headers: s5 });
        if (!ir.includes(t7.status)) return t7;
        o6 = t7, a6 = false;
      } catch (e8) {
        i5 === void 0 && (i5 = e8), a6 = true;
      }
      t6 < 3 && await J(rr(t6));
    }
    if (a6) throw i5;
    return o6;
  };
}
var or = `privy:caid`;
var sr = class {
  baseUrl;
  callbacks;
  appId;
  appClientId;
  logger;
  session;
  _config;
  _analyticsId;
  _storage;
  _sdkVersion = `js-sdk-core:0.72.1`;
  _fetch;
  nativeAppIdentifier;
  _crypto;
  isMultiUserModeEnabled;
  _cache = /* @__PURE__ */ new Map();
  constructor(e7) {
    this.logger = nr({ level: e7.logger?.level ?? e7.logLevel ?? `ERROR`, logger: e7.logger ?? console }), this._storage = e7.storage, this._crypto = e7.crypto, this._analyticsId = null, this._getOrGenerateClientAnalyticsId(), this.baseUrl = e7.baseUrl ?? `https://auth.privy.io`, this.appId = e7.appId, this.appClientId = e7.appClientId, this._sdkVersion = e7.sdkVersion ?? this._sdkVersion, this.callbacks = e7.callbacks, this.nativeAppIdentifier = e7.nativeAppIdentifier, this.isMultiUserModeEnabled = e7.isMultiUserModeEnabled, this.session = new $n({ storage: this._storage, isUsingServerCookies: false, cookieWriteBehavior: e7.cookieWriteBehavior, appId: e7.appId, setStoredUsers: e7.callbacks?.setStoredUsers }), this._fetch = ar(globalThis.fetch), this.session.on(`error_storing_tokens`, (e8) => {
      this.createAnalyticsEvent(`error_updating_tokens_in_storage`, { reason: e8 });
    });
  }
  setCallbacks(e7) {
    this.callbacks = { ...this.callbacks, ...e7 }, this.session.setStoredUsersCallback(this.callbacks?.setStoredUsers);
  }
  get isReady() {
    return !!this._config;
  }
  get config() {
    return this._config;
  }
  get caid() {
    return this._analyticsId;
  }
  async _initialize() {
    if (this.isReady) {
      this.callbacks?.setIsReady?.(true);
      return;
    }
    if (!await this.isStorageAccessible()) throw new E2({ code: `storage_error`, error: `Unable to access storage` });
    this._config = await this.getAppConfig(), this._config?.custom_api_url && (this.baseUrl = this._config.custom_api_url, this.session.isUsingServerCookies = true), this.isMultiUserModeEnabled && await this.session.backfillLegacySession(), this.callbacks?.setIsReady?.(true), this._sdkVersion.startsWith(`react-auth:`) || this.createAnalyticsEvent(`sdk_initialize`, {});
  }
  getPath(e7, { params: t5, query: n5 }) {
    return `${this.baseUrl}${ge(e7.path, t5)}${tr(n5)}`;
  }
  async fetchWithoutAuthentication(e7, t5) {
    if (!this.isMultiUserModeEnabled) throw new E2({ code: `invalid_input`, error: `Unauthenticated requests require sessions.mode to be set to "multi-user"` });
    return this.fetch(e7, { ...t5, onRequest: this._beforeRequestWithoutAuth.bind(this) });
  }
  async fetchForLogin(e7, t5) {
    return this.isMultiUserModeEnabled ? this.fetchWithoutAuthentication(e7, t5) : this.fetch(e7, t5);
  }
  async fetch(e7, { body: t5, params: n5, query: r4, headers: i5, onRequest: a6 = this._beforeRequest.bind(this) }) {
    let o6 = new Request(this.getPath(e7, { params: n5, query: r4 }), { method: e7.method, body: JSON.stringify(t5), headers: i5 }), s5 = await a6(o6), c5 = await this._fetch(o6, s5), l6 = await c5.json();
    if (c5.status > 299) throw new T2({ ...l6, status: c5.status });
    return l6;
  }
  async fetchRaw(e7, { body: t5, params: n5, query: r4, headers: i5, onRequest: a6 = this._beforeRequest.bind(this) }) {
    let o6 = new Request(this.getPath(e7, { params: n5, query: r4 }), { method: e7.method, body: JSON.stringify(t5), headers: i5 }), s5 = await a6(o6), c5 = await this._fetch(o6, s5);
    if (c5.status > 299) throw new T2({ ...await c5.json().catch(() => ({})), status: c5.status });
    return c5;
  }
  async _beforeRequestWithoutInitialize(e7) {
    let t5 = await this.session.getPrivyAccessToken() ?? await this.session.getCustomerAccessToken(), n5 = new Headers(e7.headers);
    n5.set(`privy-app-id`, this.appId), this.appClientId && n5.set(`privy-client-id`, this.appClientId), n5.set(`privy-client`, this._sdkVersion), t5 && n5.set(`Authorization`, `Bearer ${t5}`), n5.set(`Content-Type`, `application/json`), n5.set(`Accept`, `application/json`);
    let r4 = await this._getOrGenerateClientAnalyticsId();
    return r4 && n5.set(`privy-ca-id`, r4), this.nativeAppIdentifier && n5.set(`x-native-app-identifier`, this.nativeAppIdentifier), { signal: er(2e4), headers: n5, credentials: `include` };
  }
  async beforeRequestWithoutRefresh(e7) {
    return await this._initialize(), this._beforeRequestWithoutInitialize(e7);
  }
  async _beforeRequestWithoutAuth(e7) {
    await this._initialize();
    let t5 = new Headers(e7.headers);
    t5.set(`privy-app-id`, this.appId), this.appClientId && t5.set(`privy-client-id`, this.appClientId), t5.set(`privy-client`, this._sdkVersion), t5.set(`Content-Type`, `application/json`), t5.set(`Accept`, `application/json`);
    let n5 = await this._getOrGenerateClientAnalyticsId();
    return n5 && t5.set(`privy-ca-id`, n5), this.nativeAppIdentifier && t5.set(`x-native-app-identifier`, this.nativeAppIdentifier), { signal: er(2e4), headers: t5 };
  }
  async _beforeRequest(e7) {
    return await this._initialize(), await this.getAccessTokenInternal(), this.beforeRequestWithoutRefresh(e7);
  }
  async getAppConfig() {
    return await this.fetch(n, { params: { app_id: this.appId }, onRequest: this._beforeRequestWithoutInitialize.bind(this) });
  }
  async _getOrGenerateClientAnalyticsId() {
    if (this._analyticsId) return this._analyticsId;
    try {
      let e7 = await this._storage.get(or);
      if (typeof e7 == `string` && e7.length > 0) return this._analyticsId = e7, e7;
    } catch (e7) {
      this.logger.error(`Unable to load clientId`, e7);
    }
    try {
      this._analyticsId = this._crypto.randomUUID();
    } catch (e7) {
      this.logger.error(`Unable to generate uuidv4`, e7);
    }
    if (this._analyticsId) {
      try {
        await this._storage.put(or, this._analyticsId);
      } catch (e7) {
        this.logger.error(`Unable to store clientId: ${this._analyticsId}`, e7);
      }
      return this._analyticsId;
    }
  }
  async destroyClientAnalyticsId() {
    try {
      return await this._storage.del(or);
    } catch (e7) {
      this.logger.error(`Unable to delete clientId`, e7);
    }
  }
  async createAnalyticsEvent(e7, n5) {
    try {
      await this.fetch(e, { body: { event_name: e7, client_id: await this._getOrGenerateClientAnalyticsId(), payload: n5 }, onRequest: this.beforeRequestWithoutRefresh.bind(this) });
    } catch {
    }
  }
  async refreshSession(e7 = false) {
    if (!await this.isStorageAccessible()) throw new E2({ code: `storage_error`, error: `Unable to access storage` });
    let t5 = await this.session.getRefreshToken() ?? void 0, n5 = t5 ?? `key`, r4 = this._cache.get(n5);
    if (r4) return this.logger.debug(`[privy:refresh] found in-flight session refresh request, deduping`), await r4;
    let i5 = this._refreshSession(t5, e7);
    this._cache.set(n5, i5);
    try {
      return await i5;
    } finally {
      this._cache.delete(n5);
    }
  }
  async _refreshSession(e7, t5) {
    let n5 = await this.session.getCustomerAccessToken();
    if (!await this.session.hasRefreshCredentials(n5, e7 ?? null)) throw this.logger.debug(`[privy:refresh] missing tokens, skipping request`), await this._initialize(), new T2({ code: t3.MISSING_OR_INVALID_TOKEN, error: `No tokens found in storage`, status: 401 });
    try {
      this.logger.debug(`[privy:refresh] fetching: ${_e.path}`);
      let n6 = await this.fetch(_e, { body: { refresh_token: e7 }, onRequest: this.beforeRequestWithoutRefresh.bind(this) }), r4 = n6.session_update_action;
      return this.logger.debug(`[privy:refresh] response: ${r4}`), r4 === `set` && (await this.session.updateWithTokensResponse(n6), this.logger.debug(`[privy:refresh] tokens stored`)), r4 === `clear` && (await this.session.destroyLocalState(), this.logger.debug(`[privy:refresh] tokens cleared`), !t5 && this.callbacks?.setUser?.(null)), r4 === `ignore` && (n6.token && (await this.session.storeCustomerAccessToken(n6.token), this.logger.debug(`[privy:refresh] token stored (CAT)`)), n6.privy_access_token && (await this.session.storePrivyAccessToken(n6.privy_access_token), this.logger.debug(`[privy:refresh] token stored (PAT)`)), n6.identity_token && (this.logger.debug(`[privy:refresh] token stored (IDT)`), await this.session.storeIdentityToken(n6.identity_token))), this.logger.debug(`[privy:refresh] returning response`), !t5 && this.callbacks?.setUser?.(n6.user), n6;
    } catch (e8) {
      throw this.logger.debug(`[privy:refresh] error: ${e8.message ?? `unknown error`}`), e8 instanceof T2 && e8.code === t3.MISSING_OR_INVALID_TOKEN && (await this.session.destroyLocalState(), !t5 && this.callbacks?.setUser?.(null)), e8;
    }
  }
  async getAccessToken() {
    let [e7, t5] = await Promise.all([this.session.getCustomerAccessToken(), this.session.getRefreshToken()]);
    if (e7 && !this.session.tokenIsActive(e7) && await this.session.hasRefreshCredentials(e7, t5)) {
      let t6 = await this.refreshSession(), n5 = await this.session.getCustomerAccessToken();
      return t6.token || this.logger.debug(`[privy:getAccessToken] expected token received null`), t6.token === e7 && this.logger.debug(`[privy:getAccessToken] expected new token in response received existing`), n5 === e7 && this.logger.debug(`[privy:getAccessToken] expected new token in storage received existing`), t6.token ?? n5;
    }
    return e7 && !this.session.tokenIsActive(e7) ? (this.logger.debug(`[privy:getAccessToken] unable to refresh inactive token`), this.callbacks?.setUser?.(null), await this.session.destroyLocalState(), null) : e7;
  }
  async getAccessTokenInternal() {
    let e7 = await this.getAccessToken();
    return await this.session.getPrivyAccessToken() ?? e7;
  }
  async getIdentityToken() {
    return await this.session.getIdentityToken();
  }
  async isStorageAccessible() {
    try {
      let e7 = `privy:__storage__test-${this._crypto.randomUUID()}`, t5 = `blobby`;
      await this._storage.put(e7, t5);
      let n5 = await this._storage.get(e7);
      return await this._storage.del(e7), n5 === t5;
    } catch (e7) {
      return this.logger.error(e7), false;
    }
  }
};
var cr = class {
  _privyInternal;
  _embedded;
  _isMultiUserModeEnabled;
  constructor(e7, t5, n5) {
    this._privyInternal = e7, this._embedded = t5, this._isMultiUserModeEnabled = n5;
  }
  async get() {
    let { user: e7 } = await this._privyInternal.refreshSession();
    return { user: e7 };
  }
  async acceptTerms() {
    return { user: await this._privyInternal.fetch(Ae, {}) };
  }
  async refreshUser() {
    let { user: e7, identity_token: t5 } = await this._privyInternal.fetch(Ye, {});
    return await this._privyInternal.session.storeIdentityToken(t5), this._privyInternal.callbacks?.setUser?.(e7), { user: e7 };
  }
  async switchActiveUser(e7) {
    if (!this._isMultiUserModeEnabled) throw new E2({ code: `invalid_input`, error: `User switching requires sessions.mode to be set to "multi-user"` });
    await this._privyInternal.session.switchActiveUserId(e7.userId);
    try {
      this._embedded.reload();
      let { user: t5 } = await this._privyInternal.refreshSession(true);
      if (t5.id !== e7.userId) throw new E2({ code: `invalid_input`, error: `Cannot switch active user because the refreshed user did not match the requested user ID` });
      return this._privyInternal.callbacks?.setUser?.(t5), { user: t5 };
    } catch (e8) {
      throw await this._privyInternal.session.destroyLocalState(), this._privyInternal.callbacks?.setUser?.(null), e8;
    }
  }
};
var Y2 = (e7) => e7.type === `wallet` && e7.wallet_client_type === `privy` && e7.connector_type === `embedded`;
var lr = (e7) => e7 ? e7.linked_accounts.filter(Y2).filter((e8) => e8.chain_type === `ethereum`).sort((e8, t5) => e8.wallet_index - t5.wallet_index) : [];
var X2 = (e7) => lr(e7).find((e8) => e8.wallet_index === 0) ?? null;
var dr = (e7) => e7 ? e7.linked_accounts.filter(Y2).filter((e8) => e8.chain_type === `solana`).sort((e8, t5) => e8.wallet_index - t5.wallet_index) : [];
var fr = (e7) => dr(e7).find((e8) => e8.wallet_index === 0) ?? null;
var pr = (e7, t5) => t5 === `off` || lr(e7).length > 0 ? false : e7.linked_accounts.filter((e8) => e8.type === `wallet` && e8.chain_type === `ethereum`).length > 0 ? t5 === `all-users` : true;
var mr = (e7, t5) => t5 === `off` || dr(e7).length > 0 ? false : e7.linked_accounts.filter((e8) => e8.type === `wallet` && e8.chain_type === `solana`).length > 0 ? t5 === `all-users` : true;
var hr = (e7, t5) => ({ ...e7, is_new_user: t5.is_new_user, oauth_tokens: t5.oauth_tokens });
var Z2 = async (e7, t5, n5) => {
  let r4 = pr(t5.user, n5?.ethereum?.createOnLogin ?? `off`), i5 = mr(t5.user, n5?.solana?.createOnLogin ?? `off`);
  if (r4 && i5) {
    let n6 = await e7.create({ recoveryMethod: `privy`, skipCallbacks: true }), r5 = await e7.createSolana({ ethereumAccount: X2(n6.user) ?? void 0 });
    return hr(r5, t5);
  }
  if (r4) {
    let n6 = await e7.create({ recoveryMethod: `privy`, solanaAccount: fr(t5.user) ?? void 0 });
    return hr(n6, t5);
  }
  if (i5) {
    let n6 = await e7.createSolana({ ethereumAccount: X2(t5.user) ?? void 0 });
    return hr(n6, t5);
  }
  return t5;
};
var gr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async syncWithToken(e7, t5, n5) {
    let r4 = await this._privyInternal.fetchForLogin(o, { body: { token: e7, mode: n5 } });
    await this._privyInternal.session.updateWithTokensResponse(r4);
    let i5 = await Z2(this._embedded, r4, t5?.embedded);
    return this._privyInternal.callbacks?.setUser?.(i5.user), i5;
  }
  async linkWithToken(e7) {
    await this._privyInternal.fetch(s, { body: { token: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
};
var _r = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async sendCode(e7, t5) {
    return this._privyInternal.fetch(X, { body: { email: e7, token: t5 } });
  }
  async loginWithCode(e7, t5, n5, r4) {
    let i5 = await this._privyInternal.fetchForLogin(Y, { body: { email: e7, code: t5, mode: n5 } });
    await this._privyInternal.session.updateWithTokensResponse(i5);
    let a6 = await Z2(this._embedded, i5, r4?.embedded);
    return this._privyInternal.callbacks?.setUser?.(a6.user), a6;
  }
  async linkWithCode(e7, t5) {
    await this._privyInternal.fetch(Z, { body: { email: e7, code: t5 } });
    let n5 = await this._privyInternal.refreshSession();
    return { user: n5.user, identity_token: n5.identity_token };
  }
  async updateEmail({ oldEmailAddress: e7, newEmailAddress: t5, code: n5 }) {
    await this._privyInternal.fetch($, { body: { oldAddress: e7, newAddress: t5, code: n5 } });
    let r4 = await this._privyInternal.refreshSession();
    return { user: r4.user, identity_token: r4.identity_token };
  }
  async unlink(e7) {
    await this._privyInternal.fetch(Q, { body: { address: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
};
var vr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async initializeAuth({ relyingParty: e7, redirectUrl: t5, token: n5 }) {
    return await this._privyInternal.fetch(c, { body: { relying_party: e7, redirect_url: t5, token: n5 } });
  }
  async getFarcasterStatus({ channel_token: e7 }) {
    return await this._privyInternal.fetch(f, { headers: { "farcaster-channel-token": e7 } });
  }
  async authenticate({ channel_token: e7, message: t5, signature: n5, fid: r4, mode: i5 }, a6) {
    let o6 = await this._privyInternal.fetchForLogin(l, { body: { channel_token: e7, message: t5, signature: n5, fid: r4, mode: i5 } });
    await this._privyInternal.session.updateWithTokensResponse(o6);
    let s5 = await Z2(this._embedded, o6, a6?.embedded);
    return this._privyInternal.callbacks?.setUser?.(s5.user), s5;
  }
  async link({ channel_token: e7, message: t5, signature: n5, fid: r4 }) {
    await this._privyInternal.fetch(u, { body: { channel_token: e7, message: t5, signature: n5, fid: r4 } });
    let i5 = await this._privyInternal.refreshSession();
    return { user: i5.user, identity_token: i5.identity_token };
  }
  async unlink({ fid: e7 }) {
    await this._privyInternal.fetch(d, { body: { fid: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
};
var yr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async initializeAuth() {
    return await this._privyInternal.fetch(p, { body: {} });
  }
  async authenticate({ message: e7, signature: t5, fid: n5 }, r4) {
    let i5 = await this._privyInternal.fetchForLogin(m, { body: { message: e7, signature: t5, fid: n5 } });
    await this._privyInternal.session.updateWithTokensResponse(i5);
    let a6 = await Z2(this._embedded, i5, r4?.embedded);
    return this._privyInternal.callbacks?.setUser?.(a6.user), a6;
  }
};
var br = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async create(e7) {
    let t5 = await this._privyInternal.session.getOrCreateGuestCredential(), n5 = await this._privyInternal.fetch(_, { body: { guest_credential: t5 } });
    await this._privyInternal.session.updateWithTokensResponse(n5);
    let r4 = await Z2(this._embedded, n5, e7?.embedded);
    return this._privyInternal.callbacks?.setUser?.(r4.user), r4;
  }
};
var Q2 = `privy:state_code`;
var $2 = `privy:code_verifier`;
async function xr(e7, t5) {
  let n5 = await t5(`SHA-256`, new TextEncoder().encode(e7));
  return new Uint8Array(n5);
}
function Sr(e7) {
  return crypto.getRandomValues(new Uint8Array(e7));
}
function Cr() {
  return base64url_exports.encode(Sr(36));
}
function wr() {
  return Cr();
}
async function Tr({ codeVerifier: e7, method: t5 = `S256`, digest: n5 }) {
  if (t5 == `S256`) {
    let t6 = await xr(e7, n5);
    return base64url_exports.encode(t6);
  } else return e7;
}
var Er = class {
  _privyInternal;
  _storage;
  _crypto;
  _embedded;
  constructor(e7, t5, n5, r4) {
    this._privyInternal = e7, this._embedded = t5, this._storage = n5, this._crypto = r4;
  }
  async generateURL(e7, t5) {
    let n5 = Cr(), r4 = wr(), i5 = await Tr({ codeVerifier: n5, digest: this._crypto.digest });
    return await Promise.all([this._storage.put($2, n5), this._storage.put(Q2, r4)]), this._privyInternal.fetchForLogin(L, { body: { redirect_to: t5, provider: e7, code_challenge: i5, state_code: r4 } });
  }
  async loginWithCode(e7, t5, n5, r4, i5, a6) {
    let [o6, s5] = await Promise.all([this._storage.get($2), this._storage.get(Q2)]);
    if (s5 !== t5) throw this._privyInternal.createAnalyticsEvent(`possible_phishing_attempt`, { flow: `oauth`, provider: n5, storedStateCode: s5 ?? ``, returnedStateCode: t5 ?? `` }), new E2({ code: `pkce_state_code_mismatch`, error: `Unexpected auth flow. This may be a phishing attempt.` });
    let c5 = await this._privyInternal.fetchForLogin(I, { body: { authorization_code: e7, code_type: r4, state_code: s5, code_verifier: o6, mode: i5 } });
    await this._privyInternal.session.updateWithTokensResponse(c5);
    let l6 = await Z2(this._embedded, c5, a6?.embedded);
    return await Promise.all([this._storage.del($2), this._storage.del(Q2)]), this._privyInternal.callbacks?.setUser?.(l6.user), l6;
  }
  async linkWithCode(e7, t5, n5, r4) {
    let [i5, a6] = await Promise.all([this._storage.get($2), this._storage.get(Q2)]);
    if (a6 !== t5) throw this._privyInternal.createAnalyticsEvent(`possible_phishing_attempt`, { flow: `oauth`, provider: n5, storedStateCode: a6 ?? ``, returnedStateCode: t5 ?? `` }), new E2({ code: `pkce_state_code_mismatch`, error: `Unexpected auth flow. This may be a phishing attempt.` });
    let o6 = await this._privyInternal.fetch(R, { body: { authorization_code: e7, code_type: r4, state_code: a6, code_verifier: i5 } });
    await this._privyInternal.session.processOAuthTokens(o6.oauth_tokens);
    let s5 = await this._privyInternal.refreshSession();
    return await Promise.all([this._storage.del($2), this._storage.del(Q2)]), { user: s5.user, identity_token: s5.identity_token };
  }
  async unlink(e7, t5) {
    await this._privyInternal.fetch(z, { body: { provider: e7, subject: t5 } });
    let n5 = await this._privyInternal.refreshSession();
    return { user: n5.user, identity_token: n5.identity_token };
  }
};
var Dr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async generateRegistrationOptions(e7) {
    return await this._privyInternal.fetch(q, { body: { relying_party: e7 } });
  }
  async generateAuthenticationOptions(e7) {
    return await this._privyInternal.fetch(G, { body: { relying_party: e7 } });
  }
  async generateSignupOptions(e7) {
    return await this._privyInternal.fetch(K, { body: { relying_party: e7 } });
  }
  async loginWithPasskey(e7, t5, n5, r4) {
    let i5 = await this._privyInternal.fetchForLogin(U, { body: { relying_party: n5, challenge: t5, authenticator_response: this._transformAuthenticationResponseToSnakeCase(e7) } });
    await this._privyInternal.session.updateWithTokensResponse(i5);
    let a6 = await Z2(this._embedded, i5, r4?.embedded);
    return this._privyInternal.callbacks?.setUser?.(a6.user), a6;
  }
  async signupWithPasskey(e7, t5, n5) {
    let r4 = await this._privyInternal.fetchForLogin(W, { body: { relying_party: t5, authenticator_response: this._transformRegistrationResponseToSnakeCase(e7) } });
    await this._privyInternal.session.updateWithTokensResponse(r4);
    let i5 = await Z2(this._embedded, r4, n5?.embedded);
    return this._privyInternal.callbacks?.setUser?.(i5.user), i5;
  }
  async linkWithPasskey(e7, t5) {
    await this._privyInternal.fetch(H, { body: { relying_party: t5, authenticator_response: this._transformRegistrationResponseToSnakeCase(e7) } });
    let n5 = await this._privyInternal.refreshSession();
    return { user: n5.user, identity_token: n5.identity_token };
  }
  _transformRegistrationResponseToSnakeCase(e7) {
    return { type: e7.type, id: e7.id, raw_id: e7.rawId, response: { client_data_json: e7.response.clientDataJSON, attestation_object: e7.response.attestationObject, authenticator_data: e7.response.authenticatorData || void 0, transports: e7.response.transports || void 0, public_key: e7.response.publicKey || void 0, public_key_algorithm: e7.response.publicKeyAlgorithm || void 0 }, authenticator_attachment: e7.authenticatorAttachment || void 0, client_extension_results: { app_id: e7.clientExtensionResults.appid || void 0, cred_props: e7.clientExtensionResults.credProps || void 0, hmac_create_secret: e7.clientExtensionResults.hmacCreateSecret || void 0 } };
  }
  _transformAuthenticationResponseToSnakeCase(e7) {
    return { type: e7.type, id: e7.id, raw_id: e7.rawId, response: { signature: e7.response.signature, client_data_json: e7.response.clientDataJSON, authenticator_data: e7.response.authenticatorData, user_handle: e7.response.userHandle || void 0 }, authenticator_attachment: e7.authenticatorAttachment || void 0, client_extension_results: { app_id: e7.clientExtensionResults.appid || void 0, cred_props: e7.clientExtensionResults.credProps || void 0, hmac_create_secret: e7.clientExtensionResults.hmacCreateSecret || void 0 } };
  }
};
var Or = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async sendCode(e7, t5) {
    return this._privyInternal.fetch(te, { body: { phoneNumber: e7, token: t5 } });
  }
  async loginWithCode(e7, t5, n5, r4) {
    let i5 = await this._privyInternal.fetchForLogin(ee, { body: { phoneNumber: e7, code: t5, mode: n5 } });
    await this._privyInternal.session.updateWithTokensResponse(i5);
    let a6 = await Z2(this._embedded, i5, r4?.embedded);
    return this._privyInternal.callbacks?.setUser?.(a6.user), a6;
  }
  async linkWithCode(e7, t5) {
    await this._privyInternal.fetch(ne, { body: { phoneNumber: e7, code: t5 } });
    let n5 = await this._privyInternal.refreshSession();
    return { user: n5.user, identity_token: n5.identity_token };
  }
  async updatePhone({ oldPhoneNumber: e7, newPhoneNumber: t5, code: n5 }) {
    await this._privyInternal.fetch(ie, { body: { old_phone_number: e7, new_phone_number: t5, code: n5 } });
    let r4 = await this._privyInternal.refreshSession();
    return { user: r4.user, identity_token: r4.identity_token };
  }
  async unlink(e7) {
    await this._privyInternal.fetch(re, { body: { phoneNumber: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
};
var kr = class {
  _privyInternal;
  _embedded;
  _wallet = void 0;
  _preparedMessage;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async unlinkWallet(e7) {
    await this._privyInternal.fetch(Te, { body: { address: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
  async linkWithSiwe(e7, t5, n5) {
    let r4 = t5 || this._wallet, i5 = n5 || this._preparedMessage;
    if (!r4) throw Error(`A wallet must be provided in the init step or as an argument to linkWithSiwe`);
    if (!i5) throw Error(`A message must be generated and signed before being used to link a wallet to privy`);
    await this._privyInternal.fetch(Ce, { body: { message: i5, signature: e7, chainId: r4.chainId, walletClientType: r4.walletClientType ?? null, connectorType: r4.connectorType ?? null } });
    let a6 = await this._privyInternal.refreshSession();
    return { user: a6.user, identity_token: a6.identity_token };
  }
  async loginWithSiwe(e7, t5, n5, r4, i5) {
    let a6 = t5 || this._wallet, o6 = n5 || this._preparedMessage;
    if (!a6) throw Error(`A wallet must be provided in the init step or as an argument to loginWithSiwe`);
    if (!o6) throw Error(`A message must be generated and signed before being used to login to privy with a wallet`);
    let s5 = await this._privyInternal.fetchForLogin(Se, { body: { signature: e7, message: o6, chainId: a6.chainId, walletClientType: a6.walletClientType ?? null, connectorType: a6.connectorType ?? null, mode: r4 } });
    await this._privyInternal.session.updateWithTokensResponse(s5);
    let c5 = await Z2(this._embedded, s5, i5?.embedded);
    return this._privyInternal.callbacks?.setUser?.(c5.user), c5;
  }
  async init(e7, t5, n5) {
    this._wallet = e7;
    let { nonce: r4 } = await this._privyInternal.fetch(xe, { body: { address: e7.address } }), i5 = Ar({ chainId: e7.chainId.toString().replace(`eip155:`, ``), address: e7.address, issuedAt: (/* @__PURE__ */ new Date()).toISOString(), statement: `By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.`, domain: t5, nonce: r4, uri: n5 });
    return this._preparedMessage = i5, { nonce: r4, message: i5 };
  }
};
function Ar(e7) {
  return `${e7.domain} wants you to sign in with your Ethereum account:
${e7.address}

${e7.statement}

URI: ${e7.uri}
Version: 1
Chain ID: ${e7.chainId}
Nonce: ${e7.nonce}
Issued At: ${e7.issuedAt}
Resources:
- https://privy.io`;
}
var jr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async unlink({ address: e7 }) {
    await this._privyInternal.fetch(ke, { body: { address: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
  async link({ message: e7, signature: t5, walletClientType: n5, connectorType: r4 }) {
    await this._privyInternal.fetch(Oe, { body: { message: e7, signature: t5, walletClientType: n5 ?? null, connectorType: r4 ?? null } });
    let i5 = await this._privyInternal.refreshSession();
    return { user: i5.user, identity_token: i5.identity_token };
  }
  async login({ mode: e7, message: t5, signature: n5, walletClientType: r4, connectorType: i5, opts: a6 }) {
    let o6 = await this._privyInternal.fetchForLogin(De, { body: { signature: n5, message: t5, walletClientType: r4 ?? null, connectorType: i5 ?? null, mode: e7 } });
    await this._privyInternal.session.updateWithTokensResponse(o6);
    let s5 = await Z2(this._embedded, o6, a6?.embedded);
    return this._privyInternal.callbacks?.setUser?.(s5.user), s5;
  }
  async fetchNonce({ address: e7 }) {
    let { nonce: t5 } = await this._privyInternal.fetch(Ee, { body: { address: e7 } });
    return { nonce: t5 };
  }
};
var Mr = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async link(e7, t5, n5, r4) {
    await this._privyInternal.fetch(we, { body: { message: e7, signature: t5, smart_wallet_type: n5, smart_wallet_version: r4 } });
    let i5 = await this._privyInternal.refreshSession();
    return { user: i5.user, identity_token: i5.identity_token };
  }
  async init(e7) {
    let { nonce: t5 } = await this._privyInternal.fetch(xe, { body: { address: e7.address } });
    return { nonce: t5, message: Nr({ chainId: e7.chainId.toString().replace(`eip155:`, ``), address: e7.address, issuedAt: (/* @__PURE__ */ new Date()).toISOString(), statement: `By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.`, domain: `privy.io`, uri: `https://auth.privy.io`, nonce: t5 }) };
  }
};
function Nr(e7) {
  return `${e7.domain} wants you to sign in with your Ethereum account:
${e7.address}

${e7.statement}

URI: ${e7.uri}
Version: 1
Chain ID: ${e7.chainId}
Nonce: ${e7.nonce}
Issued At: ${e7.issuedAt}
Resources:
- https://privy.io`;
}
var Pr = class {
  _privyInternal;
  _embedded;
  constructor(e7, t5) {
    this._privyInternal = e7, this._embedded = t5;
  }
  async authenticate({ telegramWebAppData: e7, telegramAuthResult: t5, captchaToken: n5, mode: r4 = `login-or-sign-up` }, i5) {
    let a6 = await this._privyInternal.fetchForLogin(je, { body: { telegram_web_app_data: e7, telegram_auth_result: t5, captcha_token: n5, mode: r4 } });
    await this._privyInternal.session.updateWithTokensResponse(a6);
    let o6 = await Z2(this._embedded, a6, i5?.embedded);
    return this._privyInternal.callbacks?.setUser?.(o6.user), o6;
  }
  async link({ telegramWebAppData: e7, telegramAuthResult: t5, captchaToken: n5 }) {
    await this._privyInternal.fetch(Me, { body: { telegram_web_app_data: e7, telegram_auth_result: t5, captcha_token: n5 } });
    let r4 = await this._privyInternal.refreshSession();
    return { user: r4.user, identity_token: r4.identity_token };
  }
  async unlink({ telegramUserId: e7 }) {
    await this._privyInternal.fetch(Ne, { body: { telegram_user_id: e7 } });
    let t5 = await this._privyInternal.refreshSession();
    return { user: t5.user, identity_token: t5.identity_token };
  }
};
var Fr = class {
  _privyInternal;
  _mfa;
  customProvider;
  phone;
  email;
  oauth;
  siwe;
  siws;
  smartWallet;
  passkey;
  farcaster;
  farcasterV2;
  guest;
  telegram;
  constructor(e7, t5, n5, r4, i5) {
    this._privyInternal = e7, this._mfa = i5, this.customProvider = new gr(this._privyInternal, t5), this.phone = new Or(this._privyInternal, t5), this.email = new _r(this._privyInternal, t5), this.oauth = new Er(this._privyInternal, t5, n5, r4), this.guest = new br(this._privyInternal, t5), this.siwe = new kr(this._privyInternal, t5), this.siws = new jr(this._privyInternal, t5), this.smartWallet = new Mr(this._privyInternal), this.passkey = new Dr(this._privyInternal, t5), this.farcaster = new vr(this._privyInternal, t5), this.farcasterV2 = new yr(this._privyInternal, t5), this.telegram = new Pr(this._privyInternal, t5);
  }
  async logout(e7) {
    let t5 = await this._prepareSessionRevocation();
    await Promise.all([this._privyInternal.session.destroyLocalState({ reason: `logout` }), this._privyInternal.destroyClientAnalyticsId(), e7?.userId && this._mfa.clearMfa({ userId: e7.userId })]), this._privyInternal.callbacks?.setUser?.(null), t5 && this._privyInternal.fetch(ve, { body: { refresh_token: t5.refresh_token }, onRequest: () => t5.init }).catch(() => {
      console.warn(`Error destroying session`);
    });
  }
  async _prepareSessionRevocation() {
    try {
      let e7 = await this._privyInternal.beforeRequestWithoutRefresh(new Request(this._privyInternal.baseUrl));
      return { refresh_token: await this._privyInternal.session.getRefreshToken() ?? void 0, init: e7 };
    } catch {
      console.warn(`Error preparing session revocation`);
      return;
    }
  }
};
var Ir = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async initOnRampSession(e7) {
    return await this._privyInternal.fetch(r, { body: e7 });
  }
  async getStatus(e7) {
    return await this._privyInternal.fetch(i, { query: { partnerUserId: e7 } });
  }
};
var Lr = { prod: { url: `https://api.moonpay.com/v1`, key: `pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL` }, sandbox: { url: `https://api.moonpay.com/v1`, key: `pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI` } };
var Rr = /* @__PURE__ */ new Set([y.id, t.id, a2.id, C2.id, r2.id, l2.id, ae2.id]);
var zr = /* @__PURE__ */ new Set([y.id, t.id, x.id, a2.id, C2.id, r2.id]);
function Br(e7, t5) {
  switch (t5) {
    case `native-currency`:
      return Rr.has(e7);
    case `USDC`:
      return zr.has(e7);
    default:
      return console.warn(`Unknown asset passed to MoonPay Onramp`), false;
  }
}
function Vr(e7, t5) {
  switch (e7) {
    case t.id:
      return t5 === `native-currency` ? `ETH_ARBITRUM` : `USDC_ARBITRUM`;
    case r2.id:
      return t5 === `native-currency` ? `AVAX_CCHAIN` : `USDC_CCHAIN`;
    case a2.id:
      return t5 === `native-currency` ? `ETH_BASE` : `USDC_BASE`;
    case l2.id:
      return `CELO_CELO`;
    case C2.id:
      return t5 === `native-currency` ? `MATIC_POLYGON` : `USDC_POLYGON`;
    case ae2.id:
      return `MON_MON`;
    case y.id:
      return t5 === `native-currency` ? `ETH_ETHEREUM` : `USDC_ETHEREUM`;
    default:
      return console.warn(`Chain ${e7} not supported by Moonpay, defaulting to Ethereum mainnet`), `ETH_ETHEREUM`;
  }
}
var Ur = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async sign(e7) {
    return await this._privyInternal.fetch(Pe, { body: e7 });
  }
  async getTransactionStatus({ transactionId: e7, useSandbox: t5 }) {
    let { url: n5, key: r4 } = Lr[t5 ? `sandbox` : `prod`], i5 = await (0, import_fetch_retry.default)(fetch, { retries: 3, retryDelay: 500 })(`${n5}/transactions/ext/${e7}?apiKey=${r4}`);
    if (!i5.ok) throw new Ut({ error: `Failed to fetch transaction status for Transaction ${e7}`, code: `failed_to_fetch_moonpay_transaction_status`, response: i5 });
    let a6 = await i5.json();
    return Array.isArray(a6) ? a6.at(0) : void 0;
  }
};
var Wr = class {
  moonpay;
  coinbase;
  constructor(e7) {
    this.moonpay = new Ur(e7), this.coinbase = new Ir(e7);
  }
};
var Gr = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async generateAuthenticationOptions(e7) {
    return await this._privyInternal.fetch(v, { body: e7 });
  }
};
var Kr = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async sendCode(e7) {
    return await this._privyInternal.fetch(C, { body: e7 });
  }
};
var qr = class {
  privyInternal;
  proxy;
  sms;
  passkey;
  constructor(e7, t5) {
    this.proxy = t5, this.privyInternal = e7, this.sms = new Kr(e7), this.passkey = new Gr(e7);
  }
  setProxy(e7) {
    this.proxy = e7;
  }
  async getAccessTokenInternal() {
    let e7 = await this.privyInternal.getAccessTokenInternal();
    if (!e7) throw new E2({ error: `Missing access token`, code: `attempted_rpc_call_before_logged_in` });
    return e7;
  }
  async verifyMfa() {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    return await this.proxy.verifyMfa({ accessToken: await this.getAccessTokenInternal() });
  }
  async initEnrollMfa(e7) {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    return await this.proxy.initEnrollMfa({ ...e7, accessToken: await this.getAccessTokenInternal() });
  }
  async submitEnrollMfa(e7) {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    let t5 = await this.proxy.submitEnrollMfa({ ...e7, accessToken: await this.getAccessTokenInternal() }), n5 = await this.privyInternal.refreshSession();
    if (n5.user.mfa_methods.length === 0) try {
      await this.proxy.clearMfa({ userId: n5.user.id });
    } catch {
    }
    return t5;
  }
  async unenrollMfa(e7) {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    let t5 = await this.proxy.unenrollMfa({ method: e7, accessToken: await this.getAccessTokenInternal() }), n5 = await this.privyInternal.refreshSession();
    if (n5.user.mfa_methods.length === 0) try {
      await this.proxy.clearMfa({ userId: n5.user.id });
    } catch {
    }
    return t5;
  }
  async unlinkPasskey({ credentialId: e7, removeAsMfa: t5 }) {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    await this.proxy.unlinkPasskey({ credentialId: e7, removeAsMfa: t5, accessToken: await this.getAccessTokenInternal() });
    let n5 = await this.privyInternal.refreshSession();
    if (n5.user.mfa_methods.length === 0) try {
      await this.proxy.clearMfa({ userId: n5.user.id });
    } catch {
    }
  }
  async clearMfa(e7) {
    if (!this.proxy) throw new E2({ error: `Embedded wallet proxy not initialized`, code: `embedded_wallet_webview_not_loaded` });
    return await this.proxy.clearMfa(e7);
  }
};
var Jr = class {
  _privyInternal;
  constructor(e7) {
    this._privyInternal = e7;
  }
  async init(e7) {
    return this._privyInternal.fetch(ce, { body: { client_type: e7 } });
  }
  async getICloudConfiguration(e7) {
    return this._privyInternal.fetch(ue, { body: { client_type: e7 } });
  }
};
var Yr = class {
  _privyInternal;
  _storage;
  _crypto;
  constructor(e7, t5, n5) {
    this._privyInternal = e7, this._storage = t5, this._crypto = n5;
  }
  async generateURL(e7) {
    let t5 = Cr(), n5 = wr(), r4 = await Tr({ codeVerifier: t5, digest: this._crypto.digest });
    return await Promise.all([this._storage.put($2, t5), this._storage.put(Q2, n5)]), this._privyInternal.fetch(oe, { body: { redirect_to: e7, code_challenge: r4, state_code: n5 } });
  }
  async authorize(e7, t5) {
    let [n5, r4] = await Promise.all([this._storage.get($2), this._storage.get(Q2)]);
    if (r4 !== t5) throw this._privyInternal.createAnalyticsEvent(`possible_phishing_attempt`, { flow: `recovery_oauth`, storedStateCode: r4 ?? ``, returnedStateCode: t5 ?? `` }), new E2({ code: `pkce_state_code_mismatch`, error: `Unexpected auth flow. This may be a phishing attempt.` });
    let i5 = await this._privyInternal.fetch(se, { body: { authorization_code: e7, state_code: r4, code_verifier: n5 } });
    return await Promise.all([this._storage.del($2), this._storage.del(Q2)]), i5;
  }
};
var Xr = class {
  _privyInternal;
  auth;
  icloudAuth;
  constructor(e7, t5, n5) {
    this._privyInternal = e7, this.auth = new Yr(this._privyInternal, t5, n5), this.icloudAuth = new Jr(this._privyInternal);
  }
  async getRecoveryKeyMaterial(e7, t5) {
    return this._privyInternal.fetch(ae, { body: { chain_type: t5 }, params: { address: e7 } });
  }
};
var Zr = class {
  auth;
  user;
  embeddedWallet;
  recovery;
  mfa;
  app;
  mfaPromises;
  funding;
  delegated;
  crossApp;
  isMultiUserModeEnabled;
  _privyInternal;
  constructor({ clientId: e7, sessions: t5, ...n5 }) {
    let r4 = zt(n5.crypto);
    this.isMultiUserModeEnabled = t5?.mode === `multi-user`, this._privyInternal = new sr({ ...n5, appClientId: e7, crypto: r4, isMultiUserModeEnabled: this.isMultiUserModeEnabled, cookieWriteBehavior: t5?.cookieWriteBehavior }), this.mfa = new qr(this._privyInternal), this.mfaPromises = new Un(), this.app = new Bt(this._privyInternal), this.embeddedWallet = new Hn(this._privyInternal, n5.embeddedWalletMessagePoster, n5.supportedChains, this.mfa, this.mfaPromises, this.app), this.user = new cr(this._privyInternal, this.embeddedWallet, t5?.mode === `multi-user`), this.auth = new Fr(this._privyInternal, this.embeddedWallet, n5.storage, r4, this.mfa), this.recovery = new Xr(this._privyInternal, n5.storage, r4), this.funding = new Wr(this._privyInternal), this.delegated = new Ht(this._privyInternal), this.crossApp = new Vt(this._privyInternal, n5.storage);
  }
  async initialize() {
    await this._privyInternal._initialize();
  }
  setMessagePoster(e7) {
    this.embeddedWallet.setMessagePoster(e7);
  }
  addOAuthTokensListener(e7) {
    return this._privyInternal.session.on(`oauth_tokens_granted`, e7), { unsubscribe: () => {
      this._privyInternal.session.removeListener(`oauth_tokens_granted`, e7);
    } };
  }
  setCallbacks(e7) {
    this._privyInternal.setCallbacks(e7);
  }
  getAccessToken() {
    return this._privyInternal.getAccessToken();
  }
  getIdentityToken() {
    return this._privyInternal.getIdentityToken();
  }
  track({ name: e7, properties: t5 }) {
    this._privyInternal.createAnalyticsEvent(e7, t5);
  }
  getCompiledPath(e7, t5) {
    return this._privyInternal.getPath(e7, t5);
  }
  async fetchPrivyRoute(e7, t5) {
    return this._privyInternal.fetch(e7, t5);
  }
  async fetchPrivyRouteRaw(e7, t5) {
    return this._privyInternal.fetchRaw(e7, t5);
  }
  get logger() {
    return this._privyInternal.logger;
  }
};
var ai = (e7, t5) => isPossiblePhoneNumber3(String(e7), t5);
var oi = (e7) => parsePhoneNumber4(e7, `US`)?.format(`E.164`) ?? e7.replace(/[\s()-]/g, ``);
var si = (e7, t5) => `+${getCountryCallingCode2(t5)} ${e7}`;
var ci = (e7) => `*${e7.replaceAll(`-`, ``).slice(-4)}`;
var li = (e7) => new AsYouType2(e7);
var ui = getCountries2().map((e7) => ({ code: e7, callCode: getCountryCallingCode2(e7) }));
var di = (e7) => {
  let t5 = getExampleNumber2(e7, examples_mobile_json_default)?.formatInternational();
  return t5?.substring(t5.indexOf(` `) + 1);
};
var fi = (e7) => {
  let t5 = new AsYouType2();
  t5.input(e7);
  let n5 = t5.getCountry() || `US`, r4 = t5.getCallingCode() || `1`;
  return { countryCode: n5, phone: e7.replace(`+` + r4, ``) };
};
var pi = (e7, t5 = true) => e7.reduce((e8, n5) => ({ ...e8, [n5]: t5 }), {});
var mi = { [y.id]: `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`, [E.id]: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`, [x.id]: `0x0b2c639c533813f4aa9d7837caf62653d097ff85`, [S.id]: `0x5fd84259d66Cd46123540766Be93DFE6D43130D7`, [C2.id]: `0x3c499c542cef5e3811e1192ce70d8cc03d5c3359`, [w.id]: `0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582`, [a2.id]: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`, [o2.id]: `0x036CbD53842c5426634e7929541eC2318f3dCF7e`, [r2.id]: `0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E`, [i2.id]: `0x5425890298aed601595a70ab815c96711a31bc65`, [t.id]: `0xaf88d065e77c8cC2239327C5EDb3A432268e5831`, [n2.id]: `0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d` };
async function _i(e7, t5) {
  let n5 = `${e7}-auto-${t5 === `ethereum` ? `eth` : `sol`}`, r4 = new TextEncoder().encode(n5), i5 = await crypto.subtle.digest(`SHA-256`, r4);
  return Array.from(new Uint8Array(i5)).map((e8) => e8.toString(16).padStart(2, `0`)).join(``);
}
var vi = /* @__PURE__ */ new Set([y.id, a2.id, x.id, C2.id, t.id, r2.id, ae2.id]);
var yi = /* @__PURE__ */ new Set([y.id, a2.id, C2.id, x.id, t.id, r2.id, ae2.id]);
var bi = { buy: `CARD`, send: `CRYPTO_ACCOUNT` };
var xi = { USDC: `2b92315d-eab7-5bef-84fa-089a131333f5`, ETH: `d85dce9b-5b73-5c3c-8978-522ce1d1c1b4`, BTC: `5b71fc48-3dd3-540c-809b-f8c94d0e68b5`, SOL: `4f039497-3af8-5bb3-951c-6df9afa9be1c`, POL: `026bcc1e-9163-591c-a709-34dd18b2e7a1`, MON: `92aa538f-b005-45cc-a237-71d6466f54d9` };
var Si = { [y.id]: `ethereum`, [a2.id]: `base`, [x.id]: `optimism`, [C2.id]: `polygon`, [t.id]: `arbitrum`, [r2.id]: `avacchain`, [ae2.id]: `monad` };
function Ci(e7) {
  return e7.startsWith(`.`) ? `0${e7}` : e7;
}
function wi({ appId: e7, input: t5, amount: n5, blockchain: r4, asset: i5, experience: a6 }) {
  let o6 = new URL(`https://pay.coinbase.com/buy/select-asset`);
  return o6.searchParams.set(`appId`, t5.app_id), o6.searchParams.set(`sessionToken`, t5.session_token), o6.searchParams.set(`endPartnerName`, `privy:${e7}`), o6.searchParams.set(`defaultExperience`, a6), o6.searchParams.set(`presetCryptoAmount`, Ci(n5)), o6.searchParams.set(`defaultNetwork`, r4), o6.searchParams.set(`defaultPaymentMethod`, bi[a6]), o6.searchParams.set(`defaultAsset`, xi[i5]), o6.searchParams.set(`partnerUserId`, t5.partner_user_id), { url: o6 };
}
var Ti = (e7, t5) => {
  switch (t5) {
    case `native-currency`:
      return vi.has(e7);
    case `USDC`:
      return yi.has(e7);
    default:
      return console.warn(`Unknown asset passed to Coinbase Onramp`), false;
  }
};
function Di(e7, t5) {
  return t5 === `USDC` ? `USDC` : e7 === C2.id ? `POL` : e7 === ae2.id ? `MON` : `ETH`;
}
var Ni = `solana offchain`;
var Pi = 1232;
function Fi(e7) {
  let t5 = g2.utf8.toBytes(e7), n5 = new Uint8Array(32);
  return n5.set(t5.slice(0, 32)), n5;
}
function Ii({ message: e7, signerPublicKey: t5, domain: n5 }) {
  let r4 = g2.utf8.toBytes(e7);
  if (t5.length !== 32) throw Error(`Signer public key must be 32 bytes`);
  let i5 = 85 + r4.length;
  if (i5 > Pi) throw Error(`Combined message length (${i5}) exceeds maximum (${Pi})`);
  let a6 = Fi(n5), o6 = new Uint8Array(i5), s5 = 0;
  o6[s5] = 255, s5 += 1;
  let c5 = g2.utf8.toBytes(Ni);
  return o6.set(c5, s5), s5 += c5.length, o6[s5] = 0, s5 += 1, o6.set(a6, s5), s5 += 32, o6[s5] = 1, s5 += 1, o6[s5] = 1, s5 += 1, o6.set(t5, s5), s5 += 32, o6[s5] = r4.length & 255, o6[s5 + 1] = r4.length >> 8 & 255, s5 += 2, o6.set(r4, s5), o6;
}
var Ri = [`privy`];
var zi = [`metamask`, `phantom`, `brave_wallet`, `rainbow`];
var Bi = [`coinbase_wallet`];
var Vi = `metamask.trust.safe.rainbow.uniswap.zerion.argent.spot.omni.cryptocom.blockchain.safepal.bitget_wallet.zengo.1inch.binance.exodus.mew_wallet.alphawallet.keyring_pro.mathwallet.unstoppable.obvious.ambire.internet_money_wallet.coin98.abc_wallet.arculus_wallet.haha.cling_wallet.broearn.copiosa.burrito_wallet.enjin_wallet.plasma_wallet.avacus.bee.pitaka.pltwallet.minerva.kryptogo.prema.slingshot.kriptonio.timeless.secux.bitizen.blocto.safemoon`.split(`.`);
var Hi = [`unknown`];
var Ui = [...zi, ...Bi, ...Vi, ...Ri, ...Hi];
function Gi(e7) {
  return e7 ? `${e7.slice(0, 5)}\u2026${e7.slice(-4)}` : ``;
}
function Ki({ wei: e7, precision: t5 = 3 }) {
  return parseFloat(gt(e7)).toFixed(t5).replace(/0+$/, ``).replace(/\.$/, ``);
}
function qi({ amount: e7, decimals: t5 }) {
  return _t(BigInt(e7), t5);
}
var Yi = (e7) => [...lr(e7), ...dr(e7)];
var Xi = (e7, t5) => e7.imported ? e7 : X2(t5) ?? fr(t5);
var Zi = (e7) => async ({ address: t5, chainType: n5 }) => {
  let { user: r4 } = await e7.user.get();
  if (!r4) throw new E2({ code: `delegated_actions_before_logged_in`, error: `Must be logged in to delegate wallets` });
  if (n5 !== `solana` && n5 !== `ethereum`) throw new E2({ code: `unsupported_chain_type`, error: `Only Solana and Ethereum embedded wallets are supported for delegation and revocation.` });
  let i5 = Yi(r4).find((e8) => e8.chain_type === n5 && e8.address === t5);
  if (!i5) throw new E2({ code: `delegated_actions_wallet_not_found`, error: `Address to delegate is not associated with current user.` });
  if (D2(i5)) throw new E2({ code: `unsupported_wallet_type`, error: `useDelegatedActions is only supported for on-device execution and this app uses TEE execution. Use the useSessionSigners hook to provision server side access on behalf of your users. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide` });
  if (i5.delegated) return { user: r4 };
  let a6 = Xi(i5, r4);
  if (!a6) throw new E2({ code: `delegated_actions_wallet_not_found`, error: `Address to delegate is not associated with current user.` });
  await e7.embeddedWallet.delegateWallets({ rootWallet: { address: a6.address, chainType: a6.chain_type, imported: a6.imported }, delegatedWallets: [{ address: i5.address, chainType: i5.chain_type, walletIndex: i5.wallet_index }] });
  let { user: o6 } = await e7.user.get();
  return { user: o6 };
};
var Qi = (e7) => async () => {
  let { user: t5 } = await e7.user.get();
  if (!t5) throw new E2({ code: `delegated_actions_before_logged_in`, error: `Must be logged in to revoke delegated wallets` });
  let n5 = Yi(t5);
  if (n5.some(D2)) throw new E2({ code: `unsupported_wallet_type`, error: `revokeWallets is only supported for on-device execution and this app uses TEE execution. Use the useSessionSigners hook to manage server side access on behalf of your users. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide` });
  if (n5.every((e8) => !e8.delegated)) throw new E2({ code: `delegated_actions_no_wallet_to_revoke`, error: `User has no delegated wallets to revoke.` });
  await e7.delegated.revoke();
  let { user: r4 } = await e7.user.get();
  return { user: r4 };
};
var $i = C3({ delegateWallet: () => Zi, revokeWallets: () => Qi });
var ea = ({ client: e7, openAuthSession: t5 }) => async ({ providerAppId: n5, redirectUrl: r4 }) => {
  let i5 = `privy:${n5}`, { url: a6 } = await e7.auth.oauth.generateURL(i5, r4), o6 = await t5(a6, r4), s5 = o6.privy_oauth_state, c5 = o6.privy_oauth_code;
  if (!s5 || !c5) throw new E2({ code: `login_with_oauth_returned_with_invalid_credentials`, error: `Auth session oauth returned invalid credentials` });
  let l6 = await e7.auth.oauth.loginWithCode(c5, s5, i5), u6 = l6.oauth_tokens;
  return u6 && await e7.crossApp.updateOnCrossAppAuthentication(n5, u6), l6;
};
var ta = ({ client: e7, openAuthSession: t5 }) => async ({ providerAppId: n5, redirectUrl: r4 }) => {
  let i5 = `privy:${n5}`, { url: a6 } = await e7.auth.oauth.generateURL(i5, r4), o6 = await t5(a6, r4), s5 = o6.privy_oauth_state, c5 = o6.privy_oauth_code;
  if (!s5 || !c5) throw new E2({ code: `login_with_oauth_returned_with_invalid_credentials`, error: `Auth session oauth returned invalid credentials` });
  let l6 = e7.addOAuthTokensListener((t6) => {
    e7.crossApp.updateOnCrossAppAuthentication(n5, t6);
  }), { user: u6 } = await e7.auth.oauth.linkWithCode(c5, s5, i5);
  return l6.unsubscribe(), u6;
};
function na(e7, t5) {
  return e7.linked_accounts.filter((e8) => e8.type === `cross_app`).flatMap((e8) => e8.smart_wallets).some((e8) => e8.address === t5);
}
var ra = (e7, t5) => e7.linked_accounts.filter((e8) => e8.type === `cross_app`).find(({ embedded_wallets: e8, smart_wallets: n5 }) => [...e8, ...n5].some((e9) => e9.address === t5));
var ia = ({ client: e7, openAuthSession: t5 }) => {
  let n5 = ta({ client: e7, openAuthSession: t5 });
  return async ({ providerAppId: t6, redirectUrl: r4 }) => await e7.crossApp.getProviderAccessToken(t6) || (await n5({ providerAppId: t6, redirectUrl: r4 }), await e7.crossApp.getProviderAccessToken(t6));
};
var aa = ({ client: e7, openAuthSession: t5 }) => {
  let n5 = ia({ client: e7, openAuthSession: t5 });
  return async ({ user: r4, request: i5, redirectUrl: a6, address: o6 }) => {
    let s5 = ra(r4, o6);
    if (!s5) throw new E2({ code: `cross_app_invalid_wallet`, error: `Cannot operate with this wallet address` });
    let c5 = s5.provider_app_id, { connections: l6 } = await e7.crossApp.getCrossAppConnections(), u6 = l6.find((e8) => e8.provider_app_id === c5);
    if (!u6) throw new E2({ code: `cross_app_invalid_app`, error: `Invalid connected app` });
    if (u6.read_only) throw new E2({ code: `cross_app_read_only`, error: `Cannot transact against a read-only provider app` });
    let ee4 = await n5({ providerAppId: c5, redirectUrl: a6 });
    if (!ee4) throw new E2({ code: `cross_app_request_error`, error: `Wallet operations require a valid token` });
    let te3 = { content: { request: { request: i5 } }, timestamp: Date.now(), callbackUrl: a6 }, d6 = new URL(`${u6.provider_app_custom_api_url}/oauth/transact`);
    d6.searchParams.set(`communicationMode`, `redirect`), d6.searchParams.set(`token`, ee4), d6.searchParams.set(`request`, JSON.stringify(te3));
    let { privy_cross_app_type: f5, privy_cross_app_payload: p5 } = await t5(d6.href, a6);
    if (!f5 || !p5) throw new E2({ code: `cross_app_request_error`, error: `Cross app request returned an invalid result` });
    if (f5 === `PRIVY_CROSS_APP_ACTION_ERROR`) throw new E2({ code: `cross_app_request_error`, error: p5 });
    if (f5 !== `PRIVY_CROSS_APP_ACTION_RESPONSE`) throw new E2({ code: `cross_app_request_error`, error: `Cross app request returned an invalid result` });
    return { result: p5 };
  };
};
function oa(e7) {
  if (!e7) throw new E2({ code: `attempted_cross_app_request_before_logged_in`, error: `Must be logged in to sign messages with a cross-app wallet` });
}
var sa = ({ client: e7, openAuthSession: t5 }) => {
  let n5 = aa({ client: e7, openAuthSession: t5 });
  return async ({ user: e8, address: t6, message: r4, redirectUrl: i5 }) => {
    oa(e8);
    let a6 = { method: na(e8, t6) ? `privy_signSmartWalletMessage` : `personal_sign`, params: [r4, t6] }, { result: o6 } = await n5({ user: e8, request: a6, address: t6, redirectUrl: i5 });
    return { signature: o6 };
  };
};
function ca(e7) {
  let t5 = { name: `string`, version: `string`, chainId: `uint256`, verifyingContract: `address`, salt: `bytes32` }, n5 = e7.types.EIP712Domain ?? Object.entries(e7.domain ?? {}).map(([e8, n6]) => {
    if (n6 != null && typeof e8 == `string` && e8 in t5) return { name: e8, type: t5[e8] };
  }).filter((e8) => !!e8), r4 = { ...e7.types };
  return r4.EIP712Domain = n5, { ...e7, types: r4 };
}
var la = ({ client: e7, openAuthSession: t5 }) => {
  let n5 = aa({ client: e7, openAuthSession: t5 });
  return async ({ user: e8, typedData: t6, address: r4, redirectUrl: i5 }) => {
    oa(e8);
    let a6 = { method: na(e8, r4) ? `privy_signSmartWalletTypedData` : `eth_signTypedData_v4`, params: [r4, ca(t6)] }, { result: o6 } = await n5({ user: e8, request: a6, address: r4, redirectUrl: i5 });
    return { signature: o6 };
  };
};
var ua = ({ client: e7, openAuthSession: t5 }) => {
  let n5 = aa({ client: e7, openAuthSession: t5 });
  return async ({ user: e8, transaction: t6, address: r4, redirectUrl: i5 }) => {
    oa(e8);
    let a6 = { method: na(e8, r4) ? `privy_sendSmartWalletTx` : `eth_sendTransaction`, params: [t6] }, { result: o6 } = await n5({ user: e8, request: a6, address: r4, redirectUrl: i5 });
    return { transactionHash: o6 };
  };
};
var da = C3({ sendTransaction: () => ua, signMessage: () => sa, signTypedData: () => la });
var fa = C3({ linkWithCrossAppAuth: () => ta, loginWithCrossAppAuth: () => ea, wallet: () => da });
function pa(e7) {
  if (e7.startsWith(`eip155:`)) return `ethereum`;
  if (e7.startsWith(`solana:`)) return `solana`;
  if (e7.startsWith(`bip122:`)) return `bitcoin-segwit`;
  if (e7.startsWith(`tron:`)) return `tron`;
}
function ma(e7, t5) {
  let n5 = pa(e7);
  if (!n5) return;
  let r4 = t5.linked_accounts.find((e8) => e8.type === `wallet` && e8.chain_type === n5 && `address` in e8 && e8.address);
  return r4 && `address` in r4 ? r4.address : void 0;
}
async function ha(e7) {
  let { user: t5 } = await e7.privy.user.get();
  if (!t5) return { ok: false, error: `NOT_AUTHENTICATED` };
  let n5 = ma(e7.caip2, t5);
  if (n5) return { ok: true, address: n5 };
  let r4 = pa(e7.caip2);
  if (!r4) return { ok: false, error: `UNSUPPORTED_CHAIN` };
  try {
    let t6 = await e7.privy.fetchPrivyRoute(Ze, { body: { chain_type: r4 } });
    return await e7.onWalletCreated?.(), { ok: true, address: t6.address };
  } catch {
    return { ok: false, error: `REFUND_WALLET_CREATION_FAILED` };
  }
}
async function ga(e7) {
  let { user: t5 } = await e7.privy.user.get();
  if (!t5) throw Error(`NOT_AUTHENTICATED`);
  let n5 = e7.refundAddress;
  if (!n5) {
    let t6 = await ha({ privy: e7.privy, caip2: e7.sourceChain, onWalletCreated: e7.onWalletCreated });
    if (!t6.ok) throw Error(t6.error);
    n5 = t6.address;
  }
  let r4 = await e7.privy.fetchPrivyRoute(de, { body: { source_chain: e7.sourceChain, source_currency: e7.sourceCurrency, destination_chain: e7.destinationChain, destination_currency: e7.destinationCurrency, destination_address: e7.destinationAddress, refund_address: n5, ...e7.slippageBps == null ? {} : { slippage_bps: e7.slippageBps } } });
  return e7.privy.track({ name: `sdk_deposit_address_headless_quote`, properties: { sourceChain: e7.sourceChain, sourceCurrency: e7.sourceCurrency, destinationChain: e7.destinationChain, destinationCurrency: e7.destinationCurrency, depositAddressId: r4.id } }), r4;
}
var _a = async ({ operation: e7, until: t5, delay: n5, interval: r4, attempts: i5, signal: a6 }) => {
  n5 && await J(n5);
  let o6 = 0, s5, c5;
  for (; o6 < i5; ) {
    if (a6?.aborted) return { status: `aborted`, result: s5, attempts: o6, error: c5 };
    o6++;
    try {
      if (c5 = void 0, s5 = await e7(), t5(s5)) return { status: `success`, result: s5, attempts: o6 };
      o6 < i5 && await J(r4);
    } catch (e8) {
      e8 instanceof Error && (c5 = e8), o6 < i5 && await J(r4);
    }
  }
  return { status: `max_attempts`, result: s5, attempts: o6, error: c5 };
};
var va = 2e3;
var ya = 1800 * 1e3;
function ba(e7, t5) {
  return Math.ceil(t5 / e7);
}
function xa(e7) {
  return e7.status === `success` ? e7.result ? { status: `success`, order: e7.result } : { status: `timeout` } : e7.status === `aborted` ? { status: `aborted`, error: e7.error } : { status: `timeout`, error: e7.error };
}
async function Sa(e7) {
  return await e7.privy.fetchPrivyRoute(pe, { params: { order_id: e7.orderId } });
}
async function Ca(e7) {
  let t5 = e7.pollIntervalMs ?? va, n5 = e7.timeoutMs ?? ya, r4 = e7.signal ?? new AbortController().signal;
  return xa(await _a({ operation: async () => {
    let t6 = await e7.privy.fetchPrivyRoute(me, { params: { deposit_address_id: e7.depositAddressId }, query: { after: e7.quoteCreatedAt } });
    if (t6.order) return await e7.privy.fetchPrivyRoute(pe, { params: { order_id: t6.order.id } });
  }, until: (e8) => e8 !== void 0, delay: t5, interval: t5, attempts: ba(t5, n5), signal: r4 }));
}
async function wa(e7) {
  let t5 = e7.pollIntervalMs ?? va, n5 = e7.timeoutMs ?? ya, r4 = e7.signal ?? new AbortController().signal;
  return xa(await _a({ operation: () => e7.privy.fetchPrivyRoute(pe, { params: { order_id: e7.orderId } }), until: (e8) => e8.status !== `executing`, delay: t5, interval: t5, attempts: ba(t5, n5), signal: r4 }));
}
var Ta = C3({ generateDepositAddress: () => ga, getConfig: () => Ea, getDeposit: () => Sa, resolveRefundAddress: () => ha, waitForCompletion: () => wa, waitForDeposit: () => Ca });
async function Ea(e7) {
  let t5 = await e7.fetchPrivyRoute(he, {});
  return { currencies: t5.currencies, chains: t5.chains };
}
var Pa = class {
  #e;
  #t;
  get standardWallet() {
    return this.#e;
  }
  get address() {
    return this.#t.address;
  }
  constructor({ wallet: e7, account: t5 }) {
    this.#e = e7, this.#t = t5;
  }
  async disconnect() {
    if (!this.#e.features[`standard:disconnect`]?.disconnect) throw Error(`Wallet does not support disconnect`);
    await this.#e.features[`standard:disconnect`].disconnect();
  }
  async signMessage(...e7) {
    if (!this.#e.features[`solana:signMessage`]?.signMessage) throw Error(`Wallet does not support signMessage`);
    let t5 = await this.#e.features[`solana:signMessage`].signMessage(...e7.map((e8) => ({ ...e8, account: this.#t })));
    return e7.length === 1 ? t5[0] : [...t5];
  }
  async signTransaction(...e7) {
    if (!this.#e.features[`solana:signTransaction`]?.signTransaction) throw Error(`Wallet does not support signTransaction`);
    let t5 = await this.#e.features[`solana:signTransaction`].signTransaction(...e7.map((e8) => ({ ...e8, account: this.#t })));
    return e7.length === 1 ? t5[0] : [...t5];
  }
  async signAndSendTransaction(...e7) {
    if (!this.#e.features[`solana:signAndSendTransaction`]?.signAndSendTransaction) throw Error(`Wallet does not support signAndSendTransaction`);
    let t5 = await this.#e.features[`solana:signAndSendTransaction`].signAndSendTransaction(...e7.map((e8) => ({ ...e8, account: this.#t })));
    return e7.length === 1 ? t5[0] : [...t5];
  }
  async signAndSendAllTransactions(e7) {
    if (!this.#e.features[`solana:signAndSendTransaction`]?.signAndSendTransaction) throw Error(`Wallet does not support signAndSendTransaction`);
    return [...await this.#e.features[`solana:signAndSendTransaction`].signAndSendTransaction(...e7.map((e8) => ({ ...e8, account: this.#t })))];
  }
};
var Ha = Zr;

// node_modules/tinycolor2/esm/tinycolor.js
function _typeof14(obj) {
  "@babel/helpers - typeof";
  return _typeof14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof14(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid2() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R4, G4, B3;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R4 = RsRGB / 12.92;
    else R4 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G4 = GsRGB / 12.92;
    else G4 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B3 = BsRGB / 12.92;
    else B3 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R4 + 0.7152 * G4 + 0.0722 * B3;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h3 = Math.round(hsv.h * 360), s5 = Math.round(hsv.s * 100), v4 = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h3 + ", " + s5 + "%, " + v4 + "%)" : "hsva(" + h3 + ", " + s5 + "%, " + v4 + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h3 = Math.round(hsl.h * 360), s5 = Math.round(hsl.s * 100), l6 = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h3 + ", " + s5 + "%, " + l6 + "%)" : "hsla(" + h3 + ", " + s5 + "%, " + l6 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s5 = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s5._r, s5._g, s5._b, s5._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn2, args) {
    var color = fn2.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn2, args) {
    return fn2.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof14(color) == "object") {
    var newColor = {};
    for (var i5 in color) {
      if (color.hasOwnProperty(i5)) {
        if (i5 === "a") {
          newColor[i5] = color[i5];
        } else {
          newColor[i5] = convertToPercentage(color[i5]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a6 = 1;
  var s5 = null;
  var v4 = null;
  var l6 = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof14(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s5 = convertToPercentage(color.s);
      v4 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s5, v4);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s5 = convertToPercentage(color.s);
      l6 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s5, l6);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a6 = color.a;
    }
  }
  a6 = boundAlpha(a6);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a6
  };
}
function rgbToRgb(r4, g4, b3) {
  return {
    r: bound01(r4, 255) * 255,
    g: bound01(g4, 255) * 255,
    b: bound01(b3, 255) * 255
  };
}
function rgbToHsl(r4, g4, b3) {
  r4 = bound01(r4, 255);
  g4 = bound01(g4, 255);
  b3 = bound01(b3, 255);
  var max = Math.max(r4, g4, b3), min = Math.min(r4, g4, b3);
  var h3, s5, l6 = (max + min) / 2;
  if (max == min) {
    h3 = s5 = 0;
  } else {
    var d6 = max - min;
    s5 = l6 > 0.5 ? d6 / (2 - max - min) : d6 / (max + min);
    switch (max) {
      case r4:
        h3 = (g4 - b3) / d6 + (g4 < b3 ? 6 : 0);
        break;
      case g4:
        h3 = (b3 - r4) / d6 + 2;
        break;
      case b3:
        h3 = (r4 - g4) / d6 + 4;
        break;
    }
    h3 /= 6;
  }
  return {
    h: h3,
    s: s5,
    l: l6
  };
}
function hslToRgb(h3, s5, l6) {
  var r4, g4, b3;
  h3 = bound01(h3, 360);
  s5 = bound01(s5, 100);
  l6 = bound01(l6, 100);
  function hue2rgb(p6, q5, t5) {
    if (t5 < 0) t5 += 1;
    if (t5 > 1) t5 -= 1;
    if (t5 < 1 / 6) return p6 + (q5 - p6) * 6 * t5;
    if (t5 < 1 / 2) return q5;
    if (t5 < 2 / 3) return p6 + (q5 - p6) * (2 / 3 - t5) * 6;
    return p6;
  }
  if (s5 === 0) {
    r4 = g4 = b3 = l6;
  } else {
    var q4 = l6 < 0.5 ? l6 * (1 + s5) : l6 + s5 - l6 * s5;
    var p5 = 2 * l6 - q4;
    r4 = hue2rgb(p5, q4, h3 + 1 / 3);
    g4 = hue2rgb(p5, q4, h3);
    b3 = hue2rgb(p5, q4, h3 - 1 / 3);
  }
  return {
    r: r4 * 255,
    g: g4 * 255,
    b: b3 * 255
  };
}
function rgbToHsv(r4, g4, b3) {
  r4 = bound01(r4, 255);
  g4 = bound01(g4, 255);
  b3 = bound01(b3, 255);
  var max = Math.max(r4, g4, b3), min = Math.min(r4, g4, b3);
  var h3, s5, v4 = max;
  var d6 = max - min;
  s5 = max === 0 ? 0 : d6 / max;
  if (max == min) {
    h3 = 0;
  } else {
    switch (max) {
      case r4:
        h3 = (g4 - b3) / d6 + (g4 < b3 ? 6 : 0);
        break;
      case g4:
        h3 = (b3 - r4) / d6 + 2;
        break;
      case b3:
        h3 = (r4 - g4) / d6 + 4;
        break;
    }
    h3 /= 6;
  }
  return {
    h: h3,
    s: s5,
    v: v4
  };
}
function hsvToRgb(h3, s5, v4) {
  h3 = bound01(h3, 360) * 6;
  s5 = bound01(s5, 100);
  v4 = bound01(v4, 100);
  var i5 = Math.floor(h3), f5 = h3 - i5, p5 = v4 * (1 - s5), q4 = v4 * (1 - f5 * s5), t5 = v4 * (1 - (1 - f5) * s5), mod = i5 % 6, r4 = [v4, q4, p5, p5, t5, v4][mod], g4 = [t5, v4, v4, q4, p5, p5][mod], b3 = [p5, p5, t5, v4, v4, q4][mod];
  return {
    r: r4 * 255,
    g: g4 * 255,
    b: b3 * 255
  };
}
function rgbToHex(r4, g4, b3, allow3Char) {
  var hex2 = [pad2(Math.round(r4).toString(16)), pad2(Math.round(g4).toString(16)), pad2(Math.round(b3).toString(16))];
  if (allow3Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1)) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r4, g4, b3, a6, allow4Char) {
  var hex2 = [pad2(Math.round(r4).toString(16)), pad2(Math.round(g4).toString(16)), pad2(Math.round(b3).toString(16)), pad2(convertDecimalToHex(a6))];
  if (allow4Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1) && hex2[3].charAt(0) == hex2[3].charAt(1)) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function rgbaToArgbHex(r4, g4, b3, a6) {
  var hex2 = [pad2(convertDecimalToHex(a6)), pad2(Math.round(r4).toString(16)), pad2(Math.round(g4).toString(16)), pad2(Math.round(b3).toString(16))];
  return hex2.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result2 = [tinycolor(color)];
  var step = 360 / number;
  for (var i5 = 1; i5 < number; i5++) {
    result2.push(tinycolor({
      h: (hsl.h + i5 * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result2;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h3 = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h3 + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h3 + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h3 = hsv.h, s5 = hsv.s, v4 = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h3,
      s: s5,
      v: v4
    }));
    v4 = (v4 + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p5 = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p5 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p5 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p5 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p5 + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c22 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c22.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c22.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i5 = 0; i5 < colorList.length; i5++) {
    readability = tinycolor.readability(baseColor, colorList[i5]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i5]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o6) {
  var flipped = {};
  for (var i5 in o6) {
    if (o6.hasOwnProperty(i5)) {
      flipped[o6[i5]] = i5;
    }
  }
  return flipped;
}
function boundAlpha(a6) {
  a6 = parseFloat(a6);
  if (isNaN(a6) || a6 < 0 || a6 > 1) {
    a6 = 1;
  }
  return a6;
}
function bound01(n5, max) {
  if (isOnePointZero(n5)) n5 = "100%";
  var processPercent = isPercentage(n5);
  n5 = Math.min(max, Math.max(0, parseFloat(n5)));
  if (processPercent) {
    n5 = parseInt(n5 * max, 10) / 100;
  }
  if (Math.abs(n5 - max) < 1e-6) {
    return 1;
  }
  return n5 % max / parseFloat(max);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n5) {
  return typeof n5 == "string" && n5.indexOf(".") != -1 && parseFloat(n5) === 1;
}
function isPercentage(n5) {
  return typeof n5 === "string" && n5.indexOf("%") != -1;
}
function pad2(c5) {
  return c5.length == 1 ? "0" + c5 : "" + c5;
}
function convertToPercentage(n5) {
  if (n5 <= 1) {
    n5 = n5 * 100 + "%";
  }
  return n5;
}
function convertDecimalToHex(d6) {
  return Math.round(parseFloat(d6) * 255).toString(16);
}
function convertHexToDecimal(h3) {
  return parseIntFromHex(h3) / 255;
}
var matchers = (function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}

// node_modules/@privy-io/react-auth/dist/esm/context-97je72pd.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var d5 = "https://auth.privy.io";
var u5 = 2e4;
var g3 = 1400;
var h2 = 2500;
var p4 = 4e3;
var _4 = "3.39.0";
var f4 = "privy:token";
var b2 = "privy-token";
var m4 = "privy:refresh_token";
var v3 = "privy-refresh-token";
var w3 = "privy:pat";
var k3 = "privy:id_token";
var y2 = "privy-id-token";
var F2 = "privy-session";
var C4 = "privy:caid";
var E3 = (e7) => `privy:guest:${e7}`;
var M3 = (e7) => `privy:cross-app:${e7}`;
var A3 = "privy:state_code";
var x2 = "privy:code_verifier";
var D3 = "privy:headless_oauth";
var B2 = "privy:oauth_disable_signup";
var W3 = (e7) => `privy:wallet:${e7}`;
var S2 = "privy:connections";
var L3 = 12e4;
var H3 = 1;
var I4 = "0x1";
var O3 = 3e4;
var U3 = "https://api.moonpay.com/v1";
var P3 = "https://api.moonpay.com/v1";
var q3 = "pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL";
var z3 = "pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI";
var j3 = "deprecated";
var N3 = { appearance: { landingHeader: "Log in or sign up", theme: "light", walletList: ["detected_ethereum_wallets", "detected_solana_wallets", "metamask", "coinbase_wallet", "rainbow", "robinhood_wallet", "base_account", "wallet_connect", "phantom"] }, walletConnectCloudProjectId: "34357d3c125c2bcf2ce2bc3309d98715", _render: { standalone: false }, fundingMethodConfig: { moonpay: { useSandbox: false } } };
var R3 = /* @__PURE__ */ new Set(["coinbase_wallet", "base_account", "cryptocom", "metamask", "okx_wallet", "phantom", "rainbow", "uniswap", "zerion", "universal_profile", "bybit_wallet", "ronin_wallet", "haha_wallet", "wallet_connect", "wallet_connect_qr", "wallet_connect_qr_solana", "detected_solana_wallets", "detected_ethereum_wallets", "rabby_wallet", "safe", "solflare", "backpack", "jupiter", "binance", "binanceus", "bitget_wallet", "kraken_wallet", "robinhood_wallet"]);
var T3 = (e7) => R3.has(e7);
var $3 = (e7, t5, a6) => a6.indexOf(e7) === t5;
var Y3 = ({ input: e7, overrides: t5 }) => t5 ? t5.primary.concat(t5.overflow ?? []).filter(T3).filter($3) : e7 ? e7.filter(T3).filter($3) : N3.appearance.walletList;
var G3 = /paymaster\.biconomy\.io\/api/i;
var J2 = { mode: "SPONSORED", calculateGasLimits: true, expiryDuration: 300, sponsorshipInfo: { webhookData: {}, smartAccountInfo: { name: "BICONOMY", version: "2.0.0" } } };
var V2 = (e7, t5) => e7 && G3.test(e7) ? J2 : t5 && t5.policy_id ? { policyId: t5.policy_id } : void 0;
function K3(e7, t5) {
  let a6 = Math.max(0, Math.min(1, e7.toHsl().l + t5));
  return tinycolor({ ...e7.toHsl(), l: a6 });
}
function X3(e7, t5) {
  let a6 = e7.getLuminance(), n5 = t5.getLuminance();
  return (Math.max(a6, n5) + 0.05) / (Math.min(a6, n5) + 0.05);
}
function Z3(e7, t5) {
  if (!e7) {
    let e8 = t5 ? ee3 : te2;
    return { accent: tinycolor(e8.background.interactive), accentLight: tinycolor(e8.background.interactive), accentHover: tinycolor(e8.background["interactive-hover"]), accentDark: tinycolor(e8.background["interactive-clicked"]), accentDarkest: tinycolor(e8.background["interactive-disabled"]) };
  }
  let a6 = tinycolor(e7);
  return { accent: a6, accentLight: K3(a6, 0.15), accentHover: K3(a6, 0.3), accentDark: K3(a6, -0.06), accentDarkest: K3(a6, -0.6) };
}
function Q3({ backgroundTheme: e7, accentHex: t5 }) {
  let a6, n5;
  "light" === e7 ? a6 = false : "dark" === e7 ? a6 = true : (a6 = 0.5 >= tinycolor(e7).getLuminance(), n5 = tinycolor(e7).toHslString());
  let o6 = a6 ? "dark" : "light", l6 = a6 ? ee3 : te2, { accent: r4, accentLight: i5, accentHover: s5, accentDark: d6, accentDarkest: u6 } = Z3(t5, a6), g4 = (function(e8) {
    let t6 = tinycolor(te2.text.default), a7 = tinycolor(ee3.text.default), n6 = X3(e8, t6), o7 = X3(e8, a7), l7 = e8.toHsl();
    return l7.h >= 220 && l7.h <= 300 && o7 >= 3 ? ee3.text.default : n6 > o7 ? te2.text.default : ee3.text.default;
  })(r4), h3 = tinycolor(g4), p5 = X3(r4, tinycolor(l6.background.default)) >= 3;
  return { colorScheme: o6, background: n5 || l6.background.default, background2: l6.background.elevated, background3: l6.background.interactive, foreground: l6.text.default, foreground2: l6.text.muted, foreground3: l6.text.placeholder, foreground4: l6.border.default, accent: r4.toHslString(), accentLight: i5.toHslString(), accentHover: s5.toHslString(), accentDark: d6.toHslString(), accentDarkest: u6.toHslString(), foregroundAccent: h3.toHslString(), success: l6.background.success, successDark: l6.text.success, successLight: l6.background.success, error: l6.text.error, errorLight: l6.background.error, warn: l6.background.warning, warnLight: l6.background.warning, warningDark: l6.text.warning, errorDark: l6.text.error, successBg: l6.background.success, errorBg: l6.background.error, errorBgHover: l6.background["error-hover"], warnBg: l6.background.warning, infoBg: l6.background.info, infoBgHover: l6.background["info-hover"], borderDefault: l6.border.default, borderHover: l6.border["default-hover"], borderFocus: l6.border.focused, borderError: l6.border.error, borderSuccess: l6.border.success, borderWarning: l6.border.warning, borderInfo: l6.border.info, borderInteractive: l6.border.interactive, borderInteractiveHover: l6.border["interactive-hover"], backgroundHover: l6.background["default-hover"], backgroundClicked: l6.background["default-clicked"], backgroundDisabled: l6.background["default-disabled"], backgroundInteractive: l6.background.interactive, backgroundInteractiveHover: l6.background["interactive-hover"], backgroundInteractiveClicked: l6.background["interactive-clicked"], backgroundInteractiveDisabled: l6.background["interactive-disabled"], foregroundHover: l6.text.default, foregroundClicked: l6.text.default, foregroundDisabled: l6.text["default-disabled"], foregroundInteractive: l6.text.interactive, foregroundInteractiveHover: l6.text["interactive-hover"], accentHasGoodContrast: p5 ? "1" : "0", linkNavigationColor: p5 ? r4.toHslString() : l6.text.default, linkNavigationDecoration: p5 ? "none" : "underline", iconDefault: l6.icon.default, iconMuted: l6.icon.muted, iconSubtle: l6.icon.subtle, iconInverse: l6.icon.inverse, iconSuccess: l6.icon.success, iconWarning: l6.icon.warning, iconError: l6.icon.error, iconInteractive: l6.icon.interactive, iconDefaultHover: l6.icon["default-hover"], iconMutedHover: l6.icon["muted-hover"], iconSubtleHover: l6.icon["subtle-hover"], iconDefaultClicked: l6.icon["default-clicked"], iconMutedClicked: l6.icon["muted-clicked"], iconSubtleClicked: l6.icon["subtle-clicked"], iconDefaultDisabled: l6.icon["default-disabled"], iconMutedDisabled: l6.icon["muted-disabled"], iconSubtleDisabled: l6.icon["subtle-disabled"], iconErrorHover: l6.icon["error-hover"], iconInteractiveHover: l6.icon["interactive-hover"], iconErrorClicked: l6.icon["error-clicked"], iconInteractiveClicked: l6.icon["interactive-clicked"], iconMutedDisabledAlt: l6.icon["muted-disabled"], iconSubtleDisabledAlt: l6.icon["subtle-disabled"] };
}
var ee3 = { background: { default: "#020713", elevated: "#1A2230", "default-hover": "#101724", "default-clicked": "#1A2230", "default-disabled": "#020713", success: "#0E3E2D", warning: "#373827", error: "#2E0C18", interactive: "#8B86FF", "error-hover": "#441821", "interactive-hover": "#7B73E5", "interactive-clicked": "#6560CC", "interactive-disabled": "#141824", info: "#1F2937", "info-hover": "#141824" }, icon: { default: "#F8F8F8", muted: "#9BA2AE", subtle: "#7B8491", inverse: "#020713", success: "#88E3B5", warning: "#FDF27B", error: "#EF4444", interactive: "#88B6FF", "default-hover": "#F8F8F8", "muted-hover": "#AEB3BD", "subtle-hover": "#8B939E", "default-clicked": "#F8F8F8", "muted-clicked": "#9097A5", "subtle-clicked": "#78818E", "default-disabled": "#404452", "muted-disabled": "#404452", "subtle-disabled": "#404452", "error-hover": "#F05555", "interactive-hover": "#7B73E5", "error-clicked": "#EF4444", "interactive-clicked": "#6560CC" }, text: { default: "#F8F8F8", muted: "#9BA2AE", placeholder: "#7B8491", success: "#ACEECB", warning: "#FEF9A0", error: "#FCA5A5", interactive: "#A29EFF", "default-disabled": "#404452", "interactive-hover": "#8C88E5" }, border: { default: "#1F2937", interactive: "#88B0FF", focused: "#F8F8FC", info: "#5B83D3", success: "#317056", warning: "#FBBF24", error: "#F87171", "default-hover": "#34304A", "interactive-hover": "#88B0FF" } };
var te2 = { background: { default: "#FFFFFF", elevated: "#F1F2F9", "default-hover": "#F8F9FC", "default-clicked": "#F1F2F9", "default-disabled": "#FFFFFF", success: "#DCFCE7", warning: "#FEF3C7", error: "#FEE2E2", interactive: "#5B4FFF", "error-hover": "#FECACA", "interactive-hover": "#4F46E5", "interactive-clicked": "#4338CA", "interactive-disabled": "#F1F2F9", info: "#E0E7FF", "info-hover": "#EEF2FF" }, icon: { default: "#110F2A", muted: "#64668B", subtle: "#9498B8", inverse: "#FFFFFF", success: "#33B287", warning: "#F59E0B", error: "#EF4444", interactive: "#564FFF", "default-hover": "#1D1B35", "muted-hover": "#64668B", "subtle-hover": "#888AAE", "default-clicked": "#060C23", "muted-clicked": "#64668B", "subtle-clicked": "#788804", "default-disabled": "#CBCDE1", "muted-disabled": "#CBCDE1", "subtle-disabled": "#CBCDE1", "error-hover": "#F06060", "interactive-hover": "#4F46E5", "error-clicked": "#DC3838", "interactive-clicked": "#2BA482" }, text: { default: "#040217", muted: "#64668B", placeholder: "#9498B8", success: "#135638", warning: "#906218", error: "#991B1B", interactive: "#5B4FFF", "default-disabled": "#CBCDE1", "interactive-hover": "#5B4FFF" }, border: { default: "#E2E3F0", interactive: "#5B4FFF", focused: "#949DF9", info: "#F1F2F9", success: "#87D7B7", warning: "#FACD63", error: "#F69393", "default-hover": "#E2E3F0", "interactive-hover": "#5B4FFF" } };
var ae3 = ["sms", "totp", "passkey"];
var ne2 = ["metamask", "phantom", "brave_wallet", "rainbow", "uniswap_wallet_extension", "uniswap_extension", "rabby_wallet", "bybit_wallet", "ronin_wallet", "haha_wallet", "crypto.com_wallet_extension", "crypto.com_onchain", "binance", "bitget_wallet", "coinbase_wallet", "coinbase_smart_wallet", "base_account", "metamask", "trust", "safe", "rainbow", "uniswap", "zerion", "argent", "spot", "omni", "cryptocom", "blockchain", "safepal", "bitget_wallet", "zengo", "1inch", "binance", "exodus", "mew_wallet", "alphawallet", "keyring_pro", "mathwallet", "unstoppable", "obvious", "ambire", "internet_money_wallet", "coin98", "abc_wallet", "arculus_wallet", "haha", "cling_wallet", "broearn", "copiosa", "burrito_wallet", "enjin_wallet", "plasma_wallet", "avacus", "bee", "pitaka", "pltwallet", "minerva", "kryptogo", "prema", "slingshot", "kriptonio", "timeless", "secux", "bitizen", "blocto", "okx_wallet", "safemoon", "rabby_wallet", "bybit_wallet", "ronin_wallet", "haha_wallet", "privy", "unknown", "phantom", "solflare", "glow", "backpack", "jupiter", "mobile_wallet_adapter"];
function oe2(e7, t5, a6, n5, o6) {
  let l6, c5, d6, u6, g4, h3, p5, _5, f5, b3, m5, v4, w4, k4, y3, F3, C5, E4, M4 = a6 ? console.warn : () => {
  }, A4 = [];
  if (t5?.loginMethods) for (let e8 of (l6 = t5.loginMethods.includes("email"), c5 = t5.loginMethods.includes("sms"), u6 = t5.loginMethods.includes("wallet"), g4 = t5.loginMethods.includes("google"), h3 = t5.loginMethods.includes("twitter"), p5 = t5.loginMethods.includes("discord"), m5 = t5.loginMethods.includes("spotify"), v4 = t5.loginMethods.includes("instagram"), _5 = t5.loginMethods.includes("tiktok"), f5 = t5.loginMethods.includes("line"), b3 = t5.loginMethods.includes("twitch"), k4 = t5.loginMethods.includes("github"), w4 = t5.loginMethods.includes("linkedin"), y3 = t5.loginMethods.includes("apple"), F3 = t5.loginMethods.includes("farcaster"), C5 = t5.loginMethods.includes("telegram"), d6 = t5.loginMethods.includes("passkey"), t5.loginMethods)) "string" == typeof e8 && e8.startsWith("privy:") && A4.push(e8);
  else l6 = e7.email_auth, c5 = e7.sms_auth, u6 = e7.wallet_auth || e7.solana_wallet_auth, g4 = e7.google_oauth, h3 = e7.twitter_oauth, p5 = e7.discord_oauth, k4 = e7.github_oauth, m5 = e7.spotify_oauth, v4 = e7.instagram_oauth, _5 = e7.tiktok_oauth, f5 = e7.line_oauth, b3 = e7.twitch_oauth, w4 = e7.linkedin_oauth, y3 = e7.apple_oauth, F3 = e7.farcaster_auth, C5 = e7.telegram_auth || e7.telegram_oauth, d6 = e7.passkey_auth, E4 = e7.custom_jwt_auth;
  e7.passkey_auth && (d6 = true), "undefined" != typeof window && "function" != typeof window.PublicKeyCredential && (d6 = false);
  let x3 = [l6, c5].filter(Boolean), D4 = [g4, h3, p5, k4, m5, v4, _5, f5, b3, w4, y3, F3, C5].filter(Boolean), B3 = [u6].filter(Boolean), W4 = t5?.loginMethods?.includes("passkey") ?? false, S3 = e7.passkeys_for_signup_enabled ?? false, L4 = [d6 && (S3 || W4)].filter(Boolean), H4 = [E4].filter(Boolean);
  if (x3.length + D4.length + B3.length + L4.length + H4.length + A4.length === 0) throw Error("You must enable at least one login method");
  let I5 = void 0 !== t5?.appearance?.showWalletLoginFirst ? t5?.appearance?.showWalletLoginFirst : e7.show_wallet_login_first;
  I5 && 0 === B3.length ? (M4("You should only enable `showWalletLoginFirst` when `wallet` logins are also enabled. `showWalletLoginFirst` has been set to false"), I5 = false) : I5 || D4.length + x3.length !== 0 || (M4("You should only disable `showWalletLoginFirst` when `email`, `sms`, or social logins are also enabled. `showWalletLoginFirst` has been set to true"), I5 = true);
  let O4 = t5?.externalWallets?.walletConnect?.enabled ?? true;
  t5?.loginMethods && t5.loginMethodsAndOrder && M4("You should only configure one of `loginMethods` or `loginMethodsAndOrder`");
  let U4 = Y3({ input: t5?.appearance?.walletList, overrides: t5?.loginMethodsAndOrder });
  if ((U4.includes("wallet_connect_qr") || U4.includes("wallet_connect")) && U4.includes("wallet_connect_qr_solana")) throw Error("wallet_connect_qr and wallet_connect_qr_solana cannot both be present in walletList due to WalletConnect session conflicts.");
  let P4 = (({ input: e8 }) => {
    if (!e8 || !e8.primary[0]) return;
    let t6 = [e8.primary[0]], a7 = [];
    for (let a8 of (e8.primary.length > 4 && console.warn("You should not specify greater than 4 login methods in `loginMethodsAndOrder.primary`"), e8.primary.slice(1))) t6.includes(a8) ? console.warn(`Duplicated login method: ${a8}`) : t6.push(a8);
    for (let n6 of e8.overflow ?? []) t6.includes(n6) || a7.includes(n6) ? console.warn(`Duplicated login method: ${n6}`) : a7.push(n6);
    return { primary: t6, overflow: a7 };
  })({ input: t5?.loginMethodsAndOrder }), q4 = t5?.intl?.defaultCountry ?? "US", { chains: z4, defaultChain: j4 } = (function({ supportedChains: e8, defaultChainFromConfig: t6 }) {
    let a7;
    if (e8) {
      if (0 === e8.length) throw Error("`supportedChains` must contain at least one chain");
      a7 = I2(e8);
    } else a7 = [...M];
    let n6 = e8 ? a7[0] : y, o7 = t6 ?? n6;
    if (!a7.find(((e9) => e9.id === o7.id))) throw Error("`defaultChain` must be included in `supportedChains`");
    return { chains: a7, defaultChain: o7 };
  })({ supportedChains: t5?.supportedChains, defaultChainFromConfig: t5?.defaultChain }), R4 = !!t5?.defaultChain, T4 = t5?.customAuth?.getCustomAccessToken && false !== t5?.customAuth?.enabled, $4 = T4 ? "all-users" : e7.embedded_wallet_config.ethereum.create_on_login, G4 = e7.embedded_wallet_config.solana.create_on_login;
  e7.solana_wallet_auth && !t5?.externalWallets?.solana?.connectors && console.warn("App configuration has Solana wallet login enabled, but no Solana wallet connectors have been passed to Privy. Make sure to pass Solana connectors to the `config.externalWallets.solana.connectors` field of the `PrivyProvider`");
  let J3 = e7.telegram_auth_config ? { botId: e7.telegram_auth_config.bot_id, botName: e7.telegram_auth_config.bot_name, linkEnabled: e7.telegram_auth_config.link_enabled, seamlessAuthEnabled: e7.telegram_auth_config.seamless_auth_enabled } : void 0, K4 = e7.funding_config ? { methods: e7.funding_config.methods, options: e7.funding_config.options, defaultRecommendedAmount: e7.funding_config.default_recommended_amount, defaultRecommendedCurrency: e7.funding_config.default_recommended_currency, promptFundingOnWalletCreation: e7.funding_config.prompt_funding_on_wallet_creation, crossChainBridgingEnabled: e7.funding_config.cross_chain_bridging_enabled } : void 0, X4 = e7.smart_wallet_config;
  return { id: e7.id, appClientId: o6, name: e7.name, legalName: e7.legal_name ?? null, scriptNonce: t5?.scriptNonce, allowlistConfig: { errorTitle: e7.allowlist_config.error_title, errorDetail: e7.allowlist_config.error_detail, errorCtaText: e7.allowlist_config.cta_text, errorCtaLink: e7.allowlist_config.cta_link }, legacyWalletUiConfig: e7.legacy_wallet_ui_config, appearance: { logo: t5?.appearance?.logo ?? e7.logo_url ?? void 0, emailDomain: t5?.appearance?.emailDomain, landingHeader: t5?.appearance?.landingHeader ?? N3.appearance.landingHeader, loginMessage: "string" == typeof t5?.appearance?.loginMessage ? t5?.appearance?.loginMessage.slice(0, 100) : t5?.appearance?.loginMessage, footerLogo: t5?.appearance?.footerLogo, palette: Q3({ backgroundTheme: t5?.appearance?.theme ?? N3.appearance.theme, accentHex: t5?.appearance?.accentColor ?? e7.accent_color }), loginGroupPriority: I5 ? "web3-first" : "web2-first", hideDirectWeb2Inputs: !!t5?.appearance?.hideDirectWeb2Inputs, walletList: U4, walletChainType: t5?.appearance?.walletChainType ?? (({ evmWalletAuth: e8, solanaWalletAuth: t6 }) => e8 && t6 ? "ethereum-and-solana" : e8 ? "ethereum-only" : t6 ? "solana-only" : "ethereum-only")({ evmWalletAuth: e7.wallet_auth ?? false, solanaWalletAuth: e7.solana_wallet_auth ?? false }) }, loginMethods: { wallet: u6, email: l6, sms: c5, passkey: d6, google: g4, twitter: h3, discord: p5, github: k4, spotify: m5, instagram: v4, tiktok: _5, line: f5, twitch: b3, linkedin: w4, apple: y3, farcaster: F3, telegram: C5 }, globalDisablePasskeys: t5?.globalDisablePasskeys ?? false, customOAuthProviders: (e7.custom_oauth_providers ?? []).filter(((e8) => false !== e8.enabled)), crossAppProviders: A4, disablePlusEmails: e7.disable_plus_emails, loginMethodsAndOrder: P4, legal: { termsAndConditionsUrl: t5?.legal?.termsAndConditionsUrl ?? e7.terms_and_conditions_url, privacyPolicyUrl: t5?.legal?.privacyPolicyUrl ?? e7.privacy_policy_url, requireUsersAcceptTerms: e7.require_users_accept_terms ?? false }, walletConnectCloudProjectId: t5?.walletConnectCloudProjectId ?? e7.wallet_connect_cloud_project_id ?? N3.walletConnectCloudProjectId, rpcConfig: { rpcUrls: {}, rpcTimeouts: t5?.externalWallets?.signatureRequestTimeouts ?? {} }, chains: z4, defaultChain: j4, intl: { defaultCountry: q4, textLocalization: t5?.intl?.textLocalization }, shouldEnforceDefaultChainOnConnect: R4, captcha: { enabledProvider: e7.enabled_captcha_provider ?? null, siteKey: e7.captcha_site_key }, externalWallets: { coinbaseWallet: { config: { appName: e7.name, appLogoUrl: e7.logo_url, preference: { options: "all", ...t5?.externalWallets?.coinbaseWallet?.config?.preference }, ...t5?.externalWallets?.coinbaseWallet?.config } }, baseAccount: { config: { appName: e7.name, appLogoUrl: e7.logo_url, ...t5?.externalWallets?.baseAccount?.config, preference: { ...t5?.externalWallets?.baseAccount?.config?.preference, telemetry: false } } }, walletConnect: { enabled: O4 }, solana: { connectors: t5?.externalWallets?.solana?.connectors }, disableAllExternalWallets: t5?.externalWallets?.disableAllExternalWallets ?? false }, embeddedWallets: { requireUserOwnedRecoveryOnCreate: !T4 && (e7.embedded_wallet_config.require_user_owned_recovery_on_create ?? false), userOwnedRecoveryOptions: T4 ? ["user-passcode"] : e7.embedded_wallet_config.user_owned_recovery_options, priceDisplay: t5?.embeddedWallets?.priceDisplay ?? { primary: "fiat-currency", secondary: "native-token" }, ethereum: { createOnLogin: t5?.embeddedWallets?.ethereum?.createOnLogin ?? $4 }, solana: { createOnLogin: t5?.embeddedWallets?.solana?.createOnLogin ?? G4 }, disableAutomaticMigration: t5?.embeddedWallets?.disableAutomaticMigration ?? false, mode: e7.embedded_wallet_config.mode, showWalletUIs: t5?.embeddedWallets?.showWalletUIs ?? e7.enforce_wallet_uis ?? true, extendedCalldataDecoding: t5?.embeddedWallets?.extendedCalldataDecoding ?? false, transactionScanning: { enabled: t5?.embeddedWallets?.transactionScanning?.enabled ?? false, domain: t5?.embeddedWallets?.transactionScanning?.domain ?? n5 ?? "https://auth.privy.io" } }, mfa: { methods: (e7.mfa_methods ?? []).filter(((e8) => ae3.includes(e8))), noPromptOnMfaRequired: t5?.mfa?.noPromptOnMfaRequired ?? false }, passkeys: { shouldUnlinkOnUnenrollMfa: t5?.passkeys?.shouldUnlinkOnUnenrollMfa, shouldUnenrollMfaOnUnlink: t5?.passkeys?.shouldUnenrollMfaOnUnlink, registration: t5?.passkeys?.registration }, customAuth: T4 ? { enabled: true, ...t5.customAuth } : void 0, loginConfig: { telegramAuthConfiguration: J3, telegramHasHmacCredentials: !!e7.telegram_auth, telegramSeamlessAuthEnabled: !!e7.telegram_seamless_auth_enabled, passkeysForSignupEnabled: e7.passkeys_for_signup_enabled }, headless: !!t5?.headless, render: { standalone: t5?._render?.standalone ?? N3._render.standalone }, fundingConfig: K4, fundingMethodConfig: { ...t5?.fundingMethodConfig ?? N3.fundingMethodConfig, moonpay: { ...t5?.fundingMethodConfig?.moonpay ?? N3.fundingMethodConfig.moonpay, useSandbox: t5?.fundingMethodConfig?.moonpay.useSandbox ?? N3.fundingMethodConfig.moonpay.useSandbox } }, whatsAppEnabled: !!e7.whatsapp_enabled, customOAuthRedirectUrl: t5?.customOAuthRedirectUrl, allowOAuthInEmbeddedBrowsers: t5?.allowOAuthInEmbeddedBrowsers ?? false, solanaRpcs: { "solana:mainnet": t5?.solana?.rpcs?.["solana:mainnet"] ?? null, "solana:devnet": t5?.solana?.rpcs?.["solana:devnet"] ?? null, "solana:testnet": t5?.solana?.rpcs?.["solana:testnet"] ?? null }, smartWallets: X4?.enabled ? { enabled: X4.enabled, smartWalletVersion: X4.smart_wallet_version, smartWalletType: X4.smart_wallet_type, configuredNetworks: X4.configured_networks.map(((e8) => ({ chainId: e8.chain_id, bundlerUrl: e8.bundler_url, paymasterUrl: e8.paymaster_url, paymasterContext: V2(e8.paymaster_url, e8.paymaster_context) }))) } : { enabled: X4?.enabled ?? false }, connectorsDebugLogs: t5?.connectorsDebugLogs ?? false };
}
var le = { show_wallet_login_first: true, allowlist_config: { error_title: null, error_detail: null, cta_text: null, cta_link: null }, wallet_auth: true, email_auth: true, sms_auth: false, google_oauth: false, twitter_oauth: false, discord_oauth: false, github_oauth: false, linkedin_oauth: false, apple_oauth: false, disable_plus_emails: false, terms_and_conditions_url: null, privacy_policy_url: null, embedded_wallet_config: { create_on_login: "off", ethereum: { create_on_login: "off" }, solana: { create_on_login: "off" }, require_user_owned_recovery_on_create: false, user_owned_recovery_options: ["user-passcode"], mode: "user-controlled-server-wallets-only" }, captcha_site_key: "", enforce_wallet_uis: false, legacy_wallet_ui_config: false, id: "", name: "", passkeys_for_signup_enabled: false, whatsapp_enabled: false };
var re2 = /* @__PURE__ */ (0, import_react.createContext)({ appConfig: oe2(le, void 0, false), isServerConfigLoaded: false, initializationError: null, setInitializationError: () => {
} });
var ie3 = ({ children: t5, client: l6, legacyClient: r4, clientConfig: i5, appClientId: s5 }) => {
  let [c5, d6] = (0, import_react.useState)(null), [u6, g4] = (0, import_react.useState)(null), h3 = (0, import_react.useMemo)((() => oe2(c5 ?? le, i5, !!c5, "undefined" != typeof window ? window.location.origin : void 0, s5)), [c5, i5, s5]);
  return (0, import_react.useEffect)((() => {
    if (!c5) return;
    let e7 = (function(e8) {
      if (!e8) return {};
      let { appearance: t7, scriptNonce: a7, supportedChains: n5, defaultChain: o6, externalWallets: l7, ...r5 } = e8;
      return { ...r5, ...n5 ? { supportedChains: n5.map(((e9) => e9.id)) } : void 0, ...o6 ? { defaultChain: o6.id } : void 0, ...l7 ? { walletConnect: l7.walletConnect ? { enabled: l7.walletConnect.enabled } : void 0, coinbaseWallet: l7.coinbaseWallet, solana: { connectors: l7.solana?.connectors?.get().map(((e9) => e9.walletClientType)) } } : void 0 };
    })(i5), t6 = (function(e8, t7 = 0) {
      let a7 = 3735928559 ^ t7, n5 = 1103547991 ^ t7;
      for (let t8, o6 = 0; o6 < e8.length; o6++) a7 = Math.imul(a7 ^ (t8 = e8.charCodeAt(o6)), 2654435761), n5 = Math.imul(n5 ^ t8, 1597334677);
      return a7 = Math.imul(a7 ^ a7 >>> 16, 2246822507) ^ Math.imul(n5 ^ n5 >>> 13, 3266489909), 4294967296 * (2097151 & (n5 = Math.imul(n5 ^ n5 >>> 16, 2246822507) ^ Math.imul(a7 ^ a7 >>> 13, 3266489909))) + (a7 >>> 0);
    })(JSON.stringify(e7)).toString(), a6 = `privy:sent:${c5.id}:${t6}`;
    localStorage.getItem(a6) || (r4.createAnalyticsEvent({ eventName: "sdk_initialize", payload: e7 }), localStorage.setItem(a6, "t"));
  }), [i5, c5]), (0, import_react.useEffect)((() => {
    c5 || (async () => {
      try {
        await l6.initialize();
        let e7 = l6.app.getConfig();
        e7.custom_api_url && r4.updateApiUrl(e7.custom_api_url), d6(e7);
      } catch (e7) {
        let t6 = e7 instanceof Error ? e7 : Error(String(e7));
        g4(t6), console.warn("Error generating app config: ", t6);
      }
    })();
  }), []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(re2.Provider, { value: { appConfig: h3, isServerConfigLoaded: !!c5, initializationError: u6, setInitializationError: g4 }, children: t5 });
};
var se2 = () => {
  let { appConfig: e7 } = (0, import_react.useContext)(re2);
  return e7;
};
var ce2 = () => {
  let { isServerConfigLoaded: e7 } = (0, import_react.useContext)(re2);
  return e7;
};
var de2 = () => {
  let { initializationError: e7, setInitializationError: a6 } = (0, import_react.useContext)(re2);
  return { initializationError: e7, setInitializationError: a6 };
};

export {
  de,
  he,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  base64url_exports,
  decodeJwt,
  t,
  n2 as n,
  r2 as r,
  i2 as i,
  a2 as a,
  o2 as o,
  l2 as l,
  _2 as _,
  y,
  x,
  S,
  C2 as C,
  w,
  E,
  k,
  N,
  P,
  ie2 as ie,
  ae2 as ae,
  import_index,
  eventemitter3_default,
  r3 as r2,
  a3 as a2,
  o3 as o2,
  s3 as s,
  l3 as l2,
  g2 as g,
  external_exports,
  t3 as t2,
  getCountryCallingCode2 as getCountryCallingCode,
  T2 as T,
  O2 as O,
  F,
  cn,
  wn,
  Bn,
  R2 as R,
  qn,
  Br,
  Vr,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  _i,
  wi,
  Ti,
  Di,
  Ii,
  Gi,
  Ki,
  qi,
  _a,
  Ta,
  Pa,
  Ha,
  d5 as d,
  u5 as u,
  g3 as g2,
  h2 as h,
  p4 as p,
  _4 as _2,
  f4 as f,
  b2 as b,
  m4 as m,
  v3 as v,
  w3 as w2,
  k3 as k2,
  y2,
  F2,
  C4 as C2,
  E3 as E2,
  M3 as M,
  A3 as A,
  x2,
  D3 as D,
  B2 as B,
  W3 as W,
  S2,
  L3 as L,
  H3 as H,
  I4 as I,
  O3 as O2,
  U3 as U,
  P3 as P2,
  q3 as q,
  z3 as z,
  j3 as j,
  ne2 as ne,
  ie3 as ie2,
  se2 as se,
  ce2 as ce,
  de2
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.8 | MIT *)
*/
