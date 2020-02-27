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

describe('Note', function() {

  const Note = dlx.models.Note;

  describe('Errors', function() {
    it('throws the expected errors', function() {
      const badData = () => new Note(true);
      expect(badData).toThrow();
    });
  });

  describe('new Note()', function() {

    it('only adds pre-defined properties', function() {
      const note = new Note({ text: 'hello', customProperty1: 'custom value 1' });
      note.customProperty2 = 'custom value 2';
      expect(note.customProperty1).toBeUndefined();
      expect(note.customProperty2).toBeUndefined();
    });

    it('returns the original note if it was already a Note object', function() {
      const oldNote = new Note;
      const newNote = new Note(oldNote);
      expect(oldNote).toBe(newNote);
    });

  });

  describe('Note.prototype.dateCreated', function() {

    it('provides the date if none was provided', function() {
      const note = new Note();
      expect(note.dateCreated instanceof Date).toBe(true);
    });

    it('copies the dateCreated if one was provided', function() {
      const date       = new Date;
      const dateString = new Date().toString();
      const note1      = new Note({ text: '', dateCreated: date });
      const note2      = new Note({ text: '', dateCreated: dateString });
      expect(note1.dateCreated).toEqual(date);
      expect(note2.dateCreated.toString()).toEqual(dateString);
    });

  });

  describe('Note.prototype.dateModified', function() {

    it('provides the date if none is provided', function() {
      const note = new Note();
      expect(note.dateModified instanceof Date).toBe(true);
    });

    it('copies the dateModified if one was provided', function() {
      const date = new Date;
      const dateString =  new Date().toString();
      const note1 = new Note({ text: '', dateModified: date });
      const note2 = new Note({ text: '', dateModified: dateString });
      expect(note1.dateModified).toEqual(date);
      expect(note2.dateModified.toString()).toEqual(dateString);
    });

    it('updates dateModified when properties change', function() {
      const note = new Note();
      const originalDate = note.dateModified;
      note.text = 'hello';
      const newDate = note.dateModified;
      expect(newDate).not.toBe(originalDate);
    });

  });

  describe('Note.prototype.language', function() {
    const note1 = new Note();
    const note2 = new Note({ text: 'hello', language: 'eng' });
    const badLang = () => new Note({ text: 'hello', language: 'Tlahuapa Mixtec' });

    it('throws the expected errors', function() {
      expect(badLang).toThrow();
    });

    it('sets the "language" property correctly', function() {
      expect(note1.language).toBeUndefined();
      expect(note2.language).toBe('eng');
    });

  });

  describe('Note.prototype.person', function() {
    const note1 = new Note();
    const note2 = new Note({ text: 'hello', person: 'DWH' });
    const badPerson = () => new Note({ text: 'hello', person: 'Daniel W. Hieber' });

    it('throws the expected errors', function() {
      expect(badPerson).toThrow();
    });

    it('sets the "person" property correctly', function() {
      expect(note1.person).toBeUndefined();
      expect(note2.person).toBe('DWH');
    });
  });

  it('Note.prototype.text', function() {

    const note1 = new Note();
    const note2 = new Note('note');
    const badText = () => new Note({ text: true });

    expect(badText).toThrow();
    expect(note1.text).toBe('');
    expect(note2.text).toBe('note');

  });

  describe('Note.prototype.toJSON', function() {
    it('stringifies correctly', function() {
      const pojo = JSON.parse(JSON.stringify(new Note('test')));
      expect(pojo.text).toBe('test');
    });
  });

  describe('Note.prototype.type', function() {

    const note1       = new Note();
    const note2       = new Note({ text: 'hello', noteType: 'general' });
    const badType     = () => new Note({ text: 'hello', noteType: true });
    const unknownType = () => new Note({ text: 'hello', noteType: 'unknown' });

    it('throws the expected errors', function() {
      expect(badType).toThrow();
      expect(unknownType).toThrow();
    });

    it('sets the "type" property correctly', function() {
      expect(note1.noteType).toBeUndefined();
      expect(note2.noteType).toBe('general');
    });

  });

});
