/**
 * 有效的括号
 * @param s
 */
var isValid = function(s: string): boolean {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (s.length === 0) {
        return false;
      }

      if (s[i] === ')' && stack.pop() !== '(') {
        return false;
      } else if (s[i] === ']' && stack.pop() !== '[') {
        return false;
      } else if (s[i] === '}' && stack.pop() !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};
