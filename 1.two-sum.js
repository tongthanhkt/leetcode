/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
    Hash Table
    - Time complexity: O(n) Travel list n element exactly twice
    - Space complexity: O(n) Store in hash table
*/
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement) && i != map.get(complement))
//       return [i, map.get(complement)];
//   }
// };

var twoSum = function (nums, target) {
  let numObj = {};
  const numsWithIndices = nums.map(
    (value, index) => (value = { value, index })
  );
  numsWithIndices.sort((a, b) => a.value - b.value);
  let left = 0,
    right = numsWithIndices.length - 1;
  while (left < right) {
    let sum = numsWithIndices[left].value + numsWithIndices[right].value;
    if (sum > target) right--;
    else if (sum < target) left++;
    else {
      return [numsWithIndices[left].index, numsWithIndices[right].index];
    }
  }
  return [];
};
// let nums = [2, 7, 11, 15];
// let target = 9;
// twoSum(nums, target);
// @lc code=end
