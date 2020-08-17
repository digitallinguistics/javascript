import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';

/**
 * A class representing an utterance.
 * @memberof models
 * @extends core.Model
 */
class Utterance extends Model {

  /**
   * The transcript of this utterance, as a Transcription object
   * @type {models.Transcription}
   */
  #transcript;

  /**
   * The transcription of this utterance, as a Transcription object
   * @type {models.Transcription}
   */
  #transcription;

  /**
   * The translation of this utterance, as a MultiLangString object
   * @type {models.MultiLangString}
   */
  #translation;

  /**
   * Create a new Utterance
   * @param {Object} [data={}] The data to use for this Utterance
   */
  constructor(data = {}) {

    super();

    Model.defineModelProp(this, `transcript`, Transcription);
    Model.defineModelProp(this, `transcription`, Transcription);
    Model.defineModelProp(this, `translation`, MultiLangString);

    Object.assign(this, data);

    this.transcription = this.transcription ?? new Transcription;
    this.translation   = this.translation ?? new MultiLangString;

  }

}

export default Utterance;
