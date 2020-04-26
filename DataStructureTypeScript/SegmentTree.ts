import Merger from './interface/Merger'

export default class SegmentTree<E> {
  private tree: E[];
  private data: E[];
  private merger: Merger<E>;

  /**
   * 构造函数，初始化data数组
   * Time Complexity O(n)
   * @param {E[]} arr 传入的初始化数组
   * @param {Merger<E>>} merger 传入的merger
   * @return {void}
   */
  constructor (arr: E[], merger: Merger<E>) {
    this.merger = merger;
    this.data = new Array<E>(arr.length);
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i];
    }
    this.tree = new Array<E>(4 * arr.length);
    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  /**
   * 获取线段树的中元素的个数
   * Time Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.data.length;
  }

  /**
   * 获取index位置的元素
   * Time Complexity O(1)
   * @param {number} index 获取的索引
   * @return {E}
   */
  get(index: number): E {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index is illegal.');
    }
    return this.data[index];
  }

  /**
   * 工具方法：获取index位置元素的左孩子元素的索引
   * Time Complexity O(1)
   * @param {number} index 获取到的索引
   * @return {number}
   */
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  /**
   * 工具方法：获取index位置元素的右孩子元素的索引
   * Time Complexity O(1)
   * @param {number} index 获取到的索引
   * @return {number}
   */
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  /**
   * 在treeIndex的位置创建区间为[left...right]的线段树
   * Time Complexity O(log n)
   * @param {number} treeIndex 创建线段树的位置
   * @param {number} left 区间左侧
   * @param {number} right 区间右侧
   */
  private buildSegmentTree(treeIndex: number, left: number, right: number): void {
    if (left === right) {
      this.tree[treeIndex] = this.data[left];
      return;
    }

    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    let mid = Math.floor((left + right) / 2);
    this.buildSegmentTree(leftTreeIndex, left, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, right);

    this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  /**
   * 返回区间[queryL...queryR]的值
   * Time Complexity O(log n)
   * @param {number} queryL 区间左边界
   * @param {number} queryR 区间右边界
   * @return {E}
   */
  query(queryL: number, queryR: number): E {
    if (queryL < 0 || queryR >= this.data.length
        || queryL >= this.data.length || queryR < 0 || queryL > queryR) {
      throw new Error('Index is illegal.');
    }
    return this._query(0, 0, this.data.length - 1, queryL, queryR);
  }

  /**
   * 工具方法：在treeIndex为根的线段树中[left...right]的范围里，搜索区间[queryL...queryR]的值
   * Time Complexity O(log n)
   * @param {number} treeIndex 线段树的根
   * @param {number} left 要查询的线段树的左边界
   * @param {number} right 要查询的线段树的右边界
   * @param {number} queryL 查询区间的左边界
   * @param {number} queryR 查询区间的右边界
   * @return {E}
   */
  private _query(treeIndex: number, left: number, right: number, queryL: number, queryR: number): E {
    if (left === queryL && right === queryR) {
      return this.tree[treeIndex];
    }

    let mid = Math.floor(left + (right - left) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    if (queryL >= mid + 1) {
      return this._query(treeIndex, mid + 1, right, queryL, queryR);
    } else if (queryR <= mid) {
      return this._query(treeIndex, left, mid, queryL, queryR);
    } else {
      let leftResult = this._query(leftTreeIndex, left, mid, queryL, mid);
      let rightResult = this._query(rightTreeIndex, mid + 1, right, mid + 1, queryR);
      return this.merger.merge(leftResult, rightResult);
    }
  }

  // 将index位置的值，更新为e
  public set(index: number, e: E): void {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index is illegal.');
    }
    this.data[index] = e;
    this._set(0, 0, this.data.length, index, e);
  }

  // 在以treeIndex为根的线段树中更新index的值为e
  private _set(treeIndex: number, l: number, r: number, index: number, e: E): void {
    if (l === r) {
      this.tree[treeIndex] = e;
      return;
    }

    let mid = Math.floor(l + (r - l) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);
    if (index >= mid + 1) {
      this._set(rightTreeIndex, mid + 1, r, index, e);
    } else {
      this._set(leftTreeIndex, l, mid, index, e);
    }

    this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  public toString(): string {
    let result = '';
    result += '[';
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i] !== null) {
        result += this.tree[i];
      } else {
        result += 'null';
      }

      if (i !== this.tree.length - 1)
        result += ', ';
    }
    result += ']';
    return result;
  }
}
