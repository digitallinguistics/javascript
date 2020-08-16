/* eslint-disable
  max-nested-callbacks,
*/

import chai                          from 'chai';
import { Language, MultiLangString } from './index.js';

const { expect } = chai;

describe(`models`, () => {

  it(`has the expected exports`, () => {
    expect(MultiLangString.name).to.equal(`MultiLangString`);
    expect(Language.name).to.equal(`Language`);
  });

});
