递归

二叉树具有天然的递归结构，比如二分搜索树的前序遍历

```ts
function preOrder(node) {
  if (node === null) { // 递归终止的条件
    return
  }

  console.log(node.val)
  preOrder(node.left)
  preOrder(node.right)
}
```