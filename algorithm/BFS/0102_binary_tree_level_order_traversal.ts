/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @time   2019-11-16
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
interface Pair {
  node: TreeNode;
  level: number;
}
function levelOrder(root: TreeNode): number[][] {
  if (root === null) {
    return []
  }

  let queue: Pair[] = [];
  queue.push({ node: root, level: 0});
  let result: number[][] = [];

  while (queue.length > 0) {

    let front: Pair = queue.shift();
    let node = front.node;
    let level = front.level;

    if (level === result.length) {
      result.push([]);
    }

    result[level].push(node.val);
    if (node.left) {
      queue.push({
        node: node.left,
        level: level + 1
      });
    }

    if (node.right) {
      queue.push({
        node: node.right,
        level: level + 1
      })
    }
  }

  return result;
}
