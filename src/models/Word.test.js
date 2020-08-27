import chai            from 'chai';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';
import Word            from './Word.js';

const should = chai.should();

describe(`Word`, () => {

  const testData = { eng: `hello` };

  it(`instantiates without data`, () => {
    const word = new Word;
    should.not.exist(word.analysis);
    should.not.exist(word.literal);
    should.not.exist(word.tags);
    word.transcription.should.be.instanceOf(Transcription);
    word.transcription.size.should.equal(0);
    should.not.exist(word.translation);
    word.type.should.equal(`Word`);
  });

  it(`analysis`, () => {
    const word = new Word({ analysis: testData });
    word.analysis.should.be.instanceOf(Transcription);
    word.analysis.get(`eng`).should.equal(testData.eng);
  });

  it(`custom property`, () => {
    const word = new Word({ customProperty: true });
    word.customProperty.should.be.true;
  });

  it(`literal`, () => {
    const word = new Word({ literal: testData });
    word.literal.should.be.instanceOf(MultiLangString);
    word.literal.get(`eng`).should.equal(testData.eng);
  });

  it(`tags`, () => {
    const word = new Word({ tags: { position: `final` } });
    word.tags.get(`position`).should.equal(`final`);
  });

  it(`transcription`, () => {
    const word = new Word({ transcription: testData });
    word.transcription.should.be.instanceOf(Transcription);
    word.transcription.get(`eng`).should.equal(testData.eng);
  });

  it(`translation`, () => {
    const word = new Word({ translation: testData });
    word.translation.should.be.instanceOf(MultiLangString);
    word.translation.get(`eng`).should.equal(testData.eng);
  });

  it(`type`, () => {
    const word = new Word;
    word.type.should.equal(`Word`);
  });

});
