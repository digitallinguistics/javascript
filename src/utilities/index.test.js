const { utilities } = require(`../../test`);

const { regexp, types } = utilities;

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
