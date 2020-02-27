const { Model }       = require('../../base');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Tags            = require('../Tags');
const Transcription   = require('../Transcription');
const Word            = require('../Word');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

// checks whether the sentence key is properly formatted
const checkKey = key => {
  if (!/^[(a-z)|(A-Z)|(0-9)]+\.[0-9]{1,3}$/.test(key)) {
    throw new Error(`Improperly formatted key.`);
  }
};

// check whether the end time comes before the start time
const checkTimes = (start, end) => {

  if (!(typeof start === `number` && typeof end === `number`)) {
    throw new TypeError(`Both "startTime" and "endTime" must be Numbers.`);
  }

  if (start > end) throw new RangeError(`The value of the "endTime" property must be greater than the value of the "startTime" property.`);

};

/**
 * A class representing a Sentence
 * @alias Sentence
 * @memberof dlx.module:models
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this sentence
 * @prop {String}          defaultOrthography      The default orthography for this sentence
 * @prop {Number}          endTime                 The time within the accompanying media files that this sentence ends, in seconds and milliseconds (`SS.MMM`)
 * @prop {String}          key                     A key that uniquely identifies this sentence within the text, as a string.
 * @prop {String}          language                The abbreviation for the language of this sentence.
 * @prop {Array}           notes                   An array of notes about this sentence. Each note is an instance of the [Note class]{@link dlx.module:models.Note}.
 * @prop {String}          speaker                 The abbreviation of the speaker of this sentence.
 * @prop {Number}          startTime               The time within the accompanying media files that this sentence begins, in seconds in seconds and milliseconds (`SS.MMM`)
 * @prop {Tags}            tags                    A set of tags for this sentence, as a [Map object]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}.
 * @prop {Transcription}   transcript              A transcript of this sentence, as a [Transcription object]{@link dlx.module:models.Transcription}, including things like prosodic markup, overlap, pauses, and various other discourse features. For purely phonemic transcriptions, see the `transcription` property.
 * @prop {String}          tx                      A shorthand for accessing the transcript in the default orthography, if one is set
 * @prop {Transcription}   transcription           The transcriptions for this sentence, as a [Transcription object]{@link dlx.module:models.Transcription}
 * @prop {String}          txn                     A shorthand for accessing the transcription in the default orthography, if one is set
 * @prop {MultiLangString} translation             The translations for this sentence, as a [MultiLangString]{@link dlx.module:models.MultiLangString}
 * @prop {String}          tln                     A shorthand for accessing the translation in the default analysis language, if one is set
 * @prop {String}          url                     The URL where this sentence can be accessed.
 * @prop {Array}           words                   An array of word tokens in this sentence. Each item is an instance of the [Word class]{@link dlx.module:models.Word}.
 *
 * @example
 * const sentence = new Sentence({
 *
 *   transcription: {
 *     spa:  'Hola, me llamo Daniel.',
 *     ipa:  'ola me jamo dænjɛl',
 *   },
 *
 *   translation: {
 *     eng:  'Hello, my name is Daniel.',
 *     type: 'free',
 *   },
 *
 *   words: [],
 *
 * });
 */
class Sentence extends Model {
  /**
   * Create a new Sentence
   * @param {Object}     [data]                             The raw data for this sentence. See the [DLx specification for Sentences]{@link http://developer.digitallinguistics.io/spec/schemas/Sentence.html} for more information on formatting sentence data.
   * @param {String}     [data.defaultAnalysisLanguage=eng] The default analysis language for this sentence
   * @param {String}     [data.defaultOrthography=ipa]      The default orthography for this sentence, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Number}     [data.endTime]                     The time within the accompanying media files that this sentence ends, in seconds and milliseconds (`SS.MMM`)
   * @param {String}     [data.key]                         A key that uniquely identifies this sentence within the text, as a string. Must consist of a valid abbreviation, a period, and the number of this sentence within the text (index starts at 1). For example: `A.3` or `DogStory.24`.
   * @param {String}     [data.language]                    The abbreviation for the language that this sentence is in. Must be a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
   * @param {Array}      [data.notes]                       An array of notes about this sentence. Each note should adhere to the [Note format]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {String}     [data.speaker]                     The abbreviation of the speaker of this sentence. Must be a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
   * @param {Number}     [data.startTime]                   The time within the accompanying media files that this sentence begins, in seconds and millseconds (`SS.MMM`)
   * @param {Map|Object} [data.tags]                        An object containing tags and their values. May also be an iterable object, whose items are arrays of tags and their values (in other words, the standard method for instantiating a new Map object; see [MDN's Map documentation]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details).
   * @param {Object}     [data.transcript]                  A transcript of this sentence, formatted as a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}, including things like prosodic markup, overlap, pauses, and various other discourse features. For purely phonemic transcriptions, see the `transcription` property.
   * @param {Object}     data.transcription                 The transcriptions of this sentence, optionally in multiple orthographies. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object}     data.translation                   The translations of this sentence, optionally in multiple orthographies. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}. May also include a `type` property.
   * @param {String}     [data.translation.type]            The type of translation (usually `free` or `literal`).
   * @param {String}     [data.url]                         The URL where this sentence can be accessed. Must be a valid URI.
   * @param {Array}      data.words                         An array of word tokens in this sentence. Each item must be formatted as a [Word object]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Sentence) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Sentence constructor must be an object.`);
    }

    if (!(
      (`endTime` in data && `startTime` in data) || !(`endTime` in data || `startTime` in data)
    )) {
      throw new Error(`The "startTime" and "endTime" properties must either both be absent, or both be present.`);
    }

    if (`startTime` in data || `endTime` in data) checkTimes(data.startTime, data.endTime);

    if (`key` in data) checkKey(data.key);

    // INSTANTIATION
    super();

    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addAbbreviation(this, `language`, data.language);
    addAbbreviation(this, `speaker`, data.speaker);
    addType(this, `Sentence`);
    addURL(this, `url`, data.url);

    defineProp(this, `tags`, Tags, data.tags || {});
    defineProp(this, `transcript`, Transcription, data.transcript || {});
    defineProp(this, `transcription`, Transcription, data.transcription || {});
    defineProp(this, `translation`, MultiLangString, data.translation || {});

    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `words`, Word, data.words);

    aliasLanguage(this, `translation`, `tln`);
    aliasTranscription(this, `transcription`, `txn`);
    aliasTranscription(this, `transcript`, `tx`);

    if (`endTime` in data) this.endTime     = Number(data.endTime.toFixed(3));
    if (`startTime` in data) this.startTime = Number(data.startTime.toFixed(3));

    // VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {

        let newVal = val;

        switch (prop) {
          case `endTime`:
            checkTimes(target.startTime, val);
            newVal = Number(val.toFixed(3));
            break;
          case `key`: checkKey(val); break;
          case `startTime`:
            checkTimes(val, target.endTime);
            newVal = Number(val.toFixed(3));
            break;
          default: break;
        }

        return Reflect.set(target, prop, newVal, proxy);

      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [
      `transcription`,
      `translation`,
      `words`,
    ]);
  }

}

module.exports = Sentence;
