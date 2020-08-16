import chai              from 'chai';
import { regexp, types } from './index.js';

const should = chai.should();

/**
 * Check that the utilities module has the expected exports
 */

describe(`utilities`, () => {

  it(`regexp`, () => {
    should.exist(regexp);
  });

  it(`types`, () => {
    should.exist(types);
  });

});
