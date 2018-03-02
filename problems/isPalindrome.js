/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let filter = s.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
	let reverse = filter
		.split('')
		.reverse()
		.join('');

	if (filter === reverse) {
		return true;
	}
	return false;
};
