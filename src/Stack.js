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
    this.load(program);
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

  push(stmt) {
    if (!stmt) return 0;
    this.items.push(stmt);
    if (typeof stmt === 'string') this.items.push(this.evaluate());
    return 1;
  }

  load(program, count = 0) {
    if (!program) return count;
    if (Array.isArray(program) && !program.length) return count;

    if (Array.isArray(program)) {
      this.push(program.shift());
      return this.load(program, count + 1);
    }

    this.push(program);
    return count + 1;
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
