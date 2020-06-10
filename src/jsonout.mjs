
export default function jsonout(optin: unknown, meta: Object = {}, options: Object = {})  {
    return {
        meta: meta,
        isout: true,
        iserr: false,
        out: optin
    };
}