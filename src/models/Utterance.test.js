import chai            from 'chai';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';
import Utterance       from './Utterance.js';

const should = chai.should();

describe(`Utterance`, () => {

  const testData = { eng: 'Hello world!' };

  it(`instantiates without data`, () => {
    (() => new Utterance).should.not.throw();
  });

  it(`transcript is a Transcription object`, () => {

    const utterance = new Utterance({ transcript: testData });

    utterance.transcript.should.be.instanceOf(Transcription);
    utterance.transcript.get(`eng`).should.equal(testData.eng);

  });

  it(`transcript is undefined if absent`, () => {
    const utterance = new Utterance;
    should.not.exist(utterance.transcript);
  });

  it(`transcription is a Transcription object`, () => {
    const utterance = new Utterance({ transcription: testData });
    utterance.transcription.should.be.instanceOf(Transcription);
    utterance.transcription.get(`eng`).should.equal(testData.eng);
  });

  it(`transcription is an empty Transcription (Map) object if absent`, () => {

    const utterance = new Utterance;

    utterance.transcription.should.be.instanceOf(Transcription);
    utterance.transcription.size.should.equal(0);

  });

  it(`translation is a MultiLangString object`, () => {

    const utterance = new Utterance({ translation: testData });

    utterance.translation.should.be.instanceOf(MultiLangString);
    utterance.translation.get(`eng`).should.equal(testData.eng);

  });

  it(`translation is an empty MultiLangString if absent`, () => {

    const utterance = new Utterance;

    utterance.translation.should.be.instanceOf(MultiLangString);
    utterance.translation.size.should.equal(0);

  });

});
