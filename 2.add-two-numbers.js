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
  let run1 = l1,
    run2 = l2;
  let head = new ListNode(0);
  let run = head;
  let lastAddition = 0;
  while (run1 != null && run2 != null) {
    if (run1 != null && run2 != null) {
      let digit;
      let sum = run1.val + run2.val + lastAddition;
      digit = sum % 10;
      if (sum >= 10) {
        lastAddition = 1;
      } else lastAddition = 0;

      let newNode = new ListNode(digit);
      run.next = newNode;
      run = run.next;
    }
    run1 = run1.next;
    run2 = run2.next;
    if (run1 == null && run2 != null) run1 = new ListNode(0);
    if (run2 == null && run1 != null) run2 = new ListNode(0);
  }
  if (lastAddition) run.next = new ListNode(1);
  return head.next;
};
// @lc code=end
