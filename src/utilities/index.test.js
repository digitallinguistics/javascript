const { utilities } = require(`../../test`);

const { regexp, validate } = utilities;

/**
 * Check that the utilities module has the expected exports
 */

describe(`utilities`, () => {

  it(`regexp`, () => {
    expect(regexp).toBeInstanceOf(Object);
  });

  it(`validate`, () => {
    expect(validate).toBeInstanceOf(Object);
  });

});
