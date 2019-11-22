/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/
 * @time   2019-11-22
 *
 * Time Complexity O(m*n)
 * Space Complexity O(m+n)
 */
function oddCells (n: number, m: number, indices: number[][]) {
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);
  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((row[i] + col[j]) % 2 > 0) {
        result++;
      }
    }
  }

  return result;
}
