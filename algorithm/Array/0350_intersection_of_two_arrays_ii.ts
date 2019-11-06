/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @time   2019-11-06
 *
 * Time Complexity O(m+n)
 * Space Complexity O(1)
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    let m = map.get(nums1[i])
    if (m >= 1) {
      map.set(nums1[i], ++m)
    } else {
      map.set(nums1[i], 1)
    }
  }

  const result = []
  for (let i = 0; i < nums2.length; i++) {
    let n = map.get(nums2[i]);
    if (n >= 1) {
      result.push(nums2[i]);
      map.set(nums2[i], --n);
    }
  }

  return result
}
