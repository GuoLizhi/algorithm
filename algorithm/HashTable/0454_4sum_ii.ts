/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/4sum-ii/
 * @time   2019-11-10
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
function fourSumCount (A: number[], B: number[], C: number[], D: number[]): number {
  let map = new Map<number>()
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j]
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1)
      } else {
        map.set(sum, 1)
      }
    }
  }

  let result = 0
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = C[i] + D[j]
      if (map.has(-sum)) {
        result += map.get(-sum)
      }
    }
  }

  return result
}
