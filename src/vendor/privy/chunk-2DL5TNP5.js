import {
  $ as $2,
  A as A3,
  B as B3,
  C as C3,
  D as D4,
  E as E3,
  F as F3,
  G,
  H,
  I,
  J,
  K,
  W as W3,
  X,
  Z,
  _ as _3,
  a as a3,
  a2 as a4,
  aa,
  b as b4,
  c,
  c2,
  e,
  ea,
  f as f5,
  i as i3,
  i2 as i4,
  ia,
  j as j3,
  l,
  n as n2,
  na,
  o as o4,
  o2 as o5,
  oa,
  p as p2,
  pa,
  q,
  r as r4,
  ra,
  s as s3,
  s2 as s4,
  sa,
  t,
  ta,
  u as u3,
  ua,
  v as v2,
  va,
  x as x2,
  y as y3,
  z as z2
} from "./chunk-NFV3EFLQ.js";
import {
  b
} from "./chunk-SLTT5NIH.js";
import {
  n as n3
} from "./chunk-JC23ZM22.js";
import {
  $,
  A as A2,
  D as D3,
  F as F2,
  N as N2,
  O,
  P as P2,
  R as R2,
  S,
  U,
  W as W2,
  z
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  b as b3,
  j as j2,
  p,
  u as u2
} from "./chunk-EJB6TW3T.js";
import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  D as D2,
  P,
  W,
  f as f2,
  h
} from "./chunk-COXZQBSX.js";
import {
  E as E2,
  a as a2,
  i,
  n,
  o as o2,
  r as r2,
  s as s2
} from "./chunk-W22FA2JU.js";
import {
  ofetch
} from "./chunk-ZFO2QI3F.js";
import {
  B as B2,
  _ as _2,
  anumber,
  bytesToHex,
  clsx,
  concatBytes,
  h as h2,
  hmac,
  keccak_256,
  randomBytes,
  sha256,
  sha2562,
  y as y2
} from "./chunk-FOFSNBXR.js";
import {
  A,
  B,
  C2 as C,
  D,
  E2 as E,
  F2 as F,
  M,
  N,
  R,
  _2 as _,
  a2 as a,
  b as b2,
  base64url_exports,
  d,
  decodeJwt,
  eventemitter3_default,
  f,
  import_index,
  j,
  k2 as k,
  m,
  o2 as o,
  qn,
  r2 as r,
  s,
  u,
  v,
  w2 as w,
  x2 as x,
  y2 as y
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  C as C2,
  IEvents,
  Po,
  Qe,
  Qo,
  concat,
  decode,
  detect,
  encode,
  esm_default,
  f as f3,
  fromString,
  h as h3,
  i as i2,
  r as r3,
  require_blakejs,
  require_cjs,
  require_cjs2,
  require_cjs3,
  sn,
  toString
} from "./chunk-WN6MHJGS.js";
import {
  base32
} from "./chunk-GVC7K3K7.js";
import {
  esm_exports,
  f as f4,
  formatJsonRpcError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  getBigIntRpcId,
  isJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  o as o3,
  payloadId,
  require_events,
  require_quick_format_unescaped,
  safeJsonParse,
  safeJsonStringify
} from "./chunk-CMSQRRQ2.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@noble/hashes/_u64.js
var require_u64 = __commonJS({
  "node_modules/@noble/hashes/_u64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toBig = exports.shrSL = exports.shrSH = exports.rotrSL = exports.rotrSH = exports.rotrBL = exports.rotrBH = exports.rotr32L = exports.rotr32H = exports.rotlSL = exports.rotlSH = exports.rotlBL = exports.rotlBH = exports.add5L = exports.add5H = exports.add4L = exports.add4H = exports.add3L = exports.add3H = void 0;
    exports.add = add;
    exports.fromBig = fromBig;
    exports.split = split;
    var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    var _32n = /* @__PURE__ */ BigInt(32);
    function fromBig(n7, le4 = false) {
      if (le4)
        return { h: Number(n7 & U32_MASK64), l: Number(n7 >> _32n & U32_MASK64) };
      return { h: Number(n7 >> _32n & U32_MASK64) | 0, l: Number(n7 & U32_MASK64) | 0 };
    }
    function split(lst, le4 = false) {
      const len = lst.length;
      let Ah = new Uint32Array(len);
      let Al = new Uint32Array(len);
      for (let i8 = 0; i8 < len; i8++) {
        const { h: h6, l: l5 } = fromBig(lst[i8], le4);
        [Ah[i8], Al[i8]] = [h6, l5];
      }
      return [Ah, Al];
    }
    var toBig = (h6, l5) => BigInt(h6 >>> 0) << _32n | BigInt(l5 >>> 0);
    exports.toBig = toBig;
    var shrSH = (h6, _l, s7) => h6 >>> s7;
    exports.shrSH = shrSH;
    var shrSL = (h6, l5, s7) => h6 << 32 - s7 | l5 >>> s7;
    exports.shrSL = shrSL;
    var rotrSH = (h6, l5, s7) => h6 >>> s7 | l5 << 32 - s7;
    exports.rotrSH = rotrSH;
    var rotrSL = (h6, l5, s7) => h6 << 32 - s7 | l5 >>> s7;
    exports.rotrSL = rotrSL;
    var rotrBH = (h6, l5, s7) => h6 << 64 - s7 | l5 >>> s7 - 32;
    exports.rotrBH = rotrBH;
    var rotrBL = (h6, l5, s7) => h6 >>> s7 - 32 | l5 << 64 - s7;
    exports.rotrBL = rotrBL;
    var rotr32H = (_h, l5) => l5;
    exports.rotr32H = rotr32H;
    var rotr32L = (h6, _l) => h6;
    exports.rotr32L = rotr32L;
    var rotlSH = (h6, l5, s7) => h6 << s7 | l5 >>> 32 - s7;
    exports.rotlSH = rotlSH;
    var rotlSL = (h6, l5, s7) => l5 << s7 | h6 >>> 32 - s7;
    exports.rotlSL = rotlSL;
    var rotlBH = (h6, l5, s7) => l5 << s7 - 32 | h6 >>> 64 - s7;
    exports.rotlBH = rotlBH;
    var rotlBL = (h6, l5, s7) => h6 << s7 - 32 | l5 >>> 64 - s7;
    exports.rotlBL = rotlBL;
    function add(Ah, Al, Bh, Bl) {
      const l5 = (Al >>> 0) + (Bl >>> 0);
      return { h: Ah + Bh + (l5 / 2 ** 32 | 0) | 0, l: l5 | 0 };
    }
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    exports.add3L = add3L;
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    exports.add3H = add3H;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    exports.add4L = add4L;
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    exports.add4H = add4H;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    exports.add5L = add5L;
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    exports.add5H = add5H;
    var u64 = {
      fromBig,
      split,
      toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    exports.default = u64;
  }
});

// node_modules/@noble/hashes/crypto.js
var require_crypto = __commonJS({
  "node_modules/@noble/hashes/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// node_modules/@noble/hashes/utils.js
var require_utils = __commonJS({
  "node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.Hash = exports.nextTick = exports.swap32IfBE = exports.byteSwapIfBE = exports.swap8IfBE = exports.isLE = void 0;
    exports.isBytes = isBytes2;
    exports.anumber = anumber2;
    exports.abytes = abytes2;
    exports.ahash = ahash;
    exports.aexists = aexists;
    exports.aoutput = aoutput;
    exports.u8 = u8;
    exports.u32 = u32;
    exports.clean = clean;
    exports.createView = createView;
    exports.rotr = rotr;
    exports.rotl = rotl;
    exports.byteSwap = byteSwap;
    exports.byteSwap32 = byteSwap32;
    exports.bytesToHex = bytesToHex3;
    exports.hexToBytes = hexToBytes2;
    exports.asyncLoop = asyncLoop;
    exports.utf8ToBytes = utf8ToBytes;
    exports.bytesToUtf8 = bytesToUtf8;
    exports.toBytes = toBytes3;
    exports.kdfInputToBytes = kdfInputToBytes;
    exports.concatBytes = concatBytes3;
    exports.checkOpts = checkOpts;
    exports.createHasher = createHasher;
    exports.createOptHasher = createOptHasher;
    exports.createXOFer = createXOFer;
    exports.randomBytes = randomBytes2;
    var crypto_1 = require_crypto();
    function isBytes2(a8) {
      return a8 instanceof Uint8Array || ArrayBuffer.isView(a8) && a8.constructor.name === "Uint8Array";
    }
    function anumber2(n7) {
      if (!Number.isSafeInteger(n7) || n7 < 0)
        throw new Error("positive integer expected, got " + n7);
    }
    function abytes2(b9, ...lengths) {
      if (!isBytes2(b9))
        throw new Error("Uint8Array expected");
      if (lengths.length > 0 && !lengths.includes(b9.length))
        throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b9.length);
    }
    function ahash(h6) {
      if (typeof h6 !== "function" || typeof h6.create !== "function")
        throw new Error("Hash should be wrapped by utils.createHasher");
      anumber2(h6.outputLen);
      anumber2(h6.blockLen);
    }
    function aexists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    function aoutput(out, instance) {
      abytes2(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error("digestInto() expects output buffer of length at least " + min);
      }
    }
    function u8(arr) {
      return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    }
    function u32(arr) {
      return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    }
    function clean(...arrays) {
      for (let i8 = 0; i8 < arrays.length; i8++) {
        arrays[i8].fill(0);
      }
    }
    function createView(arr) {
      return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    }
    function rotr(word, shift) {
      return word << 32 - shift | word >>> shift;
    }
    function rotl(word, shift) {
      return word << shift | word >>> 32 - shift >>> 0;
    }
    exports.isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
    function byteSwap(word) {
      return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
    }
    exports.swap8IfBE = exports.isLE ? (n7) => n7 : (n7) => byteSwap(n7);
    exports.byteSwapIfBE = exports.swap8IfBE;
    function byteSwap32(arr) {
      for (let i8 = 0; i8 < arr.length; i8++) {
        arr[i8] = byteSwap(arr[i8]);
      }
      return arr;
    }
    exports.swap32IfBE = exports.isLE ? (u7) => u7 : byteSwap32;
    var hasHexBuiltin2 = /* @__PURE__ */ (() => (
      // @ts-ignore
      typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
    ))();
    var hexes3 = /* @__PURE__ */ Array.from({ length: 256 }, (_7, i8) => i8.toString(16).padStart(2, "0"));
    function bytesToHex3(bytes) {
      abytes2(bytes);
      if (hasHexBuiltin2)
        return bytes.toHex();
      let hex = "";
      for (let i8 = 0; i8 < bytes.length; i8++) {
        hex += hexes3[bytes[i8]];
      }
      return hex;
    }
    var asciis2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
    function asciiToBase162(ch) {
      if (ch >= asciis2._0 && ch <= asciis2._9)
        return ch - asciis2._0;
      if (ch >= asciis2.A && ch <= asciis2.F)
        return ch - (asciis2.A - 10);
      if (ch >= asciis2.a && ch <= asciis2.f)
        return ch - (asciis2.a - 10);
      return;
    }
    function hexToBytes2(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      if (hasHexBuiltin2)
        return Uint8Array.fromHex(hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("hex string expected, got unpadded hex of length " + hl);
      const array = new Uint8Array(al);
      for (let ai4 = 0, hi3 = 0; ai4 < al; ai4++, hi3 += 2) {
        const n1 = asciiToBase162(hex.charCodeAt(hi3));
        const n22 = asciiToBase162(hex.charCodeAt(hi3 + 1));
        if (n1 === void 0 || n22 === void 0) {
          const char = hex[hi3] + hex[hi3 + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi3);
        }
        array[ai4] = n1 * 16 + n22;
      }
      return array;
    }
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts3 = Date.now();
      for (let i8 = 0; i8 < iters; i8++) {
        cb(i8);
        const diff = Date.now() - ts3;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts3 += diff;
      }
    }
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error("string expected");
      return new Uint8Array(new TextEncoder().encode(str));
    }
    function bytesToUtf8(bytes) {
      return new TextDecoder().decode(bytes);
    }
    function toBytes3(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      abytes2(data);
      return data;
    }
    function kdfInputToBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      abytes2(data);
      return data;
    }
    function concatBytes3(...arrays) {
      let sum = 0;
      for (let i8 = 0; i8 < arrays.length; i8++) {
        const a8 = arrays[i8];
        abytes2(a8);
        sum += a8.length;
      }
      const res = new Uint8Array(sum);
      for (let i8 = 0, pad3 = 0; i8 < arrays.length; i8++) {
        const a8 = arrays[i8];
        res.set(a8, pad3);
        pad3 += a8.length;
      }
      return res;
    }
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && {}.toString.call(opts) !== "[object Object]")
        throw new Error("options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    var Hash = class {
    };
    exports.Hash = Hash;
    function createHasher(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes3(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    function createOptHasher(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes3(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    function createXOFer(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes3(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructor = createHasher;
    exports.wrapConstructorWithOpts = createOptHasher;
    exports.wrapXOFConstructorWithOpts = createXOFer;
    function randomBytes2(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") {
        return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
  }
});

// node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS({
  "node_modules/@noble/hashes/sha3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
    exports.keccakP = keccakP;
    var _u64_ts_1 = require_u64();
    var utils_ts_1 = require_utils();
    var _0n6 = BigInt(0);
    var _1n6 = BigInt(1);
    var _2n4 = BigInt(2);
    var _7n = BigInt(7);
    var _256n = BigInt(256);
    var _0x71n = BigInt(113);
    var SHA3_PI = [];
    var SHA3_ROTL = [];
    var _SHA3_IOTA = [];
    for (let round = 0, R8 = _1n6, x6 = 1, y7 = 0; round < 24; round++) {
      [x6, y7] = [y7, (2 * x6 + 3 * y7) % 5];
      SHA3_PI.push(2 * (5 * y7 + x6));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t3 = _0n6;
      for (let j8 = 0; j8 < 7; j8++) {
        R8 = (R8 << _1n6 ^ (R8 >> _7n) * _0x71n) % _256n;
        if (R8 & _2n4)
          t3 ^= _1n6 << (_1n6 << /* @__PURE__ */ BigInt(j8)) - _1n6;
      }
      _SHA3_IOTA.push(t3);
    }
    var IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
    var SHA3_IOTA_H = IOTAS[0];
    var SHA3_IOTA_L = IOTAS[1];
    var rotlH = (h6, l5, s7) => s7 > 32 ? (0, _u64_ts_1.rotlBH)(h6, l5, s7) : (0, _u64_ts_1.rotlSH)(h6, l5, s7);
    var rotlL = (h6, l5, s7) => s7 > 32 ? (0, _u64_ts_1.rotlBL)(h6, l5, s7) : (0, _u64_ts_1.rotlSL)(h6, l5, s7);
    function keccakP(s7, rounds = 24) {
      const B7 = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x6 = 0; x6 < 10; x6++)
          B7[x6] = s7[x6] ^ s7[x6 + 10] ^ s7[x6 + 20] ^ s7[x6 + 30] ^ s7[x6 + 40];
        for (let x6 = 0; x6 < 10; x6 += 2) {
          const idx1 = (x6 + 8) % 10;
          const idx0 = (x6 + 2) % 10;
          const B0 = B7[idx0];
          const B1 = B7[idx0 + 1];
          const Th = rotlH(B0, B1, 1) ^ B7[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B7[idx1 + 1];
          for (let y7 = 0; y7 < 50; y7 += 10) {
            s7[x6 + y7] ^= Th;
            s7[x6 + y7 + 1] ^= Tl;
          }
        }
        let curH = s7[2];
        let curL = s7[3];
        for (let t3 = 0; t3 < 24; t3++) {
          const shift = SHA3_ROTL[t3];
          const Th = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t3];
          curH = s7[PI];
          curL = s7[PI + 1];
          s7[PI] = Th;
          s7[PI + 1] = Tl;
        }
        for (let y7 = 0; y7 < 50; y7 += 10) {
          for (let x6 = 0; x6 < 10; x6++)
            B7[x6] = s7[y7 + x6];
          for (let x6 = 0; x6 < 10; x6++)
            s7[y7 + x6] ^= ~B7[(x6 + 2) % 10] & B7[(x6 + 4) % 10];
        }
        s7[0] ^= SHA3_IOTA_H[round];
        s7[1] ^= SHA3_IOTA_L[round];
      }
      (0, utils_ts_1.clean)(B7);
    }
    var Keccak = class _Keccak extends utils_ts_1.Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        (0, utils_ts_1.anumber)(outputLen);
        if (!(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_ts_1.u32)(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        (0, utils_ts_1.swap32IfBE)(this.state32);
        keccakP(this.state32, this.rounds);
        (0, utils_ts_1.swap32IfBE)(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, utils_ts_1.aexists)(this);
        data = (0, utils_ts_1.toBytes)(data);
        (0, utils_ts_1.abytes)(data);
        const { blockLen, state } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i8 = 0; i8 < take; i8++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, utils_ts_1.aexists)(this, false);
        (0, utils_ts_1.abytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        (0, utils_ts_1.anumber)(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        (0, utils_ts_1.aoutput)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        (0, utils_ts_1.clean)(this.state);
      }
      _cloneInto(to3) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to3 || (to3 = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to3.state32.set(this.state32);
        to3.pos = this.pos;
        to3.posOut = this.posOut;
        to3.finished = this.finished;
        to3.rounds = rounds;
        to3.suffix = suffix;
        to3.outputLen = outputLen;
        to3.enableXOF = enableXOF;
        to3.destroyed = this.destroyed;
        return to3;
      }
    };
    exports.Keccak = Keccak;
    var gen = (suffix, blockLen, outputLen) => (0, utils_ts_1.createHasher)(() => new Keccak(blockLen, suffix, outputLen));
    exports.sha3_224 = (() => gen(6, 144, 224 / 8))();
    exports.sha3_256 = (() => gen(6, 136, 256 / 8))();
    exports.sha3_384 = (() => gen(6, 104, 384 / 8))();
    exports.sha3_512 = (() => gen(6, 72, 512 / 8))();
    exports.keccak_224 = (() => gen(1, 144, 224 / 8))();
    exports.keccak_256 = (() => gen(1, 136, 256 / 8))();
    exports.keccak_384 = (() => gen(1, 104, 384 / 8))();
    exports.keccak_512 = (() => gen(1, 72, 512 / 8))();
    var genShake = (suffix, blockLen, outputLen) => (0, utils_ts_1.createXOFer)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    exports.shake128 = (() => genShake(31, 168, 128 / 8))();
    exports.shake256 = (() => genShake(31, 136, 256 / 8))();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.cjs
var require_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.cjs"(exports, module) {
    var { keccak_256: keccak_2562 } = require_sha3();
    function zeros(bytes) {
      return Buffer.allocUnsafe(bytes).fill(0);
    }
    function bitLengthFromBigInt(num) {
      return num.toString(2).length;
    }
    function bufferBEFromBigInt(num, length) {
      let hex = num.toString(16);
      if (hex.length % 2 !== 0) hex = "0" + hex;
      const byteArray = hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
      while (byteArray.length < length) {
        byteArray.unshift(0);
      }
      return Buffer.from(byteArray);
    }
    function twosFromBigInt(value, width) {
      const isNegative = value < 0n;
      let result;
      if (isNegative) {
        const mask = (1n << BigInt(width)) - 1n;
        result = (~value & mask) + 1n;
      } else {
        result = value;
      }
      result &= (1n << BigInt(width)) - 1n;
      return result;
    }
    function setLength(msg, length, right) {
      const buf = zeros(length);
      msg = toBuffer(msg);
      if (right) {
        if (msg.length < length) {
          msg.copy(buf);
          return buf;
        }
        return msg.slice(0, length);
      } else {
        if (msg.length < length) {
          msg.copy(buf, length - msg.length);
          return buf;
        }
        return msg.slice(-length);
      }
    }
    function setLengthRight(msg, length) {
      return setLength(msg, length, true);
    }
    function toBuffer(v8) {
      if (!Buffer.isBuffer(v8)) {
        if (Array.isArray(v8)) {
          v8 = Buffer.from(v8);
        } else if (typeof v8 === "string") {
          if (isHexString2(v8)) {
            v8 = Buffer.from(padToEven(stripHexPrefix(v8)), "hex");
          } else {
            v8 = Buffer.from(v8);
          }
        } else if (typeof v8 === "number") {
          v8 = intToBuffer(v8);
        } else if (v8 === null || v8 === void 0) {
          v8 = Buffer.allocUnsafe(0);
        } else if (typeof v8 === "bigint") {
          v8 = bufferBEFromBigInt(v8);
        } else if (v8.toArray) {
          v8 = Buffer.from(v8.toArray());
        } else {
          throw new Error("invalid type");
        }
      }
      return v8;
    }
    function bufferToHex(buf) {
      buf = toBuffer(buf);
      return "0x" + buf.toString("hex");
    }
    function keccak(a8, bits) {
      a8 = toBuffer(a8);
      if (!bits) bits = 256;
      if (bits !== 256) {
        throw new Error("unsupported");
      }
      return Buffer.from(keccak_2562(new Uint8Array(a8)));
    }
    function padToEven(str) {
      return str.length % 2 ? "0" + str : str;
    }
    function isHexString2(str) {
      return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
    }
    function stripHexPrefix(str) {
      if (typeof str === "string" && str.startsWith("0x")) {
        return str.slice(2);
      }
      return str;
    }
    module.exports = {
      zeros,
      setLength,
      setLengthRight,
      isHexString: isHexString2,
      stripHexPrefix,
      toBuffer,
      bufferToHex,
      keccak,
      bitLengthFromBigInt,
      bufferBEFromBigInt,
      twosFromBigInt
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.cjs
var require_abi = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.cjs"(exports, module) {
    var util = require_util();
    function elementaryName(name) {
      if (name.startsWith("int[")) {
        return "int256" + name.slice(3);
      } else if (name === "int") {
        return "int256";
      } else if (name.startsWith("uint[")) {
        return "uint256" + name.slice(4);
      } else if (name === "uint") {
        return "uint256";
      } else if (name.startsWith("fixed[")) {
        return "fixed128x128" + name.slice(5);
      } else if (name === "fixed") {
        return "fixed128x128";
      } else if (name.startsWith("ufixed[")) {
        return "ufixed128x128" + name.slice(6);
      } else if (name === "ufixed") {
        return "ufixed128x128";
      }
      return name;
    }
    function parseTypeN(type) {
      return Number.parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
    }
    function parseTypeNxM(type) {
      var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
      return [Number.parseInt(tmp[1], 10), Number.parseInt(tmp[2], 10)];
    }
    function parseTypeArray(type) {
      var tmp = type.match(/(.*)\[(.*?)\]$/);
      if (tmp) {
        return tmp[2] === "" ? "dynamic" : Number.parseInt(tmp[2], 10);
      }
      return null;
    }
    function parseNumber(arg) {
      var type = typeof arg;
      if (type === "string" || type === "number") {
        return BigInt(arg);
      } else if (type === "bigint") {
        return arg;
      } else {
        throw new Error("Argument is not a number");
      }
    }
    function encodeSingle(type, arg) {
      var size3, num, ret, i8;
      if (type === "address") {
        return encodeSingle("uint160", parseNumber(arg));
      } else if (type === "bool") {
        return encodeSingle("uint8", arg ? 1 : 0);
      } else if (type === "string") {
        return encodeSingle("bytes", new Buffer(arg, "utf8"));
      } else if (isArray(type)) {
        if (typeof arg.length === "undefined") {
          throw new Error("Not an array?");
        }
        size3 = parseTypeArray(type);
        if (size3 !== "dynamic" && size3 !== 0 && arg.length > size3) {
          throw new Error("Elements exceed array size: " + size3);
        }
        ret = [];
        type = type.slice(0, type.lastIndexOf("["));
        if (typeof arg === "string") {
          arg = JSON.parse(arg);
        }
        for (i8 in arg) {
          ret.push(encodeSingle(type, arg[i8]));
        }
        if (size3 === "dynamic") {
          var length = encodeSingle("uint256", arg.length);
          ret.unshift(length);
        }
        return Buffer.concat(ret);
      } else if (type === "bytes") {
        arg = new Buffer(arg);
        ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
        if (arg.length % 32 !== 0) {
          ret = Buffer.concat([ret, util.zeros(32 - arg.length % 32)]);
        }
        return ret;
      } else if (type.startsWith("bytes")) {
        size3 = parseTypeN(type);
        if (size3 < 1 || size3 > 32) {
          throw new Error("Invalid bytes<N> width: " + size3);
        }
        return util.setLengthRight(arg, 32);
      } else if (type.startsWith("uint")) {
        size3 = parseTypeN(type);
        if (size3 % 8 || size3 < 8 || size3 > 256) {
          throw new Error("Invalid uint<N> width: " + size3);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size3) {
          throw new Error("Supplied uint exceeds width: " + size3 + " vs " + bitLength);
        }
        if (num < 0) {
          throw new Error("Supplied uint is negative");
        }
        return util.bufferBEFromBigInt(num, 32);
      } else if (type.startsWith("int")) {
        size3 = parseTypeN(type);
        if (size3 % 8 || size3 < 8 || size3 > 256) {
          throw new Error("Invalid int<N> width: " + size3);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size3) {
          throw new Error("Supplied int exceeds width: " + size3 + " vs " + bitLength);
        }
        const twos = util.twosFromBigInt(num, 256);
        return util.bufferBEFromBigInt(twos, 32);
      } else if (type.startsWith("ufixed")) {
        size3 = parseTypeNxM(type);
        num = parseNumber(arg);
        if (num < 0) {
          throw new Error("Supplied ufixed is negative");
        }
        return encodeSingle("uint256", num * BigInt(2) ** BigInt(size3[1]));
      } else if (type.startsWith("fixed")) {
        size3 = parseTypeNxM(type);
        return encodeSingle("int256", parseNumber(arg) * BigInt(2) ** BigInt(size3[1]));
      }
      throw new Error("Unsupported or invalid type: " + type);
    }
    function isDynamic(type) {
      return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
    }
    function isArray(type) {
      return type.lastIndexOf("]") === type.length - 1;
    }
    function rawEncode(types, values) {
      var output = [];
      var data = [];
      var headLength = 32 * types.length;
      for (var i8 in types) {
        var type = elementaryName(types[i8]);
        var value = values[i8];
        var cur = encodeSingle(type, value);
        if (isDynamic(type)) {
          output.push(encodeSingle("uint256", headLength));
          data.push(cur);
          headLength += cur.length;
        } else {
          output.push(cur);
        }
      }
      return Buffer.concat(output.concat(data));
    }
    function solidityPack(types, values) {
      if (types.length !== values.length) {
        throw new Error("Number of types are not matching the values");
      }
      var size3, num;
      var ret = [];
      for (var i8 = 0; i8 < types.length; i8++) {
        var type = elementaryName(types[i8]);
        var value = values[i8];
        if (type === "bytes") {
          ret.push(value);
        } else if (type === "string") {
          ret.push(new Buffer(value, "utf8"));
        } else if (type === "bool") {
          ret.push(new Buffer(value ? "01" : "00", "hex"));
        } else if (type === "address") {
          ret.push(util.setLength(value, 20));
        } else if (type.startsWith("bytes")) {
          size3 = parseTypeN(type);
          if (size3 < 1 || size3 > 32) {
            throw new Error("Invalid bytes<N> width: " + size3);
          }
          ret.push(util.setLengthRight(value, size3));
        } else if (type.startsWith("uint")) {
          size3 = parseTypeN(type);
          if (size3 % 8 || size3 < 8 || size3 > 256) {
            throw new Error("Invalid uint<N> width: " + size3);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size3) {
            throw new Error("Supplied uint exceeds width: " + size3 + " vs " + bitLength);
          }
          ret.push(util.bufferBEFromBigInt(num, size3 / 8));
        } else if (type.startsWith("int")) {
          size3 = parseTypeN(type);
          if (size3 % 8 || size3 < 8 || size3 > 256) {
            throw new Error("Invalid int<N> width: " + size3);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size3) {
            throw new Error("Supplied int exceeds width: " + size3 + " vs " + bitLength);
          }
          const twos = util.twosFromBigInt(num, size3);
          ret.push(util.bufferBEFromBigInt(twos, size3 / 8));
        } else {
          throw new Error("Unsupported or invalid type: " + type);
        }
      }
      return Buffer.concat(ret);
    }
    function soliditySHA3(types, values) {
      return util.keccak(solidityPack(types, values));
    }
    module.exports = {
      rawEncode,
      solidityPack,
      soliditySHA3
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.cjs
var require_eth_eip712_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.cjs"(exports, module) {
    var util = require_util();
    var abi = require_abi();
    var TYPED_MESSAGE_SCHEMA = {
      type: "object",
      properties: {
        types: {
          type: "object",
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string" }
              },
              required: ["name", "type"]
            }
          }
        },
        primaryType: { type: "string" },
        domain: { type: "object" },
        message: { type: "object" }
      },
      required: ["types", "primaryType", "domain", "message"]
    };
    var TypedDataUtils = {
      /**
       * Encodes an object by encoding and concatenating each of its members
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of an object
       */
      encodeData(primaryType, data, types, useV4 = true) {
        const encodedTypes = ["bytes32"];
        const encodedValues = [this.hashType(primaryType, types)];
        if (useV4) {
          const encodeField = (name, type, value) => {
            if (types[type] !== void 0) {
              return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util.keccak(this.encodeData(type, value, types, useV4))];
            }
            if (value === void 0)
              throw new Error(`missing value for field ${name} of type ${type}`);
            if (type === "bytes") {
              return ["bytes32", util.keccak(value)];
            }
            if (type === "string") {
              if (typeof value === "string") {
                value = Buffer.from(value, "utf8");
              }
              return ["bytes32", util.keccak(value)];
            }
            if (type.lastIndexOf("]") === type.length - 1) {
              const parsedType = type.slice(0, type.lastIndexOf("["));
              const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
              return ["bytes32", util.keccak(abi.rawEncode(
                typeValuePairs.map(([type2]) => type2),
                typeValuePairs.map(([, value2]) => value2)
              ))];
            }
            return [type, value];
          };
          for (const field of types[primaryType]) {
            const [type, value] = encodeField(field.name, field.type, data[field.name]);
            encodedTypes.push(type);
            encodedValues.push(value);
          }
        } else {
          for (const field of types[primaryType]) {
            let value = data[field.name];
            if (value !== void 0) {
              if (field.type === "bytes") {
                encodedTypes.push("bytes32");
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (field.type === "string") {
                encodedTypes.push("bytes32");
                if (typeof value === "string") {
                  value = Buffer.from(value, "utf8");
                }
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (types[field.type] !== void 0) {
                encodedTypes.push("bytes32");
                value = util.keccak(this.encodeData(field.type, value, types, useV4));
                encodedValues.push(value);
              } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
                throw new Error("Arrays currently unimplemented in encodeData");
              } else {
                encodedTypes.push(field.type);
                encodedValues.push(value);
              }
            }
          }
        }
        return abi.rawEncode(encodedTypes, encodedValues);
      },
      /**
       * Encodes the type of an object by encoding a comma delimited list of its members
       *
       * @param {string} primaryType - Root type to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of the type of an object
       */
      encodeType(primaryType, types) {
        let result = "";
        let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
        deps = [primaryType].concat(deps.sort());
        for (const type of deps) {
          const children = types[type];
          if (!children) {
            throw new Error("No type definition specified: " + type);
          }
          result += type + "(" + types[type].map(({ name, type: type2 }) => type2 + " " + name).join(",") + ")";
        }
        return result;
      },
      /**
       * Finds all types within a type definition object
       *
       * @param {string} primaryType - Root type
       * @param {Object} types - Type definitions
       * @param {Array} results - current set of accumulated types
       * @returns {Array} - Set of all types found in the type definition
       */
      findTypeDependencies(primaryType, types, results = []) {
        primaryType = primaryType.match(/^\w*/)[0];
        if (results.includes(primaryType) || types[primaryType] === void 0) {
          return results;
        }
        results.push(primaryType);
        for (const field of types[primaryType]) {
          for (const dep of this.findTypeDependencies(field.type, types, results)) {
            !results.includes(dep) && results.push(dep);
          }
        }
        return results;
      },
      /**
       * Hashes an object
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to hash
       * @param {Object} types - Type definitions
       * @returns {Buffer} - Hash of an object
       */
      hashStruct(primaryType, data, types, useV4 = true) {
        return util.keccak(this.encodeData(primaryType, data, types, useV4));
      },
      /**
       * Hashes the type of an object
       *
       * @param {string} primaryType - Root type to hash
       * @param {Object} types - Type definitions
       * @returns {string} - Hash of an object
       */
      hashType(primaryType, types) {
        return util.keccak(this.encodeType(primaryType, types));
      },
      /**
       * Removes properties from a message object that are not defined per EIP-712
       *
       * @param {Object} data - typed message object
       * @returns {Object} - typed message object with only allowed fields
       */
      sanitizeData(data) {
        const sanitizedData = {};
        for (const key in TYPED_MESSAGE_SCHEMA.properties) {
          data[key] && (sanitizedData[key] = data[key]);
        }
        if (sanitizedData.types) {
          sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
        }
        return sanitizedData;
      },
      /**
       * Returns the hash of a typed message as per EIP-712 for signing
       *
       * @param {Object} typedData - Types message data to sign
       * @returns {string} - sha3 hash for signing
       */
      hash(typedData, useV4 = true) {
        const sanitizedData = this.sanitizeData(typedData);
        const parts = [Buffer.from("1901", "hex")];
        parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
        if (sanitizedData.primaryType !== "EIP712Domain") {
          parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
        }
        return util.keccak(Buffer.concat(parts));
      }
    };
    module.exports = {
      TYPED_MESSAGE_SCHEMA,
      TypedDataUtils,
      hashForSignTypedDataLegacy: function(msgParams) {
        return typedSignatureHashLegacy(msgParams.data);
      },
      hashForSignTypedData_v3: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data, false);
      },
      hashForSignTypedData_v4: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data);
      }
    };
    function typedSignatureHashLegacy(typedData) {
      const error = new Error("Expect argument to be non-empty array");
      if (typeof typedData !== "object" || !typedData.length) throw error;
      const data = typedData.map(function(e3) {
        return e3.type === "bytes" ? util.toBuffer(e3.value) : e3.value;
      });
      const types = typedData.map(function(e3) {
        return e3.type;
      });
      const schema = typedData.map(function(e3) {
        if (!e3.name) throw error;
        return e3.type + " " + e3.name;
      });
      return abi.soliditySHA3(
        ["bytes32", "bytes32"],
        [
          abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
          abi.soliditySHA3(types, data)
        ]
      );
    }
  }
});

// node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
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
      err: asErrValue,
      errWithCause: asErrValue
    };
    function levelToValue(level, logger) {
      return level === "silent" ? Infinity : logger.levels.values[level];
    }
    var baseLogFunctionSymbol = Symbol("pino.logFuncs");
    var hierarchySymbol = Symbol("pino.hierarchy");
    var logFallbackMap = {
      error: "log",
      fatal: "error",
      warn: "error",
      info: "log",
      debug: "log",
      trace: "log"
    };
    function appendChildLogger(parentLogger, childLogger) {
      const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
      };
      childLogger[hierarchySymbol] = newEntry;
    }
    function setupBaseLogFunctions(logger, levels, proto) {
      const logFunctions = {};
      levels.forEach((level) => {
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || "log"] || noop;
      });
      logger[baseLogFunctionSymbol] = logFunctions;
    }
    function shouldSerialize(serialize2, serializers) {
      if (Array.isArray(serialize2)) {
        const hasToFilter = serialize2.filter(function(k5) {
          return k5 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize2 === true) {
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
      const serialize2 = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const customLevels = Object.keys(opts.customLevels || {});
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"].concat(customLevels);
      if (typeof proto === "function") {
        levels.forEach(function(level2) {
          proto[level2] = proto;
        });
      }
      if (opts.enabled === false || opts.browser.disabled) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      setupBaseLogFunctions(logger, levels, proto);
      appendChildLogger({}, logger);
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize: serialize2,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || "msg",
        onChild: opts.onChild || noop
      };
      logger.levels = getLevels(opts);
      logger.level = level;
      logger.isLevelEnabled = function(level2) {
        if (!this.levels.values[level2]) {
          return false;
        }
        return this.levels.values[level2] >= this.levels.values[this.level];
      };
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize2;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
      };
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return levelToValue(this.level, this);
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set(this, setOpts, logger, "error");
        set(this, setOpts, logger, "fatal");
        set(this, setOpts, logger, "warn");
        set(this, setOpts, logger, "info");
        set(this, setOpts, logger, "debug");
        set(this, setOpts, logger, "trace");
        customLevels.forEach((level3) => {
          set(this, setOpts, logger, level3);
        });
      }
      function child(setOpts2, bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize2 && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize2 && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize2;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.bindings = bindings;
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
        const newLogger = new Child(this);
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
          return child.call(this, setOpts2, ...args);
        };
        newLogger.level = childOptions.level || this.level;
        setOpts2.onChild(newLogger);
        return newLogger;
      }
      return logger;
    }
    function getLevels(opts) {
      const customLevels = opts.customLevels || {};
      const values = Object.assign({}, pino.levels.values, customLevels);
      const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
      return {
        values,
        labels
      };
    }
    function invertObject(obj) {
      const inverted = {};
      Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
      });
      return inverted;
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
    function getBindingChain(logger) {
      const bindings = [];
      if (logger.bindings) {
        bindings.push(logger.bindings);
      }
      let hierarchy = logger[hierarchySymbol];
      while (hierarchy.parent) {
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
          bindings.push(hierarchy.logger.bindings);
        }
      }
      return bindings.reverse();
    }
    function set(self2, opts, rootLogger, level) {
      Object.defineProperty(self2, level, {
        value: levelToValue(self2.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
      });
      if (self2[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self2.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
      }
      self2[level] = createWrap(self2, opts, rootLogger, level);
      const bindings = getBindingChain(self2);
      if (bindings.length === 0) {
        return;
      }
      self2[level] = prependBindingsInArguments(bindings, self2[level]);
    }
    function prependBindingsInArguments(bindings, logFunc) {
      return function() {
        return logFunc.apply(this, [...bindings, ...arguments]);
      };
    }
    function createWrap(self2, opts, rootLogger, level) {
      return /* @__PURE__ */ (function(write) {
        return function LOG() {
          const ts3 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i8 = 0; i8 < args.length; i8++) args[i8] = arguments[i8];
          var argsIsSerialized = false;
          if (opts.serialize) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
            argsIsSerialized = true;
          }
          if (opts.asObject || opts.formatters) {
            write.call(proto, ...asObject(this, level, args, ts3, opts));
          } else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || self2._level;
            const transmitValue = levelToValue(transmitLevel, rootLogger);
            const methodValue = levelToValue(level, rootLogger);
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts3,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: rootLogger.levels.values[opts.transmit.level || self2._level],
              send: opts.transmit.send,
              val: levelToValue(self2._level, rootLogger)
            }, args, argsIsSerialized);
          }
        };
      })(self2[baseLogFunctionSymbol][level]);
    }
    function asObject(logger, level, args, ts3, opts) {
      const {
        level: levelFormatter,
        log: logObjectFormatter = (obj) => obj
      } = opts.formatters || {};
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const logObject = {};
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (ts3) {
        logObject.time = ts3;
      }
      if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
      } else {
        logObject.level = logger.levels.values[level];
      }
      if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === "object") {
          while (lvl-- && typeof argsCloned[0] === "object") {
            Object.assign(logObject, argsCloned.shift());
          }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [formattedLogObject, ...argsCloned];
      } else {
        if (msg !== null && typeof msg === "object") {
          while (lvl-- && typeof argsCloned[0] === "object") {
            Object.assign(logObject, argsCloned.shift());
          }
          msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
        } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
        if (msg !== void 0) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [formattedLogObject];
      }
    }
    function applySerializers(args, serialize2, serializers, stdErrSerialize) {
      for (const i8 in args) {
        if (stdErrSerialize && args[i8] instanceof Error) {
          args[i8] = pino.stdSerializers.err(args[i8]);
        } else if (typeof args[i8] === "object" && !Array.isArray(args[i8]) && serialize2) {
          for (const k5 in args[i8]) {
            if (serialize2.indexOf(k5) > -1 && k5 in serializers) {
              args[i8][k5] = serializers[k5](args[i8][k5]);
            }
          }
        }
      }
    }
    function transmit(logger, opts, args, argsIsSerialized = false) {
      const send = opts.send;
      const ts3 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      if (!argsIsSerialized) {
        applySerializers(
          args,
          logger._serialize || Object.keys(logger.serializers),
          logger.serializers,
          logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
        );
      }
      logger._logEvent.ts = ts3;
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
    function passthrough(a8) {
      return a8;
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
      function defd(o7) {
        return typeof o7 !== "undefined" && o7;
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
      } catch (e3) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
    module.exports.default = pino;
    module.exports.pino = pino;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/storage/ScopedLocalStorage.js
var ScopedLocalStorage = class _ScopedLocalStorage {
  constructor(scope, module) {
    this.scope = scope;
    this.module = module;
  }
  storeObject(key, item) {
    this.setItem(key, JSON.stringify(item));
  }
  loadObject(key) {
    const item = this.getItem(key);
    return item ? JSON.parse(item) : void 0;
  }
  setItem(key, value) {
    localStorage.setItem(this.scopedKey(key), value);
  }
  getItem(key) {
    return localStorage.getItem(this.scopedKey(key));
  }
  removeItem(key) {
    localStorage.removeItem(this.scopedKey(key));
  }
  clear() {
    const prefix = this.scopedKey("");
    const keysToRemove = [];
    for (let i8 = 0; i8 < localStorage.length; i8++) {
      const key = localStorage.key(i8);
      if (typeof key === "string" && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }
  scopedKey(key) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${key}`;
  }
  static clearAll() {
    new _ScopedLocalStorage("CBWSDK").clear();
    new _ScopedLocalStorage("walletlink").clear();
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js
var standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
var errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  "4902": {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js
var FALLBACK_MESSAGE = "Unspecified error message.";
var JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
  if (code && Number.isInteger(code)) {
    const codeString = code.toString();
    if (hasKey(errorValues, codeString)) {
      return errorValues[codeString].message;
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE;
    }
  }
  return fallbackMessage;
}
function isValidCode(code) {
  if (!Number.isInteger(code)) {
    return false;
  }
  const codeString = code.toString();
  if (errorValues[codeString]) {
    return true;
  }
  if (isJsonRpcServerError(code)) {
    return true;
  }
  return false;
}
function serialize(error, { shouldIncludeStack = false } = {}) {
  const serialized = {};
  if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
    const _error = error;
    serialized.code = _error.code;
    if (_error.message && typeof _error.message === "string") {
      serialized.message = _error.message;
      if (hasKey(_error, "data")) {
        serialized.data = _error.data;
      }
    } else {
      serialized.message = getMessageFromCode(serialized.code);
      serialized.data = { originalError: assignOriginalError(error) };
    }
  } else {
    serialized.code = standardErrorCodes.rpc.internal;
    serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
    serialized.data = { originalError: assignOriginalError(error) };
  }
  if (shouldIncludeStack) {
    serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
  }
  return serialized;
}
function isJsonRpcServerError(code) {
  return code >= -32099 && code <= -32e3;
}
function assignOriginalError(error) {
  if (error && typeof error === "object" && !Array.isArray(error)) {
    return Object.assign({}, error);
  }
  return error;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
  return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
}

// node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js
var standardErrors = {
  rpc: {
    parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
    invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
    invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
    methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
    internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
    server: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      }
      const { code } = opts;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
    resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
    resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
    transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
    methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
    limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg)
  },
  provider: {
    userRejectedRequest: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
    },
    unauthorized: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
    },
    unsupportedMethod: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
    },
    disconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
    },
    chainDisconnected: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
    },
    unsupportedChain: (arg) => {
      return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
    },
    custom: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      }
      const { code, message, data } = opts;
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string');
      }
      return new EthereumProviderError(code, message, data);
    }
  }
};
function getEthJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message || void 0, data];
    }
  }
  return [];
}
var EthereumRpcError = class extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    this.code = code;
    if (data !== void 0) {
      this.data = data;
    }
  }
};
var EthereumProviderError = class extends EthereumRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
};
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}

// node_modules/@coinbase/wallet-sdk/dist/core/type/index.js
function OpaqueType() {
  return (value) => value;
}
var HexString = OpaqueType();
var AddressString = OpaqueType();
var BigIntString = OpaqueType();
function IntNumber(num) {
  return Math.floor(num);
}
var RegExpString = OpaqueType();

// node_modules/@coinbase/wallet-sdk/dist/core/type/util.js
var INT_STRING_REGEX = /^[0-9]*$/;
var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
  return [...value].map((b9) => b9.toString(16).padStart(2, "0")).join("");
}
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromBuffer(buf, includePrefix = false) {
  const hex = buf.toString("hex");
  return HexString(includePrefix ? `0x${hex}` : hex);
}
function encodeToHexString(str) {
  return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi3) {
  return BigIntString(bi3.toString(10));
}
function hexStringFromNumber(num) {
  return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
  return str.startsWith("0x") || str.startsWith("0X");
}
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return `0x${hex.slice(2)}`;
  }
  return `0x${hex}`;
}
function isHexString(hex) {
  if (typeof hex !== "string") {
    return false;
  }
  const s7 = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s7);
}
function ensureHexString(hex, includePrefix = false) {
  if (typeof hex === "string") {
    const s7 = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s7)) {
      return HexString(includePrefix ? `0x${s7}` : s7);
    }
  }
  throw standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
  let h6 = ensureHexString(hex, false);
  if (h6.length % 2 === 1) {
    h6 = HexString(`0${h6}`);
  }
  return includePrefix ? HexString(`0x${h6}`) : h6;
}
function ensureAddressString(str) {
  if (typeof str === "string") {
    const s7 = strip0x(str).toLowerCase();
    if (isHexString(s7) && s7.length === 40) {
      return AddressString(prepend0x(s7));
    }
  }
  throw standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === "string") {
    if (isHexString(str)) {
      const s7 = ensureEvenLengthHexString(str, false);
      return Buffer.from(s7, "hex");
    }
    return Buffer.from(str, "utf8");
  }
  throw standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
function ensureIntNumber(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return IntNumber(num);
  }
  if (typeof num === "string") {
    if (INT_STRING_REGEX.test(num)) {
      return IntNumber(Number(num));
    }
    if (isHexString(num)) {
      return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
function ensureBigInt(val) {
  if (val !== null && (typeof val === "bigint" || isBigNumber(val))) {
    return BigInt(val.toString(10));
  }
  if (typeof val === "number") {
    return BigInt(ensureIntNumber(val));
  }
  if (typeof val === "string") {
    if (INT_STRING_REGEX.test(val)) {
      return BigInt(val);
    }
    if (isHexString(val)) {
      return BigInt(ensureEvenLengthHexString(val, true));
    }
  }
  throw standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
function ensureParsedJSONObject(val) {
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  if (typeof val === "object") {
    return val;
  }
  throw standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== "function") {
    return false;
  }
  const { constructor } = val;
  return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
}

// node_modules/@coinbase/wallet-sdk/dist/util/cipher.js
async function generateKeyPair() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, true, ["deriveKey"]);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: peerPublicKey
  }, ownPrivateKey, {
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
}
async function encrypt(sharedSecret, plainText) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipherText = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, new TextEncoder().encode(plainText));
  return { iv, cipherText };
}
async function decrypt(sharedSecret, { iv, cipherText }) {
  const plainText = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, cipherText);
  return new TextDecoder().decode(plainText);
}
function getFormat(keyType) {
  switch (keyType) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function exportKeyToHexString(type, key) {
  const format = getFormat(type);
  const exported = await crypto.subtle.exportKey(format, key);
  return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type, hexString) {
  const format = getFormat(type);
  const arrayBuffer = hexStringToUint8Array(hexString).buffer;
  return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
    name: "ECDH",
    namedCurve: "P-256"
  }, true, type === "private" ? ["deriveKey"] : []);
}
async function encryptContent(content, sharedSecret) {
  const serialized = JSON.stringify(content, (_7, value) => {
    if (!(value instanceof Error))
      return value;
    const error = value;
    return Object.assign(Object.assign({}, error.code ? { code: error.code } : {}), { message: error.message });
  });
  return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
  return JSON.parse(await decrypt(sharedSecret, encryptedData));
}

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWKeyManager.js
var OWN_PRIVATE_KEY = {
  storageKey: "ownPrivateKey",
  keyType: "private"
};
var OWN_PUBLIC_KEY = {
  storageKey: "ownPublicKey",
  keyType: "public"
};
var PEER_PUBLIC_KEY = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
var SCWKeyManager = class {
  constructor() {
    this.storage = new ScopedLocalStorage("CBWSDK", "SCWKeyManager");
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    await this.loadKeysIfNeeded();
    return this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    await this.loadKeysIfNeeded();
    return this.sharedSecret;
  }
  async setPeerPublicKey(key) {
    this.sharedSecret = null;
    this.peerPublicKey = key;
    await this.storeKey(PEER_PUBLIC_KEY, key);
    await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
    this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
    this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
    this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
  }
  async generateKeyPair() {
    const newKeyPair = await generateKeyPair();
    this.ownPrivateKey = newKeyPair.privateKey;
    this.ownPublicKey = newKeyPair.publicKey;
    await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
    await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null) {
      this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
    }
    if (this.ownPublicKey === null) {
      this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
    }
    if (this.ownPrivateKey === null || this.ownPublicKey === null) {
      await this.generateKeyPair();
    }
    if (this.peerPublicKey === null) {
      this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
    }
    if (this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(item) {
    const key = this.storage.getItem(item.storageKey);
    if (!key)
      return null;
    return importKeyFromHexString(item.keyType, key);
  }
  async storeKey(item, key) {
    const hexString = await exportKeyToHexString(item.keyType, key);
    this.storage.setItem(item.storageKey, hexString);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sdk-info.js
var VERSION = "4.3.2";
var NAME = "@coinbase/wallet-sdk";

// node_modules/@coinbase/wallet-sdk/dist/util/provider.js
async function fetchRPCRequest(request, rpcUrl) {
  const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: "2.0", id: crypto.randomUUID() });
  const res = await window.fetch(rpcUrl, {
    method: "POST",
    body: JSON.stringify(requestBody),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-Cbw-Sdk-Version": VERSION,
      "X-Cbw-Sdk-Platform": NAME
    }
  });
  const { result, error } = await res.json();
  if (error)
    throw error;
  return result;
}
function getCoinbaseInjectedLegacyProvider() {
  const window2 = globalThis;
  return window2.coinbaseWalletExtension;
}
function getInjectedEthereum() {
  var _a2, _b;
  try {
    const window2 = globalThis;
    return (_a2 = window2.ethereum) !== null && _a2 !== void 0 ? _a2 : (_b = window2.top) === null || _b === void 0 ? void 0 : _b.ethereum;
  } catch (_c2) {
    return void 0;
  }
}
function getCoinbaseInjectedProvider({ metadata, preference }) {
  var _a2, _b;
  const { appName, appLogoUrl, appChainIds } = metadata;
  if (preference.options !== "smartWalletOnly") {
    const extension = getCoinbaseInjectedLegacyProvider();
    if (extension) {
      (_a2 = extension.setAppInfo) === null || _a2 === void 0 ? void 0 : _a2.call(extension, appName, appLogoUrl, appChainIds, preference);
      return extension;
    }
  }
  const ethereum = getInjectedEthereum();
  if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
    (_b = ethereum.setAppInfo) === null || _b === void 0 ? void 0 : _b.call(ethereum, appName, appLogoUrl, appChainIds, preference);
    return ethereum;
  }
  return void 0;
}
function checkErrorForInvalidRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw standardErrors.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: args
    });
  }
  const { method, params } = args;
  if (typeof method !== "string" || method.length === 0) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: args
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: args
    });
  }
  switch (method) {
    case "eth_sign":
    case "eth_signTypedData_v2":
    case "eth_subscribe":
    case "eth_unsubscribe":
      throw standardErrors.provider.unsupportedMethod();
  }
}

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWSigner.js
var ACCOUNTS_KEY = "accounts";
var ACTIVE_CHAIN_STORAGE_KEY = "activeChain";
var AVAILABLE_CHAINS_STORAGE_KEY = "availableChains";
var WALLET_CAPABILITIES_STORAGE_KEY = "walletCapabilities";
var SCWSigner = class {
  constructor(params) {
    var _a2, _b, _c2;
    this.metadata = params.metadata;
    this.communicator = params.communicator;
    this.callback = params.callback;
    this.keyManager = new SCWKeyManager();
    this.storage = new ScopedLocalStorage("CBWSDK", "SCWStateManager");
    this.accounts = (_a2 = this.storage.loadObject(ACCOUNTS_KEY)) !== null && _a2 !== void 0 ? _a2 : [];
    this.chain = this.storage.loadObject(ACTIVE_CHAIN_STORAGE_KEY) || {
      id: (_c2 = (_b = params.metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c2 !== void 0 ? _c2 : 1
    };
    this.handshake = this.handshake.bind(this);
    this.request = this.request.bind(this);
    this.createRequestMessage = this.createRequestMessage.bind(this);
    this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  async handshake(args) {
    var _a2, _b, _c2, _d;
    await ((_b = (_a2 = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a2));
    const handshakeMessage = await this.createRequestMessage({
      handshake: {
        method: args.method,
        params: Object.assign({}, this.metadata, (_c2 = args.params) !== null && _c2 !== void 0 ? _c2 : {})
      }
    });
    const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
    if ("failure" in response.content)
      throw response.content.failure;
    const peerPublicKey = await importKeyFromHexString("public", response.sender);
    await this.keyManager.setPeerPublicKey(peerPublicKey);
    const decrypted = await this.decryptResponseMessage(response);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    switch (args.method) {
      case "eth_requestAccounts": {
        const accounts = result.value;
        this.accounts = accounts;
        this.storage.storeObject(ACCOUNTS_KEY, accounts);
        (_d = this.callback) === null || _d === void 0 ? void 0 : _d.call(this, "accountsChanged", accounts);
        break;
      }
    }
  }
  async request(request) {
    var _a2;
    if (this.accounts.length === 0) {
      switch (request.method) {
        case "wallet_sendCalls":
          return this.sendRequestToPopup(request);
        default:
          throw standardErrors.provider.unauthorized();
      }
    }
    switch (request.method) {
      case "eth_requestAccounts":
        (_a2 = this.callback) === null || _a2 === void 0 ? void 0 : _a2.call(this, "connect", { chainId: hexStringFromNumber(this.chain.id) });
        return this.accounts;
      case "eth_accounts":
        return this.accounts;
      case "eth_coinbase":
        return this.accounts[0];
      case "net_version":
        return this.chain.id;
      case "eth_chainId":
        return hexStringFromNumber(this.chain.id);
      case "wallet_getCapabilities":
        return this.storage.loadObject(WALLET_CAPABILITIES_STORAGE_KEY);
      case "wallet_switchEthereumChain":
        return this.handleSwitchChainRequest(request);
      case "eth_ecRecover":
      case "personal_sign":
      case "wallet_sign":
      case "personal_ecRecover":
      case "eth_signTransaction":
      case "eth_sendTransaction":
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
      case "wallet_addEthereumChain":
      case "wallet_watchAsset":
      case "wallet_sendCalls":
      case "wallet_showCallsStatus":
      case "wallet_grantPermissions":
        return this.sendRequestToPopup(request);
      default:
        if (!this.chain.rpcUrl)
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        return fetchRPCRequest(request, this.chain.rpcUrl);
    }
  }
  async sendRequestToPopup(request) {
    var _a2, _b;
    await ((_b = (_a2 = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a2));
    const response = await this.sendEncryptedRequest(request);
    const decrypted = await this.decryptResponseMessage(response);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    return result.value;
  }
  async cleanup() {
    var _a2, _b;
    this.storage.clear();
    await this.keyManager.clear();
    this.accounts = [];
    this.chain = {
      id: (_b = (_a2 = this.metadata.appChainIds) === null || _a2 === void 0 ? void 0 : _a2[0]) !== null && _b !== void 0 ? _b : 1
    };
  }
  /**
   * @returns `null` if the request was successful.
   * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
   */
  async handleSwitchChainRequest(request) {
    var _a2;
    const params = request.params;
    if (!params || !((_a2 = params[0]) === null || _a2 === void 0 ? void 0 : _a2.chainId)) {
      throw standardErrors.rpc.invalidParams();
    }
    const chainId = ensureIntNumber(params[0].chainId);
    const localResult = this.updateChain(chainId);
    if (localResult)
      return null;
    const popupResult = await this.sendRequestToPopup(request);
    if (popupResult === null) {
      this.updateChain(chainId);
    }
    return popupResult;
  }
  async sendEncryptedRequest(request) {
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
    }
    const encrypted = await encryptContent({
      action: request,
      chainId: this.chain.id
    }, sharedSecret);
    const message = await this.createRequestMessage({ encrypted });
    return this.communicator.postRequestAndWaitForResponse(message);
  }
  async createRequestMessage(content) {
    const publicKey = await exportKeyToHexString("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      sender: publicKey,
      content,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(message) {
    var _a2, _b;
    const content = message.content;
    if ("failure" in content) {
      throw content.failure;
    }
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw standardErrors.provider.unauthorized("Invalid session");
    }
    const response = await decryptContent(content.encrypted, sharedSecret);
    const availableChains = (_a2 = response.data) === null || _a2 === void 0 ? void 0 : _a2.chains;
    if (availableChains) {
      const chains = Object.entries(availableChains).map(([id, rpcUrl]) => ({
        id: Number(id),
        rpcUrl
      }));
      this.storage.storeObject(AVAILABLE_CHAINS_STORAGE_KEY, chains);
      this.updateChain(this.chain.id, chains);
    }
    const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
    if (walletCapabilities) {
      this.storage.storeObject(WALLET_CAPABILITIES_STORAGE_KEY, walletCapabilities);
    }
    return response;
  }
  updateChain(chainId, newAvailableChains) {
    var _a2;
    const chains = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : this.storage.loadObject(AVAILABLE_CHAINS_STORAGE_KEY);
    const chain = chains === null || chains === void 0 ? void 0 : chains.find((chain2) => chain2.id === chainId);
    if (!chain)
      return false;
    if (chain !== this.chain) {
      this.chain = chain;
      this.storage.storeObject(ACTIVE_CHAIN_STORAGE_KEY, chain);
      (_a2 = this.callback) === null || _a2 === void 0 ? void 0 : _a2.call(this, "chainChanged", hexStringFromNumber(chain.id));
    }
    return true;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
var import_eth_eip712_util = __toESM(require_eth_eip712_util(), 1);

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/constants.js
var WALLET_USER_NAME_KEY = "walletUsername";
var LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
var APP_VERSION_KEY = "AppVersion";

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/Web3Response.js
function isErrorResponse(response) {
  return response.errorMessage !== void 0;
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkCipher.js
var WalletLinkCipher = class {
  // @param secret hex representation of 32-byte secret
  constructor(secret) {
    this.secret = secret;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(plainText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
    const enc = new TextEncoder();
    const encryptedResult = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: ivBytes
    }, secretKey, enc.encode(plainText));
    const tagLength = 16;
    const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    const authTagBytes = new Uint8Array(authTag);
    const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
    return uint8ArrayToHex(concatted);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(cipherText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    return new Promise((resolve, reject) => {
      void (async function() {
        const secretKey = await crypto.subtle.importKey("raw", hexStringToUint8Array(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const encrypted = hexStringToUint8Array(cipherText);
        const ivBytes = encrypted.slice(0, 12);
        const authTagBytes = encrypted.slice(12, 28);
        const encryptedPlaintextBytes = encrypted.slice(28);
        const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
        const algo = {
          name: "AES-GCM",
          iv: new Uint8Array(ivBytes)
        };
        try {
          const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
          const decoder = new TextDecoder();
          resolve(decoder.decode(decrypted));
        } catch (err) {
          reject(err);
        }
      })();
    });
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkHTTP.js
var WalletLinkHTTP = class {
  constructor(linkAPIUrl, sessionId, sessionKey) {
    this.linkAPIUrl = linkAPIUrl;
    this.sessionId = sessionId;
    const credentials = `${sessionId}:${sessionKey}`;
    this.auth = `Basic ${btoa(credentials)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(events) {
    return Promise.all(events.map((e3) => fetch(`${this.linkAPIUrl}/events/${e3.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((error) => console.error("Unabled to mark event as failed:", error));
  }
  async fetchUnseenEvents() {
    var _a2;
    const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (response.ok) {
      const { events, error } = await response.json();
      if (error) {
        throw new Error(`Check unseen events failed: ${error}`);
      }
      const responseEvents = (_a2 = events === null || events === void 0 ? void 0 : events.filter((e3) => e3.event === "Web3Response").map((e3) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: e3.id,
        event: e3.event,
        data: e3.data
      }))) !== null && _a2 !== void 0 ? _a2 : [];
      this.markUnseenEventsAsSeen(responseEvents);
      return responseEvents;
    }
    throw new Error(`Check unseen events failed: ${response.status}`);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkWebSocket.js
var ConnectionState;
(function(ConnectionState2) {
  ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
  ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
  ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (ConnectionState = {}));
var WalletLinkWebSocket = class {
  setConnectionStateListener(listener) {
    this.connectionStateListener = listener;
  }
  setIncomingDataListener(listener) {
    this.incomingDataListener = listener;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(url, WebSocketClass = WebSocket) {
    this.WebSocketClass = WebSocketClass;
    this.webSocket = null;
    this.pendingData = [];
    this.url = url.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket) {
      throw new Error("webSocket object is not null");
    }
    return new Promise((resolve, reject) => {
      var _a2;
      let webSocket;
      try {
        this.webSocket = webSocket = new this.WebSocketClass(this.url);
      } catch (err) {
        reject(err);
        return;
      }
      (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTING);
      webSocket.onclose = (evt) => {
        var _a3;
        this.clearWebSocket();
        reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
        (_a3 = this.connectionStateListener) === null || _a3 === void 0 ? void 0 : _a3.call(this, ConnectionState.DISCONNECTED);
      };
      webSocket.onopen = (_7) => {
        var _a3;
        resolve();
        (_a3 = this.connectionStateListener) === null || _a3 === void 0 ? void 0 : _a3.call(this, ConnectionState.CONNECTED);
        if (this.pendingData.length > 0) {
          const pending = [...this.pendingData];
          pending.forEach((data) => this.sendData(data));
          this.pendingData = [];
        }
      };
      webSocket.onmessage = (evt) => {
        var _a3, _b;
        if (evt.data === "h") {
          (_a3 = this.incomingDataListener) === null || _a3 === void 0 ? void 0 : _a3.call(this, {
            type: "Heartbeat"
          });
        } else {
          try {
            const message = JSON.parse(evt.data);
            (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
          } catch (_c2) {
          }
        }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var _a2;
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.clearWebSocket();
    (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
    this.connectionStateListener = void 0;
    this.incomingDataListener = void 0;
    try {
      webSocket.close();
    } catch (_b) {
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(data) {
    const { webSocket } = this;
    if (!webSocket) {
      this.pendingData.push(data);
      this.connect();
      return;
    }
    webSocket.send(data);
  }
  clearWebSocket() {
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.webSocket = null;
    webSocket.onclose = null;
    webSocket.onerror = null;
    webSocket.onmessage = null;
    webSocket.onopen = null;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkConnection.js
var HEARTBEAT_INTERVAL = 1e4;
var REQUEST_TIMEOUT = 6e4;
var WalletLinkConnection = class {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session, linkAPIUrl, listener }) {
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = IntNumber(1);
    this._connected = false;
    this._linked = false;
    this.shouldFetchUnseenEventsOnConnect = false;
    this.requestResolutions = /* @__PURE__ */ new Map();
    this.handleSessionMetadataUpdated = (metadata) => {
      if (!metadata)
        return;
      const handlers = /* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          // ChainId and JsonRpcUrl are always updated together
          (v8) => metadata.JsonRpcUrl && this.handleChainUpdated(v8, metadata.JsonRpcUrl)
        ]
      ]);
      handlers.forEach((handler, key) => {
        const value = metadata[key];
        if (value === void 0)
          return;
        handler(value);
      });
    };
    this.handleDestroyed = (__destroyed) => {
      var _a2;
      if (__destroyed !== "1")
        return;
      (_a2 = this.listener) === null || _a2 === void 0 ? void 0 : _a2.resetAndReload();
    };
    this.handleAccountUpdated = async (encryptedEthereumAddress) => {
      var _a2;
      const address = await this.cipher.decrypt(encryptedEthereumAddress);
      (_a2 = this.listener) === null || _a2 === void 0 ? void 0 : _a2.accountUpdated(address);
    };
    this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
      var _a2;
      const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
      (_a2 = this.listener) === null || _a2 === void 0 ? void 0 : _a2.metadataUpdated(key, decryptedValue);
    };
    this.handleWalletUsernameUpdated = async (walletUsername) => {
      this.handleMetadataUpdated(WALLET_USER_NAME_KEY, walletUsername);
    };
    this.handleAppVersionUpdated = async (appVersion) => {
      this.handleMetadataUpdated(APP_VERSION_KEY, appVersion);
    };
    this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
      var _a2;
      const chainId = await this.cipher.decrypt(encryptedChainId);
      const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
      (_a2 = this.listener) === null || _a2 === void 0 ? void 0 : _a2.chainUpdated(chainId, jsonRpcUrl);
    };
    this.session = session;
    this.cipher = new WalletLinkCipher(session.secret);
    this.listener = listener;
    const ws3 = new WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocket);
    ws3.setConnectionStateListener(async (state) => {
      let connected = false;
      switch (state) {
        case ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const connect = async () => {
              await new Promise((resolve) => setTimeout(resolve, 5e3));
              if (!this.destroyed) {
                ws3.connect().catch(() => {
                  connect();
                });
              }
            };
            connect();
          }
          break;
        case ConnectionState.CONNECTED:
          connected = await this.handleConnected();
          this.updateLastHeartbeat();
          setInterval(() => {
            this.heartbeat();
          }, HEARTBEAT_INTERVAL);
          if (this.shouldFetchUnseenEventsOnConnect) {
            this.fetchUnseenEventsAPI();
          }
          break;
        case ConnectionState.CONNECTING:
          break;
      }
      if (this.connected !== connected) {
        this.connected = connected;
      }
    });
    ws3.setIncomingDataListener((m6) => {
      var _a2;
      switch (m6.type) {
        // handle server's heartbeat responses
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        // handle link status updates
        case "IsLinkedOK":
        case "Linked": {
          const linked = m6.type === "IsLinkedOK" ? m6.linked : void 0;
          this.linked = linked || m6.onlineGuests > 0;
          break;
        }
        // handle session config updates
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(m6.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(m6);
          break;
        }
      }
      if (m6.id !== void 0) {
        (_a2 = this.requestResolutions.get(m6.id)) === null || _a2 === void 0 ? void 0 : _a2(m6);
      }
    });
    this.ws = ws3;
    this.http = new WalletLinkHTTP(linkAPIUrl, session.id, session.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed) {
      throw new Error("instance is destroyed");
    }
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  async destroy() {
    if (this.destroyed)
      return;
    await this.makeRequest({
      type: "SetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { __destroyed: "1" }
    }, { timeout: 1e3 });
    this.destroyed = true;
    this.ws.disconnect();
    this.listener = void 0;
  }
  get connected() {
    return this._connected;
  }
  set connected(connected) {
    this._connected = connected;
  }
  get linked() {
    return this._linked;
  }
  set linked(linked) {
    var _a2, _b;
    this._linked = linked;
    if (linked)
      (_a2 = this.onceLinked) === null || _a2 === void 0 ? void 0 : _a2.call(this);
    (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
  }
  setOnceLinked(callback) {
    return new Promise((resolve) => {
      if (this.linked) {
        callback().then(resolve);
      } else {
        this.onceLinked = () => {
          callback().then(resolve);
          this.onceLinked = void 0;
        };
      }
    });
  }
  async handleIncomingEvent(m6) {
    var _a2;
    if (m6.type !== "Event" || m6.event !== "Web3Response") {
      return;
    }
    const decryptedData = await this.cipher.decrypt(m6.data);
    const message = JSON.parse(decryptedData);
    if (message.type !== "WEB3_RESPONSE")
      return;
    const { id, response } = message;
    (_a2 = this.listener) === null || _a2 === void 0 ? void 0 : _a2.handleWeb3ResponseMessage(id, response);
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = true;
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e3) {
      console.error("Unable to check for unseen events", e3);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = false;
    const responseEvents = await this.http.fetchUnseenEvents();
    responseEvents.forEach((e3) => this.handleIncomingEvent(e3));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(event, unencryptedData, callWebhook = false) {
    const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, location: location.href, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
    const message = {
      type: "PublishEvent",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      event,
      data,
      callWebhook
    };
    return this.setOnceLinked(async () => {
      const res = await this.makeRequest(message);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to publish event");
      }
      return res.eventId;
    });
  }
  sendData(message) {
    this.ws.sendData(JSON.stringify(message));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch (_a2) {
    }
  }
  async makeRequest(message, options = { timeout: REQUEST_TIMEOUT }) {
    const reqId = message.id;
    this.sendData(message);
    let timeoutId;
    return Promise.race([
      new Promise((_7, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(new Error(`request ${reqId} timed out`));
        }, options.timeout);
      }),
      new Promise((resolve) => {
        this.requestResolutions.set(reqId, (m6) => {
          clearTimeout(timeoutId);
          resolve(m6);
          this.requestResolutions.delete(reqId);
        });
      })
    ]);
  }
  async handleConnected() {
    const res = await this.makeRequest({
      type: "HostSession",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    });
    if (res.type === "Fail")
      return false;
    this.sendData({
      type: "IsLinked",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    this.sendData({
      type: "GetSessionConfig",
      id: IntNumber(this.nextReqId++),
      sessionId: this.session.id
    });
    return true;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/RelayEventManager.js
var RelayEventManager = class {
  constructor() {
    this._nextRequestId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const id = this._nextRequestId;
    const idStr = prepend0x(id.toString(16));
    const callback = this.callbacks.get(idStr);
    if (callback) {
      this.callbacks.delete(idStr);
    }
    return id;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/WalletLinkSession.js
var STORAGE_KEY_SESSION_ID = "session:id";
var STORAGE_KEY_SESSION_SECRET = "session:secret";
var STORAGE_KEY_SESSION_LINKED = "session:linked";
var WalletLinkSession = class _WalletLinkSession {
  constructor(storage2, id, secret, linked = false) {
    this.storage = storage2;
    this.id = id;
    this.secret = secret;
    this.key = bytesToHex(sha2562(`${id}, ${secret} WalletLink`));
    this._linked = !!linked;
  }
  static create(storage2) {
    const id = randomBytesHex(16);
    const secret = randomBytesHex(32);
    return new _WalletLinkSession(storage2, id, secret).save();
  }
  static load(storage2) {
    const id = storage2.getItem(STORAGE_KEY_SESSION_ID);
    const linked = storage2.getItem(STORAGE_KEY_SESSION_LINKED);
    const secret = storage2.getItem(STORAGE_KEY_SESSION_SECRET);
    if (id && secret) {
      return new _WalletLinkSession(storage2, id, secret, linked === "1");
    }
    return null;
  }
  get linked() {
    return this._linked;
  }
  set linked(val) {
    this._linked = val;
    this.persistLinked();
  }
  save() {
    this.storage.setItem(STORAGE_KEY_SESSION_ID, this.id);
    this.storage.setItem(STORAGE_KEY_SESSION_SECRET, this.secret);
    this.persistLinked();
    return this;
  }
  persistLinked() {
    this.storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/util.js
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (e3) {
    return false;
  }
}
function getLocation() {
  try {
    if (isInIFrame() && window.top) {
      return window.top.location;
    }
    return window.location;
  } catch (e3) {
    return window.location;
  }
}
function isMobileWeb() {
  var _a2;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a2 = window === null || window === void 0 ? void 0 : window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent);
}
function isDarkMode() {
  var _a2, _b;
  return (_b = (_a2 = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a2 === void 0 ? void 0 : _a2.call(window, "(prefers-color-scheme: dark)").matches) !== null && _b !== void 0 ? _b : false;
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset-css.js
var cssReset_css_default = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset.js
function injectCssReset() {
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(cssReset_css_default));
  document.documentElement.appendChild(styleEl);
}

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar-css.js
var Snackbar_css_default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar.js
var cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
var gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
var Snackbar = class {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
    this.nextItemKey = 0;
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach(el) {
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-snackbar-root";
    el.appendChild(this.root);
    this.render();
  }
  presentItem(itemProps) {
    const key = this.nextItemKey++;
    this.items.set(key, itemProps);
    this.render();
    return () => {
      this.items.delete(key);
      this.render();
    };
  }
  clear() {
    this.items.clear();
    this.render();
  }
  render() {
    if (!this.root) {
      return;
    }
    B2(_2(
      "div",
      null,
      _2(SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => _2(SnackbarInstance, Object.assign({}, itemProps, { key }))))
    ), this.root);
  }
};
var SnackbarContainer = (props) => _2(
  "div",
  { class: clsx("-cbwsdk-snackbar-container") },
  _2("style", null, Snackbar_css_default),
  _2("div", { class: "-cbwsdk-snackbar" }, props.children)
);
var SnackbarInstance = ({ autoExpand, message, menuItems }) => {
  const [hidden, setHidden] = h2(true);
  const [expanded, setExpanded] = h2(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
  y2(() => {
    const timers = [
      window.setTimeout(() => {
        setHidden(false);
      }, 1),
      window.setTimeout(() => {
        setExpanded(true);
      }, 1e4)
    ];
    return () => {
      timers.forEach(window.clearTimeout);
    };
  });
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return _2(
    "div",
    { class: clsx("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
    _2(
      "div",
      { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
      _2("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
      " ",
      _2("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
      _2(
        "div",
        { class: "-gear-container" },
        !expanded && _2(
          "svg",
          { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          _2("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
        ),
        _2("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
      )
    ),
    menuItems && menuItems.length > 0 && _2("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i8) => _2(
      "div",
      { class: clsx("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i8 },
      _2(
        "svg",
        { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        _2("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
      ),
      _2("span", { class: clsx("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
    )))
  );
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WalletLinkRelayUI.js
var RETRY_SVG_PATH = "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
var WalletLinkRelayUI = class {
  constructor() {
    this.attached = false;
    this.snackbar = new Snackbar();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    const el = document.documentElement;
    const container = document.createElement("div");
    container.className = "-cbwsdk-css-reset";
    el.appendChild(container);
    this.snackbar.attach(container);
    this.attached = true;
    injectCssReset();
  }
  showConnecting(options) {
    let snackbarProps;
    if (options.isUnlinkedErrorState) {
      snackbarProps = {
        autoExpand: true,
        message: "Connection lost",
        menuItems: [
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    } else {
      snackbarProps = {
        message: "Confirm on phone",
        menuItems: [
          {
            isRed: true,
            info: "Cancel transaction",
            svgWidth: "11",
            svgHeight: "11",
            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
            defaultFillRule: "inherit",
            defaultClipRule: "inherit",
            onClick: options.onCancel
          },
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: RETRY_SVG_PATH,
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    }
    return this.snackbar.presentItem(snackbarProps);
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog-css.js
var RedirectDialog_css_default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog.js
var RedirectDialog = class {
  constructor() {
    this.root = null;
    this.darkMode = isDarkMode();
  }
  attach() {
    const el = document.documentElement;
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-css-reset";
    el.appendChild(this.root);
    injectCssReset();
  }
  present(props) {
    this.render(props);
  }
  clear() {
    this.render(null);
  }
  render(props) {
    if (!this.root)
      return;
    B2(null, this.root);
    if (!props)
      return;
    B2(_2(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root);
  }
};
var RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
  const theme = darkMode ? "dark" : "light";
  return _2(
    SnackbarContainer,
    { darkMode },
    _2(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      _2("style", null, RedirectDialog_css_default),
      _2("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
      _2(
        "div",
        { class: clsx("-cbwsdk-redirect-dialog-box", theme) },
        _2("p", null, title),
        _2("button", { onClick: onButtonClick }, buttonText)
      )
    )
  );
};

// node_modules/@coinbase/wallet-sdk/dist/core/constants.js
var CB_KEYS_URL = "https://keys.coinbase.com/connect";
var CB_WALLET_RPC_URL = "https://rpc.wallet.coinbase.com";
var WALLETLINK_URL = "https://www.walletlink.org";
var CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WLMobileRelayUI.js
var WLMobileRelayUI = class {
  constructor() {
    this.attached = false;
    this.redirectDialog = new RedirectDialog();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    this.redirectDialog.attach();
    this.attached = true;
  }
  redirectToCoinbaseWallet(walletLinkUrl) {
    const url = new URL(CBW_MOBILE_DEEPLINK_URL);
    url.searchParams.append("redirect_url", getLocation().href);
    if (walletLinkUrl) {
      url.searchParams.append("wl_url", walletLinkUrl);
    }
    const anchorTag = document.createElement("a");
    anchorTag.target = "cbw-opener";
    anchorTag.href = url.href;
    anchorTag.rel = "noreferrer noopener";
    anchorTag.click();
  }
  openCoinbaseWalletDeeplink(walletLinkUrl) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(walletLinkUrl);
      }
    });
    setTimeout(() => {
      this.redirectToCoinbaseWallet(walletLinkUrl);
    }, 99);
  }
  showConnecting(_options) {
    return () => {
      this.redirectDialog.clear();
    };
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/WalletLinkRelay.js
var WalletLinkRelay = class _WalletLinkRelay {
  constructor(options) {
    this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
    this.isMobileWeb = isMobileWeb();
    this.linkedUpdated = (linked) => {
      this.isLinked = linked;
      const cachedAddresses = this.storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        this._session.linked = linked;
      }
      this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
        if (addresses[0] !== "" && !linked && this._session.linked && !wasConnectedViaStandalone) {
          this.isUnlinkedErrorState = true;
        }
      }
    };
    this.metadataUpdated = (key, value) => {
      this.storage.setItem(key, value);
    };
    this.chainUpdated = (chainId, jsonRpcUrl) => {
      if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
        return;
      }
      this.chainCallbackParams = {
        chainId,
        jsonRpcUrl
      };
      if (this.chainCallback) {
        this.chainCallback(jsonRpcUrl, Number.parseInt(chainId, 10));
      }
    };
    this.accountUpdated = (selectedAddress) => {
      if (this.accountsCallback) {
        this.accountsCallback([selectedAddress]);
      }
      if (_WalletLinkRelay.accountRequestCallbackIds.size > 0) {
        Array.from(_WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
          this.invokeCallback(id, {
            method: "requestEthereumAccounts",
            result: [selectedAddress]
          });
        });
        _WalletLinkRelay.accountRequestCallbackIds.clear();
      }
    };
    this.resetAndReload = this.resetAndReload.bind(this);
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    this.metadata = options.metadata;
    this.accountsCallback = options.accountsCallback;
    this.chainCallback = options.chainCallback;
    const { session, ui: ui4, connection } = this.subscribe();
    this._session = session;
    this.connection = connection;
    this.relayEventManager = new RelayEventManager();
    this.ui = ui4;
    this.ui.attach();
  }
  subscribe() {
    const session = WalletLinkSession.load(this.storage) || WalletLinkSession.create(this.storage);
    const { linkAPIUrl } = this;
    const connection = new WalletLinkConnection({
      session,
      linkAPIUrl,
      listener: this
    });
    const ui4 = this.isMobileWeb ? new WLMobileRelayUI() : new WalletLinkRelayUI();
    connection.connect();
    return { session, ui: ui4, connection };
  }
  resetAndReload() {
    this.connection.destroy().then(() => {
      const storedSession = WalletLinkSession.load(this.storage);
      if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
        ScopedLocalStorage.clearAll();
      }
      document.location.reload();
    }).catch((_7) => {
    });
  }
  signEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxPriorityFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: false
      }
    });
  }
  signAndSubmitEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: bigIntStringFromBigInt(params.weiValue),
        data: hexStringFromBuffer(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
        maxFeePerGas: params.maxFeePerGas ? bigIntStringFromBigInt(params.maxFeePerGas) : null,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas ? bigIntStringFromBigInt(params.maxPriorityFeePerGas) : null,
        gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: true
      }
    });
  }
  submitEthereumTransaction(signedTransaction, chainId) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: hexStringFromBuffer(signedTransaction, true),
        chainId
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  sendRequest(request) {
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    return new Promise((resolve, reject) => {
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  publishWeb3RequestEvent(id, request) {
    const message = { type: "WEB3_REQUEST", id, request };
    this.publishEvent("Web3Request", message, true).then((_7) => {
    }).catch((err) => {
      this.handleWeb3ResponseMessage(message.id, {
        method: request.method,
        errorMessage: err.message
      });
    });
    if (this.isMobileWeb) {
      this.openCoinbaseWalletDeeplink(request.method);
    }
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(method) {
    if (!(this.ui instanceof WLMobileRelayUI))
      return;
    switch (method) {
      case "requestEthereumAccounts":
      // requestEthereumAccounts is handled via popup
      case "switchEthereumChain":
        return;
      default:
        window.addEventListener("blur", () => {
          window.addEventListener("focus", () => {
            this.connection.checkUnseenEvents();
          }, { once: true });
        }, { once: true });
        this.ui.openCoinbaseWalletDeeplink();
        break;
    }
  }
  publishWeb3RequestCanceledEvent(id) {
    const message = {
      type: "WEB3_REQUEST_CANCELED",
      id
    };
    this.publishEvent("Web3RequestCanceled", message, false).then();
  }
  publishEvent(event, message, callWebhook) {
    return this.connection.publishEvent(event, message, callWebhook);
  }
  handleWeb3ResponseMessage(id, response) {
    if (response.method === "requestEthereumAccounts") {
      _WalletLinkRelay.accountRequestCallbackIds.forEach((id2) => this.invokeCallback(id2, response));
      _WalletLinkRelay.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(id, response);
  }
  handleErrorResponse(id, method, error) {
    var _a2;
    const errorMessage = (_a2 = error === null || error === void 0 ? void 0 : error.message) !== null && _a2 !== void 0 ? _a2 : "Unspecified error message.";
    this.handleWeb3ResponseMessage(id, {
      method,
      errorMessage
    });
  }
  invokeCallback(id, response) {
    const callback = this.relayEventManager.callbacks.get(id);
    if (callback) {
      callback(response);
      this.relayEventManager.callbacks.delete(id);
    }
  }
  requestEthereumAccounts() {
    const { appName, appLogoUrl } = this.metadata;
    const request = {
      method: "requestEthereumAccounts",
      params: {
        appName,
        appLogoUrl
      }
    };
    const hideSnackbarItem = null;
    const id = randomBytesHex(8);
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      _WalletLinkRelay.accountRequestCallbackIds.add(id);
      this.publishWeb3RequestEvent(id, request);
    });
  }
  watchAsset(type, address, symbol, decimals, image, chainId) {
    const request = {
      method: "watchAsset",
      params: {
        type,
        options: {
          address,
          symbol,
          decimals,
          image
        },
        chainId
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
    const request = {
      method: "addEthereumChain",
      params: {
        chainId,
        rpcUrls,
        blockExplorerUrls,
        chainName,
        iconUrls,
        nativeCurrency
      }
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  switchEthereumChain(chainId, address) {
    const request = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId }, { address })
    };
    let hideSnackbarItem = null;
    const id = randomBytesHex(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (isErrorResponse(response) && response.errorCode) {
          return reject(standardErrors.provider.custom({
            code: response.errorCode,
            message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
          }));
        } else if (isErrorResponse(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
};
WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
var DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
var DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
var WalletLinkSigner = class {
  constructor(options) {
    this._relay = null;
    this._addresses = [];
    this.metadata = options.metadata;
    this._storage = new ScopedLocalStorage("walletlink", WALLETLINK_URL);
    this.callback = options.callback || null;
    const cachedAddresses = this._storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      const addresses = cachedAddresses.split(" ");
      if (addresses[0] !== "") {
        this._addresses = addresses.map((address) => ensureAddressString(address));
      }
    }
    this.initializeRelay();
  }
  getSession() {
    const relay = this.initializeRelay();
    const { id, secret } = relay.getWalletLinkSession();
    return { id, secret };
  }
  async handshake() {
    await this._eth_requestAccounts();
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var _a2;
    return (_a2 = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a2 !== void 0 ? _a2 : void 0;
  }
  set jsonRpcUrl(value) {
    this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
  }
  updateProviderInfo(jsonRpcUrl, chainId) {
    var _a2;
    this.jsonRpcUrl = jsonRpcUrl;
    const originalChainId = this.getChainId();
    this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
    const chainChanged = ensureIntNumber(chainId) !== originalChainId;
    if (chainChanged) {
      (_a2 = this.callback) === null || _a2 === void 0 ? void 0 : _a2.call(this, "chainChanged", hexStringFromNumber(chainId));
    }
  }
  async watchAsset(params) {
    const request = Array.isArray(params) ? params[0] : params;
    if (!request.type) {
      throw standardErrors.rpc.invalidParams("Type is required");
    }
    if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
      throw standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
    }
    if (!(request === null || request === void 0 ? void 0 : request.options)) {
      throw standardErrors.rpc.invalidParams("Options are required");
    }
    if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
      throw standardErrors.rpc.invalidParams("Address is required");
    }
    const chainId = this.getChainId();
    const { address, symbol, image, decimals } = request.options;
    const relay = this.initializeRelay();
    const result = await relay.watchAsset(request.type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
    if (isErrorResponse(result))
      return false;
    return !!result.result;
  }
  async addEthereumChain(params) {
    var _a2, _b;
    const request = params[0];
    if (((_a2 = request.rpcUrls) === null || _a2 === void 0 ? void 0 : _a2.length) === 0) {
      throw standardErrors.rpc.invalidParams("please pass in at least 1 rpcUrl");
    }
    if (!request.chainName || request.chainName.trim() === "") {
      throw standardErrors.rpc.invalidParams("chainName is a required field");
    }
    if (!request.nativeCurrency) {
      throw standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    }
    const chainIdNumber = Number.parseInt(request.chainId, 16);
    if (chainIdNumber === this.getChainId()) {
      return false;
    }
    const relay = this.initializeRelay();
    const { rpcUrls = [], blockExplorerUrls = [], chainName, iconUrls = [], nativeCurrency } = request;
    const res = await relay.addEthereumChain(chainIdNumber.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
    if (isErrorResponse(res))
      return false;
    if (((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true) {
      this.updateProviderInfo(rpcUrls[0], chainIdNumber);
      return null;
    }
    throw standardErrors.rpc.internal("unable to add ethereum chain");
  }
  async switchEthereumChain(params) {
    const request = params[0];
    const chainId = Number.parseInt(request.chainId, 16);
    const relay = this.initializeRelay();
    const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0);
    if (isErrorResponse(res))
      throw res;
    const switchResponse = res.result;
    if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
      this.updateProviderInfo(switchResponse.rpcUrl, chainId);
    }
    return null;
  }
  async cleanup() {
    this.callback = null;
    if (this._relay) {
      this._relay.resetAndReload();
    }
    this._storage.clear();
  }
  _setAddresses(addresses, _7) {
    var _a2;
    if (!Array.isArray(addresses)) {
      throw new Error("addresses is not an array");
    }
    const newAddresses = addresses.map((address) => ensureAddressString(address));
    if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
      return;
    }
    this._addresses = newAddresses;
    (_a2 = this.callback) === null || _a2 === void 0 ? void 0 : _a2.call(this, "accountsChanged", newAddresses);
    this._storage.setItem(LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
  }
  async request(request) {
    const params = request.params || [];
    switch (request.method) {
      case "eth_accounts":
        return [...this._addresses];
      case "eth_coinbase":
        return this.selectedAddress || null;
      case "net_version":
        return this.getChainId().toString(10);
      case "eth_chainId":
        return hexStringFromNumber(this.getChainId());
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_ecRecover":
      case "personal_ecRecover":
        return this.ecRecover(request);
      case "personal_sign":
        return this.personalSign(request);
      case "eth_signTransaction":
        return this._eth_signTransaction(params);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(params);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(params);
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this.signTypedData(request);
      case "wallet_addEthereumChain":
        return this.addEthereumChain(params);
      case "wallet_switchEthereumChain":
        return this.switchEthereumChain(params);
      case "wallet_watchAsset":
        return this.watchAsset(params);
      default:
        if (!this.jsonRpcUrl)
          throw standardErrors.rpc.internal("No RPC URL set for chain");
        return fetchRPCRequest(request, this.jsonRpcUrl);
    }
  }
  _ensureKnownAddress(addressString) {
    const addressStr = ensureAddressString(addressString);
    const lowercaseAddresses = this._addresses.map((address) => ensureAddressString(address));
    if (!lowercaseAddresses.includes(addressStr)) {
      throw new Error("Unknown Ethereum address");
    }
  }
  _prepareTransactionParams(tx) {
    const fromAddress = tx.from ? ensureAddressString(tx.from) : this.selectedAddress;
    if (!fromAddress) {
      throw new Error("Ethereum address is unavailable");
    }
    this._ensureKnownAddress(fromAddress);
    const toAddress = tx.to ? ensureAddressString(tx.to) : null;
    const weiValue = tx.value != null ? ensureBigInt(tx.value) : BigInt(0);
    const data = tx.data ? ensureBuffer(tx.data) : Buffer.alloc(0);
    const nonce = tx.nonce != null ? ensureIntNumber(tx.nonce) : null;
    const gasPriceInWei = tx.gasPrice != null ? ensureBigInt(tx.gasPrice) : null;
    const maxFeePerGas = tx.maxFeePerGas != null ? ensureBigInt(tx.maxFeePerGas) : null;
    const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? ensureBigInt(tx.maxPriorityFeePerGas) : null;
    const gasLimit = tx.gas != null ? ensureBigInt(tx.gas) : null;
    const chainId = tx.chainId ? ensureIntNumber(tx.chainId) : this.getChainId();
    return {
      fromAddress,
      toAddress,
      weiValue,
      data,
      nonce,
      gasPriceInWei,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      chainId
    };
  }
  async ecRecover(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: encodeToHexString(params[0]),
        signature: encodeToHexString(params[1]),
        addPrefix: method === "personal_ecRecover"
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  getChainId() {
    var _a2;
    return Number.parseInt((_a2 = this._storage.getItem(DEFAULT_CHAIN_ID_KEY)) !== null && _a2 !== void 0 ? _a2 : "1", 10);
  }
  async _eth_requestAccounts() {
    var _a2, _b;
    if (this._addresses.length > 0) {
      (_a2 = this.callback) === null || _a2 === void 0 ? void 0 : _a2.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
      return this._addresses;
    }
    const relay = this.initializeRelay();
    const res = await relay.requestEthereumAccounts();
    if (isErrorResponse(res))
      throw res;
    if (!res.result) {
      throw new Error("accounts received is empty");
    }
    this._setAddresses(res.result);
    (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, "connect", { chainId: hexStringFromNumber(this.getChainId()) });
    return this._addresses;
  }
  async personalSign({ params }) {
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const address = params[1];
    const rawData = params[0];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encodeToHexString(rawData),
        addPrefix: true,
        typedDataJson: null
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_signTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendRawTransaction(params) {
    const signedTransaction = ensureBuffer(params[0]);
    const relay = this.initializeRelay();
    const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async _eth_sendTransaction(params) {
    const tx = this._prepareTransactionParams(params[0] || {});
    const relay = this.initializeRelay();
    const res = await relay.signAndSubmitEthereumTransaction(tx);
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  async signTypedData(request) {
    const { method, params } = request;
    if (!Array.isArray(params))
      throw standardErrors.rpc.invalidParams();
    const encode2 = (input) => {
      const hashFuncMap = {
        eth_signTypedData_v1: import_eth_eip712_util.default.hashForSignTypedDataLegacy,
        eth_signTypedData_v3: import_eth_eip712_util.default.hashForSignTypedData_v3,
        eth_signTypedData_v4: import_eth_eip712_util.default.hashForSignTypedData_v4,
        eth_signTypedData: import_eth_eip712_util.default.hashForSignTypedData_v4
      };
      return hexStringFromBuffer(hashFuncMap[method]({
        data: ensureParsedJSONObject(input)
      }), true);
    };
    const address = params[method === "eth_signTypedData_v1" ? 1 : 0];
    const rawData = params[method === "eth_signTypedData_v1" ? 0 : 1];
    this._ensureKnownAddress(address);
    const relay = this.initializeRelay();
    const res = await relay.sendRequest({
      method: "signEthereumMessage",
      params: {
        address: ensureAddressString(address),
        message: encode2(rawData),
        typedDataJson: JSON.stringify(rawData, null, 2),
        addPrefix: false
      }
    });
    if (isErrorResponse(res))
      throw res;
    return res.result;
  }
  initializeRelay() {
    if (!this._relay) {
      this._relay = new WalletLinkRelay({
        linkAPIUrl: WALLETLINK_URL,
        storage: this._storage,
        metadata: this.metadata,
        accountsCallback: this._setAddresses.bind(this),
        chainCallback: this.updateProviderInfo.bind(this)
      });
    }
    return this._relay;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/sign/util.js
var SIGNER_TYPE_KEY = "SignerType";
var storage = new ScopedLocalStorage("CBWSDK", "SignerConfigurator");
function loadSignerType() {
  return storage.getItem(SIGNER_TYPE_KEY);
}
function storeSignerType(signerType) {
  storage.setItem(SIGNER_TYPE_KEY, signerType);
}
async function fetchSignerType(params) {
  const { communicator, metadata, handshakeRequest, callback } = params;
  listenForWalletLinkSessionRequest(communicator, metadata, callback).catch(() => {
  });
  const request = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: Object.assign(Object.assign({}, params.preference), { handshakeRequest })
  };
  const { data } = await communicator.postRequestAndWaitForResponse(request);
  return data;
}
function createSigner(params) {
  const { signerType, metadata, communicator, callback } = params;
  switch (signerType) {
    case "scw": {
      return new SCWSigner({
        metadata,
        callback,
        communicator
      });
    }
    case "walletlink": {
      return new WalletLinkSigner({
        metadata,
        callback
      });
    }
  }
}
async function listenForWalletLinkSessionRequest(communicator, metadata, callback) {
  await communicator.onMessage(({ event }) => event === "WalletLinkSessionRequest");
  const walletlink = new WalletLinkSigner({
    metadata,
    callback
  });
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { session: walletlink.getSession() }
  });
  await walletlink.handshake();
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: true }
  });
}

// node_modules/@coinbase/wallet-sdk/dist/util/checkCrossOriginOpenerPolicy.js
var COOP_ERROR_MESSAGE = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`;
var createCoopChecker = () => {
  let crossOriginOpenerPolicy;
  return {
    getCrossOriginOpenerPolicy: () => {
      if (crossOriginOpenerPolicy === void 0) {
        return "undefined";
      }
      return crossOriginOpenerPolicy;
    },
    checkCrossOriginOpenerPolicy: async () => {
      if (typeof window === "undefined") {
        crossOriginOpenerPolicy = "non-browser-env";
        return;
      }
      try {
        const url = `${window.location.origin}${window.location.pathname}`;
        const response = await fetch(url, {
          method: "HEAD"
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = response.headers.get("Cross-Origin-Opener-Policy");
        crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : "null";
        if (crossOriginOpenerPolicy === "same-origin") {
          console.error(COOP_ERROR_MESSAGE);
        }
      } catch (error) {
        console.error("Error checking Cross-Origin-Opener-Policy:", error.message);
        crossOriginOpenerPolicy = "error";
      }
    }
  };
};
var { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();

// node_modules/@coinbase/wallet-sdk/dist/util/web.js
var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 540;
var RETRY_BUTTON = {
  isRed: false,
  info: "Retry",
  svgWidth: "10",
  svgHeight: "11",
  path: RETRY_SVG_PATH,
  defaultFillRule: "evenodd",
  defaultClipRule: "evenodd"
};
var POPUP_BLOCKED_MESSAGE = "Popup was blocked. Try again.";
var snackbar = null;
function openPopup(url) {
  const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
  appendAppInfoQueryParams(url);
  function tryOpenPopup() {
    const popupId = `wallet_${crypto.randomUUID()}`;
    const popup2 = window.open(url, popupId, `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
    popup2 === null || popup2 === void 0 ? void 0 : popup2.focus();
    if (!popup2) {
      return null;
    }
    return popup2;
  }
  let popup = tryOpenPopup();
  if (!popup) {
    const sb = initSnackbar();
    return new Promise((resolve, reject) => {
      sb.presentItem({
        autoExpand: true,
        message: POPUP_BLOCKED_MESSAGE,
        menuItems: [
          Object.assign(Object.assign({}, RETRY_BUTTON), { onClick: () => {
            popup = tryOpenPopup();
            if (popup) {
              resolve(popup);
            } else {
              reject(standardErrors.rpc.internal("Popup window was blocked"));
            }
            sb.clear();
          } })
        ]
      });
    });
  }
  return Promise.resolve(popup);
}
function closePopup(popup) {
  if (popup && !popup.closed) {
    popup.close();
  }
}
function appendAppInfoQueryParams(url) {
  const params = {
    sdkName: NAME,
    sdkVersion: VERSION,
    origin: window.location.origin,
    coop: getCrossOriginOpenerPolicy()
  };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value.toString());
  }
}
function initSnackbar() {
  if (!snackbar) {
    const root = document.createElement("div");
    root.className = "-cbwsdk-css-reset";
    document.body.appendChild(root);
    snackbar = new Snackbar();
    snackbar.attach(root);
  }
  return snackbar;
}

// node_modules/@coinbase/wallet-sdk/dist/core/communicator/Communicator.js
var Communicator = class {
  constructor({ url = CB_KEYS_URL, metadata, preference }) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
      this.postMessage(request);
      return await responsePromise;
    };
    this.onMessage = async (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin)
            return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    this.disconnect = () => {
      closePopup(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(standardErrors.provider.userRejectedRequest("Request rejected"));
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    this.waitForPopupLoaded = async () => {
      if (this.popup && !this.popup.closed) {
        this.popup.focus();
        return this.popup;
      }
      this.popup = await openPopup(this.url);
      this.onMessage(({ event }) => event === "PopupUnload").then(this.disconnect).catch(() => {
      });
      return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
        this.postMessage({
          requestId: message.id,
          data: {
            version: VERSION,
            metadata: this.metadata,
            preference: this.preference,
            location: window.location.toString()
          }
        });
      }).then(() => {
        if (!this.popup)
          throw standardErrors.rpc.internal();
        return this.popup;
      });
    };
    this.url = new URL(url);
    this.metadata = metadata;
    this.preference = preference;
  }
};

// node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js
function serializeError(error) {
  const serialized = serialize(getErrorObject(error), {
    shouldIncludeStack: true
  });
  const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  docUrl.searchParams.set("version", VERSION);
  docUrl.searchParams.set("code", serialized.code.toString());
  docUrl.searchParams.set("message", serialized.message);
  return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
function getErrorObject(error) {
  var _a2;
  if (typeof error === "string") {
    return {
      message: error,
      code: standardErrorCodes.rpc.internal
    };
  } else if (isErrorResponse(error)) {
    const message = error.errorMessage;
    const code = (_a2 = error.errorCode) !== null && _a2 !== void 0 ? _a2 : message.match(/(denied|rejected)/i) ? standardErrorCodes.provider.userRejectedRequest : void 0;
    return Object.assign(Object.assign({}, error), {
      message,
      code,
      data: { method: error.method }
    });
  }
  return error;
}

// node_modules/@coinbase/wallet-sdk/dist/core/provider/interface.js
var ProviderEventEmitter = class extends import_index.default {
};

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletProvider.js
var __rest = function(s7, e3) {
  var t3 = {};
  for (var p7 in s7) if (Object.prototype.hasOwnProperty.call(s7, p7) && e3.indexOf(p7) < 0)
    t3[p7] = s7[p7];
  if (s7 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i8 = 0, p7 = Object.getOwnPropertySymbols(s7); i8 < p7.length; i8++) {
      if (e3.indexOf(p7[i8]) < 0 && Object.prototype.propertyIsEnumerable.call(s7, p7[i8]))
        t3[p7[i8]] = s7[p7[i8]];
    }
  return t3;
};
var CoinbaseWalletProvider = class extends ProviderEventEmitter {
  constructor(_a2) {
    var { metadata } = _a2, _b = _a2.preference, { keysUrl } = _b, preference = __rest(_b, ["keysUrl"]);
    super();
    this.signer = null;
    this.isCoinbaseWallet = true;
    this.metadata = metadata;
    this.preference = preference;
    this.communicator = new Communicator({
      url: keysUrl,
      metadata,
      preference
    });
    const signerType = loadSignerType();
    if (signerType) {
      this.signer = this.initSigner(signerType);
    }
  }
  async request(args) {
    try {
      checkErrorForInvalidRequestArgs(args);
      if (!this.signer) {
        switch (args.method) {
          case "eth_requestAccounts": {
            const signerType = await this.requestSignerSelection(args);
            const signer = this.initSigner(signerType);
            await signer.handshake(args);
            this.signer = signer;
            storeSignerType(signerType);
            break;
          }
          case "wallet_sendCalls": {
            const ephemeralSigner = this.initSigner("scw");
            await ephemeralSigner.handshake({ method: "handshake" });
            const result = await ephemeralSigner.request(args);
            await ephemeralSigner.cleanup();
            return result;
          }
          case "wallet_getCallsStatus":
            return fetchRPCRequest(args, CB_WALLET_RPC_URL);
          case "net_version":
            return 1;
          // default value
          case "eth_chainId":
            return hexStringFromNumber(1);
          // default value
          default: {
            throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
          }
        }
      }
      return await this.signer.request(args);
    } catch (error) {
      const { code } = error;
      if (code === standardErrorCodes.provider.unauthorized)
        this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
    return await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    var _a2;
    await ((_a2 = this.signer) === null || _a2 === void 0 ? void 0 : _a2.cleanup());
    this.signer = null;
    ScopedLocalStorage.clearAll();
    this.emit("disconnect", standardErrors.provider.disconnected("User initiated disconnection"));
  }
  requestSignerSelection(handshakeRequest) {
    return fetchSignerType({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata,
      handshakeRequest,
      callback: this.emit.bind(this)
    });
  }
  initSigner(signerType) {
    return createSigner({
      signerType,
      metadata: this.metadata,
      communicator: this.communicator,
      callback: this.emit.bind(this)
    });
  }
};

// node_modules/@coinbase/wallet-sdk/dist/util/validatePreferences.js
function validatePreferences(preference) {
  if (!preference) {
    return;
  }
  if (!["all", "smartWalletOnly", "eoaOnly"].includes(preference.options)) {
    throw new Error(`Invalid options: ${preference.options}`);
  }
  if (preference.attribution) {
    if (preference.attribution.auto !== void 0 && preference.attribution.dataSuffix !== void 0) {
      throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
    }
  }
}

// node_modules/@coinbase/wallet-sdk/dist/createCoinbaseWalletProvider.js
function createCoinbaseWalletProvider(options) {
  var _a2;
  const params = {
    metadata: options.metadata,
    preference: options.preference
  };
  return (_a2 = getCoinbaseInjectedProvider(params)) !== null && _a2 !== void 0 ? _a2 : new CoinbaseWalletProvider(params);
}

// node_modules/@coinbase/wallet-sdk/dist/createCoinbaseWalletSDK.js
var DEFAULT_PREFERENCE = {
  options: "all"
};
function createCoinbaseWalletSDK(params) {
  var _a2;
  const versionStorage = new ScopedLocalStorage("CBWSDK");
  versionStorage.setItem("VERSION", VERSION);
  void checkCrossOriginOpenerPolicy();
  const options = {
    metadata: {
      appName: params.appName || "Dapp",
      appLogoUrl: params.appLogoUrl || "",
      appChainIds: params.appChainIds || []
    },
    preference: Object.assign(DEFAULT_PREFERENCE, (_a2 = params.preference) !== null && _a2 !== void 0 ? _a2 : {})
  };
  validatePreferences(options.preference);
  let provider = null;
  return {
    getProvider: () => {
      if (!provider) {
        provider = createCoinbaseWalletProvider(options);
      }
      return provider;
    }
  };
}

// node_modules/@walletconnect/ethereum-provider/dist/index.js
var import_events6 = __toESM(require_events(), 1);

// node_modules/@walletconnect/utils/dist/index.js
var import_time = __toESM(require_cjs(), 1);
var import_window_getters = __toESM(require_cjs2(), 1);
var import_window_metadata = __toESM(require_cjs3(), 1);

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Errors.js
var BaseError = class _BaseError extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if (options.cause && "details" in options.cause && typeof options.cause.details === "string")
        return options.cause.details;
      if (options.cause?.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0
      ] : []
    ].filter((x6) => typeof x6 === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
  }
  walk(fn3) {
    return walk(this, fn3);
  }
};
function walk(err, fn3) {
  if (fn3?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn3);
  return fn3 ? null : err;
}

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/abstract/utils.js
var _0n = /* @__PURE__ */ BigInt(0);
var _1n = /* @__PURE__ */ BigInt(1);
function isBytes(a8) {
  return a8 instanceof Uint8Array || ArrayBuffer.isView(a8) && a8.constructor.name === "Uint8Array";
}
function abytes(item) {
  if (!isBytes(item))
    throw new Error("Uint8Array expected");
}
function abool(title, value) {
  if (typeof value !== "boolean")
    throw new Error(title + " boolean expected, got " + value);
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n : BigInt("0x" + hex);
}
var hasHexBuiltin = (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
);
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_7, i8) => i8.toString(16).padStart(2, "0"));
function bytesToHex2(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i8 = 0; i8 < bytes.length; i8++) {
    hex += hexes[bytes[i8]];
  }
  return hex;
}
var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai4 = 0, hi3 = 0; ai4 < al; ai4++, hi3 += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi3));
    const n22 = asciiToBase16(hex.charCodeAt(hi3 + 1));
    if (n1 === void 0 || n22 === void 0) {
      const char = hex[hi3] + hex[hi3 + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi3);
    }
    array[ai4] = n1 * 16 + n22;
  }
  return array;
}
function bytesToNumberBE(bytes) {
  return hexToNumber(bytesToHex2(bytes));
}
function bytesToNumberLE(bytes) {
  abytes(bytes);
  return hexToNumber(bytesToHex2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n7, len) {
  return hexToBytes(n7.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n7, len) {
  return numberToBytesBE(n7, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e3) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e3);
    }
  } else if (isBytes(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
function concatBytes2(...arrays) {
  let sum = 0;
  for (let i8 = 0; i8 < arrays.length; i8++) {
    const a8 = arrays[i8];
    abytes(a8);
    sum += a8.length;
  }
  const res = new Uint8Array(sum);
  for (let i8 = 0, pad3 = 0; i8 < arrays.length; i8++) {
    const a8 = arrays[i8];
    res.set(a8, pad3);
    pad3 += a8.length;
  }
  return res;
}
var isPosBig = (n7) => typeof n7 === "bigint" && _0n <= n7;
function inRange(n7, min, max) {
  return isPosBig(n7) && isPosBig(min) && isPosBig(max) && min <= n7 && n7 < max;
}
function aInRange(title, n7, min, max) {
  if (!inRange(n7, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n7);
}
function bitLen(n7) {
  let len;
  for (len = 0; n7 > _0n; n7 >>= _1n, len += 1)
    ;
  return len;
}
var bitMask = (n7) => (_1n << BigInt(n7)) - _1n;
var u8n = (len) => new Uint8Array(len);
var u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v8 = u8n(hashLen);
  let k5 = u8n(hashLen);
  let i8 = 0;
  const reset = () => {
    v8.fill(1);
    k5.fill(0);
    i8 = 0;
  };
  const h6 = (...b9) => hmacFn(k5, v8, ...b9);
  const reseed = (seed = u8n(0)) => {
    k5 = h6(u8fr([0]), seed);
    v8 = h6();
    if (seed.length === 0)
      return;
    k5 = h6(u8fr([1]), seed);
    v8 = h6();
  };
  const gen = () => {
    if (i8++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v8 = h6();
      const sl = v8.slice();
      out.push(sl);
      len += v8.length;
    }
    return concatBytes2(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
var validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error("invalid validator function");
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}
function memoized(fn3) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn3(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size(bytes),
      maxSize: size_
    });
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad(bytes, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return bytes;
  if (bytes.length > size3)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size3,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size3);
  for (let i8 = 0; i8 < size3; i8++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i8 : size3 - i8 - 1] = bytes[padEnd ? i8 : bytes.length - i8 - 1];
  }
  return paddedBytes;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex, size_) {
  if (size2(hex) > size_)
    throw new SizeOverflowError2({
      givenSize: size2(hex),
      maxSize: size_
    });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size2(value) - 1)
    throw new SliceOffsetOutOfBoundsError2({
      offset: start,
      position: "start",
      size: size2(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size2(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError2({
      offset: end,
      position: "end",
      size: size2(value)
    });
  }
}
function pad2(hex_, options = {}) {
  const { dir, size: size3 = 32 } = options;
  if (size3 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size3 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size3,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
}
function trim(value, options = {}) {
  const { dir = "left" } = options;
  let data = value.replace("0x", "");
  let sliceLength = 0;
  for (let i8 = 0; i8 < data.length - 1; i8++) {
    if (data[dir === "left" ? i8 : data.length - i8 - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (data === "0")
    return "0x";
  if (dir === "right" && data.length % 2 === 1)
    return `0x${data}0`;
  return `0x${data}`;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Json.js
var bigIntSuffix = "#__bigint";
function stringify(value, replacer, space) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof replacer === "function")
      return replacer(key, value2);
    if (typeof value2 === "bigint")
      return value2.toString() + bigIntSuffix;
    return value2;
  }, space);
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hex.js
var hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i8) => i8.toString(16).padStart(2, "0"));
function assert(value, options = {}) {
  const { strict = false } = options;
  if (!value)
    throw new InvalidHexTypeError(value);
  if (typeof value !== "string")
    throw new InvalidHexTypeError(value);
  if (strict) {
    if (!/^0x[0-9a-fA-F]*$/.test(value))
      throw new InvalidHexValueError(value);
  }
  if (!value.startsWith("0x"))
    throw new InvalidHexValueError(value);
}
function concat2(...values) {
  return `0x${values.reduce((acc, x6) => acc + x6.replace("0x", ""), "")}`;
}
function from(value) {
  if (value instanceof Uint8Array)
    return fromBytes(value);
  if (Array.isArray(value))
    return fromBytes(new Uint8Array(value));
  return value;
}
function fromBytes(value, options = {}) {
  let string = "";
  for (let i8 = 0; i8 < value.length; i8++)
    string += hexes2[value[i8]];
  const hex = `0x${string}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
function fromNumber(value, options = {}) {
  const { signed, size: size3 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size3) {
    if (signed)
      maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size3,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size3 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size3)
    return padLeft(hex, size3);
  return hex;
}
function padLeft(value, size3) {
  return pad2(value, { dir: "left", size: size3 });
}
function padRight(value, size3) {
  return pad2(value, { dir: "right", size: size3 });
}
function slice(value, start, end, options = {}) {
  const { strict } = options;
  assertStartOffset(value, start);
  const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
  if (strict)
    assertEndOffset(value_, start, end);
  return value_;
}
function size2(value) {
  return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
  return trim(value, { dir: "left" });
}
function validate(value, options = {}) {
  const { strict = false } = options;
  try {
    assert(value, { strict });
    return true;
  } catch {
    return false;
  }
}
var IntegerOutOfRangeError = class extends BaseError {
  constructor({ max, min, signed, size: size3, value }) {
    super(`Number \`${value}\` is not in safe${size3 ? ` ${size3 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var InvalidHexTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexTypeError"
    });
  }
};
var InvalidHexValueError = class extends BaseError {
  constructor(value) {
    super(`Value \`${value}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.InvalidHexValueError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SliceOffsetOutOfBoundsError2 = class extends BaseError {
  constructor({ offset, position, size: size3 }) {
    super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Bytes.js
var encoder = /* @__PURE__ */ new TextEncoder();
function assert2(value) {
  if (value instanceof Uint8Array)
    return;
  if (!value)
    throw new InvalidBytesTypeError(value);
  if (typeof value !== "object")
    throw new InvalidBytesTypeError(value);
  if (!("BYTES_PER_ELEMENT" in value))
    throw new InvalidBytesTypeError(value);
  if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
    throw new InvalidBytesTypeError(value);
}
function from2(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex(value);
  return fromArray(value);
}
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex(value, options = {}) {
  const { size: size3 } = options;
  let hex = value;
  if (size3) {
    assertSize2(value, size3);
    hex = padRight(value, size3);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j8 = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j8++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j8++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j8 - 2]}${hexString[j8 - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function fromString2(value, options = {}) {
  const { size: size3 } = options;
  const bytes = encoder.encode(value);
  if (typeof size3 === "number") {
    assertSize(bytes, size3);
    return padRight2(bytes, size3);
  }
  return bytes;
}
function padRight2(value, size3) {
  return pad(value, { dir: "right", size: size3 });
}
function size(value) {
  return value.length;
}
function validate2(value) {
  try {
    assert2(value);
    return true;
  } catch {
    return false;
  }
}
var InvalidBytesTypeError = class extends BaseError {
  constructor(value) {
    super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
};
var SizeOverflowError = class extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError {
  constructor({ size: size3, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hash.js
function keccak256(value, options = {}) {
  const { as: as2 = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from2(value));
  if (as2 === "Bytes")
    return bytes;
  return fromBytes(bytes);
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/lru.js
var LruMap = class extends Map {
  constructor(size3) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size3;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: /* @__PURE__ */ new LruMap(8192)
};
var checksum = caches.checksum;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/PublicKey.js
function assert3(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x: x6, y: y7 } = publicKey;
  if (compressed === false || typeof x6 === "bigint" && typeof y7 === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x6 === "bigint" && typeof y7 === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function from3(value) {
  const publicKey = (() => {
    if (validate(value))
      return fromHex2(value);
    if (validate2(value))
      return fromBytes2(value);
    const { prefix, x: x6, y: y7 } = value;
    if (typeof x6 === "bigint" && typeof y7 === "bigint")
      return { prefix: prefix ?? 4, x: x6, y: y7 };
    return { prefix, x: x6 };
  })();
  assert3(publicKey);
  return publicKey;
}
function fromBytes2(publicKey) {
  return fromHex2(fromBytes(publicKey));
}
function fromHex2(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError({ publicKey });
  if (publicKey.length === 130) {
    const x7 = BigInt(slice(publicKey, 0, 32));
    const y7 = BigInt(slice(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x7,
      y: y7
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice(publicKey, 0, 1));
    const x7 = BigInt(slice(publicKey, 1, 33));
    const y7 = BigInt(slice(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x7,
      y: y7
    };
  }
  const prefix = Number(slice(publicKey, 0, 1));
  const x6 = BigInt(slice(publicKey, 1, 33));
  return {
    prefix,
    x: x6
  };
}
function toBytes(publicKey, options = {}) {
  return fromHex(toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
  assert3(publicKey);
  const { prefix, x: x6, y: y7 } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat2(
    includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
    fromNumber(x6, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y7 === "bigint" ? fromNumber(y7, { size: 32 }) : "0x"
  );
  return publicKey_;
}
var InvalidError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
};
var InvalidPrefixError = class extends BaseError {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
};
var InvalidCompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
};
var InvalidUncompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
};
var InvalidSerializedSizeError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size2(from(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert4(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert4(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash = keccak256(fromString2(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i8 = 0; i8 < 40; i8 += 2) {
    if (hash[i8 >> 1] >> 4 >= 8 && characters[i8]) {
      characters[i8] = characters[i8].toUpperCase();
    }
    if ((hash[i8 >> 1] & 15) >= 8 && characters[i8 + 1]) {
      characters[i8 + 1] = characters[i8 + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
function from4(address, options = {}) {
  const { checksum: checksumVal = false } = options;
  assert4(address);
  if (checksumVal)
    return checksum2(address);
  return address;
}
function fromPublicKey(publicKey, options = {}) {
  const address = keccak256(`0x${toHex(publicKey).slice(4)}`).substring(26);
  return from4(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
  assert4(addressA, { strict: false });
  assert4(addressB, { strict: false });
  return addressA.toLowerCase() === addressB.toLowerCase();
}
var InvalidAddressError = class extends BaseError {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Solidity.js
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint256 = 2n ** 256n - 1n;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Signature.js
var Signature_exports = {};
__export(Signature_exports, {
  InvalidRError: () => InvalidRError,
  InvalidSError: () => InvalidSError,
  InvalidSerializedSizeError: () => InvalidSerializedSizeError2,
  InvalidVError: () => InvalidVError,
  InvalidYParityError: () => InvalidYParityError,
  MissingPropertiesError: () => MissingPropertiesError,
  assert: () => assert5,
  extract: () => extract,
  from: () => from5,
  fromBytes: () => fromBytes3,
  fromDerBytes: () => fromDerBytes,
  fromDerHex: () => fromDerHex,
  fromHex: () => fromHex3,
  fromLegacy: () => fromLegacy,
  fromRpc: () => fromRpc,
  fromTuple: () => fromTuple,
  toBytes: () => toBytes2,
  toDerBytes: () => toDerBytes,
  toDerHex: () => toDerHex,
  toHex: () => toHex2,
  toLegacy: () => toLegacy,
  toRpc: () => toRpc,
  toTuple: () => toTuple,
  vToYParity: () => vToYParity,
  validate: () => validate3,
  yParityToV: () => yParityToV
});

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n = /* @__PURE__ */ BigInt(2);
var _3n = /* @__PURE__ */ BigInt(3);
var _4n = /* @__PURE__ */ BigInt(4);
var _5n = /* @__PURE__ */ BigInt(5);
var _8n = /* @__PURE__ */ BigInt(8);
function mod(a8, b9) {
  const result = a8 % b9;
  return result >= _0n2 ? result : b9 + result;
}
function pow2(x6, power, modulo) {
  let res = x6;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n2)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n2)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a8 = mod(number, modulo);
  let b9 = modulo;
  let x6 = _0n2, y7 = _1n2, u7 = _1n2, v8 = _0n2;
  while (a8 !== _0n2) {
    const q4 = b9 / a8;
    const r5 = b9 % a8;
    const m6 = x6 - u7 * q4;
    const n7 = y7 - v8 * q4;
    b9 = a8, a8 = r5, x6 = u7, y7 = v8, u7 = m6, v8 = n7;
  }
  const gcd = b9;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x6, modulo);
}
function sqrt3mod4(Fp, n7) {
  const p1div4 = (Fp.ORDER + _1n2) / _4n;
  const root = Fp.pow(n7, p1div4);
  if (!Fp.eql(Fp.sqr(root), n7))
    throw new Error("Cannot find square root");
  return root;
}
function sqrt5mod8(Fp, n7) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n22 = Fp.mul(n7, _2n);
  const v8 = Fp.pow(n22, p5div8);
  const nv = Fp.mul(n7, v8);
  const i8 = Fp.mul(Fp.mul(nv, _2n), v8);
  const root = Fp.mul(nv, Fp.sub(i8, Fp.ONE));
  if (!Fp.eql(Fp.sqr(root), n7))
    throw new Error("Cannot find square root");
  return root;
}
function tonelliShanks(P8) {
  if (P8 < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let Q4 = P8 - _1n2;
  let S8 = 0;
  while (Q4 % _2n === _0n2) {
    Q4 /= _2n;
    S8++;
  }
  let Z4 = _2n;
  const _Fp = Field(P8);
  while (FpLegendre(_Fp, Z4) === 1) {
    if (Z4++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S8 === 1)
    return sqrt3mod4;
  let cc2 = _Fp.pow(Z4, Q4);
  const Q1div2 = (Q4 + _1n2) / _2n;
  return function tonelliSlow(Fp, n7) {
    if (Fp.is0(n7))
      return n7;
    if (FpLegendre(Fp, n7) !== 1)
      throw new Error("Cannot find square root");
    let M7 = S8;
    let c7 = Fp.mul(Fp.ONE, cc2);
    let t3 = Fp.pow(n7, Q4);
    let R8 = Fp.pow(n7, Q1div2);
    while (!Fp.eql(t3, Fp.ONE)) {
      if (Fp.is0(t3))
        return Fp.ZERO;
      let i8 = 1;
      let t_tmp = Fp.sqr(t3);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i8++;
        t_tmp = Fp.sqr(t_tmp);
        if (i8 === M7)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n2 << BigInt(M7 - i8 - 1);
      const b9 = Fp.pow(c7, exponent);
      M7 = i8;
      c7 = Fp.sqr(b9);
      t3 = Fp.mul(t3, c7);
      R8 = Fp.mul(R8, b9);
    }
    return R8;
  };
}
function FpSqrt(P8) {
  if (P8 % _4n === _3n)
    return sqrt3mod4;
  if (P8 % _8n === _5n)
    return sqrt5mod8;
  return tonelliShanks(P8);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(Fp, num, power) {
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return Fp.ONE;
  if (power === _1n2)
    return num;
  let p7 = Fp.ONE;
  let d7 = num;
  while (power > _0n2) {
    if (power & _1n2)
      p7 = Fp.mul(p7, d7);
    d7 = Fp.sqr(d7);
    power >>= _1n2;
  }
  return p7;
}
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num, i8) => {
    if (Fp.is0(num))
      return acc;
    inverted[i8] = acc;
    return Fp.mul(acc, num);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num, i8) => {
    if (Fp.is0(num))
      return acc;
    inverted[i8] = Fp.mul(acc, inverted[i8]);
    return Fp.mul(acc, num);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp, n7) {
  const p1mod2 = (Fp.ORDER - _1n2) / _2n;
  const powered = Fp.pow(n7, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no2 = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no2)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n7, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n7.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE = false, redef = {}) {
  if (ORDER <= _0n2)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f12 = Object.freeze({
    ORDER,
    isLE,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num);
      return _0n2 <= num && num < ORDER;
    },
    is0: (num) => num === _0n2,
    isOdd: (num) => (num & _1n2) === _1n2,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f12, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n7) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f12, n7);
    }),
    toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f12, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a8, b9, c7) => c7 ? b9 : a8
  });
  return Object.freeze(f12);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num, fieldOrder - _1n2) + _1n2;
  return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function validateW(W10, bits) {
  if (!Number.isSafeInteger(W10) || W10 <= 0 || W10 > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W10);
}
function calcWOpts(W10, scalarBits) {
  validateW(W10, scalarBits);
  const windows = Math.ceil(scalarBits / W10) + 1;
  const windowSize = 2 ** (W10 - 1);
  const maxNumber = 2 ** W10;
  const mask = bitMask(W10);
  const shiftBy = BigInt(W10);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n7, window2, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits = Number(n7 & mask);
  let nextN = n7 >> shiftBy;
  if (wbits > windowSize) {
    wbits -= maxNumber;
    nextN += _1n3;
  }
  const offsetStart = window2 * windowSize;
  const offset = offsetStart + Math.abs(wbits) - 1;
  const isZero = wbits === 0;
  const isNeg = wbits < 0;
  const isNegF = window2 % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c7) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p7, i8) => {
    if (!(p7 instanceof c7))
      throw new Error("invalid point at index " + i8);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s7, i8) => {
    if (!field.isValid(s7))
      throw new Error("invalid scalar at index " + i8);
  });
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P8) {
  return pointWindowSizes.get(P8) || 1;
}
function wNAF(c7, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n7, p7 = c7.ZERO) {
      let d7 = elm;
      while (n7 > _0n3) {
        if (n7 & _1n3)
          p7 = p7.add(d7);
        d7 = d7.double();
        n7 >>= _1n3;
      }
      return p7;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W10) {
      const { windows, windowSize } = calcWOpts(W10, bits);
      const points = [];
      let p7 = elm;
      let base = p7;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p7;
        points.push(base);
        for (let i8 = 1; i8 < windowSize; i8++) {
          base = base.add(p7);
          points.push(base);
        }
        p7 = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W10, precomputes, n7) {
      let p7 = c7.ZERO;
      let f12 = c7.BASE;
      const wo3 = calcWOpts(W10, bits);
      for (let window2 = 0; window2 < wo3.windows; window2++) {
        const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n7, window2, wo3);
        n7 = nextN;
        if (isZero) {
          f12 = f12.add(constTimeNegate(isNegF, precomputes[offsetF]));
        } else {
          p7 = p7.add(constTimeNegate(isNeg, precomputes[offset]));
        }
      }
      return { p: p7, f: f12 };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W10, precomputes, n7, acc = c7.ZERO) {
      const wo3 = calcWOpts(W10, bits);
      for (let window2 = 0; window2 < wo3.windows; window2++) {
        if (n7 === _0n3)
          break;
        const { nextN, offset, isZero, isNeg } = calcOffsets(n7, window2, wo3);
        n7 = nextN;
        if (isZero) {
          continue;
        } else {
          const item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      return acc;
    },
    getPrecomputes(W10, P8, transform) {
      let comp = pointPrecomputes.get(P8);
      if (!comp) {
        comp = this.precomputeWindow(P8, W10);
        if (W10 !== 1)
          pointPrecomputes.set(P8, transform(comp));
      }
      return comp;
    },
    wNAFCached(P8, n7, transform) {
      const W10 = getW(P8);
      return this.wNAF(W10, this.getPrecomputes(W10, P8, transform), n7);
    },
    wNAFCachedUnsafe(P8, n7, transform, prev) {
      const W10 = getW(P8);
      if (W10 === 1)
        return this.unsafeLadder(P8, n7, prev);
      return this.wNAFUnsafe(W10, this.getPrecomputes(W10, P8, transform), n7, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P8, W10) {
      validateW(W10, bits);
      pointWindowSizes.set(P8, W10);
      pointPrecomputes.delete(P8);
    }
  };
}
function pippenger(c7, fieldN, points, scalars) {
  validateMSMPoints(points, c7);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c7.ZERO;
  const wbits = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits > 12)
    windowSize = wbits - 3;
  else if (wbits > 4)
    windowSize = wbits - 2;
  else if (wbits > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i8 = lastBits; i8 >= 0; i8 -= windowSize) {
    buckets.fill(zero);
    for (let j8 = 0; j8 < slength; j8++) {
      const scalar = scalars[j8];
      const wbits2 = Number(scalar >> BigInt(i8) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j8]);
    }
    let resI = zero;
    for (let j8 = buckets.length - 1, sumI = zero; j8 > 0; j8--) {
      sumI = sumI.add(buckets[j8]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i8 !== 0)
      for (let j8 = 0; j8 < windowSize; j8++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  if (opts.lowS !== void 0)
    abool("lowS", opts.lowS);
  if (opts.prehash !== void 0)
    abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  const { endo, Fp, a: a8 } = opts;
  if (endo) {
    if (!Fp.eql(a8, Fp.ZERO)) {
      throw new Error("invalid endo: CURVE.a must be 0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    }
  }
  return Object.freeze({ ...opts });
}
var DERErr = class extends Error {
  constructor(m6 = "") {
    super(m6);
  }
};
var DER = {
  // asn.1 DER encoding utils
  Err: DERErr,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E8 } = DER;
      if (tag < 0 || tag > 256)
        throw new E8("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E8("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E8("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t3 = numberToHexUnpadded(tag);
      return t3 + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E8 } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E8("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E8("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E8("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E8("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E8("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E8("tlv.decode(long): zero leftmost byte");
        for (const b9 of lengthBytes)
          length = length << 8 | b9;
        pos += lenLen;
        if (length < 128)
          throw new E8("tlv.decode(long): not minimal encoding");
      }
      const v8 = data.subarray(pos, pos + length);
      if (v8.length !== length)
        throw new E8("tlv.decode: wrong value length");
      return { v: v8, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num) {
      const { Err: E8 } = DER;
      if (num < _0n4)
        throw new E8("integer: negative integers are not allowed");
      let hex = numberToHexUnpadded(num);
      if (Number.parseInt(hex[0], 16) & 8)
        hex = "00" + hex;
      if (hex.length & 1)
        throw new E8("unexpected DER parsing assertion: unpadded hex");
      return hex;
    },
    decode(data) {
      const { Err: E8 } = DER;
      if (data[0] & 128)
        throw new E8("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E8("invalid signature integer: unnecessary leading zero");
      return bytesToNumberBE(data);
    }
  },
  toSig(hex) {
    const { Err: E8, _int: int, _tlv: tlv } = DER;
    const data = ensureBytes("signature", hex);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E8("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E8("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs2 = tlv.encode(2, int.encode(sig.r));
    const ss3 = tlv.encode(2, int.encode(sig.s));
    const seq = rs2 + ss3;
    return tlv.encode(48, seq);
  }
};
function numToSizedHex(num, size3) {
  return bytesToHex2(numberToBytesBE(num, size3));
}
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n2 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp } = CURVE;
  const Fn3 = Field(CURVE.n, CURVE.nBitLength);
  const toBytes3 = CURVE.toBytes || ((_c2, point, _isCompressed) => {
    const a8 = point.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp.toBytes(a8.x), Fp.toBytes(a8.y));
  });
  const fromBytes4 = CURVE.fromBytes || ((bytes) => {
    const tail = bytes.subarray(1);
    const x6 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
    const y7 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
    return { x: x6, y: y7 };
  });
  function weierstrassEquation(x6) {
    const { a: a8, b: b9 } = CURVE;
    const x22 = Fp.sqr(x6);
    const x32 = Fp.mul(x22, x6);
    return Fp.add(Fp.add(x32, Fp.mul(x6, a8)), b9);
  }
  function isValidXY(x6, y7) {
    const left = Fp.sqr(y7);
    const right = weierstrassEquation(x6);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function isWithinCurveOrder(num) {
    return inRange(num, _1n4, CURVE.n);
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N6 } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes(key))
        key = bytesToHex2(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("invalid private key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num;
    try {
      num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
    }
    if (wrapPrivateKey)
      num = mod(num, N6);
    aInRange("private key", num, _1n4, N6);
    return num;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("ProjectivePoint expected");
  }
  const toAffineMemo = memoized((p7, iz) => {
    const { px: x6, py: y7, pz: z8 } = p7;
    if (Fp.eql(z8, Fp.ONE))
      return { x: x6, y: y7 };
    const is0 = p7.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(z8);
    const ax = Fp.mul(x6, iz);
    const ay = Fp.mul(y7, iz);
    const zz = Fp.mul(z8, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  });
  const assertValidMemo = memoized((p7) => {
    if (p7.is0()) {
      if (CURVE.allowInfinityPoint && !Fp.is0(p7.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: x6, y: y7 } = p7.toAffine();
    if (!Fp.isValid(x6) || !Fp.isValid(y7))
      throw new Error("bad point: x or y not FE");
    if (!isValidXY(x6, y7))
      throw new Error("bad point: equation left != right");
    if (!p7.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class Point {
    constructor(px, py, pz) {
      if (px == null || !Fp.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp.isValid(py) || Fp.is0(py))
        throw new Error("y required");
      if (pz == null || !Fp.isValid(pz))
        throw new Error("z required");
      this.px = px;
      this.py = py;
      this.pz = pz;
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p7) {
      const { x: x6, y: y7 } = p7 || {};
      if (!p7 || !Fp.isValid(x6) || !Fp.isValid(y7))
        throw new Error("invalid affine point");
      if (p7 instanceof Point)
        throw new Error("projective point not allowed");
      const is0 = (i8) => Fp.eql(i8, Fp.ZERO);
      if (is0(x6) && is0(y7))
        return Point.ZERO;
      return new Point(x6, y7, Fp.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = FpInvertBatch(Fp, points.map((p7) => p7.pz));
      return points.map((p7, i8) => p7.toAffine(toInv[i8])).map(Point.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P8 = Point.fromAffine(fromBytes4(ensureBytes("pointHex", hex)));
      P8.assertValidity();
      return P8;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point, Fn3, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y: y7 } = this.toAffine();
      if (Fp.isOdd)
        return !Fp.isOdd(y7);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X22, py: Y22, pz: Z22 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z22), Fp.mul(X22, Z1));
      const U22 = Fp.eql(Fp.mul(Y1, Z22), Fp.mul(Y22, Z1));
      return U1 && U22;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point(this.px, Fp.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: a8, b: b9 } = CURVE;
      const b32 = Fp.mul(b9, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z32 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t22 = Fp.mul(Z1, Z1);
      let t3 = Fp.mul(X1, Y1);
      t3 = Fp.add(t3, t3);
      Z32 = Fp.mul(X1, Z1);
      Z32 = Fp.add(Z32, Z32);
      X32 = Fp.mul(a8, Z32);
      Y32 = Fp.mul(b32, t22);
      Y32 = Fp.add(X32, Y32);
      X32 = Fp.sub(t1, Y32);
      Y32 = Fp.add(t1, Y32);
      Y32 = Fp.mul(X32, Y32);
      X32 = Fp.mul(t3, X32);
      Z32 = Fp.mul(b32, Z32);
      t22 = Fp.mul(a8, t22);
      t3 = Fp.sub(t0, t22);
      t3 = Fp.mul(a8, t3);
      t3 = Fp.add(t3, Z32);
      Z32 = Fp.add(t0, t0);
      t0 = Fp.add(Z32, t0);
      t0 = Fp.add(t0, t22);
      t0 = Fp.mul(t0, t3);
      Y32 = Fp.add(Y32, t0);
      t22 = Fp.mul(Y1, Z1);
      t22 = Fp.add(t22, t22);
      t0 = Fp.mul(t22, t3);
      X32 = Fp.sub(X32, t0);
      Z32 = Fp.mul(t22, t1);
      Z32 = Fp.add(Z32, Z32);
      Z32 = Fp.add(Z32, Z32);
      return new Point(X32, Y32, Z32);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X22, py: Y22, pz: Z22 } = other;
      let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z32 = Fp.ZERO;
      const a8 = CURVE.a;
      const b32 = Fp.mul(CURVE.b, _3n2);
      let t0 = Fp.mul(X1, X22);
      let t1 = Fp.mul(Y1, Y22);
      let t22 = Fp.mul(Z1, Z22);
      let t3 = Fp.add(X1, Y1);
      let t4 = Fp.add(X22, Y22);
      t3 = Fp.mul(t3, t4);
      t4 = Fp.add(t0, t1);
      t3 = Fp.sub(t3, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X22, Z22);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t22);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X32 = Fp.add(Y22, Z22);
      t5 = Fp.mul(t5, X32);
      X32 = Fp.add(t1, t22);
      t5 = Fp.sub(t5, X32);
      Z32 = Fp.mul(a8, t4);
      X32 = Fp.mul(b32, t22);
      Z32 = Fp.add(X32, Z32);
      X32 = Fp.sub(t1, Z32);
      Z32 = Fp.add(t1, Z32);
      Y32 = Fp.mul(X32, Z32);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t22 = Fp.mul(a8, t22);
      t4 = Fp.mul(b32, t4);
      t1 = Fp.add(t1, t22);
      t22 = Fp.sub(t0, t22);
      t22 = Fp.mul(a8, t22);
      t4 = Fp.add(t4, t22);
      t0 = Fp.mul(t1, t4);
      Y32 = Fp.add(Y32, t0);
      t0 = Fp.mul(t5, t4);
      X32 = Fp.mul(t3, X32);
      X32 = Fp.sub(X32, t0);
      t0 = Fp.mul(t3, t1);
      Z32 = Fp.mul(t5, Z32);
      Z32 = Fp.add(Z32, t0);
      return new Point(X32, Y32, Z32);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    wNAF(n7) {
      return wnaf.wNAFCached(this, n7, Point.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc2) {
      const { endo: endo2, n: N6 } = CURVE;
      aInRange("scalar", sc2, _0n4, N6);
      const I5 = Point.ZERO;
      if (sc2 === _0n4)
        return I5;
      if (this.is0() || sc2 === _1n4)
        return this;
      if (!endo2 || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc2, Point.normalizeZ);
      let { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(sc2);
      let k1p = I5;
      let k2p = I5;
      let d7 = this;
      while (k1 > _0n4 || k22 > _0n4) {
        if (k1 & _1n4)
          k1p = k1p.add(d7);
        if (k22 & _1n4)
          k2p = k2p.add(d7);
        d7 = d7.double();
        k1 >>= _1n4;
        k22 >>= _1n4;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2, n: N6 } = CURVE;
      aInRange("scalar", scalar, _1n4, N6);
      let point, fake;
      if (endo2) {
        const { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(scalar);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k22);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p: p7, f: f12 } = this.wNAF(scalar);
        point = p7;
        fake = f12;
      }
      return Point.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q4, a8, b9) {
      const G7 = Point.BASE;
      const mul = (P8, a9) => a9 === _0n4 || a9 === _1n4 || !P8.equals(G7) ? P8.multiplyUnsafe(a9) : P8.multiply(a9);
      const sum = mul(this, a8).add(mul(Q4, b9));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(Point, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      abool("isCompressed", isCompressed);
      this.assertValidity();
      return toBytes3(Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      abool("isCompressed", isCompressed);
      return bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
  const { endo, nBitLength } = CURVE;
  const wnaf = wNAF(Point, endo ? Math.ceil(nBitLength / 2) : nBitLength);
  return {
    CURVE,
    ProjectivePoint: Point,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
  const compressedLen = Fp.BYTES + 1;
  const uncompressedLen = 2 * Fp.BYTES + 1;
  function modN(a8) {
    return mod(a8, CURVE_ORDER);
  }
  function invN(a8) {
    return invert(a8, CURVE_ORDER);
  }
  const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c2, point, isCompressed) {
      const a8 = point.toAffine();
      const x6 = Fp.toBytes(a8.x);
      const cat = concatBytes2;
      abool("isCompressed", isCompressed);
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x6);
      } else {
        return cat(Uint8Array.from([4]), x6, Fp.toBytes(a8.y));
      }
    },
    fromBytes(bytes) {
      const len = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x6 = bytesToNumberBE(tail);
        if (!inRange(x6, _1n4, Fp.ORDER))
          throw new Error("Point is not on curve");
        const y22 = weierstrassEquation(x6);
        let y7;
        try {
          y7 = Fp.sqrt(y22);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y7 & _1n4) === _1n4;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y7 = Fp.neg(y7);
        return { x: x6, y: y7 };
      } else if (len === uncompressedLen && head === 4) {
        const x6 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y7 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x: x6, y: y7 };
      } else {
        const cl = compressedLen;
        const ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n4;
    return number > HALF;
  }
  function normalizeS(s7) {
    return isBiggerThanHalfOrder(s7) ? modN(-s7) : s7;
  }
  const slcNum = (b9, from6, to3) => bytesToNumberBE(b9.slice(from6, to3));
  class Signature {
    constructor(r5, s7, recovery) {
      aInRange("r", r5, _1n4, CURVE_ORDER);
      aInRange("s", s7, _1n4, CURVE_ORDER);
      this.r = r5;
      this.s = s7;
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l5 = nByteLength;
      hex = ensureBytes("compactSignature", hex, l5 * 2);
      return new Signature(slcNum(hex, 0, l5), slcNum(hex, l5, 2 * l5));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r: r5, s: s7 } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r5, s7);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r: r5, s: s7, recovery: rec } = this;
      const h6 = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r5 + CURVE.n : r5;
      if (radj >= Fp.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R8 = Point.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
      const ir2 = invN(radj);
      const u1 = modN(-h6 * ir2);
      const u22 = modN(s7 * ir2);
      const Q4 = Point.BASE.multiplyAndAddUnsafe(R8, u1, u22);
      if (!Q4)
        throw new Error("point at infinify");
      Q4.assertValidity();
      return Q4;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      const l5 = nByteLength;
      return numToSizedHex(this.r, l5) + numToSizedHex(this.s, l5);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey2(privateKey, isCompressed = true) {
    return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point)
      return true;
    const arr = ensureBytes("key", item);
    const len = arr.length;
    const fpl = Fp.BYTES;
    const compLen = fpl + 1;
    const uncompLen = 2 * fpl + 1;
    if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
      return void 0;
    } else {
      return len === compLen || len === uncompLen;
    }
  }
  function getSharedSecret2(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicB) === false)
      throw new Error("second arg must be public key");
    const b9 = Point.fromHex(publicB);
    return b9.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - nBitLength;
    return delta > 0 ? num >> BigInt(delta) : num;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(nBitLength);
  function int2octets(num) {
    aInRange("num < 2^" + nBitLength, num, _0n4, ORDER_MASK);
    return numberToBytesBE(num, nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k5) => k5 in opts))
      throw new Error("sign() legacy options not supported");
    const { hash, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    validateSigVerOpts(opts);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d7 = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d7), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e3 = ent === true ? randomBytes2(Fp.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e3));
    }
    const seed = concatBytes2(...seedArgs);
    const m6 = h1int;
    function k2sig(kBytes) {
      const k5 = bits2int(kBytes);
      if (!isWithinCurveOrder(k5))
        return;
      const ik = invN(k5);
      const q4 = Point.BASE.multiply(k5).toAffine();
      const r5 = modN(q4.x);
      if (r5 === _0n4)
        return;
      const s7 = modN(ik * modN(m6 + r5 * d7));
      if (s7 === _0n4)
        return;
      let recovery = (q4.x === r5 ? 0 : 2) | Number(q4.y & _1n4);
      let normS = s7;
      if (lowS && isBiggerThanHalfOrder(s7)) {
        normS = normalizeS(s7);
        recovery ^= 1;
      }
      return new Signature(r5, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign2(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C9 = CURVE;
    const drbg = createHmacDrbg(C9.hash.outputLen, C9.nByteLength, C9.hmac);
    return drbg(seed, k2sig);
  }
  Point.BASE._setWindowSize(8);
  function verify2(signature, msgHash, publicKey, opts = defaultVerOpts) {
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    const { lowS, prehash, format } = opts;
    validateSigVerOpts(opts);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format !== void 0 && format !== "compact" && format !== "der")
      throw new Error("format must be compact or der");
    const isHex = typeof sg === "string" || isBytes(sg);
    const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig = void 0;
    let P8;
    try {
      if (isObj)
        _sig = new Signature(sg.r, sg.s);
      if (isHex) {
        try {
          if (format !== "compact")
            _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!_sig && format !== "der")
          _sig = Signature.fromCompact(sg);
      }
      P8 = Point.fromHex(publicKey);
    } catch (error) {
      return false;
    }
    if (!_sig)
      return false;
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r: r5, s: s7 } = _sig;
    const h6 = bits2int_modN(msgHash);
    const is3 = invN(s7);
    const u1 = modN(h6 * is3);
    const u22 = modN(r5 * is3);
    const R8 = Point.BASE.multiplyAndAddUnsafe(P8, u1, u22)?.toAffine();
    if (!R8)
      return false;
    const v8 = modN(R8.x);
    return v8 === r5;
  }
  return {
    CURVE,
    getPublicKey: getPublicKey2,
    getSharedSecret: getSharedSecret2,
    sign: sign2,
    verify: verify2,
    ProjectivePoint: Point,
    Signature,
    utils
  };
}

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash) {
  return {
    hash,
    hmac: (key, ...msgs) => hmac(hash, key, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create2 = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
  return { ...create2(defHash), create: create2 };
}

// node_modules/@walletconnect/utils/node_modules/ox/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var _0n5 = BigInt(0);
var _1n5 = BigInt(1);
var _2n3 = BigInt(2);
var divNearest = (a8, b9) => (a8 + b9 / _2n3) / b9;
function sqrtMod(y7) {
  const P8 = secp256k1P;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b22 = y7 * y7 * y7 % P8;
  const b32 = b22 * b22 * y7 % P8;
  const b62 = pow2(b32, _3n3, P8) * b32 % P8;
  const b9 = pow2(b62, _3n3, P8) * b32 % P8;
  const b11 = pow2(b9, _2n3, P8) * b22 % P8;
  const b222 = pow2(b11, _11n, P8) * b11 % P8;
  const b44 = pow2(b222, _22n, P8) * b222 % P8;
  const b88 = pow2(b44, _44n, P8) * b44 % P8;
  const b176 = pow2(b88, _88n, P8) * b88 % P8;
  const b220 = pow2(b176, _44n, P8) * b44 % P8;
  const b223 = pow2(b220, _3n3, P8) * b32 % P8;
  const t1 = pow2(b223, _23n, P8) * b222 % P8;
  const t22 = pow2(t1, _6n, P8) * b22 % P8;
  const root = pow2(t22, _2n3, P8);
  if (!Fpk1.eql(Fpk1.sqr(root), y7))
    throw new Error("Cannot find square root");
  return root;
}
var Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
var secp256k1 = createCurve({
  a: _0n5,
  b: BigInt(7),
  Fp: Fpk1,
  n: secp256k1N,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: true,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k5) => {
      const n7 = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n5 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a22 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b22 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b22 * k5, n7);
      const c22 = divNearest(-b1 * k5, n7);
      let k1 = mod(k5 - c1 * a1 - c22 * a22, n7);
      let k22 = mod(-c1 * b1 - c22 * b22, n7);
      const k1neg = k1 > POW_2_128;
      const k2neg = k22 > POW_2_128;
      if (k1neg)
        k1 = n7 - k1;
      if (k2neg)
        k22 = n7 - k22;
      if (k1 > POW_2_128 || k22 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k5);
      }
      return { k1neg, k1, k2neg, k2: k22 };
    }
  }
}, sha256);

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Signature.js
function assert5(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError({ signature });
  if (signature.r < 0n || signature.r > maxUint256)
    throw new InvalidRError({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256)
    throw new InvalidSError({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes3(signature) {
  return fromHex3(fromBytes(signature));
}
function fromHex3(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError2({ signature });
  const r5 = BigInt(slice(signature, 0, 32));
  const s7 = BigInt(slice(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r: r5,
      s: s7
    };
  return {
    r: r5,
    s: s7,
    yParity
  };
}
function extract(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from5(value);
}
function from5(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex3(signature);
    if (signature instanceof Uint8Array)
      return fromBytes3(signature);
    if (typeof signature.r === "string")
      return fromRpc(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert5(signature_);
  return signature_;
}
function fromDerBytes(signature) {
  return fromDerHex(fromBytes(signature));
}
function fromDerHex(signature) {
  const { r: r5, s: s7 } = secp256k1.Signature.fromDER(from(signature).slice(2));
  return { r: r5, s: s7 };
}
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity(signature.v)
  };
}
function fromRpc(signature) {
  const yParity = (() => {
    const v8 = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v8 === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity(v8);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
function fromTuple(tuple) {
  const [yParity, r5, s7] = tuple;
  return from5({
    r: r5 === "0x" ? 0n : BigInt(r5),
    s: s7 === "0x" ? 0n : BigInt(s7),
    yParity: yParity === "0x" ? 0 : Number(yParity)
  });
}
function toBytes2(signature) {
  return fromHex(toHex2(signature));
}
function toHex2(signature) {
  assert5(signature);
  const r5 = signature.r;
  const s7 = signature.s;
  const signature_ = concat2(
    fromNumber(r5, { size: 32 }),
    fromNumber(s7, { size: 32 }),
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === "number" ? fromNumber(yParityToV(signature.yParity), { size: 1 }) : "0x"
  );
  return signature_;
}
function toDerBytes(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return sig.toDERRawBytes();
}
function toDerHex(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return `0x${sig.toDERHex()}`;
}
function toLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    v: yParityToV(signature.yParity)
  };
}
function toRpc(signature) {
  const { r: r5, s: s7, yParity } = signature;
  return {
    r: fromNumber(r5, { size: 32 }),
    s: fromNumber(s7, { size: 32 }),
    yParity: yParity === 0 ? "0x0" : "0x1"
  };
}
function toTuple(signature) {
  const { r: r5, s: s7, yParity } = signature;
  return [
    yParity ? "0x01" : "0x",
    r5 === 0n ? "0x" : trimLeft(fromNumber(r5)),
    s7 === 0n ? "0x" : trimLeft(fromNumber(s7))
  ];
}
function validate3(signature, options = {}) {
  try {
    assert5(signature, options);
    return true;
  } catch {
    return false;
  }
}
function vToYParity(v8) {
  if (v8 === 0 || v8 === 27)
    return 0;
  if (v8 === 1 || v8 === 28)
    return 1;
  if (v8 >= 35)
    return v8 % 2 === 0 ? 1 : 0;
  throw new InvalidVError({ value: v8 });
}
function yParityToV(yParity) {
  if (yParity === 0)
    return 27;
  if (yParity === 1)
    return 28;
  throw new InvalidYParityError({ value: yParity });
}
var InvalidSerializedSizeError2 = class extends BaseError {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size2(from(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
var MissingPropertiesError = class extends BaseError {
  constructor({ signature }) {
    super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
var InvalidRError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
var InvalidSError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
var InvalidYParityError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
var InvalidVError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Secp256k1.js
var Secp256k1_exports = {};
__export(Secp256k1_exports, {
  createKeyPair: () => createKeyPair,
  getPublicKey: () => getPublicKey,
  getSharedSecret: () => getSharedSecret,
  noble: () => noble,
  randomPrivateKey: () => randomPrivateKey,
  recoverAddress: () => recoverAddress,
  recoverPublicKey: () => recoverPublicKey,
  sign: () => sign,
  verify: () => verify
});

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/entropy.js
var extraEntropy = false;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Secp256k1.js
var noble = secp256k1;
function createKeyPair(options = {}) {
  const { as: as2 = "Hex" } = options;
  const privateKey = randomPrivateKey({ as: as2 });
  const publicKey = getPublicKey({ privateKey });
  return {
    privateKey,
    publicKey
  };
}
function getPublicKey(options) {
  const { privateKey } = options;
  const point = secp256k1.ProjectivePoint.fromPrivateKey(from(privateKey).slice(2));
  return from3(point);
}
function getSharedSecret(options) {
  const { as: as2 = "Hex", privateKey, publicKey } = options;
  const point = secp256k1.ProjectivePoint.fromHex(toHex(publicKey).slice(2));
  const sharedPoint = point.multiply(secp256k1.utils.normPrivateKeyToScalar(from(privateKey).slice(2)));
  const sharedSecret = sharedPoint.toRawBytes(true);
  if (as2 === "Hex")
    return fromBytes(sharedSecret);
  return sharedSecret;
}
function randomPrivateKey(options = {}) {
  const { as: as2 = "Hex" } = options;
  const bytes = secp256k1.utils.randomPrivateKey();
  if (as2 === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverAddress(options) {
  return fromPublicKey(recoverPublicKey(options));
}
function recoverPublicKey(options) {
  const { payload, signature } = options;
  const { r: r5, s: s7, yParity } = signature;
  const signature_ = new secp256k1.Signature(BigInt(r5), BigInt(s7)).addRecoveryBit(yParity);
  const point = signature_.recoverPublicKey(from(payload).substring(2));
  return from3(point);
}
function sign(options) {
  const { extraEntropy: extraEntropy2 = extraEntropy, hash, payload, privateKey } = options;
  const { r: r5, s: s7, recovery } = secp256k1.sign(from2(payload), from2(privateKey), {
    extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from(extraEntropy2).slice(2),
    lowS: true,
    ...hash ? { prehash: true } : {}
  });
  return {
    r: r5,
    s: s7,
    yParity: recovery
  };
}
function verify(options) {
  const { address, hash, payload, publicKey, signature } = options;
  if (address)
    return isEqual(address, recoverAddress({ payload, signature }));
  return secp256k1.verify(signature, from2(payload), toBytes(publicKey), ...hash ? [{ prehash: true, lowS: true }] : []);
}

// node_modules/@walletconnect/utils/dist/index.js
var import_blakejs = __toESM(require_blakejs(), 1);

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());
var b5 = { level: "info" };
var l2 = "custom_context";
var i5 = 1e3 * 1024;
var C4 = Object.defineProperty;
var B4 = (r5, e3, t3) => e3 in r5 ? C4(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var s5 = (r5, e3, t3) => B4(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var S2 = class {
  constructor(e3) {
    s5(this, "nodeValue"), s5(this, "sizeInBytes"), s5(this, "next"), this.nodeValue = e3, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var v3 = class {
  constructor(e3) {
    s5(this, "lengthInNodes"), s5(this, "sizeInBytes"), s5(this, "head"), s5(this, "tail"), s5(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e3, this.sizeInBytes = 0;
  }
  append(e3) {
    const t3 = new S2(e3);
    if (t3.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e3} with size ${t3.size}`);
    for (; this.size + t3.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t3), this.tail = t3) : (this.head = t3, this.tail = t3), this.lengthInNodes++, this.sizeInBytes += t3.size;
  }
  shift() {
    if (!this.head) return;
    const e3 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e3.size;
  }
  toArray() {
    const e3 = [];
    let t3 = this.head;
    for (; t3 !== null; ) e3.push(t3.value), t3 = t3.next;
    return e3;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e3 = this.head;
    return { next: () => {
      if (!e3) return { done: true, value: null };
      const t3 = e3.value;
      return e3 = e3.next, { done: false, value: t3 };
    } };
  }
};
var _4 = Object.defineProperty;
var x3 = (r5, e3, t3) => e3 in r5 ? _4(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var a5 = (r5, e3, t3) => x3(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var L = class {
  constructor(e3, t3 = i5) {
    a5(this, "logs"), a5(this, "level"), a5(this, "levelValue"), a5(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e3 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t3, this.logs = new v3(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e3, t3) {
    t3 === import_pino.levels.values.error ? console.error(e3) : t3 === import_pino.levels.values.warn ? console.warn(e3) : t3 === import_pino.levels.values.debug ? console.debug(e3) : t3 === import_pino.levels.values.trace ? console.trace(e3) : console.log(e3);
  }
  appendToLogs(e3) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e3 }));
    const t3 = typeof e3 == "string" ? JSON.parse(e3).level : e3.level;
    t3 >= this.levelValue && this.forwardToConsole(e3, t3);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new v3(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e3) {
    const t3 = this.getLogArray();
    return t3.push(safeJsonStringify({ extraMetadata: e3 })), new Blob(t3, { type: "application/json" });
  }
};
var z3 = Object.defineProperty;
var T = (r5, e3, t3) => e3 in r5 ? z3(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var k2 = (r5, e3, t3) => T(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var E4 = class {
  constructor(e3, t3 = i5) {
    k2(this, "baseChunkLogger"), this.baseChunkLogger = new L(e3, t3);
  }
  write(e3) {
    this.baseChunkLogger.appendToLogs(e3);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e3) {
    return this.baseChunkLogger.logsToBlob(e3);
  }
  downloadLogsBlobInBrowser(e3) {
    const t3 = URL.createObjectURL(this.logsToBlob(e3)), o7 = document.createElement("a");
    o7.href = t3, o7.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o7), o7.click(), document.body.removeChild(o7), URL.revokeObjectURL(t3);
  }
};
var A4 = Object.defineProperty;
var $3 = (r5, e3, t3) => e3 in r5 ? A4(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var N3 = (r5, e3, t3) => $3(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var j4 = class {
  constructor(e3, t3 = i5) {
    N3(this, "baseChunkLogger"), this.baseChunkLogger = new L(e3, t3);
  }
  write(e3) {
    this.baseChunkLogger.appendToLogs(e3);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e3) {
    return this.baseChunkLogger.logsToBlob(e3);
  }
};
var P3 = Object.defineProperty;
var V = Object.defineProperties;
var G2 = Object.getOwnPropertyDescriptors;
var p3 = Object.getOwnPropertySymbols;
var M2 = Object.prototype.hasOwnProperty;
var U2 = Object.prototype.propertyIsEnumerable;
var f6 = (r5, e3, t3) => e3 in r5 ? P3(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var g = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) M2.call(e3, t3) && f6(r5, t3, e3[t3]);
  if (p3) for (var t3 of p3(e3)) U2.call(e3, t3) && f6(r5, t3, e3[t3]);
  return r5;
};
var h4 = (r5, e3) => V(r5, G2(e3));
function D5(r5) {
  return h4(g({}, r5), { level: r5?.level || b5.level });
}
function y4(r5, e3, t3 = l2) {
  return r5[t3] = e3, r5;
}
function w2(r5, e3 = l2) {
  return r5[e3] || "";
}
function m2(r5, e3, t3 = l2) {
  const o7 = w2(r5, t3);
  return o7.trim() ? `${o7}/${e3}` : e3;
}
function X2(r5, e3, t3 = l2) {
  const o7 = m2(r5, e3, t3), u7 = r5.child({ context: o7 });
  return y4(u7, o7, t3);
}
function I2(r5) {
  var e3, t3;
  const o7 = new E4((e3 = r5.opts) == null ? void 0 : e3.level, r5.maxSizeInBytes);
  return { logger: (0, import_pino.default)(h4(g({}, r5.opts), { level: "trace", browser: h4(g({}, (t3 = r5.opts) == null ? void 0 : t3.browser), { write: (u7) => o7.write(u7) }) })), chunkLoggerController: o7 };
}
function O2(r5) {
  var e3;
  const t3 = new j4((e3 = r5.opts) == null ? void 0 : e3.level, r5.maxSizeInBytes);
  return { logger: (0, import_pino.default)(h4(g({}, r5.opts), { level: "trace" }), t3), chunkLoggerController: t3 };
}
function Y(r5) {
  return typeof r5.loggerOverride < "u" && typeof r5.loggerOverride != "string" ? { logger: r5.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? I2(r5) : O2(r5);
}

// node_modules/@walletconnect/utils/dist/index.js
var Ae = ":";
function Je(t3) {
  const [e3, n7] = t3.split(Ae);
  return { namespace: e3, reference: n7 };
}
function Js(t3, e3 = []) {
  const n7 = [];
  return Object.keys(t3).forEach((r5) => {
    if (e3.length && !e3.includes(r5)) return;
    const o7 = t3[r5];
    n7.push(...o7.accounts);
  }), n7;
}
function Ie(t3, e3) {
  return t3.includes(":") ? [t3] : e3.chains || [];
}
var ei = Object.defineProperty;
var ni = Object.defineProperties;
var ri = Object.getOwnPropertyDescriptors;
var ar = Object.getOwnPropertySymbols;
var oi = Object.prototype.hasOwnProperty;
var si = Object.prototype.propertyIsEnumerable;
var en = (t3, e3, n7) => e3 in t3 ? ei(t3, e3, { enumerable: true, configurable: true, writable: true, value: n7 }) : t3[e3] = n7;
var ur = (t3, e3) => {
  for (var n7 in e3 || (e3 = {})) oi.call(e3, n7) && en(t3, n7, e3[n7]);
  if (ar) for (var n7 of ar(e3)) si.call(e3, n7) && en(t3, n7, e3[n7]);
  return t3;
};
var ii = (t3, e3) => ni(t3, ri(e3));
var lr = (t3, e3, n7) => en(t3, typeof e3 != "symbol" ? e3 + "" : e3, n7);
var dr = "ReactNative";
var et = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var pr = "js";
function rn() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function At() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === dr;
}
function ai() {
  return At() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function ui() {
  return At() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Wt() {
  return !rn() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function Vt() {
  return At() ? et.reactNative : rn() ? et.node : Wt() ? et.browser : et.unknown;
}
function li() {
  var t3;
  try {
    return At() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t3 = global.Application) == null ? void 0 : t3.applicationId : void 0;
  } catch {
    return;
  }
}
function gr(t3, e3) {
  const n7 = new URLSearchParams(t3);
  return Object.entries(e3).sort(([r5], [o7]) => r5.localeCompare(o7)).forEach(([r5, o7]) => {
    o7 != null && n7.set(r5, String(o7));
  }), n7.toString();
}
function di(t3) {
  var e3, n7;
  const r5 = br();
  try {
    return t3 != null && t3.url && r5.url && new URL(t3.url).host !== new URL(r5.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t3.url} differs from the actual page url:${r5.url}. This is probably unintended and can lead to issues.`), t3.url = r5.url), (e3 = t3?.icons) != null && e3.length && t3.icons.length > 0 && (t3.icons = t3.icons.filter((o7) => o7 !== "")), ii(ur(ur({}, r5), t3), { url: t3?.url || r5.url, name: t3?.name || r5.name, description: t3?.description || r5.description, icons: (n7 = t3?.icons) != null && n7.length && t3.icons.length > 0 ? t3.icons : r5.icons });
  } catch (o7) {
    return console.warn("Error populating app metadata", o7), t3 || r5;
  }
}
function br() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function yr() {
  if (Vt() === et.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n7, Version: r5 } = global.Platform;
    return [n7, r5].join("-");
  }
  const t3 = detect();
  if (t3 === null) return "unknown";
  const e3 = t3.os ? t3.os.replace(" ", "").toLowerCase() : "unknown";
  return t3.type === "browser" ? [e3, t3.name, t3.version].join("-") : [e3, t3.version].join("-");
}
function mr() {
  var t3;
  const e3 = Vt();
  return e3 === et.browser ? [e3, ((t3 = (0, import_window_getters.getLocation)()) == null ? void 0 : t3.host) || "unknown"].join(":") : e3;
}
function wr(t3, e3, n7) {
  const r5 = yr(), o7 = mr();
  return [[t3, e3].join("-"), [pr, n7].join("-"), r5, o7].join("/");
}
function pi({ protocol: t3, version: e3, relayUrl: n7, sdkVersion: r5, auth: o7, projectId: s7, useOnCloseEvent: i8, bundleId: c7, packageName: f12 }) {
  const u7 = n7.split("?"), a8 = wr(t3, e3, r5), l5 = { auth: o7, ua: a8, projectId: s7, useOnCloseEvent: i8 || void 0, packageName: f12 || void 0, bundleId: c7 || void 0 }, d7 = gr(u7[1] || "", l5);
  return u7[0] + "?" + d7;
}
function It(t3, e3) {
  return t3.filter((n7) => e3.includes(n7)).length === t3.length;
}
function mi(t3) {
  return Object.fromEntries(t3.entries());
}
function wi(t3) {
  return new Map(Object.entries(t3));
}
function Bi(t3 = import_time.FIVE_MINUTES, e3) {
  const n7 = (0, import_time.toMiliseconds)(t3 || import_time.FIVE_MINUTES);
  let r5, o7, s7, i8;
  return { resolve: (c7) => {
    s7 && r5 && (clearTimeout(s7), r5(c7), i8 = Promise.resolve(c7));
  }, reject: (c7) => {
    s7 && o7 && (clearTimeout(s7), o7(c7));
  }, done: () => new Promise((c7, f12) => {
    if (i8) return c7(i8);
    s7 = setTimeout(() => {
      const u7 = new Error(e3);
      i8 = Promise.reject(u7), f12(u7);
    }, n7), r5 = c7, o7 = f12;
  }) };
}
function Ai(t3, e3, n7) {
  return new Promise(async (r5, o7) => {
    const s7 = setTimeout(() => o7(new Error(n7)), e3);
    try {
      const i8 = await t3;
      r5(i8);
    } catch (i8) {
      o7(i8);
    }
    clearTimeout(s7);
  });
}
function on(t3, e3) {
  if (typeof e3 == "string" && e3.startsWith(`${t3}:`)) return e3;
  if (t3.toLowerCase() === "topic") {
    if (typeof e3 != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e3}`;
  } else if (t3.toLowerCase() === "id") {
    if (typeof e3 != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e3}`;
  }
  throw new Error(`Unknown expirer target type: ${t3}`);
}
function Ii(t3) {
  return on("topic", t3);
}
function Si(t3) {
  return on("id", t3);
}
function Oi(t3) {
  const [e3, n7] = t3.split(":"), r5 = { id: void 0, topic: void 0 };
  if (e3 === "topic" && typeof n7 == "string") r5.topic = n7;
  else if (e3 === "id" && Number.isInteger(Number(n7))) r5.id = Number(n7);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e3}:${n7}`);
  return r5;
}
function Ni(t3, e3) {
  return (0, import_time.fromMiliseconds)((e3 || Date.now()) + (0, import_time.toMiliseconds)(t3));
}
function Ui(t3) {
  return Date.now() >= (0, import_time.toMiliseconds)(t3);
}
function _i(t3, e3) {
  return `${t3}${e3 ? `:${e3}` : ""}`;
}
function ut(t3 = [], e3 = []) {
  return [.../* @__PURE__ */ new Set([...t3, ...e3])];
}
async function Ri({ id: t3, topic: e3, wcDeepLink: n7 }) {
  var r5;
  try {
    if (!n7) return;
    const o7 = typeof n7 == "string" ? JSON.parse(n7) : n7, s7 = o7?.href;
    if (typeof s7 != "string") return;
    const i8 = Br(s7, t3, e3), c7 = Vt();
    if (c7 === et.browser) {
      if (!((r5 = (0, import_window_getters.getDocument)()) != null && r5.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Ar(i8);
    } else c7 === et.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i8);
  } catch (o7) {
    console.error(o7);
  }
}
function Br(t3, e3, n7) {
  const r5 = `requestId=${e3}&sessionTopic=${n7}`;
  t3.endsWith("/") && (t3 = t3.slice(0, -1));
  let o7 = `${t3}`;
  if (t3.startsWith("https://t.me")) {
    const s7 = t3.includes("?") ? "&startapp=" : "?startapp=";
    o7 = `${o7}${s7}${Or(r5, true)}`;
  } else o7 = `${o7}/wc?${r5}`;
  return o7;
}
function Ar(t3) {
  let e3 = "_self";
  Sr() ? e3 = "_top" : (Ir() || t3.startsWith("https://") || t3.startsWith("http://")) && (e3 = "_blank"), window.open(t3, e3, "noreferrer noopener");
}
async function $i(t3, e3) {
  let n7 = "";
  try {
    if (Wt() && (n7 = localStorage.getItem(e3), n7)) return n7;
    n7 = await t3.getItem(e3);
  } catch (r5) {
    console.error(r5);
  }
  return n7;
}
function Ti(t3, e3) {
  if (!t3.includes(e3)) return null;
  const n7 = t3.split(/([&,?,=])/), r5 = n7.indexOf(e3);
  return n7[r5 + 2];
}
function Ci() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t3) => {
    const e3 = Math.random() * 16 | 0;
    return (t3 === "x" ? e3 : e3 & 3 | 8).toString(16);
  });
}
function ji() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function Ir() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Sr() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function Or(t3, e3 = false) {
  const n7 = Buffer.from(t3).toString("base64");
  return e3 ? n7.replace(/[=]/g, "") : n7;
}
function cn(t3) {
  return Buffer.from(t3, "base64").toString("utf-8");
}
function Li(t3) {
  return new Promise((e3) => setTimeout(e3, t3));
}
var ki = class {
  constructor({ limit: e3 }) {
    lr(this, "limit"), lr(this, "set"), this.limit = e3, this.set = /* @__PURE__ */ new Set();
  }
  add(e3) {
    if (!this.set.has(e3)) {
      if (this.set.size >= this.limit) {
        const n7 = this.set.values().next().value;
        n7 && this.set.delete(n7);
      }
      this.set.add(e3);
    }
  }
  has(e3) {
    return this.set.has(e3);
  }
};
var Oe = BigInt(2 ** 32 - 1);
var Nr = BigInt(32);
function Ur(t3, e3 = false) {
  return e3 ? { h: Number(t3 & Oe), l: Number(t3 >> Nr & Oe) } : { h: Number(t3 >> Nr & Oe) | 0, l: Number(t3 & Oe) | 0 };
}
function _r(t3, e3 = false) {
  const n7 = t3.length;
  let r5 = new Uint32Array(n7), o7 = new Uint32Array(n7);
  for (let s7 = 0; s7 < n7; s7++) {
    const { h: i8, l: c7 } = Ur(t3[s7], e3);
    [r5[s7], o7[s7]] = [i8, c7];
  }
  return [r5, o7];
}
var Rr = (t3, e3, n7) => t3 >>> n7;
var $r = (t3, e3, n7) => t3 << 32 - n7 | e3 >>> n7;
var St = (t3, e3, n7) => t3 >>> n7 | e3 << 32 - n7;
var Ot = (t3, e3, n7) => t3 << 32 - n7 | e3 >>> n7;
var de = (t3, e3, n7) => t3 << 64 - n7 | e3 >>> n7 - 32;
var he = (t3, e3, n7) => t3 >>> n7 - 32 | e3 << 64 - n7;
var Pi = (t3, e3) => e3;
var Hi = (t3, e3) => t3;
var Di = (t3, e3, n7) => t3 << n7 | e3 >>> 32 - n7;
var Vi = (t3, e3, n7) => e3 << n7 | t3 >>> 32 - n7;
var Mi = (t3, e3, n7) => e3 << n7 - 32 | t3 >>> 64 - n7;
var Ki = (t3, e3, n7) => t3 << n7 - 32 | e3 >>> 64 - n7;
function dt(t3, e3, n7, r5) {
  const o7 = (e3 >>> 0) + (r5 >>> 0);
  return { h: t3 + n7 + (o7 / 2 ** 32 | 0) | 0, l: o7 | 0 };
}
var fn = (t3, e3, n7) => (t3 >>> 0) + (e3 >>> 0) + (n7 >>> 0);
var an = (t3, e3, n7, r5) => e3 + n7 + r5 + (t3 / 2 ** 32 | 0) | 0;
var qi = (t3, e3, n7, r5) => (t3 >>> 0) + (e3 >>> 0) + (n7 >>> 0) + (r5 >>> 0);
var Fi = (t3, e3, n7, r5, o7) => e3 + n7 + r5 + o7 + (t3 / 2 ** 32 | 0) | 0;
var Zi = (t3, e3, n7, r5, o7) => (t3 >>> 0) + (e3 >>> 0) + (n7 >>> 0) + (r5 >>> 0) + (o7 >>> 0);
var Gi = (t3, e3, n7, r5, o7, s7) => e3 + n7 + r5 + o7 + s7 + (t3 / 2 ** 32 | 0) | 0;
var Xt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ne(t3) {
  return t3 instanceof Uint8Array || ArrayBuffer.isView(t3) && t3.constructor.name === "Uint8Array";
}
function mt(t3) {
  if (!Number.isSafeInteger(t3) || t3 < 0) throw new Error("positive integer expected, got " + t3);
}
function ht(t3, ...e3) {
  if (!Ne(t3)) throw new Error("Uint8Array expected");
  if (e3.length > 0 && !e3.includes(t3.length)) throw new Error("Uint8Array expected of length " + e3 + ", got length=" + t3.length);
}
function Ue(t3) {
  if (typeof t3 != "function" || typeof t3.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  mt(t3.outputLen), mt(t3.blockLen);
}
function Nt(t3, e3 = true) {
  if (t3.destroyed) throw new Error("Hash instance has been destroyed");
  if (e3 && t3.finished) throw new Error("Hash#digest() has already been called");
}
function un(t3, e3) {
  ht(t3);
  const n7 = e3.outputLen;
  if (t3.length < n7) throw new Error("digestInto() expects output buffer of length at least " + n7);
}
function pe(t3) {
  return new Uint32Array(t3.buffer, t3.byteOffset, Math.floor(t3.byteLength / 4));
}
function lt(...t3) {
  for (let e3 = 0; e3 < t3.length; e3++) t3[e3].fill(0);
}
function ln(t3) {
  return new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
}
function bt(t3, e3) {
  return t3 << 32 - e3 | t3 >>> e3;
}
var Tr = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Cr(t3) {
  return t3 << 24 & 4278190080 | t3 << 8 & 16711680 | t3 >>> 8 & 65280 | t3 >>> 24 & 255;
}
var wt = Tr ? (t3) => t3 : (t3) => Cr(t3);
function zi(t3) {
  for (let e3 = 0; e3 < t3.length; e3++) t3[e3] = Cr(t3[e3]);
  return t3;
}
var Ut = Tr ? (t3) => t3 : zi;
var jr = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function";
var Yi = Array.from({ length: 256 }, (t3, e3) => e3.toString(16).padStart(2, "0"));
function Jt(t3) {
  if (ht(t3), jr) return t3.toHex();
  let e3 = "";
  for (let n7 = 0; n7 < t3.length; n7++) e3 += Yi[t3[n7]];
  return e3;
}
var vt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Lr(t3) {
  if (t3 >= vt._0 && t3 <= vt._9) return t3 - vt._0;
  if (t3 >= vt.A && t3 <= vt.F) return t3 - (vt.A - 10);
  if (t3 >= vt.a && t3 <= vt.f) return t3 - (vt.a - 10);
}
function _e(t3) {
  if (typeof t3 != "string") throw new Error("hex string expected, got " + typeof t3);
  if (jr) return Uint8Array.fromHex(t3);
  const e3 = t3.length, n7 = e3 / 2;
  if (e3 % 2) throw new Error("hex string expected, got unpadded hex of length " + e3);
  const r5 = new Uint8Array(n7);
  for (let o7 = 0, s7 = 0; o7 < n7; o7++, s7 += 2) {
    const i8 = Lr(t3.charCodeAt(s7)), c7 = Lr(t3.charCodeAt(s7 + 1));
    if (i8 === void 0 || c7 === void 0) {
      const f12 = t3[s7] + t3[s7 + 1];
      throw new Error('hex string expected, got non-hex character "' + f12 + '" at index ' + s7);
    }
    r5[o7] = i8 * 16 + c7;
  }
  return r5;
}
function kr(t3) {
  if (typeof t3 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t3));
}
function pt(t3) {
  return typeof t3 == "string" && (t3 = kr(t3)), ht(t3), t3;
}
function _t(...t3) {
  let e3 = 0;
  for (let r5 = 0; r5 < t3.length; r5++) {
    const o7 = t3[r5];
    ht(o7), e3 += o7.length;
  }
  const n7 = new Uint8Array(e3);
  for (let r5 = 0, o7 = 0; r5 < t3.length; r5++) {
    const s7 = t3[r5];
    n7.set(s7, o7), o7 += s7.length;
  }
  return n7;
}
var Re = class {
};
function ge(t3) {
  const e3 = (r5) => t3().update(pt(r5)).digest(), n7 = t3();
  return e3.outputLen = n7.outputLen, e3.blockLen = n7.blockLen, e3.create = () => t3(), e3;
}
function Wi(t3) {
  const e3 = (r5, o7) => t3(o7).update(pt(r5)).digest(), n7 = t3({});
  return e3.outputLen = n7.outputLen, e3.blockLen = n7.blockLen, e3.create = (r5) => t3(r5), e3;
}
function Mt(t3 = 32) {
  if (Xt && typeof Xt.getRandomValues == "function") return Xt.getRandomValues(new Uint8Array(t3));
  if (Xt && typeof Xt.randomBytes == "function") return Uint8Array.from(Xt.randomBytes(t3));
  throw new Error("crypto.getRandomValues must be defined");
}
var Xi = BigInt(0);
var be = BigInt(1);
var Ji = BigInt(2);
var Qi = BigInt(7);
var tc = BigInt(256);
var ec = BigInt(113);
var Pr = [];
var Hr = [];
var Dr = [];
for (let t3 = 0, e3 = be, n7 = 1, r5 = 0; t3 < 24; t3++) {
  [n7, r5] = [r5, (2 * n7 + 3 * r5) % 5], Pr.push(2 * (5 * r5 + n7)), Hr.push((t3 + 1) * (t3 + 2) / 2 % 64);
  let o7 = Xi;
  for (let s7 = 0; s7 < 7; s7++) e3 = (e3 << be ^ (e3 >> Qi) * ec) % tc, e3 & Ji && (o7 ^= be << (be << BigInt(s7)) - be);
  Dr.push(o7);
}
var Vr = _r(Dr, true);
var nc = Vr[0];
var rc = Vr[1];
var Mr = (t3, e3, n7) => n7 > 32 ? Mi(t3, e3, n7) : Di(t3, e3, n7);
var Kr = (t3, e3, n7) => n7 > 32 ? Ki(t3, e3, n7) : Vi(t3, e3, n7);
function oc(t3, e3 = 24) {
  const n7 = new Uint32Array(10);
  for (let r5 = 24 - e3; r5 < 24; r5++) {
    for (let i8 = 0; i8 < 10; i8++) n7[i8] = t3[i8] ^ t3[i8 + 10] ^ t3[i8 + 20] ^ t3[i8 + 30] ^ t3[i8 + 40];
    for (let i8 = 0; i8 < 10; i8 += 2) {
      const c7 = (i8 + 8) % 10, f12 = (i8 + 2) % 10, u7 = n7[f12], a8 = n7[f12 + 1], l5 = Mr(u7, a8, 1) ^ n7[c7], d7 = Kr(u7, a8, 1) ^ n7[c7 + 1];
      for (let h6 = 0; h6 < 50; h6 += 10) t3[i8 + h6] ^= l5, t3[i8 + h6 + 1] ^= d7;
    }
    let o7 = t3[2], s7 = t3[3];
    for (let i8 = 0; i8 < 24; i8++) {
      const c7 = Hr[i8], f12 = Mr(o7, s7, c7), u7 = Kr(o7, s7, c7), a8 = Pr[i8];
      o7 = t3[a8], s7 = t3[a8 + 1], t3[a8] = f12, t3[a8 + 1] = u7;
    }
    for (let i8 = 0; i8 < 50; i8 += 10) {
      for (let c7 = 0; c7 < 10; c7++) n7[c7] = t3[i8 + c7];
      for (let c7 = 0; c7 < 10; c7++) t3[i8 + c7] ^= ~n7[(c7 + 2) % 10] & n7[(c7 + 4) % 10];
    }
    t3[0] ^= nc[r5], t3[1] ^= rc[r5];
  }
  lt(n7);
}
var Jn = class _Jn extends Re {
  constructor(e3, n7, r5, o7 = false, s7 = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e3, this.suffix = n7, this.outputLen = r5, this.enableXOF = o7, this.rounds = s7, mt(r5), !(0 < e3 && e3 < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = pe(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ut(this.state32), oc(this.state32, this.rounds), Ut(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e3) {
    Nt(this), e3 = pt(e3), ht(e3);
    const { blockLen: n7, state: r5 } = this, o7 = e3.length;
    for (let s7 = 0; s7 < o7; ) {
      const i8 = Math.min(n7 - this.pos, o7 - s7);
      for (let c7 = 0; c7 < i8; c7++) r5[this.pos++] ^= e3[s7++];
      this.pos === n7 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e3, suffix: n7, pos: r5, blockLen: o7 } = this;
    e3[r5] ^= n7, (n7 & 128) !== 0 && r5 === o7 - 1 && this.keccak(), e3[o7 - 1] ^= 128, this.keccak();
  }
  writeInto(e3) {
    Nt(this, false), ht(e3), this.finish();
    const n7 = this.state, { blockLen: r5 } = this;
    for (let o7 = 0, s7 = e3.length; o7 < s7; ) {
      this.posOut >= r5 && this.keccak();
      const i8 = Math.min(r5 - this.posOut, s7 - o7);
      e3.set(n7.subarray(this.posOut, this.posOut + i8), o7), this.posOut += i8, o7 += i8;
    }
    return e3;
  }
  xofInto(e3) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e3);
  }
  xof(e3) {
    return mt(e3), this.xofInto(new Uint8Array(e3));
  }
  digestInto(e3) {
    if (un(e3, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e3), this.destroy(), e3;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, lt(this.state);
  }
  _cloneInto(e3) {
    const { blockLen: n7, suffix: r5, outputLen: o7, rounds: s7, enableXOF: i8 } = this;
    return e3 || (e3 = new _Jn(n7, r5, o7, i8, s7)), e3.state32.set(this.state32), e3.pos = this.pos, e3.posOut = this.posOut, e3.finished = this.finished, e3.rounds = s7, e3.suffix = r5, e3.outputLen = o7, e3.enableXOF = i8, e3.destroyed = this.destroyed, e3;
  }
};
var sc = (t3, e3, n7) => ge(() => new Jn(e3, t3, n7));
var ic = sc(1, 136, 256 / 8);
function cc(t3, e3, n7, r5) {
  if (typeof t3.setBigUint64 == "function") return t3.setBigUint64(e3, n7, r5);
  const o7 = BigInt(32), s7 = BigInt(4294967295), i8 = Number(n7 >> o7 & s7), c7 = Number(n7 & s7), f12 = r5 ? 4 : 0, u7 = r5 ? 0 : 4;
  t3.setUint32(e3 + f12, i8, r5), t3.setUint32(e3 + u7, c7, r5);
}
function fc(t3, e3, n7) {
  return t3 & e3 ^ ~t3 & n7;
}
function ac(t3, e3, n7) {
  return t3 & e3 ^ t3 & n7 ^ e3 & n7;
}
var qr = class extends Re {
  constructor(e3, n7, r5, o7) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e3, this.outputLen = n7, this.padOffset = r5, this.isLE = o7, this.buffer = new Uint8Array(e3), this.view = ln(this.buffer);
  }
  update(e3) {
    Nt(this), e3 = pt(e3), ht(e3);
    const { view: n7, buffer: r5, blockLen: o7 } = this, s7 = e3.length;
    for (let i8 = 0; i8 < s7; ) {
      const c7 = Math.min(o7 - this.pos, s7 - i8);
      if (c7 === o7) {
        const f12 = ln(e3);
        for (; o7 <= s7 - i8; i8 += o7) this.process(f12, i8);
        continue;
      }
      r5.set(e3.subarray(i8, i8 + c7), this.pos), this.pos += c7, i8 += c7, this.pos === o7 && (this.process(n7, 0), this.pos = 0);
    }
    return this.length += e3.length, this.roundClean(), this;
  }
  digestInto(e3) {
    Nt(this), un(e3, this), this.finished = true;
    const { buffer: n7, view: r5, blockLen: o7, isLE: s7 } = this;
    let { pos: i8 } = this;
    n7[i8++] = 128, lt(this.buffer.subarray(i8)), this.padOffset > o7 - i8 && (this.process(r5, 0), i8 = 0);
    for (let l5 = i8; l5 < o7; l5++) n7[l5] = 0;
    cc(r5, o7 - 8, BigInt(this.length * 8), s7), this.process(r5, 0);
    const c7 = ln(e3), f12 = this.outputLen;
    if (f12 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u7 = f12 / 4, a8 = this.get();
    if (u7 > a8.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l5 = 0; l5 < u7; l5++) c7.setUint32(4 * l5, a8[l5], s7);
  }
  digest() {
    const { buffer: e3, outputLen: n7 } = this;
    this.digestInto(e3);
    const r5 = e3.slice(0, n7);
    return this.destroy(), r5;
  }
  _cloneInto(e3) {
    e3 || (e3 = new this.constructor()), e3.set(...this.get());
    const { blockLen: n7, buffer: r5, length: o7, finished: s7, destroyed: i8, pos: c7 } = this;
    return e3.destroyed = i8, e3.finished = s7, e3.length = o7, e3.pos = c7, o7 % n7 && e3.buffer.set(r5), e3;
  }
  clone() {
    return this._cloneInto();
  }
};
var Rt = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var X3 = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
var J2 = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]);
var uc = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var $t = new Uint32Array(64);
var lc = class extends qr {
  constructor(e3 = 32) {
    super(64, e3, 8, false), this.A = Rt[0] | 0, this.B = Rt[1] | 0, this.C = Rt[2] | 0, this.D = Rt[3] | 0, this.E = Rt[4] | 0, this.F = Rt[5] | 0, this.G = Rt[6] | 0, this.H = Rt[7] | 0;
  }
  get() {
    const { A: e3, B: n7, C: r5, D: o7, E: s7, F: i8, G: c7, H: f12 } = this;
    return [e3, n7, r5, o7, s7, i8, c7, f12];
  }
  set(e3, n7, r5, o7, s7, i8, c7, f12) {
    this.A = e3 | 0, this.B = n7 | 0, this.C = r5 | 0, this.D = o7 | 0, this.E = s7 | 0, this.F = i8 | 0, this.G = c7 | 0, this.H = f12 | 0;
  }
  process(e3, n7) {
    for (let l5 = 0; l5 < 16; l5++, n7 += 4) $t[l5] = e3.getUint32(n7, false);
    for (let l5 = 16; l5 < 64; l5++) {
      const d7 = $t[l5 - 15], h6 = $t[l5 - 2], y7 = bt(d7, 7) ^ bt(d7, 18) ^ d7 >>> 3, m6 = bt(h6, 17) ^ bt(h6, 19) ^ h6 >>> 10;
      $t[l5] = m6 + $t[l5 - 7] + y7 + $t[l5 - 16] | 0;
    }
    let { A: r5, B: o7, C: s7, D: i8, E: c7, F: f12, G: u7, H: a8 } = this;
    for (let l5 = 0; l5 < 64; l5++) {
      const d7 = bt(c7, 6) ^ bt(c7, 11) ^ bt(c7, 25), h6 = a8 + d7 + fc(c7, f12, u7) + uc[l5] + $t[l5] | 0, m6 = (bt(r5, 2) ^ bt(r5, 13) ^ bt(r5, 22)) + ac(r5, o7, s7) | 0;
      a8 = u7, u7 = f12, f12 = c7, c7 = i8 + h6 | 0, i8 = s7, s7 = o7, o7 = r5, r5 = h6 + m6 | 0;
    }
    r5 = r5 + this.A | 0, o7 = o7 + this.B | 0, s7 = s7 + this.C | 0, i8 = i8 + this.D | 0, c7 = c7 + this.E | 0, f12 = f12 + this.F | 0, u7 = u7 + this.G | 0, a8 = a8 + this.H | 0, this.set(r5, o7, s7, i8, c7, f12, u7, a8);
  }
  roundClean() {
    lt($t);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), lt(this.buffer);
  }
};
var Fr = _r(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t3) => BigInt(t3)));
var dc = Fr[0];
var hc = Fr[1];
var Tt = new Uint32Array(80);
var Ct = new Uint32Array(80);
var dn = class extends qr {
  constructor(e3 = 64) {
    super(128, e3, 16, false), this.Ah = J2[0] | 0, this.Al = J2[1] | 0, this.Bh = J2[2] | 0, this.Bl = J2[3] | 0, this.Ch = J2[4] | 0, this.Cl = J2[5] | 0, this.Dh = J2[6] | 0, this.Dl = J2[7] | 0, this.Eh = J2[8] | 0, this.El = J2[9] | 0, this.Fh = J2[10] | 0, this.Fl = J2[11] | 0, this.Gh = J2[12] | 0, this.Gl = J2[13] | 0, this.Hh = J2[14] | 0, this.Hl = J2[15] | 0;
  }
  get() {
    const { Ah: e3, Al: n7, Bh: r5, Bl: o7, Ch: s7, Cl: i8, Dh: c7, Dl: f12, Eh: u7, El: a8, Fh: l5, Fl: d7, Gh: h6, Gl: y7, Hh: m6, Hl: v8 } = this;
    return [e3, n7, r5, o7, s7, i8, c7, f12, u7, a8, l5, d7, h6, y7, m6, v8];
  }
  set(e3, n7, r5, o7, s7, i8, c7, f12, u7, a8, l5, d7, h6, y7, m6, v8) {
    this.Ah = e3 | 0, this.Al = n7 | 0, this.Bh = r5 | 0, this.Bl = o7 | 0, this.Ch = s7 | 0, this.Cl = i8 | 0, this.Dh = c7 | 0, this.Dl = f12 | 0, this.Eh = u7 | 0, this.El = a8 | 0, this.Fh = l5 | 0, this.Fl = d7 | 0, this.Gh = h6 | 0, this.Gl = y7 | 0, this.Hh = m6 | 0, this.Hl = v8 | 0;
  }
  process(e3, n7) {
    for (let R8 = 0; R8 < 16; R8++, n7 += 4) Tt[R8] = e3.getUint32(n7), Ct[R8] = e3.getUint32(n7 += 4);
    for (let R8 = 16; R8 < 80; R8++) {
      const Z4 = Tt[R8 - 15] | 0, H4 = Ct[R8 - 15] | 0, j8 = St(Z4, H4, 1) ^ St(Z4, H4, 8) ^ Rr(Z4, H4, 7), L5 = Ot(Z4, H4, 1) ^ Ot(Z4, H4, 8) ^ $r(Z4, H4, 7), k5 = Tt[R8 - 2] | 0, O5 = Ct[R8 - 2] | 0, T5 = St(k5, O5, 19) ^ de(k5, O5, 61) ^ Rr(k5, O5, 6), C9 = Ot(k5, O5, 19) ^ he(k5, O5, 61) ^ $r(k5, O5, 6), _7 = qi(L5, C9, Ct[R8 - 7], Ct[R8 - 16]), p7 = Fi(_7, j8, T5, Tt[R8 - 7], Tt[R8 - 16]);
      Tt[R8] = p7 | 0, Ct[R8] = _7 | 0;
    }
    let { Ah: r5, Al: o7, Bh: s7, Bl: i8, Ch: c7, Cl: f12, Dh: u7, Dl: a8, Eh: l5, El: d7, Fh: h6, Fl: y7, Gh: m6, Gl: v8, Hh: U6, Hl: F6 } = this;
    for (let R8 = 0; R8 < 80; R8++) {
      const Z4 = St(l5, d7, 14) ^ St(l5, d7, 18) ^ de(l5, d7, 41), H4 = Ot(l5, d7, 14) ^ Ot(l5, d7, 18) ^ he(l5, d7, 41), j8 = l5 & h6 ^ ~l5 & m6, L5 = d7 & y7 ^ ~d7 & v8, k5 = Zi(F6, H4, L5, hc[R8], Ct[R8]), O5 = Gi(k5, U6, Z4, j8, dc[R8], Tt[R8]), T5 = k5 | 0, C9 = St(r5, o7, 28) ^ de(r5, o7, 34) ^ de(r5, o7, 39), _7 = Ot(r5, o7, 28) ^ he(r5, o7, 34) ^ he(r5, o7, 39), p7 = r5 & s7 ^ r5 & c7 ^ s7 & c7, b9 = o7 & i8 ^ o7 & f12 ^ i8 & f12;
      U6 = m6 | 0, F6 = v8 | 0, m6 = h6 | 0, v8 = y7 | 0, h6 = l5 | 0, y7 = d7 | 0, { h: l5, l: d7 } = dt(u7 | 0, a8 | 0, O5 | 0, T5 | 0), u7 = c7 | 0, a8 = f12 | 0, c7 = s7 | 0, f12 = i8 | 0, s7 = r5 | 0, i8 = o7 | 0;
      const g3 = fn(T5, _7, b9);
      r5 = an(g3, O5, C9, p7), o7 = g3 | 0;
    }
    ({ h: r5, l: o7 } = dt(this.Ah | 0, this.Al | 0, r5 | 0, o7 | 0)), { h: s7, l: i8 } = dt(this.Bh | 0, this.Bl | 0, s7 | 0, i8 | 0), { h: c7, l: f12 } = dt(this.Ch | 0, this.Cl | 0, c7 | 0, f12 | 0), { h: u7, l: a8 } = dt(this.Dh | 0, this.Dl | 0, u7 | 0, a8 | 0), { h: l5, l: d7 } = dt(this.Eh | 0, this.El | 0, l5 | 0, d7 | 0), { h: h6, l: y7 } = dt(this.Fh | 0, this.Fl | 0, h6 | 0, y7 | 0), { h: m6, l: v8 } = dt(this.Gh | 0, this.Gl | 0, m6 | 0, v8 | 0), { h: U6, l: F6 } = dt(this.Hh | 0, this.Hl | 0, U6 | 0, F6 | 0), this.set(r5, o7, s7, i8, c7, f12, u7, a8, l5, d7, h6, y7, m6, v8, U6, F6);
  }
  roundClean() {
    lt(Tt, Ct);
  }
  destroy() {
    lt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var pc = class extends dn {
  constructor() {
    super(48), this.Ah = X3[0] | 0, this.Al = X3[1] | 0, this.Bh = X3[2] | 0, this.Bl = X3[3] | 0, this.Ch = X3[4] | 0, this.Cl = X3[5] | 0, this.Dh = X3[6] | 0, this.Dl = X3[7] | 0, this.Eh = X3[8] | 0, this.El = X3[9] | 0, this.Fh = X3[10] | 0, this.Fl = X3[11] | 0, this.Gh = X3[12] | 0, this.Gl = X3[13] | 0, this.Hh = X3[14] | 0, this.Hl = X3[15] | 0;
  }
};
var Q = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
var gc = class extends dn {
  constructor() {
    super(32), this.Ah = Q[0] | 0, this.Al = Q[1] | 0, this.Bh = Q[2] | 0, this.Bl = Q[3] | 0, this.Ch = Q[4] | 0, this.Cl = Q[5] | 0, this.Dh = Q[6] | 0, this.Dl = Q[7] | 0, this.Eh = Q[8] | 0, this.El = Q[9] | 0, this.Fh = Q[10] | 0, this.Fl = Q[11] | 0, this.Gh = Q[12] | 0, this.Gl = Q[13] | 0, this.Hh = Q[14] | 0, this.Hl = Q[15] | 0;
  }
};
var $e = ge(() => new lc());
var bc = ge(() => new dn());
var yc = ge(() => new pc());
var mc = ge(() => new gc());
var wc = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]);
var z4 = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]);
var S3 = new Uint32Array(32);
function jt(t3, e3, n7, r5, o7, s7) {
  const i8 = o7[s7], c7 = o7[s7 + 1];
  let f12 = S3[2 * t3], u7 = S3[2 * t3 + 1], a8 = S3[2 * e3], l5 = S3[2 * e3 + 1], d7 = S3[2 * n7], h6 = S3[2 * n7 + 1], y7 = S3[2 * r5], m6 = S3[2 * r5 + 1], v8 = fn(f12, a8, i8);
  u7 = an(v8, u7, l5, c7), f12 = v8 | 0, { Dh: m6, Dl: y7 } = { Dh: m6 ^ u7, Dl: y7 ^ f12 }, { Dh: m6, Dl: y7 } = { Dh: Pi(m6, y7), Dl: Hi(m6) }, { h: h6, l: d7 } = dt(h6, d7, m6, y7), { Bh: l5, Bl: a8 } = { Bh: l5 ^ h6, Bl: a8 ^ d7 }, { Bh: l5, Bl: a8 } = { Bh: St(l5, a8, 24), Bl: Ot(l5, a8, 24) }, S3[2 * t3] = f12, S3[2 * t3 + 1] = u7, S3[2 * e3] = a8, S3[2 * e3 + 1] = l5, S3[2 * n7] = d7, S3[2 * n7 + 1] = h6, S3[2 * r5] = y7, S3[2 * r5 + 1] = m6;
}
function Lt(t3, e3, n7, r5, o7, s7) {
  const i8 = o7[s7], c7 = o7[s7 + 1];
  let f12 = S3[2 * t3], u7 = S3[2 * t3 + 1], a8 = S3[2 * e3], l5 = S3[2 * e3 + 1], d7 = S3[2 * n7], h6 = S3[2 * n7 + 1], y7 = S3[2 * r5], m6 = S3[2 * r5 + 1], v8 = fn(f12, a8, i8);
  u7 = an(v8, u7, l5, c7), f12 = v8 | 0, { Dh: m6, Dl: y7 } = { Dh: m6 ^ u7, Dl: y7 ^ f12 }, { Dh: m6, Dl: y7 } = { Dh: St(m6, y7, 16), Dl: Ot(m6, y7, 16) }, { h: h6, l: d7 } = dt(h6, d7, m6, y7), { Bh: l5, Bl: a8 } = { Bh: l5 ^ h6, Bl: a8 ^ d7 }, { Bh: l5, Bl: a8 } = { Bh: de(l5, a8, 63), Bl: he(l5, a8, 63) }, S3[2 * t3] = f12, S3[2 * t3 + 1] = u7, S3[2 * e3] = a8, S3[2 * e3 + 1] = l5, S3[2 * n7] = d7, S3[2 * n7 + 1] = h6, S3[2 * r5] = y7, S3[2 * r5 + 1] = m6;
}
function vc(t3, e3 = {}, n7, r5, o7) {
  if (mt(n7), t3 < 0 || t3 > n7) throw new Error("outputLen bigger than keyLen");
  const { key: s7, salt: i8, personalization: c7 } = e3;
  if (s7 !== void 0 && (s7.length < 1 || s7.length > n7)) throw new Error("key length must be undefined or 1.." + n7);
  if (i8 !== void 0 && i8.length !== r5) throw new Error("salt must be undefined or " + r5);
  if (c7 !== void 0 && c7.length !== o7) throw new Error("personalization must be undefined or " + o7);
}
var xc = class extends Re {
  constructor(e3, n7) {
    super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, mt(e3), mt(n7), this.blockLen = e3, this.outputLen = n7, this.buffer = new Uint8Array(e3), this.buffer32 = pe(this.buffer);
  }
  update(e3) {
    Nt(this), e3 = pt(e3), ht(e3);
    const { blockLen: n7, buffer: r5, buffer32: o7 } = this, s7 = e3.length, i8 = e3.byteOffset, c7 = e3.buffer;
    for (let f12 = 0; f12 < s7; ) {
      this.pos === n7 && (Ut(o7), this.compress(o7, 0, false), Ut(o7), this.pos = 0);
      const u7 = Math.min(n7 - this.pos, s7 - f12), a8 = i8 + f12;
      if (u7 === n7 && !(a8 % 4) && f12 + u7 < s7) {
        const l5 = new Uint32Array(c7, a8, Math.floor((s7 - f12) / 4));
        Ut(l5);
        for (let d7 = 0; f12 + n7 < s7; d7 += o7.length, f12 += n7) this.length += n7, this.compress(l5, d7, false);
        Ut(l5);
        continue;
      }
      r5.set(e3.subarray(f12, f12 + u7), this.pos), this.pos += u7, this.length += u7, f12 += u7;
    }
    return this;
  }
  digestInto(e3) {
    Nt(this), un(e3, this);
    const { pos: n7, buffer32: r5 } = this;
    this.finished = true, lt(this.buffer.subarray(n7)), Ut(r5), this.compress(r5, 0, true), Ut(r5);
    const o7 = pe(e3);
    this.get().forEach((s7, i8) => o7[i8] = wt(s7));
  }
  digest() {
    const { buffer: e3, outputLen: n7 } = this;
    this.digestInto(e3);
    const r5 = e3.slice(0, n7);
    return this.destroy(), r5;
  }
  _cloneInto(e3) {
    const { buffer: n7, length: r5, finished: o7, destroyed: s7, outputLen: i8, pos: c7 } = this;
    return e3 || (e3 = new this.constructor({ dkLen: i8 })), e3.set(...this.get()), e3.buffer.set(n7), e3.destroyed = s7, e3.finished = o7, e3.length = r5, e3.pos = c7, e3.outputLen = i8, e3;
  }
  clone() {
    return this._cloneInto();
  }
};
var Ec = class extends xc {
  constructor(e3 = {}) {
    const n7 = e3.dkLen === void 0 ? 64 : e3.dkLen;
    super(128, n7), this.v0l = z4[0] | 0, this.v0h = z4[1] | 0, this.v1l = z4[2] | 0, this.v1h = z4[3] | 0, this.v2l = z4[4] | 0, this.v2h = z4[5] | 0, this.v3l = z4[6] | 0, this.v3h = z4[7] | 0, this.v4l = z4[8] | 0, this.v4h = z4[9] | 0, this.v5l = z4[10] | 0, this.v5h = z4[11] | 0, this.v6l = z4[12] | 0, this.v6h = z4[13] | 0, this.v7l = z4[14] | 0, this.v7h = z4[15] | 0, vc(n7, e3, 64, 16, 16);
    let { key: r5, personalization: o7, salt: s7 } = e3, i8 = 0;
    if (r5 !== void 0 && (r5 = pt(r5), i8 = r5.length), this.v0l ^= this.outputLen | i8 << 8 | 65536 | 1 << 24, s7 !== void 0) {
      s7 = pt(s7);
      const c7 = pe(s7);
      this.v4l ^= wt(c7[0]), this.v4h ^= wt(c7[1]), this.v5l ^= wt(c7[2]), this.v5h ^= wt(c7[3]);
    }
    if (o7 !== void 0) {
      o7 = pt(o7);
      const c7 = pe(o7);
      this.v6l ^= wt(c7[0]), this.v6h ^= wt(c7[1]), this.v7l ^= wt(c7[2]), this.v7h ^= wt(c7[3]);
    }
    if (r5 !== void 0) {
      const c7 = new Uint8Array(this.blockLen);
      c7.set(r5), this.update(c7);
    }
  }
  get() {
    let { v0l: e3, v0h: n7, v1l: r5, v1h: o7, v2l: s7, v2h: i8, v3l: c7, v3h: f12, v4l: u7, v4h: a8, v5l: l5, v5h: d7, v6l: h6, v6h: y7, v7l: m6, v7h: v8 } = this;
    return [e3, n7, r5, o7, s7, i8, c7, f12, u7, a8, l5, d7, h6, y7, m6, v8];
  }
  set(e3, n7, r5, o7, s7, i8, c7, f12, u7, a8, l5, d7, h6, y7, m6, v8) {
    this.v0l = e3 | 0, this.v0h = n7 | 0, this.v1l = r5 | 0, this.v1h = o7 | 0, this.v2l = s7 | 0, this.v2h = i8 | 0, this.v3l = c7 | 0, this.v3h = f12 | 0, this.v4l = u7 | 0, this.v4h = a8 | 0, this.v5l = l5 | 0, this.v5h = d7 | 0, this.v6l = h6 | 0, this.v6h = y7 | 0, this.v7l = m6 | 0, this.v7h = v8 | 0;
  }
  compress(e3, n7, r5) {
    this.get().forEach((f12, u7) => S3[u7] = f12), S3.set(z4, 16);
    let { h: o7, l: s7 } = Ur(BigInt(this.length));
    S3[24] = z4[8] ^ s7, S3[25] = z4[9] ^ o7, r5 && (S3[28] = ~S3[28], S3[29] = ~S3[29]);
    let i8 = 0;
    const c7 = wc;
    for (let f12 = 0; f12 < 12; f12++) jt(0, 4, 8, 12, e3, n7 + 2 * c7[i8++]), Lt(0, 4, 8, 12, e3, n7 + 2 * c7[i8++]), jt(1, 5, 9, 13, e3, n7 + 2 * c7[i8++]), Lt(1, 5, 9, 13, e3, n7 + 2 * c7[i8++]), jt(2, 6, 10, 14, e3, n7 + 2 * c7[i8++]), Lt(2, 6, 10, 14, e3, n7 + 2 * c7[i8++]), jt(3, 7, 11, 15, e3, n7 + 2 * c7[i8++]), Lt(3, 7, 11, 15, e3, n7 + 2 * c7[i8++]), jt(0, 5, 10, 15, e3, n7 + 2 * c7[i8++]), Lt(0, 5, 10, 15, e3, n7 + 2 * c7[i8++]), jt(1, 6, 11, 12, e3, n7 + 2 * c7[i8++]), Lt(1, 6, 11, 12, e3, n7 + 2 * c7[i8++]), jt(2, 7, 8, 13, e3, n7 + 2 * c7[i8++]), Lt(2, 7, 8, 13, e3, n7 + 2 * c7[i8++]), jt(3, 4, 9, 14, e3, n7 + 2 * c7[i8++]), Lt(3, 4, 9, 14, e3, n7 + 2 * c7[i8++]);
    this.v0l ^= S3[0] ^ S3[16], this.v0h ^= S3[1] ^ S3[17], this.v1l ^= S3[2] ^ S3[18], this.v1h ^= S3[3] ^ S3[19], this.v2l ^= S3[4] ^ S3[20], this.v2h ^= S3[5] ^ S3[21], this.v3l ^= S3[6] ^ S3[22], this.v3h ^= S3[7] ^ S3[23], this.v4l ^= S3[8] ^ S3[24], this.v4h ^= S3[9] ^ S3[25], this.v5l ^= S3[10] ^ S3[26], this.v5h ^= S3[11] ^ S3[27], this.v6l ^= S3[12] ^ S3[28], this.v6h ^= S3[13] ^ S3[29], this.v7l ^= S3[14] ^ S3[30], this.v7h ^= S3[15] ^ S3[31], lt(S3);
  }
  destroy() {
    this.destroyed = true, lt(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Bc = Wi((t3) => new Ec(t3));
var Ac = "https://rpc.walletconnect.org/v1";
function hn(t3) {
  const e3 = `Ethereum Signed Message:
${t3.length}`, n7 = new TextEncoder().encode(e3 + t3);
  return "0x" + Buffer.from(ic(n7)).toString("hex");
}
async function Zr(t3, e3, n7, r5, o7, s7) {
  switch (n7.t) {
    case "eip191":
      return await Gr(t3, e3, n7.s);
    case "eip1271":
      return await zr(t3, e3, n7.s, r5, o7, s7);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n7.t}`);
  }
}
function Gr(t3, e3, n7) {
  const r5 = Signature_exports.fromHex(n7);
  return Secp256k1_exports.recoverAddress({ payload: hn(e3), signature: r5 }).toLowerCase() === t3.toLowerCase();
}
async function zr(t3, e3, n7, r5, o7, s7) {
  const i8 = Je(r5);
  if (!i8.namespace || !i8.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r5}`);
  try {
    const c7 = "0x1626ba7e", f12 = "0000000000000000000000000000000000000000000000000000000000000040", u7 = n7.substring(2), a8 = (u7.length / 2).toString(16).padStart(64, "0"), l5 = (e3.startsWith("0x") ? e3 : hn(e3)).substring(2), d7 = c7 + l5 + f12 + a8 + u7, h6 = await fetch(`${s7 || Ac}/?chainId=${r5}&projectId=${o7}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Ic(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t3, data: d7 }, "latest"] }) }), { result: y7 } = await h6.json();
    return y7 ? y7.slice(0, c7.length).toLowerCase() === c7.toLowerCase() : false;
  } catch (c7) {
    return console.error("isValidEip1271Signature: ", c7), false;
  }
}
function Ic() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Sc(t3) {
  const e3 = atob(t3), n7 = new Uint8Array(e3.length);
  for (let i8 = 0; i8 < e3.length; i8++) n7[i8] = e3.charCodeAt(i8);
  const r5 = n7[0];
  if (r5 === 0) throw new Error("No signatures found");
  const o7 = 1 + r5 * 64;
  if (n7.length < o7) throw new Error("Transaction data too short for claimed signature count");
  if (n7.length < 100) throw new Error("Transaction too short");
  const s7 = Buffer.from(t3, "base64").slice(1, 65);
  return esm_default.encode(s7);
}
function Oc(t3) {
  const e3 = new Uint8Array(Buffer.from(t3, "base64")), n7 = Array.from("TransactionData::").map((s7) => s7.charCodeAt(0)), r5 = new Uint8Array(n7.length + e3.length);
  r5.set(n7), r5.set(e3, n7.length);
  const o7 = Bc(r5, { dkLen: 32 });
  return esm_default.encode(o7);
}
function Nc(t3) {
  const e3 = new Uint8Array($e(Yr(t3)));
  return esm_default.encode(e3);
}
function Yr(t3) {
  if (t3 instanceof Uint8Array) return t3;
  if (Array.isArray(t3)) return new Uint8Array(t3);
  if (typeof t3 == "object" && t3 != null && t3.data) return new Uint8Array(Object.values(t3.data));
  if (typeof t3 == "object" && t3) return new Uint8Array(Object.values(t3));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Uc(t3) {
  const e3 = Buffer.from(t3, "base64"), n7 = decode(e3).txn;
  if (!n7) throw new Error("Invalid signed transaction: missing 'txn' field");
  const r5 = encode(n7), o7 = Buffer.from("TX"), s7 = Buffer.concat([o7, Buffer.from(r5)]), i8 = mc(s7);
  return base32.encode(i8).replace(/=+$/, "");
}
function pn(t3) {
  const e3 = [];
  let n7 = BigInt(t3);
  for (; n7 >= BigInt(128); ) e3.push(Number(n7 & BigInt(127) | BigInt(128))), n7 >>= BigInt(7);
  return e3.push(Number(n7)), Buffer.from(e3);
}
function _c(t3) {
  const e3 = Buffer.from(t3.signed.bodyBytes, "base64"), n7 = Buffer.from(t3.signed.authInfoBytes, "base64"), r5 = Buffer.from(t3.signature.signature, "base64"), o7 = [];
  o7.push(Buffer.from([10])), o7.push(pn(e3.length)), o7.push(e3), o7.push(Buffer.from([18])), o7.push(pn(n7.length)), o7.push(n7), o7.push(Buffer.from([26])), o7.push(pn(r5.length)), o7.push(r5);
  const s7 = Buffer.concat(o7), i8 = $e(s7);
  return Buffer.from(i8).toString("hex").toUpperCase();
}
function Rc(t3) {
  var e3, n7;
  const r5 = [];
  try {
    if (typeof t3 == "string") return r5.push(t3), r5;
    if (typeof t3 != "object") return r5;
    t3 != null && t3.id && r5.push(t3.id);
    const o7 = (n7 = (e3 = t3?.capabilities) == null ? void 0 : e3.caip345) == null ? void 0 : n7.transactionHashes;
    o7 && r5.push(...o7);
  } catch (o7) {
    console.warn("getWalletSendCallsHashes failed: ", o7);
  }
  return r5;
}
var $c = Object.defineProperty;
var Tc = Object.defineProperties;
var Cc = Object.getOwnPropertyDescriptors;
var Wr = Object.getOwnPropertySymbols;
var jc = Object.prototype.hasOwnProperty;
var Lc = Object.prototype.propertyIsEnumerable;
var Xr = (t3, e3, n7) => e3 in t3 ? $c(t3, e3, { enumerable: true, configurable: true, writable: true, value: n7 }) : t3[e3] = n7;
var gn = (t3, e3) => {
  for (var n7 in e3 || (e3 = {})) jc.call(e3, n7) && Xr(t3, n7, e3[n7]);
  if (Wr) for (var n7 of Wr(e3)) Lc.call(e3, n7) && Xr(t3, n7, e3[n7]);
  return t3;
};
var Jr = (t3, e3) => Tc(t3, Cc(e3));
var kc = "did:pkh:";
var Te = (t3) => t3?.split(":");
var Qr = (t3) => {
  const e3 = t3 && Te(t3);
  if (e3) return t3.includes(kc) ? e3[3] : e3[1];
};
var to = (t3) => {
  const e3 = t3 && Te(t3);
  if (e3) return e3[2] + ":" + e3[3];
};
var bn = (t3) => {
  const e3 = t3 && Te(t3);
  if (e3) return e3.pop();
};
async function Pc(t3) {
  const { cacao: e3, projectId: n7 } = t3, { s: r5, p: o7 } = e3, s7 = eo(o7, o7.iss), i8 = bn(o7.iss);
  return await Zr(i8, s7, r5, to(o7.iss), n7);
}
var eo = (t3, e3) => {
  const n7 = `${t3.domain} wants you to sign in with your Ethereum account:`, r5 = bn(e3);
  if (!t3.aud && !t3.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o7 = t3.statement || void 0;
  const s7 = `URI: ${t3.aud || t3.uri}`, i8 = `Version: ${t3.version}`, c7 = `Chain ID: ${Qr(e3)}`, f12 = `Nonce: ${t3.nonce}`, u7 = `Issued At: ${t3.iat}`, a8 = t3.exp ? `Expiration Time: ${t3.exp}` : void 0, l5 = t3.nbf ? `Not Before: ${t3.nbf}` : void 0, d7 = t3.requestId ? `Request ID: ${t3.requestId}` : void 0, h6 = t3.resources ? `Resources:${t3.resources.map((m6) => `
- ${m6}`).join("")}` : void 0, y7 = je(t3.resources);
  if (y7) {
    const m6 = kt(y7);
    o7 = wn(o7, m6);
  }
  return [n7, r5, "", o7, "", s7, i8, c7, f12, u7, a8, l5, d7, h6].filter((m6) => m6 != null).join(`
`);
};
function so(t3) {
  return Buffer.from(JSON.stringify(t3)).toString("base64");
}
function io(t3) {
  return JSON.parse(Buffer.from(t3, "base64").toString("utf-8"));
}
function yt(t3) {
  if (!t3) throw new Error("No recap provided, value is undefined");
  if (!t3.att) throw new Error("No `att` property found");
  const e3 = Object.keys(t3.att);
  if (!(e3 != null && e3.length)) throw new Error("No resources found in `att` property");
  e3.forEach((n7) => {
    const r5 = t3.att[n7];
    if (Array.isArray(r5)) throw new Error(`Resource must be an object: ${n7}`);
    if (typeof r5 != "object") throw new Error(`Resource must be an object: ${n7}`);
    if (!Object.keys(r5).length) throw new Error(`Resource object is empty: ${n7}`);
    Object.keys(r5).forEach((o7) => {
      const s7 = r5[o7];
      if (!Array.isArray(s7)) throw new Error(`Ability limits ${o7} must be an array of objects, found: ${s7}`);
      if (!s7.length) throw new Error(`Value of ${o7} is empty array, must be an array with objects`);
      s7.forEach((i8) => {
        if (typeof i8 != "object") throw new Error(`Ability limits (${o7}) must be an array of objects, found: ${i8}`);
      });
    });
  });
}
function co(t3, e3, n7, r5 = {}) {
  return n7?.sort((o7, s7) => o7.localeCompare(s7)), { att: { [t3]: yn(e3, n7, r5) } };
}
function yn(t3, e3, n7 = {}) {
  e3 = e3?.sort((o7, s7) => o7.localeCompare(s7));
  const r5 = e3.map((o7) => ({ [`${t3}/${o7}`]: [n7] }));
  return Object.assign({}, ...r5);
}
function Ce(t3) {
  return yt(t3), `urn:recap:${so(t3).replace(/=/g, "")}`;
}
function kt(t3) {
  const e3 = io(t3.replace("urn:recap:", ""));
  return yt(e3), e3;
}
function Kc(t3, e3, n7) {
  const r5 = co(t3, e3, n7);
  return Ce(r5);
}
function mn(t3) {
  return t3 && t3.includes("urn:recap:");
}
function qc(t3, e3) {
  const n7 = kt(t3), r5 = kt(e3), o7 = ao(n7, r5);
  return Ce(o7);
}
function ao(t3, e3) {
  yt(t3), yt(e3);
  const n7 = Object.keys(t3.att).concat(Object.keys(e3.att)).sort((o7, s7) => o7.localeCompare(s7)), r5 = { att: {} };
  return n7.forEach((o7) => {
    var s7, i8;
    Object.keys(((s7 = t3.att) == null ? void 0 : s7[o7]) || {}).concat(Object.keys(((i8 = e3.att) == null ? void 0 : i8[o7]) || {})).sort((c7, f12) => c7.localeCompare(f12)).forEach((c7) => {
      var f12, u7;
      r5.att[o7] = Jr(gn({}, r5.att[o7]), { [c7]: ((f12 = t3.att[o7]) == null ? void 0 : f12[c7]) || ((u7 = e3.att[o7]) == null ? void 0 : u7[c7]) });
    });
  }), r5;
}
function wn(t3 = "", e3) {
  yt(e3);
  const n7 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t3.includes(n7)) return t3;
  const r5 = [];
  let o7 = 0;
  Object.keys(e3.att).forEach((c7) => {
    const f12 = Object.keys(e3.att[c7]).map((l5) => ({ ability: l5.split("/")[0], action: l5.split("/")[1] }));
    f12.sort((l5, d7) => l5.action.localeCompare(d7.action));
    const u7 = {};
    f12.forEach((l5) => {
      u7[l5.ability] || (u7[l5.ability] = []), u7[l5.ability].push(l5.action);
    });
    const a8 = Object.keys(u7).map((l5) => (o7++, `(${o7}) '${l5}': '${u7[l5].join("', '")}' for '${c7}'.`));
    r5.push(a8.join(", ").replace(".,", "."));
  });
  const s7 = r5.join(" "), i8 = `${n7}${s7}`;
  return `${t3 ? t3 + " " : ""}${i8}`;
}
function Fc(t3) {
  var e3;
  const n7 = kt(t3);
  yt(n7);
  const r5 = (e3 = n7.att) == null ? void 0 : e3.eip155;
  return r5 ? Object.keys(r5).map((o7) => o7.split("/")[1]) : [];
}
function Zc(t3) {
  const e3 = kt(t3);
  yt(e3);
  const n7 = [];
  return Object.values(e3.att).forEach((r5) => {
    Object.values(r5).forEach((o7) => {
      var s7;
      (s7 = o7?.[0]) != null && s7.chains && n7.push(o7[0].chains);
    });
  }), [...new Set(n7.flat())];
}
function je(t3) {
  if (!t3) return;
  const e3 = t3?.[t3.length - 1];
  return mn(e3) ? e3 : void 0;
}
function lo(t3) {
  return t3 instanceof Uint8Array || ArrayBuffer.isView(t3) && t3.constructor.name === "Uint8Array";
}
function vn(t3) {
  if (typeof t3 != "boolean") throw new Error(`boolean expected, not ${t3}`);
}
function xn(t3) {
  if (!Number.isSafeInteger(t3) || t3 < 0) throw new Error("positive integer expected, got " + t3);
}
function ot(t3, ...e3) {
  if (!lo(t3)) throw new Error("Uint8Array expected");
  if (e3.length > 0 && !e3.includes(t3.length)) throw new Error("Uint8Array expected of length " + e3 + ", got length=" + t3.length);
}
function ho(t3, e3 = true) {
  if (t3.destroyed) throw new Error("Hash instance has been destroyed");
  if (e3 && t3.finished) throw new Error("Hash#digest() has already been called");
}
function Gc(t3, e3) {
  ot(t3);
  const n7 = e3.outputLen;
  if (t3.length < n7) throw new Error("digestInto() expects output buffer of length at least " + n7);
}
function Pt(t3) {
  return new Uint32Array(t3.buffer, t3.byteOffset, Math.floor(t3.byteLength / 4));
}
function Qt(...t3) {
  for (let e3 = 0; e3 < t3.length; e3++) t3[e3].fill(0);
}
function zc(t3) {
  return new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
}
var Yc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Wc(t3) {
  if (typeof t3 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t3));
}
function En(t3) {
  if (typeof t3 == "string") t3 = Wc(t3);
  else if (lo(t3)) t3 = Bn(t3);
  else throw new Error("Uint8Array expected, got " + typeof t3);
  return t3;
}
function Xc(t3, e3) {
  if (e3 == null || typeof e3 != "object") throw new Error("options must be defined");
  return Object.assign(t3, e3);
}
function Jc(t3, e3) {
  if (t3.length !== e3.length) return false;
  let n7 = 0;
  for (let r5 = 0; r5 < t3.length; r5++) n7 |= t3[r5] ^ e3[r5];
  return n7 === 0;
}
var Qc = (t3, e3) => {
  function n7(r5, ...o7) {
    if (ot(r5), !Yc) throw new Error("Non little-endian hardware is not yet supported");
    if (t3.nonceLength !== void 0) {
      const a8 = o7[0];
      if (!a8) throw new Error("nonce / iv required");
      t3.varSizeNonce ? ot(a8) : ot(a8, t3.nonceLength);
    }
    const s7 = t3.tagLength;
    s7 && o7[1] !== void 0 && ot(o7[1]);
    const i8 = e3(r5, ...o7), c7 = (a8, l5) => {
      if (l5 !== void 0) {
        if (a8 !== 2) throw new Error("cipher output not supported");
        ot(l5);
      }
    };
    let f12 = false;
    return { encrypt(a8, l5) {
      if (f12) throw new Error("cannot encrypt() twice with same key + nonce");
      return f12 = true, ot(a8), c7(i8.encrypt.length, l5), i8.encrypt(a8, l5);
    }, decrypt(a8, l5) {
      if (ot(a8), s7 && a8.length < s7) throw new Error("invalid ciphertext length: smaller than tagLength=" + s7);
      return c7(i8.decrypt.length, l5), i8.decrypt(a8, l5);
    } };
  }
  return Object.assign(n7, t3), n7;
};
function po(t3, e3, n7 = true) {
  if (e3 === void 0) return new Uint8Array(t3);
  if (e3.length !== t3) throw new Error("invalid output length, expected " + t3 + ", got: " + e3.length);
  if (n7 && !ef(e3)) throw new Error("invalid output, must be aligned");
  return e3;
}
function go(t3, e3, n7, r5) {
  if (typeof t3.setBigUint64 == "function") return t3.setBigUint64(e3, n7, r5);
  const o7 = BigInt(32), s7 = BigInt(4294967295), i8 = Number(n7 >> o7 & s7), c7 = Number(n7 & s7), f12 = r5 ? 4 : 0, u7 = r5 ? 0 : 4;
  t3.setUint32(e3 + f12, i8, r5), t3.setUint32(e3 + u7, c7, r5);
}
function tf(t3, e3, n7) {
  vn(n7);
  const r5 = new Uint8Array(16), o7 = zc(r5);
  return go(o7, 0, BigInt(e3), n7), go(o7, 8, BigInt(t3), n7), r5;
}
function ef(t3) {
  return t3.byteOffset % 4 === 0;
}
function Bn(t3) {
  return Uint8Array.from(t3);
}
var bo = (t3) => Uint8Array.from(t3.split("").map((e3) => e3.charCodeAt(0)));
var nf = bo("expand 16-byte k");
var rf = bo("expand 32-byte k");
var of = Pt(nf);
var sf = Pt(rf);
function K3(t3, e3) {
  return t3 << e3 | t3 >>> 32 - e3;
}
function An(t3) {
  return t3.byteOffset % 4 === 0;
}
var Le = 64;
var cf = 16;
var yo = 2 ** 32 - 1;
var mo = new Uint32Array();
function ff(t3, e3, n7, r5, o7, s7, i8, c7) {
  const f12 = o7.length, u7 = new Uint8Array(Le), a8 = Pt(u7), l5 = An(o7) && An(s7), d7 = l5 ? Pt(o7) : mo, h6 = l5 ? Pt(s7) : mo;
  for (let y7 = 0; y7 < f12; i8++) {
    if (t3(e3, n7, r5, a8, i8, c7), i8 >= yo) throw new Error("arx: counter overflow");
    const m6 = Math.min(Le, f12 - y7);
    if (l5 && m6 === Le) {
      const v8 = y7 / 4;
      if (y7 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let U6 = 0, F6; U6 < cf; U6++) F6 = v8 + U6, h6[F6] = d7[F6] ^ a8[U6];
      y7 += Le;
      continue;
    }
    for (let v8 = 0, U6; v8 < m6; v8++) U6 = y7 + v8, s7[U6] = o7[U6] ^ u7[v8];
    y7 += m6;
  }
}
function af(t3, e3) {
  const { allowShortKeys: n7, extendNonceFn: r5, counterLength: o7, counterRight: s7, rounds: i8 } = Xc({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e3);
  if (typeof t3 != "function") throw new Error("core must be a function");
  return xn(o7), xn(i8), vn(s7), vn(n7), (c7, f12, u7, a8, l5 = 0) => {
    ot(c7), ot(f12), ot(u7);
    const d7 = u7.length;
    if (a8 === void 0 && (a8 = new Uint8Array(d7)), ot(a8), xn(l5), l5 < 0 || l5 >= yo) throw new Error("arx: counter overflow");
    if (a8.length < d7) throw new Error(`arx: output (${a8.length}) is shorter than data (${d7})`);
    const h6 = [];
    let y7 = c7.length, m6, v8;
    if (y7 === 32) h6.push(m6 = Bn(c7)), v8 = sf;
    else if (y7 === 16 && n7) m6 = new Uint8Array(32), m6.set(c7), m6.set(c7, 16), v8 = of, h6.push(m6);
    else throw new Error(`arx: invalid 32-byte key, got length=${y7}`);
    An(f12) || h6.push(f12 = Bn(f12));
    const U6 = Pt(m6);
    if (r5) {
      if (f12.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r5(v8, U6, Pt(f12.subarray(0, 16)), U6), f12 = f12.subarray(16);
    }
    const F6 = 16 - o7;
    if (F6 !== f12.length) throw new Error(`arx: nonce must be ${F6} or 16 bytes`);
    if (F6 !== 12) {
      const Z4 = new Uint8Array(12);
      Z4.set(f12, s7 ? 0 : 12 - f12.length), f12 = Z4, h6.push(f12);
    }
    const R8 = Pt(f12);
    return ff(t3, v8, U6, R8, u7, a8, l5, i8), Qt(...h6), a8;
  };
}
var W4 = (t3, e3) => t3[e3++] & 255 | (t3[e3++] & 255) << 8;
var uf = class {
  constructor(e3) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e3 = En(e3), ot(e3, 32);
    const n7 = W4(e3, 0), r5 = W4(e3, 2), o7 = W4(e3, 4), s7 = W4(e3, 6), i8 = W4(e3, 8), c7 = W4(e3, 10), f12 = W4(e3, 12), u7 = W4(e3, 14);
    this.r[0] = n7 & 8191, this.r[1] = (n7 >>> 13 | r5 << 3) & 8191, this.r[2] = (r5 >>> 10 | o7 << 6) & 7939, this.r[3] = (o7 >>> 7 | s7 << 9) & 8191, this.r[4] = (s7 >>> 4 | i8 << 12) & 255, this.r[5] = i8 >>> 1 & 8190, this.r[6] = (i8 >>> 14 | c7 << 2) & 8191, this.r[7] = (c7 >>> 11 | f12 << 5) & 8065, this.r[8] = (f12 >>> 8 | u7 << 8) & 8191, this.r[9] = u7 >>> 5 & 127;
    for (let a8 = 0; a8 < 8; a8++) this.pad[a8] = W4(e3, 16 + 2 * a8);
  }
  process(e3, n7, r5 = false) {
    const o7 = r5 ? 0 : 2048, { h: s7, r: i8 } = this, c7 = i8[0], f12 = i8[1], u7 = i8[2], a8 = i8[3], l5 = i8[4], d7 = i8[5], h6 = i8[6], y7 = i8[7], m6 = i8[8], v8 = i8[9], U6 = W4(e3, n7 + 0), F6 = W4(e3, n7 + 2), R8 = W4(e3, n7 + 4), Z4 = W4(e3, n7 + 6), H4 = W4(e3, n7 + 8), j8 = W4(e3, n7 + 10), L5 = W4(e3, n7 + 12), k5 = W4(e3, n7 + 14);
    let O5 = s7[0] + (U6 & 8191), T5 = s7[1] + ((U6 >>> 13 | F6 << 3) & 8191), C9 = s7[2] + ((F6 >>> 10 | R8 << 6) & 8191), _7 = s7[3] + ((R8 >>> 7 | Z4 << 9) & 8191), p7 = s7[4] + ((Z4 >>> 4 | H4 << 12) & 8191), b9 = s7[5] + (H4 >>> 1 & 8191), g3 = s7[6] + ((H4 >>> 14 | j8 << 2) & 8191), x6 = s7[7] + ((j8 >>> 11 | L5 << 5) & 8191), E8 = s7[8] + ((L5 >>> 8 | k5 << 8) & 8191), A8 = s7[9] + (k5 >>> 5 | o7), w5 = 0, B7 = w5 + O5 * c7 + T5 * (5 * v8) + C9 * (5 * m6) + _7 * (5 * y7) + p7 * (5 * h6);
    w5 = B7 >>> 13, B7 &= 8191, B7 += b9 * (5 * d7) + g3 * (5 * l5) + x6 * (5 * a8) + E8 * (5 * u7) + A8 * (5 * f12), w5 += B7 >>> 13, B7 &= 8191;
    let I5 = w5 + O5 * f12 + T5 * c7 + C9 * (5 * v8) + _7 * (5 * m6) + p7 * (5 * y7);
    w5 = I5 >>> 13, I5 &= 8191, I5 += b9 * (5 * h6) + g3 * (5 * d7) + x6 * (5 * l5) + E8 * (5 * a8) + A8 * (5 * u7), w5 += I5 >>> 13, I5 &= 8191;
    let N6 = w5 + O5 * u7 + T5 * f12 + C9 * c7 + _7 * (5 * v8) + p7 * (5 * m6);
    w5 = N6 >>> 13, N6 &= 8191, N6 += b9 * (5 * y7) + g3 * (5 * h6) + x6 * (5 * d7) + E8 * (5 * l5) + A8 * (5 * a8), w5 += N6 >>> 13, N6 &= 8191;
    let D7 = w5 + O5 * a8 + T5 * u7 + C9 * f12 + _7 * c7 + p7 * (5 * v8);
    w5 = D7 >>> 13, D7 &= 8191, D7 += b9 * (5 * m6) + g3 * (5 * y7) + x6 * (5 * h6) + E8 * (5 * d7) + A8 * (5 * l5), w5 += D7 >>> 13, D7 &= 8191;
    let P8 = w5 + O5 * l5 + T5 * a8 + C9 * u7 + _7 * f12 + p7 * c7;
    w5 = P8 >>> 13, P8 &= 8191, P8 += b9 * (5 * v8) + g3 * (5 * m6) + x6 * (5 * y7) + E8 * (5 * h6) + A8 * (5 * d7), w5 += P8 >>> 13, P8 &= 8191;
    let $8 = w5 + O5 * d7 + T5 * l5 + C9 * a8 + _7 * u7 + p7 * f12;
    w5 = $8 >>> 13, $8 &= 8191, $8 += b9 * c7 + g3 * (5 * v8) + x6 * (5 * m6) + E8 * (5 * y7) + A8 * (5 * h6), w5 += $8 >>> 13, $8 &= 8191;
    let V5 = w5 + O5 * h6 + T5 * d7 + C9 * l5 + _7 * a8 + p7 * u7;
    w5 = V5 >>> 13, V5 &= 8191, V5 += b9 * f12 + g3 * c7 + x6 * (5 * v8) + E8 * (5 * m6) + A8 * (5 * y7), w5 += V5 >>> 13, V5 &= 8191;
    let q4 = w5 + O5 * y7 + T5 * h6 + C9 * d7 + _7 * l5 + p7 * a8;
    w5 = q4 >>> 13, q4 &= 8191, q4 += b9 * u7 + g3 * f12 + x6 * c7 + E8 * (5 * v8) + A8 * (5 * m6), w5 += q4 >>> 13, q4 &= 8191;
    let G7 = w5 + O5 * m6 + T5 * y7 + C9 * h6 + _7 * d7 + p7 * l5;
    w5 = G7 >>> 13, G7 &= 8191, G7 += b9 * a8 + g3 * u7 + x6 * f12 + E8 * c7 + A8 * (5 * v8), w5 += G7 >>> 13, G7 &= 8191;
    let M7 = w5 + O5 * v8 + T5 * m6 + C9 * y7 + _7 * h6 + p7 * d7;
    w5 = M7 >>> 13, M7 &= 8191, M7 += b9 * l5 + g3 * a8 + x6 * u7 + E8 * f12 + A8 * c7, w5 += M7 >>> 13, M7 &= 8191, w5 = (w5 << 2) + w5 | 0, w5 = w5 + B7 | 0, B7 = w5 & 8191, w5 = w5 >>> 13, I5 += w5, s7[0] = B7, s7[1] = I5, s7[2] = N6, s7[3] = D7, s7[4] = P8, s7[5] = $8, s7[6] = V5, s7[7] = q4, s7[8] = G7, s7[9] = M7;
  }
  finalize() {
    const { h: e3, pad: n7 } = this, r5 = new Uint16Array(10);
    let o7 = e3[1] >>> 13;
    e3[1] &= 8191;
    for (let c7 = 2; c7 < 10; c7++) e3[c7] += o7, o7 = e3[c7] >>> 13, e3[c7] &= 8191;
    e3[0] += o7 * 5, o7 = e3[0] >>> 13, e3[0] &= 8191, e3[1] += o7, o7 = e3[1] >>> 13, e3[1] &= 8191, e3[2] += o7, r5[0] = e3[0] + 5, o7 = r5[0] >>> 13, r5[0] &= 8191;
    for (let c7 = 1; c7 < 10; c7++) r5[c7] = e3[c7] + o7, o7 = r5[c7] >>> 13, r5[c7] &= 8191;
    r5[9] -= 8192;
    let s7 = (o7 ^ 1) - 1;
    for (let c7 = 0; c7 < 10; c7++) r5[c7] &= s7;
    s7 = ~s7;
    for (let c7 = 0; c7 < 10; c7++) e3[c7] = e3[c7] & s7 | r5[c7];
    e3[0] = (e3[0] | e3[1] << 13) & 65535, e3[1] = (e3[1] >>> 3 | e3[2] << 10) & 65535, e3[2] = (e3[2] >>> 6 | e3[3] << 7) & 65535, e3[3] = (e3[3] >>> 9 | e3[4] << 4) & 65535, e3[4] = (e3[4] >>> 12 | e3[5] << 1 | e3[6] << 14) & 65535, e3[5] = (e3[6] >>> 2 | e3[7] << 11) & 65535, e3[6] = (e3[7] >>> 5 | e3[8] << 8) & 65535, e3[7] = (e3[8] >>> 8 | e3[9] << 5) & 65535;
    let i8 = e3[0] + n7[0];
    e3[0] = i8 & 65535;
    for (let c7 = 1; c7 < 8; c7++) i8 = (e3[c7] + n7[c7] | 0) + (i8 >>> 16) | 0, e3[c7] = i8 & 65535;
    Qt(r5);
  }
  update(e3) {
    ho(this), e3 = En(e3), ot(e3);
    const { buffer: n7, blockLen: r5 } = this, o7 = e3.length;
    for (let s7 = 0; s7 < o7; ) {
      const i8 = Math.min(r5 - this.pos, o7 - s7);
      if (i8 === r5) {
        for (; r5 <= o7 - s7; s7 += r5) this.process(e3, s7);
        continue;
      }
      n7.set(e3.subarray(s7, s7 + i8), this.pos), this.pos += i8, s7 += i8, this.pos === r5 && (this.process(n7, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Qt(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e3) {
    ho(this), Gc(e3, this), this.finished = true;
    const { buffer: n7, h: r5 } = this;
    let { pos: o7 } = this;
    if (o7) {
      for (n7[o7++] = 1; o7 < 16; o7++) n7[o7] = 0;
      this.process(n7, 0, true);
    }
    this.finalize();
    let s7 = 0;
    for (let i8 = 0; i8 < 8; i8++) e3[s7++] = r5[i8] >>> 0, e3[s7++] = r5[i8] >>> 8;
    return e3;
  }
  digest() {
    const { buffer: e3, outputLen: n7 } = this;
    this.digestInto(e3);
    const r5 = e3.slice(0, n7);
    return this.destroy(), r5;
  }
};
function lf(t3) {
  const e3 = (r5, o7) => t3(o7).update(En(r5)).digest(), n7 = t3(new Uint8Array(32));
  return e3.outputLen = n7.outputLen, e3.blockLen = n7.blockLen, e3.create = (r5) => t3(r5), e3;
}
var df = lf((t3) => new uf(t3));
function hf(t3, e3, n7, r5, o7, s7 = 20) {
  let i8 = t3[0], c7 = t3[1], f12 = t3[2], u7 = t3[3], a8 = e3[0], l5 = e3[1], d7 = e3[2], h6 = e3[3], y7 = e3[4], m6 = e3[5], v8 = e3[6], U6 = e3[7], F6 = o7, R8 = n7[0], Z4 = n7[1], H4 = n7[2], j8 = i8, L5 = c7, k5 = f12, O5 = u7, T5 = a8, C9 = l5, _7 = d7, p7 = h6, b9 = y7, g3 = m6, x6 = v8, E8 = U6, A8 = F6, w5 = R8, B7 = Z4, I5 = H4;
  for (let D7 = 0; D7 < s7; D7 += 2) j8 = j8 + T5 | 0, A8 = K3(A8 ^ j8, 16), b9 = b9 + A8 | 0, T5 = K3(T5 ^ b9, 12), j8 = j8 + T5 | 0, A8 = K3(A8 ^ j8, 8), b9 = b9 + A8 | 0, T5 = K3(T5 ^ b9, 7), L5 = L5 + C9 | 0, w5 = K3(w5 ^ L5, 16), g3 = g3 + w5 | 0, C9 = K3(C9 ^ g3, 12), L5 = L5 + C9 | 0, w5 = K3(w5 ^ L5, 8), g3 = g3 + w5 | 0, C9 = K3(C9 ^ g3, 7), k5 = k5 + _7 | 0, B7 = K3(B7 ^ k5, 16), x6 = x6 + B7 | 0, _7 = K3(_7 ^ x6, 12), k5 = k5 + _7 | 0, B7 = K3(B7 ^ k5, 8), x6 = x6 + B7 | 0, _7 = K3(_7 ^ x6, 7), O5 = O5 + p7 | 0, I5 = K3(I5 ^ O5, 16), E8 = E8 + I5 | 0, p7 = K3(p7 ^ E8, 12), O5 = O5 + p7 | 0, I5 = K3(I5 ^ O5, 8), E8 = E8 + I5 | 0, p7 = K3(p7 ^ E8, 7), j8 = j8 + C9 | 0, I5 = K3(I5 ^ j8, 16), x6 = x6 + I5 | 0, C9 = K3(C9 ^ x6, 12), j8 = j8 + C9 | 0, I5 = K3(I5 ^ j8, 8), x6 = x6 + I5 | 0, C9 = K3(C9 ^ x6, 7), L5 = L5 + _7 | 0, A8 = K3(A8 ^ L5, 16), E8 = E8 + A8 | 0, _7 = K3(_7 ^ E8, 12), L5 = L5 + _7 | 0, A8 = K3(A8 ^ L5, 8), E8 = E8 + A8 | 0, _7 = K3(_7 ^ E8, 7), k5 = k5 + p7 | 0, w5 = K3(w5 ^ k5, 16), b9 = b9 + w5 | 0, p7 = K3(p7 ^ b9, 12), k5 = k5 + p7 | 0, w5 = K3(w5 ^ k5, 8), b9 = b9 + w5 | 0, p7 = K3(p7 ^ b9, 7), O5 = O5 + T5 | 0, B7 = K3(B7 ^ O5, 16), g3 = g3 + B7 | 0, T5 = K3(T5 ^ g3, 12), O5 = O5 + T5 | 0, B7 = K3(B7 ^ O5, 8), g3 = g3 + B7 | 0, T5 = K3(T5 ^ g3, 7);
  let N6 = 0;
  r5[N6++] = i8 + j8 | 0, r5[N6++] = c7 + L5 | 0, r5[N6++] = f12 + k5 | 0, r5[N6++] = u7 + O5 | 0, r5[N6++] = a8 + T5 | 0, r5[N6++] = l5 + C9 | 0, r5[N6++] = d7 + _7 | 0, r5[N6++] = h6 + p7 | 0, r5[N6++] = y7 + b9 | 0, r5[N6++] = m6 + g3 | 0, r5[N6++] = v8 + x6 | 0, r5[N6++] = U6 + E8 | 0, r5[N6++] = F6 + A8 | 0, r5[N6++] = R8 + w5 | 0, r5[N6++] = Z4 + B7 | 0, r5[N6++] = H4 + I5 | 0;
}
var pf = af(hf, { counterRight: false, counterLength: 4, allowShortKeys: false });
var gf = new Uint8Array(16);
var wo = (t3, e3) => {
  t3.update(e3);
  const n7 = e3.length % 16;
  n7 && t3.update(gf.subarray(n7));
};
var bf = new Uint8Array(32);
function vo(t3, e3, n7, r5, o7) {
  const s7 = t3(e3, n7, bf), i8 = df.create(s7);
  o7 && wo(i8, o7), wo(i8, r5);
  const c7 = tf(r5.length, o7 ? o7.length : 0, true);
  i8.update(c7);
  const f12 = i8.digest();
  return Qt(s7, c7), f12;
}
var yf = (t3) => (e3, n7, r5) => ({ encrypt(s7, i8) {
  const c7 = s7.length;
  i8 = po(c7 + 16, i8, false), i8.set(s7);
  const f12 = i8.subarray(0, -16);
  t3(e3, n7, f12, f12, 1);
  const u7 = vo(t3, e3, n7, f12, r5);
  return i8.set(u7, c7), Qt(u7), i8;
}, decrypt(s7, i8) {
  i8 = po(s7.length - 16, i8, false);
  const c7 = s7.subarray(0, -16), f12 = s7.subarray(-16), u7 = vo(t3, e3, n7, c7, r5);
  if (!Jc(f12, u7)) throw new Error("invalid tag");
  return i8.set(s7.subarray(0, -16)), t3(e3, n7, i8, i8, 1), Qt(u7), i8;
} });
var xo = Qc({ blockSize: 64, nonceLength: 12, tagLength: 16 }, yf(pf));
var Eo = class extends Re {
  constructor(e3, n7) {
    super(), this.finished = false, this.destroyed = false, Ue(e3);
    const r5 = pt(n7);
    if (this.iHash = e3.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o7 = this.blockLen, s7 = new Uint8Array(o7);
    s7.set(r5.length > o7 ? e3.create().update(r5).digest() : r5);
    for (let i8 = 0; i8 < s7.length; i8++) s7[i8] ^= 54;
    this.iHash.update(s7), this.oHash = e3.create();
    for (let i8 = 0; i8 < s7.length; i8++) s7[i8] ^= 106;
    this.oHash.update(s7), lt(s7);
  }
  update(e3) {
    return Nt(this), this.iHash.update(e3), this;
  }
  digestInto(e3) {
    Nt(this), ht(e3, this.outputLen), this.finished = true, this.iHash.digestInto(e3), this.oHash.update(e3), this.oHash.digestInto(e3), this.destroy();
  }
  digest() {
    const e3 = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e3), e3;
  }
  _cloneInto(e3) {
    e3 || (e3 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n7, iHash: r5, finished: o7, destroyed: s7, blockLen: i8, outputLen: c7 } = this;
    return e3 = e3, e3.finished = o7, e3.destroyed = s7, e3.blockLen = i8, e3.outputLen = c7, e3.oHash = n7._cloneInto(e3.oHash), e3.iHash = r5._cloneInto(e3.iHash), e3;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var ke = (t3, e3, n7) => new Eo(t3, e3).update(n7).digest();
ke.create = (t3, e3) => new Eo(t3, e3);
function mf(t3, e3, n7) {
  return Ue(t3), n7 === void 0 && (n7 = new Uint8Array(t3.outputLen)), ke(t3, pt(n7), pt(e3));
}
var In = Uint8Array.from([0]);
var Bo = Uint8Array.of();
function wf(t3, e3, n7, r5 = 32) {
  Ue(t3), mt(r5);
  const o7 = t3.outputLen;
  if (r5 > 255 * o7) throw new Error("Length should be <= 255*HashLen");
  const s7 = Math.ceil(r5 / o7);
  n7 === void 0 && (n7 = Bo);
  const i8 = new Uint8Array(s7 * o7), c7 = ke.create(t3, e3), f12 = c7._cloneInto(), u7 = new Uint8Array(c7.outputLen);
  for (let a8 = 0; a8 < s7; a8++) In[0] = a8 + 1, f12.update(a8 === 0 ? Bo : u7).update(n7).update(In).digestInto(u7), i8.set(u7, o7 * a8), c7._cloneInto(f12);
  return c7.destroy(), f12.destroy(), lt(u7, In), i8.slice(0, r5);
}
var vf = (t3, e3, n7, r5, o7) => wf(t3, mf(t3, e3, n7), r5, o7);
var Pe = $e;
var Sn = BigInt(0);
var On = BigInt(1);
function He(t3, e3 = "") {
  if (typeof t3 != "boolean") {
    const n7 = e3 && `"${e3}"`;
    throw new Error(n7 + "expected boolean, got type=" + typeof t3);
  }
  return t3;
}
function Kt(t3, e3, n7 = "") {
  const r5 = Ne(t3), o7 = t3?.length, s7 = e3 !== void 0;
  if (!r5 || s7 && o7 !== e3) {
    const i8 = n7 && `"${n7}" `, c7 = s7 ? ` of length ${e3}` : "", f12 = r5 ? `length=${o7}` : `type=${typeof t3}`;
    throw new Error(i8 + "expected Uint8Array" + c7 + ", got " + f12);
  }
  return t3;
}
function De(t3) {
  const e3 = t3.toString(16);
  return e3.length & 1 ? "0" + e3 : e3;
}
function Ao(t3) {
  if (typeof t3 != "string") throw new Error("hex string expected, got " + typeof t3);
  return t3 === "" ? Sn : BigInt("0x" + t3);
}
function Ve(t3) {
  return Ao(Jt(t3));
}
function Me(t3) {
  return ht(t3), Ao(Jt(Uint8Array.from(t3).reverse()));
}
function Nn(t3, e3) {
  return _e(t3.toString(16).padStart(e3 * 2, "0"));
}
function Un(t3, e3) {
  return Nn(t3, e3).reverse();
}
function tt(t3, e3, n7) {
  let r5;
  if (typeof e3 == "string") try {
    r5 = _e(e3);
  } catch (s7) {
    throw new Error(t3 + " must be hex string or Uint8Array, cause: " + s7);
  }
  else if (Ne(e3)) r5 = Uint8Array.from(e3);
  else throw new Error(t3 + " must be hex string or Uint8Array");
  const o7 = r5.length;
  if (typeof n7 == "number" && o7 !== n7) throw new Error(t3 + " of length " + n7 + " expected, got " + o7);
  return r5;
}
var _n = (t3) => typeof t3 == "bigint" && Sn <= t3;
function xf(t3, e3, n7) {
  return _n(t3) && _n(e3) && _n(n7) && e3 <= t3 && t3 < n7;
}
function Rn(t3, e3, n7, r5) {
  if (!xf(e3, n7, r5)) throw new Error("expected valid " + t3 + ": " + n7 + " <= n < " + r5 + ", got " + e3);
}
function Io(t3) {
  let e3;
  for (e3 = 0; t3 > Sn; t3 >>= On, e3 += 1) ;
  return e3;
}
var ye = (t3) => (On << BigInt(t3)) - On;
function Ef(t3, e3, n7) {
  if (typeof t3 != "number" || t3 < 2) throw new Error("hashLen must be a number");
  if (typeof e3 != "number" || e3 < 2) throw new Error("qByteLen must be a number");
  if (typeof n7 != "function") throw new Error("hmacFn must be a function");
  const r5 = (h6) => new Uint8Array(h6), o7 = (h6) => Uint8Array.of(h6);
  let s7 = r5(t3), i8 = r5(t3), c7 = 0;
  const f12 = () => {
    s7.fill(1), i8.fill(0), c7 = 0;
  }, u7 = (...h6) => n7(i8, s7, ...h6), a8 = (h6 = r5(0)) => {
    i8 = u7(o7(0), h6), s7 = u7(), h6.length !== 0 && (i8 = u7(o7(1), h6), s7 = u7());
  }, l5 = () => {
    if (c7++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let h6 = 0;
    const y7 = [];
    for (; h6 < e3; ) {
      s7 = u7();
      const m6 = s7.slice();
      y7.push(m6), h6 += s7.length;
    }
    return _t(...y7);
  };
  return (h6, y7) => {
    f12(), a8(h6);
    let m6;
    for (; !(m6 = y7(l5())); ) a8();
    return f12(), m6;
  };
}
function Ke(t3, e3, n7 = {}) {
  if (!t3 || typeof t3 != "object") throw new Error("expected valid options object");
  function r5(o7, s7, i8) {
    const c7 = t3[o7];
    if (i8 && c7 === void 0) return;
    const f12 = typeof c7;
    if (f12 !== s7 || c7 === null) throw new Error(`param "${o7}" is invalid: expected ${s7}, got ${f12}`);
  }
  Object.entries(e3).forEach(([o7, s7]) => r5(o7, s7, false)), Object.entries(n7).forEach(([o7, s7]) => r5(o7, s7, true));
}
function So(t3) {
  const e3 = /* @__PURE__ */ new WeakMap();
  return (n7, ...r5) => {
    const o7 = e3.get(n7);
    if (o7 !== void 0) return o7;
    const s7 = t3(n7, ...r5);
    return e3.set(n7, s7), s7;
  };
}
var st = BigInt(0);
var nt = BigInt(1);
var qt = BigInt(2);
var Oo = BigInt(3);
var No = BigInt(4);
var Uo = BigInt(5);
var Bf = BigInt(7);
var _o = BigInt(8);
var Af = BigInt(9);
var Ro = BigInt(16);
function ct(t3, e3) {
  const n7 = t3 % e3;
  return n7 >= st ? n7 : e3 + n7;
}
function gt(t3, e3, n7) {
  let r5 = t3;
  for (; e3-- > st; ) r5 *= r5, r5 %= n7;
  return r5;
}
function $o(t3, e3) {
  if (t3 === st) throw new Error("invert: expected non-zero number");
  if (e3 <= st) throw new Error("invert: expected positive modulus, got " + e3);
  let n7 = ct(t3, e3), r5 = e3, o7 = st, s7 = nt;
  for (; n7 !== st; ) {
    const c7 = r5 / n7, f12 = r5 % n7, u7 = o7 - s7 * c7;
    r5 = n7, n7 = f12, o7 = s7, s7 = u7;
  }
  if (r5 !== nt) throw new Error("invert: does not exist");
  return ct(o7, e3);
}
function $n(t3, e3, n7) {
  if (!t3.eql(t3.sqr(e3), n7)) throw new Error("Cannot find square root");
}
function To(t3, e3) {
  const n7 = (t3.ORDER + nt) / No, r5 = t3.pow(e3, n7);
  return $n(t3, r5, e3), r5;
}
function If(t3, e3) {
  const n7 = (t3.ORDER - Uo) / _o, r5 = t3.mul(e3, qt), o7 = t3.pow(r5, n7), s7 = t3.mul(e3, o7), i8 = t3.mul(t3.mul(s7, qt), o7), c7 = t3.mul(s7, t3.sub(i8, t3.ONE));
  return $n(t3, c7, e3), c7;
}
function Sf(t3) {
  const e3 = Ht(t3), n7 = Co(t3), r5 = n7(e3, e3.neg(e3.ONE)), o7 = n7(e3, r5), s7 = n7(e3, e3.neg(r5)), i8 = (t3 + Bf) / Ro;
  return (c7, f12) => {
    let u7 = c7.pow(f12, i8), a8 = c7.mul(u7, r5);
    const l5 = c7.mul(u7, o7), d7 = c7.mul(u7, s7), h6 = c7.eql(c7.sqr(a8), f12), y7 = c7.eql(c7.sqr(l5), f12);
    u7 = c7.cmov(u7, a8, h6), a8 = c7.cmov(d7, l5, y7);
    const m6 = c7.eql(c7.sqr(a8), f12), v8 = c7.cmov(u7, a8, m6);
    return $n(c7, v8, f12), v8;
  };
}
function Co(t3) {
  if (t3 < Oo) throw new Error("sqrt is not defined for small field");
  let e3 = t3 - nt, n7 = 0;
  for (; e3 % qt === st; ) e3 /= qt, n7++;
  let r5 = qt;
  const o7 = Ht(t3);
  for (; Lo(o7, r5) === 1; ) if (r5++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (n7 === 1) return To;
  let s7 = o7.pow(r5, e3);
  const i8 = (e3 + nt) / qt;
  return function(f12, u7) {
    if (f12.is0(u7)) return u7;
    if (Lo(f12, u7) !== 1) throw new Error("Cannot find square root");
    let a8 = n7, l5 = f12.mul(f12.ONE, s7), d7 = f12.pow(u7, e3), h6 = f12.pow(u7, i8);
    for (; !f12.eql(d7, f12.ONE); ) {
      if (f12.is0(d7)) return f12.ZERO;
      let y7 = 1, m6 = f12.sqr(d7);
      for (; !f12.eql(m6, f12.ONE); ) if (y7++, m6 = f12.sqr(m6), y7 === a8) throw new Error("Cannot find square root");
      const v8 = nt << BigInt(a8 - y7 - 1), U6 = f12.pow(l5, v8);
      a8 = y7, l5 = f12.sqr(U6), d7 = f12.mul(d7, l5), h6 = f12.mul(h6, U6);
    }
    return h6;
  };
}
function Of(t3) {
  return t3 % No === Oo ? To : t3 % _o === Uo ? If : t3 % Ro === Af ? Sf(t3) : Co(t3);
}
var Nf = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Uf(t3) {
  const e3 = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, n7 = Nf.reduce((r5, o7) => (r5[o7] = "function", r5), e3);
  return Ke(t3, n7), t3;
}
function _f(t3, e3, n7) {
  if (n7 < st) throw new Error("invalid exponent, negatives unsupported");
  if (n7 === st) return t3.ONE;
  if (n7 === nt) return e3;
  let r5 = t3.ONE, o7 = e3;
  for (; n7 > st; ) n7 & nt && (r5 = t3.mul(r5, o7)), o7 = t3.sqr(o7), n7 >>= nt;
  return r5;
}
function jo(t3, e3, n7 = false) {
  const r5 = new Array(e3.length).fill(n7 ? t3.ZERO : void 0), o7 = e3.reduce((i8, c7, f12) => t3.is0(c7) ? i8 : (r5[f12] = i8, t3.mul(i8, c7)), t3.ONE), s7 = t3.inv(o7);
  return e3.reduceRight((i8, c7, f12) => t3.is0(c7) ? i8 : (r5[f12] = t3.mul(i8, r5[f12]), t3.mul(i8, c7)), s7), r5;
}
function Lo(t3, e3) {
  const n7 = (t3.ORDER - nt) / qt, r5 = t3.pow(e3, n7), o7 = t3.eql(r5, t3.ONE), s7 = t3.eql(r5, t3.ZERO), i8 = t3.eql(r5, t3.neg(t3.ONE));
  if (!o7 && !s7 && !i8) throw new Error("invalid Legendre symbol result");
  return o7 ? 1 : s7 ? 0 : -1;
}
function ko(t3, e3) {
  e3 !== void 0 && mt(e3);
  const n7 = e3 !== void 0 ? e3 : t3.toString(2).length, r5 = Math.ceil(n7 / 8);
  return { nBitLength: n7, nByteLength: r5 };
}
function Ht(t3, e3, n7 = false, r5 = {}) {
  if (t3 <= st) throw new Error("invalid field: expected ORDER > 0, got " + t3);
  let o7, s7, i8 = false, c7;
  if (typeof e3 == "object" && e3 != null) {
    if (r5.sqrt || n7) throw new Error("cannot specify opts in two arguments");
    const d7 = e3;
    d7.BITS && (o7 = d7.BITS), d7.sqrt && (s7 = d7.sqrt), typeof d7.isLE == "boolean" && (n7 = d7.isLE), typeof d7.modFromBytes == "boolean" && (i8 = d7.modFromBytes), c7 = d7.allowedLengths;
  } else typeof e3 == "number" && (o7 = e3), r5.sqrt && (s7 = r5.sqrt);
  const { nBitLength: f12, nByteLength: u7 } = ko(t3, o7);
  if (u7 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a8;
  const l5 = Object.freeze({ ORDER: t3, isLE: n7, BITS: f12, BYTES: u7, MASK: ye(f12), ZERO: st, ONE: nt, allowedLengths: c7, create: (d7) => ct(d7, t3), isValid: (d7) => {
    if (typeof d7 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d7);
    return st <= d7 && d7 < t3;
  }, is0: (d7) => d7 === st, isValidNot0: (d7) => !l5.is0(d7) && l5.isValid(d7), isOdd: (d7) => (d7 & nt) === nt, neg: (d7) => ct(-d7, t3), eql: (d7, h6) => d7 === h6, sqr: (d7) => ct(d7 * d7, t3), add: (d7, h6) => ct(d7 + h6, t3), sub: (d7, h6) => ct(d7 - h6, t3), mul: (d7, h6) => ct(d7 * h6, t3), pow: (d7, h6) => _f(l5, d7, h6), div: (d7, h6) => ct(d7 * $o(h6, t3), t3), sqrN: (d7) => d7 * d7, addN: (d7, h6) => d7 + h6, subN: (d7, h6) => d7 - h6, mulN: (d7, h6) => d7 * h6, inv: (d7) => $o(d7, t3), sqrt: s7 || ((d7) => (a8 || (a8 = Of(t3)), a8(l5, d7))), toBytes: (d7) => n7 ? Un(d7, u7) : Nn(d7, u7), fromBytes: (d7, h6 = true) => {
    if (c7) {
      if (!c7.includes(d7.length) || d7.length > u7) throw new Error("Field.fromBytes: expected " + c7 + " bytes, got " + d7.length);
      const m6 = new Uint8Array(u7);
      m6.set(d7, n7 ? 0 : m6.length - d7.length), d7 = m6;
    }
    if (d7.length !== u7) throw new Error("Field.fromBytes: expected " + u7 + " bytes, got " + d7.length);
    let y7 = n7 ? Me(d7) : Ve(d7);
    if (i8 && (y7 = ct(y7, t3)), !h6 && !l5.isValid(y7)) throw new Error("invalid field element: outside of range 0..ORDER");
    return y7;
  }, invertBatch: (d7) => jo(l5, d7), cmov: (d7, h6, y7) => y7 ? h6 : d7 });
  return Object.freeze(l5);
}
function Po2(t3) {
  if (typeof t3 != "bigint") throw new Error("field order must be bigint");
  const e3 = t3.toString(2).length;
  return Math.ceil(e3 / 8);
}
function Ho(t3) {
  const e3 = Po2(t3);
  return e3 + Math.ceil(e3 / 2);
}
function Rf(t3, e3, n7 = false) {
  const r5 = t3.length, o7 = Po2(e3), s7 = Ho(e3);
  if (r5 < 16 || r5 < s7 || r5 > 1024) throw new Error("expected " + s7 + "-1024 bytes of input, got " + r5);
  const i8 = n7 ? Me(t3) : Ve(t3), c7 = ct(i8, e3 - nt) + nt;
  return n7 ? Un(c7, o7) : Nn(c7, o7);
}
var te = BigInt(0);
var Ft = BigInt(1);
function qe(t3, e3) {
  const n7 = e3.negate();
  return t3 ? n7 : e3;
}
function Tn(t3, e3) {
  const n7 = jo(t3.Fp, e3.map((r5) => r5.Z));
  return e3.map((r5, o7) => t3.fromAffine(r5.toAffine(n7[o7])));
}
function Do(t3, e3) {
  if (!Number.isSafeInteger(t3) || t3 <= 0 || t3 > e3) throw new Error("invalid window size, expected [1.." + e3 + "], got W=" + t3);
}
function Cn(t3, e3) {
  Do(t3, e3);
  const n7 = Math.ceil(e3 / t3) + 1, r5 = 2 ** (t3 - 1), o7 = 2 ** t3, s7 = ye(t3), i8 = BigInt(t3);
  return { windows: n7, windowSize: r5, mask: s7, maxNumber: o7, shiftBy: i8 };
}
function Vo(t3, e3, n7) {
  const { windowSize: r5, mask: o7, maxNumber: s7, shiftBy: i8 } = n7;
  let c7 = Number(t3 & o7), f12 = t3 >> i8;
  c7 > r5 && (c7 -= s7, f12 += Ft);
  const u7 = e3 * r5, a8 = u7 + Math.abs(c7) - 1, l5 = c7 === 0, d7 = c7 < 0, h6 = e3 % 2 !== 0;
  return { nextN: f12, offset: a8, isZero: l5, isNeg: d7, isNegF: h6, offsetF: u7 };
}
function $f(t3, e3) {
  if (!Array.isArray(t3)) throw new Error("array expected");
  t3.forEach((n7, r5) => {
    if (!(n7 instanceof e3)) throw new Error("invalid point at index " + r5);
  });
}
function Tf(t3, e3) {
  if (!Array.isArray(t3)) throw new Error("array of scalars expected");
  t3.forEach((n7, r5) => {
    if (!e3.isValid(n7)) throw new Error("invalid scalar at index " + r5);
  });
}
var jn = /* @__PURE__ */ new WeakMap();
var Mo = /* @__PURE__ */ new WeakMap();
function Ln(t3) {
  return Mo.get(t3) || 1;
}
function Ko(t3) {
  if (t3 !== te) throw new Error("invalid wNAF");
}
var Cf = class {
  constructor(e3, n7) {
    this.BASE = e3.BASE, this.ZERO = e3.ZERO, this.Fn = e3.Fn, this.bits = n7;
  }
  _unsafeLadder(e3, n7, r5 = this.ZERO) {
    let o7 = e3;
    for (; n7 > te; ) n7 & Ft && (r5 = r5.add(o7)), o7 = o7.double(), n7 >>= Ft;
    return r5;
  }
  precomputeWindow(e3, n7) {
    const { windows: r5, windowSize: o7 } = Cn(n7, this.bits), s7 = [];
    let i8 = e3, c7 = i8;
    for (let f12 = 0; f12 < r5; f12++) {
      c7 = i8, s7.push(c7);
      for (let u7 = 1; u7 < o7; u7++) c7 = c7.add(i8), s7.push(c7);
      i8 = c7.double();
    }
    return s7;
  }
  wNAF(e3, n7, r5) {
    if (!this.Fn.isValid(r5)) throw new Error("invalid scalar");
    let o7 = this.ZERO, s7 = this.BASE;
    const i8 = Cn(e3, this.bits);
    for (let c7 = 0; c7 < i8.windows; c7++) {
      const { nextN: f12, offset: u7, isZero: a8, isNeg: l5, isNegF: d7, offsetF: h6 } = Vo(r5, c7, i8);
      r5 = f12, a8 ? s7 = s7.add(qe(d7, n7[h6])) : o7 = o7.add(qe(l5, n7[u7]));
    }
    return Ko(r5), { p: o7, f: s7 };
  }
  wNAFUnsafe(e3, n7, r5, o7 = this.ZERO) {
    const s7 = Cn(e3, this.bits);
    for (let i8 = 0; i8 < s7.windows && r5 !== te; i8++) {
      const { nextN: c7, offset: f12, isZero: u7, isNeg: a8 } = Vo(r5, i8, s7);
      if (r5 = c7, !u7) {
        const l5 = n7[f12];
        o7 = o7.add(a8 ? l5.negate() : l5);
      }
    }
    return Ko(r5), o7;
  }
  getPrecomputes(e3, n7, r5) {
    let o7 = jn.get(n7);
    return o7 || (o7 = this.precomputeWindow(n7, e3), e3 !== 1 && (typeof r5 == "function" && (o7 = r5(o7)), jn.set(n7, o7))), o7;
  }
  cached(e3, n7, r5) {
    const o7 = Ln(e3);
    return this.wNAF(o7, this.getPrecomputes(o7, e3, r5), n7);
  }
  unsafe(e3, n7, r5, o7) {
    const s7 = Ln(e3);
    return s7 === 1 ? this._unsafeLadder(e3, n7, o7) : this.wNAFUnsafe(s7, this.getPrecomputes(s7, e3, r5), n7, o7);
  }
  createCache(e3, n7) {
    Do(n7, this.bits), Mo.set(e3, n7), jn.delete(e3);
  }
  hasCache(e3) {
    return Ln(e3) !== 1;
  }
};
function jf(t3, e3, n7, r5) {
  let o7 = e3, s7 = t3.ZERO, i8 = t3.ZERO;
  for (; n7 > te || r5 > te; ) n7 & Ft && (s7 = s7.add(o7)), r5 & Ft && (i8 = i8.add(o7)), o7 = o7.double(), n7 >>= Ft, r5 >>= Ft;
  return { p1: s7, p2: i8 };
}
function Lf(t3, e3, n7, r5) {
  $f(n7, t3), Tf(r5, e3);
  const o7 = n7.length, s7 = r5.length;
  if (o7 !== s7) throw new Error("arrays of points and scalars must have equal length");
  const i8 = t3.ZERO, c7 = Io(BigInt(o7));
  let f12 = 1;
  c7 > 12 ? f12 = c7 - 3 : c7 > 4 ? f12 = c7 - 2 : c7 > 0 && (f12 = 2);
  const u7 = ye(f12), a8 = new Array(Number(u7) + 1).fill(i8), l5 = Math.floor((e3.BITS - 1) / f12) * f12;
  let d7 = i8;
  for (let h6 = l5; h6 >= 0; h6 -= f12) {
    a8.fill(i8);
    for (let m6 = 0; m6 < s7; m6++) {
      const v8 = r5[m6], U6 = Number(v8 >> BigInt(h6) & u7);
      a8[U6] = a8[U6].add(n7[m6]);
    }
    let y7 = i8;
    for (let m6 = a8.length - 1, v8 = i8; m6 > 0; m6--) v8 = v8.add(a8[m6]), y7 = y7.add(v8);
    if (d7 = d7.add(y7), h6 !== 0) for (let m6 = 0; m6 < f12; m6++) d7 = d7.double();
  }
  return d7;
}
function qo(t3, e3, n7) {
  if (e3) {
    if (e3.ORDER !== t3) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Uf(e3), e3;
  } else return Ht(t3, { isLE: n7 });
}
function kf(t3, e3, n7 = {}, r5) {
  if (r5 === void 0 && (r5 = t3 === "edwards"), !e3 || typeof e3 != "object") throw new Error(`expected valid ${t3} CURVE object`);
  for (const f12 of ["p", "n", "h"]) {
    const u7 = e3[f12];
    if (!(typeof u7 == "bigint" && u7 > te)) throw new Error(`CURVE.${f12} must be positive bigint`);
  }
  const o7 = qo(e3.p, n7.Fp, r5), s7 = qo(e3.n, n7.Fn, r5), c7 = ["Gx", "Gy", "a", t3 === "weierstrass" ? "b" : "d"];
  for (const f12 of c7) if (!o7.isValid(e3[f12])) throw new Error(`CURVE.${f12} must be valid field element of CURVE.Fp`);
  return e3 = Object.freeze(Object.assign({}, e3)), { CURVE: e3, Fp: o7, Fn: s7 };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), kr("HashToScalar-");
var me = BigInt(0);
var ee = BigInt(1);
var Fe = BigInt(2);
function Pf(t3) {
  return Ke(t3, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t3 });
}
function Hf(t3) {
  const e3 = Pf(t3), { P: n7, type: r5, adjustScalarBytes: o7, powPminus2: s7, randomBytes: i8 } = e3, c7 = r5 === "x25519";
  if (!c7 && r5 !== "x448") throw new Error("invalid type");
  const f12 = i8 || Mt, u7 = c7 ? 255 : 448, a8 = c7 ? 32 : 56, l5 = BigInt(c7 ? 9 : 5), d7 = BigInt(c7 ? 121665 : 39081), h6 = c7 ? Fe ** BigInt(254) : Fe ** BigInt(447), y7 = c7 ? BigInt(8) * Fe ** BigInt(251) - ee : BigInt(4) * Fe ** BigInt(445) - ee, m6 = h6 + y7 + ee, v8 = (p7) => ct(p7, n7), U6 = F6(l5);
  function F6(p7) {
    return Un(v8(p7), a8);
  }
  function R8(p7) {
    const b9 = tt("u coordinate", p7, a8);
    return c7 && (b9[31] &= 127), v8(Me(b9));
  }
  function Z4(p7) {
    return Me(o7(tt("scalar", p7, a8)));
  }
  function H4(p7, b9) {
    const g3 = k5(R8(b9), Z4(p7));
    if (g3 === me) throw new Error("invalid private or public key received");
    return F6(g3);
  }
  function j8(p7) {
    return H4(p7, U6);
  }
  function L5(p7, b9, g3) {
    const x6 = v8(p7 * (b9 - g3));
    return b9 = v8(b9 - x6), g3 = v8(g3 + x6), { x_2: b9, x_3: g3 };
  }
  function k5(p7, b9) {
    Rn("u", p7, me, n7), Rn("scalar", b9, h6, m6);
    const g3 = b9, x6 = p7;
    let E8 = ee, A8 = me, w5 = p7, B7 = ee, I5 = me;
    for (let D7 = BigInt(u7 - 1); D7 >= me; D7--) {
      const P8 = g3 >> D7 & ee;
      I5 ^= P8, { x_2: E8, x_3: w5 } = L5(I5, E8, w5), { x_2: A8, x_3: B7 } = L5(I5, A8, B7), I5 = P8;
      const $8 = E8 + A8, V5 = v8($8 * $8), q4 = E8 - A8, G7 = v8(q4 * q4), M7 = V5 - G7, Y4 = w5 + B7, Yt4 = w5 - B7, ce3 = v8(Yt4 * $8), fe4 = v8(Y4 * q4), Qn2 = ce3 + fe4, tr = ce3 - fe4;
      w5 = v8(Qn2 * Qn2), B7 = v8(x6 * v8(tr * tr)), E8 = v8(V5 * G7), A8 = v8(M7 * (V5 + v8(d7 * M7)));
    }
    ({ x_2: E8, x_3: w5 } = L5(I5, E8, w5)), { x_2: A8, x_3: B7 } = L5(I5, A8, B7);
    const N6 = s7(A8);
    return v8(E8 * N6);
  }
  const O5 = { secretKey: a8, publicKey: a8, seed: a8 }, T5 = (p7 = f12(a8)) => (ht(p7, O5.seed), p7);
  function C9(p7) {
    const b9 = T5(p7);
    return { secretKey: b9, publicKey: j8(b9) };
  }
  return { keygen: C9, getSharedSecret: (p7, b9) => H4(p7, b9), getPublicKey: (p7) => j8(p7), scalarMult: H4, scalarMultBase: j8, utils: { randomSecretKey: T5, randomPrivateKey: T5 }, GuBytes: U6.slice(), lengths: O5 };
}
var Df = BigInt(1);
var Fo = BigInt(2);
var Vf = BigInt(3);
var Mf = BigInt(5);
var Kf = BigInt(8);
var Zo = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed");
var qf = { p: Zo, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), h: Kf, a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function Ff(t3) {
  const e3 = BigInt(10), n7 = BigInt(20), r5 = BigInt(40), o7 = BigInt(80), s7 = Zo, c7 = t3 * t3 % s7 * t3 % s7, f12 = gt(c7, Fo, s7) * c7 % s7, u7 = gt(f12, Df, s7) * t3 % s7, a8 = gt(u7, Mf, s7) * u7 % s7, l5 = gt(a8, e3, s7) * a8 % s7, d7 = gt(l5, n7, s7) * l5 % s7, h6 = gt(d7, r5, s7) * d7 % s7, y7 = gt(h6, o7, s7) * h6 % s7, m6 = gt(y7, o7, s7) * h6 % s7, v8 = gt(m6, e3, s7) * a8 % s7;
  return { pow_p_5_8: gt(v8, Fo, s7) * t3 % s7, b2: c7 };
}
function Zf(t3) {
  return t3[0] &= 248, t3[31] &= 127, t3[31] |= 64, t3;
}
var Gf = Ht(qf.p, { isLE: true });
var kn = (() => {
  const t3 = Gf.ORDER;
  return Hf({ P: t3, type: "x25519", powPminus2: (e3) => {
    const { pow_p_5_8: n7, b2: r5 } = Ff(e3);
    return ct(gt(n7, Vf, t3) * r5, t3);
  }, adjustScalarBytes: Zf });
})();
var Go = (t3, e3) => (t3 + (t3 >= 0 ? e3 : -e3) / zo) / e3;
function zf(t3, e3, n7) {
  const [[r5, o7], [s7, i8]] = e3, c7 = Go(i8 * t3, n7), f12 = Go(-o7 * t3, n7);
  let u7 = t3 - c7 * r5 - f12 * s7, a8 = -c7 * o7 - f12 * i8;
  const l5 = u7 < Et, d7 = a8 < Et;
  l5 && (u7 = -u7), d7 && (a8 = -a8);
  const h6 = ye(Math.ceil(Io(n7) / 2)) + ne;
  if (u7 < Et || u7 >= h6 || a8 < Et || a8 >= h6) throw new Error("splitScalar (endomorphism): failed, k=" + t3);
  return { k1neg: l5, k1: u7, k2neg: d7, k2: a8 };
}
function Pn(t3) {
  if (!["compact", "recovered", "der"].includes(t3)) throw new Error('Signature format must be "compact", "recovered", or "der"');
  return t3;
}
function Hn(t3, e3) {
  const n7 = {};
  for (let r5 of Object.keys(e3)) n7[r5] = t3[r5] === void 0 ? e3[r5] : t3[r5];
  return He(n7.lowS, "lowS"), He(n7.prehash, "prehash"), n7.format !== void 0 && Pn(n7.format), n7;
}
var Yf = class extends Error {
  constructor(e3 = "") {
    super(e3);
  }
};
var xt = { Err: Yf, _tlv: { encode: (t3, e3) => {
  const { Err: n7 } = xt;
  if (t3 < 0 || t3 > 256) throw new n7("tlv.encode: wrong tag");
  if (e3.length & 1) throw new n7("tlv.encode: unpadded data");
  const r5 = e3.length / 2, o7 = De(r5);
  if (o7.length / 2 & 128) throw new n7("tlv.encode: long form length too big");
  const s7 = r5 > 127 ? De(o7.length / 2 | 128) : "";
  return De(t3) + s7 + o7 + e3;
}, decode(t3, e3) {
  const { Err: n7 } = xt;
  let r5 = 0;
  if (t3 < 0 || t3 > 256) throw new n7("tlv.encode: wrong tag");
  if (e3.length < 2 || e3[r5++] !== t3) throw new n7("tlv.decode: wrong tlv");
  const o7 = e3[r5++], s7 = !!(o7 & 128);
  let i8 = 0;
  if (!s7) i8 = o7;
  else {
    const f12 = o7 & 127;
    if (!f12) throw new n7("tlv.decode(long): indefinite length not supported");
    if (f12 > 4) throw new n7("tlv.decode(long): byte length is too big");
    const u7 = e3.subarray(r5, r5 + f12);
    if (u7.length !== f12) throw new n7("tlv.decode: length bytes not complete");
    if (u7[0] === 0) throw new n7("tlv.decode(long): zero leftmost byte");
    for (const a8 of u7) i8 = i8 << 8 | a8;
    if (r5 += f12, i8 < 128) throw new n7("tlv.decode(long): not minimal encoding");
  }
  const c7 = e3.subarray(r5, r5 + i8);
  if (c7.length !== i8) throw new n7("tlv.decode: wrong value length");
  return { v: c7, l: e3.subarray(r5 + i8) };
} }, _int: { encode(t3) {
  const { Err: e3 } = xt;
  if (t3 < Et) throw new e3("integer: negative integers are not allowed");
  let n7 = De(t3);
  if (Number.parseInt(n7[0], 16) & 8 && (n7 = "00" + n7), n7.length & 1) throw new e3("unexpected DER parsing assertion: unpadded hex");
  return n7;
}, decode(t3) {
  const { Err: e3 } = xt;
  if (t3[0] & 128) throw new e3("invalid signature integer: negative");
  if (t3[0] === 0 && !(t3[1] & 128)) throw new e3("invalid signature integer: unnecessary leading zero");
  return Ve(t3);
} }, toSig(t3) {
  const { Err: e3, _int: n7, _tlv: r5 } = xt, o7 = tt("signature", t3), { v: s7, l: i8 } = r5.decode(48, o7);
  if (i8.length) throw new e3("invalid signature: left bytes after parsing");
  const { v: c7, l: f12 } = r5.decode(2, s7), { v: u7, l: a8 } = r5.decode(2, f12);
  if (a8.length) throw new e3("invalid signature: left bytes after parsing");
  return { r: n7.decode(c7), s: n7.decode(u7) };
}, hexFromSig(t3) {
  const { _tlv: e3, _int: n7 } = xt, r5 = e3.encode(2, n7.encode(t3.r)), o7 = e3.encode(2, n7.encode(t3.s)), s7 = r5 + o7;
  return e3.encode(48, s7);
} };
var Et = BigInt(0);
var ne = BigInt(1);
var zo = BigInt(2);
var Ze = BigInt(3);
var Wf = BigInt(4);
function re(t3, e3) {
  const { BYTES: n7 } = t3;
  let r5;
  if (typeof e3 == "bigint") r5 = e3;
  else {
    let o7 = tt("private key", e3);
    try {
      r5 = t3.fromBytes(o7);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${n7}, got ${typeof e3}`);
    }
  }
  if (!t3.isValidNot0(r5)) throw new Error("invalid private key: out of range [1..N-1]");
  return r5;
}
function Xf(t3, e3 = {}) {
  const n7 = kf("weierstrass", t3, e3), { Fp: r5, Fn: o7 } = n7;
  let s7 = n7.CURVE;
  const { h: i8, n: c7 } = s7;
  Ke(e3, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: f12 } = e3;
  if (f12 && (!r5.is0(s7.a) || typeof f12.beta != "bigint" || !Array.isArray(f12.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const u7 = Wo(r5, o7);
  function a8() {
    if (!r5.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function l5(_7, p7, b9) {
    const { x: g3, y: x6 } = p7.toAffine(), E8 = r5.toBytes(g3);
    if (He(b9, "isCompressed"), b9) {
      a8();
      const A8 = !r5.isOdd(x6);
      return _t(Yo(A8), E8);
    } else return _t(Uint8Array.of(4), E8, r5.toBytes(x6));
  }
  function d7(_7) {
    Kt(_7, void 0, "Point");
    const { publicKey: p7, publicKeyUncompressed: b9 } = u7, g3 = _7.length, x6 = _7[0], E8 = _7.subarray(1);
    if (g3 === p7 && (x6 === 2 || x6 === 3)) {
      const A8 = r5.fromBytes(E8);
      if (!r5.isValid(A8)) throw new Error("bad point: is not on curve, wrong x");
      const w5 = m6(A8);
      let B7;
      try {
        B7 = r5.sqrt(w5);
      } catch (D7) {
        const P8 = D7 instanceof Error ? ": " + D7.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + P8);
      }
      a8();
      const I5 = r5.isOdd(B7);
      return (x6 & 1) === 1 !== I5 && (B7 = r5.neg(B7)), { x: A8, y: B7 };
    } else if (g3 === b9 && x6 === 4) {
      const A8 = r5.BYTES, w5 = r5.fromBytes(E8.subarray(0, A8)), B7 = r5.fromBytes(E8.subarray(A8, A8 * 2));
      if (!v8(w5, B7)) throw new Error("bad point: is not on curve");
      return { x: w5, y: B7 };
    } else throw new Error(`bad point: got length ${g3}, expected compressed=${p7} or uncompressed=${b9}`);
  }
  const h6 = e3.toBytes || l5, y7 = e3.fromBytes || d7;
  function m6(_7) {
    const p7 = r5.sqr(_7), b9 = r5.mul(p7, _7);
    return r5.add(r5.add(b9, r5.mul(_7, s7.a)), s7.b);
  }
  function v8(_7, p7) {
    const b9 = r5.sqr(p7), g3 = m6(_7);
    return r5.eql(b9, g3);
  }
  if (!v8(s7.Gx, s7.Gy)) throw new Error("bad curve params: generator point");
  const U6 = r5.mul(r5.pow(s7.a, Ze), Wf), F6 = r5.mul(r5.sqr(s7.b), BigInt(27));
  if (r5.is0(r5.add(U6, F6))) throw new Error("bad curve params: a or b");
  function R8(_7, p7, b9 = false) {
    if (!r5.isValid(p7) || b9 && r5.is0(p7)) throw new Error(`bad point coordinate ${_7}`);
    return p7;
  }
  function Z4(_7) {
    if (!(_7 instanceof O5)) throw new Error("ProjectivePoint expected");
  }
  function H4(_7) {
    if (!f12 || !f12.basises) throw new Error("no endo");
    return zf(_7, f12.basises, o7.ORDER);
  }
  const j8 = So((_7, p7) => {
    const { X: b9, Y: g3, Z: x6 } = _7;
    if (r5.eql(x6, r5.ONE)) return { x: b9, y: g3 };
    const E8 = _7.is0();
    p7 == null && (p7 = E8 ? r5.ONE : r5.inv(x6));
    const A8 = r5.mul(b9, p7), w5 = r5.mul(g3, p7), B7 = r5.mul(x6, p7);
    if (E8) return { x: r5.ZERO, y: r5.ZERO };
    if (!r5.eql(B7, r5.ONE)) throw new Error("invZ was invalid");
    return { x: A8, y: w5 };
  }), L5 = So((_7) => {
    if (_7.is0()) {
      if (e3.allowInfinityPoint && !r5.is0(_7.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: p7, y: b9 } = _7.toAffine();
    if (!r5.isValid(p7) || !r5.isValid(b9)) throw new Error("bad point: x or y not field elements");
    if (!v8(p7, b9)) throw new Error("bad point: equation left != right");
    if (!_7.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function k5(_7, p7, b9, g3, x6) {
    return b9 = new O5(r5.mul(b9.X, _7), b9.Y, b9.Z), p7 = qe(g3, p7), b9 = qe(x6, b9), p7.add(b9);
  }
  class O5 {
    constructor(p7, b9, g3) {
      this.X = R8("x", p7), this.Y = R8("y", b9, true), this.Z = R8("z", g3), Object.freeze(this);
    }
    static CURVE() {
      return s7;
    }
    static fromAffine(p7) {
      const { x: b9, y: g3 } = p7 || {};
      if (!p7 || !r5.isValid(b9) || !r5.isValid(g3)) throw new Error("invalid affine point");
      if (p7 instanceof O5) throw new Error("projective point not allowed");
      return r5.is0(b9) && r5.is0(g3) ? O5.ZERO : new O5(b9, g3, r5.ONE);
    }
    static fromBytes(p7) {
      const b9 = O5.fromAffine(y7(Kt(p7, void 0, "point")));
      return b9.assertValidity(), b9;
    }
    static fromHex(p7) {
      return O5.fromBytes(tt("pointHex", p7));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(p7 = 8, b9 = true) {
      return C9.createCache(this, p7), b9 || this.multiply(Ze), this;
    }
    assertValidity() {
      L5(this);
    }
    hasEvenY() {
      const { y: p7 } = this.toAffine();
      if (!r5.isOdd) throw new Error("Field doesn't support isOdd");
      return !r5.isOdd(p7);
    }
    equals(p7) {
      Z4(p7);
      const { X: b9, Y: g3, Z: x6 } = this, { X: E8, Y: A8, Z: w5 } = p7, B7 = r5.eql(r5.mul(b9, w5), r5.mul(E8, x6)), I5 = r5.eql(r5.mul(g3, w5), r5.mul(A8, x6));
      return B7 && I5;
    }
    negate() {
      return new O5(this.X, r5.neg(this.Y), this.Z);
    }
    double() {
      const { a: p7, b: b9 } = s7, g3 = r5.mul(b9, Ze), { X: x6, Y: E8, Z: A8 } = this;
      let w5 = r5.ZERO, B7 = r5.ZERO, I5 = r5.ZERO, N6 = r5.mul(x6, x6), D7 = r5.mul(E8, E8), P8 = r5.mul(A8, A8), $8 = r5.mul(x6, E8);
      return $8 = r5.add($8, $8), I5 = r5.mul(x6, A8), I5 = r5.add(I5, I5), w5 = r5.mul(p7, I5), B7 = r5.mul(g3, P8), B7 = r5.add(w5, B7), w5 = r5.sub(D7, B7), B7 = r5.add(D7, B7), B7 = r5.mul(w5, B7), w5 = r5.mul($8, w5), I5 = r5.mul(g3, I5), P8 = r5.mul(p7, P8), $8 = r5.sub(N6, P8), $8 = r5.mul(p7, $8), $8 = r5.add($8, I5), I5 = r5.add(N6, N6), N6 = r5.add(I5, N6), N6 = r5.add(N6, P8), N6 = r5.mul(N6, $8), B7 = r5.add(B7, N6), P8 = r5.mul(E8, A8), P8 = r5.add(P8, P8), N6 = r5.mul(P8, $8), w5 = r5.sub(w5, N6), I5 = r5.mul(P8, D7), I5 = r5.add(I5, I5), I5 = r5.add(I5, I5), new O5(w5, B7, I5);
    }
    add(p7) {
      Z4(p7);
      const { X: b9, Y: g3, Z: x6 } = this, { X: E8, Y: A8, Z: w5 } = p7;
      let B7 = r5.ZERO, I5 = r5.ZERO, N6 = r5.ZERO;
      const D7 = s7.a, P8 = r5.mul(s7.b, Ze);
      let $8 = r5.mul(b9, E8), V5 = r5.mul(g3, A8), q4 = r5.mul(x6, w5), G7 = r5.add(b9, g3), M7 = r5.add(E8, A8);
      G7 = r5.mul(G7, M7), M7 = r5.add($8, V5), G7 = r5.sub(G7, M7), M7 = r5.add(b9, x6);
      let Y4 = r5.add(E8, w5);
      return M7 = r5.mul(M7, Y4), Y4 = r5.add($8, q4), M7 = r5.sub(M7, Y4), Y4 = r5.add(g3, x6), B7 = r5.add(A8, w5), Y4 = r5.mul(Y4, B7), B7 = r5.add(V5, q4), Y4 = r5.sub(Y4, B7), N6 = r5.mul(D7, M7), B7 = r5.mul(P8, q4), N6 = r5.add(B7, N6), B7 = r5.sub(V5, N6), N6 = r5.add(V5, N6), I5 = r5.mul(B7, N6), V5 = r5.add($8, $8), V5 = r5.add(V5, $8), q4 = r5.mul(D7, q4), M7 = r5.mul(P8, M7), V5 = r5.add(V5, q4), q4 = r5.sub($8, q4), q4 = r5.mul(D7, q4), M7 = r5.add(M7, q4), $8 = r5.mul(V5, M7), I5 = r5.add(I5, $8), $8 = r5.mul(Y4, M7), B7 = r5.mul(G7, B7), B7 = r5.sub(B7, $8), $8 = r5.mul(G7, V5), N6 = r5.mul(Y4, N6), N6 = r5.add(N6, $8), new O5(B7, I5, N6);
    }
    subtract(p7) {
      return this.add(p7.negate());
    }
    is0() {
      return this.equals(O5.ZERO);
    }
    multiply(p7) {
      const { endo: b9 } = e3;
      if (!o7.isValidNot0(p7)) throw new Error("invalid scalar: out of range");
      let g3, x6;
      const E8 = (A8) => C9.cached(this, A8, (w5) => Tn(O5, w5));
      if (b9) {
        const { k1neg: A8, k1: w5, k2neg: B7, k2: I5 } = H4(p7), { p: N6, f: D7 } = E8(w5), { p: P8, f: $8 } = E8(I5);
        x6 = D7.add($8), g3 = k5(b9.beta, N6, P8, A8, B7);
      } else {
        const { p: A8, f: w5 } = E8(p7);
        g3 = A8, x6 = w5;
      }
      return Tn(O5, [g3, x6])[0];
    }
    multiplyUnsafe(p7) {
      const { endo: b9 } = e3, g3 = this;
      if (!o7.isValid(p7)) throw new Error("invalid scalar: out of range");
      if (p7 === Et || g3.is0()) return O5.ZERO;
      if (p7 === ne) return g3;
      if (C9.hasCache(this)) return this.multiply(p7);
      if (b9) {
        const { k1neg: x6, k1: E8, k2neg: A8, k2: w5 } = H4(p7), { p1: B7, p2: I5 } = jf(O5, g3, E8, w5);
        return k5(b9.beta, B7, I5, x6, A8);
      } else return C9.unsafe(g3, p7);
    }
    multiplyAndAddUnsafe(p7, b9, g3) {
      const x6 = this.multiplyUnsafe(b9).add(p7.multiplyUnsafe(g3));
      return x6.is0() ? void 0 : x6;
    }
    toAffine(p7) {
      return j8(this, p7);
    }
    isTorsionFree() {
      const { isTorsionFree: p7 } = e3;
      return i8 === ne ? true : p7 ? p7(O5, this) : C9.unsafe(this, c7).is0();
    }
    clearCofactor() {
      const { clearCofactor: p7 } = e3;
      return i8 === ne ? this : p7 ? p7(O5, this) : this.multiplyUnsafe(i8);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i8).is0();
    }
    toBytes(p7 = true) {
      return He(p7, "isCompressed"), this.assertValidity(), h6(O5, this, p7);
    }
    toHex(p7 = true) {
      return Jt(this.toBytes(p7));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(p7 = true) {
      return this.toBytes(p7);
    }
    _setWindowSize(p7) {
      this.precompute(p7);
    }
    static normalizeZ(p7) {
      return Tn(O5, p7);
    }
    static msm(p7, b9) {
      return Lf(O5, o7, p7, b9);
    }
    static fromPrivateKey(p7) {
      return O5.BASE.multiply(re(o7, p7));
    }
  }
  O5.BASE = new O5(s7.Gx, s7.Gy, r5.ONE), O5.ZERO = new O5(r5.ZERO, r5.ONE, r5.ZERO), O5.Fp = r5, O5.Fn = o7;
  const T5 = o7.BITS, C9 = new Cf(O5, e3.endo ? Math.ceil(T5 / 2) : T5);
  return O5.BASE.precompute(8), O5;
}
function Yo(t3) {
  return Uint8Array.of(t3 ? 2 : 3);
}
function Wo(t3, e3) {
  return { secretKey: e3.BYTES, publicKey: 1 + t3.BYTES, publicKeyUncompressed: 1 + 2 * t3.BYTES, publicKeyHasPrefix: true, signature: 2 * e3.BYTES };
}
function Jf(t3, e3 = {}) {
  const { Fn: n7 } = t3, r5 = e3.randomBytes || Mt, o7 = Object.assign(Wo(t3.Fp, n7), { seed: Ho(n7.ORDER) });
  function s7(h6) {
    try {
      return !!re(n7, h6);
    } catch {
      return false;
    }
  }
  function i8(h6, y7) {
    const { publicKey: m6, publicKeyUncompressed: v8 } = o7;
    try {
      const U6 = h6.length;
      return y7 === true && U6 !== m6 || y7 === false && U6 !== v8 ? false : !!t3.fromBytes(h6);
    } catch {
      return false;
    }
  }
  function c7(h6 = r5(o7.seed)) {
    return Rf(Kt(h6, o7.seed, "seed"), n7.ORDER);
  }
  function f12(h6, y7 = true) {
    return t3.BASE.multiply(re(n7, h6)).toBytes(y7);
  }
  function u7(h6) {
    const y7 = c7(h6);
    return { secretKey: y7, publicKey: f12(y7) };
  }
  function a8(h6) {
    if (typeof h6 == "bigint") return false;
    if (h6 instanceof t3) return true;
    const { secretKey: y7, publicKey: m6, publicKeyUncompressed: v8 } = o7;
    if (n7.allowedLengths || y7 === m6) return;
    const U6 = tt("key", h6).length;
    return U6 === m6 || U6 === v8;
  }
  function l5(h6, y7, m6 = true) {
    if (a8(h6) === true) throw new Error("first arg must be private key");
    if (a8(y7) === false) throw new Error("second arg must be public key");
    const v8 = re(n7, h6);
    return t3.fromHex(y7).multiply(v8).toBytes(m6);
  }
  return Object.freeze({ getPublicKey: f12, getSharedSecret: l5, keygen: u7, Point: t3, utils: { isValidSecretKey: s7, isValidPublicKey: i8, randomSecretKey: c7, isValidPrivateKey: s7, randomPrivateKey: c7, normPrivateKeyToScalar: (h6) => re(n7, h6), precompute(h6 = 8, y7 = t3.BASE) {
    return y7.precompute(h6, false);
  } }, lengths: o7 });
}
function Qf(t3, e3, n7 = {}) {
  Ue(e3), Ke(n7, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const r5 = n7.randomBytes || Mt, o7 = n7.hmac || ((b9, ...g3) => ke(e3, b9, _t(...g3))), { Fp: s7, Fn: i8 } = t3, { ORDER: c7, BITS: f12 } = i8, { keygen: u7, getPublicKey: a8, getSharedSecret: l5, utils: d7, lengths: h6 } = Jf(t3, n7), y7 = { prehash: false, lowS: typeof n7.lowS == "boolean" ? n7.lowS : false, format: void 0, extraEntropy: false }, m6 = "compact";
  function v8(b9) {
    const g3 = c7 >> ne;
    return b9 > g3;
  }
  function U6(b9, g3) {
    if (!i8.isValidNot0(g3)) throw new Error(`invalid signature ${b9}: out of range 1..Point.Fn.ORDER`);
    return g3;
  }
  function F6(b9, g3) {
    Pn(g3);
    const x6 = h6.signature, E8 = g3 === "compact" ? x6 : g3 === "recovered" ? x6 + 1 : void 0;
    return Kt(b9, E8, `${g3} signature`);
  }
  class R8 {
    constructor(g3, x6, E8) {
      this.r = U6("r", g3), this.s = U6("s", x6), E8 != null && (this.recovery = E8), Object.freeze(this);
    }
    static fromBytes(g3, x6 = m6) {
      F6(g3, x6);
      let E8;
      if (x6 === "der") {
        const { r: I5, s: N6 } = xt.toSig(Kt(g3));
        return new R8(I5, N6);
      }
      x6 === "recovered" && (E8 = g3[0], x6 = "compact", g3 = g3.subarray(1));
      const A8 = i8.BYTES, w5 = g3.subarray(0, A8), B7 = g3.subarray(A8, A8 * 2);
      return new R8(i8.fromBytes(w5), i8.fromBytes(B7), E8);
    }
    static fromHex(g3, x6) {
      return this.fromBytes(_e(g3), x6);
    }
    addRecoveryBit(g3) {
      return new R8(this.r, this.s, g3);
    }
    recoverPublicKey(g3) {
      const x6 = s7.ORDER, { r: E8, s: A8, recovery: w5 } = this;
      if (w5 == null || ![0, 1, 2, 3].includes(w5)) throw new Error("recovery id invalid");
      if (c7 * zo < x6 && w5 > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const I5 = w5 === 2 || w5 === 3 ? E8 + c7 : E8;
      if (!s7.isValid(I5)) throw new Error("recovery id 2 or 3 invalid");
      const N6 = s7.toBytes(I5), D7 = t3.fromBytes(_t(Yo((w5 & 1) === 0), N6)), P8 = i8.inv(I5), $8 = H4(tt("msgHash", g3)), V5 = i8.create(-$8 * P8), q4 = i8.create(A8 * P8), G7 = t3.BASE.multiplyUnsafe(V5).add(D7.multiplyUnsafe(q4));
      if (G7.is0()) throw new Error("point at infinify");
      return G7.assertValidity(), G7;
    }
    hasHighS() {
      return v8(this.s);
    }
    toBytes(g3 = m6) {
      if (Pn(g3), g3 === "der") return _e(xt.hexFromSig(this));
      const x6 = i8.toBytes(this.r), E8 = i8.toBytes(this.s);
      if (g3 === "recovered") {
        if (this.recovery == null) throw new Error("recovery bit must be present");
        return _t(Uint8Array.of(this.recovery), x6, E8);
      }
      return _t(x6, E8);
    }
    toHex(g3) {
      return Jt(this.toBytes(g3));
    }
    assertValidity() {
    }
    static fromCompact(g3) {
      return R8.fromBytes(tt("sig", g3), "compact");
    }
    static fromDER(g3) {
      return R8.fromBytes(tt("sig", g3), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new R8(this.r, i8.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return Jt(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return Jt(this.toBytes("compact"));
    }
  }
  const Z4 = n7.bits2int || function(g3) {
    if (g3.length > 8192) throw new Error("input is too large");
    const x6 = Ve(g3), E8 = g3.length * 8 - f12;
    return E8 > 0 ? x6 >> BigInt(E8) : x6;
  }, H4 = n7.bits2int_modN || function(g3) {
    return i8.create(Z4(g3));
  }, j8 = ye(f12);
  function L5(b9) {
    return Rn("num < 2^" + f12, b9, Et, j8), i8.toBytes(b9);
  }
  function k5(b9, g3) {
    return Kt(b9, void 0, "message"), g3 ? Kt(e3(b9), void 0, "prehashed message") : b9;
  }
  function O5(b9, g3, x6) {
    if (["recovered", "canonical"].some((V5) => V5 in x6)) throw new Error("sign() legacy options not supported");
    const { lowS: E8, prehash: A8, extraEntropy: w5 } = Hn(x6, y7);
    b9 = k5(b9, A8);
    const B7 = H4(b9), I5 = re(i8, g3), N6 = [L5(I5), L5(B7)];
    if (w5 != null && w5 !== false) {
      const V5 = w5 === true ? r5(h6.secretKey) : w5;
      N6.push(tt("extraEntropy", V5));
    }
    const D7 = _t(...N6), P8 = B7;
    function $8(V5) {
      const q4 = Z4(V5);
      if (!i8.isValidNot0(q4)) return;
      const G7 = i8.inv(q4), M7 = t3.BASE.multiply(q4).toAffine(), Y4 = i8.create(M7.x);
      if (Y4 === Et) return;
      const Yt4 = i8.create(G7 * i8.create(P8 + Y4 * I5));
      if (Yt4 === Et) return;
      let ce3 = (M7.x === Y4 ? 0 : 2) | Number(M7.y & ne), fe4 = Yt4;
      return E8 && v8(Yt4) && (fe4 = i8.neg(Yt4), ce3 ^= 1), new R8(Y4, fe4, ce3);
    }
    return { seed: D7, k2sig: $8 };
  }
  function T5(b9, g3, x6 = {}) {
    b9 = tt("message", b9);
    const { seed: E8, k2sig: A8 } = O5(b9, g3, x6);
    return Ef(e3.outputLen, i8.BYTES, o7)(E8, A8);
  }
  function C9(b9) {
    let g3;
    const x6 = typeof b9 == "string" || Ne(b9), E8 = !x6 && b9 !== null && typeof b9 == "object" && typeof b9.r == "bigint" && typeof b9.s == "bigint";
    if (!x6 && !E8) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (E8) g3 = new R8(b9.r, b9.s);
    else if (x6) {
      try {
        g3 = R8.fromBytes(tt("sig", b9), "der");
      } catch (A8) {
        if (!(A8 instanceof xt.Err)) throw A8;
      }
      if (!g3) try {
        g3 = R8.fromBytes(tt("sig", b9), "compact");
      } catch {
        return false;
      }
    }
    return g3 || false;
  }
  function _7(b9, g3, x6, E8 = {}) {
    const { lowS: A8, prehash: w5, format: B7 } = Hn(E8, y7);
    if (x6 = tt("publicKey", x6), g3 = k5(tt("message", g3), w5), "strict" in E8) throw new Error("options.strict was renamed to lowS");
    const I5 = B7 === void 0 ? C9(b9) : R8.fromBytes(tt("sig", b9), B7);
    if (I5 === false) return false;
    try {
      const N6 = t3.fromBytes(x6);
      if (A8 && I5.hasHighS()) return false;
      const { r: D7, s: P8 } = I5, $8 = H4(g3), V5 = i8.inv(P8), q4 = i8.create($8 * V5), G7 = i8.create(D7 * V5), M7 = t3.BASE.multiplyUnsafe(q4).add(N6.multiplyUnsafe(G7));
      return M7.is0() ? false : i8.create(M7.x) === D7;
    } catch {
      return false;
    }
  }
  function p7(b9, g3, x6 = {}) {
    const { prehash: E8 } = Hn(x6, y7);
    return g3 = k5(g3, E8), R8.fromBytes(b9, "recovered").recoverPublicKey(g3).toBytes();
  }
  return Object.freeze({ keygen: u7, getPublicKey: a8, getSharedSecret: l5, utils: d7, lengths: h6, Point: t3, sign: T5, verify: _7, recoverPublicKey: p7, Signature: R8, hash: e3 });
}
function ta2(t3) {
  const e3 = { a: t3.a, b: t3.b, p: t3.Fp.ORDER, n: t3.n, h: t3.h, Gx: t3.Gx, Gy: t3.Gy }, n7 = t3.Fp;
  let r5 = t3.allowedPrivateKeyLengths ? Array.from(new Set(t3.allowedPrivateKeyLengths.map((i8) => Math.ceil(i8 / 2)))) : void 0;
  const o7 = Ht(e3.n, { BITS: t3.nBitLength, allowedLengths: r5, modFromBytes: t3.wrapPrivateKey }), s7 = { Fp: n7, Fn: o7, allowInfinityPoint: t3.allowInfinityPoint, endo: t3.endo, isTorsionFree: t3.isTorsionFree, clearCofactor: t3.clearCofactor, fromBytes: t3.fromBytes, toBytes: t3.toBytes };
  return { CURVE: e3, curveOpts: s7 };
}
function ea2(t3) {
  const { CURVE: e3, curveOpts: n7 } = ta2(t3), r5 = { hmac: t3.hmac, randomBytes: t3.randomBytes, lowS: t3.lowS, bits2int: t3.bits2int, bits2int_modN: t3.bits2int_modN };
  return { CURVE: e3, curveOpts: n7, hash: t3.hash, ecdsaOpts: r5 };
}
function na2(t3, e3) {
  const n7 = e3.Point;
  return Object.assign({}, e3, { ProjectivePoint: n7, CURVE: Object.assign({}, t3, ko(n7.Fn.ORDER, n7.Fn.BITS)) });
}
function ra2(t3) {
  const { CURVE: e3, curveOpts: n7, hash: r5, ecdsaOpts: o7 } = ea2(t3), s7 = Xf(e3, n7), i8 = Qf(s7, r5, o7);
  return na2(t3, i8);
}
function Dn(t3, e3) {
  const n7 = (r5) => ra2({ ...t3, hash: r5 });
  return { ...n7(e3), create: n7 };
}
var Xo = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") };
var Jo = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") };
var Qo2 = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") };
var oa2 = Ht(Xo.p);
var sa2 = Ht(Jo.p);
var ia2 = Ht(Qo2.p);
var ca = Dn({ ...Xo, Fp: oa2, lowS: false }, $e);
Dn({ ...Jo, Fp: sa2, lowS: false }, yc), Dn({ ...Qo2, Fp: ia2, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, bc);
var fa = ca;
var Vn = "base10";
var rt = "base16";
var oe = "base64pad";
var Ge = "base64url";
var se = "utf8";
var Mn = 0;
var ie = 1;
var we = 2;
var aa2 = 0;
var ts = 1;
var ve = 12;
var Kn = 32;
function ua2() {
  const t3 = kn.utils.randomPrivateKey(), e3 = kn.getPublicKey(t3);
  return { privateKey: toString(t3, rt), publicKey: toString(e3, rt) };
}
function la() {
  const t3 = Mt(Kn);
  return toString(t3, rt);
}
function da(t3, e3) {
  const n7 = kn.getSharedSecret(fromString(t3, rt), fromString(e3, rt)), r5 = vf(Pe, n7, void 0, void 0, Kn);
  return toString(r5, rt);
}
function ha(t3) {
  const e3 = Pe(fromString(t3, rt));
  return toString(e3, rt);
}
function pa2(t3) {
  const e3 = Pe(fromString(t3, se));
  return toString(e3, rt);
}
function qn2(t3) {
  return fromString(`${t3}`, Vn);
}
function Zt(t3) {
  return Number(toString(t3, Vn));
}
function es(t3) {
  return t3.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ns(t3) {
  const e3 = t3.replace(/-/g, "+").replace(/_/g, "/"), n7 = (4 - e3.length % 4) % 4;
  return e3 + "=".repeat(n7);
}
function ga(t3) {
  const e3 = qn2(typeof t3.type < "u" ? t3.type : Mn);
  if (Zt(e3) === ie && typeof t3.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n7 = typeof t3.senderPublicKey < "u" ? fromString(t3.senderPublicKey, rt) : void 0, r5 = typeof t3.iv < "u" ? fromString(t3.iv, rt) : Mt(ve), o7 = fromString(t3.symKey, rt), s7 = xo(o7, r5).encrypt(fromString(t3.message, se)), i8 = Fn({ type: e3, sealed: s7, iv: r5, senderPublicKey: n7 });
  return t3.encoding === Ge ? es(i8) : i8;
}
function ba(t3) {
  const e3 = fromString(t3.symKey, rt), { sealed: n7, iv: r5 } = ze({ encoded: t3.encoded, encoding: t3.encoding }), o7 = xo(e3, r5).decrypt(n7);
  if (o7 === null) throw new Error("Failed to decrypt");
  return toString(o7, se);
}
function ya(t3, e3) {
  const n7 = qn2(we), r5 = Mt(ve), o7 = fromString(t3, se), s7 = Fn({ type: n7, sealed: o7, iv: r5 });
  return e3 === Ge ? es(s7) : s7;
}
function ma(t3, e3) {
  const { sealed: n7 } = ze({ encoded: t3, encoding: e3 });
  return toString(n7, se);
}
function Fn(t3) {
  if (Zt(t3.type) === we) return toString(concat([t3.type, t3.sealed]), oe);
  if (Zt(t3.type) === ie) {
    if (typeof t3.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([t3.type, t3.senderPublicKey, t3.iv, t3.sealed]), oe);
  }
  return toString(concat([t3.type, t3.iv, t3.sealed]), oe);
}
function ze(t3) {
  const e3 = (t3.encoding || oe) === Ge ? ns(t3.encoded) : t3.encoded, n7 = fromString(e3, oe), r5 = n7.slice(aa2, ts), o7 = ts;
  if (Zt(r5) === ie) {
    const f12 = o7 + Kn, u7 = f12 + ve, a8 = n7.slice(o7, f12), l5 = n7.slice(f12, u7), d7 = n7.slice(u7);
    return { type: r5, sealed: d7, iv: l5, senderPublicKey: a8 };
  }
  if (Zt(r5) === we) {
    const f12 = n7.slice(o7), u7 = Mt(ve);
    return { type: r5, sealed: f12, iv: u7 };
  }
  const s7 = o7 + ve, i8 = n7.slice(o7, s7), c7 = n7.slice(s7);
  return { type: r5, sealed: c7, iv: i8 };
}
function wa(t3, e3) {
  const n7 = ze({ encoded: t3, encoding: e3?.encoding });
  return rs({ type: Zt(n7.type), senderPublicKey: typeof n7.senderPublicKey < "u" ? toString(n7.senderPublicKey, rt) : void 0, receiverPublicKey: e3?.receiverPublicKey });
}
function rs(t3) {
  const e3 = t3?.type || Mn;
  if (e3 === ie) {
    if (typeof t3?.senderPublicKey > "u") throw new Error("missing sender public key");
    if (typeof t3?.receiverPublicKey > "u") throw new Error("missing receiver public key");
  }
  return { type: e3, senderPublicKey: t3?.senderPublicKey, receiverPublicKey: t3?.receiverPublicKey };
}
function va2(t3) {
  return t3.type === ie && typeof t3.senderPublicKey == "string" && typeof t3.receiverPublicKey == "string";
}
function xa(t3) {
  return t3.type === we;
}
function os(t3) {
  const e3 = Buffer.from(t3.x, "base64"), n7 = Buffer.from(t3.y, "base64");
  return concat([new Uint8Array([4]), e3, n7]);
}
function Ea(t3, e3) {
  const [n7, r5, o7] = t3.split("."), s7 = Buffer.from(ns(o7), "base64");
  if (s7.length !== 64) throw new Error("Invalid signature length");
  const i8 = s7.slice(0, 32), c7 = s7.slice(32, 64), f12 = `${n7}.${r5}`, u7 = Pe(f12), a8 = os(e3);
  if (!fa.verify(concat([i8, c7]), u7, a8)) throw new Error("Invalid signature");
  return sn(t3).payload;
}
var ss = "irn";
function Ba(t3) {
  return t3?.relay || { protocol: ss };
}
function Aa(t3) {
  const e3 = C2[t3];
  if (typeof e3 > "u") throw new Error(`Relay Protocol not supported: ${t3}`);
  return e3;
}
var Ia = Object.defineProperty;
var Sa = Object.defineProperties;
var Oa = Object.getOwnPropertyDescriptors;
var is = Object.getOwnPropertySymbols;
var Na = Object.prototype.hasOwnProperty;
var Ua = Object.prototype.propertyIsEnumerable;
var cs = (t3, e3, n7) => e3 in t3 ? Ia(t3, e3, { enumerable: true, configurable: true, writable: true, value: n7 }) : t3[e3] = n7;
var Zn = (t3, e3) => {
  for (var n7 in e3 || (e3 = {})) Na.call(e3, n7) && cs(t3, n7, e3[n7]);
  if (is) for (var n7 of is(e3)) Ua.call(e3, n7) && cs(t3, n7, e3[n7]);
  return t3;
};
var _a = (t3, e3) => Sa(t3, Oa(e3));
function fs(t3, e3 = "-") {
  const n7 = {}, r5 = "relay" + e3;
  return Object.keys(t3).forEach((o7) => {
    if (o7.startsWith(r5)) {
      const s7 = o7.replace(r5, ""), i8 = t3[o7];
      n7[s7] = i8;
    }
  }), n7;
}
function Ra(t3) {
  if (!t3.includes("wc:")) {
    const u7 = cn(t3);
    u7 != null && u7.includes("wc:") && (t3 = u7);
  }
  t3 = t3.includes("wc://") ? t3.replace("wc://", "") : t3, t3 = t3.includes("wc:") ? t3.replace("wc:", "") : t3;
  const e3 = t3.indexOf(":"), n7 = t3.indexOf("?") !== -1 ? t3.indexOf("?") : void 0, r5 = t3.substring(0, e3), o7 = t3.substring(e3 + 1, n7).split("@"), s7 = typeof n7 < "u" ? t3.substring(n7) : "", i8 = new URLSearchParams(s7), c7 = Object.fromEntries(i8.entries()), f12 = typeof c7.methods == "string" ? c7.methods.split(",") : void 0;
  return { protocol: r5, topic: as(o7[0]), version: parseInt(o7[1], 10), symKey: c7.symKey, relay: fs(c7), methods: f12, expiryTimestamp: c7.expiryTimestamp ? parseInt(c7.expiryTimestamp, 10) : void 0 };
}
function as(t3) {
  return t3.startsWith("//") ? t3.substring(2) : t3;
}
function us(t3, e3 = "-") {
  const n7 = "relay", r5 = {};
  return Object.keys(t3).forEach((o7) => {
    const s7 = o7, i8 = n7 + e3 + s7;
    t3[s7] && (r5[i8] = t3[s7]);
  }), r5;
}
function $a(t3) {
  const e3 = new URLSearchParams(), n7 = Zn(Zn(_a(Zn({}, us(t3.relay)), { symKey: t3.symKey }), t3.expiryTimestamp && { expiryTimestamp: t3.expiryTimestamp.toString() }), t3.methods && { methods: t3.methods.join(",") });
  return Object.entries(n7).sort(([r5], [o7]) => r5.localeCompare(o7)).forEach(([r5, o7]) => {
    o7 !== void 0 && e3.append(r5, String(o7));
  }), `${t3.protocol}:${t3.topic}@${t3.version}?${e3}`;
}
function Ta(t3, e3, n7) {
  return `${t3}?wc_ev=${n7}&topic=${e3}`;
}
var Ca = Object.defineProperty;
var ja = Object.defineProperties;
var La = Object.getOwnPropertyDescriptors;
var ls = Object.getOwnPropertySymbols;
var ka = Object.prototype.hasOwnProperty;
var Pa = Object.prototype.propertyIsEnumerable;
var ds = (t3, e3, n7) => e3 in t3 ? Ca(t3, e3, { enumerable: true, configurable: true, writable: true, value: n7 }) : t3[e3] = n7;
var Ha = (t3, e3) => {
  for (var n7 in e3 || (e3 = {})) ka.call(e3, n7) && ds(t3, n7, e3[n7]);
  if (ls) for (var n7 of ls(e3)) Pa.call(e3, n7) && ds(t3, n7, e3[n7]);
  return t3;
};
var Da = (t3, e3) => ja(t3, La(e3));
function Gt(t3) {
  const e3 = [];
  return t3.forEach((n7) => {
    const [r5, o7] = n7.split(":");
    e3.push(`${r5}:${o7}`);
  }), e3;
}
function hs(t3) {
  const e3 = [];
  return Object.values(t3).forEach((n7) => {
    e3.push(...Gt(n7.accounts));
  }), e3;
}
function ps(t3, e3) {
  const n7 = [];
  return Object.values(t3).forEach((r5) => {
    Gt(r5.accounts).includes(e3) && n7.push(...r5.methods);
  }), n7;
}
function gs(t3, e3) {
  const n7 = [];
  return Object.values(t3).forEach((r5) => {
    Gt(r5.accounts).includes(e3) && n7.push(...r5.events);
  }), n7;
}
function Gn(t3) {
  return t3.includes(":");
}
function bs(t3) {
  return Gn(t3) ? t3.split(":")[0] : t3;
}
function xe(t3) {
  var e3, n7, r5;
  const o7 = {};
  if (!Ye(t3)) return o7;
  for (const [s7, i8] of Object.entries(t3)) {
    const c7 = Gn(s7) ? [s7] : i8.chains, f12 = i8.methods || [], u7 = i8.events || [], a8 = bs(s7);
    o7[a8] = Da(Ha({}, o7[a8]), { chains: ut(c7, (e3 = o7[a8]) == null ? void 0 : e3.chains), methods: ut(f12, (n7 = o7[a8]) == null ? void 0 : n7.methods), events: ut(u7, (r5 = o7[a8]) == null ? void 0 : r5.events) });
  }
  return o7;
}
function ys(t3) {
  const e3 = {};
  return t3?.forEach((n7) => {
    var r5;
    const [o7, s7] = n7.split(":");
    e3[o7] || (e3[o7] = { accounts: [], chains: [], events: [], methods: [] }), e3[o7].accounts.push(n7), (r5 = e3[o7].chains) == null || r5.push(`${o7}:${s7}`);
  }), e3;
}
function Ka(t3, e3) {
  e3 = e3.map((r5) => r5.replace("did:pkh:", ""));
  const n7 = ys(e3);
  for (const [r5, o7] of Object.entries(n7)) o7.methods ? o7.methods = ut(o7.methods, t3) : o7.methods = t3, o7.events = ["chainChanged", "accountsChanged"];
  return n7;
}
function qa(t3, e3) {
  var n7, r5, o7, s7, i8, c7;
  const f12 = xe(t3), u7 = xe(e3), a8 = {}, l5 = Object.keys(f12).concat(Object.keys(u7));
  for (const d7 of l5) a8[d7] = { chains: ut((n7 = f12[d7]) == null ? void 0 : n7.chains, (r5 = u7[d7]) == null ? void 0 : r5.chains), methods: ut((o7 = f12[d7]) == null ? void 0 : o7.methods, (s7 = u7[d7]) == null ? void 0 : s7.methods), events: ut((i8 = f12[d7]) == null ? void 0 : i8.events, (c7 = u7[d7]) == null ? void 0 : c7.events) };
  return a8;
}
var ms = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var ws = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Bt(t3, e3) {
  const { message: n7, code: r5 } = ws[t3];
  return { message: e3 ? `${n7} ${e3}` : n7, code: r5 };
}
function zt(t3, e3) {
  const { message: n7, code: r5 } = ms[t3];
  return { message: e3 ? `${n7} ${e3}` : n7, code: r5 };
}
function Ee(t3, e3) {
  return Array.isArray(t3) ? typeof e3 < "u" && t3.length ? t3.every(e3) : true : false;
}
function Ye(t3) {
  return Object.getPrototypeOf(t3) === Object.prototype && Object.keys(t3).length;
}
function Dt(t3) {
  return typeof t3 > "u";
}
function ft(t3, e3) {
  return e3 && Dt(t3) ? true : typeof t3 == "string" && !!t3.trim().length;
}
function We(t3, e3) {
  return e3 && Dt(t3) ? true : typeof t3 == "number" && !isNaN(t3);
}
function Fa(t3, e3) {
  const { requiredNamespaces: n7 } = e3, r5 = Object.keys(t3.namespaces), o7 = Object.keys(n7);
  let s7 = true;
  return It(o7, r5) ? (r5.forEach((i8) => {
    const { accounts: c7, methods: f12, events: u7 } = t3.namespaces[i8], a8 = Gt(c7), l5 = n7[i8];
    (!It(Ie(i8, l5), a8) || !It(l5.methods, f12) || !It(l5.events, u7)) && (s7 = false);
  }), s7) : false;
}
function Be(t3) {
  return ft(t3, false) && t3.includes(":") ? t3.split(":").length === 2 : false;
}
function vs(t3) {
  if (ft(t3, false) && t3.includes(":")) {
    const e3 = t3.split(":");
    if (e3.length === 3) {
      const n7 = e3[0] + ":" + e3[1];
      return !!e3[2] && Be(n7);
    }
  }
  return false;
}
function Za(t3) {
  function e3(n7) {
    try {
      return typeof new URL(n7) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (ft(t3, false)) {
      if (e3(t3)) return true;
      const n7 = cn(t3);
      return e3(n7);
    }
  } catch {
  }
  return false;
}
function Ga(t3) {
  var e3;
  return (e3 = t3?.proposer) == null ? void 0 : e3.publicKey;
}
function za(t3) {
  return t3?.topic;
}
function Ya(t3, e3) {
  let n7 = null;
  return ft(t3?.publicKey, false) || (n7 = Bt("MISSING_OR_INVALID", `${e3} controller public key should be a string`)), n7;
}
function zn(t3) {
  let e3 = true;
  return Ee(t3) ? t3.length && (e3 = t3.every((n7) => ft(n7, false))) : e3 = false, e3;
}
function xs(t3, e3, n7) {
  let r5 = null;
  return Ee(e3) && e3.length ? e3.forEach((o7) => {
    r5 || Be(o7) || (r5 = zt("UNSUPPORTED_CHAINS", `${n7}, chain ${o7} should be a string and conform to "namespace:chainId" format`));
  }) : Be(t3) || (r5 = zt("UNSUPPORTED_CHAINS", `${n7}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r5;
}
function Es(t3, e3, n7) {
  let r5 = null;
  return Object.entries(t3).forEach(([o7, s7]) => {
    if (r5) return;
    const i8 = xs(o7, Ie(o7, s7), `${e3} ${n7}`);
    i8 && (r5 = i8);
  }), r5;
}
function Bs(t3, e3) {
  let n7 = null;
  return Ee(t3) ? t3.forEach((r5) => {
    n7 || vs(r5) || (n7 = zt("UNSUPPORTED_ACCOUNTS", `${e3}, account ${r5} should be a string and conform to "namespace:chainId:address" format`));
  }) : n7 = zt("UNSUPPORTED_ACCOUNTS", `${e3}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n7;
}
function As(t3, e3) {
  let n7 = null;
  return Object.values(t3).forEach((r5) => {
    if (n7) return;
    const o7 = Bs(r5?.accounts, `${e3} namespace`);
    o7 && (n7 = o7);
  }), n7;
}
function Is(t3, e3) {
  let n7 = null;
  return zn(t3?.methods) ? zn(t3?.events) || (n7 = zt("UNSUPPORTED_EVENTS", `${e3}, events should be an array of strings or empty array for no events`)) : n7 = zt("UNSUPPORTED_METHODS", `${e3}, methods should be an array of strings or empty array for no methods`), n7;
}
function Yn(t3, e3) {
  let n7 = null;
  return Object.values(t3).forEach((r5) => {
    if (n7) return;
    const o7 = Is(r5, `${e3}, namespace`);
    o7 && (n7 = o7);
  }), n7;
}
function Wa(t3, e3, n7) {
  let r5 = null;
  if (t3 && Ye(t3)) {
    const o7 = Yn(t3, e3);
    o7 && (r5 = o7);
    const s7 = Es(t3, e3, n7);
    s7 && (r5 = s7);
  } else r5 = Bt("MISSING_OR_INVALID", `${e3}, ${n7} should be an object with data`);
  return r5;
}
function Ss(t3, e3) {
  let n7 = null;
  if (t3 && Ye(t3)) {
    const r5 = Yn(t3, e3);
    r5 && (n7 = r5);
    const o7 = As(t3, e3);
    o7 && (n7 = o7);
  } else n7 = Bt("MISSING_OR_INVALID", `${e3}, namespaces should be an object with data`);
  return n7;
}
function Os(t3) {
  return ft(t3.protocol, true);
}
function Xa(t3, e3) {
  let n7 = false;
  return e3 && !t3 ? n7 = true : t3 && Ee(t3) && t3.length && t3.forEach((r5) => {
    n7 = Os(r5);
  }), n7;
}
function Ja(t3) {
  return typeof t3 == "number";
}
function Qa(t3) {
  return typeof t3 < "u" && typeof t3 !== null;
}
function tu(t3) {
  return !(!t3 || typeof t3 != "object" || !t3.code || !We(t3.code, false) || !t3.message || !ft(t3.message, false));
}
function eu(t3) {
  return !(Dt(t3) || !ft(t3.method, false));
}
function nu(t3) {
  return !(Dt(t3) || Dt(t3.result) && Dt(t3.error) || !We(t3.id, false) || !ft(t3.jsonrpc, false));
}
function ru(t3) {
  return !(Dt(t3) || !ft(t3.name, false));
}
function ou(t3, e3) {
  return !(!Be(e3) || !hs(t3).includes(e3));
}
function su(t3, e3, n7) {
  return ft(n7, false) ? ps(t3, e3).includes(n7) : false;
}
function iu(t3, e3, n7) {
  return ft(n7, false) ? gs(t3, e3).includes(n7) : false;
}
function Ns(t3, e3, n7) {
  let r5 = null;
  const o7 = cu(t3), s7 = fu(e3), i8 = Object.keys(o7), c7 = Object.keys(s7), f12 = Us(Object.keys(t3)), u7 = Us(Object.keys(e3)), a8 = f12.filter((l5) => !u7.includes(l5));
  return a8.length && (r5 = Bt("NON_CONFORMING_NAMESPACES", `${n7} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a8.toString()}
      Received: ${Object.keys(e3).toString()}`)), It(i8, c7) || (r5 = Bt("NON_CONFORMING_NAMESPACES", `${n7} namespaces chains don't satisfy required namespaces.
      Required: ${i8.toString()}
      Approved: ${c7.toString()}`)), Object.keys(e3).forEach((l5) => {
    if (!l5.includes(":") || r5) return;
    const d7 = Gt(e3[l5].accounts);
    d7.includes(l5) || (r5 = Bt("NON_CONFORMING_NAMESPACES", `${n7} namespaces accounts don't satisfy namespace accounts for ${l5}
        Required: ${l5}
        Approved: ${d7.toString()}`));
  }), i8.forEach((l5) => {
    r5 || (It(o7[l5].methods, s7[l5].methods) ? It(o7[l5].events, s7[l5].events) || (r5 = Bt("NON_CONFORMING_NAMESPACES", `${n7} namespaces events don't satisfy namespace events for ${l5}`)) : r5 = Bt("NON_CONFORMING_NAMESPACES", `${n7} namespaces methods don't satisfy namespace methods for ${l5}`));
  }), r5;
}
function cu(t3) {
  const e3 = {};
  return Object.keys(t3).forEach((n7) => {
    var r5;
    n7.includes(":") ? e3[n7] = t3[n7] : (r5 = t3[n7].chains) == null || r5.forEach((o7) => {
      e3[o7] = { methods: t3[n7].methods, events: t3[n7].events };
    });
  }), e3;
}
function Us(t3) {
  return [...new Set(t3.map((e3) => e3.includes(":") ? e3.split(":")[0] : e3))];
}
function fu(t3) {
  const e3 = {};
  return Object.keys(t3).forEach((n7) => {
    if (n7.includes(":")) e3[n7] = t3[n7];
    else {
      const r5 = Gt(t3[n7].accounts);
      r5?.forEach((o7) => {
        e3[o7] = { accounts: t3[n7].accounts.filter((s7) => s7.includes(`${o7}:`)), methods: t3[n7].methods, events: t3[n7].events };
      });
    }
  }), e3;
}
function au(t3, e3) {
  return We(t3, false) && t3 <= e3.max && t3 >= e3.min;
}
function uu() {
  const t3 = Vt();
  return new Promise((e3) => {
    switch (t3) {
      case et.browser:
        e3(_s());
        break;
      case et.reactNative:
        e3(Rs());
        break;
      case et.node:
        e3($s());
        break;
      default:
        e3(true);
    }
  });
}
function _s() {
  return Wt() && navigator?.onLine;
}
async function Rs() {
  if (At() && typeof global < "u" && global != null && global.NetInfo) {
    const t3 = await (global == null ? void 0 : global.NetInfo.fetch());
    return t3?.isConnected;
  }
  return true;
}
function $s() {
  return true;
}
function lu(t3) {
  switch (Vt()) {
    case et.browser:
      Ts(t3);
      break;
    case et.reactNative:
      Cs(t3);
      break;
    case et.node:
      break;
  }
}
function Ts(t3) {
  !At() && Wt() && (window.addEventListener("online", () => t3(true)), window.addEventListener("offline", () => t3(false)));
}
function Cs(t3) {
  At() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((e3) => t3(e3?.isConnected));
}
function du() {
  var t3;
  return Wt() && (0, import_window_getters.getDocument)() ? ((t3 = (0, import_window_getters.getDocument)()) == null ? void 0 : t3.visibilityState) === "visible" : true;
}
var Wn = {};
var hu = class {
  static get(e3) {
    return Wn[e3];
  }
  static set(e3, n7) {
    Wn[e3] = n7;
  }
  static delete(e3) {
    delete Wn[e3];
  }
};
function js(t3) {
  const e3 = esm_default.decode(t3);
  if (e3.length < 33) throw new Error("Too short to contain a public key");
  return e3.slice(1, 33);
}
function Ls({ publicKey: t3, signature: e3, payload: n7 }) {
  var r5;
  const o7 = Xn(n7.method), s7 = 128 | parseInt(((r5 = n7.version) == null ? void 0 : r5.toString()) || "4"), i8 = gu(n7.address), c7 = n7.era === "00" ? new Uint8Array([0]) : Xn(n7.era);
  if (c7.length !== 1 && c7.length !== 2) throw new Error("Invalid era length");
  const f12 = parseInt(n7.nonce, 16), u7 = new Uint8Array([f12 & 255, f12 >> 8 & 255]), a8 = BigInt(`0x${pu(n7.tip)}`), l5 = yu(a8), d7 = new Uint8Array([0, ...t3, i8, ...e3, ...c7, ...u7, ...l5, ...o7]), h6 = bu(d7.length + 1);
  return new Uint8Array([...h6, s7, ...d7]);
}
function ks(t3) {
  const e3 = Xn(t3), n7 = (0, import_blakejs.blake2b)(e3, void 0, 32);
  return "0x" + Buffer.from(n7).toString("hex");
}
function Xn(t3) {
  return new Uint8Array(t3.replace(/^0x/, "").match(/.{1,2}/g).map((e3) => parseInt(e3, 16)));
}
function pu(t3) {
  return t3.startsWith("0x") ? t3.slice(2) : t3;
}
function gu(t3) {
  const e3 = esm_default.decode(t3)[0];
  return e3 === 42 ? 0 : e3 === 60 ? 2 : 1;
}
function bu(t3) {
  if (t3 < 64) return new Uint8Array([t3 << 2]);
  if (t3 < 16384) {
    const e3 = t3 << 2 | 1;
    return new Uint8Array([e3 & 255, e3 >> 8 & 255]);
  } else if (t3 < 1 << 30) {
    const e3 = t3 << 2 | 2;
    return new Uint8Array([e3 & 255, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function yu(t3) {
  if (t3 < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t3 << BigInt(2))]);
  if (t3 < BigInt(1) << BigInt(14)) {
    const e3 = t3 << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e3 & BigInt(255)), Number(e3 >> BigInt(8) & BigInt(255))]);
  } else if (t3 < BigInt(1) << BigInt(30)) {
    const e3 = t3 << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e3 & BigInt(255)), Number(e3 >> BigInt(8) & BigInt(255)), Number(e3 >> BigInt(16) & BigInt(255)), Number(e3 >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function mu(t3) {
  const e3 = Uint8Array.from(Buffer.from(t3.signature, "hex")), n7 = js(t3.transaction.address), r5 = Ls({ publicKey: n7, signature: e3, payload: t3.transaction }), o7 = Buffer.from(r5).toString("hex");
  return ks(o7);
}
function wu({ logger: t3, name: e3 }) {
  const n7 = typeof t3 == "string" ? Y({ opts: { level: t3, name: e3 } }).logger : t3;
  return n7.level = typeof t3 == "string" ? t3 : t3.level, n7;
}

// node_modules/@walletconnect/sign-client/dist/index.js
var import_events4 = __toESM(require_events(), 1);

// node_modules/@walletconnect/core/dist/index.js
var import_events3 = __toESM(require_events(), 1);

// node_modules/@walletconnect/types/dist/index.js
var import_events2 = __toESM(require_events());
var a6 = Object.defineProperty;
var u4 = (e3, s7, r5) => s7 in e3 ? a6(e3, s7, { enumerable: true, configurable: true, writable: true, value: r5 }) : e3[s7] = r5;
var c4 = (e3, s7, r5) => u4(e3, typeof s7 != "symbol" ? s7 + "" : s7, r5);
var h5 = class extends IEvents {
  constructor(s7) {
    super(), this.opts = s7, c4(this, "protocol", "wc"), c4(this, "version", 2);
  }
};
var p4 = Object.defineProperty;
var b6 = (e3, s7, r5) => s7 in e3 ? p4(e3, s7, { enumerable: true, configurable: true, writable: true, value: r5 }) : e3[s7] = r5;
var v4 = (e3, s7, r5) => b6(e3, typeof s7 != "symbol" ? s7 + "" : s7, r5);
var I3 = class extends IEvents {
  constructor(s7, r5) {
    super(), this.core = s7, this.logger = r5, v4(this, "records", /* @__PURE__ */ new Map());
  }
};
var y5 = class {
  constructor(s7, r5) {
    this.logger = s7, this.core = r5;
  }
};
var m3 = class extends IEvents {
  constructor(s7, r5) {
    super(), this.relayer = s7, this.logger = r5;
  }
};
var d2 = class extends IEvents {
  constructor(s7) {
    super();
  }
};
var f7 = class {
  constructor(s7, r5, t3, q4) {
    this.core = s7, this.logger = r5, this.name = t3;
  }
};
var P4 = class extends IEvents {
  constructor(s7, r5) {
    super(), this.relayer = s7, this.logger = r5;
  }
};
var S4 = class extends IEvents {
  constructor(s7, r5) {
    super(), this.core = s7, this.logger = r5;
  }
};
var M3 = class {
  constructor(s7, r5, t3) {
    this.core = s7, this.logger = r5, this.store = t3;
  }
};
var O3 = class {
  constructor(s7, r5) {
    this.projectId = s7, this.logger = r5;
  }
};
var R3 = class {
  constructor(s7, r5, t3) {
    this.core = s7, this.logger = r5, this.telemetryEnabled = t3;
  }
};
var T2 = Object.defineProperty;
var k3 = (e3, s7, r5) => s7 in e3 ? T2(e3, s7, { enumerable: true, configurable: true, writable: true, value: r5 }) : e3[s7] = r5;
var i6 = (e3, s7, r5) => k3(e3, typeof s7 != "symbol" ? s7 + "" : s7, r5);
var J3 = class {
  constructor(s7) {
    this.opts = s7, i6(this, "protocol", "wc"), i6(this, "version", 2);
  }
};
var V2 = class {
  constructor(s7) {
    this.client = s7;
  }
};

// node_modules/@walletconnect/core/dist/index.js
var import_time2 = __toESM(require_cjs(), 1);
var import_window_getters2 = __toESM(require_cjs2(), 1);
var Ue2 = "wc";
var Fe2 = 2;
var ge2 = "core";
var W5 = `${Ue2}@2:${ge2}:`;
var Et2 = { name: ge2, logger: "error" };
var It2 = { database: ":memory:" };
var Tt2 = "crypto";
var Me2 = "client_ed25519_seed";
var Ct2 = import_time2.ONE_DAY;
var Pt2 = "keychain";
var St2 = "0.3";
var Ot2 = "messages";
var Rt2 = "0.3";
var At2 = import_time2.SIX_HOURS;
var xt2 = "publisher";
var Nt2 = "irn";
var $t2 = "error";
var Ke2 = "wss://relay.walletconnect.org";
var zt2 = "relayer";
var C5 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var Lt2 = "_subscription";
var M4 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var kt2 = 0.1;
var Pe2 = "2.22.4";
var ee2 = { link_mode: "link_mode", relay: "relay" };
var ye2 = { inbound: "inbound", outbound: "outbound" };
var jt2 = "0.3";
var Ut2 = "WALLETCONNECT_CLIENT_ID";
var Be2 = "WALLETCONNECT_LINK_MODE_APPS";
var j5 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var Ft2 = "subscription";
var Mt2 = "0.3";
var Qs = import_time2.FIVE_SECONDS * 1e3;
var Kt2 = "pairing";
var Bt2 = "0.3";
var oe2 = { wc_pairingDelete: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 } } };
var ae2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var V3 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var Vt2 = "history";
var qt2 = "0.3";
var Gt2 = "expirer";
var q2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Wt2 = "0.3";
var Ht2 = "verify-api";
var ir = "https://verify.walletconnect.com";
var Yt = "https://verify.walletconnect.org";
var be2 = Yt;
var Jt2 = `${be2}/v3`;
var Xt2 = [ir, Yt];
var Zt2 = "echo";
var Qt2 = "https://echo.walletconnect.com";
var Y2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var X4 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var rr2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success", session_request_response_started: "session_request_response_started", session_request_response_validation_success: "session_request_response_validation_success", session_request_response_publish_started: "session_request_response_publish_started" };
var nr2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found", session_request_response_validation_failure: "session_request_response_validation_failure", session_request_response_publish_failure: "session_request_response_publish_failure" };
var or = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var ar2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var ei2 = 0.1;
var ti = "event-client";
var ii2 = 86400;
var si2 = "https://pulse.walletconnect.org/batch";
function cr(r5, e3) {
  if (r5.length >= 255) throw new TypeError("Alphabet too long");
  for (var t3 = new Uint8Array(256), i8 = 0; i8 < t3.length; i8++) t3[i8] = 255;
  for (var s7 = 0; s7 < r5.length; s7++) {
    var n7 = r5.charAt(s7), o7 = n7.charCodeAt(0);
    if (t3[o7] !== 255) throw new TypeError(n7 + " is ambiguous");
    t3[o7] = s7;
  }
  var a8 = r5.length, c7 = r5.charAt(0), h6 = Math.log(a8) / Math.log(256), l5 = Math.log(256) / Math.log(a8);
  function g3(u7) {
    if (u7 instanceof Uint8Array || (ArrayBuffer.isView(u7) ? u7 = new Uint8Array(u7.buffer, u7.byteOffset, u7.byteLength) : Array.isArray(u7) && (u7 = Uint8Array.from(u7))), !(u7 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u7.length === 0) return "";
    for (var m6 = 0, D7 = 0, w5 = 0, E8 = u7.length; w5 !== E8 && u7[w5] === 0; ) w5++, m6++;
    for (var L5 = (E8 - w5) * l5 + 1 >>> 0, I5 = new Uint8Array(L5); w5 !== E8; ) {
      for (var k5 = u7[w5], T5 = 0, S8 = L5 - 1; (k5 !== 0 || T5 < D7) && S8 !== -1; S8--, T5++) k5 += 256 * I5[S8] >>> 0, I5[S8] = k5 % a8 >>> 0, k5 = k5 / a8 >>> 0;
      if (k5 !== 0) throw new Error("Non-zero carry");
      D7 = T5, w5++;
    }
    for (var O5 = L5 - D7; O5 !== L5 && I5[O5] === 0; ) O5++;
    for (var te3 = c7.repeat(m6); O5 < L5; ++O5) te3 += r5.charAt(I5[O5]);
    return te3;
  }
  function y7(u7) {
    if (typeof u7 != "string") throw new TypeError("Expected String");
    if (u7.length === 0) return new Uint8Array();
    var m6 = 0;
    if (u7[m6] !== " ") {
      for (var D7 = 0, w5 = 0; u7[m6] === c7; ) D7++, m6++;
      for (var E8 = (u7.length - m6) * h6 + 1 >>> 0, L5 = new Uint8Array(E8); u7[m6]; ) {
        var I5 = t3[u7.charCodeAt(m6)];
        if (I5 === 255) return;
        for (var k5 = 0, T5 = E8 - 1; (I5 !== 0 || k5 < w5) && T5 !== -1; T5--, k5++) I5 += a8 * L5[T5] >>> 0, L5[T5] = I5 % 256 >>> 0, I5 = I5 / 256 >>> 0;
        if (I5 !== 0) throw new Error("Non-zero carry");
        w5 = k5, m6++;
      }
      if (u7[m6] !== " ") {
        for (var S8 = E8 - w5; S8 !== E8 && L5[S8] === 0; ) S8++;
        for (var O5 = new Uint8Array(D7 + (E8 - S8)), te3 = D7; S8 !== E8; ) O5[te3++] = L5[S8++];
        return O5;
      }
    }
  }
  function _7(u7) {
    var m6 = y7(u7);
    if (m6) return m6;
    throw new Error(`Non-${e3} character`);
  }
  return { encode: g3, decodeUnsafe: y7, decode: _7 };
}
var hr = cr;
var lr2 = hr;
var ri2 = (r5) => {
  if (r5 instanceof Uint8Array && r5.constructor.name === "Uint8Array") return r5;
  if (r5 instanceof ArrayBuffer) return new Uint8Array(r5);
  if (ArrayBuffer.isView(r5)) return new Uint8Array(r5.buffer, r5.byteOffset, r5.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var ur2 = (r5) => new TextEncoder().encode(r5);
var dr2 = (r5) => new TextDecoder().decode(r5);
var pr2 = class {
  constructor(e3, t3, i8) {
    this.name = e3, this.prefix = t3, this.baseEncode = i8;
  }
  encode(e3) {
    if (e3 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e3)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var gr2 = class {
  constructor(e3, t3, i8) {
    if (this.name = e3, this.prefix = t3, t3.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t3.codePointAt(0), this.baseDecode = i8;
  }
  decode(e3) {
    if (typeof e3 == "string") {
      if (e3.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e3)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e3.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e3) {
    return ni2(this, e3);
  }
};
var yr2 = class {
  constructor(e3) {
    this.decoders = e3;
  }
  or(e3) {
    return ni2(this, e3);
  }
  decode(e3) {
    const t3 = e3[0], i8 = this.decoders[t3];
    if (i8) return i8.decode(e3);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e3)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ni2 = (r5, e3) => new yr2({ ...r5.decoders || { [r5.prefix]: r5 }, ...e3.decoders || { [e3.prefix]: e3 } });
var br2 = class {
  constructor(e3, t3, i8, s7) {
    this.name = e3, this.prefix = t3, this.baseEncode = i8, this.baseDecode = s7, this.encoder = new pr2(e3, t3, i8), this.decoder = new gr2(e3, t3, s7);
  }
  encode(e3) {
    return this.encoder.encode(e3);
  }
  decode(e3) {
    return this.decoder.decode(e3);
  }
};
var Se = ({ name: r5, prefix: e3, encode: t3, decode: i8 }) => new br2(r5, e3, t3, i8);
var me2 = ({ prefix: r5, name: e3, alphabet: t3 }) => {
  const { encode: i8, decode: s7 } = lr2(t3, e3);
  return Se({ prefix: r5, name: e3, encode: i8, decode: (n7) => ri2(s7(n7)) });
};
var mr2 = (r5, e3, t3, i8) => {
  const s7 = {};
  for (let l5 = 0; l5 < e3.length; ++l5) s7[e3[l5]] = l5;
  let n7 = r5.length;
  for (; r5[n7 - 1] === "="; ) --n7;
  const o7 = new Uint8Array(n7 * t3 / 8 | 0);
  let a8 = 0, c7 = 0, h6 = 0;
  for (let l5 = 0; l5 < n7; ++l5) {
    const g3 = s7[r5[l5]];
    if (g3 === void 0) throw new SyntaxError(`Non-${i8} character`);
    c7 = c7 << t3 | g3, a8 += t3, a8 >= 8 && (a8 -= 8, o7[h6++] = 255 & c7 >> a8);
  }
  if (a8 >= t3 || 255 & c7 << 8 - a8) throw new SyntaxError("Unexpected end of data");
  return o7;
};
var fr = (r5, e3, t3) => {
  const i8 = e3[e3.length - 1] === "=", s7 = (1 << t3) - 1;
  let n7 = "", o7 = 0, a8 = 0;
  for (let c7 = 0; c7 < r5.length; ++c7) for (a8 = a8 << 8 | r5[c7], o7 += 8; o7 > t3; ) o7 -= t3, n7 += e3[s7 & a8 >> o7];
  if (o7 && (n7 += e3[s7 & a8 << t3 - o7]), i8) for (; n7.length * t3 & 7; ) n7 += "=";
  return n7;
};
var x4 = ({ name: r5, prefix: e3, bitsPerChar: t3, alphabet: i8 }) => Se({ prefix: e3, name: r5, encode(s7) {
  return fr(s7, i8, t3);
}, decode(s7) {
  return mr2(s7, i8, t3, r5);
} });
var Dr2 = Se({ prefix: "\0", name: "identity", encode: (r5) => dr2(r5), decode: (r5) => ur2(r5) });
var vr = Object.freeze({ __proto__: null, identity: Dr2 });
var _r2 = x4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var wr2 = Object.freeze({ __proto__: null, base2: _r2 });
var Er = x4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Ir2 = Object.freeze({ __proto__: null, base8: Er });
var Tr2 = me2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Cr2 = Object.freeze({ __proto__: null, base10: Tr2 });
var Pr2 = x4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Sr2 = x4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Or2 = Object.freeze({ __proto__: null, base16: Pr2, base16upper: Sr2 });
var Rr2 = x4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Ar2 = x4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var xr = x4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var Nr2 = x4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var $r2 = x4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var zr2 = x4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Lr2 = x4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var kr2 = x4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var jr2 = x4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ur2 = Object.freeze({ __proto__: null, base32: Rr2, base32upper: Ar2, base32pad: xr, base32padupper: Nr2, base32hex: $r2, base32hexupper: zr2, base32hexpad: Lr2, base32hexpadupper: kr2, base32z: jr2 });
var Fr2 = me2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Mr2 = me2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Kr2 = Object.freeze({ __proto__: null, base36: Fr2, base36upper: Mr2 });
var Br2 = me2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Vr2 = me2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var qr2 = Object.freeze({ __proto__: null, base58btc: Br2, base58flickr: Vr2 });
var Gr2 = x4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var Wr2 = x4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Hr2 = x4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Yr2 = x4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Jr2 = Object.freeze({ __proto__: null, base64: Gr2, base64pad: Wr2, base64url: Hr2, base64urlpad: Yr2 });
var oi2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var Xr2 = oi2.reduce((r5, e3, t3) => (r5[t3] = e3, r5), []);
var Zr2 = oi2.reduce((r5, e3, t3) => (r5[e3.codePointAt(0)] = t3, r5), []);
function Qr2(r5) {
  return r5.reduce((e3, t3) => (e3 += Xr2[t3], e3), "");
}
function en2(r5) {
  const e3 = [];
  for (const t3 of r5) {
    const i8 = Zr2[t3.codePointAt(0)];
    if (i8 === void 0) throw new Error(`Non-base256emoji character: ${t3}`);
    e3.push(i8);
  }
  return new Uint8Array(e3);
}
var tn = Se({ prefix: "\u{1F680}", name: "base256emoji", encode: Qr2, decode: en2 });
var sn2 = Object.freeze({ __proto__: null, base256emoji: tn });
var rn2 = ci;
var ai2 = 128;
var nn = 127;
var on2 = ~nn;
var an2 = Math.pow(2, 31);
function ci(r5, e3, t3) {
  e3 = e3 || [], t3 = t3 || 0;
  for (var i8 = t3; r5 >= an2; ) e3[t3++] = r5 & 255 | ai2, r5 /= 128;
  for (; r5 & on2; ) e3[t3++] = r5 & 255 | ai2, r5 >>>= 7;
  return e3[t3] = r5 | 0, ci.bytes = t3 - i8 + 1, e3;
}
var cn2 = Ve2;
var hn2 = 128;
var hi = 127;
function Ve2(r5, i8) {
  var t3 = 0, i8 = i8 || 0, s7 = 0, n7 = i8, o7, a8 = r5.length;
  do {
    if (n7 >= a8) throw Ve2.bytes = 0, new RangeError("Could not decode varint");
    o7 = r5[n7++], t3 += s7 < 28 ? (o7 & hi) << s7 : (o7 & hi) * Math.pow(2, s7), s7 += 7;
  } while (o7 >= hn2);
  return Ve2.bytes = n7 - i8, t3;
}
var ln2 = Math.pow(2, 7);
var un2 = Math.pow(2, 14);
var dn2 = Math.pow(2, 21);
var pn2 = Math.pow(2, 28);
var gn2 = Math.pow(2, 35);
var yn2 = Math.pow(2, 42);
var bn2 = Math.pow(2, 49);
var mn2 = Math.pow(2, 56);
var fn2 = Math.pow(2, 63);
var Dn2 = function(r5) {
  return r5 < ln2 ? 1 : r5 < un2 ? 2 : r5 < dn2 ? 3 : r5 < pn2 ? 4 : r5 < gn2 ? 5 : r5 < yn2 ? 6 : r5 < bn2 ? 7 : r5 < mn2 ? 8 : r5 < fn2 ? 9 : 10;
};
var vn2 = { encode: rn2, decode: cn2, encodingLength: Dn2 };
var li2 = vn2;
var ui2 = (r5, e3, t3 = 0) => (li2.encode(r5, e3, t3), e3);
var di2 = (r5) => li2.encodingLength(r5);
var qe2 = (r5, e3) => {
  const t3 = e3.byteLength, i8 = di2(r5), s7 = i8 + di2(t3), n7 = new Uint8Array(s7 + t3);
  return ui2(r5, n7, 0), ui2(t3, n7, i8), n7.set(e3, s7), new _n2(r5, t3, e3, n7);
};
var _n2 = class {
  constructor(e3, t3, i8, s7) {
    this.code = e3, this.size = t3, this.digest = i8, this.bytes = s7;
  }
};
var pi2 = ({ name: r5, code: e3, encode: t3 }) => new wn2(r5, e3, t3);
var wn2 = class {
  constructor(e3, t3, i8) {
    this.name = e3, this.code = t3, this.encode = i8;
  }
  digest(e3) {
    if (e3 instanceof Uint8Array) {
      const t3 = this.encode(e3);
      return t3 instanceof Uint8Array ? qe2(this.code, t3) : t3.then((i8) => qe2(this.code, i8));
    } else throw Error("Unknown type, must be binary type");
  }
};
var gi = (r5) => async (e3) => new Uint8Array(await crypto.subtle.digest(r5, e3));
var En2 = pi2({ name: "sha2-256", code: 18, encode: gi("SHA-256") });
var In2 = pi2({ name: "sha2-512", code: 19, encode: gi("SHA-512") });
var Tn2 = Object.freeze({ __proto__: null, sha256: En2, sha512: In2 });
var yi = 0;
var Cn2 = "identity";
var bi = ri2;
var Pn2 = (r5) => qe2(yi, bi(r5));
var Sn2 = { code: yi, name: Cn2, encode: bi, digest: Pn2 };
var On2 = Object.freeze({ __proto__: null, identity: Sn2 });
new TextEncoder(), new TextDecoder();
var mi2 = { ...vr, ...wr2, ...Ir2, ...Cr2, ...Or2, ...Ur2, ...Kr2, ...qr2, ...Jr2, ...sn2 };
({ ...Tn2, ...On2 });
function fi(r5) {
  return globalThis.Buffer != null ? new Uint8Array(r5.buffer, r5.byteOffset, r5.byteLength) : r5;
}
function Rn2(r5 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? fi(globalThis.Buffer.allocUnsafe(r5)) : new Uint8Array(r5);
}
function Di2(r5, e3, t3, i8) {
  return { name: r5, prefix: e3, encoder: { name: r5, prefix: e3, encode: t3 }, decoder: { decode: i8 } };
}
var vi = Di2("utf8", "u", (r5) => "u" + new TextDecoder("utf8").decode(r5), (r5) => new TextEncoder().encode(r5.substring(1)));
var Ge2 = Di2("ascii", "a", (r5) => {
  let e3 = "a";
  for (let t3 = 0; t3 < r5.length; t3++) e3 += String.fromCharCode(r5[t3]);
  return e3;
}, (r5) => {
  r5 = r5.substring(1);
  const e3 = Rn2(r5.length);
  for (let t3 = 0; t3 < r5.length; t3++) e3[t3] = r5.charCodeAt(t3);
  return e3;
});
var An2 = { utf8: vi, "utf-8": vi, hex: mi2.base16, latin1: Ge2, ascii: Ge2, binary: Ge2, ...mi2 };
function xn2(r5, e3 = "utf8") {
  const t3 = An2[e3];
  if (!t3) throw new Error(`Unsupported encoding "${e3}"`);
  return (e3 === "utf8" || e3 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? fi(globalThis.Buffer.from(r5, "utf-8")) : t3.decoder.decode(`${t3.prefix}${r5}`);
}
var Nn2 = Object.defineProperty;
var $n2 = (r5, e3, t3) => e3 in r5 ? Nn2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var J4 = (r5, e3, t3) => $n2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var _i2 = class {
  constructor(e3, t3) {
    this.core = e3, this.logger = t3, J4(this, "keychain", /* @__PURE__ */ new Map()), J4(this, "name", Pt2), J4(this, "version", St2), J4(this, "initialized", false), J4(this, "storagePrefix", W5), J4(this, "init", async () => {
      if (!this.initialized) {
        const i8 = await this.getKeyChain();
        typeof i8 < "u" && (this.keychain = i8), this.initialized = true;
      }
    }), J4(this, "has", (i8) => (this.isInitialized(), this.keychain.has(i8))), J4(this, "set", async (i8, s7) => {
      this.isInitialized(), this.keychain.set(i8, s7), await this.persist();
    }), J4(this, "get", (i8) => {
      this.isInitialized();
      const s7 = this.keychain.get(i8);
      if (typeof s7 > "u") {
        const { message: n7 } = Bt("NO_MATCHING_KEY", `${this.name}: ${i8}`);
        throw new Error(n7);
      }
      return s7;
    }), J4(this, "del", async (i8) => {
      this.isInitialized(), this.keychain.delete(i8), await this.persist();
    }), this.core = e3, this.logger = X2(t3, this.name);
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e3) {
    await this.core.storage.setItem(this.storageKey, mi(e3));
  }
  async getKeyChain() {
    const e3 = await this.core.storage.getItem(this.storageKey);
    return typeof e3 < "u" ? wi(e3) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var zn2 = Object.defineProperty;
var Ln2 = (r5, e3, t3) => e3 in r5 ? zn2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var R4 = (r5, e3, t3) => Ln2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var wi2 = class {
  constructor(e3, t3, i8) {
    this.core = e3, this.logger = t3, R4(this, "name", Tt2), R4(this, "keychain"), R4(this, "randomSessionIdentifier", la()), R4(this, "initialized", false), R4(this, "clientId"), R4(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), R4(this, "hasKeys", (s7) => (this.isInitialized(), this.keychain.has(s7))), R4(this, "getClientId", async () => {
      if (this.isInitialized(), this.clientId) return this.clientId;
      const s7 = await this.getClientSeed(), n7 = Po(s7), o7 = Qe(n7.publicKey);
      return this.clientId = o7, o7;
    }), R4(this, "generateKeyPair", () => {
      this.isInitialized();
      const s7 = ua2();
      return this.setPrivateKey(s7.publicKey, s7.privateKey);
    }), R4(this, "signJWT", async (s7) => {
      this.isInitialized();
      const n7 = await this.getClientSeed(), o7 = Po(n7), a8 = this.randomSessionIdentifier, c7 = Ct2;
      return await Qo(a8, s7, c7, o7);
    }), R4(this, "generateSharedKey", (s7, n7, o7) => {
      this.isInitialized();
      const a8 = this.getPrivateKey(s7), c7 = da(a8, n7);
      return this.setSymKey(c7, o7);
    }), R4(this, "setSymKey", async (s7, n7) => {
      this.isInitialized();
      const o7 = n7 || ha(s7);
      return await this.keychain.set(o7, s7), o7;
    }), R4(this, "deleteKeyPair", async (s7) => {
      this.isInitialized(), await this.keychain.del(s7);
    }), R4(this, "deleteSymKey", async (s7) => {
      this.isInitialized(), await this.keychain.del(s7);
    }), R4(this, "encode", async (s7, n7, o7) => {
      this.isInitialized();
      const a8 = rs(o7), c7 = safeJsonStringify(n7);
      if (xa(a8)) return ya(c7, o7?.encoding);
      if (va2(a8)) {
        const y7 = a8.senderPublicKey, _7 = a8.receiverPublicKey;
        s7 = await this.generateSharedKey(y7, _7);
      }
      const h6 = this.getSymKey(s7), { type: l5, senderPublicKey: g3 } = a8;
      return ga({ type: l5, symKey: h6, message: c7, senderPublicKey: g3, encoding: o7?.encoding });
    }), R4(this, "decode", async (s7, n7, o7) => {
      this.isInitialized();
      const a8 = wa(n7, o7);
      if (xa(a8)) {
        const c7 = ma(n7, o7?.encoding);
        return safeJsonParse(c7);
      }
      if (va2(a8)) {
        const c7 = a8.receiverPublicKey, h6 = a8.senderPublicKey;
        s7 = await this.generateSharedKey(c7, h6);
      }
      try {
        const c7 = this.getSymKey(s7), h6 = ba({ symKey: c7, encoded: n7, encoding: o7?.encoding });
        return safeJsonParse(h6);
      } catch (c7) {
        this.logger.error(`Failed to decode message from topic: '${s7}', clientId: '${await this.getClientId()}'`), this.logger.error(c7);
      }
    }), R4(this, "getPayloadType", (s7, n7 = oe) => {
      const o7 = ze({ encoded: s7, encoding: n7 });
      return Zt(o7.type);
    }), R4(this, "getPayloadSenderPublicKey", (s7, n7 = oe) => {
      const o7 = ze({ encoded: s7, encoding: n7 });
      return o7.senderPublicKey ? toString(o7.senderPublicKey, rt) : void 0;
    }), this.core = e3, this.logger = X2(t3, this.name), this.keychain = i8 || new _i2(this.core, this.logger);
  }
  get context() {
    return w2(this.logger);
  }
  async setPrivateKey(e3, t3) {
    return await this.keychain.set(e3, t3), e3;
  }
  getPrivateKey(e3) {
    return this.keychain.get(e3);
  }
  async getClientSeed() {
    let e3 = "";
    try {
      e3 = this.keychain.get(Me2);
    } catch {
      e3 = la(), await this.keychain.set(Me2, e3);
    }
    return xn2(e3, "base16");
  }
  getSymKey(e3) {
    return this.keychain.get(e3);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var kn2 = Object.defineProperty;
var jn2 = Object.defineProperties;
var Un2 = Object.getOwnPropertyDescriptors;
var Ei = Object.getOwnPropertySymbols;
var Fn2 = Object.prototype.hasOwnProperty;
var Mn2 = Object.prototype.propertyIsEnumerable;
var We2 = (r5, e3, t3) => e3 in r5 ? kn2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var Kn2 = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) Fn2.call(e3, t3) && We2(r5, t3, e3[t3]);
  if (Ei) for (var t3 of Ei(e3)) Mn2.call(e3, t3) && We2(r5, t3, e3[t3]);
  return r5;
};
var Bn2 = (r5, e3) => jn2(r5, Un2(e3));
var K4 = (r5, e3, t3) => We2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Ii2 = class extends y5 {
  constructor(e3, t3) {
    super(e3, t3), this.logger = e3, this.core = t3, K4(this, "messages", /* @__PURE__ */ new Map()), K4(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), K4(this, "name", Ot2), K4(this, "version", Rt2), K4(this, "initialized", false), K4(this, "storagePrefix", W5), K4(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i8 = await this.getRelayerMessages();
          typeof i8 < "u" && (this.messages = i8);
          const s7 = await this.getRelayerMessagesWithoutClientAck();
          typeof s7 < "u" && (this.messagesWithoutClientAck = s7), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i8) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i8);
        } finally {
          this.initialized = true;
        }
      }
    }), K4(this, "set", async (i8, s7, n7) => {
      this.isInitialized();
      const o7 = pa2(s7);
      let a8 = this.messages.get(i8);
      if (typeof a8 > "u" && (a8 = {}), typeof a8[o7] < "u") return o7;
      if (a8[o7] = s7, this.messages.set(i8, a8), n7 === ye2.inbound) {
        const c7 = this.messagesWithoutClientAck.get(i8) || {};
        this.messagesWithoutClientAck.set(i8, Bn2(Kn2({}, c7), { [o7]: s7 }));
      }
      return await this.persist(), o7;
    }), K4(this, "get", (i8) => {
      this.isInitialized();
      let s7 = this.messages.get(i8);
      return typeof s7 > "u" && (s7 = {}), s7;
    }), K4(this, "getWithoutAck", (i8) => {
      this.isInitialized();
      const s7 = {};
      for (const n7 of i8) {
        const o7 = this.messagesWithoutClientAck.get(n7) || {};
        s7[n7] = Object.values(o7);
      }
      return s7;
    }), K4(this, "has", (i8, s7) => {
      this.isInitialized();
      const n7 = this.get(i8), o7 = pa2(s7);
      return typeof n7[o7] < "u";
    }), K4(this, "ack", async (i8, s7) => {
      this.isInitialized();
      const n7 = this.messagesWithoutClientAck.get(i8);
      if (typeof n7 > "u") return;
      const o7 = pa2(s7);
      delete n7[o7], Object.keys(n7).length === 0 ? this.messagesWithoutClientAck.delete(i8) : this.messagesWithoutClientAck.set(i8, n7), await this.persist();
    }), K4(this, "del", async (i8) => {
      this.isInitialized(), this.messages.delete(i8), this.messagesWithoutClientAck.delete(i8), await this.persist();
    }), this.logger = X2(e3, this.name), this.core = t3;
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e3) {
    await this.core.storage.setItem(this.storageKey, mi(e3));
  }
  async setRelayerMessagesWithoutClientAck(e3) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, mi(e3));
  }
  async getRelayerMessages() {
    const e3 = await this.core.storage.getItem(this.storageKey);
    return typeof e3 < "u" ? wi(e3) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e3 = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e3 < "u" ? wi(e3) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var Vn2 = Object.defineProperty;
var qn3 = Object.defineProperties;
var Gn2 = Object.getOwnPropertyDescriptors;
var Ti2 = Object.getOwnPropertySymbols;
var Wn2 = Object.prototype.hasOwnProperty;
var Hn2 = Object.prototype.propertyIsEnumerable;
var He2 = (r5, e3, t3) => e3 in r5 ? Vn2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var ce = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) Wn2.call(e3, t3) && He2(r5, t3, e3[t3]);
  if (Ti2) for (var t3 of Ti2(e3)) Hn2.call(e3, t3) && He2(r5, t3, e3[t3]);
  return r5;
};
var Ci2 = (r5, e3) => qn3(r5, Gn2(e3));
var G3 = (r5, e3, t3) => He2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Yn2 = class extends m3 {
  constructor(e3, t3) {
    super(e3, t3), this.relayer = e3, this.logger = t3, G3(this, "events", new import_events3.EventEmitter()), G3(this, "name", xt2), G3(this, "queue", /* @__PURE__ */ new Map()), G3(this, "publishTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE)), G3(this, "initialPublishTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), G3(this, "needsTransportRestart", false), G3(this, "publish", async (i8, s7, n7) => {
      var o7, a8, c7, h6, l5;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i8, message: s7, opts: n7 } });
      const g3 = n7?.ttl || At2, y7 = n7?.prompt || false, _7 = n7?.tag || 0, u7 = n7?.id || getBigIntRpcId().toString(), m6 = Aa(Ba().protocol), D7 = { id: u7, method: n7?.publishMethod || m6.publish, params: ce({ topic: i8, message: s7, ttl: g3, prompt: y7, tag: _7, attestation: n7?.attestation }, n7?.tvf) }, w5 = `Failed to publish payload, please try again. id:${u7} tag:${_7}`;
      try {
        Dt((o7 = D7.params) == null ? void 0 : o7.prompt) && ((a8 = D7.params) == null || delete a8.prompt), Dt((c7 = D7.params) == null ? void 0 : c7.tag) && ((h6 = D7.params) == null || delete h6.tag);
        const E8 = new Promise(async (L5) => {
          const I5 = ({ id: T5 }) => {
            var S8;
            ((S8 = D7.id) == null ? void 0 : S8.toString()) === T5.toString() && (this.removeRequestFromQueue(T5), this.relayer.events.removeListener(C5.publish, I5), L5());
          };
          this.relayer.events.on(C5.publish, I5);
          const k5 = Ai(new Promise((T5, S8) => {
            this.rpcPublish(D7, n7).then(T5).catch((O5) => {
              this.logger.warn(O5, O5?.message), S8(O5);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u7} tag:${_7}`);
          try {
            await k5, this.events.removeListener(C5.publish, I5);
          } catch (T5) {
            this.queue.set(u7, { request: D7, opts: n7, attempt: 1 }), this.logger.warn(T5, T5?.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: u7, topic: i8, message: s7, opts: n7 } }), await Ai(E8, this.publishTimeout, w5);
      } catch (E8) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(E8), (l5 = n7?.internal) != null && l5.throwOnFailedPublish) throw E8;
      } finally {
        this.queue.delete(u7);
      }
    }), G3(this, "publishCustom", async (i8) => {
      var s7, n7, o7, a8, c7;
      this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: i8 });
      const { payload: h6, opts: l5 = {} } = i8, { attestation: g3, tvf: y7, publishMethod: _7, prompt: u7, tag: m6, ttl: D7 = import_time2.FIVE_MINUTES } = l5, w5 = l5.id || getBigIntRpcId().toString(), E8 = Aa(Ba().protocol), L5 = _7 || E8.publish, I5 = { id: w5, method: L5, params: ce(Ci2(ce({}, h6), { ttl: D7, prompt: u7, tag: m6, attestation: g3 }), y7) }, k5 = `Failed to publish custom payload, please try again. id:${w5} tag:${m6}`;
      try {
        Dt((s7 = I5.params) == null ? void 0 : s7.prompt) && ((n7 = I5.params) == null || delete n7.prompt), Dt((o7 = I5.params) == null ? void 0 : o7.tag) && ((a8 = I5.params) == null || delete a8.tag);
        const T5 = new Promise(async (S8) => {
          const O5 = ({ id: Z4 }) => {
            var we4;
            ((we4 = I5.id) == null ? void 0 : we4.toString()) === Z4.toString() && (this.removeRequestFromQueue(Z4), this.relayer.events.removeListener(C5.publish, O5), S8());
          };
          this.relayer.events.on(C5.publish, O5);
          const te3 = Ai(new Promise((Z4, we4) => {
            this.rpcPublish(I5, l5).then(Z4).catch((Ee3) => {
              this.logger.warn(Ee3, Ee3?.message), we4(Ee3);
            });
          }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${L5} id:${w5} tag:${m6}`);
          try {
            await te3, this.events.removeListener(C5.publish, O5);
          } catch (Z4) {
            this.queue.set(w5, { request: I5, opts: l5, attempt: 1 }), this.logger.warn(Z4, Z4?.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: w5, payload: h6, opts: l5 } }), await Ai(T5, this.publishTimeout, k5);
      } catch (T5) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T5), (c7 = l5?.internal) != null && c7.throwOnFailedPublish) throw T5;
      } finally {
        this.queue.delete(w5);
      }
    }), G3(this, "on", (i8, s7) => {
      this.events.on(i8, s7);
    }), G3(this, "once", (i8, s7) => {
      this.events.once(i8, s7);
    }), G3(this, "off", (i8, s7) => {
      this.events.off(i8, s7);
    }), G3(this, "removeListener", (i8, s7) => {
      this.events.removeListener(i8, s7);
    }), this.relayer = e3, this.logger = X2(t3, this.name), this.registerEventListeners();
  }
  get context() {
    return w2(this.logger);
  }
  async rpcPublish(e3, t3) {
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e3 });
    const i8 = await this.relayer.request(e3);
    return this.relayer.events.emit(C5.publish, ce(ce({}, e3), t3)), this.logger.debug("Successfully Published Payload"), i8;
  }
  removeRequestFromQueue(e3) {
    this.queue.delete(e3);
  }
  checkQueue() {
    this.queue.forEach(async (e3, t3) => {
      var i8;
      const s7 = e3.attempt + 1;
      this.queue.set(t3, Ci2(ce({}, e3), { attempt: s7 })), this.logger.warn({}, `Publisher: queue->publishing: ${e3.request.id}, tag: ${(i8 = e3.request.params) == null ? void 0 : i8.tag}, attempt: ${s7}`), await this.rpcPublish(e3.request, e3.opts), this.logger.warn({}, `Publisher: queue->published: ${e3.request.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r3.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C5.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C5.message_ack, (e3) => {
      this.removeRequestFromQueue(e3.id.toString());
    });
  }
};
var Jn2 = Object.defineProperty;
var Xn2 = (r5, e3, t3) => e3 in r5 ? Jn2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var he2 = (r5, e3, t3) => Xn2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Zn2 = class {
  constructor() {
    he2(this, "map", /* @__PURE__ */ new Map()), he2(this, "set", (e3, t3) => {
      const i8 = this.get(e3);
      this.exists(e3, t3) || this.map.set(e3, [...i8, t3]);
    }), he2(this, "get", (e3) => this.map.get(e3) || []), he2(this, "exists", (e3, t3) => this.get(e3).includes(t3)), he2(this, "delete", (e3, t3) => {
      if (typeof t3 > "u") {
        this.map.delete(e3);
        return;
      }
      if (!this.map.has(e3)) return;
      const i8 = this.get(e3);
      if (!this.exists(e3, t3)) return;
      const s7 = i8.filter((n7) => n7 !== t3);
      if (!s7.length) {
        this.map.delete(e3);
        return;
      }
      this.map.set(e3, s7);
    }), he2(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Qn = Object.defineProperty;
var eo2 = Object.defineProperties;
var to2 = Object.getOwnPropertyDescriptors;
var Pi2 = Object.getOwnPropertySymbols;
var io2 = Object.prototype.hasOwnProperty;
var so2 = Object.prototype.propertyIsEnumerable;
var Ye2 = (r5, e3, t3) => e3 in r5 ? Qn(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var fe = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) io2.call(e3, t3) && Ye2(r5, t3, e3[t3]);
  if (Pi2) for (var t3 of Pi2(e3)) so2.call(e3, t3) && Ye2(r5, t3, e3[t3]);
  return r5;
};
var Je2 = (r5, e3) => eo2(r5, to2(e3));
var f8 = (r5, e3, t3) => Ye2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Si2 = class extends P4 {
  constructor(e3, t3) {
    super(e3, t3), this.relayer = e3, this.logger = t3, f8(this, "subscriptions", /* @__PURE__ */ new Map()), f8(this, "topicMap", new Zn2()), f8(this, "events", new import_events3.EventEmitter()), f8(this, "name", Ft2), f8(this, "version", Mt2), f8(this, "pending", /* @__PURE__ */ new Map()), f8(this, "cached", []), f8(this, "initialized", false), f8(this, "storagePrefix", W5), f8(this, "subscribeTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE)), f8(this, "initialSubscribeTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), f8(this, "clientId"), f8(this, "batchSubscribeTopicsLimit", 500), f8(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f8(this, "subscribe", async (i8, s7) => {
      var n7;
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i8, opts: s7 } });
      try {
        const o7 = Ba(s7), a8 = { topic: i8, relay: o7, transportType: s7?.transportType };
        (n7 = s7?.internal) != null && n7.skipSubscribe || this.pending.set(i8, a8);
        const c7 = await this.rpcSubscribe(i8, o7, s7);
        return typeof c7 == "string" && (this.onSubscribe(c7, a8), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i8, opts: s7 } })), c7;
      } catch (o7) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o7), o7;
      }
    }), f8(this, "unsubscribe", async (i8, s7) => {
      this.isInitialized(), typeof s7?.id < "u" ? await this.unsubscribeById(i8, s7.id, s7) : await this.unsubscribeByTopic(i8, s7);
    }), f8(this, "isSubscribed", (i8) => new Promise((s7) => {
      s7(this.topicMap.topics.includes(i8));
    })), f8(this, "isKnownTopic", (i8) => new Promise((s7) => {
      s7(this.topicMap.topics.includes(i8) || this.pending.has(i8) || this.cached.some((n7) => n7.topic === i8));
    })), f8(this, "on", (i8, s7) => {
      this.events.on(i8, s7);
    }), f8(this, "once", (i8, s7) => {
      this.events.once(i8, s7);
    }), f8(this, "off", (i8, s7) => {
      this.events.off(i8, s7);
    }), f8(this, "removeListener", (i8, s7) => {
      this.events.removeListener(i8, s7);
    }), f8(this, "start", async () => {
      await this.onConnect();
    }), f8(this, "stop", async () => {
      await this.onDisconnect();
    }), f8(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f8(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i8 = [];
      this.pending.forEach((s7) => {
        i8.push(s7);
      }), await this.batchSubscribe(i8);
    }), f8(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r3.pulse, async () => {
        await this.checkPending();
      }), this.events.on(j5.created, async (i8) => {
        const s7 = j5.created;
        this.logger.info(`Emitting ${s7}`), this.logger.debug({ type: "event", event: s7, data: i8 }), await this.persist();
      }), this.events.on(j5.deleted, async (i8) => {
        const s7 = j5.deleted;
        this.logger.info(`Emitting ${s7}`), this.logger.debug({ type: "event", event: s7, data: i8 }), await this.persist();
      });
    }), this.relayer = e3, this.logger = X2(t3, this.name), this.clientId = "";
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e3, t3) {
    let i8 = false;
    try {
      i8 = this.getSubscription(e3).topic === t3;
    } catch {
    }
    return i8;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e3, t3) {
    const i8 = this.topicMap.get(e3);
    await Promise.all(i8.map(async (s7) => await this.unsubscribeById(e3, s7, t3)));
  }
  async unsubscribeById(e3, t3, i8) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e3, id: t3, opts: i8 } });
    try {
      const s7 = Ba(i8);
      await this.restartToComplete({ topic: e3, id: t3, relay: s7 }), await this.rpcUnsubscribe(e3, t3, s7);
      const n7 = zt("USER_DISCONNECTED", `${this.name}, ${e3}`);
      await this.onUnsubscribe(e3, t3, n7), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e3, id: t3, opts: i8 } });
    } catch (s7) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s7), s7;
    }
  }
  async rpcSubscribe(e3, t3, i8) {
    var s7, n7;
    const o7 = await this.getSubscriptionId(e3);
    if ((s7 = i8?.internal) != null && s7.skipSubscribe) return o7;
    (!i8 || i8?.transportType === ee2.relay) && await this.restartToComplete({ topic: e3, id: e3, relay: t3 });
    const a8 = { method: Aa(t3.protocol).subscribe, params: { topic: e3 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a8 });
    const c7 = (n7 = i8?.internal) == null ? void 0 : n7.throwOnFailedPublish;
    try {
      if (i8?.transportType === ee2.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a8).catch((g3) => this.logger.warn(g3));
      }, (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND)), o7;
      const h6 = new Promise(async (g3) => {
        const y7 = (_7) => {
          _7.topic === e3 && (this.events.removeListener(j5.created, y7), g3(_7.id));
        };
        this.events.on(j5.created, y7);
        try {
          const _7 = await Ai(new Promise((u7, m6) => {
            this.relayer.request(a8).catch((D7) => {
              this.logger.warn(D7, D7?.message), m6(D7);
            }).then(u7);
          }), this.initialSubscribeTimeout, `Subscribing to ${e3} failed, please try again`);
          this.events.removeListener(j5.created, y7), g3(_7);
        } catch {
        }
      }), l5 = await Ai(h6, this.subscribeTimeout, `Subscribing to ${e3} failed, please try again`);
      if (!l5 && c7) throw new Error(`Subscribing to ${e3} failed, please try again`);
      return l5 ? o7 : null;
    } catch (h6) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C5.connection_stalled), c7) throw h6;
    }
    return null;
  }
  async rpcBatchSubscribe(e3) {
    if (!e3.length) return;
    const t3 = e3[0].relay, i8 = { method: Aa(t3.protocol).batchSubscribe, params: { topics: e3.map((s7) => s7.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i8 });
    try {
      await await Ai(new Promise((s7) => {
        this.relayer.request(i8).catch((n7) => this.logger.warn(n7)).then(s7);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C5.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e3) {
    if (!e3.length) return;
    const t3 = e3[0].relay, i8 = { method: Aa(t3.protocol).batchFetchMessages, params: { topics: e3.map((n7) => n7.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i8 });
    let s7;
    try {
      s7 = await await Ai(new Promise((n7, o7) => {
        this.relayer.request(i8).catch((a8) => {
          this.logger.warn(a8), o7(a8);
        }).then(n7);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C5.connection_stalled);
    }
    return s7;
  }
  rpcUnsubscribe(e3, t3, i8) {
    const s7 = { method: Aa(i8.protocol).unsubscribe, params: { topic: e3, id: t3 } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s7 }), this.relayer.request(s7);
  }
  onSubscribe(e3, t3) {
    this.setSubscription(e3, Je2(fe({}, t3), { id: e3 })), this.pending.delete(t3.topic);
  }
  onBatchSubscribe(e3) {
    e3.length && e3.forEach((t3) => {
      this.setSubscription(t3.id, fe({}, t3)), this.pending.delete(t3.topic);
    });
  }
  async onUnsubscribe(e3, t3, i8) {
    this.events.removeAllListeners(t3), this.hasSubscription(t3, e3) && this.deleteSubscription(t3, i8), await this.relayer.messages.del(e3);
  }
  async setRelayerSubscriptions(e3) {
    await this.relayer.core.storage.setItem(this.storageKey, e3);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e3, t3) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e3, subscription: t3 }), this.addSubscription(e3, t3);
  }
  addSubscription(e3, t3) {
    this.subscriptions.set(e3, fe({}, t3)), this.topicMap.set(t3.topic, e3), this.events.emit(j5.created, t3);
  }
  getSubscription(e3) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e3 });
    const t3 = this.subscriptions.get(e3);
    if (!t3) {
      const { message: i8 } = Bt("NO_MATCHING_KEY", `${this.name}: ${e3}`);
      throw new Error(i8);
    }
    return t3;
  }
  deleteSubscription(e3, t3) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e3, reason: t3 });
    const i8 = this.getSubscription(e3);
    this.subscriptions.delete(e3), this.topicMap.delete(i8.topic, e3), this.events.emit(j5.deleted, Je2(fe({}, i8), { reason: t3 }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(j5.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e3 = [...this.cached], t3 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i8 = 0; i8 < t3; i8++) {
        const s7 = e3.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s7);
      }
    }
    this.events.emit(j5.resubscribed);
  }
  async restore() {
    try {
      const e3 = await this.getRelayerSubscriptions();
      if (typeof e3 > "u" || !e3.length) return;
      if (this.subscriptions.size && !e3.every((t3) => {
        var i8;
        return t3.topic === ((i8 = this.subscriptions.get(t3.id)) == null ? void 0 : i8.topic);
      })) {
        const { message: t3 } = Bt("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t3);
      }
      this.cached = e3, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e3) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e3);
    }
  }
  async batchSubscribe(e3) {
    e3.length && (await this.rpcBatchSubscribe(e3), this.onBatchSubscribe(await Promise.all(e3.map(async (t3) => Je2(fe({}, t3), { id: await this.getSubscriptionId(t3.topic) })))));
  }
  async batchFetchMessages(e3) {
    if (!e3.length) return;
    this.logger.trace(`Fetching batch messages for ${e3.length} subscriptions`);
    const t3 = await this.rpcBatchFetchMessages(e3);
    t3 && t3.messages && (await Li((0, import_time2.toMiliseconds)(import_time2.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t3.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
  async restartToComplete(e3) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e3), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e3) {
    return pa2(e3 + await this.getClientId());
  }
};
var ro = Object.defineProperty;
var Oi2 = Object.getOwnPropertySymbols;
var no = Object.prototype.hasOwnProperty;
var oo = Object.prototype.propertyIsEnumerable;
var Xe2 = (r5, e3, t3) => e3 in r5 ? ro(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var Ri2 = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) no.call(e3, t3) && Xe2(r5, t3, e3[t3]);
  if (Oi2) for (var t3 of Oi2(e3)) oo.call(e3, t3) && Xe2(r5, t3, e3[t3]);
  return r5;
};
var p5 = (r5, e3, t3) => Xe2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Ai2 = class extends d2 {
  constructor(e3) {
    var t3;
    super(e3), p5(this, "protocol", "wc"), p5(this, "version", 2), p5(this, "core"), p5(this, "logger"), p5(this, "events", new import_events3.EventEmitter()), p5(this, "provider"), p5(this, "messages"), p5(this, "subscriber"), p5(this, "publisher"), p5(this, "name", zt2), p5(this, "transportExplicitlyClosed", false), p5(this, "initialized", false), p5(this, "connectionAttemptInProgress", false), p5(this, "relayUrl"), p5(this, "projectId"), p5(this, "packageName"), p5(this, "bundleId"), p5(this, "hasExperiencedNetworkDisruption", false), p5(this, "pingTimeout"), p5(this, "heartBeatTimeout", (0, import_time2.toMiliseconds)(import_time2.THIRTY_SECONDS + import_time2.FIVE_SECONDS)), p5(this, "reconnectTimeout"), p5(this, "connectPromise"), p5(this, "reconnectInProgress", false), p5(this, "requestsInFlight", []), p5(this, "connectTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), p5(this, "request", async (i8) => {
      var s7, n7;
      this.logger.debug("Publishing Request Payload");
      const o7 = i8.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: o7, method: i8.method, topic: (s7 = i8.params) == null ? void 0 : s7.topic }, "relayer.request - publishing...");
        const a8 = `${o7}:${((n7 = i8.params) == null ? void 0 : n7.tag) || ""}`;
        this.requestsInFlight.push(a8);
        const c7 = await this.provider.request(i8);
        return this.requestsInFlight = this.requestsInFlight.filter((h6) => h6 !== a8), c7;
      } catch (a8) {
        throw this.logger.debug(`Failed to Publish Request: ${o7}`), a8;
      }
    }), p5(this, "resetPingTimeout", () => {
      rn() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var i8, s7, n7, o7;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o7 = (n7 = (s7 = (i8 = this.provider) == null ? void 0 : i8.connection) == null ? void 0 : s7.socket) == null ? void 0 : n7.terminate) == null || o7.call(n7);
        } catch (a8) {
          this.logger.warn(a8, a8?.message);
        }
      }, this.heartBeatTimeout));
    }), p5(this, "onPayloadHandler", (i8) => {
      this.onProviderPayload(i8), this.resetPingTimeout();
    }), p5(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(C5.connect);
    }), p5(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), p5(this, "onProviderErrorHandler", (i8) => {
      this.logger.fatal(`Fatal socket error: ${i8.message}`), this.events.emit(C5.error, i8), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), p5(this, "registerProviderListeners", () => {
      this.provider.on(M4.payload, this.onPayloadHandler), this.provider.on(M4.connect, this.onConnectHandler), this.provider.on(M4.disconnect, this.onDisconnectHandler), this.provider.on(M4.error, this.onProviderErrorHandler);
    }), this.core = e3.core, this.logger = wu({ logger: (t3 = e3.logger) != null ? t3 : $t2, name: this.name }), this.messages = new Ii2(this.logger, e3.core), this.subscriber = new Si2(this, this.logger), this.publisher = new Yn2(this, this.logger), this.projectId = e3?.projectId, this.relayUrl = e3?.relayUrl || Ke2, ai() ? this.packageName = li() : ui() && (this.bundleId = li()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.transportOpen().catch((e3) => this.logger.warn(e3, e3?.message));
  }
  get context() {
    return w2(this.logger);
  }
  get connected() {
    var e3, t3, i8;
    return ((i8 = (t3 = (e3 = this.provider) == null ? void 0 : e3.connection) == null ? void 0 : t3.socket) == null ? void 0 : i8.readyState) === 1 || false;
  }
  get connecting() {
    var e3, t3, i8;
    return ((i8 = (t3 = (e3 = this.provider) == null ? void 0 : e3.connection) == null ? void 0 : t3.socket) == null ? void 0 : i8.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e3, t3, i8) {
    this.isInitialized(), await this.publisher.publish(e3, t3, i8), await this.recordMessageEvent({ topic: e3, message: t3, publishedAt: Date.now(), transportType: ee2.relay }, ye2.outbound);
  }
  async publishCustom(e3) {
    this.isInitialized(), await this.publisher.publishCustom(e3);
  }
  async subscribe(e3, t3) {
    var i8, s7, n7;
    this.isInitialized(), (!(t3 != null && t3.transportType) || t3?.transportType === "relay") && await this.toEstablishConnection();
    const o7 = typeof ((i8 = t3?.internal) == null ? void 0 : i8.throwOnFailedPublish) > "u" ? true : (s7 = t3?.internal) == null ? void 0 : s7.throwOnFailedPublish;
    let a8 = ((n7 = this.subscriber.topicMap.get(e3)) == null ? void 0 : n7[0]) || "", c7;
    const h6 = (l5) => {
      l5.topic === e3 && (this.subscriber.off(j5.created, h6), c7());
    };
    return await Promise.all([new Promise((l5) => {
      c7 = l5, this.subscriber.on(j5.created, h6);
    }), new Promise(async (l5, g3) => {
      a8 = await this.subscriber.subscribe(e3, Ri2({ internal: { throwOnFailedPublish: o7 } }, t3)).catch((y7) => {
        o7 && g3(y7);
      }) || a8, l5();
    })]), a8;
  }
  async unsubscribe(e3, t3) {
    this.isInitialized(), await this.subscriber.unsubscribe(e3, t3);
  }
  on(e3, t3) {
    this.events.on(e3, t3);
  }
  once(e3, t3) {
    this.events.once(e3, t3);
  }
  off(e3, t3) {
    this.events.off(e3, t3);
  }
  removeListener(e3, t3) {
    this.events.removeListener(e3, t3);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Ai(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e3) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t3, i8) => {
      await this.connect(e3).then(t3).catch(i8).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e3) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e3 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await uu()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e3) {
    if (e3?.length === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t3 = e3.sort((i8, s7) => i8.publishedAt - s7.publishedAt);
    this.logger.debug(`Batch of ${t3.length} message events sorted`);
    for (const i8 of t3) try {
      await this.onMessageEvent(i8);
    } catch (s7) {
      this.logger.warn(s7, "Error while processing batch message event: " + s7?.message);
    }
    this.logger.trace(`Batch of ${t3.length} message events processed`);
  }
  async onLinkMessageEvent(e3, t3) {
    const { topic: i8 } = e3;
    if (!t3.sessionExists) {
      const s7 = Ni(import_time2.FIVE_MINUTES), n7 = { topic: i8, expiry: s7, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i8, n7);
    }
    this.events.emit(C5.message, e3), await this.recordMessageEvent(e3, ye2.inbound);
  }
  async connect(e3) {
    await this.confirmOnlineStateOrThrow(), e3 && e3 !== this.relayUrl && (this.relayUrl = e3, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t3 = 1;
    for (; t3 < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t3}...`), await this.createProvider(), await new Promise(async (i8, s7) => {
          const n7 = () => {
            s7(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(M4.disconnect, n7), await Ai(new Promise((o7, a8) => {
            this.provider.connect().then(o7).catch(a8);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o7) => {
            s7(o7);
          }).finally(() => {
            this.provider.off(M4.disconnect, n7), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o7, a8) => {
            const c7 = () => {
              s7(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(M4.disconnect, c7), await this.subscriber.start().then(o7).catch(a8).finally(() => {
              this.provider.off(M4.disconnect, c7);
            });
          }), this.hasExperiencedNetworkDisruption = false, i8();
        });
      } catch (i8) {
        await this.subscriber.stop();
        const s7 = i8;
        this.logger.warn({}, s7.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t3}`);
        break;
      }
      await new Promise((i8) => setTimeout(i8, (0, import_time2.toMiliseconds)(t3 * 1))), t3++;
    }
  }
  startPingTimeout() {
    var e3, t3, i8, s7, n7;
    if (rn()) try {
      (t3 = (e3 = this.provider) == null ? void 0 : e3.connection) != null && t3.socket && ((n7 = (s7 = (i8 = this.provider) == null ? void 0 : i8.connection) == null ? void 0 : s7.socket) == null || n7.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o7) {
      this.logger.warn(o7, o7?.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e3 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o3(new f3(pi({ sdkVersion: Pe2, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e3, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e3, t3) {
    const { topic: i8, message: s7 } = e3;
    await this.messages.set(i8, s7, t3);
  }
  async shouldIgnoreMessageEvent(e3) {
    const { topic: t3, message: i8 } = e3;
    if (!i8 || i8.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i8}`), true;
    if (!await this.subscriber.isKnownTopic(t3)) return this.logger.warn(`Ignoring message for unknown topic ${t3}`), true;
    const s7 = this.messages.has(t3, i8);
    return s7 && this.logger.warn(`Ignoring duplicate message: ${i8}`), s7;
  }
  async onProviderPayload(e3) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e3 }), isJsonRpcRequest(e3)) {
      if (!e3.method.endsWith(Lt2)) return;
      const t3 = e3.params, { topic: i8, message: s7, publishedAt: n7, attestation: o7 } = t3.data, a8 = { topic: i8, message: s7, publishedAt: n7, transportType: ee2.relay, attestation: o7 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ri2({ type: "event", event: t3.id }, a8)), this.events.emit(t3.id, a8), await this.acknowledgePayload(e3), await this.onMessageEvent(a8);
    } else isJsonRpcResponse(e3) && this.events.emit(C5.message_ack, e3);
  }
  async onMessageEvent(e3) {
    await this.shouldIgnoreMessageEvent(e3) || (await this.recordMessageEvent(e3, ye2.inbound), this.events.emit(C5.message, e3));
  }
  async acknowledgePayload(e3) {
    const t3 = formatJsonRpcResult(e3.id, true);
    await this.provider.connection.send(t3);
  }
  unregisterProviderListeners() {
    this.provider.off(M4.payload, this.onPayloadHandler), this.provider.off(M4.connect, this.onConnectHandler), this.provider.off(M4.disconnect, this.onDisconnectHandler), this.provider.off(M4.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e3 = await uu();
    lu(async (t3) => {
      e3 !== t3 && (e3 = t3, t3 ? await this.transportOpen().catch((i8) => this.logger.error(i8, i8?.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    }), this.core.heartbeat.on(r3.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && du()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (t3) {
        this.logger.warn(t3, t3?.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C5.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e3) => this.logger.error(e3, e3?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, (0, import_time2.toMiliseconds)(kt2)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
};
function ao2(r5, e3) {
  return r5 === e3 || Number.isNaN(r5) && Number.isNaN(e3);
}
function xi(r5) {
  return Object.getOwnPropertySymbols(r5).filter((e3) => Object.prototype.propertyIsEnumerable.call(r5, e3));
}
function Ni2(r5) {
  return r5 == null ? r5 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r5);
}
var co2 = "[object RegExp]";
var ho2 = "[object String]";
var lo2 = "[object Number]";
var uo = "[object Boolean]";
var $i2 = "[object Arguments]";
var po2 = "[object Symbol]";
var go2 = "[object Date]";
var yo2 = "[object Map]";
var bo2 = "[object Set]";
var mo2 = "[object Array]";
var fo = "[object Function]";
var Do2 = "[object ArrayBuffer]";
var Ze2 = "[object Object]";
var vo2 = "[object Error]";
var _o2 = "[object DataView]";
var wo2 = "[object Uint8Array]";
var Eo2 = "[object Uint8ClampedArray]";
var Io2 = "[object Uint16Array]";
var To2 = "[object Uint32Array]";
var Co2 = "[object BigUint64Array]";
var Po3 = "[object Int8Array]";
var So2 = "[object Int16Array]";
var Oo2 = "[object Int32Array]";
var Ro2 = "[object BigInt64Array]";
var Ao2 = "[object Float32Array]";
var xo2 = "[object Float64Array]";
function No2() {
}
function zi2(r5) {
  if (!r5 || typeof r5 != "object") return false;
  const e3 = Object.getPrototypeOf(r5);
  return e3 === null || e3 === Object.prototype || Object.getPrototypeOf(e3) === null ? Object.prototype.toString.call(r5) === "[object Object]" : false;
}
function $o2(r5, e3, t3) {
  return De2(r5, e3, void 0, void 0, void 0, void 0, t3);
}
function De2(r5, e3, t3, i8, s7, n7, o7) {
  const a8 = o7(r5, e3, t3, i8, s7, n7);
  if (a8 !== void 0) return a8;
  if (typeof r5 == typeof e3) switch (typeof r5) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r5 === e3;
    case "number":
      return r5 === e3 || Object.is(r5, e3);
    case "function":
      return r5 === e3;
    case "object":
      return ve2(r5, e3, n7, o7);
  }
  return ve2(r5, e3, n7, o7);
}
function ve2(r5, e3, t3, i8) {
  if (Object.is(r5, e3)) return true;
  let s7 = Ni2(r5), n7 = Ni2(e3);
  if (s7 === $i2 && (s7 = Ze2), n7 === $i2 && (n7 = Ze2), s7 !== n7) return false;
  switch (s7) {
    case ho2:
      return r5.toString() === e3.toString();
    case lo2: {
      const c7 = r5.valueOf(), h6 = e3.valueOf();
      return ao2(c7, h6);
    }
    case uo:
    case go2:
    case po2:
      return Object.is(r5.valueOf(), e3.valueOf());
    case co2:
      return r5.source === e3.source && r5.flags === e3.flags;
    case fo:
      return r5 === e3;
  }
  t3 = t3 ?? /* @__PURE__ */ new Map();
  const o7 = t3.get(r5), a8 = t3.get(e3);
  if (o7 != null && a8 != null) return o7 === e3;
  t3.set(r5, e3), t3.set(e3, r5);
  try {
    switch (s7) {
      case yo2: {
        if (r5.size !== e3.size) return false;
        for (const [c7, h6] of r5.entries()) if (!e3.has(c7) || !De2(h6, e3.get(c7), c7, r5, e3, t3, i8)) return false;
        return true;
      }
      case bo2: {
        if (r5.size !== e3.size) return false;
        const c7 = Array.from(r5.values()), h6 = Array.from(e3.values());
        for (let l5 = 0; l5 < c7.length; l5++) {
          const g3 = c7[l5], y7 = h6.findIndex((_7) => De2(g3, _7, void 0, r5, e3, t3, i8));
          if (y7 === -1) return false;
          h6.splice(y7, 1);
        }
        return true;
      }
      case mo2:
      case wo2:
      case Eo2:
      case Io2:
      case To2:
      case Co2:
      case Po3:
      case So2:
      case Oo2:
      case Ro2:
      case Ao2:
      case xo2: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r5) !== Buffer.isBuffer(e3) || r5.length !== e3.length) return false;
        for (let c7 = 0; c7 < r5.length; c7++) if (!De2(r5[c7], e3[c7], c7, r5, e3, t3, i8)) return false;
        return true;
      }
      case Do2:
        return r5.byteLength !== e3.byteLength ? false : ve2(new Uint8Array(r5), new Uint8Array(e3), t3, i8);
      case _o2:
        return r5.byteLength !== e3.byteLength || r5.byteOffset !== e3.byteOffset ? false : ve2(new Uint8Array(r5), new Uint8Array(e3), t3, i8);
      case vo2:
        return r5.name === e3.name && r5.message === e3.message;
      case Ze2: {
        if (!(ve2(r5.constructor, e3.constructor, t3, i8) || zi2(r5) && zi2(e3))) return false;
        const h6 = [...Object.keys(r5), ...xi(r5)], l5 = [...Object.keys(e3), ...xi(e3)];
        if (h6.length !== l5.length) return false;
        for (let g3 = 0; g3 < h6.length; g3++) {
          const y7 = h6[g3], _7 = r5[y7];
          if (!Object.hasOwn(e3, y7)) return false;
          const u7 = e3[y7];
          if (!De2(_7, u7, y7, r5, e3, t3, i8)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t3.delete(r5), t3.delete(e3);
  }
}
function zo2(r5, e3) {
  return $o2(r5, e3, No2);
}
var Lo2 = Object.defineProperty;
var Li2 = Object.getOwnPropertySymbols;
var ko2 = Object.prototype.hasOwnProperty;
var jo2 = Object.prototype.propertyIsEnumerable;
var Qe2 = (r5, e3, t3) => e3 in r5 ? Lo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var ki2 = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) ko2.call(e3, t3) && Qe2(r5, t3, e3[t3]);
  if (Li2) for (var t3 of Li2(e3)) jo2.call(e3, t3) && Qe2(r5, t3, e3[t3]);
  return r5;
};
var U3 = (r5, e3, t3) => Qe2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var ji2 = class extends f7 {
  constructor(e3, t3, i8, s7 = W5, n7 = void 0) {
    super(e3, t3, i8, s7), this.core = e3, this.logger = t3, this.name = i8, U3(this, "map", /* @__PURE__ */ new Map()), U3(this, "version", jt2), U3(this, "cached", []), U3(this, "initialized", false), U3(this, "getKey"), U3(this, "storagePrefix", W5), U3(this, "recentlyDeleted", []), U3(this, "recentlyDeletedLimit", 200), U3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o7) => {
        this.getKey && o7 !== null && !Dt(o7) ? this.map.set(this.getKey(o7), o7) : Ga(o7) ? this.map.set(o7.id, o7) : za(o7) && this.map.set(o7.topic, o7);
      }), this.cached = [], this.initialized = true);
    }), U3(this, "set", async (o7, a8) => {
      this.isInitialized(), this.map.has(o7) ? await this.update(o7, a8) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o7, value: a8 }), this.map.set(o7, a8), await this.persist());
    }), U3(this, "get", (o7) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o7 }), this.getData(o7))), U3(this, "getAll", (o7) => (this.isInitialized(), o7 ? this.values.filter((a8) => Object.keys(o7).every((c7) => zo2(a8[c7], o7[c7]))) : this.values)), U3(this, "update", async (o7, a8) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o7, update: a8 });
      const c7 = ki2(ki2({}, this.getData(o7)), a8);
      this.map.set(o7, c7), await this.persist();
    }), U3(this, "delete", async (o7, a8) => {
      this.isInitialized(), this.map.has(o7) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o7, reason: a8 }), this.map.delete(o7), this.addToRecentlyDeleted(o7), await this.persist());
    }), this.logger = X2(t3, this.name), this.storagePrefix = s7, this.getKey = n7;
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e3) {
    this.recentlyDeleted.push(e3), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e3) {
    await this.core.storage.setItem(this.storageKey, e3);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e3) {
    const t3 = this.map.get(e3);
    if (!t3) {
      if (this.recentlyDeleted.includes(e3)) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e3}`);
        throw this.logger.error(s7), new Error(s7);
      }
      const { message: i8 } = Bt("NO_MATCHING_KEY", `${this.name}: ${e3}`);
      throw this.logger.error(i8), new Error(i8);
    }
    return t3;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e3 = await this.getDataStore();
      if (typeof e3 > "u" || !e3.length) return;
      if (this.map.size) {
        const { message: t3 } = Bt("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e3, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e3) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e3);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var Uo2 = Object.defineProperty;
var Fo2 = (r5, e3, t3) => e3 in r5 ? Uo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var d3 = (r5, e3, t3) => Fo2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Ui2 = class {
  constructor(e3, t3) {
    this.core = e3, this.logger = t3, d3(this, "name", Kt2), d3(this, "version", Bt2), d3(this, "events", new import_events3.default()), d3(this, "pairings"), d3(this, "initialized", false), d3(this, "storagePrefix", W5), d3(this, "ignoredPayloadTypes", [ie]), d3(this, "registeredMethods", []), d3(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), d3(this, "register", ({ methods: i8 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i8])];
    }), d3(this, "create", async (i8) => {
      this.isInitialized();
      const s7 = la(), n7 = await this.core.crypto.setSymKey(s7), o7 = Ni(import_time2.FIVE_MINUTES), a8 = { protocol: Nt2 }, c7 = { topic: n7, expiry: o7, relay: a8, active: false, methods: i8?.methods }, h6 = $a({ protocol: this.core.protocol, version: this.core.version, topic: n7, symKey: s7, relay: a8, expiryTimestamp: o7, methods: i8?.methods });
      return this.events.emit(ae2.create, c7), this.core.expirer.set(n7, o7), await this.pairings.set(n7, c7), await this.core.relayer.subscribe(n7, { transportType: i8?.transportType, internal: i8?.internal }), { topic: n7, uri: h6 };
    }), d3(this, "pair", async (i8) => {
      this.isInitialized();
      const s7 = this.core.eventClient.createEvent({ properties: { topic: i8?.uri, trace: [Y2.pairing_started] } });
      this.isValidPair(i8, s7);
      const { topic: n7, symKey: o7, relay: a8, expiryTimestamp: c7, methods: h6 } = Ra(i8.uri);
      s7.props.properties.topic = n7, s7.addTrace(Y2.pairing_uri_validation_success), s7.addTrace(Y2.pairing_uri_not_expired);
      let l5;
      if (this.pairings.keys.includes(n7)) {
        if (l5 = this.pairings.get(n7), s7.addTrace(Y2.existing_pairing), l5.active) throw s7.setError(X4.active_pairing_already_exists), new Error(`Pairing already exists: ${n7}. Please try again with a new connection URI.`);
        s7.addTrace(Y2.pairing_not_expired);
      }
      const g3 = c7 || Ni(import_time2.FIVE_MINUTES), y7 = { topic: n7, relay: a8, expiry: g3, active: false, methods: h6 };
      this.core.expirer.set(n7, g3), await this.pairings.set(n7, y7), s7.addTrace(Y2.store_new_pairing), i8.activatePairing && await this.activate({ topic: n7 }), this.events.emit(ae2.create, y7), s7.addTrace(Y2.emit_inactive_pairing), this.core.crypto.keychain.has(n7) || await this.core.crypto.setSymKey(o7, n7), s7.addTrace(Y2.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s7.setError(X4.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n7, { relay: a8 });
      } catch (_7) {
        throw s7.setError(X4.subscribe_pairing_topic_failure), _7;
      }
      return s7.addTrace(Y2.subscribe_pairing_topic_success), y7;
    }), d3(this, "activate", async ({ topic: i8 }) => {
      this.isInitialized();
      const s7 = Ni(import_time2.FIVE_MINUTES);
      this.core.expirer.set(i8, s7), await this.pairings.update(i8, { active: true, expiry: s7 });
    }), d3(this, "ping", async (i8) => {
      this.isInitialized(), await this.isValidPing(i8), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s7 } = i8;
      if (this.pairings.keys.includes(s7)) {
        const n7 = await this.sendRequest(s7, "wc_pairingPing", {}), { done: o7, resolve: a8, reject: c7 } = Bi();
        this.events.once(_i("pairing_ping", n7), ({ error: h6 }) => {
          h6 ? c7(h6) : a8();
        }), await o7();
      }
    }), d3(this, "updateExpiry", async ({ topic: i8, expiry: s7 }) => {
      this.isInitialized(), await this.pairings.update(i8, { expiry: s7 });
    }), d3(this, "updateMetadata", async ({ topic: i8, metadata: s7 }) => {
      this.isInitialized(), await this.pairings.update(i8, { peerMetadata: s7 });
    }), d3(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d3(this, "disconnect", async (i8) => {
      this.isInitialized(), await this.isValidDisconnect(i8);
      const { topic: s7 } = i8;
      this.pairings.keys.includes(s7) && (await this.sendRequest(s7, "wc_pairingDelete", zt("USER_DISCONNECTED")), await this.deletePairing(s7));
    }), d3(this, "formatUriFromPairing", (i8) => {
      this.isInitialized();
      const { topic: s7, relay: n7, expiry: o7, methods: a8 } = i8, c7 = this.core.crypto.keychain.get(s7);
      return $a({ protocol: this.core.protocol, version: this.core.version, topic: s7, symKey: c7, relay: n7, expiryTimestamp: o7, methods: a8 });
    }), d3(this, "sendRequest", async (i8, s7, n7) => {
      const o7 = formatJsonRpcRequest(s7, n7), a8 = await this.core.crypto.encode(i8, o7), c7 = oe2[s7].req;
      return this.core.history.set(i8, o7), this.core.relayer.publish(i8, a8, c7), o7.id;
    }), d3(this, "sendResult", async (i8, s7, n7) => {
      const o7 = formatJsonRpcResult(i8, n7), a8 = await this.core.crypto.encode(s7, o7), c7 = (await this.core.history.get(s7, i8)).request.method, h6 = oe2[c7].res;
      await this.core.relayer.publish(s7, a8, h6), await this.core.history.resolve(o7);
    }), d3(this, "sendError", async (i8, s7, n7) => {
      const o7 = formatJsonRpcError(i8, n7), a8 = await this.core.crypto.encode(s7, o7), c7 = (await this.core.history.get(s7, i8)).request.method, h6 = oe2[c7] ? oe2[c7].res : oe2.unregistered_method.res;
      await this.core.relayer.publish(s7, a8, h6), await this.core.history.resolve(o7);
    }), d3(this, "deletePairing", async (i8, s7) => {
      await this.core.relayer.unsubscribe(i8), await Promise.all([this.pairings.delete(i8, zt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i8), s7 ? Promise.resolve() : this.core.expirer.del(i8)]);
    }), d3(this, "cleanup", async () => {
      const i8 = this.pairings.getAll().filter((s7) => Ui(s7.expiry));
      await Promise.all(i8.map((s7) => this.deletePairing(s7.topic)));
    }), d3(this, "onRelayEventRequest", async (i8) => {
      const { topic: s7, payload: n7 } = i8;
      switch (n7.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s7, n7);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s7, n7);
        default:
          return await this.onUnknownRpcMethodRequest(s7, n7);
      }
    }), d3(this, "onRelayEventResponse", async (i8) => {
      const { topic: s7, payload: n7 } = i8, o7 = (await this.core.history.get(s7, n7.id)).request.method;
      switch (o7) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s7, n7);
        default:
          return this.onUnknownRpcMethodResponse(o7);
      }
    }), d3(this, "onPairingPingRequest", async (i8, s7) => {
      const { id: n7 } = s7;
      try {
        this.isValidPing({ topic: i8 }), await this.sendResult(n7, i8, true), this.events.emit(ae2.ping, { id: n7, topic: i8 });
      } catch (o7) {
        await this.sendError(n7, i8, o7), this.logger.error(o7);
      }
    }), d3(this, "onPairingPingResponse", (i8, s7) => {
      const { id: n7 } = s7;
      setTimeout(() => {
        isJsonRpcResult(s7) ? this.events.emit(_i("pairing_ping", n7), {}) : isJsonRpcError(s7) && this.events.emit(_i("pairing_ping", n7), { error: s7.error });
      }, 500);
    }), d3(this, "onPairingDeleteRequest", async (i8, s7) => {
      const { id: n7 } = s7;
      try {
        this.isValidDisconnect({ topic: i8 }), await this.deletePairing(i8), this.events.emit(ae2.delete, { id: n7, topic: i8 });
      } catch (o7) {
        await this.sendError(n7, i8, o7), this.logger.error(o7);
      }
    }), d3(this, "onUnknownRpcMethodRequest", async (i8, s7) => {
      const { id: n7, method: o7 } = s7;
      try {
        if (this.registeredMethods.includes(o7)) return;
        const a8 = zt("WC_METHOD_UNSUPPORTED", o7);
        await this.sendError(n7, i8, a8), this.logger.error(a8);
      } catch (a8) {
        await this.sendError(n7, i8, a8), this.logger.error(a8);
      }
    }), d3(this, "onUnknownRpcMethodResponse", (i8) => {
      this.registeredMethods.includes(i8) || this.logger.error(zt("WC_METHOD_UNSUPPORTED", i8));
    }), d3(this, "isValidPair", (i8, s7) => {
      var n7;
      if (!Qa(i8)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `pair() params: ${i8}`);
        throw s7.setError(X4.malformed_pairing_uri), new Error(a8);
      }
      if (!Za(i8.uri)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `pair() uri: ${i8.uri}`);
        throw s7.setError(X4.malformed_pairing_uri), new Error(a8);
      }
      const o7 = Ra(i8?.uri);
      if (!((n7 = o7?.relay) != null && n7.protocol)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s7.setError(X4.malformed_pairing_uri), new Error(a8);
      }
      if (!(o7 != null && o7.symKey)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s7.setError(X4.malformed_pairing_uri), new Error(a8);
      }
      if (o7 != null && o7.expiryTimestamp && (0, import_time2.toMiliseconds)(o7?.expiryTimestamp) < Date.now()) {
        s7.setError(X4.pairing_expired);
        const { message: a8 } = Bt("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a8);
      }
    }), d3(this, "isValidPing", async (i8) => {
      if (!Qa(i8)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `ping() params: ${i8}`);
        throw new Error(n7);
      }
      const { topic: s7 } = i8;
      await this.isValidPairingTopic(s7);
    }), d3(this, "isValidDisconnect", async (i8) => {
      if (!Qa(i8)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `disconnect() params: ${i8}`);
        throw new Error(n7);
      }
      const { topic: s7 } = i8;
      await this.isValidPairingTopic(s7);
    }), d3(this, "isValidPairingTopic", async (i8) => {
      if (!ft(i8, false)) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `pairing topic should be a string: ${i8}`);
        throw new Error(s7);
      }
      if (!this.pairings.keys.includes(i8)) {
        const { message: s7 } = Bt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i8}`);
        throw new Error(s7);
      }
      if (Ui(this.pairings.get(i8).expiry)) {
        await this.deletePairing(i8);
        const { message: s7 } = Bt("EXPIRED", `pairing topic: ${i8}`);
        throw new Error(s7);
      }
    }), this.core = e3, this.logger = X2(t3, this.name), this.pairings = new ji2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return w2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C5.message, async (e3) => {
      const { topic: t3, message: i8, transportType: s7 } = e3;
      if (this.pairings.keys.includes(t3) && s7 !== ee2.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i8))) try {
        const n7 = await this.core.crypto.decode(t3, i8);
        isJsonRpcRequest(n7) ? (this.core.history.set(t3, n7), await this.onRelayEventRequest({ topic: t3, payload: n7 })) : isJsonRpcResponse(n7) && (await this.core.history.resolve(n7), await this.onRelayEventResponse({ topic: t3, payload: n7 }), this.core.history.delete(t3, n7.id)), await this.core.relayer.messages.ack(t3, i8);
      } catch (n7) {
        this.logger.error(n7);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(q2.expired, async (e3) => {
      const { topic: t3 } = Oi(e3.target);
      t3 && this.pairings.keys.includes(t3) && (await this.deletePairing(t3, true), this.events.emit(ae2.expire, { topic: t3 }));
    });
  }
};
var Mo2 = Object.defineProperty;
var Ko2 = (r5, e3, t3) => e3 in r5 ? Mo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var N4 = (r5, e3, t3) => Ko2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Fi2 = class extends I3 {
  constructor(e3, t3) {
    super(e3, t3), this.core = e3, this.logger = t3, N4(this, "records", /* @__PURE__ */ new Map()), N4(this, "events", new import_events3.EventEmitter()), N4(this, "name", Vt2), N4(this, "version", qt2), N4(this, "cached", []), N4(this, "initialized", false), N4(this, "storagePrefix", W5), N4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i8) => this.records.set(i8.id, i8)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), N4(this, "set", (i8, s7, n7) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i8, request: s7, chainId: n7 }), this.records.has(s7.id)) return;
      const o7 = { id: s7.id, topic: i8, request: { method: s7.method, params: s7.params || null }, chainId: n7, expiry: Ni(import_time2.THIRTY_DAYS) };
      this.records.set(o7.id, o7), this.persist(), this.events.emit(V3.created, o7);
    }), N4(this, "resolve", async (i8) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i8 }), !this.records.has(i8.id)) return;
      const s7 = await this.getRecord(i8.id);
      typeof s7.response > "u" && (s7.response = isJsonRpcError(i8) ? { error: i8.error } : { result: i8.result }, this.records.set(s7.id, s7), this.persist(), this.events.emit(V3.updated, s7));
    }), N4(this, "get", async (i8, s7) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i8, id: s7 }), await this.getRecord(s7))), N4(this, "delete", (i8, s7) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s7 }), this.values.forEach((n7) => {
        if (n7.topic === i8) {
          if (typeof s7 < "u" && n7.id !== s7) return;
          this.records.delete(n7.id), this.events.emit(V3.deleted, n7);
        }
      }), this.persist();
    }), N4(this, "exists", async (i8, s7) => (this.isInitialized(), this.records.has(s7) ? (await this.getRecord(s7)).topic === i8 : false)), N4(this, "on", (i8, s7) => {
      this.events.on(i8, s7);
    }), N4(this, "once", (i8, s7) => {
      this.events.once(i8, s7);
    }), N4(this, "off", (i8, s7) => {
      this.events.off(i8, s7);
    }), N4(this, "removeListener", (i8, s7) => {
      this.events.removeListener(i8, s7);
    }), this.logger = X2(t3, this.name);
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e3 = [];
    return this.values.forEach((t3) => {
      if (typeof t3.response < "u") return;
      const i8 = { topic: t3.topic, request: formatJsonRpcRequest(t3.request.method, t3.request.params, t3.id), chainId: t3.chainId };
      return e3.push(i8);
    }), e3;
  }
  async setJsonRpcRecords(e3) {
    await this.core.storage.setItem(this.storageKey, e3);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e3) {
    this.isInitialized();
    const t3 = this.records.get(e3);
    if (!t3) {
      const { message: i8 } = Bt("NO_MATCHING_KEY", `${this.name}: ${e3}`);
      throw new Error(i8);
    }
    return t3;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(V3.sync);
  }
  async restore() {
    try {
      const e3 = await this.getJsonRpcRecords();
      if (typeof e3 > "u" || !e3.length) return;
      if (this.records.size) {
        const { message: t3 } = Bt("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e3, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e3) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e3);
    }
  }
  registerEventListeners() {
    this.events.on(V3.created, (e3) => {
      const t3 = V3.created;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e3 });
    }), this.events.on(V3.updated, (e3) => {
      const t3 = V3.updated;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e3 });
    }), this.events.on(V3.deleted, (e3) => {
      const t3 = V3.deleted;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, record: e3 });
    }), this.core.heartbeat.on(r3.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e3 = false;
      this.records.forEach((t3) => {
        (0, import_time2.toMiliseconds)(t3.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t3.id}`), this.records.delete(t3.id), this.events.emit(V3.deleted, t3, false), e3 = true);
      }), e3 && this.persist();
    } catch (e3) {
      this.logger.warn(e3);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var Bo2 = Object.defineProperty;
var Vo2 = (r5, e3, t3) => e3 in r5 ? Bo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var z5 = (r5, e3, t3) => Vo2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Mi2 = class extends S4 {
  constructor(e3, t3) {
    super(e3, t3), this.core = e3, this.logger = t3, z5(this, "expirations", /* @__PURE__ */ new Map()), z5(this, "events", new import_events3.EventEmitter()), z5(this, "name", Gt2), z5(this, "version", Wt2), z5(this, "cached", []), z5(this, "initialized", false), z5(this, "storagePrefix", W5), z5(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i8) => this.expirations.set(i8.target, i8)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), z5(this, "has", (i8) => {
      try {
        const s7 = this.formatTarget(i8);
        return typeof this.getExpiration(s7) < "u";
      } catch {
        return false;
      }
    }), z5(this, "set", (i8, s7) => {
      this.isInitialized();
      const n7 = this.formatTarget(i8), o7 = { target: n7, expiry: s7 };
      this.expirations.set(n7, o7), this.checkExpiry(n7, o7), this.events.emit(q2.created, { target: n7, expiration: o7 });
    }), z5(this, "get", (i8) => {
      this.isInitialized();
      const s7 = this.formatTarget(i8);
      return this.getExpiration(s7);
    }), z5(this, "del", (i8) => {
      if (this.isInitialized(), this.has(i8)) {
        const s7 = this.formatTarget(i8), n7 = this.getExpiration(s7);
        this.expirations.delete(s7), this.events.emit(q2.deleted, { target: s7, expiration: n7 });
      }
    }), z5(this, "on", (i8, s7) => {
      this.events.on(i8, s7);
    }), z5(this, "once", (i8, s7) => {
      this.events.once(i8, s7);
    }), z5(this, "off", (i8, s7) => {
      this.events.off(i8, s7);
    }), z5(this, "removeListener", (i8, s7) => {
      this.events.removeListener(i8, s7);
    }), this.logger = X2(t3, this.name);
  }
  get context() {
    return w2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e3) {
    if (typeof e3 == "string") return Ii(e3);
    if (typeof e3 == "number") return Si(e3);
    const { message: t3 } = Bt("UNKNOWN_TYPE", `Target type: ${typeof e3}`);
    throw new Error(t3);
  }
  async setExpirations(e3) {
    await this.core.storage.setItem(this.storageKey, e3);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(q2.sync);
  }
  async restore() {
    try {
      const e3 = await this.getExpirations();
      if (typeof e3 > "u" || !e3.length) return;
      if (this.expirations.size) {
        const { message: t3 } = Bt("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t3), new Error(t3);
      }
      this.cached = e3, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e3) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e3);
    }
  }
  getExpiration(e3) {
    const t3 = this.expirations.get(e3);
    if (!t3) {
      const { message: i8 } = Bt("NO_MATCHING_KEY", `${this.name}: ${e3}`);
      throw this.logger.warn(i8), new Error(i8);
    }
    return t3;
  }
  checkExpiry(e3, t3) {
    const { expiry: i8 } = t3;
    (0, import_time2.toMiliseconds)(i8) - Date.now() <= 0 && this.expire(e3, t3);
  }
  expire(e3, t3) {
    this.expirations.delete(e3), this.events.emit(q2.expired, { target: e3, expiration: t3 });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e3, t3) => this.checkExpiry(t3, e3));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r3.pulse, () => this.checkExpirations()), this.events.on(q2.created, (e3) => {
      const t3 = q2.created;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e3 }), this.persist();
    }), this.events.on(q2.expired, (e3) => {
      const t3 = q2.expired;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e3 }), this.persist();
    }), this.events.on(q2.deleted, (e3) => {
      const t3 = q2.deleted;
      this.logger.info(`Emitting ${t3}`), this.logger.debug({ type: "event", event: t3, data: e3 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e3 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(e3);
    }
  }
};
var qo2 = Object.defineProperty;
var Go2 = (r5, e3, t3) => e3 in r5 ? qo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var P5 = (r5, e3, t3) => Go2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Ki2 = class extends M3 {
  constructor(e3, t3, i8) {
    super(e3, t3, i8), this.core = e3, this.logger = t3, this.store = i8, P5(this, "name", Ht2), P5(this, "abortController"), P5(this, "isDevEnv"), P5(this, "verifyUrlV3", Jt2), P5(this, "storagePrefix", W5), P5(this, "version", Fe2), P5(this, "publicKey"), P5(this, "fetchPromise"), P5(this, "init", async () => {
      var s7;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time2.toMiliseconds)((s7 = this.publicKey) == null ? void 0 : s7.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), P5(this, "register", async (s7) => {
      if (!Wt() || this.isDevEnv) return;
      const n7 = window.location.origin, { id: o7, decryptedId: a8 } = s7, c7 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n7}&id=${o7}&decryptedId=${a8}`;
      try {
        const h6 = (0, import_window_getters2.getDocument)(), l5 = this.startAbortTimer(import_time2.ONE_SECOND * 5), g3 = await new Promise((y7, _7) => {
          const u7 = () => {
            window.removeEventListener("message", D7), h6.body.removeChild(m6), _7("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u7);
          const m6 = h6.createElement("iframe");
          m6.src = c7, m6.style.display = "none", m6.addEventListener("error", u7, { signal: this.abortController.signal });
          const D7 = (w5) => {
            if (w5.data && typeof w5.data == "string") try {
              const E8 = JSON.parse(w5.data);
              if (E8.type === "verify_attestation") {
                if (sn(E8.attestation).payload.id !== o7) return;
                clearInterval(l5), h6.body.removeChild(m6), this.abortController.signal.removeEventListener("abort", u7), window.removeEventListener("message", D7), y7(E8.attestation === null ? "" : E8.attestation);
              }
            } catch (E8) {
              this.logger.warn(E8);
            }
          };
          h6.body.appendChild(m6), window.addEventListener("message", D7, { signal: this.abortController.signal });
        });
        return this.logger.debug(g3, "jwt attestation"), g3;
      } catch (h6) {
        this.logger.warn(h6);
      }
      return "";
    }), P5(this, "resolve", async (s7) => {
      if (this.isDevEnv) return "";
      const { attestationId: n7, hash: o7, encryptedId: a8 } = s7;
      if (n7 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n7) {
        if (sn(n7).payload.id !== a8) return;
        const h6 = await this.isValidJwtAttestation(n7);
        if (h6) {
          if (!h6.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h6;
        }
      }
      if (!o7) return;
      const c7 = this.getVerifyUrl(s7?.verifyUrl);
      return this.fetchAttestation(o7, c7);
    }), P5(this, "fetchAttestation", async (s7, n7) => {
      this.logger.debug(`resolving attestation: ${s7} from url: ${n7}`);
      const o7 = this.startAbortTimer(import_time2.ONE_SECOND * 5), a8 = await fetch(`${n7}/attestation/${s7}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o7), a8.status === 200 ? await a8.json() : void 0;
    }), P5(this, "getVerifyUrl", (s7) => {
      let n7 = s7 || be2;
      return Xt2.includes(n7) || (this.logger.info(`verify url: ${n7}, not included in trusted list, assigning default: ${be2}`), n7 = be2), n7;
    }), P5(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s7 = this.startAbortTimer(import_time2.FIVE_SECONDS), n7 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s7), await n7.json();
      } catch (s7) {
        this.logger.warn(s7);
      }
    }), P5(this, "persistPublicKey", async (s7) => {
      this.logger.debug(s7, "persisting public key to local storage"), await this.store.setItem(this.storeKey, s7), this.publicKey = s7;
    }), P5(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), P5(this, "isValidJwtAttestation", async (s7) => {
      const n7 = await this.getPublicKey();
      try {
        if (n7) return this.validateAttestation(s7, n7);
      } catch (a8) {
        this.logger.error(a8), this.logger.warn("error validating attestation");
      }
      const o7 = await this.fetchAndPersistPublicKey();
      try {
        if (o7) return this.validateAttestation(s7, o7);
      } catch (a8) {
        this.logger.error(a8), this.logger.warn("error validating attestation");
      }
    }), P5(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), P5(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n7) => {
        const o7 = await this.fetchPublicKey();
        o7 && (await this.persistPublicKey(o7), n7(o7));
      });
      const s7 = await this.fetchPromise;
      return this.fetchPromise = void 0, s7;
    }), P5(this, "validateAttestation", (s7, n7) => {
      const o7 = Ea(s7, n7.publicKey), a8 = { hasExpired: (0, import_time2.toMiliseconds)(o7.exp) < Date.now(), payload: o7 };
      if (a8.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a8.payload.origin, isScam: a8.payload.isScam, isVerified: a8.payload.isVerified };
    }), this.logger = X2(t3, this.name), this.abortController = new AbortController(), this.isDevEnv = ji(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return w2(this.logger);
  }
  startAbortTimer(e3) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time2.toMiliseconds)(e3));
  }
};
var Wo2 = Object.defineProperty;
var Ho2 = (r5, e3, t3) => e3 in r5 ? Wo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var Bi2 = (r5, e3, t3) => Ho2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Vi2 = class extends O3 {
  constructor(e3, t3) {
    super(e3, t3), this.projectId = e3, this.logger = t3, Bi2(this, "context", Zt2), Bi2(this, "registerDeviceToken", async (i8) => {
      const { clientId: s7, token: n7, notificationType: o7, enableEncrypted: a8 = false } = i8, c7 = `${Qt2}/${this.projectId}/clients`;
      await fetch(c7, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s7, type: o7, token: n7, always_raw: a8 }) });
    }), this.logger = X2(t3, this.context);
  }
};
var Yo2 = Object.defineProperty;
var qi2 = Object.getOwnPropertySymbols;
var Jo2 = Object.prototype.hasOwnProperty;
var Xo2 = Object.prototype.propertyIsEnumerable;
var et2 = (r5, e3, t3) => e3 in r5 ? Yo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var _e2 = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) Jo2.call(e3, t3) && et2(r5, t3, e3[t3]);
  if (qi2) for (var t3 of qi2(e3)) Xo2.call(e3, t3) && et2(r5, t3, e3[t3]);
  return r5;
};
var A5 = (r5, e3, t3) => et2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Gi2 = class extends R3 {
  constructor(e3, t3, i8 = true) {
    super(e3, t3, i8), this.core = e3, this.logger = t3, A5(this, "context", ti), A5(this, "storagePrefix", W5), A5(this, "storageVersion", ei2), A5(this, "events", /* @__PURE__ */ new Map()), A5(this, "shouldPersist", false), A5(this, "init", async () => {
      if (!ji()) try {
        const s7 = { eventId: Ci(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: wr(this.core.relayer.protocol, this.core.relayer.version, Pe2) } } };
        await this.sendEvent([s7]);
      } catch (s7) {
        this.logger.warn(s7);
      }
    }), A5(this, "createEvent", (s7) => {
      const { event: n7 = "ERROR", type: o7 = "", properties: { topic: a8, trace: c7 } } = s7, h6 = Ci(), l5 = this.core.projectId || "", g3 = Date.now(), y7 = _e2({ eventId: h6, timestamp: g3, props: { event: n7, type: o7, properties: { topic: a8, trace: c7 } }, bundleId: l5, domain: this.getAppDomain() }, this.setMethods(h6));
      return this.telemetryEnabled && (this.events.set(h6, y7), this.shouldPersist = true), y7;
    }), A5(this, "getEvent", (s7) => {
      const { eventId: n7, topic: o7 } = s7;
      if (n7) return this.events.get(n7);
      const a8 = Array.from(this.events.values()).find((c7) => c7.props.properties.topic === o7);
      if (a8) return _e2(_e2({}, a8), this.setMethods(a8.eventId));
    }), A5(this, "deleteEvent", (s7) => {
      const { eventId: n7 } = s7;
      this.events.delete(n7), this.shouldPersist = true;
    }), A5(this, "setEventListeners", () => {
      this.core.heartbeat.on(r3.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s7) => {
          (0, import_time2.fromMiliseconds)(Date.now()) - (0, import_time2.fromMiliseconds)(s7.timestamp) > ii2 && (this.events.delete(s7.eventId), this.shouldPersist = true);
        });
      });
    }), A5(this, "setMethods", (s7) => ({ addTrace: (n7) => this.addTrace(s7, n7), setError: (n7) => this.setError(s7, n7) })), A5(this, "addTrace", (s7, n7) => {
      const o7 = this.events.get(s7);
      o7 && (o7.props.properties.trace.push(n7), this.events.set(s7, o7), this.shouldPersist = true);
    }), A5(this, "setError", (s7, n7) => {
      const o7 = this.events.get(s7);
      o7 && (o7.props.type = n7, o7.timestamp = Date.now(), this.events.set(s7, o7), this.shouldPersist = true);
    }), A5(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), A5(this, "restore", async () => {
      try {
        const s7 = await this.core.storage.getItem(this.storageKey) || [];
        if (!s7.length) return;
        s7.forEach((n7) => {
          this.events.set(n7.eventId, _e2(_e2({}, n7), this.setMethods(n7.eventId)));
        });
      } catch (s7) {
        this.logger.warn(s7);
      }
    }), A5(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s7 = [];
      for (const [n7, o7] of this.events) o7.props.type && s7.push(o7);
      if (s7.length !== 0) try {
        if ((await this.sendEvent(s7)).ok) for (const n7 of s7) this.events.delete(n7.eventId), this.shouldPersist = true;
      } catch (n7) {
        this.logger.warn(n7);
      }
    }), A5(this, "sendEvent", async (s7) => {
      const n7 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${si2}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Pe2}${n7}`, { method: "POST", body: JSON.stringify(s7) });
    }), A5(this, "getAppDomain", () => br().url), this.logger = X2(t3, this.context), this.telemetryEnabled = i8, i8 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Zo2 = Object.defineProperty;
var Wi2 = Object.getOwnPropertySymbols;
var Qo3 = Object.prototype.hasOwnProperty;
var ea3 = Object.prototype.propertyIsEnumerable;
var tt2 = (r5, e3, t3) => e3 in r5 ? Zo2(r5, e3, { enumerable: true, configurable: true, writable: true, value: t3 }) : r5[e3] = t3;
var Hi2 = (r5, e3) => {
  for (var t3 in e3 || (e3 = {})) Qo3.call(e3, t3) && tt2(r5, t3, e3[t3]);
  if (Wi2) for (var t3 of Wi2(e3)) ea3.call(e3, t3) && tt2(r5, t3, e3[t3]);
  return r5;
};
var v5 = (r5, e3, t3) => tt2(r5, typeof e3 != "symbol" ? e3 + "" : e3, t3);
var Oe2 = class _Oe extends h5 {
  constructor(e3) {
    var t3;
    super(e3), v5(this, "protocol", Ue2), v5(this, "version", Fe2), v5(this, "name", ge2), v5(this, "relayUrl"), v5(this, "projectId"), v5(this, "customStoragePrefix"), v5(this, "events", new import_events3.EventEmitter()), v5(this, "logger"), v5(this, "heartbeat"), v5(this, "relayer"), v5(this, "crypto"), v5(this, "storage"), v5(this, "history"), v5(this, "expirer"), v5(this, "pairing"), v5(this, "verify"), v5(this, "echoClient"), v5(this, "linkModeSupportedApps"), v5(this, "eventClient"), v5(this, "initialized", false), v5(this, "logChunkController"), v5(this, "on", (a8, c7) => this.events.on(a8, c7)), v5(this, "once", (a8, c7) => this.events.once(a8, c7)), v5(this, "off", (a8, c7) => this.events.off(a8, c7)), v5(this, "removeListener", (a8, c7) => this.events.removeListener(a8, c7)), v5(this, "dispatchEnvelope", ({ topic: a8, message: c7, sessionExists: h6 }) => {
      if (!a8 || !c7) return;
      const l5 = { topic: a8, message: c7, publishedAt: Date.now(), transportType: ee2.link_mode };
      this.relayer.onLinkMessageEvent(l5, { sessionExists: h6 });
    });
    const i8 = this.getGlobalCore(e3?.customStoragePrefix);
    if (i8) try {
      return this.customStoragePrefix = i8.customStoragePrefix, this.logger = i8.logger, this.heartbeat = i8.heartbeat, this.crypto = i8.crypto, this.history = i8.history, this.expirer = i8.expirer, this.storage = i8.storage, this.relayer = i8.relayer, this.pairing = i8.pairing, this.verify = i8.verify, this.echoClient = i8.echoClient, this.linkModeSupportedApps = i8.linkModeSupportedApps, this.eventClient = i8.eventClient, this.initialized = i8.initialized, this.logChunkController = i8.logChunkController, i8;
    } catch (a8) {
      console.warn("Failed to copy global core", a8);
    }
    this.projectId = e3?.projectId, this.relayUrl = e3?.relayUrl || Ke2, this.customStoragePrefix = e3 != null && e3.customStoragePrefix ? `:${e3.customStoragePrefix}` : "";
    const s7 = D5({ level: typeof e3?.logger == "string" && e3.logger ? e3.logger : Et2.logger, name: ge2 }), { logger: n7, chunkLoggerController: o7 } = Y({ opts: s7, maxSizeInBytes: e3?.maxLogBlobSizeInBytes, loggerOverride: e3?.logger });
    this.logChunkController = o7, (t3 = this.logChunkController) != null && t3.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a8, c7;
      (a8 = this.logChunkController) != null && a8.downloadLogsBlobInBrowser && ((c7 = this.logChunkController) == null || c7.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = X2(n7, this.name), this.heartbeat = new i2(), this.crypto = new wi2(this, this.logger, e3?.keychain), this.history = new Fi2(this, this.logger), this.expirer = new Mi2(this, this.logger), this.storage = e3 != null && e3.storage ? e3.storage : new h3(Hi2(Hi2({}, It2), e3?.storageOptions)), this.relayer = new Ai2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ui2(this, this.logger), this.verify = new Ki2(this, this.logger, this.storage), this.echoClient = new Vi2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Gi2(this, this.logger, e3?.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e3) {
    const t3 = new _Oe(e3);
    await t3.initialize();
    const i8 = await t3.crypto.getClientId();
    return await t3.storage.setItem(Ut2, i8), t3;
  }
  get context() {
    return w2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e3;
    return (e3 = this.logChunkController) == null ? void 0 : e3.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e3) {
    this.linkModeSupportedApps.includes(e3) || (this.linkModeSupportedApps.push(e3), await this.storage.setItem(Be2, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Be2) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e3) {
      throw this.logger.warn(e3, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e3.message), e3;
    }
  }
  getGlobalCore(e3 = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t3 = `_walletConnectCore_${e3}`, i8 = `${t3}_count`;
      return globalThis[i8] = (globalThis[i8] || 0) + 1, globalThis[i8] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i8]} times.`), globalThis[t3];
    } catch (t3) {
      console.warn("Failed to get global WalletConnect core", t3);
      return;
    }
  }
  setGlobalCore(e3) {
    var t3;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i8 = `_walletConnectCore_${((t3 = e3.opts) == null ? void 0 : t3.customStoragePrefix) || ""}`;
      globalThis[i8] = e3;
    } catch (i8) {
      console.warn("Failed to set global WalletConnect core", i8);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return true;
    }
  }
};
var ta3 = Oe2;

// node_modules/@walletconnect/sign-client/dist/index.js
var import_time3 = __toESM(require_cjs(), 1);
var Ve3 = "wc";
var ke2 = 2;
var De3 = "client";
var we2 = `${Ve3}@${ke2}:${De3}:`;
var me3 = { name: De3, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
var Le2 = "WALLETCONNECT_DEEPLINK_CHOICE";
var dt2 = "proposal";
var Me3 = "Proposal expired";
var ut2 = "session";
var W6 = import_time3.SEVEN_DAYS;
var gt2 = "engine";
var P6 = { wc_sessionPropose: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time3.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var _e3 = { min: import_time3.FIVE_MINUTES, max: import_time3.SEVEN_DAYS };
var $5 = { idle: "IDLE", active: "ACTIVE" };
var yt2 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } };
var wt2 = "request";
var mt2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var _t2 = "wc";
var ft2 = "auth";
var Et3 = "authKeys";
var St3 = "pairingTopics";
var Rt3 = "requests";
var le2 = `${_t2}@${1.5}:${ft2}:`;
var pe2 = `${le2}:PUB_KEY`;
var Ns2 = Object.defineProperty;
var Os2 = Object.defineProperties;
var bs2 = Object.getOwnPropertyDescriptors;
var vt2 = Object.getOwnPropertySymbols;
var As2 = Object.prototype.hasOwnProperty;
var xs2 = Object.prototype.propertyIsEnumerable;
var $e2 = (E8, o7, t3) => o7 in E8 ? Ns2(E8, o7, { enumerable: true, configurable: true, writable: true, value: t3 }) : E8[o7] = t3;
var R5 = (E8, o7) => {
  for (var t3 in o7 || (o7 = {})) As2.call(o7, t3) && $e2(E8, t3, o7[t3]);
  if (vt2) for (var t3 of vt2(o7)) xs2.call(o7, t3) && $e2(E8, t3, o7[t3]);
  return E8;
};
var O4 = (E8, o7) => Os2(E8, bs2(o7));
var c5 = (E8, o7, t3) => $e2(E8, typeof o7 != "symbol" ? o7 + "" : o7, t3);
var Cs2 = class extends V2 {
  constructor(o7) {
    super(o7), c5(this, "name", gt2), c5(this, "events", new import_events4.default()), c5(this, "initialized", false), c5(this, "requestQueue", { state: $5.idle, queue: [] }), c5(this, "sessionRequestQueue", { state: $5.idle, queue: [] }), c5(this, "emittedSessionRequests", new ki({ limit: 500 })), c5(this, "requestQueueDelay", import_time3.ONE_SECOND), c5(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedLimit", 200), c5(this, "relayMessageCache", []), c5(this, "pendingSessions", /* @__PURE__ */ new Map()), c5(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(P6) }), this.initialized = true, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay)));
    }), c5(this, "connect", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const e3 = O4(R5({}, t3), { requiredNamespaces: t3.requiredNamespaces || {}, optionalNamespaces: t3.optionalNamespaces || {} });
      await this.isValidConnect(e3), e3.optionalNamespaces = qa(e3.requiredNamespaces, e3.optionalNamespaces), e3.requiredNamespaces = {};
      const { pairingTopic: s7, requiredNamespaces: i8, optionalNamespaces: r5, sessionProperties: n7, scopedProperties: a8, relays: l5 } = e3;
      let p7 = s7, h6, u7 = false;
      try {
        if (p7) {
          const T5 = this.client.core.pairing.pairings.get(p7);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u7 = T5.active;
        }
      } catch (T5) {
        throw this.client.logger.error(`connect() -> pairing.get(${p7}) failed`), T5;
      }
      if (!p7 || !u7) {
        const { topic: T5, uri: K6 } = await this.client.core.pairing.create({ internal: { skipSubscribe: true } });
        p7 = T5, h6 = K6;
      }
      if (!p7) {
        const { message: T5 } = Bt("NO_MATCHING_KEY", `connect() pairing topic: ${p7}`);
        throw new Error(T5);
      }
      const d7 = await this.client.core.crypto.generateKeyPair(), y7 = P6.wc_sessionPropose.req.ttl || import_time3.FIVE_MINUTES, w5 = Ni(y7), m6 = O4(R5(R5({ requiredNamespaces: i8, optionalNamespaces: r5, relays: l5 ?? [{ protocol: Nt2 }], proposer: { publicKey: d7, metadata: this.client.metadata }, expiryTimestamp: w5, pairingTopic: p7 }, n7 && { sessionProperties: n7 }), a8 && { scopedProperties: a8 }), { id: payloadId() }), S8 = _i("session_connect", m6.id), { reject: _7, resolve: b9, done: V5 } = Bi(y7, Me3), I5 = ({ id: T5 }) => {
        T5 === m6.id && (this.client.events.off("proposal_expire", I5), this.pendingSessions.delete(m6.id), this.events.emit(S8, { error: { message: Me3, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", I5), this.events.once(S8, ({ error: T5, session: K6 }) => {
        this.client.events.off("proposal_expire", I5), T5 ? _7(T5) : K6 && b9(K6);
      }), await this.sendProposeSession({ proposal: m6, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: { correlationId: m6.id } } }), await this.setProposal(m6.id, m6), { uri: h6, approval: V5 };
    }), c5(this, "pair", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(t3);
      } catch (e3) {
        throw this.client.logger.error("pair() failed"), e3;
      }
    }), c5(this, "approve", async (t3) => {
      var e3, s7, i8;
      const r5 = this.client.core.eventClient.createEvent({ properties: { topic: (e3 = t3?.id) == null ? void 0 : e3.toString(), trace: [rr2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (N6) {
        throw r5.setError(nr2.no_internet_connection), N6;
      }
      try {
        await this.isValidProposalId(t3?.id);
      } catch (N6) {
        throw this.client.logger.error(`approve() -> proposal.get(${t3?.id}) failed`), r5.setError(nr2.proposal_not_found), N6;
      }
      try {
        await this.isValidApprove(t3);
      } catch (N6) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r5.setError(nr2.session_approve_namespace_validation_failure), N6;
      }
      const { id: n7, relayProtocol: a8, namespaces: l5, sessionProperties: p7, scopedProperties: h6, sessionConfig: u7 } = t3, d7 = this.client.proposal.get(n7);
      this.client.core.eventClient.deleteEvent({ eventId: r5.eventId });
      const { pairingTopic: y7, proposer: w5, requiredNamespaces: m6, optionalNamespaces: S8 } = d7;
      let _7 = (s7 = this.client.core.eventClient) == null ? void 0 : s7.getEvent({ topic: y7 });
      _7 || (_7 = (i8 = this.client.core.eventClient) == null ? void 0 : i8.createEvent({ type: rr2.session_approve_started, properties: { topic: y7, trace: [rr2.session_approve_started, rr2.session_namespaces_validation_success] } }));
      const b9 = await this.client.core.crypto.generateKeyPair(), V5 = w5.publicKey, I5 = await this.client.core.crypto.generateSharedKey(b9, V5), T5 = R5(R5(R5({ relay: { protocol: a8 ?? "irn" }, namespaces: l5, controller: { publicKey: b9, metadata: this.client.metadata }, expiry: Ni(W6) }, p7 && { sessionProperties: p7 }), h6 && { scopedProperties: h6 }), u7 && { sessionConfig: u7 }), K6 = ee2.relay;
      _7.addTrace(rr2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(I5, { transportType: K6, internal: { skipSubscribe: true } });
      } catch (N6) {
        throw _7.setError(nr2.subscribe_session_topic_failure), N6;
      }
      _7.addTrace(rr2.subscribe_session_topic_success);
      const Ee3 = O4(R5({}, T5), { topic: I5, requiredNamespaces: m6, optionalNamespaces: S8, pairingTopic: y7, acknowledged: false, self: T5.controller, peer: { publicKey: w5.publicKey, metadata: w5.metadata }, controller: b9, transportType: ee2.relay });
      await this.client.session.set(I5, Ee3), _7.addTrace(rr2.store_session);
      try {
        await this.sendApproveSession({ sessionTopic: I5, proposal: d7, pairingProposalResponse: { relay: { protocol: a8 ?? "irn" }, responderPublicKey: b9 }, sessionSettleRequest: T5, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: { correlationId: n7 } } }), _7.addTrace(rr2.session_approve_publish_success);
      } catch (N6) {
        throw this.client.logger.error(N6), this.client.session.delete(I5, zt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(I5), N6;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _7.eventId }), await this.client.core.pairing.updateMetadata({ topic: y7, metadata: w5.metadata }), await this.deleteProposal(n7), await this.client.core.pairing.activate({ topic: y7 }), await this.setExpiry(I5, Ni(W6)), { topic: I5, acknowledged: () => Promise.resolve(this.client.session.get(I5)) };
    }), c5(this, "reject", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(t3);
      } catch (r5) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r5;
      }
      const { id: e3, reason: s7 } = t3;
      let i8;
      try {
        i8 = this.client.proposal.get(e3).pairingTopic;
      } catch (r5) {
        throw this.client.logger.error(`reject() -> proposal.get(${e3}) failed`), r5;
      }
      i8 && await this.sendError({ id: e3, topic: i8, error: s7, rpcOpts: P6.wc_sessionPropose.reject }), await this.deleteProposal(e3);
    }), c5(this, "update", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(t3);
      } catch (h6) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), h6;
      }
      const { topic: e3, namespaces: s7 } = t3, { done: i8, resolve: r5, reject: n7 } = Bi(), a8 = payloadId(), l5 = getBigIntRpcId().toString(), p7 = this.client.session.get(e3).namespaces;
      return this.events.once(_i("session_update", a8), ({ error: h6 }) => {
        h6 ? n7(h6) : r5();
      }), await this.client.session.update(e3, { namespaces: s7 }), await this.sendRequest({ topic: e3, method: "wc_sessionUpdate", params: { namespaces: s7 }, throwOnFailedPublish: true, clientRpcId: a8, relayRpcId: l5 }).catch((h6) => {
        this.client.logger.error(h6), this.client.session.update(e3, { namespaces: p7 }), n7(h6);
      }), { acknowledged: i8 };
    }), c5(this, "extend", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(t3);
      } catch (a8) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a8;
      }
      const { topic: e3 } = t3, s7 = payloadId(), { done: i8, resolve: r5, reject: n7 } = Bi();
      return this.events.once(_i("session_extend", s7), ({ error: a8 }) => {
        a8 ? n7(a8) : r5();
      }), await this.setExpiry(e3, Ni(W6)), this.sendRequest({ topic: e3, method: "wc_sessionExtend", params: {}, clientRpcId: s7, throwOnFailedPublish: true }).catch((a8) => {
        n7(a8);
      }), { acknowledged: i8 };
    }), c5(this, "request", async (t3) => {
      this.isInitialized();
      try {
        await this.isValidRequest(t3);
      } catch (m6) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), m6;
      }
      const { chainId: e3, request: s7, topic: i8, expiry: r5 = P6.wc_sessionRequest.req.ttl } = t3, n7 = this.client.session.get(i8);
      n7?.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
      const a8 = payloadId(), l5 = getBigIntRpcId().toString(), { done: p7, resolve: h6, reject: u7 } = Bi(r5, "Request expired. Please try again.");
      this.events.once(_i("session_request", a8), ({ error: m6, result: S8 }) => {
        m6 ? u7(m6) : h6(S8);
      });
      const d7 = "wc_sessionRequest", y7 = this.getAppLinkIfEnabled(n7.peer.metadata, n7.transportType);
      if (y7) return await this.sendRequest({ clientRpcId: a8, relayRpcId: l5, topic: i8, method: d7, params: { request: O4(R5({}, s7), { expiryTimestamp: Ni(r5) }), chainId: e3 }, expiry: r5, throwOnFailedPublish: true, appLink: y7 }).catch((m6) => u7(m6)), this.client.events.emit("session_request_sent", { topic: i8, request: s7, chainId: e3, id: a8 }), await p7();
      const w5 = { request: O4(R5({}, s7), { expiryTimestamp: Ni(r5) }), chainId: e3 };
      return await Promise.all([new Promise(async (m6) => {
        await this.sendRequest({ clientRpcId: a8, relayRpcId: l5, topic: i8, method: d7, params: w5, expiry: r5, throwOnFailedPublish: true, tvf: this.getTVFParams(a8, w5) }).catch((S8) => u7(S8)), this.client.events.emit("session_request_sent", { topic: i8, request: s7, chainId: e3, id: a8 }), m6();
      }), new Promise(async (m6) => {
        var S8;
        if (!((S8 = n7.sessionConfig) != null && S8.disableDeepLink)) {
          const _7 = await $i(this.client.core.storage, Le2);
          await Ri({ id: a8, topic: i8, wcDeepLink: _7 });
        }
        m6();
      }), p7()]).then((m6) => m6[2]);
    }), c5(this, "respond", async (t3) => {
      var e3, s7;
      this.isInitialized();
      const i8 = this.client.core.eventClient.createEvent({ properties: { topic: t3?.topic || ((s7 = (e3 = t3?.response) == null ? void 0 : e3.id) == null ? void 0 : s7.toString()), trace: [rr2.session_request_response_started] } });
      try {
        await this.isValidRespond(t3);
      } catch (h6) {
        throw i8.addTrace(h6?.message), i8.setError(nr2.session_request_response_validation_failure), h6;
      }
      i8.addTrace(rr2.session_request_response_validation_success);
      const { topic: r5, response: n7 } = t3, { id: a8 } = n7, l5 = this.client.session.get(r5);
      l5.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
      const p7 = this.getAppLinkIfEnabled(l5.peer.metadata, l5.transportType);
      try {
        i8.addTrace(rr2.session_request_response_publish_started), isJsonRpcResult(n7) ? await this.sendResult({ id: a8, topic: r5, result: n7.result, throwOnFailedPublish: true, appLink: p7 }) : isJsonRpcError(n7) && await this.sendError({ id: a8, topic: r5, error: n7.error, appLink: p7 }), this.cleanupAfterResponse(t3);
      } catch (h6) {
        throw i8.addTrace(h6?.message), i8.setError(nr2.session_request_response_publish_failure), h6;
      }
    }), c5(this, "ping", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(t3);
      } catch (s7) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s7;
      }
      const { topic: e3 } = t3;
      if (this.client.session.keys.includes(e3)) {
        const s7 = payloadId(), i8 = getBigIntRpcId().toString(), { done: r5, resolve: n7, reject: a8 } = Bi();
        this.events.once(_i("session_ping", s7), ({ error: l5 }) => {
          l5 ? a8(l5) : n7();
        }), await Promise.all([this.sendRequest({ topic: e3, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s7, relayRpcId: i8 }), r5()]);
      } else this.client.core.pairing.pairings.keys.includes(e3) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: e3 }));
    }), c5(this, "emit", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(t3);
      const { topic: e3, event: s7, chainId: i8 } = t3, r5 = getBigIntRpcId().toString(), n7 = payloadId();
      await this.sendRequest({ topic: e3, method: "wc_sessionEvent", params: { event: s7, chainId: i8 }, throwOnFailedPublish: true, relayRpcId: r5, clientRpcId: n7 });
    }), c5(this, "disconnect", async (t3) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(t3);
      const { topic: e3 } = t3;
      if (this.client.session.keys.includes(e3)) await this.sendRequest({ topic: e3, method: "wc_sessionDelete", params: zt("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e3, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e3)) await this.client.core.pairing.disconnect({ topic: e3 });
      else {
        const { message: s7 } = Bt("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e3}`);
        throw new Error(s7);
      }
    }), c5(this, "find", (t3) => (this.isInitialized(), this.client.session.getAll().filter((e3) => Fa(e3, t3)))), c5(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c5(this, "authenticate", async (t3, e3) => {
      var s7;
      this.isInitialized(), this.isValidAuthenticate(t3);
      const i8 = e3 && this.client.core.linkModeSupportedApps.includes(e3) && ((s7 = this.client.metadata.redirect) == null ? void 0 : s7.linkMode), r5 = i8 ? ee2.link_mode : ee2.relay;
      r5 === ee2.relay && await this.confirmOnlineStateOrThrow();
      const { chains: n7, statement: a8 = "", uri: l5, domain: p7, nonce: h6, type: u7, exp: d7, nbf: y7, methods: w5 = [], expiry: m6 } = t3, S8 = [...t3.resources || []], { topic: _7, uri: b9 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r5 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: _7, uri: b9 } });
      const V5 = await this.client.core.crypto.generateKeyPair(), I5 = ha(V5);
      if (await Promise.all([this.client.auth.authKeys.set(pe2, { responseTopic: I5, publicKey: V5 }), this.client.auth.pairingTopics.set(I5, { topic: I5, pairingTopic: _7 })]), await this.client.core.relayer.subscribe(I5, { transportType: r5 }), this.client.logger.info(`sending request to new pairing topic: ${_7}`), w5.length > 0) {
        const { namespace: A8 } = Je(n7[0]);
        let k5 = Kc(A8, "request", w5);
        je(S8) && (k5 = qc(k5, S8.pop())), S8.push(k5);
      }
      const T5 = m6 && m6 > P6.wc_sessionAuthenticate.req.ttl ? m6 : P6.wc_sessionAuthenticate.req.ttl, K6 = { authPayload: { type: u7 ?? "caip122", chains: n7, statement: a8, aud: l5, domain: p7, version: "1", nonce: h6, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d7, nbf: y7, resources: S8 }, requester: { publicKey: V5, metadata: this.client.metadata }, expiryTimestamp: Ni(T5) }, Ee3 = { eip155: { chains: n7, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...w5])], events: ["chainChanged", "accountsChanged"] } }, N6 = { requiredNamespaces: {}, optionalNamespaces: Ee3, relays: [{ protocol: "irn" }], pairingTopic: _7, proposer: { publicKey: V5, metadata: this.client.metadata }, expiryTimestamp: Ni(P6.wc_sessionPropose.req.ttl), id: payloadId() }, { done: Tt4, resolve: Ue4, reject: Se3 } = Bi(T5, "Request expired"), ie4 = payloadId(), he4 = _i("session_connect", N6.id), Re3 = _i("session_request", ie4), de3 = async ({ error: A8, session: k5 }) => {
        this.events.off(Re3, ve4), A8 ? Se3(A8) : k5 && Ue4({ session: k5 });
      }, ve4 = async (A8) => {
        var k5, Ge4, je2;
        if (await this.deletePendingAuthRequest(ie4, { message: "fulfilled", code: 0 }), A8.error) {
          const ne3 = zt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return A8.error.code === ne3.code ? void 0 : (this.events.off(he4, de3), Se3(A8.error.message));
        }
        await this.deleteProposal(N6.id), this.events.off(he4, de3);
        const { cacaos: Fe4, responder: H4 } = A8.result, Te3 = [], Qe4 = [];
        for (const ne3 of Fe4) {
          await Pc({ cacao: ne3, projectId: this.client.core.projectId }) || (this.client.logger.error(ne3, "Signature verification failed"), Se3(zt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: qe3 } = ne3, Pe4 = je(qe3.resources), He4 = [to(qe3.iss)], qt5 = bn(qe3.iss);
          if (Pe4) {
            const Ne2 = Fc(Pe4), Pt5 = Zc(Pe4);
            Te3.push(...Ne2), He4.push(...Pt5);
          }
          for (const Ne2 of He4) Qe4.push(`${Ne2}:${qt5}`);
        }
        const re4 = await this.client.core.crypto.generateSharedKey(V5, H4.publicKey);
        let ue2;
        Te3.length > 0 && (ue2 = { topic: re4, acknowledged: true, self: { publicKey: V5, metadata: this.client.metadata }, peer: H4, controller: H4.publicKey, expiry: Ni(W6), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: _7, namespaces: Ka([...new Set(Te3)], [...new Set(Qe4)]), transportType: r5 }, await this.client.core.relayer.subscribe(re4, { transportType: r5 }), await this.client.session.set(re4, ue2), _7 && await this.client.core.pairing.updateMetadata({ topic: _7, metadata: H4.metadata }), ue2 = this.client.session.get(re4)), (k5 = this.client.metadata.redirect) != null && k5.linkMode && (Ge4 = H4.metadata.redirect) != null && Ge4.linkMode && (je2 = H4.metadata.redirect) != null && je2.universal && e3 && (this.client.core.addLinkModeSupportedApp(H4.metadata.redirect.universal), this.client.session.update(re4, { transportType: ee2.link_mode })), Ue4({ auths: Fe4, session: ue2 });
      };
      this.events.once(he4, de3), this.events.once(Re3, ve4);
      let Ie3;
      try {
        if (i8) {
          const A8 = formatJsonRpcRequest("wc_sessionAuthenticate", K6, ie4);
          this.client.core.history.set(_7, A8);
          const k5 = await this.client.core.crypto.encode("", A8, { type: we, encoding: Ge });
          Ie3 = Ta(e3, _7, k5);
        } else await Promise.all([this.sendRequest({ topic: _7, method: "wc_sessionAuthenticate", params: K6, expiry: t3.expiry, throwOnFailedPublish: true, clientRpcId: ie4 }), this.sendRequest({ topic: _7, method: "wc_sessionPropose", params: N6, expiry: P6.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: N6.id })]);
      } catch (A8) {
        throw this.events.off(he4, de3), this.events.off(Re3, ve4), A8;
      }
      return await this.setProposal(N6.id, N6), await this.setAuthRequest(ie4, { request: O4(R5({}, K6), { verifyContext: {} }), pairingTopic: _7, transportType: r5 }), { uri: Ie3 ?? b9, response: Tt4 };
    }), c5(this, "approveSessionAuthenticate", async (t3) => {
      const { id: e3, auths: s7 } = t3, i8 = this.client.core.eventClient.createEvent({ properties: { topic: e3.toString(), trace: [or.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (m6) {
        throw i8.setError(ar2.no_internet_connection), m6;
      }
      const r5 = this.getPendingAuthRequest(e3);
      if (!r5) throw i8.setError(ar2.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${e3}`);
      const n7 = r5.transportType || ee2.relay;
      n7 === ee2.relay && await this.confirmOnlineStateOrThrow();
      const a8 = r5.requester.publicKey, l5 = await this.client.core.crypto.generateKeyPair(), p7 = ha(a8), h6 = { type: ie, receiverPublicKey: a8, senderPublicKey: l5 }, u7 = [], d7 = [];
      for (const m6 of s7) {
        if (!await Pc({ cacao: m6, projectId: this.client.core.projectId })) {
          i8.setError(ar2.invalid_cacao);
          const I5 = zt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e3, topic: p7, error: I5, encodeOpts: h6 }), new Error(I5.message);
        }
        i8.addTrace(or.cacaos_verified);
        const { p: S8 } = m6, _7 = je(S8.resources), b9 = [to(S8.iss)], V5 = bn(S8.iss);
        if (_7) {
          const I5 = Fc(_7), T5 = Zc(_7);
          u7.push(...I5), b9.push(...T5);
        }
        for (const I5 of b9) d7.push(`${I5}:${V5}`);
      }
      const y7 = await this.client.core.crypto.generateSharedKey(l5, a8);
      i8.addTrace(or.create_authenticated_session_topic);
      let w5;
      if (u7?.length > 0) {
        w5 = { topic: y7, acknowledged: true, self: { publicKey: l5, metadata: this.client.metadata }, peer: { publicKey: a8, metadata: r5.requester.metadata }, controller: a8, expiry: Ni(W6), authentication: s7, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r5.pairingTopic, namespaces: Ka([...new Set(u7)], [...new Set(d7)]), transportType: n7 }, i8.addTrace(or.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(y7, { transportType: n7 });
        } catch (m6) {
          throw i8.setError(ar2.subscribe_authenticated_session_topic_failure), m6;
        }
        i8.addTrace(or.subscribe_authenticated_session_topic_success), await this.client.session.set(y7, w5), i8.addTrace(or.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r5.pairingTopic, metadata: r5.requester.metadata });
      }
      i8.addTrace(or.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: p7, id: e3, result: { cacaos: s7, responder: { publicKey: l5, metadata: this.client.metadata } }, encodeOpts: h6, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r5.requester.metadata, n7) });
      } catch (m6) {
        throw i8.setError(ar2.authenticated_session_approve_publish_failure), m6;
      }
      return await this.client.auth.requests.delete(e3, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r5.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i8.eventId }), { session: w5 };
    }), c5(this, "rejectSessionAuthenticate", async (t3) => {
      this.isInitialized();
      const { id: e3, reason: s7 } = t3, i8 = this.getPendingAuthRequest(e3);
      if (!i8) throw new Error(`Could not find pending auth request with id ${e3}`);
      i8.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
      const r5 = i8.requester.publicKey, n7 = await this.client.core.crypto.generateKeyPair(), a8 = ha(r5), l5 = { type: ie, receiverPublicKey: r5, senderPublicKey: n7 };
      await this.sendError({ id: e3, topic: a8, error: s7, encodeOpts: l5, rpcOpts: P6.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i8.requester.metadata, i8.transportType) }), await this.client.auth.requests.delete(e3, { message: "rejected", code: 0 }), await this.deleteProposal(e3);
    }), c5(this, "formatAuthMessage", (t3) => {
      this.isInitialized();
      const { request: e3, iss: s7 } = t3;
      return eo(e3, s7);
    }), c5(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const t3 = this.relayMessageCache.shift();
          t3 && await this.onRelayMessage(t3);
        } catch (t3) {
          this.client.logger.error(t3);
        }
      }, 50);
    }), c5(this, "cleanupDuplicatePairings", async (t3) => {
      if (t3.pairingTopic) try {
        const e3 = this.client.core.pairing.pairings.get(t3.pairingTopic), s7 = this.client.core.pairing.pairings.getAll().filter((i8) => {
          var r5, n7;
          return ((r5 = i8.peerMetadata) == null ? void 0 : r5.url) && ((n7 = i8.peerMetadata) == null ? void 0 : n7.url) === t3.peer.metadata.url && i8.topic && i8.topic !== e3.topic;
        });
        if (s7.length === 0) return;
        this.client.logger.info(`Cleaning up ${s7.length} duplicate pairing(s)`), await Promise.all(s7.map((i8) => this.client.core.pairing.disconnect({ topic: i8.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (e3) {
        this.client.logger.error(e3);
      }
    }), c5(this, "deleteSession", async (t3) => {
      var e3;
      const { topic: s7, expirerHasDeleted: i8 = false, emitEvent: r5 = true, id: n7 = 0 } = t3, { self: a8 } = this.client.session.get(s7);
      await this.client.core.relayer.unsubscribe(s7), await this.client.session.delete(s7, zt("USER_DISCONNECTED")), this.addToRecentlyDeleted(s7, "session"), this.client.core.crypto.keychain.has(a8.publicKey) && await this.client.core.crypto.deleteKeyPair(a8.publicKey), this.client.core.crypto.keychain.has(s7) && await this.client.core.crypto.deleteSymKey(s7), i8 || this.client.core.expirer.del(s7), this.client.core.storage.removeItem(Le2).catch((l5) => this.client.logger.warn(l5)), this.getPendingSessionRequests().forEach((l5) => {
        l5.topic === s7 && this.deletePendingSessionRequest(l5.id, zt("USER_DISCONNECTED"));
      }), s7 === ((e3 = this.sessionRequestQueue.queue[0]) == null ? void 0 : e3.topic) && (this.sessionRequestQueue.state = $5.idle), r5 && this.client.events.emit("session_delete", { id: n7, topic: s7 });
    }), c5(this, "deleteProposal", async (t3, e3) => {
      if (e3) try {
        const s7 = this.client.proposal.get(t3), i8 = this.client.core.eventClient.getEvent({ topic: s7.pairingTopic });
        i8?.setError(nr2.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(t3, zt("USER_DISCONNECTED")), e3 ? Promise.resolve() : this.client.core.expirer.del(t3)]), this.addToRecentlyDeleted(t3, "proposal");
    }), c5(this, "deletePendingSessionRequest", async (t3, e3, s7 = false) => {
      await Promise.all([this.client.pendingRequest.delete(t3, e3), s7 ? Promise.resolve() : this.client.core.expirer.del(t3)]), this.addToRecentlyDeleted(t3, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i8) => i8.id !== t3), s7 && (this.sessionRequestQueue.state = $5.idle, this.client.events.emit("session_request_expire", { id: t3 }));
    }), c5(this, "deletePendingAuthRequest", async (t3, e3, s7 = false) => {
      await Promise.all([this.client.auth.requests.delete(t3, e3), s7 ? Promise.resolve() : this.client.core.expirer.del(t3)]);
    }), c5(this, "setExpiry", async (t3, e3) => {
      this.client.session.keys.includes(t3) && (this.client.core.expirer.set(t3, e3), await this.client.session.update(t3, { expiry: e3 }));
    }), c5(this, "setProposal", async (t3, e3) => {
      this.client.core.expirer.set(t3, Ni(P6.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t3, e3);
    }), c5(this, "setAuthRequest", async (t3, e3) => {
      const { request: s7, pairingTopic: i8, transportType: r5 = ee2.relay } = e3;
      this.client.core.expirer.set(t3, s7.expiryTimestamp), await this.client.auth.requests.set(t3, { authPayload: s7.authPayload, requester: s7.requester, expiryTimestamp: s7.expiryTimestamp, id: t3, pairingTopic: i8, verifyContext: s7.verifyContext, transportType: r5 });
    }), c5(this, "setPendingSessionRequest", async (t3) => {
      const { id: e3, topic: s7, params: i8, verifyContext: r5 } = t3, n7 = i8.request.expiryTimestamp || Ni(P6.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(e3, n7), await this.client.pendingRequest.set(e3, { id: e3, topic: s7, params: i8, verifyContext: r5 });
    }), c5(this, "sendRequest", async (t3) => {
      const { topic: e3, method: s7, params: i8, expiry: r5, relayRpcId: n7, clientRpcId: a8, throwOnFailedPublish: l5, appLink: p7, tvf: h6, publishOpts: u7 = {} } = t3, d7 = formatJsonRpcRequest(s7, i8, a8);
      let y7;
      const w5 = !!p7;
      try {
        const _7 = w5 ? Ge : oe;
        y7 = await this.client.core.crypto.encode(e3, d7, { encoding: _7 });
      } catch (_7) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e3} failed`), _7;
      }
      let m6;
      if (mt2.includes(s7)) {
        const _7 = pa2(JSON.stringify(d7)), b9 = pa2(y7);
        m6 = await this.client.core.verify.register({ id: b9, decryptedId: _7 });
      }
      const S8 = R5(R5({}, P6[s7].req), u7);
      if (S8.attestation = m6, r5 && (S8.ttl = r5), n7 && (S8.id = n7), this.client.core.history.set(e3, d7), w5) {
        const _7 = Ta(p7, e3, y7);
        await global.Linking.openURL(_7, this.client.name);
      } else S8.tvf = O4(R5({}, h6), { correlationId: d7.id }), l5 ? (S8.internal = O4(R5({}, S8.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e3, y7, S8)) : this.client.core.relayer.publish(e3, y7, S8).catch((_7) => this.client.logger.error(_7));
      return d7.id;
    }), c5(this, "sendProposeSession", async (t3) => {
      const { proposal: e3, publishOpts: s7 } = t3, i8 = formatJsonRpcRequest("wc_sessionPropose", e3, e3.id);
      this.client.core.history.set(e3.pairingTopic, i8);
      const r5 = await this.client.core.crypto.encode(e3.pairingTopic, i8, { encoding: oe }), n7 = pa2(JSON.stringify(i8)), a8 = pa2(r5), l5 = await this.client.core.verify.register({ id: a8, decryptedId: n7 });
      await this.client.core.relayer.publishCustom({ payload: { pairingTopic: e3.pairingTopic, sessionProposal: r5 }, opts: O4(R5({}, s7), { publishMethod: "wc_proposeSession", attestation: l5 }) });
    }), c5(this, "sendApproveSession", async (t3) => {
      const { sessionTopic: e3, pairingProposalResponse: s7, proposal: i8, sessionSettleRequest: r5, publishOpts: n7 } = t3, a8 = formatJsonRpcResult(i8.id, s7), l5 = await this.client.core.crypto.encode(i8.pairingTopic, a8, { encoding: oe }), p7 = formatJsonRpcRequest("wc_sessionSettle", r5, n7?.id), h6 = await this.client.core.crypto.encode(e3, p7, { encoding: oe });
      this.client.core.history.set(e3, p7), await this.client.core.relayer.publishCustom({ payload: { sessionTopic: e3, pairingTopic: i8.pairingTopic, sessionProposalResponse: l5, sessionSettlementRequest: h6 }, opts: O4(R5({}, n7), { publishMethod: "wc_approveSession" }) });
    }), c5(this, "sendResult", async (t3) => {
      const { id: e3, topic: s7, result: i8, throwOnFailedPublish: r5, encodeOpts: n7, appLink: a8 } = t3, l5 = formatJsonRpcResult(e3, i8);
      let p7;
      const h6 = a8 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const y7 = h6 ? Ge : oe;
        p7 = await this.client.core.crypto.encode(s7, l5, O4(R5({}, n7 || {}), { encoding: y7 }));
      } catch (y7) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s7} failed`), y7;
      }
      let u7, d7;
      try {
        u7 = await this.client.core.history.get(s7, e3);
        const y7 = u7.request;
        try {
          d7 = this.getTVFParams(e3, y7.params, i8);
        } catch (w5) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w5?.message}`);
        }
      } catch (y7) {
        throw this.client.logger.error(`sendResult() -> history.get(${s7}, ${e3}) failed`), y7;
      }
      if (h6) {
        const y7 = Ta(a8, s7, p7);
        await global.Linking.openURL(y7, this.client.name);
      } else {
        const y7 = u7.request.method, w5 = P6[y7].res;
        w5.tvf = O4(R5({}, d7), { correlationId: e3 }), r5 ? (w5.internal = O4(R5({}, w5.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s7, p7, w5)) : this.client.core.relayer.publish(s7, p7, w5).catch((m6) => this.client.logger.error(m6));
      }
      await this.client.core.history.resolve(l5);
    }), c5(this, "sendError", async (t3) => {
      const { id: e3, topic: s7, error: i8, encodeOpts: r5, rpcOpts: n7, appLink: a8 } = t3, l5 = formatJsonRpcError(e3, i8);
      let p7;
      const h6 = a8 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d7 = h6 ? Ge : oe;
        p7 = await this.client.core.crypto.encode(s7, l5, O4(R5({}, r5 || {}), { encoding: d7 }));
      } catch (d7) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s7} failed`), d7;
      }
      let u7;
      try {
        u7 = await this.client.core.history.get(s7, e3);
      } catch (d7) {
        throw this.client.logger.error(`sendError() -> history.get(${s7}, ${e3}) failed`), d7;
      }
      if (h6) {
        const d7 = Ta(a8, s7, p7);
        await global.Linking.openURL(d7, this.client.name);
      } else {
        const d7 = u7.request.method, y7 = n7 || P6[d7].res;
        this.client.core.relayer.publish(s7, p7, y7);
      }
      await this.client.core.history.resolve(l5);
    }), c5(this, "cleanup", async () => {
      const t3 = [], e3 = [];
      this.client.session.getAll().forEach((s7) => {
        let i8 = false;
        Ui(s7.expiry) && (i8 = true), this.client.core.crypto.keychain.has(s7.topic) || (i8 = true), i8 && t3.push(s7.topic);
      }), this.client.proposal.getAll().forEach((s7) => {
        Ui(s7.expiryTimestamp) && e3.push(s7.id);
      }), await Promise.all([...t3.map((s7) => this.deleteSession({ topic: s7 })), ...e3.map((s7) => this.deleteProposal(s7))]);
    }), c5(this, "onProviderMessageEvent", async (t3) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t3) : await this.onRelayMessage(t3);
    }), c5(this, "onRelayEventRequest", async (t3) => {
      this.requestQueue.queue.push(t3), await this.processRequestsQueue();
    }), c5(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $5.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $5.active;
        const t3 = this.requestQueue.queue.shift();
        if (t3) try {
          await this.processRequest(t3);
        } catch (e3) {
          this.client.logger.warn(e3);
        }
      }
      this.requestQueue.state = $5.idle;
    }), c5(this, "processRequest", async (t3) => {
      const { topic: e3, payload: s7, attestation: i8, transportType: r5, encryptedId: n7 } = t3, a8 = s7.method;
      if (!this.shouldIgnorePairingRequest({ topic: e3, requestMethod: a8 })) switch (a8) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: e3, payload: s7, attestation: i8, encryptedId: n7 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(e3, s7);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(e3, s7);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(e3, s7);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(e3, s7);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(e3, s7);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: e3, payload: s7, attestation: i8, encryptedId: n7, transportType: r5 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(e3, s7);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: e3, payload: s7, attestation: i8, encryptedId: n7, transportType: r5 });
        default:
          return this.client.logger.info(`Unsupported request method ${a8}`);
      }
    }), c5(this, "onRelayEventResponse", async (t3) => {
      const { topic: e3, payload: s7, transportType: i8 } = t3, r5 = (await this.client.core.history.get(e3, s7.id)).request.method;
      switch (r5) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e3, s7, i8);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e3, s7);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e3, s7);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e3, s7);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e3, s7);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e3, s7);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e3, s7);
        default:
          return this.client.logger.info(`Unsupported response method ${r5}`);
      }
    }), c5(this, "onRelayEventUnknownPayload", (t3) => {
      const { topic: e3 } = t3, { message: s7 } = Bt("MISSING_OR_INVALID", `Decoded payload on topic ${e3} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s7);
    }), c5(this, "shouldIgnorePairingRequest", (t3) => {
      const { topic: e3, requestMethod: s7 } = t3, i8 = this.expectedPairingMethodMap.get(e3);
      return !i8 || i8.includes(s7) ? false : !!(i8.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c5(this, "onSessionProposeRequest", async (t3) => {
      const { topic: e3, payload: s7, attestation: i8, encryptedId: r5 } = t3, { params: n7, id: a8 } = s7;
      try {
        const l5 = this.client.core.eventClient.getEvent({ topic: e3 });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l5?.setError(X4.proposal_listener_not_found)), this.isValidConnect(R5({}, s7.params));
        const p7 = n7.expiryTimestamp || Ni(P6.wc_sessionPropose.req.ttl), h6 = R5({ id: a8, pairingTopic: e3, expiryTimestamp: p7, attestation: i8, encryptedId: r5 }, n7);
        await this.setProposal(a8, h6);
        const u7 = await this.getVerifyContext({ attestationId: i8, hash: pa2(JSON.stringify(s7)), encryptedId: r5, metadata: h6.proposer.metadata });
        l5?.addTrace(Y2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a8, params: h6, verifyContext: u7 });
      } catch (l5) {
        await this.sendError({ id: a8, topic: e3, error: l5, rpcOpts: P6.wc_sessionPropose.autoReject }), this.client.logger.error(l5);
      }
    }), c5(this, "onSessionProposeResponse", async (t3, e3, s7) => {
      const { id: i8 } = e3;
      if (isJsonRpcResult(e3)) {
        const { result: r5 } = e3;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r5 });
        const n7 = this.client.proposal.get(i8);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n7 });
        const a8 = n7.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a8 });
        const l5 = r5.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l5 });
        const p7 = await this.client.core.crypto.generateSharedKey(a8, l5);
        this.pendingSessions.set(i8, { sessionTopic: p7, pairingTopic: t3, proposalId: i8, publicKey: a8 });
        const h6 = await this.client.core.relayer.subscribe(p7, { transportType: s7 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h6 }), await this.client.core.pairing.activate({ topic: t3 });
      } else if (isJsonRpcError(e3)) {
        await this.deleteProposal(i8);
        const r5 = _i("session_connect", i8);
        if (this.events.listenerCount(r5) === 0) throw new Error(`emitting ${r5} without any listeners, 954`);
        this.events.emit(r5, { error: e3.error });
      }
    }), c5(this, "onSessionSettleRequest", async (t3, e3) => {
      const { id: s7, params: i8 } = e3;
      try {
        this.isValidSessionSettleRequest(i8);
        const { relay: r5, controller: n7, expiry: a8, namespaces: l5, sessionProperties: p7, scopedProperties: h6, sessionConfig: u7 } = e3.params, d7 = [...this.pendingSessions.values()].find((m6) => m6.sessionTopic === t3);
        if (!d7) return this.client.logger.error(`Pending session not found for topic ${t3}`);
        const y7 = this.client.proposal.get(d7.proposalId), w5 = O4(R5(R5(R5({ topic: t3, relay: r5, expiry: a8, namespaces: l5, acknowledged: true, pairingTopic: d7.pairingTopic, requiredNamespaces: y7.requiredNamespaces, optionalNamespaces: y7.optionalNamespaces, controller: n7.publicKey, self: { publicKey: d7.publicKey, metadata: this.client.metadata }, peer: { publicKey: n7.publicKey, metadata: n7.metadata } }, p7 && { sessionProperties: p7 }), h6 && { scopedProperties: h6 }), u7 && { sessionConfig: u7 }), { transportType: ee2.relay });
        await this.client.session.set(w5.topic, w5), await this.setExpiry(w5.topic, w5.expiry), await this.client.core.pairing.updateMetadata({ topic: d7.pairingTopic, metadata: w5.peer.metadata }), this.client.events.emit("session_connect", { session: w5 }), this.events.emit(_i("session_connect", d7.proposalId), { session: w5 }), this.pendingSessions.delete(d7.proposalId), this.deleteProposal(d7.proposalId, false), this.cleanupDuplicatePairings(w5), await this.sendResult({ id: e3.id, topic: t3, result: true });
      } catch (r5) {
        await this.sendError({ id: s7, topic: t3, error: r5 }), this.client.logger.error(r5);
      }
    }), c5(this, "onSessionSettleResponse", async (t3, e3) => {
      const { id: s7 } = e3;
      isJsonRpcResult(e3) ? (await this.client.session.update(t3, { acknowledged: true }), this.events.emit(_i("session_approve", s7), {})) : isJsonRpcError(e3) && (await this.client.session.delete(t3, zt("USER_DISCONNECTED")), this.events.emit(_i("session_approve", s7), { error: e3.error }));
    }), c5(this, "onSessionUpdateRequest", async (t3, e3) => {
      const { params: s7, id: i8 } = e3;
      try {
        const r5 = `${t3}_session_update`, n7 = hu.get(r5);
        if (n7 && this.isRequestOutOfSync(n7, i8)) {
          this.client.logger.warn(`Discarding out of sync request - ${i8}`), this.sendError({ id: i8, topic: t3, error: zt("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(R5({ topic: t3 }, s7));
        try {
          hu.set(r5, i8), await this.client.session.update(t3, { namespaces: s7.namespaces }), await this.sendResult({ id: i8, topic: t3, result: true });
        } catch (a8) {
          throw hu.delete(r5), a8;
        }
        this.client.events.emit("session_update", { id: i8, topic: t3, params: s7 });
      } catch (r5) {
        await this.sendError({ id: i8, topic: t3, error: r5 }), this.client.logger.error(r5);
      }
    }), c5(this, "isRequestOutOfSync", (t3, e3) => e3.toString().slice(0, -3) < t3.toString().slice(0, -3)), c5(this, "onSessionUpdateResponse", (t3, e3) => {
      const { id: s7 } = e3, i8 = _i("session_update", s7);
      if (this.events.listenerCount(i8) === 0) throw new Error(`emitting ${i8} without any listeners`);
      isJsonRpcResult(e3) ? this.events.emit(_i("session_update", s7), {}) : isJsonRpcError(e3) && this.events.emit(_i("session_update", s7), { error: e3.error });
    }), c5(this, "onSessionExtendRequest", async (t3, e3) => {
      const { id: s7 } = e3;
      try {
        this.isValidExtend({ topic: t3 }), await this.setExpiry(t3, Ni(W6)), await this.sendResult({ id: s7, topic: t3, result: true }), this.client.events.emit("session_extend", { id: s7, topic: t3 });
      } catch (i8) {
        await this.sendError({ id: s7, topic: t3, error: i8 }), this.client.logger.error(i8);
      }
    }), c5(this, "onSessionExtendResponse", (t3, e3) => {
      const { id: s7 } = e3, i8 = _i("session_extend", s7);
      if (this.events.listenerCount(i8) === 0) throw new Error(`emitting ${i8} without any listeners`);
      isJsonRpcResult(e3) ? this.events.emit(_i("session_extend", s7), {}) : isJsonRpcError(e3) && this.events.emit(_i("session_extend", s7), { error: e3.error });
    }), c5(this, "onSessionPingRequest", async (t3, e3) => {
      const { id: s7 } = e3;
      try {
        this.isValidPing({ topic: t3 }), await this.sendResult({ id: s7, topic: t3, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s7, topic: t3 });
      } catch (i8) {
        await this.sendError({ id: s7, topic: t3, error: i8 }), this.client.logger.error(i8);
      }
    }), c5(this, "onSessionPingResponse", (t3, e3) => {
      const { id: s7 } = e3, i8 = _i("session_ping", s7);
      setTimeout(() => {
        if (this.events.listenerCount(i8) === 0) throw new Error(`emitting ${i8} without any listeners 2176`);
        isJsonRpcResult(e3) ? this.events.emit(_i("session_ping", s7), {}) : isJsonRpcError(e3) && this.events.emit(_i("session_ping", s7), { error: e3.error });
      }, 500);
    }), c5(this, "onSessionDeleteRequest", async (t3, e3) => {
      const { id: s7 } = e3;
      try {
        this.isValidDisconnect({ topic: t3, reason: e3.params }), await Promise.all([new Promise((i8) => {
          this.client.core.relayer.once(C5.publish, async () => {
            i8(await this.deleteSession({ topic: t3, id: s7 }));
          });
        }), this.sendResult({ id: s7, topic: t3, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: t3, error: zt("USER_DISCONNECTED") })]).catch((i8) => this.client.logger.error(i8));
      } catch (i8) {
        this.client.logger.error(i8);
      }
    }), c5(this, "onSessionRequest", async (t3) => {
      var e3, s7, i8;
      const { topic: r5, payload: n7, attestation: a8, encryptedId: l5, transportType: p7 } = t3, { id: h6, params: u7 } = n7;
      try {
        await this.isValidRequest(R5({ topic: r5 }, u7));
        const d7 = this.client.session.get(r5), y7 = await this.getVerifyContext({ attestationId: a8, hash: pa2(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u7, h6))), encryptedId: l5, metadata: d7.peer.metadata, transportType: p7 }), w5 = { id: h6, topic: r5, params: u7, verifyContext: y7 };
        await this.setPendingSessionRequest(w5), p7 === ee2.link_mode && (e3 = d7.peer.metadata.redirect) != null && e3.universal && this.client.core.addLinkModeSupportedApp((s7 = d7.peer.metadata.redirect) == null ? void 0 : s7.universal), (i8 = this.client.signConfig) != null && i8.disableRequestQueue ? this.emitSessionRequest(w5) : (this.addSessionRequestToSessionRequestQueue(w5), this.processSessionRequestQueue());
      } catch (d7) {
        await this.sendError({ id: h6, topic: r5, error: d7 }), this.client.logger.error(d7);
      }
    }), c5(this, "onSessionRequestResponse", (t3, e3) => {
      const { id: s7 } = e3, i8 = _i("session_request", s7);
      if (this.events.listenerCount(i8) === 0) throw new Error(`emitting ${i8} without any listeners`);
      isJsonRpcResult(e3) ? this.events.emit(_i("session_request", s7), { result: e3.result }) : isJsonRpcError(e3) && this.events.emit(_i("session_request", s7), { error: e3.error });
    }), c5(this, "onSessionEventRequest", async (t3, e3) => {
      const { id: s7, params: i8 } = e3;
      try {
        const r5 = `${t3}_session_event_${i8.event.name}`, n7 = hu.get(r5);
        if (n7 && this.isRequestOutOfSync(n7, s7)) {
          this.client.logger.info(`Discarding out of sync request - ${s7}`);
          return;
        }
        this.isValidEmit(R5({ topic: t3 }, i8)), this.client.events.emit("session_event", { id: s7, topic: t3, params: i8 }), hu.set(r5, s7);
      } catch (r5) {
        await this.sendError({ id: s7, topic: t3, error: r5 }), this.client.logger.error(r5);
      }
    }), c5(this, "onSessionAuthenticateResponse", (t3, e3) => {
      const { id: s7 } = e3;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t3, payload: e3 }), isJsonRpcResult(e3) ? this.events.emit(_i("session_request", s7), { result: e3.result }) : isJsonRpcError(e3) && this.events.emit(_i("session_request", s7), { error: e3.error });
    }), c5(this, "onSessionAuthenticateRequest", async (t3) => {
      var e3;
      const { topic: s7, payload: i8, attestation: r5, encryptedId: n7, transportType: a8 } = t3;
      try {
        const { requester: l5, authPayload: p7, expiryTimestamp: h6 } = i8.params, u7 = await this.getVerifyContext({ attestationId: r5, hash: pa2(JSON.stringify(i8)), encryptedId: n7, metadata: l5.metadata, transportType: a8 }), d7 = { requester: l5, pairingTopic: s7, id: i8.id, authPayload: p7, verifyContext: u7, expiryTimestamp: h6 };
        await this.setAuthRequest(i8.id, { request: d7, pairingTopic: s7, transportType: a8 }), a8 === ee2.link_mode && (e3 = l5.metadata.redirect) != null && e3.universal && this.client.core.addLinkModeSupportedApp(l5.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s7, params: i8.params, id: i8.id, verifyContext: u7 });
      } catch (l5) {
        this.client.logger.error(l5);
        const p7 = i8.params.requester.publicKey, h6 = await this.client.core.crypto.generateKeyPair(), u7 = this.getAppLinkIfEnabled(i8.params.requester.metadata, a8), d7 = { type: ie, receiverPublicKey: p7, senderPublicKey: h6 };
        await this.sendError({ id: i8.id, topic: s7, error: l5, encodeOpts: d7, rpcOpts: P6.wc_sessionAuthenticate.autoReject, appLink: u7 });
      }
    }), c5(this, "addSessionRequestToSessionRequestQueue", (t3) => {
      this.sessionRequestQueue.queue.push(t3);
    }), c5(this, "cleanupAfterResponse", (t3) => {
      this.deletePendingSessionRequest(t3.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $5.idle, this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay));
    }), c5(this, "cleanupPendingSentRequestsForTopic", ({ topic: t3, error: e3 }) => {
      const s7 = this.client.core.history.pending;
      s7.length > 0 && s7.filter((i8) => i8.topic === t3 && i8.request.method === "wc_sessionRequest").forEach((i8) => {
        const r5 = i8.request.id, n7 = _i("session_request", r5);
        if (this.events.listenerCount(n7) === 0) throw new Error(`emitting ${n7} without any listeners`);
        this.events.emit(_i("session_request", i8.request.id), { error: e3 });
      });
    }), c5(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $5.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t3 = this.sessionRequestQueue.queue[0];
      if (!t3) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.emitSessionRequest(t3);
      } catch (e3) {
        this.client.logger.error(e3);
      }
    }), c5(this, "emitSessionRequest", (t3) => {
      if (this.emittedSessionRequests.has(t3.id)) {
        this.client.logger.warn({ id: t3.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${t3.id}`);
        return;
      }
      this.sessionRequestQueue.state = $5.active, this.emittedSessionRequests.add(t3.id), this.client.events.emit("session_request", t3);
    }), c5(this, "onPairingCreated", (t3) => {
      if (t3.methods && this.expectedPairingMethodMap.set(t3.topic, t3.methods), t3.active) return;
      const e3 = this.client.proposal.getAll().find((s7) => s7.pairingTopic === t3.topic);
      e3 && this.onSessionProposeRequest({ topic: t3.topic, payload: formatJsonRpcRequest("wc_sessionPropose", O4(R5({}, e3), { requiredNamespaces: e3.requiredNamespaces, optionalNamespaces: e3.optionalNamespaces, relays: e3.relays, proposer: e3.proposer, sessionProperties: e3.sessionProperties, scopedProperties: e3.scopedProperties }), e3.id), attestation: e3.attestation, encryptedId: e3.encryptedId });
    }), c5(this, "isValidConnect", async (t3) => {
      if (!Qa(t3)) {
        const { message: l5 } = Bt("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t3)}`);
        throw new Error(l5);
      }
      const { pairingTopic: e3, requiredNamespaces: s7, optionalNamespaces: i8, sessionProperties: r5, scopedProperties: n7, relays: a8 } = t3;
      if (Dt(e3) || await this.isValidPairingTopic(e3), !Xa(a8, true)) {
        const { message: l5 } = Bt("MISSING_OR_INVALID", `connect() relays: ${a8}`);
        throw new Error(l5);
      }
      if (s7 && !Dt(s7) && Ye(s7) !== 0) {
        const l5 = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l5) : this.client.logger.warn(l5), this.validateNamespaces(s7, "requiredNamespaces");
      }
      if (i8 && !Dt(i8) && Ye(i8) !== 0 && this.validateNamespaces(i8, "optionalNamespaces"), r5 && !Dt(r5) && this.validateSessionProps(r5, "sessionProperties"), n7 && !Dt(n7)) {
        this.validateSessionProps(n7, "scopedProperties");
        const l5 = Object.keys(s7 || {}).concat(Object.keys(i8 || {}));
        if (!Object.keys(n7).every((p7) => l5.includes(p7.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n7)}, required/optional namespaces: ${JSON.stringify(l5)}`);
      }
    }), c5(this, "validateNamespaces", (t3, e3) => {
      const s7 = Wa(t3, "connect()", e3);
      if (s7) throw new Error(s7.message);
    }), c5(this, "isValidApprove", async (t3) => {
      if (!Qa(t3)) throw new Error(Bt("MISSING_OR_INVALID", `approve() params: ${t3}`).message);
      const { id: e3, namespaces: s7, relayProtocol: i8, sessionProperties: r5, scopedProperties: n7 } = t3;
      this.checkRecentlyDeleted(e3), await this.isValidProposalId(e3);
      const a8 = this.client.proposal.get(e3), l5 = Ss(s7, "approve()");
      if (l5) throw new Error(l5.message);
      const p7 = Ns(a8.requiredNamespaces, s7, "approve()");
      if (p7) throw new Error(p7.message);
      if (!ft(i8, true)) {
        const { message: h6 } = Bt("MISSING_OR_INVALID", `approve() relayProtocol: ${i8}`);
        throw new Error(h6);
      }
      if (r5 && !Dt(r5) && this.validateSessionProps(r5, "sessionProperties"), n7 && !Dt(n7)) {
        this.validateSessionProps(n7, "scopedProperties");
        const h6 = new Set(Object.keys(s7));
        if (!Object.keys(n7).every((u7) => h6.has(u7.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n7)}, approved namespaces: ${Array.from(h6).join(", ")}`);
      }
    }), c5(this, "isValidReject", async (t3) => {
      if (!Qa(t3)) {
        const { message: i8 } = Bt("MISSING_OR_INVALID", `reject() params: ${t3}`);
        throw new Error(i8);
      }
      const { id: e3, reason: s7 } = t3;
      if (this.checkRecentlyDeleted(e3), await this.isValidProposalId(e3), !tu(s7)) {
        const { message: i8 } = Bt("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s7)}`);
        throw new Error(i8);
      }
    }), c5(this, "isValidSessionSettleRequest", (t3) => {
      if (!Qa(t3)) {
        const { message: l5 } = Bt("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t3}`);
        throw new Error(l5);
      }
      const { relay: e3, controller: s7, namespaces: i8, expiry: r5 } = t3;
      if (!Os(e3)) {
        const { message: l5 } = Bt("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l5);
      }
      const n7 = Ya(s7, "onSessionSettleRequest()");
      if (n7) throw new Error(n7.message);
      const a8 = Ss(i8, "onSessionSettleRequest()");
      if (a8) throw new Error(a8.message);
      if (Ui(r5)) {
        const { message: l5 } = Bt("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l5);
      }
    }), c5(this, "isValidUpdate", async (t3) => {
      if (!Qa(t3)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `update() params: ${t3}`);
        throw new Error(a8);
      }
      const { topic: e3, namespaces: s7 } = t3;
      this.checkRecentlyDeleted(e3), await this.isValidSessionTopic(e3);
      const i8 = this.client.session.get(e3), r5 = Ss(s7, "update()");
      if (r5) throw new Error(r5.message);
      const n7 = Ns(i8.requiredNamespaces, s7, "update()");
      if (n7) throw new Error(n7.message);
    }), c5(this, "isValidExtend", async (t3) => {
      if (!Qa(t3)) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `extend() params: ${t3}`);
        throw new Error(s7);
      }
      const { topic: e3 } = t3;
      this.checkRecentlyDeleted(e3), await this.isValidSessionTopic(e3);
    }), c5(this, "isValidRequest", async (t3) => {
      if (!Qa(t3)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `request() params: ${t3}`);
        throw new Error(a8);
      }
      const { topic: e3, request: s7, chainId: i8, expiry: r5 } = t3;
      this.checkRecentlyDeleted(e3), await this.isValidSessionTopic(e3);
      const { namespaces: n7 } = this.client.session.get(e3);
      if (!ou(n7, i8)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `request() chainId: ${i8}`);
        throw new Error(a8);
      }
      if (!eu(s7)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `request() ${JSON.stringify(s7)}`);
        throw new Error(a8);
      }
      if (!su(n7, i8, s7.method)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `request() method: ${s7.method}`);
        throw new Error(a8);
      }
      if (r5 && !au(r5, _e3)) {
        const { message: a8 } = Bt("MISSING_OR_INVALID", `request() expiry: ${r5}. Expiry must be a number (in seconds) between ${_e3.min} and ${_e3.max}`);
        throw new Error(a8);
      }
    }), c5(this, "isValidRespond", async (t3) => {
      var e3;
      if (!Qa(t3)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `respond() params: ${t3}`);
        throw new Error(n7);
      }
      const { topic: s7, response: i8 } = t3;
      try {
        await this.isValidSessionTopic(s7);
      } catch (n7) {
        throw (e3 = t3?.response) != null && e3.id && this.cleanupAfterResponse(t3), n7;
      }
      if (!nu(i8)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i8)}`);
        throw new Error(n7);
      }
      const r5 = this.client.pendingRequest.get(i8.id);
      if (r5.topic !== s7) {
        const { message: n7 } = Bt("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i8.id}, expected topic: ${r5.topic}, received topic: ${s7}`);
        throw new Error(n7);
      }
    }), c5(this, "isValidPing", async (t3) => {
      if (!Qa(t3)) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `ping() params: ${t3}`);
        throw new Error(s7);
      }
      const { topic: e3 } = t3;
      await this.isValidSessionOrPairingTopic(e3);
    }), c5(this, "isValidEmit", async (t3) => {
      if (!Qa(t3)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `emit() params: ${t3}`);
        throw new Error(n7);
      }
      const { topic: e3, event: s7, chainId: i8 } = t3;
      await this.isValidSessionTopic(e3);
      const { namespaces: r5 } = this.client.session.get(e3);
      if (!ou(r5, i8)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `emit() chainId: ${i8}`);
        throw new Error(n7);
      }
      if (!ru(s7)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s7)}`);
        throw new Error(n7);
      }
      if (!iu(r5, i8, s7.name)) {
        const { message: n7 } = Bt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s7)}`);
        throw new Error(n7);
      }
    }), c5(this, "isValidDisconnect", async (t3) => {
      if (!Qa(t3)) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `disconnect() params: ${t3}`);
        throw new Error(s7);
      }
      const { topic: e3 } = t3;
      await this.isValidSessionOrPairingTopic(e3);
    }), c5(this, "isValidAuthenticate", (t3) => {
      const { chains: e3, uri: s7, domain: i8, nonce: r5 } = t3;
      if (!Array.isArray(e3) || e3.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ft(s7, false)) throw new Error("uri is required parameter");
      if (!ft(i8, false)) throw new Error("domain is required parameter");
      if (!ft(r5, false)) throw new Error("nonce is required parameter");
      if ([...new Set(e3.map((a8) => Je(a8).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: n7 } = Je(e3[0]);
      if (n7 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c5(this, "getVerifyContext", async (t3) => {
      const { attestationId: e3, hash: s7, encryptedId: i8, metadata: r5, transportType: n7 } = t3, a8 = { verified: { verifyUrl: r5.verifyUrl || be2, validation: "UNKNOWN", origin: r5.url || "" } };
      try {
        if (n7 === ee2.link_mode) {
          const p7 = this.getAppLinkIfEnabled(r5, n7);
          return a8.verified.validation = p7 && new URL(p7).origin === new URL(r5.url).origin ? "VALID" : "INVALID", a8;
        }
        const l5 = await this.client.core.verify.resolve({ attestationId: e3, hash: s7, encryptedId: i8, verifyUrl: r5.verifyUrl });
        l5 && (a8.verified.origin = l5.origin, a8.verified.isScam = l5.isScam, a8.verified.validation = l5.origin === new URL(r5.url).origin ? "VALID" : "INVALID");
      } catch (l5) {
        this.client.logger.warn(l5);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a8)}`), a8;
    }), c5(this, "validateSessionProps", (t3, e3) => {
      Object.values(t3).forEach((s7, i8) => {
        if (s7 == null) {
          const { message: r5 } = Bt("MISSING_OR_INVALID", `${e3} must contain an existing value for each key. Received: ${s7} for key ${Object.keys(t3)[i8]}`);
          throw new Error(r5);
        }
      });
    }), c5(this, "getPendingAuthRequest", (t3) => {
      const e3 = this.client.auth.requests.get(t3);
      return typeof e3 == "object" ? e3 : void 0;
    }), c5(this, "addToRecentlyDeleted", (t3, e3) => {
      if (this.recentlyDeletedMap.set(t3, e3), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s7 = 0;
        const i8 = this.recentlyDeletedLimit / 2;
        for (const r5 of this.recentlyDeletedMap.keys()) {
          if (s7++ >= i8) break;
          this.recentlyDeletedMap.delete(r5);
        }
      }
    }), c5(this, "checkRecentlyDeleted", (t3) => {
      const e3 = this.recentlyDeletedMap.get(t3);
      if (e3) {
        const { message: s7 } = Bt("MISSING_OR_INVALID", `Record was recently deleted - ${e3}: ${t3}`);
        throw new Error(s7);
      }
    }), c5(this, "isLinkModeEnabled", (t3, e3) => {
      var s7, i8, r5, n7, a8, l5, p7, h6, u7;
      return !t3 || e3 !== ee2.link_mode ? false : ((i8 = (s7 = this.client.metadata) == null ? void 0 : s7.redirect) == null ? void 0 : i8.linkMode) === true && ((n7 = (r5 = this.client.metadata) == null ? void 0 : r5.redirect) == null ? void 0 : n7.universal) !== void 0 && ((l5 = (a8 = this.client.metadata) == null ? void 0 : a8.redirect) == null ? void 0 : l5.universal) !== "" && ((p7 = t3?.redirect) == null ? void 0 : p7.universal) !== void 0 && ((h6 = t3?.redirect) == null ? void 0 : h6.universal) !== "" && ((u7 = t3?.redirect) == null ? void 0 : u7.linkMode) === true && this.client.core.linkModeSupportedApps.includes(t3.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c5(this, "getAppLinkIfEnabled", (t3, e3) => {
      var s7;
      return this.isLinkModeEnabled(t3, e3) ? (s7 = t3?.redirect) == null ? void 0 : s7.universal : void 0;
    }), c5(this, "handleLinkModeMessage", ({ url: t3 }) => {
      if (!t3 || !t3.includes("wc_ev") || !t3.includes("topic")) return;
      const e3 = Ti(t3, "topic") || "", s7 = decodeURIComponent(Ti(t3, "wc_ev") || ""), i8 = this.client.session.keys.includes(e3);
      i8 && this.client.session.update(e3, { transportType: ee2.link_mode }), this.client.core.dispatchEnvelope({ topic: e3, message: s7, sessionExists: i8 });
    }), c5(this, "registerLinkModeListeners", async () => {
      var t3;
      if (ji() || At() && (t3 = this.client.metadata.redirect) != null && t3.linkMode) {
        const e3 = global == null ? void 0 : global.Linking;
        if (typeof e3 < "u") {
          e3.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s7 = await e3.getInitialURL();
          s7 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s7 });
          }, 50);
        }
      }
    }), c5(this, "getTVFParams", (t3, e3, s7) => {
      var i8, r5, n7;
      if (!((i8 = e3.request) != null && i8.method)) return {};
      const a8 = { correlationId: t3, rpcMethods: [e3.request.method], chainId: e3.chainId };
      try {
        const l5 = this.extractTxHashesFromResult(e3.request, s7);
        a8.txHashes = l5, a8.contractAddresses = this.isValidContractData(e3.request.params) ? [(n7 = (r5 = e3.request.params) == null ? void 0 : r5[0]) == null ? void 0 : n7.to] : [];
      } catch (l5) {
        this.client.logger.warn(l5, "Error getting TVF params");
      }
      return a8;
    }), c5(this, "isValidContractData", (t3) => {
      var e3;
      if (!t3) return false;
      try {
        const s7 = t3?.data || ((e3 = t3?.[0]) == null ? void 0 : e3.data);
        if (!s7.startsWith("0x")) return false;
        const i8 = s7.slice(2);
        return /^[0-9a-fA-F]*$/.test(i8) ? i8.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c5(this, "extractTxHashesFromResult", (t3, e3) => {
      var s7;
      try {
        if (!e3) return [];
        const i8 = t3.method, r5 = yt2[i8];
        if (i8 === "sui_signTransaction") return [Oc(e3.transactionBytes)];
        if (i8 === "near_signTransaction") return [Nc(e3)];
        if (i8 === "near_signTransactions") return e3.map((a8) => Nc(a8));
        if (i8 === "xrpl_signTransactionFor" || i8 === "xrpl_signTransaction") return [(s7 = e3.tx_json) == null ? void 0 : s7.hash];
        if (i8 === "polkadot_signTransaction") return [mu({ transaction: t3.params.transactionPayload, signature: e3.signature })];
        if (i8 === "algo_signTxn") return Ee(e3) ? e3.map((a8) => Uc(a8)) : [Uc(e3)];
        if (i8 === "cosmos_signDirect") return [_c(e3)];
        if (i8 === "wallet_sendCalls") return Rc(e3);
        if (typeof e3 == "string") return [e3];
        const n7 = e3[r5.key];
        if (Ee(n7)) return i8 === "solana_signAllTransactions" ? n7.map((a8) => Sc(a8)) : n7;
        if (typeof n7 == "string") return [n7];
      } catch (i8) {
        this.client.logger.warn(i8, "Error extracting tx hashes from result");
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const o7 = this.client.session.keys, t3 = this.client.core.relayer.messages.getWithoutAck(o7);
      for (const [e3, s7] of Object.entries(t3)) for (const i8 of s7) try {
        await this.onProviderMessageEvent({ topic: e3, message: i8, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${e3}, message: ${i8}`);
      }
    } catch (o7) {
      this.client.logger.warn(o7, "processPendingMessageEvents failed");
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: o7 } = Bt("NOT_INITIALIZED", this.name);
      throw new Error(o7);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(C5.message, (o7) => {
      this.onProviderMessageEvent(o7);
    });
  }
  async onRelayMessage(o7) {
    const { topic: t3, message: e3, attestation: s7, transportType: i8 } = o7, { publicKey: r5 } = this.client.auth.authKeys.keys.includes(pe2) ? this.client.auth.authKeys.get(pe2) : { responseTopic: void 0, publicKey: void 0 };
    try {
      const n7 = await this.client.core.crypto.decode(t3, e3, { receiverPublicKey: r5, encoding: i8 === ee2.link_mode ? Ge : oe });
      isJsonRpcRequest(n7) ? (this.client.core.history.set(t3, n7), await this.onRelayEventRequest({ topic: t3, payload: n7, attestation: s7, transportType: i8, encryptedId: pa2(e3) })) : isJsonRpcResponse(n7) ? (await this.client.core.history.resolve(n7), await this.onRelayEventResponse({ topic: t3, payload: n7, transportType: i8 }), this.client.core.history.delete(t3, n7.id)) : await this.onRelayEventUnknownPayload({ topic: t3, payload: n7, transportType: i8 }), await this.client.core.relayer.messages.ack(t3, e3);
    } catch (n7) {
      this.client.logger.error(n7);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(q2.expired, async (o7) => {
      const { topic: t3, id: e3 } = Oi(o7.target);
      if (e3 && this.client.pendingRequest.keys.includes(e3)) return await this.deletePendingSessionRequest(e3, Bt("EXPIRED"), true);
      if (e3 && this.client.auth.requests.keys.includes(e3)) return await this.deletePendingAuthRequest(e3, Bt("EXPIRED"), true);
      t3 ? this.client.session.keys.includes(t3) && (await this.deleteSession({ topic: t3, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t3 })) : e3 && (await this.deleteProposal(e3, true), this.client.events.emit("proposal_expire", { id: e3 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ae2.create, (o7) => this.onPairingCreated(o7)), this.client.core.pairing.events.on(ae2.delete, (o7) => {
      this.addToRecentlyDeleted(o7.topic, "pairing");
    });
  }
  isValidPairingTopic(o7) {
    if (!ft(o7, false)) {
      const { message: t3 } = Bt("MISSING_OR_INVALID", `pairing topic should be a string: ${o7}`);
      throw new Error(t3);
    }
    if (!this.client.core.pairing.pairings.keys.includes(o7)) {
      const { message: t3 } = Bt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o7}`);
      throw new Error(t3);
    }
    if (Ui(this.client.core.pairing.pairings.get(o7).expiry)) {
      const { message: t3 } = Bt("EXPIRED", `pairing topic: ${o7}`);
      throw new Error(t3);
    }
  }
  async isValidSessionTopic(o7) {
    if (!ft(o7, false)) {
      const { message: t3 } = Bt("MISSING_OR_INVALID", `session topic should be a string: ${o7}`);
      throw new Error(t3);
    }
    if (this.checkRecentlyDeleted(o7), !this.client.session.keys.includes(o7)) {
      const { message: t3 } = Bt("NO_MATCHING_KEY", `session topic doesn't exist: ${o7}`);
      throw new Error(t3);
    }
    if (Ui(this.client.session.get(o7).expiry)) {
      await this.deleteSession({ topic: o7 });
      const { message: t3 } = Bt("EXPIRED", `session topic: ${o7}`);
      throw new Error(t3);
    }
    if (!this.client.core.crypto.keychain.has(o7)) {
      const { message: t3 } = Bt("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o7}`);
      throw await this.deleteSession({ topic: o7 }), new Error(t3);
    }
  }
  async isValidSessionOrPairingTopic(o7) {
    if (this.checkRecentlyDeleted(o7), this.client.session.keys.includes(o7)) await this.isValidSessionTopic(o7);
    else if (this.client.core.pairing.pairings.keys.includes(o7)) this.isValidPairingTopic(o7);
    else if (ft(o7, false)) {
      const { message: t3 } = Bt("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o7}`);
      throw new Error(t3);
    } else {
      const { message: t3 } = Bt("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o7}`);
      throw new Error(t3);
    }
  }
  async isValidProposalId(o7) {
    if (!Ja(o7)) {
      const { message: t3 } = Bt("MISSING_OR_INVALID", `proposal id should be a number: ${o7}`);
      throw new Error(t3);
    }
    if (!this.client.proposal.keys.includes(o7)) {
      const { message: t3 } = Bt("NO_MATCHING_KEY", `proposal id doesn't exist: ${o7}`);
      throw new Error(t3);
    }
    if (Ui(this.client.proposal.get(o7).expiryTimestamp)) {
      await this.deleteProposal(o7);
      const { message: t3 } = Bt("EXPIRED", `proposal id: ${o7}`);
      throw new Error(t3);
    }
  }
};
var Vs = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, dt2, we2), this.core = o7, this.logger = t3;
  }
};
var It3 = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, ut2, we2), this.core = o7, this.logger = t3;
  }
};
var ks2 = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, wt2, we2, (e3) => e3.id), this.core = o7, this.logger = t3;
  }
};
var Ds2 = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, Et3, le2, () => pe2), this.core = o7, this.logger = t3;
  }
};
var Ls2 = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, St3, le2), this.core = o7, this.logger = t3;
  }
};
var Ms = class extends ji2 {
  constructor(o7, t3) {
    super(o7, t3, Rt3, le2, (e3) => e3.id), this.core = o7, this.logger = t3;
  }
};
var $s2 = Object.defineProperty;
var Ks = (E8, o7, t3) => o7 in E8 ? $s2(E8, o7, { enumerable: true, configurable: true, writable: true, value: t3 }) : E8[o7] = t3;
var Ke3 = (E8, o7, t3) => Ks(E8, typeof o7 != "symbol" ? o7 + "" : o7, t3);
var Us2 = class {
  constructor(o7, t3) {
    this.core = o7, this.logger = t3, Ke3(this, "authKeys"), Ke3(this, "pairingTopics"), Ke3(this, "requests"), this.authKeys = new Ds2(this.core, this.logger), this.pairingTopics = new Ls2(this.core, this.logger), this.requests = new Ms(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var Gs = Object.defineProperty;
var js2 = (E8, o7, t3) => o7 in E8 ? Gs(E8, o7, { enumerable: true, configurable: true, writable: true, value: t3 }) : E8[o7] = t3;
var f9 = (E8, o7, t3) => js2(E8, typeof o7 != "symbol" ? o7 + "" : o7, t3);
var fe2 = class _fe extends J3 {
  constructor(o7) {
    super(o7), f9(this, "protocol", Ve3), f9(this, "version", ke2), f9(this, "name", me3.name), f9(this, "metadata"), f9(this, "core"), f9(this, "logger"), f9(this, "events", new import_events4.EventEmitter()), f9(this, "engine"), f9(this, "session"), f9(this, "proposal"), f9(this, "pendingRequest"), f9(this, "auth"), f9(this, "signConfig"), f9(this, "on", (e3, s7) => this.events.on(e3, s7)), f9(this, "once", (e3, s7) => this.events.once(e3, s7)), f9(this, "off", (e3, s7) => this.events.off(e3, s7)), f9(this, "removeListener", (e3, s7) => this.events.removeListener(e3, s7)), f9(this, "removeAllListeners", (e3) => this.events.removeAllListeners(e3)), f9(this, "connect", async (e3) => {
      try {
        return await this.engine.connect(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "pair", async (e3) => {
      try {
        return await this.engine.pair(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "approve", async (e3) => {
      try {
        return await this.engine.approve(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "reject", async (e3) => {
      try {
        return await this.engine.reject(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "update", async (e3) => {
      try {
        return await this.engine.update(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "extend", async (e3) => {
      try {
        return await this.engine.extend(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "request", async (e3) => {
      try {
        return await this.engine.request(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "respond", async (e3) => {
      try {
        return await this.engine.respond(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "ping", async (e3) => {
      try {
        return await this.engine.ping(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "emit", async (e3) => {
      try {
        return await this.engine.emit(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "disconnect", async (e3) => {
      try {
        return await this.engine.disconnect(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "find", (e3) => {
      try {
        return this.engine.find(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e3) {
        throw this.logger.error(e3.message), e3;
      }
    }), f9(this, "authenticate", async (e3, s7) => {
      try {
        return await this.engine.authenticate(e3, s7);
      } catch (i8) {
        throw this.logger.error(i8.message), i8;
      }
    }), f9(this, "formatAuthMessage", (e3) => {
      try {
        return this.engine.formatAuthMessage(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "approveSessionAuthenticate", async (e3) => {
      try {
        return await this.engine.approveSessionAuthenticate(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), f9(this, "rejectSessionAuthenticate", async (e3) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e3);
      } catch (s7) {
        throw this.logger.error(s7.message), s7;
      }
    }), this.name = o7?.name || me3.name, this.metadata = di(o7?.metadata), this.signConfig = o7?.signConfig;
    const t3 = wu({ logger: o7?.logger || me3.logger, name: this.name });
    this.logger = t3, this.core = o7?.core || new ta3(o7), this.session = new It3(this.core, this.logger), this.proposal = new Vs(this.core, this.logger), this.pendingRequest = new ks2(this.core, this.logger), this.engine = new Cs2(this), this.auth = new Us2(this.core, this.logger);
  }
  static async init(o7) {
    const t3 = new _fe(o7);
    return await t3.initialize(), t3;
  }
  get context() {
    return w2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (o7) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o7.message), o7;
    }
  }
};
var Qs2 = fe2;

// node_modules/@walletconnect/universal-provider/dist/index.js
var import_events5 = __toESM(require_events(), 1);
function _5(t3) {
  return t3 == null || typeof t3 != "object" && typeof t3 != "function";
}
function Z2(t3) {
  return Object.getOwnPropertySymbols(t3).filter((e3) => Object.prototype.propertyIsEnumerable.call(t3, e3));
}
function T3(t3) {
  return t3 == null ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t3);
}
var Fe3 = "[object RegExp]";
var ee3 = "[object String]";
var te2 = "[object Number]";
var se2 = "[object Boolean]";
var ie3 = "[object Arguments]";
var He3 = "[object Symbol]";
var Ue3 = "[object Date]";
var Be3 = "[object Map]";
var Le3 = "[object Set]";
var Me4 = "[object Array]";
var ze2 = "[object ArrayBuffer]";
var Ge3 = "[object Object]";
var We3 = "[object DataView]";
var Je3 = "[object Uint8Array]";
var Ke4 = "[object Uint8ClampedArray]";
var Ve4 = "[object Uint16Array]";
var Ye3 = "[object Uint32Array]";
var Xe3 = "[object Int8Array]";
var ke3 = "[object Int16Array]";
var Qe3 = "[object Int32Array]";
var Ze3 = "[object Float32Array]";
var Te2 = "[object Float64Array]";
function x5(t3) {
  return ArrayBuffer.isView(t3) && !(t3 instanceof DataView);
}
function et3(t3, e3) {
  return y6(t3, void 0, t3, /* @__PURE__ */ new Map(), e3);
}
function y6(t3, e3, s7, i8 = /* @__PURE__ */ new Map(), r5 = void 0) {
  const a8 = r5?.(t3, e3, s7, i8);
  if (a8 != null) return a8;
  if (_5(t3)) return t3;
  if (i8.has(t3)) return i8.get(t3);
  if (Array.isArray(t3)) {
    const n7 = new Array(t3.length);
    i8.set(t3, n7);
    for (let c7 = 0; c7 < t3.length; c7++) n7[c7] = y6(t3[c7], c7, s7, i8, r5);
    return Object.hasOwn(t3, "index") && (n7.index = t3.index), Object.hasOwn(t3, "input") && (n7.input = t3.input), n7;
  }
  if (t3 instanceof Date) return new Date(t3.getTime());
  if (t3 instanceof RegExp) {
    const n7 = new RegExp(t3.source, t3.flags);
    return n7.lastIndex = t3.lastIndex, n7;
  }
  if (t3 instanceof Map) {
    const n7 = /* @__PURE__ */ new Map();
    i8.set(t3, n7);
    for (const [c7, o7] of t3) n7.set(c7, y6(o7, c7, s7, i8, r5));
    return n7;
  }
  if (t3 instanceof Set) {
    const n7 = /* @__PURE__ */ new Set();
    i8.set(t3, n7);
    for (const c7 of t3) n7.add(y6(c7, void 0, s7, i8, r5));
    return n7;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t3)) return t3.subarray();
  if (x5(t3)) {
    const n7 = new (Object.getPrototypeOf(t3)).constructor(t3.length);
    i8.set(t3, n7);
    for (let c7 = 0; c7 < t3.length; c7++) n7[c7] = y6(t3[c7], c7, s7, i8, r5);
    return n7;
  }
  if (t3 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t3 instanceof SharedArrayBuffer) return t3.slice(0);
  if (t3 instanceof DataView) {
    const n7 = new DataView(t3.buffer.slice(0), t3.byteOffset, t3.byteLength);
    return i8.set(t3, n7), m4(n7, t3, s7, i8, r5), n7;
  }
  if (typeof File < "u" && t3 instanceof File) {
    const n7 = new File([t3], t3.name, { type: t3.type });
    return i8.set(t3, n7), m4(n7, t3, s7, i8, r5), n7;
  }
  if (t3 instanceof Blob) {
    const n7 = new Blob([t3], { type: t3.type });
    return i8.set(t3, n7), m4(n7, t3, s7, i8, r5), n7;
  }
  if (t3 instanceof Error) {
    const n7 = new t3.constructor();
    return i8.set(t3, n7), n7.message = t3.message, n7.name = t3.name, n7.stack = t3.stack, n7.cause = t3.cause, m4(n7, t3, s7, i8, r5), n7;
  }
  if (typeof t3 == "object" && tt3(t3)) {
    const n7 = Object.create(Object.getPrototypeOf(t3));
    return i8.set(t3, n7), m4(n7, t3, s7, i8, r5), n7;
  }
  return t3;
}
function m4(t3, e3, s7 = t3, i8, r5) {
  const a8 = [...Object.keys(e3), ...Z2(e3)];
  for (let n7 = 0; n7 < a8.length; n7++) {
    const c7 = a8[n7], o7 = Object.getOwnPropertyDescriptor(t3, c7);
    (o7 == null || o7.writable) && (t3[c7] = y6(e3[c7], c7, s7, i8, r5));
  }
}
function tt3(t3) {
  switch (T3(t3)) {
    case ie3:
    case Me4:
    case ze2:
    case We3:
    case se2:
    case Ue3:
    case Ze3:
    case Te2:
    case Xe3:
    case ke3:
    case Qe3:
    case Be3:
    case te2:
    case Ge3:
    case Fe3:
    case Le3:
    case ee3:
    case He3:
    case Je3:
    case Ke4:
    case Ve4:
    case Ye3:
      return true;
    default:
      return false;
  }
}
function st3(t3, e3) {
  return et3(t3, (s7, i8, r5, a8) => {
    const n7 = e3?.(s7, i8, r5, a8);
    if (n7 != null) return n7;
    if (typeof t3 == "object") switch (Object.prototype.toString.call(t3)) {
      case te2:
      case ee3:
      case se2: {
        const c7 = new t3.constructor(t3?.valueOf());
        return m4(c7, t3), c7;
      }
      case ie3: {
        const c7 = {};
        return m4(c7, t3), c7.length = t3.length, c7[Symbol.iterator] = t3[Symbol.iterator], c7;
      }
      default:
        return;
    }
  });
}
function ne2(t3) {
  return st3(t3);
}
function re3(t3) {
  return t3 !== null && typeof t3 == "object" && T3(t3) === "[object Arguments]";
}
function ae3(t3) {
  return typeof t3 == "object" && t3 !== null;
}
function it2() {
}
function nt2(t3) {
  return x5(t3);
}
function rt2(t3) {
  if (typeof t3 != "object" || t3 == null) return false;
  if (Object.getPrototypeOf(t3) === null) return true;
  if (Object.prototype.toString.call(t3) !== "[object Object]") {
    const s7 = t3[Symbol.toStringTag];
    return s7 == null || !Object.getOwnPropertyDescriptor(t3, Symbol.toStringTag)?.writable ? false : t3.toString() === `[object ${s7}]`;
  }
  let e3 = t3;
  for (; Object.getPrototypeOf(e3) !== null; ) e3 = Object.getPrototypeOf(e3);
  return Object.getPrototypeOf(t3) === e3;
}
function at(t3) {
  if (_5(t3)) return t3;
  if (Array.isArray(t3) || x5(t3) || t3 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t3 instanceof SharedArrayBuffer) return t3.slice(0);
  const e3 = Object.getPrototypeOf(t3), s7 = e3.constructor;
  if (t3 instanceof Date || t3 instanceof Map || t3 instanceof Set) return new s7(t3);
  if (t3 instanceof RegExp) {
    const i8 = new s7(t3);
    return i8.lastIndex = t3.lastIndex, i8;
  }
  if (t3 instanceof DataView) return new s7(t3.buffer.slice(0));
  if (t3 instanceof Error) {
    const i8 = new s7(t3.message);
    return i8.stack = t3.stack, i8.name = t3.name, i8.cause = t3.cause, i8;
  }
  if (typeof File < "u" && t3 instanceof File) return new s7([t3], t3.name, { type: t3.type, lastModified: t3.lastModified });
  if (typeof t3 == "object") {
    const i8 = Object.create(e3);
    return Object.assign(i8, t3);
  }
  return t3;
}
function ct3(t3, ...e3) {
  const s7 = e3.slice(0, -1), i8 = e3[e3.length - 1];
  let r5 = t3;
  for (let a8 = 0; a8 < s7.length; a8++) {
    const n7 = s7[a8];
    r5 = $6(r5, n7, i8, /* @__PURE__ */ new Map());
  }
  return r5;
}
function $6(t3, e3, s7, i8) {
  if (_5(t3) && (t3 = Object(t3)), e3 == null || typeof e3 != "object") return t3;
  if (i8.has(e3)) return at(i8.get(e3));
  if (i8.set(e3, t3), Array.isArray(e3)) {
    e3 = e3.slice();
    for (let a8 = 0; a8 < e3.length; a8++) e3[a8] = e3[a8] ?? void 0;
  }
  const r5 = [...Object.keys(e3), ...Z2(e3)];
  for (let a8 = 0; a8 < r5.length; a8++) {
    const n7 = r5[a8];
    let c7 = e3[n7], o7 = t3[n7];
    if (re3(c7) && (c7 = { ...c7 }), re3(o7) && (o7 = { ...o7 }), typeof Buffer < "u" && Buffer.isBuffer(c7) && (c7 = ne2(c7)), Array.isArray(c7)) if (typeof o7 == "object" && o7 != null) {
      const l5 = [], p7 = Reflect.ownKeys(o7);
      for (let f12 = 0; f12 < p7.length; f12++) {
        const u7 = p7[f12];
        l5[u7] = o7[u7];
      }
      o7 = l5;
    } else o7 = [];
    const h6 = s7(o7, c7, n7, t3, e3, i8);
    h6 != null ? t3[n7] = h6 : Array.isArray(c7) || ae3(o7) && ae3(c7) ? t3[n7] = $6(o7, c7, s7, i8) : o7 == null && rt2(c7) ? t3[n7] = $6({}, c7, s7, i8) : o7 == null && nt2(c7) ? t3[n7] = ne2(c7) : (o7 === void 0 || c7 !== void 0) && (t3[n7] = c7);
  }
  return t3;
}
function ot2(t3, ...e3) {
  return ct3(t3, ...e3, it2);
}
var ce2 = "error";
var pt3 = "wss://relay.walletconnect.org";
var ht2 = "wc";
var oe3 = "universal_provider";
var A6 = `${ht2}@2:${oe3}:`;
var pe3 = "https://rpc.walletconnect.org/v1/";
var he3 = "generic";
var lt3 = `${pe3}bundler`;
var v6 = "call_status";
var ut3 = 86400;
var F4 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var dt3 = Object.defineProperty;
var ft3 = Object.defineProperties;
var mt3 = Object.getOwnPropertyDescriptors;
var le3 = Object.getOwnPropertySymbols;
var gt3 = Object.prototype.hasOwnProperty;
var yt3 = Object.prototype.propertyIsEnumerable;
var ue = (t3, e3, s7) => e3 in t3 ? dt3(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var E5 = (t3, e3) => {
  for (var s7 in e3 || (e3 = {})) gt3.call(e3, s7) && ue(t3, s7, e3[s7]);
  if (le3) for (var s7 of le3(e3)) yt3.call(e3, s7) && ue(t3, s7, e3[s7]);
  return t3;
};
var vt3 = (t3, e3) => ft3(t3, mt3(e3));
function de2(t3, e3, s7) {
  var i8;
  const r5 = Je(t3);
  return ((i8 = e3.rpcMap) == null ? void 0 : i8[r5.reference]) || `${pe3}?chainId=${r5.namespace}:${r5.reference}&projectId=${s7}`;
}
function wt3(t3) {
  return t3.includes(":") ? t3.split(":")[1] : t3;
}
function fe3(t3) {
  return t3.map((e3) => `${e3.split(":")[0]}:${e3.split(":")[1]}`);
}
function bt2(t3, e3) {
  const s7 = Object.keys(e3.namespaces).filter((r5) => r5.includes(t3));
  if (!s7.length) return [];
  const i8 = [];
  return s7.forEach((r5) => {
    const a8 = e3.namespaces[r5].accounts;
    i8.push(...a8);
  }), i8;
}
function me4(t3) {
  return Object.fromEntries(Object.entries(t3).filter(([e3, s7]) => {
    var i8, r5;
    return ((i8 = s7?.chains) == null ? void 0 : i8.length) && ((r5 = s7?.chains) == null ? void 0 : r5.length) > 0;
  }));
}
function C7(t3 = {}, e3 = {}) {
  const s7 = me4(ge3(t3)), i8 = me4(ge3(e3));
  return ot2(s7, i8);
}
function ge3(t3) {
  var e3, s7, i8, r5, a8;
  const n7 = {};
  if (!Ye(t3)) return n7;
  for (const [c7, o7] of Object.entries(t3)) {
    const h6 = Gn(c7) ? [c7] : o7.chains, l5 = o7.methods || [], p7 = o7.events || [], f12 = o7.rpcMap || {}, u7 = bs(c7);
    n7[u7] = vt3(E5(E5({}, n7[u7]), o7), { chains: ut(h6, (e3 = n7[u7]) == null ? void 0 : e3.chains), methods: ut(l5, (s7 = n7[u7]) == null ? void 0 : s7.methods), events: ut(p7, (i8 = n7[u7]) == null ? void 0 : i8.events) }), (Ye(f12) || Ye(((r5 = n7[u7]) == null ? void 0 : r5.rpcMap) || {})) && (n7[u7].rpcMap = E5(E5({}, f12), (a8 = n7[u7]) == null ? void 0 : a8.rpcMap));
  }
  return n7;
}
function ye3(t3) {
  return t3.includes(":") ? t3.split(":")[2] : t3;
}
function ve3(t3) {
  const e3 = {};
  for (const [s7, i8] of Object.entries(t3)) {
    const r5 = i8.methods || [], a8 = i8.events || [], n7 = i8.accounts || [], c7 = Gn(s7) ? [s7] : i8.chains ? i8.chains : fe3(i8.accounts);
    e3[s7] = { chains: c7, methods: r5, events: a8, accounts: n7 };
  }
  return e3;
}
function H2(t3) {
  return typeof t3 == "number" ? t3 : t3.includes("0x") ? parseInt(t3, 16) : (t3 = t3.includes(":") ? t3.split(":")[1] : t3, isNaN(Number(t3)) ? t3 : Number(t3));
}
function Pt3(t3) {
  try {
    const e3 = JSON.parse(t3);
    return typeof e3 == "object" && e3 !== null && !Array.isArray(e3);
  } catch {
    return false;
  }
}
var we3 = {};
var w3 = (t3) => we3[t3];
var U4 = (t3, e3) => {
  we3[t3] = e3;
};
var Ot4 = Object.defineProperty;
var be3 = Object.getOwnPropertySymbols;
var It4 = Object.prototype.hasOwnProperty;
var St4 = Object.prototype.propertyIsEnumerable;
var Pe3 = (t3, e3, s7) => e3 in t3 ? Ot4(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var Oe3 = (t3, e3) => {
  for (var s7 in e3 || (e3 = {})) It4.call(e3, s7) && Pe3(t3, s7, e3[s7]);
  if (be3) for (var s7 of be3(e3)) St4.call(e3, s7) && Pe3(t3, s7, e3[s7]);
  return t3;
};
var Ie2 = "eip155";
var $t3 = ["atomic", "flow-control", "paymasterService", "sessionKeys", "auxiliaryFunds"];
var At3 = (t3) => t3 && t3.startsWith("0x") ? BigInt(t3).toString(10) : t3;
var B5 = (t3) => t3 && t3.startsWith("0x") ? t3 : `0x${BigInt(t3).toString(16)}`;
var Se2 = (t3) => Object.keys(t3).filter((e3) => $t3.includes(e3)).reduce((e3, s7) => (e3[s7] = Et4(t3[s7]), e3), {});
var Et4 = (t3) => typeof t3 == "string" && Pt3(t3) ? JSON.parse(t3) : t3;
var Ct3 = (t3, e3, s7) => {
  const { sessionProperties: i8 = {}, scopedProperties: r5 = {} } = t3, a8 = {};
  if (!Ye(r5) && !Ye(i8)) return;
  const n7 = Se2(i8);
  for (const c7 of s7) {
    const o7 = At3(c7);
    if (!o7) continue;
    a8[B5(o7)] = n7;
    const h6 = r5?.[`${Ie2}:${o7}`];
    if (h6) {
      const l5 = h6?.[`${Ie2}:${o7}:${e3}`];
      a8[B5(o7)] = Oe3(Oe3({}, a8[B5(o7)]), Se2(l5 || h6));
    }
  }
  for (const [c7, o7] of Object.entries(a8)) Object.keys(o7).length === 0 && delete a8[c7];
  return Object.keys(a8).length > 0 ? a8 : void 0;
};
var jt3 = Object.defineProperty;
var Nt4 = (t3, e3, s7) => e3 in t3 ? jt3(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var qt3 = (t3, e3, s7) => Nt4(t3, typeof e3 != "symbol" ? e3 + "" : e3, s7);
var L2;
var J5 = class _J {
  constructor(e3) {
    qt3(this, "storage"), this.storage = e3;
  }
  async getItem(e3) {
    return await this.storage.getItem(e3);
  }
  async setItem(e3, s7) {
    return await this.storage.setItem(e3, s7);
  }
  async removeItem(e3) {
    return await this.storage.removeItem(e3);
  }
  static getStorage(e3) {
    return L2 || (L2 = new _J(e3)), L2;
  }
};
var Dt2 = Object.defineProperty;
var Rt4 = Object.defineProperties;
var _t3 = Object.getOwnPropertyDescriptors;
var $e3 = Object.getOwnPropertySymbols;
var xt3 = Object.prototype.hasOwnProperty;
var Ft3 = Object.prototype.propertyIsEnumerable;
var Ae3 = (t3, e3, s7) => e3 in t3 ? Dt2(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var Ht3 = (t3, e3) => {
  for (var s7 in e3 || (e3 = {})) xt3.call(e3, s7) && Ae3(t3, s7, e3[s7]);
  if ($e3) for (var s7 of $e3(e3)) Ft3.call(e3, s7) && Ae3(t3, s7, e3[s7]);
  return t3;
};
var Ut3 = (t3, e3) => Rt4(t3, _t3(e3));
async function Bt3(t3, e3) {
  const s7 = Je(t3.result.capabilities.caip345.caip2), i8 = t3.result.capabilities.caip345.transactionHashes, r5 = await Promise.allSettled(i8.map((p7) => Lt3(s7.reference, p7, e3))), a8 = r5.filter((p7) => p7.status === "fulfilled").map((p7) => p7.value).filter((p7) => p7);
  r5.filter((p7) => p7.status === "rejected").forEach((p7) => console.warn("Failed to fetch transaction receipt:", p7.reason));
  const n7 = !a8.length || a8.some((p7) => !p7), c7 = a8.every((p7) => p7?.status === "0x1"), o7 = a8.every((p7) => p7?.status === "0x0"), h6 = a8.some((p7) => p7?.status === "0x0");
  let l5;
  return n7 ? l5 = 100 : c7 ? l5 = 200 : o7 ? l5 = 500 : h6 && (l5 = 600), { id: t3.result.id, version: t3.request.version, atomic: t3.request.atomicRequired, chainId: t3.request.chainId, capabilities: t3.result.capabilities, receipts: a8, status: l5 };
}
async function Lt3(t3, e3, s7) {
  return await s7(parseInt(t3)).request(formatJsonRpcRequest("eth_getTransactionReceipt", [e3]));
}
async function Mt3({ sendCalls: t3, storage: e3 }) {
  const s7 = await e3.getItem(v6);
  await e3.setItem(v6, Ut3(Ht3({}, s7), { [t3.result.id]: { request: t3.request, result: t3.result, expiry: Ni(ut3) } }));
}
async function zt3({ resultId: t3, storage: e3 }) {
  const s7 = await e3.getItem(v6);
  if (s7) {
    delete s7[t3], await e3.setItem(v6, s7);
    for (const i8 in s7) Ui(s7[i8].expiry) && delete s7[i8];
    await e3.setItem(v6, s7);
  }
}
async function Gt3({ resultId: t3, storage: e3 }) {
  const s7 = await e3.getItem(v6), i8 = s7?.[t3];
  if (i8 && !Ui(i8.expiry)) return i8;
  await zt3({ resultId: t3, storage: e3 });
}
var Wt3 = Object.defineProperty;
var Jt3 = Object.defineProperties;
var Kt3 = Object.getOwnPropertyDescriptors;
var Ee2 = Object.getOwnPropertySymbols;
var Vt3 = Object.prototype.hasOwnProperty;
var Yt2 = Object.prototype.propertyIsEnumerable;
var M5 = (t3, e3, s7) => e3 in t3 ? Wt3(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var z6 = (t3, e3) => {
  for (var s7 in e3 || (e3 = {})) Vt3.call(e3, s7) && M5(t3, s7, e3[s7]);
  if (Ee2) for (var s7 of Ee2(e3)) Yt2.call(e3, s7) && M5(t3, s7, e3[s7]);
  return t3;
};
var G5 = (t3, e3) => Jt3(t3, Kt3(e3));
var g2 = (t3, e3, s7) => M5(t3, typeof e3 != "symbol" ? e3 + "" : e3, s7);
var Xt3 = class {
  constructor(e3) {
    g2(this, "name", "eip155"), g2(this, "client"), g2(this, "chainId"), g2(this, "namespace"), g2(this, "httpProviders"), g2(this, "events"), g2(this, "storage"), this.namespace = e3.namespace, this.events = w3("events"), this.client = w3("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = J5.getStorage(this.client.core.storage);
  }
  async request(e3) {
    switch (e3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e3);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e3);
      case "wallet_sendCalls":
        return await this.sendCalls(e3);
    }
    return this.namespace.methods.includes(e3.request.method) ? await this.client.request(e3) : this.getHttpProvider().request(e3.request);
  }
  updateNamespace(e3) {
    this.namespace = Object.assign(this.namespace, e3);
  }
  setDefaultChain(e3, s7) {
    this.httpProviders[e3] || this.setHttpProvider(parseInt(e3), s7);
    const i8 = this.chainId;
    this.chainId = parseInt(e3), this.events.emit(F4.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e3}`, previousCaipChainId: `${this.name}:${i8}` });
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e3 = this.namespace.chains[0];
    if (!e3) throw new Error("ChainId not found");
    return e3.split(":")[1];
  }
  createHttpProvider(e3, s7) {
    const i8 = s7 || de2(`${this.name}:${e3}`, this.namespace, this.client.core.projectId);
    if (!i8) throw new Error(`No RPC url provided for chainId: ${e3}`);
    return new o3(new f4(i8, w3("disableProviderPing")));
  }
  setHttpProvider(e3, s7) {
    const i8 = this.createHttpProvider(e3, s7);
    i8 && (this.httpProviders[e3] = i8);
  }
  createHttpProviders() {
    const e3 = {};
    return this.namespace.chains.forEach((s7) => {
      var i8;
      const r5 = parseInt(wt3(s7));
      e3[r5] = this.createHttpProvider(r5, (i8 = this.namespace.rpcMap) == null ? void 0 : i8[s7]);
    }), e3;
  }
  getAccounts() {
    const e3 = this.namespace.accounts;
    return e3 ? [...new Set(e3.filter((s7) => s7.split(":")[1] === this.chainId.toString()).map((s7) => s7.split(":")[2]))] : [];
  }
  getHttpProvider(e3) {
    const s7 = e3 || this.chainId;
    return this.httpProviders[s7] || (this.httpProviders = G5(z6({}, this.httpProviders), { [s7]: this.createHttpProvider(s7) }), this.httpProviders[s7]);
  }
  async handleSwitchChain(e3) {
    var s7, i8;
    let r5 = e3.request.params ? (s7 = e3.request.params[0]) == null ? void 0 : s7.chainId : "0x0";
    r5 = r5.startsWith("0x") ? r5 : `0x${r5}`;
    const a8 = parseInt(r5, 16);
    if (this.isChainApproved(a8)) this.setDefaultChain(`${a8}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e3.topic, request: { method: e3.request.method, params: [{ chainId: r5 }] }, chainId: (i8 = this.namespace.chains) == null ? void 0 : i8[0] }), this.setDefaultChain(`${a8}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a8}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e3) {
    return this.namespace.chains.includes(`${this.name}:${e3}`);
  }
  async getCapabilities(e3) {
    var s7, i8, r5, a8, n7;
    const c7 = (i8 = (s7 = e3.request) == null ? void 0 : s7.params) == null ? void 0 : i8[0], o7 = ((a8 = (r5 = e3.request) == null ? void 0 : r5.params) == null ? void 0 : a8[1]) || [];
    if (!c7) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const h6 = this.client.session.get(e3.topic), l5 = ((n7 = h6?.sessionProperties) == null ? void 0 : n7.capabilities) || {}, p7 = `${c7}${o7.join(",")}`, f12 = l5?.[p7];
    if (f12) return f12;
    let u7;
    try {
      u7 = Ct3(h6, c7, o7);
    } catch (q4) {
      console.warn("Failed to extract capabilities from session", q4);
    }
    if (u7) return u7;
    const K6 = await this.client.request(e3);
    try {
      await this.client.session.update(e3.topic, { sessionProperties: G5(z6({}, h6.sessionProperties || {}), { capabilities: G5(z6({}, l5 || {}), { [p7]: K6 }) }) });
    } catch (q4) {
      console.warn("Failed to update session with capabilities", q4);
    }
    return K6;
  }
  async getCallStatus(e3) {
    var s7, i8, r5;
    const a8 = this.client.session.get(e3.topic), n7 = (s7 = a8.sessionProperties) == null ? void 0 : s7.bundler_name;
    if (n7) {
      const h6 = this.getBundlerUrl(e3.chainId, n7);
      try {
        return await this.getUserOperationReceipt(h6, e3);
      } catch (l5) {
        console.warn("Failed to fetch call status from bundler", l5, h6);
      }
    }
    const c7 = (i8 = a8.sessionProperties) == null ? void 0 : i8.bundler_url;
    if (c7) try {
      return await this.getUserOperationReceipt(c7, e3);
    } catch (h6) {
      console.warn("Failed to fetch call status from custom bundler", h6, c7);
    }
    const o7 = await Gt3({ resultId: (r5 = e3.request.params) == null ? void 0 : r5[0], storage: this.storage });
    if (o7) try {
      return await Bt3(o7, this.getHttpProvider.bind(this));
    } catch (h6) {
      console.warn("Failed to fetch call status from stored send calls", h6, o7);
    }
    if (this.namespace.methods.includes(e3.request.method)) return await this.client.request(e3);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e3, s7) {
    var i8;
    const r5 = new URL(e3), a8 = await fetch(r5, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i8 = s7.request.params) == null ? void 0 : i8[0]])) });
    if (!a8.ok) throw new Error(`Failed to fetch user operation receipt - ${a8.status}`);
    return await a8.json();
  }
  getBundlerUrl(e3, s7) {
    return `${lt3}?projectId=${this.client.core.projectId}&chainId=${e3}&bundler=${s7}`;
  }
  async sendCalls(e3) {
    var s7, i8, r5;
    const a8 = await this.client.request(e3), n7 = (s7 = e3.request.params) == null ? void 0 : s7[0], c7 = a8?.id, o7 = a8?.capabilities || {}, h6 = (i8 = o7?.caip345) == null ? void 0 : i8.caip2, l5 = (r5 = o7?.caip345) == null ? void 0 : r5.transactionHashes;
    return !c7 || !h6 || !(l5 != null && l5.length) || await Mt3({ sendCalls: { request: n7, result: a8 }, storage: this.storage }), a8;
  }
};
var kt3 = Object.defineProperty;
var Qt3 = (t3, e3, s7) => e3 in t3 ? kt3(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var b7 = (t3, e3, s7) => Qt3(t3, typeof e3 != "symbol" ? e3 + "" : e3, s7);
var Zt3 = class {
  constructor(e3) {
    b7(this, "name", he3), b7(this, "client"), b7(this, "httpProviders"), b7(this, "events"), b7(this, "namespace"), b7(this, "chainId"), this.namespace = e3.namespace, this.events = w3("events"), this.client = w3("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e3) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e3.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e3.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e3.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e3.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e3) {
    return this.namespace.methods.includes(e3.request.method) ? this.client.request(e3) : this.getHttpProvider(e3.chainId).request(e3.request);
  }
  setDefaultChain(e3, s7) {
    this.httpProviders[e3] || this.setHttpProvider(e3, s7);
    const i8 = this.chainId;
    this.chainId = e3, this.events.emit(F4.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e3}`, previousCaipChainId: `${this.name}:${i8}` });
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e3 = this.namespace.chains[0];
    if (!e3) throw new Error("ChainId not found");
    return e3.split(":")[1];
  }
  getNamespaceName() {
    const e3 = this.namespace.chains[0];
    if (!e3) throw new Error("ChainId not found");
    return Je(e3).namespace;
  }
  getAccounts() {
    const e3 = this.namespace.accounts;
    return e3 ? [...new Set(e3.filter((s7) => s7.split(":")[1] === this.chainId.toString()).map((s7) => s7.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e3, s7;
    const i8 = {};
    return (s7 = (e3 = this.namespace) == null ? void 0 : e3.accounts) == null || s7.forEach((r5) => {
      var a8, n7;
      const c7 = Je(r5), o7 = (n7 = (a8 = this.namespace) == null ? void 0 : a8.rpcMap) == null ? void 0 : n7[`${c7.namespace}:${c7.reference}`];
      i8[c7.reference] = this.createHttpProvider(r5, o7);
    }), i8;
  }
  getHttpProvider(e3) {
    const s7 = Je(e3).reference, i8 = this.httpProviders[s7];
    if (typeof i8 > "u") throw new Error(`JSON-RPC provider for ${e3} not found`);
    return i8;
  }
  setHttpProvider(e3, s7) {
    const i8 = this.createHttpProvider(e3, s7);
    i8 && (this.httpProviders[e3] = i8);
  }
  createHttpProvider(e3, s7) {
    const i8 = s7 || de2(e3, this.namespace, this.client.core.projectId);
    if (!i8) throw new Error(`No RPC url provided for chainId: ${e3}`);
    return new o3(new f4(i8, w3("disableProviderPing")));
  }
};
var Tt3 = Object.defineProperty;
var es2 = Object.defineProperties;
var ts2 = Object.getOwnPropertyDescriptors;
var Ce2 = Object.getOwnPropertySymbols;
var ss2 = Object.prototype.hasOwnProperty;
var is2 = Object.prototype.propertyIsEnumerable;
var W7 = (t3, e3, s7) => e3 in t3 ? Tt3(t3, e3, { enumerable: true, configurable: true, writable: true, value: s7 }) : t3[e3] = s7;
var S5 = (t3, e3) => {
  for (var s7 in e3 || (e3 = {})) ss2.call(e3, s7) && W7(t3, s7, e3[s7]);
  if (Ce2) for (var s7 of Ce2(e3)) is2.call(e3, s7) && W7(t3, s7, e3[s7]);
  return t3;
};
var j6 = (t3, e3) => es2(t3, ts2(e3));
var d4 = (t3, e3, s7) => W7(t3, typeof e3 != "symbol" ? e3 + "" : e3, s7);
var N5 = class _N {
  constructor(e3) {
    d4(this, "client"), d4(this, "namespaces"), d4(this, "optionalNamespaces"), d4(this, "sessionProperties"), d4(this, "scopedProperties"), d4(this, "events", new import_events5.default()), d4(this, "rpcProviders", {}), d4(this, "session"), d4(this, "providerOpts"), d4(this, "logger"), d4(this, "uri"), d4(this, "disableProviderPing", false);
    var s7, i8;
    this.providerOpts = e3, this.logger = wu({ logger: (s7 = e3.logger) != null ? s7 : ce2, name: (i8 = this.providerOpts.name) != null ? i8 : oe3 }), this.disableProviderPing = e3?.disableProviderPing || false;
  }
  static async init(e3) {
    const s7 = new _N(e3);
    return await s7.initialize(), s7;
  }
  async request(e3, s7, i8) {
    const [r5, a8] = this.validateChain(s7);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(r5).request({ request: S5({}, e3), chainId: `${r5}:${a8}`, topic: this.session.topic, expiry: i8 });
  }
  sendAsync(e3, s7, i8, r5) {
    const a8 = (/* @__PURE__ */ new Date()).getTime();
    this.request(e3, i8, r5).then((n7) => s7(null, formatJsonRpcResult(a8, n7))).catch((n7) => s7(n7, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e3;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e3 = this.session) == null ? void 0 : e3.topic, reason: zt("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e3) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e3), this.cleanupPendingPairings(), !e3.skipPairing) return await this.pair(e3.pairingTopic);
  }
  async authenticate(e3, s7) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e3), await this.cleanupPendingPairings();
    const { uri: i8, response: r5 } = await this.client.authenticate(e3, s7);
    i8 && (this.uri = i8, this.events.emit("display_uri", i8));
    const a8 = await r5();
    if (this.session = a8.session, this.session) {
      const n7 = ve3(this.session.namespaces);
      this.namespaces = C7(this.namespaces, n7), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a8;
  }
  on(e3, s7) {
    this.events.on(e3, s7);
  }
  once(e3, s7) {
    this.events.once(e3, s7);
  }
  removeListener(e3, s7) {
    this.events.removeListener(e3, s7);
  }
  off(e3, s7) {
    this.events.off(e3, s7);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(e3) {
    const { uri: s7, approval: i8 } = await this.client.connect({ pairingTopic: e3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    s7 && (this.uri = s7, this.events.emit("display_uri", s7));
    const r5 = await i8();
    this.session = r5;
    const a8 = ve3(r5.namespaces);
    return this.namespaces = C7(this.namespaces, a8), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e3, s7) {
    try {
      if (!this.session) return;
      const [i8, r5] = this.validateChain(e3);
      this.getProvider(i8).setDefaultChain(r5, s7);
    } catch (i8) {
      if (!/Please call connect/.test(i8.message)) throw i8;
    }
  }
  async cleanupPendingPairings(e3 = {}) {
    try {
      this.logger.info("Cleaning up inactive pairings...");
      const s7 = this.client.pairing.getAll();
      if (!Ee(s7)) return;
      for (const i8 of s7) e3.deletePairings ? this.client.core.expirer.set(i8.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i8.topic);
      this.logger.info(`Inactive pairings cleared: ${s7.length}`);
    } catch (s7) {
      this.logger.warn(s7, "Failed to cleanup pending pairings");
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var e3, s7;
    if (this.client = this.providerOpts.client || await Qs2.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || ce2, relayUrl: this.providerOpts.relayUrl || pt3, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i8) {
      throw this.logger.error(i8, "Failed to get session"), new Error(`The provided session: ${(s7 = (e3 = this.providerOpts) == null ? void 0 : e3.session) == null ? void 0 : s7.topic} doesn't exist in the Sign client`);
    }
    else {
      const i8 = this.client.session.getAll();
      this.session = i8[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e3 = [...new Set(Object.keys(this.session.namespaces).map((s7) => bs(s7)))];
    U4("client", this.client), U4("events", this.events), U4("disableProviderPing", this.disableProviderPing), e3.forEach((s7) => {
      if (!this.session) return;
      const i8 = bt2(s7, this.session);
      if (i8?.length === 0) return;
      const r5 = fe3(i8), a8 = C7(this.namespaces, this.optionalNamespaces), n7 = j6(S5({}, a8[s7]), { accounts: i8, chains: r5 });
      switch (s7) {
        case "eip155":
          this.rpcProviders[s7] = new Xt3({ namespace: n7 });
          break;
        default:
          this.rpcProviders[s7] = new Zt3({ namespace: n7 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e3) => {
      var s7;
      const { topic: i8 } = e3;
      i8 === ((s7 = this.session) == null ? void 0 : s7.topic) && this.events.emit("session_ping", e3);
    }), this.client.on("session_event", (e3) => {
      var s7;
      const { params: i8, topic: r5 } = e3;
      if (r5 !== ((s7 = this.session) == null ? void 0 : s7.topic)) return;
      const { event: a8 } = i8;
      if (a8.name === "accountsChanged") {
        const n7 = a8.data;
        n7 && Ee(n7) && this.events.emit("accountsChanged", n7.map(ye3));
      } else if (a8.name === "chainChanged") {
        const n7 = i8.chainId, c7 = i8.event.data, o7 = bs(n7), h6 = H2(n7) !== H2(c7) ? `${o7}:${H2(c7)}` : n7;
        this.onChainChanged({ currentCaipChainId: h6 });
      } else this.events.emit(a8.name, a8.data);
      this.events.emit("session_event", e3);
    }), this.client.on("session_update", ({ topic: e3, params: s7 }) => {
      var i8, r5;
      if (e3 !== ((i8 = this.session) == null ? void 0 : i8.topic)) return;
      const { namespaces: a8 } = s7, n7 = (r5 = this.client) == null ? void 0 : r5.session.get(e3);
      this.session = j6(S5({}, n7), { namespaces: a8 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e3, params: s7 });
    }), this.client.on("session_delete", async (e3) => {
      var s7;
      e3.topic === ((s7 = this.session) == null ? void 0 : s7.topic) && (await this.cleanup(), this.events.emit("session_delete", e3), this.events.emit("disconnect", j6(S5({}, zt("USER_DISCONNECTED")), { data: e3.topic })));
    }), this.on(F4.DEFAULT_CHAIN_CHANGED, (e3) => {
      this.onChainChanged(j6(S5({}, e3), { internal: true }));
    });
  }
  getProvider(e3) {
    return this.rpcProviders[e3] || this.rpcProviders[he3];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e3) => {
      var s7;
      this.getProvider(e3).updateNamespace((s7 = this.session) == null ? void 0 : s7.namespaces[e3]);
    });
  }
  setNamespaces(e3) {
    const { namespaces: s7 = {}, optionalNamespaces: i8 = {}, sessionProperties: r5, scopedProperties: a8 } = e3;
    this.optionalNamespaces = C7(s7, i8), this.sessionProperties = r5, this.scopedProperties = a8;
  }
  validateChain(e3) {
    const [s7, i8] = e3?.split(":") || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [s7, i8];
    if (s7 && !Object.keys(this.namespaces || {}).map((n7) => bs(n7)).includes(s7)) throw new Error(`Namespace '${s7}' is not configured. Please call connect() first with namespace config.`);
    if (s7 && i8) return [s7, i8];
    const r5 = bs(Object.keys(this.namespaces)[0]), a8 = this.rpcProviders[r5].getDefaultChain();
    return [r5, a8];
  }
  async requestAccounts() {
    const [e3] = this.validateChain();
    return await this.getProvider(e3).requestAccounts();
  }
  async onChainChanged({ currentCaipChainId: e3, previousCaipChainId: s7, internal: i8 = false }) {
    if (!this.namespaces) return;
    const [r5, a8] = this.validateChain(e3);
    a8 && (this.updateNamespaceChain(r5, a8), i8 ? (this.events.emit("chainChanged", a8), this.emitAccountsChangedOnChainChange({ namespace: r5, currentCaipChainId: e3, previousCaipChainId: s7 })) : this.getProvider(r5).setDefaultChain(a8), await this.persist("namespaces", this.namespaces));
  }
  emitAccountsChangedOnChainChange({ namespace: e3, currentCaipChainId: s7, previousCaipChainId: i8 }) {
    var r5, a8;
    try {
      if (i8 === s7) return;
      const n7 = (a8 = (r5 = this.session) == null ? void 0 : r5.namespaces[e3]) == null ? void 0 : a8.accounts;
      if (!n7) return;
      const c7 = n7.filter((o7) => o7.includes(`${s7}:`)).map(ye3);
      if (!Ee(c7)) return;
      this.events.emit("accountsChanged", c7);
    } catch (n7) {
      this.logger.warn(n7, "Failed to emit accountsChanged on chain change");
    }
  }
  updateNamespaceChain(e3, s7) {
    if (!this.namespaces) return;
    const i8 = this.namespaces[e3] ? e3 : `${e3}:${s7}`, r5 = { chains: [], methods: [], events: [], defaultChain: s7 };
    this.namespaces[i8] ? this.namespaces[i8] && (this.namespaces[i8].defaultChain = s7) : this.namespaces[i8] = r5;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({ deletePairings: true }), await this.cleanupStorage();
  }
  async persist(e3, s7) {
    var i8;
    const r5 = ((i8 = this.session) == null ? void 0 : i8.topic) || "";
    await this.client.core.storage.setItem(`${A6}/${e3}${r5}`, s7);
  }
  async getFromStore(e3) {
    var s7;
    const i8 = ((s7 = this.session) == null ? void 0 : s7.topic) || "";
    return await this.client.core.storage.getItem(`${A6}/${e3}${i8}`);
  }
  async deleteFromStore(e3) {
    var s7;
    const i8 = ((s7 = this.session) == null ? void 0 : s7.topic) || "";
    await this.client.core.storage.removeItem(`${A6}/${e3}${i8}`);
  }
  async cleanupStorage() {
    var e3;
    try {
      if (((e3 = this.client) == null ? void 0 : e3.session.length) > 0) return;
      const s7 = await this.client.core.storage.getKeys();
      for (const i8 of s7) i8.startsWith(A6) && await this.client.core.storage.removeItem(i8);
    } catch (s7) {
      this.logger.warn(s7, "Failed to cleanup storage");
    }
  }
};
var ns2 = N5;

// node_modules/@walletconnect/ethereum-provider/dist/index.js
var $7 = "wc";
var k4 = "ethereum_provider";
var q3 = `${$7}@2:${k4}:`;
var U5 = "https://rpc.walletconnect.org/v1/";
var f10 = ["eth_sendTransaction", "personal_sign"];
var A7 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];
var C8 = ["chainChanged", "accountsChanged"];
var P7 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var D6 = async () => {
  const { createAppKit: s7 } = await import("./chunk-7G3NFD2O.js");
  return s7;
};
var z7 = Object.defineProperty;
var L3 = Object.defineProperties;
var K5 = Object.getOwnPropertyDescriptors;
var M6 = Object.getOwnPropertySymbols;
var Q3 = Object.prototype.hasOwnProperty;
var V4 = Object.prototype.propertyIsEnumerable;
var _6 = (s7, t3, e3) => t3 in s7 ? z7(s7, t3, { enumerable: true, configurable: true, writable: true, value: e3 }) : s7[t3] = e3;
var v7 = (s7, t3) => {
  for (var e3 in t3 || (t3 = {})) Q3.call(t3, e3) && _6(s7, e3, t3[e3]);
  if (M6) for (var e3 of M6(t3)) V4.call(t3, e3) && _6(s7, e3, t3[e3]);
  return s7;
};
var w4 = (s7, t3) => L3(s7, K5(t3));
var p6 = (s7, t3, e3) => _6(s7, typeof t3 != "symbol" ? t3 + "" : t3, e3);
function I4(s7) {
  return Number(s7[0].split(":")[1]);
}
function b8(s7) {
  return `0x${s7.toString(16)}`;
}
function F5(s7) {
  const { chains: t3, optionalChains: e3, methods: n7, optionalMethods: i8, events: a8, optionalEvents: r5, rpcMap: u7 } = s7;
  if (!Ee(t3)) throw new Error("Invalid chains");
  const c7 = { chains: t3, methods: n7 || f10, events: a8 || C8, rpcMap: v7({}, t3.length ? { [I4(t3)]: u7[I4(t3)] } : {}) }, l5 = a8?.filter((d7) => !C8.includes(d7)), o7 = n7?.filter((d7) => !f10.includes(d7));
  if (!e3 && !r5 && !i8 && !(l5 != null && l5.length) && !(o7 != null && o7.length)) return { required: t3.length ? c7 : void 0 };
  const m6 = l5?.length && o7?.length || !e3, h6 = { chains: [...new Set(m6 ? c7.chains.concat(e3 || []) : e3)], methods: [...new Set(c7.methods.concat(i8 != null && i8.length ? i8 : A7))], events: [...new Set(c7.events.concat(r5 != null && r5.length ? r5 : P7))], rpcMap: u7 };
  return { required: t3.length ? c7 : void 0, optional: e3.length ? h6 : void 0 };
}
var E6 = class _E {
  constructor() {
    p6(this, "events", new import_events6.EventEmitter()), p6(this, "namespace", "eip155"), p6(this, "accounts", []), p6(this, "signer"), p6(this, "chainId", 1), p6(this, "modal"), p6(this, "rpc"), p6(this, "STORAGE_KEY", q3), p6(this, "on", (t3, e3) => (this.events.on(t3, e3), this)), p6(this, "once", (t3, e3) => (this.events.once(t3, e3), this)), p6(this, "removeListener", (t3, e3) => (this.events.removeListener(t3, e3), this)), p6(this, "off", (t3, e3) => (this.events.off(t3, e3), this)), p6(this, "parseAccount", (t3) => this.isCompatibleChainId(t3) ? this.parseAccountId(t3).address : t3), this.signer = {}, this.rpc = {};
  }
  static async init(t3) {
    const e3 = new _E();
    return await e3.initialize(t3), e3;
  }
  async request(t3, e3) {
    return await this.signer.request(t3, this.formatChainId(this.chainId), e3);
  }
  sendAsync(t3, e3, n7) {
    this.signer.sendAsync(t3, e3, this.formatChainId(this.chainId), n7);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t3) {
    var e3;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t3);
    const { required: n7, optional: i8 } = F5(this.rpc);
    try {
      const a8 = await new Promise(async (u7, c7) => {
        var l5, o7;
        this.rpc.showQrModal && ((l5 = this.modal) == null || l5.open(), (o7 = this.modal) == null || o7.subscribeState((h6) => {
          !h6.open && !this.signer.session && (this.signer.abortPairingAttempt(), c7(new Error("Connection request reset. Please try again.")));
        }));
        const m6 = t3 != null && t3.scopedProperties ? { [this.namespace]: t3.scopedProperties } : void 0;
        await this.signer.connect(w4(v7({ namespaces: v7({}, n7 && { [this.namespace]: n7 }) }, i8 && { optionalNamespaces: { [this.namespace]: i8 } }), { pairingTopic: t3?.pairingTopic, scopedProperties: m6 })).then((h6) => {
          u7(h6);
        }).catch((h6) => {
          var d7;
          (d7 = this.modal) == null || d7.showErrorMessage("Unable to connect"), c7(new Error(h6.message));
        });
      });
      if (!a8) return;
      const r5 = Js(a8.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r5), this.setAccounts(r5), this.events.emit("connect", { chainId: b8(this.chainId) });
    } catch (a8) {
      throw this.signer.logger.error(a8), a8;
    } finally {
      (e3 = this.modal) == null || e3.close();
    }
  }
  async authenticate(t3, e3) {
    var n7;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t3?.chains });
    try {
      const i8 = await new Promise(async (r5, u7) => {
        var c7, l5;
        this.rpc.showQrModal && ((c7 = this.modal) == null || c7.open(), (l5 = this.modal) == null || l5.subscribeState((o7) => {
          !o7.open && !this.signer.session && (this.signer.abortPairingAttempt(), u7(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(w4(v7({}, t3), { chains: this.rpc.chains }), e3).then((o7) => {
          r5(o7);
        }).catch((o7) => {
          var m6;
          (m6 = this.modal) == null || m6.showErrorMessage("Unable to connect"), u7(new Error(o7.message));
        });
      }), a8 = i8.session;
      if (a8) {
        const r5 = Js(a8.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r5), this.setAccounts(r5), this.events.emit("connect", { chainId: b8(this.chainId) });
      }
      return i8;
    } catch (i8) {
      throw this.signer.logger.error(i8), i8;
    } finally {
      (n7 = this.modal) == null || n7.close();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t3) => {
      const { params: e3 } = t3, { event: n7 } = e3;
      n7.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n7.data), this.events.emit("accountsChanged", this.accounts)) : n7.name === "chainChanged" ? this.setChainId(this.formatChainId(n7.data)) : this.events.emit(n7.name, n7.data), this.events.emit("session_event", t3);
    }), this.signer.on("accountsChanged", (t3) => {
      this.accounts = this.parseAccounts(t3), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (t3) => {
      const e3 = parseInt(t3);
      this.chainId = e3, this.events.emit("chainChanged", b8(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t3) => {
      this.events.emit("session_update", t3);
    }), this.signer.on("session_delete", (t3) => {
      this.reset(), this.events.emit("session_delete", t3), this.events.emit("disconnect", w4(v7({}, zt("USER_DISCONNECTED")), { data: t3.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t3) => {
      this.events.emit("display_uri", t3);
    });
  }
  switchEthereumChain(t3) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t3.toString(16) }] });
  }
  isCompatibleChainId(t3) {
    return typeof t3 == "string" ? t3.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t3) {
    return `${this.namespace}:${t3}`;
  }
  parseChainId(t3) {
    return Number(t3.split(":")[1]);
  }
  setChainIds(t3) {
    const e3 = t3.filter((n7) => this.isCompatibleChainId(n7)).map((n7) => this.parseChainId(n7));
    e3.length && (this.chainId = e3[0], this.events.emit("chainChanged", b8(this.chainId)), this.persist());
  }
  setChainId(t3) {
    if (this.isCompatibleChainId(t3)) {
      const e3 = this.parseChainId(t3);
      this.chainId = e3, this.switchEthereumChain(e3);
    }
  }
  parseAccountId(t3) {
    const [e3, n7, i8] = t3.split(":");
    return { chainId: `${e3}:${n7}`, address: i8 };
  }
  setAccounts(t3) {
    this.accounts = t3.filter((e3) => this.parseChainId(this.parseAccountId(e3).chainId) === this.chainId).map((e3) => this.parseAccountId(e3).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t3) {
    var e3, n7;
    const i8 = (e3 = t3?.chains) != null ? e3 : [], a8 = (n7 = t3?.optionalChains) != null ? n7 : [], r5 = i8.concat(a8);
    if (!r5.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const u7 = i8.length ? t3?.methods || f10 : [], c7 = i8.length ? t3?.events || C8 : [], l5 = t3?.optionalMethods || [], o7 = t3?.optionalEvents || [], m6 = t3?.rpcMap || this.buildRpcMap(r5, t3.projectId), h6 = t3?.qrModalOptions || void 0;
    return { chains: i8?.map((d7) => this.formatChainId(d7)), optionalChains: a8.map((d7) => this.formatChainId(d7)), methods: u7, events: c7, optionalMethods: l5, optionalEvents: o7, rpcMap: m6, showQrModal: !!(t3 != null && t3.showQrModal), qrModalOptions: h6, projectId: t3.projectId, metadata: t3.metadata };
  }
  buildRpcMap(t3, e3) {
    const n7 = {};
    return t3.forEach((i8) => {
      n7[i8] = this.getRpcUrl(i8, e3);
    }), n7;
  }
  async initialize(t3) {
    var e3;
    if (this.rpc = this.getRpcConfig(t3), this.chainId = this.rpc.chains.length ? I4(this.rpc.chains) : I4(this.rpc.optionalChains), this.signer = await ns2.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t3.disableProviderPing, relayUrl: t3.relayUrl, storage: t3.storage, storageOptions: t3.storageOptions, customStoragePrefix: t3.customStoragePrefix, telemetryEnabled: t3.telemetryEnabled, logger: t3.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let n7;
      try {
        const i8 = await D6(), { convertWCMToAppKitOptions: a8 } = await Promise.resolve().then(function() {
          return nt3;
        }), r5 = a8(w4(v7({}, this.rpc.qrModalOptions), { chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])], metadata: this.rpc.metadata, projectId: this.rpc.projectId }));
        if (!r5.networks.length) throw new Error("No networks found for WalletConnect\xB7");
        n7 = i8(w4(v7({}, r5), { universalProvider: this.signer, manualWCControl: true, enableMobileFullScreen: ((e3 = this.rpc.qrModalOptions) == null ? void 0 : e3.enableMobileFullScreen) === true }));
      } catch (i8) {
        throw console.warn(i8), new Error("To use QR modal, please install @reown/appkit package");
      }
      if (n7) try {
        this.modal = n7;
      } catch (i8) {
        throw this.signer.logger.error(i8), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t3) {
    if (!t3) return;
    const { chains: e3, optionalChains: n7, rpcMap: i8 } = t3;
    e3 && Ee(e3) && (this.rpc.chains = e3.map((a8) => this.formatChainId(a8)), e3.forEach((a8) => {
      this.rpc.rpcMap[a8] = i8?.[a8] || this.getRpcUrl(a8);
    })), n7 && Ee(n7) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n7?.map((a8) => this.formatChainId(a8)), n7.forEach((a8) => {
      this.rpc.rpcMap[a8] = i8?.[a8] || this.getRpcUrl(a8);
    }));
  }
  getRpcUrl(t3, e3) {
    var n7;
    return ((n7 = this.rpc.rpcMap) == null ? void 0 : n7[t3]) || `${U5}?chainId=eip155:${t3}&projectId=${e3 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const t3 = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), e3 = this.session.namespaces[`${this.namespace}:${t3}`] ? this.session.namespaces[`${this.namespace}:${t3}`] : this.session.namespaces[this.namespace];
      this.setChainIds(t3 ? [this.formatChainId(t3)] : e3?.accounts), this.setAccounts(e3?.accounts);
    } catch (t3) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t3), await this.disconnect().catch((e3) => this.signer.logger.warn(e3));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t3) {
    return typeof t3 == "string" || t3 instanceof String ? [this.parseAccount(t3)] : t3.map((e3) => this.parseAccount(e3));
  }
};
var G6 = E6;
var Y3 = Object.defineProperty;
var H3 = Object.defineProperties;
var B6 = Object.getOwnPropertyDescriptors;
var S6 = Object.getOwnPropertySymbols;
var X5 = Object.prototype.hasOwnProperty;
var J6 = Object.prototype.propertyIsEnumerable;
var T4 = (s7, t3, e3) => t3 in s7 ? Y3(s7, t3, { enumerable: true, configurable: true, writable: true, value: e3 }) : s7[t3] = e3;
var R6 = (s7, t3) => {
  for (var e3 in t3 || (t3 = {})) X5.call(t3, e3) && T4(s7, e3, t3[e3]);
  if (S6) for (var e3 of S6(t3)) J6.call(t3, e3) && T4(s7, e3, t3[e3]);
  return s7;
};
var Z3 = (s7, t3) => H3(s7, B6(t3));
function tt4(s7) {
  if (s7) return { "--w3m-font-family": s7["--wcm-font-family"], "--w3m-accent": s7["--wcm-accent-color"], "--w3m-color-mix": s7["--wcm-background-color"], "--w3m-z-index": s7["--wcm-z-index"] ? Number(s7["--wcm-z-index"]) : void 0, "--w3m-qr-color": s7["--wcm-accent-color"], "--w3m-font-size-master": s7["--wcm-text-medium-regular-size"], "--w3m-border-radius-master": s7["--wcm-container-border-radius"], "--w3m-color-mix-strength": 0 };
}
var et4 = (s7) => {
  const [t3, e3] = s7.split(":");
  return W8({ id: e3, caipNetworkId: s7, chainNamespace: t3, name: "", nativeCurrency: { name: "", symbol: "", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } });
};
function st4(s7) {
  var t3, e3, n7, i8, a8, r5, u7;
  const c7 = (t3 = s7.chains) == null ? void 0 : t3.map(et4).filter(Boolean);
  if (c7.length === 0) throw new Error("At least one chain must be specified");
  const l5 = c7.find((m6) => {
    var h6;
    return m6.id === ((h6 = s7.defaultChain) == null ? void 0 : h6.id);
  }), o7 = { projectId: s7.projectId, networks: c7, themeMode: s7.themeMode, themeVariables: tt4(s7.themeVariables), chainImages: s7.chainImages, connectorImages: s7.walletImages, defaultNetwork: l5, metadata: Z3(R6({}, s7.metadata), { name: ((e3 = s7.metadata) == null ? void 0 : e3.name) || "WalletConnect", description: ((n7 = s7.metadata) == null ? void 0 : n7.description) || "Connect to WalletConnect-compatible wallets", url: ((i8 = s7.metadata) == null ? void 0 : i8.url) || "https://walletconnect.org", icons: ((a8 = s7.metadata) == null ? void 0 : a8.icons) || ["https://walletconnect.org/walletconnect-logo.png"] }), showWallets: true, featuredWalletIds: s7.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(s7.explorerRecommendedWalletIds) ? s7.explorerRecommendedWalletIds : [], excludeWalletIds: s7.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(s7.explorerExcludedWalletIds) ? s7.explorerExcludedWalletIds : [], enableEIP6963: false, enableInjected: false, enableCoinbase: true, enableWalletConnect: true, features: { email: false, socials: false } };
  if ((r5 = s7.mobileWallets) != null && r5.length || (u7 = s7.desktopWallets) != null && u7.length) {
    const m6 = [...(s7.mobileWallets || []).map((g3) => ({ id: g3.id, name: g3.name, links: g3.links })), ...(s7.desktopWallets || []).map((g3) => ({ id: g3.id, name: g3.name, links: { native: g3.links.native, universal: g3.links.universal } }))], h6 = [...o7.featuredWalletIds || [], ...o7.excludeWalletIds || []], d7 = m6.filter((g3) => !h6.includes(g3.id));
    d7.length && (o7.customWallets = d7);
  }
  return o7;
}
function W8(s7) {
  return R6({ formatters: void 0, fees: void 0, serializers: void 0 }, s7);
}
var nt3 = Object.freeze({ __proto__: null, convertWCMToAppKitOptions: st4, defineChain: W8 });

// node_modules/@privy-io/react-auth/dist/esm/walletconnect-registry-2U89-OmB.mjs
var import_react_device_detect = __toESM(require_lib(), 1);
function t2(e3) {
  return { name: e3.metadata?.shortName || e3.name || "", universalLink: e3.mobile.universal, deepLink: e3.mobile.native };
}
function i7(i8, o7) {
  let a8 = t2(o7);
  if (import_react_device_detect.isMobile && import_react_device_detect.isAndroid && a8.universalLink) return m5(a8.universalLink, i8);
  if (a8.deepLink) return f11(a8.deepLink, i8);
  if (a8.universalLink) return m5(a8.universalLink, i8);
  throw new s2(`Unsupported wallet ${o7.id}`);
}
function o6(e3, n7) {
  let r5 = t2(n7);
  if (r5.universalLink) return m5(r5.universalLink, e3);
}
var a7 = "WALLETCONNECT_DEEPLINK_CHOICE";
function u5() {
  try {
    localStorage.removeItem(a7);
  } catch {
  }
}
function c6({ href: e3, name: n7 }) {
  try {
    localStorage.setItem(a7, JSON.stringify({ href: e3, name: n7 }));
  } catch {
  }
}
function l4() {
  try {
    localStorage.removeItem(a7);
  } catch {
  }
}
function s6(e3) {
  return e3.startsWith("http://") || e3.startsWith("https://");
}
function f11(e3, n7) {
  if (s6(e3)) return m5(e3, n7);
  let r5 = e3;
  return r5.includes("://") || (r5 = e3.replaceAll("/", "").replaceAll(":", ""), r5 = `${r5}://`), r5.endsWith("/") || (r5 = `${r5}/`), { redirect: `${r5}wc?uri=${encodeURIComponent(n7)}`, href: r5 };
}
function m5(e3, n7) {
  if (!s6(e3)) return f11(e3, n7);
  let r5 = e3;
  return r5.endsWith("/") || (r5 = `${r5}/`), { redirect: `${r5}wc?uri=${encodeURIComponent(n7)}`, href: r5 };
}
function d5(e3, n7) {
  window.open(e3, n7, "noreferrer noopener");
}

// node_modules/@privy-io/react-auth/dist/esm/toViemAccount-tQhd9cUb.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react_device_detect2 = __toESM(require_lib(), 1);
import { parseSignature as At4 } from "viem";
import { toAccount as kt4 } from "viem/accounts";
import { hashAuthorization as _t4 } from "viem/utils";
var bt3 = class _bt {
  static parse(e3) {
    try {
      return new _bt(e3);
    } catch (e4) {
      return null;
    }
  }
  static throwIfNotWellFormedJwt(t3) {
    return decodeJwt(t3), t3;
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
  isExpired(e3 = 0) {
    return Date.now() >= 1e3 * (this.expiration - e3);
  }
  constructor(t3) {
    this.value = t3, this._decoded = decodeJwt(t3);
  }
};
var Pt4 = class _Pt extends bt3 {
  static parse(e3) {
    try {
      return new _Pt(e3);
    } catch (e4) {
      return null;
    }
  }
  get appId() {
    return this._decoded.aid ? this._decoded.aid : this.audience;
  }
};
var It5 = ({ style: e3, ...t3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { height: "28px", width: "28px", ...e3 }, ...t3, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "1024", height: "1024", fill: "#0052FF", rx: 100, ry: 100 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z", fill: "white" })] });
var St5 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHN0eWxlPSdoZWlnaHQ6MjhweDt3aWR0aDoyOHB4Jz48cmVjdCB3aWR0aD0nMTAyNCcgaGVpZ2h0PScxMDI0JyBmaWxsPScjMDA1MkZGJyByeD0nMTAwJyByeT0nMTAwJz48L3JlY3Q+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNTIgNTEyQzE1MiA3MTAuODIzIDMxMy4xNzcgODcyIDUxMiA4NzJDNzEwLjgyMyA4NzIgODcyIDcxMC44MjMgODcyIDUxMkM4NzIgMzEzLjE3NyA3MTAuODIzIDE1MiA1MTIgMTUyQzMxMy4xNzcgMTUyIDE1MiAzMTMuMTc3IDE1MiA1MTJaTTQyMCAzOTZDNDA2Ljc0NSAzOTYgMzk2IDQwNi43NDUgMzk2IDQyMFY2MDRDMzk2IDYxNy4yNTUgNDA2Ljc0NSA2MjggNDIwIDYyOEg2MDRDNjE3LjI1NSA2MjggNjI4IDYxNy4yNTUgNjI4IDYwNFY0MjBDNjI4IDQwNi43NDUgNjE3LjI1NSAzOTYgNjA0IDM5Nkg0MjBaJyBmaWxsPSd3aGl0ZSc+PC9wYXRoPjwvc3ZnPg==";
var Wt4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAALZJREFUaEPtmjEOhDAMBNc/O14GvOzys3CAKK6eAlmaVGl2Zc+kTOU685vkc9/bnD2prZK5/TZY24z9P+g4F5hNh7/GdoG37WlAA5CATwgCxHENYISwQAMQII5rACOEBRqAAHFcAxghLNAABIjjGsAIYYEGIEAc1wBGCAs0AAHiuAYwQligAQgQxzWAEcICDUCAOK4BjBAWaAACxHENYISwQAMQII6fBjr+VHkW3+u+tfyxMpJaDgYzYxb/ALZVAAAAAElFTkSuQmCC";
var xt4;
var Et5;
var Nt5 = class extends $ {
  async initialize() {
    await this.importPromise, await this.syncAccounts(), this.initialized = true, this.emit("initialized");
  }
  async connect(e3) {
    return e3.showPrompt && await this.promptConnection(), await this.isConnected() ? this.getConnectedWallet() : null;
  }
  disconnect() {
    this.proxyProvider.walletProvider.disconnect(), this.onDisconnect();
  }
  get walletBranding() {
    return { name: this.displayName, icon: Wt4, id: "com.coinbase.wallet" };
  }
  async promptConnection() {
    u2.debug("Prompting connection via Base Account", { wallet: this.walletClientType });
    try {
      await this.importPromise, u2.rpcRequest("eth_requestAccounts", this.walletClientType);
      let e3 = await this.proxyProvider.request({ method: "eth_requestAccounts" });
      if (u2.rpcResponse("eth_requestAccounts", this.walletClientType), !e3 || 0 === e3.length || !e3[0]) throw new n("Unable to retrieve accounts");
      this.connected = true, await this.syncAccounts([e3[0]]);
    } catch (e3) {
      throw u2.connectionFailed(this.walletClientType, e3, { method: "base_account" }), p(e3);
    }
  }
  constructor(e3, t3, i8, n7, s7) {
    super("base_account", e3, t3, i8), this.connectorType = "base_account", this.walletClientType = "base_account", this.displayName = "Base", this.setBaseAccountSdk = s7, this.proxyProvider = new A2(void 0, this.rpcTimeoutDuration), this.subscribeListeners(), this.baseAccountConfig = { ...n7, appChainIds: [t3.id].concat(e3.map(((e4) => e4.id))) }, xt4 ? (this.proxyProvider.setWalletProvider(xt4.getProvider()), this.setBaseAccountSdk(xt4)) : this.importPromise = import("./chunk-VOTRA4UW.js").then((({ createBaseAccountSDK: e4 }) => {
      xt4 = e4(this.baseAccountConfig), this.proxyProvider.setWalletProvider(xt4.getProvider()), this.setBaseAccountSdk(xt4);
    })).catch(console.error);
  }
};
var Ut4 = [1, 11155111, 137, 10, 8453, 84532, 42161, 7777777, 43114, 56];
var Dt3 = class extends $ {
  async initialize() {
    await this.syncAccounts(), this.initialized = true, this.emit("initialized");
  }
  async connect(e3) {
    return e3.showPrompt && await this.promptConnection(), await this.isConnected() ? this.getConnectedWallet() : null;
  }
  disconnect() {
    this.proxyProvider.walletProvider.disconnect(), this.onDisconnect();
  }
  get walletBranding() {
    return { name: this.displayName, icon: St5, id: "com.coinbase.wallet" };
  }
  async promptConnection() {
    u2.debug("Prompting connection via Coinbase Wallet", { wallet: this.walletClientType });
    try {
      u2.rpcRequest("eth_requestAccounts", this.walletClientType);
      let e3 = await this.proxyProvider.request({ method: "eth_requestAccounts" });
      if (u2.rpcResponse("eth_requestAccounts", this.walletClientType), !e3 || 0 === e3.length || !e3[0]) throw new n("Unable to retrieve accounts");
      this.connected = true, await this.syncAccounts([e3[0]]);
    } catch (e3) {
      throw u2.connectionFailed(this.walletClientType, e3, { method: "coinbase_wallet" }), p(e3);
    }
  }
  updateConnectionPreference(e3) {
    this.coinbaseWalletConfig = { ...this.coinbaseWalletConfig, preference: { ...this.coinbaseWalletConfig.preference, options: e3 } }, this.walletClientType = "smartWalletOnly" === e3 ? "coinbase_smart_wallet" : "coinbase_wallet", Et5 = createCoinbaseWalletSDK({ ...this.coinbaseWalletConfig }), this.proxyProvider.setWalletProvider(Et5.getProvider());
  }
  constructor(e3, t3, i8, n7) {
    if (super("coinbase_wallet", e3, t3, i8), this.connectorType = "coinbase_wallet", this.displayName = "Coinbase Wallet", this.proxyProvider = new A2(void 0, this.rpcTimeoutDuration), this.subscribeListeners(), this.coinbaseWalletConfig = { ...n7, appChainIds: [t3.id].concat(e3.map(((e4) => e4.id))) }, this.walletClientType = "smartWalletOnly" === this.coinbaseWalletConfig.preference?.options ? "coinbase_smart_wallet" : "coinbase_wallet", "coinbase_smart_wallet" === this.walletClientType && (this.displayName = "Coinbase Smart Wallet"), !Et5) {
      let e4 = "eoaOnly" !== this.coinbaseWalletConfig.preference?.options ? (this.coinbaseWalletConfig.appChainIds ?? []).filter(((e5) => !Ut4.includes(e5))) : [];
      e4.length > 0 && !e4.every(((e5) => N.has(e5))) && console.info(`The configured chains are not supported by Coinbase Smart Wallet: ${e4.join(", ")}`), Et5 = createCoinbaseWalletSDK(this.coinbaseWalletConfig);
    }
    this.proxyProvider.setWalletProvider(Et5.getProvider());
  }
};
var Mt4 = ({ style: e3, ...t3 } = {}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24", style: { ...e3 }, ...t3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" }) });
var jt4 = ({ style: e3, ...t3 } = {}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "108", height: "108", viewBox: "0 0 108 108", fill: "none", style: { height: "28px", width: "28px", ...e3 }, ...t3, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "108", height: "108", rx: "23", fill: "#AB9FF2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M46.5267 69.9229C42.0054 76.8509 34.4292 85.6182 24.348 85.6182C19.5824 85.6182 15 83.6563 15 75.1342C15 53.4305 44.6326 19.8327 72.1268 19.8327C87.768 19.8327 94 30.6846 94 43.0079C94 58.8258 83.7355 76.9122 73.5321 76.9122C70.2939 76.9122 68.7053 75.1342 68.7053 72.314C68.7053 71.5783 68.8275 70.7812 69.0719 69.9229C65.5893 75.8699 58.8685 81.3878 52.5754 81.3878C47.993 81.3878 45.6713 78.5063 45.6713 74.4598C45.6713 72.9884 45.9768 71.4556 46.5267 69.9229ZM83.6761 42.5794C83.6761 46.1704 81.5575 47.9658 79.1875 47.9658C76.7816 47.9658 74.6989 46.1704 74.6989 42.5794C74.6989 38.9885 76.7816 37.1931 79.1875 37.1931C81.5575 37.1931 83.6761 38.9885 83.6761 42.5794ZM70.2103 42.5795C70.2103 46.1704 68.0916 47.9658 65.7216 47.9658C63.3157 47.9658 61.233 46.1704 61.233 42.5795C61.233 38.9885 63.3157 37.1931 65.7216 37.1931C68.0916 37.1931 70.2103 38.9885 70.2103 42.5795Z", fill: "#FFFDF8" })] });
function zt4(e3, t3) {
  if (!Object.prototype.hasOwnProperty.call(e3, t3)) throw TypeError("attempted to use private field on non-instance");
  return e3;
}
var Ot5 = 0;
async function Rt5(e3, t3) {
  try {
    u2.rpcRequest("eth_requestAccounts", t3);
    let i8 = await e3.request({ method: "eth_requestAccounts" });
    return u2.rpcResponse("eth_requestAccounts", t3), i8;
  } catch (i8) {
    if (-32002 === i8.code && i8.message?.includes("Already processing")) {
      u2.debug("eth_requestAccounts already processing, retrying after delay", { wallet: t3 }), await new Promise(((e4) => setTimeout(e4, 500))), u2.rpcRequest("eth_requestAccounts", t3);
      let i9 = await e3.request({ method: "eth_requestAccounts" });
      return u2.rpcResponse("eth_requestAccounts", t3), i9;
    }
    throw i8;
  }
}
var Lt4 = class extends $ {
  async initialize() {
    u2.debug("Initializing injected connector (EIP-6963)", { wallet: this.walletClientType }), await this.syncAccounts(), this.initialized = true, this.emit("initialized");
  }
  async connect(e3) {
    if (u2.connectionStart(this.walletClientType, "injected", { showPrompt: e3.showPrompt }), e3.showPrompt && await this.promptConnection(), !await this.isConnected()) return u2.debug("Not connected after prompt", { wallet: this.walletClientType }), null;
    let t3 = await this.getConnectedWallet();
    return t3 && u2.connectionSuccess(this.walletClientType), t3;
  }
  get walletBranding() {
    return { name: this.providerDetail.info.name, icon: this.providerDetail.info.icon, id: this.providerDetail.info.rdns };
  }
  disconnect() {
    console.warn(`Programmatic disconnect with ${this.providerDetail.info.name} is not yet supported.`);
  }
  async promptConnection() {
    u2.debug("Prompting connection via eth_requestAccounts", { wallet: this.walletClientType });
    try {
      let e3 = await Rt5(this.proxyProvider, this.walletClientType);
      if (!e3 || 0 === e3.length || !e3[0]) throw new n("Unable to retrieve accounts");
      await this.syncAccounts([e3[0]]);
    } catch (e3) {
      throw u2.connectionFailed(this.walletClientType, e3, { method: "injected" }), p(e3);
    }
  }
  constructor(e3, t3, i8, n7, s7) {
    super(s7 || "unknown", e3, t3, i8), this.connectorType = "injected", this.proxyProvider = new A2(void 0, this.rpcTimeoutDuration), this.subscribeListeners(), this.providerDetail = n7;
    let r5 = n7.provider;
    this.proxyProvider.setWalletProvider(r5);
  }
};
var Ft4 = "__private_" + Ot5++ + "__walletBranding";
var Bt4 = class extends $ {
  async initialize() {
    u2.debug("Initializing legacy injected connector", { wallet: this.walletClientType }), await this.syncAccounts(), this.initialized = true, this.emit("initialized");
  }
  async connect(e3) {
    if (u2.connectionStart(this.walletClientType, "injected (legacy)", { showPrompt: e3.showPrompt }), e3.showPrompt && await this.promptConnection(), !await this.isConnected()) return u2.debug("Not connected after prompt", { wallet: this.walletClientType }), null;
    let t3 = await this.getConnectedWallet();
    return t3 && u2.connectionSuccess(this.walletClientType), t3;
  }
  get walletBranding() {
    return zt4(this, Ft4)[Ft4] ?? { name: "Browser Extension", icon: Mt4, id: "extension" };
  }
  disconnect() {
    u2.debug("Disconnect requested (not supported for legacy injected)", { wallet: this.walletClientType });
  }
  async promptConnection() {
    u2.debug("Prompting connection via eth_requestAccounts (legacy)", { wallet: this.walletClientType });
    try {
      let e3 = await Rt5(this.proxyProvider, this.walletClientType);
      if (!e3 || 0 === e3.length || !e3[0]) throw new n("Unable to retrieve accounts");
      await this.syncAccounts([e3[0]]);
    } catch (e3) {
      throw u2.connectionFailed(this.walletClientType, e3, { method: "injected (legacy)" }), p(e3);
    }
  }
  constructor(e3, t3, i8, n7, s7) {
    super(s7 ?? "unknown", e3, t3, i8), Object.defineProperty(this, Ft4, { writable: true, value: void 0 }), this.connectorType = "injected", this.proxyProvider = new A2(void 0, this.rpcTimeoutDuration), this.subscribeListeners(), this.proxyProvider.setWalletProvider(n7), "metamask" === s7 ? zt4(this, Ft4)[Ft4] = { name: "MetaMask", icon: O, id: "io.metamask" } : "phantom" === s7 && (zt4(this, Ft4)[Ft4] = { name: "Phantom", icon: jt4, id: "phantom" });
  }
};
var qt4 = class extends Lt4 {
  disconnect() {
    console.warn("MetaMask does not support programmatic disconnect.");
  }
  async promptConnection() {
    u2.debug("Prompting connection via MetaMask", { wallet: this.walletClientType });
    try {
      import_react_device_detect2.isMobile || (u2.rpcRequest("wallet_requestPermissions", this.walletClientType), await this.proxyProvider.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] }), u2.rpcResponse("wallet_requestPermissions", this.walletClientType)), u2.rpcRequest("eth_requestAccounts", this.walletClientType);
      let e3 = await this.proxyProvider.request({ method: "eth_requestAccounts" });
      if (u2.rpcResponse("eth_requestAccounts", this.walletClientType), !e3 || 0 === e3.length || !e3[0]) throw new n("Unable to retrieve accounts");
      await this.syncAccounts([e3[0]]);
    } catch (e3) {
      throw u2.connectionFailed(this.walletClientType, e3, { method: "metamask" }), p(e3);
    }
  }
};
var $t4 = class extends $ {
  async initialize() {
    u2.debug("Initializing WalletConnect V2 connector", { wallet: this.walletClientType });
    let e3 = await this.createProvider();
    if (this.provider = e3, this.proxyProvider.setWalletProvider(e3), this.subscribeListeners(), e3.session) {
      let e4 = this.walletProvider?.session?.peer.metadata;
      u2.debug("Restoring existing WalletConnect session", { peerName: e4?.name, accountsCount: this.walletProvider?.accounts?.length }), this.walletProvider?.session?.peer.metadata.url && (this.walletEntry = z(this.walletProvider?.session?.peer.metadata.url), this.walletClientType = this.walletEntry?.slug || "unknown"), this.connected = true, await this.syncAccounts();
    }
    this.initialized = true, this.emit("initialized");
  }
  async connect(e3) {
    u2.connectionStart(this.walletClientType, "wallet_connect_v2", { showPrompt: e3.showPrompt }), e3.showPrompt && await this.promptConnection();
    let t3 = await this.getConnectedWallet();
    return t3 && u2.connectionSuccess(this.walletClientType), t3;
  }
  async isConnected() {
    return !!this.walletProvider?.connected;
  }
  get walletBranding() {
    let e3 = this.walletProvider?.session?.peer.metadata.icons?.[0];
    return { name: f2(this.walletProvider?.session?.peer.metadata.name || "") || "WalletConnect", icon: "string" == typeof e3 ? e3 : j2, id: this.walletProvider?.session?.peer.metadata.name.toLowerCase() || "wallet_connect_v2" };
  }
  async resetConnection(e3) {
    let t3 = this.walletClientType;
    u2.debug("Resetting WalletConnect connection for new wallet", { previousWallet: t3, newWallet: e3 }), this.walletProvider && this.walletProvider.connected && (await this.walletProvider.disconnect(), this.walletProvider.signer.session = void 0, this.walletClientType = e3, this.redirectUri = void 0, this.fallbackUniversalRedirectUri = void 0, u5(), this.onDisconnect());
  }
  async promptConnection() {
    if (this.provider) return u2.debug("Prompting WalletConnect connection", { wallet: this.walletClientType }), new Promise(((e3, t3) => {
      (async () => {
        u2.debug("Enabling WalletConnect provider", { wallet: this.walletClientType, timeoutMs: this.proxyProvider.rpcTimeoutDuration });
        let t4 = "", i8 = await Promise.race([this.walletProvider?.enable(), this.proxyProvider.walletTimeout().then((() => {
        }))]);
        if (i8?.length && (t4 = i8[0], u2.debug("WalletConnect accounts received", { address: t4, accountsCount: i8.length })), !t4 || "" === t4) throw new n("Unable to retrieve address");
        this.walletProvider?.session?.peer.metadata.url && (this.walletEntry = z(this.walletProvider?.session?.peer.metadata.url), this.walletClientType = this.walletEntry?.slug || "unknown", u2.debug("Identified wallet from session", { wallet: this.walletClientType }), this.proxyProvider.rpcTimeoutDuration = N2(this.rpcConfig, this.walletClientType)), this.connected = true, await this.syncAccounts(i8), e3();
      })().catch(((e4) => {
        u2.connectionFailed(this.walletClientType, e4, { method: "wallet_connect_v2" }), t3(e4 ? p(e4) : new n("Unknown error during connection"));
      }));
    }));
    u2.warn("WalletConnect provider not initialized");
  }
  disconnect() {
    this.walletProvider?.disconnect().then((() => this.onDisconnect())).catch((() => console.warn("Unable to disconnect WalletConnect provider")));
  }
  get walletProvider() {
    return this.proxyProvider.walletProvider;
  }
  setWalletProvider(e3) {
    this.proxyProvider.setWalletProvider(e3);
  }
  async createProvider() {
    u2.debug("Creating WalletConnect EthereumProvider", { chainsCount: this.chains.length, defaultChainId: this.defaultChain.id });
    let e3 = {};
    for (let t4 of this.chains) {
      let i9 = W(t4.id, this.chains, this.rpcConfig, this.privyAppId);
      i9 && (e3[t4.id] = i9);
    }
    let t3 = this.shouldEnforceDefaultChainOnConnect ? [this.defaultChain.id] : [], i8 = this.chains.map(((e4) => e4.id));
    u2.debug("Initializing WalletConnect EthereumProvider", { requiredChains: t3.join(", ") || "none", optionalChainsCount: i8.length });
    let n7 = await G6.init({ projectId: this.walletConnectCloudProjectId, chains: t3, optionalChains: i8, optionalEvents: P7, optionalMethods: A7, rpcMap: e3, showQrModal: false, metadata: { description: this.privyAppName, name: this.privyAppName, url: window.location.origin, icons: [] } });
    return n7.on("display_uri", ((e4) => {
      if (u2.debug("WalletConnect URI generated", { wallet: this.walletClientType, isMobile: import_react_device_detect2.isMobile, hasWalletEntry: !!this.walletEntry }), u2.debug("Aborting WalletConnect pairing attempt"), n7.signer.abortPairingAttempt(), l4(), !this.showPrivyQrModal) throw new n("WalletConnect modal not available - Privy handles wallet connections through its own UI");
      if (import_react_device_detect2.isMobile && this.walletEntry) {
        let { redirect: t4, href: i9 } = i7(e4, this.walletEntry), n8 = t4.startsWith("http");
        u2.debug("Opening mobile wallet via deep link", { wallet: this.walletEntry.name, redirectType: n8 ? "universal" : "native" }), d5(t4, "_self"), c6({ href: i9, name: this.walletEntry.metadata?.shortName || this.walletEntry.name });
        let s7 = o6(e4, this.walletEntry);
        return this.redirectUri = t4, this.fallbackUniversalRedirectUri = s7?.redirect, this.showPrivyQrModal({ native: t4, universal: t4 });
      }
      if (u2.debug("Displaying WalletConnect QR code", { wallet: this.walletEntry?.name || "generic" }), this.redirectUri = void 0, this.walletEntry) {
        let t4 = o6(e4, this.walletEntry);
        this.fallbackUniversalRedirectUri = t4?.redirect;
      }
      this.showPrivyQrModal({ native: e4, universal: void 0 });
    })), n7.on("connect", (() => {
      let e4 = n7.session?.peer.metadata;
      u2.debug("WalletConnect session established", { peerName: e4?.name, peerIcon: e4?.icons?.[0] ? "present" : "none" }), n7.session?.peer.metadata.url && (this.walletEntry = z(n7.session?.peer.metadata.url), this.walletClientType = this.walletEntry?.slug || "unknown");
    })), n7;
  }
  async enableProvider() {
    return this.walletProvider?.connected ? Promise.resolve(this.walletProvider.accounts) : await this.walletProvider?.enable();
  }
  setWalletEntry(e3, t3) {
    this.walletEntry = e3, this.showPrivyQrModal = t3;
  }
  constructor({ walletConnectCloudProjectId: e3, rpcConfig: t3, chains: i8, defaultChain: n7, shouldEnforceDefaultChainOnConnect: s7, privyAppId: r5, privyAppName: o7, walletClientType: c7 }) {
    super(c7 || "unknown", i8, n7, t3), this.connectorType = "wallet_connect_v2", this.privyAppId = r5, this.privyAppName = o7, this.walletConnectCloudProjectId = e3, this.rpcConfig = t3, this.shouldEnforceDefaultChainOnConnect = s7, this.proxyProvider = new A2(void 0, this.rpcTimeoutDuration), c7 && (this.walletEntry = P2(c7), this.walletClientType = c7);
  }
};
var Vt4 = class extends eventemitter3_default {
  get wallets() {
    let e3 = /* @__PURE__ */ new Set();
    return this.walletConnectors.flatMap(((e4) => e4.wallets)).sort(((e4, t3) => e4.connectedAt && t3.connectedAt ? t3.connectedAt - e4.connectedAt : 0)).filter(((t3) => {
      let i8 = `${t3.address}${t3.walletClientType}${t3.connectorType}${t3.meta.id}`;
      return !e3.has(i8) && (e3.add(i8), true);
    }));
  }
  async initialize(e3) {
    if (u2.info("Starting connector initialization", { reInit: e3 ?? false }), this.initialized && !e3) return;
    if (e3 && this.removeAllConnectors(), this.externalWalletConfig.disableAllExternalWallets) return void u2.info("All external wallets disabled, skipping initialization");
    let t3 = h({ store: this.store, walletList: this.walletList, externalWalletConfig: this.externalWalletConfig, walletChainType: this.walletChainType }).then(((e4) => {
      u2.info("Detected injected providers", { count: e4.length, wallets: e4.map(((e5) => e5.type)).join(", ") }), e4.forEach((({ type: e5, eip6963InjectedProvider: t4, legacyInjectedProvider: i9 }) => {
        this.createEthereumWalletConnector({ connectorType: "injected", walletClientType: e5, providers: { eip6963InjectedProvider: t4, legacyInjectedProvider: i9 } });
      }));
    }));
    for (let e4 of (this.walletList.includes("coinbase_wallet") && this.createEthereumWalletConnector({ connectorType: "coinbase_wallet", walletClientType: "coinbase_wallet" }), this.walletList.includes("base_account") && this.createEthereumWalletConnector({ connectorType: "base_account", walletClientType: "base_account" }), Object.values(R2))) !e4.isInstalled && this.walletList.includes(e4.client) && (["ethereum-only", "ethereum-and-solana"].includes(this.walletChainType) && e4.chainTypes.includes("ethereum") && this.createEthereumWalletConnector({ connectorType: "null", walletClientType: e4.client, walletConfig: e4 }), ["ethereum-and-solana", "solana-only"].includes(this.walletChainType) && e4.chainTypes.includes("solana") && this.addSolanaWalletConnector(new D3({ id: e4.client, name: e4.name })));
    let i8 = this.walletList.includes("wallet_connect_qr_solana") || S(this.walletList) && "ethereum-only" !== this.walletChainType, n7 = this.externalWalletConfig.walletConnect.enabled && (this.walletList.includes("wallet_connect_qr") || S(this.walletList)) && "solana-only" !== this.walletChainType, s7 = this.externalWalletConfig.solana.connectors?.get() || [], a8 = async (e4) => {
      await e4.initializeProvider({ walletConnectCloudProjectId: this.walletConnectCloudProjectId, privyAppName: this.privyAppName });
      let t4 = await e4.hideSolanaSessionsFromSignClient();
      try {
        this.ethereumWalletConnectInitPromise || (this.ethereumWalletConnectInitPromise = this.initEthereumWalletConnect()), await this.ethereumWalletConnectInitPromise;
      } finally {
        await e4.unhideSolanaSessionsInSignClient(t4);
      }
      await e4.restoreSession();
    }, r5 = async (e4) => {
      let t4 = e4.find(((e5) => "walletconnect_solana" === e5.walletBranding?.id)), s8 = t4?.wallet ?? null;
      !n7 || i8 && s8 ? i8 && !n7 && s8 ? await s8.initialize({ walletConnectCloudProjectId: this.walletConnectCloudProjectId, privyAppName: this.privyAppName }) : i8 && n7 && s8 && await a8(s8) : this.ethereumWalletConnectInitPromise || (this.ethereumWalletConnectInitPromise = this.initEthereumWalletConnect());
    };
    r5(s7), s7.filter(((e4) => i8 || "walletconnect_solana" !== e4.walletBranding?.id)).forEach(this.addSolanaWalletConnector), this.externalWalletConfig.solana.connectors?._setOnConnectorsUpdated?.(((e4) => {
      r5(e4), e4?.filter(((e5) => i8 || "walletconnect_solana" !== e5.walletBranding?.id)).forEach(this.addSolanaWalletConnector);
    })), await t3, this.initialized = true;
  }
  findWalletConnector(e3, t3, i8) {
    return "wallet_connect_v2" === e3 ? this.walletConnectors.filter(U).find(((t4) => t4.connectorType === e3 && (!i8 || t4.wallets.some(((e4) => e4.address === i8))))) ?? null : this.walletConnectors.filter(U).find(((n7) => n7.connectorType === e3 && n7.walletClientType === t3 && (!i8 || n7.wallets.some(((e4) => e4.address === i8))))) ?? null;
  }
  findSolanaWalletConnector(e3) {
    return this.walletConnectors.filter(F2).find(((t3) => "unknown" === t3.walletClientType ? t3.walletBranding.id === e3 : t3.walletClientType === e3)) ?? null;
  }
  onInitialized(e3) {
    u2.connectorInit(e3.connectorType, e3.walletClientType, { walletsCount: e3.wallets.length }), e3.wallets.forEach(((e4) => {
      let t3 = this.storedConnections.find(((t4) => t4.address === e4.address && t4.connectorType === e4.connectorType && ("solana" === e4.type && "unknown" === t4.walletClientType && "unknown" === e4.walletClientType ? e4.meta.id === t4.id : t4.walletClientType === e4.walletClientType)));
      t3 && (e4.connectedAt = t3.connectedAt);
    })), this.emit("walletsUpdated"), this.emit("connectorInitialized");
  }
  onWalletsUpdated(e3) {
    e3.initialized && this.emit("walletsUpdated");
  }
  initEthereumWalletConnect() {
    return this.createEthereumWalletConnector({ connectorType: "wallet_connect_v2", walletClientType: "unknown" }).then(((e3) => {
      if (e3) return new Promise(((t3) => {
        if (e3.initialized) return void t3();
        let i8 = setTimeout((() => t3()), 5e3);
        e3.once("initialized", (() => {
          clearTimeout(i8), t3();
        }));
      }));
    }));
  }
  async createEthereumWalletConnector({ connectorType: e3, walletClientType: t3, providers: i8, walletConfig: n7 }) {
    u2.debug("Creating Ethereum wallet connector", { connector: e3, wallet: t3 });
    let s7 = this.findWalletConnector(e3, t3);
    if (s7 && U(s7)) return u2.debug("Found existing connector, reusing", { connector: e3, wallet: t3 }), s7 instanceof $t4 && s7.resetConnection(t3), s7;
    let a8 = (() => "injected" !== e3 ? "coinbase_wallet" === e3 ? new Dt3(this.chains, this.defaultChain, this.rpcConfig, this.externalWalletConfig.coinbaseWallet.config) : "base_account" === e3 ? new Nt5(this.chains, this.defaultChain, this.rpcConfig, this.externalWalletConfig.baseAccount.config, this.setBaseAccountSdk) : "null" !== e3 ? new $t4({ walletConnectCloudProjectId: this.walletConnectCloudProjectId, rpcConfig: this.rpcConfig, chains: this.chains, defaultChain: this.defaultChain, shouldEnforceDefaultChainOnConnect: this.shouldEnforceDefaultChainOnConnect, privyAppId: this.privyAppId, privyAppName: this.privyAppName, walletClientType: t3 }) : n7 ? new W2({ id: n7.client, name: n7.name, defaultChain: this.defaultChain, walletClientType: n7.client }) : null : "metamask" === t3 && i8?.eip6963InjectedProvider ? new qt4(this.chains, this.defaultChain, this.rpcConfig, i8?.eip6963InjectedProvider, "metamask") : "metamask" === t3 && i8?.legacyInjectedProvider ? new Bt4(this.chains, this.defaultChain, this.rpcConfig, i8?.legacyInjectedProvider, "metamask") : "phantom" === t3 && i8?.legacyInjectedProvider ? new Bt4(this.chains, this.defaultChain, this.rpcConfig, i8?.legacyInjectedProvider, "phantom") : i8?.legacyInjectedProvider && "unknown_browser_extension" === t3 ? new Bt4(this.chains, this.defaultChain, this.rpcConfig, i8?.legacyInjectedProvider) : i8?.eip6963InjectedProvider ? new Lt4(this.chains, this.defaultChain, this.rpcConfig, i8?.eip6963InjectedProvider, t3) : void 0)();
    return a8 ? (u2.connectorCreated(e3, t3), this.addWalletConnector(a8)) : u2.debug("No connector created", { connector: e3, wallet: t3 }), a8 || null;
  }
  addWalletConnector(e3) {
    u2.debug("Adding wallet connector", { connector: e3.connectorType, wallet: e3.walletClientType }), this.walletConnectors.push(e3), e3.on("initialized", (() => this.onInitialized(e3))), e3.on("walletsUpdated", (() => this.onWalletsUpdated(e3))), e3.initialize().catch(((t3) => {
      u2.error("Failed to initialize connector", t3, { connector: e3.connectorType, wallet: e3.walletClientType });
    }));
  }
  setWalletList(e3) {
    this.walletList = e3, this.initialized && this.initialize(true).catch(console.error);
  }
  removeAllConnectors() {
    for (let e3 of this.walletConnectors) e3.removeAllListeners();
    this.walletConnectors = [];
  }
  constructor(e3, t3, i8, n7, s7, a8, r5, o7, l5, c7, h6, d7, p7) {
    super(), this.ethereumWalletConnectInitPromise = null, this.addSolanaWalletConnector = async (e4) => {
      let t4 = this.findSolanaWalletConnector(e4.walletClientType);
      if (!t4 || "null" === t4.connectorType) {
        if ("null" === t4?.connectorType) {
          let e5 = this.walletConnectors.indexOf(t4);
          this.walletConnectors.splice(e5, 1);
        }
        this.addWalletConnector(e4);
      }
    }, u2.setEnabled(p7 ?? false), u2.info("ConnectorManager initializing", { walletChainType: d7 || void 0, walletListCount: r5.length }), this.privyAppId = e3, this.walletConnectCloudProjectId = t3, this.rpcConfig = i8, this.chains = n7, this.defaultChain = s7, this.walletConnectors = [], this.initialized = false, this.store = a8, this.walletList = r5, this.shouldEnforceDefaultChainOnConnect = o7, this.externalWalletConfig = l5, this.privyAppName = c7, this.walletChainType = d7 || "ethereum-only", this.setBaseAccountSdk = h6, this.storedConnections = b3();
  }
};
var Ht4 = create((() => ({ identityToken: null })));
var Gt4 = [a3, s3, sa];
var Jt4 = class {
  async get(e3, t3) {
    try {
      return await this.baseFetch(e3, t3);
    } catch (e4) {
      throw o2(e4);
    }
  }
  async post(e3, t3, i8) {
    try {
      return await this.baseFetch(e3, { method: "POST", ...t3 ? { body: t3 } : {}, ...i8 });
    } catch (e4) {
      throw o2(e4);
    }
  }
  async delete(e3, t3) {
    try {
      return await this.baseFetch(e3, { method: "DELETE", ...t3 });
    } catch (e4) {
      throw o2(e4);
    }
  }
  constructor({ appId: e3, appClientId: t3, client: i8, defaults: n7 }) {
    this.appId = e3, this.appClientId = t3, this.clientAnalyticsId = i8.clientAnalyticsId, this.sdkVersion = _, this.client = i8, this.defaults = n7, this.fallbackApiUrl = i8.fallbackApiUrl, this.baseFetch = ofetch.create({ baseURL: this.defaults.baseURL, timeout: this.defaults.timeout, retry: 3, retryDelay: 500, retryStatusCodes: [408, 409, 425, 500, 502, 503, 504], credentials: "include", onRequest: async ({ request: e4, options: t4 }) => {
      let i9 = new Headers(t4.headers);
      i9.set("privy-app-id", this.appId), this.appClientId && i9.set("privy-client-id", this.appClientId), i9.set("privy-ca-id", this.clientAnalyticsId || ""), i9.set("privy-client", `react-auth:${this.sdkVersion}`);
      let n8 = Gt4.includes(e4.toString());
      if (!i9.has("authorization")) {
        let e5 = await this.client.getAccessToken({ disableAutoRefresh: n8 });
        null !== e5 && i9.set("authorization", `Bearer ${e5}`);
      }
      t4.headers = i9, t4.retryDelay && "number" == typeof t4.retryDelay && (t4.retryDelay = 3 * t4.retryDelay);
    }, onRequestError: ({ error: e4 }) => {
      if (e4 instanceof DOMException && "AbortError" === e4.name) throw new a2();
    } });
  }
};
var Yt3 = (e3) => ({ rpId: e3.rp_id, challenge: e3.challenge, allowCredentials: e3.allow_credentials?.map(((e4) => ({ id: e4.id, type: e4.type, transports: e4.transports }))) || [], timeout: e3.timeout, extensions: { appid: e3.extensions?.app_id, credProps: e3.extensions?.cred_props, hmacCreateSecret: e3.extensions?.hmac_create_secret }, userVerification: e3.user_verification });
var Zt4 = Symbol("cross-tab-user-sync-plugin");
var Kt4 = class {
  async authenticate() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    try {
      return await this.api.post(ia, { token: this.meta.token });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    try {
      return await this.api.post(ta, { token: this.meta.token });
    } catch (e3) {
      throw o2(e3);
    }
  }
  constructor(e3) {
    this.meta = { token: e3 };
  }
};
function Xt4(e3) {
  return e3 ? { "privy-ui": "t" } : void 0;
}
var ei3 = class {
  async authenticate() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.email || !this.meta.emailCode) throw new s2("Email and email code must be set prior to calling authenticate.");
    try {
      return await this.api.post(b4, { email: this.meta.email, code: this.meta.emailCode, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.email || !this.meta.emailCode) throw new s2("Email and email code must be set prior to calling authenticate.");
    try {
      return await this.api.post(j3, { email: this.meta.email, code: this.meta.emailCode });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async sendCodeEmail({ email: e3, captchaToken: t3, withPrivyUi: i8 }) {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (e3 && (this.meta.email = e3), t3 && (this.meta.captchaToken = t3), !this.meta.email) throw new s2("Email must be set when initialzing authentication.");
    let n7 = Xt4(i8);
    try {
      return await this.api.post(y3, { email: this.meta.email, token: this.meta.captchaToken }, { headers: { ...n7 } });
    } catch (e4) {
      throw o2(e4);
    }
  }
  constructor({ email: e3, captchaToken: t3, disableSignup: i8 }) {
    this.meta = { email: e3, captchaToken: t3, disableSignup: i8 ?? false };
  }
};
var ti2 = class extends ei3 {
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.email || !this.meta.emailCode || !this.meta.oldAddress) throw new s2("Email, email code, and an old email address must be set prior to calling update.");
    try {
      return await this.api.post(q, { oldAddress: this.meta.oldAddress, newAddress: this.meta.email, code: this.meta.emailCode });
    } catch (e3) {
      throw o2(e3);
    }
  }
  constructor(e3, t3, i8) {
    super({ email: t3, captchaToken: i8 }), this.meta = { email: t3, captchaToken: i8, oldAddress: e3, disableSignup: false };
  }
};
var ii3 = class {
  getOrCreateGuestCredential(e3) {
    let i8 = E(e3);
    if (P()) {
      if (D2.get(i8)) return D2.get(i8);
      {
        let e4 = base64url_exports.encode(o5(32));
        return D2.put(i8, e4), e4;
      }
    }
    return base64url_exports.encode(o5(32));
  }
  async authenticate() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    try {
      return await this.api.post(ea, { guest_credential: this.meta.guestCredential });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    throw Error("Linking is not supported for the guest flow");
  }
  constructor(e3) {
    this.meta = { guestCredential: this.getOrCreateGuestCredential(e3) };
  }
};
function ni3() {
  return "undefined" != typeof window && "chrome-extension:" === window.location.protocol && "chrome" in window;
}
function si3() {
  if (!ni3()) return;
  let e3 = window.chrome;
  return e3?.runtime?.id;
}
function ai3() {
  if (!ni3()) return false;
  let e3 = window.chrome;
  return "function" == typeof e3?.identity?.launchWebAuthFlow;
}
async function ri3(e3) {
  return new Promise(((t3, i8) => {
    ai3() ? window.chrome.identity.launchWebAuthFlow({ url: e3, interactive: true }, (async (e4) => {
      try {
        let i9 = (function() {
          if (!ni3()) return;
          let e5 = window.chrome;
          return e5?.runtime?.lastError?.message;
        })();
        if (i9 || !e4) {
          let e5 = `WebAuthFlow failed: ${i9 || "Response URI missing"}`;
          throw Error(e5);
        }
        let n7 = new URL(e4), s7 = si3();
        if (!s7) throw Error("Invalid extension context");
        if ("chrome-extension:" === n7.protocol) {
          if (n7.hostname !== s7) throw Error("Invalid responseUri origin");
        } else {
          if ("https:" !== n7.protocol) throw Error("Invalid responseUri protocol");
          {
            let e5 = n7.hostname.split(".");
            if (3 !== e5.length || "chromiumapp" !== e5[1] || "org" !== e5[2] || e5[0] !== s7) throw Error("Invalid responseUri origin");
          }
        }
        let a8 = n7.searchParams.get("privy_oauth_state"), r5 = n7.searchParams.get("privy_oauth_code");
        if (!a8 || !r5) throw Error("Invalid responseUri - missing required parameters");
        t3({ privyOAuthState: a8, privyOAuthCode: r5 });
      } catch (e5) {
        i8(e5);
      }
    })) : i8(Error("Chrome identity API not available"));
  }));
}
var oi3 = class {
  addCaptchaToken(e3) {
    this.meta.captchaToken = e3;
  }
  isActive() {
    return !!(this.meta.authorizationCode && this.meta.stateCode && this.meta.provider);
  }
  async authenticate() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.authorizationCode || !this.meta.stateCode) throw new s2("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenticate.");
    if ("undefined" === this.meta.authorizationCode) throw new s2("User denied confirmation during OAuth flow");
    let e3 = c2();
    try {
      let t3 = await this.api.post(H, { authorization_code: this.meta.authorizationCode, state_code: this.meta.stateCode, code_verifier: e3, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
      return D2.del(x), D2.del(D), D2.del(B), t3;
    } catch (e4) {
      let t3 = o2(e4);
      if (t3.privyErrorCode) throw new s2(t3.message || "Invalid code during OAuth flow.", void 0, t3.privyErrorCode);
      if ("User denied confirmation during OAuth flow" === t3.message) throw new s2("Invalid code during oauth flow.", void 0, i.OAUTH_USER_DENIED);
      throw new s2("Invalid code during OAuth flow.", void 0, i.UNKNOWN_AUTH_ERROR);
    }
  }
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.authorizationCode || !this.meta.stateCode) throw new s2("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling link.");
    if ("undefined" === this.meta.authorizationCode) throw new s2("User denied confirmation during OAuth flow");
    let e3 = D2.get(x);
    if (!e3) throw new s2("Authentication error.");
    try {
      let t3 = await this.api.post(I, { authorization_code: this.meta.authorizationCode, state_code: this.meta.stateCode, code_verifier: e3 });
      return D2.del(x), t3;
    } catch (e4) {
      throw o2(e4);
    }
  }
  async getAuthorizationUrl() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.provider) throw new s2("Provider must be set when initializing OAuth authentication.");
    let e3 = a4();
    D2.put(x, e3);
    let t3 = i4();
    D2.put(A, t3);
    let i8 = await s4(e3);
    this.meta.withPrivyUi || D2.put(D, true), this.meta.disableSignup ? D2.put(B, true) : D2.del(B);
    let n7 = Xt4(this.meta.withPrivyUi), s7 = window.location.href, a8 = (function() {
      let e4 = si3();
      if (e4) return `https://${e4}.chromiumapp.org`;
    })();
    a8 && (s7 = a8);
    try {
      return await this.api.post(G, { provider: this.meta.provider, redirect_to: this.meta.customOAuthRedirectUrl || s7, token: this.meta.captchaToken, code_challenge: i8, state_code: t3 }, { headers: { ...n7 } });
    } catch (e4) {
      throw o2(e4);
    }
  }
  constructor(e3) {
    this.meta = e3;
  }
};
var li3 = class {
  execute(e3) {
    return null === this.promise && (this.promise = (async () => {
      try {
        return await this.fn(e3);
      } finally {
        this.promise = null;
      }
    })()), this.promise;
  }
  constructor(e3) {
    this.promise = null, this.fn = e3;
  }
};
var ci2 = ({ address: e3, chainId: t3, nonce: i8 }) => `${window.location.host} wants you to sign in with your Ethereum account:
${e3}

By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.

URI: ${window.location.origin}
Version: 1
Chain ID: ${t3}
Nonce: ${i8}
Issued At: ${(/* @__PURE__ */ new Date()).toISOString()}
Resources:
- https://privy.io`;
var hi2 = class {
  get meta() {
    return { connectorType: this.wallet?.connectorType, walletClientType: this.wallet?.walletClientType, chainId: this.wallet?.chainId, address: this.wallet?.address, disableSignup: this._meta.disableSignup };
  }
  async authenticate() {
    if (!this.client) throw new s2("SiweFlow has no client instance");
    try {
      if (this.preparedMessage && this.signature) return await this.client.authenticateWithSiweInternal({ message: this.preparedMessage, signature: this.signature, chainId: this.wallet?.chainId, walletClientType: this.walletClientType ?? this.wallet?.walletClientType, connectorType: this.connectorType ?? this.wallet?.connectorType, mode: this._meta.disableSignup ? "no-signup" : "login-or-sign-up" });
      if (!this.wallet) throw new s2("SiweFlow has no wallet instance");
      let { message: e3, signature: t3 } = await this.sign();
      return await this.client.authenticateWithSiweInternal({ message: e3, signature: t3, chainId: this.wallet.chainId, walletClientType: this.wallet.walletClientType, connectorType: this.wallet.connectorType, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    if (!this.client) throw new s2("SiweFlow has no client instance");
    try {
      if (!this.wallet) throw new s2("SiweFlow has no wallet instance");
      let { message: e3, signature: t3 } = await this.sign();
      return await this.client.linkWithSiweInternal({ message: e3, signature: t3, chainId: this.wallet.chainId, walletClientType: this.wallet.walletClientType, connectorType: this.wallet.connectorType });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async sign() {
    if (!this.client) throw new s2("SiweFlow has no client instance");
    if (await this.buildMessage(), !this.preparedMessage) throw new s2("Could not prepare SIWE message");
    if (!this.wallet) throw new s2("SiweFlow has no wallet instance");
    let e3 = await this.wallet.sign(this.preparedMessage);
    return { message: this.preparedMessage, signature: e3 };
  }
  async _getNonceOnce() {
    if (!this.client) throw new s2("SiweFlow has no client instance");
    if (!this.wallet) throw new s2("UI SiweFlow has no wallet instance");
    return await this.client.generateSiweNonce({ address: this.wallet.address, captchaToken: this.captchaToken });
  }
  async buildMessage() {
    if (!this.client) throw new s2("SiweFlow has no client instance");
    if (!this.wallet) throw new s2("SiweFlow has no wallet instance");
    let e3 = this.wallet.address, t3 = this.wallet.chainId.replace("eip155:", "");
    return this.nonce || (this.nonce = await this.getNonceOnce.execute()), this.preparedMessage = ci2({ address: e3, chainId: t3, nonce: this.nonce }), this.preparedMessage;
  }
  constructor(e3, t3, i8, n7 = false, s7) {
    this._meta = { disableSignup: false }, this.getNonceOnce = new li3(this._getNonceOnce.bind(this)), this.wallet = t3, this.captchaToken = i8, this.client = e3, this._meta.disableSignup = n7, this.preparedMessage = s7?.message, this.signature = s7?.signature, this.walletClientType = s7?.walletClientType, this.connectorType = s7?.connectorType;
  }
};
var di3 = class {
  async authenticate() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.phoneNumber || !this.meta.smsCode) throw new s2("phone number and sms code must be set prior to calling authenticate.");
    try {
      return await this.api.post(D4, { phoneNumber: this.meta.phoneNumber, code: this.meta.smsCode, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.phoneNumber || !this.meta.smsCode) throw new s2("phone number and sms code must be set prior to calling authenticate.");
    try {
      return await this.api.post(B3, { phoneNumber: this.meta.phoneNumber, code: this.meta.smsCode });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async sendSmsCode({ phoneNumber: e3, captchaToken: t3, withPrivyUi: i8 }) {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (e3 && (this.meta.phoneNumber = e3), t3 && (this.meta.captchaToken = t3), !this.meta.phoneNumber) throw new s2("phone nNumber must be set when initialzing authentication.");
    let n7 = Xt4(i8);
    try {
      return await this.api.post(A3, { phoneNumber: this.meta.phoneNumber, token: this.meta.captchaToken }, { headers: { ...n7 } });
    } catch (e4) {
      throw o2(e4);
    }
  }
  constructor({ phoneNumber: e3, captchaToken: t3, disableSignup: i8 }) {
    this.meta = { phoneNumber: e3, captchaToken: t3, disableSignup: i8 ?? false };
  }
};
var pi3 = class extends di3 {
  async link() {
    if (!this.api) throw new s2("Auth flow has no API instance");
    if (!this.meta.phoneNumber || !this.meta.smsCode || !this.meta.oldPhoneNumber) throw new s2("Phone number, sms code, and an old phone number must be set prior to calling update.");
    try {
      return await this.api.post(E3, { old_phone_number: this.meta.oldPhoneNumber, new_phone_number: this.meta.phoneNumber, code: this.meta.smsCode });
    } catch (e3) {
      throw o2(e3);
    }
  }
  constructor(e3, t3, i8) {
    super({ phoneNumber: t3, captchaToken: i8 }), this.meta = { phoneNumber: t3, captchaToken: i8, oldPhoneNumber: e3, disableSignup: false };
  }
};
var ui3;
var wi3 = ((ui3 = {}).PRIVY = "privy_access_token", ui3.CUSTOMER = "customer_access_token", ui3);
var yi2 = class {
  get token() {
    return this.privyAccessToken || this.customerAccessToken;
  }
  getToken(e3) {
    return "privy_access_token" === e3 ? this.privyAccessToken : this.customerAccessToken;
  }
  get customerAccessToken() {
    return this._getToken(f);
  }
  get privyAccessToken() {
    return this._getToken(w);
  }
  _getToken(e3) {
    try {
      let t3 = D2.get(e3);
      return "string" == typeof t3 ? bt3.throwIfNotWellFormedJwt(t3) : null;
    } catch (e4) {
      return console.error(e4), this.destroyLocalState(), null;
    }
  }
  get refreshToken() {
    try {
      let e3 = D2.get(m);
      return "string" == typeof e3 ? e3 : null;
    } catch (e3) {
      return console.error(e3), this.destroyLocalState(), null;
    }
  }
  getProviderAccessToken(e3) {
    try {
      let t3 = D2.get(M(e3));
      if ("string" != typeof t3) return null;
      {
        let i8 = new bt3(t3);
        return i8.isExpired() ? (D2.del(M(e3)), null) : i8.value;
      }
    } catch (e4) {
      return console.error(e4), null;
    }
  }
  get mightHaveServerCookies() {
    try {
      let e3 = R.get(F);
      return void 0 !== e3 && e3.length > 0;
    } catch (e3) {
      console.error(e3);
    }
    return false;
  }
  hasRefreshCredentials(e3 = "privy_access_token") {
    let t3 = "string" == typeof this.getToken(e3), i8 = "string" == typeof this.refreshToken && this.refreshToken !== j;
    return this.mightHaveServerCookies || t3 && i8;
  }
  hasActiveAccessToken(e3) {
    let t3 = bt3.parse(this.getToken(e3));
    return null !== t3 && !t3.isExpired(30);
  }
  authenticate(e3) {
    return this.authenticateOnce.execute(e3);
  }
  link(e3) {
    return this.linkOnce.execute(e3);
  }
  refresh() {
    return this.refreshOnce.execute();
  }
  destroy() {
    return this.destroyOnce.execute();
  }
  storeProviderAccessToken(e3, t3) {
    "string" == typeof t3 ? D2.put(M(e3), t3) : D2.del(M(e3));
  }
  updateIdentityToken(e3) {
    "string" == typeof e3 ? this.storeIdentityToken(e3) : this.clearIdentityToken();
  }
  async _authenticate(e3) {
    try {
      let t3 = await e3.authenticate(), { user: n7, is_new_user: s7, oauth_tokens: a8 } = t3;
      this.handleTokenResponse(t3);
      let r5 = a8 ? { provider: a8.provider, accessToken: a8.access_token, accessTokenExpiresInSeconds: a8.access_token_expires_in_seconds, refreshToken: a8.refresh_token, refreshTokenExpiresInSeconds: a8.refresh_token_expires_in_seconds, scopes: a8.scopes } : void 0;
      return this._trackAuthenticateEvents(e3, s7), { user: b(n7), isNewUser: s7, oAuthTokens: r5 };
    } catch (e4) {
      throw console.warn("Error authenticating session"), E2(e4);
    }
  }
  _trackAuthenticateEvents(e3, t3) {
    let i8 = (function(e4) {
      return e4 instanceof ei3 ? "email" : e4 instanceof di3 ? "sms" : e4 instanceof hi2 ? "siwe" : e4 instanceof ii3 ? "guest" : e4 instanceof Kt4 ? "custom_auth" : e4 instanceof oi3 ? e4.meta.provider : null;
    })(e3);
    i8 && this.client && this.client.createAnalyticsEvent({ eventName: "sdk_authenticate", payload: { method: i8, isNewUser: t3 } }), "siwe" === i8 && this.client && this.client.createAnalyticsEvent({ eventName: "sdk_authenticate_siwe", payload: { connectorType: e3.meta.connectorType, walletClientType: e3.meta.walletClientType } });
  }
  async _link(e3) {
    try {
      let t3 = await e3.link(), n7 = t3.oauth_tokens, s7 = n7 ? { provider: n7.provider, accessToken: n7.access_token, accessTokenExpiresInSeconds: n7.access_token_expires_in_seconds, refreshToken: n7.refresh_token, refreshTokenExpiresInSeconds: n7.refresh_token_expires_in_seconds, scopes: n7.scopes } : void 0;
      return { user: b(t3), oAuthTokens: s7 };
    } catch (e4) {
      throw console.warn("Error linking account"), E2(e4);
    }
  }
  async _refresh() {
    if (!this.api) throw new s2("Session has no API instance");
    if (!this.client) throw new s2("Session has no PrivyClient instance");
    await this.client.getAccessToken({ disableAutoRefresh: true });
    let e3 = this.token, t3 = this.refreshToken;
    if (this.client.useServerCookies && !this.mightHaveServerCookies && this.token && window.location.origin === this.client.apiUrl) return this.destroyLocalState(), null;
    try {
      let n7;
      if (!(e3 && t3 || this.mightHaveServerCookies)) return null;
      {
        let i8 = {};
        e3 && (i8.authorization = `Bearer ${e3}`), n7 = await this.api.post(a3, t3 ? { refresh_token: t3 } : {}, { headers: i8 });
      }
      return this.handleTokenResponse(n7), b(n7.user);
    } catch (e4) {
      if (e4 instanceof r2 && e4.privyErrorCode === i.MISSING_OR_INVALID_TOKEN) return console.warn("Unable to refresh tokens - token is missing or no longer valid"), this.destroyLocalState(), null;
      throw E2(e4);
    }
  }
  handleTokenResponse(e3) {
    e3.session_update_action && "set" !== e3.session_update_action ? "clear" === e3.session_update_action ? this.destroyLocalState() : "ignore" === e3.session_update_action && (e3.token && (this.storeCustomerAccessToken(e3.token), this.storePrivyAccessToken(e3.privy_access_token)), e3.identity_token && this.storeIdentityToken(e3.identity_token)) : this._storeAllTokens(e3);
  }
  _storeAllTokens(e3) {
    this.storeRefreshToken(e3.refresh_token), this.storeCustomerAccessToken(e3.token), this.storePrivyAccessToken(e3.privy_access_token), e3.identity_token && this.storeIdentityToken(e3.identity_token);
  }
  async _destroy() {
    try {
      await this.api?.post(s3, { refresh_token: this.refreshToken });
    } catch (e3) {
      console.warn("Error destroying session");
    }
    this.destroyLocalState();
  }
  destroyLocalState() {
    this.storeRefreshToken(null), this.storeCustomerAccessToken(null), this.storePrivyAccessToken(null), this.clearIdentityToken();
  }
  storeCustomerAccessToken(e3) {
    if ("string" == typeof e3) {
      let t3 = D2.get(f);
      D2.put(f, e3);
      let i8 = bt3.parse(e3)?.expiration;
      this.writeCookie(b2, e3, { expires: i8 ? new Date(1e3 * i8) : void 0 }), t3 !== e3 && this.client?.onStoreCustomerAccessToken?.(e3);
    } else D2.del(f), R.remove(b2), this.client?.onDeleteCustomerAccessToken?.();
  }
  storeRefreshToken(e3) {
    "string" == typeof e3 ? (D2.put(m, e3), this.writeCookie(F, "t", { expires: 30 })) : (D2.del(m), R.remove(v), R.remove(F));
  }
  storePrivyAccessToken(e3) {
    "string" == typeof e3 ? D2.put(w, e3) : D2.del(w);
  }
  storeIdentityToken(e3) {
    if (Ht4.setState({ identityToken: e3 }), this.client?.useServerCookies) return;
    D2.put(k, e3);
    let t3 = bt3.parse(e3)?.expiration;
    this.writeCookie(y, e3, { expires: t3 ? new Date(1e3 * t3) : void 0 });
  }
  writeCookie(e3, t3, i8) {
    qn({ useServerCookies: this.client?.useServerCookies, cookieWriteBehavior: this.client?.cookieWriteBehavior }) && R.set(e3, t3, { sameSite: "Strict", secure: !(import_react_device_detect2.isSafari && window.location.origin.startsWith("http://localhost")), ...i8 });
  }
  clearIdentityToken() {
    D2.del(k), Ht4.setState({ identityToken: null }), R.remove(y);
  }
  constructor() {
    this.authenticateOnce = new li3((async (e3) => this._authenticate(e3))), this.linkOnce = new li3((async (e3) => this._link(e3))), this.refreshOnce = new li3(this._refresh.bind(this)), this.destroyOnce = new li3(this._destroy.bind(this));
  }
};
var mi3;
var gi2;
var fi2 = 0;
var Ci3 = "__private_" + fi2++ + "__getOrGenerateClientAnalyticsId";
var vi2 = class {
  getAppId() {
    return this.appId;
  }
  initializeConnectorManager({ walletConnectCloudProjectId: e3, rpcConfig: t3, chains: i8, defaultChain: n7, store: s7, walletList: a8, shouldEnforceDefaultChainOnConnect: r5, externalWalletConfig: o7, appName: l5, walletChainType: c7, setBaseAccountSdk: h6, connectorsDebugLogs: d7 }) {
    this.connectors || (this.connectors = new Vt4(this.appId, e3, t3, i8, n7, s7, a8, r5, o7, l5, h6, c7, d7));
  }
  generateApi() {
    let e3 = new Jt4({ appId: this.appId, appClientId: this.appClientId, client: this, defaults: { baseURL: this.apiUrl, timeout: this.timeout } });
    return this.session.api = e3, e3;
  }
  updateApiUrl(e3) {
    this.apiUrl = e3 || this.fallbackApiUrl, this.api = this.generateApi(), e3 && (this.useServerCookies = true);
  }
  authenticate() {
    if (!this.authFlow) throw new s2("No auth flow in progress.");
    return this.session.authenticate(this.authFlow);
  }
  async link() {
    if (!this.authFlow) throw new s2("No auth flow in progress.");
    let { oAuthTokens: e3 } = await this.session.link(this.authFlow);
    return { user: await this.getAuthenticatedUser(), oAuthTokens: e3 };
  }
  storeProviderAccessToken(e3, t3) {
    this.session.storeProviderAccessToken(e3, t3);
  }
  getProviderAccessToken(e3) {
    return this.session.getProviderAccessToken(e3);
  }
  async logout() {
    await this.session.destroy(), this.authFlow = void 0;
  }
  clearProviderAcccessTokens(e3) {
    e3.linkedAccounts.filter(((e4) => "cross_app" === e4.type)).forEach(((e4) => {
      this.storeProviderAccessToken(e4.providerApp.id, null);
    }));
  }
  startAuthFlow(e3) {
    return e3.api = this.api, this.authFlow = e3, this.authFlow;
  }
  async initMfaSmsVerification() {
    try {
      await this.api.post(Z, { action: "verify" });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async initMfaPasskeyVerification() {
    try {
      let e3 = await this.api.post($2, {});
      return Yt3(e3.options);
    } catch (e3) {
      throw o2(e3);
    }
  }
  async getCrossAppProviderDetails(e3) {
    try {
      return this._cachedProviderAppDetails[e3] || (this._cachedProviderAppDetails[e3] = await this.api.get(`/api/v1/apps/${e3}/cross-app/details`)), this._cachedProviderAppDetails[e3];
    } catch (e4) {
      console.error("Error fetching cross app provider details", e4);
    }
  }
  async acceptTerms() {
    try {
      let e3 = await this.api.post(aa, {});
      return b(e3);
    } catch (e3) {
      throw E2(e3);
    }
  }
  async unlinkEmail(e3) {
    try {
      let t3 = await this.api.post(x2, { address: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkPhone(e3) {
    try {
      let t3 = await this.api.post(C3, { phoneNumber: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkEthereumWallet(e3) {
    try {
      let t3 = await this.api.post(n2, { address: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkSolanaWallet(e3) {
    try {
      let t3 = await this.api.post(l, { address: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkOAuth(e3, t3) {
    try {
      let n7 = await this.api.post(J, { provider: e3, subject: t3 });
      return await this.getAuthenticatedUser() ?? b(n7);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkFarcaster(e3) {
    try {
      let t3 = await this.api.post(_3, { fid: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async unlinkTelegram(e3) {
    try {
      let t3 = await this.api.post(W3, { telegram_user_id: e3 });
      return await this.getAuthenticatedUser() ?? b(t3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async revokeDelegatedWallet() {
    try {
      await this.api.post(ra, {});
    } catch (e3) {
      throw E2(e3);
    }
  }
  async createAnalyticsEvent({ eventName: e3, payload: t3, timestamp: i8, options: n7 }) {
    if ("undefined" != typeof window) try {
      if (!this.clientAnalyticsId) return void console.warn("No client analytics id set, refusing to send analytics event");
      await this.api.post(sa, { event_name: e3, client_id: this.clientAnalyticsId, payload: { ...t3 || {}, clientTimestamp: i8 ? i8.toISOString() : (/* @__PURE__ */ new Date()).toISOString() } }, { retry: -1, keepalive: n7?.keepAlive ?? false });
    } catch {
    }
  }
  async signMoonpayOnRampUrl(e3) {
    try {
      return this.api.post(pa, e3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async initCoinbaseOnRamp(e3) {
    try {
      return this.api.post(na, e3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async getCoinbaseOnRampStatus({ partnerUserId: e3 }) {
    try {
      return this.api.get(`${va}?partnerUserId=${e3}`);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async getAuthenticatedUser() {
    return this.session.hasRefreshCredentials() ? this.session.refresh() : null;
  }
  async getAccessToken(e3) {
    return await this.getPrivyAccessToken(e3) || await this.getCustomerAccessToken(e3);
  }
  async getCustomerAccessToken(e3) {
    return await this._getToken(wi3.CUSTOMER, e3);
  }
  async getPrivyAccessToken(e3) {
    return await this._getToken(wi3.PRIVY, e3);
  }
  async _getToken(e3, t3) {
    if (this.session.getToken(e3)) {
      if (this.session.hasActiveAccessToken(e3)) return this.session.hasRefreshCredentials(e3) ? Pt4.parse(this.session.getToken(e3))?.appId !== this.appId ? (await this.logout(), null) : this.session.getToken(e3) : (this.session.destroyLocalState(), null);
      {
        if (t3?.disableAutoRefresh || !this.session.hasRefreshCredentials(e3)) return null;
        let i8 = n3(Zt4);
        if (i8) {
          let t4 = async () => (await this.session.refresh(), this.session.getToken(e3));
          return await i8.withRefreshLock({ onLeader: t4, onFollowerReleased: async () => this.session.hasActiveAccessToken(e3) ? this.session.getToken(e3) : t4() });
        }
        return await this.session.refresh(), this.session.getToken(e3);
      }
    }
    return !t3?.disableAutoRefresh && this.useServerCookies && this.session.mightHaveServerCookies ? (await this.session.refresh(), this.session.getToken(e3)) : null;
  }
  async getUsdTokenPrice(e3) {
    try {
      return (await this.api.get(`/api/v1/token_price?chainId=${e3.id}&tokenSymbol=${e3.nativeCurrency.symbol}`)).usd;
    } catch (t3) {
      return void console.error(`Unable to fetch token price for chain with id ${e3.id}`);
    }
  }
  async getUsdPriceForSol() {
    try {
      return (await this.api.get("/api/v1/token_price?chainId=0&tokenSymbol=SOL")).usd;
    } catch (e3) {
      return void console.error("Unable to fetch token price for SOL");
    }
  }
  async getSplTokenMetadata({ mintAddress: e3, cluster: t3 }) {
    try {
      return await this.api.get(`/api/v1/spl_token_info?mint_address=${e3}&cluster=${t3}`);
    } catch (i8) {
      return void console.error(`Unable to fetch token metadata for ${t3}:${e3}`);
    }
  }
  async requestFarcasterSignerStatus(e3) {
    try {
      return await this.api.post("/api/v1/farcaster/signer/status", { ed25519_public_key: e3 });
    } catch (e4) {
      throw console.error("Unable to fetch Farcaster signer status"), e4;
    }
  }
  async generateSiweNonce({ address: e3, captchaToken: t3 }) {
    try {
      return (await this.api.post(i3, { address: e3, token: t3 })).nonce;
    } catch (e4) {
      throw E2(e4);
    }
  }
  async authenticateWithSiweInternal({ message: e3, signature: t3, chainId: i8, walletClientType: n7, connectorType: s7, mode: a8 }) {
    return await this.api.post(t, { message: e3, signature: t3, chainId: i8, walletClientType: n7, connectorType: s7, mode: a8 });
  }
  async linkWithSiweInternal({ message: e3, signature: t3, chainId: i8, walletClientType: n7, connectorType: s7 }) {
    return await this.api.post(e, { message: e3, signature: t3, chainId: i8, walletClientType: n7, connectorType: s7 });
  }
  async linkSmartWallet({ message: e3, signature: t3, smartWalletType: n7, smartWalletVersion: s7 }) {
    try {
      let a8 = await this.api.post(p2, { message: e3, signature: t3, smart_wallet_type: n7, smart_wallet_version: s7 });
      return b(a8);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async linkWithSiwe({ message: e3, signature: t3, chainId: n7, walletClientType: s7, connectorType: a8 }) {
    try {
      let r5 = await this.linkWithSiweInternal({ message: e3, signature: t3, chainId: n7, walletClientType: s7, connectorType: a8 });
      return b(r5);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async generateSiwsNonce({ address: e3, captchaToken: t3 }) {
    try {
      return (await this.api.post(r4, { address: e3, token: t3 })).nonce;
    } catch (e4) {
      throw E2(e4);
    }
  }
  async authenticateWithSiwsInternal({ message: e3, signature: t3, walletClientType: i8, connectorType: n7, mode: s7, messageType: a8 = "plain" }) {
    return await this.api.post(o4, { message: e3, signature: t3, walletClientType: i8, connectorType: n7, mode: s7, message_type: a8 });
  }
  async authenticateWithSiws({ message: e3, signature: t3, walletClientType: n7, connectorType: s7, mode: a8, messageType: r5 = "plain" }) {
    let o7 = await this.authenticateWithSiwsInternal({ message: e3, signature: t3, walletClientType: n7, connectorType: s7, mode: a8, messageType: r5 });
    this.session.handleTokenResponse(o7);
    let l5 = b(o7.user);
    if (!l5) throw Error("Authentication failed - no user returned");
    return { user: l5, isNewUser: o7.is_new_user || false };
  }
  async sendAccountTransferRequest({ nonce: e3, account: t3, accountType: n7, externalWalletMetadata: s7, telegramAuthResult: a8, telegramWebAppData: r5, farcasterEmbeddedAddress: o7, oAuthUserInfo: l5 }) {
    try {
      let c7, h6;
      switch (n7) {
        case "email":
          c7 = z2, h6 = { nonce: e3, email: t3 };
          break;
        case "sms":
          c7 = F3, h6 = { nonce: e3, phoneNumber: t3 };
          break;
        case "siwe":
          if (c7 = v2, !s7) throw Error("Wallet parameters must be defined");
          h6 = { nonce: e3, address: t3, ...s7 };
          break;
        case "farcaster":
          c7 = f5, h6 = { nonce: e3, farcaster_id: t3, farcaster_embedded_address: o7 };
          break;
        case "telegram":
          c7 = X, h6 = { nonce: e3, telegram_auth_result: a8, telegram_web_app_data: r5 };
          break;
        case "siws":
          c7 = c, h6 = { nonce: e3, address: t3, ...s7 };
          break;
        case "custom":
        case "guest":
        case "passkey":
          throw Error("Invalid transfer account type");
        default:
          c7 = K, h6 = { nonce: e3, userInfo: l5 };
      }
      let d7 = await this.api.post(c7, h6);
      return await this.getAuthenticatedUser() ?? b(d7);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async linkWithSiwsInternal({ message: e3, signature: t3, walletClientType: i8, connectorType: n7, messageType: s7 = "plain" }) {
    return await this.api.post(u3, { message: e3, signature: t3, walletClientType: i8, connectorType: n7, message_type: s7 });
  }
  async linkWithSiws({ message: e3, signature: t3, walletClientType: n7, connectorType: s7, messageType: a8 = "plain" }) {
    try {
      let r5 = await this.linkWithSiwsInternal({ message: e3, signature: t3, walletClientType: n7, connectorType: s7, messageType: a8 });
      return b(r5);
    } catch (e4) {
      throw E2(e4);
    }
  }
  async updateUserAndIdToken() {
    try {
      let e3 = await this.api.get(oa);
      return this.session.updateIdentityToken(e3.identity_token), b(e3.user);
    } catch (e3) {
      throw E2(e3);
    }
  }
  async scanTransaction(e3) {
    try {
      return await this.api.post(ua, e3);
    } catch (e4) {
      throw E2(e4);
    }
  }
  constructor({ apiUrl: e3 = d, appId: t3, appClientId: i8, timeout: n7 = u, cookieWriteBehavior: s7 }) {
    Object.defineProperty(this, Ci3, { value: Ti3 }), this._cachedProviderAppDetails = {}, this.apiUrl = e3, this.fallbackApiUrl = this.apiUrl, this.useServerCookies = e3 !== d && e3.startsWith("https://privy."), this.cookieWriteBehavior = s7, this.timeout = n7, this.appId = t3, this.appClientId = i8, this.clientAnalyticsId = (function(e4, t4) {
      if (!Object.prototype.hasOwnProperty.call(e4, t4)) throw TypeError("attempted to use private field on non-instance");
      return e4;
    })(this, Ci3)[Ci3](), mi3 || (mi3 = new yi2()), this.session = mi3, this.api = this.generateApi(), this.session.client = this;
  }
};
function Ti3() {
  if ("undefined" == typeof window) return null;
  try {
    let e4 = D2.get(C);
    if ("string" == typeof e4 && e4.length > 0) return e4;
  } catch (e4) {
  }
  let e3 = crypto.randomUUID();
  try {
    return D2.put(C, e3), e3;
  } catch (t3) {
    return e3;
  }
}
function Ai3() {
  if (!gi2) throw new s2("No global PrivyClient instance found. Please ensure you have initialized the PrivyProvider.");
  return gi2;
}
function _i3(e3) {
  gi2 || (gi2 = new vi2({ appId: e3.appId, appClientId: e3.clientId, apiUrl: e3.apiUrl, cookieWriteBehavior: e3.config?.sessions?.cookieWriteBehavior }));
}
async function bi2() {
  let e3 = Ai3();
  return e3 ? e3.getAccessToken() : Promise.resolve(D2.get(w) || D2.get(f) || null);
}
async function Pi3(e3, t3, i8, n7) {
  let s7 = a(e3), { chain: a8, authorizationList: r5, ...o7 } = await (async () => n7 ? await n7() : await t3.prepareTransactionRequest({ ...s7, account: { address: i8, type: "json-rpc" } }))();
  return { ...o7, type: r[o7.type], authorizationList: e3.authorizationList };
}
var Si3 = ["calls", "feePayer", "feePayerSignature", "feeToken", "keyAuthorization", "nonceKey", "signature", "validBefore", "validAfter"];
var xi2 = (e3) => {
  if (!e3 || "object" != typeof e3) return false;
  if (e3.type === o || "string" == typeof e3.type && e3.type.toLowerCase() === s) return true;
  let t3 = e3.account;
  return !!t3?.keyType && "secp256k1" !== t3.keyType || "accessKey" === t3?.source || Si3.some(((t4) => void 0 !== e3[t4]));
};
var Ei2 = (e3) => ({ type: o, from: e3.from, chainId: e3.chainId, nonce: e3.nonce, gasLimit: e3.gasLimit ?? e3.gas, maxFeePerGas: e3.maxFeePerGas, maxPriorityFeePerGas: e3.maxPriorityFeePerGas, calls: Di3(e3), feeToken: Mi3(e3.feeToken), nonceKey: ji3(e3.nonceKey), validBefore: e3.validBefore, validAfter: e3.validAfter, feePayerSignature: e3.feePayerSignature ?? void 0, accessList: e3.accessList });
var Di3 = (e3) => {
  let t3 = e3.calls && e3.calls.length > 0 ? e3.calls : e3.to ? [{ to: e3.to, data: e3.data, value: e3.value }] : [];
  if (0 === t3.length) throw Error("Tempo transactions require at least one call");
  return t3.map(((e4) => {
    if (!e4.to) throw Error("Tempo transaction calls require a `to` address");
    return { to: e4.to, data: e4.data, value: e4.value };
  }));
};
var Mi3 = (e3) => {
  if (void 0 !== e3) return "string" == typeof e3 ? e3 : `0x20c0${e3.toString(16).padStart(36, "0")}`;
};
var ji3 = (e3) => {
  if ("expiring" !== e3 && "random" !== e3) return e3;
};

export {
  d5 as d,
  It5 as It,
  St5 as St,
  Wt4 as Wt,
  Mt4 as Mt,
  $t4 as $t,
  Kt4 as Kt,
  Xt4 as Xt,
  ei3 as ei,
  ti2 as ti,
  ai3 as ai,
  ri3 as ri,
  oi3 as oi,
  li3 as li,
  ci2 as ci,
  hi2 as hi,
  di3 as di,
  pi3 as pi,
  Ai3 as Ai,
  _i3 as _i,
  bi2 as bi,
  Pi3 as Pi,
  xi2 as xi,
  Ei2 as Ei
};
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/utils/dist/index.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
