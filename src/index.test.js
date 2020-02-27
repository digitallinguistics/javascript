const { models } = require(`../test`);

describe(`dlx`, () => {

  it(`models`, () => {
    expect(models).toBeInstanceOf(Object);
  });

});
