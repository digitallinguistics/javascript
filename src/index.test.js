const { core, models } = require(`../test`);

describe(`dlx`, () => {

  it(`core`, () => {
    expect(core).toBeInstanceOf(Object);
  });

  it(`models`, () => {
    expect(models).toBeInstanceOf(Object);
  });

});
