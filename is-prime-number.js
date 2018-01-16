function isPrimeNumber(num) {

  if (typeof num !== 'number') {
    return 'This is not a number!';
  }

  if (num === 1) {
    return true;
  }
  if (num === 2) {
    return false;
  }

  for (var i=2; i < num; i++ ) {
    if (num%i === 0 ) {
      return false;
    }
  }
  return true;
}

var para = document.querySelector('p');
//para.innerHTML = isPrimeNumber(2);
