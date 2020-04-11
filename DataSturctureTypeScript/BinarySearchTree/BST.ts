// 定义二分搜索树的节点
import { BSTNode } from './BSTNode';
import LinkedListQueue from '../Queue/LinkedListQueue';

class BST<E> {
  public root: BSTNode<E> = null;
  private size: number = 0;

  /**
   * 获取二分搜索树节点个数
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {number}
   */
  public getSize(): number {
    return this.size;
  }

  /**
   * 判断二分搜索树是否为空
   * Time Complexity O(1)
   * Space Complexity O(1)
   * @return {boolean}
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 向二分搜索树中添加节点e
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 需要添加入二分搜索树的元素
   * @return {boolean}
   */
  public add(e: E): void {
    this.root = this.addToNode(this.root, e);
  }

  /**
   * 向以node为根的二分搜索树中添加元素e，递归算法
   * 返回插入新节点后二分搜索树的根
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 插入的根节点
   * @param {E} 需要添加入二分搜索树的元素
   * @return {BSTNode<E>}
   */
  private addToNode(node: BSTNode<E>, e: E): BSTNode<E> {

    // 如果node已经为空，那直接新建一个Node节点即可
    if (node === null) {
      this.size++;
      return new BSTNode<E>(e);
    }

    if (e < node.e) {
      node.left = this.addToNode(node.left, e)
    } else if (e > node.e) {
      node.right = this.addToNode(node.right, e);
    }

    return node;
  }

  /**
   * 判断二分搜索树中是否包含元素e
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 需要查找的元素e
   * @return {boolean}
   */
  public contains(e: E): boolean {
    return this.containsInNode(this.root, e);
  }

  /**
   * 判断以node为根的二分搜索树中是否含有元素e，递归算法
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 查找开始的根节点
   * @param {E} 需要查找的元素e
   * @return {boolean}
   */
  private containsInNode(node: BSTNode<E>, e: E): boolean {
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

  /**
   * 二分搜索树的前序遍历
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {void}
   */
  public preOrder(): void {
    this._preOrder(this.root);
  }
  
  /**
   * 对以node为根的二分搜索树进行前序遍历
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 前序遍历的根节点
   * @return {void}
   */
  private _preOrder(node: BSTNode<E>): void {
    if (node === null) {
      return;
    }
    console.log(node.e); // 访问节点上的元素
    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  /**
   * 二分搜索树前序遍历非递归算法，使用栈来实现
   * Time Complexity O(n)
   * Space Complexity O(n)
   * @return {void}
   */
  public preOrderNR(): void {
    if (this.root === null) {
      return;
    }
    let stack: BSTNode<E>[] = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let cur = stack.pop();
      console.log(cur.e); // 访问节点上的元素
      if (cur.right !== null) {
        stack.push(cur.right)
      }
      if (cur.left !== null) {
        stack.push(cur.left)
      }
    }
  }

  /**
   * 二分搜索树的中序遍历
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {void}
   */
  public inOrder(): void {
    this._inOrder(this.root)
  }

  /**
   * 对以node为根的二分搜索树进行中序遍历，递归算法
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 中序遍历的根节点
   * @return {void}
   */
  private _inOrder(node: BSTNode<E>): void {
    if (node === null) {
      return;
    }
    this._inOrder(node.left);
    console.log(node.e);
    this._inOrder(node.right);
  }

  /**
   * 二分搜索树的后序遍历
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @return {void}
   */
  public postOrder(): void {
    this._postOrder(this.root);
  }

  /**
   * 对以node为根的二分搜索树进行后序遍历，递归算法
   * Time Complexity O(n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 后序遍历的根节点
   * @return {void}
   */
  private _postOrder(node: BSTNode<E>): void {
    if (node === null) {
      return;
    }
    this._postOrder(node.left);
    this._postOrder(node.right);
    console.log(node.e);
  }

  /**
   * 二分搜索树的层序遍历
   * Time Complexity O(n)
   * Space Complexity O(n)
   * @return {void}
   */
  public levelOrder(): void {
    if (this.root === null) {
      return;
    }

    let queue: LinkedListQueue<BSTNode<E>> = new LinkedListQueue<BSTNode<E>>();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let cur = queue.dequeue();
      console.log(cur.e); // 访问当前节点上的元素

      if (cur.left !== null) {
        queue.enqueue(cur.left);
      }
      if (cur.right !== null) {
        queue.enqueue(cur.right);
      }
    }
  }

  /**
   * 寻找二分搜索树中的最小元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {void}
   */
  public minimum(): E {
    if (this.size === 0) {
      throw new Error('BST is empty');
    }
    return this._minimum(this.root).e;
  }

  /**
   * 寻找以node为根的二分搜索树的最小元素，并返回这个最小元素所在的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 所查找的二分搜索树的根
   * @return {BSTNode<E>}
   */
  private _minimum(node: BSTNode<E>): BSTNode<E> {
    if (node.left === null) {
      return node;
    }
    return this._minimum(node.left);
  }

  /**
   * 寻找二分搜索树中的最大元素
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {void}
   */
  public maximum(): E {
    if (this.size === 0)
      throw new Error('BST is empty');
    return this._maximum(this.root).e;
  }

  /**
   * 寻找以node为根的二分搜索树的最大元素，并返回这个最大元素所在的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 所查找的二分搜索树的根
   * @return {BSTNode<E>}
   */
  private _maximum(node: BSTNode<E>): BSTNode<E> {
    if (node.right === null)
      return node;
    return this._maximum(node.right);
  }

  /**
   * 从二分搜索树中删除最小值所在节点，返回最小值
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {E}
   */
  public removeMin(): E {
    let ret: E = this._minimum(this.root).e;
    this.root = this._removeMin(this.root);
    return ret;
  }

  /**
   * 删除以node为根的二分搜索树中的最小节点
   * 返回删除节点后新的二分搜索树的根
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 所查找的二分搜索树的根
   * @return {BSTNode<E>}
   */
  private _removeMin(node: BSTNode<E>): BSTNode<E> {
    if (node.left === null) {
      let rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }

    node.left = this._removeMin(node.left);
    return node;
  }

  /**
   * 从二分搜索树中删除最大值所在的节点，返回最大值
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @return {E}
   */
  public removeMax(): E {
    const ret = this.maximum();
    this.root = this._removeMax(this.root);
    return ret;
  }

  /**
   * 删除以node为根的二分搜索树中的最大节点
   * 返回删除节点后新的二分搜索树的根
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 所查找的二分搜索树的根
   * @return {BSTNode<E>}
   */
  private _removeMax(node: BSTNode<E>): BSTNode<E> {
    if (node.right === null) {
      const leftNode = node.left;
      node.left = null;
      this.size--;
      return leftNode;
    }

    node.right = this._removeMax(node.right);
    return node;
  }

  /**
   * 删除二分搜索树中元素为e的节点
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {E} e 要删出节点上的元素e
   * @return {void}
   */
  public remove(e: E): void {
    this.root = this._remove(this.root, e);
  }

  /**
   * 删除以node为根的二分搜索树中为e的节点，递归算法
   * 返回删除节点后新的二分搜索树的根
   * Time Complexity O(log n)
   * Space Complexity O(1)
   * @param {BSTNode<E>} node 所查找的二分搜索树的根
   * @param {E} e 要删出节点上的元素e
   * @return {BSTNode<E>}
   */
  private _remove(node: BSTNode<E>, e: E): BSTNode<E> {
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