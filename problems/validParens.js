var isValid = function(s) {
	let pairs = {
		'(': ')',
		'{': '}',
		'[': ']'
	};
	let check = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] in pairs) {
			check.push(s[i]);
		} else {
			let current = check.pop();
			if (pairs[current] !== s[i]) {
				return false;
			}
		}
	}
	return check.length === 0;
};
