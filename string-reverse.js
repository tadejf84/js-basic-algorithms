/*
* reverse a string
*/
function stringReverse(str) {
  let output = '';
  const len = str.length;

  // initial check of user input
  if (typeof str !== 'string' ) return 'Invalid input! Not a string.';
  if (!str) return 'Invalid input! Empty string.';
  if (len < 2 ) return str;

  // loop through in opposite direction
  for (var i = len - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}

