// Given a string S and a character C, return an array of integers representing
// the shortest distance from the character C in the string.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	const output = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === C) {
			output[i] = 0;
			for (let j = i - 1; j > 0; j--) {
				let count = 1;
				if (output[j] === 0) {
					return;
				}
				output[j] = count;
				count++;
			}
		}
	}
	return output;
};
