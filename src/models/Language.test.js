/* eslint-disable
  max-nested-callbacks,
*/

import expect from 'expect.js';

import { Language, MultiLangString } from './index.js';

describe(`Language`, () => {

  it(`class: Language`, () => {
    expect(Language.name).toBe(`Language`);
  });

  it(`Abbreviation`, () => {
    const lang = new Language;
    expect(() => { lang.abbreviation = undefined; }).not.toThrow();
    expect(() => { lang.abbreviation = `ctm`; }).not.toThrow();
    expect(() => { lang.abbreviation = `en!`; }).toThrowMatching(e => e.name === `AbbreviationError`);
  });

  it(`Custom Property`, () => {
    const lang = new Language;
    expect(() => { lang.deleted = true; }).not.toThrow();
    expect(lang.deleted).toBe(true);
  });

  it(`Glottocode`, () => {
    const lang = new Language;
    expect(() => { lang.glottolog = undefined; }).not.toThrow();
    expect(() => { lang.glottolog = `stan1293`; }).not.toThrow();
    expect(() => { lang.glottolog = `stan129`; }).toThrowMatching(e => e.name === `GlottoCodeError`);
  });

  it(`ISO 639-3 code`, () => {
    const lang = new Language;
    expect(() => { lang.iso = undefined; }).not.toThrow();
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
