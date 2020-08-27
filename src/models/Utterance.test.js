import chai            from 'chai';
import Collection      from '../core/Collection.js';
import MultiLangString from './MultiLangString.js';
import Transcription   from './Transcription.js';
import Utterance       from './Utterance.js';

const should = chai.should();

describe(`Utterance`, () => {

  const testData = { eng: 'Hello world!' };

  it(`instantiates without data`, () => {

    const utterance = new Utterance;

    should.not.exist(utterance.tags);
    should.not.exist(utterance.transcript);

    utterance.transcription.should.be.instanceOf(Transcription);
    utterance.transcription.size.should.equal(0);

    utterance.translation.should.be.instanceOf(MultiLangString);
    utterance.translation.size.should.equal(0);

    utterance.type.should.equal(`Utterance`);

    utterance.words.should.be.instanceOf(Collection);

  });

  it(`custom property`, () => {
    const utterance = new Utterance({ customProperty: true });
    utterance.customProperty.should.be.true;
  });

  it(`tags`, () => {
    const utterance = new Utterance({ tags: { position: `final` } });
    utterance.tags.get(`position`).should.equal(`final`);
  });

  it(`transcript`, () => {
    const utterance = new Utterance({ transcript: testData });
    utterance.transcript.should.be.instanceOf(Transcription);
    utterance.transcript.get(`eng`).should.equal(testData.eng);
  });

  it(`transcription`, () => {
    const utterance = new Utterance({ transcription: testData });
    utterance.transcription.should.be.instanceOf(Transcription);
    utterance.transcription.get(`eng`).should.equal(testData.eng);
  });

  it(`translation`, () => {
    const utterance = new Utterance({ translation: testData });
    utterance.translation.should.be.instanceOf(MultiLangString);
    utterance.translation.get(`eng`).should.equal(testData.eng);
  });

  it(`type`, () => {
    const utterance = new Utterance;
    utterance.type.should.equal(`Utterance`);
  });

});
