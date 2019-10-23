/**
 * 二进制求和
 * 方法：
 * 1. 将两个数从后往前，每一位上的数字，加到一个新的数中
 * 2. 将得到的数转化为二进制表示
 * 3. 需要注意，如果某一个比另外一个数短的话，直接加0
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a: string, b: string): string {
  let ans = '';
  let ca = 0;
  for (let i = a.length - 1, j = b.length - 1; j >= 0 || i >= 0; i--, j--) {
    let sum = ca;
    sum += (i >= 0 ? parseInt(a[i]) : 0);
    sum += (j >= 0 ? parseInt(b[j]) : 0);
    ans += sum % 2;
    ca = Math.floor(sum / 2);
  }
  ans += ca === 1 ? ca : '';
  return ans.split('').reverse().join('');
};
