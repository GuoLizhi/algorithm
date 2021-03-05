/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1]
  const l = searchLeftRange(nums, target)
  if (l === -1) {
    return [-1, -1]
  }
  const r = searchRightRange(nums, target)
  return [l, r]
}

var searchLeftRange = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  // 在[l, r]的区间内，搜索第一个出现的target
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    
    if (nums[mid] > target) { // 排除[mid, r]
      r = mid - 1
    } else if (nums[mid] < target) { // 排除[l, mid]
      l = mid + 1
    } else if (nums[mid] === target) { // 等于的情况，由于需要找到最左侧的相等元素，因此这个元素也可以“排除”
      r = mid - 1
    }
  }

  if (nums[l] !== target) return -1
  return l
}

var searchRightRange = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    
    if (nums[mid] > target) { // 排除[mid, r]
      r = mid - 1
    } else if (nums[mid] < target) { // 排除[l, mid]
      l = mid + 1
    } else if (nums[mid] === target) { // 等于的情况，由于需要找到最右侧的相等元素，因此这个元素也可以“排除”
      l = mid + 1
    }
  }

  if (nums[r] !== target) return -1
  return r
}


console.log(searchRightRange([2, 2], 2))