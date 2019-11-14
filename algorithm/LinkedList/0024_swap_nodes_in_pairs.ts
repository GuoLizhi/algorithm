/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @time   2019-11-14
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
interface ListNode {
  val: number
  next: ListNode
}

function swapPairs (head: ListNode): ListNode {
  let dummyHead: ListNode = {
    val: null,
    next: head
  }

  let p = dummyHead
  while (p.next !== null && p.next.next !== null) {
    let node1 = p.next
    let node2 = p.next.next
    let next = p.next.next.next

    node2.next = node1
    node1.next = next
    p.next = node2

    p = node1

    return dummyHead.next
  }
}
