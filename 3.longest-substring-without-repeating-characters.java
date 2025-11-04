/*
 * @lc app=leetcode id=3 lang=java
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int left = 0, right = 0, max = 0;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
       while(right < s.length()) {
        char c = s.charAt(right);
        if(map.containsKey(c) && map.get(c) >= left) {
            left = map.get(c) + 1;
        }
        map.put(c,right);
        max = Math.max(max, right -left + 1);
        right++;
       }
        return max;
    }
}
// @lc code=end

