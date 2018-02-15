// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	let note = {};
	let magazines = {};
	let results = true;

	for (let i = 0; i < ransomNote.length; i++) {
		if (!note[ransomNote[i]]) {
			note[ransomNote[i]] = 1;
		} else {
			note[ransomNote[i]]++;
		}
	}
	for (let i = 0; i < magazine.length; i++) {
		if (!magazines[magazine[i]]) {
			magazines[magazine[i]] = 1;
		} else {
			magazines[magazine[i]]++;
		}
	}
	for (let key in note) {
		if (!magazines[key]) {
			results = false;
			return results;
		}
		if (note[key] > magazines[key]) {
			results = false;
			return results;
		}
	}
	console.log(note, magazines);
	return results;
};
