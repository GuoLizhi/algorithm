class LinkedListNode<E> {
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

class LinkedList<E> {
  private dummyHead: LinkedListNode<E> = new LinkedListNode<E>();
  private size: number = 0;

  isEmpty(): boolean {
    return this.size === 0;
  }

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

  addFirst(e: E): void {
    this.add(0, e);
  }

  addLast(e: E): void {
    this.add(this.size, e);
  }
}