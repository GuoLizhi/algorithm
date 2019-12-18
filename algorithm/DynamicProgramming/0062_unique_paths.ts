/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/unique-paths/
 * @time   2019-10-28
 * 动态规划方程： dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 注意：对于第一行，或者第一列时，由于都是在边界，所以只能为1
 * dp[i][j] 表示到达dp[i][j]所需要的步数
 *
 * Time Complexity O(m*n)
 * Space Complexity O(m*n)
 */
function uniquePaths(m: number, n: number) {
  let arr: number[][];
  for (let i = 0; i < m; i++) {
    arr[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    arr[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
}