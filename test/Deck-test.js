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

  beforeEach(function() {
    card1 = prototypeQuestions[0];
    card2 = prototypeQuestions[1];
    card3 = prototypeQuestions[2];
    
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be able to store cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the number of cards in the deck', function() {
    const cardCount = deck.countCards();
    expect(cardCount).to.equal(deck.cards.length);
  });
});