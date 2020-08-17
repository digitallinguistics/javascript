import Transcription from './Transcription.js';
// import Utterance     from './Utterance.js';

describe(`Utterance`, () => {

  it(`transcript is a Transcription object`, () => {

    const transcriptData = `Hello world!`;
    const utterance  = new Utterance({ transcript: { eng: 'Hello world!' } });

    utterance.transcript.should.be.instanceOf(Transcription);
    utterance.transcript.get(`eng`).should.equal(transcriptData);

  });

  it(`transcript is undefined if absent`);

  it(`transcription is a Transcription object`);

  it(`transcription is an empty Map object if absent`);

  it(`translation is a Translation object`);

  it(`translation is an empty string in English if absent`);

});
