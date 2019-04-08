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

describe('Sense', function() {

  const {
    LexemeReference,
    MultiLangString,
    Note,
    Sentence,
    Reference,
    Sense,
    Tags,
  } = dlx.models;

  const data = { gloss: {} };

  it('Errors', function() {
    const badData = () => new Sense(true);
    expect(badData).toThrow();
  });

  it('new Sense()', function() {
    const noData = () => new Sense;
    expect(noData).not.toThrow();

    const oldSense = new Sense;
    const newSense = new Sense(oldSense);
    expect(newSense).toBe(oldSense);
  });

  it('Sense.prototype.argumentStructure', function() {
    const sense      = new Sense(Object.assign({}, data, { argumentStructure: 'SUBJ V' }));
    const badData    = () => new Sense(Object.assign({}, data, { argumentStructure: true }));
    const setBadData = () => { new Sense().argumentStructure = true; };
    expect(typeof sense.argumentStructure === 'string').toBe(true);
    expect(badData).toThrow();
    expect(setBadData).toThrow();
  });

  it('Sense.prototype.category', function() {
    const sense     = new Sense(Object.assign({}, data, { category: { eng: 'noun', spa: 'nomino' } }));
    const badCat    = () => new Sense(Object.assign({}, data, { category: 'noun' }));
    const setBadCat = () => { new Sense().category = 'noun'; };
    expect(sense.category instanceof MultiLangString).toBe(true);
    expect(badCat).toThrow();
    expect(setBadCat).toThrow();
  });

  it('Sense.prototype.definition', function() {
    const sense     = new Sense(Object.assign({}, data, { definition: { eng: 'hello', spa: 'hola' } }));
    const badDef    = () => new Sense(Object.assign({}, data, { definition: 'hello' }));
    const setBadDef = () => { new Sense().definition = 'hello'; };
    expect(sense.definition instanceof MultiLangString).toBe(true);
    expect(badDef).toThrow();
    expect(setBadDef).toThrow();
  });

  it('Sense.prototype.derives', function() {
    const sense     = new Sense(Object.assign({}, data, { derives: { eng: 'noun', spa: 'nomino' } }));
    const badDer    = () => new Sense(Object.assign({}, data, { derives: 'noun' }));
    const setBadDer = () => { new Sense().derives = 'noun'; };
    expect(sense.derives instanceof MultiLangString).toBe(true);
    expect(badDer).toThrow();
    expect(setBadDer).toThrow();
  });

  it('Sense.prototype.examples', function() {
    const sentence         = { transcription: {}, translation: {}, words: [] };
    const sense          = new Sense(Object.assign({}, data, { examples: [sentence] }));
    const badExample     = () => new Sense(Object.assign({}, data, { examples: [true] }));
    const badExamples    = () => new Sense(Object.assign({}, data, { examples: true }));
    expect(sense.examples[0] instanceof Sentence).toBe(true);
    expect(badExample).toThrow();
    expect(badExamples).toThrow();
  });

  it('Sense.prototype.gloss', function() {
    const sense       = new Sense(Object.assign({}, data, { gloss: { eng: 'hello', spa: 'hola' } }));
    const badGloss    = () => new Sense(Object.assign({}, data, { gloss: 'hello' }));
    const setBadGloss = () => { new Sense().gloss = 'hello'; };
    expect(sense.gloss instanceof MultiLangString).toBe(true);
    expect(badGloss).toThrow();
    expect(setBadGloss).toThrow();
  });

  it('Sense.prototype.inflectionClass', function() {
    const sense       = new Sense(Object.assign({}, data, {
      inflectionClass: { eng: 'irrealis', spa: 'irrealis' },
    }));
    const badClass    = () => new Sense(Object.assign({}, data, { inflectionClass: 'irrealis' }));
    const setBadClass = () => { new Sense().inflectionClass = 'irrealis'; };
    expect(sense.inflectionClass instanceof MultiLangString).toBe(true);
    expect(badClass).toThrow();
    expect(setBadClass).toThrow();
  });

  it('Sense.prototype.lexicalRelations', function() {
    const relation     = { lexeme: 'lexEntry1', relation: 'compare' };
    const sense        = new Sense(Object.assign({}, data, { lexicalRelations: [relation] }));
    const badRelation  = () => new Sense(Object.assign({}, data, {
      lexicalRelations: [{ lexeme: 'lexEntry1' }],
    }));
    const badRelations = () => new Sense(Object.assign({}, data, { lexicalRelations: true }));
    const dup = new Sense(Object.assign({}, data, { lexicalRelations: [relation, relation] }));
    expect(sense.lexicalRelations[0] instanceof LexemeReference).toBe(true);
    expect(dup.lexicalRelations.length).toBe(1);
    expect(badRelation).toThrow();
    expect(badRelations).toThrow();
  });

  it('Sense.prototype.notes', function() {
    const note     = new Note('una nota');
    const sense    = new Sense(Object.assign({}, data, { notes: ['a note', note] }));
    const badNote  = () => new Sense(Object.assign({}, data, { notes: [true] }));
    const badNotes = () => new Sense(Object.assign({}, data, { notes: true }));
    expect(sense.notes[0] instanceof Note).toBe(true);
    expect(sense.notes.includes(note)).toBe(true);
    expect(badNote).toThrow();
    expect(badNotes).toThrow();
  });

  it('Sense.prototype.references', function() {
    const ref        = { title: 'The Title' };
    const sense      = new Sense(Object.assign({}, data, { references: [ref] }));
    const badRefs    = () => new Sense(Object.assign({}, data, { references: true }));
    expect(sense.references[0] instanceof Reference).toBe(true);
    expect(badRefs).toThrow();
  });

  it('Sense.prototype.scientificName', function() {
    const sense      = new Sense(Object.assign({}, data, { scientificName: 'lupus' }));
    const badData    = () => new Sense(Object.assign({}, data, { scientificName: true }));
    const setBadData = () => { new Sense().scientificName = true; };
    expect(typeof sense.scientificName === 'string').toBe(true);
    expect(badData).toThrow();
    expect(setBadData).toThrow();
  });

  it('Sense.prototype.sources', function() {
    const badSource     = () => new Sense(Object.assign({}, data, { sources: [true] }));
    const badSources    = () => new Sense(Object.assign({}, data, { sources: true }));
    expect(badSource).toThrow();
    expect(badSources).toThrow();
  });

  it('Sense.prototype.tags', function() {
    const badTags    = () => new Sense(Object.assign({}, data, { tags: true }));
    const setBadTags = () => { new Sense().tags = true; };
    expect(badTags).toThrow();
    expect(setBadTags).toThrow();
    expect(new Sense({ tags: {} }).tags instanceof Tags).toBe(true);
  });

  it('Sense.prototype.usages', function() {
    const sense        = new Sense(Object.assign({}, data, { usages: [{ eng: 'formal' }] }));
    const badUsage     = () => new Sense(Object.assign({}, data, { usages: [true] }));
    const badUsages    = () => new Sense(Object.assign({}, data, { usages: true }));
    expect(sense.usages.length).toBe(1);
    expect(sense.usages[0] instanceof MultiLangString).toBe(true);
    expect(badUsage).toThrow();
    expect(badUsages).toThrow();
  });

  it('Sense.prototype.variantOf', function() {
    const sense = new Sense(Object.assign({}, data, { variantOf: 'lexEntry1' }));
    const badData    = () => new Sense(Object.assign({}, data, { variantOf: true }));
    const setBadData = () => { new Sense().variantOf = true; };
    expect(sense.variantOf instanceof LexemeReference).toBe(true);
    expect(badData).toThrow();
    expect(setBadData).toThrow();
  });

  it('Sense.prototype.variants', function() {
    const variant        = { lexeme: 'lexEntry1', variantType: { eng: 'regional' } };
    const sense          = new Sense(Object.assign({}, data, { variants: [variant] }));
    const badVariants    = () => new Sense(Object.assign({}, data, { variants: true }));
    const dups           = new Sense(Object.assign({}, data, { variants: [variant, variant] }));
    expect(sense.variants[0] instanceof LexemeReference).toBe(true);
    expect(badVariants).toThrow();
    expect(dups.variants.length).toBe(1);
  });

  it('Sense.prototype.variantType', function() {
    const sense      = new Sense(Object.assign({}, data, { variantType: { eng: 'plural' } }));
    const badData    = () => new Sense(Object.assign({}, data, { variantType: true }));
    const setBadData = () => { new Sense().variantType = true; };
    expect(sense.variantType instanceof MultiLangString).toBe(true);
    expect(badData).toThrow();
    expect(setBadData).toThrow();
  });

});
