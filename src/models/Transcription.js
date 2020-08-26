import isAbbreviation from '../utilities/types/isAbbreviation.js';

/**
  * Validates an abbreviation. Throws a type error if the input is not a valid abbreviation.
  * @param {Any} input The input to validate
  * @memberof models.Transcription
  * @inner
  */
function validateAbbreviation(input) {
  if (!isAbbreviation(input)) {
    const e = new TypeError(`Each orthography key must be a valid abbreviation.`);
    e.name = `TranscriptionOrthoError`;
    throw e;
  }
}

/**
  * Validates a String for Transcription values. Throws a type error if the input is not a String.
  * @param {Any} input The input to validate
  * @memberof models.Transcription
  * @inner
  */
function validateString(input) {
  if (typeof input !== `string`) {
    const e = new TypeError(`Each piece of data in a Transcription must be a String of text in a particular orthography.`);
    e.name = `TranscriptionStringError`;
    throw e;
  }
}

/**
  * A class representing a Transcription, as a JavaScript Map Object. See the [DLx Data Format]{@link https://format.digitallinguistics.io/schemas/Transcription.html} for information about formatting Transcription objects.
  * @memberof models
  * @extends Map
  *
  * @example
  * const transcription = new Transcription({
  *   latin: `hello`,
  *   IPA:   `hɛˈloʊ`,
  * });
  *
  * console.log(transcription.get(`ipa`)); // hɛˈloʊ
  */
class Transcription extends Map {

  /**
   * Create a new Transcription
   * @param {Map|Object} [data={}] The data to use for this Transcription, as either a Map or an Object.
   */
  constructor(data = {}) {

    if (typeof data !== `object`) {
      const e = new TypeError(`The data passed to the Transcription class must be a Map or Object.`);
      e.name = `TranscriptionDataError`;
      throw e;
    }

    // eslint-disable-next-line no-param-reassign
    data = data instanceof Map ? Object.fromEntries(data) : data;

    Object.keys(data).forEach(validateAbbreviation);
    Object.values(data).forEach(validateString);

    super(Object.entries(data));

  }

  set(key, val) {
    validateAbbreviation(key);
    validateString(val);
    return super.set(key, val);
  }

  toJSON() {
    return Object.fromEntries(this);
  }

}

export default Transcription;
