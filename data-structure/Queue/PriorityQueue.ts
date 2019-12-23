import { Queue } from './IQueue';
import MaxHeap from '../Heap/MaxHeap';

export default class PriorityQueue<E> implements Queue<E> {
  private maxHeap: MaxHeap<E> = new MaxHeap<E>();

  /**
   * 获取队列中当前存储元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize (): number {
    return this.maxHeap.size();
  }

  /**
   * 判断队列是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty (): boolean {
    return this.maxHeap.isEmpty();
  }

  /**
   * 获取队列首的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  getFront (): E {
    return this.maxHeap.findMax();
  }

  /**
   * 入队一个元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 入队的元素
   * @return {void}
   */
  enqueue (e: E): void {
    this.maxHeap.add(e);
  }

  /**
   * 出队一个元素，并返回出队的元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {E}
   */
  dequeue (): E{
    return this.maxHeap.extractMax();
  }
}
