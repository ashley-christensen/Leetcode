var detectCycle = function (head) {
 if (!head) return null;
 if (!head.next) return null;
 let slow = head;
 let fast = head;
 let pointer = head;

 while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;

  if (slow === fast) break;
 }
 if (slow !== fast) return null;

 while (pointer !== slow) {
  pointer = pointer.next;
  slow = slow.next;
 }
 return slow;

};