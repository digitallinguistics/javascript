const { core: { Model } } = require(`../../test`);

describe(`Model`, () => {

  it(`is the Model class`, () => {
    expect(Model.name).toBe(`Model`);
  });

  it(`copies data to the instance / allows custom properties`, () => {
    const hello = `jambo`;
    const model = new Model({ hello });
    expect(model.hello).toBe(hello);
  });

});
