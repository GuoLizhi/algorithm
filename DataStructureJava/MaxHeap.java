import java.util.Random;

/**
 * maxHeap 最大堆
 * 节点i的父亲节点的索引: parent(i) = (i - 1) / 2
 * 节点i的左孩子节点的索引: leftChild(i) = 2 * i + 1
 * 节点i的右孩子节点的索引: rightChild(i) = 2 * i + 2
 */
public class MaxHeap<E extends Comparable<E>> {
    private Array<E> data;

    public MaxHeap(int capacity) {
        data = new Array<>(capacity);
    }

    public MaxHeap() {
        data = new Array<>();
    }

    public MaxHeap(E[] arr) {
        data = new Array<>(arr);
        if (arr.length != 1)
            // 从最后一个节点的父亲节点开始，往前遍历。每次都对元素执行siftDown操作
            for (int i = parent(arr.length - 1); i >= 0; i--)
                siftDown(i);
    }

    // 返回堆中的元素个数
    public int getSize() {
        return data.getSize();
    }

    // 判断堆是否为空
    public boolean isEmpty() {
        return data.isEmpty();
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的父亲节点的索引
    private int parent(int index) {
        if (index == 0)
            throw new IllegalArgumentException("index-0 doesn't have parent");
        return (index - 1) / 2;
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    private int leftChild(int index) {
        return 2 * index + 1;
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    private int rightChild(int index) {
        return 2 * index + 2;
    }

    // 二叉堆中元素上浮
    private void siftUp(int index) {
        // index所在的元素如果小于了其父亲元素，此时说明已经找到了合适的位置
        while (index > 0 && data.get(parent(index)).compareTo(data.get(index)) < 0) {
            data.swap(index, parent(index));
            index = parent(index);
        }
    }

    // 二叉堆中元素下层
    private void siftDown(int k) {
        while (leftChild(k) < data.getSize()) {
            int j = leftChild(k); // 在此循环中，data[k]和data[j]交换位置
            if (j + 1 < data.getSize() && data.get(j).compareTo(data.get(j + 1)) < 0) {
                // 如果k节点的左孩子小于k节点的右孩子，则交换k和右孩子
                j = j + 1;
            }
            if (data.get(k).compareTo(data.get(j)) >= 0)
                break;
            data.swap(k, j);
            k = j;
        }
    }

    // 时间复杂度O(logN)
    // 向堆中添加元素
    public void add(E e) {
        data.addLast(e);
        siftUp(data.getSize() - 1);
    }

    // 时间复杂度O(1)
    // 看堆中的最大元素
    public E findMax() {
        if (data.getSize() == 0)
            throw new IllegalArgumentException("can not findMax when heap is empty");
        return data.get(0);
    }

    // 时间复杂度O(logN)
    // 向堆中取出元素
    public E extractMax() {
        E ret = findMax();
        data.swap(0, data.getSize() - 1);
        data.removeLast();
        siftDown(0);

        return ret;
    }

    // 时间复杂度O(logN)
    // 取出堆中的最大元素，并且替换成元素e
    public E replace(E e) {
        E ret = findMax();
        data.set(0, e);
        siftDown(0);
        return ret;
    }


    public static void main(String[] args) {
        int n = 10000;

        MaxHeap<Integer> heap = new MaxHeap<>(n);
        Random random = new Random();
        for (int i = 0; i < n; i++)
            heap.add(random.nextInt(Integer.MAX_VALUE));
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = heap.extractMax();

        for (int i = 1; i < n; i++)
            if (arr[i - 1] < arr[i])
                throw new IllegalArgumentException("Error");

        System.out.println("Test MaxHeap complete.");
    }
}
