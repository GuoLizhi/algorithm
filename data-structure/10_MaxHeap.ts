/**
 * 使用数组实现的二叉堆
 */
import MyArray from './00_Array';

class MaxHeap<E> {
    private data: MyArray<E>;

    constructor(capacity: number) {
        this.data = new MyArray<E>(capacity);
    }

    // 返回堆中元素的个数
    public size(): number {
        return this.data.getSize();
    }

    // 返回堆是否为空
    public isEmpty(): boolean {
        return this.data.isEmpty();
    }

    // 返回完全二叉树某个元素父亲节点所在的索引
    // index 是该元素所在的索引
    private parent(index: number): number {
        if (index === 0) {
            throw new Error('index-0 doesnot have parent');
        }
        return (index - 1) / 2;
    }

    // 返回完全二叉树某个节点的左孩子节点
    private leftChild(index: number) {
        return index * 2 + 1;
    }

    // 返回完全二叉树某个节点的右孩子节点
    private rightChild(index: number) {
        return index * 2 + 2;
    }

    // 向堆中添加元素
    // 方法是先将该元素添加到堆所在的数组中最后一个元素
    // 然后再将这个元素上浮，满足任意父亲节点的值要大于两个子节点的值
    public add(e: E): void {
        this.data.addLast(e);
        this.siftUp(this.data.getSize() - 1);
    }

    // 将堆中的元素上浮
    private siftUp(index: number): void {
        
        while (index > 0) {
            let parentVal: E = this.data.get(this.parent(index));
            let curVal: E = this.data.get(index);
            // 如果当前的节点的值大于其父亲节点的值，则需将它们交换
            if (parentVal < curVal) {
                this.data.swap(index, this.parent(index));
            }

            index = this.parent(index);
        }
    }

    // 查看堆中最大元素
    public findMax(): E {
        if (this.data.getSize() === 0) {
            throw new Error('heap is empty...');
        }
        return this.data.get(0);
    }

    // 取出堆中最大的元素
    public extractMax(): E {
        let ret: E = this.findMax();

        // 先把顶部元素和二叉堆中的最后一个元素交换
        this.data.swap(0, this.data.getSize() - 1);
        this.data.removeLast();
        this.siftDown(0);

        return ret;
    }

    // 将元素下沉
    private siftDown(index: number): void {

        while(this.leftChild(index) < this.data.getSize()) {
            let leftChildIndex: number = this.leftChild(index);
            let leftChildVal: E = this.data.get(leftChildIndex);

            let rightChildIndex: number = leftChildIndex + 1;
            let rightChildVal: E = this.data.get(rightChildIndex);

            // 如果该节点还有右孩子，并且右孩子的值大于左孩子的值
            if (rightChildIndex < this.data.getSize() &&
                rightChildVal > leftChildVal) {
                    leftChildIndex++;
                }
            
            // data[index]是leftChild和rightChild中的最大值
            if (this.data.get(index) >= this.data.get(leftChildIndex)) {
                break;
            }

            this.data.swap(index, leftChildIndex);
            index = leftChildIndex;
        }
    }

    // 取出最大元素后，放入一个新元素
    // 可以直接将堆顶元素替换后siftDown，一次O(logN)的操作
    public replace(e: E): E {
        let ret: E = this.findMax();
        this.data.set(0, e);
        this.siftDown(0);

        return ret;
    }

    // 将任意数组整理成堆的形状
    public generateHeap(arr: MyArray<E>): MyArray<E> {
        let data: MyArray<E> = new MyArray<E>(arr.getSize());
        for (let i = 0; i < arr.getSize(); i++) {
            data.set(i, arr[i]);
        }

        for (let i = this.parent(arr.getSize() - 1); i >= 0; i--) {
            this.siftDown(i);
        }

        return data;
    }
}

export default MaxHeap;