// find the some of all left nodes in binary tree;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftNodes = function(root) {
	let sum = 0;
	if (!root) {
		return sum;
	}
	let recurse = (node, isLeft) => {
		if (isLeft) {
			sum += node.val;
		}
		if (node.left) {
			recurse(node.left, true);
		}
		if (node.right) {
			recurse(node.right);
		} else {
			return;
		}
	};
	recurse(root);
	return sum;
};
