/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/binary-search-tree-iterator/
 * @time   2019-11-27
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
interface ICtor {
  stack: number[]
  LDR: Function
}
var BSTIterator = function(this: ICtor, root: TreeNode) {
  this.stack = []
  this.LDR(root)
}

BSTIterator.prototype.LDR = function (node: TreeNode) {
  if (node === null) {
    return
  }
  this.LDR(node.left)
  this.stack.push(node.val)
  this.LDR(node.right)
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.stack.shift()
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
}
