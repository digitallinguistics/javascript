const { models } = require(`../../test`);

describe(`models`, () => {

  it(`exports an Object`, () => {
    expect(models).toBeInstanceOf(Object);
  });

});
