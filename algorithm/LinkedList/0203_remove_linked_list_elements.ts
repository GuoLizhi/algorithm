/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @time   2019-11-14
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
interface ListNode {
  val: number
  next: ListNode
}

// 不设置虚拟头节点
function removeElements(head: ListNode, val: number): ListNode {
  let cur: ListNode = head;

  while (head.val === val && head !== null) {
    let delNode = head
    head = delNode.next
  }

  if (head === null) {
    return null
  }

  while (cur.next !== null) {
    if (cur.next.val === val) {
      let delNode: ListNode = cur.next
      cur.next = delNode.next
    } else {
      cur = cur.next
    }
  }

  return head
}

// 设置虚拟头节点
function removeElements2(head: ListNode, val: number): ListNode {
  let dummyHead: ListNode = {
    val: null,
    next: head
  }
  let cur = dummyHead
  while (cur.next !== null) {
    if (cur.next.val === val) {
      let delNode: ListNode = cur.next
      cur.next = delNode.next
    } else {
      cur = cur.next
    }
  }
  return dummyHead.next
}
