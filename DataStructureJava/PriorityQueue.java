public class PriorityQueue<E extends Comparable<E>> implements Queue<E> {
    private MaxHeap<E> maxHeap;

    public PriorityQueue() {
        maxHeap = new MaxHeap<>();
    }

    @Override
    public int getSize() {
        return maxHeap.getSize();
    }

    @Override
    public boolean isEmpty() {
        return maxHeap.isEmpty();
    }

    @Override
    public E getFront() {
        return maxHeap.findMax();
    }

    // 时间复杂度O(logN)
    @Override
    public void enqueue(E e) {
        maxHeap.add(e);
    }

    // 时间复杂度O(logN)
    @Override
    public E dequeue() {
        return maxHeap.extractMax();
    }
}
