/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @time   2019-11-11
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
function inorderTraversal(root: TreeNode): number[] {
  if (root === null) {
    return [];
  }

  let result: number[] = [];
  let stack: TreeNode[] = [];
  let cur = root

  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
}
