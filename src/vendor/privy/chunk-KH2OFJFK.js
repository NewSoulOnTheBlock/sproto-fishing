// node_modules/@privy-io/urls/dist/esm/index.mjs
var e = ({ origin: e2, path: t, query: n = {}, hash: r = {} }) => {
  let i = e2.endsWith(`/`) ? e2 : `${e2}/`, a = new URL(t, i);
  for (let [e3, t2] of Object.entries(n)) t2 !== void 0 && a.searchParams.set(e3, t2);
  let o = Object.entries(r);
  if (o.length > 0) {
    let e3 = new URLSearchParams();
    for (let [t2, n2] of o) n2 !== void 0 && e3.append(t2, n2);
    a.hash = e3.toString();
  }
  return a.href;
};

export {
  e
};
