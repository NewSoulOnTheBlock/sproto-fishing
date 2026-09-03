import {
  m
} from "./chunk-64VFK6PP.js";
import {
  B as B2,
  C as C2,
  d,
  e,
  h as h2,
  i,
  l as l4,
  n as n4,
  o,
  r as r2,
  s as s2
} from "./chunk-3JLDN2QE.js";
import {
  c
} from "./chunk-7562YI5E.js";
import {
  j
} from "./chunk-HIRHLZA3.js";
import {
  l as l3
} from "./chunk-RXHEHL44.js";
import {
  w
} from "./chunk-4JCAMCZH.js";
import {
  H,
  P,
  Y
} from "./chunk-LMW2KUFR.js";
import {
  UserCircleIcon_default
} from "./chunk-52LU76MD.js";
import {
  FingerPrintIcon_default
} from "./chunk-RN3TQCJB.js";
import {
  n as n3
} from "./chunk-PZMIZGJH.js";
import {
  n as n2
} from "./chunk-JU4Q6HQT.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import {
  CircleUser,
  Mail,
  Smartphone
} from "./chunk-ELJY7WHB.js";
import {
  L,
  QuestionMarkCircleIcon_default,
  h2 as h,
  t
} from "./chunk-RPCD4HAF.js";
import {
  tr,
  za
} from "./chunk-2IJQ6F4F.js";
import {
  $,
  C,
  D,
  E,
  I,
  M,
  O,
  S as S2,
  W,
  z
} from "./chunk-H64F7Q3M.js";
import {
  B
} from "./chunk-5IEXBHIB.js";
import {
  k,
  r
} from "./chunk-SLTT5NIH.js";
import {
  S,
  _
} from "./chunk-LORNEDOT.js";
import {
  s
} from "./chunk-COXZQBSX.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l,
  l2
} from "./chunk-THXMRURJ.js";
import {
  pi,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/CustomLandingScreenView-B7qYR6nF.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var ce = () => {
  let t3 = se(), a2 = t3?.appearance?.logo, i2 = `${t3?.name} logo`, r4 = { maxHeight: "90px", maxWidth: "180px" };
  return a2 ? "string" == typeof a2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: a2, alt: i2, style: r4 }) : "svg" === a2.type || "img" === a2.type ? /* @__PURE__ */ import_react.default.cloneElement(a2, { alt: i2, style: r4 }) : (console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."), null) : null;
};
var de = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`;
var pe = ({ name: t3, logoUrl: a2, size: i2 = "38px" }) => "string" == typeof a2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: a2, alt: `${t3 ?? "Provider app"} logo`, style: { width: i2, height: i2, maxHeight: "90px", maxWidth: "180px", borderRadius: "8px" } }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {});
var ue = ({ appId: i2 }) => {
  let [l6, o3] = (0, import_react.useState)(void 0), { startCrossAppAuthFlow: s4 } = B(), { authenticated: c2 } = k(), { data: d2 } = g(), { client: p } = l();
  return (0, import_react.useEffect)((() => {
    (async () => {
      p && o3(await p.getCrossAppProviderDetails(i2));
    })();
  }), [p]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { onClick: () => s4({ appId: i2, action: c2 ? "link" : "login", disableSignup: d2?.login?.disableSignup }), disabled: !l6, children: l6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { $fullSize: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pe, { name: l6.name, logoUrl: l6.icon_url || void 0, size: "32px" }) }), l6.name] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l2, {}) });
};
var he = ({ isEditable: i2, setIsEditable: l6, defaultValue: r4 }) => {
  let n6 = (0, import_react.useRef)(null);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { $if: !i2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { ref: n6, defaultValue: r4 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { $if: i2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: () => {
    l6(), setTimeout((() => {
      n6.current?.focus();
    }), 0);
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}) }), "Continue with Email"] }) })] });
};
var me = () => {
  let [a2, i2] = (0, import_react.useState)(false), { currentScreen: l6, navigate: n6, setModalData: o3, data: s4 } = g(), { enabled: c2, token: d2 } = za(), { initLoginWithFarcaster: p } = l(), { accountType: u } = D();
  return (0, import_jsx_runtime.jsxs)(I, { onClick: async () => {
    i2(true);
    try {
      c2 && !d2 ? (o3({ captchaModalData: { callback: (e3) => p(e3, s4?.login?.disableSignup), userIntentRequired: true, onSuccessNavigateTo: "FarcasterConnectStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), n6("CaptchaScreen")) : (await p(d2, s4?.login?.disableSignup), n6("FarcasterConnectStatusScreen"));
    } catch (e3) {
      o3({ errorModalData: { error: e3, previousScreen: l6 || "LandingScreen" } }), n6("ErrorScreen");
    } finally {
      i2(false);
    }
  }, disabled: false, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l3, { width: 32, height: 32 }), " Farcaster", a2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l2, {}), "farcaster" === u && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ge, { color: "gray", children: "Recent" })] });
};
var ge = gt(n3)`
  margin-left: auto;
