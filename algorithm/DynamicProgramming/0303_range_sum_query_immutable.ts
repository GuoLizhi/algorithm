/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/happy-number/
 * @time   2019-11-29
 */
interface IThis {
  memory: number[];
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function NumArray(this: IThis, nums: number[]) {
  let memory: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      memory[i] = nums[0];
    } else {
      memory[i] = memory[i - 1] + nums[i];
    }
  }
  this.memory = memory;
}

// Time Complexity: O(1)
// Space Complexity: O(1)
NumArray.prototype.sumRange = function(i: number, j: number) {
  if (i === 0) {
    return this.memory[j];
  } else {
    return this.memory[j] - this.memory[i - 1];
  }
}
