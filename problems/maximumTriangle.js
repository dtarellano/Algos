function maximumPerimeterTriangle(l) {
	// Complete this function
	if (l.length <= 3) {
		return [-1];
	}
	let sorted = l.sort((a, b) => b - a);

	let invalidTriangle = (a, b, c) => {
		if (a + b <= c) return true;
		if (a + c <= b) return true;
		if (b + c <= a) return true;
		return false;
	};

	for (let i = 0; i < sorted.length - 2; i++) {
		if (!invalidTriangle(sorted[i], sorted[i + 1], sorted[i + 2])) {
			return [sorted[i + 2], sorted[i + 1], sorted[i]];
		}
	}
	return [-1];
}
