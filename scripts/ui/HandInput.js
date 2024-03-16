import { tmpl, Component } from './Component.js';
import { ranks, suites, Card } from '../model/card.js';

import CardSelector from './CardSelector.js';

export default class HandInput extends Component {
  constructor(state) {
    state.handSize = 8;
    state.hand = { };
    for (let i = 0; i < state.handSize; i++) {
      state.hand[i] = { };
    }

    super(state, tmpl`
<div class="container-fluid">
  <div class="card text-bg-primary">
    <div class="card-header">
      Current Hand:
    </div>
    <div class="card-body">
      <div class="row row-cols-4 gy-4">
        ${ new CardSelector( state.hand[0] ) }
        ${ new CardSelector( state.hand[1] ) }
        ${ new CardSelector( state.hand[2] ) }
        ${ new CardSelector( state.hand[3] ) }
        ${ new CardSelector( state.hand[4] ) }
        ${ new CardSelector( state.hand[5] ) }
        ${ new CardSelector( state.hand[6] ) }
        ${ new CardSelector( state.hand[7] ) }
      </div>
    </div>
  </div>
</div>
`);
  }
}
