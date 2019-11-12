/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/backspace-string-compare/
 * @time   2019-11-11
 *
 * Time Complexity O(logN)
 * Space Complexity O(1)
 */
var solution = function(isBadVersion: Function) {
  return function(n: number) {
    let left = 0;
    let right = n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}
