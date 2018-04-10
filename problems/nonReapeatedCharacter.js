/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	let arr = string.split('');
	let n = 1;
	let results;
	let recurse = next => {
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			if (next === arr[i]) {
				count++;
			}
		}
		if (count === 1) {
			results = next;
			return;
		}
		if (n === arr.length - 1) {
			results = null;
			return;
		}
		n += 1;
		recurse(arr[n]);
	};
	recurse(arr[n]);
	return results;
};

console.log(firstNonRepeatedCharacter('AACCBDDB'));
