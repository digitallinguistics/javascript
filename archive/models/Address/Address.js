const { addType, defineProp, simplify } = require('../../utilities');

/**
 * A class representing a postal address
 * @alias Address
 * @memberof dlx.module:models
 * @prop {String} apartmentNumber The apartment or unit number, along with any abbreviations, e.g. Apt 20
 * @prop {String} country         The country this address is located in
 * @prop {String} locality        The locality or city for this Address
 * @prop {String} postalBoxNumber The postal box number
 * @prop {String} postalCode      The postal code for this address (as a string rather than a number)
 * @prop {String} region          The region or state for this Address
 * @prop {String} streetAddress   The street address, not including apartment or unit number
 */
class Address {
  /**
   * Create a new postal address
   * @param {Object} [data]                 The data to use for this address
   * @param {String} [data.apartmentNumber] The apartment or unit number, along with any abbreviations, e.g. Apt 20.
   * @param {String} [data.country]         The country this address is located in
   * @param {String} [data.locality]        The locality or city for this Address
   * @param {String} [data.postalBoxNumber] The postal box number
   * @param {String} [data.postalCode]      The postal code for this address (as a string rather than a number)
   * @param {String} [data.region]          The region or state for this Address
   * @param {String} [data.streetAddress]   The street address, not including apartment or unit number
   */
  constructor(data = {}) {

    if (!(data instanceof Object)) {
      throw new TypeError(`The data passed to the Address constructor must be an Object.`);
    }

    Object.assign(this, data);

    addType(this, `Address`);

    defineProp(this, `apartmentNumber`, String, data.apartmentNumber);
    defineProp(this, `country`, String, data.country);
    defineProp(this, `locality`, String, data.locality);
    defineProp(this, `postalBoxNumber`, String, data.postalBoxNumber);
    defineProp(this, `postalCode`, String, data.postal);
    defineProp(this, `region`, String, data.region);
    defineProp(this, `streetAddress`, String, data.streetAddress);

  }

  toJSON() {
    return simplify(this);
  }

}

module.exports = Address;
