export interface IStack<E> {
  getSize(): number;
  isEmpty(): boolean;
  push(e: E): void;
  pop(): E;
  peek(): E;
}
