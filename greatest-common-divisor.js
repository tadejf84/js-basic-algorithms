function greatestCommonDiv(num1, num2) {
  var i;
  var div = 0;

  if (num1 === 0 || num2 === 0) {
    div = 'null';
  }

  for (i = 0; i <= num1; i++) {
    if (num1%i === 0 && num2%i === 0) {
      div = i;
    }
  }
  return div;
}

var para = document.querySelector('p');
//para.innerHTML = greatestCommonDiv(21, 14);
