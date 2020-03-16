/* eslint-disable
  max-len,
  prefer-named-capture-group,
*/

/**
 * A regular expression for ISO 639-3 Language Codes.
 * @memberof utilities.regexp
 * @instance
 * @type {RegExp}
 */
const isoCodeRegExp = /^[a-z]{3}$/u;

export default isoCodeRegExp;
