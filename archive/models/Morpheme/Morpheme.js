const LexemeReference = require('../LexemeReference');
const { Model }       = require('../../base');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Tags            = require('../Tags');
const Transcription   = require('../Transcription');

const {
  addAbbreviation,
  addType,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

/**
 * A class representing a Morpheme Token
 * @alias Morpheme
 * @memberof dlx.module:models
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this morpheme
 * @prop {String}          defaultOrthography      The default orthography for this morpheme
 * @prop {MultiLangString} gloss                   The gloss for this morpheme, as a [MultiLangString]{@link dlx.module:models:MultiLangString}.
 * @prop {String}          gl                      A shorthand for accessing the gloss in the default analysis language, if one is set
 * @prop {Object}          lexeme                  A reference to an item in a lexicon where more information about this morpheme can be found, as a [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {Array}           notes                   An array of notes about this morpheme. Each item should be a [Note object]{@link dlx.module:models.Note}.
 * @prop {Tags}            tags                    A set of tags for this morpheme, as a [Tags object]{@link dlx.module:models.Tags}.
 * @prop {Transcription}   transcription           A transcription of this morpheme, as a [Transcription object]{@link dlx.module:models.Transcription}
 * @prop {String}          txn                     A shorthand for accessing the transcription in the default orthography, if one is set
 */
class Morpheme extends Model {
  /**
   * Create a new Morpheme
   * @param {Object} [data = {}]                        The data to use for this Morpheme Token
   * @param {String} [data.defaultAnalysisLanguage=eng] The default analysis language for this morpheme, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {String} [data.defaultOrthography=ipa]      The default orthography for this language, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Object} data.gloss                         The gloss for this morpheme, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object} [data.lexeme]                      A Lexeme Reference that points to an item in a lexicon where more information about this morpheme can be found.
   * @param {Array}  [data.notes]                       An array of notes about this Morpheme. Each note should be formatted as a [Note object]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {Object} [data.tags]                        A set of tags for this morpheme, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}.
   * @param {Object} data.transcription                 The transcription of this morpheme, formatted as a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}
   */
  constructor(data = {}) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The "data" argument must be an Object.`);
    }

    // INSTANTIATION
    super();

    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addType(this, `Morpheme`);

    defineProp(this, `gloss`, MultiLangString, data.gloss || {});
    defineProp(this, `lexeme`, LexemeReference, data.lexeme || {});
    defineProp(this, `tags`, Tags, data.tags || {});
    defineProp(this, `transcription`, Transcription, data.transcription || {});

    defineArray(this, `notes`, Note, data.notes);

    aliasLanguage(this, `gloss`, `gl`);
    aliasTranscription(this, `transcription`, `txn`);

  }

  toJSON() {
    return simplify(this, [
      `gloss`,
      `transcription`,
    ]);
  }

}

module.exports = Morpheme;
