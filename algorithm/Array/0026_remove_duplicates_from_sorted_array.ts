/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @time   2019-10-28
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function removeDuplicates(nums: number[]): number {
  const size = nums.length;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[slowP] !== nums[fastP]) {
      slowP++;
      nums[slowP] = nums[fastP];
    }
  }

  return slowP + 1;
}
