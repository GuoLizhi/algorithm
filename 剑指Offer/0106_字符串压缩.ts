/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/compress-string-lcci/
 * @time   2020-03-16
 * 思路：双指针
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function compressString (S: string): string {
  let i = 0;
  let count = 1;
  let result = '';
  for (let j = 1; j < S.length; j++) {
    if (S[i] === S[j]) {
      count++;
    } else {
      result += `${S[i]}${count}`;
      count = 1;
      i = j;
    }
  }

  result = result + `${S[i]}${count}`;
  return result.length >= S.length ? S : result;
}
