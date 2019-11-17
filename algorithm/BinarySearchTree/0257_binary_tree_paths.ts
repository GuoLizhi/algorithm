/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/binary-tree-paths/
 * @time   2019-11-17
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function binaryTreePaths (root: TreeNode): string[] {
  let result: string[] = [];

  if (root === null) {
    return result;
  }

  if (root.left === null && root.right === null) {
    result.push(String(root.val));
  }

  let leftS: string[] = binaryTreePaths(root.left);
  for (let i = 0; i < leftS.length; i++) {
    result.push(`${root.val}->${leftS[i]}`);
  }

  let rightS: string[] = binaryTreePaths(root.right);
  for (let i = 0; i < rightS.length; i++) {
    result.push(`${root.val}->${rightS[i]}`);
  }

  return result;
}
