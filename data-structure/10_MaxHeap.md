二叉堆`Binary Heap`是一种特殊的堆，二叉堆是完全二叉树或者近似完全二叉树。二叉堆满足堆的特性：
- 每个节点的左右子树都是一个二叉堆
- 当父节点的键值总是大于或等于任何一个子节点的键值时为`最大堆`
- 当父节点的键值总是小于或等于任何一个子节点的键值时为`最小堆`

二叉堆一般用数组表示。那个二叉堆中总是存在以下规律，如果根节点的位置是0，那么第n个位置的子节点分别为`2n+1`和`2n+2`。第n个位置的父节点为`(n-1)/2`

```ts
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
```

二叉堆中两个重要的操作`上浮siftUp`和`下沉siftDown`

#### 元素上浮
元素上浮的主要思想就是，将当前元素不断的与自己的父节点相比较，如果当前元素比父元素大，那么就将二者交换位置，这样不断的循环直到当前节点的值小于其父节点的值
```ts
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
```

#### 元素下沉
元素下沉的主要思想就是，将当前元素不断的与自己的孩子节点中较大的值相比较，如果当前元素较小，那么就将当前元素与孩子节点中较大元素交换，这样不断的循环，直到当前节点比孩子节点的值都要大
```ts
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
```

#### 取出二叉堆中的最大值
根据二叉堆的特性，二叉堆的最大元素就是数组中的第一个元素，然后将数组的最后一个元素交换到第一个元素，执行下沉操作
```ts
// 取出堆中最大的元素
public extractMax(): E {
    let ret: E = this.findMax();

    // 先把顶部元素和二叉堆中的最后一个元素交换
    this.data.swap(0, this.data.getSize() - 1);
    this.data.removeLast();
    this.siftDown(0);

    return ret;
}
```

#### 向二叉堆中添加元素
向二叉堆中添加元素，主要方法是先将元素添加到二叉堆的尾部，也就是数组的末尾，然后在对这个元素执行上浮操作

```ts
public add(e: E): void {
    this.data.addLast(e);
    this.siftUp(this.data.getSize() - 1);
}
```

#### 将任意数组构造成二叉堆的形状
主要方式先将元素遍历赋值到一个数组中，然后从最后一个元素开始，不断的进行下沉的操作

```ts
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
```