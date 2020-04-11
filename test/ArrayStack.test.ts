import ArrayStack from '../DataSturctureTypeScript/Stack/ArrayStack';

let stack: ArrayStack<number> = null;
let actualStack: number[];
beforeEach(() => {
  stack = new ArrayStack<number>();
  actualStack = [];
});

test('getCapacity', () => {
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
  }
  expect(stack.getCapacity()).toBe(10);
  stack.push(11);
  expect(stack.getCapacity()).toBe(20);
  for(let i = 1; i <= 6; i++) {
    stack.pop();
  }
  expect(stack.getCapacity()).toBe(10);
});

test('getSize', () => {
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
  }
  expect(stack.getSize()).toBe(10);
});

test('isEmpty', () => {
  stack.push(1);
  expect(stack.isEmpty()).toBeFalsy();
  stack.pop();
  expect(stack.isEmpty()).toBeTruthy();
});

test('push', () => {
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
    actualStack.push(i);
  }
  expect(stack.array.data).toEqual(actualStack);
});

test('pop', () => {
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
    actualStack.push(i);
  }
  for (let i = 1; i <= 10; i++) {
    expect(stack.pop()).toBe(actualStack.pop());
  }
});

test('peek', () => {
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
    actualStack.push(i);
    expect(stack.peek()).toBe(actualStack[actualStack.length - 1]);
  }
});