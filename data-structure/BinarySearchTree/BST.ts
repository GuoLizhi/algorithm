// 定义二分搜索树的节点
class Node<E> {
  public e: E;
  public left: Node<E> = null;
  public right: Node<E> = null;

  constructor(e: E) {
    this.e = e;
  }
}

class BST<E> {
  public root: Node<E> = null;
  private size: number = 0;

  // 获取二分搜索树节点个数
  public getSize(): number {
    return this.size;
  }

  // 判断二分搜索树是否为空
  public isEmpty(): boolean {
    return this.size === 0;
  }

  // 向二分搜索树中添加节点e
  public add(node: Node<E>, e: E) {
    this.root = this.addToNode(this.root, e);
  }

  // 向以node为根的二分搜索树中添加元素e，递归算法
  // 返回插入新节点后二分搜索树的根
  private addToNode(node: Node<E>, e: E): Node<E> {

    // 如果node已经为空，那直接新建一个Node节点即可
    if (node === null) {
      this.size++;
      return new Node<E>(e);
    }

    if (e < node.e) {
      node.left = this.addToNode(node.left, e)
    } else if (e > node.e) {
      node.right = this.addToNode(node.right, e);
    }

    return node;
  }

  // 判断二分搜索树中是否包含元素e
  public contains(e: E) {
    return this.containsInNode(this.root, e);
  }

  // 判断以node为根的二分搜索树中是否含有元素e，递归算法
  private containsInNode(node: Node<E>, e: E): boolean {
    if (node === null) {
      return false;
    }

    if (e === node.e) {
      return true;
    } else if (e > node.e) {
      return this.containsInNode(node.right, e);
    } else {
      return this.containsInNode(node.left, e);
    }
  }

  // 二分搜索树的前序遍历
  public preOrder(): void {
    this._preOrder(this.root);
  }

  // 二分搜索树前序遍历非递归算法
  public preOrderNR(): void {
    if (this.root === null) {
      return;
    }
    let stack: Node<E>[] = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let cur = stack.pop();
      // @ts-ignore
      console.log(cur.e);

      if (cur.right !== null) {
        stack.push(cur.right)
      }
      if (cur.left !== null) {
        stack.push(cur.left)
      }
    }
  }

  // 对以node为根的二分搜索树进行前序遍历
  private _preOrder(node: Node<E>): void {
    if (node === null) {
      return;
    }
    // @ts-ignore
    console.log(node.e);
    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  // 二分搜索树的中序遍历
  public inOrder(): void {
    this._inOrder(this.root)
  }

  // 对以node为根的二分搜索树进行前序遍历，递归算法
  private _inOrder(node: Node<E>): void {
    if (node === null) {
      return;
    }
    this._inOrder(node.left);
    // @ts-ignore
    console.log(node.e);
    this._inOrder(node.right);
  }

  // 二分搜索树的后序遍历
  public postOrder(): void {
    this._postOrder(this.root);
  }

  // 对以node为根的二分搜索树进行后序遍历，递归算法
  private _postOrder(node: Node<E>): void {
    if (node === null) {
      return;
    }
    this._postOrder(node.left);
    this._postOrder(node.right);
    // @ts-ignore
    console.log(node.e);
  }

  // 二分搜索树的层序遍历
  public levelOrder(): void {
    if (this.root === null) {
      return
    }

    let queue: Node<E>[] = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let cur = queue.shift();
      // @ts-ignore
      console.log(cur.e);

      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }
  }

  // 寻找二分搜索树中的最小元素
  public minimum(): E {
    if (this.size === 0) {
      throw new Error('BST is empty');
    }
    return this._minimum(this.root).e;
  }

  // 寻找以node为根的二分搜索树的最小元素
  private _minimum(node: Node<E>): Node<E> {
    if (node.left === null) {
      return node;
    }
    return this._minimum(node.left);
  }

  // 寻找二分搜索树中的最大元素
  public maximum(): E {
    if (this.size === 0)
      throw new Error('BST is empty');
    return this._maximum(this.root).e;
  }

  // 寻找以node为根的二分搜索树的最大元素
  private _maximum(node: Node<E>): Node<E> {
    if (node.right === null)
      return node;
    return this._maximum(node.right);
  }

  // 从二分搜索树中删除最小值所在节点，返回最小值
  public removeMin(): E {
    let ret: E = this._minimum(this.root).e;
    this.root = this._removeMin(this.root);
    return ret;
  }

  // 删除以node为根的二分搜索树中的最小节点
  // 返回删除节点后新的二分搜索树的根
  private _removeMin(node: Node<E>): Node<E> {
    if (node.left === null) {
      let rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }

    node.left = this._removeMin(node.left);
    return node;
  }

  // 从二分搜索树中删除最大值所在的节点，返回最大值
  public removeMax(): E {
    const ret = this.maximum();
    this.root = this._removeMax(this.root);
    return ret;
  }

  // 删除以node为根的二分搜索树中的最大节点
  // 返回删除节点后新的二分搜索树的根
  private _removeMax(node: Node<E>): Node<E> {
    if (node.right === null) {
      const leftNode = node.left;
      node.left = null;
      this.size--;
      return leftNode;
    }

    node.right = this._removeMax(node.right);
    return node;
  }

  // 删除二分搜索树中元素为e的节点
  public remove(e: E): void {
    this.root = this._remove(this.root, e);
  }

  // 删除以node为根的二分搜索树中为e的节点，递归算法
  // 返回删除节点后新的二分搜索树的根
  private _remove(node: Node<E>, e: E): Node<E> {
    if (node === null)
      return null;
    if (e < node.e) {
      node.left = this._remove(node.left, e);
      return node;
    } else if (e > node.e) {
      node.right = this._remove(node.right, e);
      return node;
    } else {

      // 待删除的节点左子树为空的情况
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this.size--;
        return rightNode;
      }

      // 待删除的节点右子树为空的情况
      if (node.right === null) {
        const leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      }

      // 待删除的节点左右子树都不为空的情况
      // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
      // 用这个节点顶替待删除节点的位置
      const successor = this._minimum(node.right);
      successor.right = this._removeMin(node.right);
      successor.left = node.left;
      node.left = node.right = null;
      return successor;
    }
  }
}

export default BST;