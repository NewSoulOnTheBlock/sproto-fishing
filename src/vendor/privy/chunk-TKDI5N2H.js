import {
  w
} from "./chunk-2MR7ZHQH.js";
import {
  v
} from "./chunk-RPCD4HAF.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/ScreenLayout-BZAQ9cdJ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var n = ({ primaryCta: n2, secondaryCta: i, helpText: d, footerText: o, watermark: c = true, children: s, ...m }) => {
  let h = n2 || i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [n2 && (() => {
    let { label: e2, ...r2 } = n2, a = r2.variant || "primary";
    return (0, import_jsx_runtime.jsx)(v, { ...r2, variant: a, style: { width: "100%", ...r2.style }, children: e2 });
  })(), i && (() => {
    let { label: e2, ...r2 } = i, a = r2.variant || "secondary";
    return (0, import_jsx_runtime.jsx)(v, { ...r2, variant: a, style: { width: "100%", ...r2.style }, children: e2 });
  })()] }) : null;
  return (0, import_jsx_runtime.jsxs)(w, { id: m.id, className: m.className, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Header, { ...m }), s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Body, { children: s }) : null, d || h || c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w.Footer, { children: [d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.HelpText, { children: d }) : null, h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Actions, { children: h }) : null, c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Watermark, {}) : null] }) : null, o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.FooterText, { children: o }) : null] });
};

export {
  n
};
