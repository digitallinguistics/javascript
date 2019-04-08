/* global dlx */

/* eslint-disable
  func-names,
  max-len,
  max-nested-callbacks,
  max-statements,
  no-magic-numbers,
  no-shadow,
  object-curly-newline,
  object-property-newline,
  prefer-arrow-callback
*/

describe(`Sentence`, function() {

  const { Model } = dlx.base;

  const {
    MultiLangString,
    Note,
    Sentence,
    Tags,
    Word,
  } = dlx.models;

  const data    = {
    transcription: {
      ipa: `ola me jamo dænjɛl`,
      spa: `Hola, me llamo Daniel.`,
    },
    translation:   {
      eng:  `Hello, my name is Daniel.`,
      type: `free`,
    },
    words:         [
      {
        morphemes:     [],
        transcription: {},
        translation:   {},
      },
      {
        morphemes:     [],
        transcription: {},
        translation:   {},
      },
      {
        morphemes:     [],
        transcription: {},
        translation:   {},
      },
      {
        morphemes:     [],
        transcription: {},
        translation:   {},
      },
    ],
  };

  const sentence = new Sentence(data);

  it(`Errors`, function() {

    const badData     = () => new Sentence(true);
    const badTln      = () => new Sentence(Object.assign({}, data, { translation: true }));
    const badTxn      = () => new Sentence(Object.assign({}, data, { transcription: true }));
    const badWords    = () => new Sentence(Object.assign({}, data, { words: true }));
    const noEndTime   = () => new Sentence(Object.assign({}, data, { startTime: 10.00 }));
    const noStartTime = () => new Sentence(Object.assign({}, data, { endTime: 20.00 }));
    const timeOverlap = () => new Sentence(Object.assign({}, data, { endTime: 10.00, startTime: 20.00 }));

    expect(badData).toThrow();
    expect(badTln).toThrow();
    expect(badTxn).toThrow();
    expect(badWords).toThrow();
    expect(noEndTime).toThrow();
    expect(noStartTime).toThrow();
    expect(timeOverlap).toThrow();

  });

  it(`new Sentence()`, function() {

    expect(sentence instanceof Model).toBe(true);

    const noData = () => new Sentence();
    expect(noData).not.toThrow();

    const oldSentence = new Sentence;
    const newSentence = new Sentence(oldSentence);
    expect(newSentence).toBe(oldSentence);

  });

  it(`Sentence.prototype.{customProperty}`, function() {
    const sentence = new Sentence(Object.assign({}, data, { customProperty1: `custom value 1` }));
    sentence.customProperty2 = `custom value 2`;
    expect(sentence.customProperty1).toBe(`custom value 1`);
    expect(sentence.customProperty2).toBe(`custom value 2`);
  });

  it(`Sentence.prototype.endTime`, function() {
    const sentence = new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: 10.000,
    }));
    const badEndTime = () => new Sentence(Object.assign({}, data, {
      endTime:   true,
      startTime: 10.000,
    }));
    const correctFormatSentence = new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: 10.000,
    }));
    const incorrectFormatSentence = new Sentence(Object.assign({}, data, {
      endTime:   20.0012345,
      startTime: 10.000,
    }));
    const setBadEndTime = () => { sentence.endTime = 5.000; };
    expect(badEndTime).toThrow();
    expect(correctFormatSentence.endTime).toBe(20.000);
    expect(incorrectFormatSentence.endTime).toBe(20.001);
    expect(setBadEndTime).toThrow();
  });

  it(`Sentence.prototype.key`, function() {
    const key       = `A.3`;
    const sentence    = new Sentence(Object.assign({}, data, { key }));
    const badKey    = () => new Sentence(Object.assign({}, data, { key: `11` }));
    const setBadKey = () => { sentence.key = `11`; };
    expect(sentence.key).toBe(`A.3`);
    expect(badKey).toThrow();
    expect(setBadKey).toThrow();
  });

  it(`Sentence.prototype.language`, function() {
    const language   = `ctm`;
    const sentence     = new Sentence(Object.assign({}, data, { language }));
    const badLang    = () => new Sentence(Object.assign({}, data, { language: `Tlahuapa Mixtec` }));
    const setBadLang = () => { sentence.language = `Tlahuapa Mixtec`; };
    expect(sentence.language).toBe(language);
    expect(badLang).toThrow();
    expect(setBadLang).toThrow();
  });

  it(`Sentence.prototype.notes`, function() {
    const badNotes = () => new Sentence(Object.assign({}, data, { notes: true }));
    const note = new Note(`test`);
    const sentence = new Sentence(Object.assign({}, data, { notes: [note] }));
    expect(badNotes).toThrow();
    expect(sentence.notes[0]).toBe(note);
  });

  it(`Sentence.prototype.speaker`, function() {
    const badSpeaker = () => new Sentence(Object.assign({}, data, { speaker: `Daniel Hieber` }));
    const setBadSpeaker = () => { sentence.speaker = `Daniel Hieber`; };
    expect(badSpeaker).toThrow();
    expect(setBadSpeaker).toThrow();
  });

  it(`Sentence.prototype.startTime`, function() {
    const sentence = new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: 10.000,
    }));
    const badStartTime = () => new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: true,
    }));
    const correctFormatSentence = new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: 10.000,
    }));
    const incorrectFormatSentence = new Sentence(Object.assign({}, data, {
      endTime:   20.000,
      startTime: 10.0012345,
    }));
    const setBadStartTime = () => { sentence.startTime = 25.000; };
    expect(badStartTime).toThrow();
    expect(correctFormatSentence.startTime).toBe(10.000);
    expect(incorrectFormatSentence.startTime).toBe(10.001);
    expect(setBadStartTime).toThrow();
  });

  it(`Sentence.prototype.tags`, function() {
    const badTags = () => new Sentence(Object.assign({}, data, { tags: true }));
    sentence.tags = {};
    expect(sentence.tags instanceof Tags).toBe(true);
    expect(badTags).toThrow();
  });

  it(`Sentence.prototype.toJSON`, function() {
    const sentence = new Sentence(Object.assign({ tags: {} }, data));
    sentence.tags.set(`test`, true);
    const pojo = JSON.parse(JSON.stringify(sentence));
    expect(pojo.tags.test).toBe(true);
  });

  it(`Sentence.prototype.translation`, function() {
    expect(sentence.translation instanceof MultiLangString).toBe(true);
    expect(sentence.translation.eng).toBe(data.translation.eng);
    expect(sentence.translation.type).toBe(`free`);
  });

  it(`Sentence.prototype.url`, function() {
    const url = `https://digitallinguistics.io`;
    const sentence = new Sentence(Object.assign({}, data, { url }));
    const badURL = () => new Sentence(Object.assign({}, data, { url: `digitallinguistics.io` }));
    expect(badURL).toThrow();
    expect(sentence.url).toBe(url);
  });

  it(`Sentence.prototype.words`, function() {
    expect(Array.isArray(sentence.words)).toBe(true);
    expect(sentence.words.length).toBe(data.words.length);
    expect(sentence.words.every(word => word instanceof Word)).toBe(true);
  });

});
