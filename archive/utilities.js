/* eslint-disable
  max-classes-per-file,
  max-statements,
*/

/**
 * A collection of utility functions
 * @module utilities
 * @memberof dlx
 */

/**
 * A factory function that adds a `type` field to an Object
 * @param  {Object} object The Object to add the `type` field to
 * @param  {String} type   The name of the type to add
 * @return {Object}        Returns the original object
 */
function addType(object, type) {

  Object.defineProperty(object, `type`, {
    configurable: false,
    enumerable:   true,
    get() { return type; },
  });

  return object;

}

/**
 * A factory method that adds a `url` property to an Object. Does not create a URL from the ID.
 * @param  {Object} object       The Object to add the `url` property to
 * @param  {String} propName     The name of the property to add
 * @param  {URL}    initialValue The initial value to set the `url` property to
 * @return {Object}              Returns the original Object that was passed
 */
function addURL(object, propName = `url`, initialValue) {

  if (!(object instanceof Object)) throw new TypeError(`The "object" argument must be an Object.`);

  if (typeof propName !== `string`) throw new TypeError(`The "propName" argument must be a String.`);

  let value;

  Object.defineProperty(object, propName, {
    configurable: true,
    enumerable:   true,
    get() { return value; },
    set(val) {
      if (!val) return;
      checkProp(val, `url`, propName);
      value = val;
    },
  });

  // eslint-disable-next-line no-param-reassign
  if (initialValue) object[propName] = initialValue;
  return object;

}

/**
 * Adds a new property to the provided Object, which aliases the default analysis language of the provided MultiLangString
 * @param  {Object} obj         The Object to add the aliased property to
 * @param  {String} stringProp  The name of the MultiLangString property to use as the source of the data
 * @param  {String} defaultProp The name of the new property to add
 * @return {Object}             Returns the original Object with the new property added
 */
function aliasLanguage(obj, stringProp, defaultProp) {

  Object.defineProperty(obj, defaultProp, {
    configurable: true,
    enumerable:   false,
    get() {
      return obj[stringProp][obj.defaultAnalysisLanguage];
    },
    set(val) {
      // eslint-disable-next-line no-param-reassign
      obj[stringProp][obj.defaultAnalysisLanguage] = val;
    },
  });

  return obj;

}

/**
 * Adds a new property to the provided Object, which aliases the default transcription of the provided Transcription
 * @param  {Object} obj         The Object to add the aliased property to
 * @param  {String} txnProp     The name of the Transcription property to use as the source of the data
 * @param  {String} defaultProp The name of the new property to add
 * @return {Object}             Returns the original Object with the new property added
 */
function aliasTranscription(obj, txnProp, defaultProp) {

  Object.defineProperty(obj, defaultProp, {
    configurable: true,
    enumerable:   false,
    get() {
      return obj[txnProp][obj.defaultOrthography];
    },
    set(val) {
      obj[txnProp][obj.defaultOrthography] = val; // eslint-disable-line no-param-reassign
    },
  });

  return obj;

}

/**
 * Adds an array property to the provided object with the given property name. The array property will be enumerable but non-configurable and non-writable. Each item added to the array will be made an instance of the provided model.
 * @param {Object}   object              The object to add the array property to
 * @param {String}   propName            The name of the array property to add
 * @param {Function} model               A constructor function to apply to each item before being added to the array.
 * @param {Array}    [initialValue = []] The intial set of items to add to the array property.
 */
function defineArray(object, propName, model, initialValue = []) {

  if (!Array.isArray(initialValue)) {
    throw new TypeError(`The "${propName}" property must be an array.`);
  }

  const ItemModel = model;
  const isString  = ItemModel === String;

  const handler = {
    set(target, prop, val, proxy) {

      let newVal = val;

      if (Number.isInteger(Number(prop))) {
        if (isString && typeof val !== 'string') {
          throw new TypeError(`Each of the items in "${propName}" must be a String.`);
        } else if (!isString) {
          newVal = new ItemModel(val);
        }
      }

      return Reflect.set(target, prop, newVal, proxy);

    },
  };

  const p = new Proxy([], handler);

  p.push(...initialValue);

  Object.defineProperty(object, propName, {
    configurable: true,
    enumerable:   true,
    value:        p,
    writable:     false,
  });

}

