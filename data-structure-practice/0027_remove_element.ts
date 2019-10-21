/**
 * 在遍历过程中如果出现数字与需要移除的值不相同时，则进行拷贝覆盖 nums[slowP] = nums[fastP], slowP++
 * 在相同的时候，则跳过
 */
var removeElement = function(nums: number[], val: number): number {
  let slowP = 0;

  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== val) {
      nums[slowP] = nums[fastP];
      slowP++;
    }
  }

  return slowP;
};

/**
 * 思路大体上与解法一一致
 * 只是一个指针从前往后，一个指针从后往前
 */
var removeElement2 = function(nums: number[], val: number): number {
  let fastP = nums.length;

  for (let slowP = 0; slowP < fastP;) {
    if (nums[slowP] === val) {
      nums[slowP] = nums[fastP];
      fastP--;
    } else {
      slowP++;
    }
  }

  return fastP;
}
