const ranks = Object.freeze({
  TWO: Symbol('2'),
  THREE: Symbol('3'),
  FOUR: Symbol('4'),
  FIVE: Symbol('5'),
  SIX: Symbol('6'),
  SEVEN: Symbol('7'),
  EIGHT: Symbol('8'),
  NINE: Symbol('9'),
  TEN: Symbol('0'),
  JACK: Symbol('J'),
  QUEEN: Symbol('Q'),
  KING: Symbol('K'),
  ACE: Symbol('A')
});
const rankValues = Object.values(ranks);

const suites = Object.freeze({
  CLUBS: Symbol('C'),
  SPADES: Symbol('S'),
  HEARTS: Symbol('H'),
  DIAMONDS: Symbol('D')
});
const suiteValues = Object.values(suites);

class Card {
  #rank;
  #suite;

  constructor(rank, suite) {
    if (!rankValues.includes(rank))
      throw new Error(`expected first constructor parameter to be a rank but it was ${rank}`);

    if (!suiteValues.includes(suites))
      throw new Error(`expected first constructor parameter to be a suite but it was ${suite}`);

    this.#rank = rank;
    this.#suite = suite;
  }

  toString() { return `${this.#rank.description}${this.#suite.description}` }
}

export { ranks, suites, Card }
