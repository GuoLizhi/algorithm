/**
 * 经典的回溯算法
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  function backTrack(leftRemain, rightRemain, currStr) {
    if (leftRemain === 0 && rightRemain === 0) {
      result.push(currStr)
      return
    }
    if (leftRemain > 0) {
      backTrack(leftRemain - 1, rightRemain, currStr + '(')
    }
    if (leftRemain < rightRemain) {
      backTrack(leftRemain, rightRemain - 1, currStr + ')')
    }
  }

  backTrack(n, n, '')
  return result
}
