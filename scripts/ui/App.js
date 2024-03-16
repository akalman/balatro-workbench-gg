import { tmpl, Component } from './Component.js';
import HandInput from './HandInput.js';


export default class App extends Component {
  constructor(state) {
    state.title = 'test';
    state.hand = { };

    super(state, tmpl`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand row" href="#">
      <img class="col" src="./assets/logo.png" />
      <h1 class="display-1 col">${ p => p.title }</h1>
    </a>
  </div>
</nav>
<div class="mt-4">${ new HandInput( state.hand ) }</div>
<button id="test-button">Click</button>
`);
  }

  render(ele) {
    super.render(ele);
    let btn = document.getElementById('test-button');
    btn.addEventListener('click', e => {
      console.log('in click callback');
      console.log(e);
      console.log(this.state);
    });
  }
}
