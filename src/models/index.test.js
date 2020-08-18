/* eslint-disable
  max-nested-callbacks,
*/

import chai                          from 'chai';
import { Language, MultiLangString } from './index.js';

chai.should();

describe(`models`, () => {

  it(`has the expected exports`, () => {
    MultiLangString.name.should.equal(`MultiLangString`);
    Language.name.should.equal(`Language`);
  });

});
