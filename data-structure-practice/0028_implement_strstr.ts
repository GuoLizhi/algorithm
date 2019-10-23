/**
 * 实现strStr()
 * @param haystack
 * @param needle
 */
var strStr = function(haystack: string, needle: string): number {
  if (needle === '') return -1;
  for (let i = 0; i < haystack.length; i++) {
    // @ts-ignore
    if (haystack.substring(i).startsWith(needle)) {
      return i;
    }
  }
  return -1;
};
