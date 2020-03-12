/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/merge-sorted-array/
 * @time   2019-12-24
 * 思路：使用双指针，从后往前
 * 这里需要注意的是，while循环结束之后，p1可能为负值，如果为负，需要将nums2中未比对完的数据拷贝到nums1中
 * Time Complexity O(m+n)
 * Space Complexity O(1)
 */
export default function merge (nums1: number[], m: number, nums2: number[], n: number) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }

  if (p1 < 0) {
    while (p2 >= 0) {
      nums1[p] = nums2[p2]
      p--
      p2--
    }
  }
}
