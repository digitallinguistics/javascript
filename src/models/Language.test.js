/* eslint-disable
  max-nested-callbacks,
*/

import chai from 'chai';
import { Language, MultiLangString } from './index.js';

chai.should();

describe(`Language`, () => {

  it(`class: Language`, () => {
    Language.name.should.equal(`Language`);
  });

  it(`Abbreviation`, () => {
    const lang = new Language;
    (() => { lang.abbreviation = undefined; }).should.not.throw();
    (() => { lang.abbreviation = `ctm`; }).should.not.throw();
    (() => { lang.abbreviation = `en!`; }).should.throw().with.property(`name`, `AbbreviationError`);
    (typeof lang.abbreviation).should.not.equal(`object`);
  });

  it(`Custom Property`, () => {
    const lang = new Language;
    (() => { lang.deleted = true; }).should.not.throw();
    lang.deleted.should.equal(true);
  });

  it(`Glottocode`, () => {
    const lang = new Language;
    (() => { lang.glottolog = undefined; }).should.not.throw();
    (() => { lang.glottolog = `stan1293`; }).should.not.throw();
    (() => { lang.glottolog = `stan129`; }).should.throw().with.property(`name`, `GlottoCodeError`);
    (typeof lang.glottolog).should.not.equal(`object`);
  });

  it(`ISO 639-3 code`, () => {
    const lang = new Language;
    (() => { lang.iso = undefined; }).should.not.throw();
    (() => { lang.iso = `ctm`; }).should.not.throw();
    (() => { lang.iso = `en`; }).should.throw().with.property(`name`, `ISOCodeError`);
    (typeof lang.iso).should.not.equal(`object`);
  });

  describe(`name`, () => {

    it(`class: MultiLangString`, () => {
      const lang = new Language();
      lang.name.should.be.instanceOf(MultiLangString);
    });

    it(`enumerable`, () => {
      const lang = new Language({ name: 'Chitimacha' });
      Object.keys(lang).should.contain(`name`);
    });

    it(`Success: String`, () => {

      const name = `Chitimacha`;
      const lang = new Language;

      lang.name = name;

      lang.name.get(`eng`).should.equal(name);

    });

    it(`Success: Object`, () => {

      const name = {
        eng: `Chitimacha`,
        fra: `chitimacha`,
      };

      const lang = new Language;

      lang.name = name;

      lang.name.get(`eng`).should.equal(name.eng);
      lang.name.get(`fra`).should.equal(name.fra);

    });

    it(`Error: bad data`, () => {
      const lang = new Language;
      const setBadLang = () => { lang.name = false; };
      setBadLang.should.throw().with.property(`name`, `MultiLangStringDataError`);
    });

  });

});
