const { models } = require(`../index`);

describe(`models`, () => {

  it(`exports an Object`, () => {
    expect(models).toBeInstanceOf(Object);
  });

});
