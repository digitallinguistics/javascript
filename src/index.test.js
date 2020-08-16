import expect                      from 'expect.js';
import { core, models, utilities } from './index.js';

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
