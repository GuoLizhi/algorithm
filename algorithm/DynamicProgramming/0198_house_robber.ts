/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/house-robber/
 * @time   2019-10-29
 * @description 动态规划方程：dp[n] = MAX(dp[n - 1], dp[n - 2] + num)
 *
 * Time Complexity O(n^2)
 * Space Complexity O(n)
 */
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  let memo = new Array(n).fill(0);
  memo[n - 1] = nums[n - 1];
  for (let i = n -2; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      memo[i] = Math.max(memo[i], nums[j] + (j + 2 < n ? memo[j + 2] : 0))
    }
  }
  return memo[0]
}
