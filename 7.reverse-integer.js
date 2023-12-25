/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function isSigned32BitInteger(num) {
  // Using the bitwise OR operator to convert to a 32-bit signed integer
  num = num | 0;

  // Checking if the original number is the same as the 32-bit representation
  return num === num;
}
var reverse = function (x) {
  let bit = Math.pow(2, 31) - 1;
  let isPositive = x >= 0 ? true : false;
  x = Math.abs(x);
  let str = x.toString();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result > bit) return 0;
  result = isPositive ? parseInt(result) : -parseInt(result);
  return result;
};
reverse(-2147483648);
// @lc code=end
