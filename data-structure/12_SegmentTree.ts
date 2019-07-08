/**
 * 线段树
 */
// 用户自定义的融合器，方便用户传入，可以进行一系列的比如求和，求积的操作
interface Merge<E> {
    merge(a: E, b: E): E;
}

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

    // 在treeIndex的位置创建表示区间[l...r]的线段树
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

    public getSize(): number {
        return this.data.length;
    }

    public get(index: number): E {
        if (index < 0 || index >= this.data.length) {
            throw new Error('Index is illegal..');
        }
        return this.data[index];
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    private rightChild(index: number): number {
        return 2 * index + 2;
    }

    // 返回区间[queryL, queryR]的值
    public query(queryL: number, queryR: number): E {
        if (queryL < 0 || queryR >= this.data.length || queryR < 0 || queryL >= this.data.length || queryL > queryR) {
            throw new Error('Index is illegal.');
        }
        return this.queryResult(0, 0, this.data.length - 1, queryL, queryR);
    }

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

    // 将index位置的值，更新为e
    public set(index: number, e: E): void {
        
        if (index < 0 || index >= this.data.length) {
            throw new Error('Index is illegal...');
        }
        this.data[index] = e;
        this.setIndex(0, 0, this.data.length, index, e);
    }

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

    public toString(): string {
        let str = '[';
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i] !== null) {
                str += this.tree[i];
            } else {
                str += 'NULL';
            }

            if (i !== this.tree.length - 1) {
                str += ', ';
            }
        }
        return str;
    }
}

export default SegmentTree;