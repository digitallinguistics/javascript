/**
 * @module models.Language
 */

import isISOCode       from '../utilities/validate/isISO.js';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

/**
 * Validates an ISO 639-3 language code. Throws a type error if the input is not a valid ISO 639-3 code.
 * @param {Any} input The input to validate
 */
function validateISOCode(input) {
  if (!isISOCode(input)) {
    const e = new TypeError(`The language ISO 639-3 Code must be a vaild ISO code.`);
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
   * The name of this language, as a [MultiLangString]{@link models.MultiLangString}
   * @name models.Language#name
   * @type {Map}
   */
  #name;

  /**
  * The ISO 639-3 Code for this Language.
  * @name models.Language#iso
  * @type {string}
  */
  #iso;

  /**
   * Create a new Language
   * @param {Object} [data={}] The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   */
  constructor(data = {}) {

    super(data);

    Object.defineProperties(this, {

      iso: {
        configurable: true,
        enumerable:   true,
        get() {
          return this.#iso;
        },
        set(val) {
          validateISOCode(val);
          this.#iso = new String(val); // eslint-disable-line no-new-wrappers
        },
      },

      name: {
        configurable: true,
        enumerable:   true,
        get() {
          return this.#name;
        },
        set(val) {
          this.#name = new MultiLangString(val);
        },
      },

    });

    this.name = data.name;
    if (`iso` in data) this.iso = data.iso;

  }

}

export default Language;
