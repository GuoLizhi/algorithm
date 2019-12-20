import LinkedListQueue from '../data-structure/Queue/LinkedListQueue';

let queue: LinkedListQueue<number> = null;
beforeEach(() => {
  queue = new LinkedListQueue<number>();
});

test('getSize', () => {
  expect(queue.getSize()).toBe(0);
  queue.enqueue(1);
  expect(queue.getSize()).toBe(1);
  queue.dequeue();
  expect(queue.getSize()).toBe(0);
});

test('isEmpty', () => {
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue(1);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  expect(queue.isEmpty()).toBeTruthy();
});

test('enqueue', () => {
  for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
  }
  let cur = queue.head;
  let curIndex = 1;
  while(cur !== null) {
    expect(cur.e).toBe(curIndex);
    cur = cur.next;
    curIndex++;
  }
});

test('dequeue', () => {
  for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
  }
  for (let i = 1; i <= 5; i++) {
    expect(queue.dequeue()).toBe(i);
  }
});

test('getFront', () => {
  for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
    expect(queue.getFront()).toBe(1);
  }
});