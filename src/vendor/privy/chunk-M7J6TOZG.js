import {
  esm_exports,
  require_events,
  require_quick_format_unescaped
} from "./chunk-CMSQRRQ2.js";
import {
  ApiController,
  BalanceUtil,
  BlockchainApiController,
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  ConstantsUtil2,
  CoreHelperUtil,
  EventsController,
  MELD_PUBLIC_KEY,
  ModalController,
  NumberUtil,
  ONRAMP_PROVIDERS,
  OptionsController,
  RouterController,
  SnackController,
  StorageUtil,
  SwapApiUtil,
  W3mFrameRpcConstants,
  getActiveCaipNetwork,
  getActiveNetworkTokenAddress,
  getPreferredAccountType,
  proxy,
  ref,
  subscribe,
  subscribeKey,
  withErrorBoundary
} from "./chunk-PA4XGL23.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@reown/appkit-controllers/node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/@reown/appkit-controllers/node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k3) {
          return k3 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set(setOpts, logger, "error", "log");
        set(setOpts, logger, "fatal", "error");
        set(setOpts, logger, "warn", "error");
        set(setOpts, logger, "info", "log");
        set(setOpts, logger, "debug", "log");
        set(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ (function(write) {
        return function LOG() {
          const ts = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i5 = 0; i5 < args.length; i5++) args[i5] = arguments[i5];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      })(logger[level]);
    }
    function asObject(logger, level, args, ts) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o6 = {};
      if (ts) {
        o6.time = ts;
      }
      o6.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o6, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o6.msg = msg;
      return o6;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i5 in args) {
        if (stdErrSerialize && args[i5] instanceof Error) {
          args[i5] = pino.stdSerializers.err(args[i5]);
        } else if (typeof args[i5] === "object" && !Array.isArray(args[i5])) {
          for (const k3 in args[i5]) {
            if (serialize && serialize.indexOf(k3) > -1 && k3 in serializers) {
              args[i5][k3] = serializers[k3](args[i5][k3]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i5 = 1; i5 < args.length; i5++) {
          args[i5] = arguments[i5 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a3) {
      return a3;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o6) {
        return typeof o6 !== "undefined" && o6;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e4) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/SwapCalculationUtil.js
var SwapCalculationUtil = {
  getGasPriceInEther(gas, gasPrice) {
    const totalGasCostInWei = gasPrice * gas;
    const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
    return totalGasCostInEther;
  },
  getGasPriceInUSD(networkPrice, gas, gasPrice) {
    const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
    const networkPriceInUSD = NumberUtil.bigNumber(networkPrice);
    const gasCostInUSD = networkPriceInUSD.times(totalGasCostInEther);
    return gasCostInUSD.toNumber();
  },
  getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
    const inputValue = NumberUtil.bigNumber(sourceTokenAmount).times(sourceTokenPriceInUSD);
    const outputValue = NumberUtil.bigNumber(toTokenAmount).times(toTokenPriceInUSD);
    const priceImpact = inputValue.minus(outputValue).div(inputValue).times(100);
    return priceImpact.toNumber();
  },
  getMaxSlippage(slippage, toTokenAmount) {
    const slippageToleranceDecimal = NumberUtil.bigNumber(slippage).div(100);
    const maxSlippageAmount = NumberUtil.multiply(toTokenAmount, slippageToleranceDecimal);
    return maxSlippageAmount.toNumber();
  },
  getProviderFee(sourceTokenAmount, feePercentage = 85e-4) {
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).times(feePercentage);
    return providerFee.toString();
  },
  isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
    const gasPrice = gasPriceInUSD || "0";
    if (NumberUtil.bigNumber(networkBalanceInUSD).eq(0)) {
      return true;
    }
    return NumberUtil.bigNumber(NumberUtil.bigNumber(gasPrice)).gt(networkBalanceInUSD);
  },
  isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
    const sourceTokenBalance = balance?.find((token) => token.address === sourceTokenAddress)?.quantity?.numeric;
    const isInSufficientBalance = NumberUtil.bigNumber(sourceTokenBalance || "0").lt(sourceTokenAmount);
    return isInSufficientBalance;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var state = proxy({
  message: "",
  variant: "info",
  open: false
});
var controller = {
  state,
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  open(message, variant) {
    const { debug } = OptionsController.state;
    const { code, displayMessage, debugMessage } = message;
    if (displayMessage && debug) {
      state.message = displayMessage;
      state.variant = variant;
      state.open = true;
    }
    if (debugMessage) {
      console.error(typeof debugMessage === "function" ? debugMessage() : debugMessage, code ? { code } : void 0);
    }
  },
  warn(title, description, code) {
    state.open = true;
    state.message = title;
    state.variant = "warning";
    if (description) {
      console.warn(description, code);
    }
  },
  close() {
    state.open = false;
    state.message = "";
    state.variant = "info";
  }
};
var AlertController = withErrorBoundary(controller);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SwapController.js
var INITIAL_GAS_LIMIT = 15e4;
var TO_AMOUNT_DECIMALS = 6;
var initialState = {
  // Loading states
  initializing: false,
  initialized: false,
  loadingPrices: false,
  loadingQuote: false,
  loadingApprovalTransaction: false,
  loadingBuildTransaction: false,
  loadingTransaction: false,
  // Control states
  switchingTokens: false,
  // Error states
  fetchError: false,
  // Approval & Swap transaction states
  approvalTransaction: void 0,
  swapTransaction: void 0,
  transactionError: void 0,
  // Input values
  sourceToken: void 0,
  sourceTokenAmount: "",
  sourceTokenPriceInUSD: 0,
  toToken: void 0,
  toTokenAmount: "",
  toTokenPriceInUSD: 0,
  networkPrice: "0",
  networkBalanceInUSD: "0",
  networkTokenSymbol: "",
  inputError: void 0,
  // Request values
  slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE,
  // Tokens
  tokens: void 0,
  popularTokens: void 0,
  suggestedTokens: void 0,
  foundTokens: void 0,
  myTokensWithBalance: void 0,
  tokensPriceMap: {},
  // Calculations
  gasFee: "0",
  gasPriceInUSD: 0,
  priceImpact: void 0,
  maxSlippage: void 0,
  providerFee: void 0
};
var state2 = proxy({ ...initialState });
var controller2 = {
  state: state2,
  subscribe(callback) {
    return subscribe(state2, () => callback(state2));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state2, key, callback);
  },
  getParams() {
    const namespace = ChainController.state.activeChain;
    const caipAddress = ChainController.getAccountData(namespace)?.caipAddress ?? ChainController.state.activeCaipAddress;
    const address = CoreHelperUtil.getPlainAddress(caipAddress);
    const networkAddress = getActiveNetworkTokenAddress();
    const connectorId = ConnectorController.getConnectorId(ChainController.state.activeChain);
    if (!address) {
      throw new Error("No address found to swap the tokens from.");
    }
    const invalidToToken = !state2.toToken?.address || !state2.toToken?.decimals;
    const invalidSourceToken = !state2.sourceToken?.address || !state2.sourceToken?.decimals || !NumberUtil.bigNumber(state2.sourceTokenAmount).gt(0);
    const invalidSourceTokenAmount = !state2.sourceTokenAmount;
    return {
      networkAddress,
      fromAddress: address,
      fromCaipAddress: caipAddress,
      sourceTokenAddress: state2.sourceToken?.address,
      toTokenAddress: state2.toToken?.address,
      toTokenAmount: state2.toTokenAmount,
      toTokenDecimals: state2.toToken?.decimals,
      sourceTokenAmount: state2.sourceTokenAmount,
      sourceTokenDecimals: state2.sourceToken?.decimals,
      invalidToToken,
      invalidSourceToken,
      invalidSourceTokenAmount,
      availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount,
      isAuthConnector: connectorId === ConstantsUtil.CONNECTOR_ID.AUTH
    };
  },
  async setSourceToken(sourceToken) {
    if (!sourceToken) {
      state2.sourceToken = sourceToken;
      state2.sourceTokenAmount = "";
      state2.sourceTokenPriceInUSD = 0;
      return;
    }
    state2.sourceToken = sourceToken;
    await SwapController.setTokenPrice(sourceToken.address, "sourceToken");
  },
  setSourceTokenAmount(amount) {
    state2.sourceTokenAmount = amount;
  },
  async setToToken(toToken) {
    if (!toToken) {
      state2.toToken = toToken;
      state2.toTokenAmount = "";
      state2.toTokenPriceInUSD = 0;
      return;
    }
    state2.toToken = toToken;
    await SwapController.setTokenPrice(toToken.address, "toToken");
  },
  setToTokenAmount(amount) {
    state2.toTokenAmount = amount ? NumberUtil.toFixed(amount, TO_AMOUNT_DECIMALS) : "";
  },
  async setTokenPrice(address, target) {
    let price = state2.tokensPriceMap[address] || 0;
    if (!price) {
      state2.loadingPrices = true;
      price = await SwapController.getAddressPrice(address);
    }
    if (target === "sourceToken") {
      state2.sourceTokenPriceInUSD = price;
    } else if (target === "toToken") {
      state2.toTokenPriceInUSD = price;
    }
    if (state2.loadingPrices) {
      state2.loadingPrices = false;
    }
    if (SwapController.getParams().availableToSwap && !state2.switchingTokens) {
      SwapController.swapTokens();
    }
  },
  async switchTokens() {
    if (state2.initializing || !state2.initialized || state2.switchingTokens) {
      return;
    }
    state2.switchingTokens = true;
    try {
      const newSourceToken = state2.toToken ? { ...state2.toToken } : void 0;
      const newToToken = state2.sourceToken ? { ...state2.sourceToken } : void 0;
      const newSourceTokenAmount = newSourceToken && state2.toTokenAmount === "" ? "1" : state2.toTokenAmount;
      SwapController.setSourceTokenAmount(newSourceTokenAmount);
      SwapController.setToTokenAmount("");
      await SwapController.setSourceToken(newSourceToken);
      await SwapController.setToToken(newToToken);
      state2.switchingTokens = false;
      SwapController.swapTokens();
    } catch (error) {
      state2.switchingTokens = false;
      throw error;
    }
  },
  resetState() {
    state2.myTokensWithBalance = initialState.myTokensWithBalance;
    state2.tokensPriceMap = initialState.tokensPriceMap;
    state2.initialized = initialState.initialized;
    state2.initializing = initialState.initializing;
    state2.switchingTokens = initialState.switchingTokens;
    state2.sourceToken = initialState.sourceToken;
    state2.sourceTokenAmount = initialState.sourceTokenAmount;
    state2.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
    state2.toToken = initialState.toToken;
    state2.toTokenAmount = initialState.toTokenAmount;
    state2.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
    state2.networkPrice = initialState.networkPrice;
    state2.networkTokenSymbol = initialState.networkTokenSymbol;
    state2.networkBalanceInUSD = initialState.networkBalanceInUSD;
    state2.inputError = initialState.inputError;
  },
  resetValues() {
    const { networkAddress } = SwapController.getParams();
    const networkToken = state2.tokens?.find((token) => token.address === networkAddress);
    SwapController.setSourceToken(networkToken);
    SwapController.setToToken(void 0);
  },
  getApprovalLoadingState() {
    return state2.loadingApprovalTransaction;
  },
  clearError() {
    state2.transactionError = void 0;
  },
  async initializeState() {
    if (state2.initializing) {
      return;
    }
    state2.initializing = true;
    if (!state2.initialized) {
      try {
        await SwapController.fetchTokens();
        state2.initialized = true;
      } catch (error) {
        state2.initialized = false;
        SnackController.showError("Failed to initialize swap");
        RouterController.goBack();
      }
    }
    state2.initializing = false;
  },
  async fetchTokens() {
    const { networkAddress } = SwapController.getParams();
    await SwapController.getNetworkTokenPrice();
    await SwapController.getMyTokensWithBalance();
    const networkToken = state2.myTokensWithBalance?.find((token) => token.address === networkAddress);
    if (networkToken) {
      state2.networkTokenSymbol = networkToken.symbol;
      SwapController.setSourceToken(networkToken);
      SwapController.setSourceTokenAmount("0");
    }
  },
  async getTokenList() {
    const activeCaipNetworkId = ChainController.state.activeCaipNetwork?.caipNetworkId;
    if (state2.caipNetworkId === activeCaipNetworkId && state2.tokens) {
      return;
    }
    try {
      state2.tokensLoading = true;
      const tokens2 = await SwapApiUtil.getTokenList(activeCaipNetworkId);
      state2.tokens = tokens2;
      state2.caipNetworkId = activeCaipNetworkId;
      state2.popularTokens = tokens2.sort((aTokenInfo, bTokenInfo) => {
        if (aTokenInfo.symbol < bTokenInfo.symbol) {
          return -1;
        }
        if (aTokenInfo.symbol > bTokenInfo.symbol) {
          return 1;
        }
        return 0;
      });
      state2.suggestedTokens = tokens2.filter((token) => {
        if (ConstantsUtil2.SWAP_SUGGESTED_TOKENS.includes(token.symbol)) {
          return true;
        }
        return false;
      });
    } catch (error) {
      state2.tokens = [];
      state2.popularTokens = [];
      state2.suggestedTokens = [];
    } finally {
      state2.tokensLoading = false;
    }
  },
  async getAddressPrice(address) {
    const existPrice = state2.tokensPriceMap[address];
    if (existPrice) {
      return existPrice;
    }
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [address]
    });
    const fungibles = response?.fungibles || [];
    const allTokens = [...state2.tokens || [], ...state2.myTokensWithBalance || []];
    const symbol = allTokens?.find((token) => token.address === address)?.symbol;
    const price = fungibles.find((p3) => p3.symbol.toLowerCase() === symbol?.toLowerCase())?.price || 0;
    const priceAsFloat = parseFloat(price.toString());
    state2.tokensPriceMap[address] = priceAsFloat;
    return priceAsFloat;
  },
  async getNetworkTokenPrice() {
    const { networkAddress } = SwapController.getParams();
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [networkAddress]
    }).catch(() => {
      SnackController.showError("Failed to fetch network token price");
      return { fungibles: [] };
    });
    const token = response.fungibles?.[0];
    const price = token?.price.toString() || "0";
    state2.tokensPriceMap[networkAddress] = parseFloat(price);
    state2.networkTokenSymbol = token?.symbol || "";
    state2.networkPrice = price;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const balances = await BalanceUtil.getMyTokensWithBalance(forceUpdate);
    const swapBalances = SwapApiUtil.mapBalancesToSwapTokens(balances);
    if (!swapBalances) {
      return;
    }
    await SwapController.getInitialGasPrice();
    SwapController.setBalances(swapBalances);
  },
  setBalances(balances) {
    const { networkAddress } = SwapController.getParams();
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!caipNetwork) {
      return;
    }
    const networkToken = balances.find((token) => token.address === networkAddress);
    balances.forEach((token) => {
      state2.tokensPriceMap[token.address] = token.price || 0;
    });
    state2.myTokensWithBalance = balances.filter((token) => token.address.startsWith(caipNetwork.caipNetworkId));
    state2.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async getInitialGasPrice() {
    const res = await SwapApiUtil.fetchGasPrice();
    if (!res) {
      return { gasPrice: null, gasPriceInUSD: null };
    }
    switch (ChainController.state?.activeCaipNetwork?.chainNamespace) {
      case ConstantsUtil.CHAIN.SOLANA:
        state2.gasFee = res.standard ?? "0";
        state2.gasPriceInUSD = NumberUtil.multiply(res.standard, state2.networkPrice).div(1e9).toNumber();
        return {
          gasPrice: BigInt(state2.gasFee),
          gasPriceInUSD: Number(state2.gasPriceInUSD)
        };
      case ConstantsUtil.CHAIN.EVM:
      default:
        const value = res.standard ?? "0";
        const gasFee = BigInt(value);
        const gasLimit = BigInt(INITIAL_GAS_LIMIT);
        const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state2.networkPrice, gasLimit, gasFee);
        state2.gasFee = value;
        state2.gasPriceInUSD = gasPrice;
        return { gasPrice: gasFee, gasPriceInUSD: gasPrice };
    }
  },
  // -- Swap -------------------------------------- //
  async swapTokens() {
    const address = ChainController.getAccountData()?.address;
    const sourceToken = state2.sourceToken;
    const toToken = state2.toToken;
    const haveSourceTokenAmount = NumberUtil.bigNumber(state2.sourceTokenAmount).gt(0);
    if (!haveSourceTokenAmount) {
      SwapController.setToTokenAmount("");
    }
    if (!toToken || !sourceToken || state2.loadingPrices || !haveSourceTokenAmount || !address) {
      return;
    }
    state2.loadingQuote = true;
    const amountDecimal = NumberUtil.bigNumber(state2.sourceTokenAmount).times(10 ** sourceToken.decimals).round(0);
    try {
      const quoteResponse = await BlockchainApiController.fetchSwapQuote({
        userAddress: address,
        from: sourceToken.address,
        to: toToken.address,
        gasPrice: state2.gasFee,
        amount: amountDecimal.toString()
      });
      state2.loadingQuote = false;
      const quoteToAmount = quoteResponse?.quotes?.[0]?.toAmount;
      if (!quoteToAmount) {
        AlertController.open({
          displayMessage: "Incorrect amount",
          debugMessage: "Please enter a valid amount"
        }, "error");
        return;
      }
      const toTokenAmount = NumberUtil.bigNumber(quoteToAmount).div(10 ** toToken.decimals).toString();
      SwapController.setToTokenAmount(toTokenAmount);
      const isInsufficientToken = SwapController.hasInsufficientToken(state2.sourceTokenAmount, sourceToken.address);
      if (isInsufficientToken) {
        state2.inputError = "Insufficient balance";
      } else {
        state2.inputError = void 0;
        SwapController.setTransactionDetails();
      }
    } catch (error) {
      const response = await SwapApiUtil.handleSwapError(error);
      state2.loadingQuote = false;
      state2.inputError = response || "Insufficient balance";
    }
  },
  // -- Create Transactions -------------------------------------- //
  async getTransaction() {
    const { fromCaipAddress, availableToSwap } = SwapController.getParams();
    const sourceToken = state2.sourceToken;
    const toToken = state2.toToken;
    if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state2.loadingQuote) {
      return void 0;
    }
    try {
      state2.loadingBuildTransaction = true;
      const hasAllowance = await SwapApiUtil.fetchSwapAllowance({
        userAddress: fromCaipAddress,
        tokenAddress: sourceToken.address,
        sourceTokenAmount: state2.sourceTokenAmount,
        sourceTokenDecimals: sourceToken.decimals
      });
      let transaction = void 0;
      if (hasAllowance) {
        transaction = await SwapController.createSwapTransaction();
      } else {
        transaction = await SwapController.createAllowanceTransaction();
      }
      state2.loadingBuildTransaction = false;
      state2.fetchError = false;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to check allowance");
      state2.loadingBuildTransaction = false;
      state2.approvalTransaction = void 0;
      state2.swapTransaction = void 0;
      state2.fetchError = true;
      return void 0;
    }
  },
  async createAllowanceTransaction() {
    const { fromCaipAddress, sourceTokenAddress, toTokenAddress } = SwapController.getParams();
    if (!fromCaipAddress || !toTokenAddress) {
      return void 0;
    }
    if (!sourceTokenAddress) {
      throw new Error("createAllowanceTransaction - No source token address found.");
    }
    try {
      const response = await BlockchainApiController.generateApproveCalldata({
        from: sourceTokenAddress,
        to: toTokenAddress,
        userAddress: fromCaipAddress
      });
      const address = CoreHelperUtil.getPlainAddress(response.tx.from);
      if (!address) {
        throw new Error("SwapController:createAllowanceTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gasPrice: BigInt(response.tx.eip155.gasPrice),
        value: BigInt(response.tx.value),
        toAmount: state2.toTokenAmount
      };
      state2.swapTransaction = void 0;
      state2.approvalTransaction = {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
      return {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create approval transaction");
      state2.approvalTransaction = void 0;
      state2.swapTransaction = void 0;
      state2.fetchError = true;
      return void 0;
    }
  },
  async createSwapTransaction() {
    const { networkAddress, fromCaipAddress, sourceTokenAmount } = SwapController.getParams();
    const sourceToken = state2.sourceToken;
    const toToken = state2.toToken;
    if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
      return void 0;
    }
    const amount = ConnectionController.parseUnits(sourceTokenAmount, sourceToken.decimals)?.toString();
    try {
      const response = await BlockchainApiController.generateSwapCalldata({
        userAddress: fromCaipAddress,
        from: sourceToken.address,
        to: toToken.address,
        amount,
        disableEstimate: true
      });
      const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
      const gas = BigInt(response.tx.eip155.gas);
      const gasPrice = BigInt(response.tx.eip155.gasPrice);
      const address = CoreHelperUtil.getPlainAddress(response.tx.to);
      if (!address) {
        throw new Error("SwapController:createSwapTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gas,
        gasPrice,
        value: isSourceTokenIsNetworkToken ? BigInt(amount ?? "0") : BigInt("0"),
        toAmount: state2.toTokenAmount
      };
      state2.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state2.networkPrice, gas, gasPrice);
      state2.approvalTransaction = void 0;
      state2.swapTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create transaction");
      state2.approvalTransaction = void 0;
      state2.swapTransaction = void 0;
      state2.fetchError = true;
      return void 0;
    }
  },
  onEmbeddedWalletApprovalSuccess() {
    SnackController.showLoading("Approve limit increase in your wallet");
    RouterController.replace("SwapPreview");
  },
  // -- Send Transactions --------------------------------- //
  async sendTransactionForApproval(data) {
    const { fromAddress, isAuthConnector } = SwapController.getParams();
    state2.loadingApprovalTransaction = true;
    const approveLimitMessage = `Approve limit increase in your wallet`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess: SwapController.onEmbeddedWalletApprovalSuccess
      });
    } else {
      SnackController.showLoading(approveLimitMessage);
    }
    try {
      await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil.CHAIN.EVM
      });
      await SwapController.swapTokens();
      await SwapController.getTransaction();
      state2.approvalTransaction = void 0;
      state2.loadingApprovalTransaction = false;
    } catch (err) {
      const error = err;
      state2.transactionError = error?.displayMessage;
      state2.loadingApprovalTransaction = false;
      SnackController.showError(error?.displayMessage || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_APPROVAL_ERROR",
        properties: {
          message: error?.displayMessage || error?.message || "Unknown",
          network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
          swapFromToken: SwapController.state.sourceToken?.symbol || "",
          swapToToken: SwapController.state.toToken?.symbol || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
    }
  },
  async sendTransactionForSwap(data) {
    if (!data) {
      return void 0;
    }
    const { fromAddress, toTokenAmount, isAuthConnector } = SwapController.getParams();
    state2.loadingTransaction = true;
    const snackbarPendingMessage = `Swapping ${state2.sourceToken?.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${state2.toToken?.symbol}`;
    const snackbarSuccessMessage = `Swapped ${state2.sourceToken?.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${state2.toToken?.symbol}`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess() {
          RouterController.replace("Account");
          SnackController.showLoading(snackbarPendingMessage);
          controller2.resetState();
        }
      });
    } else {
      SnackController.showLoading("Confirm transaction in your wallet");
    }
    try {
      const forceUpdateAddresses = [state2.sourceToken?.address, state2.toToken?.address].join(",");
      const transactionHash = await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil.CHAIN.EVM
      });
      state2.loadingTransaction = false;
      SnackController.showSuccess(snackbarSuccessMessage);
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_SUCCESS",
        properties: {
          network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
          swapFromToken: SwapController.state.sourceToken?.symbol || "",
          swapToToken: SwapController.state.toToken?.symbol || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      controller2.resetState();
      if (!isAuthConnector) {
        RouterController.replace("Account");
      }
      controller2.getMyTokensWithBalance(forceUpdateAddresses);
      return transactionHash;
    } catch (err) {
      const error = err;
      state2.transactionError = error?.displayMessage;
      state2.loadingTransaction = false;
      SnackController.showError(error?.displayMessage || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_ERROR",
        properties: {
          message: error?.displayMessage || error?.message || "Unknown",
          network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
          swapFromToken: SwapController.state.sourceToken?.symbol || "",
          swapToToken: SwapController.state.toToken?.symbol || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return void 0;
    }
  },
  // -- Checks -------------------------------------------- //
  hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
    const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state2.myTokensWithBalance);
    return isInsufficientSourceTokenForSwap;
  },
  // -- Calculations -------------------------------------- //
  setTransactionDetails() {
    const { toTokenAddress, toTokenDecimals } = SwapController.getParams();
    if (!toTokenAddress || !toTokenDecimals) {
      return;
    }
    state2.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state2.networkPrice, BigInt(state2.gasFee), BigInt(INITIAL_GAS_LIMIT));
    state2.priceImpact = SwapCalculationUtil.getPriceImpact({
      sourceTokenAmount: state2.sourceTokenAmount,
      sourceTokenPriceInUSD: state2.sourceTokenPriceInUSD,
      toTokenPriceInUSD: state2.toTokenPriceInUSD,
      toTokenAmount: state2.toTokenAmount
    });
    state2.maxSlippage = SwapCalculationUtil.getMaxSlippage(state2.slippage, state2.toTokenAmount);
    state2.providerFee = SwapCalculationUtil.getProviderFee(state2.sourceTokenAmount);
  }
};
var SwapController = withErrorBoundary(controller2);

