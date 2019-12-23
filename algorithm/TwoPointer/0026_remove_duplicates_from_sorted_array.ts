/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @time   2019-10-26
 * 思路：快慢指针。如果快慢指针所指元素不同，则将慢指针加1，并将满指针所指的元素赋值为快指针所指的元素
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function removeDuplicates (nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let slowP = 0;
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (slowP !== nums[fastP]) {
      nums[slowP] = nums[fastP];
    }
  }

  return slowP + 1;
}
