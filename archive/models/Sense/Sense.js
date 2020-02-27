// can't use destructuring on index.js here - causes problematic circular references
const LexemeReference = require('../LexemeReference');
const LexicalRelation = require('../LexicalRelation');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Sentence        = require('../Sentence');
const Reference       = require('../Reference');
const Tags            = require('../Tags');
const Variant         = require('../Variant');

const {
  addAbbreviation,
  addType,
  aliasLanguage,
  defineArray,
  defineProp,
  getUniqueReferences,
  simplify,
} = require('../../utilities');

/**
 * A class representing a Sense within a Lexeme
 * @alias Sense
 * @memberof dlx.module:models
 * @prop {String}          argumentStructure       An abstract representation of the argument structure of this sense, as a string.
 * @prop {MultiLangString} category                The lexical category, part of speech, or morphosyntactic class for this Lexeme. If the current lexeme is an affix or other grammatical morpheme morpheme, this field should be used to describe the category that the morpheme attaches to. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          pos                     "Part of Speech" - A shorthand for accessing the category in the default analysis language, if one is set
 * @prop {String}          defaultAnalysisLanguage The default analysis language to use for this sense
 * @prop {MultiLangString} definition              The definition for this particular sense, optionally in multiple languages. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          def                     A shorthand for accessing the definition in the default analysis language, if one is set
 * @prop {MultiLangString} derives                 If this lexeme is a derivational morpheme, this field indicates the type of lexical category, part of speech, or morphosyntactic class that is derived when this morpheme is applied. For example, the English derivational suffix ‑er would have this property set to noun. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $derives                A shorthand for accessing the definition in the default analysis language, if one is set
 * @prop {Array}           examples                A collection of examples of this sense in use. Each example is a [Sentence]{@link dlx.module:models.Sentence}.
 * @prop {MultiLangString} gloss                   A Leipzig-style gloss for this sense. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          gl                      A shorthand for accessing the gloss in the default analysis language, if one is set
 * @prop {MultiLangString} inflectionClass         If this lexeme is a root or stem, this field indicates the inflectional class that the sense takes. If this lexeme is an inflectional morpheme, this field indicates the inflectional class that the morpheme belongs to. If this lexeme is a derivational morpheme, this field indicates the inflectional class of the derived form. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $inflectionClass        A shorthand for accessing the inflection class in the default analysis language, if one is set
 * @prop {Array}           lexicalRelations        An array of lexical relations between this sense and other senses in this lexicon or other lexicons. Each item is a [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {Array}           notes                   An array of notes about this sense. Each item is a [Note]{@link dlx.module:models.Note}.
 * @prop {Array}           references              An array of bibliographic references about this particular sense. Each item is a [Reference object]{@link dlx.module:models.Reference}.
 * @prop {String}          scientificName          The scientific name for this item.
 * @prop {Array}           sources                 An array of attested sources for this sense, as strings.
 * @prop {Object}          tags                    A Map object containing tags for this Lexeme, as a [Tags object]{@link dlx.module:models.Tags}.
 * @prop {Array}           usages                  An array of appropriate usages for this sense. Examples include `formal`, `medicinal`, `informal`, etc. Each item is a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {Object}          variantOf               A reference to another sense, that this sense is a variant of. [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {Array}           variants                An array of variants of this sense. Each item is a [LexemeReference]{@link dlx.module:models.LexemeReference}.
 * @prop {MultiLangString} variantType             If this reference is to a variant of a lexeme or sense, this field can be used to specify the type of variant. Possible values might be a person's name (representing an idiolectal variant), or simply `idiolectal`, or `dialectal` (or the name of the dialect), or `rapid speech`, etc. [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $variantType            A shorthand for accessing the variant type in the default analysis language, if one is set
 *
 * @example
 * const sense = new Sense({
 *   category:   { eng: 'noun', spa: 'nomino' },
 *   definition: { eng: 'hello (a greeting)', spa: 'hola (un saludo)' },
 *   gloss:      { eng: 'hello', spa: 'hola' },
 * });
 *
 * console.log(sense.category.eng); // 'noun'
 */
