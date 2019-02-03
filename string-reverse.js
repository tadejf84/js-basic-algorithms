/*
* reverse a string
*/
function stringReverse(str) {
  let output = '';

  // initial check of user input
  if (!str) { return 'Invalid input! Empty string.'; }
  if (typeof str !== 'string' ) { return 'Invalid input! Not a string.'; }
  if(str.length < 2 ) { return str; }

  // loop through in opposite direction
  for (var i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}

