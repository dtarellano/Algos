var findTheDifference = function(s, t) {
	let check = {};
	for (let i = 0; i < s.length; i++) {
		if (check[s[i]] === undefined) {
			check[s[i]] = 1;
		} else {
			check[s[i]]++;
		}
	}
	for (let j = 0; j < t.length; j++) {
		if (!check[t[j]]) {
			return t[j];
		} else {
			check[t[j]]--;
		}
	}
};
