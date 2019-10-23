/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]/, '').toLowerCase()
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
