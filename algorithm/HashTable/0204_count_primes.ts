/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/count-primes/
 * @time   2019-11-13
 *
 * Time Complexity: O(nlogN)
 * Space Complexity: O(n)
 */
function countPrimes(n: number): number {
  if (n < 2) {
    return 0
  }
  let map = new Map()
  let result = n - 2

  for (let i = 2; i < n; i++) {
    map.set(i, false)
  }

  for (let i = 2; i < n; i++) {
    let isPrime = map.get(i);
    if (isPrime) {
      continue
    }
    for (let j = 2; i * j < n; j++) {
      if (!map.get(i * j)) {
        map.set(i * j, true)
        result--
      }
    }
  }

  return result
}
