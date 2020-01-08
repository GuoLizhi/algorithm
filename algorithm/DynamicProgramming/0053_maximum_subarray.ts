/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode.com/problems/maximum-subarray/
 * @time   2020-01-08
 *  
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  let dp: number[] = [];
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }

  let res: number = dp[0];
  for (let i = 1; i < len; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
}