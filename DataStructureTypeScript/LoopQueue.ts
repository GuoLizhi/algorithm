import Queue from './interface/Queue';

/**
 * 循环队列，队列的优化
 * 设置头尾指针，可以实现出队和入队都是O(1)的时间复杂度
 * @author lizhi.guo@foxmail.com
 */
export default class LoopQueue<E> implements Queue<E> {
  public data: E[];
  private front: number = 0;
  private tail: number = 0;
  private size: number = 0;

  /**
   * 构造函数，传入队列的容量capacity
   * @param {number} capacity 数组容量，默认10
   */
  constructor(capacity: number = 10) {
    this.data = new Array<E>(capacity + 1);
  }

  /**
   * 获取循环队列的容量，由于在初始化capacity是有过加1，因此这里需要减1
   * Time Complexity O(1)
   * @return {number}
   */
  getCapacity(): number {
    return this.data.length - 1;
  }

  /**
   * 获取循环队列中当前存储元素的个数
   * Time Complexity O(1)
   * @return {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 判断循环队列是否为空，即元素的个数是否为0
   * Time Complexity O(1)
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.front === this.tail;
  }

  /**
   * 查看循环队列队首的元素
   * Time Complexity O(1)
   * @return {E}
   */
  getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.data[this.front];
  }

  /**
   * 向循环队列中添加一个元素
   * Time Complexity O(1)
   * @return {void}
   */
  enqueue(e: E): void {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2);
    }

    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
  }

  /**
   * 在循环队列中出队一个元素，并返回出队的元素
   * Time Complexity O(1)
   * @return {E}
   */
  dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }

    let ret = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size === Math.floor(this.getCapacity() / 4) && Math.floor(this.getCapacity() / 2) !== 0) {
      this.resize(Math.floor(this.getCapacity() / 2));
    }

    return ret;
  }

  /**
   * 数组扩容，或者缩容操作
   * Time Complexity O(n)
   * @param {number} newCapacity 新的数组的容量
   * @return {void}
   */
  private resize(newCapacity: number): void {
    let newData = new Array<E>(newCapacity + 1);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }

  // 辅助方法用于打印队列
  toString(): string {
    let res = `Queue: size = ${this.size}, capacity = ${this.getCapacity()}\n`;
    res += 'front: [';
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i];
      if ((i + 1) % this.data.length !== this.tail)
        res += ', ';
    }
    res += '] tail';
    return res;
  }
}
