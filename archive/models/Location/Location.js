const Access          = require('../Access');
const Address         = require('../Address');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Reference       = require('../Reference');
const Tags            = require('../Tags');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

/**
 * A class representing a Location
 * @alias Location
 * @memberof dlx.module:models
 * @prop {String}          abbreviation            An abbreviation for this location, as a String.
 * @prop {Access}          access                  An Object describing the access protocols for this location, as an [Access object]{@link dlx.module:models.Access}.
 * @prop {Address}         address                 An Object describing a postal address for this location, as an [Address object]{@link dlx.module:models.Address}.
 * @prop {Date}            dateCreated             The date and optionally time that this Location data was originally created, as a Date object.
 * @prop {Date}            dateModified            The date and optionally time that this Location data was last modified, as a Date object.
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this location
 * @prop {Object}          geoJSON                 A GeoJSON Object containing geospatial data about this location
 * @prop {MultiLangString} name                    The name of this location, as a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $name                   A shorthand for accessing the name of this location in the default analysis language, if one is set
 * @prop {Array}           notes                   An array of notes about this location. Each item is a [Note object]{@link dlx.module:models.Note}.
 * @prop {Array}           references              An array of bibliographic freferences about this location. Each item is a [Reference object]{@link dlx.module:models.Reference}.
 * @prop {Tags}            tags                    A Map object containing tags for this location, as a [Tags object]{@link dlx.module:models.Tags}.
 * @prop {String}          url                     The URL where this location data can be downloaded in JSON format.
 */
class Location {
  /**
   * Create a new Location
   * @param {Object}        [data]                             The data to use for this Location object
   * @param {String}        [data.abbreviation]                An abbreviation for this location, formatted as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Object}        [data.access]                      An Object describing the access protocols for this location, formatted as an [Access object]{@link http://developer.digitallinguistics.io/spec/schemas/Access.html}.
   * @param {Object}        [data.address]                     An Object describing a postal address for this location, formatted as an [Address]{@link http://developer.digitallinguistics.io/spec/schemas/Address.html}.
   * @param {Object|String} [data.dateCreated]                 The date and optionally time that this Location data was originally created, as a Date object or date string.
   * @param {Object|String} [data.dateModified]                The date and optionally time that this Location data was last modified, as a Date object or date string.
   * @param {String}        [data.defaultAnalysisLanguage=eng] The default analysis language for this location, as an [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/Abbreviation.html}.
   * @param {Object}        [data.geoJSON]                     A GeoJSON Object containing geospatial data about this location. Must be formatted as valid [GeoJSON]{@link http://geojson.org/}.
   * @param {Object}        data.name                          The name of this Location, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   * @param {Array}         [data.notes]                       An array of notes about this location. Each item should be formatted as a [Note object]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {Array}         [data.references]                  An array of bibliographic references about this location. Each item should be formatted as a [Reference object]{@link http://developer.digitallinguistics.io/spec/schemas/Reference.html}.
   * @param {Object}        [data.tags]                        An Object or Map containing tags for this location, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}.
   * @param {String}        [data.url]                         A URL where the JSON data for this location can be downloaded, as a URI.
   */
  constructor(data = {}) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Location constructor must be an Object.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `abbreviation`, data.abbreviation);
    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addType(this, `Location`);
    addURL(this, `url`, data.url);

    defineProp(this, `access`, Access, data.access || {});
    defineProp(this, `address`, Address, data.address);
    defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
    defineProp(this, `dateModified`, Date, data.dateModified || new Date);
    defineProp(this, `geoJSON`, Object, data.geoJSON);
    defineProp(this, `name`, MultiLangString, data.name || {});
    defineProp(this, `tags`, Tags, data.tags || {});

    defineArray(this, `notes`, Note, data.notes);
    defineArray(this, `references`, Reference, data.references);

    aliasLanguage(this, `name`, `$name`);

    // PROXY VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {
        target.dateModified = new Date;
        return Reflect.set(target, prop, val, proxy);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [`name`]);
  }

}

module.exports = Location;
