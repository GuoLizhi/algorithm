
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 定义一个虚拟头结点
  const dummyHead = new ListNode(0, head)
  let slow = dummyHead
  let fast = head
  // 先让快指针走n步
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  // 然后快慢指针一起走
  while (fast != null) {
    fast = fast.next
    slow = slow.next
  }
  // 遍历结束，此时slow指向的是待删除节点的前一个节点
  const next = slow.next
  slow.next = next.next
  // 这里由于可能删除的是第一个节点，因此需要返回dummyHead.next
  return dummyHead.next
}
