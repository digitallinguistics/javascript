/* eslint-disable
  max-nested-callbacks,
*/

import chai                          from 'chai';
import { Language, MultiLangString } from './index.js';

const { expect } = chai;

describe(`models`, () => {

  it(`has the expected exports`, () => {
    expect(MultiLangString.name).toBe(`MultiLangString`);
    expect(Language.name).toBe(`Language`);
  });

});
