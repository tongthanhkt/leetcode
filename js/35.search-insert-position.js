/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  if (target <= nums[0]) return 0;
  else if (target > nums[0] && nums.length == 1) return 1;
  else if (target > nums[nums.length - 1]) return nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid == left) return mid + 1;
    if (target < nums[mid]) right = mid;
    else if (target > nums[mid]) left = mid;
    else return mid;
  }
};
/*
- left = 0 right = 3 mid = 1
    left = 0 right = 1 mid = 0

*/
// @lc code=end
