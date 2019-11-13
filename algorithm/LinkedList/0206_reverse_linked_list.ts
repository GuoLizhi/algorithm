/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/reverse-linked-list/
 * @time   2019-11-13
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

interface ListNode {
  val: number
  next: ListNode
}

function reverseList(head: ListNode): ListNode {
  let pre: ListNode = null
  let cur: ListNode = head
  while(cur !== null) {
    let next: ListNode = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
