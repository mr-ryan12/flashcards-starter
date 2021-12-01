const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

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

  it('should start a game with cards', function() {
    const card1 = prototypeQuestions[0];
    const card2 = prototypeQuestions[1];
    const card3 = prototypeQuestions[2];
    const card4 = prototypeQuestions[3];
    const card5 = prototypeQuestions[4];
    const card6 = prototypeQuestions[5];
    const card7 = prototypeQuestions[6];
    const card8 = prototypeQuestions[7];
    const card9 = prototypeQuestions[8];
    const card10 = prototypeQuestions[9];

    const deck = new Deck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);
    const round = new Round(deck);
    const game = new Game(round);

    expect(game.currentRound.deck.cards).to.deep.equal([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);
  });

  it('should put the cards in a deck', function() {
    const card1 = prototypeQuestions[0];
    const card2 = prototypeQuestions[1];
    const card3 = prototypeQuestions[2];
    const card4 = prototypeQuestions[3];
    const card5 = prototypeQuestions[4];
    const card6 = prototypeQuestions[5];
    const card7 = prototypeQuestions[6];
    const card8 = prototypeQuestions[7];
    const card9 = prototypeQuestions[8];
    const card10 = prototypeQuestions[9];

    const deck = new Deck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);
    const round = new Round(deck);
    const game = new Game(round);

    // game.start();

    expect(game.currentRound.deck.cards).to.deep.equal(deck.cards);
  });

  it('should create a new Round instance', function() {
    const card1 = prototypeQuestions[0];
    const card2 = prototypeQuestions[1];
    const card3 = prototypeQuestions[2];
    const card4 = prototypeQuestions[3];
    const card5 = prototypeQuestions[4];
    const card6 = prototypeQuestions[5];
    const card7 = prototypeQuestions[6];
    const card8 = prototypeQuestions[7];
    const card9 = prototypeQuestions[8];
    const card10 = prototypeQuestions[9];

    const deck = new Deck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);
    const round = new Round(deck);
    const game = new Game(round);

    expect(round).to.be.an.instanceOf(Round);
  });
});