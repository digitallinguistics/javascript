import Collection      from '../core/Collection.js';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Utterance       from './Utterance.js';

/**
 * A class representing a linguistic text, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Text.html}
 * @memberof models
 * @extends core.Model
 */
class Text extends Model {

  /**
    * The title of this text, as a MultiLangString
    * @type {models.MultiLangString}
    */
  #title;

  /**
   * The utterances in this text, each as an Utterance object.
   * @type {core.Collection}
   */
  #utterances;

  /**
   * Create a new Text
   * @param {Object} [data={}] The data to use for this Text. Data should be formatted according to the [DLx Data Format's guidelines for Text data]{@link https://format.digitallinguistics.io/schemas/Text.html}.
   */
  constructor(data = {}) {

    super(data);

    Model.defineArrayProp(this, `utterances`, Utterance);
    Model.defineModelProp(this, `title`, MultiLangString);

    Object.assign(this, data);

    this.title      = this.title ?? new MultiLangString;
    this.utterances = this.utterances ?? new Collection(Utterance);

  }

}

export default Text;
