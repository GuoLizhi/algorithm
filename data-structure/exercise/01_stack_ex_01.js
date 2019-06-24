/**
 * 实现数组反转
 * @param {Array} arr 需要反转的数组
 * @returns Array
 */
var Stack = require('../01_stack');
function reverse(arr) {
    let stack = new Stack;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        stack.push(arr[i]);
    }
    return stack.stack;
}

// 测试用例
console.log(reverse(['a', 'b', 'c']));