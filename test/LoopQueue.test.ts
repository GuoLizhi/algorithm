import LoopQueue from '../data-structure/Queue/LoopQueue';

let queue: LoopQueue<number> = null;
beforeEach(() => {
  queue = new LoopQueue<number>();
});

test('getCapacity', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
  expect(queue.getCapacity()).toBe(10);
  queue.enqueue(11);
  expect(queue.getCapacity()).toBe(20);
  for (let i = 1; i <= 5; i++) {
    queue.dequeue();
  }
  expect(queue.getCapacity()).toBe(20);
  queue.dequeue();
  expect(queue.getCapacity()).toBe(10);
});

test('getSize', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
    expect(queue.getSize()).toBe(i);
  }
});

test('isEmpty', () => {
  queue.enqueue(1);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  expect(queue.isEmpty()).toBeTruthy();
});

test('getFront', () => {
  expect(() => queue.getFront()).toThrow(`Queue is empty.`)
  for (let i = 1; i <= 20; i++) {
    queue.enqueue(i);
    expect(queue.getFront()).toBe(1);
  }
  for (let i = 1; i <= 5; i++) {
    queue.dequeue();
    expect(queue.getFront()).toBe(i + 1);
  }
});

test('enqueue', () => {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
  for (let i = 1; i <= 5; i++) {
    queue.dequeue();
  }
  queue.enqueue(1);
  expect(queue.data.filter(Boolean)).toEqual([6,7,8,9,10,1]);
  queue.enqueue(2);
  expect(queue.data.filter(Boolean)).toEqual([2,6,7,8,9,10,1]);
  queue.enqueue(3);
  expect(queue.data.filter(Boolean)).toEqual([2,3,6,7,8,9,10,1]);
});

test('dequeue', () => {
  expect(() => queue.dequeue()).toThrow(`Cannot dequeue from an empty queue.`);
  let _queue: number[] = [];
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
    _queue.push(i);
  }
  for (let i = 1; i <= 5; i++) {
    queue.dequeue();
    _queue.shift();
    expect(queue.data.filter(Boolean)).toEqual(_queue);
  }
});