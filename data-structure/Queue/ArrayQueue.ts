import MyArray from '../Array/Array';

interface Queue<E> {
  getSize(): number;
  isEmpty(): boolean;
  enqueue(e: E): void;
  dequeue(e: E): E;
  getFront(): E;
}

export default class ArrayQueue<E> implements Queue<E> {
  private array: MyArray<E>;

  constructor(capacity: number = 10) {
    this.array = new MyArray<E>(capacity);
  }

  getSize(): number {
    return this.array.getSize();
  }

  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  enqueue(e: E): void {
    this.array.addLast(e);
  }

  dequeue(): E {
    return this.array.removeFirst();
  }

  getFront(): E {
    return this.array.getFirst();
  }

  toString(): string {
    let res = '';
    res += 'Queue: ';
    res += 'front [';
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] tail';

    return res;
  }
}

// let q = new ArrayQueue<number>(10);
// for(let i = 0; i < 10; i++) {
//   q.enqueue(i);
//   console.log(q.toString());

//   if (i % 3 === 0) {
//     q.dequeue();
//     console.log(q.toString());
//   }
// }