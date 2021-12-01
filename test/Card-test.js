const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an id', function() {
    const card = new Card(1);
    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    const card1 = prototypeQuestions[0];
    expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card1 = prototypeQuestions[0];
    expect(card1.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card1 = prototypeQuestions[0];
    expect(card1.correctAnswer).to.equal('object');
  });
});