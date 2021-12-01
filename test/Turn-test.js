const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(function() {
    card = prototypeQuestions[0];
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.equal('object');
  });

  it('should store a card', function() {
    const card = prototypeQuestions[0];
    expect(turn.currentCard).to.equal(card);
  });

  it('should return a guess', function() {
    const guess = turn.returnGuess();
    expect(guess).to.equal('object');
  });

  it('should return a card', function() {
    const currentCard = turn.returnCard();
    expect(currentCard).to.equal(card);
  });

  it('should evaluate a correct guess', function() {
    const evaluateGuess = turn.evaluateGuess();
    expect(evaluateGuess).to.equal(true);
  });

  it('should evaluate an incorrect guess', function() {
    const turn = new Turn('array', card);
    const evaluateGuess = turn.evaluateGuess();

    expect(evaluateGuess).to.equal(false);
  });

  it('should give feedback for a correct answer', function() {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('correct!');
  });

  it('should give feedback for an incorrect answer', function() {
    const turn = new Turn('array', card);
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('incorrect!');
  });
});