import LinkedList from '../LinkedList/LinkedList';
import { ISet } from './ISet';

export default class LinkedListSet<E> implements ISet<E> {
  private list: LinkedList<E> = new LinkedList<E>();

  /**
   * 获取集合中元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.list.getSize();
  }

  /**
   * 判断集合是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  /**
   * 向集合中添加元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 需要添加的元素
   * @return {void}
   */
  add(e: E): void {
    if (!this.list.contains(e)) {
      this.list.addFirst(e);
    }
  }

  /**
   * 判断集合中是否包含元素e
   * Time Complexity O(n)
   * Time Complexity O(1)
   * @param {E} e 需要查找的元素
   * @return {boolean}
   */
  contains(e: E): boolean {
    return this.list.contains(e);
  }

  /**
   * 删除集合中的元素e
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {E} e 需要删除的元素
   * @return {void}
   */
  remove(e: E): void {
    this.list.removeElement(e);
  }
}