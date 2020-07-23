import jsonerr from './jsonerr.mjs';
import jsonout from './jsonout.mjs';
import is_object from './is_object.mjs';
const allow_keys = ["meta", "isout", "iserr", "out"];
export default function jocheck(optin, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    return jsonerr({
      "message": "missing param"
    });
  } // ----------------------------------------------------------------------------
  // first param is object
  // ----------------------------------------------------------------------------


  if (is_object(optin) === false) {
    return jsonerr({
      "message": "first param is not an object"
    });
  } // ----------------------------------------------------------------------------
  // check attributs
  // ----------------------------------------------------------------------------


  if (optin.hasOwnProperty("meta") === false) {
    return jsonerr({
      message: `missing .meta attribut`
    });
  }

  if (is_object(optin.meta) === false) {
    return jsonerr({
      message: `.meta attribut is not an object`
    });
  }

  if (optin.hasOwnProperty("isout") === false) {
    return jsonerr({
      message: `missing .isout attribut`
    });
  }

  if (optin.hasOwnProperty("iserr") === false) {
    return jsonerr({
      message: `missing .iserr attribut`
    });
  }

  if (optin.hasOwnProperty("out") === false) {
    return jsonerr({
      message: `missing .out attribut`
    });
  }

  if (optin.hasOwnProperty("err") === true) {
    return jsonerr({
      message: `.err attribut not allow`
    });
  }

  if (optin.iserr === true) {
    return jsonerr({
      message: `.iserr==true not allow`
    });
  }

  if (optin.isout === false) {
    return jsonerr({
      message: `.isout==false not allow`
    });
  } // ----------------------------------------------------------------------------
  // check unknow attributes
  // ----------------------------------------------------------------------------


  const keys = Object.keys(optin);

  for (const key of keys) {
    if (allow_keys.includes(key) === false) {
      return jsonerr({
        message: `.${key} not allow`
      });
    }
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return jsonout(true);
}