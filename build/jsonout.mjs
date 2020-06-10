export default function jsonout(optin, meta = {}, options = {}) {
  return {
    meta: meta,
    isout: true,
    iserr: false,
    out: optin
  };
}