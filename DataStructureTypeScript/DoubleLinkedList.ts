import DNode from './common/DoubleLinkedListNode'

export default class DoubleLinkedList<E> {
  private dummyHead: DNode<E> = new DNode(null, null);
  private dummyTail: DNode<E> = new DNode(null, null);
  private size: number = 0;

  constructor() {
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  public getSize(): number {
    return this.size;
  }

  // 向链表头添加一个元素
  public addFirst(node: DNode<E>) {
    node.next = this.dummyHead.next;
    node.prev = this.dummyHead;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
    this.size++;
  }

  // 删除链表的一个元素
  public remove(node: DNode<E>): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  // 删除链表的最后一个元素
  public removeLast(node: DNode<E>): DNode<E> {
    if (this.dummyTail.prev == this.dummyHead)
      return null;
    const last = this.dummyTail.prev;
    this.remove(last);
    return last;
  }
}