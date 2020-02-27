const LexemeReference = require('../LexemeReference');

class LexicalRelation extends LexemeReference {
  constructor(data) {
    super(data);
    if (typeof this.relation !== 'string') {
      throw new Error(`The lexical relation must have a "relation" property.`);
    }
  }
}

module.exports = LexicalRelation;
