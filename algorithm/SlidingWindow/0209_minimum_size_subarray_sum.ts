/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * @time   2019-11-05
 *
 * 滑动窗口
 * time complexity O(n)
 * space complexity O(1)
 */
function minSubArrayLen (s: number, nums: number[]): number {
  let l = 0
  let r = -1
  let res = nums.length + 1
  let sum = 0

  while (l < nums.length) {
    if (r + 1 < nums.length && sum < s) {
      r++
      sum += nums[r]
    } else {
      sum -= nums[l]
      l++
    }

    if (sum >= s) {
      res = Math.min(res, r - l + 1)
    }

  }
  if (res === nums.length + 1) {
    return 0
  }

  return res
}
