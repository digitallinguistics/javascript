const MultiLangString = require('../MultiLangString');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  checkProp,
  defineProp,
  simplify,
} = require('../../utilities');

const props = [
  `lexeme`,
  `lexemeURL`,
  `lexicon`,
  `lexiconURL`,
  `relation`,
  `sense`,
  `variantType`,
  `$variantType`,
];

/**
 * A class representing a Lexeme Reference
 * @alias LexemeReference
 * @memberof dlx.module:models
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this lexeme reference
 * @prop {String}          lexeme                  The key (abbreviation) of the lexeme being referenced
 * @prop {String}          lexemeURL               The URL of the referenced lexeme. Must be a valid URI.
 * @prop {String}          lexicon                 The key (abbreviation) of the lexicon being referenced
 * @prop {String}          lexiconURL              The URL of the referenced lexicon. Must be a valid URI.
 * @prop {String}          relation                The type of relation that holds between this item and the referenced lexeme
 * @prop {Integer}         sense                   The index of the sense being referenced
 * @prop {MultiLangString} variantType             The type of variant that the referenced lexeme is. A [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $variantType            A shorthand for accessing the variant type in the default analysis language, if one is set
 *
 * @example
 * const ref = new LexemeReference('calle1');
 *
 * console.log(ref.lexeme); // calle1
 *
 * @example
 * const ref = new LexemeReference({
 *   lexeme:  'calle1',
 *   lexicon: 'spanish',
 * });
 *
 * console.log(ref.lexeme); // calle1
 */
class LexemeReference {
  /**
   * Create a new Lexeme Reference.
   * @param {Object|String} [data]                             The data to use for the Lexeme Reference. If the data is a string, that string will become the "lexeme" property, indicating the key of the referenced lexeme. Otherwise an object must be passed containing a "lexeme" property.
   * @param {String}        [data.defaultAnalysisLanguage=eng] The default analysis language for this lexeme reference, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {String}        data.lexeme                        The key (abbreviation) of the lexeme being referenced
   * @param {String}        [data.lexemeURL]                   The URL of the referenced lexeme. Must be a valid URI.
   * @param {String}        [data.lexicon]                     The key (abbreviation) of the lexicon being referenced
   * @param {String}        [data.lexiconURL]                  The URL of the referenced lexicon. Must be a valid URI.
   * @param {String}        [data.relation]                    A string indicating the type of relationship between the current item and the referenced lexeme. This property is required when the reference is being used in the "lexicalRelations" property of the Lexeme.
   * @param {Integer}       [data.sense]                       The number of the sense being reference (i.e. its index in the senses array). Note that the senses array is zero-indexed.
   * @param {Object}        [data.variantType]                 The type of variant that the referenced lexeme is. Must be formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   */
  constructor(data = ``) {

    // VALIDATION
    if (data && typeof data !== `object` && typeof data !== `string`) {

      throw new TypeError(`The data passed to the LexemeReference constructor must be an object or string.`);

    } else if (typeof data === `object`) {

      if (`sense` in data) checkProp(data.sense, `integer`, `sense`);

    }

    // INSTANTIATION
    addAbbreviation(this, `defaultAnalysisLanguage`);
    addAbbreviation(this, `lexeme`);
    addAbbreviation(this, `lexicon`);
    addAbbreviation(this, `relation`);
    addType(this, `LexemeReference`);
    addURL(this, `lexemeURL`);
    addURL(this, `lexiconURL`);
    defineProp(this, `variantType`, MultiLangString);

    if (typeof data === `string`) {
      this.lexeme = data;
    } else if (typeof data === `object`) {
      this.lexeme = data.lexeme || ``;
      if (`defaultAnalysisLanguage` in data) this.defaultAnalysisLanguage = data.defaultAnalysisLanguage || `eng`;
      if (`lexemeURL` in data) this.lexemeURL     = data.lexemeURL;
      if (`lexicon` in data) this.lexicon         = data.lexicon;
      if (`lexiconURL` in data) this.lexiconURL   = data.lexiconURL;
      if (`sense` in data) this.sense             = data.sense;
      if (`relation` in data) this.relation       = data.relation;
      if (`variantType` in data) this.variantType = data.variantType;
    }

    aliasLanguage(this, `variantType`, `$variantType`);

    // VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {
        if (!props.includes(prop)) return;
        else if (prop === `sense`) checkProp(val, `integer`, `sense`);
        return Reflect.set(target, prop, val, proxy);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [`lexeme`]);
  }

}

module.exports = LexemeReference;
