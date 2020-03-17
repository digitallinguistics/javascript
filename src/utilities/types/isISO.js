import isoCodeRegExp from '../regexp/ISO.js';

/**
 * Checks whether the input is a valid ISO 639-3 language code.
 * @memberof utilities.types
 * @instance
 * @param  {Any}     input The input to check
 * @return {Boolean}
 */
function isISOCode(input) {
  return isoCodeRegExp.test(input);
}

export default isISOCode;