`;
var fe = ({ ...a2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", ...a2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#clip0_2856_1743)", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "clip0_2856_1743", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0.5", y: "0.5", width: "24", height: "24", rx: "6", fill: "white" }) }) })] });
var ye = ({ chainType: a2, withPadding: i2 }) => {
  let l6 = "";
  return l6 = "ethereum-only" === a2 || "ethereum-and-solana" === a2 ? "Rainbow, Phantom, or Coinbase Wallet" : "Phantom or Solflare", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, { $withPadding: i2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(M, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionMarkCircleIcon_default, { style: { color: "var(--privy-color-warn)", height: 48, width: 48 } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No wallets available" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Please download an external wallet provider, like ", l6, "."] })] }) }, "empty-wallet-state");
};
var we = () => {
  let { enabled: a2, token: i2 } = za(), { navigate: l6, setModalData: r4, data: n6 } = g(), o3 = se(), { initLoginWithPasskey: c2 } = l(), d2 = () => {
    o3.loginConfig.passkeysForSignupEnabled ? l6("PasskeySelectSignupOrLogin") : (async () => {
      a2 && !i2 ? (r4({ passkeyAuthModalData: { passkeySignupFlow: false }, captchaModalData: { callback: (e3) => c2({ captchaToken: e3, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), l6("CaptchaScreen")) : (await c2({ withPrivyUi: true, captchaToken: i2 }), r4({ passkeyAuthModalData: { passkeySignupFlow: false } }), l6("PasskeyStatusScreen"));
    })();
  };
  return 0 === (0, import_react.useMemo)((() => {
    let e3 = n6?.login?.loginMethods;
    return e3 ? e3.filter(((e4) => "passkey" !== e4)).length : Object.entries(o3.loginMethods).filter((([e4, t3]) => t3)).filter((([e4]) => "passkey" !== e4)).length;
  }), [o3.loginMethods, n6?.login]) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: d2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerPrintIcon_default, {}), " Continue with passkey"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { as: "button", onClick: d2, size: "sm", variant: "navigation", style: { width: "100%", justifyContent: "center" }, children: "I have a passkey" });
};
var ve = ({ isEditable: i2, setIsEditable: l6, defaultValue: r4 }) => {
  let n6 = (0, import_react.useRef)(null), { authenticated: s4 } = k(), { navigate: c2, setModalData: d2, currentScreen: p, data: u } = g(), { initLoginWithSms: m2 } = l(), { enabled: g2, token: v } = za(), { whatsAppEnabled: C3 } = se();
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { $if: !i2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { ref: n6, onSubmit: async function({ qualifiedPhoneNumber: e3 }) {
    if (!g2 || v || s4) try {
      await m2({ phoneNumber: e3, captchaToken: v, withPrivyUi: true, disableSignup: u?.login?.disableSignup }), c2("AwaitingPasswordlessCodeScreen");
    } catch (e4) {
      d2({ errorModalData: { error: e4, previousScreen: p || "LandingScreen" } }), c2("ErrorScreen");
    }
    else d2({ captchaModalData: { callback: (t3) => m2({ phoneNumber: e3, captchaToken: t3, withPrivyUi: true, disableSignup: u?.login?.disableSignup }), userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), c2("CaptchaScreen");
  }, defaultValue: r4 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { $if: i2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: () => {
    l6(), setTimeout((() => {
      n6.current?.focus();
    }), 0);
  }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {}) }), "Continue with ", C3 ? "WhatsApp" : "SMS"] }) })] });
};
var Ce = { apple: { logo: i, displayName: "Apple" }, discord: { logo: e, displayName: "Discord" }, github: { logo: l4, displayName: "GitHub" }, google: { logo: r2, displayName: "Google" }, linkedin: { logo: n4, displayName: "LinkedIn" }, spotify: { logo: s2, displayName: "Spotify" }, instagram: { logo: h2, displayName: "Instagram" }, telegram: { logo: c, displayName: "Telegram" }, twitter: { logo: d, displayName: "Twitter" }, tiktok: { logo: o, displayName: "TikTok" }, line: { logo: C2, displayName: "LINE" }, twitch: { logo: B2, displayName: "Twitch" } };
var be = ({ provider: a2 }) => {
  let { enabled: i2, token: l6 } = za(), { currentScreen: n6, navigate: o3, setModalData: c2, data: d2 } = g(), [p, u] = (0, import_react.useState)(false), m2 = se(), { initLoginWithOAuth: g2 } = l(), { accountType: C3 } = D(), b = (0, import_react.useMemo)((() => C3 && "guest" !== C3 && "authorization_key" !== C3 && "cross_app" !== C3 ? tr(C3) : null), [C3]), { displayName: k2, logo: M2 } = (0, import_react.useMemo)((() => {
    if (r(a2)) {
      let t3 = m2.customOAuthProviders.find(((e3) => e3.provider === a2)), i3 = t3.provider_icon_url, l7 = t3.provider_display_name;
      return { displayName: l7, logo: ({ style: t4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { alt: `${l7} logo`, src: i3, style: t4 }) };
    }
    return Ce[a2];
  }), [a2, m2.customOAuthProviders]);
  return (0, import_jsx_runtime.jsxs)(I, { onClick: () => {
    u(true), setTimeout((() => {
      u(false);
    }), 2e3), i2 && !l6 ? (c2({ captchaModalData: { callback: (e3) => g2(a2, e3, d2?.login?.disableSignup), userIntentRequired: true, onSuccessNavigateTo: null, onErrorNavigateTo: "ErrorScreen" } }), o3("CaptchaScreen")) : g2(a2, void 0, d2?.login?.disableSignup).catch(((e3) => {
      u(false), c2({ errorModalData: { error: e3, previousScreen: n6 || "LandingScreen" } }), o3("ErrorScreen");
    }));
  }, disabled: p, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { $fullSize: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(M2, { style: { width: "32px", height: "32px" } }) }), k2, b?.loginMethod === a2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ke, { color: "gray", children: "Recent" })] });
};
var ke = gt(n3)`
  margin-left: auto;
