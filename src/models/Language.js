import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

/**
 * A class representing a language, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Language.html}
 * @memberof models
 * @extends Model
 */
class Language extends Model {

  #name;

  /**
   * Create a new Language
   * @param {Object} [data={}] The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   */
  constructor(data = {}) {

    super();

    this.name = new MultiLangString(data.name);

  }

  /**
   * The name of this language, as a MultiLangString Map object
   * @type {Map}
   */
  get name() {
    return this.#name;
  }

  set name(val) {
    this.#name = new MultiLangString(val);
  }

}

export default Language;
