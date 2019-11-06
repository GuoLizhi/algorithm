/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/move-zeroes/
 * @time   2019-10-26
 *
 * time complexity O(n)
 * space complexity O(n)
 */
function moveZeroes (nums: number[]) {
  let nonZeroesElements: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nonZeroesElements.push(nums[i])
    }
  }
  for (let i = 0; i < nonZeroesElements.length; i++) {
    nums[i] = nonZeroesElements[i]
  }

  for (let i = nonZeroesElements.length; i < nums.length; i++) {
    nums[i] = 0
  }
}

/**
 * DoubleIndex Alogrithm
 * time complexity O(n)
 * space complexity O(1)
 */
function moveZeroes1 (nums: number[]) {
  let slowP = 0 // 用来存储非0元素index
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== 0) {
      nums[slowP++] = nums[fastP]
    }
  }

  for (let i = slowP; i < nums.length; i++) {
    nums[i] = 0
  }
}

/**
 * time complexity O(n)
 * space complexity O(1)
 */
function moveZeroes2 (nums: number[]) {
  let slowP = 0 // 用来存储非0元素index
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== 0) {
      if (nums[fastP] !== nums[slowP]) {
        [nums[fastP], nums[slowP]] = [nums[slowP], nums[fastP]]
      } else {
        slowP++
      }
    }
  }
}
