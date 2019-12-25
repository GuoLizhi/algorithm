/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @time   2019-12-25
 *
 * time complexity O(n)
 * space complexity O(1)
 */
function sortArrayByParityII(arr: number[]): number[] {
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (arr[i] % 2 !== 0 && arr[j] % 2 === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    if (arr[i] % 2 === 0) {
      i += 2;
    }
    if (arr[j] % 2 === 1) {
      j += 2;
    }
  }
  return arr;
}
