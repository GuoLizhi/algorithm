/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/count-primes/
 * @time   2019-11-13
 *
 * Time Complexity: O(n)
 * Space Complexity: O(2n)
 */
var isIsomorphic = function(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map()
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    const ifExists = map.has(s.charAt(i))
    const value = map.get(s.charAt(i))
    if (ifExists) {
      if (value === t.charAt(i)) {
        continue
      } else {
        return false
      }
    } else {
      if (set.has(t.charAt(i))) {
        return false
      }
      set.add(t.charAt(i))
      map.set(s.charAt(i), t.charAt(i))
    }
  }
  return true
};
