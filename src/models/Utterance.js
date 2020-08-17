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
   * @type {Transcription}
   */
  #transcript;

  /**
   * The transcription of this utterance, as a Transcription object
   * @type {Transcription}
   */
  #transcription;

  /**
   * The translation of this utterance, as a MultiLangString object
   * @type {MultiLangString}
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

    // Required properties
    // TODO: replace with: this.transcription ??= new Transcription;
    this.transcription = this.transcription ?? new Transcription;
    this.translation   = this.translation ?? new MultiLangString;

  }

}

export default Utterance;
