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

describe('Orthography', function() {

  const { Note, Orthography, Tags } = dlx.models;

  it('Errors', function() {
    expect(() => new Orthography(true)).toThrow();
  });

  it('new Orthography', function() {
    expect(() => new Orthography).not.toThrow();
  });

  it('Orthography.prototype.graphemes', function() {
    expect(Array.isArray(new Orthography().graphemes)).toBe(true);
    expect(Array.isArray(new Orthography().toJSON().graphemes)).toBe(true);
  });

  it('Orthography.prototype.name', function() {
    expect(new Orthography().name).toBeDefined();
    expect(new Orthography().toJSON().name).toBeDefined();
  });

  it('Orthography.prototype.notes', function() {
    const orthography = new Orthography;
    orthography.notes.push({});
    expect(orthography.notes[0] instanceof Note).toBe(true);
  });

  it('Orthography.prototype.punctuation', function() {
    expect(() => new Orthography().punctuation.push(true)).toThrow();
  });

  it('Orthography.prototype.tags', function() {
    expect(new Orthography().tags instanceof Tags).toBe(true);
  });

});
