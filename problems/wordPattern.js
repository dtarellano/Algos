// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a
// letter in pattern and a non-empty word in str.
var wordPattern = function(pattern, str) {
	let decode = {};
	let mapped = {};
	const words = str.split(' ');

	if (pattern.length !== words.length) {
		return false;
	}
	for (let i = 0; i < pattern.length; i++) {
		if (!decode[pattern[i]] && !mapped[words[i]]) {
			decode[pattern[i]] = words[i];
			mapped[words[i]] = true;
		} else if (decode[pattern[i]] !== words[i]) {
			return false;
		}
		console.log(decode);
	}
	return true;
};
