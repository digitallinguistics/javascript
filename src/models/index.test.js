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

});
