export interface ISet<E> {
  add(e: E): void;
  contains(e: E): boolean;
  remove(e: E): void;
  getSize(): number;
  isEmpty(): boolean;
}
