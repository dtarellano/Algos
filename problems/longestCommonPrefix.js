/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let longest = '';

	if (strs.length === 0) {
		console.log('hi');
		return '';
	}
	if (strs.length === 1) {
		return strs[0];
	}
	let recurse = index => {
		let temp = strs[0][index];
		let isTrue = false;
		if (temp === undefined) {
			return;
		}

		for (let i = 0; i < strs.length; i++) {
			if (strs[i][index] === temp) {
				isTrue = true;
			} else {
				return;
			}
		}
		if (isTrue) {
			longest += temp;
		}
		recurse(index + 1);
	};
	recurse(0);
	console.log('the answer', longests);
	return longest;
};

console.log(longestCommonPrefix([]));
