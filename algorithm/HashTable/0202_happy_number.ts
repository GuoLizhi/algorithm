/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/happy-number/
 * @time   2019-11-09
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isHappy(n: number): boolean {
  let set = new Set();
  while (n !== 1) {
    n = String(n)
      .split("")
      .reduce((a, b) => {
        return a + Number(b) * Number(b);
      }, 0);
    if (set.has(n)) {
      return false;
    } else {
      set.add(n);
    }
  }
  return true;
}
