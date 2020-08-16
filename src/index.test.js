import chai                        from 'chai';
import { core, models, utilities } from './index.js';

const { expect } = chai;

/**
 * Check that the DLx library has the expected exports
 */

describe(`dlx`, () => {

  it(`core`, () => {
    expect(core).toBeInstanceOf(Object);
  });

  it(`models`, () => {
    expect(models).toBeInstanceOf(Object);
  });

  it(`utilities`, () => {
    expect(utilities).toBeInstanceOf(Object);
  });

});