`;
var Se = () => {
  let { enabled: a2, token: i2 } = za(), { navigate: l6, setModalData: n6, data: o3 } = g(), [s4, c2] = (0, import_react.useState)(false), { initLoginWithTelegram: d2 } = l(), { accountType: p } = D();
  async function u(e3) {
    try {
      await d2(e3, o3?.login?.disableSignup), n6({ telegramAuthModalData: { seamlessAuth: false } }), l6("TelegramAuthScreen");
    } catch (e4) {
      console.error(e4), c2(false);
    }
  }
  return (0, import_jsx_runtime.jsxs)(I, { onClick: async function() {
    if (c2(true), a2 && !i2) return n6({ captchaModalData: { callback: u, userIntentRequired: true, onSuccessNavigateTo: null, onErrorNavigateTo: "ErrorScreen" } }), void l6("CaptchaScreen");
    await u(i2);
  }, disabled: s4, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { width: 32, height: 32 }), "Telegram", "telegram" === p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Te, { color: "gray", children: "Recent" })] });
};
var Te = gt(n3)`
  margin-left: auto;
`;
var Me = ({ onClick: a2, text: i2, icon: l6 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: a2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: l6 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { children: i2 })] });
var xe = ({ connectOnly: i2 }) => {
  let { closePrivyModal: l6 } = l(), { data: o3, setModalData: c2, onUserCloseViaDialogOrKeybindRef: p, navigate: u } = g(), g2 = se(), w2 = o3?.login, S3 = g2.appearance.walletList, T = w2?.walletChainType ?? g2.appearance.walletChainType, { accountType: M2, walletClientType: A, chainType: L2 } = D(), W2 = (0, import_react.useMemo)((() => M2 && "guest" !== M2 && "authorization_key" !== M2 && "cross_app" !== M2 ? tr(M2) : null), [M2]), { email: P2, sms: j2, google: I2, twitter: N, discord: D2, github: R, spotify: V, instagram: _2, tiktok: F, line: U, twitch: H2, linkedin: $2, apple: G, wallet: q, farcaster: B3, telegram: K } = (0, import_react.useMemo)((() => w2?.loginMethods ? pi(w2.loginMethods, true) : null), [w2]) ?? g2.loginMethods, { wallets: Q } = H({ enabled: S(q ? S3 : []), walletList: S3, walletChainType: T }), Z = g2.customOAuthProviders, J = g2.crossAppProviders, { passkey: X } = g2.loginMethods, Y2 = [P2 && "email", j2 && "sms", I2 && "google", N && "twitter", D2 && "discord", R && "github", V && "spotify", _2 && "instagram", F && "tiktok", U && "line", H2 && "twitch", $2 && "linkedin", G && "apple", B3 && "farcaster", K && "telegram", ...Z.map(((e3) => e3.provider)), ...J].filter(((e3) => !!e3)), ee = Y2.length > 0, te = (0, import_react.useMemo)((() => q && !ee ? "web3-first" : q && g2?.appearance.loginGroupPriority || "web2-first"), [q, ee, g2?.appearance.loginGroupPriority]), ae = g2?.appearance.hideDirectWeb2Inputs, [ie, le] = (0, import_react.useState)("default"), [re, ne] = (0, import_react.useState)(je({ mostRecentlyUsedAccountType: M2, smsAvailable: j2, emailAvailable: P2, prefilledType: w2?.prefill?.type }));
  (0, import_react.useEffect)((() => {
    ne(je({ mostRecentlyUsedAccountType: M2, smsAvailable: j2, emailAvailable: P2, prefilledType: w2?.prefill?.type }));
  }), [P2, j2, M2]);
  let de2 = () => {
    l6({ shouldCallAuthOnSuccess: true }), setTimeout((() => {
      le("default");
    }), 150);
  };
  p.current = de2;
  let pe2 = [];
  A && q ? pe2.push(A) : W2?.loginMethod && Y2.includes(W2.loginMethod) && pe2.push(W2.loginMethod);
  let ge2 = (t3) => {
    if ("email" === t3) return (0, import_jsx_runtime.jsx)(he, { isEditable: "email" === re, setIsEditable: () => {
      ne("email");
    }, defaultValue: "email" === w2?.prefill?.type ? w2.prefill.value : void 0 }, t3);
    if ("sms" === t3) return (0, import_jsx_runtime.jsx)(ve, { isEditable: "sms" === re, setIsEditable: () => {
      ne("sms");
    }, defaultValue: "phone" === w2?.prefill?.type ? w2.prefill.value : void 0 }, t3);
    if ("apple" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "apple" }, t3);
    if ("discord" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "discord" }, t3);
    if ("farcaster" === t3) return (0, import_jsx_runtime.jsx)(me, {}, t3);
    if ("github" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "github" }, t3);
    if ("google" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "google" }, t3);
    if ("linkedin" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "linkedin" }, t3);
    if ("tiktok" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "tiktok" }, t3);
    if ("line" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "line" }, t3);
    if ("twitch" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "twitch" }, t3);
    if ("spotify" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "spotify" }, t3);
    if ("instagram" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "instagram" }, t3);
    if ("twitter" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "twitter" }, t3);
    if ("telegram" === t3) return g2.loginConfig.telegramHasHmacCredentials ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Se, {}, t3) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(be, { provider: "telegram" }, t3);
    if (r(t3)) return (0, import_jsx_runtime.jsx)(be, { provider: t3 }, t3);
    if (t3.startsWith("privy:")) {
      let a3 = t3.split(":")[1];
      if (!a3) throw Error("Invalid cross-app provider format. App ID missing.");
      return (0, import_jsx_runtime.jsx)(ue, { appId: a3 }, t3);
    }
    let a2 = Q.findIndex((({ id: e3 }) => e3 === P.normalize(t3))), l7 = "solana" === L2 ? "solana-only" : "ethereum-only";
    return (0, import_jsx_runtime.jsx)(Y, { recent: true, index: a2, data: { wallets: Q, walletChainType: l7, handleWalletClick(e3) {
      c2(((t4) => ({ ...t4, externalConnectWallet: { walletList: S3, walletChainType: l7, preSelectedWalletId: e3.id } }))), u(i2 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
    } } });
  }, fe2 = Q.filter(((e3) => e3.id !== P.normalize(A || ""))), Ce2 = fe2.map(((t3, a2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Y, { index: a2, data: { walletChainType: T, wallets: fe2, handleWalletClick(e3) {
    c2(((t4) => ({ ...t4, externalConnectWallet: { walletList: S3, walletChainType: T, preSelectedWalletId: e3.id } }))), u(i2 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
  } } }, t3.id))), ke2 = Y2.filter(((e3) => e3 !== W2?.loginMethod)).flatMap(ge2), Te2 = pe2.flatMap(ge2);
  "web3-first" === te && "default" === ie ? Ce2.unshift(...Te2) : "web2-first" === te && ke2.unshift(...Te2);
  let xe2 = "web2-overflow" === ie ? () => le("default") : void 0, Ie2 = Y2.filter(((e3) => "email" !== e3 && "sms" !== e3)), Ne2 = We({ priority: te, email: P2, sms: j2, social: Ie2 }), De2 = Ee({ priority: te, email: P2, sms: j2, social: Ie2 }), Oe = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { text: Pe({ priority: te }), onClick: () => {
    c2({ ...o3, externalConnectWallet: { walletChainType: w2?.walletChainType ?? g2.appearance.walletChainType } }), u(i2 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
  } }), Re = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Me, { text: Ne2, icon: De2, onClick: () => le("web2-overflow") }), Ve = ae ? 0 : 1, _e = q && Ce2.length > 0, Fe = 0 === ke2.length && q && 0 === Ce2.length, Ue = 5 - (_e ? 1 : 0), He = "default" === ie && g2?.appearance.logo, $e = "default" === ie && g2.appearance.loginMessage;
  return (0, import_jsx_runtime.jsxs)(n, { title: g2.appearance.landingHeader, icon: He ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ce, {}) : void 0, iconVariant: He ? "logo" : void 0, onClose: de2, showClose: true, onBack: xe2, showBack: !!xe2, helpText: g2 || X && "default" === ie ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [X && "default" === ie && !g2.globalDisablePasskeys && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(we, {}), g2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { app: g2 })] }) : void 0, watermark: true, children: [$e && ("string" == typeof g2.appearance.loginMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ae, { children: g2.appearance.loginMessage }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Le, { children: g2.appearance.loginMessage })), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { $colorScheme: g2.appearance.palette.colorScheme, children: "default" === ie && "web2-first" === te ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [ke2.length > Ue ? ke2.slice(0, Ue - 1) : ke2, ke2.length > Ue && Re, _e && Oe, Fe && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ye, { chainType: g2.appearance.walletChainType })] }) : "default" === ie && "web3-first" === te ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [Ce2.length > Ue ? Ce2.slice(0, Ue - 1) : Ce2, Ce2.length > Ue && Oe] }), ke2.length > Ve && Re, ke2.length === Ve && ke2[0], Fe && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ye, { chainType: g2.appearance.walletChainType })] }) : "web2-overflow" === ie ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "web3-first" === te ? ke2 : ke2.slice(3) }) : null })] });
};
var Ae = gt.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`;
var Le = gt.div`
  margin-bottom: 24px;
`;
var We = ({ priority: e3, email: t3, sms: a2, social: i2 }) => "web2-first" === e3 ? "Other socials" : t3 && a2 && i2.length > 0 || t3 && i2.length > 0 ? "Log in with email or socials" : a2 && i2.length > 0 ? "Log in with sms or socials" : t3 && a2 ? "Continue with email or sms" : t3 ? "Continue with email" : a2 ? "Continue with sms" : "Log in with a social account";
var Ee = ({ priority: t3, email: a2, sms: i2, social: l6 }) => "web2-first" === t3 || l6.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUser, {}) : a2 && i2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(fe, {}) : a2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}) : i2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {}) : null;
var Pe = ({ priority: e3 }) => "web2-first" === e3 ? "Continue with a wallet" : "Other wallets";
var je = ({ mostRecentlyUsedAccountType: e3, smsAvailable: t3, emailAvailable: a2, prefilledType: i2 }) => a2 && ("email" === e3 && "phone" !== i2 || "email" === i2) || !t3 || "phone" !== e3 && "phone" !== i2 ? "email" : "sms";
var Ie = ({ connectOnly: l6 }) => {
  let { closePrivyModal: o3, connectors: c2 } = l(), { data: m2, setModalData: w2, onUserCloseViaDialogOrKeybindRef: C3, navigate: S3 } = g(), T = se(), M2 = T.appearance.palette.colorScheme, { accountType: A, walletClientType: L2 } = D(), W2 = (0, import_react.useMemo)((() => A && "guest" !== A && "authorization_key" !== A && "cross_app" !== A ? tr(A) : null), [A]), N = T.loginMethodsAndOrder?.primary ?? [], D2 = T.loginMethodsAndOrder?.overflow ?? [], O2 = (0, import_react.useMemo)((() => [...N, ...D2]), [N, D2]), R = T.loginMethods.passkey, V = m2?.login, _2 = [];
  L2 && O2.includes(L2) ? _2.push(L2) : A && O2.includes(W2?.loginMethod) && _2.push(W2?.loginMethod);
  let [F, U] = (0, import_react.useState)("default"), [H2, $2] = (0, import_react.useState)(je({ mostRecentlyUsedAccountType: A, smsAvailable: O2.includes("sms"), emailAvailable: O2.includes("email"), prefilledType: V?.prefill?.type }));
  (0, import_react.useEffect)((() => {
    $2(je({ mostRecentlyUsedAccountType: A, smsAvailable: O2.includes("sms"), emailAvailable: O2.includes("email"), prefilledType: V?.prefill?.type }));
  }), [O2, A]), (0, import_react.useEffect)((() => {
    "phone" === A && $2("sms");
    let e3 = O2.indexOf("sms"), t3 = O2.indexOf("email");
    e3 > -1 && e3 < t3 && $2("sms");
  }), [A, N, D2]);
  let z2 = () => {
    o3({ shouldCallAuthOnSuccess: true }), setTimeout((() => {
      U("default");
    }), 150);
  };
  C3.current = z2;
  let { listings: G } = _(), q = (t3) => {
    if ("email" === t3) return (0, import_jsx_runtime.jsx)(he, { isEditable: "email" === H2, setIsEditable: () => {
      $2("email");
    }, defaultValue: "email" === V?.prefill?.type ? V.prefill.value : void 0 }, t3);
    if ("sms" === t3) return (0, import_jsx_runtime.jsx)(ve, { isEditable: "sms" === H2, setIsEditable: () => {
      $2("sms");
    }, defaultValue: "phone" === V?.prefill?.type ? V.prefill.value : void 0 }, t3);
    if ("apple" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "apple" }, t3);
    if ("discord" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "discord" }, t3);
    if ("farcaster" === t3) return (0, import_jsx_runtime.jsx)(me, {}, t3);
    if ("github" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "github" }, t3);
    if ("google" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "google" }, t3);
    if ("linkedin" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "linkedin" }, t3);
    if ("spotify" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "spotify" }, t3);
    if ("instagram" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "instagram" }, t3);
    if ("tiktok" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "tiktok" }, t3);
    if ("line" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "line" }, t3);
    if ("twitch" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "twitch" }, t3);
    if ("twitter" === t3) return (0, import_jsx_runtime.jsx)(be, { provider: "twitter" }, t3);
    if ("telegram" === t3) return T.loginConfig.telegramHasHmacCredentials ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Se, {}, t3) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(be, { provider: "telegram" }, t3);
    if (t3.startsWith("privy:")) return (0, import_jsx_runtime.jsx)(ue, { appId: t3.replace("privy:", "") }, t3);
    let a2 = T.appearance.walletChainType, i2 = new P(a2, [t3]).getWallets(c2, G);
    return i2.wallets.map(((t4, r4) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Y, { index: r4, data: { wallets: i2.wallets, walletChainType: a2, handleWalletClick(e3) {
      w2(((t5) => ({ ...t5, externalConnectWallet: { walletList: O2, walletChainType: a2, preSelectedWalletId: e3.id } }))), S3(l6 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
    } } }, t4.id + r4)));
  }, B3 = _2.flatMap(q), K = N.filter(((e3) => e3 !== L2 && e3 !== W2?.loginMethod)).flatMap(q), Q = D2.filter(((e3) => e3 !== L2 && e3 !== W2?.loginMethod)).flatMap(q), [Z, J] = s([...B3, ...K, ...Q], Ne({ primary: K.length + B3.length, overflow: Q.length }));
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { title: T.appearance.landingHeader, onClose: z2, backFn: "default" === F ? void 0 : () => {
    U("default");
  } }), "default" === F && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(De, {}), "default" === F && ("string" == typeof T.appearance.loginMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { children: T.appearance.loginMessage }) : T.appearance.loginMessage), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S2, { style: { overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { $colorScheme: M2, children: ["default" === F && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [Z, J.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Me, { text: "More options", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCircleIcon_default, {}), onClick: () => U("overflow") })] }), "overflow" === F && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: J }), R && "default" === F && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(we, {})] }) }), T && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { app: T }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};
var Ne = ({ primary: e3, overflow: t3 }) => e3 < 5 ? e3 : 5 === e3 && 0 === t3 ? 5 : 4;
var De = gt(((t3) => {
  let a2 = se();
  return a2?.appearance.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(de, { ...t3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ce, {}) }) : null;
}))`
  margin-bottom: 16px;
`;

export {
  xe,
  Ie
};
