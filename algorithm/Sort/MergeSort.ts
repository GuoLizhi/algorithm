/**
 * @author lizhi.guo@foxmail.com
 * @source 归并排序
 * @time   2019-12-22
 *
 * Time Complexity O(nlogn)
 * Space Complexity O(n)
 */
// 将arr[left...mid]和arr[mid+1...right]两部分进行归并
function __merge(arr: number[], left: number, mid: number, right: number): number[] {
  let aux: number[] = [];
  for (let i = left; i <= right; i++) {
    aux[i - left] = arr[i];
  }
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = aux[j - left];
      j++
    } else if (j > right) {
      arr[k] = aux[i - left];
      i++
    } else if (aux[i - left] < aux[j - left]) {
      arr[k] = aux[i - left];
      i++;
    } else {
      arr[k] = aux[j - left];
      j++;
    }
  }
  return arr;
}

// 递归使用归并排序，对arr[left...right]范围进行排序
function __mergeSort(arr: number[], left: number, right: number): number[] {
  if (left >= right) {
    return;
  }
  let mid = Math.floor(left + (right - left) / 2);
  __mergeSort(arr, left, mid);
  __mergeSort(arr, mid + 1, right);
  // 处理近乎有序的数组
  if (arr[mid] > arr[mid + 1]) {
    return __merge(arr, left, mid, right);
  } else {
    return arr;
  }
}

function mergeSort(arr: number[]): number[] {
  return __mergeSort(arr, 0, arr.length - 1);
}


