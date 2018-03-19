// We are given two strings, A and B.
//
// A shift on A consists of taking string A and moving the leftmost character
// to the rightmost position. For example, if A = 'abcde', then it will be
// 'bcdea' after one shift on A. Return True if and only if A can become B
// after some number of shifts on A.

var rotateString = function(A, B) {
	let shifter = A.split('');

	if (!A.length && !B.length) {
		return true;
	}
	for (let i = 0; i < shifter.length; i++) {
		let temp = shifter.splice(0, 1);

		shifter.push(temp);

		if (shifter.join('') === B) {
			return true;
		}
	}
	return false;
};
