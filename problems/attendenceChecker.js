// You are given a string representing an attendance record for a student. The
// record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more
// than one 'A' (absent) or more than two continuous 'L' (late).
//
// You need to return whether the student could be rewarded according to his
// attendance record.

var checkRecord = function(s) {
	let absence = 0;
	let tardies = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'A') {
			absence++;
			if (absence > 1) {
				return false;
			}
		}
		if (s[i] === 'L' && tardies === 0) {
			tardies++;
		}
		if (s[i] === 'L' && s[i - 1] === 'L') {
			tardies++;
			if (tardies > 2) {
				return false;
			}
		}
		if (s[i] !== 'L' && s[i - 1] === 'L') {
			tardies = 0;
		}
	}
	return true;
};
