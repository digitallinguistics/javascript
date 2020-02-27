/**
 * @module
 */

import isLanguageTag from '../utilities/validate/isLanguageTag.js';

/**
 * Validates a language tag. Throws a type error if the input is not a valid IETF language tag.
 * @param {Any} input The input to validate
 */
function validateLanguageTag(input) {
  if (!isLanguageTag(input)) {
    throw new Error(`Each language key must be a valid IETF language tag.`);
  }
}

/**
 * Validates a String for MultiLangStrings. Throws a type error if the input is not a String.
 * @param {Any} input The input to validate
 */
function validateString(input) {
  if (typeof input !== `string`) {
    throw new TypeError(`Each piece of data in a MultiLangString must be a String of text in a particular language.`);
  }
}

/**
 * A class representing a Multi-Language Text / String
 * @extends Map
 *
 * @example
 * const translation = new MultiLangString({
 *   spa: 'Hola, me llamo Daniel.',
 *   eng: 'Hello, my name is Daniel.',
 * });
 *
 * console.log(translation.get(`spa`)); // Hola, me llamo Daniel.
 */
class MultiLangString extends Map {

  /**
   * Create a new MultiLangString
   * @param {Map|Object|String} [data={}] The data to use for this MultiLangString, as either a Map, an Object, or a String. If a String is provided, it is assumed to be English.
   */
  constructor(data = {}) {

    // VALIDATE ARGUMENTS

    if (!(
      typeof data === `string`
      || typeof data === `object`
    )) {
      throw new Error(`The data passed to the MultiLangString constructor must be an Object or String.`);
    }

    // STANDARDIZE DATA

    /* eslint-disable no-param-reassign */
    if (data && typeof data === `string`) data = { eng: data };
    if (data instanceof Map) data = Object.fromEntries(data);
    /* eslint-enable no-param-reassign */

    // VALIDATE DATA

    Object.keys(data).forEach(validateLanguageTag);
    Object.values(data).forEach(validateString);

    // INSTANTIATE MODEL

    super(Object.entries(data));

  }
}

export default MultiLangString;
