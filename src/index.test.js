import chai                        from 'chai';
import { core, models, utilities } from './index.js';

const { expect } = chai;

/**
 * Check that the DLx library has the expected exports
 */

describe(`dlx`, () => {

  it(`core`, () => {
    expect(core).not.to.be.undefined;
  });

  it(`models`, () => {
    expect(models).not.to.be.undefined;
  });

  it(`utilities`, () => {
    expect(utilities).not.to.be.undefined;
  });

});
