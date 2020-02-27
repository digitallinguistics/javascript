const { core } = require(`../../test/index.js`);

describe(`core`, () => {

  it(`exports an Object`, () => {
    expect(core).toBeInstanceOf(Object);
  });

});
