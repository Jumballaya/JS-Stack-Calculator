/**
 * Stack Tests
 */
import test from 'ava';
import Stack from '../src/Stack';

test('Stack can be instanciated without error', t => {
  const s = new Stack();
  t.truthy(s);
});

test('Stack can do math with two numbers', t => {
  const tests = [
    { input: [1, 2, '+'], expected: 3 },
    { input: [7, 14, '-'], expected: 7 },
    { input: [6, 6, '*'], expected: 36 },
    { input: [4, 24, '/'], expected: 6 },
    { input: [2, 17, '%'], expected: 1 },
  ];

  tests.forEach(tt => {
    const s = new Stack(tt.input);
    t.is(s.show()[0], tt.expected);
  });
});

test('Stack can do math with more than two numbers', t => {
  const tests = [
    { input: [1, 2, 3, '+'], expected: 6 },
    { input: [10, 5, 20, '-'], expected: 5 },
    { input: [3, 3, 3, '*'], expected: 27 },
    { input: [2, 2, 64, '/'], expected: 16 },
    { input: [2, 16, 32, 64, '%'], expected: 0 },
  ];

  tests.forEach(tt => {
    const s = new Stack(tt.input);
    t.is(s.show()[0], tt.expected);
  });
});

test('Stack can accumulate commands until an operator is added', t => {
  const tests = [
    { input: [1], expected: 1 },
    { input: [1, 2], expected: 2 },
    { input: [1, 2, 3], expected: 3 },
    { input: [1, 2, '+', 1, 2, 3], expected: 4 },
    { input: [1, 2, 3, 4, 6, 123, '-'], expected: 1 },
    { input: [1, 2, '+', 2, '+', 3, '+'], expected: 1 },
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 10 },
  ];

  tests.forEach(tt => {
    const s = new Stack(tt.input);
    t.is(s.show().length, tt.expected);
  });
});

test('Stack pop returns latest item from the stack', t => {
  const program = [1, 2, 3];
  const s = new Stack(program);
  t.is(s.pop(), program[program.length - 1]);
});

test('Stack push adds a new item to the end of the list', t => {
  const s = new Stack();
  s.push(1);
  t.is(s.show()[0], 1);
});

test('Stack clear removes items from the stack', t => {
  const program = [1, 2, 3];
  const s = new Stack(program);
  t.is(s.show().length, 3);
  s.clear();
  t.is(s.show().length, 0);
});
