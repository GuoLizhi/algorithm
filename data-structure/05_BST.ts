
import Stack from './01_Stack';
import Queue from './02_Queue';
class BSTNode<E> {
    public e: E;
    public left: BSTNode<E> = null;
    public right: BSTNode<E> = null;

    constructor(e: E) {
        this.e = e;
    }
}

class BST<E> {
    private root: BSTNode<E> = null;
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 向二分搜索树中添加元素
    public add(e: E): void {
        // if (this.root === null) {
        //     this.root = new BSTNode(e);
        //     this.size++;
        // } else {
        //     this.addToNode(this.root, e); 
        // }

        this.root = this.addToNode(this.root, e);
    }

    // 向以node为根的二分搜索树中插入元素E，递归算法、
    private addToNode(node: BSTNode<E>, e: E): BSTNode<E> {
        // if (e === node.e) {
        //     return;
        // } else if (e < node.e && node.left === null) {
        //     node.left = new BSTNode(e);
        //     this.size++;
        //     return;
        // } else if (e > node.e && node.right === null) {
        //     node.right = new BSTNode(e);
        //     this.size++;
        //     return;
        // }

        // if (e < node.e) {
        //     this.addToNode(node.left, e);
        // } else {
        //     this.addToNode(node.right, e);
        // }

        if (node === null) {
            this.size++;
            return new BSTNode(e);
        }

        if (e < node.e) {
            node.left = this.addToNode(node.left, e);
        } else if (e > node.e) {
            node.right = this.addToNode(node.right, e);
        }

        return node;
    }

    // 看二分搜索树中是否包含元素e
    public contains(e: E): boolean {
        return this.containsNode(this.root, e);
    }

    // 看以node为根的二分搜索树中是否包含元素e
    private containsNode(node: BSTNode<E>, e: E): boolean {

        if (node === null) {
            return false;
        }

        if (e === node.e) {
            return true;
        } else if (e < node.e) {
            return this.containsNode(node.left, e);
        } else {
            return this.containsNode(node.right, e);
        }
    }

    // 二叉树前序遍历
    public preOrder(): void {
        this.preOrderNode(this.root);
    }

    // 前序遍历以node为根的二分搜索树，递归算法
    private preOrderNode(node: BSTNode<E>): void {
        if (node === null) return;

        console.log(node.e);
        this.preOrderNode(node.left);
        this.preOrderNode(node.right);
    }

    // 二叉树中序遍历
    public inOrder(): void {
        this.inOrderNode(this.root);
    }

    // 中序遍历以node为根，递归算法
    private inOrderNode(node: BSTNode<E>): void {

        if (node === null) return;

        this.inOrderNode(node.left);
        console.log(node.e);
        this.inOrderNode(node.right);
    }

    // 二叉搜索树后续遍历
    public postOrder(): void {
        this.postOrderNode(this.root);
    }

    // 后续遍历以node为根，递归算法
    private postOrderNode(node: BSTNode<E>): void {

        if (node === null) return;

        this.postOrderNode(node.left);
        this.postOrderNode(node.right);
        console.log(node.e);
    }

    // 二分搜索树的非递归前序遍历
    public preOrderNR(): void {
        let stack: Stack<BSTNode<E>> = new Stack<BSTNode<E>>(10);
        stack.push(this.root);

        while (!stack.isEmpty()) {
            let cur: BSTNode<E> = stack.pop();
            console.log(cur.e);

            if (cur.right !== null) {
                stack.push(cur.right);
            }
            if (cur.left !== null) {
                stack.push(cur.left);
            }
        }
    }

    // 二分搜索树的层序遍历(广度优先遍历)
    public levelOrder(): void {
        let q: Queue<BSTNode<E>> = new Queue<BSTNode<E>>(10);
        q.enqueue(this.root);

        while (!q.isEmpty()) {
            let cur: BSTNode<E> = q.dequeue();
            console.log(cur.e);

            if (cur.left !== null) {
                q.enqueue(cur.left);
            }
            if (cur.right !== null) {
                q.enqueue(cur.right);
            }
        }
    }

