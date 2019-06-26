import MyArray from './00_MyArray';

interface Queue<E> {
    getSize(): number;
    isEmpty(): boolean;
    enqueue(e: E): void;
    dequeue(): E;
    getFront(): E;
}

class ArrayQueue<E> implements Queue<E> {
    private array: MyArray<E>;

    constructor(capacity) {
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

    toString(): void {
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
        console.log(res);
    }
}

export default ArrayQueue;

// let queue = new ArrayQueue<number>(10);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(9);
// queue.enqueue(10);
// queue.toString();
// queue.enqueue(11);
// queue.toString();
// queue.dequeue();
// queue.toString();
// queue.dequeue();
// queue.toString();
// queue.dequeue();
// queue.toString();
// console.log(queue.getFront())