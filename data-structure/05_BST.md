二分搜索树也是一种比较高级的数据结构，它就像我们现实生活中一棵倒立的树，从顶部开始，不断的向下扩散。每个节点都可以有一个左孩子节点，和一个右孩子节点。对于二分搜索树而言，**任意节点的左孩子小于该节点的值，右孩子大于该节点的值**，元素可以没有孩子节点（`也就是左右节点为null的情况`）     
我们还是从单个的二分搜索树节点开始
```ts
class BSTNode<E> {
    public e: E;
    public left: BSTNode<E> = null;
    public right: BSTNode<E> = null;
    constructor(e: E) {
        this.e = e;
    }
}
```
可以看到，我们接收一个由用户传递过来的元素e，存储在当前二分搜索树的节点上。初始化状态时，节点的左孩子和右孩子都是null
#### 1.二分搜索树的实例属性
我们定义二分搜索树的根节点为root以及当前二分搜索树节点的个数为size
```ts
class BST<E> {
    private root: BSTNode<E> = null;
    private size: number = 0;
}
```
#### 2.向二分搜索树中添加元素
向二分搜索树中添加元素我们会采用递归的思想，先定一个私有方法来表示从任意节点开始，添加一个元素，并返回当前的节点
```ts
private addToNode(node: BSTNode<E>, e: E): BSTNode<E> {
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
```
从以上代码可以看出，整个递归到底的情况就是当节点为null的情况，如果要添加的元素小于当前节点的值，那么我们将其添加到其左子树中；如果要添加的元素大于当前节点的值，那么我们将其添加到其右子树中。这样不断的递归，直到当前节点为null。         
最后我们对这个私有方法传入`root`节点，即可表示为从root开始，不断的搜索某个元素。       
```ts
public add(e: E): void {
    this.root = this.addToNode(this.root, e);
}
```
在时间复杂度方面，如果二分搜索树趋于平衡，也就是根节点的左子树中元素个数大致等于右子树中元素个数时，这是的时间复杂度为O(logN)，但是如果这个二分搜索树比较极端，每次添加的元素比当前元素都要小（或都要大），这个情况下，二分搜索树会退化成链表，此时的时间复杂度为O(N)
#### 3.在二分搜索树中查询元素
同样的，查询操作我们也需要通过遍历来实现，实现的原理也是和添加元素差不多
```ts
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
```
同样递归到底的情况就是当该节点为null时，如果要查找的元素小于当前节点，那么就继续在该节点的左子树中查找，否则我们就在右子树中查找。对于时间复杂度而言，也存在一种二分搜索树退化成链表的极端情况
#### 4.二分搜索树的遍历
二分搜索树存在3中遍历模式，即`前序遍历`，`中序遍历`和`后序遍历`，所谓的前中后都是相对于当前节点自身的元素而言，比如前序遍历就是先遍历得到当前的元素，然后再遍历其左子树和右子树。          
前序遍历
```ts
private preOrderNode(node: BSTNode<E>): void {
    if (node === null) return;
    console.log(node.e); // 先遍历当前节点
    this.preOrderNode(node.left); // 再遍历当前节点的左孩子
    this.preOrderNode(node.right); // 再遍历当前节点的右孩子
}
```
中序遍历和后序遍历也是差不多的逻辑，只是访问`node.e`的位置不同而已，下面我们来看如果使用栈来做二分搜索树前序遍历
```ts
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
```
这个遍历主要思路是不断的将节点push到栈中，如果栈不为空，那么就一直循环下去          

#### 5.在二分搜索树中删除元素
在了解如何在二分搜索树中删除元素之前，我们需要了解如何在二分搜索树中找到和删除最小元素，在二分搜索树中寻找最小元素思路就是不断的递归当前元素的左孩子节点，直到某个节点的左孩子节点为null

```ts
// 寻找以node为根的二分搜索树的最小值节点
private minimumNode(node: BSTNode<E>): BSTNode<E> {
    if (node.left === null) {
        return node;
    }
    return this.maximumNode(node.left);
}
```
在二分搜索树中删除最小节点和寻找最小节点的思路差不多，不断的递归到最小节点，由于最小节点的左孩子节点为null，那么只需要返回最小节点的右子树即可

```ts
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
```

下面我们来看如何删除二分搜索树的任意节点，最佳的方式仍然是递归。先来分析两个临界情况，如果待删除的元素左孩子节点为空，那么只需要返回待删除节点的右孩子；相反如果待删除的节点的右孩子节点为空，那么只需要返回左孩子节点即可

```ts
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
```

删除左孩子和右孩子均不为null的节点，需要找到待删除节点右子树中的最小节点

```ts
let successor: BSTNode<E> = this.minimumNode(node.right);
successor.right = this.removeMinNode(node.right);
successor.left = node.left;
```