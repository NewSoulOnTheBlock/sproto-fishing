import {
  D
} from "./chunk-COXZQBSX.js";
import {
  s
} from "./chunk-W22FA2JU.js";
import {
  base64url_exports,
  x2 as x
} from "./chunk-MIVUYAK7.js";

// node_modules/@privy-io/react-auth/dist/esm/paths-BH8W4zMc.mjs
var a = "/api/v1/sessions";
var s2 = "/api/v1/sessions/logout";
var i = "/api/v1/siwe/init";
var t = "/api/v1/siwe/authenticate";
var e = "/api/v1/siwe/link";
var p = "/api/v1/siwe/link_smart_wallet";
var n = "/api/v1/siwe/unlink";
var v = "/api/v1/siwe/transfer";
var r = "/api/v1/siws/init";
var o = "/api/v1/siws/authenticate";
var u = "/api/v1/siws/link";
var l = "/api/v1/siws/unlink";
var c = "/api/v1/siws/transfer";
var w = "/api/v1/farcaster/init";
var k = "/api/v1/farcaster/authenticate";
var m = "/api/v1/farcaster/link";
var h = "/api/v1/farcaster/status";
var _ = "/api/v1/farcaster/unlink";
var f = "/api/v1/farcaster/transfer";
var y = "/api/v1/passwordless/init";
var b = "/api/v1/passwordless/authenticate";
var j = "/api/v1/passwordless/link";
var x2 = "/api/v1/passwordless/unlink";
var q = "/api/v1/passwordless/update";
var z = "/api/v1/passwordless/transfer";
var A = "/api/v1/passwordless_sms/init";
var B = "/api/v1/passwordless_sms/link";
var C = "/api/v1/passwordless_sms/unlink";
var D2 = "/api/v1/passwordless_sms/authenticate";
var E = "/api/v1/passwordless_sms/update";
var F = "/api/v1/passwordless_sms/transfer";
var G = "/api/v1/oauth/init";
var H = "/api/v1/oauth/authenticate";
var I = "/api/v1/oauth/link";
var J = "/api/v1/oauth/unlink";
var K = "/api/v1/oauth/transfer";
var L = "/api/v1/recovery/oauth/init";
var M = "/api/v1/recovery/oauth/init_icloud";
var N = "/api/v1/recovery/oauth/authenticate";
var O = "/api/v1/passkeys/link/init";
var P = "/api/v1/passkeys/authenticate/init";
var Q = "/api/v1/passkeys/register/init";
var R = "/api/v1/passkeys/link";
var S = "/api/v1/passkeys/authenticate";
var T = "/api/v1/passkeys/register";
var U = "/api/v1/telegram/authenticate";
var V = "/api/v1/telegram/link";
var W = "/api/v1/telegram/unlink";
var X = "/api/v1/telegram/transfer";
var Z = "/api/v1/mfa/passwordless_sms/init";
var $ = "/api/v1/mfa/passkeys/init";
var aa = "/api/v1/users/me/accept_terms";
var sa = "/api/v1/analytics_events";
var ia = "/api/v1/custom_jwt_account/authenticate";
var ta = "/api/v1/custom_jwt_account/link";
var ea = "/api/v1/guest/authenticate";
var pa = "/api/v1/plugins/moonpay_on_ramp/sign";
var na = "/api/v1/funding/coinbase_on_ramp/init";
var va = "/api/v1/funding/coinbase_on_ramp/status";
var ra = "/api/v1/wallets/revoke";
var oa = "/api/v1/users/me";
var ua = "/api/v1/scan/transaction";

// node_modules/@privy-io/react-auth/dist/esm/pkce-7GthSY9g.mjs
function o2(r2) {
  return crypto.getRandomValues(new Uint8Array(r2));
}
function a2() {
  return base64url_exports.encode(o2(36));
}
function i2() {
  return a2();
}
async function s3(t2, n2 = "S256") {
  if ("S256" != n2) return t2;
  {
    let n3 = await (async function(r2) {
      let t3 = new TextEncoder().encode(r2);
      return new Uint8Array(await crypto.subtle.digest("SHA-256", t3));
    })(t2);
    return base64url_exports.encode(n3);
  }
}
function c2() {
  let r2 = D.get(x);
  if (!r2) throw new s("Authentication error.");
  return r2;
}

export {
  a,
  s2 as s,
  i,
  t,
  e,
  p,
  n,
  v,
  r,
  o,
  u,
  l,
  c,
  w,
  k,
  m,
  h,
  _,
  f,
  y,
  b,
  j,
  x2 as x,
  q,
  z,
  A,
  B,
  C,
  D2 as D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Z,
  $,
  aa,
  sa,
  ia,
  ta,
  ea,
  pa,
  na,
  va,
  ra,
  oa,
  ua,
  o2,
  a2,
  i2,
  s3 as s2,
  c2
};
