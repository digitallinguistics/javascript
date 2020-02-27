const Allomorph       = require('../Allomorph');
const LexemeReference = require('../LexemeReference');
const LexicalRelation = require('../LexicalRelation');
const { Model }       = require('../../base');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Sentence        = require('../Sentence');
const Reference       = require('../Reference');
const Sense           = require('../Sense');
const Tags            = require('../Tags');
const Transcription   = require('../Transcription');
const Variant         = require('../Variant');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineProp,
  getUniqueReferences,
  simplify,
} = require('../../utilities');

class Features extends Tags {
  constructor(data) {

    super(data);

    if (Array.from(this.values()).some(val => typeof val !== `string`)) {
      throw new TypeError(`Feature values must be Strings`);
    }

    Object.defineProperty(this, `set`, {
      configurable: false,
      enumerable:   false,
      value:        new Proxy(this.set, {
        apply(target, context, args) {
          if (!args.every(arg => typeof arg === `string`)) {
            throw new TypeError(`Features and their values must be strings.`);
          }
          return Reflect.apply(target, context, args);
        },
      }),
      writable:     false,
    });


  }
}

/**
 * A class representing a Lexeme
 * @alias Lexeme
 * @memberof dlx.module:models
 * @extends Model
 * @prop {Array}           allomorphs              An array of allomorphs of this lexeme. See the [Allomorph]{@link dlx.module:models.Allomorph} class for more details.
 * @prop {Transcription}   citationForm            An object containing transcriptions of the citation form of this lexeme, as a [Transcription object]{@link dlx.module:models.Transcription}
 * @prop {String}          $citationForm           A shorthand for accessing citationForm in the default orthography, if one is set
 * @prop {Array}           components              An array of Lexeme References to other lexemes that are components of the current lexeme. Each item is an instance of [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {Date}            dateCreated             A Date object representing the time this lexeme was originally created
 * @prop {Date}            dateModified            A Date object representing the time this lexeme was last updated. This property is updated automatically when certain simple properties of the lexeme are changed.
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this language
 * @prop {String}          defaultOrthography      The default orthography for this language
 * @prop {Array}           examples                An array of example sentences illustrating this lexeme's uses
 * @prop {Map}             features                A Map object containing grammatical features and values for this lexeme. See the [MDN documentation on the Map object]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details about its properties and methods.
 * @prop {Array}           includedIn              An array containing references to each lexeme that the current lexeme is a component of. Each item is a [LexemeReference object]{@link dlx.module:models.LexemeReference}.
 * @prop {String}          key                     A human-readable key that uniquely identifies this lexeme or variant within its lexicon.
 * @prop {Transcription}   lemma                   The lemma form of this lexeme, as a [Transcription]{@link dlx.module:models:Transcription}
 * @prop {String}          $lemma                  A shorthand for accessing the lemma in the default orthography, if one is set
 * @prop {Array}           lexicalRelations        An array of the lexical relations that this lexeme has to other lexemes or variants.
 * @prop {MultiLangString} literalMeaning          A [MultiLangString]{@link dlx.module:models.MultiLangString} containing the literal meaning of this lexeme.
 * @prop {String}          $literalMeaning         A shorthand for accessing the literal meaning in the default analysis language, if one is set
 * @prop {MultiLangString} morphemeType            A [MultiLangString]{@link dlx.module:models.MultiLangString} containing the morpheme type for this lexeme.
 * @prop {String}          $morphemeType           A shorthand for accessing the morpheme type in the default analysis language, if one is set
 * @prop {Array}           notes                   An array of notes about this lexeme. Each note is an instance of the [Note class]{@link dlx.module:models.Note}.
 * @prop {Array}           references              An array of bibliographic references about this lexeme. Each item is an instance of the [Reference class]{@link dlx.module:models.Reference}.
 * @prop {Array}           senses                  An array of senses for this lexeme. Each item is a [Sense object]{@link dlx.module.models.Sense}.
 * @prop {Array}           sources                 An array of attested sources for this lexeme, as strings.
 * @prop {String}          syllableStructure       An abstract representation of the syllable structure of this form, e.g. `CVC`.
 * @prop {Tags}            tags                    A Map object containing tags and values for this lexeme. See the [MDN documentation on the Map object]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details about its properties and methods.
 * @prop {String}          tone                    A string representing the tonal pattern of this lexeme or variant. Examples: `HLH`, `323`, etc.
 * @prop {String}          url                     A URI where this lexeme can be accessed, as a string.
 * @prop {LexemeReference} variantOf               A [LexemeReference object]{@link dlx.module:models.LexemeReference} containing a reference to another lexeme or sense, which the current lexeme is a variant of.
 * @prop {Array}           variants                An array of variants of this lexeme. Each item is a [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {MultiLangString} variantType             If this lexeme is a variant of another lexeme or sense, this field can be used to specify the type of variant. Possible values might be a person's name (representing an idiolectal variant), or simply `idiolectal`, or `dialectal`, or the name of the dialect, or `rapid speech`, etc. This field is a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $variantType            A shorthand for accessing the variant type in the default analysis language, if one is set
 */
