/**
 * 存在重复
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数应该返回 true。如果每个元素都不相同，则返回 false。
 */
// 解法一，先排序，再比较
function containsDuplicate(nums: Array<number>): boolean {
    nums = nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i]) {
            return true;
        }
    }
    return false;
}

// 解法二，利用JS中Object键唯一性的特性
function containsDuplicate2(nums: Array<number>): boolean {
    let obj: Object = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === 1) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }

    return false;
}