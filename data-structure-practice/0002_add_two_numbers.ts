/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 创建新的结果链表，时间复杂度O(n)，空间复杂度O(n)
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let cur = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10); // 存储超过10的部分
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummyHead.next;
};

// 使用l1作为结果链表，时间复杂度O(n)，空间复杂度O(n)
var addTwoNumbers2 = function(l1, l2) {
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

// 使用l1和l2中较长的链表作为结果链表，时间复杂度为O(n)，空间复杂度为O(n)
function getLen(l) {
  let res = 0;
  while (l) {
    res++;
    l = l.next;
  }
  return res;
}
var addTwoNumbers3 = function(l1, l2) {
  let len1 = getLen(l1);
  let len2 = getLen(l2);
  // 用p1来存储较长的链表，用p2来存储较短的链表
  let p1 = len1 > len2 ? l1 : l2;
  let p2 = len1 > len2 ? l2 : l1;

  let carry = 0;
  // 使用prev来存储较长链表中的最后一个节点
  let prev = null;
  while (p1 !== null) {
    let a = p1.val;
    let b = p2 ? p2.val : 0;
    p1.val = (a + b + carry) % 10;
    carry = Math.floor((a + b + carry) / 10);

    prev = p1;
    p1 = p1.next;
    p2 = p2 ? p2.next : null;
  }

  prev.next = carry ? new ListNode(1) : null;
  return len1 > len2 ? l1 : l2;
}