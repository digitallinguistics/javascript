/* global dlx */

/* eslint-disable
  func-names,
  max-nested-callbacks,
  max-statements,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe(`Lexeme`, function() {

  const { Model } = dlx.base;

  const {
    Lexeme,
    LexemeReference,
    MultiLangString,
    Note,
    Sentence,
    Reference,
    Tags,
    Transcription,
  } = dlx.models;

  // Valid Data
  const data = {
    lemma:  {},
    senses: [],
  };

  it(`new Lexeme()`, function() {

    const lexeme = new Lexeme;
    expect(lexeme instanceof Model).toBe(true);

    const oldLexeme = new Lexeme;
    const newLexeme = new Lexeme(oldLexeme);
    expect(oldLexeme).toBe(newLexeme);

  });

  it(`Lexeme.prototype.{customProperty}`, function() {

    const lexeme = new Lexeme(Object.assign({}, data, { customProperty1: `custom value 1` }));
    lexeme.customProperty2 = `custom value 2`;

    expect(lexeme.customProperty1).toBe(`custom value 1`);
    expect(lexeme.customProperty2).toBe(`custom value 2`);

  });

  it(`Lexeme.prototype.allomorphs`, function() {

    const badAllomorphs  = () => new Lexeme(Object.assign({}, data, { allomorphs: true }));
    const setBadAllomorphs = () => {
      const lexeme = new Lexeme;
      lexeme.allomorphs = true;
      return lexeme;
    };
    const { allomorphs } = setBadAllomorphs;
    expect(badAllomorphs).toThrow();
    expect(setBadAllomorphs).toThrow();
    expect(setBadAllomorphs.allomorphs).toBe(allomorphs);

  });

  describe(`Lexeme.prototype.components`, function() {

    const lexeme = new Lexeme({
      components: [{ lexeme: `lexemeKey` }],
      lemma:      { spa: `hola` },
      senses:     [],
    });

    it(`throws the expected errors`, function() {

      const badComponents = () => new Lexeme(Object.assign({}, data, { components: true }));
      const setBadComponents = () => { new Lexeme().components = true; };
      const notArray = () => new Lexeme({
        components: {},
        lemma:      { spa: `hola` },
        senses:     [],
      });

      expect(badComponents).toThrow();
      expect(setBadComponents).toThrow();
      expect(notArray).toThrow();

    });

    it(`is an Array of Lexeme References`, function() {

      expect(Array.isArray(lexeme.components)).toBe(true);
      expect(lexeme.components.length).toBe(1);
      expect(lexeme.components[0] instanceof LexemeReference).toBe(true);

    });

    it(`stringifies properly`, function() {
      const json = JSON.stringify(lexeme);
      const pojo = JSON.parse(json);
      expect(Array.isArray(pojo.components)).toBe(true);
    });

  });

  describe(`Lexeme.prototype.dateCreated`, function() {

    it(`throws the expected errors`, function() {
      const badDate = () => new Lexeme(Object.assign({}, data, { dateCreated: `yesterday` }));
      const setBadDate = () => { new Lexeme().dateCreated = `yesterday`; };
      expect(badDate).toThrow();
      expect(setBadDate).toThrow();
    });

    it(`provides the date if none was provided`, function() {
      const lexeme = new Lexeme();
      expect(lexeme.dateCreated instanceof Date).toBe(true);
    });

    it(`copies the dateCreated if one was provided`, function() {
      const data = { lemma: {}, senses: [] };
      const date = new Date;
      const dateString =  new Date().toString();
      const lex1 = new Lexeme(Object.assign({ dateCreated: date }, data));
      const lex2 = new Lexeme(Object.assign({ dateCreated: dateString }, data));
      expect(lex1.dateCreated).toEqual(date);
      expect(lex2.dateCreated.toString()).toEqual(dateString);
    });

  });

  describe(`Lexeme.prototype.dateModified`, function() {

    it(`throws the expected errors`, function() {
      const badDate = () => new Lexeme(Object.assign({}, data, { dateModified: `yesterday` }));
      const setBadDate = () => { new Lexeme().dateModified = `yesterday`; };
      expect(badDate).toThrow();
      expect(setBadDate).toThrow();
    });

    it(`provides the date if none is provided`, function() {
      const lexeme = new Lexeme();
      expect(lexeme.dateModified instanceof Date).toBe(true);
    });

    it(`copies the dateModified if one was provided`, function() {
      const data = { lemma: {}, senses: [] };
      const date = new Date;
      const dateString =  new Date().toString();
      const lex1 = new Lexeme(Object.assign({ dateModified: date }, data));
      const lex2 = new Lexeme(Object.assign({ dateModified: dateString }, data));
      expect(lex1.dateModified).toEqual(date);
      expect(lex2.dateModified.toString()).toEqual(dateString);
    });

    it(`updates dateModified when properties change`, function() {
      const lexeme = new Lexeme();
      const originalDate = lexeme.dateModified;
      lexeme.citationForm = new Transcription({ eng: `hello` });
      const newDate = lexeme.dateModified;
      expect(newDate).not.toBe(originalDate);
    });

  });

  describe(`Lexeme.prototype.examples`, function() {

    it(`throws the expected errors`, function() {
      const badExamples = () => new Lexeme(Object.assign({}, data, { examples: true }));
      const setBadExamples = () => { new Lexeme().examples = true; };
      expect(badExamples).toThrow();
      expect(setBadExamples).toThrow();
    });

    it(`each item is a Sentence`, function() {
      const sentence = { transcription: {}, translation: {}, words: [] };
      const lexeme = new Lexeme(Object.assign({}, data, { examples: [sentence] }));
      expect(lexeme.examples[0] instanceof Sentence).toBe(true);
    });

  });

  it(`Lexeme.prototype.features`, function() {

    const lexeme = new Lexeme({ tags: {} });
    expect(lexeme.tags instanceof Tags).toBe(true);

    const badFeature  = () => new Lexeme(Object.assign({}, data, { features: { num: 13 } }));
    const badFeatures = () => new Lexeme(Object.assign({}, data, { features: true }));
    expect(badFeature).toThrow();
    expect(badFeatures).toThrow();

  });

  describe(`Lexeme.prototype.includedIn`, function() {

    it(`throws the expected errors`, function() {
      const badData = () => new Lexeme(Object.assign({}, data, { includedIn: true }));
      const setBadData = () => { new Lexeme().includedIn = true; };
      expect(badData).toThrow();
      expect(setBadData).toThrow();
    });

    it(`each item is a LexemeReference`, function() {
      const lexeme = new Lexeme(Object.assign({}, data, { includedIn: [`lexEntry1`] }));
      expect(lexeme.includedIn[0] instanceof LexemeReference).toBe(true);
    });

    it(`does not add duplicate references`, function() {
      const ref    = new LexemeReference(`lexEntry1`);
      const lexeme = new Lexeme(Object.assign({}, data, { includedIn: [ref, ref] }));
      expect(lexeme.includedIn.length).toBe(1);
    });

  });

  describe(`Lexeme.prototype.key`, function() {
    const key = `lexEntry1`;
    const lexeme = new Lexeme(Object.assign({}, data, { key }));
    const badKey = () => new Lexeme(Object.assign({}, data, { key: `bad key` }));
    const setBadKey = () => { lexeme.key = `bad key`; };

    it(`sets the key correctly`, function() {
      expect(lexeme.key).toBe(key);
    });

    it(`throws an error for bad key data`, function() {
      expect(badKey).toThrow();
    });

    it(`throws an error when setting a bad key`, function() {
      expect(setBadKey).toThrow();
    });

  });

  describe(`Lexeme.prototype.lexicalRelations`, function() {

    it(`throws the expected errors`, function() {
      const badRelations = () => new Lexeme(Object.assign({}, data, { lexicalRelations: true }));
      const setBadRelations = () => { new Lexeme().lexicalRelations = [{ lexeme: `lexEntry` }]; };
      expect(badRelations).toThrow();
      expect(setBadRelations).toThrow();
    });

    it(`does not add duplicate relations`, function() {
      const relation = new LexemeReference(`lexEntry1`);
      relation.relation = `compare`;
      const dups = new Lexeme(Object.assign({}, data, { lexicalRelations: [relation, relation] }));
      expect(dups.lexicalRelations.length).toBe(1);
    });

    it(`contains instances of LexemeReference`, function() {
      const relation = { lexeme: `lexEntry1`, relation: `compare` };
      const lexeme = new Lexeme(Object.assign({}, data, { lexicalRelations: [relation] }));
      expect(lexeme.lexicalRelations[0] instanceof LexemeReference).toBe(true);
    });

  });

  describe(`Lexeme.prototype.literalMeaning`, function() {

    it(`throws the expected errors`, function() {
      const badMeaning = () => new Lexeme(Object.assign({}, data, { literalMeaning: true }));
      const setBadMeaning = () => { new Lexeme().literalMeaning = true; };
      expect(badMeaning).toThrow();
      expect(setBadMeaning).toThrow();
    });

    it(`is a MultiLangString`, function() {
      const literalMeaning = { eng: `test` };
      const lexeme = new Lexeme(Object.assign({}, data, { literalMeaning }));
      expect(lexeme.literalMeaning instanceof MultiLangString).toBe(true);
      expect(lexeme.literalMeaning.eng).toBe(literalMeaning.eng);
    });

  });

  describe(`Lexeme.prototype.morphemeType`, function() {

    it(`throws the expected errors`, function() {
      const badType = () => new Lexeme(Object.assign({}, data, { morphemeType: true }));
      const setBadType = () => { new Lexeme().morphemeType = true; };
      expect(badType).toThrow();
      expect(setBadType).toThrow();
    });

    it(`is a MultiLangString`, function() {
      const morphemeType = { eng: `clitic` };
      const lexeme = new Lexeme(Object.assign({}, data, { morphemeType }));
      expect(lexeme.morphemeType instanceof MultiLangString).toBe(true);
      expect(lexeme.morphemeType.eng).toBe(morphemeType.eng);
    });

  });

  it(`Lexeme.prototype.notes`, function() {

    const badNotes = () => new Lexeme(Object.assign({}, data, { notes: true }));
    expect(badNotes).toThrow();

    const lexeme = new Lexeme(Object.assign({}, data, { notes: [`test note`] }));
    expect(lexeme.notes[0] instanceof Note).toBe(true);

  });

  it(`Lexeme.prototype.references`, function() {

    const badReferences    = () => new Lexeme(Object.assign({}, data, { references: true }));
    const setBadReferences = () => { new Lexeme().references = true; };

    expect(badReferences).toThrow();
    expect(setBadReferences).toThrow();

    const ref = { title: `cool title` };
    const lexeme = new Lexeme(Object.assign({}, data, { references: [ref] }));
    expect(lexeme.references[0] instanceof Reference).toBe(true);

  });

  describe(`Lexeme.prototype.sources`, function() {

    it(`throws the expected errors`, function() {
      const badSource     = () => new Lexeme(Object.assign({}, data, { sources: [true] }));
      const badSources    = () => new Lexeme(Object.assign({}, data, { sources: true }));
      const setBadSources = () => { new Lexeme().sources = true; };
      expect(badSource).toThrow();
      expect(badSources).toThrow();
      expect(setBadSources).toThrow();
    });

  });

  describe(`Lexeme.prototype.syllableStructure`, function() {

    it(`throws the expected errors`, function() {
      const badSyll    = () => new Lexeme(Object.assign({}, data, { syllableStructure: true }));
      const setBadSyll = () => { new Lexeme().syllableStructure = true; };
      expect(badSyll).toThrow();
      expect(setBadSyll).toThrow();
    });

  });

  it(`Lexeme.prototype.tags`, function() {

    const badTags    = () => new Lexeme(Object.assign({}, data, { tags: true }));
    const setBadTags = () => { new Lexeme().tags = true; };
    expect(badTags).toThrow();
    expect(setBadTags).toThrow();

    const lexeme = new Lexeme({ tags: {} });
    expect(lexeme.tags instanceof Tags).toBe(true);

  });

  describe(`Lexeme.prototype.tone`, function() {

    const badTone    = () => new Lexeme(Object.assign({}, data, { tone: true }));
    const setBadTone = () => { new Lexeme().tone = true; };

    it(`throws the expected errors`, function() {
      expect(badTone).toThrow();
      expect(setBadTone).toThrow();
    });

  });

  describe(`Lexeme.prototype.url`, function() {

    const badURL    = () => new Lexeme(Object.assign({}, data, { url: `digitallinguistics.io` }));
    const setBadURL = () => { new Lexeme().url = `digitallinguistics.io`; };

    it(`throws the expected errors`, function() {
      expect(badURL).toThrow();
      expect(setBadURL).toThrow();
    });

  });

  describe(`Lexeme.prototype.variantOf`, function() {

    it(`throws the expected errors`, function() {

      const badData    = () => new Lexeme(Object.assign({}, data, { variantOf: true }));
      const setBadData = () => { new Lexeme().variantOf = true; };

      expect(badData).toThrow();
      expect(setBadData).toThrow();

    });

    it(`is an instance of LexemeReference`, function() {
      const lexeme = new Lexeme(Object.assign({}, data, { variantOf: `lexEntry1` }));
      expect(lexeme.variantOf instanceof LexemeReference).toBe(true);
    });

  });

  it(`Lexeme.prototype.variants`, function() {

    const badVariants = () => new Lexeme(Object.assign({}, data, { variants: true }));
    expect(badVariants).toThrow();

    const variant = new LexemeReference({ lexeme: `lexEntry1`, variantType: { eng: `plural` } });
    const dups = new Lexeme(Object.assign({}, data, { variants: [variant, variant] }));
    expect(dups.variants[0] instanceof LexemeReference).toBe(true);
    expect(dups.variants.length).toBe(1);

  });

  describe(`Lexeme.prototype.variantType`, function() {

    it(`throws the expected errors`, function() {

      const badData    = () => new Lexeme(Object.assign({}, data, { variantType: true }));
      const setBadData = () => { new Lexeme().variantType = true; };

      expect(badData).toThrow();
      expect(setBadData).toThrow();

    });

    it(`is an instance of MultiLangString`, function() {
      const lexeme     = new Lexeme(Object.assign({}, data, { variantType: { eng: `plural` } }));
      expect(lexeme.variantType instanceof MultiLangString).toBe(true);
    });

  });

  // Methods
  it(`Lexeme.prototype.toJSON()`, function() {

    const keys = [
      `dateCreated`,
      `dateModified`,
      `defaultAnalysisLanguage`,
      `defaultOrthography`,
      `lemma`,
      `senses`,
      `type`,
    ];

    const lexeme = new Lexeme();
    const json   = JSON.stringify(lexeme);
    const pojo   = JSON.parse(json);
    expect(Object.keys(pojo).length).toBe(keys.length);

  });

});
