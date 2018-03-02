// return the length of the last word in a list of words
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	if (!s.length || s === ' ') {
		return 0;
	}

	let words = s.split(' ').filter(val => {
		return val.length;
	});
	if (words.length === 0) {
		return 0;
	}
	return words[words.length - 1].length;
};
