const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(round);
  });
});