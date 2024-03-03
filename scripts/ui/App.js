import { tmpl, Component } from './Component.js';
import HandInput from './HandInput.js';


export default class App extends Component {
  constructor() {
    const state = {
      title: 'test'
    };

    super(state, tmpl`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand row" href="#">
      <img class="col" src="./assets/logo.png" />
      <h1 class="display-1 col">${p => p.title}</h1>
    </a>
  </div>
</nav>
<div class="mt-4">${ new HandInput() }</div>
`);
  }
}
