const LexemeReference = require('../LexemeReference');

class Variant extends LexemeReference {
  constructor(data) {
    super(data);
    if (!(this.variantType instanceof Object)) {
      throw new Error(`The variant must have a "variantType" property.`);
    }
  }
}

module.exports = Variant;