    // 寻找二分搜索树的最大元素
    public maximum(): E {
        if (this.size === 0) {
            throw new Error("BST is empty.");
        }

        return this.maximumNode(this.root).e;
    }

    // 寻找以node为根的二分搜索树的最大值节点
    private maximumNode(node: BSTNode<E>): BSTNode<E> {
        if (node.right === null) {
            return node;
        }

        return this.maximumNode(node.right);
    }

    // 寻找二分搜索树的最小元素
    public minimum(): E {
        if (this.size === 0) {
            throw new Error("BST is empty.");
        }

        return this.minimumNode(this.root).e;
    }

    // 寻找以node为根的二分搜索树的最小值节点
    private minimumNode(node: BSTNode<E>): BSTNode<E> {
        if (node.left === null) {
            return node;
        }

        return this.maximumNode(node.left);
    }

    // 从二分搜索树中删除最小值所在的节点，返回最小值
    public removeMin(): E {
        let ret: E = this.minimum();
        this.root = this.removeMinNode(this.root);
        return ret;
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后，新的二分搜索树的根
    private removeMinNode(node: BSTNode<E>): BSTNode<E> {
        if (node.left === null) {
            let rightNode: BSTNode<E> = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }

        node.left = this.removeMinNode(node.left);
        return node;
    }

    public removeMax(): E {
        let ret: E = this.maximum();
        this.root = this.removeMaxNode(this.root);
        return ret;
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后，新的二分搜索树的根
    private removeMaxNode(node: BSTNode<E>): BSTNode<E> {
        if (node.right === null) {
            let leftNode: BSTNode<E> = node.left;
            node.left = null;
            this.size--;
            return leftNode;
        }

        node.right = this.removeMaxNode(node.right);
        return node;
    }

    // 删除二分搜索树中元素为e的节点
    public remove(e: E): void {
        this.root = this.removeNode(this.root, e);
    }

    // 删除以node为根的二分搜索树中值为e的节点，递归算法
    // 返回删除节点后新的二分搜索树的根
    private removeNode(node: BSTNode<E>, e): BSTNode<E> {
        if (node === null) {
            return null;
        }

        if (e < node.e) {
            node.left = this.removeNode(node.left, e);
        } else if (e > node.e) {
            node.right = this.removeNode(node.right, e);
        } else { // e === node.e
            
            if (node.left === null) {
                let rightNode: BSTNode<E> = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }

            if (node.right === null) {
                let leftNode: BSTNode<E> = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }

            // 待删除节点左右子树均不为空的情况
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            let successor: BSTNode<E> = this.minimumNode(node.right);
            successor.right = this.removeMinNode(node.right);
            successor.left = node.left;

            node.left = node.right = null;
            return successor;
        }
    }

    public toString(): string {
        let res: string = this.generateBSTString(this.root, 0);
        console.log(res);
        return res;
    }

    private generateBSTString(node: BSTNode<E>, depth: number): string {

        if (node === null) {
            return `${this.generateDepthString(depth)}NULL\n`;
        }

        return `${this.generateDepthString(depth)}${node.e}\n` +
            this.generateBSTString(node.left, depth + 1) +
            this.generateBSTString(node.right, depth + 1);
    }

    private generateDepthString(depth: number): string {
        let res = '';
        for (let i = 0; i < depth; i++) {
            res += '--';
        }
        return res;
    }
}

export default BST;

let bst = new BST<number>();
let nums: Array<number> = [5, 3, 6, 2, 4, 8];
for (let i = 0; i < nums.length; i++) {
    bst.add(nums[i]);
}
// bst.preOrder();
// bst.toString();
// bst.inOrder();
// bst.postOrder();
// bst.levelOrder();
// bst.preOrderNR();

// let arr: number[] = [];
for (let i = 0; i < 50; i++) {
    let r = Math.floor(100 * Math.random());
    bst.add(r);
    // arr.push(r);
}

let arr = [];
while(!bst.isEmpty()) {
    arr.push(bst.removeMin());
}
console.log(arr);