/**
 * 从排序数组中删除重复项
 * 给定数组: nums = [1,1,2],
 * 你的函数应该返回新长度2, 并且原数组nums的前两个元素必须是1和2
 * 不需要理会新的数组长度后面的元素
 */
function removeDuplicates(nums: Array<number>) {
    if (nums.length === 0 || nums === null) {
        return 0;
    }

    let j = 0;
    // 快慢指针的方式
    for (let i = 1; i < nums.length; i++) {
        // 如果前后两个数不同，j向前挪一位，并且将j赋值给j前方的一个元素
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}

// console.log(removeDuplicates([1,2,3,4,5,5,5]));   