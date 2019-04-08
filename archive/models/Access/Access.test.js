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

it(`Access`, function() {

  const { Access } = dlx.models;

  const data = {
    notes: { eng: `Speaker asked not to make this data publicly available.` },
    permissions: `speaker`,
  };

  const access = new Access(data);

  expect(() => { access.customAccess = 42; }).toThrow();
  expect(() => { access.online = true; }).not.toThrow();
  expect(access.online).toBe(true);
  expect(access.permissions).toBe(data.permissions);

});
