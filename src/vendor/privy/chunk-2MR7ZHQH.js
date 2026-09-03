import {
  t
} from "./chunk-6HBDFDSF.js";
import {
  L,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  gt,
  i2 as i
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/Screen-C5Cvq4cJ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var c = gt.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`;
var d = gt.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`;
var s = gt.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
var p = gt(L)`
  margin: 0 -8px;
`;
var g = gt.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({ $colorScheme: e2 }) => "light" === e2 ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;" : "dark" === e2 ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;" : void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`;
var h2 = gt.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;
var v = gt.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`;
var u = gt.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var f = gt.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`;
var m = gt.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`;
var x = gt.div`
  background: ${({ $variant: e2 }) => {
  switch (e2) {
    case "success":
      return "var(--privy-color-success-bg, #EAFCEF)";
    case "warning":
      return "var(--privy-color-warn, #FEF3C7)";
    case "error":
      return "var(--privy-color-error-bg, #FEE2E2)";
    case "loading":
    case "logo":
      return "transparent";
    default:
      return "var(--privy-color-background-2)";
  }
}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var b = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`;
var y = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
var w = ({ children: r2, ...i3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { ...i3, children: r2 }) });
var k = gt.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`;
var E = gt(h)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`;
var j = gt.div`
  height: 100%;
  width: ${({ pct: e2 }) => e2}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`;
var F = ({ step: r2 }) => r2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { pct: Math.min(100, r2.current / r2.total * 100) }) }) : null;
w.Header = ({ title: i3, subtitle: o, icon: n, iconVariant: t2, iconLoadingStatus: a, showBack: l, onBack: c2, showInfo: d2, onInfo: g2, showClose: h3, onClose: x2, step: b2, headerTitle: y2, eyebrow: k2, ...E2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { ...E2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { backFn: l ? c2 : void 0, infoFn: d2 ? g2 : void 0, onClose: h3 ? x2 : void 0, title: y2, eyebrow: k2, closeable: h3 }), (n || t2 || i3 || o) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(v, { children: [n || t2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Icon, { icon: n, variant: t2, loadingStatus: a }) : null, !(!i3 && !o) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u, { children: [i3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { children: i3 }), o && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { children: o })] })] }), b2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, { step: b2 })] }), (w.Body = /* @__PURE__ */ import_react.default.forwardRef((({ children: r2, ...i3 }, o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, { ref: o, ...i3, children: r2 })))).displayName = "Screen.Body", w.Footer = ({ children: r2, ...i3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h2, { id: "privy-content-footer-container", ...i3, children: r2 }), w.Actions = ({ children: r2, ...i3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { ...i3, children: r2 }), w.HelpText = ({ children: r2, ...i3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { ...i3, children: r2 }), w.FooterText = ({ children: r2, ...i3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { ...i3, children: r2 }), w.Watermark = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, {}), w.Icon = ({ icon: o, variant: t2 = "subtle", loadingStatus: a }) => "logo" === t2 && o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, "string" == typeof o ? { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: o, alt: "" }) } : /* @__PURE__ */ import_react.default.isValidElement(o) ? { children: o } : { children: /* @__PURE__ */ import_react.default.createElement(o) }) : "loading" === t2 ? o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { success: a?.success, fail: a?.fail }), "string" == typeof o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { background: `url('${o}') 0 0 / contain`, height: "38px", width: "38px", borderRadius: "6px", margin: "auto", backgroundSize: "contain" } }) : /* @__PURE__ */ import_react.default.isValidElement(o) ? /* @__PURE__ */ import_react.default.cloneElement(o, { style: { width: "38px", height: "38px" } }) : /* @__PURE__ */ import_react.default.createElement(o, { style: { width: "38px", height: "38px" } })] }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { $variant: t2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { size: "64px" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { $variant: t2, children: o && ("string" == typeof o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: o, alt: "", style: { width: "32px", height: "32px", borderRadius: "6px" } }) : /* @__PURE__ */ import_react.default.isValidElement(o) ? o : /* @__PURE__ */ import_react.default.createElement(o, { width: 32, height: 32, stroke: (() => {
  switch (t2) {
    case "success":
      return "var(--privy-color-icon-success)";
    case "warning":
      return "var(--privy-color-icon-warning)";
    case "error":
      return "var(--privy-color-icon-error)";
    default:
      return "var(--privy-color-icon-muted)";
  }
})(), strokeWidth: 2 })) });
var $ = gt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`;
var z = gt.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`;
var C = gt.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`;

export {
  w
};
