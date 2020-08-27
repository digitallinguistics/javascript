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
      constructor() {
        Model.defineArrayProp(this, `testProp`, TestModel);
      }
    }

    const testObject = new TestObject;
    const arr        = [`a`, `b`];

    testObject.testProp = arr;

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

  it(`defineTypeProp`, () => {

    const obj = {};

    Model.defineTypeProp(obj, `Test`);

    obj.type.should.equal(`Test`);
    (() => { obj.type = `test`; }).should.not.throw();
    obj.type.should.equal(`Test`);

  });

  it(`defineValidatedProp`, () => {

    const validate = val => {
      if (val !== 1) throw new Error(`Bad value.`);
    };

    class TestObject {
      constructor() {
        Model.defineValidatedProp(this, `testProp`, validate);
      }
    }

    const testObject = new TestObject;

    (() => { testObject.testProp = 0; }).should.throw();

  });

});
