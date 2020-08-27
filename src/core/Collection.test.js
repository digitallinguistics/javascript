import chai       from 'chai';
import Collection from './Collection.js';

chai.should();

describe(`Collection`, () => {

  class ItemModel {}

  it(`is the Collection class`, () => {
    Collection.name.should.equal(`Collection`);
  });

  it(`instantiates with all items as instances of the provided model`, () => {

    const arr  = [`a`, `b`];
    const coll = new Collection(ItemModel, arr);

    coll.forEach(item => item.should.be.instanceOf(ItemModel));

  });

  it(`transforms items to instances of the provided model when added`, () => {

    const coll = new Collection(ItemModel);
    const obj  = {};

    coll.push(obj);

    const [item] = coll;

    item.should.not.equal(obj);
    item.should.be.instanceOf(ItemModel);

  });

  it(`type`, () => {
    const collection = new Collection;
    collection.type.should.equal(`Collection`);
  });

});
