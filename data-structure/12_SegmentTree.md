线段树是一种用来存储区间信息的数据结构，也类似于一种二叉树，只是其每个节点存储的都是一个区间。从线段树的根节点开始，从上往下存储的区间逐渐变小。线段树的经典应用场景是可以用来处理数组对应的区间查询或者更新元素，或者对区间内的所有元素进行求和，最小值，最大值的查询等操作。      
线段树的底层依然采取数组来实现。同时线段树是一种满的二叉树，这也就意味着，某些二叉树的节点是`null`。如果线段树中的元素总个数为N，那么在底层的数组中我们需要创建`4N`的空间。       

![](https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g5prb1hjerj30w80f6n27.jpg)

#### 1.线段树的初始化
整个线段树会初始化一个存储线段树的`tree`，接受一个用户传入的数组以及一个用户自定义的操作`merger`

```ts
class SegmentTree<E> {
    private tree: Array<E>;
    private data: Array<E>;
    private merger: Merge<E>;
    constructor(arr: Array<E>, merger: Merge<E>) {
        this.merger = merger;
        this.data = new Array<E>(arr.length);
        for (let i = 0; i < arr.length; i++) {
            this.data[i] = arr[i];
        }
        // 需要用4倍的数组空间来存储整个线段树
        this.tree = new Array<E>(4 * arr.length);
        this.buildSegmentTree(0, 0, arr.length - 1);
    }
}
```

#### 1.创建线段树
这里我们先来看一种通用的场景，在`treeIndex`的位置表示区间`[l,r]`上创建一个线段树。这里依然会采用递归的方式来创建。提到递归，我们先来看其临界条件，即`l === r`的情况，此时我们直接将treeIndex位置赋值为传入的`data[l]`即可。创建线段树的一个关键操作就是区间拆分，我们可以使用二分查找算法中的区间切分方式，取区间的中间值，然后即可缩小区间的范围

```ts
private buildSegmentTree(treeIndex: number, l: number, r: number): void {
    if (l === r) {
        this.tree[treeIndex] = this.data[l];
        return;
    }

    let leftTreeIndex: number = this.leftChild(treeIndex);
    let rightTreeIndex: number = this.rightChild(treeIndex);

    let mid: number = Math.floor(l + (r - l) / 2);
    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
}
```

#### 2.线段树的搜索
在线段树中对某一区间搜索依然采用递归的思路，递归到底的情况就是当两个区间的左右边界都重合时即可获取整个区间的值。然后有两个比较特殊的情况，如果queryL已经越过了mid+1，或者queryR还没越过mid
```ts
// 在以treeIndex为根的线段树中[l...r]的范围里，搜索区间[queryL...queryR]的值
private queryResult(treeIndex: number, l: number, r: number, queryL: number, queryR: number): E {
    if (l === queryL && r === queryR) {
        return this.tree[treeIndex];
    }

    let mid: number = Math.floor(l + (r - l) / 2);
    // treeIndex的节点分为[l...mid]和[mid+1...r]两部分
    let leftTreeIndex: number = this.leftChild(treeIndex);
    let rightTreeIndex: number = this.rightChild(treeIndex);

    if (queryL >= mid + 1) {
        return this.queryResult(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR < mid) {
        return this.queryResult(leftTreeIndex, l, mid, queryL, queryR);
    }

    let leftResult: E = this.queryResult(leftTreeIndex, l, mid, queryL, mid);
    let rightResult: E = this.queryResult(rightTreeIndex, mid + 1, r, mid + 1, queryR);
    return this.merger.merge(leftResult, rightResult);
}
```

#### 3.线段树更新元素
在线段树中更新元素的方法依旧是递归查找到线段树中对应的元素，方法和上面基本相同

```ts
// 在以treeIndex为根的线段树中更新index的值为e
private setIndex(treeIndex: number, l: number, r: number, index: number, e: E): void {

    if (l === r) {
        this.tree[treeIndex] = e;
        return;
    }

    let mid: number = Math.floor(l + (r - l) / 2);
    let leftTreeIndex: number = this.leftChild(treeIndex);
    let rightTreeIndex: number = this.rightChild(treeIndex);

    if (index >= mid + 1) {
        this.setIndex(rightTreeIndex, mid + 1, r, index, e);
    } else {
        this.setIndex(leftTreeIndex, l, mid, index, e);
    }

    this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
}
```