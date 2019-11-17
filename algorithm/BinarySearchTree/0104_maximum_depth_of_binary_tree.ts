/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @time   2019-11-17
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function maxDepth (root: TreeNode): number {
  if (root === null) {
    return 0;
  }

  let leftMaxDepth = maxDepth(root.left);
  let rightMaxDepth = maxDepth(root.right);
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}
