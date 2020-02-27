/* eslint-disable */

/**
 * A collection of utility functions
 * @module utilities
 * @memberof dlx
 */

const defaultPunctuation = require('./data').punctuation;

/**
 * A factory method that adds an `abbreviation` property to an Object.
 * @param  {Object} obj          The Object to add the `abbreviation` property to
 * @param  {String} propName     The name of the property to add
 * @param  {String} initialValue The initial value to set the `abbreviation` property to
 * @return {Object}              Returns the original object that was passed to the function
 */
function addAbbreviation(obj, propName = `abbreviation`, initialValue) {

  if (!(obj instanceof Object)) throw new TypeError(`addAbbreviation must be passed an Object.`);

  if (typeof propName !== `string`) throw new TypeError(`The property name to set must be a String.`);

  let abbreviation;

  Object.defineProperty(obj, propName, {
    configurable: true,
    enumerable:   true,
    get() { return abbreviation; },
    set(val) {
      if (!val) return;
      checkProp(val, `abbr`, propName);
      abbreviation = val;
      return abbreviation;
    },
  });

  if (initialValue) obj[propName] = initialValue;

  return obj;

}

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
      return value;
    },
  });

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
      obj[txnProp][obj.defaultOrthography] = val;
    },
  });

  return obj;

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
 * Creates a new DOM element, and sets its properties
 * @param  {String} type  The type of element to create (e.g. `div`, `p`)
 * @param  {Object} props An object of properties and their values to assign to the new element
 * @return {Object}       Returns the new DOM Node
 */
function createElement(type, props = {}) {
  return Object.assign(document.createElement(type), props);
}

/**
 * A generic debounce function, which only fires a function in specified intervals. Useful for listening to events that happen frequently and require rerendering or heavy operations.
 * Documentation here: https://davidwalsh.name/javascript-debounce-function
 * @param  {Function} func      The function to debounce
 * @param  {Number}   wait      The time to wait, in milliseconds, between firing the callback
 * @param  {Boolean}  immediate Whether to invoke the callback once before the wait timer begins
 * @return {Function}           Returns the debounced function to use
 */
function debounce(func, wait = 250, immediate = false) {

  let timeout;

  return function(...args) {

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, args);

  };

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
      return value;

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
 * Returns an array of all the unique characters in a string. Works with both UTF-8 and UTF-16 encoding.
 * @param  {String} string The string to retrieve unique characters from
 * @return {Array}         Returns an array of the unique characters
 * @instance
 */
function getUniqueChars(string) {

  if (typeof string !== `string`) {
    throw new TypeError(`The argument passed to "getUniqueChars" must be a string.`);
  }

  return Array.from(new Set(string));

}

/**
 * Filters an array of LexemeReference objects and returns only JSON-unique ones
 * @ignore
 */
function getUniqueReferences(references = []) {

  if (!Array.isArray(references)) {
    throw new TypeError(`The references must be an Array.`);
  }

  const uniques = [];

  const isEqual = (obj1, obj2) => {

    const stringsEqual = (
      obj1.lexicon === obj2.lexicon
      && obj1.lexeme === obj2.lexeme
      && obj1.relation === obj2.relation
      && obj1.sense === obj2.sense
    );

    if (stringsEqual) {

      if (obj1.variantType && obj2.variantType) {

        return (
          Object.entries(obj1.variantType).every(([key, val]) => val === obj2.variantType[key])
          && Object.entries(obj2.variantType).every(([key, val]) => val === obj1.variantType[key])
        );

      } else if (obj1.variantType || obj2.variantType) {

        return false;

      }

      return true;

    }

    return false;

  };

  references.forEach(ref => {
    if (!uniques.some(obj => isEqual(obj, ref))) uniques.push(ref);
  });

  return uniques;

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
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(string);
}

/**
 * Performs a series of substitutions on a string, replacing unwanted characters with the desired ones (or nothing, meaning the character is simply removed everywhere it occurs).
 * @param  {String} string        The string to sanitize
 * @param  {Object} substitutions An object whose attributes are the characters you wish to replace, and values are the characters you wish to replace them with
 * @return {String}               Returns the sanitized string, with substitutions made
 * @instance
 */
function sanitize(string, substitutions) {
  return transliterate(string, substitutions);
}

/**
 * A Sanitizer class that stores a set of substitutions for repeated use on different strings
 * @type {Function}
 * @instance
 * @prop {Object} substitutions An Object containing the substitutions to apply to each string
 */
class Sanitizer {
  /**
   * Create a new Sanitizer function
   * @param  {Object} substitutions The set of substitutions to make (see the `sanitize` method)
   * @return {Function}             Returns a function which always sanitizes a string with the given set of substitutions
   */
  constructor(substitutions) {
    this.substitutions = substitutions;
    return string => sanitize(string, substitutions);
  }
}

/**
 * Takes an Object and an Array of required properties, and returns a simplified version of the object with all empty Arrays, Strings, Sets, Maps, and basic Objects removed. This is useful when trying to reduce the footprint of the object when stringifying it.
 * @param  {Object} model           The Object to simplify
 * @param  {Array}  [required = []] A Array of required property names. These properties will not be removed from the object, even if they are empty
 * @return {Object}                 Returns a *new* object with the properties removed
 */
