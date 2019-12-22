/**
 * @author lizhi.guo@foxmail.com
 * @source 插入排序法
 * @time   2019-12-22
 * 思想：假定数组的第一个元素是有序的，然后依次拿后面的元素与前面的元素相比较
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 */
function insertSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

/**
 * @author lizhi.guo@foxmail.com
 * @source 插入排序法-优化
 * @time   2019-12-22
 * 思想：相比于最初的插入排序法，这里不再是每次与前一个元素比较时都会交换位置，而是记住应该插入的位置，在循环结束后，赋值给应该插入的位置
 * 在近乎有序的数组中排序较快
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 */
function insertSort2(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {

    let e = arr[i];
    let j;
    for (j = i; j > 0; j--) {
      if (arr[j-1] > e) {
        arr[j] = arr[j-1];
      } else {
        break;
      }
    }
    arr[j] = e;
  }
  return arr;
}
