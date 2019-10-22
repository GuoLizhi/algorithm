/**
 * 最长公共前缀
 * @param strs
 */
var longestCommonPrefix = function(strs: string[]): string {
  if (strs.length === 0) return '';

  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    // 检测strs中其余的项中的每一个字符，是否和第一项中的每一个字符相同
    // 如果有一个不同，那直接break，此时会截取出符合本次循环的ans
    for (;j < ans.length && j < strs[i].length; j++) {
      if (ans[j] !== strs[i][j]) {
        break;
      }
    }

    ans = ans.substring(0, j);
    if (ans === '') {
      return ans
    }
  }

  return ans;
};
