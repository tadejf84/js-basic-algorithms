function shuffle(str) {
  str = str.split(' ');

  var wordShuffle = [];

  for (i = str.length; i >= 0; i--) {
    wordShuffle.push(str[i]);
  }

  return wordShuffle.join(' ');

}

var para = document.querySelector('p');

// para.innerHTML = shuffle('krneki test prav zares');
