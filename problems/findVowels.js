// We want to know the index of the vowels in a given word, for example, there
// are two vowels in the word super (the second and fourth letters).

function vowelIndices(word) {
	let results = [];

	for (let i = 0; i < word.length; i++) {
		if (word[i].toLowerCase() === 'a') {
			results.push(i + 1);
			continue;
		}
		if (word[i].toLowerCase() === 'e') {
			results.push(i + 1);
			continue;
		}
		if (word[i].toLowerCase() === 'i') {
			results.push(i + 1);
			continue;
		}
		if (word[i].toLowerCase() === 'o') {
			results.push(i + 1);
			continue;
		}
		if (word[i].toLowerCase() === 'u') {
			results.push(i + 1);
			continue;
		}
		if (word[i].toLowerCase() === 'y') {
			results.push(i + 1);
			continue;
		}
	}
	return results;
}
