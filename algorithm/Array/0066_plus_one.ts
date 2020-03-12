/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/plus-one/
 * @time   2019-12-23
 * 思路：使用while循环从数组的末尾开始循环，最后需要判断一下数组的首位是否为0
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
export default function plusOne (digits: number[]): number[] {
  let start = digits.length - 1
  while (start >= 0) {
    if (digits[start] + 1 < 10) {
      digits[start] += 1
      return digits
    } else {
      digits[start] = (digits[start] + 1) % 10
      start--
    }
  }

  if (digits[0] === 0) {
    return [1, ...digits]
  } else {
    return digits
  }
}
