/**
 * 经典回溯算法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length
  if (len === 0) return []

  const result = []
  const set = new Set()
  const backTrack = function(currArr) {
    if (currArr.length === len) {
      result.push([...currArr])
      return
    }
    for (let i = 0; i < len; i++) {
      if (set.has(nums[i])) continue

      currArr.push(nums[i])
      set.add(nums[i])
      backTrack(currArr)
      currArr.pop()
      set.delete(nums[i])
    }
  }

  backTrack([])
  return result
}
