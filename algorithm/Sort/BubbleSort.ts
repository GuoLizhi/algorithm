/**
 * @author lizhi.guo@foxmail.com
 * @source 冒泡排序
 * @time   2019-12-22
 * 思想：每次循环找到数组中的最大值，将最大值冒泡到最后
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 */
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

function bubbleSort2(arr: number[]): number[] {

}
