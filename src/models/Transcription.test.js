/**
 * @module models.MultiLangString
 */

import Transcription from './Transcription.js';

describe(`Transcription`, () => {

  const testData = {
    IPA:   `hɛˈloʊ`,
    Latin: `hello`,
  };

  it(`is an empty Map when no data is provided`, () => {

    const txn = new Transcription;

    txn.should.be.instanceOf(Map);
    txn.size.should.equal(0);

  });

  it(`maps orthographies to transcriptions`, () => {

    const txn = new Transcription(testData);

    txn.get(`IPA`).should.equal(`hɛˈloʊ`);
    txn.get(`Latin`).should.equal(`hello`);

  });

  it(`only allows abbreviations as keys`, () => {

    () => new Transcription({ 'bad key': 'hello' })
    .should.throw()
    .with.property(`name`, `TranscriptionOrthoError`);

  });

  it(`only allows strings as values`, () => {

    () => new Transcription({ eng: 0 })
    .should.throw()
    .with.property(`name`, `TranscriptionStringError`);

  });

  it(`validates new keys`, () => {

    const txn = new Transcription;

    () => txn.set(`bad key`, `hello`)
    .should.throw()
    .with.property(`name`, `TranscriptionOrthoError`);

  });

  it(`validates new values`, () => {

    const txn = new Transcription;

    () => txn.set(`eng`, undefined)
    .should.throw()
    .with.property(`name`, `TranscriptionStringError`);

  });

  it(`stringifies as an Object`, () => {

    const txn  = new Transcription(testData);
    const pojo = JSON.parse(JSON.stringify(txn));

    pojo.IPA.should.equal(testData.IPA);
    pojo.Latin.should.equal(testData.Latin);

  });

  it(`type`, () => {
    const txn = new Transcription;
    txn.type.should.equal(`Transcription`);
  });

});
