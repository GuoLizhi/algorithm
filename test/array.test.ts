import MyArray from '../data-structure/Array/Array';

test('测试数组添加功能', () => {
  const arr = new MyArray<number>();
  const acturalArr = [];
  arr.addLast(1);
  acturalArr.push(1);
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  arr.addFirst(2);
  acturalArr.unshift(2);
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  arr.add(1, 3);
  acturalArr.splice(1, 0, 3);
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  expect(() => arr.add(-1, 1)).toThrow(`Add failed. Required index >= 0 and index <= size`);
  expect(() => arr.add(arr.getSize() + 1, 1)).toThrow(`Add failed. Required index >= 0 and index <= size`);
});

test('测试数组删除功能', () => {
  const arr = new MyArray<number>();
  const acturalArr = [];
  for (let i = 1; i <= 10; i++) {
    arr.addLast(i);
    acturalArr.push(i);
  }
  arr.removeLast();
  acturalArr.pop();
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  arr.removeFirst();
  acturalArr.shift();
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  arr.remove(1);
  acturalArr.splice(1, 1);
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  expect(() => arr.remove(-1)).toThrow(`Remove failed. index is illegal`);
  expect(() => arr.remove(arr.getSize() + 1)).toThrow(`Remove failed. index is illegal`);
});

test('测试数组修改', () => {
  const arr = new MyArray<number>();
  const acturalArr: number[] = [];
  for (let i = 1; i <= 10; i++) {
    arr.addLast(i);
    acturalArr.push(i);
  }
  arr.set(0, 100);
  acturalArr[0] = 100;
  arr.set(1, 100);
  acturalArr[1] = 100;
  expect(arr.data.filter(Boolean)).toEqual(acturalArr);
  expect(() => arr.set(-1, 1)).toThrow(`Set failed. Index is illegal.`);
  expect(() => arr.set(arr.getSize(), 1)).toThrow(`Set failed. Index is illegal.`);
});

test('测试数组的包含功能', () => {
  const arr = new MyArray<number>();
  const acturalArr: number[] = [];
  for (let i = 1; i <= 10; i++) {
    arr.addLast(i);
    acturalArr.push(i);
  }
  expect(arr.contains(1)).toBeTruthy();
  expect(arr.contains(11)).toBeFalsy();
  expect(arr.find(2)).toBe(acturalArr.indexOf(2));
  expect(arr.find(1000)).toBe(-1);
  expect(arr.get(1)).toBe(acturalArr[1]);
  expect(arr.getFirst()).toBe(acturalArr[0]);
  expect(arr.getLast()).toBe(acturalArr[acturalArr.length - 1]);
  expect(() => arr.get(-1)).toThrow();
  expect(() => arr.get(arr.getSize())).toThrow();
});

test('数组isEmpty', () => {
  const arr = new MyArray<number>();
  expect(arr.isEmpty()).toBeTruthy();
  arr.addLast(1);
  expect(arr.isEmpty()).not.toBeTruthy();
  arr.removeLast();
  expect(arr.isEmpty()).toBeTruthy();
});

test('测试数组getSize', () => {
  const arr = new MyArray<number>();
  for (let i = 1; i <= 10; i++) {
    arr.addLast(i);
  }
  expect(arr.getSize()).toBe(10);
  for (let i = 1; i <= 5; i++) {
    arr.removeLast();
  }
  expect(arr.getSize()).toBe(5);
});

test('测试数组getCapacity', () => {
  let arr = new MyArray();
  let capacity = 10;
  expect(arr.getCapacity()).toBe(capacity);
  for (let i = 1; i <= 10; i++) {
    arr.addLast(i);
  }
  expect(arr.getCapacity()).toBe(capacity);
  arr.addLast(11);
  expect(arr.getCapacity()).toBe(capacity * 2);
  for (let i = 1; i <= 5; i++) {
    arr.removeLast();
  }
  // size === 6
  // capacity === 20
  expect(arr.getCapacity()).toBe(capacity * 2);
  arr.removeLast();
  // size === 5
  // capacity === 20
  expect(arr.getCapacity()).toBe(capacity);
});