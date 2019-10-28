/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/integer-break/
 * @time   2019-10-28
 *
 * Time Complexity O(n^2)
 * Space Complexity O(n)
 */
function integerBreak(n: number): number {
  // memory[i]表示将数字i至少分割成两部分后得到的最大乘积
  let memory = new Array(n+1).fill(-1);
  memory[1] = 1;
  for (let i = 2; i <= n; i++) {
    // 求解memory[i]
    for (let j = 1; j <= i -1; j++) {
      memory[i] = Math.max(memory[i], j * (i - j), j * memory[i - j]);
    }
  }

  return memory[n];
}
