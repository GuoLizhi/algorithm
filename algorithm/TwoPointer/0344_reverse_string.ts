/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/reverse-string/
 * @time   2019-10-26
 *
 * time complexity O(n)
 * space complexity O(1)
 */
function reverseString(s: string[]) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}