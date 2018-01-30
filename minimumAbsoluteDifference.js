function minimumAbsoluteDifference(n, arr) {
	// Complete this function
	let min;
	let recurse = index => {
		let check = arr[index];

		if (arr[index] === undefined) {
			return;
		}

		for (let i = index + 1; i < arr.length; i++) {
			if (min === undefined) {
				min = Math.abs(check - arr[i]);
			} else if (min > Math.abs(check - arr[i])) {
				min = Math.abs(check - arr[i]);
			}
		}
		recurse(index + 1);
	};
	recurse(0);
	return min;
}
