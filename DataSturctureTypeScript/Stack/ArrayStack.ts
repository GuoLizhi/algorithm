import MyArray from '../Array/Array';
import { IStack } from './IStack';

export default class ArrayStack<E> implements IStack<E> {
  public array: MyArray<E>;

  /**
   * 构造函数，传入栈的容量capacity
   * @param {number} capacity 数组容量，默认10
   */
  constructor(capacity: number = 10) {
    this.array = new MyArray<E>(capacity);
  }

  /**
   * 获取栈容量（栈能总共能包含多少元素）
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getCapacity(): number {
    return this.array.getCapacity();
  }

  /**
   * 获取栈中当前存储元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.array.getSize();
  }

  /**
   * 判断栈是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  /**
   * 在栈顶添加一个元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 要插入的元素
   * @return {void}
   */
  push(e: E): void {
    this.array.addLast(e);
  }

  /**
   * 在栈顶出栈一个元素，并返回出栈的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  pop(): E {
    return this.array.removeLast();
  }

  /**
   * 查看栈顶元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  peek(): E {
    return this.array.getLast();
  }
}
