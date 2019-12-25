// 对arr[l...r]部分进行快速排序
function QuickSort(arr: number[]): number[] {
  return __quickSort(arr, 0, arr.length-1);
}

// 对arr[l...r]进行快速排序
function __quickSort(arr: number[], l: number, r: number): number[] {
  if (l >= r) {
    return;
  }
  let p = __partition(arr, l, r);
  __quickSort(arr, l, p-1);
  __quickSort(arr, p+1, r);
  return arr;
}

// 对arr[l...r]部分进行partition操作
// 返回p,使得arr[l...p-1]<arr[p]; arr[p+1...r]>arr[p];
function __partition(arr: number[], l: number, r: number): number {
  let v = arr[l];
  let j = l;

  // arr[l+1...j] < v;
  // arr[j+1...i) > v;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[i], arr[j+1]] = [arr[j+1], arr[i]];
      j++;
    }
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}

