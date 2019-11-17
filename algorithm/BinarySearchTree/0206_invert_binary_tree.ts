/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/invert-binary-tree/
 * @time   2019-11-17
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function invertTree (root: TreeNode): TreeNode {
  if (root === null) {
    return null;
  }
  invertTree(root.left);
  invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}
