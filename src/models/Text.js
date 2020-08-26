import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Utterance       from './Utterance.js';

/**
 * A class representing a linguistic text, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Text.html}
 * @memberof models
 * @extends core.Model
 * @prop {models.MultiLangString} title      - The title of this text
 * @prop {core.Collection}        utterances - An array of utterances in this text
 */
class Text extends Model {

  /**
   * Create a new Text
   * @param {Object} [data={}] The data to use for this Text. Data should be formatted according to the [DLx Data Format's guidelines for Text data]{@link https://format.digitallinguistics.io/schemas/Text.html}.
   */
  constructor(data = {}) {

    super(data);

    Model.defineArrayProp(this, `utterances`, Utterance);
    Model.defineModelProp(this, `title`, MultiLangString);

    Object.assign(this, data);

    this.title = this.title ?? new MultiLangString;

  }

}

export default Text;
