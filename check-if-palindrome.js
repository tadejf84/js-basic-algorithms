/*
PALINDROME
a word, phrase, or sequence that reads the same backwards as forwards,
*/

function checkIfPalindrome(str) {
  let strSplit = [],
      strReverse = [];

  /* get only alphanumeric chars, to lower case and split string to arary */
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  const len = str.length;
  strSplit = str.split('');

  /* initial input check */
  if ( len < 1 ) { return 'invalid input'; }
  if ( len === 1) { return true; }

  /* reverse string */
  strReverse = strSplit.reverse();

  /* compare the two strings */
  return str === strReverse.join('') ? true : false;

}

var para = document.querySelector('p');
var example = 'A new order began, a more Roman age bred Rowena.';
// para.innerHTML = checkIfPalindrome(example);
