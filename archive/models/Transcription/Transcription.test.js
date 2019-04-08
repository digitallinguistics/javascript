/* eslint-disable
  func-names,
  max-nested-callbacks,
  prefer-arrow-callback,
*/

describe(`Transcription`, function() {

  const { Transcription } = dlx.models;
  const data = { eng: `Chitimacha` };
  const txn  = new Transcription(data);

  it(`new Transcription()`, function() {
    expect(txn.type).toBeUndefined();
  });

  it(`Transcription.prototype.{orthography}`, function() {
    expect(() => { txn.eng = ``; }).not.toThrow();
    expect(() => { txn[`bad key`] = `transcription`; }).toThrow();
  });

});
