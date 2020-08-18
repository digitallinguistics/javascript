import Collection      from '../core/Collection.js';
import MultiLangString from './MultiLangString.js';
import Text            from './Text.js';

describe(`Text`, () => {

  it(`instantiates with no data`, () => {

    const text = new Text;

    text.title.should.be.instanceOf(MultiLangString);
    text.utterances.should.be.instanceOf(Collection);

  });

  it(`instantiates with data`, () => {

    const data = {
      title: {
        eng: `The Little Prince`,
        fra: `Le Petit Prince`,
      },
      utterances: [
        {
          transcription: {
            fra: `le petite prince`,
          },
          translation:   `the little prince`,
        },
      ],
    };

    const text = new Text(data);

    text.title.get(`fra`).should.equal(data.title.fra);
    text.utterances.length.should.equal(1);
    text.utterances[0].transcription.get(`fra`).should.equal(`le petite prince`);
    text.utterances[0].translation.get(`eng`).should.equal(`the little prince`);

  });

});
