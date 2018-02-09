/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	let directions = moves.split('');
	let results = true;
	let check = {
		U: 0,
		D: 0,
		L: 0,
		R: 0
	};
	for (let i = 0; i < directions.length; i++) {
		check[directions[i]]++;
	}
	if (check['U'] !== check['D']) {
		results = false;
	}
	if (check['L'] !== check['R']) {
		results = false;
	}

	return results;
};
