/**
 * 经典的动态规划题目
 * dp[n] 表示抢劫第n间房子最大的收益
 * dp[n] = Math.max(dp[n-1], dp[n-2] + nums[n])
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const len = nums.length
    const dp = new Array(len)
    if (len === 0) return 0
    if (len === 1) return nums[0]
    if (len === 2) return Math.max(nums[0], nums[1])
  
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
  
    for (let i = 2; i < len; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    return dp[len-1]
  };