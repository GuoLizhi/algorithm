动态规划

动态规划是一种分阶段求解决策问题的数学思想。它不仅仅用于编程领域，也应用于管理学，经济学，生物学。是一种`大事化小，小事化了`的思想。

我们先来看一个斐波那契数列的例子，斐波那契数列就是动态规划算法的良好体现

```js
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n -2);
}
```

上面用了简单的递归算法，但是显然这个算法的时间复杂度是很高的O(2^n)。原因是这里包含了大量重复的操作，于是我们可以缓存一下每次计算结果。

```js
let memory = {};
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (!memory[n]) {
    memory[n] = fib(n - 1) + fib(n -2);
  }
  return memory[n];
}
```

以上这种算法，也有个名字叫`记忆化搜索`，这种方式是自上而下的解决问题，让问题的规模逐渐减小。而对于动态规划算法而言，他是一种自下而上的解决方案，也就是从小规模着手，直到达到我们需要求解的问题`最大规模`。

```js
function fib(n) {
  let memory = [];
  memory[0] = 0;
  memory[1] = 1;
  for (let i = 2; i <= n; i++) {
    memory[i] = memory[i-1] + memory[i-2];
  }
  return memory[n];
}
```

wiki对于动态规划的定义：将原问题拆解成若干子问题，同时保存子问题的答案，使得每个子问题只求解一次，最终获得原问题的答案。而拆分问题靠的就是状态的定义和状态转移方程的定义。

对于动态规划，我们可以将其流程图归纳为

![动态规划.png](https://i.loli.net/2019/10/28/tdMLjNnGkhaqx8o.png)

题目集合

1. [爬楼梯](./0070_climbing_stairs.ts)
2. [整数拆分](./0070_climbing_stairs.ts)
3. [打家劫舍](./0198_house_robber.ts)
4. [区域和检索 - 数组不可变](./0303_range_sum_query_immutable.ts)
5. [不同路径](./0062_unique_paths.ts)
6. [最小路径和](./0064_minimum_path_sum.ts)
7. [最大子数组](./0053_maximum_subarray.ts)
8. [买卖股票的最佳时机](./0121_best_time_to_buy_and_sell_stock.ts)
