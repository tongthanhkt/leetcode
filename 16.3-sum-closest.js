/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let minDistance = 100000;
  let result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let distance = Math.abs(sum - target);
      if (distance < minDistance) {
        minDistance = distance;
        result = sum;
      }
      if (sum < target) left++;
      else if (sum > target) right--;
      else return target;
    }
  }
  return result;
};
threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5]);
// @lc code=end
