const { core, models, utilities } = require(`../test`);

describe(`dlx`, () => {

  it(`core`, () => {
    expect(core).toBeInstanceOf(Object);
  });

  it(`models`, () => {
    expect(models).toBeInstanceOf(Object);
  });

  it(`utilities`, () => {
    expect(utilities).toBeInstanceOf(Object);
  });

});
