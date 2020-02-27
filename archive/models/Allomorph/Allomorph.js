const Transcription = require('../Transcription');

const {
  addAbbreviation,
  addType,
  aliasTranscription,
  defineProp,
  simplify,
} = require('../../utilities');

const defaults = {
  environments:       [],
  transcription:      {},
};

/**
 * A class representing an Allomorph of a Lexeme
 * @alias Allomorph
 * @memberof dlx.module:models
 * @prop {String}        defaultOrthography The default orthography for this allomorph
 * @prop {Set}           environments       A set of the (morpho)phonological environments for this allomorph
 * @prop {Transcription} transcription      The transcription of this allomorph, as a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}
 * @prop {String}        txn                A shorthand for accessing the transcription in the default orthography, if one is set
 * @example
 * const allomorph = new Allomorph({
 *   environments:  ['_i', '_y'],
 *   transcription: { ipa: 't͡ʃ' }
 * });
 *
 * console.log(allomorph.transcription.ipa);      // t͡ʃ
 * console.log(allomorph.environments.has('_i')); // true
 * console.log(allomorph.txn);                    // t͡ʃ
 */
class Allomorph {
  /**
   * Create a new Allomorph
   * @param {Object}        [data]                        The data to use for the Allomorph
   * @param {String}        [data.defaultOrthography=ipa] The abbreviation of the the default orthography to use, as a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Array|Set}     data.environments             An Array or Set of environments, as strings. May be empty.
   * @param {Transcription} data.transcription            A transcription of this allomorph, optionally in multiple orthographies. Do not include any leading or trailing tokens (e.g. hyphens, equal signs). Should be formatted as a [Transcription Object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}.
   */
  constructor(data = defaults) {

    // VALIDATION
    if (data instanceof Allomorph) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Allomorph constructor must be an Object.`);
    }

    if (data.environments && !(Array.isArray(data.environments) || data.environments instanceof Set)) {
      throw new TypeError(`The "environements" property must be an Array or Set.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addType(this, `Allomorph`);
    defineProp(this, `transcription`, Transcription, data.transcription || {});
    aliasTranscription(this, `transcription`, `txn`);

    const environments = new Set;

    // proxies environments.add for validation when new items are added
    Object.defineProperty(environments, `add`, {
      configurable: false,
      enumerable:   false,
      value:        new Proxy(environments.add, {
        apply(target, context, [val]) {
          if (typeof val !== `string`) {
            throw new TypeError(`The value to add to "environments" must be a String.`);
          }
          return Reflect.apply(target, context, [val]);
        },
      }),
      writable:     false,
    });

    // prevents 'environments' from being overwritten, which would lose its proxied `add` method
    Object.defineProperty(this, `environments`, {
      configurable: false,
      enumerable:   true,
      value:        environments,
      writable:     false,
    });

    Array.from(data.environments || []).forEach(env => this.environments.add(env));

  }

  toJSON() {
    const data = simplify(this, [
      `environments`,
      `transcription`,
    ]);
    data.environments = Array.from(this.environments);
    return data;
  }

}

module.exports = Allomorph;
