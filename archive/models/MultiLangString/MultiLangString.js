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

export default class MultiLangString {
  constructor(data = {}) {

    Object.keys(data).forEach(validateKey);

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

}
