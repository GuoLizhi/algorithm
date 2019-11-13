/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * @time   2019-11-13
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

type ListNode = {
  val: number
  next: ListNode
}
function deleteDuplicates (head: ListNode): ListNode {
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
