function removeDuplicateLettersFromString(str) {
  str = str.split('');
  var len = str.length;
  var i, el;
  var exists = {};
  var output = [];

  for (i = 0; i < len; i++) {
    el = str[i];
    if(!exists[el] && el !== ' ') {
      output.push(el);
      exists[el] = true;
    }
  }

  return output.join('');

}


var para = document.querySelector('p');
var example = 'this is an example sentence';
// para.innerHTML = removeDuplicateLettersFromString(example);
