import isLanguageTag from '../utilities/types/isLanguageTag.js';

/**
 * Validates a language tag. Throws a type error if the input is not a valid IETF language tag.
 * @param {Any} input The input to validate
 * @memberof models.MultiLangString
 * @inner
 */
function validateLanguageTag(input) {
  if (!isLanguageTag(input)) {
    const e = new TypeError(`Each language key must be a valid IETF language tag.`);
    e.name = `LanguageTagError`;
    throw e;
  }
}

/**
 * Validates a String for MultiLangStrings. Throws a type error if the input is not a String.
 * @param {Any} input The input to validate
 * @memberof models.MultiLangString
 * @inner
 */
function validateString(input) {
  if (typeof input !== `string`) {
    const e = new TypeError(`Each piece of data in a MultiLangString must be a String of text in a particular language.`);
    e.name = `MultiLangStringError`;
    throw e;
  }
}

/**
 * A class representing a Multi-Language Text / String, as a JavaScript Map Object. See the [DLx Data Format]{@link https://format.digitallinguistics.io/schemas/MultiLangString.html} for information about formatting Multi-Language Strings.
 * @memberof models
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
      const e = new TypeError(`The data passed to the MultiLangString constructor must be an Object or String.`);
      e.name = `MultiLangStringDataError`;
      throw e;
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

  set(key, val) {
    validateLanguageTag(key);
    validateString(val);
    return super.set(key, val);
  }

  toJSON() {
    return Object.fromEntries(this);
  }

}

export default MultiLangString;
