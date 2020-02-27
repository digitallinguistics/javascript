const MultiLangString = require('../MultiLangString');

const {
  addAbbreviation,
  addType,
  aliasLanguage,
  defineProp,
  simplify,
} = require('../../utilities');

const AILLAValues = [
  `depositor control`,
  `password`,
  `public access`,
  `time limit`,
];

const ELARValues = [
  `Community Member`,
  `Researcher`,
  `Subscriber`,
  `User`,
];

const checkVal = val => {
  if (!(typeof val === `string` || typeof val === `boolean`)) {
    throw new TypeError(`Properties on the Access object must be either a Boolean or String.`);
  }
};

/**
 * A class representing a set of access protocols.
 * @alias Access
 * @memberof dlx.module:models
 * @prop {String}          AILLA                   A string describing the access rights for this resource in terms of AILLA`s access level schema.
 * @prop {String}          defaultAnalysisLanguage The default analysis language for this Access Object
 * @prop {String}          ELAR                    A string describing the access rights for this resource in terms of ELAR`s access level schema.
 * @prop {MultiLangString} notes                   Notes about access rights for this resource, as a [MultiLangString]{@link dlx.module:models.MultiLangString}.
 * @prop {String}          $notes                  A shorthand for accessing the notes in the default analysis language, if one is set
 */
class Access {
  /**
   * Create a new Access Rights object
   * @param {Object} [data]                             The data to use for this Access object
   * @param {String} [data.AILLA]                       A string describing the access rights for this resource in terms of AILLA`s access level schema. Acceptable values are "depositor control", "password", "public access", or "time limit".
   * @param {String} [data.defaultAnalysisLanguage=eng] The default analysis language for this Access Object
   * @param {String} [data.ELAR]                        A string describing the access rights for this resource in terms of ELAR`s access level schema. Acceptable values are "Community Member", "Researcher", "Subscriber", or "User".
   * @param {Object} [data.notes]                       Notes about access rights for this resource, formatted as a [MultiLangString]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}.
   */
  constructor(data = {}) {

    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Access constructor must be an Object.`);
    }

    Object.entries(data).forEach(([key, val]) => {
      if (key !== `notes`) checkVal(val);
    });

    Object.assign(this, data);

    addAbbreviation(this, `defaultAnalysisLanguage`, data.defaultAnalysisLanguage || `eng`);
    addType(this, `Access`);
    defineProp(this, `notes`, MultiLangString, data.notes || {});

    aliasLanguage(this, `notes`, `$notes`);

    let AILLA;
    let ELAR;

    Object.defineProperties(this, {

      AILLA: {
        configurable: false,
        enumerable:   true,
        get() { return AILLA; },
        set(val) {

          if (!AILLAValues.includes(val)) {
            throw new RangeError(`The AILLA access level must be one of "depositor control", "password", "public access", or "time limit".`);
          }

          AILLA = val;

        },
      },

      ELAR: {
        configurable: false,
        enumerable:   true,
        get() { return ELAR; },
        set(val) {

          if (!ELARValues.includes(val)) {
            throw new RangeError(`The ELAR access level must be one of "Community Member", "Researcher", "Subscriber", or "User".`);
          }

          ELAR = val;

        },
      },

    });

    const handler = {
      set(target, prop, val, proxy) {
        if (prop !== `notes`) checkVal(val);
        return Reflect.set(target, prop, val, proxy);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this);
  }

}

module.exports = Access;
