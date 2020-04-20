import Queue from './interface/Queue'
import MaxHeap from './MaxHeap'

export default class PriorityQueue<E> implements Queue<E> {
  private maxHeap: MaxHeap<E> = new MaxHeap<E>()

  public getSize(): number {
    return this.maxHeap.size()
  }

  public isEmpty(): boolean {
    return this.maxHeap.isEmpty()
  }

  public getFront(): E {
    return this.maxHeap.findMax()
  }

  // 时间复杂度O(logN)
  public enqueue(e: E): void {
    this.maxHeap.add(e);
  }

  // 时间复杂度O(logN)
  public dequeue(): E {
    return this.maxHeap.extractMax();
  }
}