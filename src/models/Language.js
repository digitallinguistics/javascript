import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

/**
 * A class representing a [DLx Language Object]{@link https://format.digitallinguistics.io/schemas/Language.html}
 * @memberof models
 * @extends Model
 */
class Language extends Model {

  /**
   * Create a new Language
   * @param {Object} [data={}] The data to use for this Language object. Data should be formatted according to the [DLx Data Format's guidelines for Language data]{@link https://format.digitallinguistics.io/schemas/Language.html}.
   */
  constructor(data = {}) {

    super(data);

    this.name = new MultiLangString(this.name);

  }

}

export default Language;
