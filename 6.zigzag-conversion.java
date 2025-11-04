/*
 * @lc app=leetcode id=6 lang=java
 *
 * [6] Zigzag Conversion
 */

// @lc code=start

import java.util.ArrayList;

class Solution {
    public String convert(String s, int numRows) {
        if(numRows == 1) return s;
        ArrayList<ArrayList<Character>> matrix = new ArrayList<>(10);
        int row = 0;
        boolean decrease = false;
        for(int i = 0; i < numRows; i++) {
            matrix.add(new ArrayList<>());
        }
        for(int i = 0; i < s.length(); i++) {
            matrix.get(row).add(s.charAt(i));
            if(row == 0 || row == numRows - 1) {
                decrease = !decrease;
            }
            if(decrease) row++;
            else row--;
        }
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < numRows; i++) {
            for(int j = 0; j < matrix.get(i).size(); j++) {
                sb.append(matrix.get(i).get(j));
            }
        }
        return sb.toString();
    }
}
// public String convert(String s, int numRows) {
//     if (numRows == 1 || s.length() <= numRows) return s;

//     StringBuilder[] rows = new StringBuilder[numRows];
//     for (int i = 0; i < numRows; i++) {
//         rows[i] = new StringBuilder();
//     }

//     int currentRow = 0;
//     boolean goingDown = false;

//     for (char c : s.toCharArray()) {
//         rows[currentRow].append(c);

//         // Chuyển hướng khi đạt hàng đầu tiên hoặc cuối cùng
//         if (currentRow == 0 || currentRow == numRows - 1) {
//             goingDown = !goingDown;
//         }

//         currentRow += goingDown ? 1 : -1;
//     }

//     // Ghép tất cả các hàng lại
//     StringBuilder result = new StringBuilder();
//     for (StringBuilder row : rows) {
//         result.append(row);
//     }

//     return result.toString();
// }

// @lc code=end

