import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

/**
 * A class representing a language, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Language.html}
 * @memberof models
 * @extends core.Model
 */
class Language extends Model {

  /**
   * The name of this language, as a [MultiLangString]{@link models.MultiLangString}
   * @name models.Language#name
   * @type {Map}
   */
  #name;

  /**
   * Create a new Language
   * @param {Object} [data={}] The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   */
  constructor(data = {}) {

    super(data);

    this.#name = new MultiLangString(data.name);

    Object.defineProperty(this, `name`, {
      configurable: true,
      enumerable:   true,
      get() {
        return this.#name;
      },
      set(val) {
        this.#name = new MultiLangString(val);
      },
    });

  }

}

export default Language;
