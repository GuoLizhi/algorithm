/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @time   2019-10-26
 *
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
