import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';

/**
 * A class representing a [DLx Word Token]{@link https://format.digitallinguistics.io/schemas/Word.html}.
 * @extends Model
 */
class Word extends Model {

  constructor(data = {}) {

    super();

    Model.defineModelProp(this, `literal`, MultiLangString);
    Model.defineModelProp(this, `transcription`, Transcription);
    Model.defineModelProp(this, `translation`, MultiLangString);

    Object.assign(this, data);

    // Required property
    // TODO: replace with: this.transcription ??= new Transcription;
    this.transcription = this.transcription ?? new Transcription;

  }

}

export default Word;
