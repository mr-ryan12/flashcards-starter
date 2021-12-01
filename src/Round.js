const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.cards[0];
  }

  takeTurn(guess) {
    this.turns++;
    this.returnCurrentCard();
    this.deck.cards.shift();

    const newTurn = new Turn(guess, this.currentCard);

    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return newTurn.giveFeedback();
    } else {
      return newTurn.giveFeedback();
    }
  }
}

module.exports = Round;