// don't use destructuring of index.js here - causes problematic circular references
const { Model }       = require('../../base');
const Morpheme        = require('../Morpheme');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Transcription   = require('../Transcription');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineProp,
  simplify,
}   = require('../../utilities');

// checks whether the "key" property is a valid abbreviation
const checkKey = key => {
  if (!/^[(a-z)|(A-Z)|(0-9)]+\.[0-9]{1,3}\.[0-9]{1,2}$/.test(key)) {
    throw new Error(`Improperly formatted key.`);
  }
};

/**
 * A class representing a Word token
 * @alias Word
 * @memberof dlx.module:models
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this word
 * @prop {String}          defaultOrthography      The default orthography for this word
 * @prop {MultiLangString} gloss                   The Leipzig gloss for this word, as a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          gl                      A shorthand for accessing the gloss in the default analysis language, if one is set
 * @prop {String}          key                     The uniquely identifying key for this word token
 * @prop {Array}           morphemes               An array of the morphemes or components in this word token. Each item is a [Morpheme]{@link dlx.module:models.Morpheme}.
 * @prop {Array}           notes                   An array of notes about this word token. Each item is a [Note object]{@link dlx.module:models.Note}.
 * @prop {Transcription}   transcription           The transcriptions of this word token, optionally in multiple orthographies, as a [Transcription object]{@link dlx.module:models.Transcription}
 * @prop {String}          txn                     A shorthand for accesing the transcription in the default orthography, if one is set
 * @prop {MultiLangString} translation             The translations of this word token, optionally in multiple languages, as a [MultiLangString]{@link dlx.module:models.MultiLangString}. Note that the translation is not the same as a gloss. Use the translation field for free, natural language translations of a word; use the gloss field for Leipzig-style glosses only.
 * @prop {String}          tln                     A shorthand for accessing the translation in the default analysis language, if one is set
 * @prop {String}          url                     The URL where this word token can be accessed.
 *
 * @example
 * const word = new Word({
 *
 *   transcription: {
 *     spa: 'hablo',
 *     ipa: 'ablo',
 *   },
 *
 *   translation: {
 *     eng: 'I speak',
 *   },
 *
 *   morphemes: [
 *     { lexeme: 'habl' },
 *     { lexeme: 'o' },
 *   ],
 *
 * });
 *
 * console.log(word.transcription.spa); // 'hablo'
 */
class Word extends Model {
  /**
   * Create a new Word
   * @param {Object} [data]                        The raw data for this word token
   * @param {String} [data.defaultOrthography=ipa] The default orthography for this word, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Object} [data.gloss]                  The gloss for this word, in [MultiLangString format]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.json}.
   * @param {String} [data.key]                    The uniquely identifying key for this word token, as a string. The key for a sentence consists of the abbreviation of the text, a period, the number of sentence within the text, another period, and then the number of this word within the sentence (indexing starts at 1). For example, for the fourth word of the third sentence of a text with the abbreviation `A`, the key would be `A.3.4`. Keys should be unique within a corpus.
   * @param {Array}  data.morphemes                An array of the morphemes or components in this word token. Each morpheme must be formatted as a [Morpheme]{@link http://developer.digitallinguistics.io/spec/schemas/Morpheme.json}. May be an empty array.
   * @param {Array}  [data.notes]                  An array of notes about this word token. Each note must be in the [Note format]{@link http://developer.digitallinguistics.io/spec/schemas/Note.json}.
   * @param {Object} data.transcription            The transcriptions for this word token, optionally in multiple orthographies, formatted as a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.json}
   * @param {Object} [data.translation]            The translations for this word token, optionally in multiple languages, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.json}. Note that the translation is not the same as a gloss. Use the translation field for free, natural language translations of a word; use the gloss field for Leipzig-style glosses only.
   * @param {String} [data.url]                    The URL where this word token can be accessed. Must be a valid URI.
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Word) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Word constructor must be an object if present.`);
    }

    if (`key` in data) checkKey(data.key);

    // INSTANTIATION
    super();

    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addType(this, `Word`);
    addURL(this, `url`, data.url);

    defineProp(this, `gloss`, MultiLangString, data.gloss || {});
    defineProp(this, `transcription`, Transcription, data.transcription || {});
    defineProp(this, `translation`, MultiLangString, data.translation || {});

    defineArray(this, `morphemes`, Morpheme, data.morphemes);
    defineArray(this, `notes`, Note, data.notes);

    aliasLanguage(this, `gloss`, `gl`);
    aliasLanguage(this, `translation`, `tln`);
    aliasTranscription(this, `transcription`, `txn`);

    // VALIDATION FOR SETTERS
    return new Proxy(this, {
      set(target, prop, val, proxy) {
        if (prop === `key`) checkKey(val);
        return Reflect.set(target, prop, val, proxy);
      },
    });

  }

  toJSON() {
    return simplify(this, [
      `morphemes`,
      `transcription`,
    ]);
  }

}

module.exports = Word;
