/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s: string): number {
  let end = s.length - 1;
  while(s.charAt(end) === ' ' && end >= 0) {
    end--;
  }
  if (end < 0) return 0;

  let count: number = 0;

  while (s.charAt(end) !== ' ' && end >= 0) {
    end--;
    count++;
  }

  return count;
};
