/* eslint-disable
  max-nested-callbacks,
*/

import chai from 'chai';
import { Language, MultiLangString } from './index.js';

const should = chai.should();

describe(`Language`, () => {

  it(`class: Language`, () => {
    Language.name.should.equal(`Language`);
  });

  it(`instantiates with no data`, () => {

    const lang = new Language;

    should.not.exist(lang.abbreviation);
    should.not.exist(lang.glottolog);
    should.not.exist(lang.iso);
    should.not.exist(lang.tags);

    lang.type.should.equal(`Language`);
    lang.name.should.be.instanceOf(MultiLangString);

  });

  it(`abbreviation`, () => {
    const lang = new Language;
    (() => { lang.abbreviation = undefined; }).should.not.throw();
    (() => { lang.abbreviation = `ctm`; }).should.not.throw();
    (() => { lang.abbreviation = `en!`; }).should.throw().with.property(`name`, `AbbreviationError`);
    (typeof lang.abbreviation).should.not.equal(`object`);
  });

  it(`custom property`, () => {

    const lang = new Language;
    (() => { lang.deleted = true; }).should.not.throw();
    lang.deleted.should.equal(true);

    const l = new Language({ customProperty: true });
    l.customProperty.should.be.true;

  });

  it(`glottolog`, () => {
    const lang = new Language;
    (() => { lang.glottolog = undefined; }).should.not.throw();
    (() => { lang.glottolog = `stan1293`; }).should.not.throw();
    (() => { lang.glottolog = `stan129`; }).should.throw().with.property(`name`, `GlottoCodeError`);
    (typeof lang.glottolog).should.not.equal(`object`);
  });

  it(`iso`, () => {
    const lang = new Language;
    (() => { lang.iso = undefined; }).should.not.throw();
    (() => { lang.iso = `ctm`; }).should.not.throw();
    (() => { lang.iso = `en`; }).should.throw().with.property(`name`, `ISOCodeError`);
    (typeof lang.iso).should.not.equal(`object`);
  });

  it(`name`, () => {
    const lang = new Language({ name: { eng: `Chitimacha` } });
    lang.name.should.be.instanceOf(MultiLangString);
    lang.name.get(`eng`).should.equal(`Chitimacha`);
  });

  it(`tags`, () => {
    const lang = new Language({ tags: { position: `final` } });
    lang.tags.get(`position`).should.equal(`final`);
  });

  it(`type`, () => {
    const lang = new Language;
    lang.type.should.equal(`Language`);
  });

});
