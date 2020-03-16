import isoCodeRegExp from '../regexp/languageTag.js';

/**
 * Checks whether the input is a valid ISO 639-3 language code.
 * @memberof utilities.validate
 * @instance
 * @param  {Any}     input The input to check
 * @return {Boolean}
 */
function isISOCode(input) {
  return isoCodeRegExp.test(input);
}

export default isISOCode;
