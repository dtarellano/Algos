// Minimal Tree: Given a sorted (increasing order) array with unique integer
// elements, write an algorithm to create a binary search tree with minimal
// height.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const minimalTree = (arr, begin, end) => {
  if (end < begin) {
    return null;
  }
  let mid = Math.floor((begin + end) / 2);
  console.log(mid, arr[mid])

  let tree = new TreeNode(arr[mid])
  tree.left = minimalTree(arr, begin, mid - 1)
  tree.right = minimalTree(arr, mid + 1, end)

  return tree;
}

console.log(minimalTree(array, 0, array.length - 1))
