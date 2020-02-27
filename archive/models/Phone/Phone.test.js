/* global dlx */

/* eslint-disable
  func-names,
  global-require,
  max-nested-callbacks,
  no-global-assign,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe('Phone', function() {

  const { Model } = dlx.base;

  const { Note, Phone, Tags } = dlx.models;

  const data = {
    allophone: 'ŋ',
    phoneme:   'n',
  };

  const phone = new Phone(data);

  it('Errors', function() {
    expect(() => new Phone).not.toThrow();
    expect(() => new Phone(true)).toThrow();
    expect(() => new Phone({ phoneme: true })).toThrow();
    expect(() => new Phone({ phoneme: '', allophone: true })).toThrow();
  });

  it('new Phone()', function() {
    expect(phone instanceof Model).toBe(false);
  });

  it('Phone.prototype.allophone', function() {
    expect(phone.allophone).toBe(data.allophone);
    expect(() => { phone.allophone = true; }).toThrow();
    expect(() => { phone.allophone = ''; }).not.toThrow();
  });

  it('Phone.prototype.notes', function() {
    const phone = new Phone(Object.assign({ notes: [{ text: 'a note' }] }, data));
    expect(phone.notes[0] instanceof Note).toBe(true);
    expect(() => { phone.notes = []; }).not.toThrow();
  });

  it('Phone.prototype.phoneme', function() {
    expect(phone.phoneme).toBe(data.phoneme);
    expect(() => { phone.phoneme = true; }).toThrow();
    expect(() => { phone.phoneme = ''; }).not.toThrow();
  });

  it('Phone.prototype.tags', function() {
    phone.tags = {};
    expect(phone.tags instanceof Tags).toBe(true);
    expect(() => { phone.tags = true; }).toThrow();
    expect(() => { phone.tags = {}; }).not.toThrow();
  });

});
