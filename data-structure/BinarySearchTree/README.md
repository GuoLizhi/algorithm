#### 二叉搜索树
二叉搜索树具有以下性质：

- 若任意节点的左子树不为空，则左子树上所有节点的值均小于它的根节点
- 若任意节点的右子树不为空，则右子树上所有节点的值均大于它的根节点
- 任意节点的左右子树也分别是二叉搜索树
- 没有键值相等的节点

二叉搜索树相比于其它的数据结构而言，它的查找和插入时间复杂度较低，为O(logN)。

#### 二叉搜索树查找
假设当前的根节点为`node`，查找的大致过程为

- 如果二叉搜索树为空树，则搜索失败
- 如果需要查找的值大于当前节点的值，则在右子树中继续查找
- 如果需要查找的值小于当前节点的值，则在左子树中继续查找

```typescript
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
```

#### 二分搜索树插入
假设当前的根节点为`node`，插入的大致过程为

- 如果二叉搜索树为空树，则插入失败
- 如果需要查找的值大于当前节点的值，则将该节点插入到右子树中
- 如果需要查找的值小于当前节点的值，则将该节点插入到左子树中

```typescript
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
```

#### 二叉搜索树的删除
在二叉搜索树中删除节点，分为3中情况讨论

- 如果待删除的是叶子节点，那其删除不会影响二叉搜索树的整体结构
- 如果待删除节点的左子树或者右子树为空，此时只需要将待删除节点的右子树（左子树为空的情况）或者左子树（右子树为空的情况）付给待删除节点的父节点即可。
- 如果待删除节点的左右子树均不为空的情况是，这时删除节点会引起二叉树的结构发生变化。其中一种做法是将待删除节点右子树中的最小值节点来代替这个待删除的节点。

```typescript
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
```
