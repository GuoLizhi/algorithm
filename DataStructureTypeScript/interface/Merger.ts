export default interface Merger<E> {
  merge(a: E, b: E): E;
}