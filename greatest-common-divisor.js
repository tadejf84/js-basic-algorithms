function greatestCommonDiv(num1, num2) {
  let div = 0;

  /* check user input */
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Input not a number!';
  }
  if (num1 === 0 || num2 === 0) { div = 'null'; }

  for (let i = 0; i <= num1; i++) {
    if (num1%i === 0 && num2%i === 0) {
      div = i;
    }
  }
  return div;
}

var para = document.querySelector('p');
// para.innerHTML = greatestCommonDiv(7, 21);
