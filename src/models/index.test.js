const { models } = require(`../../test`);

const {
  MultiLangString,
  Language,
} = models;

/**
 * Check that the models module has the expected exports
 */

describe(`models`, () => {

  it(`has the expected exports`, () => {
    expect(MultiLangString.name).toBe(`MultiLangString`);
    expect(Language.name).toBe(`Language`);
  });

});
