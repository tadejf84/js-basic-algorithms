function longestWord(str) {

	// createe array of words with split method
	var words = str.split(' ');
	var maxLetterCount = 0;
	var longestWord = '';

	// loop throught the array of words
	for (var i=0; i < words.length; i++) {

		if(words[i].length > maxLetterCount) {
			maxLetterCount = words[i].length;
			longestWord = words[i].toUpperCase();
		}
	}
	return longestWord + ' is the longest word and is ' + maxLetterCount + ' characters long.' ;
}

var para = document.querySelector('p');

// para.innerHTML = longestWord('Test sentence once again');
