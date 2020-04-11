import { IMap } from './IMap';

class BSTMapNode<K, V> {
  public key: K;
  public value: V;
  public left: BSTMapNode<K, V> = null;
  public right: BSTMapNode<K, V> = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export default class BSTMap<K, V> implements IMap<K, V> {
  private root: BSTMapNode<K, V> = null;
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
   * 向map中添加键为key，值为value的数据对
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 要查找的节点的key
   * @param {V} value key对应的value
   * @return {void}
   */
  add(key: K, value: V): void {
    this._add(this.root, key, value);
  }

  /**
   * 向以node为根的二分搜索树中添加元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTMapNode<K, V>} node 添加元素的根节点
   * @param {K} key 添加数据对的key
   * @param {V} value 添加数据对的value
   * @return {BSTMapNode<K, V>}
   */
  private _add(node: BSTMapNode<K, V>, key: K, value: V): BSTMapNode<K, V> {
    if (node === null) {
      this.size++;
      return new BSTMapNode<K, V>(key, value);
    }

    if (key < node.key) {
      node.left = this._add(node.left, key, value);
    } else if (key > node.key) {
      node.right = this._add(node.right, key, value);
    } else {
      node.value = value;
    }

    return node;
  }

  /**
   * 获取以node为根的二分搜索树中键为key的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTMapNode<K, V>} node 查找的二分搜索树的根节点
   * @param {K} key 查找的节点的key
   * @return {BSTMapNode<K, V>}
   */
  private getNode(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {
    if (node === null) {
      return null;
    }

    if (key === node.key) {
      return node;
    } else if (key < node.key) {
      return this.getNode(node.left, key);
    } else {
      return this.getNode(node.right, key);
    }
  }

  /**
   * 判断map中是否含有以key为键的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 查找的节点的key
   * @return {boolean}
   */
  contains(key: K): boolean {
    return this.getNode(this.root, key) !== null;
  }

  /**
   * 获取map中以key为键的数据对的value
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 查找的节点的key
   * @return {V}
   */
  get(key: K): V {
    const node = this.getNode(this.root, key);
    return node === null ? null : node.value;
  }

  /**
   * 设置map中以key为键的值为newValue
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 需要查找的节点的key
   * @param {V} newValue 需要设置的新的value
   * @return {void}
   */
  set(key: K, newValue: V): void {
    const node = this.getNode(this.root, key);
    if (node === null) {
      throw new Error(`${key} doesn't exist!`);
    }
    node.value = newValue;
  }

  /**
   * 获取以node为根的二分搜索树中最小的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 需要查找的节点的key
   * @param {V} newValue 需要设置的新的value
   * @return {void}
   */
  private minimum(node: BSTMapNode<K, V>): BSTMapNode<K, V> {
    if (node.left === null) {
      return node;
    }
    return this.minimum(node.left);
  }

  /**
   * 删除以node为根的二分搜索树中的最小的节点，并返回删除之后新的根节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTMapNode<K, V>} node 根节点
   * @return {BSTMapNode<K, V>}
   */
  private removeMin(node: BSTMapNode<K, V>): BSTMapNode<K, V> {
    if (node.left === null) {
      let rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }
    node.left = this.removeMin(node.left);
    return node;
  }

  /**
   * 删除以node为根的二分搜索树中键为key的节点，并返回删除之后新的根节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTMapNode<K, V>} node 根节点
   * @param {K} key 需要删除节点的键
   * @return {BSTMapNode<K, V>}
   */
  private _remove(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this._remove(node.left, key);
    } else if (key > node.key) {
      node.right = this._remove(node.right, key);
    } else {

      // 待删除的节点左子树为空的情况
      if (node.left === null) {
        let rightNode = node.right;
        node.right = null;
        this.size--;
        return rightNode;
      }

      // 待删除节点右子树为空的情况
      if (node.right === null) {
        let leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      }

      // 待删除的节点的左右子树均不为空的情况
      // 找到比待删除节点大的最小节点，即待删除右子树中的最小节点
      // 用这个节点顶替待删除节点的位置
      let successor = this.minimum(node.right);
      successor.right = this.removeMin(node.right);
      successor.left = node.left;
      node.left = null;
      node.right = null;
      return successor;
    }
  }

  /**
   * 删除map中键为key的数据对，并返回删除节点的value
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {K} key 需要删除节点的键
   * @return {V}
   */
  remove(key: K): V {
    let node = this.getNode(this.root, key);
    if (node !== null) {
      this.root = this._remove(this.root, key);
      return node.value;
    }
    return null;
  }
}