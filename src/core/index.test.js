import chai from 'chai';
import core from './index.js';

const { Model } = core;
chai.should();

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    Model.name.should.equal(`Model`);
  });

});
