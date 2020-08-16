/* eslint-disable
  max-nested-callbacks,
*/

import expect                        from 'expect.js';
import { Language, MultiLangString } from './index.js';

describe(`models`, () => {

  it(`has the expected exports`, () => {
    expect(MultiLangString.name).toBe(`MultiLangString`);
    expect(Language.name).toBe(`Language`);
  });

});
