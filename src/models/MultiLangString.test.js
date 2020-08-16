/* eslint-disable
  max-nested-callbacks,
*/

import chai            from 'chai';
import Model           from '../core/Model.js';
import MultiLangString from './MultiLangString.js';

const { expect } = chai;

const modelName = `MultiLangString`;

const sampleData = { eng: 'Hello world!', spa: 'Hola mundo!' };

describe(modelName, () => {

  it(`class: MultiLangString`, () => {
    expect(MultiLangString.name).to.equal(modelName);
    expect(new MultiLangString).not.to.be.instanceOf(Model);
  });

  describe(`data`, () => {

    it(`String`, () => {
      const data = `hello`;
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).to.equal(data);
    });

    it(`empty String`, () => {
      const mls = new MultiLangString(``);
      expect(mls.size).to.equal(0);
    });

    it(`Object`, () => {
      const data = { eng: `hello` };
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).to.equal(data.eng);
    });

    it(`empty Object`, () => {
      const mls  = new MultiLangString({});
      expect(mls.size).to.equal(0);
    });

    it(`Map`, () => {
      const data = new Map([[`eng`, `hello`]]);
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).to.equal(data.get(`eng`));
    });

    it(`empty Map`, () => {
      const mls = new MultiLangString(new Map);
      expect(mls.size).to.equal(0);
    });

    it(`Error: bad data`, () => {
      const useBadData = () => new MultiLangString(0);
      expect(useBadData).to.throw().with.property(`name`, `MultiLangStringDataError`);
    });

    it(`Error: bad language tag`, () => {
      const useBadLanguageTag = () => new MultiLangString({ 'eng.1': 'Hello world!' });
      expect(useBadLanguageTag).to.throw().with.property(`name`, `LanguageTagError`);
    });

    it(`Error: bad string`, () => {
      const useBadString = () => new MultiLangString({ eng: 42 });
      expect(useBadString).to.throw().with.property(`name`, `MultiLangStringError`);
    });

  });

  describe(`MultiLangString.prototype.{language}`, () => {

    it(`Instantiation`, () => {
      const mls = new MultiLangString(sampleData);
      expect(mls.get(`eng`)).to.equal(sampleData.eng);
      expect(mls.get(`spa`)).to.equal(sampleData.spa);
    });

    it(`Error: set bad language tag`, () => {
      const mls = new MultiLangString(sampleData);
      const setBadLanguageTag = () => mls.set(`Tlahuapa Mixtec`, `ayoo`);
      expect(setBadLanguageTag).to.throw().with.property(`name`, `LanguageTagError`);
    });

    it(`Error: set bad string`, () => {
      const mls = new MultiLangString(sampleData);
      const setBadString = () => mls.set(`mix`, true);
      expect(setBadString).to.throw().with.property(`name`, `MultiLangStringError`);
    });

  });

  it(`.set()`, () => {
    const mls = new MultiLangString;
    const setData = () => mls.set(`hello`, `world`);
    expect(setData).not.to.throw();
  });

  it(`.toJSON()`, () => {

    const mls  = new MultiLangString(sampleData);
    const pojo = JSON.parse(JSON.stringify(mls));

    Object.keys(sampleData)
    .forEach(key => expect(pojo[key]).to.equal(sampleData[key]));

  });

  it(`.type (should not exist)`, () => {
    expect(new MultiLangString().type).to.be.undefined;
  });

});
