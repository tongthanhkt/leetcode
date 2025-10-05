/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0);
    let currentNode = head;
    let bonus = 0, strNum = "";
    while (l1 !== null || l2 !== null) {
        let digit = bonus;
        if (l1 !== null) {
            digit += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            digit += l2.val;
            l2 = l2.next;
        }
        if (digit >= 10) {
            digit = digit % 10;
            bonus = 1;
        } else bonus = 0;
        let newNode = new ListNode(digit);
        currentNode.next = newNode;
        currentNode = newNode;
    }
    if (bonus === 1) currentNode.next = new ListNode(1);
    return head.next;
};
// @lc code=end

