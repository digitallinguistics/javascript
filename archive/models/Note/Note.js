const {
  addAbbreviation,
  addType,
  defineProp,
  simplify,
} = require('../../utilities');

const actions = [
  'defineProperty',
  'deleteProperty',
  'set',
];

const props = [
  'dateCreated',
  'dateModified',
  'language',
  'noteType',
  'person',
  'text',
  'type',
];

const types = [
  `note-to-self`,
  `general`,
  `anthropology`,
  `discourse`,
  `encyclopedic`,
  `grammar`,
  `phonology`,
  `semantics`,
  `sociocultural`,
];

/**
 * A class representing a Note
 * @alias Note
 * @memberof dlx.module:models
 * @prop {Date}   dateCreated  The date this note was originally created, as a Date object
 * @prop {Date}   dateModified The date this note was last modified, as a Date object. This property is automatically updated whenever a property of the note is altered.
 * @prop {String} language     The abbreviation for the language this note is written in, as a string.
 * @prop {String} noteType     The type of note
 * @prop {String} person       The abbreviation of the person who is the source of the information in this note (not necessarily the person who wrote it).
 * @prop {String} text         The text of this note
 *
 * @example
 * const note = new Note({
 *   text:     'This is a note.',
 *   language: 'eng',
 * });
 *
 * console.log(note.text); // This is a note.
 *
 * @example
 * const note = new Note('This is a note.');
 * console.log(note.text); // 'This is a note.'
 */
class Note {
  /**
   * Create a new Note
   * @param {Object|String} [data]              The raw data for this note, either as an object or a string. If a string, the string will become the value of the "text" property of the note.
   * @param {String|Date}   [data.dateCreated]  The date this note was originally created, as either a Date object or a valid date-time string.
   * @param {String|Date}   [data.dateModified] The date this note was last modified, eitehr as a Date object or a valid date-time string.
   * @param {String}        [data.language]     The abbreviation for the language this note is written in. Must be a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
   * @param {String}        [data.noteType]     The type of note. Must be one of the following: `note-to-self`, `general`, `anthropology`, `discourse`, `encyclopedic`, `grammar`, `phonology`, `semantics`, `sociocultural`.
   * @param {String}        [data.person]       The abbreviation of the person who is the source of the information in this note (not necessarily the person who wrote it), as a string. Must be a valid [Abbreviation]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
   * @param {String}        data.text           The text of this note, as a string in a single orthography. Create a new note object to use other orthographies.
   */
  constructor(data = ``) {

    // VALIDATION
    if (data instanceof Note) return data;

    if (data && !(typeof data === `object` || typeof data === `string`)) {
      throw new TypeError(`The data passed to the Note constructor must be either an Object or a String.`);
    }

    if (typeof data === `object`) {

      if (`noteType` in data && !types.includes(data.noteType)) {
        throw new RangeError(`Invalid value for the "noteType" property.`);
      }

    }

    // INSTANTIATION
    addAbbreviation(this, `language`);
    addAbbreviation(this, `person`);
    addType(this, `Note`);

    defineProp(this, `text`, String);
    defineProp(this, `dateCreated`, Date, new Date);
    defineProp(this, `dateModified`, Date, new Date);

    if (typeof data === `string`) this.text = data;

    if (typeof data === `object`) {
      this.text = data.text || ``;
      if (`dateCreated` in data) this.dateCreated   = data.dateCreated;
      if (`dateModified` in data) this.dateModified = data.dateModified;
      if (`language` in data) this.language         = data.language;
      if (`person` in data) this.person             = data.person;
      if (`noteType` in data) this.noteType         = data.noteType;
    }

    // VALIDATION FOR SETTERS
    const handler = {};

    // updates the "dateModified" property anytime a property is added, set, or deleted
    actions.forEach(action => {
      handler[action] = (...args) => {

        const [target, prop] = args;

        if (props.includes(prop)) {
          target.dateModified = new Date;
          return Reflect[action](...args);
        }

        return false;

      };
    });

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [`text`]);
  }

}

module.exports = Note;
