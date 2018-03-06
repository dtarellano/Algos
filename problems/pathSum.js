// Given a binary tree and a sum, determine if the tree has a root-to-leaf path
// such that adding up all the values along the path equals the given sum.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var hasPathSum = function(root, sum) {
	let results = false;
	if (root == null) {
		return false;
	}
	const recurse = (node, currentSum) => {
		let state = currentSum || 0;
		state += node.val;
		if (!node.left && !node.right) {
			if (state == sum) {
				results = true;
			}
		}
		if (node.left) {
			recurse(node.left, state);
		}
		if (node.right) {
			recurse(node.right, state);
		}
	};
	recurse(root);
	return results;
};
