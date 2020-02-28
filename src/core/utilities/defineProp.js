/**
 * A factory method that defines a property on an object, and ensures that the value of that property is always an instance of the provided model.
 * @memberof core.utilities
 * @instance
 * @param  {Object}   object   The object to add the property to
 * @param  {String}   propName The name of the property to add
 * @param  {Function} model    A constructor function. The value of the defined property will always be an instance of this constructor.
 */
function defineProp(object, propName, model) {

  const PropModel = model;
  const isDate    = PropModel === Date;
  const isNum     = PropModel === Number;
  const isString  = PropModel === String;

}

export default defineProp;
