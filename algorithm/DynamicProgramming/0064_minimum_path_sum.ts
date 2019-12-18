/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/unique-paths/
 * @time   2019-10-28
 * 动态规划方程： dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 * dp[i][j]表示走到dp[i][j]的最小路径和
 * 这里存在4中情况
 * 1.当dp[i][j]位于左边界时，那上一步只能从上面过来
 * 2.当dp[i][j]位于上边界时，那上一步只能从左边过来
 * 3.当dp[i][j]位于起点时，这种最小路径和为0
 * 4.当dp[i][j]排除以上3中情况时，dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 *
 * Time Complexity O(m*n)
 * Space Complexity O(1)
 */
function minPathSum(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        grid[i][j] = grid[i][j-1] + grid[i][j];
      } else if (j === 0) {
        grid[i][j] = grid[i-1][j] + grid[i][j];
      } else {
        grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j];
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}