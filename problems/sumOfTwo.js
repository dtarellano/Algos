// You have two integer arrays, a and b, and an integer target value v.
// Determine whether there is a pair of numbers, where one number is taken from
// a and the other from b, that can be added together to get a sum of v. Return
// true if such a pair exists, otherwise return false.
//
function sumOfTwo(a, b, v) {
	for (let num of a) {
		for (let num2 of b) {
			if (num + num2 === v) {
				return true;
			}
		}
	}
	return false;
}
