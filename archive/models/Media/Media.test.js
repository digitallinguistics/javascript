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

describe(`Media`, function() {

  const { Media } = dlx.models;

  let media;

  const data = {
    languages: [`eng`, `spa`],
    startTime: 20,
    endTime:   30,
  };

  it(`new Media()`, function() {
    expect(() => { media = new Media(data); }).not.toThrow();
  });

  it(`Media.prototype.anonymize`, function() {
    const person = {
      email:      `johnsmith@email.com`,
      familyName: `Smith`,
      givenName:  `John`,
    };
    const media = new Media(Object.assign({}, data, { people: [person] }));
    media.anonymize();
    const p = media.people[0];
    expect(p.email).toBeUndefined();
    expect(p.familyName).toBeUndefined();
    expect(p.givenName).toBeUndefined();
  });

  it(`Media.prototype.endTime`, function() {
    expect(() => { media.endTime = 10; }).toThrow();
  });

  it(`Media.prototype.languages`, function() {
    expect(media.languages.has(`eng`)).toBe(true);
    media.languages.add(`eng`);
    expect(media.languages.size).toBe(2);
    expect(() => media.languages.add({})).toThrow();
  });

  it(`Media.prototype.startTime`, function() {
    expect(() => new Media({ startTime: true })).toThrow();
    expect(() => new Media({ startTime: 20, endTime: 10 })).toThrow();
  });

});
