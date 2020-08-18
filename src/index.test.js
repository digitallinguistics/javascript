import chai                        from 'chai';
import { core, models, utilities } from './index.js';

const should = chai.should();

/**
 * Check that the DLx library has the expected exports
 */

describe(`dlx`, () => {

  it(`core`, () => {
    should.exist(core);
  });

  it(`models`, () => {
    should.exist(models);
  });

  it(`utilities`, () => {
    should.exist(utilities);
  });

});
