// 公共方法，判断一个字符串s从a到b是否是回文字符串
var isPalindrome = function (s, a, b) {
  for (; a < b && s[a] === s[b]; a++, b--){}
  return a >= b;
}

// 解法1，暴力解法 时间复杂度O(n^3) 空间复杂度O(1)
var longestPalindrome = function(s) {
    if (s === '') return s;

    let n = s.length;
    let res = s.substr(0, 1);
    for (let i = 0; i < n; i++) {
      for (let j = i + res.length; j < n; j++) {
        if (isPalindrome(s, i, j) && j - i + 1 > res.length) {
          res = s.substr(i, j - i + 1);
        }
      }
    }
    return res;
};