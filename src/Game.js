const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  printMessage(deckCount) {
    console.log(`Welcome to FlashCards! You are playing with ${deckCount} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.slice(0, 10);
    const cardValues = cards.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cardValues);
    const round = new Round(deck);

    this.currentRound = newRound;
    this.printMessage(deck.countCards());
    this.printQuestion(round);
  }
}

module.exports = Game;