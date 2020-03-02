/* eslint-disable
  max-nested-callbacks,
*/

const { models } = require(`../../test`);

const {
  MultiLangString,
  Language,
} = models;

describe(`models`, () => {

  it(`has the expected exports`, () => {
    expect(MultiLangString.name).toBe(`MultiLangString`);
    expect(Language.name).toBe(`Language`);
  });

  it(`have a .toJSON() method`, () => {

    Object.keys(models).forEach(model => {
      expect(model.toJSON).toBeInstanceOf(Function);
    });

  });

});
