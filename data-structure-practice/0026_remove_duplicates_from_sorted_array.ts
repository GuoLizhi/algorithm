/**
 * @param {number[]} nums
 * @return {number}
 * 本题主要采用快慢指针的解法，注意两点已知条件：1.数组已排序，2.空间复杂度必须为O(1)
 * 开始时，快慢指针都处在index为0的位置
 * 如果两指针所指的数相同，那么快指针向前走一步
 * 如果两指针所指的数不同，两个指针同时向前挪一步，并将快指针的数赋值给慢指针
 */
var removeDuplicates = function(nums: number[]) {
  const size = nums.length;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[slowP] !== nums[fastP]) {
      slowP++;
      nums[slowP] = nums[fastP];
    }
  }
  return slowP + 1;
};
