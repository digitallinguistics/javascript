/* eslint-disable
  max-nested-callbacks,
*/

import chai            from 'chai';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

const should = chai.should();

const modelName = `MultiLangString`;

const sampleData = { eng: 'Hello world!', spa: 'Hola mundo!' };

describe(modelName, () => {

  it(`class: MultiLangString`, () => {
    MultiLangString.name.should.equal(modelName);
    (new MultiLangString).should.not.to.be.instanceOf(Model);
  });

  describe(`data`, () => {

    it(`String`, () => {
      const data = `hello`;
      const mls  = new MultiLangString(data);
      mls.get(`eng`).should.equal(data);
    });

    it(`empty String`, () => {
      const mls = new MultiLangString(``);
      mls.size.should.equal(0);
    });

    it(`Object`, () => {
      const data = { eng: `hello` };
      const mls  = new MultiLangString(data);
      mls.get(`eng`).should.equal(data.eng);
    });

    it(`empty Object`, () => {
      const mls  = new MultiLangString({});
      mls.size.should.equal(0);
    });

    it(`Map`, () => {
      const data = new Map([[`eng`, `hello`]]);
      const mls  = new MultiLangString(data);
      mls.get(`eng`).should.equal(data.get(`eng`));
    });

    it(`empty Map`, () => {
      const mls = new MultiLangString(new Map);
      mls.size.should.equal(0);
    });

    it(`Error: bad data`, () => {
      const useBadData = () => new MultiLangString(0);
      useBadData.should.throw().with.property(`name`, `MultiLangStringDataError`);
    });

    it(`Error: bad language tag`, () => {
      const useBadLanguageTag = () => new MultiLangString({ 'eng.1': 'Hello world!' });
      useBadLanguageTag.should.throw().with.property(`name`, `LanguageTagError`);
    });

    it(`Error: bad string`, () => {
      const useBadString = () => new MultiLangString({ eng: 42 });
      useBadString.should.throw().with.property(`name`, `MultiLangStringError`);
    });

  });

  describe(`MultiLangString.prototype.{language}`, () => {

    it(`Instantiation`, () => {
      const mls = new MultiLangString(sampleData);
      mls.get(`eng`).should.equal(sampleData.eng);
      mls.get(`spa`).should.equal(sampleData.spa);
    });

    it(`Error: set bad language tag`, () => {
      const mls = new MultiLangString(sampleData);
      const setBadLanguageTag = () => mls.set(`Tlahuapa Mixtec`, `ayoo`);
      setBadLanguageTag.should.throw().with.property(`name`, `LanguageTagError`);
    });

    it(`Error: set bad string`, () => {
      const mls = new MultiLangString(sampleData);
      const setBadString = () => mls.set(`mix`, true);
      setBadString.should.throw().with.property(`name`, `MultiLangStringError`);
    });

  });

  it(`.set()`, () => {
    const mls = new MultiLangString;
    const setData = () => mls.set(`hello`, `world`);
    setData.should.not.throw();
  });

  it(`.toJSON()`, () => {

    const mls  = new MultiLangString(sampleData);
    const pojo = JSON.parse(JSON.stringify(mls));

    Object.keys(sampleData)
    .forEach(key => pojo[key].should.equal(sampleData[key]));

  });

  it(`.type (should not exist)`, () => {
    should.not.exist(new MultiLangString().type);
  });

});
