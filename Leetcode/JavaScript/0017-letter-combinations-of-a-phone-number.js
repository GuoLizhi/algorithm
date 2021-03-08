/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length
  if (len === 0) return []
  // 构建digits对应的字母数组
  const map = genDigitalMap()
  const digitsArr = []
  for (let i = 0; i < len; i++) {
    digitsArr.push(map.get(digits[i]))
  }
  
  const result = []

  // 回溯算法
  var backTrack = function (currIndex, currStr) {
    // 回溯终止条件
    if (currStr.length === len) {
      result.push(currStr)
      return
    }

    const letters = map.get(digits[currIndex])
    for (let i = 0; i < letters.length; i++) {
      // 因为String本身的不可变行，因此这里无需回溯的操作
      backTrack(currIndex + 1, currStr + letters[i])
    }
  }

  backTrack(0, '')

  return result
}

function genDigitalMap () {
  const map = new Map()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')
  return map
}

console.log(letterCombinations('23'))