function sherlock(n) {
	let results = '';
	let count = 0;
	let five = '555';
	let three = '33333';
	if (n < 3) {
		return -1;
	}
	let checkFives = num => {
		let fives = num;
		for (let i = fives; i >= 0; i -= 5) {
			if (i % 3 === 0) {
				return i;
			}
			count++;
		}
		return -1;
	};
	let fives = checkFives(n);
	//console.log('function: ', checkFives(n));
	if (fives === -1) {
		return -1;
	} else {
		results = new Array(fives + 1).join('5') + new Array(count + 1).join('333');
	}
	return Number(results);
}

console.log(sherlock(14));
