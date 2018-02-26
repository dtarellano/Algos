// Write a program that outputs the string representation of numbers from
// 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and
//  for the multiples of five output “Buzz”. For numbers which are multiples of
//   both three and five output “FizzBuzz”.
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let results = [];
	for (let i = 1; i <= n; i++) {
		console.log(i);
		if (i % 3 === 0 && i % 5 === 0) {
			results.push('FizzBuzz');
		} else if (i % 5 === 0) {
			results.push('Buzz');
		} else if (i % 3 === 0) {
			results.push('Fizz');
		} else {
			results.push(i.toString());
		}
	}
	return results;
};
