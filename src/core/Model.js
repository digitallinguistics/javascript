/**
 * @module
 */

/**
 * A base Model class
 */
class Model {

  /**
   * Create a new Model
   * @param {Object} [data={}] The data to populate this model with
   */
  constructor(data = {}) {
    Object.assign(this, data);
  }

}

export default Model;
