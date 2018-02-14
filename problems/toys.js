function toys(w) {
	// Complete this function
	let sorted = w.sort((a, b) => a - b);
	let current = sorted[0];
	let count = 1;
	console.log(sorted);
	for (let i = 1; i < w.length; i++) {
		if (current + 4 < sorted[i]) {
			count++;
			current = sorted[i];
		}
	}
	return count;
}

console.log(toys([16, 18, 10, 13, 2, 9, 17, 17, 0, 19]));
