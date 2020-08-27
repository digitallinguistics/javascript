import Model from '../core/Model.js';

const allowedValueTypes = [`boolean`, `number`, `string`];

function validateValue(val) {
  if (!allowedValueTypes.includes(typeof val)) {
    const e = new TypeError(`The value of each tag must be a Boolean, Number, or String.`);
    e.name = `TagValueError`;
    throw e;
  }
}

/**
 * A class representing a set of tags
 * @memberof models
 * @extends Map
 */
class Tags extends Map {

  /**
   * Create a new Tags object
   * @param {Object|Map} [tags={}] A hash of tags to use for this tags object
   */
  constructor(tags = {}) {

    let data;

    if (!(tags instanceof Object)) {
      const e = new TypeError(`The tags data must be either a Map or Object.`);
      e.name = `TagsDataError`;
      throw e;
    }

    if (tags instanceof Map) data = Array.from(tags.entries());
    else data = Object.entries(tags);

    data.forEach(([, val]) => validateValue(val));

    super(data);

    Model.defineTypeProp(this, `Tags`);

  }

  set(key, val) {
    validateValue(val);
    return super.set(key, val);
  }

  toJSON() {
    return Object.fromEntries(this);
  }

}

export default Tags;
