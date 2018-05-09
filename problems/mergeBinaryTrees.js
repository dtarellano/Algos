// Given two binary trees and imagine that when you put one of them to cover
// the other, some nodes of the two trees are overlapped while the others are not.

var mergeTrees = function(t1, t2) {
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t1.val = t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
