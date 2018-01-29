function plusMinus(arr) {
	let positive = 0;
	let negative = 0;
	let zero = 0;
	let n = arr.length;
	for (let i = 0; i < arr.length; i++) {
		if (Math.sign(arr[i]) === 1) {
			positive++;
		}
		if (Math.sign(arr[i]) === -1) {
			negative++;
		}

		if (arr[i] === 0) {
			zero++;
		}
	}
	return [positive / n, negative / n, zero / n];
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
