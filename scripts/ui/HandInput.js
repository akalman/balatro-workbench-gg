import { tmpl } from './util.js';
import { ranks, suites, Card } from '../model/card.js';

import Component from './Component.js';

const cardComponentInput = (comp, handIndex) => {
  let options = '';

  Object.keys(comp).forEach(curr => {
    const compString = comp[curr].description;
    options += `<option value="${compString}">${compString}</option>`;
  });

  return `<select class="form-select form-select-lg mb-3">${options}</select>`;
};

const cardInput = (handIndex) => `
<div class="card col-3">
  <div class="card-body">
    <div class="row">
      <div class="col">
        ${ cardComponentInput(ranks, handIndex) }
      </div>
      <div class="col">
        ${ cardComponentInput(suites, handIndex) }
      </div>
    </div>
  </div>
</div>
`;

export default class HandInput extends Component {
  template = tmpl`
<div class="container container-lg">
  <div class="row">
    ${p => [...Array(p.handSize).keys()].map(idx => `${cardInput(idx)}`).join('')}
  </div>
</div>
`;

  state = {
    handSize: 8,
    hand: {}
  };
}
