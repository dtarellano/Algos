// You need to find the largest value in each row of a binary tree.
//
var largestValues = function(root) {
  const results = [];

  const recurse = (node, level) => {
    if (!node) {
      return;
    }
    if (results[level] === undefined) {
      results[level] = node.val;
    } else {
      results[level] = Math.max(results[level], node.val);
    }
    recurse(node.left, level + 1);
    recurse(node.right, level + 1);
  };
  recurse(root, 0);
  return results;
};
