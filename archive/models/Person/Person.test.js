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

describe(`Person`, function() {

  const { Language, Person } = dlx.models;

  const data = {
    email:      `johnsmith@email.net`,
    familyName: `Smith`,
    givenName:  `John`,
    languagesSpoken: [{ name: { eng: `English` } }],
  };

  it(`Person.prototype.anonymize`, function() {
    const person = new Person(data);
    person.anonymize();
    expect(person.email).toBeUndefined();
    expect(person.familyName).toBeUndefined();
    expect(person.givenName).toBeUndefined();
  });

  it(`Person.prototype.languagesSpoken`, function() {
    const person = new Person(data);
    expect(person.languagesSpoken[0] instanceof Language).toBe(true);
  });

});
