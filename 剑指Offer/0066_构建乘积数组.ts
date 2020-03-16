/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/
 * @time   2020-03-16
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
var constructArr = function(a:number[]): number[] {
  const n = a.length;
  const result = [];
  let left = 1;

  for (let i = 0; i < n; i++) {
    result.push(left);
    left = left * a[i];
  }

  let right = 1;
  for (let i = n-1; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * a[i];
  }

  return result;
};