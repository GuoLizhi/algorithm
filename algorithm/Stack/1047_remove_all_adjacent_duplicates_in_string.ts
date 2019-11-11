/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @time   2019-11-11
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function removeDuplicates2 (S: string): string {
  let stack: string[] = [S[0]];
  for (let i = 1; i < S.length; i++) {
    if (S[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
}
