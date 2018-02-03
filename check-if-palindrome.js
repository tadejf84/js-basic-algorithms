/*
PALINDROME
a word, phrase, or sequence that reads the same backwards as forwards,
*/

function checkIfPalindrome(str) {
  // GET ONLY ALPHANUMERIC CHARACTERS AND TO LOWERCASE
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();

  // DEFINE VARIABLES
  var strSplit = str.split('');
  var strReverse = [];
  var i;
  var len = str.length;

  // CHECK IF EMPTY STRING
  if ( str === '' ) {
    return 'invalid input';
  }

  // CHECK IF STRING HAS ONLY 1 CHAR
  if ( len < 2) {
    return true;
  }

  // REVERSE STRING
  for (i = len - 1; i >= 0; i--) {
    strReverse.push(strSplit[i]);
  }

  // COMPARE THE STRINGS
  if (str === strReverse.join('')) {
    return true;
  } else {
    return false;
  }

}

var para = document.querySelector('p');
var example = 'A new order began, a more Roman age bred Rowena.';
// para.innerHTML = checkIfPalindrome(example);
