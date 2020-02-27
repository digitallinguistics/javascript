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

describe('Word', function() {

  const { Model } = dlx.base;

  const {
    Morpheme,
    MultiLangString,
    Note,
    Word,
  } = dlx.models;

  const data = {
    morphemes:     [],
    transcription: {},
    translation:   {},
  };

  // instantiation
  it('Errors', function() {
    const badData = () => new Word(true);
    expect(badData).toThrow();
  });

  it('new Word()', function() {
    const oldWord = new Word;
    const newWord = new Word(oldWord);
    expect(new Word() instanceof Model).toBe(true);
    expect(newWord).toBe(oldWord);
  });

  // properties
  it('Word.prototype.{customProperty}', function() {
    const word = new Word(Object.assign({}, data, { customProperty1: 'custom value 1' }));
    word.customProperty2 = 'custom value 2';
    expect(word.customProperty1).toBe('custom value 1');
    expect(word.customProperty2).toBe('custom value 2');
  });

  it('Word.prototype.gloss', function() {
    const word = new Word(Object.assign({}, data, { gloss: { eng: '3sg' } }));
    const badGloss = () => new Word(Object.assign({}, data, { gloss: '3sg' }));
    const setBadGloss = () => { word.gloss = '3sg'; };
    expect(word.gloss instanceof MultiLangString).toBe(true);
    expect(word.gloss.eng).toBe('3sg');
    expect(badGloss).toThrow();
    expect(setBadGloss).toThrow();
  });

  it('Word.prototype.key', function() {
    const word = new Word(Object.assign({}, data, { key: 'A.3.4' }));
    const badKey = () => new Word(Object.assign({}, data, { key: 'bad key' }));
    const setBadKey = () => { word.key = 'bad key'; };
    expect(word.key).toBe('A.3.4');
    expect(badKey).toThrow();
    expect(setBadKey).toThrow();
  });

  it('Word.prototype.morphemes', function() {
    const word = new Word(Object.assign({}, data, { morphemes: [{ gloss: {}, transcription: {} }] }));
    const badMorphemes = () => new Word(Object.assign({}, data, { morphemes: true }));
    expect(word.morphemes[0] instanceof Morpheme).toBe(true);
    expect(badMorphemes).toThrow();
  });

  it('Word.prototype.notes', function() {
    const word = new Word(Object.assign({}, data, { notes: ['This is a note.'] }));
    const badNotes = () => new Word(Object.assign({}, data, { notes: true }));
    expect(word.notes[0] instanceof Note).toBe(true);
    expect(badNotes).toThrow();
  });

  it('Word.prototype.translation', function() {
    const word = new Word;
    const badTln = () => new Word(Object.assign({}, data, { translation: 'hello' }));
    const setBadTln = () => { word.translation = 'hello'; };
    expect(word.translation instanceof MultiLangString).toBe(true);
    expect(badTln).toThrow();
    expect(setBadTln).toThrow();
  });

  it('Word.prototype.url', function() {
    const url = 'https://digitallinguistics.io';
    const word = new Word(Object.assign({}, data, { url }));
    const badURL = () => new Word(Object.assign({}, data, { url: 'digitallinguistics.io' }));
    const setBadURL = () => { word.url = 'digitallinguistics.io'; };
    expect(badURL).toThrow();
    expect(setBadURL).toThrow();
    expect(word.url).toBe(url);
  });

  // methods
  it('Word.prototype.toJSON', function() {
    const pojo = JSON.parse(JSON.stringify(new Word));
    expect(pojo.url).toBeUndefined();
    expect(Array.isArray(pojo.morphemes)).toBe(true);
  });

});
