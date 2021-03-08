/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 使用队列来完成树结构的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root === null) return []
    const queue = [root]
    const result = []
    while (queue.length > 0) {
      const size = queue.length
      const row = []
      for (let i = 0; i < size; i++) {
        const curr = queue.shift()
        row.push(curr.val)
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)
      }
      result.push(row)
    }
    return result
  };