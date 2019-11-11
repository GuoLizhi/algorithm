/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/backspace-string-compare/
 * @time   2019-11-11
 *
 * Time Complexity O(m+n) m,n分别为字符串S和T的长度
 * Space Complexity O(m+n)
 */

function processStr (str: string): string {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      if (stack.length > 0) {
        stack.pop()
      }
    } else {
      stack.push(str[i])
    }
  }
  return stack.join()
}

function backspaceCompare (S: string, T: string): boolean {
  return processStr(S) === processStr(T)
}
