/**
 * A base Model class. Most other models are instances of this base Model.
 * @memberof core
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
