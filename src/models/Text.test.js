import Collection      from '../core/Collection.js';
import MultiLangString from './MultiLangString.js';
import Text            from './Text.js';

describe(`Text`, () => {

  it(`class: Text`, () => {
    Text.name.should.equal(`Text`);
  });

  it(`instantiates with no data`, () => {

    const text = new Text;

    text.title.should.be.instanceOf(MultiLangString);
    text.utterances.should.be.instanceOf(Collection);

  });

  it(`title`, () => {

    const text = new Text({
      title: {
        eng: `The Little Prince`,
        fra: `Le Petit Prince`,
      },
    });

    text.title.get(`fra`).should.equal(`Le Petit Prince`);

  });

  it(`type`, () => {
    const text = new Text;
    text.type.should.equal(`Text`);
  });

  it(`utterances`, () => {

    const text = new Text({
      utterances: [
        {
          transcription: {
            fra: `le petite prince`,
          },
          translation:   `the little prince`,
        },
      ],
    });

    text.utterances.length.should.equal(1);

  });

});
