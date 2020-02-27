/* global dlx */

/* eslint-disable
  func-names,
  init-declarations,
  max-nested-callbacks,
  max-statements,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe('Grapheme', function() {

  const { Grapheme } = dlx.models;

  const data = {
    allographs:     ['ʃ'],
    customProperty: 'customValue',
    pronunciations: ['ʃ', 's'],
  };

  const grapheme = new Grapheme(data);

  it('Grapheme.prototype.allographs', function() {
    expect(grapheme.allographs[0]).toBe(data.allographs[0]);
    expect(() => grapheme.allographs.push(true)).toThrow();
  });

  it('Grapheme.prototype.form', function() {
    expect(new Grapheme().form).toBeDefined();
  });

  it('Grapheme.prototype.pronunciations', function() {
    expect(grapheme.pronunciations[0]).toBe(data.pronunciations[0]);
    expect(() => grapheme.pronunciations.push(true)).toThrow();
  });

});
