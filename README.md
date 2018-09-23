# Stack based calculator

Simple stack-based calculator in JavaScript

### Instructions

Testing: `npm install && npm test`

Usage:

```
const Stack = require('./src/Stack');

const program = [1, 2, '+'];
const s = new Stack(program);

s.show();           // [3]
s.push(2);          // [3, 2]
s.push('*');        // [6]
s.clear();          // []
s.push([1, 2, 3]);  // [1, 2, 3]
s.pop()             // [1, 2]
```
