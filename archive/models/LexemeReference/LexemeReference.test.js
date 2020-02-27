/* global dlx */

/* eslint-disable
  func-names,
  max-nested-callbacks,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe('LexemeReference', function() {

  const { LexemeReference } = dlx.models;

  const data = {
    lexeme:     'hola',
    lexemeURL:  'https://api.digitallinguistics.io/spanish/lexicons/main/lexemes/hola',
    lexicon:    'spanish',
    lexiconURL: 'https://api.digitallinguistics.io/spanish/lexicons/main',
    relation:   'compare',
    sense:      1,
  };

  const lexemeReferenceAll = new LexemeReference(data);

  it('Errors', function() {

    const badData       = () => new LexemeReference(42);
    const badLexemeURL  = () => new LexemeReference({
      lexeme:    'lexEntry1',
      lexemeURL: 'digitallinguistics.io',
    });
    const badLexiconURL = () => new LexemeReference({
      lexeme:     'lexEntry1',
      lexiconURL: 'digitallinguistics.io',
    });
    const badRelation   = () => new LexemeReference({
      lexeme:   'lexEntry1',
      relation: 'bad relation',
    });
    const badSense      = () => new LexemeReference({
      lexeme: 'lexEntry1',
      sense:  '42',
    });
    const noData        = () => new LexemeReference();
    const emptyObj      = () => new LexemeReference({});
    const objData       = () => new LexemeReference({ lexeme: 'lexemeKey' });
    const stringData    = () => new LexemeReference('lexemeKey');

    expect(badData).toThrow();
    expect(badLexemeURL).toThrow();
    expect(badLexiconURL).toThrow();
    expect(badRelation).toThrow();
    expect(badSense).toThrow();
    expect(noData).not.toThrow();
    expect(emptyObj).not.toThrow();
    expect(objData).not.toThrow();
    expect(stringData).not.toThrow();

  });

  it('new LexemeReference()', function() {

    const lexemeReferenceObj    = new LexemeReference({ lexeme: 'randomKey1' });
    const lexemeReferenceString = new LexemeReference('randomKey2');

    expect(Object.keys(data).every(key => lexemeReferenceAll[key] === data[key])).toBe(true);
    expect(lexemeReferenceObj.lexeme).toBe('randomKey1');
    expect(lexemeReferenceObj.lexemeURL).toBeUndefined();
    expect(lexemeReferenceString.lexeme).toBe('randomKey2');

    lexemeReferenceAll.test = 'test';
    expect(lexemeReferenceAll.test).toBeUndefined();

    const ref = new LexemeReference(Object.assign({}, data, { customProperty1: 'custom value 1' }));
    ref.customProperty2 = 'custom value 2';

    expect(ref.customProperty1).toBeUndefined();
    expect(ref.customProperty2).toBeUndefined();

  });

  it('Lexeme.prototype.toJSON', function() {
    const pojo = JSON.parse(JSON.stringify(lexemeReferenceAll));
    expect(pojo.lexeme).toBe(data.lexeme);
    expect(pojo.lexemeURL).toBe(data.lexemeURL);
  });

});
