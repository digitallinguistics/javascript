/* eslint-disable
  max-nested-callbacks,
*/

import chai from 'chai';

import {
  Language,
  MultiLangString,
  Text,
  Transcription,
  Utterance,
  Word,
} from './index.js';

chai.should();

describe(`models`, () => {

  it(`has the expected exports`, () => {
    MultiLangString.name.should.equal(`MultiLangString`);
    Language.name.should.equal(`Language`);
    Text.name.should.equal(`Text`);
    Transcription.name.should.equal(`Transcription`);
    Utterance.name.should.equal(`Utterance`);
    Word.name.should.equal(`Word`);
  });

});
