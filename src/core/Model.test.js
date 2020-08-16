import chai  from 'chai';
import Model from './Model.js';

chai.should();

describe(`Model`, () => {

  it(`is the Model class`, () => {
    Model.name.should.equal(`Model`);
  });

  it(`defineModelProp`, () => {

    class TestModel {}

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
