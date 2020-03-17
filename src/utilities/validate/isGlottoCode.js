import glottoCodeRegExp from '../regexp/Glottolog.js';

/**
 * Checks whether the input is a valid Glottolog language code.
 * @memberof utilities.validate
 * @instance
 * @param  {Any}     input The input to check
 * @return {Boolean}
 */
function isGlottoCode(input) {
  return glottoCodeRegExp.test(input);
}

export default isGlottoCode;
