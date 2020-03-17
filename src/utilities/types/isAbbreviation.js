import abbreviationRegExp from '../regexp/Abbreviation.js';

/**
 * Checks whether the input is a valid abbreviation.
 * @memberof utilities.validate
 * @instance
 * @param  {Any}     input The input to check
 * @return {Boolean}
 */
function isAbbreviation(input) {
  return abbreviationRegExp.test(input);
}

export default isAbbreviation;
