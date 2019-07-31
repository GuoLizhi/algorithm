// 开辟新的数组来存储结果数组, 时间复杂度O(n)，空间复杂度为O(n)
var moveZeroes = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            result.push(nums[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }
    let curLen = result.length;
    for (let i = curLen; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// 使用一个标记来表示数组中非0元素的位置, 时间复杂度O(n)，空间复杂度为O(1)
var moveZeroes2 = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i];
        }
    }
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// 交换位置，时间复杂度O(n)，空间复杂度为O(1)
var moveZeroes3 = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            k++;
        }
    }
};

// 交换位置优化，时间复杂度O(n)，空间复杂度为O(1)
var moveZeroes3 = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (k !== i) {
                let temp = nums[i];
                nums[i] = nums[k];
                nums[k] = temp;
            }
            k++;
        }
    }
};