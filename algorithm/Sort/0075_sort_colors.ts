/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/sort-colors/
 * @time   2019-11-03
 *
 * Time Complexity O(n)
 * Space Complexity O(k) k为需要排序的颜色的种数
 */

function sortColors (nums: number[]) {
  let count: number[] = new Array(3).fill(0)
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++
  }

  let index = 0
  for (let i = 0; i < count[0]; i++) {
    nums[index++] = 0
  }
  for (let i = 0; i < count[1]; i++) {
    nums[index++] = 1
  }
  for (let i = 0; i < count[2]; i++) {
    nums[index++] = 2
  }
}

/**
 * 三路快排 只需要遍历一次数组
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function sortColors2 (nums: number[]) {
  let zero = -1 // nums[0...zero]用来存储0
  let two = nums.length // nums[two...n-1]用来存储2

  for (let i = 0; i < two;) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      two--;
      [nums[i], nums[two]] = [nums[two], nums[i]]
    } else if (nums[i] === 0) {
      zero++
      [nums[zero], nums[i]] = [nums[i], nums[zero]]
      i++
    }
  }
}
