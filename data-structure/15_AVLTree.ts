class AVLTreeNode<K, V> {
    public key: K;
    public value: V;
    public left: AVLTreeNode<K, V> = null;
    public right: AVLTreeNode<K, V> = null;
    public height: number = 1;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

class AVLTree<K, V> {
    private root: AVLTreeNode<K, V> = null;
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 获取节点node的高度
    private getHeight(node: AVLTreeNode<K, V>): number {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // 获取节点node的平衡因子
    private getBalanceFactor(node: AVLTreeNode<K, V>): number {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // 向二分搜索树中添加新的元素(key, value)
    public add(key: K, value: V): void {
        this.root = this.addNode(this.root, key, value);
    }

    // 向以node为根的二分搜索树中插入元素(key, value)，递归算法
    // 返回插入新节点后二分搜索树的根
    private addNode(node: AVLTreeNode<K, V>, key: K, value: V): AVLTreeNode<K, V> {

        if (node === null) {
            this.size++;
            return new AVLTreeNode<K, V>(key, value);
        }

        if (key < node.key) {
            node.left = this.addNode(node.left, key, value);
        } else if (key > node.key) {
            node.right = this.addNode(node.right, key, value);
        } else {
            node.value = value;
        }

        // 更新height
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // 更新平衡因子
        let balanceFactor: number = this.getBalanceFactor(node);

        // 平衡维护
        // LL
        if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rightRotate(node);
        }

        // RR
        if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.leftRotate(node);
        }

        // LR
        if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // RL
        if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // 返回以node为根节点的二分搜索树中，key所在的节点
    private getNode(node: AVLTreeNode<K, V>, key: K): AVLTreeNode<K, V> {
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
        let node: AVLTreeNode<K, V> = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }

    public set(key: K, value: V): void {
        let node: AVLTreeNode<K, V> = this.getNode(this.root, key);
        if (node === null) {
            throw new Error(`${key} doesnot exist...`);
        }
        node.value = value;
    }

    // 返回以node为根的二分搜索树的最小值所在的节点
    private minimum(node: AVLTreeNode<K, V>): AVLTreeNode<K, V> {
        if (node === null) {
            return node;
        }
        return this.minimum(node.left);
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private removeMin(node: AVLTreeNode<K, V>): AVLTreeNode<K, V> {
        
        if (node.left === null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this.removeMin(node.left);
        return node;
    }

    // 从二分搜索树中删除键为key的节点
    public remove(key: K): V {
        let node: AVLTreeNode<K, V> = this.getNode(this.root, key);
        if (node !== null) {
            this.root = this.removeNode(this.root, key);
            return node.value;
        }
        return null;
    }

    // 从二分搜索树中删除以node为根节点，键为key的节点
    private removeNode(node: AVLTreeNode<K, V>, key: K): AVLTreeNode<K, V> {

        if (node === null) {
            return null;
        }

        let retNode: AVLTreeNode<K, V>;
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            retNode = node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            retNode = node;
        } else {

            // 待删除节点左子树为null的情况
            if (node.left === null) {
                let rightNode: AVLTreeNode<K, V> = node.right;
                node.right = null;
                this.size--;
                retNode = rightNode;
            }

            // 待删除节点右子树为null的情况
            else if (node.right === null) {
                let leftNode: AVLTreeNode<K, V> = node.left;
                node.left = null;
                this.size--;
                retNode = leftNode;
            }

            // 待删除节点左右子树均不为空的情况

            // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            else {
                let successor: AVLTreeNode<K, V> = this.minimum(node.right);
                successor.right = this.removeNode(node.right, successor.key);
                successor.left = node.left;
    
                node.left = node.right = null;
                retNode = successor;
            }
        }

        if (retNode === null) {
            return null;
        }

        retNode.height = 1 + Math.max(this.getHeight(retNode.left), this.getHeight(retNode.right));
        
        // 计算平衡因子
        let balanceFactor = this.getBalanceFactor(retNode);

        // 平衡维护
        // LL
        if (balanceFactor > 1 && this.getBalanceFactor(retNode.left) >= 0) {
            return this.rightRotate(retNode);
        }

        // RR
        if (balanceFactor < -1 && this.getBalanceFactor(retNode.right) <= 0) {
            return this.leftRotate(retNode);
        }

        // LR
        if (balanceFactor > 1 && this.getBalanceFactor(retNode.left) < 0) {
            retNode.left = this.rightRotate(retNode.left);
            return this.rightRotate(retNode);
        }

        // RL
        if (balanceFactor < -1 && this.getBalanceFactor(retNode.right) > 0) {
            retNode.right = this.rightRotate(retNode.right);
            return this.leftRotate(retNode);
        }

        return retNode;
    }

    // 对节点y进行向左旋转的操作，返回旋转后的新节点
    //    y                             x
    //  /  \                          /   \
    // T1   x      向左旋转 (y)       y     z
    //     / \   - - - - - - - ->   / \   / \
    //   T2  z                     T1 T2 T3 T4
    //      / \
    //     T3 T4
    private leftRotate(y: AVLTreeNode<K, V>): AVLTreeNode<K, V> {
        let x: AVLTreeNode<K, V> = y.right;
        let T2: AVLTreeNode<K, V> = x.left;

        // 向左旋转的过程
        x.left = y;
        y.right = T2;

        // 更新height
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    // 对节点y进行向右旋转操作，返回旋转后新的根节点x
    //        y                              x
    //       / \                           /   \
    //      x   T4     向右旋转 (y)        z     y
    //     / \       - - - - - - - ->    / \   / \
    //    z   T3                       T1  T2 T3 T4
    //   / \
    // T1   T2
    private rightRotate(y: AVLTreeNode<K, V>): AVLTreeNode<K, V> {
        let x: AVLTreeNode<K, V> = y.left;
        let T3: AVLTreeNode<K, V> = x.right;

        // 向右旋转的过程
        x.right = y;
        y.left = T3;

        // 更新height
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }
}

export default AVLTree;