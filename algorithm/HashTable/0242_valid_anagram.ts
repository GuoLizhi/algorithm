/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/valid-anagram/
 * @time   2019-12-25
 *
 * Time Complexity: O(n+m) n和m分别为字符串t和s的长度
 * Space Complexity: O(1)
 */
function isAnagram(t: string, s: string): boolean {
  const map = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    const value = map.get(t[i]);
    if (value === undefined) {
      map.set(t[i], 1);
    } else {
      map.set(t[i], value + 1);
    }
  }
  for (let j = 0; j < s.length; j++) {
    const value = map.get(s[j]);
    if (value === undefined) {
      return false;
    } else {
      map.set(s[j], value - 1);
    }
  }
  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}
