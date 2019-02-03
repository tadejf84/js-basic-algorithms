/*
* PALINDROME
* a word, phrase, or sequence that reads the same backwards as forwards
*/
function checkIfPalindrome(str) {
  let strSplit = [],
      strReverse = [];

  // get only alphanumeric chars, to lower case and split string to array
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  const len = str.length;
  strSplit = str.split('');

  // initial input check
  if ( len < 1 ) { return 'Invalid input!'; }
  if ( len === 1) { return true; }

  // reverse string
  strReverse = strSplit.reverse();

  // compare the two strings
  return str === strReverse.join('') ? true : false;

}

