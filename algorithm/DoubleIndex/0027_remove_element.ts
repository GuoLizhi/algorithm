/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-element/
 * @time   2019-10-26
 *
 * time complexity O(n)
 * space complexity O(1)
 *
 * 慢指针 -> 值不为val的数组
 * 快指针 -> 快速往前遍历
 */
function removeElement (nums: number[], val: number): number {
  let slowP = 0;
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== val) {
      nums[slowP] = nums[fastP];
      slowP++;
    }
  }
  return slowP;
}
