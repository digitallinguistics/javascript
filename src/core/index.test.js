const { core } = require(`../index`);

describe(`core`, () => {

  it(`exports an Object`, () => {
    expect(core).toBeInstanceOf(Object);
  });

});
