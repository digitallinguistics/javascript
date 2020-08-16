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
        Model.defineArrayProp(this, `testProp`);
      }

    }

    const testObject = new TestObject;
    const arr1       = [];
    const arr2       = [`a`, `b`];

    testObject.testProp = arr1;
    testObject.testProp = arr2;

    testObject.testProp.should.not.equal(arr1);
    testObject.testProp.should.not.equal(arr2);
    testObject.testProp[0].should.equal(`a`);
    testObject.testProp[1].should.equal(`b`);

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
