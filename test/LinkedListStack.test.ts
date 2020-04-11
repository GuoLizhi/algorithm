import LinkedListStack from '../DataSturctureTypeScript/Stack/LinkedListStack';

let stack: LinkedListStack<number> = null;
let actualStack: number[];
beforeEach(() => {
  stack = new LinkedListStack<number>();
  actualStack = [];
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
  for (let i = 1; i <= 5; i++) {
    stack.push(i);
  }
  let arr = [];
  let cur = stack.linkedlist.dummyHead.next;
  while (cur !== null) {
    arr.push(cur.e);
    cur = cur.next;
  }
  expect(arr).toEqual([5,4,3,2,1]);
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