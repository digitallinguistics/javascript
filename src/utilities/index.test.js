import expect            from 'expect.js';
import { regexp, types } from './index.js';

/**
 * Check that the utilities module has the expected exports
 */

describe(`utilities`, () => {

  it(`regexp`, () => {
    expect(regexp).toBeInstanceOf(Object);
  });

  it(`types`, () => {
    expect(types).toBeInstanceOf(Object);
  });

});
