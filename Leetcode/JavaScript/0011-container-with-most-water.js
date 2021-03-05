/**
 * 双指针解法
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length
  if (len == 0) return 0
  let l = 0
  let r = len - 1
  let max = 0
  while (l < r) {
    let currArea = (r - l) * Math.min(height[l], height[r])
    max = Math.max(currArea, max)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}