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

  it(`Glottocode`, () => {
    const lang = new Language;
    expect(() => { lang.glottolog = `stan1293`; }).not.toThrow();
    expect(() => { lang.glottolog = `stan129`; }).toThrowMatching(e => e.name === `GlottoCodeError`);
  });

  it(`ISO 639-3 code`, () => {
    const lang = new Language;
    expect(() => { lang.iso = `ctm`; }).not.toThrow();
    expect(() => { lang.iso = `en`; }).toThrowMatching(e => e.name === `ISOCodeError`);
  });

  describe(`name`, () => {

    it(`class: MultiLangString`, () => {
      const lang = new Language();
      expect(lang.name).toBeInstanceOf(MultiLangString);
    });

    it(`enumerable`, () => {
      const lang = new Language({ name: 'Chitimacha' });
      expect(Object.keys(lang)).toContain(`name`);
    });

    it(`Success: String`, () => {

      const name = `Chitimacha`;
      const lang = new Language;

      lang.name = name;

      expect(lang.name.get(`eng`)).toBe(name);

    });

    it(`Success: Object`, () => {

      const name = {
        eng: `Chitimacha`,
        fra: `chitimacha`,
      };

      const lang = new Language;

      lang.name = name;

      expect(lang.name.get(`eng`)).toBe(name.eng);
      expect(lang.name.get(`fra`)).toBe(name.fra);

    });

    it(`Error: bad data`, () => {
      const lang = new Language;
      const setBadLang = () => { lang.name = false; };
      expect(setBadLang).toThrowMatching(e => e.name === `MultiLangStringDataError`);
    });

  });

});