// node_modules/@reown/appkit-controllers/node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());
var l = 1e3 * 1024;

// node_modules/@reown/appkit-controllers/node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events = __toESM(require_events());
var He = "wc";
var Ue = "universal_provider";
var $ = `${He}@2:${Ue}:`;
var T = "https://rpc.walletconnect.org/v1/";
var Be = `${T}bundler`;

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var addEmbeddedWalletSessionPromise = null;
var SIWXUtil = {
  getSIWX() {
    return OptionsController.state.siwx;
  },
  async initializeIfEnabled(caipAddress = ChainController.getActiveCaipAddress()) {
    const siwx = OptionsController.state.siwx;
    if (!(siwx && caipAddress)) {
      return;
    }
    const [namespace, chainId, address] = caipAddress.split(":");
    if (!ChainController.checkIfSupportedNetwork(namespace, `${namespace}:${chainId}`)) {
      return;
    }
    try {
      if (OptionsController.state.remoteFeatures?.emailCapture) {
        const user = ChainController.getAccountData(namespace)?.user;
        await ModalController.open({
          view: "DataCapture",
          data: {
            email: user?.email ?? void 0
          }
        });
        return;
      }
      if (addEmbeddedWalletSessionPromise) {
        await addEmbeddedWalletSessionPromise;
      }
      const sessions = await siwx.getSessions(`${namespace}:${chainId}`, address);
      if (sessions.length) {
        return;
      }
      await ModalController.open({
        view: "SIWXSignMessage"
      });
    } catch (error) {
      console.error("SIWXUtil:initializeIfEnabled", error);
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      await ConnectionController._getClient()?.disconnect().catch(console.error);
      RouterController.reset("Connect");
      SnackController.showError("A problem occurred while trying initialize authentication");
    }
  },
  async requestSignMessage() {
    const siwx = OptionsController.state.siwx;
    const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
    const network = getActiveCaipNetwork();
    const client = ConnectionController._getClient();
    if (!siwx) {
      throw new Error("SIWX is not enabled");
    }
    if (!address) {
      throw new Error("No ActiveCaipAddress found");
    }
    if (!network) {
      throw new Error("No ActiveCaipNetwork or client found");
    }
    if (!client) {
      throw new Error("No ConnectionController client found");
    }
    try {
      const siwxMessage = await siwx.createMessage({
        chainId: network.caipNetworkId,
        accountAddress: address
      });
      const message = siwxMessage.toString();
      const connectorId = ConnectorController.getConnectorId(network.chainNamespace);
      if (connectorId === ConstantsUtil.CONNECTOR_ID.AUTH) {
        RouterController.pushTransactionStack({});
      }
      const signature = await client.signMessage(message);
      await siwx.addSession({
        data: siwxMessage,
        message,
        signature
      });
      ChainController.setLastConnectedSIWECaipNetwork(network);
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      if (!ModalController.state.open || RouterController.state.view === "ApproveTransaction") {
        await ModalController.open({
          view: "SIWXSignMessage"
        });
      }
      SnackController.showError("Error signing message");
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      console.error("SWIXUtil:requestSignMessage", error);
    }
  },
  async cancelSignMessage() {
    try {
      const siwx = this.getSIWX();
      const isRequired = siwx?.getRequired?.();
      if (isRequired) {
        const lastNetwork = ChainController.getLastConnectedSIWECaipNetwork();
        if (lastNetwork) {
          const sessions = await siwx?.getSessions(lastNetwork?.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || "");
          if (sessions && sessions.length > 0) {
            await ChainController.switchActiveNetwork(lastNetwork);
          } else {
            await ConnectionController.disconnect();
          }
        } else {
          await ConnectionController.disconnect();
        }
      } else {
        ModalController.close();
      }
      ModalController.close();
      EventsController.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      console.error("SIWXUtil:cancelSignMessage", error);
    }
  },
  async getAllSessions() {
    const siwx = this.getSIWX();
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const sessions = [];
    await Promise.all(allRequestedCaipNetworks.map(async (caipNetwork) => {
      const session = await siwx?.getSessions(caipNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || "");
      if (session) {
        sessions.push(...session);
      }
    }));
    return sessions;
  },
  async getSessions(args) {
    const siwx = OptionsController.state.siwx;
    let address = args?.address;
    if (!address) {
      const activeCaipAddress = ChainController.getActiveCaipAddress();
      address = CoreHelperUtil.getPlainAddress(activeCaipAddress);
    }
    let network = args?.caipNetworkId;
    if (!network) {
      const activeCaipNetwork = ChainController.getActiveCaipNetwork();
      network = activeCaipNetwork?.caipNetworkId;
    }
    if (!(siwx && address && network)) {
      return [];
    }
    return siwx.getSessions(network, address);
  },
  async isSIWXCloseDisabled() {
    const siwx = this.getSIWX();
    if (siwx) {
      const isApproveSignScreen = RouterController.state.view === "ApproveTransaction";
      const isSiwxSignMessage = RouterController.state.view === "SIWXSignMessage";
      if (isApproveSignScreen || isSiwxSignMessage) {
        return siwx.getRequired?.() && (await this.getSessions()).length === 0;
      }
    }
    return false;
  },
  async authConnectorAuthenticate({ authConnector, chainId, socialUri, preferredAccountType, chainNamespace }) {
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    if (!siwx || !chainNamespace.includes(ConstantsUtil.CHAIN.EVM) || // Request to input email and sign message when email capture is enabled
    OptionsController.state.remoteFeatures?.emailCapture) {
      const result2 = await authConnector.connect({
        chainId,
        socialUri,
        preferredAccountType
      });
      return {
        address: result2.address,
        chainId: result2.chainId,
        accounts: result2.accounts
      };
    }
    const caipNetwork = `${chainNamespace}:${chainId}`;
    const siwxMessage = await siwx.createMessage({
      chainId: caipNetwork,
      accountAddress: "<<AccountAddress>>"
    });
    const siwxMessageData = {
      accountAddress: siwxMessage.accountAddress,
      chainId: siwxMessage.chainId,
      domain: siwxMessage.domain,
      uri: siwxMessage.uri,
      version: siwxMessage.version,
      nonce: siwxMessage.nonce,
      notBefore: siwxMessage.notBefore,
      statement: siwxMessage.statement,
      resources: siwxMessage.resources,
      requestId: siwxMessage.requestId,
      issuedAt: siwxMessage.issuedAt,
      expirationTime: siwxMessage.expirationTime,
      serializedMessage: siwxMessage.toString()
    };
    const result = await authConnector.connect({
      chainId,
      socialUri,
      siwxMessage: siwxMessageData,
      preferredAccountType
    });
    siwxMessageData.accountAddress = result.address;
    siwxMessageData.serializedMessage = result.message || "";
    if (result.signature && result.message) {
      const promise = SIWXUtil.addEmbeddedWalletSession(siwxMessageData, result.message, result.signature);
      await promise;
    }
    ChainController.setLastConnectedSIWECaipNetwork(network);
    return {
      address: result.address,
      chainId: result.chainId,
      accounts: result.accounts
    };
  },
  async addEmbeddedWalletSession(siwxMessageData, message, signature) {
    if (addEmbeddedWalletSessionPromise) {
      return addEmbeddedWalletSessionPromise;
    }
    const siwx = SIWXUtil.getSIWX();
    if (!siwx) {
      return Promise.resolve();
    }
    addEmbeddedWalletSessionPromise = siwx.addSession({
      data: siwxMessageData,
      message,
      signature
    }).finally(() => {
      addEmbeddedWalletSessionPromise = null;
    });
    return addEmbeddedWalletSessionPromise;
  },
  async universalProviderAuthenticate({ universalProvider, chains, methods }) {
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    const namespaces = new Set(chains.map((chain) => chain.split(":")[0]));
    if (!siwx || namespaces.size !== 1 || !namespaces.has("eip155")) {
      return false;
    }
    const siwxMessage = await siwx.createMessage({
      chainId: getActiveCaipNetwork()?.caipNetworkId || "",
      accountAddress: ""
    });
    const result = await universalProvider.authenticate({
      nonce: siwxMessage.nonce,
      domain: siwxMessage.domain,
      uri: siwxMessage.uri,
      exp: siwxMessage.expirationTime,
      iat: siwxMessage.issuedAt,
      nbf: siwxMessage.notBefore,
      requestId: siwxMessage.requestId,
      version: siwxMessage.version,
      resources: siwxMessage.resources,
      statement: siwxMessage.statement,
      chainId: siwxMessage.chainId,
      methods,
      // The first chainId is what is used for universal provider to build the message
      chains: [siwxMessage.chainId, ...chains.filter((chain) => chain !== siwxMessage.chainId)]
    });
    SnackController.showLoading("Authenticating...", { autoClose: false });
    const walletInfo = {
      ...result.session.peer.metadata,
      name: result.session.peer.metadata.name,
      icon: result.session.peer.metadata.icons?.[0],
      type: "WALLET_CONNECT"
    };
    ChainController.setAccountProp("connectedWalletInfo", walletInfo, Array.from(namespaces)[0]);
    if (result?.auths?.length) {
      const sessions = result.auths.map((cacao) => {
        const message = universalProvider.client.formatAuthMessage({
          request: cacao.p,
          iss: cacao.p.iss
        });
        return {
          data: {
            ...cacao.p,
            accountAddress: cacao.p.iss.split(":").slice(-1).join(""),
            chainId: cacao.p.iss.split(":").slice(2, 4).join(":"),
            uri: cacao.p.aud,
            version: cacao.p.version || siwxMessage.version,
            expirationTime: cacao.p.exp,
            issuedAt: cacao.p.iat,
            notBefore: cacao.p.nbf
          },
          message,
          signature: cacao.s.s,
          cacao
        };
      });
      try {
        await siwx.setSessions(sessions);
        if (network) {
          ChainController.setLastConnectedSIWECaipNetwork(network);
        }
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: SIWXUtil.getSIWXEventProperties()
        });
      } catch (error) {
        console.error("SIWX:universalProviderAuth - failed to set sessions", error);
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: SIWXUtil.getSIWXEventProperties(error)
        });
        await universalProvider.disconnect().catch(console.error);
        throw error;
      } finally {
        SnackController.hide();
      }
    }
    return true;
  },
  getSIWXEventProperties(error) {
    const namespace = ChainController.state.activeChain;
    if (!namespace) {
      throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
    }
    return {
      network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
      isSmartAccount: getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
      message: error ? CoreHelperUtil.parseError(error) : void 0
    };
  },
  async clearSessions() {
    const siwx = this.getSIWX();
    if (siwx) {
      await siwx.setSessions([]);
    }
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/ModalUtil.js
var ModalUtil = {
  isUnsupportedChainView() {
    return RouterController.state.view === "UnsupportedChain" || RouterController.state.view === "SwitchNetwork" && RouterController.state.history.includes("UnsupportedChain");
  },
  async safeClose() {
    if (this.isUnsupportedChainView()) {
      ModalController.shake();
      return;
    }
    const isSIWXCloseDisabled = await SIWXUtil.isSIWXCloseDisabled();
    if (isSIWXCloseDisabled) {
      ModalController.shake();
      return;
    }
    if (RouterController.state.view === "DataCapture" || RouterController.state.view === "DataCaptureOtpConfirm") {
      ConnectionController.disconnect();
    }
    ModalController.close();
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ProviderController.js
var CLEAN_PROVIDERS_STATE = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0,
  sui: void 0,
  stacks: void 0
};
var state3 = proxy({
  providers: { ...CLEAN_PROVIDERS_STATE },
  providerIds: { ...CLEAN_PROVIDERS_STATE }
});
var ProviderController = {
  state: state3,
  subscribeKey(key, callback) {
    return subscribeKey(state3, key, callback);
  },
  subscribe(callback) {
    return subscribe(state3, () => {
      callback(state3);
    });
  },
  subscribeProviders(callback) {
    return subscribe(state3.providers, () => callback(state3.providers));
  },
  setProvider(chainNamespace, provider) {
    if (chainNamespace && provider) {
      state3.providers[chainNamespace] = ref(provider);
    }
  },
  getProvider(chainNamespace) {
    if (!chainNamespace) {
      return void 0;
    }
    return state3.providers[chainNamespace];
  },
  setProviderId(chainNamespace, providerId) {
    if (providerId) {
      state3.providerIds[chainNamespace] = providerId;
    }
  },
  getProviderId(chainNamespace) {
    if (!chainNamespace) {
      return void 0;
    }
    return state3.providerIds[chainNamespace];
  },
  reset() {
    state3.providers = { ...CLEAN_PROVIDERS_STATE };
    state3.providerIds = { ...CLEAN_PROVIDERS_STATE };
  },
  resetChain(chainNamespace) {
    state3.providers[chainNamespace] = void 0;
    state3.providerIds[chainNamespace] = void 0;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OnRampController.js
var USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
var USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
};
var defaultState = {
  providers: ONRAMP_PROVIDERS,
  selectedProvider: null,
  error: null,
  purchaseCurrency: USDC_CURRENCY_DEFAULT,
  paymentCurrency: USD_CURRENCY_DEFAULT,
  purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
  paymentCurrencies: [],
  quotesLoading: false
};
var state4 = proxy(defaultState);
var controller3 = {
  state: state4,
  subscribe(callback) {
    return subscribe(state4, () => callback(state4));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state4, key, callback);
  },
  setSelectedProvider(provider) {
    if (provider && provider.name === "meld") {
      const activeChain = ChainController.state.activeChain;
      const currency = activeChain === ConstantsUtil.CHAIN.SOLANA ? "SOL" : "USDC";
      const address = activeChain ? ChainController.state.chains.get(activeChain)?.accountState?.address ?? "" : "";
      const url = new URL(provider.url);
      url.searchParams.append("publicKey", MELD_PUBLIC_KEY);
      url.searchParams.append("destinationCurrencyCode", currency);
      url.searchParams.append("walletAddress", address);
      url.searchParams.append("externalCustomerId", OptionsController.state.projectId);
      state4.selectedProvider = { ...provider, url: url.toString() };
    } else {
      state4.selectedProvider = provider;
    }
  },
  setOnrampProviders(providers) {
    if (Array.isArray(providers) && providers.every((item) => typeof item === "string")) {
      const validOnramp = providers;
      const newProviders = ONRAMP_PROVIDERS.filter((provider) => validOnramp.includes(provider.name));
      state4.providers = newProviders;
    } else {
      state4.providers = [];
    }
  },
  setPurchaseCurrency(currency) {
    state4.purchaseCurrency = currency;
  },
  setPaymentCurrency(currency) {
    state4.paymentCurrency = currency;
  },
  setPurchaseAmount(amount) {
    OnRampController.state.purchaseAmount = amount;
  },
  setPaymentAmount(amount) {
    OnRampController.state.paymentAmount = amount;
  },
  async getAvailableCurrencies() {
    const options = await BlockchainApiController.getOnrampOptions();
    state4.purchaseCurrencies = options.purchaseCurrencies;
    state4.paymentCurrencies = options.paymentCurrencies;
    state4.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
    state4.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    state4.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state4.purchaseCurrency,
        paymentCurrency: state4.paymentCurrency,
        amount: state4.paymentAmount?.toString() || "0",
        network: state4.purchaseCurrency?.symbol
      });
      state4.quotesLoading = false;
      state4.purchaseAmount = Number(quote?.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state4.error = error.message;
      state4.quotesLoading = false;
      return null;
    } finally {
      state4.quotesLoading = false;
    }
  },
  resetState() {
    state4.selectedProvider = null;
    state4.error = null;
    state4.purchaseCurrency = USDC_CURRENCY_DEFAULT;
    state4.paymentCurrency = USD_CURRENCY_DEFAULT;
    state4.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
    state4.paymentCurrencies = [];
    state4.paymentAmount = void 0;
    state4.purchaseAmount = void 0;
    state4.quotesLoading = false;
  }
};
var OnRampController = withErrorBoundary(controller3);

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js
var state5 = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
var controller4 = {
  state: state5,
  subscribe(callback) {
    return subscribe(state5, () => callback(state5));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state5, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state5.open = true;
    state5.message = message;
    state5.triggerRect = triggerRect;
    state5.variant = variant;
  },
  hide() {
    state5.open = false;
    state5.message = "";
    state5.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};
var TooltipController = withErrorBoundary(controller4);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/EnsUtil.js
var SLIP44_MSB = 2147483648;
var EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};

