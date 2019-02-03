/*
* check if number is prime
*/
function isPrimeNumber(num) {

  // initial input check
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

