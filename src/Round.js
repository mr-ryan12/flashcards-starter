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

    this.turn = new Turn(guess, this.currentCard);

    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return `incorrect!`;
    } else {
      return `correct!`;
    }
  }

  calculatePercentCorrect() {
    return 100 - ((this.incorrectGuesses.length / this.turns) * 100);
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    const message = `**Round over!** You answered ${percentCorrect}% of the questions correctly!`;
    
    console.log(message);
    return message;
  }
}

module.exports = Round;
