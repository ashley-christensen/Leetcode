/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
 let node = new TreeNode(val);
 if (!root) return node;

 let cur = root;
 let prev = null;
 while (cur) {
  if (val > cur.val) {
   prev = cur;
   cur = cur.right;
  } else {
   prev = cur;
   cur = cur.left;
  }
 }

 if (val < prev.val) prev.left = node;
 else prev.right = node;

 return root;
};

//Time: Log n if Tree is balanced (go to heigh of tree in worst case), if not balanced can be linear time
//Space: O(1)