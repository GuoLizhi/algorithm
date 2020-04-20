// 双向链表
export default class DoubleLinkedListNode<E> {
  public key: E = null;
  public value: E = null;
  public prev: DoubleLinkedListNode<E> = null;
  public next: DoubleLinkedListNode<E> = null;

  constructor(key: E, value: E) {
    this.key = key;
    this.value = value;
  }
}