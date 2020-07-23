export default function is_object(optin) {
  // https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  return !!optin && optin.constructor === Object;
}