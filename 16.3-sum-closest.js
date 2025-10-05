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
    nums.sort((a, b) => a - b);
    console.log(nums)
    let nearest = Infinity;
    let maxSum = -10000;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            distance = Math.abs(sum - target);

            if (distance < nearest) {
                nearest = distance;
                maxSum = sum;
            }
            if (sum < target) left++;
            else if (sum > target) right--;
            else return sum;
        }
    }
    return maxSum;
};
// @lc code=end

// -4 -1 1 2
//1  