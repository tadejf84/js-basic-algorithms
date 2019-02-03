/*
* remove duplicate characters from string
*/
function removeDuplicateLettersFromString(str) {
  let el,
      exists = {},
      output = [];

  // only alpha numerical, to lowercase, split to array
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase().split('');

  // push only unique chars to arr
  for (let i of str) {
    el = i;
    if(!exists[el]) {
      output.push(el);
      exists[el] = true;
    }
  }

  return output.join('');
}

