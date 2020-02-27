const Note  = require('../Note');
const Tags  = require('../Tags');

const {
  addType,
  defineArray,
  defineProp,
  simplify,
} = require('../../utilities');

const defaults = { phoneme: '' };

/**
 * A class represting a Phone (Phoneme Token)
 * @alias Phone
 * @memberof dlx.module:models
 * @prop {String} allophone An IPA representation of this particular allophone of the phoneme
 * @prop {Array}  notes     An array of notes about this phone. Each note should be a [Note object]{@link dlx.module:models.Note}.
 * @prop {String} phoneme   An IPA representation of this phoneme
 * @prop {Tags}   tags      A set of tags for this phone, as a [Tags object]{@link dlx.module:models.Tags}.
 */
class Phone {
  /**
   * Create a new Phone
   * @param {Object} [data]           The data to use for this Phone
   * @param {String} [data.allophone] An IPA representation of this particular allophone of the phoneme
   * @param {Array}  [data.notes]     An array of notes about this phone. Each item should be formatted as a [Note object]{@link http://developer.digitallinguistics.io/spec/schemas/Note.html}.
   * @param {String} data.phoneme     An IPA representation of this phoneme
   * @param {Object} [data.tags]      An object containing tags for this phone. Should be formatted as a [Tags object]{@link http://developer.digitallinguistics.io/spec/schemas/Tags.html}.
   */
  constructor(data = defaults) {

    // VALIDATION
    if (!(data instanceof Object)) {
      throw new TypeError(`The "data" argument must be an Object if present.`);
    }

    // INSTANTIATION
    Object.assign(this, data);

    addType(this, `Phone`);
    defineProp(this, `allophone`, String, data.allophone || ``);
    defineProp(this, `phoneme`, String, data.phoneme || ``);
    defineProp(this, `tags`, Tags, data.tags || {});

    defineArray(this, `notes`, Note, data.notes);

  }

  toJSON() {
    return simplify(this, [`phoneme`]);
  }

}

module.exports = Phone;
