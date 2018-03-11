function stringToInt(str) {
  let sum = 0;
  const arr = str.split('');

  // using a for loop
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i] * Math.pow(10, arr.length - i - 1);
  // }

  // using map method
  arr.map((currElement, index) => {
    sum += currElement * Math.pow(10, arr.length - index - 1);
  });

  return sum + ' is a ' + typeof sum;
}

var para = document.querySelector('p');
// para.innerHTML = stringToInt('105');
