const { isAbbr } = require('../../utilities');

// validates a key
const validateKey = key => {
  if (!isAbbr(key)) {
    throw new Error(`Each key must be an Abbreviation of a language.`);
  }
};

// validates a value
const validateString = string => {
  if (typeof string !== `string`) {
    throw new TypeError(`Each value must be a String of text in a particular language.`);
  }
};

/**
 * A class representing text in one or more languages
 * @alias MultiLangString
 * @memberof dlx.module:models
 * @extends Map

 */
class MultiLangString extends Map {
  /**
   * Create a new Multi-Language String
   * @param {Object} [data] The data for this string, formatted as a [MultiLangString specification]{@link http://developer.digitallinguistics.io/spec/schemas/MultiLangString.html}
   */
  constructor(data = {}) {

    // VALIDATION
    if (data instanceof Map) return data;

    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the MultiLangString constructor must be an object.`);
    }

    Object.keys(data).forEach(validateKey);
    Object.values(data).forEach(validateString);

    // INSTANTIATION
    super(Object.entries(data));

    // VALIDATION FOR SETTERS
    const handler = {
      get(target, prop) {
        if (target[prop] instanceof Function) return target[prop].bind(target);
        return target.has(prop) ? target.get(prop) : target[prop];
      },
      set(target, prop, val) {
        validateKey(prop);
        validateString(val);
        return target.set(prop, val);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    const data = {};
    Array.from(this.entries()).forEach(([key, val]) => { data[key] = val; });
    return data;
  }

}

module.exports = MultiLangString;
