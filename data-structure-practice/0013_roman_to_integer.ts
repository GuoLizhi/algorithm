/**
 * 将罗马数字转化成整数
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
var romanToInt = function(s: string) {
  let map = {
    I : 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let ans: number = 0;
  for (let i = 0; i < s.length;) {
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      ans += map[s.substring(i, i + 2)];
      i += 2;
    } else {
      ans += map[s.substring(i, i + 1)];
      i += 1
    }
  }

  return ans;
};
