/**
 * dp[i][j] 表示到达(i,j)坐标的路径
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const dp = genArr(m, n)
    dp[0][0] = 1
    // 第一行和第一列的路径总和均为0
    for (let i = 0; i < m; i++) {
      dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
      dp[0][j] = 1
    }
    // 开始计算二维dp数组
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  
    return dp[m-1][n-1]
  }
  
  function genArr(m, n) {
    const result = []
    for (let i = 0; i < m; i++) {
      result.push(new Array(n).fill(0))
    }
    return result
  }