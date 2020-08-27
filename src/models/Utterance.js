import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Tags            from './Tags.js';
import Transcription   from './Transcription.js';
import Word            from './Word.js';

/**
 * A class representing an utterance.
 * @memberof models
 * @extends core.Model
 * @prop {models.Transcription}   transcript    - The transcript for this utterance
 * @prop {models.Transcription}   transcription - The transcription of this utterance
 * @prop {models.MultiLangString} translation   - The translation of this utterance
 * @prop {core.Collection}        words         - An array of words in this utterance
 */
class Utterance extends Model {

  /**
   * Create a new Utterance
   * @param {Object} [data={}] The data to use for this Utterance
   */
  constructor(data = {}) {

    super();

    Model.defineModelProp(this, `tags`, Tags);
    Model.defineModelProp(this, `transcript`, Transcription);
    Model.defineModelProp(this, `transcription`, Transcription);
    Model.defineModelProp(this, `translation`, MultiLangString);
    Model.defineTypeProp(this, `Utterance`);
    Model.defineArrayProp(this, `words`, Word);

    Object.assign(this, data);

    // Required properties
    // TODO: replace with: this.transcription ??= new Transcription;
    this.transcription = this.transcription ?? new Transcription;
    this.translation   = this.translation ?? new MultiLangString;

  }

}

export default Utterance;