/**
 * Adds a property to the provided object which may only have the specified values
 * @param  {Object} object       The object to add the property to
 * @param  {String} propName     The name of the property to add
 * @param  {Array}  values       An array of acceptable values for the new property
 * @param  {Any}    initialValue The initial value to give to the new property. Will be `undefined` if none is provided.
 * @return {Object}              Returns the original object with the new property added
 */
function defineEnumProp(object, propName, values, initialValue) {

  if (!(object instanceof Object)) {
    throw new TypeError(`The "object" argument must be an Object.`);
  }

  if (!Array.isArray(values)) {
    throw new TypeError(`The "values" argument must be an array of allowed values.`);
  }

  const o = object;

  let value;

  Object.defineProperty(o, propName, {
    configurable: true,
    enumerable:   true,
    get() { return value; },
    set(val) {

      if (!values.includes(val)) {
        throw new Error(`The value provided is not a valid value for the "${propName}" property.`);
      }

      value = val;

    },
  });

  if (typeof initialValue !== 'undefined') o[propName] = initialValue;

  return o;

}

/**
 * Adds a property with the given name to the provided object, and ensures that the value of the property is always an instance of the provided model. The property will be enumerable and writable but non-configurable.
 * @param {Object}   object         The object to add the property to
 * @param {String}   propName       The name of the property to add
 * @param {Function} model          A constructor function. The value of this property will always be an instance of the provided function.
 * @param {Any}      [initialValue] The initial value to use for the value of this property. If none is provided, the value will be undefined until the property is set.
 * @return {Object}                 Returns the original object with the new property added
 */
function defineProp(object, propName, model, initialValue) {

  if (!(object instanceof Object)) throw new TypeError(`The "object" argument must be an Object.`);

  const o         = object;
  const PropModel = model;
  const isDate    = PropModel === Date;
  const isNum     = PropModel === Number;
  const isString  = PropModel === String;

  let value;

  Object.defineProperty(o, propName, {
    configurable: true,
    enumerable:   true,
    get() { return value; },
    set(val) {

      if (isString) {

        if (typeof val !== 'string') {
          throw new TypeError(`The "${propName}" property must be a String.`);
        }

        value = val;

      } else if (isNum) {

        if (typeof val !== 'number') {
          throw new TypeError(`The "${propName}" property must be a Number.`);
        }

        value = val;

      } else if (isDate) {

        if (isNaN(Date.parse(val))) {
          throw new TypeError(`The "${propName}" property must be a valid Date string or object.`);
        }

        value = new Date(val);

      } else if (typeof val !== 'undefined') {

        value = new PropModel(val);

      }

    },
  });

  if (typeof initialValue !== 'undefined') o[propName] = initialValue;

  return o;

}

/**
 * A factory method that adds a Set property with the given name to the given Object.
 * @param  {Object}    object       The Object to add the new Set property to
 * @param  {String}    propName     The name of the property to add to the provided Object
 * @param  {Function}  model        A Constructor to use to validate the Set. Only items which are instances of the Constructor will be added to the Set.
 * @param  {Array|Set} initialValue The initial value to set the property to, provided as either an Array or Set
 * @return {Object}                 Returns the original Object provided, with the new property added
 */