class Sense {
  /**
   * Create a new Sense object
   * @param {Object} [data]                             The raw data to create this sense from. Should be formatted as a [Sense object]{@link http://developer.digitallinguistics.io/spec/schemas/Sense.html}.
   * @param {String} [data.argumentStructure]           An abstract representation of the argument structure of this sense, as a string.
   * @param {Object} [data.category]                    The lexical category, part of speech, or morphosyntactic class for this Lexeme. If the current lexeme is an affix or other grammatical morpheme morpheme, this field should be used to describe the category that the morpheme attaches to. For example, the English verb suffix `‑s` would have this this property set to `verb`, and the English derivational suffix `‑ize` would have this property set to `noun`. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {String} [data.defaultAnalysisLanguage=eng] The default analysis language for this sense, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Object} [data.definition]                  The definition for this particular sense, optionally in multiple languages. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object} [data.derives]                     If this lexeme is a derivational morpheme, this field indicates the type of lexical category, part of speech, or morphosyntactic class that is derived when this morpheme is applied. For example, the English derivational suffix ‑er would have this property set to noun. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Array}  [data.examples]                    A collection of examples of this sense in use. Each example must be formatted as a [Sentence]{@link http://developer.digitallinguistics.io/spec/schemas/Sentence.html}.
   * @param {Object} data.gloss                         A Leipzig-style gloss for this sense, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object} [data.inflectionClass]             If this lexeme is a root or stem, this field indicates the inflectional class that the sense takes. If this lexeme is an inflectional morpheme, this field indicates the inflectional class that the morpheme belongs to. If this lexeme is a derivational morpheme, this field indicates the inflectional class of the derived form. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Array}  [data.lexicalRelations]            A collection of lexical relations between this sense and other senses in this lexicon or other lexicons. Each item must be formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}.
   * @param {Array}  [data.notes]                       A collection of notes about this sense. Each item must be formatted as a [Note]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {Array}  [data.references]                  A collection of bibliographic references about this particular sense. Each item must be formatted as a [Reference object]{@link http://developer.digitallinguistics.io/spec/schemas/Reference.html}.
   * @param {String} [data.scientificName]              The scientific name for this item.
   * @param {Array}  [data.sources]                     An array of attested sources for this sense, as strings. This will often be the initials of a speaker, but could also be the abbreviation of the story the lexeme was found it, or other types of sources.
   * @param {Object} [data.tags]                        An object containing tags and their values. May also be an iterable object, whose items are arrays of tags and their values (in other words, the standard method for instantiating a new Map object; see [MDN's Map documentation]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details).
   * @param {Array}  [data.usages]                      An array of appropriate usages for this sense. Examples include `formal`, `medicinal`, `informal`, etc. Each item should be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Object} [data.variantOf]                   If this sense is a variant of another sense, a reference to the other sense should go here. For example, sometimes two speakers may use the same word with a slightly different set of senses. In American English, for instance, Coke is a specific brand of soda for most speakers, but a generic term for soda for other speakers. The generic sense would therefore be listed as a dialectal variant of the specific sense. Must be formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}.
   * @param {Array}  [data.variants]                    An array of variants of this sense. Each item must be formatted as a [LexemeReference]{@link http://developer.digitallinguistics.io/spec/schemas/LexemeReference.html}.
   * @param {Object} [data.variantType]                 If this reference is to a variant of a lexeme or sense, this field can be used to specify the type of variant. Possible values might be a person's name (representing an idiolectal variant), or simply `idiolectal`, or `dialectal` (or the name of the dialect), or `rapid speech`, etc. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Sense) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Sense constructor must be an object.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage);
    addType(this, `Sense`);

    defineProp(this, `argumentStructure`, String, data.argumentStructure);
    defineProp(this, `category`, MultiLangString, data.category || {});
    defineProp(this, `definition`, MultiLangString, data.definition || {});
    defineProp(this, `derives`, MultiLangString, data.derives);
    defineProp(this, `gloss`, MultiLangString, data.gloss || {});
    defineProp(this, `inflectionClass`, MultiLangString, data.inflectionClass);
    defineProp(this, `scientificName`, String, data.scientificName);
    defineProp(this, `tags`, Tags, data.tags || {});
    defineProp(this, `variantOf`, LexemeReference, data.variantOf);
    defineProp(this, `variantType`, MultiLangString, data.variantType);

    defineArray(this, `examples`, Sentence, data.examples);
    defineArray(this, `lexicalRelations`, LexicalRelation, getUniqueReferences(data.lexicalRelations || []));
    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `references`, Reference, data.references);
    defineArray(this, `sources`, String, data.sources);
    defineArray(this, `usages`, MultiLangString, data.usages);
    defineArray(this, `variants`, Variant, getUniqueReferences(data.variants || []));

    aliasLanguage(this, `category`, `pos`);
    aliasLanguage(this, `definition`, `def`);
    aliasLanguage(this, `derives`, `$derives`);
    aliasLanguage(this, `gloss`, `gl`);
    aliasLanguage(this, `inflectionClass`, `$inflectionClass`);
    aliasLanguage(this, `variantType`, `$variantType`);

  }

  toJSON() {
    return simplify(this, [`gloss`]);
  }

}

module.exports = Sense;
