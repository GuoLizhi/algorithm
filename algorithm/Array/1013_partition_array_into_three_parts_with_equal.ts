/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @time   2019-03-11
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
var canThreePartsEqualSum = function(A: number[]) {
  let sum = A.reduce((total: number, current: number) => {
    return total + current
  }, 0)
  
  if (sum % 3 !== 0) {
    return false
  }

  let count = 0
  let subSum = 0
  for (let i = 0; i < A.length; i++) {
    subSum += A[i]
    if (subSum === sum / 3) {
      count++
      subSum = 0
    }

    if (count === 3) {
      return true
    }
  }

  return false
}