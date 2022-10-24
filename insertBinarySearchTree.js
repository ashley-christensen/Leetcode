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
 let current = root;
 while (current) {
  if (current.val > val) {
   if (current.left === null) {
    current.left = node;
   }
   current = current.left;
  }
  if (current.val < val) {
   if (current.right === null) {
    current.right = node;
   }
   current = current.right;
  }
 }
};