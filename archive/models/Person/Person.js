const Access   = require('../Access');
const Address  = require('../Address');
const Language = require('../Language');
const Location = require('../Location');
const Note     = require('../Note');
const Tags     = require('../Tags');

const {
  addAbbreviation,
  addType,
  addURL,
  checkProp,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

class LanguageSpoken extends Language {
  constructor(data = {}) {

    if (`ageLearned` in data) checkProp(data.ageLearned, `integer`, `ageLearned`);
    if (`yearsKnown` in data) checkProp(data.yearsKnown, `integer`, `yearsKnown`);

    super(data);

    defineProp(this, `proficiency`, String, data.proficiency);

    let ageLearned;
    let yearsKnown;

    Object.defineProperties(this, {
      ageLearned: {
        configurable: true,
        enumerable:   true,
        get() { return ageLearned; },
        set(val) {
          checkProp(val, `integer`, `ageLearned`);
          ageLearned = val;
        },
      },
      yearsKnown: {
        configurable: true,
        enumerable:   true,
        get() { return yearsKnown; },
        set(val) {
          checkProp(val, `integer`, `yearsKnown`);
          yearsKnown = val;
        },
      },
    });

  }
}

/**
 * A class representing a Person
 * @alias Person
 * @memberof dlx.module:models
 * @prop {String}   abbreviation    An abbreviation for this person (typically their initials), as a String
 * @prop {Access}   access          An [Access object]{@link dlx.module:models.Access} describing who may have access to information about this person
 * @prop {Address}  address         An address for this person, as an [Address object]{@link dlx.module:models.Address}
 * @prop {Date}     birthDate       The person's birth date, as a Date object
 * @prop {Location} birthPlace      The person's place of birth, as a [Location object]{@link dlx.module.models:Location}
 * @prop {String}   email           An email for this person
 * @prop {String}   familyName      This person's family name(s) (last name(s)), as a String
 * @prop {String}   gender          This person's self-reported gender identity
 * @prop {String}   givenName       This person's given name(s) (first name(s)), including middle name(s), if any
 * @prop {Array}    languagesSpoken An array of languages that this person speaks, as [Language objects]{@link dlx.module:models.Language}, with additional (optional) `ageLearned`, `proficiency`, and `yearsKnown` properties
 * @prop {Array}    notes           An array of Notes about this person, as [Note objects]{@link dlx.module:models.Note}
 * @prop {String}   phone           A phone number for this person, as a String. NB: This property is not validated, other than checking that it is a String
 * @prop {String}   pseudonym       A pseudonym for this person, as a String
 * @prop {Array}    roles           An Array of roles that this person has in relation to the associated data, e.g. `speaker` or `transcriber`, as Strings
 * @prop {Tags}     tags            A Map object of tags for this Person, as a [Tags object]{@link dlx.module:models.Tags}
 * @prop {String}   url             The URL where this JSON data is located
 */
class Person {
  /**
   * Create a new Person
   * @param {Object}      [data]                 The data to use for this person
   * @param {String}      [data.abbreviation]    An abbreviation for this person (typically their initials), as a String
   * @param {Object}      [data.access]          An Object describing who may have access to information about this person, formatted as an [Access object]{@link http://developer.digitallinguistics.io/spec/schemas/Access.html}
   * @param {Object}      [data.address]         An address for this person, formatted as an [Address object]{@link http://developer.digitallinguistics.io/spec/schemas/Address.html}
   * @param {Date|String} [data.birthDate]       The person's birth date, as a Date object or date string
   * @param {Object}      [data.birthPlace]      The person's place of birth, formatted as a [Location object]{@link http://developer.digitallinguistics.io/spec/schemas/Location.html}
   * @param {String}      [data.email]           An email for this person. NB: Due to the allowable complexity for email addresses, this field is not validated, other than to check that it is a String.
   * @param {String}      data.familyName        This person's family name(s) (last name(s)), as a String
   * @param {String}      [data.gender]          This person's self-reported gender identity
   * @param {String}      data.givenName         This person's given name(s) (first name(s)), including middle name(s), if any
   * @param {Array}       [data.languagesSpoken] An array of languages that this person speaks, formatted as [Language objects]{@link http://developer.digitallinguistics.io/spec/schemas/Language.html}, with additional (optional) `ageLearned`, `proficiency`, and `yearsKnown` properties. See the [Person format]{@link http://developer.digitallinguistics.io/spec/schemas/Person.html} for more details.
   * @param {Array}       [data.notes]           An array of Notes about this person, formatted as [Note objects]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}
   * @param {String}      [data.phone]           A phone number for this person, as a String. NB: This property is not validated, other than checking that it is a String
   * @param {String}      [data.pseudonym]       A pseudonym for this person, as a String
   * @param {Array}       [data.roles]           An Array of roles that this person has in relation to the associated data, e.g. `speaker` or `transcriber`, as Strings
   * @param {Object}      [data.tags]            An object of tags for this Person, formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}
   * @param {String}      [data.url]             The URL where this JSON data is located
   */
  constructor(data = {}) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Location constructor must be an Object.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addAbbreviation(this, `abbreviation`, data.abbreviation);
    addType(this, `Person`);
    addURL(this, `url`, data.url);

    defineProp(this, `access`, Access, data.access || {});
    defineProp(this, `address`, Address, data.address);
    defineProp(this, `birthDate`, Date, data.birthDate);
    defineProp(this, `birthPlace`, Location, data.birthPlace);
    defineProp(this, `email`, String, data.email);
    defineProp(this, `familyName`, String, data.familyName || ``);
    defineProp(this, `gender`, String, data.gender);
    defineProp(this, `givenName`, String, data.givenName || ``);
    defineProp(this, `phone`, String, data.phone);
    defineProp(this, `pseudonym`, String, data.pseudonym);
    defineProp(this, `tags`, Tags, data.tags || {});

    defineArray(this, `languagesSpoken`, LanguageSpoken, data.languagesSpoken || []);
    defineArray(this, `notes`, Note, data.notes || []);
    defineArray(this, `roles`, String, data.roles || []);

  }

  anonymize() {
    Reflect.deleteProperty(this, `email`);
    Reflect.deleteProperty(this, `familyName`);
    Reflect.deleteProperty(this, `givenName`);
  }

  toJSON() {
    return simplify(this, [
      `familyName`,
      `givenName`,
    ]);
  }

}

module.exports = Person;
