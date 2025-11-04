/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        boolean possitive = true;
        if (x < 0) {
            possitive = false;
            x = -x;
        }
        int result = 0;
        while (x > 0) {
            int digit = x % 10;
            x = x / 10;
            if (result > Integer.MAX_VALUE / 10 ||
                    (result == Integer.MAX_VALUE / 10 && digit > 7))
                return 0;
            if (result < Integer.MIN_VALUE / 10 ||
                    (result == Integer.MIN_VALUE / 10 && digit < -8))
                return 0;
            result = result * 10 + digit;
        }
        return possitive ? result : -result;
    }
}
// @lc code=end
