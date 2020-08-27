import isAbbreviation  from '../utilities/types/isAbbreviation.js';
import isGlottoCode    from '../utilities/types/isGlottoCode.js';
import isISOCode       from '../utilities/types/isISO.js';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Tags            from './Tags.js';

/**
 * Validates a language abbreviation. Throws a type error if the input is not a valid abbreviation.
 * @param {Any} input The input to validate
 * @memberof models.Language
 * @inner
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
 * @memberof models.Language
 * @inner
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
 * @memberof models.Language
 * @inner
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
 * @prop {String}                 abbreviation - The abbreviation for this language
 * @prop {String}                 glottolog    - The Glottocode for this language
 * @prop {String}                 iso          - The ISO 639-3 code for this language
 * @prop {models.MultiLangString} name         - The name of this language
 * @prop {models.Tags}            tags         - The tags for this language
 * @prop {String}                 type         - "Language"
 */
class Language extends Model {

  /**
   * Create a new Language
   * @param {Object}            [data={}]           The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   * @param {String}            [data.abbreviation] An abbreviation for this Language. Must be a valid DLx Abbreviation string.
   * @param {String}            [data.glottolog]    The Glottolog Code for this language.
   * @param {String}            [data.iso]          The ISO 639-3 code for this language.
   * @param {Map|Object|String} [data.name]         The name of this language. May be a string if English, an Object formatted as a [MultiLangString]{@link https://format.digitallinguistics.io/schemas/MultiLangString.html}, or a Map of language tags => transcriptions.
   * @param {Map|Object}        [data.tags]         A Map or Object of tags for this Language, formatted as a [DLx Tags object]{@link https://format.digitallinguistics.io/schemas/Tags.html}.
   */
  constructor(data = {}) {

    super(data);

    // Property Definitions

    Model.defineValidatedProp(this, `abbreviation`, validateAbbreviation);
    Model.defineValidatedProp(this, `glottolog`, validateGlottoCode);
    Model.defineValidatedProp(this, `iso`, validateISOCode);
    Model.defineTypeProp(this, `Language`);
    Model.defineModelProp(this, `name`, MultiLangString);
    Model.defineModelProp(this, `tags`, Tags);

    // Initialization

    Object.assign(this, data);

    this.name = this.name ?? new MultiLangString;

  }

}

export default Language;
