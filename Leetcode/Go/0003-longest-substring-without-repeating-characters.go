package leetcode

import "math"

/*
	算法：滑动窗口，hashMap
	时间复杂度O(n)
	空间复杂度O(1)，因为总共26个字母，只需要占用常数空间
*/
func lengthOfLongestSubstring(s string) int {
	// 边界条件判断
	if len(s) == 0 {
		return 0
	}
	hash := make(map[string]int)
	// 定义一个滑动窗口，[start, end]
	start, result := 0, 0
	for end, val := range s {
		// 判断当前map中是否含有此时遍历到的字符串
		// 如果有，那说明已经要包含重复元素了，那就应该移动左边界，到之前那个重复元素的后面一个位置
		if pos, isExist := hash[string(val)]; isExist {
			start = int(math.Max(
				float64(start),
				float64(pos+1)))
		}
		hash[string(val)] = end
		// 由于[start,end]是闭区间，因此计算窗口长度时，应该是end-start+1
		result = int(math.Max(
			float64(result),
			float64(end-start+1)))
	}
	return result
}
