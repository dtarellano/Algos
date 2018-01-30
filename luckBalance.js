function luckBalance(n, k, contests) {
	// Complete this function
	let maxLuck = 0;
	let important = contests.filter(value => value[1] === 1);
	let unimportant = contests.filter(value => value[1] === 0);
	let sortedImportant = important.sort((a, b) => a[0] - b[0]);
	let mustWin = sortedImportant.length - k;
	let wins = sortedImportant.splice(0, mustWin);

	let sumOfImportant = important.reduce(
		(store, value) => (store += value[0]),
		0
	);
	let sumOfUnimportant = unimportant.reduce(
		(store, value) => (store += value[0]),
		0
	);
	let sumOfWins = wins.reduce((store, value) => (store += value[0]), 0);

	return sumOfImportant + sumOfUnimportant - sumOfWins;
}
