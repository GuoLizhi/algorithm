export default class LinkedListNode<E> {
  public e: E;
  public next: LinkedListNode<E>;

  constructor(e: E = null, next: LinkedListNode<E> = null) {
    this.e = e;
    this.next = next;
  }

  toString(): string {
    return this.e.toString();
  }
}