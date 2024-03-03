const tmpl = (strings, ...interpolations) => {
  const output = [];

  output.push(strings[0]);

  let idx = 0;
  while (idx < interpolations.length) {
    output.push(interpolations[idx]);
    output.push(strings[idx+1]);
    idx++;
  }

  return output;
};

const wrap = (obj, setterFn) => {
  const output = {};

  Object.keys(obj).forEach(key => {
    Object.defineProperty(output, key, {
      get() { return obj[key] },

      set(value) {
        obj[key] = value;
        setterFn(key, value);
      }
    });
  });

  return output;
}

class Component {
  ele;
  tmpl;
  state;
  children = {};

  constructor(state, tmpl) {
    this.tmpl = tmpl;
    this.state = wrap(state, () => this.update());

    this.tmpl = this.tmpl.map(t => {
      if (typeof(t) === "object" && t instanceof Component) {
        const id = `component-${ Math.random().toString(16).slice(2, 8) }`;
        this.children[id] = t;
        return `<div id="${id}"></div>`;
      }
      return t;
    });
  }

  update() {
    this.render(this.ele);
  }

  render(ele) {
    this.ele = ele;
    const innerHTML = this.tmpl
      .map(t => {
        if (typeof(t) === "function") {
          return t(this.state);
        }
        return t;
      })
      .join('');

    this.ele.innerHTML = innerHTML;

    Object.keys(this.children).forEach(childId => {
      const child = this.children[childId];
      child.render(document.getElementById(childId));
    });
  }
}


export { tmpl, Component };
