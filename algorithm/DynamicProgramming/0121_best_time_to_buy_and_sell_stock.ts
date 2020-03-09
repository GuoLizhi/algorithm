/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 * @time   2019-03-09
 * 
 * 1. 记录今天之前买入的最小值
 * 2. 计算今天卖出的最大获利
 * 3. 比较每天的最大获利，取最大值即可
 *
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function maxProfit (prices: number[]): number {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}