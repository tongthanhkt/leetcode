/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement: number = target - nums[i];
        if (numMap.has(complement) && numMap.get(complement) !== i) {
            return [numMap.get(complement)!, i];
        } else numMap.set(nums[i], i);
    }
    return [];
};
// @lc code=end

