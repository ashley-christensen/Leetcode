/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
 let curr = head;
 let prev = head;

 while (curr) {
  if (prev === curr) removeNode(curr);
  prev = curr;
  curr = curr.next;
 }
};

function removeNode(node) {
 function get(idx) {
  let count = 0;
  let curr = this.head;
  while (idx !== count) {
   curr = curr.next;
   count++;
  }
  return current;
 }
 let prev = get(idx - 1);
 let curr = prev.next;
 prev.next = curr.next;
 curr.next = null;
}