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

describe('Morpheme', function() {

  const { Model } = dlx.base;
  const { Morpheme } = dlx.models;

  const data = {
    gloss: {
      eng: 'hello',
    },
    transcription: {
      ipa: 'hɛlo',
    },
  };

  const morpheme = new Morpheme(data);

  it('Errors', function() {
    expect(() => new Morpheme).not.toThrow();
    expect(() => new Morpheme(true)).toThrow();
    expect(() => new Morpheme({ gloss: true, transcription: {} })).toThrow();
    expect(() => new Morpheme({ gloss: {}, transcription: true })).toThrow();
    expect(() => new Morpheme({ gloss: {}, transcription: {} })).not.toThrow();
  });

  it('new Morpheme()', function() {
    expect(morpheme instanceof Model).toBe(true);
  });

});
