import Model from './Model.js';

/* eslint-disable
  no-constructor-return,
*/

/**
 * A class representing a collection. Each item in the collection will be an instance of the provided Model.
 * @memberof core
 * @extends Array
 */
class Collection extends Array {

  /**
   * Create a new Collection
   * @param {Function} ItemModel  The class to use as the model for each item in the collection
   * @param {Array}    [array=[]] The array to instantiate the Collection with
   */
  constructor(ItemModel, array = []) {

    super();

    Model.defineTypeProp(this, `Collection`);

    const proxy = new Proxy(this, {
      set(target, prop, val, prox) {

        if (Number.isInteger(Number(prop))) {
          val = new ItemModel(val); // eslint-disable-line no-param-reassign
        }

        return Reflect.set(target, prop, val, prox);

      },
    });

    proxy.push(...array);

    return proxy;

  }

}

export default Collection;
