export default class BSTNode<E> {
  public e: E;
  public left: BSTNode<E> = null;
  public right: BSTNode<E> = null;

  constructor(e: E) {
    this.e = e;
  }
}