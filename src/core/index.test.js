import core   from './index.js';
import expect from 'expect.js';

const { Model } = core;

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    expect(Model.name).toBe(`Model`);
  });

});
