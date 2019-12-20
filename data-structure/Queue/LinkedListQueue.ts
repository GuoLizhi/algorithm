import { Queue } from './IQueue';
import { LinkedListNode } from '../LinkedList/ILinkedList';

/**
 * 基于链表实现的队列
 * 充分利用链表的动态性，链表对于头结点和尾节点的操作都非常方便
 * 可以实现入队和出队都是O(1)的时间复杂度
 */
export default class LinkedListQueue<E> implements Queue<E> {
  public head: LinkedListNode<E> = null;
  private tail: LinkedListNode<E> = null;
  private size: number = 0;

  /**
   * 获取队列中当前存储元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * 判断队列是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 向队列末尾添加一个元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 要添加的元素
   * @return {void}
   */
  enqueue(e: E): void {
    if (this.tail === null) {
      this.tail = new LinkedListNode<E>(e);
      this.head = this.tail;
    } else {
      this.tail.next = new LinkedListNode<E>(e);
      this.tail = this.tail.next;
    }
    this.size++;
  }

  /**
   * 从队列头部出队一个元素，并返回出队的元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {E}
   */
  dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }
    let retNode = this.head;
    this.head = this.head.next;
    retNode.next = null; // 切断之前的头结点和头结点下一个节点之间的联系
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return retNode.e;
  }

  /**
   * 查看队列头部的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  getFront(): E {
    return this.head.e;
  }
}