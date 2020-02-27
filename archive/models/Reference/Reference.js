const { addType, simplify } = require('../../utilities');

/**
 * A class representing a bibliographic reference
 * @alias Reference
 * @memberof dlx.module:models
 */
class Reference {
  /**
   * Create a new bibliographic reference
   * @param {Object} [data = {}] An object representing the raw data to use for this bibliographic reference. See the [DLx specification for a Reference]{@link http://developer.digitallinguistics.io/spec/schemas/Reference.html} for more information on formatting Reference data.
   */
  constructor(data = { title: `` }) {
    Object.assign(this, data);
    addType(this, `Reference`);
  }

  toJSON() {
    return simplify(this, [`title`]);
  }

}

module.exports = Reference;
