import { IStack } from './IStack';
import LinkedList from '../LinkedList/LinkedList';

export default class LinkedListStack<E> implements IStack<E> {
  public linkedlist = new LinkedList<E>();

  /**
   * 获取栈中当前存储元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.linkedlist.getSize();
  }

  /**
   * 判断栈是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.linkedlist.isEmpty();
  }

  /**
   * 在栈顶添加一个元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 要插入的元素
   * @return {void}
   */
  push(e: E): void {
    this.linkedlist.addFirst(e);
  }

  /**
   * 在栈顶出栈一个元素，并返回出栈的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  pop(): E {
    return this.linkedlist.removeFirst();
  }

  /**
   * 查看栈顶元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  peek(): E {
    return this.linkedlist.getFirst();
  }
}