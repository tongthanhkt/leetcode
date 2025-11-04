/*
 * @lc app=leetcode id=5 lang=java
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        int start =0, end = 0;
        for(int i = 0; i< s.length(); i++) {
           int len1 = expandFromCenter(s, i, i+1);
           int len2 = expandFromCenter(s, i, i);
           int maxLen = Math.max(len1, len2);
           if(maxLen > end - start) {
            start = i - (maxLen - 1) / 2 ;
            end = i + maxLen / 2;
           }
        }
        return s.substring(start, end + 1);
    }
    
    private int expandFromCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        // -1 3
        return right - left - 1;
    }
}
// @lc code=end

