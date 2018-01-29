// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
// 	let longest = '';
//
// 	if (strs.length === 0) {
// 		console.log('hi');
// 		return '';
// 	}
// 	if (strs.length === 1) {
// 		return strs[0];
// 	}
// 	let recurse = index => {
// 		let temp = strs[0][index];
// 		let isTrue = false;
// 		if (temp === undefined) {
// 			return;
// 		}
//
// 		for (let i = 0; i < strs.length; i++) {
// 			if (strs[i][index] === temp) {
// 				isTrue = true;
// 			} else {
// 				return;
// 			}
// 		}
// 		if (isTrue) {
// 			longest += temp;
// 		}
// 		recurse(index + 1);
// 	};
// 	recurse(0);
// 	console.log('the answer', longests);
// 	return longest;
// };
//
// console.log(longestCommonPrefix([]));
// function plusMinus(arr) {
// 	let positive = 0;
// 	let negative = 0;
// 	let zero = 0;
// 	let n = arr.length;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Math.sign(arr[i]) === 1) {
// 			positive++;
// 		}
// 		if (Math.sign(arr[i]) === -1) {
// 			negative++;
// 		}
//
// 		if (arr[i] === 0) {
// 			zero++;
// 		}
// 	}
// 	return [positive / n, negative / n, zero / n];
// }
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

function runningTime(arr) {
	// Complete this function
	let count = 0;
	let recurse = arr => {
		let isSorted = true;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				count++;
				isSorted = false;
			}
		}
		if ((isSorted = true)) {
			return;
		}
		recurse(arr);
	};
	recurse(arr);

	return count;
}

console.log(runningTime([2, 1, 3, 1, 2]));
