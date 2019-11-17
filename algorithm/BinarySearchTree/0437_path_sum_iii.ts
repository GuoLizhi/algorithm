/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/path-sum-iii/
 * @time   2019-11-17
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function pathSum (root: TreeNode, sum: number): number {
  if (root === null) {
    return 0;
  }

  let result = findPath(root, sum);

  // 不包含root的情况
  result += pathSum(root.left, sum);
  result += pathSum(root.right, sum);

  return result;
}

function findPath(node: TreeNode, num: number): number {
  if (node === null) {
    return 0;
  }

  let result = 0;
  if (node.val === num) {
    result += 1;
  }

  result += findPath(node.left, num - node.val);
  result += findPath(node.right, num - node.val);

  return result;
}
