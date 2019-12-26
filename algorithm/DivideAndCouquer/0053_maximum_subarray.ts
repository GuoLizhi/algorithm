/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/maximum-subarray/
 * @time   2019-12-26
 * 思路：经典的分治算法
 * time complexity O(nlogn)
 * space complexity O(logn)
 */

// 定义基本情况
function maxSubArray(nums: number[]): number {
  // 问题的总范围
  return helper(nums, 0, nums.length - 1);
}

// 将问题分解为子问题并递归解决它们
function helper(nums: number[], left: number, right: number): number {
  // 递归到底的情况
  if (left === right) {
    return nums[left];
  }

  let p = Math.floor((left + right) / 2);
  let leftSum = helper(nums, left, p);
  let rightSum = helper(nums, p+1, right);
  let corssSum = crossSum(nums, left, right, p);
  return Math.max(Math.max(leftSum, rightSum), corssSum);
}

function crossSum(nums: number[], left: number, right: number, p: number): number {
  if (left === right) {
    return nums[left];
  }
  let leftSubsum: number = Number.MIN_VALUE;
  let leftCurrSum: number = 0;
  for (let i = p; i > left - 1; --i) {
    leftCurrSum += nums[i];
    leftSubsum = Math.max(leftSubsum, leftCurrSum);
  }

  let rightSubsum: number = Number.MIN_VALUE;
  let rightCurrSum: number = 0;
  for (let i = p+1; i < right+1; ++i) {
    rightCurrSum += nums[i];
    rightSubsum = Math.max(rightCurrSum, rightSubsum);
  }

  return leftSubsum + rightSubsum;
}
