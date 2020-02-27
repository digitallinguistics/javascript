const Access          = require('../Access');
const Location        = require('../Location');
const MultiLangString = require('../MultiLangString');
const Note            = require('../Note');
const Person          = require('../Person');
const Tags            = require('../Tags');

const {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  checkProp,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

// check whether the end time comes before the start time
const checkTimes = (start, end) => {

  if (!(typeof start === `number` && typeof end === `number`)) {
    throw new TypeError(`Both "startTime" and "endTime" must be Numbers.`);
  }

  if (start > end) throw new RangeError(`The value of the "endTime" property must be greater than the value of the "startTime" property.`);

};

/**
 * A class representing metadata about a media item
 * @alias Media
 * @memberof dlx.module:models
 * @prop {String}          abbreviation            An abbreviation for this media item, as a String
 * @prop {Object}          access                  An [Access object]{@link dlx.module:models.Access} describing who has permission to access this media item
 * @prop {MultiLangString} content                 A description of the content of this media file, as a [MultiLangString]{@link dlx.module:models.MultiLangString}
 * @prop {String}          $content                A shorthand for accessing the content description in the default analysis language, if one is set
 * @prop {String}          contentType             The media type of the file, as a String, e.g. `audio/wav`, `application/pdf`, `video/mpeg`, etc.
 * @prop {Object}          creator                 The person who created the media file, as a [Person object]{@link dlx.module:models.Person}
 * @prop {Date}            dateCreated             The date and optionally time that this metadata object was originally created, as a Date object. *Not* the date that the file was created (for that, see the `dateRecorded` property)
 * @prop {Date}            dateModified            The date and optionally time that this metadata object was last modified, as a Date object. *Not* the date that the file was last modified
 * @prop {Date}            dateRecorded            The date and optionally time that the file was originally recorded, photographed, or scanned, as a Date object
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this media item
 * @prop {Number}          endTime                 Within an audiovisual file, the time at which the relevant linguistic data ends, in seconds and milliseconds (`SS.MMM`)
 * @prop {String}          filename                The filename for this media item without spaces, but including the extension
 * @prop {Integer}         fileSize                The size of the file, in bytes
 * @prop {String}          format                  The format (file extension) of the media file, without a period. Examples: `wav`, `mp4`, `pdf`
 * @prop {Set}             languages               A Set of abbreviations for the languages used in this media file
 * @prop {Number}          length                  The length of the file, in seconds and milliseconds if an audio/video file (in `SS.MM` format), or pages if a document.
 * @prop {Location}        location                The location where the content in this media file was recorded or produced, as a [Location object]{@link dlx.module:models.Location}
 * @prop {String}          mediaURL                The URL where the media file can be found
 * @prop {Array}           notes                   An Array of notes about this media item. Each item is a [Note object]{@link dlx.module:models.Note}
 * @prop {String}          original                The URL for media metadata for the file that this file was originally derived from (e.g. if this file was converted from another one). This should *not* be a link to the original media file itself, but rather the media metadata object.
 * @prop {Array}           people                  An Array of people who appear in this file, each as a [Person object]{@link dlx.module:models.Person}
 * @prop {Number}          startTime               Within an audiovisual file, the time at which the relevant linguistic data starts, or the time at which an offset should be calibrated from, in seconds and milliseconds (`SS.MMM`)
 * @prop {Tags}            tags                    A Map of Tags for this media item, as a [Tags object]{@link dlx.module:models.Tags}
 * @prop {String}          url                     The URL where this media data can be retrieved. *Not* the URL of the media file itself (for that, see the `mediaURL` attribute).
 */
class Media {
  /**
   * Create a new Media metadata object
   * @param {Object}      [data]                             The data to use for this Media item
   * @param {String}      [data.abbreviation]                An abbreviation for this media item, as a String
   * @param {Object}      [data.access]                      An Object describing who has permission to access this media item, formatted as an [Access object]{@link http://developer.digitallinguistics.io/spec/schemas/Access.html}
   * @param {Object}      [data.content]                     A description of the content of this media file, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}
   * @param {String}      [data.contentType]                 The media type of the file, as a String, e.g. `audio/wav`, `application/pdf`, `video/mpeg`, etc.
   * @param {Object}      [data.creator]                     The person who created the media file, formatted as a [Person object]{@link http://developer.digitallinguistics.io/spec/schemas/Person.html}
   * @param {Date|String} [data.dateCreated]                 The date and optionally time that this metadata object was originally created, as a Date object or date string. *Not* the date that the file was created (for that, see the `dateRecorded` property)
   * @param {Date|String} [data.dateModified]                The date and optionally time that this metadata object was last modified, as a Date object or date string. *Not* the date that the file was last modified
   * @param {Date|String} [data.dateRecorded]                The date and optionally time that the file was originally recorded, photographed, or scanned, as a Date object or date string
   * @param {String}      [data.defaultAnalysisLanguage=eng] The default analysis language for this media item
   * @param {Number}      [data.endTime]                     Within an audiovisual file, the time at which the relevant linguistic data ends, in seconds and milliseconds (`SS.MMM`)
   * @param {String}      data.filename                      The filename for this media item without spaces, but including the extension
   * @param {Integer}     [data.fileSize]                    The size of the file, in bytes
   * @param {String}      [data.format]                      The format (file extension) of the media file, without a period. Examples: `wav`, `mp4`, `pdf`
   * @param {Array|Set}   [data.languages]                   A Set or Array of abbreviations for the languages used in this media file
   * @param {Number}      [data.length]                      The length of the file, in seconds and milliseconds if an audio/video file (in `SS.MM` format), or pages if a document.
   * @param {Object}      [data.location]                    The location where the content in this media file was recorded or produced, formatted as a [Location object]{@link http://developer.digitallinguistics.io/spec/schemas/Location.html}
   * @param {String}      [data.mediaURL]                    The URL where the media file can be found
   * @param {Array}       [data.notes]                       An Array of notes about this media item, each formatted as a [Note object]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}
   * @param {String}      [data.original]                    The URL for media metadata for the file that this file was originally derived from (e.g. if this file was converted from another one). This should *not* be a link to the original media file itself, but rather the media metadata object.
   * @param {Array}       [data.peole]                       An Array of people who appear in this file, each formatted as a [Person object]{@link http://developer.digitallinguistics.io/spec/schemas/Person.html}
   * @param {Number}      [data.startTime]                   Within an audiovisual file, the time at which the relevant linguistic data starts, or the time at which an offset should be calibrated from, in seconds and milliseconds (`SS.MMM`)
   * @param {Object}      [data.tags]                        A group of Tags for this media item, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}
   * @param {String}      [data.url]                         The URL where this media data can be retrieved. *Not* the URL of the media file itself (for that, see the `mediaURL` attribute).
   */
  constructor(data = {}) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Location constructor must be an Object.`);
    }

    if (!(
      (`endTime` in data && `startTime` in data) || !(`endTime` in data || `startTime` in data)
    )) {
      throw new Error(`The "startTime" and "endTime" properties must either both be absent, or both be present.`);
    }

    if (`startTime` in data || `endTime` in data) checkTimes(data.startTime, data.endTime);

    if (`fileSize` in data) checkProp(data.fileSize, `integer`, `fileSize`);

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `abbreviation`, data.abbreviation);
    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addType(this, `Media`);
    addURL(this, `mediaURL`, data.mediaURL);
    addURL(this, `original`, data.original);
    addURL(this, `url`, data.url);

    defineProp(this, `access`, Access, data.access || {});
    defineProp(this, `content`, MultiLangString, data.content || {});
    defineProp(this, `contentType`, String, data.contentType);
    defineProp(this, `creator`, Person, data.creator);
    defineProp(this, `dateCreated`, Date, data.dateCreated || new Date);
    defineProp(this, `dateModified`, Date, data.dateModified || new Date);
    defineProp(this, `dateRecorded`, Date, data.dateRecorded || new Date);
    defineProp(this, `filename`, String, data.filename || ``);
    defineProp(this, `format`, String, data.format);
    defineProp(this, `length`, Number, data.length);
    defineProp(this, `location`, Location, data.location);
    defineProp(this, `tags`, Tags, data.tags || {});

    defineArray(this, `notes`, Note, data.notes || []);
    defineArray(this, `people`, Person, data.people || []);

    aliasLanguage(this, `content`, `$content`);

    if (`endTime` in data) this.endTime     = Number(data.endTime.toFixed(3));
    if (`startTime` in data) this.startTime = Number(data.startTime.toFixed(3));

    const languages = new Set;

    // proxies languages.add for validation when new items are added
    Object.defineProperty(languages, `add`, {
      configurable: false,
      enumerable:   false,
      value:        new Proxy(languages.add, {
        apply(target, context, [val]) {
          if (typeof val !== `string`) {
            throw new TypeError(`The value to add to "languages" must be a String.`);
          }
          return Reflect.apply(target, context, [val]);
        },
      }),
      writable:     false,
    });

    // prevents `languages` from being overwritten, which would lose its proxied `add` method
    Object.defineProperty(this, `languages`, {
      configurable: false,
      enumerable:   true,
      value:        languages,
      writable:     false,
    });

    Array.from(data.languages || []).forEach(env => this.languages.add(env));

    // PROXY VALIDATION FOR SETTERS
    const handler = {
      set(target, prop, val, proxy) {

        let newVal = val;

        switch (prop) {
          case `endTime`:
            checkTimes(target.startTime, val);
            newVal = Number(val.toFixed(3));
            break;
          case `fileSize`: checkProp(val, `integer`, `fileSize`); break;
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

  anonymize() {
    if (this.people) this.people.forEach(person => person.anonymize());
  }

  toJSON() {
    const data = simplify(this, [`filename`]);
    data.languages = Array.from(this.languages);
    return data;
  }

}

module.exports = Media;
