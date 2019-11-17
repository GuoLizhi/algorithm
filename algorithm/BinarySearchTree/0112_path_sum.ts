/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/path-sum/
 * @time   2019-11-17
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
var hasPathSum = function(root: TreeNode, sum: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return root.val === sum;
  }

  if (hasPathSum(root.left, sum - root.val)) {
    return true;
  }

  if (hasPathSum(root.right, sum - root.val)) {
    return true;
  }

  return false;
}
