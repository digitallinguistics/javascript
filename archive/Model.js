const Emitter = require('./Emitter');

/**
 * A base Model that other models inherit from. It also has a few static methods that are useful in creating subclasses.
 * @module
 * @extends Emitter
 */
class Model extends Emitter {

  /**
   * A no-op destroy function. This method should be overwritten on the subclass with logic to delete the model from the database.
   */
  destroy() {}

  /**
   * A no-op save function. This method should be overwritten on the subclass with logic to save the model data to a database.
   */
  save() {}

  /**
   * Returns a POJO (Plain Old JavaScript Object) representation of this model
   * @return {Object}
   */
  get data() {
    return JSON.parse(this.json);
  }

  /**
   * Returns a JSON representation of this model, as a string
   * @return {String} The JSON string
   */
  get json() {
    return JSON.stringify(this.toJSON(), null, 2);
  }

}

module.exports = Model;
