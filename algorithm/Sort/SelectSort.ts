/**
 * @author lizhi.guo@foxmail.com
 * @source 选择排序法
 * @time   2019-12-22
 * 思想：每次循环找出最小值，放在最前面
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 */
function selectSort(arr: number[]): number[] {

  for (let i = 0; i < arr.length; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
