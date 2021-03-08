/**
 * 排序+双指针解法
 * 时间复杂度O(n^2)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length
  if (len < 3) return []
  // 先对数组进行排序
  nums.sort((a, b) => a - b)
  console.log(nums)

  const result = []
  for (let i = 0; i < len; i++) {
    let l = i + 1
    let r = len - 1
    // 如果第一个数字已经大于0，直接中断
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i-1]) continue
    // 开始进行双指针遍历
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]])
        // 开始去除重复项
        while (l < r && nums[l] === nums[l+1]) l++
        while (l < r && nums[r] === nums[r-1]) r--
        l++
        r--
      } else if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      }
    }
  }

  return result
}
