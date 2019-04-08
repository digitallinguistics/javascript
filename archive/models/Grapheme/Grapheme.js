const { addType, defineArray, defineProp, simplify } = require('../../utilities');

const props = [
  `allographs`,
  `form`,
  `name`,
  `pronunciations`,
];

/**
 * A class representing a grapheme
 * @alias Grapheme
 * @memberof dlx.module:models
 * @prop {Array}  allographs     An Array of all the allographs (graphical / writing variants) of the current grapheme
 * @prop {String} form           The written form of this grapheme
 * @prop {String} name           The name of this grapheme (if any), as a String
 * @prop {Array}  pronunciations An array of pronunciations of this grapheme, in IPA, as Strings
 */
class Grapheme {
  /**
   * Create a new Grapheme
   * @param {Object} [data]                The data to use for this Grapheme object
   * @param {Array}  [data.allographs]     An Array of all the allographs (graphical / writing variants) of the current grapheme, as Strings
   * @param {String} data.form             The written form of this grapheme, as a String
   * @param {Object} [data.name]           The name of this grapheme (if any), as a String
   * @param {Array}  [data.pronunciations] An array of pronunciations of this grapheme, in IPA, as Strings
   */
  constructor(data = {}) {

    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Grapheme constructor must be an Object.`);
    }

    addType(this, `Grapheme`);

    defineProp(this, `form`, String, data.form || ``);
    defineProp(this, `name`, String, data.name || ``);

    defineArray(this, `allographs`, String, data.allographs);
    defineArray(this, `pronunciations`, String, data.pronunciations);

    const handler = {
      set(target, prop, val, proxy) {
        if (!props.includes(prop)) return false;
        return Reflect.set(target, prop, val, proxy);
      },
    };

    return new Proxy(this, handler);

  }

  toJSON() {
    return simplify(this, [`form`]);
  }

}

module.exports = Grapheme;
