const { core } = require(`../../../test`);

const { defineProp } = core.utilities;

/**
 * Check that this utilities module has the expected exports
 */

describe(`core.utilities`, () => {

  it(`defineProp`, () => {
    expect(defineProp).toBeInstanceOf(Function);
    expect(defineProp.name).toBe(`defineProp`);
  });

});
