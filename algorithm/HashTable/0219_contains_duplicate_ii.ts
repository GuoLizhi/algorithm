/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/count-primes/
 * @time   2019-11-13
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function containsNearbyDuplicate (nums: number[], k: number) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}
