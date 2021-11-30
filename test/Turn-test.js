const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });

  it.skip('should store an instance of Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.currentCard).to.be.an.instanceOf(card);
  });

  it.skip('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const guess = turn.returnGuess();

    expect(guess).to.equal('object');
  });

  it.skip('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
  });

  it.skip('should evaluate a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const evaluateGuess = turn.evaluateGuess();

    expect(evaluateGuess).to.equal(true);
  });

  it.skip('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');
  })
});