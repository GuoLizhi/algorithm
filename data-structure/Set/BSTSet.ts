import BST from '../BinarySearchTree/BST';

interface ISet<E> {
  add(e: E): void;
  contains(e: E): boolean;
  remove(e: E): void;
  getSize(): number;
  isEmpty(): boolean;
}

class BSTSet<E> implements ISet<E> {
  private bst: BST<E> = new BST<E>();

  getSize() {
    return this.bst.getSize();
  }

  isEmpty() {
    return this.bst.isEmpty();
  }

  add(e: E): void {
    this.bst.add(this.bst.root, e);
  }

  contains(e: E): boolean {
    return this.bst.contains(e);
  }

  remove(e: E): void {
    this.bst.remove(e);
  }
}