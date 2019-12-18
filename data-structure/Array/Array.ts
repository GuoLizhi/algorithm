export default class MyArray<E> {

  public data: E[];
  public size: number = 0;

  // 构造函数，传入数组的容量capacity
  constructor(capacity = 10) {
    this.data = new Array(capacity);
  }

  // 获取数组容量
  getCapacity(): number {
    return this.data.length;
  }

  // 获取数组中元素的个数
  getSize(): number {
    return this.size;
  }

  // 判断数组是否为空
  isEmpty(): boolean {
    return this.size === 0;
  }

  // 在数组中index位置添加一个元素
  add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Required index >= 0 and index <= size');
    }

    // 将数组的容量扩大为之前的二倍
    if (this.size === this.getCapacity()) {
      this.resize(this.getCapacity() * 2);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = e;
    this.size++;
  }

  // 向所有元素之后添加一个元素
  addLast(e: E): void {
    this.add(this.size, e);
  }

  // 向所有元素之前添加一个元素
  addFirst(e: E): void {
    this.add(0, e);
  }

  // 修改index索引位置元素为e
  set(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  // 查找数组中是否含有元素e
  contains(e: E): boolean {
    for (let i = 0; i < this.size; i++) {
      if (e === this.data[i]) {
        return true;
      }
    }
    return false;
  }

  // 查找数组中元素e所在的索引，如果不存在，则返回-1
  find(e: E): number {
    for (let i = 0; i < this.size; i++) {
      if (e === this.data[i]) {
        return i;
      }
    }
    return -1;
  }

  // 从数组中删除index位置的元素，并且返回删除元素
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

    if (this.size === Math.floor(this.data.length / 4) && Math.floor(this.data.length / 2) !== 0) {
      this.resize(Math.floor(this.data.length / 2));
    }

    return ret;
  }

  // 删除数组中的最后一个元素
  removeLast(): E {
    return this.remove(this.size - 1);
  }

  // 删除数组中的第一个元素
  removeFirst(): E {
    return this.remove(0);
  }

  // 获取index索引的元素
  get(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal...')
    }
    return this.data[index];
  }

  // 获取数组中的第一个元素
  getFirst() {
    return this.get(0);
  }

  // 获取数组中的最后一个元素
  getLast() {
    return this.get(this.size - 1);
  }

  // 数组扩容，或者缩容操作
  resize(newCapacity: number): void {
    let newData: E[] = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }
}

