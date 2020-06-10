export default function jsonerr(optin, meta = {}, options = {}) {
  return {
    meta: meta,
    isout: false,
    iserr: true,
    err: optin
  };
}