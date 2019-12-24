/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * @time   2019-12-24
 * 思路：用一个变量记录左括号的个数，不断去维护这个个数，当个数大于1时，那就需要用result记录下来
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function removeOuterParentheses(S: string): string {
  let l = 0;
  let result = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      l++;
      if (l >= 2) {
        result += S[i];
      }
    } else {
      if (l >= 2) {
        result += S[i];
      }
      l--;
    }
  }
  return result;
}
