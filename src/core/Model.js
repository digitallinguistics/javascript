/**
 * A base Model class. Most other models are instances of this base Model.
 * @memberof core
 */
class Model {

  /**
   * A utility function to define a property on a class which must always be an instance of a certain class. **NOTE:** _This method may only be called inside a class constructor. The private property (`#propName`) must also be defined on the class._
   * @param {Object}   object    The object to define the property on
   * @param {String}   propName  The name of the property to define on the object
   * @param {Function} ItemModel The class to use for this property. Every time this property is set, this model will be instantiated.
   * @return {Object}            Returns the original object with the new property added
   */
  static defineModelProp(object, propName, ItemModel) {

    Object.defineProperty(object, propName, {
      configurable: true,
      enumerable:   true,
      get() {
        return this[`#${propName}`];
      },
      set(val) {
        this[`#${propName}`] = new ItemModel(val);
      },
    });

  }

}

export default Model;
