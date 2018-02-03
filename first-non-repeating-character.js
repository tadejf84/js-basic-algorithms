function firstNonRepeatingChar(str) {
  str = str.split('');
  var count = [];
  var char, i, j;

  for (i=0; i < str.length; i++) {
    char = str[i];
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  for (j in count) {
    if (count[j] === 1) {
      return j;
    }
  }

}

var para = document.querySelector('p');
var example = 'test this awesome sentence';
// para.innerHTML = firstNonRepeatingChar(example);
