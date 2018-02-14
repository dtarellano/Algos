function marcsCakewalk(calorie) {
	// Complete this function
	let miles = 0;
	let eaten = 0;
	let n = calorie.sort((a, b) => b - a);
	for (let i of n) {
		miles = miles + i * Math.pow(2, eaten);
		eaten++;
	}
	return miles;
}

console.log(marcsCakewalk([1, 3, 2]));
