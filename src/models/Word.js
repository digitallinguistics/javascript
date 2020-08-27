import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';

/**
 * A class representing a [DLx Word Token]{@link https://format.digitallinguistics.io/schemas/Word.html}.
 * @memberof models
 * @extends Model
 * @prop {models.Transcription}   analysis      - The morphological analysis of this word, with morpheme breaks
 * @prop {models.MultiLangString} gloss         - The glossed analysis of this word, with morpheme breaks
 * @prop {models.MultiLangString} literal       - The literal translation of this word token
 * @prop {models.Transcription}   transcription - The transcription of this word token
 * @prop {models.MultiLangString} translation   - The translation of this word token
 */
class Word extends Model {

  /**
   * Create a new word token
   * @param {Object} [data={}] The data for this word token
   */
  constructor(data = {}) {

    super();

    Model.defineModelProp(this, `analysis`, Transcription);
    Model.defineModelProp(this, `gloss`, MultiLangString);
    Model.defineModelProp(this, `literal`, MultiLangString);
    Model.defineModelProp(this, `transcription`, Transcription);
    Model.defineModelProp(this, `translation`, MultiLangString);
    Model.defineTypeProp(this, `Word`);

    Object.assign(this, data);

    // Required property
    // TODO: replace with: this.transcription ??= new Transcription;
    this.transcription = this.transcription ?? new Transcription;

  }

}

export default Word;
