const { isAbbr } = require('../../utilities');

// validates a key
const validateKey = key => {
  if (!isAbbr(key)) {
    throw new Error(`Each key must be an abbreviation for an orthography.`);
  }
};

// validates a value
const validateString = string => {
  if (typeof string !== 'string') {
    throw new TypeError(`Each value must be a transcription of the data in a particular orthography.`);
  }
};

/**
 * A class representing a transcription of data in one or more orthographies
 * @alias Transcription
 * @memberof dlx.module:models
 * @extends Map
 * @example
 * const transcription = new Transcription({
 *   spa: 'hola me llamo Daniel',
 *   ipa: 'ola me jamo dænjɛl',
 * });
 *
 * transcription.spa = 'hola me llamo Daniel';
 *
 * console.log(transcription.spa);     // hola me llamo Daniel
 * console.log(transcription.ipa);     // 'ola me jamo dænjɛl'
 */
class Transcription extends Map {
  /**
   * Create a new Transcription
   * @param {Object} [data] The data for this transcription, formatted as a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Transcription) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Transcription constructor must be an Object.`);
    }

    Object.keys(data).forEach(validateKey);
    Object.values(data).forEach(validateString);

    // INSTANTIATION
    super(Object.entries(data));

    // PROXY VALIDATION
    const handler = {
      get(target, prop) {
        if (target[prop] instanceof Function) return target[prop].bind(target);
        return target.get(prop) || target[prop];
      },
      set(target, prop, val) {
        validateKey(prop);
        validateString(val);
        return target.set(prop, val);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    const data = {};
    Array.from(this.entries()).forEach(([key, val]) => { data[key] = val; });
    return data;
  }

}

module.exports = Transcription;
