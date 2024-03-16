import { tmpl, Component } from './Component.js';
import { ranks, suites } from '../model/card.js';

const strToRank = {
  'A': ranks.ACE,
  'K': ranks.KING,
  'Q': ranks.QUEEN,
  'J': ranks.JACK,
  '10': ranks.TEN,
  '9': ranks.NINE,
  '8': ranks.EIGHT,
  '7': ranks.SEVEN,
  '6': ranks.SIX,
  '5': ranks.FIVE,
  '4': ranks.FOUR,
  '3': ranks.THREE,
  '2': ranks.TWO  
};

const strToSuite = {
  'CLUBS': suites.CLUBS,
  'SPADES': suites.SPADES,
  'HEARTS': suites.HEARTS,
  'DIAMONDS': suites.DIAMONDS
};

export default class CardSelector extends Component {
  constructor(state) {
    state.rank = ranks.ACE;
    state.suite = suites.SPADES;
    state.id = Math.random().toString(16).slice(2, 8);

    super(state, tmpl`
<div class="row g-0">
  <div class="col">
    <select id="rank-selector-${ state.id }" class="form-select">
      <option ${ p => p.rank == ranks.ACE ? 'selected' : '' } value="A">A</option>
      <option ${ p => p.rank == ranks.KING ? 'selected' : '' } value="K">K</option>
      <option ${ p => p.rank == ranks.QUEEN ? 'selected' : '' } value="Q">Q</option>
      <option ${ p => p.rank == ranks.JACK ? 'selected' : '' } value="J">J</option>
      <option ${ p => p.rank == ranks.TEN ? 'selected' : '' } value="10">10</option>
      <option ${ p => p.rank == ranks.NINE ? 'selected' : '' } value="9">9</option>
      <option ${ p => p.rank == ranks.EIGHT ? 'selected' : '' } value="8">8</option>
      <option ${ p => p.rank == ranks.SEVEN ? 'selected' : '' } value="7">7</option>
      <option ${ p => p.rank == ranks.SIX ? 'selected' : '' } value="6">6</option>
      <option ${ p => p.rank == ranks.FIVE ? 'selected' : '' } value="5">5</option>
      <option ${ p => p.rank == ranks.FOUR ? 'selected' : '' } value="4">4</option>
      <option ${ p => p.rank == ranks.THREE ? 'selected' : '' } value="3">3</option>
      <option ${ p => p.rank == ranks.TWO ? 'selected' : '' } value="2">2</option>
    </select>
  </div>
  <div class="col">
    <select id="suite-selector-${ state.id }" class="form-select">
      <option ${ p => p.suite == suites.CLUBS ? 'selected' : '' } value="CLUBS">♧</option>
      <option ${ p => p.suite == suites.SPADES ? 'selected' : '' } value="SPADES">♤</option>
      <option ${ p => p.suite == suites.HEARTS ? 'selected' : '' } value="HEARTS">♡</option>
      <option ${ p => p.suite == suites.DIAMONDS ? 'selected' : '' } value="DIAMONDS">♢</option>
    </select>
  </div>
</div>
`);
  }

  render(ele) {
    super.render(ele);
    let rankSelector = document.getElementById(`rank-selector-${ this.state.id }`);
    rankSelector.addEventListener('change', e => {
      this.state.rank = strToRank[e.target.value];
    });
    let suiteSelector = document.getElementById(`suite-selector-${ this.state.id }`);
    suiteSelector.addEventListener('change', e => {
      this.state.suite = strToSuite[e.target.value];
    });
  }
}
