/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals
  const result = []
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })

  result.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    // 先获取interval区间内的最后一个区间
    const lastInterval = result[result.length - 1]
    if (intervals[i][0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], intervals[i][1])
    } else {
      result.push(intervals[i])
    }
  }

  return result
}