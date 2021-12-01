const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current round',function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const game = new Game(round);

    expect(game.currentRound).to.equal(round);
  });
});