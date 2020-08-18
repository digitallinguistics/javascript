/**
 * A base Model class. Most other models are instances of this base Model.
 * @memberof core
 */
class Model {

  /**
   * A utility function to define an array property on a class which ensures that each item in the array is an instance of the provided class/model whenever the property is set to a new array. This method does **not** prevent users from adding new items to the array which are not instances of the class. Use the Collection object to obtain this behavior. **NOTE:** _This method may only be called inside a class constructor. The private property (`#propName`) must also be defined on the class._
   * @param  {Object} object   The object to define the property on
   * @param  {String} propName The name of the property to define on the object
   * @return {Object}          Returns the original object with the new property added
   */
  static defineArrayProp(object, propName, ItemModel) {

    Object.defineProperty(object, propName, {
      configurable: true,
      enumerable:   true,
      get() {
        return this[`#${propName}`];
      },
      set(val) {
        this[`#${propName}`] = val;
        this[`#${propName}`].forEach((data, i, arr) => {
          arr[i] = new ItemModel(data); // eslint-disable-line no-param-reassign
        });
      },
    });

  }

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
