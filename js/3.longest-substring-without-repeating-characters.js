/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0, max = 0;
    let map = new Map();

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end]) && map.get(s[end]) >= start) {
            start = map.get(s[end]) + 1;
        }
        map.set(s[end], end);
        max = Math.max(max, end - start + 1);
    }
    return max;
};
// @lc code=end

