/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/add-two-numbers/
 * @time   2019-10-25
 */

type ListNodeType = ListNode | null;

class ListNode {
  val: number;
  next: ListNodeType;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

// 创建新的结果链表，时间复杂度为O(n)，空间复杂度为O(n)
const addTwoNumbers = function(l1: ListNodeType, l2: ListNodeType): ListNodeType {
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  let carry = 0; // 用来存储超过10的部分

  while(l1 !== null || l2 !== null) {
    let x = (l1 !== null) ? l1.val : 0;
    let y = (l2 !== null) ? l2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// 使用l1作为结果链表，时间复杂度为O(n)，空间复杂度为O(n)
const addTwoNumbers2 = function(l1: ListNodeType, l2: ListNodeType): ListNodeType {
  let p1 = l1;
  let p2 = l2;
  let prev = new ListNode(0);
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    let a = p1 ? p1.val : 0;
    let b = p2 ? p2.val : 0;
    if (p1) {
      p1.val = (a + b + carry) % 10;
    } else {
      prev.next = new ListNode((a + b + carry) % 10);
      p1 = prev.next;
    }

    carry = Math.floor((a + b + carry) / 10);
    prev = p1;
    p1 = p1.next;
    if (p2) {
      p2 = p2.next;
    }
  }

  prev.next = carry ? new ListNode(1) : null;
  return l1;
}

