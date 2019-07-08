/**
 * 基于二叉堆的优先队列
 */
import MaxHeap from './10_MaxHeap';
interface Queue<E> {

    getSize(): number;
    isEmpty(): boolean;
    enqueue(e: E): void;
    dequeue(): E;
    getFront(): E;
}

class PriorityQueue<E> implements Queue<E> {
    private maxHeap: MaxHeap<E> = new MaxHeap<E>(10);

    public getSize(): number {
        return this.maxHeap.size();
    }

    public isEmpty(): boolean {
        return this.maxHeap.isEmpty();
    }

    public getFront(): E {
        return this.maxHeap.findMax();
    }

    public enqueue(e: E): void {
        this.maxHeap.add(e);
    }

    public dequeue(): E {
        return this.maxHeap.extractMax();
    }
}

export default PriorityQueue;