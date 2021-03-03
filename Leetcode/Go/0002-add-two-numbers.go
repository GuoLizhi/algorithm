package leetcode

// ListNode 链表节点
type ListNode struct {
	Val  int
	Next *ListNode
}

/*
	迭代的方法：每次都需要判断当前l1,l2是否为nil，并且余数carry是否已经置零
	时间复杂度O(n)
	空间复杂度O(1)
*/
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// 定义一个虚拟头结点
	dummyHead := &ListNode{}
	currNode := dummyHead
	// 用来存储当前两数相加的余数
	carry := 0
	for l1 != nil || l2 != nil || carry != 0 {
		currSum := carry
		if l1 != nil {
			currSum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			currSum += l2.Val
			l2 = l2.Next
		}
		currNode.Next = &ListNode{Val: currSum % 10}
		currNode = currNode.Next
		if currSum >= 10 {
			carry = 1
		} else {
			carry = 0
		}
	}
	return dummyHead.Next
}

/*
	递归方法
	时间复杂度：O(n)
	空间复杂度：O(n)
*/
func addTwoNumbers2(l1 *ListNode, l2 *ListNode) *ListNode {
	return dfs(l1, l2, 0)
}

// carry 每次进行两数相加的除以10之后的余数
func dfs(l1 *ListNode, l2 *ListNode, carry int) *ListNode {
	// 递归终止条件
	if l1 == nil && l2 == nil && carry == 0 {
		return nil
	}
	currSum := carry
	var l1Next, l2Next *ListNode
	if l1 != nil {
		currSum += l1.Val
		l1Next = l1.Next
	}
	if l2 != nil {
		currSum += l2.Val
		l2Next = l2.Next
	}
	var result = &ListNode{Val: currSum % 10}
	if currSum >= 10 {
		carry = 1
	} else {
		carry = 0
	}
	result.Next = dfs(l1Next, l2Next, carry)
	return result
}
