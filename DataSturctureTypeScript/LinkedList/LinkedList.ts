import { LinkedListNode } from './ILinkedList';

export default class LinkedList<E> {
  public dummyHead: LinkedListNode<E> = new LinkedListNode<E>();
  private size: number = 0;

  /**
   * 判断链表是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 获取当前链表中元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 获取当前链表中index位置添加新的元素e
   * 这里需要找到index位置的前一个元素，让前一个元素的next指向新的元素，新的元素的next指向prev.next
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {number} index 元素插入的位置
   * @param {E} e 要插入的元素
   * @return {void}
   */
  add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Illegal index.');
    }

    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }

    prev.next = new LinkedListNode<E>(e, prev.next);
    this.size++;
  }

  /**
   * 在链表头添加一个元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {E} e 要插入链表的元素
   * @return {void}
   */
  addFirst(e: E): void {
    this.add(0, e);
  }

  /**
   * 在链表尾部添加一个元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {E} e 要插入链表的元素
   * @return {void}
   */
  addLast(e: E): void {
    this.add(this.size, e);
  }

  /**
   * 获取链表的第index个位置的元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {number} index 要获取元素的索引
   * @return {E}
   */
  get(index: number): E {
    if (index < 0 || index > this.size) {
      throw new Error('Get failed. Illegal index.');
    }

    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  }

  /**
   * 获取链表头的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  getFirst(): E {
    return this.get(0);
  }

  /**
   * 获取链表尾的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  getLast(): E {
    return this.get(this.size - 1);
  }

  /**
   * 修改链表第index位置的元素为e
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {number} index 要修改的元素的索引
   * @param e 要被修改成的元素
   * @return {void}
   */
  set(index: number, e: E): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Illegal index.');
    }

    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.e = e;
  }

  /**
   * 查找链表中是否包含元素e
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param e 需要查找的元素
   * @return {boolean}
   */
  contains(e: E): boolean {
    let cur = this.dummyHead.next;
    while (cur !== null) {
      if (cur.e === e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  /**
   * 删除链表中第index位置的索引，并返回删除的元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {number} index 需要删除的元素所在的位置
   * @return {E}
   */
  remove(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Remove failed. Index is illegal.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    let delNode = prev.next;
    prev.next = delNode.next;
    delNode.next = null; // 断开delNode与其下一个节点的连接
    this.size--;
    return delNode.e;
  }

  /**
   * 删除链表头的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  removeFirst(): E {
    return this.remove(0);
  }

  /**
   * 删除链表尾的元素
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {E}
   */
  removeLast(): E {
    return this.remove(this.size - 1);
  }

  /**
   * 删除链表中的元素e
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {E} e 要删除的元素e
   * @return {E}
   */
  removeElement(e: E): void {
    let prev: LinkedListNode<E> = this.dummyHead;
    while (prev.next !== null) {
      if (prev.next.e === e) {
        break;
      }
      prev = prev.next;
    }

    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.size--;
    }
  }
}
