function wordShuffle(str) {
  let wordShuffle = []
      words = [];

  /* split string into words array */
  words = str.split(' ');

  /*
  loop trough the words array in the opposite direction
  push into wordShuffle array
  */
  for (let i = words.length; i >= 0; i--) {
    wordShuffle.push(words[i]);
  }

  /* join output array to string */
  return wordShuffle.join(' ');
}

var para = document.querySelector('p');
// para.innerHTML = wordShuffle('test this awesome sentence');
