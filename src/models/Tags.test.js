import Tags from './Tags.js';

describe(`Tags`, () => {

  const tagsData = {
    duration:      1.234,
    position:      `final`,
    sentenceFinal: true,
  };

  it(`has the "type" property set`, () => {
    const tags = new Tags;
    tags.type.should.equal(`Tags`);
  });

  it(`is an Map object when no data is provided`, () => {
    const tags = new Tags;
    tags.should.be.instanceOf(Map);
    tags.size.should.equal(0);
  });

  it(`throws with bad data`, () => {
    (() => new Tags(true)).should.throw().with.property(`name`, `TagsDataError`);
  });

  it(`throws with bad tag values`, () => {
    const test = () => new Tags({ category: new Map });
    test.should.throw().with.property(`name`, `TagValueError`);
  });

  it(`populates with Object data`, () => {

    const tags = new Tags(tagsData);

    tags.get(`duration`).should.equal(tagsData.duration);
    tags.get(`position`).should.equal(tagsData.position);
    tags.get(`sentenceFinal`).should.equal(tagsData.sentenceFinal);

  });

  it(`populates with Map data`, () => {

    const map  = new Map(Object.entries(tagsData));
    const tags = new Tags(map);

    tags.get(`duration`).should.equal(tagsData.duration);
    tags.get(`position`).should.equal(tagsData.position);
    tags.get(`sentenceFinal`).should.equal(tagsData.sentenceFinal);

  });

  it(`sets new tags`, () => {

    const tags = new Tags;
    const test = () => tags.set(`person`, `1`);

    test.should.not.throw();

  });

  it(`does not set bad tags`, () => {

    const tags = new Tags;
    const test = () => tags.set(`person`, new Map);

    test.should.throw().with.property(`name`, `TagValueError`);

  });

  it(`serializes correctly`, () => {

    const tags = new Tags(tagsData);
    const pojo = JSON.parse(JSON.stringify(tags));

    pojo.duration.should.equal(tagsData.duration);
    pojo.position.should.equal(tagsData.position);
    pojo.sentenceFinal.should.equal(tagsData.sentenceFinal);

  });

});
