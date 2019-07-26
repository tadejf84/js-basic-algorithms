/*
* PALINDROME
* a word, phrase, or sequence that reads the same backwards as forwards
*/
function checkIfPalindrome(str) {
  let strSplit = [],
      strReverse = [];

  // initial input check
  if ( str.length < 1 ) return 'Invalid input!';
  if ( str.length === 1) return true;

  // get only alphanumeric chars, to lower case and split string to array
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  strSplit = str.split('');

  // reverse string
  strReverse = strSplit.reverse();

  // compare the two strings
  return str === strReverse.join('') ? true : false;
}

