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

	if (longestWords.length > 1) {
		return 'The longest words are: ' + longestWords + ' and are ' +
		longestWords[0].length + ' characters long.';
	} else {
		return 'The longest word is: ' + longestWords + ' and is ' +
		longestWords[0].length + ' characters long.';
	}

}

var para = document.querySelector('p');
// para.innerHTML = longestWord('Test sentence once again');
