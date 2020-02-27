const { core } = require(`../../test/index.js`);

const { Model, utilities } = core;

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    expect(Model.name).toBe(`Model`);
  });

  it(`utilities`, () => {
    expect(utilities).toBeInstanceOf(Object);
  });

});
