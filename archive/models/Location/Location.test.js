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

describe('Location', function() {

  const { Model } = dlx.base;

  const {
    Access,
    Address,
    Location,
    MultiLangString,
    Note,
    Reference,
    Tags,
  } = dlx.models;

  const data = {
    abbreviation:   'home',
    address:        { streetAddress: '123 My Place' },
    customProperty: 'customValue',
    geoJSON:        {},
    name:           { eng: 'My House' },
    notes:          [{ eng: 'This is a note.' }],
    references:     [{ title: 'Really cool publication' }],
    url:            'https://api.digitallinguistics.io/locations/12345/',
  };

  let loc;

  it('Errors', function() {
    expect(() => new Location(true)).toThrow();
    expect(() => new Location).not.toThrow();
    expect(() => new Location({})).not.toThrow();
    expect(() => { loc = new Location(data); }).not.toThrow();
  });

  it('new Location()', function() {
    expect(loc instanceof Model).toBe(false);
  });

  it('Location.prototype.{customProperty}', function() {
    expect(loc.customProperty).toBe(data.customProperty);
  });

  it('Location.prototype.abbreviation', function() {
    expect(loc.abbreviation).toBe(data.abbreviation);
    expect(() => { loc.abbreviation = true; }).toThrow();
  });

  it('Location.prototype.access', function() {
    expect(loc.access instanceof Access).toBe(true);
  });

  it('Location.prototype.address', function() {
    expect(loc.address instanceof Address).toBe(true);
    expect(new Location().toJSON().address).toBeUndefined();
  });

  it('Location.prototype.dateCreated', function() {
    expect(loc.dateCreated instanceof Date).toBe(true);
    expect(new Location().toJSON().dateCreated instanceof Date).toBe(true);
  });

  it('Location.prototype.dateModified', function() {
    expect(loc.dateModified instanceof Date).toBe(true);
    expect(new Location().toJSON().dateModified instanceof Date).toBe(true);
  });

  it('Location.prototype.geoJSON', function() {
    expect(loc.geoJSON instanceof Object).toBe(true);
    expect(new Location().toJSON().geoJSON).toBeUndefined();
  });

  it('Location.prototype.name', function() {
    expect(loc.name.eng).toBe(data.name.eng);
    expect(new Location().name instanceof MultiLangString).toBe(true);
  });

  it('Location.prototype.notes', function() {
    expect(loc.notes[0] instanceof Note).toBe(true);
  });

  it('Location.prototype.references', function() {
    expect(loc.references[0] instanceof Reference).toBe(true);
  });

  it('Location.prototype.tags', function() {
    expect(loc.tags instanceof Tags).toBe(true);
  });

  it('Location.prototype.url', function() {
    expect(loc.url).toBe(data.url);
  });

  it('Location.prototype.toJSON()', function() {
    expect(loc.toJSON().name instanceof Object).toBe(true);
  });

});
