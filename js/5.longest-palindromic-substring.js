/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLength = 0;
    let maxString = "";
    function isPalindromic(start, end) {
        while (start >= 0 && end < s.length) {
            if (s[start] !== s[end]) break;
            else {
                if (end - start + 1 >= maxLength) {
                    maxLength = end - start + 1;
                    maxString = s.slice(start, end + 1);
                }
                start--;
                end++;
            }
        }
    }
    for (let i = 0; i < s.length; i++) {
        isPalindromic(i, i);
        isPalindromic(i, i + 1);
    }
    return maxString;

};
// @lc code=end

