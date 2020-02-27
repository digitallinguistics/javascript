/* eslint-disable
  max-nested-callbacks,
*/

const {
  core:   { Model },
  models: { MultiLangString },
} = require(`../../test`);

const modelName = `MultiLangString`;

describe(modelName, () => {

  it(`class: MultiLangString`, () => {
    expect(MultiLangString.name).toBe(modelName);
    expect(new MultiLangString).not.toBeInstanceOf(Model);
  });

  describe(`data`, () => {

    it(`String`, () => {
      const data = `hello`;
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).toBe(data);
    });

    it(`empty String`, () => {
      const mls = new MultiLangString(``);
      expect(mls.size).toBe(0);
    });

    it(`Object`, () => {
      const data = { eng: `hello` };
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).toBe(data.eng);
    });

    it(`empty Object`, () => {
      const mls  = new MultiLangString({});
      expect(mls.size).toBe(0);
    });

    it(`Map`, () => {
      const data = new Map([[`eng`, `hello`]]);
      const mls  = new MultiLangString(data);
      expect(mls.get(`eng`)).toBe(data.get(`eng`));
    });

    it(`empty Map`, () => {
      const mls = new MultiLangString(new Map);
      expect(mls.size).toBe(0);
    });

    it(`Error: bad data`, () => {
      const useBadData = () => new MultiLangString(0);
      expect(useBadData).toThrowMatching(e => e.name === `MultiLangStringDataError`);
    });

    it(`Error: bad language tag`, () => {
      const useBadLanguageTag = () => new MultiLangString({ 'eng.1': 'Hello world!' });
      expect(useBadLanguageTag).toThrowMatching(e => e.name === `LanguageTagError`);
    });

    it(`Error: bad string`, () => {
      const useBadString = () => new MultiLangString({ eng: 42 });
      expect(useBadString).toThrowMatching(e => e.name === `MultiLangStringError`);
    });

  });

  describe(`MultiLangString.prototype.{language}`, () => {

    const data = { eng: 'Hello world!', spa: 'Hola mundo!' };

    it(`Instantiation`, () => {
      const mls = new MultiLangString(data);
      expect(mls.get(`eng`)).toBe(data.eng);
      expect(mls.get(`spa`)).toBe(data.spa);
    });

    it(`Error: set bad language tag`, () => {
      const mls = new MultiLangString(data);
      const setBadLanguageTag = () => mls.set(`Tlahuapa Mixtec`, `ayoo`);
      expect(setBadLanguageTag).toThrowMatching(e => e.name === `LanguageTagError`);
    });

    it(`Error: set bad string`, () => {
      const mls = new MultiLangString(data);
      const setBadString = () => mls.set(`mix`, true);
      expect(setBadString).toThrowMatching(e => e.name === `MultiLangStringError`);
    });

  });

  it(`~~MultiLangString.prototype.type~~`, () => {
    expect(new MultiLangString().type).toBeUndefined();
  });

});
