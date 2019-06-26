interface Queue<E> {
    getSize(): number;
    isEmpty(): boolean;
    enqueue(e: E): void;
    dequeue(): E;
    getFront(): E;
}
class LoopQueue<E> implements Queue<E> {
    private data: Array<E>;
    private front: number = 0;
    private tail: number = 0;
    private size: number = 0;

    constructor(capacity) {
        this.data = new Array<E>(capacity + 1);
    }

    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.data.length - 1;
    }

    isEmpty(): boolean {
        return this.front === this.tail;
    }

    enqueue(e: E) {
        // 如果循环队列已满，那此时需要扩容
        if ((this.tail + 1) % this.data.length === this.front) {
            this.resize(this.getCapacity() * 2);
        }
        this.data[this.tail] = e;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }

    dequeue(): E {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.');
        }

        let ret: E = this.data[this.front];
        this.data[this.front] = undefined;
        this.front = (this.front + 1) % this.data.length;
        this.size--;

        if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
            this.resize(this.getCapacity() / 2);
        }

        return ret;
    }

    getFront(): E {
        if (this.isEmpty()) {
            throw new Error('Queue is empty.');
        }
        return this.data[this.front];
    }

    resize(newCapacity: number) {
        let newData: Array<E> = new Array<E>(newCapacity + 1);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + this.front) % this.data.length];
        }

        this.data = newData;
        this.front = 0;
        this.tail = this.size;
    }

    toString(): void {
        let res = '';
        res += `LoopQueue: size = ${this.size}, capacity = ${this.getCapacity()}\n`;
        res += 'front [';
        for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
            res += this.data[i];
            if ((i + 1) % this.data.length !== this.tail) {
                res += ', ';
            }
        }
        res += '] tail';

        console.log(res);
    }
}

export default LoopQueue;
// let lq = new LoopQueue<number>(10);
// lq.enqueue(1);
// lq.enqueue(2);
// lq.enqueue(3);
// lq.enqueue(4);
// lq.toString();
// lq.dequeue();
// lq.dequeue();
// lq.toString();
// console.log(lq.getFront());