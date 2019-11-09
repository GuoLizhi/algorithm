/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/single-number/
 * @time   2019-11-09
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function singleNumber(nums: number[]): number {
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }
  let result = [...set]
  return result[0]
}