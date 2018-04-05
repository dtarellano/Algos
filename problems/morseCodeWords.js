// Now, given a list of words, each word can be written as a concatenation of
// the Morse code of each letter. For example, "cab" can be written as
// "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll
// call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.
var uniqueMorseRepresentations = function(words) {
	const code = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..'
	];
	const characters = {
		a: 0,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
		g: 6,
		h: 7,
		i: 8,
		j: 9,
		k: 10,
		l: 11,
		m: 12,
		n: 13,
		o: 14,
		p: 15,
		q: 16,
		r: 17,
		s: 18,
		t: 19,
		u: 20,
		v: 21,
		w: 22,
		x: 23,
		y: 24,
		z: 25
	};
	let store = {};
	let count = 0;
	for (let word of words) {
		let morse = '';
		for (let i = 0; i < word.length; i++) {
			morse += code[characters[word[i]]];
			if (i === word.length - 1) {
				if (!store[morse]) {
					store[morse] = true;
					count++;
				}
			}
		}
	}
	return count;
};
