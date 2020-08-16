/* eslint-disable
  max-nested-callbacks,
*/

import chai from 'chai';
import { Language, MultiLangString } from './index.js';

const { expect } = chai;

describe(`Language`, () => {

  it(`class: Language`, () => {
    expect(Language.name).to.equal(`Language`);
  });

  it(`Abbreviation`, () => {
    const lang = new Language;
    expect(() => { lang.abbreviation = undefined; }).not.to.throw();
    expect(() => { lang.abbreviation = `ctm`; }).not.to.throw();
    expect(() => { lang.abbreviation = `en!`; }).to.throw().with.property(`name`, `AbbreviationError`);
  });

  it(`Custom Property`, () => {
    const lang = new Language;
    expect(() => { lang.deleted = true; }).not.to.throw();
    expect(lang.deleted).to.equal(true);
  });

  it(`Glottocode`, () => {
    const lang = new Language;
    expect(() => { lang.glottolog = undefined; }).not.to.throw();
    expect(() => { lang.glottolog = `stan1293`; }).not.to.throw();
    expect(() => { lang.glottolog = `stan129`; }).to.throw().with.property(`name`, `GlottoCodeError`);
  });

  it(`ISO 639-3 code`, () => {
    const lang = new Language;
    expect(() => { lang.iso = undefined; }).not.to.throw();
    expect(() => { lang.iso = `ctm`; }).not.to.throw();
    expect(() => { lang.iso = `en`; }).to.throw().with.property(`name`, `ISOCodeError`);
  });

  describe(`name`, () => {

    it(`class: MultiLangString`, () => {
      const lang = new Language();
      expect(lang.name).to.be.instanceOf(MultiLangString);
    });

    it(`enumerable`, () => {
      const lang = new Language({ name: 'Chitimacha' });
      expect(Object.keys(lang)).to.contain(`name`);
    });

    it(`Success: String`, () => {

      const name = `Chitimacha`;
      const lang = new Language;

      lang.name = name;

      expect(lang.name.get(`eng`)).to.equal(name);

    });

    it(`Success: Object`, () => {

      const name = {
        eng: `Chitimacha`,
        fra: `chitimacha`,
      };

      const lang = new Language;

      lang.name = name;

      expect(lang.name.get(`eng`)).to.equal(name.eng);
      expect(lang.name.get(`fra`)).to.equal(name.fra);

    });

    it(`Error: bad data`, () => {
      const lang = new Language;
      const setBadLang = () => { lang.name = false; };
      expect(setBadLang).to.throw().with.property(`name`, `MultiLangStringDataError`);
    });

  });

});
