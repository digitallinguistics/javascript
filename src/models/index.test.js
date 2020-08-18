/* eslint-disable
  max-nested-callbacks,
*/

import chai from 'chai';

import {
  Language,
  MultiLangString,
  Transcription,
  Utterance,
} from './index.js';

chai.should();

describe(`models`, () => {

  it(`has the expected exports`, () => {
    MultiLangString.name.should.equal(`MultiLangString`);
    Language.name.should.equal(`Language`);
    Transcription.name.should.equal(`Transcription`);
    Utterance.name.should.equal(`Utterance`);
  });

});
