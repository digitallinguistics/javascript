import Collection from './Collection.js';

/**
 * A base Model class. Most other models are instances of this base Model.
 * @memberof core
 */
class Model {

  /**
   * A utility function to define an array property on a class which ensures that the array cannot be overwritten. This method does **not** prevent users from adding new items to the array which are not instances of the class. Use the Collection object to obtain this behavior._
   * @param  {Object} object   The object to define the property on
   * @param  {String} propName The name of the property to define on the object
   * @return {Object}          Returns the original object with the new property added
   */
  static defineArrayProp(object, propName, ItemModel) {

    const collection = new Collection(ItemModel);

    Object.defineProperty(object, propName, {
      configurable: true,
      enumerable:   true,
      get() {
        return collection;
      },
      set(val) {
        collection.length = 0;
        collection.push(...val.map(item => new ItemModel(item)));
      },
    });

  }

  /**
   * A utility function to define a property on a class which must always be an instance of a certain class._
   * @param {Object}   object    The object to define the property on
   * @param {String}   propName  The name of the property to define on the object
   * @param {Function} ItemModel The class to use for this property. Every time this property is set, this model will be instantiated.
   * @return {Object}            Returns the original object with the new property added
   */
  static defineModelProp(object, propName, ItemModel) {

    let model;

    Object.defineProperty(object, propName, {
      configurable: true,
      enumerable:   true,
      get() {
        return model;
      },
      set(val) {
        model = new ItemModel(val);
      },
    });

  }

  /**
   * A utility function that defines a property on a class that validates its value when set.
   * @param  {Object}   object   [description]
   * @param  {String}   propName [description]
   * @param  {Function} validate [description]
   */
  static defineValidatedProp(object, propName, validate) {

    let value;

    Object.defineProperty(object, propName, {
      configurable: true,
      enumerable:   true,
      get() {
        return value;
      },
      set(val) {
        if (val === undefined) return;
        validate(val);
        value = val;
      },
    });

  }

}

export default Model;
