/**
 * @module models.Language
 */

import isAbbreviation  from '../utilities/types/isAbbreviation.js';
import isGlottoCode    from '../utilities/types/isGlottoCode.js';
import isISOCode       from '../utilities/types/isISO.js';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

/**
 * Validates a language abbreviation. Throws a type error if the input is not a valid abbreviation.
 * @param {Any} input The input to validate
 */
function validateAbbreviation(input) {
  if (!isAbbreviation(input)) {
    const e = new TypeError(`The language abbreviation may only consist of numbers and basic letters.`);
    e.name = `AbbreviationError`;
    throw e;
  }
}

/**
 * Validates a Glottolog language code. Throws a type error if the input is not a valid Glottolog code.
 * @param {Any} input The input to validate
 */
function validateGlottoCode(input) {
  if (!isGlottoCode(input)) {
    const e = new TypeError(`The Glottolog code must be formatted as a string of 4 letters followed by 4 numbers.`);
    e.name = `GlottoCodeError`;
    throw e;
  }
}

/**
 * Validates an ISO 639-3 language code. Throws a type error if the input is not a valid ISO 639-3 code.
 * @param {Any} input The input to validate
 */
function validateISOCode(input) {
  if (!isISOCode(input)) {
    const e = new TypeError(`The language ISO 639-3 Code must be a valid ISO code.`);
    e.name = `ISOCodeError`;
    throw e;
  }
}

/**
 * A class representing a language, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Language.html}
 * @memberof models
 * @extends core.Model
 */
class Language extends Model {

  /**
  * The Abbreviation for this Language.
  * @name models.Language#abbreviation
  * @type {string}
  */
  #abbreviation;

  /**
  * The ISO 639-3 Code for this Language.
  * @name models.Language#iso
  * @type {string}
  */
  #iso;

  /**
  * The Glottolog Code for this Language.
  * @name models.Language#glottolog
  * @type {string}
  */
  #glottolog;

  /**
   * The name of this language, as a [MultiLangString]{@link models.MultiLangString}
   * @name models.Language#name
   * @type {Map}
   */
  #name;

  /**
   * Create a new Language
   * @param {Object}            [data={}]           The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   * @param {String}            [data.abbreviation] An abbreviation for this Language. Must be a valid DLx Abbreviation string.
   * @param {String}            [data.glottolog]    The Glottolog Code for this language.
   * @param {String}            [data.iso]          The ISO 639-3 code for this language.
   * @param {Map|Object|String} [data.name]         The name of this language. May be a string if English, an Object formatted as a [MultiLangString]{@link https://format.digitallinguistics.io/schemas/MultiLangString.html}, or a Map of language tags => transcriptions.
   */
  constructor(data = {}) {

    super(data);

    // Property Definitions

    Model.defineModelProp(this, `name`, MultiLangString);

    Object.defineProperties(this, {

      abbreviation: {
        configurable: true,
        enumerable:   true,
        get() {
          return this.#abbreviation;
        },
        set(val) {
          if (val === undefined) return;
          validateAbbreviation(val);
          this.#abbreviation = val;
        },
      },

      glottolog: {
        configurable: true,
        enumerable:   true,
        get() {
          return this.#glottolog;
        },
        set(val) {
          if (val === undefined) return;
          validateGlottoCode(val);
          this.#glottolog = val;
        },
      },

      iso: {
        configurable: true,
        enumerable:   true,
        get() {
          return this.#iso;
        },
        set(val) {
          if (val === undefined) return;
          validateISOCode(val);
          this.#iso = val;
        },
      },

    });

    // Initialization

    Object.assign(this, data);

    this.name = this.name ?? new MultiLangString;

  }

}

export default Language;
