export default interface Map<K, V> {
  add(key: K, value: V): void;
  remove(key: K): V;
  contains(key: K): boolean;
  get(key: K): V;
  set(key: K, newValue: V): void;
  getSize(): number;
  isEmpty(): boolean;
}