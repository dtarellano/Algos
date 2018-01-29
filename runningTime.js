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
