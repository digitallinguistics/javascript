/**
 * @module
 */

import Model from '../core/Model.js';

/**
 * A class representing a language
 * @extends Model
 */
class Language extends Model {

  /**
   * Create a new Language
   * @param {Object} [data={}] The data to use for this Language object
   */
  constructor(data = {}) {
    super(data);
  }

}

export default Language;
