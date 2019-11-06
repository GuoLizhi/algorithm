/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/submissions/
 * @time   2019-11-05
 *
 * 对撞指针解法
 * time complexity O(n)
 * space complexity O(1)
 */
function twoSumII (numbers: number[], target: number) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] < target) {
      left++
    } else {
      right--
    }
  }
}
