/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/valid-parentheses/
 * @time   2019-10-25
 */

// 方法一：将所有的左括号先入栈，如果碰到右括号时，则先出栈一个元素，与该右括号对比。
// 时间复杂度O(n) 空间复杂度O(n)
var isValid = function(s: string): boolean {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (s.length === 0) {
        return false;
      }

      if (s[i] === ')' && stack.pop() !== '(') {
        return false;
      } else if (s[i] === ']' && stack.pop() !== '[') {
        return false;
      } else if (s[i] === '}' && stack.pop() !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};
