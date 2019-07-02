// 基于二分搜索树实现的map
import BST from '../data-structure/05_BST';
interface Map<K, V> {
    add(key: K, value: V): void;
    remove(key: K): V;
    contains(key: K): boolean;
    get(key: K): V;
    set(key: K, newValue: V): void;
    getSize(): number;
    isEmpty(): boolean;
}

class BSTMapNode<K, V> {
    public key: K;
    public value: V;
    public left: BSTMapNode<K, V> = null;
    public right: BSTMapNode<K, V> = null;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class BSTMap<K, V> implements Map<K, V> {
    private root: BSTMapNode<K, V> = null;
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 向二分搜索树中添加新元素(key, value)
    public add(key: K, value: V): void {
        this.root = this.addNode(this.root, key, value);
    }

    // 向以node为根的二分搜索树中插入元素(key, value)，递归算法
    // 返回插入新节点后二分搜索树的根
    private addNode(node: BSTMapNode<K, V>, key: K, value: V): BSTMapNode<K, V> {

        if (node === null) {
            this.size++;
            return new BSTMapNode<K, V>(key, value);
        }

        if (key < node.key) {
            node.left = this.addNode(node.left, key, value);
        } else if (key > node.key) {
            node.right = this.addNode(node.right, key, value);
        } else { // key === node.key
            node.value = value; // 覆盖之前的值
        }

        return node;
    }

    // 获取以node为根节点的二分搜索树中，key所在的节点
    private getNode(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {

        if (node === null) {
            return null;
        }

        if (key === node.key) {
            return node;
        } else if (key < node.key) {
            return this.getNode(node.left, key);
        } else {
            return this.getNode(node.right, key);
        }
    }

    public contains(key: K): boolean {
        return this.getNode(this.root, key) !== null;
    }

    public get(key: K): V {
        let node: BSTMapNode<K, V> = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }

    public set(key: K, newValue: V): void {
        let node: BSTMapNode<K, V> = this.getNode(this.root, key);
        if (node === null) {
            throw new Error(`${key} doesnot exists.`);
        }
        node.value = newValue;
    }

    // 返回以node为根的二分搜索树的最小值所在的节点
    private minimum(node: BSTMapNode<K, V>): BSTMapNode<K, V> {
        if (node.left === null) {
            return node;
        }
        return this.minimum(node.left);
    }

    // 删除掉以node为根的二分搜索树的最小节点
    // 返回删除节点后新的二分搜索树的根
    private removeMin(node: BSTMapNode<K, V>): BSTMapNode<K, V> {
        if (node.left === null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this.removeMin(node.left);
        return node;
    }

    // 从二分搜索树中删除元素为e的节点
    public remove(key: K): V {
        let node: BSTMapNode<K, V> = this.getNode(this.root, key);
        if (node !== null) {
            this.root = this.removeNode(this.root, key);
        }
        return null;
    }

    // 删除掉以node为根的二分搜索树中键为key的节点，递归算法
    // 返回删除节点后新的二分搜索树的根
    private removeNode(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        if (node.left === null) {
            let rightNode: BSTMapNode<K, V> = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }

        if (node.right === null) {
            let leftNode: BSTMapNode<K, V> = node.left;
            node.left = null;
            this.size--;
            return leftNode;
        }

        let successor: BSTMapNode<K, V> = this.minimum(node.right);
        successor.right = this.removeMin(node.right);
        successor.left = node.left;
        node.left = null;
        node.right = null;
        return successor;
    }
}