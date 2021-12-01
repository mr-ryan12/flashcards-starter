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
      return `Your answer of ${guess} is ${newTurn.giveFeedback()}`;
    } else {
      return `Your answer of ${guess} is ${newTurn.giveFeedback()}`;
    }
  }

  calculatePercentCorrect() {
    return 100 - ((this.incorrectGuesses.length / this.turns) * 100);
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    const message = `**Round over!** You answered ${percentCorrect}% of the questions correctly!`;
    
    return message;
  }
}

module.exports = Round;