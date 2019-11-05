/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @time   2019-11-05
 *
 * 滑动窗口
 * time complexity O(n)
 * space complexity O(1)
 */
function lengthOfLongestSubstring (s: string): number {
  let l = 0
  let r = -1 // 滑动窗口为[l...r]
  let res = 0
  let freq: any = {}

  while (l < s.length) {
    if (r + 1 < s.length && freq[s[r + 1]] === undefined) {
      freq[s[++r]] = 1
    } else {
      delete freq[s[l]];
      l++
    }

    res = Math.max(res, r-l+1)
  }

  return res
}
