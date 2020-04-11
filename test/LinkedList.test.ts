import LinkedList from '../DataSturctureTypeScript/LinkedList/LinkedList';

let linkedlist: LinkedList<number> = null;
beforeEach(() => {
  linkedlist = new LinkedList<number>();
});

test('isEmpty', () => {
  expect(linkedlist.isEmpty()).toBeTruthy();
  linkedlist.addFirst(1);
  expect(linkedlist.isEmpty()).toBeFalsy();
  linkedlist.removeFirst();
  expect(linkedlist.isEmpty()).toBeTruthy();
});

test('getSize', () => {
  expect(linkedlist.getSize()).toBe(0);
  linkedlist.addFirst(1);
  expect(linkedlist.getSize()).toBe(1);
  linkedlist.removeFirst();
  expect(linkedlist.getSize()).toBe(0);
});

test('add', () => {
  expect(() => linkedlist.add(1, 0)).toThrow('Add failed. Illegal index.');
  for (let i = 0; i < 5; i++) {
    linkedlist.add(i, i);
  }
  let cur = linkedlist.dummyHead;
  for (let i = 0; i < 5; i++) {
    cur = cur.next;
    expect(cur.e).toBe(i);
  }
});

test('addFirst', () => {
  for (let i = 0; i < 5; i++) {
    linkedlist.addFirst(i);
  }
  let cur = linkedlist.dummyHead;
  for (let i = 0; i < 5; i++) {
    cur = cur.next;
    expect(cur.e).toBe(4 - i);
  }
});

test('addLast', () => {
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  let cur = linkedlist.dummyHead;
  for (let i = 0; i < 5; i++) {
    cur = cur.next;
    expect(cur.e).toBe(i);
  }
});

test('get', () => {
  expect(() => linkedlist.get(1)).toThrow('Get failed. Illegal index.');
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  for (let i = 0; i < 5; i++) {
    expect(linkedlist.get(i)).toBe(i);
  }
});

test('getFirst', () => {
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  expect(linkedlist.getFirst()).toBe(0);
});

test('getLast', () => {
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  expect(linkedlist.getLast()).toBe(4);
});

test('set', () => {
  expect(() => linkedlist.set(1, 0)).toThrow('Set failed. Illegal index.');
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  linkedlist.set(4, 999);
  expect(linkedlist.get(4)).toBe(999);
});

test('contains', () => {
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  expect(linkedlist.contains(1)).toBeTruthy();
  expect(linkedlist.contains(11)).toBeFalsy();
});

test('remove', () => {
  expect(() => linkedlist.remove(1)).toThrow('Remove failed. Index is illegal.');
  let arr = [];
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  linkedlist.remove(1);
  let cur = linkedlist.dummyHead.next;
  for (let i = 0; i < linkedlist.getSize(); i++) {
    arr.push(cur.e);
    cur = cur.next;
  }
  expect(arr).toEqual([0, 2, 3, 4]);
});

test('removeFirst', () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  linkedlist.removeFirst();
  let cur = linkedlist.dummyHead.next;
  for (let i = 0; i < linkedlist.getSize(); i++) {
    arr.push(cur.e);
    cur = cur.next;
  }
  expect(arr).toEqual([1,2,3,4]);
});

test('removeLast', () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    linkedlist.addLast(i);
  }
  linkedlist.removeLast();
  let cur = linkedlist.dummyHead.next;
  for (let i = 0; i < linkedlist.getSize(); i++) {
    arr.push(cur.e);
    cur = cur.next;
  }
  expect(arr).toEqual([0,1,2,3]);
});