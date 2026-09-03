import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/PrivyPluginContext-DA-yS5vO.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var s = create((() => ({})));
var o = ({ children: i2, configPlugins: a }) => ((0, import_react.useEffect)((() => {
  if (a && 0 !== a.length) return s.setState(Object.fromEntries(a.map(((t2) => [t2.id, t2])))), () => {
    s.setState(Object.fromEntries(a.map(((t2) => [t2.id, void 0]))));
  };
}), [a]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: i2 }));
var n = (t2) => s.getState()[t2];
var d = () => (0, import_react.useCallback)(((t2) => n(t2)), []);

export {
  o,
  n,
  d
};
