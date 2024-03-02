const tmpl = ([first, ...rest], ...tags) => {
  return values => {
    return rest.reduce((acc, curr, i) => acc + tags[i](values) + curr, first);
  }
}

export { tmpl };
