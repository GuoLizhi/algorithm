/**
 * 可以采用动态规划的思想：分别计算出每个柱子左右两边的最高的柱子
 * 时间复杂度O(n)
 * 空间复杂度O(m)
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const length = height.length
  if (length === 0) return 0
  // maxL[i]表示第i个元素左侧的最高的柱子
  const maxL = [0]
  // maxR[i]表示第i个元素右侧的最高的柱子
  const maxR = new Array(length).fill(0)
  for (let i = 1; i < length; i++) {
    maxL.push(Math.max(height[i-1], maxL[i-1]))
  }
  for (let i = length - 2; i > 0; i--) {
    maxR[i] = Math.max(height[i+1], maxR[i+1])
  }
  let result = 0

  // 开始计算最终所接到的雨水值
  for (let i = 1; i < length - 1; i++) {
    // 计算第i个柱子，左右两边最高柱子的最小值
    const min = Math.min(maxL[i], maxR[i])
    result += (min - height[i] > 0) ? (min - height[i]) : 0
  }

  return result
}
