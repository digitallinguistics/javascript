const { addType, isIterable } = require('../../utilities');

const checkStrings = arr => {
  if (!arr.every(val => typeof val === `string`)) {
    throw new TypeError(`Tags must be strings.`);
  }
};

const checkTagValues = vals => {
  if (vals.some(val => !(
    typeof val === `string`
    || typeof val === `boolean`
    || typeof val === `number`
  ))) {
    throw new TypeError(`The value of a tag must be a string, boolean, or number.`);
  }
};

/**
 * A class representing a set of Tags
 * @alias Tags
 * @extends Map
 * @memberof dlx.module:models
 *
 * @example
 * const tags = new Tags({
 *   accented:        true,
 *   sentenceFinal:     false,
 *   grammaticalRole: 'subject',
 * });
 *
 * tags.set('itemNum', 13);
 *
 * console.log(tags.get('grammaticalRole')); // 'subject'
 * console.log(tags.has('sentenceFinal'));     // true
 * console.log(tags.get('itemNum'));         // 13
 * console.log(tags.keys());                 // ['accented', 'sentenceFinal', 'grammaticalRole']
 */
class Tags extends Map {
  /**
   * Create a new Tags object. The Tags object is an instance of a Map, and so has all the standard Map methods and properties: `clear`, `delete`, `entries`, `forEach`, `get`, `has`, `keys`, `set`, `size`, and `values`.
   * @param {Object|Iterable} [data] The raw data to use for this Tags object. May either be an object of tags and their values, or an iterable object where each item is an array containing a tag and its value (the standard method of instantiating a Map object; see [MDN's Map documentation]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map} for more details.).
   */
  constructor(data = {}) {

    // VALIDATION
    if (typeof data !== `object`) {
      throw new TypeError(`The data passed to the Tags constructor must be an object.`);
    }

    if (Array.isArray(data)) {
      checkStrings(data.map(item => item[0]));
      checkTagValues(data.map(item => item[1]));
    } else if (isIterable(data)) {
      checkStrings(Array.from(data.keys()));
      checkTagValues(Array.from(data.values()));
    } else {
      checkTagValues(Object.values(data));
    }

    // INSTANTIATION
    if (isIterable(data)) super(data);
    else super(Object.entries(data));

    addType(this, `Tags`);

    Object.defineProperty(this, `set`, {
      configurable: true, // must be configurable for the "Lexeme.prototype.features" property to work
      enumerable:   false,
      value:        new Proxy(this.set, {
        apply(target, context, args) {
          if (typeof args[0] !== `string`) throw new TypeError(`Tags must be strings.`);
          return Reflect.apply(target, context, args);
        },
      }),
      writable:     false,
    });

  }

  /**
   * Returns a pure JavaScript object (POJO) for serialization into JSON using JSON.stringify(). Note that if you call JSON.stringify on a Tags object, it will call the the Tag object's toJSON() method.
   * @return {Object} The JSON representation of the Tags object, as a pure JavaScript object (POJO)
   */
  toJSON() {
    const data = {};
    Array.from(this.entries()).forEach(([key, val]) => { data[key] = val; });
    return data;
  }

}

module.exports = Tags;
