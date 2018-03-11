function removeDuplicateLettersFromString(str) {
  let el,
      exists = {},
      output = [];

  /* only alpha numerical, to lowercase, split to array */
  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase().split('');

  /*
  loop through the array
  if element does not exist, push into output array
  */
  for (let i of str) {
    el = i;
    if(!exists[el]) {
      output.push(el);
      exists[el] = true;
    }
  }

  /* join array to string */
  return output.join('');
}

var para = document.querySelector('p');
var example = 'this is an example sentence';
// para.innerHTML = removeDuplicateLettersFromString(example);
