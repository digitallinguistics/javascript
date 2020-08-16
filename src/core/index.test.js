import chai from 'chai';
import core from './index.js';

const { expect } = chai;
const { Model }  = core;

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    expect(Model.name).to.equal(`Model`);
  });

});
