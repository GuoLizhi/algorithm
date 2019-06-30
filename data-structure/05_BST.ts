
import Stack from './01_Stack';
class BSTNode<E> {
    public e: E;
    public left: BSTNode<E> = null;
    public right: BSTNode<E> = null;

    constructor(e: E) {
        this.e = e;
    }
}

class BST<E> {
    private root:  BSTNode<E> = null;
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

        while(!stack.isEmpty()) {
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

let bst = new BST<number>();
let nums: Array<number> = [5,3,6,2,4,8];
for (let i = 0; i < nums.length; i++) {
    bst.add(nums[i]);
}
// bst.preOrder();
// bst.toString();
// bst.inOrder();
// bst.postOrder();

bst.preOrderNR();