function isPrimeNumber(num) {

  /* check user input */
  if (typeof num !== 'number') { return 'Input not a number!'; }

  if (num === 1) { return true; }
  if (num === 2) { return false; }

  for (let i = 2; i < num; i++ ) {
    if (num % i === 0 ) {
      return false;
    }
  }
  return true;
}

var para = document.querySelector('p');
// para.innerHTML = isPrimeNumber(17);
