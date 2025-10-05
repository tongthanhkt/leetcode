/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let base = strs[0];
    let result = ''
    for (let i = 0; i < base.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i < strs[j].length && base[i] === strs[j][i]) continue;
            else return result;
        }
        result += base[i];
    }
    return result;
};
// @lc code=end

