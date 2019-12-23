/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @time   2019-11-13
 *
 * Time Complexity O(m+n)
 * Space Complexity O(n)
 */
function mergeTwoLists (l1: ListNode, l2: ListNode): ListNode {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