function defineSet(object, propName, model, initialValue = new Set) {

  if (!(object instanceof Object)) throw new TypeError(`The "object" argument must be an Object.`);
  if (typeof propName !== `string`) throw new TypeError(`The "propName" argument must be a String.`);
  if (!(Array.isArray(initialValue) || initialValue instanceof Set)) throw new TypeError(`The "initialValue" argument must be a Set or an Array.`);

  const set       = new Set;
  const ItemModel = model;

  // proxies s.add for validation when new items are added
  Object.defineProperty(set, `add`, {
    configurable: false,
    enumerable:   false,
    writable:     false,
    value:        new Proxy(set.add, {
      apply(target, context, [val]) {

        if (ItemModel === String) {
          if (typeof val !== `string`) throw new TypeError(`Items in the "${propName}" Set must be Strings.`);
        } else if (ItemModel === Number) {
          if (typeof val !== `number`) throw new TypeError(`Items in the "${propName}" Set must be Numbers.`);
        } else if (!(object instanceof ItemModel)) {
          throw new TypeError(`Not a valid item type for the "${propName}" property.`);
        }

        return Reflect.apply(target, context, [val]);

      },
    }),
  });

  // prevents the Set property from being overwritten, which would lose its proxied `add` method
  Object.defineProperty(object, propName, {
    configurable: false,
    enumerable:   true,
    value:        set,
    writable:     false,
  });

  if (initialValue) Array.from(initialValue).forEach(item => object[propName].add(item));

  return object;

}

/**
 * Checks whether an item is valid for the specified type, and returns a generic error message with the provided property name if not.
 * @param  {Any}    item The item to check
 * @param  {String} type The type to check for
 * @param  {String} prop The name of the property to use in the error message
 * @return {Any}         Returns the original value if no error is thrown
 */
function checkProp(...args) {

  if (args.length !== 3) throw new Error(`Missing arguments to chceckProp function.`);

  const [item, type, prop] = args;

  switch (type) {

    case `abbr`: {
      if (!isAbbr(item)) throw new TypeError(`The "${prop}" property must be a valid abbreviation.`);
      break;
    }

    case `array`: {
      if (!Array.isArray(item)) throw new TypeError(`The "${prop}" property must be an array.`);
      break;
    }

    case `date`: {
      if (isNaN(Date.parse(item))) throw new TypeError(`The "${prop}" property must be a valid date.`);
      break;
    }

    case `integer`: {
      if (!Number.isInteger(item)) throw new TypeError(`The "${prop}" property must be an integer.`);
      break;
    }

    case `iterable`: {
      if (!isIterable(item)) throw new TypeError(`The "${prop}" property must be an iterable object.`);
      break;
    }

    case `number`: {
      if (typeof item !== `number`) throw new TypeError(`The "${prop}" property must be a number.`);
      break;
    }

    case `object`: {
      if (typeof item !== `object`) throw new TypeError(`The "${prop}" property must be an object.`);
      break;
    }

    case `string`: {
      if (typeof item !== `string`) throw new TypeError(`The "${prop}" property must be a string.`);
      break;
    }

    case `url`: {
      if (!isURL(item)) throw new TypeError(`The "${prop}" property must be a valid URI.`);
      break;
    }

    default:

  }

  return item;

}

/**
 * Tests whether a string is a valid abbreviation according to the [DLx Abbreviation schema]{@link http://developer.digitallinguistics.io/spec/schemas/abbreviation.html}.
 * @param  {String} string The string to test
 * @return {Boolean}       Returns true if the string is a valid abbreviation, false otherwise
 */
function isAbbr(string) {
  if (typeof string === `string`) return /^[(a-z)|(A-Z)|(0-9)]+$/.test(string);
  return false;
}

/**
 * Tests whether a string is a valid ISO Internet Date-Time string.
 * @param  {String}  string The string to test
 * @return {Boolean}        Returns true if the string is a valid date
 */
function isDateString(string) {
  return !isNaN(Date.parse(string));
}

/**
 * Checks whether an item is iterable
 * @ignore
 */
function isIterable(obj) {
  if (!obj) return false;
  return typeof obj[Symbol.iterator] === `function`;
  // NB: cannot use `in` here because `obj` might be a string
}

/**
 * Tests whether a string is a valid URI. Code taken from http://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url/15855457#15855457
 * @type {Function}
 * @param {String} string       The string to validate
 * @return {Boolean}            Returns true if the string is a valid URI, false otherwise
 */
function isURL(string) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/iu.test(string);
}

export {
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  defineArray,
  defineEnumProp,
  defineProp,
  defineSet,
};
