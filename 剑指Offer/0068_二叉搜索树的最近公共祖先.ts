/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * @time   2019-10-28
 * 思路：利用二分搜索树的性质
 * Time Complexity O(log n)
 * Space Complexity O(1)
 */

export default function lowestCommonAncestor (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  if (root === null) { return root }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  return root
}
