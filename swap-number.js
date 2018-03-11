function swapNum(a, b) {

  // with temp
  // let temp;
  // temp = a;
  // a = b;
  // b = temp;

  // without temp
  b = b - a;
  a = a + b;
  b = a - b;

  return 'swapped first = ' + a + ', second = ' + b;
}

var para = document.querySelector('p');
// para.innerHTML = swapNum(5, 3);
