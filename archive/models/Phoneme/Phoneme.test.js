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

describe('Phoneme', function() {

  const { Note, Phoneme, Reference, Tags } = dlx.models;

  const data = {
    allophones:      [{ ipa: 't͡ʃ' }],
    customProperty: 'customValue',
    features:       ['palatalized', 'voiceless'],
    ipa:            't',
    notes:          [{ text: 'This is a note.' }],
    references:     [{}],
    target1:        {},
    target2:        {},
    target3:        {},
    tone:           'H',
  };

  let phoneme;

  it('Errors', function() {
    expect(() => new Phoneme(true)).toThrow();
    expect(() => new Phoneme({})).not.toThrow();
    expect(() => new Phoneme).not.toThrow();
  });

  it('new Phoneme()', function() {
    expect(() => { phoneme = new Phoneme(data); }).not.toThrow();
  });

  it('Phoneme.prototype.{customProperty}', function() {
    expect(phoneme.customProperty).toBe(data.customProperty);
  });

  it('Phoneme.prototype.airstream', function() {
    expect(() => { phoneme.airstream = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.allophones', function() {
    expect(phoneme.allophones[0] instanceof Phoneme).toBe(true);
  });

  it('Phoneme.prototype.backness', function() {
    expect(() => { phoneme.backness = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.features', function() {
    expect(phoneme.features.has(data.features[0])).toBe(true);
    expect(() => { phoneme.features.add('bad'); }).toThrow();
    expect(Array.isArray(JSON.parse(JSON.stringify(phoneme)).features)).toBe(true);
  });

  it('Phoneme.prototype.height', function() {
    expect(() => { phoneme.height = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.length', function() {
    expect(() => { phoneme.length = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.manner', function() {
    expect(() => { phoneme.manner = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.notes', function() {
    expect(phoneme.notes[0] instanceof Note).toBe(true);
  });

  it('Phoneme.prototype.place', function() {
    expect(() => { phoneme.place = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.references', function() {
    expect(phoneme.references[0] instanceof Reference).toBe(true);
  });

  it('Phoneme.prototype.rounding', function() {
    expect(() => { phoneme.rounding = 'bad'; }).toThrow();
  });

  it('Phoneme.prototype.tags', function() {
    expect(phoneme.tags instanceof Tags).toBe(true);
  });

  it('Phoneme.prototype.target1', function() {
    expect(phoneme.target1 instanceof Phoneme).toBe(true);
  });

  it('Phoneme.prototype.target2', function() {
    expect(phoneme.target2 instanceof Phoneme).toBe(true);
  });

  it('Phoneme.prototype.target3', function() {
    expect(phoneme.target3 instanceof Phoneme).toBe(true);
  });

  it('Phoneme.prototype.tone', function() {
    expect(phoneme.tone).toBe(data.tone);
    expect(() => { phoneme.tone = true; }).toThrow();
  });

});
