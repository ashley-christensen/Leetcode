//reverse next pointers to prev
//set first var to prev, set to null
//set head property to prev with value of null
//move to each successsive node and assign next to node from before
//tail will be head, return it

function reverseLL(head) {
 let prev = null;
 let next = null;

 while (head !== null) {
  next = head.next; //store initial node after head
  head.next = prev;
  //prev and next both move fowared
  prev = head;
  head = next;
 }
 return prev;
}