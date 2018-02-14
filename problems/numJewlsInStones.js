var numJewelsInStones = function(J, S) {
	let check = {};
	let count = 0;
	for (let i = 0; i < J.length; i++) {
		check[J[i]] = true;
	}

	for (let j = 0; j < S.length; j++) {
		if (check[S[j]]) {
			count++;
		}
	}
	return count;
};
