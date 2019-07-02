/*
    反转链表
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {

    let prev = null;
    let cur = head;

    while(cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

// 解法二
function reverseList2(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let node = reverseList2(head.next);
    head.next.next = head;
    head.next = null;
    return node;
}