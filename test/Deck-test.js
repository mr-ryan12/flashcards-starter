const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let newCard1;
  let newCard2;
  let newCard3;

  beforeEach(function() {
    card1 = prototypeQuestions[0];
    card2 = prototypeQuestions[1];
    card3 = prototypeQuestions[2];

    newCard1 = new Card(card1.id, card1.question, card1.answers, card1.correctAnswer);
    newCard2 = new Card(card2.id, card2.question, card2.answers, card2.correctAnswer);
    newCard3 = new Card(card3.id, card3.question, card3.answers, card3.correctAnswer);
    
    deck = new Deck([newCard1, newCard2, newCard3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be able to store cards', function() {
    expect(deck.cards).to.deep.equal([newCard1, newCard2, newCard3]);
  });

  it('should return the number of cards in the deck', function() {
    const cardCount = deck.countCards();
    expect(cardCount).to.equal(deck.cards.length);
  });
});