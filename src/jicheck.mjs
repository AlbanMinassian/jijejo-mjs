// deno-lint-ignore-file camelcase

import jsonerr from './jsonerr.mjs';
import jsonout from './jsonout.mjs';
import is_object from './is_object.mjs';
const allow_keys = ["meta", "in"];

export default function jicheck(optin/*, options = {}*/)  {

    // ----------------------------------------------------------------------------
    // no param
    // ----------------------------------------------------------------------------
    if (optin === undefined) { return jsonerr({ "message": "missing param" }) }

    // ----------------------------------------------------------------------------
    // first param is object
    // ----------------------------------------------------------------------------
    if (is_object(optin) === false) { return jsonerr({ "message": "first param is not an object" }) }

    // ----------------------------------------------------------------------------
    // check attributs
    // ----------------------------------------------------------------------------
    if (Object.prototype.hasOwnProperty.call(optin, "meta") === false) { return jsonerr({message: `missing .meta attribut`})}
    if (is_object(optin.meta) === false) { return jsonerr({message: `.meta attribut is not an object`})}
    if (Object.prototype.hasOwnProperty.call(optin, "in") === false) { return jsonerr({message: `missing .in attribut`})}

    // ----------------------------------------------------------------------------
    // check unknow attributes
    // ----------------------------------------------------------------------------
    const keys = Object.keys(optin);
    for (const key of keys) {
        if (allow_keys.includes(key) === false) { return jsonerr({message: `.${key} not allow`}) }
    }

    // ----------------------------------------------------------------------------
    // ok
    // ----------------------------------------------------------------------------
    return jsonout(true);

}
