import chai            from 'chai';
import Collection      from '../core/Collection.js';
import MultiLangString from './MultiLangString.js';
import Text            from './Text.js';

const should = chai.should();

describe(`Text`, () => {

  it(`class: Text`, () => {
    Text.name.should.equal(`Text`);
  });

  it(`instantiates with no data`, () => {

    const text = new Text;

    should.not.exist(text.tags);
    text.title.should.be.instanceOf(MultiLangString);
    text.type.should.equal(`Text`);
    text.utterances.should.be.instanceOf(Collection);

  });

  it(`custom property`, () => {
    const text = new Text({ customProperty: true });
    text.customProperty.should.be.true;
  });

  it(`tags`, () => {
    const text = new Text({ tags: { position: `final` } });
    text.tags.get(`position`).should.equal(`final`);
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
