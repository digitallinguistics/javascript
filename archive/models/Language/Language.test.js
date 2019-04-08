/* global dlx */

/* eslint-disable
  func-names,
  max-nested-callbacks,
  prefer-arrow-callback,
*/

describe(`Language`, function() {

  const { Language, MultiLangString } = dlx.models;

  const data = {
    abbreviation:            `ctm`,
    additionalNames:         [`Shetimasha`],
    autonym: {
      modern:                `Sitimaxa`,
    },
    customProperty:          `customValue`,
    glottolog:               `chit1248`,
    iso:                     `ctm`,
    locations:               [{ region: `Louisiana` }],
    name: {
      eng:                   `Chitimacha`,
    },
    phonemes:                [{}],
  };

  const lang = new Language(data);

  it(`new Language()`, function() {
    expect(() => new Language()).not.toThrow();
    expect(() => new Language({})).not.toThrow();
  });

  it(`Language.prototype.{customProperty}`, function() {
    expect(lang.customProperty).toBe(data.customProperty);
  });

  it(`Language.prototype.additionalNames`, function() {
    lang.additionalNames.add(`Shetimasha`);
    expect(lang.additionalNames.size).toBe(1);
  });

  it(`Language.prototype.glottolog`, function() {
    expect(() => { lang.glottolog = `abcd1234`; }).not.toThrow();
    expect(() => { lang.glottolog = `abc`; }).toThrow();
  });

  it(`Language.prototype.iso`, function() {
    expect(() => { lang.iso = `ctm`; }).not.toThrow();
    expect(() => { lang.iso = `en`; }).toThrow();
  });

  it(`Language.prototype.name`, function() {
    expect(lang.name instanceof MultiLangString).toBe(true);
    expect(lang.data.name.eng).toBe(`Chitimacha`);
  });

  it(`Language.prototype.type`, function() {
    expect(lang.type).toBe(`Language`);
  });

});
