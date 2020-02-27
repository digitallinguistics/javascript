const {
  core:   { Model },
  models: { Language },
} = require(`../../test`);

describe(`Language`, () => {

  it(`is a Model`, () => {
    expect(new Language).toBeInstanceOf(Model);
  });

  it(`is a Language class`, () => {
    expect(Language.name).toBe(`Language`);
  });

});