function simplify(model, required = []) {

  if (!(model instanceof Object)) {
    throw new TypeError(`The "model" argument must be an Object.`);
  }

  if (!Array.isArray(required) || required.some(val => typeof val !== 'string')) {
    throw new TypeError(`The "required" argument must be an Array of Strings.`);
  }

  const o = Object.assign({}, model);

  for (const prop in model) {

    if (!required.includes(prop)) {

      if (
        (Array.isArray(o[prop]) && !o[prop].length)
        || ((o[prop] instanceof Set || o[prop] instanceof Map) && !o[prop].size)
        || (o[prop] && o[prop].constructor === Object && !Object.keys(o[prop]).length)
        || (typeof o[prop] !== 'number' && !o[prop])
      ) {
        delete o[prop];
      }

      if (o[prop] instanceof Map) {
        o[prop].forEach((val, key) => {
          if (typeof val === 'string' && !val.length) o[prop].delete(key);
        });
      }

    }

  }

  return o;

}

/**
 * Removes punctuation from a string, and then tokenizes the string, returning an array of tokens.
 * @param  {String} string      The string to tokenize
 * @param  {Array}  delimiters  An array of characters to tokenize the string with
 * @param  {Array}  punctuation An array of punctuation characters to remove from the string
 * @return {Array}              Returns an array of tokens
 * @instance
 */
function tokenize(string, delimiters, punctuation) {

  // NB: Don`t use default parameters, since they don`t allow `null` to be passed.
  const delims = delimiters || [`\\s`];
  const punct  = punctuation || defaultPunctuation;

  if (typeof string !== `string`) {
    throw new TypeError(`The "string" argument must be a string.`);
  }

  if (!(Array.isArray(delims) && Array.isArray(punct))) {
    throw new TypeError(`The "delimiters" and "punctuation" arguments must be arrays.`);
  }

  const substitutions = {};

  punct.forEach(item => { substitutions[item] = ``; });

  const depunctuated = sanitize(string, substitutions);
  const pattern      = `[${delims.join(``)}]+`;
  const regexp       = new RegExp(pattern, `gu`);

  return depunctuated.split(regexp);

}

/**
 * A Tokenizer class that saves a set of delimiters and punctuation characters for repeated use in tokenizing strings
 * @type {Function}
 * @instance
 * @prop {Array} delimiters  An array of delimiters to tokenize with
 * @prop {Array} punctuation An array of punctuation characters to strip from the string
 */
class Tokenizer {
  /**
   * Create a new Tokenizer
   * @param  {Array}    delimiters  The Array of delimiters used by this Tokenizer
   * @param  {Array}    punctuation The Array of punctuation characters used by this Tokenizer
   * @return {Function}             Returns a tokenize function which tokenizes a string with the provided set of delimiters and punctuation characters
   */
  constructor(delimiters, punctuation) {
    this.delimiters  = delimiters;
    this.punctuation = punctuation;
    return string => tokenize(string, this.delimiters, this.punctuation);
  }
}

/**
 * Converts a string from one writing system to another.
 * @param {String} string         The string to transliterate.
 * @param {Object} substitutions  A hash of substitutions to make on the string. Each key in the object should be a string to replace, and its value should be the string to replace it with.
 * @return {String}               Returns the transliterated string
 * @instance
 */
function transliterate(string = ``, substitutions = {}) {

  if (typeof string !== `string`) {
    throw new TypeError(`The first argument passed to "transliterate" must be a string.`);
  }

  if (!(
    typeof substitutions === `object`
    && Object.values(substitutions).every(val => typeof val === `string`)
  )) {
    throw new TypeError(`The second argument passed to "substitutions" must be an object whose attributes and values are strings.`);
  }

  const temps = new Map;
  const subs  = new Map;
  let str     = string;

  // gets a random Unicode point from the geometric shapes block
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);
  const inputs = Object.keys(substitutions);

  Object.entries(substitutions)
  .sort(([a], [b]) => b.length - a.length)
  .forEach(([input, replacement]) => {

    // escape regex special characters
    const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    subs.set(escapedInput, replacement);

    // check for feeding problem
    if (inputs.includes(replacement)) {
      // create a temporary substitution using characters from the geometric shapes Unicode block
      let temp = getRandomCodePoint();
      // make sure you haven't already used that code point, and generate a new temporary substitution if so
      while (temps.has(temp)) temp = getRandomCodePoint();
      temps.set(temp, replacement);
      subs.set(escapedInput, temp);
    }

    // make the substitution using the temporary placeholder
    const regexp = new RegExp(escapedInput, `gu`);
    str = str.replace(regexp, subs.get(escapedInput));

  });

  // now replace the temporary placeholders with their proper values
  temps.forEach((replacement, temp) => {
    const regexp = new RegExp(temp, `gu`);
    str = str.replace(regexp, replacement);
  });

  return str;

}

/**
 * A Transliterator class that saves a set of transliteration rules for repeated use
 * @type {Function}
 * @instance
 * @prop {Object} substitutions The set of substitution rules for this object. If these are modified, the transliteration function will be modified accordingly.
 */
class Transliterator {
  /**
   * Create a new Transliterator
   * @param  {Object}   substitutions An object containing the set of substitutions to make, where the key is the string to be replaced, and the value is the is the string to replace it with
   * @return {Function}               Returns a transliterator function which transliterates a string with the provided set of substitutions
   */
  constructor(substitutions) {
    this.substitutions = substitutions;
    return string => transliterate(string, this.substitutions);
  }
}

module.exports = {
  addAbbreviation,
  addType,
  addURL,
  aliasLanguage,
  aliasTranscription,
  checkProp,
  createElement,
  debounce,
  defineArray,
  defineEnumProp,
  defineProp,
  defineSet,
  getUniqueChars,
  getUniqueReferences,
  isAbbr,
  isDateString,
  isIterable,
  isURL,
  sanitize,
  Sanitizer,
  simplify,
  tokenize,
  Tokenizer,
  transliterate,
  Transliterator,
};
