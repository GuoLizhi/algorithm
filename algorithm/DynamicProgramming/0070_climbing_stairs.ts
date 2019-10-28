/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/climbing-stairs/
 * @time   2019-10-28
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
function climbStairs(n: number): number {
  let memory: number[] = [];
  memory[0] = 1;
  memory[1] = 1;
  for (let i = 2; i <= n; i++) {
    memory[i] = memory[i-1] + memory[i-2];
  }
  return memory[n];
}
