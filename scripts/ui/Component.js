export default class Component {
  render(ele) {
    ele.innerHTML = this.template(this.state);
  }
}
