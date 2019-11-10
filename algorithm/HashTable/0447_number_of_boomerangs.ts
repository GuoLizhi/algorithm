/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/number-of-boomerangs/
 * @time   2019-11-10
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
function distance (pointA: number[], pointB: number[]): number {
  return (pointA[0] - pointB[0]) * (pointA[0] - pointB[0]) +
    (pointA[1] - pointB[1]) * (pointA[1] - pointB[1])
}
function numberOfBoomerangs(points: number[][]): number {
  let result = 0
  for (let i = 0; i < points.length; i++) {

    let map = new Map<number>()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let d= distance(points[i], points[j])
        if (map.has(d)) {
          map.set(d, map.get(d) + 1)
        } else {
          map.set(d, 1)
        }
      }
    }

    map.forEach((value, key) => {
      result += value * (value - 1)
    })
  }



  return result
}
