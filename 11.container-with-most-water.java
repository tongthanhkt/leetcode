/*
 * @lc app=leetcode id=11 lang=java
 *
 * [11] Container With Most Water
 */

// @lc code=start
class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1, max = 0;
        while (left < right) {
            int minHeight = height[left] < height[right] ? height[left] : height[right];
            int maxArea = minHeight * (right - left);
            max = Math.max(max, maxArea);
            if (height[left] < height[right])
                left++;
            else
                right--;
        }
        return max;
    }
}
// @lc code=end
