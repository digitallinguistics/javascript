import chai  from 'chai';
import Model from './Model.js';

chai.should();

describe(`Model`, () => {

  class TestModel {}

  it(`is the Model class`, () => {
    Model.name.should.equal(`Model`);
  });

  it(`defineArrayProp`, () => {

    class TestObject {

      #testProp;

      constructor() {
        Model.defineArrayProp(this, `testProp`, TestModel);
      }

    }

    const testObject = new TestObject;
    const arr        = [`a`, `b`];

    testObject.testProp = arr;

    testObject.testProp.should.equal(arr);
    testObject.testProp.forEach(item => item.should.be.instanceOf(TestModel));

  });

  it(`defineModelProp`, () => {

    class TestObject {

      #testProp;

      constructor() {
        Model.defineModelProp(this, `testProp`, TestModel);
      }

    }

    const testObject = new TestObject;

    testObject.testProp = true;

    testObject.testProp.should.be.instanceOf(TestModel);

  });

});
