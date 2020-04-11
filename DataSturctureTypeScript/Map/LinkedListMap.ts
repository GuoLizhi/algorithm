import { IMap } from './IMap';

class LinkedListMapNode<K, V> {
  public key: K;
  public value: V;
  public next: LinkedListMapNode<K, V>;

  constructor(key: K = null, value: V = null, next: LinkedListMapNode<K, V> = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export default class LinkedListMap<K, V> implements IMap<K, V> {
  private dummyHead: LinkedListMapNode<K, V> = new LinkedListMapNode<K, V>();
  private size: number = 0;

  /**
   * 获取当前map中元素的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 获取当前map是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 工具方法：获取map中键为K的节点
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @return {LinkedListMapNode<K, V>}
   */
  private getNode(key: K): LinkedListMapNode<K, V> {
    let cur: LinkedListMapNode<K, V> = this.dummyHead.next;
    while (cur !== null) {
      if (cur.key === key) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }

  /**
   * 判断map中是否包含键为key的节点
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @return {boolean}
   */
  contains(key: K): boolean {
    return this.getNode(key) !== null;
  }

  /**
   * 获取map中是否包含键为key的节点对应的value
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @return {V}
   */
  get(key: K): V {
    const node = this.getNode(key);
    return node === null ? null : node.value;
  }

  /**
   * 向map中添加键为key，值为value的数据对
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @param {V} value key对应的value
   * @return {void}
   */
  add(key: K, value: V): void {
    let node = this.getNode(key);
    if (node === null) {
      this.dummyHead.next = new LinkedListMapNode<K, V>(key, value, this.dummyHead.next);
      this.size++;
    } else {
      node.value = value;
    }
  }

  /**
   * 对map中键为key的值设置新值newValue
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @param {V} newValue 需要新设置的值newValue
   * @return {void}
   */
  set(key: K, newValue: V): void {
    let node = this.getNode(key);
    if (node === null) {
      throw new Error(`${key} doesn't exist!`);
    }
    node.value = newValue;
  }

  /**
   * 删除map中键为key的数据对
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @return {V}
   */
  remove(key: K): V {
    let prev = this.dummyHead;
    while(prev.next !== null) {
      if (prev.next.key === key) {
        break;
      }
      prev = prev.next;
    }

    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.size--;
      return delNode.value;
    }

    return null;
  }
}