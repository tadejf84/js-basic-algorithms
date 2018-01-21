function isPermutation(str1, str2) {

  return str1.split('').sort().join('') === str2.split('').sort().join('');

}

var para = document.querySelector('p');

// para.innerHTML = isPermutation('test', 'tset');
