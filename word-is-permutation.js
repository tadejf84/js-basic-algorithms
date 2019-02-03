/*
* is word permutation of another word
*/
function isPermutation(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

