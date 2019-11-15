/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @time   2019-11-14
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function removeNthFromEnd(head: ListNode, n: number) {
  let dummyHead: ListNode = {
    val: null,
    next: head
  }

  let p: ListNode = dummyHead;
  let q: ListNode = dummyHead;

  for (let i = 0; i < n+1; i++) {
    q = q.next;
  }

  while(q !== null) {
    p = p.next;
    q = q.next;
  }

  let delNode = p.next;
  p.next = delNode.next;

  return dummyHead.next;
}
