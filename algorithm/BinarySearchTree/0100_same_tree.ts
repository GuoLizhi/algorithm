/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/same-tree/
 * @time   2019-11-19
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isSameTree (p: TreeNode, q: TreeNode): boolean {
  if (p === null && q === null) {
    return true;
  } else if (p === null && q !== null) {
    return false;
  } else if (p !== null && q === null) {
    return false;
  } else if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right);
}
