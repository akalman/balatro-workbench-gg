import { tmpl } from './util.js';

import Component from './Component.js';
import HandInput from './HandInput.js';

export default class App extends Component {
  template = tmpl`
<div class="navbar navbar-brand bg-body-tertiary">
  <img src="./assets/logo.png" />
  <h1 class="display-4">${p => p.title}</h1>
</div>
${p => p.handInput.template(p.handInput.state)}
`;

  state = {
    title: 'test',
    handInput: new HandInput()
  };
}
