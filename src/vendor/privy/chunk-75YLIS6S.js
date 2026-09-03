// node_modules/@privy-io/react-auth/dist/esm/id-UqEwL2BI.mjs
var s = ({ address: n, nonce: o }) => `${window.location.host} wants you to sign in with your Solana account:
${n}

${`You are proving you own ${n}.`}

URI: ${window.location.origin}
Version: 1
Chain ID: mainnet
Nonce: ${o}
Issued At: ${(/* @__PURE__ */ new Date()).toISOString()}
Resources:
- https://privy.io`;
var a = Symbol("solana-funding-plugin");
var i = Symbol("solana-ledger-plugin");

export {
  s,
  a,
  i
};
