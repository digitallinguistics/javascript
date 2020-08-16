import chai  from 'chai';
import Model from './Model.js';

const { expect } = chai;

describe(`Model`, () => {

  it(`is the Model class`, () => {
    expect(Model.name).to.equal(`Model`);
  });

});
