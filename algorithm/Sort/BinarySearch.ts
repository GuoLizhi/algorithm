/**
 * @author lizhi.guo@foxmail.com
 * @source 二分搜索法
 * @time   2019-10-26
 *
 * Time Complexity O(logN)
 * Space Complexity O(1)
 */
function binarySearch (arr: number[], target: number): number {
  let l = 0
  let r = arr.length - 1 // 在[l...r]的范围里寻找target

  while (l <= r) { // 当l === r时，[l...r]仍然是有效的
    let mid = Math.floor(l + (r - l) / 2)  // 避免整型相加时溢出
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      r = mid - 1 // target在[l...mid-1]中
    } else {
      l = mid + 1 // target在[mid+1...l]中
    }
  }

  return -1
}

