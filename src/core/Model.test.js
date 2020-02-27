const { core: { Model } } = require(`../../test`);

describe(`Model`, () => {

  it(`is the Model class`, () => {
    expect(Model.name).toBe(`Model`);
  });

});
