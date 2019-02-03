/*
* shuffle words in sentence
*/
function wordShuffle(str) {
  let wordShuffle = []
      words = [];

  // split string into words array
  words = str.split(' ');

  // loop trough the words array in the opposite direction and push into wordShuffle array
  for (let i = words.length; i >= 0; i--) {
    wordShuffle.push(words[i]);
  }

  return wordShuffle.join(' ');
}

