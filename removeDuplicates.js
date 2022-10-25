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
//create prev set to -Infinity before head
//keep incrementing curr until prev and curr have different values, set prev.next to new current, space complexity is constant O(1)
var deleteDuplicates = function (head) {
 let dummy = new ListNode(-Infinity, head);
 let curr = head;
 let prev = dummy;

 while (curr) {
  if (curr.val === prev.val) {
   while (curr && curr.val === prev.val) {
    curr = curr.next;
   }
   prev.next = curr; //remove all duplicates in while loop
  } else {
   prev = curr;
   curr = curr.next;
  }
 }
 return dummy.next;
}

}