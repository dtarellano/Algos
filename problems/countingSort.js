function countingSort(arr) {
	// Complete this function
	let results = new Array(100).fill(0);
	for (let i = 0; i < arr.length; i++) {
		if (results[arr[i]] === undefined) {
			results[arr[i]] = 1;
		} else {
			results[arr[i]]++;
		}
	}
	return results;
}

console.log(countingSort([1, 2, 3, 4, 4, 5, 5, 6, 6]));
