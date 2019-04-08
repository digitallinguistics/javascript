const Location        = require('../Location');
const { Model }       = require('../../base');
const MultiLangString = require('../MultiLangString');
const Orthography     = require('../Orthography');
const Phoneme         = require('../Phoneme');
const Transcription   = require('../Transcription');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineProp,
  defineSet,
  simplify,
} = require('../../utilities');

const checkGlottolog = val => {
  if (!/[a-z]{4}[0-9]{4}/.test(val)) {
    throw new Error(`The Glottolog code must be formatted as a String of 4 letters followed by 4 numbers.`);
  }
};

const checkISO = val => {
  if (!/^[a-z]{3}$/.test(val)) {
    throw new Error(`The ISO code must be formatted as a 3-letter String.`);
  }
};

/**
 * A class representing a Language
 * @alias Language
 * @memberof dlx.module:models
 * @extends Model
 * @prop {String}          abbreviation            An abbreviation for this Language, as a String.
 * @prop {Set}             additionalNames         A Set of additional names for this Language, as Strings.
 * @prop {Transcription}   autonym                 The autonym for this language, as a [Transcription]{@link dlx.module:models.Transcription}
 * @prop {String}          $autonym                A shorthand for accessing the autonym in the default orthography, if one is set
 * @prop {Date}            dateCreated             The date and time that this Language object was created
 * @prop {Date}            dateModified            The date and time that this Language object was last modified. Setting any property on this object will update this property automatically.
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this language
 * @prop {String}          defaultOrthography      The default orthography for this language
 * @prop {Array}           locations               An Array of locations where this language variety is spoken, as [Location Objects]{@link dlx.module:models.Location}.
 * @prop {String}          glottolog               The Glottolog code for this language variety
 * @prop {String}          iso                     The ISO 639-3 code for this language variety
 * @prop {Array}           orthographies           An Array of orthographies used by this language, each as an [Orthography Object]{@link dlx.module:models.Orthography}
 * @prop {MultiLangString} name                    The name of this Language, as a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $name                   A shorthand for accessing the name in the default analysis language, if one is set
 * @prop {Array}           phonemes                An Array of phonemes in this language, as [Phoneme Objects]{@link dlx.module:models.Phoneme}.
 * @prop {String}          type                    The type of model. Set to "Language".
 * @prop {URL}             url                     The URL where the JSON data for this language may be retrieved, as a valid URI
 */
class Language extends Model {
  /**
   * Create a new Language
   * @param {Object}      [data]                             The data to use for this Language object
   * @param {String}      [data.abbreviation]                An abbreviation for this language, formatted as a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Set|Array}   [data.additionalNames]             A Set or Array of additional names for this Language, as Strings
   * @param {Object}      [data.autonym = {}]                The autonym for this language, optionally in multiple orthographies, formatted as a [Transcription]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}
   * @param {Date|String} [data.dateCreated = new Date]      The date and optionally time that the data for this Language object was originally created, as either a Date object or a valid date string. If none is provided, this property will be set automatically upon instantiation.
   * @param {Date|String} [data.dateModified = new Date]     The date and optionally time that the data for this Language object was last modified, as either a Date object or a valid date string. If none is provided, this property will be set automatically upon instantiation.
   * @param {String}      [data.defaultAnalysisLanguage=eng] The default analysis language for this language, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {String}      [data.defaultOrthography=ipa]      The default orthography for this language, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {String}      [data.glottolog]                   The Glottolog code for this language variety
   * @param {String}      [data.iso]                         The ISO 639-3 code for this language variety
   * @param {Array}       [data.locations = []]              An Array of locations where this language variety is spoken, each formatted as a [Location object]{@link http://developer.digitallinguistics.io/spec/schemas/Location.html}.
   * @param {Object}      [data.name]                        The name of this Language, as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Array}       [data.orthographies = []]          An Array of orthographies used by this language, each formatted as an [Orthography object]{@link http://developer.digitallinguistics.io/spec/schemas/Orthography.html}
   * @param {Array}       [data.phonemes = []]               An Array of phonemes in this language, formatted as [Phoneme objects]{@link http://developer.digitallinguistics.io/spec/schemas/Phoneme.html}.
   * @param {URL}         [data.url]                         The URL where the JSON data for this language may be retrieved, as a valid URI
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Language) return data;

    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Language constructor must be an Object.`);
    }

    if (`glottolog` in data) checkGlottolog(data.glottolog);
    if (`iso` in data) checkISO(data.iso);

    // INITIALIZATION
    super();

    Object.assign(this, data);

    addAbbreviation(this, `abbreviation`, data.abbreviation);
    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addType(this, `Language`);
    addURL(this, `url`, data.url);

    defineProp(this, `autonym`, Transcription, data.autonym || {});
    defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
    defineProp(this, `dateModified`, Date, data.dateModified || new Date);
    defineProp(this, `name`, MultiLangString, data.name || {});

    defineArray(this, `locations`, Location, data.locations);
    defineArray(this, `orthographies`, Orthography, data.orthographies);
    defineArray(this, `phonemes`, Phoneme, data.phonemes);

    defineSet(this, `additionalNames`, String, data.additionalNames);

    aliasLanguage(this, `name`, `$name`);
    aliasTranscription(this, `autonym`, `$autonym`);

    // PROXY VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {

        switch (prop) {
          case `glottolog`: checkGlottolog(val); break;
          case `iso`: checkISO(val); break;
          default: break;
        }

        target.dateModified = new Date;

        return Reflect.set(target, prop, val, proxy);

      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    const data = simplify(this, [`name`]);
    return data;
  }

}

module.exports = Language;
