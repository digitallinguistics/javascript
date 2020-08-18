import chai from 'chai';
import { Collection, Model } from './index.js';

chai.should();

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    Model.name.should.equal(`Model`);
  });

  it(`Collection`, () => {
    Collection.name.should.equal(`Collection`);
  });

});
