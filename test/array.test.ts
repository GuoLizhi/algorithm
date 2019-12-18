import MyArray from '../data-structure/Array/Array';

test('测试数组getCapacity', () => {
  let arr = new MyArray();
  expect(arr.getCapacity()).toBe(10);
});