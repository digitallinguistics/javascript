const Note      = require('../Note');
const Reference = require('../Reference');
const Tags      = require('../Tags');

const {
  addType,
  defineArray,
  defineEnumProp,
  defineProp,
  simplify,
} = require('../../utilities');

const {
  features: {
    airstream,
    backness,
    diacritics,
    height,
    length,
    manner,
    place,
    rounding,
    voicing,
  },
} = require('../../data');

/**
 * A class representing a Phoneme, as an abstract type
 * @alias Phoneme
 * @memberof dlx.module:models
 * @prop {String}  airstream  A String describing the airstream mechanism by which this phoneme is produced. Value must be one of [dlx.data.phonologicalFeatures.airstream]{@link dlx.module:data~airstream}.
 * @prop {Array}   allophones An array of allophones of this phoneme. Each allophone is also a Phoneme object.
 * @prop {String}  backness   A String describing the backness of a vowel. Value must be one of [dlx.data.phonologicalFeatures.backness]{@link dlx.module:data~backness}.
 * @prop {Array}   features   An array of diacritical features of this phoneme, as Strings. Values must be from among the values specified in [dlx.data.phonologicalFeatures.diacritics]{@link dlx.module:data~diacritics}.
 * @prop {String}  height     A String describing the height of a vowel. Value must be one of [dlx.data.phonologicalFeatures.height]{@link dlx.module:data~height}.
 * @prop {String}  ipa        An IPA representation of this phoneme, as a String
 * @prop {String}  length     A String describing the length of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.length]{@link dlx.module:data~length}.
 * @prop {String}  manner     A String describing the manner of articulation of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.manner]{@link dlx.module:data~manner}.
 * @prop {Array}   notes      An Array of notes about this phoneme. Each item is a [Note]{@link dlx.module:models.Note}.
 * @prop {String}  place      A String describing the place of articulation of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.place]{@link dlx.module:data~place}.
 * @prop {String}  rounding   A String describing the type of rounding for this phoneme. Value must be one of [dlx.data.phonologicalFeatures.rounding]{@link dlx.module:data~rounding}.
 * @prop {Tags}    tags       A Map object containing tags for this phoneme, as a [Tags object]{@link dlx.module:models.Tags}.
 * @prop {Phoneme} target1    For diphthongs and triphthongs, use this property to specify the the first target in the pronunciation of the diphthong, as a [Phoneme]{@link dlx.module:models.Phoneme}.
 * @prop {Phoneme} target2    For diphthongs and triphthongs, use this property to specify the the second target in the pronunciation of the diphthong, as a [Phoneme]{@link dlx.module:models.Phoneme}.
 * @prop {Phoneme} target3    For diphthongs, use this property to specify the the third target in the pronunciation of the diphthong, as a [Phoneme]{@link dlx.module:models.Phoneme}.
 * @prop {String}  tone       An abstract representation of the tone of this phoneme, e.g. `H`, `13`, `falling`, etc.
 * @prop {String}  voicing    The voicing value of this phoneme. Must be one of the values in [dlx.data.phonologicalFeatures.voicing]{@link dlx.module:data~voicing}.
 */
