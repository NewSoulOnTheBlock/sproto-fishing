import {
  i
} from "./chunk-THXMRURJ.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/are-addresses-equal/dist/esm/index.mjs
import { getAddress as e } from "viem/utils";
var t = (t3, n2) => t3 === n2 ? true : t3.startsWith(`0x`) && n2.startsWith(`0x`) && t3.length === 42 && n2.length === 42 ? e(t3) === e(n2) : false;

// node_modules/@privy-io/react-auth/dist/esm/privy-context-i6NfqAl1.mjs
var import_react = __toESM(require_react(), 1);
function r(e2) {
  return "string" == typeof e2 && /^custom:[a-zA-Z0-9_-]+$/i.test(e2);
}
var s = (e2) => !!e2.id && "privy-v2" === e2.recoveryMethod;
function l(e2) {
  return e2 ? new Date(1e3 * e2) : null;
}
function n(e2, t3) {
  return e2.slice().sort(((e3, t4) => (e3.firstVerifiedAt?.getTime() ?? 0) - (t4.firstVerifiedAt?.getTime() ?? 0))).find(((e3) => e3.type === t3));
}
var d = (e2) => e2 ? u(e2).find(((e3) => 0 === e3.walletIndex)) ?? null : null;
var u = (e2) => e2 ? m(e2, "ethereum") : [];
var m = (e2, t3) => e2.linkedAccounts.filter(((e3) => "wallet" === e3.type && "privy" === e3.walletClientType && !e3.imported && e3.chainType === t3));
var c = (e2) => e2 ? m(e2, "solana") : [];
var f = (e2) => e2 ? c(e2).find(((e3) => 0 === e3.walletIndex)) ?? null : null;
var p = (e2) => (e2?.linkedAccounts ?? []).filter(((e3) => "wallet" === e3.type && "privy" === e3.walletClientType && e3.imported && "ethereum" === e3.chainType));
var o = (e2) => (e2?.linkedAccounts ?? []).filter(((e3) => "wallet" === e3.type && e3.imported && "privy" === e3.walletClientType && "solana" === e3.chainType));
var _ = (t3, i3) => t3?.linkedAccounts.find(((t4) => "wallet" === t4.type && "privy" === t4.walletClientType && t(t4.address, i3))) || null;
var y = (t3, i3) => t3.find(((t4) => t(t4.address, i3))) || null;
var h = (e2) => {
  let t3 = d(e2), i3 = f(e2);
  return t3 && i3 && !s(i3) && s(t3) ? i3 : d(e2) ?? f(e2);
};
function b(e2) {
  if (!e2) return null;
  let t3 = (function(e3) {
    let t4 = [];
    for (let i4 of e3) {
      let e4 = i4.type;
      switch (i4.type) {
        case "wallet":
          let a2 = { id: i4.id, address: i4.address, type: i4.type, imported: i4.imported, delegated: i4.delegated, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at), chainType: i4.chain_type, walletClientType: i4.wallet_client_type, connectorType: i4.connector_type, recoveryMethod: i4.recovery_method, walletIndex: i4.wallet_index, publicKey: i4.public_key };
          t4.push(a2);
          break;
        case "smart_wallet":
          let s3 = { address: i4.address, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at), smartWalletType: i4.smart_wallet_type, smartWalletVersion: i4.smart_wallet_version };
          t4.push(s3);
          break;
        case "cross_app":
          let n2 = { type: i4.type, subject: i4.subject, embeddedWallets: i4.embedded_wallets, smartWallets: i4.smart_wallets, providerApp: { id: i4.provider_app_id }, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(n2);
          break;
        case "email":
          let d3 = { address: i4.address, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(d3);
          break;
        case "phone":
          let u3 = { number: i4.phoneNumber, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(u3);
          break;
        case "google_oauth":
          let m3 = { subject: i4.subject, email: i4.email, name: i4.name, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(m3);
          break;
        case "spotify_oauth":
          let c3 = { subject: i4.subject, email: i4.email, name: i4.name, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(c3);
          break;
        case "instagram_oauth":
          let f3 = { subject: i4.subject, username: i4.username, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(f3);
          break;
        case "twitter_oauth":
          let p3 = { subject: i4.subject, username: i4.username, name: i4.name, type: i4.type, profilePictureUrl: i4.profile_picture_url, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(p3);
          break;
        case "discord_oauth":
          let o3 = { subject: i4.subject, username: i4.username, email: i4.email, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(o3);
          break;
        case "github_oauth":
          let _3 = { subject: i4.subject, username: i4.username, name: i4.name, email: i4.email, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(_3);
          break;
        case "tiktok_oauth":
          let y3 = { subject: i4.subject, username: i4.username, name: i4.name, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(y3);
          break;
        case "line_oauth":
          let h3 = { subject: i4.subject, name: i4.name, email: i4.email, profilePictureUrl: i4.profile_picture_url, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(h3);
          break;
        case "twitch_oauth":
          let b3 = { subject: i4.subject, username: i4.username, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(b3);
          break;
        case "linkedin_oauth":
          let v3 = { subject: i4.subject, name: i4.name, email: i4.email, vanityName: i4.vanity_name, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(v3);
          break;
        case "apple_oauth":
          let k3 = { subject: i4.subject, email: i4.email, type: i4.type, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(k3);
          break;
        case "custom_auth":
          t4.push({ type: i4.type, customUserId: i4.custom_user_id, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) });
          break;
        case "farcaster":
          let A2 = { type: i4.type, fid: i4.fid, ownerAddress: i4.owner_address, displayName: i4.display_name, username: i4.username, bio: i4.bio, pfp: i4.profile_picture_url, url: i4.homepage_url, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at), signerPublicKey: i4.signer_public_key };
          t4.push(A2);
          break;
        case "passkey":
          let j2 = { type: i4.type, enrolledInMfa: i4.enrolled_in_mfa, credentialId: i4.credential_id, publicKey: i4.public_key, authenticatorName: i4.authenticator_name, createdWithDevice: i4.created_with_device, createdWithOs: i4.created_with_os, createdWithBrowser: i4.created_with_browser, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(j2);
          break;
        case "telegram":
          let w = { type: i4.type, telegramUserId: i4.telegram_user_id, firstName: i4.first_name, lastName: i4.last_name, username: i4.username, photoUrl: i4.photo_url, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
          t4.push(w);
          break;
        default:
          if (r(i4.type)) {
            let e5 = { type: i4.type, subject: i4.subject, name: i4.name, username: i4.username, email: i4.email, profilePictureUrl: i4.profile_picture_url, firstVerifiedAt: l(i4.first_verified_at), latestVerifiedAt: l(i4.latest_verified_at) };
            t4.push(e5);
            break;
          }
          console.warn(`Unrecognized account type: ${e4}. Please consider upgrading the Privy SDK.`);
      }
    }
    return t4;
  })(e2.linked_accounts), i3 = n(t3, "wallet"), a = n(t3, "smart_wallet"), s2 = n(t3, "email"), d2 = n(t3, "phone"), u2 = n(t3, "google_oauth"), m2 = n(t3, "twitter_oauth"), c2 = n(t3, "discord_oauth"), f2 = n(t3, "github_oauth"), p2 = n(t3, "spotify_oauth"), o2 = n(t3, "instagram_oauth"), _2 = n(t3, "tiktok_oauth"), y2 = n(t3, "line_oauth"), h2 = n(t3, "twitch_oauth"), b2 = n(t3, "linkedin_oauth"), v2 = n(t3, "apple_oauth"), k2 = n(t3, "farcaster"), A = n(t3, "telegram"), j = e2.mfa_methods.map((({ type: e3, verified_at: t4 }) => ({ type: e3, verifiedAt: l(t4) })));
  return { id: e2.id, createdAt: l(e2.created_at), linkedAccounts: t3, email: s2 && { address: s2?.address }, phone: d2 && { number: d2?.number }, wallet: i3 && { id: i3.id, address: i3.address, chainType: i3.chainType, walletClientType: i3.walletClientType, connectorType: i3.connectorType, recoveryMethod: i3.recoveryMethod, imported: i3.imported, delegated: i3.delegated, walletIndex: i3.walletIndex, publicKey: i3.publicKey }, smartWallet: a && { address: a.address, smartWalletType: a.smartWalletType, smartWalletVersion: a.smartWalletVersion }, google: u2 && { subject: u2.subject, email: u2.email, name: u2.name }, twitter: m2 && { subject: m2.subject, username: m2.username, name: m2.name, profilePictureUrl: m2.profilePictureUrl }, discord: c2 && { subject: c2.subject, username: c2.username, email: c2.email }, github: f2 && { subject: f2.subject, username: f2.username, name: f2.name, email: f2.email }, spotify: p2 && { subject: p2.subject, email: p2.email, name: p2.name }, instagram: o2 && { subject: o2.subject, username: o2.username }, tiktok: _2 && { subject: _2.subject, username: _2.username, name: _2.name }, line: y2 && { subject: y2.subject, name: y2.name, email: y2.email, profilePictureUrl: y2.profilePictureUrl }, twitch: h2 && { subject: h2.subject, username: h2.username }, linkedin: b2 && { subject: b2.subject, name: b2.name, email: b2.email, vanityName: b2.vanityName }, apple: v2 && { subject: v2.subject, email: v2.email }, farcaster: k2 && { fid: k2.fid, ownerAddress: k2.ownerAddress, displayName: k2.displayName, username: k2.username, bio: k2.bio, pfp: k2.pfp, url: k2.url, signerPublicKey: k2.signerPublicKey }, telegram: A && { telegramUserId: A.telegramUserId, firstName: A.firstName, lastName: A.lastName, username: A.username, photoUrl: A.photoUrl }, delegatedWallets: [], mfaMethods: j.map(((e3) => e3.type)), hasAcceptedTerms: e2.has_accepted_terms ?? false, isGuest: e2.is_guest, customMetadata: e2.custom_metadata };
}
var v = /* @__PURE__ */ (0, import_react.createContext)({ ready: false, authenticated: false, user: null, error: null, walletConnectors: null, connectWallet: i, login: i, connectOrCreateWallet: i, linkEmail: i, linkPhone: i, linkFarcaster: i, linkWallet: i, linkGoogle: i, linkTwitter: i, linkTwitch: i, linkDiscord: i, linkGithub: i, linkSpotify: i, linkInstagram: i, linkTelegram: i, linkTiktok: i, linkLine: i, linkLinkedIn: i, linkApple: i, linkPasskey: i, linkOAuth: i, logout: i, getAccessToken: i, signMessage: i, signTypedData: i, enrollInMfa: i, initEnrollmentWithSms: i, initEnrollmentWithTotp: i, initEnrollmentWithPasskey: i, promptMfa: i, init: i, submitEnrollmentWithSms: i, submitEnrollmentWithTotp: i, submitEnrollmentWithPasskey: i, unenroll: i, clear: i, submit: i, cancel: i, sendTransaction: i, signTransaction: i, setWalletPassword: i, setWalletRecovery: i, isModalOpen: false, mfaMethods: [] });
var k = () => (0, import_react.useContext)(v);

export {
  r,
  s,
  d,
  c,
  f,
  p,
  o,
  _,
  y,
  h,
  b,
  v,
  k
};
