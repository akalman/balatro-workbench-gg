import { tmpl, Component } from './Component.js';
import { ranks, suites, Card } from '../model/card.js';

const cardComponentInput = (comp, handIndex) => {
  let options = '';

  Object.keys(comp).forEach(curr => {
    const compString = comp[curr].description;
    options += `<option value="${compString}">${compString}</option>`;
  });

  return `<select class="form-select">${options}</select>`;
};

const cardInput = (handIndex) => `
<form class="m-0 pt-4">
  <div class="row g-0">
    <div class="col">
      ${ cardComponentInput(ranks, handIndex) }
    </div>
    <div class="col">
      ${ cardComponentInput(suites, handIndex) }
    </div>
  </div>
</form>
`;

export default class HandInput extends Component {
  constructor() {
    const state = {
      handSize: 8,
      hand: { }
    };

    super(state, tmpl`
<div class="container-fluid">
  <div class="card text-bg-primary">
    <div class="card-header">
      Current Hand:
    </div>
    <div class="card-body">
      <div class="row row-cols-4 gy-4">
        ${p => [...Array(p.handSize).keys()].map(idx => `${cardInput(idx)}`).join('')}
      </div>
    </div>
  </div>
</div>
`);
  }
}
