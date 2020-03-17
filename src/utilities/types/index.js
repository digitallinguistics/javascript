/**
 * Validation methods for various types of linguistic data and formats
 * @namespace utilities.validate
 */

import isAbbreviation from './isAbbreviation.js';
import isGlottoCode   from './isGlottoCode.js';
import isISOCode      from './isISO.js';
import isLanguageTag  from './isLanguageTag.js';

export default {
  isAbbreviation,
  isGlottoCode,
  isISOCode,
  isLanguageTag,
};
