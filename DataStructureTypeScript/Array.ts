export default class MyArray<E> {

  public data: E[];
  public size: number = 0;

  /**
   * 构造函数，传入数组的容量capacity
   * @param {number} capacity 数组容量，默认10
   */
  constructor(capacity = 10) {
    this.data = new Array(capacity);
  }

  /**
   * 获取数组容量（数组能总共能包含多少元素）
   * Time Complexity O(1)
   * @return {number}
   */
  getCapacity(): number {
    return this.data.length;
  }

  /**
   * 获取数组中当前存储元素的个数
   * Time Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 判断数组是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 在数组中index位置添加一个元素
   * 考虑到这里不是每次操作都会触发扩容，这里均摊到每次操作上的时间复杂度为O(1)
   * @param {number} index 要插入的位置
   * @param {E} e 要插入的元素
   * @return {void}
   */
  add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Required index >= 0 and index <= size');
    }

    // 将数组的容量扩大为之前的二倍
    if (this.size === this.data.length) {
      this.resize(this.data.length * 2);
    }
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
  }

  /**
   * 向所有元素之后添加一个元素
   * Time Complexity O(1)
   * @param {E} e 要插入的元素
   * @return {void}
   */
  addLast(e: E): void {
    this.add(this.size, e);
  }

  /**
   * 向所有元素之前添加一个元素
   * Time Complexity O(n)
   * @param {E} e 要插入的元素
   * @return {void}
   */
  addFirst(e: E): void {
    this.add(0, e);
  }

  /**
   * 修改index索引位置元素为e
   * Time Complexity O(1)
   * @param {number} index 要插入元素的位置
   * @param {E} e 要插入的元素
   * @return {void}
   */
  set(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  /**
   * 查找数组中是否含有元素e
   * Time Complexity O(n)
   * @param {E} e 要查找的元素
   * @return {boolean}
   */
  contains(e: E): boolean {
    for (let i = 0; i < this.size; i++) {
      if (e === this.data[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * 查找数组中元素e所在的索引，如果不存在，则返回-1
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {E} e 要查找的元素
   * @return {boolean}
   */
  find(e: E): number {
    for (let i = 0; i < this.size; i++) {
      if (e === this.data[i]) {
        return i;
      }
    }
    return -1;
  }

  /**
   * 从数组中删除index位置的元素，并且返回删除元素
   * Time Complexity O(n)
   * @param {number} index 要删除的元素位置的索引
   * @return {E}
   */
  remove(index: number): E {
    if (index < 0 || index > this.size) {
      throw new Error('Remove failed. index is illegal')
    }

    let ret: E = this.data[index];
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.size--;
    this.data[this.size] = null;
    // 当size == capacity / 4时，才将capacity减半。防止复杂度震荡
    // data.length != 0 是因为不能常见capacity为0的数组
    if (this.size === Math.floor(this.data.length / 4) && Math.floor(this.data.length / 2) !== 0) {
      this.resize(Math.floor(this.data.length / 2));
    }
    return ret;
  }

  /**
   * 删除数组中的最后一个元素
   * Time Complexity O(1)
   * @return {E}
   */
  removeLast(): E {
    return this.remove(this.size - 1);
  }

  /**
   * 删除数组中的第一个元素
   * Time Complexity O(n)
   * @return {E}
   */
  removeFirst(): E {
    return this.remove(0);
  }

  /**
   * 获取index索引的元素
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @param {number} index 要获取元素的索引
   * @return {E}
   */
  get(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal...')
    }
    return this.data[index];
  }

  /**
   * 获取数组中的第一个元素
   * Time Complexity O(1)
   * @return {E}
   */
  getFirst() {
    return this.get(0);
  }

  /**
   * 获取数组中的最后一个元素
   * Time Complexity O(1)
   * @return {E}
   */
  getLast() {
    return this.get(this.size - 1);
  }

  /**
   * 数组扩容，或者缩容操作
   * Time Complexity O(n)
   * @param {number} newCapacity 新的数组的容量
   * @return {void}
   */
  resize(newCapacity: number): void {
    let newData: E[] = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }

  /**
   * 交换数组中的i, j两个元素
   * Time Complexity O(1)
   * @param {number} i 第i位置的元素
   * @param {number} j 第j位置的元素
   * @return {void}
   */
  swap(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= this.size || j >= this.size) {
      throw new Error('Index is illegal.');
    }
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  toString(): string {
    let res = '';
    res += `Array: size = ${this.size}, capacity = ${this.getCapacity()}\n`;
    res += '[';
    for (let i = 0; i < this.size; i++) {
      res += this.data[i];
      if (i !== this.size - 1)
        res += ', '
    }
    res += ']';
    return res;
  }

  static main() {
    const arr = new MyArray<number>(5);
    for (let i = 0; i < 10; i++) {
      arr.addFirst(i)
      console.log(arr.toString())
    }
  }
}

MyArray.main();



