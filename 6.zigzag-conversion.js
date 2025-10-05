/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 0 || numRows == 1) return s;
    let current = 0;
    let goingDown = false;
    let result = Array.from({ length: numRows }, () => []);
    for (let i = 0; i < s.length; i++) {
        if (current === 0 || current === numRows - 1) {
            goingDown = !goingDown;
        }

        result[current].push(s[i]);
        if (goingDown) current++;
        else current--;
    }
    return result.flat().join("");
};
// @lc code=end

