/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 第一种方式，直接采用两重循环，时间复杂度为O(n^2)，空间复杂度为O(1)
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

// 第二种方式，使用HashTable的方式，时间复杂度为O(n)，空间复杂度为O(n)
var twoSum2 = function(nums, target) {
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

// 第三种方式，使用HashTable，一次循环通过，时间复杂度为O(n)，空间复杂度为O(n)
var twoSum3 = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complete = target - nums[i];
    if (map.has(complete)) {
      return [i, map.get(complete)];
    }
    map.set(nums[i], i);
  }
};