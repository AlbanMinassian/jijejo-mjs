export default function jsonerr(optin: unknown, meta: Object = {}, options: Object = {})  {

    return {
        meta: meta,
        isout: false,
        iserr: true,
        err: optin
    };

}
