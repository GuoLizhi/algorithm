/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode.com/problems/length-of-last-word/
 * @time   2020-01-08
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function lengthOfLastWord (s: string): number {
  let result = 0;
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === ' ') {
      i--;
    } else {
      break;
    }
  }
  
  for (; i >= 0; i--) {
    if (s[i] !== ' ') {
        result++;
    } else {
      return result;
    }
  }
  return result;
}
