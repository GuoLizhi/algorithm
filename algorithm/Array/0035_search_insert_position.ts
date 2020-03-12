/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/search-insert-position/
 * @time   2019-10-28
 * 思路：典型的二分查找法
 * Time Complexity O(log n)
 * Space Complexity O(1)
 */
export default function searchInsert (nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return left
}
