import chai  from 'chai';
import Model from './Model.js';

chai.should();

describe(`Model`, () => {

  it(`is the Model class`, () => {
    Model.name.should.equal(`Model`);
  });

});
