/* eslint-disable
  max-statements,
*/

const Location        = require('../Location');
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
} = require('../../utilities');

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
 * @prop {Array}           orthographies           An Array of orthographies used by this language, each as an [Orthography Object]{@link dlx.module:models.Orthography}
 * @prop {MultiLangString} name                    The name of this Language, as a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $name                   A shorthand for accessing the name in the default analysis language, if one is set
 * @prop {Array}           phonemes                An Array of phonemes in this language, as [Phoneme Objects]{@link dlx.module:models.Phoneme}.
 * @prop {String}          type                    The type of model. Set to "Language".
 * @prop {URL}             url                     The URL where the JSON data for this language may be retrieved, as a valid URI
 */
class Language {
  constructor(data = {}) {

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

  }

}

export default Language;
