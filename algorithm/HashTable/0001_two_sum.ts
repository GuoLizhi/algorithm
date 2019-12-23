/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/two-sum/
 * @time   2019-10-25
 */
// 第一种方式，直接采用两重循环
// 时间复杂度为O(n^2)，空间复杂度为O(1)
const twoSum = function(nums: number[], target: number) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

// 第二种方式，使用Map
// 两次循环，第一次循环将数组中的数映射到map中
// 第二次循环判断map中有没有target-nums[i]
// 时间复杂度为O(n)，空间复杂度为O(n)
const twoSum2 = function(nums: number[], target: number) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let index = map.get(target - nums[i]);
    if (index && index !== i) {
      return [index, i]
    }
  }
};

// 第三种方式，使用HashTable，一次循环通过
// 循环时先判断map中是否含有target-nums[i]，如果有则直接返回结果
// 如果没有，也不必担心，因为始终会将nums[i]设入map中
// 举个例子，arr = [1,2,3]; target = 4
// 循环遍历到1时，此时map中还没有3，但是循环到3时，1已经被set到了map中
// 时间复杂度为O(n)，空间复杂度为O(n)
const twoSum3 = function(nums: number[], target: number) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complete = target - nums[i];
    if (map.has(complete)) {
      return [i, map.get(complete)];
    }
    map.set(nums[i], i);
  }
};
