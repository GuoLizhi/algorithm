/**
 * 双指针，从中间向两边扩散的思路
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len === 1) return s
  let maxLen = 1
  let result = s[0]
  for (let i = 0; i < len - 1; i++) {
    // 奇数情况
    const oddStr = centerSpread(s, i, i)
    // 偶数情况
    const evenStr = centerSpread(s, i, i+1)
    const maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr
    if (maxLenStr.length > maxLen) {
      result = maxLenStr
      maxLen = maxLenStr.length
    }
  }
  return result
}

// 从[left,right]开始，向左右两边扩散
// 如果left==right，表明回文串的长度是奇数
// 如果left+1==right，表明回文串的长度是偶数
var centerSpread = function (s, left, right) {
  const len = s.length
  let i = left
  let j = right
  // 经过本次循环，(i,j)开区间内肯定是一个回文子串
  // 开区间的主要原因是当循环break时，s[i]!=s[j]
  while (i >= 0 && j < len) {
    if (s[i] === s[j]) {
      i--
      j++
    } else {
      break
    }
  }
  return s.substring(i+1,j)
}
