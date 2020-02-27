/* global dlx */

/* eslint-disable
  func-names,
  max-nested-callbacks,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe('Tags', function() {

  const { Tags } = dlx.models;

  const tags = new Tags({
    accented:    false,
    sentenceFinal: true,
  });

  it('Errors', function() {
    const badData = () => new Tags(true);
    const badKey  = () => new Tags([[13, true]]);
    const badVal  = () => new Tags({ accented: [] });
    expect(badData).toThrow();
    expect(badKey).toThrow();
    expect(badVal).toThrow();
  });

  it('new Tags()', function() {
    const arrTags = new Tags([
      ['accented', false],
      ['sentenceFinal', true],
      ['exampleNum', 13],
    ]);
    expect(tags instanceof Map).toBe(true);
    expect(arrTags.get('accented')).toBe(false);
    expect(arrTags.get('sentenceFinal')).toBe(true);
    expect(tags.get('accented')).toBe(false);
    expect(tags.get('sentenceFinal')).toBe(true);
  });

  it('Tags.prototype.set', function() {
    const tags = new Tags;
    const setBadTag = () => tags.set(true, 'accented');
    const setGoodTag = () => tags.set('accented', true);
    expect(setBadTag).toThrow();
    expect(setGoodTag).not.toThrow();
    expect(tags.get('accented')).toBe(true);
  });

  it('Tags.prototype.toJSON', function() {
    const pojo = tags.toJSON();
    expect(pojo.accented).toBe(false);
    expect(pojo.sentenceFinal).toBe(true);
  });

});
