/* eslint-disable
  max-nested-callbacks,
*/

const { models } = require(`../../test`);

const {
  MultiLangString,
  Language,
} = models;

describe(`Language`, () => {

  it(`class: Language`, () => {
    expect(Language.name).toBe(`Language`);
  });

  describe(`Language.prototype.name`, () => {

    it(`class: MultiLangString`, () => {
      const lang = new Language();
      expect(lang.name).toBeInstanceOf(MultiLangString);
    });

    describe(`Success: good data`, () => {

      it(`String`, () => {
        const name = `Chitimacha`;
        const lang = new Language({ name });
        expect(lang.name.get(`eng`)).toBe(name);
      });

      it(`Object`, () => {

        const name = {
          eng: `Chitimacha`,
          fra: `chitimacha`,
        };

        const lang = new Language({ name });

        expect(lang.name.get(`eng`)).toBe(name.eng);
        expect(lang.name.get(`fra`)).toBe(name.fra);

      });

    });

    it(`Success: set good data`, () => {

      const name = {
        eng: `Chitimacha`,
        fra: `chitimacha`,
      };

      const lang = new Language;

      lang.name = name;

      expect(lang.name.get(`eng`)).toBe(name.eng);
      expect(lang.name.get(`fra`)).toBe(name.fra);

    });

    it(`Error: bad data`);

    it(`Fail: set bad data`);

  });

});
