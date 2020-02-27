const { models: { Language } } = require(`../../test`);

describe(`Language`, () => {

  it(`is a Language class`, () => {
    expect(Language.name).toBe(`Language`);
  });

});
