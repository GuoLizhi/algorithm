interface Queue<E> {
  getSize(): number;
  isEmpty(): boolean;
  enqueue(e: E): void;
  dequeue(e: E): E;
  getFront(): E;
}

export default class LoopQueue<E> implements Queue<E> {
  private data: E[];
  private front: number = 0;
  private tail: number = 0;
  private size: number = 0;

  constructor(capacity: number = 10) {
    this.data = new Array<E>(capacity + 1);
  }

  getCapacity(): number {
    return this.data.length - 1;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.front === this.tail;
  }

  getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Queue is empty...');
    }
    return this.data[this.front];
  }

  enqueue(e: E): void {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2);
    }

    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
  }

  dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
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

  resize(newCapacity: number): void {
    let newData = new Array<E>(newCapacity + 1);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }

  toString(): string {
    let res = '';
    res += `Queue: size = ${this.getSize()}, capacity = ${this.getCapacity()}\n`;
    res += 'front [';
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i];
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', ';
      }
    }
    res += '] tail';

    return res;
  }
}

// let q = new LoopQueue<number>(10);
// for(let i = 0; i < 10; i++) {
//   q.enqueue(i);
//   console.log(q.toString());

//   if (i % 3 === 0) {
//     q.dequeue();
//     console.log(q.toString());
//   }
// }