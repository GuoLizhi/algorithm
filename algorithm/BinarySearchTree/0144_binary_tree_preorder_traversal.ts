/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @time   2019-11-11
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}
function preorderTraversal(root: TreeNode): number[] {
  if (root === null) {
    return null;
  }

  const stack = [];
  const result = [];
  stack.push(root);
  while (stack.length > 0) {
    const top = stack.pop()
    result.push(top.val);
    top.right !== null && stack.push(top.right);
    top.left !== null && stack.push(top.left);
  }

  return result;
}
