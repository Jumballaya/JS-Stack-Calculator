const doMath = (l, r, o) => {
  switch (o) {
    case '+':
      return l + r;
    case '-':
      return l - r;
    case '*':
      return l * r;
    case '/':
      return l / r;
    case '%':
      return l % r;
    default:
      throw new Error(`operator ${o} not supported`);
  }
};

function Stack(program = []) {
  const items = [];

  const p = i => {
    items.push(i);
    if (typeof i === 'string') items.push(this.evaluate());
  };
  this.push = i => {
    if (!i) return null;
    if (i instanceof Array) {
      if (i.length) {
        p(i[0]);
        this.push(i.slice(1));
      }
    } else {
      p(i);
    }
  };

  this.pop = () => items.pop();
  this.show = () => items;
  this.clear = () => (items.pop() ? this.clear() : null);

  this.evaluate = () => {
    const operator = this.pop();
    let l = this.pop();
    while (items.length) {
      l = doMath(l, this.pop(), operator);
    }
    return l;
  };

  this.push(program);
}

module.exports = Stack;