// node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EnsController.js
var state6 = proxy({
  suggestions: [],
  loading: false
});
var controller5 = {
  state: state6,
  subscribe(callback) {
    return subscribe(state6, () => callback(state6));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state6, key, callback);
  },
  async resolveName(name) {
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e4) {
      const error = e4;
      throw new Error(error?.reasons?.[0]?.description || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
      return false;
    }
  },
  async getSuggestions(value) {
    try {
      state6.loading = true;
      state6.suggestions = [];
      const response = await BlockchainApiController.getEnsNameSuggestions(value);
      state6.suggestions = response.suggestions || [];
      return state6.suggestions;
    } catch (e4) {
      const errorMessage = EnsController.parseEnsApiError(e4, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
      state6.loading = false;
    }
  },
  async getNamesForAddress(address) {
    try {
      const network = ChainController.state.activeCaipNetwork;
      if (!network) {
        return [];
      }
      const cachedEns = StorageUtil.getEnsFromCacheForAddress(address);
      if (cachedEns) {
        return cachedEns;
      }
      const response = await BlockchainApiController.reverseLookupEnsName({ address });
      StorageUtil.updateEnsCache({
        address,
        ens: response,
        timestamp: Date.now()
      });
      return response;
    } catch (e4) {
      const errorMessage = EnsController.parseEnsApiError(e4, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    const network = ChainController.state.activeCaipNetwork;
    const address = ChainController.getAccountData(network?.chainNamespace)?.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!network) {
      throw new Error("Network not found");
    }
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state6.loading = true;
    try {
      const message = JSON.stringify({
        name,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        onCancel() {
          RouterController.replace("RegisterAccountName");
        }
      });
      const signature = await ConnectionController.signMessage(message);
      state6.loading = false;
      const networkId = network.id;
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      ChainController.setAccountProp("profileName", name, network.chainNamespace);
      StorageUtil.updateEnsCache({
        address,
        ens: [
          {
            name,
            registered_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: void 0,
            addresses: {},
            attributes: []
          }
        ],
        timestamp: Date.now()
      });
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e4) {
      const errorMessage = EnsController.parseEnsApiError(e4, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state6.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    const ensError = error;
    return ensError?.reasons?.[0]?.description || defaultError;
  }
};
var EnsController = withErrorBoundary(controller5);

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/ExchangeUtil.js
var baseUSDC = {
  network: "eip155:8453",
  asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  metadata: {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6
  }
};
var baseSepoliaUSDC = {
  network: "eip155:84532",
  asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  metadata: {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6
  }
};

// node_modules/lit-html/lit-html.js
var t = globalThis;
var i = (t3) => t3;
var s2 = t.trustedTypes;
var e = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var h2 = "$lit$";
var o2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n = "?" + o2;
var r = `<${n}>`;
var l2 = document;
var c = () => l2.createComment("");
var a = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var u = Array.isArray;
var d = (t3) => u(t3) || "function" == typeof t3?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $2 = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
var b = x(1);
var w = x(2);
var T2 = x(3);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t3, i5) {
  if (!u(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i5) : i5;
}
var N2 = (t3, i5) => {
  const s5 = t3.length - 1, e4 = [];
  let n4, l4 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s5; i6++) {
    const s6 = t3[i6];
    let a3, u3, d3 = -1, f4 = 0;
    for (; f4 < s6.length && (c4.lastIndex = f4, u3 = c4.exec(s6), null !== u3); ) f4 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p) : void 0 !== u3[3] && (c4 = p) : c4 === p ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p : '"' === u3[3] ? $2 : g) : c4 === $2 || c4 === g ? c4 = p : c4 === _ || c4 === m ? c4 = v : (c4 = p, n4 = void 0);
    const x2 = c4 === p && t3[i6 + 1].startsWith("/>") ? " " : "";
    l4 += c4 === v ? s6 + r : d3 >= 0 ? (e4.push(a3), s6.slice(0, d3) + h2 + s6.slice(d3) + o2 + x2) : s6 + o2 + (-2 === d3 ? i6 : x2);
  }
  return [V(t3, l4 + (t3[s5] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
};
var S = class _S {
  constructor({ strings: t3, _$litType$: i5 }, e4) {
    let r4;
    this.parts = [];
    let l4 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f4, v2] = N2(t3, i5);
    if (this.el = _S.createElement(f4, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(h2)) {
          const i6 = v2[a3++], s5 = r4.getAttribute(t4).split(o2), e5 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l4, name: e5[2], strings: s5, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t4);
        } else t4.startsWith(o2) && (d3.push({ type: 6, index: l4 }), r4.removeAttribute(t4));
        if (y.test(r4.tagName)) {
          const t4 = r4.textContent.split(o2), i6 = t4.length - 1;
          if (i6 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s5 = 0; s5 < i6; s5++) r4.append(t4[s5], c()), P.nextNode(), d3.push({ type: 2, index: ++l4 });
            r4.append(t4[i6], c());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n) d3.push({ type: 2, index: l4 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r4.data.indexOf(o2, t4 + 1)); ) d3.push({ type: 7, index: l4 }), t4 += o2.length - 1;
      }
      l4++;
    }
  }
  static createElement(t3, i5) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function M(t3, i5, s5 = t3, e4) {
  if (i5 === E) return i5;
  let h4 = void 0 !== e4 ? s5._$Co?.[e4] : s5._$Cl;
  const o6 = a(i5) ? void 0 : i5._$litDirective$;
  return h4?.constructor !== o6 && (h4?._$AO?.(false), void 0 === o6 ? h4 = void 0 : (h4 = new o6(t3), h4._$AT(t3, s5, e4)), void 0 !== e4 ? (s5._$Co ??= [])[e4] = h4 : s5._$Cl = h4), void 0 !== h4 && (i5 = M(t3, h4._$AS(t3, i5.values), h4, e4)), i5;
}
var R = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const { el: { content: i5 }, parts: s5 } = this._$AD, e4 = (t3?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e4;
    let h4 = P.nextNode(), o6 = 0, n4 = 0, r4 = s5[0];
    for (; void 0 !== r4; ) {
      if (o6 === r4.index) {
        let i6;
        2 === r4.type ? i6 = new k2(h4, h4.nextSibling, this, t3) : 1 === r4.type ? i6 = new r4.ctor(h4, r4.name, r4.strings, this, t3) : 6 === r4.type && (i6 = new Z(h4, this, t3)), this._$AV.push(i6), r4 = s5[++n4];
      }
      o6 !== r4?.index && (h4 = P.nextNode(), o6++);
    }
    return P.currentNode = l2, e4;
  }
  p(t3) {
    let i5 = 0;
    for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
  }
};
var k2 = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i5, s5, e4) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e4, this._$Cv = e4?.isConnected ?? true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = M(this, t3, i5), a(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    const { values: i5, _$litType$: s5 } = t3, e4 = "number" == typeof s5 ? this._$AC(t3) : (void 0 === s5.el && (s5.el = S.createElement(V(s5.h, s5.h[0]), this.options)), s5);
    if (this._$AH?._$AD === e4) this._$AH.p(i5);
    else {
      const t4 = new R(e4, this), s6 = t4.u(this.options);
      t4.p(i5), this.T(s6), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = C.get(t3.strings);
    return void 0 === i5 && C.set(t3.strings, i5 = new S(t3)), i5;
  }
  k(t3) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s5, e4 = 0;
    for (const h4 of t3) e4 === i5.length ? i5.push(s5 = new _k(this.O(c()), this.O(c()), this, this.options)) : s5 = i5[e4], s5._$AI(h4), e4++;
    e4 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, s5) {
    for (this._$AP?.(false, true, s5); t3 !== this._$AB; ) {
      const s6 = i(t3).nextSibling;
      i(t3).remove(), t3 = s6;
    }
  }
  setConnected(t3) {
    void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s5, e4, h4) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h4, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
  }
  _$AI(t3, i5 = this, s5, e4) {
    const h4 = this.strings;
    let o6 = false;
    if (void 0 === h4) t3 = M(this, t3, i5, 0), o6 = !a(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r4;
      for (t3 = h4[0], n4 = 0; n4 < h4.length - 1; n4++) r4 = M(this, e5[s5 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o6 ||= !a(r4) || r4 !== this._$AH[n4], r4 === A ? t3 = A : t3 !== A && (t3 += (r4 ?? "") + h4[n4 + 1]), this._$AH[n4] = r4;
    }
    o6 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
  }
};
var z = class extends H {
  constructor(t3, i5, s5, e4, h4) {
    super(t3, i5, s5, e4, h4), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
    const s5 = this._$AH, e4 = t3 === A && s5 !== A || t3.capture !== s5.capture || t3.once !== s5.once || t3.passive !== s5.passive, h4 = t3 !== A && (s5 === A || e4);
    e4 && this.element.removeEventListener(this.name, this, s5), h4 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i5, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    M(this, t3);
  }
};
var j = { M: h2, P: o2, A: n, C: 1, L: N2, R, D: d, V: M, I: k2, H, N: L, U: z, B: I, F: Z };
var B = t.litHtmlPolyfillSupport;
B?.(S, k2), (t.litHtmlVersions ??= []).push("3.3.3");
var D = (t3, i5, s5) => {
  const e4 = s5?.renderBefore ?? i5;
  let h4 = e4._$litPart$;
  if (void 0 === h4) {
    const t4 = s5?.renderBefore ?? null;
    e4._$litPart$ = h4 = new k2(i5.insertBefore(c(), t4), t4, void 0, s5 ?? {});
  }
  return h4._$AI(t3), h4;
};

// node_modules/@lit/reactive-element/css-tag.js
var t2 = globalThis;
var e2 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s3 = Symbol();
var o3 = /* @__PURE__ */ new WeakMap();
var n2 = class {
  constructor(t3, e4, o6) {
    if (this._$cssResult$ = true, o6 !== s3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e4;
  }
  get styleSheet() {
    let t3 = this.o;
    const s5 = this.t;
    if (e2 && void 0 === t3) {
      const e4 = void 0 !== s5 && 1 === s5.length;
      e4 && (t3 = o3.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o3.set(s5, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r2 = (t3) => new n2("string" == typeof t3 ? t3 : t3 + "", void 0, s3);
var i2 = (t3, ...e4) => {
  const o6 = 1 === t3.length ? t3[0] : e4.reduce((e5, s5, o7) => e5 + ((t4) => {
    if (true === t4._$cssResult$) return t4.cssText;
    if ("number" == typeof t4) return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t3[o7 + 1], t3[0]);
  return new n2(o6, t3, s3);
};
var S2 = (s5, o6) => {
  if (e2) s5.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e4 of o6) {
    const o7 = document.createElement("style"), n4 = t2.litNonce;
    void 0 !== n4 && o7.setAttribute("nonce", n4), o7.textContent = e4.cssText, s5.appendChild(o7);
  }
};
var c2 = e2 ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const s5 of t4.cssRules) e4 += s5.cssText;
  return r2(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i3, defineProperty: e3, getOwnPropertyDescriptor: h3, getOwnPropertyNames: r3, getOwnPropertySymbols: o4, getPrototypeOf: n3 } = Object;
var a2 = globalThis;
var c3 = a2.trustedTypes;
var l3 = c3 ? c3.emptyScript : "";
var p2 = a2.reactiveElementPolyfillSupport;
var d2 = (t3, s5) => t3;
var u2 = { toAttribute(t3, s5) {
  switch (s5) {
    case Boolean:
      t3 = t3 ? l3 : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s5) {
  let i5 = t3;
  switch (s5) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f3 = (t3, s5) => !i3(t3, s5);
var b2 = { attribute: true, type: String, converter: u2, reflect: false, useDefault: false, hasChanged: f3 };
Symbol.metadata ??= Symbol("metadata"), a2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y2 = class extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ??= []).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s5 = b2) {
    if (s5.state && (s5.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s5 = Object.create(s5)).wrapped = true), this.elementProperties.set(t3, s5), !s5.noAccessor) {
      const i5 = Symbol(), h4 = this.getPropertyDescriptor(t3, i5, s5);
      void 0 !== h4 && e3(this.prototype, t3, h4);
    }
  }
  static getPropertyDescriptor(t3, s5, i5) {
    const { get: e4, set: r4 } = h3(this.prototype, t3) ?? { get() {
      return this[s5];
    }, set(t4) {
      this[s5] = t4;
    } };
    return { get: e4, set(s6) {
      const h4 = e4?.call(this);
      r4?.call(this, s6), this.requestUpdate(t3, h4, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? b2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d2("elementProperties"))) return;
    const t3 = n3(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d2("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d2("properties"))) {
      const t4 = this.properties, s5 = [...r3(t4), ...o4(t4)];
      for (const i5 of s5) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s5 = litPropertyMetadata.get(t3);
      if (void 0 !== s5) for (const [t4, i5] of s5) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s5] of this.elementProperties) {
      const i5 = this._$Eu(t4, s5);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s5) {
    const i5 = [];
    if (Array.isArray(s5)) {
      const e4 = new Set(s5.flat(1 / 0).reverse());
      for (const s6 of e4) i5.unshift(c2(s6));
    } else void 0 !== s5 && i5.push(c2(s5));
    return i5;
  }
  static _$Eu(t3, s5) {
    const i5 = s5.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$EO?.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
    for (const i5 of s5.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S2(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s5, i5) {
    this._$AK(t3, i5);
  }
  _$ET(t3, s5) {
    const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const h4 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u2).toAttribute(s5, i5.type);
      this._$Em = t3, null == h4 ? this.removeAttribute(e4) : this.setAttribute(e4, h4), this._$Em = null;
    }
  }
  _$AK(t3, s5) {
    const i5 = this.constructor, e4 = i5._$Eh.get(t3);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t4 = i5.getPropertyOptions(e4), h4 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u2;
      this._$Em = e4;
      const r4 = h4.fromAttribute(s5, t4.type);
      this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t3, s5, i5, e4 = false, h4) {
    if (void 0 !== t3) {
      const r4 = this.constructor;
      if (false === e4 && (h4 = this[t3]), i5 ??= r4.getPropertyOptions(t3), !((i5.hasChanged ?? f3)(h4, s5) || i5.useDefault && i5.reflect && h4 === this._$Ej?.get(t3) && !this.hasAttribute(r4._$Eu(t3, i5)))) return;
      this.C(t3, s5, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t3, s5, { useDefault: i5, reflect: e4, wrapped: h4 }, r4) {
    i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r4 ?? s5 ?? this[t3]), true !== h4 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s5 = void 0), this._$AL.set(t3, s5)), true === e4 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t5, s6] of this._$Ep) this[t5] = s6;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s6, i5] of t4) {
        const { wrapped: t5 } = i5, e4 = this[s6];
        true !== t5 || this._$AL.has(s6) || void 0 === e4 || this.C(s6, void 0, i5, e4);
      }
    }
    let t3 = false;
    const s5 = this._$AL;
    try {
      t3 = this.shouldUpdate(s5), t3 ? (this.willUpdate(s5), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s5)) : this._$EM();
    } catch (s6) {
      throw t3 = false, this._$EM(), s6;
    }
    t3 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
y2.elementStyles = [], y2.shadowRootOptions = { mode: "open" }, y2[d2("elementProperties")] = /* @__PURE__ */ new Map(), y2[d2("finalized")] = /* @__PURE__ */ new Map(), p2?.({ ReactiveElement: y2 }), (a2.reactiveElementVersions ??= []).push("2.1.2");

// node_modules/lit-element/lit-element.js
var s4 = globalThis;
var i4 = class extends y2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t3 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t3.firstChild, t3;
  }
  update(t3) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s4.litElementHydrateSupport?.({ LitElement: i4 });
var o5 = s4.litElementPolyfillSupport;
o5?.({ LitElement: i4 });
(s4.litElementVersions ??= []).push("4.2.2");

// node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeConstantsUtil.js
var colors = {
  black: "#202020",
  white: "#FFFFFF",
  white010: "rgba(255, 255, 255, 0.1)",
  accent010: "rgba(9, 136, 240, 0.1)",
  accent020: "rgba(9, 136, 240, 0.2)",
  accent030: "rgba(9, 136, 240, 0.3)",
  accent040: "rgba(9, 136, 240, 0.4)",
  accent050: "rgba(9, 136, 240, 0.5)",
  accent060: "rgba(9, 136, 240, 0.6)",
  accent070: "rgba(9, 136, 240, 0.7)",
  accent080: "rgba(9, 136, 240, 0.8)",
  accent090: "rgba(9, 136, 240, 0.9)",
  accent100: "rgba(9, 136, 240, 1.0)",
  accentSecondary010: "rgba(199, 185, 148, 0.1)",
  accentSecondary020: "rgba(199, 185, 148, 0.2)",
  accentSecondary030: "rgba(199, 185, 148, 0.3)",
  accentSecondary040: "rgba(199, 185, 148, 0.4)",
  accentSecondary050: "rgba(199, 185, 148, 0.5)",
  accentSecondary060: "rgba(199, 185, 148, 0.6)",
  accentSecondary070: "rgba(199, 185, 148, 0.7)",
  accentSecondary080: "rgba(199, 185, 148, 0.8)",
  accentSecondary090: "rgba(199, 185, 148, 0.9)",
  accentSecondary100: "rgba(199, 185, 148, 1.0)",
  productWalletKit: "#FFB800",
  productAppKit: "#FF573B",
  productCloud: "#0988F0",
  productDocumentation: "#008847",
  neutrals050: "#F6F6F6",
  neutrals100: "#F3F3F3",
  neutrals200: "#E9E9E9",
  neutrals300: "#D0D0D0",
  neutrals400: "#BBB",
  neutrals500: "#9A9A9A",
  neutrals600: "#6C6C6C",
  neutrals700: "#4F4F4F",
  neutrals800: "#363636",
  neutrals900: "#2A2A2A",
  neutrals1000: "#252525",
  semanticSuccess010: "rgba(48, 164, 107, 0.1)",
  semanticSuccess020: "rgba(48, 164, 107, 0.2)",
  semanticSuccess030: "rgba(48, 164, 107, 0.3)",
  semanticSuccess040: "rgba(48, 164, 107, 0.4)",
  semanticSuccess050: "rgba(48, 164, 107, 0.5)",
  semanticSuccess060: "rgba(48, 164, 107, 0.6)",
  semanticSuccess070: "rgba(48, 164, 107, 0.7)",
  semanticSuccess080: "rgba(48, 164, 107, 0.8)",
  semanticSuccess090: "rgba(48, 164, 107, 0.9)",
  semanticSuccess100: "rgba(48, 164, 107, 1.0)",
  semanticError010: "rgba(223, 74, 52, 0.1)",
  semanticError020: "rgba(223, 74, 52, 0.2)",
  semanticError030: "rgba(223, 74, 52, 0.3)",
  semanticError040: "rgba(223, 74, 52, 0.4)",
  semanticError050: "rgba(223, 74, 52, 0.5)",
  semanticError060: "rgba(223, 74, 52, 0.6)",
  semanticError070: "rgba(223, 74, 52, 0.7)",
  semanticError080: "rgba(223, 74, 52, 0.8)",
  semanticError090: "rgba(223, 74, 52, 0.9)",
  semanticError100: "rgba(223, 74, 52, 1.0)",
  semanticWarning010: "rgba(243, 161, 63, 0.1)",
  semanticWarning020: "rgba(243, 161, 63, 0.2)",
  semanticWarning030: "rgba(243, 161, 63, 0.3)",
  semanticWarning040: "rgba(243, 161, 63, 0.4)",
  semanticWarning050: "rgba(243, 161, 63, 0.5)",
  semanticWarning060: "rgba(243, 161, 63, 0.6)",
  semanticWarning070: "rgba(243, 161, 63, 0.7)",
  semanticWarning080: "rgba(243, 161, 63, 0.8)",
  semanticWarning090: "rgba(243, 161, 63, 0.9)",
  semanticWarning100: "rgba(243, 161, 63, 1.0)"
};
var tokens = {
  core: {
    backgroundAccentPrimary: "#0988F0",
    backgroundAccentCertified: "#C7B994",
    backgroundWalletKit: "#FFB800",
    backgroundAppKit: "#FF573B",
    backgroundCloud: "#0988F0",
    backgroundDocumentation: "#008847",
    backgroundSuccess: "rgba(48, 164, 107, 0.20)",
    backgroundError: "rgba(223, 74, 52, 0.20)",
    backgroundWarning: "rgba(243, 161, 63, 0.20)",
    textAccentPrimary: "#0988F0",
    textAccentCertified: "#C7B994",
    textWalletKit: "#FFB800",
    textAppKit: "#FF573B",
    textCloud: "#0988F0",
    textDocumentation: "#008847",
    textSuccess: "#30A46B",
    textError: "#DF4A34",
    textWarning: "#F3A13F",
    borderAccentPrimary: "#0988F0",
    borderSecondary: "#C7B994",
    borderSuccess: "#30A46B",
    borderError: "#DF4A34",
    borderWarning: "#F3A13F",
    foregroundAccent010: "rgba(9, 136, 240, 0.1)",
    foregroundAccent020: "rgba(9, 136, 240, 0.2)",
    foregroundAccent040: "rgba(9, 136, 240, 0.4)",
    foregroundAccent060: "rgba(9, 136, 240, 0.6)",
    foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
    foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
    foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
    iconAccentPrimary: "#0988F0",
    iconAccentCertified: "#C7B994",
    iconSuccess: "#30A46B",
    iconError: "#DF4A34",
    iconWarning: "#F3A13F",
    glass010: "rgba(255, 255, 255, 0.1)",
    zIndex: "9999"
  },
  dark: {
    overlay: "rgba(0, 0, 0, 0.50)",
    backgroundPrimary: "#202020",
    backgroundInvert: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A9A9A",
    textTertiary: "#BBBBBB",
    textInvert: "#202020",
    borderPrimary: "#2A2A2A",
    borderPrimaryDark: "#363636",
    borderSecondary: "#4F4F4F",
    foregroundPrimary: "#252525",
    foregroundSecondary: "#2A2A2A",
    foregroundTertiary: "#363636",
    iconDefault: "#9A9A9A",
    iconInverse: "#FFFFFF"
  },
  light: {
    overlay: "rgba(230 , 230, 230, 0.5)",
    backgroundPrimary: "#FFFFFF",
    borderPrimaryDark: "#E9E9E9",
    backgroundInvert: "#202020",
    textPrimary: "#202020",
    textSecondary: "#9A9A9A",
    textTertiary: "#6C6C6C",
    textInvert: "#FFFFFF",
    borderPrimary: "#E9E9E9",
    borderSecondary: "#D0D0D0",
    foregroundPrimary: "#F3F3F3",
    foregroundSecondary: "#E9E9E9",
    foregroundTertiary: "#D0D0D0",
    iconDefault: "#9A9A9A",
    iconInverse: "#202020"
  }
};
var borderRadius = {
  "1": "4px",
  "2": "8px",
  "10": "10px",
  "3": "12px",
  "4": "16px",
  "6": "24px",
  "5": "20px",
  "8": "32px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px",
  "128": "512px",
  round: "9999px"
};
var spacing = {
  "0": "0px",
  "01": "2px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px"
};
var fontFamily = {
  regular: "KHTeka",
  mono: "KHTekaMono"
};
var fontWeight = {
  regular: "400",
  medium: "500"
};
var textSize = {
  h1: "50px",
  h2: "44px",
  h3: "38px",
  h4: "32px",
  h5: "26px",
  h6: "20px",
  large: "16px",
  medium: "14px",
  small: "12px"
};
var typography = {
  "h1-regular-mono": { lineHeight: "50px", letterSpacing: "-3px" },
  "h1-regular": { lineHeight: "50px", letterSpacing: "-1px" },
  "h1-medium": { lineHeight: "50px", letterSpacing: "-0.84px" },
  "h2-regular-mono": { lineHeight: "44px", letterSpacing: "-2.64px" },
  "h2-regular": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h2-medium": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h3-regular-mono": { lineHeight: "38px", letterSpacing: "-2.28px" },
  "h3-regular": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h3-medium": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h4-regular-mono": { lineHeight: "32px", letterSpacing: "-1.92px" },
  "h4-regular": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h4-medium": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h5-regular-mono": { lineHeight: "26px", letterSpacing: "-1.56px" },
  "h5-regular": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h5-medium": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h6-regular-mono": { lineHeight: "20px", letterSpacing: "-1.2px" },
  "h6-regular": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "h6-medium": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "lg-regular-mono": { lineHeight: "16px", letterSpacing: "-0.96px" },
  "lg-regular": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "lg-medium": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "md-regular-mono": { lineHeight: "14px", letterSpacing: "-0.84px" },
  "md-regular": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "md-medium": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "sm-regular-mono": { lineHeight: "12px", letterSpacing: "-0.72px" },
  "sm-regular": { lineHeight: "14px", letterSpacing: "-0.12px" },
  "sm-medium": { lineHeight: "14px", letterSpacing: "-0.12px" }
};
var easings = {
  "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
  "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
  "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
  "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
  "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
  "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
};
var durations = {
  xl: "400ms",
  lg: "200ms",
  md: "125ms",
  sm: "75ms"
};
var styles = {
  colors,
  fontFamily,
  fontWeight,
  textSize,
  typography,
  tokens: {
    core: tokens.core,
    theme: tokens.dark
  },
  borderRadius,
  spacing,
  durations,
  easings
};

// node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var PREFIX_VAR = "--apkt";
var ThemeHelperUtil = {
  createCSSVariables(styles2) {
    const cssVariables = {};
    const cssVariablesVarPrefix = {};
    function createVars(_styles, parent, currentVar = "") {
      for (const [styleKey, styleValue] of Object.entries(_styles)) {
        const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
        if (styleValue && typeof styleValue === "object" && Object.keys(styleValue).length) {
          parent[styleKey] = {};
          createVars(styleValue, parent[styleKey], variable);
        } else if (typeof styleValue === "string") {
          parent[styleKey] = `${PREFIX_VAR}-${variable}`;
        }
      }
    }
    function addVarsPrefix(_styles, parent) {
      for (const [key, value] of Object.entries(_styles)) {
        if (value && typeof value === "object") {
          parent[key] = {};
          addVarsPrefix(value, parent[key]);
        } else if (typeof value === "string") {
          parent[key] = `var(${value})`;
        }
      }
    }
    createVars(styles2, cssVariables);
    addVarsPrefix(cssVariables, cssVariablesVarPrefix);
    return { cssVariables, cssVariablesVarPrefix };
  },
  assignCSSVariables(vars2, styles2) {
    const assignedCSSVariables = {};
    function assignVars(_vars, _styles, variable) {
      for (const [varKey, varValue] of Object.entries(_vars)) {
        const nextVariable = variable ? `${variable}-${varKey}` : varKey;
        const styleValues = _styles[varKey];
        if (varValue && typeof varValue === "object") {
          assignVars(varValue, styleValues, nextVariable);
        } else if (typeof styleValues === "string") {
          assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
        }
      }
    }
    assignVars(vars2, styles2);
    return assignedCSSVariables;
  },
  createRootStyles(theme, themeVariables) {
    const styles2 = {
      ...styles,
      tokens: { ...styles.tokens, theme: theme === "light" ? tokens.light : tokens.dark }
    };
    const { cssVariables } = ThemeHelperUtil.createCSSVariables(styles2);
    const assignedCSSVariables = ThemeHelperUtil.assignCSSVariables(cssVariables, styles2);
    const w3mVariables = ThemeHelperUtil.generateW3MVariables(themeVariables);
    const w3mOverrides = ThemeHelperUtil.generateW3MOverrides(themeVariables);
    const scaledVariables = ThemeHelperUtil.generateScaledVariables(themeVariables);
    const baseVariables = ThemeHelperUtil.generateBaseVariables(assignedCSSVariables);
    const allVariables = {
      ...assignedCSSVariables,
      ...baseVariables,
      ...w3mVariables,
      ...w3mOverrides,
      ...scaledVariables
    };
    const colorMixVariables = ThemeHelperUtil.applyColorMixToVariables(themeVariables, allVariables);
    const finalVariables = {
      ...allVariables,
      ...colorMixVariables
    };
    const rootStyles = Object.entries(finalVariables).map(([key, style]) => `${key}:${style.replace("/[:;{}</>]/g", "")};`).join("");
    return `:root {${rootStyles}}`;
  },
  generateW3MVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const variables = {};
    variables["--w3m-font-family"] = themeVariables["--w3m-font-family"] || "KHTeka";
    variables["--w3m-accent"] = themeVariables["--w3m-accent"] || "#0988F0";
    variables["--w3m-color-mix"] = themeVariables["--w3m-color-mix"] || "#000";
    variables["--w3m-color-mix-strength"] = `${themeVariables["--w3m-color-mix-strength"] || 0}%`;
    variables["--w3m-font-size-master"] = themeVariables["--w3m-font-size-master"] || "10px";
    variables["--w3m-border-radius-master"] = themeVariables["--w3m-border-radius-master"] || "4px";
    return variables;
  },
  generateW3MOverrides(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const overrides = {};
    if (themeVariables["--w3m-accent"]) {
      const accentColor = themeVariables["--w3m-accent"];
      overrides["--apkt-tokens-core-iconAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-borderAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-textAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-backgroundAccentPrimary"] = accentColor;
    }
    if (themeVariables["--w3m-font-family"]) {
      overrides["--apkt-fontFamily-regular"] = themeVariables["--w3m-font-family"];
    }
    if (themeVariables["--w3m-z-index"]) {
      overrides["--apkt-tokens-core-zIndex"] = `${themeVariables["--w3m-z-index"]}`;
    }
    return overrides;
  },
  generateScaledVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const scaledVars = {};
    if (themeVariables["--w3m-font-size-master"]) {
      const masterSize = parseFloat(themeVariables["--w3m-font-size-master"].replace("px", ""));
      scaledVars["--apkt-textSize-h1"] = `${Number(masterSize) * 5}px`;
      scaledVars["--apkt-textSize-h2"] = `${Number(masterSize) * 4.4}px`;
      scaledVars["--apkt-textSize-h3"] = `${Number(masterSize) * 3.8}px`;
      scaledVars["--apkt-textSize-h4"] = `${Number(masterSize) * 3.2}px`;
      scaledVars["--apkt-textSize-h5"] = `${Number(masterSize) * 2.6}px`;
      scaledVars["--apkt-textSize-h6"] = `${Number(masterSize) * 2}px`;
      scaledVars["--apkt-textSize-large"] = `${Number(masterSize) * 1.6}px`;
      scaledVars["--apkt-textSize-medium"] = `${Number(masterSize) * 1.4}px`;
      scaledVars["--apkt-textSize-small"] = `${Number(masterSize) * 1.2}px`;
    }
    if (themeVariables["--w3m-border-radius-master"]) {
      const masterRadius = parseFloat(themeVariables["--w3m-border-radius-master"].replace("px", ""));
      scaledVars["--apkt-borderRadius-1"] = `${Number(masterRadius)}px`;
      scaledVars["--apkt-borderRadius-2"] = `${Number(masterRadius) * 2}px`;
      scaledVars["--apkt-borderRadius-3"] = `${Number(masterRadius) * 3}px`;
      scaledVars["--apkt-borderRadius-4"] = `${Number(masterRadius) * 4}px`;
      scaledVars["--apkt-borderRadius-5"] = `${Number(masterRadius) * 5}px`;
      scaledVars["--apkt-borderRadius-6"] = `${Number(masterRadius) * 6}px`;
      scaledVars["--apkt-borderRadius-8"] = `${Number(masterRadius) * 8}px`;
      scaledVars["--apkt-borderRadius-16"] = `${Number(masterRadius) * 16}px`;
      scaledVars["--apkt-borderRadius-20"] = `${Number(masterRadius) * 20}px`;
      scaledVars["--apkt-borderRadius-32"] = `${Number(masterRadius) * 32}px`;
      scaledVars["--apkt-borderRadius-64"] = `${Number(masterRadius) * 64}px`;
      scaledVars["--apkt-borderRadius-128"] = `${Number(masterRadius) * 128}px`;
    }
    return scaledVars;
  },
  generateColorMixCSS(themeVariables, allVariables) {
    if (!themeVariables?.["--w3m-color-mix"] || !themeVariables["--w3m-color-mix-strength"]) {
      return "";
    }
    const colorMix = themeVariables["--w3m-color-mix"];
    const strength = themeVariables["--w3m-color-mix-strength"];
    if (!strength || strength === 0) {
      return "";
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return "";
    }
    const colorMixVariables = colorVariables.map((key) => {
      const originalValue = allVariables?.[key] || "";
      if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
      }
      return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
    }).join("");
    return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorMixVariables}
      }
    }`;
  },
  generateBaseVariables(assignedCSSVariables) {
    const baseVariables = {};
    const themeBackgroundPrimary = assignedCSSVariables["--apkt-tokens-theme-backgroundPrimary"];
    if (themeBackgroundPrimary) {
      baseVariables["--apkt-tokens-theme-backgroundPrimary-base"] = themeBackgroundPrimary;
    }
    const coreBackgroundAccentPrimary = assignedCSSVariables["--apkt-tokens-core-backgroundAccentPrimary"];
    if (coreBackgroundAccentPrimary) {
      baseVariables["--apkt-tokens-core-backgroundAccentPrimary-base"] = coreBackgroundAccentPrimary;
    }
    return baseVariables;
  },
  applyColorMixToVariables(themeVariables, allVariables) {
    const colorMixVariables = {};
    if (allVariables?.["--apkt-tokens-theme-backgroundPrimary"]) {
      colorMixVariables["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)";
    }
    if (allVariables?.["--apkt-tokens-core-backgroundAccentPrimary"]) {
      colorMixVariables["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)";
    }
    if (!themeVariables?.["--w3m-color-mix"] || !themeVariables["--w3m-color-mix-strength"]) {
      return colorMixVariables;
    }
    const colorMix = themeVariables["--w3m-color-mix"];
    const strength = themeVariables["--w3m-color-mix-strength"];
    if (!strength || strength === 0) {
      return colorMixVariables;
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon") || key.includes("-tokens-theme-overlay");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return colorMixVariables;
    }
    colorVariables.forEach((key) => {
      const originalValue = allVariables?.[key] || "";
      if (key.endsWith("-base")) {
        return;
      }
      if (key === "--apkt-tokens-theme-backgroundPrimary" || key === "--apkt-tokens-core-backgroundAccentPrimary") {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
      } else if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
      } else {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
      }
    });
    return colorMixVariables;
  }
};
var { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(styles);
function css(strings, ...values) {
  return i2(strings, ...values.map((value) => typeof value === "function" ? r2(value(vars)) : r2(value)));
}

// node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var apktTag = void 0;
var themeTag = void 0;
var darkModeTag = void 0;
var lightModeTag = void 0;
var currentThemeVariables = void 0;
var fonts = {
  "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
  "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
  "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
  "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
  "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
  "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
};
function createAppKitTheme(themeVariables, theme = "dark") {
  if (apktTag) {
    document.head.removeChild(apktTag);
  }
  apktTag = document.createElement("style");
  apktTag.textContent = ThemeHelperUtil.createRootStyles(theme, themeVariables);
  document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = "dark") {
  currentThemeVariables = themeVariables;
  themeTag = document.createElement("style");
  darkModeTag = document.createElement("style");
  lightModeTag = document.createElement("style");
  themeTag.textContent = createRootStyles(themeVariables).core.cssText;
  darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
  lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
  document.head.appendChild(themeTag);
  document.head.appendChild(darkModeTag);
  document.head.appendChild(lightModeTag);
  createAppKitTheme(themeVariables, themeMode);
  setColorTheme(themeMode);
  if (!themeVariables?.["--w3m-font-family"]) {
    for (const [key, url] of Object.entries(fonts)) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = url;
      link.as = "font";
      link.type = key.includes("woff2") ? "font/woff2" : "font/woff";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }
  setColorTheme(themeMode);
}
function setColorTheme(themeMode = "dark") {
  if (darkModeTag && lightModeTag && apktTag) {
    if (themeMode === "light") {
      createAppKitTheme(currentThemeVariables, themeMode);
      darkModeTag.removeAttribute("media");
      lightModeTag.media = "enabled";
    } else {
      createAppKitTheme(currentThemeVariables, themeMode);
      lightModeTag.removeAttribute("media");
      darkModeTag.media = "enabled";
    }
  }
}
function setThemeVariables(_themeVariables) {
  currentThemeVariables = _themeVariables;
  if (themeTag && darkModeTag && lightModeTag) {
    themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
    if (_themeVariables?.["--w3m-font-family"]) {
      const fontFamily2 = _themeVariables["--w3m-font-family"];
      themeTag.textContent = themeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      darkModeTag.textContent = darkModeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      lightModeTag.textContent = lightModeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
    }
  }
  if (apktTag) {
    const currentMode = lightModeTag?.media === "enabled" ? "light" : "dark";
    createAppKitTheme(_themeVariables, currentMode);
  }
}
function createRootStyles(_themeVariables) {
  const hasCustomFontFamily = Boolean(_themeVariables?.["--w3m-font-family"]);
  return {
    core: i2`
      ${hasCustomFontFamily ? i2`` : i2`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r2(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r2(fonts["KHTeka-300-woff2"])}) format('woff2'),
                url(${r2(fonts["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${r2(fonts["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${r2(fonts["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r2(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
    dark: i2`
      :root {
      }
    `,
    light: i2`
      :root {
      }
    `
  };
}
var resetStyles = i2`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
var elementStyles = i2`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var DECIMAL_POINT = ".";
var UiHelperUtil = {
  getSpacingStyles(spacing2, index) {
    if (Array.isArray(spacing2)) {
      return spacing2[index] ? `var(--apkt-spacing-${spacing2[index]})` : void 0;
    } else if (typeof spacing2 === "string") {
      return `var(--apkt-spacing-${spacing2})`;
    }
    return void 0;
  },
  getFormattedDate(date) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
  },
  formatCurrency(amount = 0, options = {}) {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return "$0.00";
    }
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options
    });
    return formatter.format(numericAmount);
  },
  getHostName(url) {
    try {
      const newUrl = new URL(url);
      return newUrl.hostname;
    } catch (error) {
      return "";
    }
  },
  getTruncateString({ string, charsStart, charsEnd, truncate }) {
    if (string.length <= charsStart + charsEnd) {
      return string;
    }
    if (truncate === "end") {
      return `${string.substring(0, charsStart)}...`;
    } else if (truncate === "start") {
      return `...${string.substring(string.length - charsEnd)}`;
    }
    return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
  },
  generateAvatarColors(address) {
    const hash = address.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "");
    const baseColor = hash.substring(0, 6).padEnd(6, "0");
    const rgbColor = this.hexToRgb(baseColor);
    const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master");
    const radius = Number(masterBorderRadius?.replace("px", ""));
    const edge = 100 - 3 * radius;
    const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
    const colors2 = [];
    for (let i5 = 0; i5 < 5; i5 += 1) {
      const tintedColor = this.tintColor(rgbColor, 0.15 * i5);
      colors2.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
    }
    return `
    --local-color-1: ${colors2[0]};
    --local-color-2: ${colors2[1]};
    --local-color-3: ${colors2[2]};
    --local-color-4: ${colors2[3]};
    --local-color-5: ${colors2[4]};
    --local-radial-circle: ${gradientCircle}
   `;
  },
  hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r4 = bigint >> 16 & 255;
    const g2 = bigint >> 8 & 255;
    const b3 = bigint & 255;
    return [r4, g2, b3];
  },
  tintColor(rgb, tint) {
    const [r4, g2, b3] = rgb;
    const tintedR = Math.round(r4 + (255 - r4) * tint);
    const tintedG = Math.round(g2 + (255 - g2) * tint);
    const tintedB = Math.round(b3 + (255 - b3) * tint);
    return [tintedR, tintedG, tintedB];
  },
  isNumber(character) {
    const regex = {
      number: /^[0-9]+$/u
    };
    return regex.number.test(character);
  },
  getColorTheme(theme) {
    if (theme) {
      return theme;
    } else if (typeof window !== "undefined" && window.matchMedia && typeof window.matchMedia === "function") {
      if (window.matchMedia("(prefers-color-scheme: dark)")?.matches) {
        return "dark";
      }
      return "light";
    }
    return "dark";
  },
  splitBalance(input) {
    const parts = input.split(".");
    if (parts.length === 2) {
      return [parts[0], parts[1]];
    }
    return ["0", "00"];
  },
  roundNumber(number, threshold, fixed) {
    const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
    return roundedNumber;
  },
  cssDurationToNumber(duration) {
    if (duration.endsWith("s")) {
      return Number(duration.replace("s", "")) * 1e3;
    } else if (duration.endsWith("ms")) {
      return Number(duration.replace("ms", ""));
    }
    return 0;
  },
  maskInput({ value, decimals, integers }) {
    value = value.replace(",", ".");
    if (value === DECIMAL_POINT) {
      return `0${DECIMAL_POINT}`;
    }
    const [integerPart = "", decimalsPart] = value.split(DECIMAL_POINT).map((p3) => p3.replace(/[^0-9]/gu, ""));
    const limitedInteger = integers ? integerPart.substring(0, integers) : integerPart;
    const cleanIntegerPart = limitedInteger.length === 2 ? String(Number(limitedInteger)) : limitedInteger;
    const cleanDecimalsPart = typeof decimals === "number" ? decimalsPart?.substring(0, decimals) : decimalsPart;
    const canIncludeDecimals = typeof decimals !== "number" || decimals > 0;
    const maskValue = typeof cleanDecimalsPart === "string" && canIncludeDecimals ? [cleanIntegerPart, cleanDecimalsPart].join(DECIMAL_POINT) : cleanIntegerPart;
    return maskValue ?? "";
  },
  capitalize(value) {
    if (!value) {
      return "";
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
};

// node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
function standardCustomElement(tagName, descriptor) {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
      }
    }
  };
}
function legacyCustomElement(tagName, clazz) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, clazz);
  }
  return clazz;
}
function customElement(tagName) {
  return function create(classOrDescriptor) {
    return typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
}

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil3 = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "Activity" }],
  SECURE_SITE_ORIGIN: (typeof process !== "undefined" && typeof process.env !== "undefined" ? process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org",
  VIEW_DIRECTION: {
    Next: "next",
    Prev: "prev"
  },
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
  ANIMATION_DURATIONS: {
    HeaderText: 120,
    ModalHeight: 150,
    ViewTransition: 150
  },
  VIEWS_WITH_LEGAL_FOOTER: [
    "Connect",
    "ConnectWallets",
    "OnRampTokenSelect",
    "OnRampFiatSelect",
    "OnRampProviders"
  ],
  VIEWS_WITH_DEFAULT_FOOTER: ["Networks"]
};

export {
  ProviderController,
  OnRampController,
  AlertController,
  SwapController,
  TooltipController,
  EnsController,
  baseUSDC,
  baseSepoliaUSDC,
  SIWXUtil,
  ModalUtil,
  ConstantsUtil3 as ConstantsUtil,
  i2 as i,
  u2 as u,
  f3 as f,
  b,
  w,
  T2 as T,
  E,
  A,
  j,
  i4 as i2,
  vars,
  css,
  initializeTheming,
  setColorTheme,
  setThemeVariables,
  resetStyles,
  elementStyles,
  UiHelperUtil,
  customElement
};
/*! Bundled license information:

lit-html/lit-html.js:
@lit/reactive-element/reactive-element.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
