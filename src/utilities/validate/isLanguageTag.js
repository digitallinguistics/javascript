import languageTagRegExp from '../regexp/languageTag.js';

/**
 * Checks whether the input is a valid [IETF language tag]{@link https://www.w3.org/International/articles/language-tags/}.
 * @param  {Any}     input The input to check
 * @return {Boolean}
 */
function isLanguageTag(input) {
  return languageTagRegExp.test(input);
}

export default isLanguageTag;
