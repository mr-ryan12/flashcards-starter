const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let card1;
  let card2;
  let card3;
  let newCard1;
  let newCard2;
  let newCard3;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    card1 = prototypeQuestions[0];
    card2 = prototypeQuestions[1];
    card3 = prototypeQuestions[2];

    newCard1 = new Card(card1.id, card1.question, card1.answers, card1.correctAnswer);
    newCard2 = new Card(card2.id, card2.question, card2.answers, card2.correctAnswer);
    newCard3 = new Card(card3.id, card3.question, card3.answers, card3.correctAnswer);
    
    deck = new Deck([newCard1, newCard2, newCard3]);
    round = new Round(deck);
    game =  new Game(round);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should create a new round', function() {
    expect(game.currentRound).to.equal(round);
  });

  it('should start a game with cards', function() {
    expect(game.currentRound.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should put the cards in a deck', function() {
    expect(game.currentRound.deck.cards).to.deep.equal(deck.cards);
  });
});