class Lexeme extends Model {
  /**
   * Create a new Lexeme
   * @param {Object}       [data]                             The raw data for the lexeme. See the [DLx specification for a Lexeme]{@link http://developer.digitallinguistics.io/spec/schemas/Lexeme.html} for more information on formatting Lexeme data.
   * @param {Array}        [data.allomorphs]                  An array of allomorphs. You can use the [Allomorph class]{@link dlx.module:models.Allomorph} to ensure the data is formatted correctly.
   * @param {Object}       [data.citationForm]                The citation form for this lexeme, formatted as a [Transcription]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}
   * @param {Array}        [data.components]                  An array of Lexeme References to other lexemes that are components of the current lexeme. Each item must be formatted as a [LexemeReference object]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}.
   * @param {String|Date}  [data.dateCreated]                 A date string or date object representing the time this lexeme was originally created. If none is supplied, dateCreated will be set to the current date-time.
   * @param {String|Date}  [data.dateModified]                A date string or date object representing the time this lexeme was last modified. If none is supplied, dateModified will be set to the current date-time.
   * @param {String}       [data.defaultAnalysisLanguage=eng] The default analysis language for this language, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {String}       [data.defaultOrthography=ipa]      The default orthography for this language, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Array}        [data.examples]                    An array of example sentences illustrating this lexeme's uses. Each item must be formatted as a [Sentence]{@link http://developer.digitallinguistics.io/spec/schemas/Sentence.html}.
   * @param {Object|Array} [data.features]                    An object containing grammatical features and their values. May also be a Map object.
   * @param {Array}        [data.includedIn]                  An Array of references to lexemes that have the current lexeme as a component. Each item should be formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}.
   * @param {String}       [data.key]                         A human-readable key that uniquely identifies this lexeme or variant within its lexicon. Best practice is for the key to consist of the lemma form of the word in the default orthography, and if the word is a homonym, the homonym number. However, any value is acceptable as long as it is unique within the lexicon. (Keys do not need to be unique across lexicons.) Must be formatted as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
   * @param {Object}       data.lemma                         The lemma form of this lexeme. A lemma is the particular form conventionally used to represent a particular lexeme. It may differ drastically from the citation form or headword form. For example, the form be is typically used as the lemma form of the English verb to be, with its variants am, are, is, etc. Lemmas may be represented in multiple orthographies. Do not include any leading or trailing tokens (e.g. hyphens, equal signs). Must be in the format of a [Transcription object]{@link http://developer.digitallinguistics.io/spec/schemas/Transcription.html}.
   * @param {Array}        [data.lexicalRelations]            An array of objects formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}, with an additional required "relation" property. See the [Lexeme format]{@link http://developer.digitallinguistics.io/spec/schemas/Lexeme.html} for more details.
   * @param {Object}       [data.literalMeaning]              The literal meaning of the lexeme, optionally in multiple languages. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object}       [data.morphemeType]                The type of morpheme or complex construction that this lexeme is, optionally in multiple languages. Examples: root, stem, bipartite stem, enclitic, prefix, inflected word, sentence, circumfix. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Array}        [data.notes]                       An array of notes about this lexeme. Each note should adhere to the [Note format]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {Array}        [data.references]                  An array of bibliographic references about this lexeme. Each item should adhere to the [Reference format]{@link http://developer.digitallinguistics.io/spec/schemas/Reference.html}.
   * @param {Array}        data.senses                        An array of senses for this lexeme. Each item should be formatted as a Sense object. See the [Lexeme schema]{@link http://developer.digitallinguistics.io/spec/schemas/Lexeme.html} for more details.
   * @param {Array}        [data.sources]                     An array of attested sources for this lexeme, as strings. This will often be the initials of a speaker, but could also be the abbreviation of the story the lexeme was found it, or other types of sources.
   * @param {String}       [data.syllableStructure]           An abstract representation of the syllable structure of this form, as a string, e.g. `CVC`.
   * @param {Object|Array} [data.tags]                        An object containing tags and their values. May also be an iterable object, whose items are arrays of tags and their values (in other words, the standard method for instantiating a new Map object; see [MDN's Map documentation]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details).
   * @param {String}       [data.tone]                        A string representing the tonal pattern of this lexeme or variant. Examples: `HLH`, `323`, etc.
   * @param {String}       [data.url]                         A URI where this lexeme can be accessed, as a string.
   * @param {Object}       [data.variantOf]                   When this lexeme is a variant of another lexeme, this field should contain a reference (formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}) to the other Lexeme. Lexemes may only be variants of one other Lexeme.
   * @param {Array}        [data.variants]                    An array of variants of this lexeme. Each item should be formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}, and must also have the "variantType" property specified.
   * @param {Object}       [data.variantType]                 If this lexeme is a variant of another lexeme or sense, this field can be used to specify the type of variant. Possible values might be a person's name (representing an idiolectal variant), or simply `idiolectal`, or `dialectal`, or the name of the dialect, or `rapid speech`, etc. Must be in the format of a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Lexeme) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Lexeme constructor must be an object.`);
    }

    // INSTANTIATION
    super();

    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addAbbreviation(this, `defaultOrthography`, data.defaultOrthography || `ipa`);
    addAbbreviation(this, `key`, data.key);
    addType(this, `Lexeme`);
    addURL(this, `url`, data.url);

    defineProp(this, `citationForm`, Transcription, data.citationForm);
    defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
    defineProp(this, `dateModified`, Date, data.dateModified || new Date);
    defineProp(this, `lemma`, Transcription, data.lemma || {});
    defineProp(this, `literalMeaning`, MultiLangString, data.literalMeaning);
    defineProp(this, `features`, Features, data.features || {});
    defineProp(this, `morphemeType`, MultiLangString, data.morphemeType || {});
    defineProp(this, `syllableStructure`, String, data.syllableStructure);
    defineProp(this, `tags`, Tags, data.tags || {});
    defineProp(this, `tone`, String, data.tone);
    defineProp(this, `variantOf`, LexemeReference, data.variantOf);
    defineProp(this, `variantType`, MultiLangString, data.variantType);

    defineArray(this, `allomorphs`, Allomorph, data.allomorphs);
    defineArray(this, `components`, LexemeReference, data.components);
    defineArray(this, `examples`, Sentence, data.examples);
    defineArray(this, `includedIn`, LexemeReference, getUniqueReferences(data.includedIn || []));
    defineArray(this, `lexicalRelations`, LexicalRelation, getUniqueReferences(data.lexicalRelations || []));
    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `references`, Reference, data.references);
    defineArray(this, `senses`, Sense, data.senses);
    defineArray(this, `sources`, String, data.sources);
    defineArray(this, `variants`, Variant, getUniqueReferences(data.variants || []));

    aliasLanguage(this, `literalMeaning`, `$literalMeaning`);
    aliasLanguage(this, `morphemeType`, `$morphemeType`);
    aliasLanguage(this, `variantType`, `$variantType`);
    aliasTranscription(this, `citationForm`, `$citationForm`);
    aliasTranscription(this, `lemma`, `$lemma`);

    // VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {
        target.dateModified = new Date;
        return Reflect.set(target, prop, val, proxy);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [
      `lemma`,
      `senses`,
    ]);
  }

}

module.exports = Lexeme;
