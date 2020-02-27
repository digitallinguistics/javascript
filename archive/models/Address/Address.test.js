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

it(`Address`, function() {

  const { Address } = dlx.models;
  const data        = {};
  const address     = new Address(data);

  Object.values(address).forEach(val => {
    if (val) expect(typeof val === `string`).toBe(true);
  });

});
