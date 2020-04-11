import MyArray from '../Array/Array';
import { Queue } from './IQueue';

/**
 * 基于数组的队列，最基础的队列实现
 * 缺点在于出队需要O(n)的时间复杂度
 * @author lizhi.guo@foxmail.com
 */
export default class ArrayQueue<E> implements Queue<E> {
  public array: MyArray<E>;

  /**
   * 构造函数，传入队列的容量capacity
   * @param {number} capacity 数组容量，默认10
   */
  constructor(capacity: number = 10) {
    this.array = new MyArray<E>(capacity);
  }

  /**
   * 获取队列中当前存储元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.array.getSize();
  }

  /**
   * 判断队列是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  /**
   * 向队列末尾添加一个元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 要添加的元素
   * @return {void}
   */
  enqueue(e: E): void {
    this.array.addLast(e);
  }

  /**
   * 从队列头部出队一个元素，并返回出队的元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {E}
   */
  dequeue(): E {
    return this.array.removeFirst();
  }

  /**
   * 查看队列头部的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  getFront(): E {
    return this.array.getFirst();
  }
}