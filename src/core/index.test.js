const { core: { Model } } = require(`../../test/index.js`);

/**
 * Check that the core module has the expected exports
 */

describe(`core`, () => {

  it(`Model`, () => {
    expect(Model.name).toBe(`Model`);
  });

});
