/*
* find longest word in a sentence
*/
function longestWord(str) {

	// filter array for alpha numeric characters only
	const words = str.toLowerCase().match(/[a-z0-9]+/g);

	// sort words by length
	const sorted = words.sort((a,b) => {
		return b.length - a.length;
	});

	// return one or more words with most characters
	const longestWords = sorted.filter((word) => {
		return word.length === sorted[0].length;
	});

	return longestWords;
}

