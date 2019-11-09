/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @time   2019-11-06
 *
 * Time Complexity O(m+n)
 * Space Complexity O(1)
 */
function intersection (nums1: number[], nums2: number[]): number[] {
  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i])
  }
  const result = new Set()
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return [...result];
}
