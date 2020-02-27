const { core: { Model } } = require(`../../test`);

describe(`Model`, () => {

  it(`exports the Model class`, () => {
    expect(Model.name).toBe(`Model`);
  });

});
