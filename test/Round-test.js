const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let newCard1;
  let newCard2;
  let newCard3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = prototypeQuestions[0];
    card2 = prototypeQuestions[1];
    card3 = prototypeQuestions[2];

    newCard1 = new Card(card1.id, card1.question, card1.answers, card1.correctAnswer);
    newCard2 = new Card(card2.id, card2.question, card2.answers, card2.correctAnswer);
    newCard3 = new Card(card3.id, card3.question, card3.answers, card3.correctAnswer);
    
    deck = new Deck([newCard1, newCard2, newCard3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a deck of cards', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should return the current card', function() {
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(round.deck.cards[0]);
  });

  it('should start off with 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start off without any incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should take turns', function() {
    round.takeTurn('object');
    round.takeTurn('function');

    expect(round.turns).to.equal(2);
  });

  it('should return a new card', function() {
    round.takeTurn('object');
    expect(round.currentCard).to.deep.equal(newCard1);

    round.takeTurn('function')
    expect(round.currentCard).to.deep.equal(newCard2);
  });

  it('should instantiate a Turn class', function() {
    round.takeTurn('object');
    expect(round.turn).to.be.an.instanceOf(Turn);
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should update storing incorrect guesses', function() {
    round.takeTurn('array');
    round.takeTurn('function');

    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should give feedback for a correct answer', function() {
    const correctGuess = round.takeTurn('object');
    expect(correctGuess).to.equal('correct!');
  });

  it('should give feedback for an incorrect answer', function() {
    const incorrectGuess = round.takeTurn('array');
    expect(incorrectGuess).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should update the percentage of correct guesses', function() {
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should end the round', function() {    
    const percentageCorrect = round.calculatePercentCorrect();
    const message = `**Round over!** You answered ${percentageCorrect}% of the questions correctly!`;
    const endRound = round.endRound();

    round.takeTurn('object');
    round.takeTurn('function');

    expect(endRound).to.equal(message);
  });
});
