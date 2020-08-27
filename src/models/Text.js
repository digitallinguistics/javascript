import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Tags            from './Tags.js';
import Utterance       from './Utterance.js';

/**
 * A class representing a linguistic text, formatted according to the [DLx Data Format for a language]{@link https://format.digitallinguistics.io/schemas/Text.html}
 * @memberof models
 * @extends core.Model
 * @prop {models.Tags}            tags       - The tags for this text
 * @prop {models.MultiLangString} title      - The title of this text
 * @prop {core.Collection}        utterances - An array of utterances in this text
 */
class Text extends Model {

  /**
   * Create a new Text
   * @param {Object}     [data={}]   The data for this text, formatted as a [DLx Text object]{@link https://format.digitallinguistics.io/schemas/Text.html}.
   * @param {Map|Object} [data.tags] The tags for this text, formatted as a [DLx Tags object]{@link https://format.digitallinguistics.io/schemas/Tags.html}.
   */
  constructor(data = {}) {

    super(data);

    Model.defineModelProp(this, `tags`, Tags);
    Model.defineTypeProp(this, `Text`);
    Model.defineModelProp(this, `title`, MultiLangString);
    Model.defineArrayProp(this, `utterances`, Utterance);

    Object.assign(this, data);

    this.title = this.title ?? new MultiLangString;

  }

}

export default Text;
