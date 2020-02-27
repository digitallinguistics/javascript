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

describe(`Allomorph`, function() {

  const { Allomorph } = dlx.models;

  const allomorph = new Allomorph;

  it(`new Allomorph()`, function() {
    const oldAllmorph = new Allomorph;
    const newAllomorph = new Allomorph(oldAllmorph);
    expect(oldAllmorph).toBe(newAllomorph);
  });

  it(`Allomorph.prototype.environments`, function() {
    const envs = allomorph.environments;
    expect(() => { allomorph.environments = []; }).not.toThrow();
    expect(allomorph.environments).toBe(envs);
    expect(() => { allomorph.environments.add(true); }).toThrow();
    expect(() => { allomorph.environments.add(`_C`); }).not.toThrow();
    expect(allomorph.environments.size).toBe(1);
  });

});
