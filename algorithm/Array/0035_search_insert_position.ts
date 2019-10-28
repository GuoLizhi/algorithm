/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/search-insert-position/
 * @time   2019-10-28
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function searchInsert (nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}
