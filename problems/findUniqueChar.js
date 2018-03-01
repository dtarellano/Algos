// Given a string, find the first non-repeating character in it and return it's
//  index. If it doesn't exist, return -1.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let store = {};
	for (let i = 0; i < s.length; i++) {
		if (!store[s[i]]) {
			store[s[i]] = {
				count: 1,
				index: i
			};
		} else {
			store[s[i]].count++;
		}
	}
	for (let key in store) {
		if (store[key].count < 2) {
			return store[key].index;
		}
	}
	return -1;
};
