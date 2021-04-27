// deno-lint-ignore-file camelcase

import is_object from './is_object.mjs';

export default function jsonerr(optin, meta = {}/*, options = {}*/)  {

    // ----------------------------------------------------------------------------
    // no param
    // ----------------------------------------------------------------------------
    if (optin === undefined) { throw new Error("missing param"); }

    // ----------------------------------------------------------------------------
    // meta is not an object
    // ----------------------------------------------------------------------------
    if (is_object(meta) === false) { throw new Error("meta is not an object"); }

    // ----------------------------------------------------------------------------
    // ok
    // ----------------------------------------------------------------------------
    return {
        meta: meta,
        isout: false,
        iserr: true,
        err: optin
    };

}
