/* eslint-disable
  func-names,
  max-nested-callbacks,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe('MultiLangString', function() {

  const { MultiLangString } = dlx.models;
  const data = { eng: 'Hello world!', spa: 'Hola mundo!' };
  const mls  = new MultiLangString(data);

  it('new MultiLangString()', function() {
    expect(typeof mls.eng).toBe('string');
    expect(typeof mls.spa).toBe('string');
    expect(mls.type).toBeUndefined();
  });

  it('Errors', function() {

    const badData = () => new MultiLangString('Hello world!');
    const badKey  = () => new MultiLangString({ 'eng.1': 'Hello world!' });
    const badVal  = () => new MultiLangString({ eng: 42 });

    expect(badData).toThrow();
    expect(badKey).toThrow();
    expect(badVal).toThrow();

  });

  it('MultiLangString.prototype.{language}', function() {

    const mls      = new MultiLangString(data);
    const badAbbr  = () => { mls['Tlahuapa Mixtec'] = 'ayoo'; };
    const badTxn   = () => { mls.mix = true; };
    const goodData = () => { mls.mix = 'ayoo'; };

    expect(badAbbr).toThrow();
    expect(badTxn).toThrow();
    expect(goodData).not.toThrow();
    expect(mls.mix).toBe('ayoo');

  });

  it('MultiLangString.prototype.toJSON', function() {
    const pojo = JSON.parse(JSON.stringify(mls));
    expect(pojo.eng).toBe(data.eng);
    expect(pojo.default).toBeUndefined();
  });

});
