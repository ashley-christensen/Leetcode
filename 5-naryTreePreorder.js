var preorder = function (root) {
 let data = [];

 function traverse(root) {
  if (!root) return data;
  data.push(root.val);
  root.children?.forEach(el => traverse(el));
  return data;
 }
 return traverse(root);
};