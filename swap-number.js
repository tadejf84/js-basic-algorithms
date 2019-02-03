/*
* swap a number
*/
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

  return [a, b];
}


