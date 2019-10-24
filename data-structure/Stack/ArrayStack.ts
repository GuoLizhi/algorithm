import MyArray from '../Array/Array';

interface Stack<E> {
  getSize(): number;
  isEmpty(): boolean;
  push(e: E): void;
  pop(): E;
  peek(): E;
}

export default class ArrayStack<E> implements Stack<E> {
  private array: MyArray<E>;

  constructor(capacity: number = 10) {
    this.array = new MyArray<E>(capacity);
  }

  getCapacity(): number {
    return this.array.getCapacity();
  }

  getSize(): number {
    return this.array.getSize();
  }

  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  push(e: E): void {
    this.array.addLast(e);
  }

  pop(): E {
    return this.array.removeLast();
  }

  peek(): E {
    return this.array.getLast();
  }

  toString(): string {
    let res = '';
    res += 'Stack: ';
    res += '[';
    for (let i = 0; i < this.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] top';

    return res;
  }
}

// let s = new ArrayStack<number>();
// for (let i = 0; i < 5; i++) {
//   s.push(i);
//   console.log(s.toString());
// }
// s.pop();
// console.log(s.toString());
