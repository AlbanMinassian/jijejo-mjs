import jsonerr from './jsonerr.mjs'
import is_object from './is_object.mjs'

export default function jsonin(optin: unknown, meta: Object = {}, options: Object = {})  {

    // ----------------------------------------------------------------------------
    // no param
    // ----------------------------------------------------------------------------
    if (optin === undefined) { throw new Error("missing param"); }

    // ----------------------------------------------------------------------------
    // meta is not an object
    // ----------------------------------------------------------------------------
    if (is_object(meta) === false) { throw new Error("meta is not an object") }

    // ----------------------------------------------------------------------------
    // ok
    // ----------------------------------------------------------------------------
    return {
        meta: meta,
        in: optin
    };
}

