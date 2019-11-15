/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * @time   2019-11-14
 *
 * Time Complexity O(1)
 * Space Complexity O(1)
 */
function deleteNode(node: ListNode): void {
  if (node === null) {
    return null
  }

  // 要删除的节点是最后一个节点
  if (node.next === null) {
    node = null
  }

  node.val = node.next.val
  let delNode = node.next
  node.next = delNode.next

}
