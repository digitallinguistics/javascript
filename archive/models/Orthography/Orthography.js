const Grapheme        = require('../Grapheme');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Tags            = require('../Tags');

const {
  addAbbreviation,
  addType,
  aliasLanguage,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

/**
 * A class representing an Orthography
 * @alias Orthography
 * @memberof dlx.module:models
 * @prop {String}          abbreviation            An abbreviation for this orthography. This abbreviation will be used as the key for this orthography in any MultiLangString objects.
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this orthography
 * @prop {Array}           graphemes               An Array of Graphemes in this orthography, as Grapheme objects (see the [Orthography schema]{@link http://developer.digitallinguistics.io/spec/schemas/Orthography.html} for more details). Do not include punctuation characters.
 * @prop {MultiLangString} name                    The name of this orthography, as a [MultiLangString]{@link dlx.module:models.MultiLangString}
 * @prop {String}          $name                   A shorthand for accessing the name in the default analysis language, if one is set
 * @prop {Array}           notes                   An Array of notes about this orthography, as [Note objects]{@link dlx.module:models.Note}
 * @prop {Array}           punctuation             An Array of punctuation characters used by this orthography, as Strings
 * @prop {Tags}            tags                    Tags for this morpheme, as a [Tags object]{@link dlx.module:models.Tags}
 */
class Orthography {
  /**
   * Create a new Orthography
   * @param {Object}     [data]                             The data to use for this Orthography
   * @param {String}     data.abbreviation                  An abbreviation for this orthography, formatted as an [abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}
   * @param {String}     [data.defaultAnalysisLanguage=eng] The default analysis language for this orthography, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Array}      data.graphemes                     An array of Graphemes in this orthography, each formatted as a Grapheme object (see the [Orthography schema]{@link http://developer.digitallinguistics.io/spec/schemas/Orthography.html} for more details). Do not include punctuation characters.
   * @param {Object|Map} data.name                          The name of this orthography, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}
   * @param {Array}      [data.notes]                       An Array of notes about this orthography, formatted as [Note objects]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}
   * @param {Array}      [data.punctuation]                 An Array of punctuation characters used by this orthography, as Strings
   * @param {Object|Map} [data.tags]                        An Object or Map containing tags for this orthography, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Orthography) return data;

    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Orthography constructor must be an Object.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `abbreviation`, data.abbreviation);
    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addType(this, `Orthography`);

    defineProp(this, `name`, MultiLangString, data.name || {});
    defineProp(this, `tags`, Tags, data.tags || {});

    defineArray(this, `graphemes`, Grapheme, data.graphemes);
    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `punctuation`, String, data.punctuation);

    aliasLanguage(this, `name`, `$name`);

  }

  toJSON() {
    return simplify(this, [
      `abbreviation`,
      `graphemes`,
      `name`,
    ]);
  }

}

module.exports = Orthography;
