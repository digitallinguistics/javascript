import chai            from 'chai';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';
import Word            from './Word.js';

const should = chai.should();

describe(`Word`, () => {

  const testData = { eng: `hello` };

  it(`instantiates without data`, () => {
    (() => new Word).should.not.throw();
  });

  it(`transcription is a Transcription object`, () => {

    const word = new Word({ transcription: testData });

    word.transcription.should.be.instanceOf(Transcription);
    word.transcription.get(`eng`).should.equal(testData.eng);

  });

  it(`transcription is an empty Transcription (Map) object if absent`, () => {

    const word = new Word;

    word.transcription.should.be.instanceOf(Transcription);
    word.transcription.size.should.equal(0);

  });

  it(`literal translation is a MultiLangString object`, () => {

    const word = new Word({ literal: testData });

    word.literal.should.be.instanceOf(MultiLangString);
    word.literal.get(`eng`).should.equal(testData.eng);

  });

  it(`literal translation is undefined if absent`, () => {
    const word = new Word;
    should.not.exist(word.literal);
  });

  it(`free translation is a MultiLangString object`, () => {

    const word = new Word({ translation: testData });

    word.translation.should.be.instanceOf(MultiLangString);
    word.translation.get(`eng`).should.equal(testData.eng);

  });

  it(`free translation is undefined if absent`, () => {
    const word = new Word;
    should.not.exist(word.translation);
  });

  it(`analysis is a Transcription object`, () => {

    const word = new Word({ analysis: testData });

    word.analysis.should.be.instanceOf(Transcription);
    word.analysis.get(`eng`).should.equal(testData.eng);

  });

  it(`analysis is undefined if absent`, () => {
    const word = new Word;
    should.not.exist(word.analysis);
  });

});
