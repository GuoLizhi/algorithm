/**
 * 旋转数组
 *  将包含 n 个元素的数组向右旋转 k 步。
 *  如果 n = 7 , k = 3，给定数组 [1,2,3,4,5,6,7] ，向右旋转后的结果为 [5,6,7,1,2,3,4]。
 *  ps:注意要求空间复杂度为 O(1)
 */
function rotate(nums: Array<number>, k: number): Array<number> {

    while (k > 0) {
        let cache = nums[nums.length - 1];
        for (let i = nums.length - 2; i >= 0; i--) { 
            nums[i + 1] = nums[i];
        }
        nums[0] = cache;
        k--;
    }

    return nums;
}