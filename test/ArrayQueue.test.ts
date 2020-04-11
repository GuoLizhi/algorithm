import ArrayQueue from '../DataSturctureTypeScript/Queue/ArrayQueue';

let queue: ArrayQueue<number> = null;
let actualQueue: number[] = [];
beforeEach(() => {
  queue = new ArrayQueue<number>();
  actualQueue = [];
});

test('getSize', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
  expect(queue.getSize()).toBe(10);
});

test('isEmpty', () => {
  queue.enqueue(1);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  expect(queue.isEmpty()).toBeTruthy();
});

test('enqueue', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
    actualQueue.push(i);
  }
  expect(queue.array.data).toEqual(actualQueue);
});

test('dequeue', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
    actualQueue.push(i);
  }
  for (let i = 1; i <= 10; i++) {
    queue.dequeue();
    actualQueue.shift();
    expect(queue.array.data.filter(Boolean)).toEqual(actualQueue);
  }
});

test('getFront', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
    actualQueue.push(i);
    expect(queue.getFront()).toBe(actualQueue[0]);
  }
});