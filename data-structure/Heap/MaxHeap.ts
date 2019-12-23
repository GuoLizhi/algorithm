import MyArray from '../Array/Array';

export default class MaxHeap<E> {
  public data: MyArray<E>;

  constructor (capacity: number = 10) {
    this.data = new MyArray<E>(capacity);
  }

  /**
   * 获取堆中节点的个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  size(): number {
    return this.data.getSize();
  }

  /**
   * 判断堆是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.data.isEmpty();
  }

  /**
   * 返回完全二叉树的数组表示中，一个索引所表示的元素的父亲节点的索引
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  parent(index: number): number {
    if (index === 0) {
      throw new Error(`index-0 doesn't have parent.`);
    }
    return Math.floor((index - 1) / 2);
  }

  /**
   * 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  leftChild(index: number): number {
    return index * 2 + 1;
  }

  /**
   * 返回完全二叉树的数组表示中，一个索引所表示的元素的父右孩子节点的索引
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  rightChild(index: number): number {
    return index * 2 + 2;
  }

  /**
   * 向对中添加元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 需要添加的元素e
   * @return {void}
   */
  add(e: E) {
    this.data.addLast(e);
    this.siftUp(this.data.getSize() - 1);
  }

  /**
   * 将元素上浮，不断的将元素与其父节点的元素比较，如果发现该元素比其父元素大，那就需要交换该元素与其父元素的位置
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {number} k 需要上浮元素位置的索引
   * @return {void}
   */
  private siftUp(k: number): void {
    while (k > 0 && this.data.get(this.parent(k)) < this.data.get(k)) {
      this.data.swap(k, this.parent(k));
      k = this.parent(k);
    }
  }

  /**
   * 查看堆中的最大元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {E}
   */
  findMax(): E {
    if (this.data.getSize() === 0) {
      throw new Error(`Can not findMax when heap is empty.`);
    }
    return this.data.get(0);
  }

  /**
   * 取出堆中的最大元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {E}
   */
  extractMax(): E {
    let ret = this.findMax();
    this.data.swap(0, this.data.getSize() - 1);
    this.data.removeLast();
    this.siftDown(0);
    return ret;
  }

  /**
   * 将元素下沉，不断将元素与其右孩子节点上的元素比较(如果没有直接比较左孩子)
   * 如果发现该元素比右孩子小，则将该元素与其右孩子相交换
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {number} k 需要下沉的元素位置的索引
   * @return {void}
   */
  private siftDown(k: number): void {
    while(this.leftChild(k) < this.data.getSize()) {
      let j = this.leftChild(k);
      if (j + 1 < this.data.getSize() && this.data.get(j + 1) > this.data.get(j)) {
        j++;
      }
      if (this.data.get(k) >= this.data.get(j)) {
        break;
      }
      this.data.swap(k, j);
      k = j;
    }
  }

  /**
   * 取出堆中的最大元素，并且替换成元素e
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 替换的元素e
   * @return {E}
   */
  replace(e: E): E {
    let ret = this.findMax();
    this.data.set(0, e);
    this.siftDown(0);
    return ret;
  }
}