class Phoneme {
  /**
   * Create a new Phoneme
   * @param {Object} [data = {}]       The data to use for this phoneme
   * @param {String} [data.airstream]  A String describing the airstream mechanism by which this phoneme is produced. Value must be one of [dlx.data.phonologicalFeatures.airstream]{@link dlx.module:data~airstream}.
   * @param {Object} [data.allophones] An array of allophones of this phoneme. Each allophone follows the same format as the [Phoneme object]{@link http://developer.digitallinguistics.io/spec/schemas/Phoneme.html}.
   * @param {String} [data.backness]   A String describing the backness of a vowel. Value must be one of [dlx.data.phonologicalFeatures.backness]{@link dlx.module:data~backness}.
   * @param {Array}  [data.features]   An array of diacritical features of this phoneme, as Strings. Values must be from among the values specified in [dlx.data.phonologicalFeatures.diacritics]{@link dlx.module:data~diacritics}.
   * @param {String} [data.height]     A String describing the height of a vowel. Value must be one of [dlx.data.phonologicalFeatures.height]{@link dlx.module:data~height}.
   * @param {String} data.ipa          An IPA representation of this phoneme, as a String
   * @param {String} [data.length]     A String describing the length of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.length]{@link dlx.module:data~length}.
   * @param {String} [data.manner]     A String describing the manner of articulation of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.manner]{@link dlx.module:data~manner}.
   * @param {Array}  [data.notes]      An Array of notes about this phoneme. Each item must be formatted as a [Note]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {String} [data.place]      A String describing the place of articulation of this phoneme. Value must be one of [dlx.data.phonologicalFeatures.place]{@link dlx.module:data~place}.
   * @param {String} [data.rounding]   A String describing the type of rounding for this phoneme. Value must be one of [dlx.data.phonologicalFeatures.rounding]{@link dlx.module:data~rounding}.
   * @param {Object} [data.tags]       An Object containing tags for this phoneme, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}.
   * @param {Object} [data.target1]    For diphthongs and triphthongs, use this property to specify the the first target in the pronunciation of the diphthong, formatted as a [Phoneme]{@link http://developer.digitallinguistics.io/spec/schemas/Phoneme.html}.
   * @param {Object} [data.target2]    For diphthongs and triphthongs, use this property to specify the the second target in the pronunciation of the diphthong, formatted as a [Phoneme]{@link http://developer.digitallinguistics.io/spec/schemas/Phoneme.html}.
   * @param {Object} [data.target3]    For triphthongs, use this property to specify the the third target in the pronunciation of the diphthong, formatted as a [Phoneme]{@link http://developer.digitallinguistics.io/spec/schemas/Phoneme.html}.
   * @param {String} [data.tone]       An abstract representation of the tone of this phoneme, e.g. `H`, `13`, `falling`, etc.
   * @param {String} [data.voicing]    The voicing value of this phoneme. Must be one of the values in [dlx.data.phonologicalFeatures.voicing]{@link dlx.module:data~voicing}.
   */
  constructor(data = {}) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Phoneme constructor must be an Object.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addType(this, `Phoneme`);

    defineProp(this, `ipa`, String, data.ipa || ``);
    defineProp(this, `tags`, Tags, data.tags || {});
    defineProp(this, `target1`, Phoneme, data.target1);
    defineProp(this, `target2`, Phoneme, data.target2);
    defineProp(this, `target3`, Phoneme, data.target3);
    defineProp(this, `tone`, String, data.tone);

    defineEnumProp(this, `airstream`, airstream, data.airstream);
    defineEnumProp(this, `backness`, backness, data.backness);
    defineEnumProp(this, `height`, height, data.height);
    defineEnumProp(this, `length`, length, data.length);
    defineEnumProp(this, `manner`, manner, data.manner);
    defineEnumProp(this, `place`, place, data.place);
    defineEnumProp(this, `rounding`, rounding, data.rounding);
    defineEnumProp(this, `voicing`, voicing, data.voicing);

    defineArray(this, `allophones`, Phoneme, data.allophones);
    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `references`, Reference, data.references);

    // "features" property
    const features = new Set(data.features);

    Object.defineProperty(this, `features`, {
      configurable: false,
      enumerable:   true,
      value:        features,
      writable:     false,
    });

    Object.defineProperty(this.features, `add`, {
      configurable: false,
      enumerable:   false,
      value:        new Proxy(this.features.add, {
        apply(target, context, [feature]) {
          if (!diacritics.includes(feature)) {
            throw new RangeError(`The feature value is invalid.`);
          }
          Reflect.apply(target, context, [feature]);
        },
      }),
      writable:     false,
    });

  }

  toJSON() {
    const data = simplify(this, [`ipa`]);
    if (this.features.size) data.features = Array.from(this.features);
    return data;
  }

}

module.exports = Phoneme;
