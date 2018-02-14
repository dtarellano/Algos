// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	let len = needle.length;

	if (needle.length === 0) {
		return 0;
	}
	if (haystack.length === 0 && needle.length === 0) {
		return 0;
	}
	for (let i = 0; i < haystack.length; i++) {
		if (haystack.substr(i, len) === needle) {
			return i;
		}
	}

	return -1;
};
