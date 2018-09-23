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

class Stack {
  constructor(program = []) {
    this.items = [];
    this.push(program);
  }

  pop() {
    return this.items.pop();
  }
  show() {
    return this.items;
  }
  clear() {
    return this.items.pop() ? this.clear() : null;
  }

  pushItem(i) {
    if (!i) return null;
    this.items.push(i);
    if (typeof i === 'string') this.items.push(this.evaluate());
    return this.items;
  }

  push(item) {
    if (!item) return this.items;
    if (Array.isArray(item) && !item.length) return this.items;

    if (Array.isArray(item)) {
      this.pushItem(item.shift());
      return this.push(item);
    }
    return this.pushItem(item);
  }

  evaluate() {
    const operator = this.pop();
    let left = this.pop();
    while (this.items.length) {
      left = doMath(left, this.pop(), operator);
    }
    return left;
  }
}

module.exports = Stack;
